"use client";

import { Separator } from "@/components/ui/separator";
import { sideLinks } from "@/lib/placeholders";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const lastIndex = sideLinks.length - 1;

  return (
    <aside className="w-[300px] max-h-my overflow-y-auto">
      <div className="py-2 px-4">
        {sideLinks.map((item, i) => (
          <div key={i} className="">
            {item.title && (
              <p className="text-lg font-bold mb-1">{item.title}</p>
            )}

            {item.children.map((sub) => {
              const Icon = isActive(sub.href) ? sub.iconActive : sub.icon;
              return (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={`flex items-center gap-6 py-2.5 px-4 rounded-md hover:bg-secondary/60 duration-300 ${
                    isActive(sub.href) ? "bg-secondary" : "text-foreground/60"
                  }`}
                >
                  <Icon className="size-6" />
                  <span className="text-sm">{sub.title}</span>
                </Link>
              );
            })}

            {lastIndex !== i && <Separator className="my-2.5" />}
          </div>
        ))}
      </div>
    </aside>
  );
}
