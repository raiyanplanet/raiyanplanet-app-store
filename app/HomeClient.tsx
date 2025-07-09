'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import AppGrid from '@/sections/AppGrid';
import { App } from "../types/App";

export default function HomeClient({ apps }: { apps: App[] }) {
  const [filteredApps, setFilteredApps] = useState<App[]>(apps);

  const handleSearch = (results: App[]) => {
    setFilteredApps(results);
  };

  return (
    <>
      <SearchBar apps={apps} onSearch={handleSearch} />
      <AppGrid apps={filteredApps} />
    </>
  );
} 