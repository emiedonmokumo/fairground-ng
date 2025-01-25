import formatPrice from "@/utils/formatPrice";
import Link from "next/link";

const ProductCard = ({ product }: { product: any}) => {
    return (
        <Link href={`/store/products/${product.id}`} className="w-[18%] bg-white rounded-lg hover:shadow-md mt-5 border border-gray-100">
            {/* Product Image */}
            <div className="h-32 rounded-t-xl flex items-center justify-center">
                <img
                    src={product.images[0].imgUrl} // Replace with the actual image URL
                    alt="Product"
                    className="object-cover rounded-t-lg h-full"
                />
            </div>

            {/* Product Details */}
            <div className="p-2 flex flex-col space-y-1">
                <div>
                    <h3 className="font-medium text-[12px] mb-1">{product.name}</h3>
                    <p className="text-gray-400 text-[10px]">Stainless Steel Ltd.</p>
                </div>
                <h1 className="font-bold text-[14px] font-montserrat">{formatPrice(product?.amount || 0)}</h1>
            </div>
        </Link>
    );
};

export default ProductCard;
