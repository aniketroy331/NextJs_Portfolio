import Image from "next/image";
import Header from "./header/page";
import styles from "../app/page.module.css";
import Footer from "./footer/page";
import { FaFacebookF, FaLinkedin, FaInstagram, FaGithub, FaArrowDown } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Header />
      <marquee className={styles.notes}>Coming soon: A curated collection of my personal study notes to support and inspire fellow learners</marquee>
      <>
      <section className={styles.homeSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heroText}>
              <h1>I am <span>Aniket Roy</span></h1>
              <h1>Full Stack Web Developer</h1>
              <p>
                  Hi, I&apos;m a passionate full-stack web developer currently gaining real-world experience through an internship. I love turning ideas into interactive, user-friendly web applications using technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB. Every project I build reflects my drive to create smooth digital experiences that balance performance, design, and usability. I&apos;m always exploring new ways to grow and improve in this exciting field.
              </p>
              <p>Take a look at my full portfolio to see the projects I&apos;ve brought to life!</p>
              <div className={styles.socialLinks}>
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
              <div className={styles.button}>
                <a href="/images/pdfs/Aniket_Roy_B.Tech_CSE_CV.pdf" className={styles.btn} download>
                  Download CV <FaArrowDown />
                </a>
              </div>
            </div>
            <div className={styles.heroImg}>
              <Image 
                src="/images/home_picture.jpg" 
                alt="Profile picture" 
                fill
                priority
                className={styles.profileImage}
                sizes="(max-width: 954px) 60vw, 30vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
    <Footer />
    </div>
  );
}
