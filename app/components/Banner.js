import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa6";

const Banner = () => {
    return <div className="bg-[#e2f5fb] h-screen ">
        <div className="text-center py-10 mb-10">
            <h className='text-6xl font-bold  text-center text-[#003569] '>Essentail Vitamins</h>
        </div>
        <div className="flex justify-around items-center">
            <div className="space-y-3">
                <p className="text-2xl font-normal text-gray-500">Online Medical Supplies</p>
                <h1 className="text-4xl w-3/4   ">Get Your Vitamins
                    & Minerals</h1>
                <button>Explore</button>
            </div>
            <div
                className="bg-no-repeat    relative"
                style={{ backgroundImage: `url('/Rectangle 1 (1).png')` }}
            >
                <div className="relative">
                    <Image
                        className="relative -top-28"
                        src={'/bannerss.png'}
                        alt="Banner"
                        height={100}
                        width={400}
                    />
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-4" >
                    <FaHandHoldingMedical className="size-16 text-white bg-[#17414f] p-3 rounded-full" />
                    <div >
                        <h1 className="text-2xl font-bold">Vitamins</h1>
                        <p>Increased Vitamins and <br /> minerals in your diet</p>
                    </div>
                </div>
                <div className="flex items-center gap-4" >
                    <FaHandHoldingMedical className="size-16 text-white bg-[#17414f] p-3 rounded-full" />
                    <div >
                        <h1 className="text-2xl font-bold">Weight Loss</h1>
                        <p> Weight Loss <br />
                            Find scientifically proven solutions</p>
                    </div>
                </div>
                <div className="flex items-center gap-4" >
                    <FaHandHoldingMedical className="size-16 text-white bg-[#17414f] p-3 rounded-full" />
                    <div >
                        <h1 className="text-2xl font-bold">Vitamins</h1>
                        <p>Functional Foods <br />
                            From protein powers to baby formula</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Banner;