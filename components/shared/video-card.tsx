"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import iVideo from "@/interfaces/videos";
import { formatDuration, formatTimeAgo } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuDot } from "react-icons/lu";

interface Props {
  video: iVideo;
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export default function VideoCard({ video }: Props) {
  const {
    id,
    channel,
    duration,
    postedAt,
    thumbnailUrl,
    title,
    videoUrl,
    views,
  } = video;
  const { id: channelId, name: channelName, profileUrl } = channel;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div className="space-y-2">
      <Link
        href={`/watch?v=${id}`}
        className="relative"
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
      >
        <figure className="relative aspect-video">
          <Image
            src={thumbnailUrl}
            alt="video's thumbnail"
            fill
            className={`duration-200 transition-[border-radius] ${
              isVideoPlaying ? "rounded-none" : "rounded-xl"
            }`}
          />
        </figure>

        <span className="absolute bottom-1 right-1 bg-background px-1.5 rounded-md text-sm">
          {formatDuration(duration)}
        </span>

        <video
          src={videoUrl}
          ref={videoRef}
          muted
          playsInline
          className={`rounded-lg h-full hover:rounded-none block absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          }`}
        />
      </Link>

      <section className="flex gap-2">
        <Link href={`/@${channelId}`} className="flex-shrink-0">
          <Avatar>
            <AvatarImage src={profileUrl} alt="user's avatar" />
            <AvatarFallback>{channelName}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex flex-col gap-0.5">
          <Link
            href={`/watch?v=${id}`}
            className="font-semibold line-clamp-2 leading-tight cursor-pointer"
          >
            {title}
          </Link>

          <Link
            href={`/@${channelId}`}
            className="text-xs text-foreground/60 mt-0.5 hover:text-foreground duration-300"
          >
            {channelName}
          </Link>

          <div className="text-xs text-foreground/60 flex items-center">
            <span>{VIEW_FORMATTER.format(views)} views</span>
            <LuDot />
            <span>{formatTimeAgo(postedAt)}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
