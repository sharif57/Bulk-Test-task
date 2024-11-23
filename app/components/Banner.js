import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa6";
import Better from "./Better";

const Banner = () => {
    const features = [
        {
            title: "Clinically Studied",
            description: "All products that we offer have undergone lab and safety tests",
            image: "/a.item-icon-e (1).png",
        },
        {
            title: "Vegetarian Friendly",
            description: "We have a wide selection of vegetarian products to meet your needs",
            image: "/a.item-icon-e.png",
        },
        {
            title: "Made In India",
            description: "Shop local and explore health products made right here in India",
            image: "/a.item-icon-e (2).png",
        },
        {
            title: "Free Shipping",
            description: "We deliver to your door with no shipping costs on your orders",
            image: "/a.item-icon-e (3).png",
        },
        {
            title: "No Risk",
            description: "We ensure that all products are safe and within their use-by date",
            image: "/a.item-icon-e (4).png",
        },
        {
            title: "GMO Free",
            description: "Natural, no modified products and derivatives for those who need it",
            image: "/a.item-icon-e (5).png",
        },
    ];
    return <div>
        <div className="bg-[#e2f5fb] h-[900px] relative">
            <div className="text-center py-10 mb-10">
                <h className='text-8xl font-bold  text-center text-[#003569] '>Essentail Vitamins</h>
            </div>
            <div className="flex justify-around items-center">
                <div className="space-y-3">
                    <p className="text-2xl font-normal text-gray-500">Online Medical Supplies</p>
                    <h1 className="text-4xl w-3/4   ">Get Your Vitamins
                        & Minerals</h1>
                    <button className="btn text-white rounded-r-full rounded-l-full px-8   btn-neutral">Explore</button>
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
        </div>
        <div className="bg-[#17414f] max-w-6xl mx-auto p-14 rounded-[60px] h-[400px] text-white relative -top-40">
            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-10 relative -top-24">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-20 h-20 mb-4">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-xl font-medium mb-2">{feature.title}</h1>
                        <p className="text-sm text-gray-400 lg:w-64">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <Better></Better>
    </div>;
};
export default Banner;