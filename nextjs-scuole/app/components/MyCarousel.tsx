import React from 'react';
import{
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '/workspaces/scuole/nextjs-scuole/components/ui/carousel';

const imageUrls = [
    '/LiceoDepero.PNG',
    '/LiceoRosmini.PNG',
    '/LiceoArcivescovile.PNG',
    '/Marconi.PNG',
    '/DonMilani.PNG',
    '/Barelli.PNG',
    '/UPT.PNG',

];

const MyCarousel: React.FC = () => {
    return (
        <div className="flex justify-center">
            <Carousel className='carrello'>
            <CarouselPrevious />
            <CarouselContent>
                {imageUrls.map((url, index) => (
                    <CarouselItem key={index}>
                        <img src={url} alt={`Image ${index + 1}`} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
            </Carousel>
        </div>
        
    );
};

export default MyCarousel;