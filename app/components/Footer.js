import Image from "next/image";

const Footer = () => {
    return <div>
        <div className="bg-[#17414f] text-white py-8 px-4 mt-10">
            {/* Footer Content Section */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-center md:text-left">
                {/* Phone Number */}
                <div className="flex items-center mb-4 bg-[#215d72] gap-4 p-4 rounded-xl">
                    {/* <FaPhoneAlt className="text-3xl text-[#3498db] mr-2" /> */}
                    <Image height={50} width={50} src={'/Component-2.svg.png'}></Image>
                    <div>
                        <p className="text-xl">Phone Number</p>
                        <p className="text-lg">+974 3118 1843</p>
                    </div>
                </div>

                {/* Email Address */}
                <div className="flex items-center mb-4  bg-[#215d72] gap-4 p-4 rounded-xl">
                    {/* <FaEnvelope className="text-3xl text-[#3498db] mr-2" /> */}
                    <Image height={50} width={50} src={'/Component-2-1.svg.png'}></Image>

                    <div>
                        <p className="text-xl">Email Address</p>
                        <p className="text-lg">Elbrithcqhr@gmail.com</p>
                    </div>
                </div>

                {/* Office Location */}
                <div className="flex items-center mb-4  bg-[#215d72] gap-4 p-4 rounded-xl">
                    {/* <FaMapMarkerAlt className="text-3xl text-[#3498db] mr-2" /> */}
                    <Image height={50} width={50} src={'/Component-2-1.svg.png'}></Image>
                    <div >
                        <p className="text-xl">Office Location</p>
                        <p className="text-xl"> Ambassador Street, Zone 61,</p>
                    </div>
                </div>




                {/* Footer Logo Section */}
                <div className="mt-8 text-center bg-white p-4">
                    <Image
                        src="/footer.png" // Use your actual logo path
                        alt="Elbrit Life Sciences Logo"
                        width={200}
                        height={50}
                        className="mx-auto"
                    />
                </div>
                {/* Description Section */}
                <div className="mt-8 text-center">
                    <p className="text-md max-w-screen-md mx-auto">
                        Your health, physical and emotional well-being is important to us. We are always by your side and have made it easier for you to find the necessary vitamins.
                    </p>
                </div>
            </div>
                <p className="pt-7">Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>

    </div>;
};
export default Footer;