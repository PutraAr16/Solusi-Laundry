import React from "react";
import "../../assets/css/tailwind.css";
import "../../index.css";
import GridCard from "./GridCard";
import WhatsappFloating from "../../components/FloatingButton/WhatsappFloating";

function Paket() {
  return (
    <div className="max-w-6xl h-full mx-auto">
      <div className="flex flex-col justify-center items-center bg-blue-900 rounded-lg p-2 h-20 mt-10 cursor-pointer shadow duration-150 hover:scale-105 hover:shadow-md">
        <p className="text-2xl font-bold text-white">Pilihan Paket</p>
      </div>
      <div className="w-full bg-blue-400 rounded-lg p-2 my-5 justify-center cursor-pointer shadow-xl duration-150 hover:scale-105 hover:shadow-md">
        <div className="flex flex-col items-start">
          <p className="px-2 pt-2 text-2xl font-bold text-white">
            Paket Bulanan
          </p>
          <p className="px-2 text-xl font-semibold text-white">Rp. 100.000</p>
          <ul className="list-disc flex flex-col px-10 pt-10 pb-5 items-start">
            <li className="text-white">
              Harga berlaku untuk cuci setrika dan antar jemput max 18 Kg (jika
              lebih dr 18 kg, maka ada tambahan 5.5k/kg){" "}
            </li>
            <li className="text-white">Harga berlaku per orang</li>
            <li className="text-white">
              Paket tidak temasuk selimut, seprei, bed cover, sepatu, tas, topi
            </li>
            <li className="text-white">Paket dihitung per 30 hari</li>
          </ul>
        </div>
      </div>
      <div>
        <GridCard />
      </div>
      <WhatsappFloating />
    </div>
  );
}

export default Paket;
