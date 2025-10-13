import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Post } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group shadow-sm hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <Image
            src={post.image.imageUrl}
            alt={post.image.description}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={post.image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Badge variant="secondary" className="mb-2 uppercase text-xs tracking-wider font-semibold">{post.category}</Badge>
        <h3 className="font-headline text-2xl font-bold leading-tight mb-2">
          <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{post.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href="#" className="flex items-center text-sm font-semibold text-primary hover:underline">
          Ler mais <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
