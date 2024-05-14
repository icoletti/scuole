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
            {/* Componente Carousel */}
            <Carousel className='carrello'>
                {/* Pulsante per scorrere all'immagine precedente */}
                <CarouselPrevious />
                <CarouselContent>
                    {/* Mappa l'array di URL delle immagini e crea un CarouselItem per ciascuno */}
                    {imageUrls.map((url, index) => (
                        <CarouselItem key={index}>
                            {/* Mostra l'immagine corrispondente all'URL */}
                            <img src={url} alt={`Immagine ${index + 1}`} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Pulsante per scorrere all'immagine successiva */}
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default MyCarousel;