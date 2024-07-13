import React from "react";
import { paketan } from "./data";

const GridCard = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-10 rounded-xl pt-2 mb-12">
      {paketan.map((paket) => {
        return (
          <div
            key={paket.id}
            className="bg-blue-400 h-50 text-center rounded-xl p-2 cursor-pointer shadow-2xl duration-150 hover:scale-105 hover:shadow-md"
          >
            <p className="text-white m-2 mt-6 font-bold">{paket.title}</p>
            <p className="text-white mb-5">{paket.price}</p>
            <p className="text-white text-left mb-2">
              &nbsp;&nbsp;&nbsp;{paket.desc}
              <svg
                className="w-4 h-4 float-right mr-2"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.42857L6.28571 12.7143L17 2"
                  stroke="white"
                  stroke-width="3.91588"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p className="text-white text-left mb-2">
              &nbsp;&nbsp;&nbsp;{paket.desc2}
              {paket.id === 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x w-4 h-4 float-right mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 float-right mr-2"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.42857L6.28571 12.7143L17 2"
                    stroke="white"
                    stroke-width="3.91588"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </p>
            <p className="text-white text-left mb-2">
              &nbsp;&nbsp;&nbsp;{paket.desc3}
              <svg
                className="w-4 h-4 float-right mr-2"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.42857L6.28571 12.7143L17 2"
                  stroke="white"
                  stroke-width="3.91588"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p className="text-white text-left mb-2 font-bold">
              &nbsp;&nbsp;&nbsp;{paket.desc4}
              <svg
                className="w-4 h-4 float-right mr-2"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.42857L6.28571 12.7143L17 2"
                  stroke="white"
                  stroke-width="3.91588"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p className="text-white pt-10 pb-4">{paket.const}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GridCard;
