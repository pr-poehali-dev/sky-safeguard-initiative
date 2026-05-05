export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes rock {
          0%   { transform: rotate(-12deg) translateY(0px); }
          50%  { transform: rotate(12deg) translateY(-6px); }
          100% { transform: rotate(-12deg) translateY(0px); }
        }
        @keyframes shadow-pulse {
          0%   { transform: scaleX(1); opacity: 0.25; }
          50%  { transform: scaleX(0.7); opacity: 0.12; }
          100% { transform: scaleX(1); opacity: 0.25; }
        }
        .rocking-horse {
          animation: rock 1.6s ease-in-out infinite;
          transform-origin: center bottom;
        }
        .horse-shadow {
          animation: shadow-pulse 1.6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center select-none">
        <div className="rocking-horse">
          <svg width="340" height="300" viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rockers */}
            <ellipse cx="170" cy="278" rx="130" ry="18" fill="#8B5E3C" opacity="0.6" />
            <path d="M60 270 Q170 240 280 270" stroke="#6B4226" strokeWidth="14" strokeLinecap="round" fill="none"/>

            {/* Body */}
            <ellipse cx="170" cy="190" rx="72" ry="54" fill="#C8813A" />
            <ellipse cx="170" cy="190" rx="72" ry="54" fill="url(#bodyGrad)" />

            {/* Legs */}
            <rect x="118" y="224" width="18" height="52" rx="9" fill="#A0621E" transform="rotate(-8 118 224)"/>
            <rect x="148" y="228" width="18" height="52" rx="9" fill="#A0621E" transform="rotate(4 148 228)"/>
            <rect x="178" y="228" width="18" height="52" rx="9" fill="#A0621E" transform="rotate(-4 178 228)"/>
            <rect x="208" y="224" width="18" height="52" rx="9" fill="#A0621E" transform="rotate(8 208 224)"/>

            {/* Hooves */}
            <ellipse cx="118" cy="272" rx="11" ry="7" fill="#5C3D1A" transform="rotate(-8 118 272)"/>
            <ellipse cx="150" cy="276" rx="11" ry="7" fill="#5C3D1A" transform="rotate(4 150 276)"/>
            <ellipse cx="180" cy="276" rx="11" ry="7" fill="#5C3D1A" transform="rotate(-4 180 276)"/>
            <ellipse cx="212" cy="272" rx="11" ry="7" fill="#5C3D1A" transform="rotate(8 212 272)"/>

            {/* Neck */}
            <path d="M190 150 Q230 130 235 100" stroke="#C8813A" strokeWidth="40" strokeLinecap="round" fill="none"/>
            <path d="M190 150 Q230 130 235 100" stroke="#D4914A" strokeWidth="24" strokeLinecap="round" fill="none" opacity="0.5"/>

            {/* Head */}
            <ellipse cx="240" cy="88" rx="38" ry="30" fill="#C8813A" transform="rotate(-20 240 88)"/>

            {/* Ear */}
            <path d="M222 66 L215 48 L232 58 Z" fill="#A0621E"/>
            <path d="M222 66 L218 52 L229 60 Z" fill="#E8A870"/>

            {/* Eye */}
            <circle cx="252" cy="82" r="7" fill="white"/>
            <circle cx="254" cy="81" r="4" fill="#2C1A0E"/>
            <circle cx="256" cy="79" r="1.5" fill="white"/>

            {/* Nostril */}
            <ellipse cx="268" cy="96" rx="5" ry="3" fill="#A0621E" transform="rotate(-20 268 96)"/>

            {/* Mouth smile */}
            <path d="M263 100 Q270 106 278 102" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

            {/* Mane */}
            <path d="M222 68 Q205 55 210 35 Q218 50 225 40 Q228 58 238 48 Q235 65 245 60" fill="#5C3D1A"/>

            {/* Tail */}
            <path d="M100 175 Q70 165 60 145 Q80 155 85 135 Q90 158 110 150" fill="#5C3D1A"/>

            {/* Saddle */}
            <ellipse cx="165" cy="168" rx="42" ry="18" fill="#8B2020" transform="rotate(-5 165 168)"/>
            <ellipse cx="165" cy="165" rx="38" ry="12" fill="#B03030" transform="rotate(-5 165 165)"/>

            {/* Saddle detail */}
            <path d="M130 163 Q165 152 200 163" stroke="#D4604A" strokeWidth="2" fill="none" opacity="0.7"/>

            {/* Stirrup */}
            <line x1="145" y1="180" x2="138" y2="208" stroke="#6B4226" strokeWidth="3"/>
            <rect x="130" y="207" width="18" height="8" rx="4" fill="#6B4226"/>

            {/* Wooden texture lines on body */}
            <path d="M140 175 Q170 170 200 175" stroke="#B07030" strokeWidth="1.5" fill="none" opacity="0.4"/>
            <path d="M135 190 Q170 185 205 190" stroke="#B07030" strokeWidth="1.5" fill="none" opacity="0.4"/>

            {/* Dots decoration */}
            <circle cx="160" cy="200" r="4" fill="#D4604A" opacity="0.8"/>
            <circle cx="175" cy="205" r="3" fill="#D4604A" opacity="0.8"/>
            <circle cx="188" cy="198" r="4" fill="#D4604A" opacity="0.8"/>

            <defs>
              <radialGradient id="bodyGrad" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#E09A50"/>
                <stop offset="100%" stopColor="#A0621E" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Shadow */}
        <div
          className="horse-shadow"
          style={{
            width: 180,
            height: 18,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.18)",
            marginTop: -12,
            filter: "blur(6px)",
          }}
        />
      </div>
    </div>
  )
}
