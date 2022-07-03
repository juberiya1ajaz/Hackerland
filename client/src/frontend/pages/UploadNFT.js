import React, { useState } from "react";

export default function UploadNFT() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="">

            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-bold text-white">Upload NFT</h1>
                <div className='bg-blue-500 h-1 w-96 my-2 rounded-lg'></div>
            </div>

            <div className="grid place-items-center">
                <div className="relative z-10 w-full max-w-lg my-20">
                    <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
                        <h4 className="w-full text-4xl font-medium leading-snug">Add music</h4>
                        <form className="relative w-full mt-6 space-y-8">
                            <div className="relative">
                                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Full Name</label>
                                <input type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John Doe" />
                            </div>
                            <div className="relative">
                                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Your web3 address</label>
                                <input type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="For eg: 0x8aa395Ab97837576aF9cd6" />
                            </div>
                            <div className="relative">
                                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Choose audio</label>
                                <input type="file" onChange={handleChange} className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" />
                            </div>
                            <div>
                                <img src={file} alt="" className="w-64" />
                            </div>
                            <div className="relative">
                                <button className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease">Upload NFT</button>
                            </div>
                        </form>
                    </div>
                    <svg className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="1" fill-rule="evenodd">
                            <g fill-rule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-blue-600 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="1" fill-rule="evenodd">
                            <g fill-rule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.445" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.445" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.445" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.445" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.445" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.445" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.445" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.525" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.525" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.525" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.525" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.525" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.525" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.525" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.605" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.605" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.605" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.605" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.605" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.605" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.605" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.686" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.686" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.686" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.686" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.686" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.686" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.686" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72"></circle>
                                        <circle cx="15.296" cy="2.767" r="2.719"></circle>
                                        <circle cx="27.333" cy="2.767" r="2.72"></circle>
                                        <circle cx="39.369" cy="2.767" r="2.72"></circle>
                                        <circle cx="51.405" cy="2.767" r="2.72"></circle>
                                        <circle cx="63.441" cy="2.767" r="2.72"></circle>
                                        <circle cx="75.479" cy="2.767" r="2.72"></circle>
                                        <circle cx="87.514" cy="2.767" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72"></circle>
                                        <circle cx="15.296" cy="2.846" r="2.719"></circle>
                                        <circle cx="27.333" cy="2.846" r="2.72"></circle>
                                        <circle cx="39.369" cy="2.846" r="2.72"></circle>
                                        <circle cx="51.405" cy="2.846" r="2.72"></circle>
                                        <circle cx="63.441" cy="2.846" r="2.72"></circle>
                                        <circle cx="75.479" cy="2.846" r="2.72"></circle>
                                        <circle cx="87.514" cy="2.846" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72"></circle>
                                        <circle cx="15.296" cy="2.926" r="2.719"></circle>
                                        <circle cx="27.333" cy="2.926" r="2.72"></circle>
                                        <circle cx="39.369" cy="2.926" r="2.72"></circle>
                                        <circle cx="51.405" cy="2.926" r="2.72"></circle>
                                        <circle cx="63.441" cy="2.926" r="2.72"></circle>
                                        <circle cx="75.479" cy="2.926" r="2.72"></circle>
                                        <circle cx="87.514" cy="2.926" r="2.719"></circle>
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72"></circle>
                                        <circle cx="15.296" cy="3.006" r="2.719"></circle>
                                        <circle cx="27.333" cy="3.006" r="2.72"></circle>
                                        <circle cx="39.369" cy="3.006" r="2.72"></circle>
                                        <circle cx="51.405" cy="3.006" r="2.72"></circle>
                                        <circle cx="63.441" cy="3.006" r="2.72"></circle>
                                        <circle cx="75.479" cy="3.006" r="2.72"></circle>
                                        <circle cx="87.514" cy="3.006" r="2.719"></circle>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>

        </div>
    )
}