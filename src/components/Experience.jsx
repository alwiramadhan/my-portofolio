import React from "react";

function Experience() {
  return (
    <>
      <div className=" mx-auto w-full h-screen flex flex-col justify-evenly items-center bg-[#d7f4f5]">
        <h1 className="font-bold text-3xl">Experiences</h1>
        <div className="w-1/3">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Agustus - Now
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Frontend Developer at Social Economic Accelerator Lab (SEAL)
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Contributing to the economic development of the city of Semarang
                through the Semarang City Bappeda program with the Semarang
                Technopark project. Assisting in the creation of the Semarang
                Technopark System for the needs of incubation, training,
                equipment rental, and coworking space rental in the city of
                Semarang.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  class="ml-2 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Juli - Agustus 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Data Management Unit in Telkom Witel Medan
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Responsible for collecting data on assets owned by the Telkom
                Medan Telecommunications Regional Office. Recording, testing,
                triggering, and validating ODP.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d7f4f5"
          fill-opacity="1"
          d="M0,64L0,192L110.8,192L110.8,96L221.5,96L221.5,64L332.3,64L332.3,224L443.1,224L443.1,128L553.8,128L553.8,320L664.6,320L664.6,224L775.4,224L775.4,64L886.2,64L886.2,224L996.9,224L996.9,192L1107.7,192L1107.7,256L1218.5,256L1218.5,256L1329.2,256L1329.2,64L1440,64L1440,0L1329.2,0L1329.2,0L1218.5,0L1218.5,0L1107.7,0L1107.7,0L996.9,0L996.9,0L886.2,0L886.2,0L775.4,0L775.4,0L664.6,0L664.6,0L553.8,0L553.8,0L443.1,0L443.1,0L332.3,0L332.3,0L221.5,0L221.5,0L110.8,0L110.8,0L0,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Experience;
