import React from 'react';
import products from '@/utils/products';
import formatPrice from '@/utils/formatPrice';
import PriceHistoryChart from '@/components/Store/PriceHistoryChart';
import BusinessCard from '@/components/Store/BusinessCard';

interface PageProps {
    params: {
        id: string;
    };
}

// This will get the `id` from the dynamic route parameter
const page = ({ params: { id } }: PageProps) => {
    // Filter the products array based on the `id` passed in the URL
    const product = products.find((product) => product.id === parseInt(id));

    return (
        <div className='mx-auto'>
            {product ? (
                <div className='flex items-start justify-between space-x-5'>
                    <div className='w-[55%]'>
                        <img
                            src={product.images[0]?.imgUrl || ''}
                            alt={product.name || 'Product'}
                            className='rounded-md h-72 border border-gray-200'
                        />
                        <div className="flex flex-wrap">
                            {product.images.map((images, index) => (
                                <div key={index} className="w-24 h-24 m-1 border border-gray-300 rounded-md overflow-hidden">
                                    <img
                                        src={images.imgUrl}
                                        alt={`Uploaded ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='my-5'>
                            <h3 className='font-semibold text-lg'>Description</h3>
                            <p className='mt-2 text-xs leading-loose'>{product.description}</p>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div className='border border-gray-200 shadow-sm rounded p-2 space-y-1 text-gray-700 flex flex-col'>
                            <div>
                                <h3 className='text-[14px] font-semibold font-montserrat'>{product.name}</h3>
                                <p className='text-xs'>{product?.store?.name}</p>
                                <p className='font-montserrat text-sm font-semibold'>{formatPrice(product.amount)}</p>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <button className='bg-[#a22e50] hover:bg-[#d75c77] text-white text-[12px] p-2 rounded-md font-montserrat font-medium'>Place Order</button>
                                {/* <button className='bg-[#a22e50] hover:bg-[#d75c77] text-white text-[12px] p-2 rounded-md font-montserrat font-medium'>Save for later</button> */}
                                <button className='hover:bg-[#d75c77] hover:text-white border border-[#d75c77] text-[#d75c77] text-[12px] p-2 rounded-md font-montserrat font-medium'>Save for later</button>
                            </div>
                        </div>
                        <BusinessCard />
                        {/* <PriceHistoryChart priceHistory={product.priceHistory} /> */}
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default page;

