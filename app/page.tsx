import Tags from "@/components/shared/tags";
import VideoCard from "@/components/shared/video-card";
import videos from "@/data/videos";

export default function HomePage() {
  return (
    <div className="py-2 pr-4 space-y-2">
      <Tags />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-20">
        {videos.map((item) => (
          <VideoCard key={item.id} video={item} />
        ))}
      </div>
    </div>
  );
}
