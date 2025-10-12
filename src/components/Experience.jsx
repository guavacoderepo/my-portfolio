import React, { useState } from "react";

const Experience = () => {
  const exp = [
    {
      role: "Operations Analyst (Contract)",
      org: "Hamtee Limited, United Kingdom",
      date: "October 2025 – Present"
    },
    {
      role: "Data Analyst & Mentor (Part-time)",
      org: "Odyssey Educational Foundation, Nigeria",
      date: "July 2020 – September 2024"
    },
    {
      role: "Software Engineer",
      org: "Gallery of Code, Nigeria",
      date: "March 2022 – June 2024"
    },
    {
      role: "Software Engineer (Contract)",
      org: "Nextwear Technologies, Nigeria",
      date: "July 2022 – June 2024"
    }
  ];


const education = [
  {
    course: "MSc Artificial Intelligence",
    school: "Nottingham Trent University",
    location: "United Kingdom",
    date: "September 2024 - September 2025",
    grade: "Distinction" // You can replace with actual grade if available
  },
  {
    course: "BEng (Hons), Computer Engineering",
    school: "Michael Okpara University of Agriculture",
    location: "Nigeria",
    date: "September 2015 - October 2020",
    grade: "Second Class Upper"
  }
];

  const [activeTab, setActiveTab] = useState("professional");
  const handleTab = () => {
    if (activeTab === "professional") {
      setActiveTab(activeTab);
    } else if (activeTab === "academic") {
      setActiveTab(activeTab);
    }
  };
  return (
    <main id="experience" className="mt-32 mx-16 js-scroll hideScroll">
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Experience</h1>
        <p>My experience both academically & professionally -- </p>
      </div>
      <section className="exp">

        <div className="exp-body flex justify-center">
          <section className="edu-section m-5 mr-14">
            <div>
              <h1 className="font-semibold text-xl text-purple-700">
                Education
              </h1>
            </div>
            {education.map((edu, index) => (
              <div className="eduContent my-2" key={index}>
                <div className="py-3">
                  <h1 className="course font-medium">{edu.course}</h1>
                  <p>{edu.school} - {edu.grade }</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <i class="bx bx-calendar"></i>
                  {edu.date}
                </span>
              </div>
            ))}
          </section>

          <section className="experience-section m-5 ">
            <div>
              <p className="title font-semibold text-xl text-purple-700">
                {" "}
                Work Experience
              </p>
            </div>
            {exp.map((xp, index) => (
              <div className="my-2" key={index}>
                <div className="py-3">
                  <h1 className="font-medium ">{xp.role}</h1>
                  <p>{xp.org}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <i class="bx bx-calendar"></i>
                  {xp.date}
                </span>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default Experience;
