"use client";

import { useEffect } from 'react';
import Header from "../header/page";
import Footer from "../footer/page";
import styles from './Education.module.css';

export default function Education() {
  useEffect(() => {
    const events = document.querySelectorAll(`.${styles.event}`);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    events.forEach(event => observer.observe(event));

    return () => events.forEach(event => observer.unobserve(event));
  }, []);

  return (
    <>
      <Header />
      
      <div className={styles.educationWrapper}>
        <h1 className={styles.pageTitle}>My Education</h1>
        <div className={styles.timeline}>
          {/* College Details */}
          <div className={`${styles.event} ${styles.left}`}>
            <div className={styles.waveContainer}>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
            </div>
            <div className={styles.content}>
              <h2 className='heading'>Adamas University</h2>
              <div className={styles.details}>
                <p><span>Degree:</span> Bachelor of Technology</p>
                <p><span>Course:</span> Computer Science and Engineering (Core)</p>
                <p><span>CGPA:</span> 8.200</p>
                <p><span>Passout Year:</span> 2021 - 2025</p>
              </div>
            </div>
          </div>

          {/* 12th Class Details */}
          <div className={`${styles.event} ${styles.right}`}>
            <div className={styles.waveContainer}>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
            </div>
            <div className={styles.content}>
              <h2 className='heading'>Akui Union High School(H.S.)</h2>
              <div className={styles.details}>
                <p><span>Education:</span> Higher Secondary Education</p>
                <p><span>Stream:</span> Science(PCM)</p>
                <p><span>Percentage:</span> 84.4%</p>
                <p><span>Passout Year:</span> 2019 - 2020</p>
              </div>
            </div>
          </div>

          {/* 10th Class Details */}
          <div className={`${styles.event} ${styles.left}`}>
            <div className={styles.waveContainer}>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
            </div>
            <div className={styles.content}>
              <h2 className='heading'>Akui Union High School(H.S.)</h2>
              <div className={styles.details}>
                <p><span>Education:</span> Secondary</p>
                <p><span>Percentage:</span> 80.43%</p>
                <p><span>Passout Year:</span> 2018 - 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}