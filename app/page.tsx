import fs from "fs";
import path from "path";
import Header from "@/sections/Header";
import FeaturedSection from "@/sections/FeaturedSection";
import SectionedAppRows from "@/sections/SectionedAppRows";

async function getApps() {
  const filePath = path.join(process.cwd(), "app", "apps.json");
  const data = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export default async function Home() {
  const apps = await getApps();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 pb-16">
        <FeaturedSection apps={apps} />
        <SectionedAppRows apps={apps} />
      </main>
    </div>
  );
}



