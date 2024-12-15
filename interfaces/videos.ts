export interface iChannel {
  name: string;
  id: string;
  profileUrl: string;
}

export default interface iVideo {
  id: string;
  title: string;
  channel: iChannel;
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}
