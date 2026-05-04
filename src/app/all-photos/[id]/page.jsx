import { getPhotosDetailsById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const PhotosDetailsPage = async ({ params }) => {
    const { id } = await params;
    const photos = await getPhotosDetailsById(id);

    return (
        <div className='container mx-auto px-4 py-10 max-w-5xl'>

            {/* Image */}
            <div className='rounded-3xl overflow-hidden border border-gray-200/20 dark:border-white/10 shadow-lg'>
                <Image
                    src={photos.imageUrl}
                    alt={photos.title}
                    width={1200}
                    height={700}
                    className='w-full object-cover hover:scale-[1.02] transition-transform duration-500'
                />
            </div>

            {/* Likes & Downloads */}
            <div className='flex items-center gap-6 mt-5 text-sm text-gray-500 dark:text-gray-400'>
                <span className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5'>
                    <span className='text-rose-500'>♥</span> {photos.likes}
                </span>
                <span className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5'>
                    <span>↓</span> {photos.downloads}
                </span>
            </div>

            {/* Title */}
            <h1 className='text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5'>
                {photos.title}
            </h1>

            {/* Prompt */}
            <p className='text-gray-500 dark:text-gray-400 mt-3 text-sm leading-relaxed max-w-2xl'>
                {photos.prompt}
            </p>

            {/* Meta */}
            <div className='mt-8 rounded-2xl border border-gray-200 dark:border-white/10 
            bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm 
            divide-y divide-gray-200 dark:divide-white/10'>

                <div className='flex justify-between items-center px-5 py-4 text-sm'>
                    <span className='text-gray-500 dark:text-gray-400'>Model</span>
                    <span className='font-medium text-gray-900 dark:text-white'>
                        {photos.model}
                    </span>
                </div>

                <div className='flex justify-between items-center px-5 py-4 text-sm'>
                    <span className='text-gray-500 dark:text-gray-400'>Resolution</span>
                    <span className='font-medium text-gray-900 dark:text-white'>
                        {photos.resolution}
                    </span>
                </div>

                <div className='flex justify-between items-center px-5 py-4 text-sm'>
                    <span className='text-gray-500 dark:text-gray-400'>Category</span>
                    <span className='font-medium text-gray-900 dark:text-white'>
                        {photos.category}
                    </span>
                </div>
            </div>

            {/* Tags */}
            <div className='flex gap-2 flex-wrap mt-5'>
                {photos.tags?.map(tag => (
                    <span
                        key={tag}
                        className='text-xs px-3 py-1.5 rounded-full 
                        bg-gray-100 dark:bg-white/5 
                        border border-gray-200 dark:border-white/10 
                        text-gray-600 dark:text-gray-300 
                        hover:bg-gray-200 dark:hover:bg-white/10 transition'
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Download button */}
            <button className='w-full mt-8 py-3.5 rounded-xl text-sm font-medium 
            text-white bg-gray-900 hover:bg-gray-800 
            dark:bg-white dark:text-black dark:hover:bg-gray-200 
            transition-all duration-300 shadow-md hover:shadow-lg'>
                Download
            </button>

        </div>
    );
};

export default PhotosDetailsPage;