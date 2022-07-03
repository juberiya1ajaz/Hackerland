import React from "react";

export default function Chatroom() {
  return (
    <>
      <div className="text-white text-3xl font-bold text-center underline underline-offset-2 mb-5 ">Chatroom</div>
      <iframe className="w-screen h-screen" src="http://localhost:5000/" frameborder="0"></iframe>
    </>
  );
}
