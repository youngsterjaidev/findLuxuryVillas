import React from "react";
import Image from "next/image";
import GradientBar from "@/components/ui/GradientBar";
import { generateSEO } from "@/config/seo";

export async function generateMetadata() {
  return generateSEO({
    title: "About Us | Find Luxury Villas",
    description:
      "Learn about Find Luxury Villas' commitment to curating the world's finest villa experiences. Discover our story, values, and dedication to exceptional service.",
    keywords:
      "about find luxury villas, luxury villa rentals, villa expertise, luxury hospitality",
    author: "findLuxuryVillas.com",
    ogTitle: "About Find Luxury Villas - Our Story & Mission",
    ogDescription:
      "Discover the story behind Find Luxury Villas and our commitment to delivering exceptional villa experiences worldwide.",
    ogImage: "/assets/about-og-image.jpg",
    ogUrl: "https://findluxuryvillas.com/about",
    twitterCard: "summary_large_image",
    twitterSite: "@findLuxuryVillas",
    canonical: "https://findluxuryvillas.com/about",
  });
}

export default function About() {
  return (
    <div>
      <section className="mx-auto px-4 bg-surface py-8 md:py-16">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
            Crafting Extraordinary Villa Experiences
          </h1>
          <GradientBar
            className="mx-auto mb-6 md:mb-8"
            width={140}
            height={4}
          />
          <p className="text-lg md:text-xl text-gray-600 font-light mb-6 md:mb-8">
            Find Luxury Villas represents the pinnacle of exclusive villa
            rentals, born from a passion for exceptional properties and
            unparalleled service.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4">
        <div className="flex flex-col md:flex-row container mx-auto justify-between items-center gap-8 md:gap-16">
          <div className="w-full md:flex-1">
            <Image
              src="https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg"
              width={600}
              height={400}
              alt="Our team at work"
              className="object-cover rounded w-full"
            />
          </div>
          <div className="w-full md:flex-1">
            <div className="text-secondary-700 uppercase text-lg md:text-xl mb-3 md:mb-4">
              Our Story
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black mb-3 md:mb-4">
              A Legacy of Excellence
            </h2>
            <GradientBar className="mb-4 md:mb-6" width={140} height={4} />
            <p className="text-base md:text-lg text-secondary font-light mb-4 md:mb-6">
              What began as a curated collection of premium properties has
              evolved into a global network of the world most exceptional
              villas. Our journey is defined by an unwavering commitment to
              quality, authenticity, and personalized service.
            </p>
            <p className="text-base md:text-lg text-secondary font-light">
              Today, we pride ourselves on offering not just accommodations, but
              gateways to extraordinary experiences that create lasting
              memories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-8 md:py-16 mb-8 md:mb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-3 md:mb-4">
              Our Core Values
            </h2>
            <GradientBar
              className="mx-auto mb-6 md:mb-8"
              width={140}
              height={4}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We maintain the highest standards in every aspect of our service.",
              },
              {
                title: "Authenticity",
                description:
                  "Each property in our collection tells its own unique story.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously evolve to exceed our clients' expectations.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8 md:py-16 px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-secondary-700 uppercase text-lg md:text-xl mb-3 md:mb-4">
            Our Expertise
          </div>
          <h2 className="text-2xl md:text-3xl font-normal mb-3 md:mb-4">
            What Sets Us Apart
          </h2>
          <GradientBar
            className="mx-auto mb-6 md:mb-8"
            width={140}
            height={4}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4">
              Curated Excellence
            </h3>
            <p className="text-secondary mb-6 md:mb-8">
              Our portfolio is meticulously curated, featuring only properties
              that meet our stringent standards for design, location, amenities,
              and service.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Personal Touch</h3>
            <p className="text-secondary mb-6 md:mb-8">
              Our dedicated team of villa specialists provides personalized
              attention to ensure every stay exceeds expectations.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Global Network</h3>
            <p className="text-secondary mb-6 md:mb-8">
              We maintain strong relationships with property owners and local
              partners worldwide to offer unique experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4">
              Exclusive Access
            </h3>
            <p className="text-secondary mb-6 md:mb-8">
              Our clients enjoy privileged access to the world most sought-after
              properties and experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-8 md:py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 md:mb-4">
            Join Our Journey
          </h2>
          <GradientBar
            className="mx-auto mb-6 md:mb-8"
            width={140}
            height={4}
          />
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-6 md:mb-8">
            Whether you are a property owner looking to join our exclusive
            collection or a traveler seeking extraordinary experiences, we
            invite you to be part of our story.
          </p>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </section>
    </div>
  );
}
