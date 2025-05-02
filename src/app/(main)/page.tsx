import React from "react";
import GradientBar from "@/components/ui/GradientBar";
import { generateSEO } from "@/config/seo";
import { motion } from "motion/react";

console.log(motion);

// Check if GradientBar is properly exported from its file

export async function generateMetadata() {
  return generateSEO({
    title: "Luxury Villa Rentals Worldwide",
    description:
      "Discover premium vacation homes with private pools and stunning views",
  });
}

export default function Home() {
  return (
    <div>
      <section className="mx-auto px-4 bg-surface py-8">
        <div className="flex container mx-auto justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-2 pr-8"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-light mb-6"
            >
              Welcome to a bespoke lifestyle with stunning residences and
              unrivaled amenities.
            </motion.h1>
            <GradientBar className="mb-2" width={140} height={4} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 font-normal mb-8"
            >
              Introducing a timelessly elegant masterpiece. Welcome to The
              Austin, a transformative new development, where every detail is
              exquisitely designed from the ground up to an enduring standard of
              luxury, yet completely contemporary.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand px-8 py-3 cursor-pointer"
            >
              Browse Villas
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex item-center justify-center"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              src="/assets/logo.svg"
              alt="Luxury villa with infinity pool"
              className="w-[250px] h-[250px] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
