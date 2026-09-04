"use client";

import { useState } from "react";

type ExpandableBioProps = {
  bio: string;
};

export function ExpandableBio({ bio }: ExpandableBioProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={`mt-3 text-sm leading-6 text-slate-300 ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {bio}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#3AA0C8] transition hover:text-[#F15A24]"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
