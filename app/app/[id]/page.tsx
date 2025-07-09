import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <span className="flex items-center gap-0.5">
      {Array(fullStars).fill(0).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stopColor="currentColor"/><stop offset="50%" stopColor="white" stopOpacity="1"/></linearGradient></defs><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" fill="url(#half)"/></svg>
      )}
      {Array(emptyStars).fill(0).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
      ))}
    </span>
  );
}

interface App {
  id: string;
  name: string;
  package: string;
  description: string;
  version: string;
  icon: string;
  screenshots: string[];
  download: string;
  category: string;
  features: string[];
  rating?: number;
  downloads?: string;
}

async function getApp(id: string): Promise<App | null> {
  const filePath = path.join(process.cwd(), "app", "apps.json");
  const data = await fs.promises.readFile(filePath, "utf-8");
  const apps: App[] = JSON.parse(data);
  return apps.find((app) => app.id === id) || null;
}

export default async function AppDetail({ params }: { params: { id: string } }) {
  const app = await getApp(params.id);
  if (!app) return notFound();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 py-0 px-0" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-none sm:rounded-2xl shadow-xl pb-8">
        {/* Header section */}
        <div className="flex items-center gap-4 px-6 pt-8 pb-4 border-b border-gray-100 dark:border-zinc-800">
          <Image src={app.icon} alt={app.name} width={80} height={80} className="w-20 h-20 rounded-2xl object-cover border border-gray-200 dark:border-zinc-700 shadow" />
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 truncate">{app.name}</h1>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-500 bg-gray-100 dark:bg-zinc-800 rounded px-2 py-0.5">{app.category}</span>
              <span className="text-xs text-gray-400">v{app.version}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <StarRating rating={app.rating || 4.5} />
              <span className="text-xs text-gray-500">{app.rating?.toFixed(1) || '4.5'}</span>
              <span className="text-xs text-gray-400 ml-2">{app.downloads || '1K+'} downloads</span>
            </div>
          </div>
          <a
            href={app.download}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold text-base shadow transition-colors"
            style={{ minWidth: 100 }}
          >
            Install
          </a>
        </div>
        {/* Screenshots carousel */}
        {app.screenshots && app.screenshots.length > 0 && (
          <div className="flex gap-4 px-6 py-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-zinc-800">
            {app.screenshots.map((src, i) => (
              <Image key={i} src={src} alt={`Screenshot ${i + 1}`} width={192} height={384} className="w-48 h-96 object-cover rounded-xl border shadow" />
            ))}
          </div>
        )}
        {/* Description and features */}
        <div className="px-6 mt-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About this app</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-4 text-base leading-relaxed">{app.description}</p>
          {app.features && app.features.length > 0 && (
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">Features</h3>
              <div className="flex flex-wrap gap-2">
                {app.features.map((f, i) => (
                  <span key={i} className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded text-xs font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8">
            <Link href="/" className="text-green-700 dark:text-green-300 hover:underline text-sm">← Back to Planet App Store</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 