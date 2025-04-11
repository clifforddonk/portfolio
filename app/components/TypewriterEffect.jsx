"use client";
import { useEffect, useState } from "react";
export default function TypewriterEffect({ texts, className }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          setIsDeleting(true);
          setTimeout(() => {}, 1000); // Pause before deleting
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <h3 className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </h3>
  );
}
