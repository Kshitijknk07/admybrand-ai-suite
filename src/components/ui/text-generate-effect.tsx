"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  cursorClassName?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  loopDelay?: number;
}

export function TextGenerateEffect({
  words,
  className,
  cursorClassName,
  speed = 0.05,
  delay = 0,
  loop = false,
  loopDelay = 2,
}: TextGenerateEffectProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + words[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed * 1000);

      return () => clearTimeout(timeout);
    } else {
      if (loop) {
        // Reset for loop after delay
        const timeout = setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
          setIsComplete(false);
        }, loopDelay * 1000);

        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    }
  }, [currentIndex, words, speed, loop, loopDelay]);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    } else {
      setCurrentIndex(0);
    }
  }, [delay]);

  return (
    <div className={cn("inline-block", className)}>
      <span>{currentText}</span>
      {!isComplete && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] bg-current animate-pulse",
            cursorClassName
          )}
        />
      )}
    </div>
  );
}

interface TextGenerateEffectWordsProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  speed?: number;
  delay?: number;
  staggerDelay?: number;
}

export function TextGenerateEffectWords({
  words,
  className,
  cursorClassName,
  speed = 0.05,
  delay = 0,
  staggerDelay = 0.1,
}: TextGenerateEffectWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const currentWord = words[currentWordIndex];

      if (currentCharIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentWord[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, speed * 1000);

        return () => clearTimeout(timeout);
      } else {
        // Move to next word
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + " ");
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, staggerDelay * 1000);

        return () => clearTimeout(timeout);
      }
    } else {
      setIsComplete(true);
    }
  }, [currentWordIndex, currentCharIndex, words, speed, staggerDelay]);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(0);
        setCurrentCharIndex(0);
        setCurrentText("");
      }, delay * 1000);

      return () => clearTimeout(timeout);
    } else {
      setCurrentWordIndex(0);
      setCurrentCharIndex(0);
      setCurrentText("");
    }
  }, [delay]);

  return (
    <div className={cn("inline-block", className)}>
      <span>{currentText}</span>
      {!isComplete && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] bg-current animate-pulse",
            cursorClassName
          )}
        />
      )}
    </div>
  );
}

interface DynamicTextGeneratorProps {
  phrases: string[];
  className?: string;
  cursorClassName?: string;
  speed?: number;
  loopDelay?: number;
}

export function DynamicTextGenerator({
  phrases,
  className,
  cursorClassName,
  speed = 0.06,
  loopDelay = 3,
}: DynamicTextGeneratorProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentPhrase = phrases[currentPhraseIndex];

  useEffect(() => {
    if (currentIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentPhrase[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed * 1000);

      return () => clearTimeout(timeout);
    } else {
      // Move to next phrase after delay
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsComplete(false);
      }, loopDelay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentPhrase, speed, loopDelay, phrases.length]);

  return (
    <div className={cn("inline-block leading-[inherit]", className)}>
      <span className="inline-block leading-[inherit]">{currentText}</span>
      {!isComplete && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] bg-current animate-pulse leading-[inherit]",
            cursorClassName
          )}
        />
      )}
    </div>
  );
}
