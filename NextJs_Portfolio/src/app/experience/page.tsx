'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Header from "../header/page";
import Footer from "../footer/page";
import styles from './Experience.module.css';

interface Certificate {
  url: string;
  type: 'image' | 'pdf';
}

interface CertificatesData {
  [key: string]: Certificate[];
}

export default function ExperiencePage() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentCompany, setCurrentCompany] = useState('');

  const certificates: CertificatesData = {
    "Vraio Software Solution Pvt. Ltd.": [
      { url:"/images/internship/kpsc.jpg", type: "pdf" },
      { url: "/images/internship/internship.pdf", type: "pdf" }
    ],
    "abigengine": [
      { url:"/images/internship/abigengineproject.jpg", type: "pdf" },
      { url: "/images/internship/internship.pdf", type: "pdf" }
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleViewMore = (companyName: string) => {
    setCurrentCompany(companyName);
    if (certificates[companyName]?.length > 0) {
      setCurrentCertIndex(0);
      setIsModalOpen(true);
    } else {
      alert("No certificates available for this position.");
    }
  };

  const loadCertificate = () => {
    return certificates[currentCompany]?.[currentCertIndex];
  };

  const updateControls = () => {
    return `${currentCertIndex + 1}/${certificates[currentCompany]?.length ?? 0}`;
  };

  const handlePrev = useCallback(() => {
    if (currentCertIndex > 0) {
      setCurrentCertIndex(currentCertIndex - 1);
    }
  }, [currentCertIndex]);

  const handleNext = useCallback(() => {
    if (currentCompany && currentCertIndex < certificates[currentCompany].length - 1) {
      setCurrentCertIndex(currentCertIndex + 1);
    }
  }, [currentCertIndex, currentCompany]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        switch (e.key) {
          case "ArrowLeft":
            if (currentCertIndex > 0) handlePrev();
            break;
          case "ArrowRight":
            if (currentCompany && currentCertIndex < certificates[currentCompany].length - 1) handleNext();
            break;
          case "Escape":
            closeModal();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentCertIndex, currentCompany, handlePrev, handleNext, closeModal]);

  const currentCertificate = loadCertificate();
  const counterText = updateControls();

  return (
    <>
      <Header />
      <section className={styles.workexp}>
        <h1 className={styles.headtext}>Work Experience</h1>

        {/* Experience Card 1 */}
        <div className={styles.experienceContainer}>
          <div className={`${styles.experienceCard} ${isCardVisible ? styles.visible : ''}`}>
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.jobTitle}>Web Developer</h2>
                <h3 className={styles.companyName}>Vraio Software Solution Pvt. Ltd.</h3>
                <div className={styles.dateRange}>
                  <i className="fas fa-calendar-alt"></i>
                  <span>15th August 2024 - 8th November 2024</span>
                </div>
              </div>
              <Image 
                src="/images/internship/vraio_logo.png" 
                alt="Company Logo" 
                className={styles.companyLogo}
                width={70}
                height={70}
              />
            </div>

            <p className={styles.jobDescription}>
              Description: The KPSC Portfolio Website project showcases professional profiles, achievements, and skills of KPSC candidates, providing a user-friendly platform for recruiters to explore and connect with potential candidates.
            </p>

            <div className={styles.skills}>
              <span className={styles.skillTag}>HTML5</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>Netlify (Hosting)</span>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.location}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Bangalore World Trade Center, Malleshwaram, Bengaluru-560055, CA (Remote)</span>
              </div>
              <button 
                className={styles.viewMore}
                onClick={() => handleViewMore("Vraio Software Solution Pvt. Ltd.")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className={styles.experienceContainer}>
          <div className={`${styles.experienceCard} ${isCardVisible ? styles.visible : ''}`}>
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.jobTitle}>Full Stack Web Developer</h2>
                <h3 className={styles.companyName}>Website URL: abigengine.com</h3>
                <div className={styles.dateRange}>
                  <i className="fas fa-calendar-alt"></i>
                  <span>3rd September 2024 - 7th November 2024</span>
                </div>
              </div>
              <Image 
                src="/images/internship/abigengine.jpg" 
                alt="Company Logo" 
                className={styles.companyLogo}
                width={70}
                height={70}
              />
            </div>

            <p className={styles.jobDescription}>
              Description: This project involves the full stack web development of a dynamic and user-friendly vehicle spare parts website. The platform allows users to browse, search, and purchase spare parts for various vehicle models. The front end is built using HTML, CSS, JavaScript to deliver a responsive and intuitive interface. The back end is powered by Node.js and Express.js, with MongoDB handling data storage for products, users, and orders. Key features include user authentication, product filtering, a shopping cart system, and order management, ensuring a seamless eCommerce experience.
            </p>

            <div className={styles.skills}>
              <span className={styles.skillTag}>HTML5</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>Node.js</span>
              <span className={styles.skillTag}>Express.js</span>
              <span className={styles.skillTag}>MongoDB</span>
              <span className={styles.skillTag}>Render (Backend Hosting)</span>
              <span className={styles.skillTag}>Netlify (Frontend Hosting)</span>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.location}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Near Highway Flyover, Krishnagar, West Bengal, India</span>
              </div>
              <button 
                className={styles.viewMore}
                onClick={() => handleViewMore("abigengine")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {isModalOpen && (
          <div className={styles.certificateModal}>
            <div className={styles.modalContent}>
              <span className={styles.closeModal} onClick={closeModal}>&times;</span>
              <div className={styles.mediaContainer}>
                {currentCertificate?.type === "image" ? (
                  <Image
                    id="certificateImage"
                    src={currentCertificate.url}
                    alt="Certificate"
                    className={styles.certificateImage}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                ) : (
                  <iframe
                    id="certificatePdf"
                    src={currentCertificate?.url}
                    className={styles.certificatePdf}
                  />
                )}
              </div>
              <div className={styles.modalControls}>
                <button 
                  className={styles.prevCert}
                  onClick={handlePrev}
                  disabled={currentCertIndex === 0}
                >
                  ❮ Previous
                </button>
                <span className={styles.certCounter}>{counterText}</span>
                <button 
                  className={styles.nextCert}
                  onClick={handleNext}
                  disabled={currentCompany && currentCertIndex === certificates[currentCompany].length - 1}
                >
                  Next ❯
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
