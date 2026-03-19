/* eslint-disable no-irregular-whitespace */

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { MoveRight } from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"
import CountriesPresent from "./CountriesPresent"

const StatDisplay = ({ stat, label }: { stat: string; label: string }) => (
  <div className="flex w-full max-w-60 flex-col items-center md:max-w-80.75 lg:items-start">
    <p className="text-[40px] font-semibold md:text-[60px]">{stat}</p>
    <p className="text-center text-xl lg:text-left">{label}</p>
  </div>
)

const partners = [
  {
    id: 1,
    name: "Pestalozzi",
    logo: "/pestalozzi.png",
    width: 174,
    height: 55,
  },
  {
    id: 2,
    name: "Horizon Foundation",
    logo: "/horizon.png",
    width: 127,
    height: 65,
  },
  {
    id: 3,
    name: "RS Academics",
    logo: "/rsacademics.png",
    width: 193,
    height: 64,
  },
  { id: 4, name: "Rise", logo: "/rise.png", width: 105, height: 64 },
  {
    id: 5,
    name: "Teach For All",
    logo: "/teachforall.png",
    width: 147,
    height: 44,
  },
  {
    id: 6,
    name: "Ellen MacArthur Foundation",
    logo: "/ellen.png",
    width: 193,
    height: 49,
  },
]

const impactFilters = ["Filter 1", "Filter 2", "Filter 3"] as const

const impactContent: Record<
  (typeof impactFilters)[number],
  { title: string; description: string; image: string }
> = {
  "Filter 1": {
    title:
      "EAB Partners with Global Fund for Women to Support Girls in Sub-Saharan Africa",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "/rugby.jpg",
  },
  "Filter 2": {
    title: "EAB Expands Sports Scholarships for Emerging Leaders",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "/rugby.jpg",
  },
  "Filter 3": {
    title: "EAB Launches Global Mentorship Program",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "/rugby.jpg",
  },
}

const filterIndexMap: Record<(typeof impactFilters)[number], number> = {
  "Filter 1": 0,
  "Filter 2": 1,
  "Filter 3": 2,
}

export default function HomePage() {
  const [activeImpactFilter, setActiveImpactFilter] = useState<
    (typeof impactFilters)[number]
  >(impactFilters[1])
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  const handleFilterClick = (filter: (typeof impactFilters)[number]) => {
    setActiveImpactFilter(filter)
    carouselApi?.scrollTo(filterIndexMap[filter])
  }

  return (
    <div id="top">
      <section className="hero-bg px-6 pt-9 lg:px-36 lg:pt-38.25">
        <h1 className="mb-8 max-w-135.75 font-serif text-[60px] leading-[100%] font-medium text-white lg:text-[70px] lg:leading-20">
          How will you make your mark?
        </h1>

        <Link
          to="/"
          className="mt-20 border-b border-b-white text-xl font-medium text-white"
        >
          Apply to study
        </Link>
      </section>

      <section className="px-7.25 pt-14.5 pb-32.5 lg:pt-20.25 lg:pl-34.5">
        <p className="font-serif text-[40px] font-bold lg:text-[60px]">EAB.</p>
        <p className="mb-10 font-serif text-[40px] font-medium lg:mb-21.25 lg:text-[60px]">
          A global education made here.{" "}
        </p>

        <div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
          <div className="relative">
            <img
              src="/2-women.png"
              alt="Box"
              className="h-141.5 w-143.75 object-cover object-center"
            />
            <div className="absolute -bottom-24 left-0 w-auto bg-[#009482] px-9 pt-12.25 pb-10.75 text-white lg:left-10 lg:w-119.5">
              <p className="font-serif text-base font-medium lg:text-2xl">
                At EAB, our mission is to inspire young people to put their
                talents and energy into driving change around the world, no
                matter which future path they choose.
              </p>
              <div className="mt-8 flex justify-between">
                <p className="text-lg font-bold">Read more</p>
                <MoveRight className="w-8" />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4 lg:mt-0">
            <StatDisplay stat="90%" label="Employed or in Graduated School" />
            <StatDisplay
              stat="TOP 100"
              label="Worldwide for student satisfaction"
            />
            <StatDisplay
              stat="$3 million"
              label="Grants given to EAB students"
            />
            <StatDisplay stat="95%" label="Employed or in Graduate School" />
            <StatDisplay
              stat="$5 million"
              label="Donated by our partners over the last financial year"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EDF5FF] pt-28.75 pb-37">
        <div className="pr-6 pl-6 md:pr-35.5 md:pl-40.5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-4 text-[40px] font-semibold md:text-[60px]">
                The impact of EAB
              </p>
              <p className="max-w-181.75 text-lg md:text-xl">
                Consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                vitae congue
              </p>
            </div>
            <div className="flex items-center gap-2 text-base md:text-xl">
              {impactFilters.map((filter, index) => (
                <div key={filter} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleFilterClick(filter)}
                    className={`font-semibold transition-colors ${
                      activeImpactFilter === filter
                        ? "text-[#0F172A]"
                        : "text-[#95A4B8]"
                    }`}
                  >
                    {filter}
                  </button>
                  {index < impactFilters.length - 1 && (
                    <span className="text-[#95A4B8]">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "center",
                containScroll: "trimSnaps",
                watchDrag: false,
              }}
              className="-mx-6 md:-mx-10"
            >
              <CarouselContent className="px-4 md:px-10">
                {impactFilters.map((filter) => {
                  const slide = impactContent[filter]
                  return (
                    <CarouselItem
                      key={filter}
                      className="basis-full pl-4 lg:basis-[88%] lg:pl-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-stretch md:gap-8">
                        <div className="w-full lg:w-[58%]">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-60 w-full object-cover md:h-115"
                          />
                        </div>
                        <div className="w-full bg-[#EDF5FF] pt-4 md:pt-6 lg:w-[42%]">
                          <p className="max-w-105 font-serif text-2xl leading-[106%] font-semibold md:text-[40px] md:leading-[100%] lg:text-[54px]">
                            {slide.title}
                          </p>
                          <p className="mt-5 max-w-110 text-lg leading-[160%] text-[#111827] md:mt-8 md:text-lg md:leading-[170%] lg:text-[20px]">
                            {slide.description}
                          </p>
                          <div className="mt-6 flex items-center gap-3 md:mt-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#009482]">
                              <MoveRight className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-2xl leading-none font-bold lg:text-[30px]">
                              Discover
                            </span>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="lgflex-row flex flex-col justify-between gap-14 pt-22.25 pr-7.5 pb-20 pl-9.25 lg:pt-32.25 lg:pr-28.75 lg:pb-42.25 lg:pl-42.25">
        <div className="max-w-117.5 space-y-7">
          <p className="font-serif text-[40px] leading-[100%] font-medium lg:text-[60px]">
            A little bit about our work at EAB
          </p>
          <p className="font-sans text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <Button className="h-12 w-45.5 rounded-full bg-[#009482] text-lg font-bold text-white">
            Donate
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center border-b border-gray-300 pb-3"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: `${partner.width}px`,
                  height: `${partner.height}px`,
                }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <CountriesPresent />
    </div>
  )
}
