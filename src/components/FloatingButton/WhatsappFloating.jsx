import React from "react";
import { Link } from "react-router-dom";

function WhatsappFloating() {
  return (
    <Link
      to={
        "https://api.whatsapp.com/send?phone=6282261541048&text=*Solusi%20Laundry*%0ANama%3A%20%0APaket%3A%20%0ABerat%3A%20...%20Kg%0A"
      }
      target="_blank"
    >
      <div className="fixed z-50 right-8 lg:right-28 bottom-10 rounded-full px-6 py-5 bg-green-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:pr-44 group ">
        <div className="flex items-center relative ">
          <i className="fab fa-whatsapp text-3xl text-white" />
          <div className="opacity-0 group-hover:opacity-100 absolute  z-10 inline ps-10 justify-center items-center  text-xl text-white  w-48">
            Hubungi Kami
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WhatsappFloating;
