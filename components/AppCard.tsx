'use client';

import Link from 'next/link';
import Image from "next/image";
import { App } from "../types/App";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <span className="flex items-center gap-0.5">
      {Array(fullStars).fill(0).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
      ))}
      {halfStar && (
        <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stopColor="currentColor"/><stop offset="50%" stopColor="white" stopOpacity="1"/></linearGradient></defs><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" fill="url(#half)"/></svg>
      )}
      {Array(emptyStars).fill(0).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
      ))}
    </span>
  );
}

export default function AppCard({ app }: { app: App }) {
  const isValidIcon = typeof app.icon === 'string' && app.icon.length > 0 && (app.icon.startsWith('/') || app.icon.startsWith('http'));
  const iconSrc = isValidIcon ? app.icon : '/default-icon.png';
  return (
    <Link href={`/app/${app.id}`} className="w-full block group focus:outline-none focus:ring-2 focus:ring-green-400 rounded-xl">
      <div className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow border border-gray-100 dark:border-zinc-800 p-3 flex flex-col items-center hover:shadow-lg transition group-hover:border-green-500" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
        <Image src={iconSrc} alt={app.name} width={64} height={64} className="w-16 h-16 rounded-xl object-cover border border-gray-200 dark:border-zinc-700 mb-2 shadow-sm" />
        <h3 className="text-base font-bold text-gray-900 dark:text-white truncate w-full text-center group-hover:text-green-600 transition">{app.name}</h3>
        <div className="text-xs text-gray-500 mb-1 truncate w-full text-center">{app.developer}</div>
        <div className="flex items-center gap-1 mb-2 justify-center">
          <StarRating rating={app.rating || 4.5} />
          <span className="text-xs text-gray-500">{app.rating?.toFixed(1) || '4.5'}</span>
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-lg font-bold text-xs shadow transition-colors w-full text-center mb-1"
          onClick={e => {
            e.stopPropagation();
            window.open(app.download, '_blank', 'noopener,noreferrer');
          }}
        >
          Install
        </button>
      </div>
    </Link>
  );
} 