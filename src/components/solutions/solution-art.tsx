import { useId } from "react";
import type { ArtId } from "@/data/solutions";

const gold = "#e0c35a";
const rose = "#fb7185";
const paper = "#f8fafc";
const line = "#94a3b8";

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const uid = useId().replace(/:/g, "");
  const wash = `${uid}-wash`;
  const glow = `${uid}-glow`;

  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={title} className="h-auto w-full">
      <defs>
        <linearGradient id={wash} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2740" />
          <stop offset="55%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <radialGradient id={glow} cx="78%" cy="18%" r="62%">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.42" />
          <stop offset="48%" stopColor="#e11d48" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0b1220" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="420" rx="28" fill={`url(#${wash})`} />
      <rect width="640" height="420" rx="28" fill={`url(#${glow})`} />
      {children}
    </svg>
  );
}

const scenes: Record<ArtId, () => React.ReactNode> = {
  websites: () => (
    <g>
      <rect x="70" y="70" width="500" height="280" rx="18" fill="#0f172a" stroke={gold} />
      <rect x="70" y="70" width="500" height="42" rx="18" fill="#111827" />
      <circle cx="98" cy="91" r="6" fill={rose} />
      <circle cx="118" cy="91" r="6" fill={gold} />
      <rect x="100" y="140" width="180" height="16" rx="8" fill={gold} />
      <rect x="100" y="170" width="260" height="8" rx="4" fill={line} opacity="0.55" />
      <rect x="100" y="188" width="220" height="8" rx="4" fill={line} opacity="0.35" />
      <rect x="100" y="230" width="110" height="36" rx="18" fill={rose} />
      <rect x="390" y="140" width="140" height="150" rx="14" fill="#1e293b" stroke={paper} strokeOpacity="0.25" />
    </g>
  ),
  stores: () => (
    <g>
      <rect x="80" y="80" width="300" height="260" rx="16" fill="#0f172a" stroke={gold} />
      <rect x="104" y="108" width="110" height="90" rx="10" fill={gold} opacity="0.9" />
      <rect x="228" y="108" width="120" height="12" rx="6" fill={paper} />
      <rect x="228" y="132" width="90" height="8" rx="4" fill={line} opacity="0.5" />
      <rect x="228" y="160" width="70" height="24" rx="12" fill={rose} />
      <rect x="400" y="150" width="160" height="180" rx="16" fill="#111827" stroke={paper} strokeOpacity="0.3" />
      <rect x="422" y="176" width="116" height="14" rx="7" fill={gold} />
      <rect x="422" y="206" width="116" height="10" rx="5" fill={line} opacity="0.4" />
      <rect x="422" y="228" width="90" height="10" rx="5" fill={line} opacity="0.3" />
      <rect x="422" y="270" width="116" height="32" rx="16" fill={rose} />
    </g>
  ),
  design: () => (
    <g>
      <rect x="90" y="90" width="220" height="240" rx="20" fill={gold} />
      <rect x="250" y="130" width="280" height="180" rx="20" fill="#0f172a" stroke={paper} strokeOpacity="0.4" />
      <circle cx="160" cy="170" r="36" fill="#0b1220" />
      <rect x="280" y="168" width="160" height="12" rx="6" fill={rose} />
      <rect x="280" y="196" width="210" height="8" rx="4" fill={line} opacity="0.55" />
      <rect x="280" y="216" width="140" height="8" rx="4" fill={line} opacity="0.35" />
    </g>
  ),
  payments: () => (
    <g>
      <rect x="150" y="110" width="340" height="200" rx="18" fill="#0f172a" stroke={gold} strokeWidth="2" />
      <rect x="150" y="150" width="340" height="36" fill={gold} opacity="0.85" />
      <rect x="180" y="230" width="80" height="12" rx="6" fill={line} opacity="0.5" />
      <rect x="180" y="252" width="120" height="12" rx="6" fill={paper} opacity="0.8" />
      <circle cx="430" cy="250" r="22" fill="none" stroke={rose} strokeWidth="3" />
      <path d="M430 238 v8 a8 8 0 0 1 0 16" fill="none" stroke={rose} strokeWidth="3" />
    </g>
  ),
  email: () => (
    <g>
      <rect x="120" y="120" width="400" height="200" rx="16" fill="#0f172a" stroke={gold} />
      <path d="M120 140 L320 250 L520 140" fill="none" stroke={rose} strokeWidth="3" />
      <path d="M120 300 L240 210" fill="none" stroke={gold} strokeWidth="2" opacity="0.7" />
      <path d="M520 300 L400 210" fill="none" stroke={gold} strokeWidth="2" opacity="0.7" />
    </g>
  ),
  coupons: () => (
    <g>
      <path
        d="M120 130 h400 v50 a24 24 0 0 0 0 48 v50 H120 v-50 a24 24 0 0 0 0 -48 z"
        fill="#0f172a"
        stroke={gold}
        strokeWidth="3"
      />
      <path d="M300 140 v140" stroke={rose} strokeDasharray="6 8" strokeWidth="2" />
      <text x="160" y="220" fill={gold} fontSize="42" fontFamily="Georgia, serif">
        %
      </text>
      <rect x="340" y="190" width="140" height="14" rx="7" fill={paper} opacity="0.8" />
      <rect x="340" y="216" width="90" height="10" rx="5" fill={line} opacity="0.45" />
    </g>
  ),
  social: () => (
    <g>
      <circle cx="200" cy="210" r="54" fill="none" stroke={gold} strokeWidth="3" />
      <circle cx="420" cy="150" r="40" fill="none" stroke={rose} strokeWidth="3" />
      <circle cx="450" cy="280" r="46" fill="none" stroke={paper} strokeOpacity="0.7" strokeWidth="3" />
      <path d="M250 190 L384 160" stroke={gold} strokeWidth="2" />
      <path d="M246 230 L410 270" stroke={rose} strokeWidth="2" />
      <circle cx="200" cy="210" r="8" fill={gold} />
      <circle cx="420" cy="150" r="7" fill={rose} />
      <circle cx="450" cy="280" r="7" fill={paper} />
    </g>
  ),
  logistics: () => (
    <g>
      <rect x="90" y="160" width="90" height="70" rx="8" fill={gold} />
      <rect x="200" y="145" width="100" height="85" rx="8" fill="#0f172a" stroke={paper} strokeOpacity="0.5" />
      <rect x="320" y="170" width="80" height="60" rx="8" fill={rose} />
      <path d="M410 200 H520" stroke={gold} strokeWidth="3" />
      <polygon points="520,188 548,200 520,212" fill={gold} />
      <rect x="140" y="270" width="360" height="6" rx="3" fill={line} opacity="0.35" />
    </g>
  ),
  seo: () => (
    <g>
      <circle cx="250" cy="200" r="70" fill="none" stroke={gold} strokeWidth="8" />
      <line x1="302" y1="250" x2="360" y2="310" stroke={gold} strokeWidth="10" strokeLinecap="round" />
      <polyline points="400,280 450,200 490,230 560,120" fill="none" stroke={rose} strokeWidth="4" />
      <circle cx="560" cy="120" r="7" fill={rose} />
    </g>
  ),
  analytics: () => (
    <g>
      {[70, 120, 90, 160, 130].map((h, i) => (
        <rect
          key={h}
          x={120 + i * 80}
          y={300 - h}
          width="46"
          height={h}
          rx="8"
          fill={i === 3 ? rose : gold}
          opacity={0.95 - i * 0.05}
        />
      ))}
      <line x1="100" y1="310" x2="540" y2="310" stroke={line} strokeOpacity="0.4" />
    </g>
  ),
  crm: () => (
    <g>
      <rect x="80" y="90" width="480" height="250" rx="16" fill="#0f172a" stroke={gold} />
      <circle cx="140" cy="160" r="28" fill={gold} />
      <rect x="186" y="146" width="140" height="12" rx="6" fill={paper} />
      <rect x="186" y="168" width="90" height="8" rx="4" fill={line} opacity="0.45" />
      <rect x="360" y="140" width="160" height="28" rx="14" fill={rose} />
      <rect x="120" y="230" width="400" height="10" rx="5" fill={line} opacity="0.3" />
      <rect x="120" y="252" width="280" height="10" rx="5" fill={line} opacity="0.2" />
      <rect x="120" y="274" width="180" height="10" rx="5" fill={gold} opacity="0.7" />
    </g>
  ),
  pipeline: () => (
    <g>
      {["New", "Talk", "Won"].map((_, i) => (
        <rect
          key={i}
          x={90 + i * 170}
          y="100"
          width="140"
          height="220"
          rx="14"
          fill="#0f172a"
          stroke={i === 2 ? rose : gold}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={`c-${i}`} x={108 + i * 170} y={130} width="104" height="48" rx="8" fill={i === 2 ? rose : gold} opacity="0.85" />
      ))}
    </g>
  ),
  acquisition: () => (
    <g>
      <path d="M120 90 H520 L440 210 H200 Z" fill="#0f172a" stroke={gold} />
      <path d="M200 210 H440 L390 310 H250 Z" fill="#111827" stroke={rose} />
      <rect x="286" y="330" width="68" height="28" rx="8" fill={gold} />
    </g>
  ),
  automation: () => (
    <g>
      <circle cx="180" cy="210" r="48" fill="none" stroke={gold} strokeWidth="8" />
      <circle cx="180" cy="210" r="10" fill={gold} />
      <circle cx="400" cy="150" r="36" fill="none" stroke={rose} strokeWidth="8" />
      <circle cx="460" cy="270" r="42" fill="none" stroke={paper} strokeOpacity="0.75" strokeWidth="8" />
      <path d="M226 190 L366 158" stroke={gold} strokeWidth="3" />
      <path d="M220 246 L424 262" stroke={rose} strokeWidth="3" />
    </g>
  ),
  mobile: () => (
    <g>
      <rect x="230" y="60" width="180" height="300" rx="28" fill="#0f172a" stroke={gold} strokeWidth="3" />
      <rect x="248" y="96" width="144" height="180" rx="8" fill="#111827" />
      <rect x="264" y="114" width="80" height="10" rx="5" fill={gold} />
      <rect x="264" y="136" width="112" height="8" rx="4" fill={line} opacity="0.4" />
      <rect x="264" y="170" width="112" height="48" rx="8" fill={rose} opacity="0.9" />
      <circle cx="320" cy="320" r="8" fill={paper} opacity="0.7" />
    </g>
  ),
  blockchain: () => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${110 + i * 150} ${150 + (i % 2) * 20})`}>
          <rect width="110" height="110" rx="12" fill="#0f172a" stroke={i === 1 ? rose : gold} strokeWidth="3" />
          <rect x="28" y="28" width="54" height="54" rx="6" fill={i === 1 ? rose : gold} opacity="0.85" />
        </g>
      ))}
      <path d="M220 205 H260" stroke={gold} strokeWidth="3" />
      <path d="M370 215 H410" stroke={rose} strokeWidth="3" />
    </g>
  ),
};

export function SolutionArt({
  id,
  title,
}: {
  id: ArtId;
  title: string;
}) {
  const Scene = scenes[id];
  return (
    <Panel title={title}>
      <Scene />
    </Panel>
  );
}
