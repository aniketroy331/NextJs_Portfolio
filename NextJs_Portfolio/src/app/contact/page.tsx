"use client"; 

import Head from 'next/head';
import { useEffect} from 'react';
import Header from "../header/page";
import Footer from "../footer/page";
import Image from 'next/image';
import { FaFacebookF, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt,  FaSpinner, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://sheetdb.io/api/v1/vxkxt4adjy8tl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            FirstName: formData.firstName,
            LastName: formData.lastName,
            Email: formData.email,
            PhoneNumber: formData.phone,
            Message: formData.message
          }
        })
      });

      if (response.ok) {
        document.getElementById('successPopup').style.display = 'block';
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        document.getElementById('faliurePopup').style.display = 'block';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('faliurePopup').style.display = 'block';
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopupsuccess = () => {
    document.getElementById('successPopup').style.display = 'none';
  };
  
  const closePopupfaliure = () => {
    document.getElementById('faliurePopup').style.display = 'none';
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <Header />
      
      <div className="container">
        <div className="contact-container">
          <div className="contact-panels">
            <div className="left-side">
              <Image src="/images/formal_profile.jpg" alt="Profile Picture"/>
              <h2>Get in Touch</h2>
              <p>Feel free to reach out to me for any questions or opportunities.</p>
              
              <div className="contact-info">
                <div className="socialLinks">
                <a href="https://www.facebook.com/?ref=homescreenpwa" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/in/aniketroy10100/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/aniketroy_rowdy/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://github.com/Aniketroy2002" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>

                <div>
                    <FaEnvelope />
                  <span className='text'>
                    <a href="mailto:aniketroy10100@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                      aniketroy10100@gmail.com
                    </a>
                  </span>
                </div>
                <div>
                  <FaMapMarkerAlt />
                  <span className='text'>Akui * Bankura, 722201</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Right Side Form */}
            <div className="right-side">
              <h2>Contact Me</h2>
              <p>Have a question or want to work together? Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} id="contactForm" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number (optional)"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    rows="50"
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  id="send-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="spin" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div id="successPopup">
          <FaCheckCircle className="text-green-500 text-xl" id='check' />
          <h3 className="green">Message sent successfully!</h3>
          <h3 className="green">Thanks for contacting me.</h3>
          <button onClick={closePopupsuccess}>Close</button>
        </div> 

        <div id="faliurePopup">
          <FaTimesCircle className="text-red-500 text-xl" id='cross' />
          <h3 className="red">Unable to send the message.</h3>
          <h3 className="red">Please try again later.</h3>
          <button onClick={closePopupfaliure}>Close</button>
        </div> 
      </div>
      
      <Footer />
      
      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
        }

        :root {
          --width: 90%;
          --bg: #0f051e;
          --primary-color: #0f051e;
          --secondary-color: #0f051e;
          --text-color: #f0f0f0;
        }

        body {
          background: var(--bg);
          color: var(--text-color);
          overflow-x: hidden;
          line-height: 1.6;
        }
        h2 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 15px;
          background: linear-gradient(to left, #4200fc, #f901fc);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .container {
          max-width: 1200px;
          margin: 50px auto;
          padding: 20px;
          perspective: 2000px;
        }
        .contact-container {
          position: relative;
          height: 2px; 
          overflow: hidden;
          animation: expandContainer 0.5s forwards;
        }
        .contact-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
          width: 0px;
          height: 100%;
          background: #281F52;
          z-index: 10;
        }

        .contact-panels {
          display: flex;
          transform-style: preserve-3d;
          transform-origin: center;
          transform: rotateY(90deg);
          border: 2px solid;
          border-image-source: linear-gradient(to right,#4200fc, black,black,#ff1493);
          border-image-slice:1;
          opacity: 0;
          animation: bookOpen 1s cubic-bezier(0.42, 0, 0.58, 1) forwards 1s;
        }
        .left-side, .right-side {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .left-side {
          transform-origin: right center;
        }

        .right-side {
          transform-origin: left center;
        }

        .contact-container {
          background:#0f051e;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .left-side {
          flex: 1;
          padding: 40px;
          background: radial-gradient(circle, rgba(252, 0, 255, 0.1) 0%, transparent 70%);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .left-side img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 3px solid rgb(8, 0, 250);
          box-shadow: 0 0 15px rgb(255, 152, 252);
        }

        .left-side h2 {
          margin-bottom: 20px;
          font-size: 28px;
        }

        .left-side p {
          margin-bottom: 30px;
          font-size: 16px;
          opacity: 0.9;
        }

        .socialLinks {
            display: flex;
            font-size: 1.5rem;
            gap: 2rem;
            margin-bottom: 30px;
        }

        .socialLinks a {
          color: white;
          padding: 12px;
          border: 2px solid rgb(255, 152, 252);
          border-radius: 50%;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 50px;
          height: 50px;
        }

        .socialLinks a:hover {
          color: blue;
          background-color: black;
          box-shadow: 0 0 15px blue, 0 0 45px rgb(255, 152, 252);
          transform: scale(1.1);
        }

        .text{
            padding-left: 1rem;
        }

        .contact-info {
          width: 100%;
        }

        .contact-info div {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .contact-info i {
          margin-right: 10px;
          font-size: 20px;
        }

        .right-side {
          border-left: 1px solid;
          border-image-source: linear-gradient(to bottom, #4200fc, #ff1493);
          border-image-slice: 1;
          flex: 1;
          padding: 40px;
          background: radial-gradient(circle, rgba(252, 0, 255, 0.1) 0%, transparent 70%);
        }

        .right-side h2 {
          margin-bottom: 20px;
          font-size: 28px;
          color:white;
        }

        .right-side p {
          margin-bottom: 30px;
          color: white;
        }

        .form-group {
          margin-bottom: 20px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          border-image-source: linear-gradient(to right, #4200fc, #ff1493);
          border-image-slice: 1;
          border-radius: 5px;
          font-size: 16px;
          transition: border 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
        }

        .form-group textarea {
          color: white;
          height: 120px;
          resize: vertical;
        }
        .form-group input{
          color: white;
        }
        .form-group ::placeholder{
          color: white;
        }
        .optional {
          color:red;
          font-weight: normal;
          font-size:7px;
        }
        .ph{
          color: white;
          font-weight: normal;
          font-size:7px;
        }
        #send-btn {
          width: 21%;
          background: linear-gradient(45deg, blue, #fc00ff);
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 219, 222, 0.3);
          position: relative;
          overflow: hidden;
        }
        #send-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }
        #send-btn:hover::before {
          left: 100%;
        }
        #send-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(252, 0, 255, 0.4);
        }

        #flname{
          width: 100%;
          display: flex;
        }

        .green{
          color: rgb(92, 247, 81);
        }
        .red{
          color: red;
        }
        #check{
          color: rgb(39, 201, 39);
          font-size: 3rem;
        }
        #cross{
            color: red;
            font-size: 3rem;
          }
        #successPopup, #faliurePopup{
          min-height: 20%;
          min-width:30%;
          text-align: center;
          display:none; 
          position: fixed; 
          background: linear-gradient(to left, #923d94,#331f6b);
          padding: 20px;
          border-radius: 7px;
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          padding: 20px; 
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
          
        #successPopup button, #faliurePopup button{
            margin-top: 50px;
            padding: 10px 30px;
            color: white;
            font-weight: 800;
            border:2px solid rgb(208, 198, 198);
            border-radius: 3px;
            cursor: pointer;
            background: linear-gradient(to right, blue 0%, blue 100%) no-repeat left; 
            background-size: 0% 100%; 
            background-position: left;
            background-repeat: no-repeat; 
            transition: background 0.5s ease, color 0.5s ease;
        }
          
        #successPopup button:hover, #faliurePopup button:hover{
          background-size: 100% 100%; 
            color:white;
        }

        .form-row {
          display: flex;
          gap: 20px;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .form-group {
          margin-bottom: 25px;
          position: relative;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #f0f0f0;
          font-size: 14px;
          font-weight: 500;
        }
        
        .required {
          color: #ff4757;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 15px;
          color: white;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6c5ce7;
          box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
        }
        
        .form-group input.error,
        .form-group textarea.error {
          border-color: #ff4757;
        }
        
        .error-message {
          display: block;
          margin-top: 6px;
          color: #ff4757;
          font-size: 13px;
        }
        
        textarea {
          min-height: 150px;
          resize: vertical;
        }
        
        #send-btn {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        #send-btn:hover {
          transform: translateY(-2px);
        }
        
        #send-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }

        
        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
            gap: 0;
          }
        }

        @media (max-width: 768px) {
            .contact-panels {
                flex-direction: column;
            }
            .left-side, .right-side {
                padding: 30px;
            }
            #flname{
                display: block;
            }
            #send-btn{
                width: 50%;
            }
            @keyframes bookOpen {
                0% {
                    transform: rotateY(90deg);
                    opacity: 0;
                }
                100% {
                    transform: rotateY(0deg);
                    opacity: 1;
                }
            }
        }

        @keyframes expandContainer {
            0% {
                height: 2px;
            }
            100% {
                height: auto;
            }
        }

        @keyframes bookOpen {
            0% {
                transform: rotateY(90deg);
                opacity: 0;
            }
            100% {
                transform: rotateY(0deg);
                opacity: 1;
            }
        }
      `}</style>
    </>
  );
}
