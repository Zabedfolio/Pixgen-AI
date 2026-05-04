import React from "react";
import { Card, Chip, Separator } from "@heroui/react";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import Image from "next/image";

const PhotoCard = ({ photo }) => {
    return (
        <Card className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            {/* Image Section */}
            <div className="relative aspect-square w-full overflow-hidden">
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Category chip */}
                <Chip
                    size="sm"
                    className="absolute right-3 top-3 bg-white/80 backdrop-blur-md text-xs font-medium"
                >
                    {photo.category}
                </Chip>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                
                {/* Title */}
                <h2 className="text-base font-semibold text-zinc-800 line-clamp-1">
                    {photo.title}
                </h2>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-zinc-500">
                    
                    <div className="flex items-center gap-2">
                        <FaHeart className="text-rose-500" />
                        <span className="font-medium">{photo.likes}</span>
                    </div>

                    <Separator orientation="vertical" className="h-4" />

                    <div className="flex items-center gap-2">
                        <BiDownload className="text-blue-500 text-lg" />
                        <span className="font-medium">{photo.downloads}</span>
                    </div>
                </div>

                {/* CTA */}
                <Link href={`/all-photos/${photo.id}`}>
                    <button className="w-full rounded-xl bg-zinc-900 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-700 active:scale-[0.98]">
                        View Details
                    </button>
                </Link>
            </div>
        </Card>
    );
};

export default PhotoCard;