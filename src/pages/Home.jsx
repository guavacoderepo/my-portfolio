import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import man from "../assets/images/dark_man-removebg-preview.png";
import profilePic from "../assets/images/face.jpeg";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Typing from "../components/Typing";
import linkedin from "../assets/logo/social_linkedin.png";
import git from "../assets/logo/25231.png";
import { Award, Briefcase, Code, ExternalLink } from "lucide-react";

// Add your certificate images here
import cert1 from "../assets/imgs/Cert65718749352.pdf";
import cert2 from "../assets/imgs/UC-9791ce26-b09a-49dc-878a-49103eb7b3fa.pdf";
import cert3 from "../assets/imgs/UC-f5b951cf-5120-405e-9142-7db809d2a137.pdf";
import cert4 from "../assets/imgs/Coursera K4KG2WZSTRSX.pdf";
import cert5 from "../assets/imgs/Coursera 7BG9PHX5TPE7.pdf";
import cert6 from "../assets/imgs/UC-9f23fbdb-7d8d-47f5-8c54-f0abb23cd75c.pdf";

const certificates = [
  { img: cert1, title: "Microsoft Azure Data Fundamentals", issuer: "Microsoft" },
  { img: cert2, title: "TensorFlow for Deep Learning", issuer: "Udemy" },
  { img: cert3, title: "Data Engineering Essentials", issuer: "Udemy" },
  { img: cert4, title: "SQL for Data Science", issuer: "University of California, Davis (Coursera)" },
  { img: cert5, title: "Python Data Structures", issuer: "University of Michigan (Coursera)" },
  { img: cert6, title: "Node.js API Masterclass With Express & MongoDB", issuer: "Udemy" },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".js-scroll, .scroll-container");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            setActiveSection(entry.target.id);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleMenuClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      <Header handleMenuClick={handleMenuClick} activeSection={activeSection} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center py-20 js-scroll hideScroll"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-5xl">👋</span>
                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold">
                  Available for work
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <Typing text="Hello, I'm Everistus" speed={50} pauseTime={1000} />
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-2xl text-gray-700">
                <span className="font-semibold text-purple-700">AI & ML Engineer</span>
                <img className="h-8 w-8" src={man} alt="Developer emoji" />
              </div>

              <p className="text-lg text-gray-600 max-w-2xl">
                Specializing in <span className="font-semibold text-gray-900">Artificial Intelligence</span>, 
                <span className="font-semibold text-gray-900"> Machine Learning</span>, 
                <span className="font-semibold text-gray-900"> Data Science</span>, and 
                <span className="font-semibold text-gray-900"> Software Engineering</span>
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/everistus-nwogo-a04178ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-purple-600 hover:text-white rounded-xl transition-all duration-300 group"
                  aria-label="LinkedIn Profile"
                >
                  <img className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all" src={linkedin} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/guavacoderepo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-300 group"
                  aria-label="GitHub Profile"
                >
                  <img className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all" src={git} alt="GitHub" />
                </a>
              </div>

              <button
                onClick={() => handleMenuClick('contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                aria-label="Contact Me"
              >
                Let's Connect
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />
                <img
                  className="relative rounded-full w-80 h-80 object-cover border-8 border-white shadow-2xl"
                  src={profilePic}
                  alt="Everistus Nwogo - AI & ML Engineer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 js-scroll hideScroll"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-lg">Get to know me better</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                AI and Machine Learning Engineer with strong software engineering experience,
                experienced in developing end-to-end AI/ML systems. Skilled in Python, SQL, FastAPI,
                TensorFlow, PyTorch, and data visualisation tools, with expertise in predictive modelling,
                NLP, and generative AI across the full machine learning lifecycle. Experienced in deploying models
                and applications on the cloud, delivering scalable, real-world AI solutions. Passionate about leveraging
                AI and data-driven insights to solve complex challenges.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                    <Briefcase className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-4xl font-bold text-purple-700 mb-2">4+</h3>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                    <Code className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-4xl font-bold text-purple-700 mb-2">10+</h3>
                  <p className="text-gray-600 font-medium">Projects Delivered</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                    <Award className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-4xl font-bold text-purple-700 mb-2">3+</h3>
                  <p className="text-gray-600 font-medium">Companies Worked</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />

        {/* Certificates Section */}
        <section
          id="certificates"
          className="py-20 js-scroll hideScroll"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-lg">Professional credentials and achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.img}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-8">
                  <Award className="w-20 h-20 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-700 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{cert.issuer}</p>
                  <div className="flex items-center text-purple-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <Contact />
      </div>

      <Footer />
    </main>
  );
};

export default Home;