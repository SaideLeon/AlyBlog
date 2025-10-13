import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { highlights } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function LatestNews() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container max-w-7xl">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Destaques e Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item) => (
            <Link key={item.id} href={item.link} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="relative w-24 h-24 md:w-32 md:h-24 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={item.image.imageHint}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold font-headline mb-2 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{item.description}</p>
                    <span className="flex items-center text-sm font-semibold text-primary">
                      Saber mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
