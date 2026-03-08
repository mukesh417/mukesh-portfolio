import React from "react";
import { motion } from "framer-motion";
export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p style={{ color: "#aaa", marginBottom: 25 }}>
          A quick glance at my academic and development journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff" }}>
              👨‍💻 Mukesh Jaiswal
            </h3>
            <p style={{ fontSize: 15, color: "#ccc", marginTop: 6 }}>
              MCA (2026) | Full Stack Developer (MERN)
            </p>
            <p style={{ fontSize: 14, color: "#aaa" }}>
              📍 Siddharth Nagar, Uttar Pradesh
            </p>
            <p style={{ fontSize: 13, color: "#aaa" }}>
              ✉️ jaiswalmukesh267@gmail.com
            </p>
            <p style={{ fontSize: 13, color: "#aaa" }}>
              📞 +91 9569510512
            </p>
          </div>

          {/* Summary */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              MCA student with strong foundation in Full Stack Web Development
              using the MERN stack. Experienced in building responsive,
              production-ready applications with authentication, REST APIs, and
              database integration. <br /> <br />
              <strong style={{ color: "#fff" }}>
                Actively seeking entry-level Full Stack / Software Developer
                roles.
              </strong>
            </p>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff" }}>🎓 Education</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Master of Computer Applications (MCA)</strong> — Kamla
              Nehru Institute of Technology (KNIT), AKTU <br />
              <span style={{ color: "#aaa" }}>2024 – 2026 | YGPA: 8.15</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>B.Sc (Hons.) in Computer Science</strong> — Babu Banarasi
              Das University <br />
              <span style={{ color: "#aaa" }}>2019 – 2022 | CGPA: 6.99</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff" }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>
              <strong>AI Image Generator App (Text → Image)</strong> — MERN
              Stack
              <br />• Full-stack SaaS app using React, Node.js, Express, MongoDB
              <br />• ClipDrop API integration for image generation
              <br />• JWT authentication, credit-based usage system
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff" }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "REST APIs",
              "Git",
              "GitHub",
              "Data Structures & Algorithms (LeetCode, GeeksforGeeks)",
              "C",
              "Java",
              "Python",
              "SQL",
              "Postman",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.2 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          <a
            href="https://github.com/mukesh417"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc" }}
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mukesh-jaiswal-21a01b255/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc" }}
          >
            💼 LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/mukesh__jaiswal/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc" }}
          >
            🏆 LeetCode
          </a>
        </motion.div>

        {/* PDF */}
        <motion.div
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/MyResume.pdf"
            title="Mukesh Jaiswal Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
            }}
          />
        </motion.div>
        {/* Download Button */}
        <motion.a
          href="/MyResume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
