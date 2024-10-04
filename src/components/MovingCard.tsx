"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Boxes } from "./ui/background-boxes";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto min-h-[30rem] md:min-h-[50rem] my-4 flex flex-col dark:bg-black dark:bg-grid-white/[0.2] relative overflow-hidden items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-3 font-bold">
          Hear Our Harmony: Voice of Success
        </h2>
      </div>
      <Boxes />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
