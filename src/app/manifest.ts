import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MENTOR IP | Intellectual Property Law Firm',
    short_name: 'MENTOR IP',
    description: 'Specialized Intellectual Property Law Firm in Bangladesh providing legal services for Patents, Trademarks, and Copyrights.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2299DD',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
