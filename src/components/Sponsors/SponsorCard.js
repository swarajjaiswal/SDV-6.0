export function SponsorCard({ name, logo, description }) {
  return (
    <div className=" p-8 rounded-lg shadow-lg border mb-20 border-red-600 hover:border-red-400 transition-colors">
      <a href="https://www.instagram.com/dop.aminestore?igsh=cTF1NDNsdG1vNHFq">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-72 h-56 mx-auto  rounded-full object-cover"
        />
      </a>
      <h3 className="text-red-500 text-3xl font-bold mb-4 text-center">
        {name}
      </h3>
      <p className="text-gray-300 text-center text-lg">{description}</p>
    </div>
  );
}
