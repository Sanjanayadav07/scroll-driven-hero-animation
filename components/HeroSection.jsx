"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const carRef = useRef(null)
  const trailRef = useRef(null)
  const lettersRef = useRef([])
  const valueAddRef = useRef(null)
  const boxRefs = useRef([])

  useEffect(() => {
    const car = carRef.current
    const trail = trailRef.current
    const letters = lettersRef.current.filter(Boolean)
    const valueAdd = valueAddRef.current

    if (!car || !trail || !valueAdd) return

    const valueRect = valueAdd.getBoundingClientRect()
    const letterOffsets = letters.map((letter) => letter.offsetLeft)

    const roadWidth = window.innerWidth
    const carWidth = car.offsetWidth
    const endX = roadWidth - carWidth

    // Car + Trail + Letters
    gsap.to(car, {
      x: endX,
      ease: "none",
      scrollTrigger: {
        trigger: ".section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: ".track",
      },
      onUpdate: function () {
        const carX = gsap.getProperty(car, "x") + carWidth / 2
        letters.forEach((letter, i) => {
          const letterX = valueRect.left + letterOffsets[i]
          if (carX >= letterX) {
            letter.style.opacity = "1"
          } else {
            letter.style.opacity = "0"
          }
        })
        gsap.set(trail, { width: carX })
      },
    })

    // Animate stats boxes
    boxRefs.current.forEach((box, i) => {
      if (!box) return
      gsap.to(box, {
        opacity: 1,
        scrollTrigger: {
          trigger: ".section",
          start: `top+=${400 + i * 200} top`,
          end: `top+=${600 + i * 200} top`,
          scrub: true,
        },
      })
    })
  }, [])

  const headline = "WELCOME ITZFIZZ"
  const stats = [
    { value: "58%", label: "Increase in pick up point use" },
    { value: "23%", label: "Decrease in customer phone calls" },
    { value: "27%", label: "Increase in pick up point use" },
    { value: "40%", label: "Decrease in customer phone calls" },
  ]

  return (
    <section className="section relative h-[200vh] overflow-hidden bg-black text-white">
      <div className="track sticky top-0 h-screen flex items-center justify-center">
        <div className="road relative w-full h-[200px] bg-gray-900 overflow-hidden">
          {/* Car */}
          <img
            ref={carRef}
            src="/car.png"
            alt="car"
            className="car absolute top-0 left-0 h-[200px] z-10"
          />

          {/* Trail */}
          <div
            ref={trailRef}
            className="trail absolute top-0 left-0 h-[200px] bg-green-500 z-1 w-0"
          ></div>

          {/* Letters */}
          <div
            ref={valueAddRef}
            className="value-add absolute top-[30%] left-[5%] flex gap-1 text-[3rem] font-bold z-10"
          >
            {headline.split("").map((letter, i) => (
              <span
                key={i}
                ref={(el) => (lettersRef.current[i] = el)}
                className="value-letter text-black opacity-0 transition-opacity duration-200"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Boxes */}
        {stats.map((stat, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)}
            className={`text-box absolute p-6 rounded-lg opacity-0 ${
              i % 2 === 0 ? "top-[5%] right-[30%]" : "bottom-[5%] right-[35%]"
            } ${i === 2 ? "top-[5%] right-[10%]" : ""} ${
              i === 3 ? "bottom-[5%] right-[12.5%]" : ""
            }`}
            style={{
              background:
                i === 0 ? "#def54f" : i === 1 ? "#6ac9ff" : i === 2 ? "#333" : "#fa7328",
              color: i === 2 ? "#fff" : "#111",
            }}
          >
            <span className="num-box text-[2rem] font-semibold">{stat.value}</span>{" "}
            {stat.label}
          </div>
        ))}
      </div>
    </section>
  )
}