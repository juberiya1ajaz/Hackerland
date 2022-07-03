import React from 'react'
import { Link } from 'react-router-dom'

export default function Chat() {
  return (
    <div className='text-white'>

      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold">Chatroom</h1>
        <div className='bg-blue-500 h-1 w-44 my-2 rounded-lg'></div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-16 pb-24">

        <Link to="/chatroom">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Rock Music</div>
          </div>
        </Link>

        <Link to="/chatroom">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Hip Hop Music</div>
          </div>
        </Link>

        <Link to="/chatroom">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Jazz</div>
          </div>
        </Link>

      </div>

    </div>
  )
}
