// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Sparkles = () => {
//   const particlesInit = async (main) => {
//     // Initialize tsparticles engine
//     await loadFull(main);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: -1 }, // Background layer
//         particles: {
//           number: { value: 100, density: { enable: true, value_area: 800 } },
//           color: { value: "#b76eff" }, // Sparkle color (light purple)
//           shape: { type: "circle" },
//           opacity: { value: 0.6, random: true },
//           size: { value: 3, random: true },
//           line_linked: { enable: false },
//           move: {
//             enable: true,
//             speed: 1.5,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             attract: { enable: false },
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "trail" },
//             resize: true,
//           },
//           modes: {
//             trail: {
//               delay: 0.05,
//               quantity: 5,
//               particles: {
//                 color: { value: "#b76eff" },
//                 size: { value: 5, random: true },
//               },
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default Sparkles;
