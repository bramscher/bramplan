/**
 * BramPlan wordmark — a refined dot-matrix "B" mark (a modern nod to the
 * original site's pixelated logo) followed by the wordmark in serif.
 */
export function Wordmark({
  className = "",
  markClassName = "text-bronze",
  textClassName = "text-ink",
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  // 5x5 dot matrix spelling a "B" — 1 = filled dot.
  const matrix = [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 0],
  ];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className={markClassName}
        aria-hidden="true"
        fill="currentColor"
      >
        {matrix.flatMap((row, r) =>
          row.map((cell, c) =>
            cell ? (
              <circle key={`${r}-${c}`} cx={2.5 + c * 4.3} cy={2.5 + r * 4.3} r={1.5} />
            ) : null,
          ),
        )}
      </svg>
      <span
        className={`font-serif text-xl font-semibold tracking-tight ${textClassName}`}
      >
        BramPlan
      </span>
    </span>
  );
}
