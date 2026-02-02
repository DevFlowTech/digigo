"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    images: Array<{
        id: number;
        title: string;
        image: string;
        description: string;
        location: string;
        date: string;
        capacity: string;
    }>;
    currentIndex: number;
    onNavigate: (direction: "prev" | "next") => void;
}

export default function Lightbox({
    isOpen,
    onClose,
    images,
    currentIndex,
    onNavigate,
}: LightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onNavigate("prev");
            if (e.key === "ArrowRight") onNavigate("next");
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, onNavigate]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                        aria-label="Close lightbox"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onNavigate("prev");
                                }}
                                className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                aria-label="Previous image"
                            >
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onNavigate("next");
                                }}
                                className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                aria-label="Next image"
                            >
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Content */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
                            <img
                                src={currentImage.image}
                                alt={currentImage.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Info */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                            <h3 className="text-2xl font-display font-bold mb-2">
                                {currentImage.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{currentImage.description}</p>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-400">Location:</span>
                                    <p className="font-medium">{currentImage.location}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400">Year:</span>
                                    <p className="font-medium">{currentImage.date}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400">Capacity:</span>
                                    <p className="font-medium">{currentImage.capacity}</p>
                                </div>
                            </div>
                        </div>

                        {/* Counter */}
                        <div className="text-center mt-4 text-white/70 text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
