import React from "react";
import { Button } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 ">
        <div className="justify-center xl:justify-start">
          <h1 className="font-inter font-bold text-3xl lg:text-6xl tracking-tight text-center lg:text-start">
            Hadir untuk memberikan{" "}
            <span className="text-primary-blue">Solusi Laundry</span> anda
          </h1>
          <h5 className="font-inter text-base mt-4 mb-8 lg:mt-12 lg-mb-20 text-center lg:text-start">
            Solusi Laundry hadir sebagai laundry service yang memahami dan siap
            membantu segala kebutuhan anda tentang laundry dengan selalu
            mengutamakan kualitas dengan pelayanan yang ramah serta profesional
            bekerja sesuai SOP (Standard Operating Procedures)
          </h5>
        </div>
        <div className="gap-2 mx-auto flex justify-center xl:justify-start">
          <a href="https://api.whatsapp.com/send?phone=6282261541048&text=*Solusi%20Laundry*%0ANama%3A%20%0APaket%3A%20%0ABerat%3A%20...%20Kg%0A">
            <Button className="bg-primary-blue rounded-xl px-8 py-3 font-inter font-semibold text-bg ">
              Pesan Sekarang
            </Button>
          </a>
          <a href="/Pesanan">
            <Button
              className="rounded-xl px-8 py-3 font-inter font-semibold "
              variant="text"
            >
              Lihat Pesanan
            </Button>
          </a>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 order-1 transition-all duration-300 hover:scale-105 hover:opacity-80">
        <img src="./images/hero.png" className="items-center" alt="" />
      </div>
    </div>
  );
}

export default Hero;
