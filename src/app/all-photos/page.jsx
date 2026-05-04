import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import Link from 'next/link';
import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

const TopGenerations = async() => {

    const res = await fetch('https://pixgen-ai-zabedfolio.vercel.app/data.json');
    const photos = await res.json();
    // const topPhotos = photos.slice(0,8);
    // console.log(photos, "photos")
    return (
        <div className='container mx-auto space-y-6'>
            <h1 className='font-bold text-2xl my-5'>Top Generations</h1>
            <Category></Category>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link href={'/all-photos'}>
                    <button className='btn btn-secondary text-white mt-8 rounded-full'>View All Photos <HiArrowUpRight /></button>
                </Link>
            </div>
        </div>
    );
};

export default TopGenerations;