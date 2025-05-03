import React from "react";
import GradientBar from "@/components/ui/GradientBar";
import { generateSEO } from "@/config/seo";

export async function generateMetadata() {
  return generateSEO({
    title: "Contact Us | Find Luxury Villas",
    description:
      "Get in touch with our luxury villa specialists for personalized assistance in finding your perfect villa rental.",
    keywords:
      "contact luxury villas, villa rental inquiries, luxury concierge, villa specialists",
    author: "findLuxuryVillas.com",
    ogTitle: "Contact Find Luxury Villas",
    ogDescription:
      "Connect with our villa specialists for a personalized luxury villa experience.",
    ogImage: "/assets/og-image.jpg",
    ogUrl: "https://findluxuryvillas.com/contact",
    twitterCard: "summary_large_image",
    twitterSite: "@findLuxuryVillas",
    canonical: "https://findluxuryvillas.com/contact",
  });
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Connect With Us</h1>
          <GradientBar className="mx-auto mb-6" width={140} height={4} />
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Our dedicated villa specialists are here to assist you in finding
            your perfect luxury retreat. Whether you have specific requirements
            or need expert guidance, we are committed to creating your ideal
            villa experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-between mb-16">
          <div className="flex-1 min-w-[300px] bg-surface p-8">
            <h3 className="text-xl font-medium mb-4">Luxury Villa Inquiries</h3>
            <p className="text-gray-600 mb-4">
              For personalized villa recommendations and availability
            </p>
            <p className="font-light hidden">
              Email: villas@findluxuryvillas.com
              <br />
              Tel: +1 (888) 555-0123
            </p>
          </div>

          <div className="flex-1 min-w-[300px] bg-surface p-8">
            <h3 className="text-xl font-medium mb-4">Concierge Services</h3>
            <p className="text-gray-600 mb-4">
              For special requests and bespoke experiences
            </p>
            <p className="font-light hidden">
              Email: concierge@findluxuryvillas.com
              <br />
              Tel: +1 (888) 555-0124
            </p>
          </div>

          <div className="flex-1 min-w-[300px] bg-surface p-8">
            <h3 className="text-xl font-medium mb-4">Press Inquiries</h3>
            <p className="text-gray-600 mb-4">
              For media requests and partnership opportunities
            </p>
            <p className="font-light hidden">
              Email: press@findluxuryvillas.com
              <br />
              Tel: +1 (888) 555-0125
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-16 items-start">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>
            <GradientBar className="mb-8" width={140} height={4} />
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none h-32"
                  placeholder="Tell us about your preferred destination, dates, and any specific requirements"
                ></textarea>
              </div>

              <button className="bg-brand px-8 py-3 text-white w-full cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-light mb-6">Our Offices</h2>
            <GradientBar className="mb-8" width={140} height={4} />

            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-2">London</h3>
                <p className="text-gray-600 font-light">
                  123 Mayfair Street
                  <br />
                  London, W1K 2NY
                  <br />
                  United Kingdom
                </p>
              </div>
            </div>

            {/* <div className="mt-12">
              <Image
                src="/assets/map-placeholder.jpg"
                width={500}
                height={300}
                alt="Office locations map"
                className="w-full h-auto object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
