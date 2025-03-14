"use client"

import { useRef } from "react"

export function PartnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Partners data
  const partners = ["polibatam.png", "BFC.png", "barelang7.png", "barelang1.png", "barelang5.png", "barelang63.png", "barelangmarine.png", "barelangsky.png"]

  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <h3 className="font-medium text-white mb-6 text-center">Our Partners</h3>

      <div className="relative overflow-hidden w-full">
        {/* First set of logos that continuously slides */}
        <div
          ref={containerRef}
          className="flex gap-15 animate-marquee"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {partners.map((index) => (
            <div
              key={index}
              className="bg-transparent p-3 rounded-lg h-22 w-34 flex-shrink-0 flex items-center justify-center"
            >
              <img src={`/${index}?height=40&width=80`} alt={`Partner ${index}`} width={80} height={40} />
            </div>
          ))}

          {/* Duplicate logos to create a seamless loop */}
          {partners.map((index) => (
            <div
              key={`duplicate-${index}`}
              className="bg-transparent p-3 rounded-lg h-22 w-34 flex-shrink-0 flex items-center justify-center"
            >
              <img src={`/${index}?height=40&width=80`} alt={`Partner ${index}`} width={80} height={40} />
            </div>
          ))}

           {/* Additional duplicates to ensure smoother loop */}
           {partners.map((index) => (
            <div
              key={`duplicate-2-${index}`}
              className="bg-transparent p-3 rounded-lg h-22 w-34 flex-shrink-0 flex items-center justify-center"
            >
              <img src={`/${index}?height=40&width=80`} alt={`Partner ${index}`} width={80} height={40} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200%);
          }     
        }
      `}</style>
    </div>
  )
}

