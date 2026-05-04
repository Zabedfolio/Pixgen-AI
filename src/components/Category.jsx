import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async ({ searchParams }) => {
    const res = await fetch("https://pixgen-eta.vercel.app/category.json", {
        cache: "no-store",
    });

    const categories = await res.json();

    const activeCategory = searchParams?.category?.toLowerCase();

    return (
        <div className="mb-6">
            {/* Scrollable pill container */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
                
                {/* All button */}
                <Link href="/all-photos">
                    <Button
                        size="sm"
                        className={`rounded-full px-4 transition-all ${
                            !activeCategory
                                ? "bg-zinc-900 text-white"
                                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                        }`}
                    >
                        All
                    </Button>
                </Link>

                {/* Categories */}
                {categories.map((category) => {
                    const isActive =
                        activeCategory === category.name.toLowerCase();

                    return (
                        <Link
                            key={category.id}
                            href={`?category=${category.name.toLowerCase()}`}
                        >
                            <Button
                                size="sm"
                                className={`rounded-full px-4 whitespace-nowrap transition-all duration-200 ${
                                    isActive
                                        ? "bg-zinc-900 text-white shadow-md"
                                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                }`}
                            >
                                {category.name}
                            </Button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;