export const getPhotosDetailsById = async (id) => {
    const res = await fetch('https://pixgen-ai-zabedfolio.vercel.app/data/data.json');
    const data = await res.json();
    return data.find(item => item.id === Number(id));
};