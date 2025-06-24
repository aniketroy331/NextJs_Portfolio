"use client";

import { useEffect, useState } from 'react';
import Header from "../header/page";
import Footer from "../footer/page";

interface Project {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      type: "frontend",
      title: "Personal Portfolio Frontend",
      description: "The My Personal Portfolio project is a professional website showcasing my skills, projects, and achievements, designed to highlight my expertise and attract potential employers or collaborators.",
      image: "/images/project/personal_portfolio.png",
      demoUrl: "https://aniketroy.netlify.app/"
    },
    {
      id: 2,
      type: "python",
      title: "Website Scrapping using Python Selenium",
      description: "This project automates website data extraction using web scraping techniques and stores the collected information in an Excel file. It efficiently gathers structured data from web pages, enabling easy analysis, organization, and accessibility for further processing or reporting.",
      image: "/images/project/webscraper.jpeg"
    },
    {
      id: 3,
      type: "python",
      title: "Chatbot using Python",
      description: "The AI Chatbot project is a Python-based application capable of performing tasks like answering queries, providing recommendations, and automating responses using natural language processing and machine learning techniques.",
      image: "/images/project/chatbot.jpeg"
    },
    {
      id: 4,
      type: "frontend",
      title: "Temperature Converter",
      description: "The Temperature Converter project is a simple tool designed to convert temperatures between Celsius, Fahrenheit, and Kelvin scales. It provides quick, accurate conversions, making it useful for scientific, educational, and everyday temperature measurement needs.",
      image: "/images/project/tempconverter.png",
      demoUrl: "https://changetemperatures.netlify.app/"
    },
    {
      id: 5,
      type: "python",
      title: "QR-Maker Bot using Python",
      description: "A QR Maker Bot built with Python that generates QR codes from text or URLs. It provides a simple interface for creating, saving, and sharing QR codes instantly. Ideal for quick access to links, contact details, or digital information.",
      image: "/images/project/Qr_maker.jpeg"
    },
    {
      id: 6,
      type: "python",
      title: "QR-Scanner Bot using Python",
      description: "A QR Scanner Bot built with Python that scans and decodes QR codes from images or live camera input. It quickly extracts URLs, text, or data, making it useful for instant access to information, authentication, and digital interactions.",
      image: "/images/project/QR_decode.jpeg"
    },
    {
      id: 7,
      type: "frontend",
      title: "Weather Data Fetch via API",
      description: "The Weather Data Fetch via API project retrieves real-time weather information like temperature, humidity, wind speed, and forecasts for user-specified locations, providing accurate and up-to-date weather via third-party API.",
      image: "/images/project/weather_data.png",
      demoUrl: "https://getsweather.netlify.app/"
    },
    {
      id: 8,
      type: "fullstack",
      title: "Full Stack E-Commerce Website",
      description: "This E-Commerce project features admin and user panels with product listings, cart, and add product functionalities.Username/password for admin: admin/admin123.",
      image: "/images/project/ecommerce.png",
      demoUrl: "https://aniketroy-ecommerce.vercel.app/"
    },
    {
      id: 9,
      type: "frontend",
      title: "Basic Todo List",
      description: "The Basic To-Do List project is a simple task management tool that allows users to add, edit, mark as complete, and delete tasks. It helps organize daily activities efficiently with a clean and user-friendly interface.",
      image: "/images/project/todo.png",
      demoUrl: "https://dockets.netlify.app/"
    },
    {
      id: 10,
      type: "frontend",
      title: "KPSC Portfolio Website",
      description: "The KPSC Portfolio Website project showcases professional profiles, achievements, and skills of KPSC candidates, providing a user-friendly platform for recruiters to explore and connect with potential candidates.",
      image: "/images/project/kpsc.png",
      demoUrl: "https://kpsc-portfolio.netlify.app/"
    },
    {
      id: 11,
      type: "frontend",
      title: "Netflix Clone",
      description: "The Netflix Frontend Clone project replicates the iconic Netflix user interface, featuring a responsive design, and seamless navigation. Built using HTML, CSS, and JavaScript, it mimics the streaming platform's layout.",
      image: "/images/project/netflix.png",
      demoUrl: "https://net-flixclone2002.netlify.app/"
    },
    {
      id: 12,
      type: "fullstack",
      title: "Library Management System",
      description: "The Library Management System streamlines book tracking, borrower management, and inventory control. It enables efficient book issuance, returns, and catalog organization. Designed for libraries, it improves accessibility, reduces manual effort, and ensures seamless record-keeping for both librarians and users.",
      image: "/images/project/library.jpeg"
    },
    {
      id: 13,
      type: "frontend",
      title: "Landing Page",
      description: "A sleek and responsive ExpressVPN landing page built with HTML, CSS, and JavaScript. It features an eye-catching design, compelling call-to-action buttons, and informative sections, ensuring a seamless user experience.",
      image: "/images/project/landing.png",
      demoUrl: "https://landing0vpn.netlify.app/"
    },
    {
      id: 14,
      type: "fullstack",
      title: "Learning Management System",
      description: "The Online Learning Management System (LMS) facilitates digital education by providing course management, student tracking, and interactive learning tools. It enables seamless content delivery, assessments, and communication, enhancing the learning experience for students and educators in a structured online environment.",
      image: "/images/project/learning.jpeg"
    },
    {
      id: 15,
      type: "frontend",
      title: "Linkedin Design Clone",
      description: "A LinkedIn frontend clone built using HTML, CSS, and JavaScript. It replicates LinkedIn's UI with a responsive layout and modern design elements. Features include a navbar, feed, sidebar, and profile sections.",
      image: "/images/project/linkedin.png",
      demoUrl: "https://superlative-linked-452571.netlify.app/"
    },
    {
      id: 16,
      type: "frontend",
      title: "Real Time Admin database with SheetDB.io API integration",
      description: "An admin dashboard using HTML, CSS, and JavaScript that fetches real-time data via SheetDB.io API, displays entries, updates dynamically, and allows users to delete records efficiently.",
      image: "/images/project/sheetdb_project.png",
      demoUrl: "https://admin-database-with-sheetdb-api.netlify.app/"
    }
  ]);

  const filteredProjects = filter 
    ? projects.filter(project => project.type === filter)
    : projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      projectCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [filteredProjects]);

  return (
    <>
      <Header />

      <section className="projects">
        <h1 className="projects-title">My Projects</h1>
        <div className="search-filter">
          <p id="filter">Filter My Project List:</p>
          <select 
            id="projectTypeFilter" 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All</option>
            <option value="frontend">Frontend</option>
            <option value="reactjs">React.Js</option>
            <option value="nextjs">Next.Js</option>
            <option value="fullstack">Full Stack</option>
            <option value="python">Python</option>
          </select>
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card" 
                data-type={project.type}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>Description: {project.description}</p>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="project-link" 
                      id="space" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results-message">
              Sorry, no search results found.
            </div>
          )}
        </div>
      </section>

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
        }

        .projects {
          padding: 2rem;
          text-align: center;
        }

        .projects-title {
            text-align: center;
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 2rem;
            color: white;
            background: linear-gradient(to right, #4200fc, #f901fc);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          justify-content: center;
        }

        .project-card {
          background: #21103c;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(171, 5, 5, 0.7);
          overflow: hidden;
          transition: transform 1.5s ease, box-shadow 1.5s ease, opacity 1.5s ease, filter 2s ease;
          opacity: 0;
          transform: translateY(50px);
          filter: blur(30px);
        }

        .project-card.show {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .project-card:hover {
          cursor: pointer;
          transform: scale(1.05) !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .project-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .project-info {
          padding: 1rem;
        }

        .project-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .project-info p {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .project-link {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(to left, #4200fc, #f901fc);
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .project-link:hover {
          background: linear-gradient(to left, #f901fc, #4200fc);
        }

        .search-filter {
          width: 100%;
        }

        .filter-select {
          height: 2rem;
          width: 20%;
          margin-bottom: 4rem;
          background-color: var(--bg);
          color: white;
          font-weight: 500;
          border-radius: 10px;
          padding: 0 10px;
          border: 1px solid #555;
        }

        #filter {
          font-size: 25px;
          background: linear-gradient(to top right, #4200fc, #f901fc);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .no-results-message {
          grid-column: 1 / -1;
          text-align: center;
          padding: 2rem;
          font-size: 1.2rem;
          color: #f901fc;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
          .filter-select {
            width: 50%;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .filter-select {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
}