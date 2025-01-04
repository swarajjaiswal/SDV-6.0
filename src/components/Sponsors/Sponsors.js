import { SponsorCard } from './SponsorCard';

const sponsors = [
  {
    name: "The Dopamine Store",
    logo: "https://i.ibb.co/DDPwjXk/sponsorlogo.png",
    // description: "Leading technology solutions provider",
  },
];

function Sponsor() {
    return (
      <div className="min-h-screen px-4 flex items-center justify-center md:mt-0 sm:mt-12">
        <div className="max-w-xl w-full">
          <h1 className="text-6xl font-bold text-red-500 mb-8 text-center">
            Our Sponsor
          </h1>
          <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
            We're grateful to our sponsor who makes our work possible. Their support helps us continue innovating and building great products.
          </p>
  
          {/* Rendering the sponsor dynamically from the sponsors array */}
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))}
        </div>
      </div>
    );
  }
  

export default Sponsor;
