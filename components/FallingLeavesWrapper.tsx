'use client';

/**
 * FallingLeavesWrapper
 *
 * Wrapper ini wajib ada karena:
 * - layout.tsx adalah Server Component (App Router)
 * - `dynamic(..., { ssr: false })` hanya boleh dipakai di dalam Client Component
 * - FallingLeaves menggunakan `window` dan `canvas` yang hanya ada di browser
 *
 * Solusi: bungkus dynamic import di sini (Client Component),
 * lalu import wrapper-nya dari layout.tsx.
 */

import dynamic from 'next/dynamic';

const FallingLeaves = dynamic(() => import('./FallingLeaves'), {
  ssr: false,
  loading: () => null, // jangan render apa-apa saat loading
});

export default function FallingLeavesWrapper() {
  return <FallingLeaves />;
}
