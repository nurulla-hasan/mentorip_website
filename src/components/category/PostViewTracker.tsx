'use client';

import { useEffect, useRef } from 'react';

export default function PostViewTracker({ postId }: { postId: string }) {
  const trackedRef = useRef(false);

  useEffect(() => {
    // Prevent double tracking in development (Strict Mode)
    if (trackedRef.current) return;

    const trackView = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_API;
        if (!baseUrl || !postId) return;

        const res = await fetch(`${baseUrl}/post/${postId}/view`, {
          method: 'POST',
        });
        
        if (res.ok) {
          trackedRef.current = true;
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // Silently fail to keep console clean
      }

    };

    trackView();
  }, [postId]);

  return null;
}