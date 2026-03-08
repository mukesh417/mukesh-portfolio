import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

const IMAGES = {
  personal: [
    {
      id: 1,
      caption:
        "Uttarakhand trip 🏔️🚣‍♂️ — peaceful mountains by day, thrilling river rafting by heart.",
      photos: [
        "/gallery/mukesh1.jpeg",
        "/gallery/mukesh3.jpeg",
        "/gallery/mukesh2.jpeg",
        "/gallery/mukesh7.jpeg",
      ],
    },
    {
      id: 2,
      caption:
        "Lost in the calm of Uttarakhand’s mountains 🏔️ — peace in the heights, lessons from the river 🌊",
      photos: [
        "/gallery/mukesh4.jpg",
        "/gallery/mukesh5.jpeg",
        "/gallery/mukesh10.jpg",
        "/gallery/mukesh9.jpeg",
      ],
    },
  ],
  // projects: [
  //   {
  //     id: 1,
  //     caption:
  //       "It’s an AI-powered tool that understands what someone might be feeling based on their words.",
  //     photos: ["/gallery/m.png", "/gallery/m2.jpeg"],
  //   },

  //   {
  //     id: 1,
  //     caption: "📂ProfileX - Smart Data Profiler + Preprocessor",
  //     photos: [
  //       "/gallery/profilex.jpeg",
  //       "/gallery/profilex2.jpeg",
  //       "/gallery/profilex3.jpeg",
  //       "/gallery/profilex4.jpeg",
  //     ],
  //   },
  // ],
  projects: [
    {
      id: 1,
      caption:
        "Imagify 🧠 — AI-powered text-to-image generator with credit-based pricing system",
      photos: [
        "/gallery/imagify-hero.png",
        "/gallery/imagify-1.png",
        "/gallery/imagify-2.png",
        "/gallery/imagify-3.png",
      ],
    },
    {
      id: 2,
      caption:
        "WorkMapper 💼 — Skill-based hiring platform that bridges the gap between skills and opportunities | React • UI/UX",
      photos: [
        "/gallery/workmapper-hero.png",
        "/gallery/workmapper-1.png",
        "/gallery/workmapper-2.png",
        "/gallery/workmapper-3.png",
      ],
    },
  ],
  achievements: [
    // {
    //   id: 1,
    //   caption: "Solved 1000 LeetCode questions 🏆!",
    //   photos: ["/gallery/leet.jpeg"],
    // },
    // },
    {
      id: 1,
      caption:
        "Hacktoberfest 2025 Supercontributor 🏆 — Successfully completed 6+ accepted pull requests in open-source projects",
      photos: [
        "/gallery/hacktoberfest-badge.png",
        "/gallery/hacktoberfest-order.png",
      ],
    },
    // {
    //   id: 2,
    //   caption: "Technical Lead at SCET AI Club 🤖",
    //   photos: ["/gallery/techlead.png"],
    // },
    {
      id: 2,
      caption:
        "Contributed to environmental sustainability 🌱 — Earned Tree-Nation certificate by planting a tree through Hacktoberfest",
      photos: ["/gallery/tree-nation.png", "/gallery/tree-certificate.png"],
    },
    {
      id: 3,
      caption:
        "Actively practicing Data Structures & Algorithms on LeetCode and GeeksforGeeks to strengthen problem-solving skills 💡",
      photos: ["/gallery/leetcode-profile.png", "/gallery/gfg-profile.png"],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              <p className="caption">{post.caption}</p>
              <div
                className={`photo-grid ${post.photos.length > 1 ? "multi" : "single"
                  }`}
              >
                {post.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    className="photo-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => openZoom(post, i)}
                  >
                    <img src={src} alt="gallery" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
