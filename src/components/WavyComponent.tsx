"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Meteors } from "./ui/meteors";

export function WavyBackgroundDemo() {
  return (
    <div className="w-full relative h-screen">
      {/* Background layer */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-90 bg-red-500 blur-3xl" />

      {/* Main content */}
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 sm:px-6 md:px-8 py-8 h-full overflow-hidden flex flex-col items-center justify-center">
        <WavyBackground waveOpacity={0.4}>
          <div className="w-full h-full mx-auto flex flex-col justify-center items-center">
            {/* Hero Text */}
            <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-bold text-center">
              Hero waves are cool
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-4 text-white font-normal text-center">
              Leverage the power of canvas to create a beautiful hero section
            </p>

            {/* Tooltip section */}
            <div className="flex flex-wrap items-center justify-center pt-5 mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </WavyBackground>

        {/* Meteor effect */}
        <Meteors number={40} />
      </div>
    </div>
  );
}

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
