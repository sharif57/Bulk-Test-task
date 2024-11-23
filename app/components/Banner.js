import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa6";

const Banner = () => {
    return <div className="bg-[#e2f5fb] h-screen ">
        <div className="text-center py-10">
            <h className='text-6xl font-bold  text-center text-[#003569] '>Essentail Vitamins</h>
        </div>
        <div className="flex justify-around items-center">
            <div className="space-y-3">
                <p className="text-2xl font-normal text-gray-500">Online Medical Supplies</p>
                <h1 className="text-4xl w-3/4">Get Your Vitamins
                    & Minerals</h1>
                <button>Explore</button>
            </div>
            <div>
                <Image src={'/bannerss.png'} height={100} width={400}></Image>
            </div>
            <div >
                <div className="flex items-center gap-4" >
                    <FaHandHoldingMedical className="size-16 text-white bg-[#17414f] p-3 rounded-full" />
                    <div >
                        <h1>Vitamins</h1>
                        <p>Increased Vitamins and minerals in your diet</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Banner;