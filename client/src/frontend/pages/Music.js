import { useState } from "react";
import { HiX } from "react-icons/hi";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import Icon5 from "../assets/icon5.jpg";
import Icon6 from "../assets/icon6.png";
import Icon7 from "../assets/icon7.png";
import { FaPlayCircle } from "react-icons/fa";

export default function Music() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold text-black">Music NFT Gallery</h1>
        <div className="bg-blue-500 h-1 w-36 my-2  "></div>
      </div>

      <div className="flex flex-wrap justify-around w-full px-16">
        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Icon1} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <FaPlayCircle className="cursor-pointer mb-3 w-10 h-10" />
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => setShowNavbar(true)}
              >
                Buy this NFT
              </button>
              {showNavbar ? (
                <div>
                  <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
                    <div className="relative my-6 mx-auto w-screen">
                      <div className="ml-[25rem] border-0   shadow-lg relative flex flex-col w-128 bg-gray-800 outline-none focus:outline-none ">
                        <div className="flex items-start justify-between p-5 border-solid rounded-t">
                          <div>
                            <div className="text-2xl font-base tracking-wide cursor-pointer text-white">
                              Buy this NFT
                            </div>
                          </div>

                          <button
                            className="absolute right-6"
                            onClick={() => setShowNavbar(false)}
                            aria-hidden="false"
                            aria-label="button"
                          >
                            <HiX
                              className="h-7 w-7 text-white"
                              aria-hidden="false"
                            />
                          </button>
                        </div>

                        <div className="grid justify-center">
                          <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                        </div>

                        <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4">
                          <div className="py-2">
                            <input
                              className="w-96 p-2 active:border-none checked:border-none rounded-md text-xl"
                              placeholder="Senders address"
                              value="0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE"
                            />
                          </div>

                          <div className="py-2">
                            <input
                              className="w-96 p-2 active:border-none checked:border-none rounded-md text-xl"
                              placeholder="ETH"
                              value="0.11"
                            />
                          </div>

                          <div className="py-2">
                            <input
                              className="w-96 p-2 active:border-none checked:border-none rounded-md text-xl"
                              placeholder="Any Message"
                            />
                          </div>

                          <button className="bg-blue-600 text-white py-2 px-8 rounded-md ml-2">
                            Do transaction
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Icon2} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <FaPlayCircle className="cursor-pointer mb-3 w-10 h-10" />
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => setShowNavbar(true)}
              >
                Buy this NFT
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Icon3} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <FaPlayCircle className="cursor-pointer mb-3 w-10 h-10" />
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => setShowNavbar(true)}
              >
                Buy this NFT
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Icon4} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <FaPlayCircle className="cursor-pointer mb-3 w-10 h-10" />
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => setShowNavbar(true)}
              >
                Buy this NFT
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Icon5} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <FaPlayCircle className="cursor-pointer mb-3 w-10 h-10" />
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => setShowNavbar(true)}
              >
                Buy this NFT
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Icon6} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <FaPlayCircle className="cursor-pointer mb-3 w-10 h-10" />
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => setShowNavbar(true)}
              >
                Buy this NFT
              </button>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Icon7} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <FaPlayCircle className="cursor-pointer mb-3 w-10 h-10" />
              <button
                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                onClick={() => setShowNavbar(true)}
              >
                Buy this NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
