import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto py-20 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">App Not Found</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">The app you are looking for does not exist.</p>
      <Link href="/" className="text-blue-600 hover:underline">Back to App Store</Link>
    </div>
  );
} 