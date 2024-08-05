import React, { useEffect, useRef } from 'react';
import { ClassType } from '../../config/config';
import './Gallery.css'

type Props = {
    classElements: Array<ClassType>
};
const Gallery = ({ classElements }: Props) => {
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current: gallery } = galleryRef;

        if (gallery) {
            const handleWheel = (event: WheelEvent) => {
                event.preventDefault();
                gallery.scrollLeft += event.deltaY;
            };

            gallery.addEventListener('wheel', handleWheel);
            return () => gallery.removeEventListener('wheel', handleWheel);
        }
    }, []);

    

    return (
        <div className="relative w-full overflow-x-auto overflow-y-hidden p-5 box-border custom-scrollbar">
            <div className="flex gap-4 min-w-max" ref={galleryRef}>
                {classElements.map((classElement, index) => (
                    <div className="relative group  w-[250px] h-[250px] md:w-[350px] md:h-[350px] flex-shrink-0" key={index}>
                        <img
                            src={classElement.image}
                            alt={classElement.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-primary-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                            <div className="text-white text-center p-4">
                                <h3 className="text-xl font-bold">{classElement.name}</h3>
                                {classElement.description && <p className="text-base mt-2 text-sm">{classElement.description}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Gallery;