import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { tracks } from '@/lib/data';
import { Play, Pause, SkipBack, SkipForward, ListMusic } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Progress } from '@/components/ui/progress';

export function FeaturedAudio() {
  const albumArt = PlaceHolderImages.find(p => p.id === 'album-art-1');
  
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Música em Destaque</h2>
        <Card className="overflow-hidden shadow-2xl shadow-primary/10 border-none">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0">
              {albumArt && (
                 <Image
                  src={albumArt.imageUrl}
                  alt={albumArt.description}
                  fill
                  className="object-cover"
                  data-ai-hint={albumArt.imageHint}
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r"></div>
            </div>
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col bg-card">
              <div className="flex-grow">
                <h3 className="font-headline text-3xl font-bold">Coração Vermelho</h3>
                <p className="text-muted-foreground text-lg mb-6">Do álbum 'Alma'</p>
                <div className="space-y-2">
                  {tracks.map((track, index) => (
                    <div key={track.id} className={`flex items-center p-3 rounded-lg transition-colors ${index === 0 ? 'bg-secondary' : 'hover:bg-muted/50'}`}>
                      <span className={`text-sm font-bold w-6 text-center ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}>{String(index + 1).padStart(2, '0')}</span>
                      <div className="ml-4 flex-grow">
                        <p className={`font-semibold ${index === 0 ? 'text-primary-foreground' : 'text-foreground'}`}>{track.title}</p>
                        <p className={`text-xs ${index === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{track.artist}</p>
                      </div>
                      <span className={`text-sm ${index === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{track.duration}</span>
                      <Button variant="ghost" size="icon" className={`ml-4 h-8 w-8 ${index === 0 ? 'text-primary-foreground hover:bg-white/20' : 'text-muted-foreground'}`}>
                        {index === 0 ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon"><SkipBack className="h-6 w-6" /></Button>
                        <Button variant="default" size="icon" className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"><Pause className="h-7 w-7" /></Button>
                        <Button variant="ghost" size="icon"><SkipForward className="h-6 w-6" /></Button>
                    </div>
                    <div className="w-full">
                       <Progress value={40} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
                            <span>1:23</span>
                            <span>3:45</span>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
