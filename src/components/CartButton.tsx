import Link from "next/link";

const CartButton = ({ itemCount = 12 }) => {
  return (
    <Link href={'#'} className="flex items-center space-x-3 ">
      {/* SVG Cart Icon */}
      <div className="relative">
        <img
          src="/shopping-cart.svg"
          alt="Cart"
          className="w-8 h-8 text-gray-800"
        />

        {/* Item Count Badge */}
        <span className="absolute -top-2 -right-3 bg-[#d75c77] text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
          {itemCount || 0}
        </span>
      </div>

      {/* "Cart" Text */}
      <span className="text-lg font-medium text-gray-800 hover:text-gray-300">Cart</span>
    </Link>
  );
};

export default CartButton;
