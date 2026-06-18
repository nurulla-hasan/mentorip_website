
import React from 'react'
import { getAllGallery } from '@/services/gallery'
import GalleryClient from '@/components/gallery/GalleryClient'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Events, Offices & Milestones",
  description:
    "Browse through MentorIP's gallery showcasing our events, global offices, team moments, and milestones in Intellectual Property law across Bangladesh and international jurisdictions.",
  keywords: [
    "MentorIP Gallery",
    "Law Firm Events",
    "IP Law Bangladesh Images",
    "MentorIP Photos",
  ],
  openGraph: {
    title: "Gallery - Events, Offices & Milestones",
    description:
      "Explore MentorIP's journey through our gallery of IP events, global offices, and team milestones.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Events, Offices & Milestones",
    description: "Our journey in pictures — IP events, offices, and milestones.",
  },
};

async function GalleryPage() {
  const response = await getAllGallery()
  const images = response?.success ? response.data : []
  console.log(response)

  return (
    <div className="container mx-auto px-4 pt-0 pb-12">
      <GalleryClient images={images} />

      {images.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-xl">No images found in the gallery.</p>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
