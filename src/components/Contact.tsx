import React, { useState } from 'react';
import '../styles/Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const generateCodeOutput = () => {
    if (isSubmitting) {
      return `<span class="comment">// Processing form submission...</span>
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"🔄 Sending message..."</span>);
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"📧 Name: ${formData.name || 'Your Name'}"</span>);
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"📧 Email: ${formData.email || 'your.email@example.com'}"</span>);
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"📧 Subject: ${formData.subject || 'Subject'}"</span>);
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"📧 Message: ${formData.message || 'Your message here...'}"</span>);

<span class="comment">// Simulating network request...</span>
<span class="keyword">await</span> <span class="method">fetch</span>(<span class="string">'/api/contact'</span>, {
  <span class="property">method</span>: <span class="string">'POST'</span>,
  <span class="property">headers</span>: { <span class="string">'Content-Type'</span>: <span class="string">'application/json'</span> },
  <span class="property">body</span>: <span class="method">JSON.stringify</span>({ <span class="property">name</span>, <span class="property">email</span>, <span class="property">subject</span>, <span class="property">message</span> })
});`;
    } else if (isSubmitted) {
      return `<span class="comment">// ✅ Form submission completed successfully!</span>
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"✅ Message sent successfully!"</span>);
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"📧 Response: 200 OK"</span>);
<span class="class">console</span>.<span class="method">log</span>(<span class="string">"⏱️ Processing time: 1.2s"</span>);

<span class="keyword">return</span> {
  <span class="property">status</span>: <span class="string">"success"</span>,
  <span class="property">message</span>: <span class="string">"Thank you for your message! I'll get back to you soon."</span>,
  <span class="property">timestamp</span>: <span class="string">"${new Date().toISOString()}"</span>
};

<span class="comment">// 🎉 Contact form submission completed!</span>`;
    } else {
      return `<span class="keyword">class</span> <span class="class">ContactForm</span> {
  <span class="method">constructor</span>() {
    <span class="keyword">this</span>.<span class="property">name</span> = <span class="string">"${formData.name || 'Your Name'}"</span>;
    <span class="keyword">this</span>.<span class="property">email</span> = <span class="string">"${formData.email || 'your.email@example.com'}"</span>;
    <span class="keyword">this</span>.<span class="property">subject</span> = <span class="string">"${formData.subject || 'Subject'}"</span>;
    <span class="keyword">this</span>.<span class="property">message</span> = <span class="string">\`${formData.message || 'Your message here...'}\`</span>;
  }
  
  <span class="method">sendMessage</span>() {
    <span class="class">console</span>.<span class="method">log</span>(<span class="string">"Sending message..."</span>);
    <span class="class">console</span>.<span class="method">log</span>(<span class="string">"Name:"</span>, <span class="keyword">this</span>.<span class="property">name</span>);
    <span class="class">console</span>.<span class="method">log</span>(<span class="string">"Email:"</span>, <span class="keyword">this</span>.<span class="property">email</span>);
    <span class="class">console</span>.<span class="method">log</span>(<span class="string">"Subject:"</span>, <span class="keyword">this</span>.<span class="property">subject</span>);
    <span class="class">console</span>.<span class="method">log</span>(<span class="string">"Message:"</span>, <span class="keyword">this</span>.<span class="property">message</span>);
    
    <span class="keyword">return</span> {
      <span class="property">status</span>: <span class="string">"success"</span>,
      <span class="property">message</span>: <span class="string">"Message sent successfully!"</span>
    };
  }
}

<span class="keyword">const</span> <span class="property">contact</span> = <span class="keyword">new</span> <span class="class">ContactForm</span>();
<span class="property">contact</span>.<span class="method">sendMessage</span>();`;
    }
  };
  
  return (
    <div className="contact-container">
      <div className="section-header">
        <h2>Get In Touch</h2>
      </div>
      
      <div className="contact-layout">
        {/* Left Side - Contact Form */}
        <div className="contact-form-section">
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Contact Form</h3>
              <div className="form-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter subject" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message" 
                  rows={6} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Code Terminal */}
        <div className="contact-terminal-section">
          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-title">ContactForm.js</div>
              <div className="terminal-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
            </div>
            <div className="terminal-content">
              <pre className="code-output">
                <code dangerouslySetInnerHTML={{ __html: generateCodeOutput() }} />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 