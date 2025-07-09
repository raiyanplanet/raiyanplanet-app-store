import SectionedAppRowsClient from './SectionedAppRowsClient';

export default function SectionedAppRows({ apps }: { apps: any[] }) {
  // Group apps by section
  const sections: { [key: string]: any[] } = {};
  apps.forEach(app => {
    if (!sections[app.section]) sections[app.section] = [];
    sections[app.section].push(app);
  });
  return <SectionedAppRowsClient sections={sections} />;
} 