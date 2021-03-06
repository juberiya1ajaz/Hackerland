import React from "react";
import HeroImg from "../assets/hero.svg";
import FeatImg from "../assets/feat.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="md:mx-28 mx-4 text-white">
      <div className="md:grid md:grid-cols-2 items-center py-10">
        <div className=" p-10 border-2 border-r-8 border-b-8 rounded-xl bg-yellow-200 text-black border-black font-bold  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">

          <h1 className="text-3xl md:text-6xl">Who we are</h1>

          <p className="text-xl py-4 tracking-wider text-justify">
            On GRooVE with NFTs, musicians can sell their music in the form NFTs without any third-party involvement and can earn 100% of their sales. Users can easily buy their favorite artist's NFTs. On top of everything, users can join the chatroom according to their chosen genre.
          </p>

          <Link to="/music">
            <button className="text-white bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl hover:bg-purple-800">
              Listen Music
            </button>
          </Link>
        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="300" height="300" />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 pt-12 items-center">
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={FeatImg} alt="img" width="300" height="300" />
        </div>
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 p-10 border-2 border-r-8 border-b-8 rounded-xl bg-green-300 font-bold border-black text-black">
          <h1 className="text-5xl">What else do we have</h1>
          <p className="text-xl md:text-2xl py-4 tracking-wider">
            GRooVe with NFTs is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Buy other artists NFT.</li>
            <li className="list-disc">Chat in secure chatrooms.</li>
            <li className="list-disc">Join chatroom and chat with others.</li>
            <li className="list-disc">Upload your music as a form of NFT.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
