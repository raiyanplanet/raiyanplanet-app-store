'use client';

import AppCard from '@/components/AppCard';

export default function SectionedAppRowsClient({ sections }: { sections: { [key: string]: any[] } }) {
  return (
    <div className="space-y-10">
      {Object.entries(sections).map(([section, sectionApps]) => (
        <section key={section}>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 ml-2">{section}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {sectionApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 