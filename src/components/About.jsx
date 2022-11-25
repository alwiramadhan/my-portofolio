import React from "react";
import profil from "../assets/foto-profile.jpg";

function About() {
  return (
    <>
      <div className="container mx-auto w-full flex justify-center items-center h-screen">
        <div className="w-1/2">
          <p className="w-4/5">
            Hi!, my name is Alwi Ramadhan Haryanto Harahap usually called Alwi.
            I am a final year student in the D3 Informatics Engineering program
            at the University of North Sumatera. I have an interest in the field
            of Web Development, especially on the frontend side.
          </p>
          <br />
          <p className="w-4/5">
            My current activity is participating in the Ministry of Education
            and Culture's program, namely Certified Internships and Independent
            Studies. I am currently carrying out an internship at the Social
            Economic Accelerator Lab (Seal) as a Frontend Developer.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="w-3/5 pt-2 flex justify-between">
            <div>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind</li>
            </div>
            <div>
              <li>Bootstrap</li>
              <li>Chakra Ui</li>
              <li>TypeScript</li>
            </div>
          </ul>
        </div>
        <img src={profil} alt="" className="w-1/4 rounded-xl" />
      </div>
    </>
  );
}

export default About;
