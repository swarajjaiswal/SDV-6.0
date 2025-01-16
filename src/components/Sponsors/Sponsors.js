import { SponsorCard } from './SponsorCard';

const sponsors = [
  {
    name: "The Dopamine Store",
    logo: "https://i.ibb.co/DDPwjXk/sponsorlogo.png",
    description: "We are excited to announce The Dopamine Store as the official title sponsor of SDV 6.0, hosted by Team SAEINDIA, NIT Durgapur. The Dopamine Store is known for its vibrant range of mood-boosting products that bring joy and energy to everyday life. From quirky gifts to unique lifestyle items, their collection is crafted to uplift spirits and create moments of happiness. They focus on enhancing well-being through thoughtful, creative, and functional products. This positive and innovative approach aligns perfectly with the spirit of SDV 6.0, and we’re thrilled to have them as our partner.",
    instagram : "https://www.instagram.com/dop.aminestore?igsh=cTF1NDNsdG1vNHFq",
    linkedin : "#",
    facebook : "#",
  },

];

function Sponsor() {
    return (
      <div className="min-h-screen px-4 flex items-center justify-center md:mt-0 sm:mt-12">
        <div className="max-w-xl w-full">
          <h1 className="text-6xl font-bold text-red-500 mb-8 text-center">
            Our Sponsor
          </h1>
          {/* <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
            We're grateful to our sponsor who makes our work possible. Their support helps us continue innovating and building great products.
          </p> */}
  
          {/* Rendering the sponsor dynamically from the sponsors array */}
          <div className="cards" style={{marginBottom:50+'px'}}>
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.name} {...sponsor} />
            ))} 
          </div>
        </div>
      </div>
    );
  }
  

export default Sponsor;