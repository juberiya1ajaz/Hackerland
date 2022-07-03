import Icon1 from "../assets/icon1.png"

export default function MyNFT() {

    return (
        <div>

            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-semibold text-white">My NFT</h1>
                <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
            </div>

            <div className="flex flex-wrap justify-around w-full px-16">

                <div className="m-8">
                    <div className="border-r-8 border-b-8 rounded-xl bg-gray-200 border-black ">
                        <img src={Icon1} height="300" width="300" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <button className='text-white py-2 px-8 rounded-md text-xl md:text-2xl bg-blue-500' >Resell this NFT</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
