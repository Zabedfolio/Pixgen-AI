import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import Link from 'next/link';
import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

const TopGenerations = async({searchParams}) => {

    const {category} = await searchParams;

    const res = await fetch('https://pixgen-ai-zabedfolio.vercel.app/data.json');
    const photos = await res.json();

    

    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos
    // const topPhotos = photos.slice(0,8);
    // console.log(photos, "photos")
    return (
        <div className='container mx-auto space-y-6'>
            <h1 className='font-bold text-2xl my-5'>Top Generations</h1>
            <Category></Category>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    filteredPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;