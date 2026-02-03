import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import "../CSS/Contact.css";
import "../index.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phonePattern = /^[0-9+]{10,14}$/;

    const isEmail = emailPattern.test(form.contact);
    const isPhone = phonePattern.test(form.contact);

    if (!isEmail && !isPhone) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    setLoading(true);
    setStatus("⏳ Sending...");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", contact: "", subject: "", message: "" });
          setLoading(false);
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Failed to send. Try again later.");
          setLoading(false);
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  // ✅ Public assets (Vite-safe)
  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/mukesh417" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/mukesh-jaiswal-21a01b255/" },
    { img: "/gmail.png", title: "Email", link: "mailto:jaiswalmukesh267@gmail.com" },
    { img: "/whatsapp.png", title: "WhatsApp", link: "https://wa.me/919569510512" },
    { img: "/insta.png", title: "Instagram", link: "https://www.instagram.com/im__mukesh__jaiswal/" },
    { img: "/facebook.png", title: "Facebook", link: "https://www.facebook.com/mukesh.jaiswal.73594479/" },
  ];
  console.log(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);


  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love
        to hear from you!
      </motion.p>

      {/* Social Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Your Email or Phone"
          value={form.contact}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <motion.button
          type="submit"
          className="contact-btn"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
        >
          {loading ? "⏳ Sending..." : "🚀 Send Message"}
        </motion.button>

        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-status"
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
