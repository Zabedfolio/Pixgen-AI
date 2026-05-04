import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://pixgen-ai-zabedfolio.vercel.app/data.json')
    const photos = await res.json()
    const photo = photos.find(p => p.id == Number(id))

    if (!photo) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-gray-400 font-mono text-sm">Photo not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">

            {/* Hero Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-gray-100 group">
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Top-left badge */}
                <div className="absolute top-5 left-5 bg-white/80 border border-black/10 backdrop-blur-md text-purple-600 font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">
                    AI Generated
                </div>

                {/* Top-right resolution */}
                <div className="absolute top-5 right-5 bg-white/80 border border-black/10 backdrop-blur-md text-gray-500 font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full">
                    {photo.resolution}
                </div>

                {/* Bottom-right stats */}
                <div className="absolute bottom-5 right-5 flex gap-2.5">
                    <div className="bg-white/80 border border-black/10 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                        {photo.likes}
                    </div>
                    <div className="bg-white/80 border border-black/10 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                        {photo.downloads}
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="px-6 py-7 max-w-3xl">

                {/* Title row */}
                <div className="flex items-start justify-between gap-4 mb-1">
                    <h1 className="text-[22px] font-medium leading-snug tracking-tight text-gray-900">
                        {photo.title}
                    </h1>
                    <span className="shrink-0 mt-1 bg-purple-50 border border-purple-200 text-purple-600 font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md">
                        {photo.model}
                    </span>
                </div>

                <p className="text-[10px] font-mono text-gray-400 mb-4 tracking-wider">
                    #photo_{String(photo.id).padStart(5, '0')}
                </p>

                {/* Prompt block */}
                <div className="bg-gray-50 border-l-2 border-purple-400 border-y border-r border-gray-200 rounded-r-lg px-4 py-3 mb-6">
                    <p className="text-[9px] font-mono tracking-[0.15em] uppercase text-purple-500 mb-1.5">
                        Prompt
                    </p>
                    <p className="text-[13px] leading-relaxed text-gray-500 italic">
                        {photo.prompt}
                    </p>
                </div>

                {/* Meta cards */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {[
                        { label: 'Model', value: photo.model },
                        { label: 'Resolution', value: photo.resolution },
                        { label: 'Category', value: photo.category },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className="bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors rounded-xl px-4 py-3.5 flex flex-col gap-1.5"
                        >
                            <span className="text-[9px] font-mono tracking-[0.14em] uppercase text-gray-400">
                                {label}
                            </span>
                            <span className="text-[13px] font-medium text-gray-800">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="mb-7">
                    <p className="text-[9px] font-mono tracking-[0.14em] uppercase text-gray-400 mb-3">
                        Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {photo.tags?.map(tag => (
                            <span
                                key={tag}
                                className="border border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 text-gray-500 font-mono text-[11px] tracking-wide px-3 py-1 rounded-full cursor-pointer transition-all duration-200"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-6" />

                {/* Actions */}
                <div className="flex gap-2.5">
                    <a
                        href={photo.imageUrl}
                        download
                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm rounded-xl py-3.5 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-px active:translate-y-0"
                    >
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                            <path d="M8 1v9M4.5 7l3.5 3.5L11.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        Download Full Resolution
                    </a>

                    <button className="bg-white border border-gray-200 hover:border-rose-300 hover:text-rose-500 hover:bg-rose-50 text-gray-400 w-[52px] rounded-xl flex items-center justify-center transition-all duration-200">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 13.5S2 9.5 2 5.5A3.5 3.5 0 0 1 8 3.93 3.5 3.5 0 0 1 14 5.5C14 9.5 8 13.5 8 13.5Z" stroke="currentColor" strokeWidth="1.3"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PhotoDetailsPage;