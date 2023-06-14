import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTwitter, FaMastodon, FaDiscord, FaEnvelope, FaGuilded } from 'react-icons/fa';

function App() {
  const projectsRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      arrowRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.2,
      }
    );

    ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top 80%",
      onEnter: () => generateProjects(),
    });

    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  const generateProjects = () => {
    const projectsData = [
      {
        title: "Project 1",
        image: "https://example.com/project1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Project 2",
        image: "https://example.com/project2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Project 3",
        image: "https://example.com/project3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ];

    // Randomize the order of projects
    const randomizedProjects = shuffleArray(projectsData);

    return randomizedProjects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        image={project.image}
        description={project.description}
        index={index}
      />
    ));
  };

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <div className="h-screen overflow-y-scroll bg-black">
      <div className="flex items-center justify-center h-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ top: '32.5%' }}>
          <img
            src="https://asset-cdn.devolvex.net/brands/devolvex_circled.webp"
            className="max-w-xs mx-auto"
            alt="Devolvex logo"
          />
          <h1 className="text-4xl mt-6 text-white text-center font-bold font-sans">
            Welcome to Devolvex
          </h1>
          <h2 className="text-base text-white text-center italic font-bold font-sans mt-6">
            We at Devolvex create stuff for a living.
            We create the future.
          </h2>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div ref={arrowRef} className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" version="1.1">
              <path d="" stroke="none" fill="#ffffff" fillRule="evenodd" />
              <path d="M 14 12.500 C 14 18.825, 13.640 24, 13.200 24 C 12.760 24, 11.867 23.467, 11.217 22.817 C 10.566 22.166, 9.711 21.955, 9.318 22.349 C 8.924 22.742, 10.042 24.504, 11.801 26.263 L 15 29.462 18.199 26.263 C 21.589 22.873, 21.417 20.407, 18.006 23.494 C 16.008 25.302, 16 25.259, 16 13.155 C 16 5.718, 15.612 1, 15 1 C 14.391 1, 14 5.500, 14 12.500" stroke="none" fill="#ffffff" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen" ref={projectsRef}>
        <h2 className="text-3xl text-white font-bold mb-12">Our Projects</h2>
        <div className="flex justify-center space-x-6">
          {generateProjects().map((project, index) => (
            <div key={index} className="relative">
              {index !== 0 && (
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-1 w-8"
                  style={{ top: 'calc(50% - 0.5px)' }}
                />
              )}
              {project}
            </div>
          ))}
        </div>
      </div>
      <footer className="py-6 bg-black">
        <div className="flex justify-center">
          <a href="https://twitter.com/DevolvexHQ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FaTwitter className="w-6 h-6 mx-2" />
          </a>
          <a href="https://mastodon.social/@DevolvexHQ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FaMastodon className="w-6 h-6 mx-2" />
          </a>
          <a href="https://discord.com/invite/RxBRqmJTrk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FaDiscord className="w-6 h-6 mx-2" />
          </a>
          <a href="https://guilded.gg/Devolvex" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FaGuilded className="w-6 h-6 mx-2" />
          </a>
          <a href="mailto:hello@devolvex.net" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FaEnvelope className="w-6 h-6 mx-2" />
          </a>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, image, description, index }) {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={projectRef}
      className="bg-white rounded-lg shadow-lg p-6 max-w-sm"
      style={{ zIndex: 100 - index }}
    >
      <img src={image} className="w-full mb-4" alt={title} />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default App;