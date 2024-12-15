"use client";

import { Button } from "@/components/ui/button";
import { tags } from "@/lib/placeholders";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const TRANSLATE_AMOUNT = 200;

export default function Tags() {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [tags, translate]);

  return (
    <div className="overflow-hidden py-2 relative">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap items-center gap-2 transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {tags.map((item, i) => (
          <Button key={i} variant="secondary" className={``}>
            {item}
          </Button>
        ))}
      </div>

      {isLeftVisible && (
        <div className="flex items-center absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-background from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTranslate(() => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              })
            }
          >
            <IoChevronBack />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="flex items-center absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-l from-background from-50% to-transparent w-24 h-full justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() =>
              setTranslate(() => {
                if (containerRef.current == null) return translate;

                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;

                if (newTranslate + width >= edge) return edge - width;
                return newTranslate;
              })
            }
          >
            <IoChevronForward />
          </Button>
        </div>
      )}
    </div>
  );
}
