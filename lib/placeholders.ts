import iLink from "@/interfaces/link";
import {
  IoAlbums,
  IoAlbumsOutline,
  IoFlag,
  IoFlagOutline,
  IoFlame,
  IoFlameOutline,
  IoGameController,
  IoGameControllerOutline,
  IoHome,
  IoHomeOutline,
  IoMusicalNotes,
  IoMusicalNotesOutline,
  IoNewspaper,
  IoNewspaperOutline,
  IoPersonCircle,
  IoPersonCircleOutline,
  IoPlay,
  IoPlayOutline,
  IoReloadCircle,
  IoReloadCircleOutline,
  IoSettings,
  IoSettingsOutline,
  IoTrophy,
  IoTrophyOutline,
} from "react-icons/io5";

export const sideLinks: iLink[] = [
  {
    title: "",
    children: [
      {
        title: "Home",
        icon: IoHomeOutline,
        iconActive: IoHome,
        href: "/",
      },
      {
        title: "Shorts",
        icon: IoPlayOutline,
        iconActive: IoPlay,
        href: "/shorts",
      },
      {
        title: "Subciptions",
        icon: IoAlbumsOutline,
        iconActive: IoAlbums,
        href: "/subciptions",
      },
    ],
  },
  {
    title: "",
    children: [
      {
        title: "You",
        icon: IoPersonCircleOutline,
        iconActive: IoPersonCircle,
        href: "/feed/you",
      },
      {
        title: "History",
        icon: IoReloadCircleOutline,
        iconActive: IoReloadCircle,
        href: "/feed/history",
      },
    ],
  },
  {
    title: "Explore",
    children: [
      {
        title: "Trending",
        icon: IoFlameOutline,
        iconActive: IoFlame,
        href: "/feed/trending",
      },
      {
        title: "Music",
        icon: IoMusicalNotesOutline,
        iconActive: IoMusicalNotes,
        href: "/feed/music",
      },
      {
        title: "Gaming",
        icon: IoGameControllerOutline,
        iconActive: IoGameController,
        href: "/feed/gaming",
      },
      {
        title: "News",
        icon: IoNewspaperOutline,
        iconActive: IoNewspaper,
        href: "/feed/news",
      },
      {
        title: "Sports",
        icon: IoTrophyOutline,
        iconActive: IoTrophy,
        href: "/feed/sports",
      },
    ],
  },
  {
    title: "",
    children: [
      {
        title: "Settings",
        icon: IoSettingsOutline,
        iconActive: IoSettings,
        href: "/settings",
      },
      {
        title: "Report history",
        icon: IoFlagOutline,
        iconActive: IoFlag,
        href: "/reporthistory",
      },
    ],
  },
];

export const tags = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
];
