"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  { id: 1, src: 'https://mentorip.com/wp-content/uploads/2025/09/d1e6ff0b-60a3-4aae-952a-beae81f75952.jpg', alt: 'Nature 1' },
  { id: 2, src: 'https://mentorip.com/wp-content/uploads/2025/09/e3491ce1-9e25-4480-ac8d-5ca8242c5238.jpg', alt: 'Nature 2' },
  { id: 3, src: 'https://mentorip.com/wp-content/uploads/2025/09/1ae6e057-8088-4cc6-b3b4-36737c37071a.jpg', alt: 'Nature 3' },
  { id: 4, src: 'https://mentorip.com/wp-content/uploads/2025/09/b7c59413-7f86-43e3-89f3-ca46264b2dac.jpg', alt: 'Nature 4' },
  { id: 5, src: 'https://mentorip.com/wp-content/uploads/2025/09/f1b8dd5c-9681-4694-a106-9563de9f497a.jpg', alt: 'Nature 5' },
  { id: 6, src: 'https://mentorip.com/wp-content/uploads/2025/09/b380e35a-bc15-4c58-92dc-dbfb21eaa4b5.jpg', alt: 'Nature 6' },
  { id: 7, src: 'https://mentorip.com/wp-content/uploads/2025/09/aa791123-f409-41ff-ad29-1c52e9f02f0b.jpg', alt: 'Nature 7' },
  { id: 8, src: 'https://mentorip.com/wp-content/uploads/2025/09/aad6f241-d2da-4391-8853-6bba49f566ce.jpg', alt: 'Nature 8' },
  { id: 9, src: 'https://mentorip.com/wp-content/uploads/2025/09/ead2b7a8-5029-4e00-bca6-f7f8adfb08fa.jpg', alt: 'Nature 9' },
  { id: 10, src: 'https://mentorip.com/wp-content/uploads/2025/09/edd26d97-d369-4ba7-a896-b9b5c62d5b4d.jpg', alt: 'Nature 10' },
  { id: 11, src: 'https://mentorip.com/wp-content/uploads/2025/09/119798a7-c8f6-4a11-9b86-43e3705ff8fc.jpg', alt: 'Nature 11' },
]

function GalleryPage() {
  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="break-inside-avoid"
          >
            <div className="relative group overflow-hidden rounded-xl bg-muted shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage