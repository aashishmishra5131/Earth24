import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const startIndex = activeIndex * 5;
    const items = data.slice(startIndex, startIndex + 10).map((item) => <HomeSectionCard product={item} />);

    const slidPrev = () => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);
    const slidNext = () => setActiveIndex(activeIndex < data.length / 5.5 - 1 ? activeIndex + 1 : activeIndex);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className='px-4 lg:px-8'>
            <h2 className='text-2xl font-extrabold text-gray-800'>{sectionName}</h2>
            <div className='relative p-9'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== data.length / 5.5 - 1 &&
                    <Button variant="contained" className="z-70" onClick={slidNext} sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)" }} aria-label="next">
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
                    </Button>
                }
                <Button variant="contained" className="z-70" onClick={slidPrev} sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(50%) rotate(90deg)" }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
