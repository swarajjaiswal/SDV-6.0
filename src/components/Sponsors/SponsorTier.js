import { SponsorCard } from './SponsorCard';

export function SponsorTier({ title, sponsors }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-red-500 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </div>
  );
}