import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async({searchParams}) => {
    const params = await searchParams;
    const { category } = params;
    const res = await fetch('https://pixgen-ai-zabedfolio.vercel.app/data/data.json');
    const photos = await res.json();
    // const topPhotos = photos.slice(0,8);
    // console.log(photos, "photos")
    let filteredPhotos;
    if(category){
        filteredPhotos = photos.filter(photo => photo.category.toLowerCase()== category.toLowerCase());
    }else{
        filteredPhotos= photos;
    }


    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-2xl my-5'>All Photos</h1>
            <Category></Category>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    filteredPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;