import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "💼 WorkMapper – Job Matching Platform",
    desc: "A React-based skill-based job matching platform that helps users discover jobs aligned with their skills and experience.",
    ss: "/workmapper.png",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    live: "https://workmapper.vercel.app",
    code: "https://github.com/mukesh417/workmapper",
  },
  {
    title: "🎨 Imagify AI – Image Generator (MERN)",
    desc: "A full stack MERN application that generates AI images from text prompts using the ClipDrop API.",
    ss: "/imagify.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "ClipDrop API"],
    live: "https://imagify-ai-pink.vercel.app/",
    code: "https://github.com/mukesh417/imagify-ai",
  },
  {
    title: "🎮 Tic Tac Toe Game",
    desc: "A React JS based Tic Tac Toe game with winner detection, draw handling, and turn-based gameplay.",
    ss: "/tictactoe.png",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://tic-tac-toe-flame-iota-53.vercel.app/",
    code: "https://github.com/mukesh417/tic-tac-toe",
  },

  {
    title: "💼 Portfolio Website",
    desc: "A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.",
    ss: "/portfolio.jpg",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    live: "https://mukesh-portfolio-sigma.vercel.app/projects",
    code: "https://github.com/mukesh417/mukesh-portfolio",
  },
  {
    title: "🧮 Calculator App",
    desc: "A responsive calculator built with HTML, CSS, and JavaScript featuring keyboard support and input validation.",
    ss: "/calculator.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://calculator-git-main-mukesh-jaiswals-projects.vercel.app/",
    code: "https://github.com/mukesh417/calculator/tree/main",
  },
  {
    title: "📝 Todo App",
    desc: "A responsive Todo application with task management, progress tracking, and localStorage persistence.",
    ss: "/todo.png",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    live: "https://todo-app-chi-eight-42.vercel.app/",
    code: "https://github.com/mukesh417/todo-app/tree/main",
  },

  {
    title: "🔐 Random Password Generator",
    desc: "A JavaScript-based random password generator that creates strong passwords and supports copy to clipboard.",
    ss: "/password-generator.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://password-generator-eight-taupe-52.vercel.app/",
    code: "https://github.com/mukesh417/Password-Generator",
  },
  {
    title: "☀️ Solar System Explorer",
    desc: "A responsive solar system visualization built with HTML and CSS featuring animated planetary orbits.",
    ss: "/solar-system.png",
    tech: ["HTML", "CSS", "CSS Animations"],
    live: " https://mukesh417.github.io/solar-system/",
    code: "https://github.com/mukesh417/solar-system",
  },
  {
    title: "🌤 Weather App",
    desc: "A responsive weather application that fetches real-time weather data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and dynamic weather icons.",
    ss: "/weather-app.png",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    live: "https://mukesh417.github.io/weather-app/",
    code: "https://github.com/mukesh417/weather-app",
  },
  {
    title: "🎵 Spotify Web Player UI Clone",
    desc: "A fully responsive Spotify Web Player UI clone built using HTML and CSS.",
    ss: "/spotify-ui.png",
    tech: ["HTML", "CSS", "Flexbox", "Responsive Design"],
    live: " https://mukesh417.github.io/spotify-clone/",
    code: "https://github.com/mukesh417/spotify-clone",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: "#0ea5e9", marginBottom: 6 }}>
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#bbb",
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,255,255,0.05)",
                        border: "1px solid rgba(0,255,255,0.1)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#aaf",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 15,
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(255,255,255,0.05)",
                      color: "#0ea5e9",
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: 14,
                      border: "1px solid rgba(0,255,255,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: 14,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
