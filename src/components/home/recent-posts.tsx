import { posts } from '@/lib/data';
import { PostCard } from './post-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function RecentPosts() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Últimas do Blog</h2>
          <Button variant="link" className="mt-4 md:mt-0 text-primary text-base px-0 hover:no-underline">
            Ver todas as postagens <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0, 4).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
