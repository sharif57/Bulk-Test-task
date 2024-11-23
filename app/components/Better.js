const Better = () => {
    const ingredients = [
        {
            title: "Vitamin C",
            description: "Vitamin C as ascorbic acid",
            image: "/top-view-orange-slices-frame-concept.jpg",
        },
        {
            title: "Vitamin B3",
            description: "Niacin for healthy gut and skin",
            image: "/packings-pills-capsules-medicines.jpg",
        },
        {
            title: "Magnesium",
            description: "Boost energy and support muscle function",
            image: "/oil-capsule-hair-with-vitamin-e-lie-wooden-spoon.jpg",
        },
        {
            title: "Hyaluronic Acid",
            description: "For smooth, supple and soft skin!",
            image: "/pink-abstract-background-oil-bubble-water-wallpaper.jpg",
        },
        {
            title: "Lactobacillus",
            description: "Invigorate your gut microbiome",
            image: "/bn2-5.jpg.png",
        },
    ];
    return <div>
        <section className="max-w-7xl mx-auto p-8">
            {/* Section Header */}


            {/* Ingredients Grid */}
            <div className="">
                <div className="space-y-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        {/* Left Section */}
                        <div className="mb-8 text-center lg:text-left col-span-1">
                            <h1 className="uppercase text-gray-600">Ingredients</h1>
                            <h2 className="text-2xl font-bold text-[#17414f] mb-4">Better Ingredients</h2>
                            <p className="text-gray-600 mb-6">
                                Only the best when you choose products offered on our platform - high-quality
                                ingredients for high-quality products!
                            </p>
                        </div>

                        {/* Right Section with Dynamic Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-4">
                            {ingredients.slice(0, 2).map((ingredient, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${ingredient.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    className="bg-[#e7f6fb] bg-no-repeat rounded-xl shadow-md overflow-hidden flex flex-col justify-between p-6 hover:shadow-lg transition-shadow h-[200px]"
                                >
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#17414f] mb-2">{ingredient.title}</h3>
                                        <p className="text-sm text-gray-600">{ingredient.description}</p>
                                    </div>

                                    {/* See More Link */}
                                    <a
                                        href="#"
                                        className="text-[#17414f] font-medium underline hover:text-[#0c2f36] transition-colors"
                                    >
                                        See More
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {ingredients.slice(2, 5).map((ingredient, index) => (
                            <div
                                key={index}
                                style={{ backgroundImage: `url(${ingredient.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                className="bg-[#e7f6fb] bg-no-repeat rounded-xl shadow-md overflow-hidden flex flex-col p-6 hover:shadow-lg transition-shadow h-[200px] space-y-14"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-[#17414f] mb-2">{ingredient.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{ingredient.description}</p>
                                </div>
                                <a
                                    className="text-[#17414f] font-medium underline hover:text-[#0c2f36] transition-colors"
                                >
                                    See More
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    </div>;
};
export default Better;