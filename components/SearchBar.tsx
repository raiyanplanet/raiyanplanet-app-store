'use client';

import { useState } from 'react';
import { App } from "../types/App";

interface SearchBarProps {
  apps: App[];
  onSearch?: (filteredApps: App[]) => void;
}

export default function SearchBar({ apps, onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    
    if (!onSearch) return;
    
    const filtered = apps.filter(app => 
      app.name.toLowerCase().includes(value.toLowerCase()) ||
      app.category.toLowerCase().includes(value.toLowerCase()) ||
      app.features.some((feature: string) => 
        feature.toLowerCase().includes(value.toLowerCase())
      )
    );
    
    onSearch(filtered);
  };

  return (
    <div className="w-full max-w-xl mb-6">
      <input
        type="text"
        placeholder="Search by name, category, or feature..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-zinc-800 dark:text-white"
      />
    </div>
  );
}