export default function Trueque() {
    return (
        <div className="relative w-96 h-64">
          <svg
            viewBox="0 0 240 120"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <path
                id="curvePath"
                d="M20,80 Q120,40 220,80"
                fill="none"
              />
            </defs>
            
            {/* Curved card background */}
            <path
              d="M10,30 Q120,0 230,30 L220,80 Q120,120 20,80 Z"
              fill="rgb(214, 197, 185)"
              className="drop-shadow-md"
            />
            
            {/* Curved text */}
            <text className="fill-white text-2xl font-serif">
              <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                TRUEQUE
              </textPath>
            </text>
          </svg>
        </div>
      )
    }