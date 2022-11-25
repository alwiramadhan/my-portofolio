import React from "react";

import Card from "./shared/Card";

import stp from "../assets/Semarang-Technopark.png";

function Projects() {
  return (
    <>
      <div className="h-screen container mx-auto flex flex-col justify-center">
        <h1 className="text-3xl font-bold py-5">Projects</h1>
        <div className="flex justify-between items-center gap-5">
          <Card
            image={stp}
            title="Semarang Technopark"
            desc="Semarang Technopark merupakan sebuah aplikasi yang menyediakan layanan
            inkubasi, pelatihan, sewa alat, dan sewa coworking space untuk startup
            di kota Semarang."
          />
          <Card
            image={stp}
            title="Semarang Technopark"
            desc="Semarang Technopark merupakan sebuah aplikasi yang menyediakan layanan
            inkubasi, pelatihan, sewa alat, dan sewa coworking space untuk startup
            di kota Semarang."
          />
          <Card
            image={stp}
            title="Semarang Technopark"
            desc="Semarang Technopark merupakan sebuah aplikasi yang menyediakan layanan
            inkubasi, pelatihan, sewa alat, dan sewa coworking space untuk startup
            di kota Semarang."
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
