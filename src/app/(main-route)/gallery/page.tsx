
import React from 'react'
import { getAllGallery } from '@/services/gallery'
import GalleryClient from '@/components/gallery/GalleryClient'

async function GalleryPage() {
  const response = await getAllGallery()
  const images = response?.success ? response.data : []
  console.log(response)

  return (
    <div className="container mx-auto px-4 py-12">
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
