import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import man from "../assets/images/dark_man-removebg-preview.png";
import profilePic from "../assets/images/face.jpeg";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
// import Services from "../components/Services";
// import References from "../components/References";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Typing from "../components/Typing";
// import facebook from "../assets/logo/facebook-logo-facebook-icon-transparent-free-png.webp";
// import insta from "../assets/logo/instagram-filled.png";
import linkedin from "../assets/logo/social_linkedin.png";
// import twitter from "../assets/logo/twiitter x.jpeg";
import wavinghand from "../assets/images/waving-hand.png";
import git from "../assets/logo/25231.png"

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
    <main>
      <Header handleMenuClick={handleMenuClick} activeSection={activeSection} />

      <section className="body mx-6 md:mx-16 ">
        {/* Home Section */}
        <section
          id="home"
          className="home h-lvh flex flex-col md:flex-row items-center justify-center js-scroll hideScroll"
        >
          <div className="introText relative text-center md:text-left">
            <span className="flex items-center justify-center md:justify-start">
              <h1 className="auto-text text-4xl border-r-4 border-r-purple-700 mr-2 font-semibold">
                <Typing text="Hello There, I'm Everistus" speed={50} pauseTime={1000} />
              </h1>
              <img src={wavinghand} alt="Waving hand emoji" />
            </span>

            <p className="text-xl flex items-center mt-2 gap-2 justify-center md:justify-start">
              AI & ML Engineer
              <img className="emoji h-8" src={man} alt="Man emoji" />
            </p>

            <div className="summary mt-6">
              <p className="text-gray-700">
                Artificial Intelligence <span className="mx-2">|</span> Machine Learning <span className="mx-2">|</span> <br />
                Data Science <span className="mx-2">|</span> Software Engineering
              </p>
            </div>

            {/* Social Links */}
            <div className="social-links flex items-center justify-center md:justify-start mt-4">
              {/* <a className="sm-link" href="#"><img className="w-10 m-1.5" src={facebook} alt="Facebook" /></a>
              <a className="sm-link" href="#"><img className="w-8 m-1.5" src={insta} alt="Instagram" /></a> */}
              <a className="sm-link" href="https://www.linkedin.com/in/everistus-nwogo-a04178ab/"><img className="w-8 mx-1.5 mt-1" src={linkedin} alt="LinkedIn" /></a>
              <a className="sm-link" href="https://github.com/guavacoderepo"><img className="w-8 m-1.5" src={git} alt="GitHub" /></a>
            </div>

            <button
              className="CTA bg-purple-700 p-2.5 text-white rounded-md mt-5"
              aria-label="Contact Me"
            >
              Contact Me <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <img
            className="profilePic rounded-full w-1/2 md:w-1/4 ml-0 md:ml-12 object-center mt-10 md:mt-0"
            src={profilePic}
            alt="Profile"
            loading="lazy"
          />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="about mx-12 md:mx-40 flex flex-col items-center justify-center js-scroll hideScroll"
        >
          <div className="title m-12 text-center">
            <h1 className="text-3xl font-medium">About Me</h1>
            <p>Get to know me!</p>
          </div>

          <div className="aboutInfo flex flex-col md:flex-row justify-center">
            <div className="info md:ml-10">
              <article className="text-xl text-center text-gray-600 p-4">
                AI/ML Engineer with an MSc in Artificial Intelligence and expertise in end-to-end machine learning
                development—spanning data preprocessing, model training, and deployment. Proficient in Python, TensorFlow,
                and Scikit-learn, with hands-on experience in NLP, computer vision, and time-series analysis.
                Skilled in building scalable, real-world AI solutions using tools like MLflow, Docker, and Azure ML.
              </article>

              <section className="figures flex justify-center items-center mt-16">
                <div className="mr-10 text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">2+</h1>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="mr-10 text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">10+</h1>
                  <p className="text-gray-500">Projects</p>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">2+</h1>
                  <p className="text-gray-500">Companies</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        {/* <Services /> */}
        {/* <References /> */}
        {/* <Contact /> */}
        <Footer />
      </section>
    </main>
  );
};

export default Home;
