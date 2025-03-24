// src/BlogPage.jsx

import React, { useState, useEffect, useRef } from "react";
import blogData from "../data/blogData";

const BlogPage = () => {
  const { topics, content } = blogData;
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTopic]);

  return (
    <div className="mt-20 flex flex-col md:flex-row text-white">
      {/* Left Sidebar - Topics */}
      <aside className="w-full md:w-1/4 bg-zinc-900 p-4 overflow-y-auto h-screen">
        <h2 className="text-lg font-bold mb-4">Topics</h2>
        {topics.map((topic) => (
          <button
            key={topic}
            className={`block w-full text-left px-3 py-2 my-1 rounded-md transition-all ${
              activeTopic === topic ? "bg-red-800" : "hover:bg-zinc-800"
            }`}
            onClick={() => setActiveTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </aside>

      {/* Blog Content */}
      <main className="w-full md:w-1/2 p-6 overflow-y-auto h-screen">
        <h1 className="text-2xl font-bold mb-4">
          {content[activeTopic]?.title}
        </h1>
        {content[activeTopic]?.sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="mb-6 p-4 bg-zinc-900 shadow rounded-md"
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-2 text-gray-300">{section.content}</p>
          </div>
        ))}
      </main>

      {/* Right Sidebar - Subtopics */}
      <aside className="hidden md:block w-1/4 bg-zinc-900 p-4 overflow-y-auto h-screen">
        <h2 className="text-lg font-bold mb-4">Subtopics</h2>
        {content[activeTopic]?.sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block px-3 py-2 my-1 rounded-md transition-all ${
              activeSection === section.id
                ? "bg-red-900 text-white"
                : "hover:bg-zinc-800"
            }`}
          >
            {section.title}
          </a>
        ))}
      </aside>
    </div>
  );
};

export default BlogPage;
