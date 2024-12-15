import Link from "next/link";
import { IoLogoYoutube } from "react-icons/io5";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-0.5">
      <button className="relative after:absolute after:size-1/2 after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-foreground after:-z-[1]">
        <IoLogoYoutube className="text-red-600 size-7" />
      </button>

      <div className="font-medium text-[22px] tracking-[-0.125em] leading-3">
        <span className="">You</span>
        <span className="-ml-0.5">Tube</span>
      </div>

      <span className="text-[9px] self-start text-foreground/60 ml-1 mb-6">
        VN
      </span>
    </Link>
  );
}
