import Link from 'next/link';

export default function FeaturedSection({ apps }: { apps: any[] }) {
  if (!apps || apps.length === 0) return null;
  const app = apps[0];
  return (
    <section className="w-full my-8">
      <div className="relative bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden">
        <img src={app.screenshots?.[0] || app.icon} alt={app.name} className="w-full md:w-96 h-56 md:h-72 object-cover rounded-2xl md:rounded-l-2xl md:rounded-r-none shadow-lg" />
        <div className="flex-1 p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{app.name}</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">{app.description}</p>
          <div className="flex gap-2 items-center mb-4">
            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">Featured</span>
            <span className="text-xs text-gray-500">by {app.developer}</span>
          </div>
          <div className="flex gap-2">
            <a
              href={app.download}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold text-sm shadow transition-colors"
            >
              Install
            </a>
            <Link
              href={`/app/${app.id}`}
              className="text-green-700 dark:text-green-300 hover:underline text-sm font-medium"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 