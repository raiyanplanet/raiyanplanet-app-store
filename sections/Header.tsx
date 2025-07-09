import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-sm sticky top-0 z-30 border-b border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-2 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-green-600 font-bold text-2xl select-none">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#34A853"/>
            <path d="M8 24L24 8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M8 8L24 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <span>Planet App Store</span>
        </div>
        {/* Navigation */}
        <nav className="flex gap-2 ml-8">
          <Link href="/" className="px-3 py-1 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 font-medium">Home</Link>
          <Link href="/games" className="px-3 py-1 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 font-medium">Games</Link>
          <Link href="/apps" className="px-3 py-1 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 font-medium">Apps</Link>
        </nav>
        {/* Search bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search apps & games"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {/* User avatar placeholder */}
        <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-gray-400 font-bold text-lg ml-4">
          <span>P</span>
        </div>
      </div>
    </header>
  );
} 