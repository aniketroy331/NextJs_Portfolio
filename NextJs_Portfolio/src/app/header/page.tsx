"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && window.innerWidth <= 768) {
        const target = event.target as HTMLElement;
        if (!target.closest('.navbar') && !target.closest('.navbar-toggle')) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (pagePath: string) => {
    if (pagePath === '/' && pathname === '/') return true;
    if (pagePath !== '/' && pathname.startsWith(pagePath)) return true;
    return false;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/project', label: 'Project' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact Me' }
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link href="/">Aniket Roy</Link>
        </div>
        <div className={styles.lt}>
          <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.active : ''}`}>
            {navLinks.map((link) => (
              <li 
                key={link.path} 
                className={styles.navbarItem}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link 
                  href={link.path} 
                  className={`${styles.navbarLink} ${
                    (hoveredLink === link.path || isActive(link.path)) ? styles.active : ''
                  }`}
                >
                  {link.label}
                  <span className={`${styles.underline} ${
                    (hoveredLink === link.path || isActive(link.path)) ? styles.visible : ''
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div 
          className={`${styles.navbarToggle} ${isMenuOpen ? styles.active : ''}`} 
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
      <div className={styles.element}></div>
    </>
  );
}