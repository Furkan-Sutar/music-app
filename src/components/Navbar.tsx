"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />

        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 text-whitemt-6 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={'/'}>Home</Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">

                </MenuItem>
                <Link href={'/contact'}>Contact Us</Link>

            </Menu>
        </div>
    );
}
