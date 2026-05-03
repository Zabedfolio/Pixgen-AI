import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const TopGenerations = async() => {

    const res = await fetch('https://pixgen-ai-zabedfolio.vercel.app/data/data.json');
    const photos = await res.json();
    const topPhotos = photos.slice(0,8);
    // console.log(photos, "photos")
    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-2xl my-5'>Top Generations</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;