import Link from 'next/link';
import { 
  FaEnvelope, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaGithub 
} from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.logoText}>Aniket Roy</h2>
          <div className={styles.contact}>
            <span>
              <FaEnvelope /> &nbsp;
              <a 
                href="mailto:aniketroy10100@gmail.com" 
                className={styles.emailLink}
              >
                aniketroy10100@gmail.com
              </a>
            </span>
          </div>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/?ref=homescreenpwa" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/aniketroy10100/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/aniketroy_rowdy/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/Aniketroy2002" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h2>Quick Links</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/skill">Skill & Experience</Link></li>
            <li><Link href="/contact">Contact Me</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h2>Learn from W3 School</h2>
          <ul>
            <li><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">HTML</a></li>
            <li><a href="https://www.w3schools.com/Css/" target="_blank" rel="noopener noreferrer">CSS</a></li>
            <li><a href="https://www.w3schools.com/js/DEFAULT.asp" target="_blank" rel="noopener noreferrer">Javascript</a></li>
            <li><a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer">Python</a></li>
            <li><a href="https://www.w3schools.com/nodejs/default.asp" target="_blank" rel="noopener noreferrer">Node.Js</a></li>
            <li><a href="https://www.w3schools.com/mongodb/index.php" target="_blank" rel="noopener noreferrer">MongoDB</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h2>Download</h2>
          <ul>
            <li><a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></li>
            <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python</a></li>
            <li><a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Node.Js</a></li>
            <li><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git</a></li>
            <li><a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">MongoDB</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; All Copyrights reserved || {new Date().getFullYear()} || Designed by Aniket Roy.
      </div>
    </footer>
  );
}