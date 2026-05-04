import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mt-8 container mx-auto">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Turn Ideas into Stunning AI Art
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Generate high-quality images from simple text prompts.
          </p>

          <div className="flex gap-4 items-center">
            <Link href="#">
              <button className="btn bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 rounded-full border-none text-white shadow-none">
                Generate Now
              </button>
            </Link>

            <Link href="/pricing">
              <button className="text-white btn btn-outline rounded-full shadow-none hover:text-black">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;