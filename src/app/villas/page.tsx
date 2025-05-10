import GradientBar from "@/components/ui/GradientBar";
import VillaCard from "@/components/ui/VillaCard";
import { generateSEO } from "@/config/seo";

export async function generateMetadata() {
  return generateSEO({
    title: "Premium Villa Collection",
    description:
      "Browse our extensive collection of luxury villas featuring detailed information about amenities, location, pricing and availability",
    keywords:
      "luxury villas, villa rentals, premium villas, villa amenities, villa locations, villa pricing, villa capacity, villa features",
    image:
      "https://images.pexels.com/photos/31817164/pexels-photo-31817164/free-photo-of-luxurious-modern-villa-with-ocean-view.jpeg?auto=compress&cs=tinysrgb&w=1200",
    url: "https://findluxuryvillas.com/villas",
  });
}

// Dummy data for multiple villas
const villaData = [
  {
    id: 1,
    name: "Estate5 Villas",
    location: "Kasuli Solan",
    beds: 2,
    baths: 2,
    capacity: "upto 10",
    price: "₹1.2 Lakh",
    priceUnit: "per night",
    image:
      "https://images.pexels.com/photos/31817164/pexels-photo-31817164/free-photo-of-luxurious-modern-villa-with-ocean-view.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
  // {
  //   id: 2,
  //   name: "Seaside Resort",
  //   location: "Goa Beach",
  //   beds: 3,
  //   baths: 2,
  //   capacity: "upto 6",
  //   price: "₹0.8 Lakh",
  //   priceUnit: "per night",
  //   image:
  //     "https://images.pexels.com/photos/31792087/pexels-photo-31792087/free-photo-of-charming-lake-como-villa-surrounded-by-lush-foliage.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   featured: false,
  // },
  // {
  //   id: 3,
  //   name: "Mountain Retreat",
  //   location: "Manali Hills",
  //   beds: 4,
  //   baths: 3,
  //   capacity: "upto 8",
  //   price: "₹1.5 Lakh",
  //   priceUnit: "per night",
  //   image:
  //     "https://images.pexels.com/photos/31751025/pexels-photo-31751025/free-photo-of-elegant-mediterranean-villa-by-the-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   featured: true,
  // },
  // {
  //   id: 4,
  //   name: "Luxury Villa",
  //   location: "Udaipur Lake",
  //   beds: 5,
  //   baths: 4,
  //   capacity: "upto 12",
  //   price: "₹2.0 Lakh",
  //   priceUnit: "per night",
  //   image:
  //     "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   featured: false,
  // },
];

const Villas = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-light mb-4 text-center">
        Our Luxury Villa Collection
      </h1>
      <GradientBar className="mx-auto mb-6" width={200} height={5} />
      <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto text-center">
        Discover our handpicked selection of extraordinary luxury villas in the
        worlds most coveted destinations, offering unparalleled privacy and
        exceptional service.
      </p>
      <div className="py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villaData.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Villas;
