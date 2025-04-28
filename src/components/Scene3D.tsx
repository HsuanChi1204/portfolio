import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/models/man.glb');
  const modelRef = useRef<THREE.Group>();
  const { viewport } = useThree();

  useEffect(() => {
    // 確保模型可見
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ mouse }) => {
    if (modelRef.current) {
      // 計算滑鼠位置相對於視窗的比例
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;

      // 緩慢轉向滑鼠位置
      const targetRotationX = -mouseY * 0.1; // 上下看
      const targetRotationY = mouseX * 0.1;  // 左右看

      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetRotationX,
        0.1
      );
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotationY,
        0.1
      );
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.2}
      position={[0, -5, 0]}
    />
  );
}

const Scene3D: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* 主要環境光 */}
      <ambientLight intensity={0.8} />
      
      {/* 前方打光 */}
      <directionalLight
        position={[0, 2, 5]}
        intensity={1}
        castShadow
      />
      
      {/* 兩側補光 */}
      <pointLight position={[-5, 0, 0]} intensity={0.5} />
      <pointLight position={[5, 0, 0]} intensity={0.5} />

      <Model />
    </Canvas>
  );
};

// 預加載模型
useGLTF.preload('/models/man.glb');

export default Scene3D; 