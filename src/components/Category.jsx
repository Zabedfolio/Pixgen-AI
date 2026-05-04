"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Category = () => {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get("category")?.toLowerCase();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://pixgen-eta.vercel.app/category.json")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">

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

                {categories.map((category) => {
                    const isActive = activeCategory === category.name.toLowerCase();
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