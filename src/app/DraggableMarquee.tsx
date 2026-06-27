"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./DraggableMarquee.module.css";

interface MarqueeItem {
  id: number;
  title: string;
  tagline: string;
  width: number;
  src: string;
}

interface DraggableMarqueeProps {
  items: MarqueeItem[];
  reverse?: boolean;
  speed?: number;
}

export default function DraggableMarquee({ items, reverse = false, speed = 1 }: DraggableMarqueeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef<number>(0);

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isDragging && !isHovered) {
        if (reverse) {
          scrollContainer.scrollLeft -= speed;
          if (scrollContainer.scrollLeft <= 0) {
            // Snap to middle to loop perfectly
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
          }
        } else {
          scrollContainer.scrollLeft += speed;
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            // Snap to start
            scrollContainer.scrollLeft = 0;
          }
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isDragging, isHovered, reverse, speed]);

  // Handle initialization for reverse scroll (start in the middle)
  useEffect(() => {
    if (reverse && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
    }
  }, [reverse]);

  // Dragging logic
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    // Set cursor to grabbing
    document.body.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeft.current - walk;

    // Handle infinite looping during drag
    if (reverse) {
      if (scrollRef.current.scrollLeft <= 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
        scrollLeft.current = scrollRef.current.scrollLeft;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
      }
    } else {
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
        scrollLeft.current = 0;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
      }
    }
  };

  const onPointerUpOrLeave = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
  };

  return (
    <div 
      className={styles.marqueeWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        onPointerUpOrLeave();
      }}
    >
      <div 
        className={styles.scrollContainer}
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUpOrLeave}
        onPointerCancel={onPointerUpOrLeave}
      >
        <div className={styles.marqueeContent}>
          {/* Render the list twice for the infinite loop effect */}
          {[...items, ...items].map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={styles.card} 
              style={{ width: item.width }}
              // Prevent default image drag behavior
              onDragStart={(e) => e.preventDefault()}
            >
              <div className={styles.imageWrap}>
                <img src={item.src} alt={item.title} draggable={false} />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.tagline}>{item.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
