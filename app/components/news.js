const News = () => {
    const articles = [
        {
            image: '/div.post-thumb.png',
            title: 'The Covid-19 Epidemic in 2022 Is Back',
            description: 'A detailed look into how the pandemic is returning in 2022 and its effects on global health...',
            date: '20 APR',
        },
        {
            image: '/path-to-image2.jpg',
            title: 'Hac hendrerit mus non semper suspendisse',
            description: 'Exploring new strategies to combat emerging health crises...',
            date: '17 MAR',
        },
        {
            image: '/path-to-image3.jpg',
            title: 'The Covid-19 Epidemic in 2023 Is Back',
            description: 'A deep dive into the ongoing challenges faced in managing the pandemic...',
            date: '20 APR',
        },
        {
            image: '/path-to-image4.jpg',
            title: 'Turmeric & Ginger Health Benefits',
            description: 'Learn about the amazing health benefits of these natural ingredients...',
            date: '20 APR',
        },
        {
            image: '/path-to-image5.jpg',
            title: 'Supplements That Boost Immunity',
            description: 'Discover effective supplements to enhance your immune system...',
            date: '20 APR',
        },
    ];
    return <div>
        <div className="container mx-auto px-4">
            <h2 className="text-center text-lg font-bold text-[#17414f] uppercase mb-6">Our Blog</h2>
            <h1 className="text-center text-5xl font-bold text-[#17414f] mb-10">Latest News</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* First Column */}
                <div className="space-y-4">
                    {/* First Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[300px] md:h-[400px] lg:h-[500px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/div.post-thumb.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>

                    {/* Second Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[200px] md:h-[300px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/blog2-450x580.jpg.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4">
                    {/* Second Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[200px] md:h-[300px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/blog2-450x580.jpg.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>

                    {/* First Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[300px] md:h-[400px] lg:h-[500px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/div.post-thumb.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>
                </div>

                {/* Third Column */}
                <div className="space-y-4">
                    {/* First Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[300px] md:h-[400px] lg:h-[500px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/div.post-thumb.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>

                    {/* Second Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[200px] md:h-[300px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/blog2-450x580.jpg.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>
                </div>

                {/* Fourth Column */}
                <div className="space-y-4">
                    {/* Second Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[200px] md:h-[300px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/blog2-450x580.jpg.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>

                    {/* First Section with Background Image */}
                    <div
                        className="bg-no-repeat bg-cover h-[300px] md:h-[400px] lg:h-[500px] rounded-lg flex items-center justify-center"
                        style={{ backgroundImage: `url('/div.post-thumb.png')` }}
                    >
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                            The Covid-19 Epidemic In 2022 Is Back
                        </h1>
                    </div>
                </div>
            </div>


        </div>

    </div>;
};
export default News;