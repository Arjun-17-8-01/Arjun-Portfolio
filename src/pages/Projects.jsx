import { motion } from "framer-motion";

const projects = [
  {
    title: 'Hospital Management System',
    description:
      'Developed a centralized platform that integrates all hospitals and patient records into a single, secure database, enabling efficient data access and management across healthcare facilities.',
    image: '/assets/images/hospital.jpg',
    tags: ['Database', 'Healthcare'],
    link: '#'
  },
  {
    title: 'Plastic Management System',
    description:
      'Designed a plastic tracking solution using QR codes and barcodes to monitor waste disposal. Customers are rewarded for proper trash disposal, and conventional plastic bags are replaced with Terrasol biodegradable alternatives.',
    image: '/assets/images/plastics.png',
    tags: ['QR Code', 'Sustainability'],
    link: '#'
  },
  {
    title: 'Traffic Management System',
    description:
      'Implemented an AI-powered system that uses existing ALR cameras to capture vehicle images and adjust traffic light timings in real-time. Built using Apache Kafka, Zookeeper, and YOLO for intelligent traffic flow optimization.',
    image: '/assets/images/traffic.png',
    tags: ['Apache Kafka', 'YOLO', 'Zookeeper'],
    link: '#'
  },
  {
    title: 'Simple Super Dash Game',
    description:
      'Created an engaging 2D endless-runner game using Flutter, featuring smooth animations, responsive controls, and a fun gameplay experience.',
    image: '/assets/images/flutter.png',
    tags: ['Flutter', 'Game Development'],
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-16 px-4 pt-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-500 to-cyan-500 animate-gradient-x opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/assets/bg-pattern.svg')] opacity-10"></div>

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-extrabold mb-4 text-center drop-shadow-lg">
          My Projects
        </h2>
        <p className="mb-12 max-w-2xl mx-auto text-center text-lg opacity-90">
          A collection of my recent works, combining creativity, technical skills, and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ title, description, image, tags, link }) => (
            <motion.a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 border border-transparent hover:border-purple-300 hover:shadow-purple-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600">
                  {title}
                </h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        idx % 2 === 0
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }
      `}</style>
    </section>
  );
}
