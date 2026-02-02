"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GovImage {
    src: string;
    caption: string;
    alt: string;
}

interface GovProject {
    id: number;
    name: string;
    location: string;
    category: string;
    description: string;
    images: GovImage[];
}

interface GovProjectGalleryProps {
    projects: GovProject[];
}

export default function GovProjectGallery({ projects }: GovProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<{
        src: string;
        alt: string;
        caption: string;
    } | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {projects.map((project) => (
                    <div key={project.id} className="space-y-4 sm:space-y-6">
                        {/* Project Header */}
                        <div className="border-l-4 border-primary-500 pl-4 sm:pl-6">
                            <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-dark mb-2">
                                {project.name}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600 mb-3">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-medium text-sm sm:text-base">{project.location}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{project.description}</p>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                            {project.images.map((image, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(image)}
                                    className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200 hover:border-primary-500 active:border-primary-600 transition-all duration-300 touch-manipulation"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                                            <p className="text-white text-xs font-medium text-center line-clamp-2">
                                                {image.caption}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Zoom Icon */}
                                    <div className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full cursor-default"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-primary-400 transition-colors touch-manipulation"
                                aria-label="Close"
                            >
                                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                                    className="object-contain"
                                />
                            </div>
                            <div className="mt-3 sm:mt-4 text-center px-4">
                                <p className="text-white text-base sm:text-lg font-medium">{selectedImage.caption}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
