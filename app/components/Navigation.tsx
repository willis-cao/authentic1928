"use client";

import React, { useState } from 'react';

const hoverStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.35em",
  textDecorationThickness: 2,
  textDecorationColor: "#d4af37"
}

function Navbar() {
  const [hovered, setHovered] = useState<string>();

  return (
    <ul className="flex flex-col justify-start gap-1" onMouseLeave={() => setHovered(undefined)}>
      <li className="text-right text-mygray section-title"
        onMouseEnter={() => setHovered("about")}
        style={hovered === "about" ? hoverStyle : undefined}
      >
        <a href="#about">About</a>
      </li>
      <li className="text-right text-mygray section-title"
        onMouseEnter={() => setHovered("contact")}
        style={hovered === "contact" ? hoverStyle : undefined}
      >
        <a href="mailto:willis.cao@outlook.com">Contact</a>
      </li>
      <li
        className="text-right text-mygray section-title"
        onMouseEnter={() => setHovered("resume")}
        style={hovered === "resume" ? hoverStyle : undefined}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
