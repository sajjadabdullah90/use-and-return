import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const learnMoreRef = useRef(null);
    const [showDetails, setShowDetails] = useState(false);

    const scrollToLearnMore = () => {
        setShowDetails(true);
        setTimeout(() => {
            if (learnMoreRef.current) {
                learnMoreRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)] text-sm text-gray-500">

            {/* Hero Section */}
            <div className="min-h-[580px] flex flex-col items-center justify-center px-4 text-center">


                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800">Why buy when you can rent? Explore our smarter rental solution</h1>
                <p className="max-w-xl text-center mt-6 px-4">
                    Discover a smarter way to access the products you need—without the commitment of buying. Our app simplifies your workflow, enhances collaboration, and helps you achieve your goals faster.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <Link to="/products">
                        <button className="px-7 py-3 rounded bg-indigo-500 text-white font-medium">
                            Get Started Now
                        </button>
                    </Link>
                    <button onClick={scrollToLearnMore} className="group px-7 py-2.5 flex items-center gap-2 font-medium">
                        Learn more
                        <svg className="group-hover:translate-x-1 transition pt-0.5" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Learn More Section */}
            {showDetails && (
                <div ref={learnMoreRef} className="bg-white px-6 py-10 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Our Renting Platform Works</h2>
                    <p className="text-gray-700 mb-4">
                        Our rental marketplace is designed to make borrowing high-quality products as easy and reliable as shopping online—without the financial burden of ownership. We connect you with verified vendors offering a wide range of items across multiple categories, including electronics, home appliances, furniture, tools, event supplies, and more.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Getting started is simple:</strong> Just create a free account, and you'll gain instant access to a broad catalog of rental listings tailored to your needs and location.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Once you've found what you're looking for, you can book directly through the app in just a few clicks. Our platform ensures transparent pricing, clear rental durations, and detailed item descriptions so you know exactly what to expect.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Worried about logistics?</strong> We’ve streamlined the delivery and return process to make it as convenient as possible. Depending on the item and vendor, you can choose between delivery, in-store pickup, or even same-day service.
                    </p>
                    <p className="text-gray-700">
                        Experience the freedom of renting—on your terms. No maintenance hassles. No storage concerns. Just the products you need, when you need them.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Home;
