import Link from 'next/link';

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

export default function AppGrid({ apps }: { apps: any[] }) {
  return (
    <div className="grid grid-colum-5 gap-6">
      {apps.map((app) => (
        <div key={app.id} className="flex bg-white dark:bg-zinc-900 rounded-2xl shadow border border-gray-100 dark:border-zinc-800 p-4 items-center hover:shadow-lg transition group" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
          <img
            src={app.icon}
            alt={app.name}
            className="w-16 h-16 rounded-xl object-cover border border-gray-200 dark:border-zinc-700 mr-4 shadow-sm"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate group-hover:text-green-600 transition">{app.name}</h2>
              <span className="text-xs text-gray-500 bg-gray-100 dark:bg-zinc-800 rounded px-2 py-0.5 ml-2">{app.category}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <StarRating rating={app.rating || 4.5} />
              <span className="text-xs text-gray-500">{app.rating?.toFixed(1) || '4.5'}</span>
              <span className="text-xs text-gray-400 ml-2">{app.downloads || '1K+'} downloads</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-1">
              {app.features && app.features.map((f: string, i: number) => (
                <span key={i} className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 px-2 py-0.5 rounded text-xs font-medium">
                  {f}
                </span>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm truncate mb-1">{app.description}</p>
          </div>
          <div className="flex flex-col gap-2 items-end ml-4">
            <a
              href={app.download}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold text-sm shadow transition-colors"
              style={{ minWidth: 90 }}
            >
              Install
            </a>
            <Link
              href={`/app/${app.id}`}
              className="text-xs text-green-700 dark:text-green-300 hover:underline mt-1"
              passHref
            >
              <span>Details</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}