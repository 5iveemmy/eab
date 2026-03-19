import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import InpuiryForm from "./InpuiryForm"
import { MoveRight } from "lucide-react"

const countries = [
  { name: "India", image: "/flags/india.svg" },
  { name: "France", image: "/flags/france.svg" },
  { name: "Germany", image: "/flags/germany.svg" },
  { name: "Japan", image: "/flags/japan.svg" },
  { name: "Canada", image: "/flags/canada.svg" },
  { name: "South Africa", image: "/flags/south-africa.svg" },
  { name: "China", image: "/flags/china.svg" },
  { name: "Thailand", image: "/flags/thailand.svg" },
  { name: "Russia", image: "/flags/russia.svg" },
  { name: "Kenya", image: "/flags/kenya.svg" },
]

const stories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    tag: "Germany",
    title: "Leveraging the EAB Ripple Effect' for Youth-led Social Change",
    buttonText: "Read more",
    overlay: "linear-gradient(180deg, rgba(222, 99, 40, 0) 0%, #AD1644 71.19%)",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    tag: "Alumni Network",
    title: "A title about volunteering in this National Schools",
    buttonText: "Volunteer",

    overlay: "linear-gradient(180deg, rgba(0, 148, 130, 0) 0%, #009482 58.65%)",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",

    title: "This is a blog/Impact Story linked to this National Schools",
    buttonText: "Read more",
    tag: "What's happening",

    overlay:
      "linear-gradient(346.17deg, #004A97 40.7%, rgba(0, 148, 130, 0) 90.12%)",
  },
]

const CountriesPresent = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div>
      <section className="relative bg-white px-8 pt-16 pb-35 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 lg:flex-row">
            <h2 className="max-w-160.5 text-[40px] leading-[120%] font-medium md:text-5xl lg:text-6xl">
              We are present in over 150 countries
            </h2>
            <div className="flex items-center gap-2">
              <a href="#" className="text-right text-2xl hover:underline">
                See all National Schools
              </a>
              <MoveRight />
            </div>
          </div>

          <div className="mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              setApi={(api) => {
                if (!api) return
                api.on("select", () => {
                  setActiveSlide(api.selectedScrollSnap())
                })
              }}
            >
              <CarouselContent className="-ml-4">
                {countries.map((country, index) => (
                  <CarouselItem key={index} className="basis-auto pl-4">
                    <div
                      className={`flex shrink-0 items-center gap-2 pb-2 ${
                        index === activeSlide
                          ? "border-b-4 border-blue-600"
                          : "border-b-4 border-transparent"
                      }`}
                    >
                      {country.image && (
                        <img
                          src={country.image}
                          alt={country.name}
                          className="h-11 w-10.75"
                        />
                      )}
                      <span className="text-lg font-semibold">
                        {country.name}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.id}
                className="relative h-147.25 overflow-hidden"
                style={{
                  backgroundImage: `url(${story.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 flex flex-col justify-between p-7"
                  style={{ background: story.overlay }}
                >
                  <div className="self-start">
                    {story.tag === "Germany" && (
                      <span className="bg-white p-2.5 text-sm font-semibold">
                        {story.tag}
                      </span>
                    )}

                    {story.tag === "Alumni Network" && (
                      <span className="bg-teal-600 p-2.5 text-sm font-semibold text-white">
                        {story.tag}
                      </span>
                    )}

                    {story.tag === "What's happening" && (
                      <span className="bg-blue-600 p-2.5 text-sm font-semibold text-white">
                        {story.tag}
                      </span>
                    )}
                  </div>

                  <div className="space-y-5">
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {story.title}
                    </h3>
                    <button className="cursor-pointer rounded-full border-2 border-white bg-white px-6 py-2 font-bold text-gray-900 transition-colors hover:bg-transparent hover:text-white">
                      {story.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleBackToTop}
          className="absolute right-6 bottom-0 inline-flex items-center gap-2 bg-[#003B78] px-4 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-[#002D5D]"
        >
          Back to Top
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#003B78]">
            ↑
          </span>
        </button>
      </section>
      <InpuiryForm />
    </div>
  )
}

export default CountriesPresent
