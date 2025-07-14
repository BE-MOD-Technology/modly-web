import Link from 'next/link';

export const DemoBanner = () => (
  <div className="bg-primary p-4 text-center text-lg font-semibold text-primary-foreground">
    Live Demo of SaaS Boilerplate -
    {' '}
    <Link href="/sign-up" className="text-fuchsia-500 underline hover:text-indigo-500">Explore the User Dashboard</Link>
  </div>
);
