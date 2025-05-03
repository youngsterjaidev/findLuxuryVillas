import React from "react";
import Image from "next/image";
import GradientBar from "@/components/ui/GradientBar";
import { generateSEO } from "@/config/seo";

export async function generateMetadata() {
  return generateSEO({
    title: "Find Luxury Villas | Exclusive Villa Rentals Worldwide",
    description:
      "Experience bespoke luxury living with Find Luxury Villas - exclusive villa rentals with world-class amenities worldwide. Featuring contemporary design, private residences, and hotel-style services.",
    keywords:
      "luxury villas, villa rentals, luxury real estate, exclusive villas, luxury amenities, concierge service",
    author: "findLuxuryVillas.com",
    ogTitle: "Find Luxury Villas - Exclusive Villa Rentals",
    ogDescription:
      "Discover refined living with Find Luxury Villas featuring exclusive villa rentals with world-class amenities worldwide.",
    ogImage: "/assets/og-image.jpg",
    ogUrl: "https://findluxuryvillas.com",
    twitterCard: "summary_large_image",
    twitterSite: "@findLuxuryVillas",
    canonical: "https://findluxuryvillas.com",
  });
}

export default function Home() {
  return (
    <div>
      <section className="mx-auto px-4 bg-surface py-8 mb-24">
        <div className="flex flex-col md:flex-row container mx-auto justify-between items-center">
          <div className="flex-2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-light mb-6 text-center md:text-left">
              Live Unforgettable Moments in the World Finest Villas.
            </h1>
            <GradientBar
              className="mb-2 mx-auto md:mx-0"
              width={140}
              height={4}
            />
            <p className="text-lg md:text-xl text-gray-600 font-light mb-8 text-center md:text-left">
              Step into a sanctuary of sophistication—where architectural
              brilliance meets bespoke indulgence. Each villa is a testament to
              timeless elegance, designed for those who seek nothing less than
              perfection.
            </p>
            <button className="bg-brand px-8 py-3 cursor-pointer w-full md:w-auto">
              Browse Villas
            </button>
          </div>
          <div className="flex-1 flex item-center justify-center">
            <Image
              src="/assets/logo.svg"
              width={250}
              height={250}
              alt="Luxury villa with infinity pool"
              className="object-cover opacity-10 w-48 md:w-[250px]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row container mx-auto justify-between bg-surface p-6 md:p-12 gap-8 md:gap-16 mb-50">
          <div className="flex-1 flex item-center justify-center relative">
            <Image
              width={300}
              height={300}
              src={
                "https://images.pexels.com/photos/1122412/pexels-photo-1122412.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="Luxury villa with infinity pool"
              className="w-full max-w-[450px] h-auto object-cover relative md:absolute"
            />
          </div>
          <div className="flex-1 pr-0 md:pr-8">
            <div className="text-secondary-700 uppercase text-lg md:text-xl mb-4 text-center md:text-left">
              Exclusive Escapes
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black mb-4 text-center md:text-left">
              The pinnacle of luxury villa experiences awaits.
            </h2>
            <GradientBar
              className="mb-4 mx-auto md:mx-0"
              width={140}
              height={4}
            />
            <p className="text-lg md:text-xl text-secondary font-light mb-8 text-center md:text-left">
              Nestled in the world most coveted destinations,
              findluxuryVillas.com offers an unrivaled collection of exceptional
              properties that transcend ordinary accommodations. Each villa is
              meticulously vetted for outstanding design, premier amenities, and
              breathtaking settings that promise unforgettable memories.
            </p>
            <button className="btn-secondary w-full md:w-auto">
              DISCOVER COLLECTION
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse container mx-auto justify-between p-6 md:p-12 gap-8 md:gap-16 mb-40">
          <div className="flex-1 flex item-center justify-center relative">
            <Image
              width={300}
              height={300}
              src="https://images.pexels.com/photos/29679172/pexels-photo-29679172/free-photo-of-scenic-pool-villa-landscape-in-bodrum-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Luxury villa with infinity pool"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1 pr-0 md:pr-8">
            <div className="text-secondary-700 uppercase text-lg md:text-xl mb-4 text-center md:text-left">
              Breathtaking Locations
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black mb-4 text-center md:text-left">
              Extraordinary destinations for discerning travelers.
            </h2>
            <GradientBar
              className="mb-4 mx-auto md:mx-0"
              width={140}
              height={4}
            />
            <p className="text-lg md:text-xl text-secondary font-light mb-8 text-center md:text-left">
              From secluded beachfront paradises to stunning mountainside
              retreats, our portfolio spans the globe most coveted locations.
              Each destination offers a unique blend of natural beauty, cultural
              richness, and unparalleled privacy that transforms every stay into
              a once-in-a-lifetime experience.
            </p>
            <button className="btn-secondary w-full md:w-auto">
              EXPLORE DESTINATIONS
            </button>
          </div>
        </div>
      </section>

      <section className="mb-40">
        <Image
          width={300}
          height={300}
          src="https://images.pexels.com/photos/1488330/pexels-photo-1488330.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full"
          alt="Luxury villa with infinity pool"
        />
      </section>

      <section>
        <div className="flex flex-col mx-auto items-center justify-between bg-surface p-6 md:p-12 py-12 md:py-24 mb-50">
          <div className="text-secondary-700 text-lg md:text-xl mb-4">
            AMENITIES
          </div>
          <h2 className="text-2xl md:text-3xl font-normal text-black mb-4 text-center">
            Where luxury becomes standard.
          </h2>
          <GradientBar className="mb-4" width={140} height={4} />
          <p className="text-lg md:text-xl text-secondary text-center font-normal mb-8 px-4 md:px-0">
            Our exceptional villas redefine opulence with world-class amenities
            that elevate your stay beyond the ordinary.
          </p>
          <button className="btn-secondary w-full md:w-auto">
            EXPLORE AMENITIES
          </button>
        </div>
      </section>

      <section className="mb-40">
        <Image
          width={300}
          height={300}
          src="https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full"
          alt="Luxury villa with infinity pool"
        />
      </section>

      <section>
        <div className="container mx-auto mt-40 md:mt-80 mb-40">
          <div className="w-full md:w-1/2 md:ml-auto relative bg-surface p-8 md:p-16">
            <Image
              width={300}
              height={300}
              src="https://images.pexels.com/photos/29679172/pexels-photo-29679172/free-photo-of-scenic-pool-villa-landscape-in-bodrum-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Luxury villa with infinity pool"
              className="bg-surface-100 w-full relative md:absolute md:top-[-40%] md:left-[-95%] mb-8 md:mb-0"
            />
            <div className="text-secondary-700 uppercase text-lg md:text-xl mb-4 text-center md:text-left">
              Curated Excellence
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black mb-4 text-center md:text-left">
              Residences beyond compare.
            </h2>
            <GradientBar
              className="mb-4 mx-auto md:mx-0"
              width={140}
              height={4}
            />
            <p className="text-lg md:text-xl text-secondary font-light mb-8 text-center md:text-left">
              Discover our thoughtfully curated collections—beachfront
              sanctuaries, historic estates, architectural masterpieces, and
              family-friendly havens.
            </p>
            <button className="btn-secondary w-full md:w-auto">
              VIEW COLLECTIONS
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse container mx-auto justify-between p-6 md:p-12 gap-8 md:gap-16 mb-40">
          <div className="flex-1 flex item-center justify-center relative">
            <Image
              width={300}
              height={300}
              src="https://images.pexels.com/photos/29679172/pexels-photo-29679172/free-photo-of-scenic-pool-villa-landscape-in-bodrum-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Luxury villa with infinity pool"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1 pr-0 md:pr-8">
            <div className="text-secondary-700 uppercase text-lg md:text-xl mb-4 text-center md:text-left">
              Seamless Luxury
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black mb-4 text-center md:text-left">
              Effortless booking, extraordinary results.
            </h2>
            <GradientBar
              className="mb-4 mx-auto md:mx-0"
              width={140}
              height={4}
            />
            <p className="text-lg md:text-xl text-secondary font-light mb-8 text-center md:text-left">
              Our streamlined process ensures finding your perfect villa is as
              pleasurable as the stay itself. Browse our curated collections,
              receive personalized recommendations from our villa specialists,
              and secure your reservation with our guaranteed best rates and
              flexible policies.
            </p>
            <button className="btn-secondary w-full md:w-auto">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      <section className="mb-40">
        <Image
          width={300}
          height={300}
          src="https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full"
          alt="Luxury villa with infinity pool"
        />
      </section>

      <section>
        <div className="flex flex-col mx-auto items-center justify-between bg-surface p-6 md:p-12 py-12 md:py-24 mb-50">
          <div className="text-secondary-700 text-lg md:text-xl mb-4">
            Exclusive Access
          </div>
          <h2 className="text-2xl md:text-3xl font-normal text-black mb-4 text-center">
            Be the first to discover our newest treasures.
          </h2>
          <GradientBar className="mb-4" width={140} height={4} />
          <p className="text-lg md:text-xl text-secondary text-center font-normal mb-8 px-4 md:px-0">
            Subscribe to receive privileged access to our latest additions,
            seasonal promotions, and insider guides to the world most
            extraordinary destinations. Join our community of discerning
            travelers who demand nothing less than perfection.
          </p>
          <button className="btn-secondary w-full md:w-auto">
            Explore More
          </button>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse container mx-auto justify-between p-6 md:p-12 gap-8 md:gap-16 mb-50">
          <div className="flex-1 flex item-center justify-center relative">
            <Image
              width={300}
              height={300}
              src="https://images.pexels.com/photos/1122412/pexels-photo-1122412.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Luxury villa with infinity pool"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1 pr-0 md:pr-8">
            <div className="text-secondary-700 uppercase text-lg md:text-xl mb-4 text-center md:text-left">
              Spontaneous Luxury
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black mb-4 text-center md:text-left">
              Extraordinary getaways, available now.
            </h2>
            <GradientBar
              className="mb-4 mx-auto md:mx-0"
              width={140}
              height={4}
            />
            <p className="text-lg md:text-xl text-secondary font-light mb-8 text-center md:text-left">
              For those inspired by spontaneity, our curated selection of
              last-minute villa availabilities offers the perfect opportunity to
              indulge in luxury without extensive planning. Experience the same
              impeccable standards with exclusive savings on our most
              sought-after properties.
            </p>
            <button className="btn-secondary w-full md:w-auto">
              VIEW AVAILABLE VILLAS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
