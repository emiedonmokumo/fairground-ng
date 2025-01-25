import React from "react";

const BusinessCard = () => {
    return (
        <div className="max-w-sm my-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src="https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Most%20Expensive%20Nike%20Shoes%20Ever-jpg.jpeg?width=1600&height=900&name=Most%20Expensive%20Nike%20Shoes%20Ever-jpg.jpeg" // Replace with your image URL
                    alt="Business Banner"
                    className="w-full h-36 object-cover"
                />
                <div className="absolute w-14 h-14 bottom-2 left-2 bg-white p-1 rounded-full overflow-hidden shadow-md">
                    <img
                        src="https://res.cloudinary.com/dmubfrefi/image/private/s--OPpDHsl3--/c_crop,h_2728,w_4090,x_334,y_0/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs" // Replace with your logo URL
                        alt="Logo"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Nike Fashion Store Ltd.
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    Beside Pados Filing Station, Inec Road, Kpansia, Yenagoa, Bayelsa
                    State
                </p>
                <div className="mt-4">
                    <button className="w-full py-2 text-sm font-medium text-white bg-[#8B2C4D] rounded-lg shadow-md hover:bg-[#72243f]">
                        Chat Seller
                    </button>
                    <button className="w-full py-2 mt-2 text-sm font-medium text-[#8B2C4D] bg-transparent border-2 border-[#8B2C4D] rounded-lg hover:bg-[#8B2C4D] hover:text-white">
                        View Store
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
