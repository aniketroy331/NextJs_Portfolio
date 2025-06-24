"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from "../header/page";
import Footer from "../footer/page";
import styles from './About.module.css';

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const aboutText = `Hi there!
I'm a passionate and results-driven Full Stack Web Developer with a solid foundation in both front-end and back-end technologies. I specialize in building dynamic, responsive, and intuitive web applications that deliver exceptional user experiences.

On the front end, I craft clean and engaging interfaces using HTML, CSS, and JavaScript, and stay up to date with modern frameworks like React.js and Next.js to create seamless, high-performance applications.

On the back end, I build scalable and efficient server-side solutions using Node.js and Express.js, ensuring robust performance and maintainability. I'm also experienced with both MongoDB and SQL databases, enabling me to design and manage reliable data systems tailored to each project's needs.

I'm continuously learning and evolving with emerging technologies, driven by a deep love for coding and a commitment to excellence in every project I take on.";`

  useEffect(() => {
    const words = aboutText.split(" ");
    const textElement = textRef.current;

    if (!textElement) return;

    // Clear existing content
    textElement.innerHTML = '';

    words.forEach((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word + " ";
      wordSpan.className = styles.word;
      
      // Initial hidden state (30px below, fully transparent)
      wordSpan.style.transform = "translateY(30px)";
      wordSpan.style.opacity = "0";
      wordSpan.style.transition = `
        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s,
        opacity 0.8s ease-out ${index * 0.15}s
      `;
      
      textElement.appendChild(wordSpan);

      // Trigger animation after a small delay
      setTimeout(() => {
        wordSpan.style.transform = "translateY(0)";
        wordSpan.style.opacity = "1";
      }, 50);
    });
  }, []);

  return (
    <>
      <Header />
      
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.right}>
            <Image 
              src="/images/profile_picture.jpg" 
              alt="Aniket Roy"
              width={400}
              height={400}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.left}>
            <h1 className={styles.heading}>About Me</h1>
            <div ref={textRef} className={styles.text}></div>
          </div>
        </div>
      </section>

      <section id="skill" className={styles.skillSection}>
        <div className={styles.skillsContainer}>
          <h1>Skill Set</h1>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <span className={styles.skillName}>HTML</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.html}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>CSS</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.css}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>JavaScript</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.js}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>React.Js</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.react}`}></div>
              </div>
            </div>
                        <div className={styles.skill}>
              <span className={styles.skillName}>Next.Js</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.next}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Python</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.python}`}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>Node.Js</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.node}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Python Selenium</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.selenium}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>MpngoDB Database</span>
              <div className={styles.progressBar}>
                <div className={`${styles.progress} ${styles.mongo}`}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.button}>
          <Link href="/project" className={styles.btn}>
            My Project &gt;&gt;
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
}