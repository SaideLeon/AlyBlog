import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Music } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-artist');

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative container max-w-7xl h-full flex flex-col justify-end pb-12 md:pb-24 text-center md:text-left">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold !leading-tight tracking-tighter">
          Aly dos Santos
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl text-neutral-200 text-shadow">
          A alma e a paixão da Kizomba em cada nota. Explore meu mundo, minha música, minha história.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base rounded-full px-8">
            <Music className="mr-2 h-5 w-5" />
            Ouvir Agora
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-8 text-base">
            Explorar Blog <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
