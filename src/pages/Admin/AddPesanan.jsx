import React, { useState, useEffect } from "react";
import api from "../../api/AxiosConfig";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [berat, setBerat] = useState("");
  const [status, setStatus] = useState("Baru");
  const [paketId, setPaketId] = useState("1");
  const [total, setTotal] = useState("");
  const [dibayar, setBayar] = useState("1");
  const navigate = useNavigate();

  const [paketOption, setPaketOption] = useState([]);
  const [currentPaket, setCurrentPaket] = useState({ harga: 0 });

  useEffect(() => {
    getPaketOption();
  }, []);

  useEffect(() => {
    getCurrentPaketById(paketId);
    setTotal(currentPaket.harga * berat);
  }, [paketId, berat]);

  const getPaketOption = async () => {
    const response = await api.get("/pakets");
    setPaketOption(response.data);
  };
  const getCurrentPaketById = async (id) => {
    const response = await api.get(`/pakets/${id}`);
    setCurrentPaket(response.data);
  };
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await api.post("/Users", {
        name,
        status,
        berat,
        total,
        dibayar,
        paketId,
      });
      navigate("/admin/pesanan");
    } catch (error) {
      console.log(error);
    }
  };

  const addPesanan = async (e) => {
    e.preventDefault();
    if (berat <= 0 || berat > 20) {
      console.log("Error: Berat harus lebih dari 0 (nol).");
      return;
    }
    try {
      await api.post("/Users", {
        name,
        status,
        berat,
        total,
        dibayar,
        paketId,
      });
      navigate("/admin/pesanan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-bg min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-extrabold font-poppins py-10">
          Tambah Pesanan
        </h1>

        <div className="columns mx-8 is-centered">
          <div className="column is-half">
            <form onSubmit={saveUser}>
              <div className="field">
                <label className="label" htmlFor="nama">
                  Nama
                </label>
                <div className="control">
                  <input
                    id="nama"
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama"
                  />
                </div>
              </div>
              {/* Status Pesanan */}
              <div className="field">
                <label className="label" htmlFor="berat">
                  Berat
                </label>
                <div className="control">
                  <input
                    id="berat"
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={berat}
                    onChange={(e) => {
                      // Update berat state and perform validation
                      const newBerat = parseFloat(e.target.value);
                      if (newBerat < 1 || newBerat > 20) {
                        console.error(
                          "Berat must be a number between 1 and 10"
                        );
                        // Optionally set an error state or display an error message
                      } else {
                        setBerat(newBerat);
                      }
                    }}
                    placeholder="Berat"
                  />
                </div>
              </div>
              {/* Paket */}
              <div className="field">
                <label className="label" htmlFor="paket">
                  Paket
                </label>
                <select
                  id="paket"
                  value={paketId}
                  onChange={(e) => {
                    setPaketId(e.target.value);
                  }}
                  className="block w-full input rounded-xl py-3 px-2 border border-blue-gray-800 mt-2 mb-4"
                >
                  {paketOption.map(({ id, name }, index) => {
                    return (
                      <>
                        <option value={id}>{name}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              {/* Pembayaran */}
              <div className="field">
                <label className="label" htmlFor="dibayar">
                  Status Pembayaran
                </label>
                <select
                  id="dibayar"
                  value={dibayar}
                  onChange={(e) => setBayar(e.target.value)}
                  className="block w-full input rounded-xl py-3 px-2 border border-blue-gray-800 mt-2 mb-4"
                >
                  <option value="1">Lunas</option>
                  <option value="0">Belum Bayar</option>
                </select>
              </div>
              {/* Pembayaran */}
              {/* <div className="field">
                <label className="label">Pembayaran</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={dibayar}
                    onChange={(e) => setBayar(e.target.value)}
                    placeholder="Dibayar"
                  />
                </div>
              </div> */}
              {/* Total Bayar */}
              <div className="field">
                <label className="label">Total bayar</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={currentPaket.harga * berat}
                    onChange={(e) => setTotal(e.target.value)}
                    placeholder="Total"
                  />
                </div>
              </div>
              <div className="field mb-7">
                <button
                  type="submit"
                  className="button w-28 h-[47px] p-2.5 bg-indigo-800 rounded-[15px] justify-start items-start gap-2.5 inline-flex"
                >
                  <h1 className="w-[92px] h-[22px] text-center text-white text-base font-bold font-inter">
                    Tambah
                  </h1>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
