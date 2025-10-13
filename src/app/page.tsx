import { Hero } from "@/components/home/hero";
import { RecentPosts } from "@/components/home/recent-posts";
import { FeaturedAudio } from "@/components/home/featured-audio";
import { LatestNews } from "@/components/home/latest-news";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPosts />
      <FeaturedAudio />
      <LatestNews />
    </>
  );
}
