import React from 'react';
import{
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '/workspaces/scuole/nextjs-scuole/components/ui/carousel';

const imageUrls = [
    '/workspaces/scuole/nextjs-scuole/public/LiceoDepero.PNG',
    '/workspaces/scuole/nextjs-scuole/public/LiceoRosmini.PNG',
    '/workspaces/scuole/nextjs-scuole/public/LiceoArcivescovile.PNG',
    '/workspaces/scuole/nextjs-scuole/public/Marconi.PNG',
    '/workspaces/scuole/nextjs-scuole/public/DonMilani.PNG',
    '/workspaces/scuole/nextjs-scuole/public/Barelli.PNG',
    '/workspaces/scuole/nextjs-scuole/public/UPT.PNG',

];

const MyCarousel: React.FC = () => {
    return (
        <Carousel>
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
    );
};

export default MyCarousel;