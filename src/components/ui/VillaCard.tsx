import Image from "next/image";
import { Users, Bed, Bath } from "lucide-react";

interface VillaCardProps {
  villa: {
    image: string;
    name: string;
    featured?: boolean;
    location: string;
    beds: number;
    baths: number;
    capacity: number | string;
    price: number | string;
    priceUnit: string;
  };
}

// VillaCard component
const VillaCard: React.FC<VillaCardProps> = ({ villa }) => {
  return (
    <div className="w-full max-w-md overflow-hidden bg-white">
      <div className="relative overflow-hidden">
        <Image
          width={260}
          height={260}
          src={villa.image}
          alt={villa.name}
          className="w-full h-64 object-cover transition-all duration-1000 ease-in-out hover:scale-110"
        />
        {villa.featured && (
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 bg-secondary text-white">
        <h2 className="text-2xl font-bold mb-1">{villa.name}</h2>
        <p className="text-brand text-lg mb-6">{villa.location}</p>

        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center">
            <Bed className="text-brand mb-2" />
            <span>{villa.beds} Beds</span>
          </div>

          <div className="flex flex-col items-center">
            <Bath className="text-brand mb-2" />
            <span>{villa.baths} Baths</span>
          </div>

          <div className="flex flex-col items-center">
            <Users className="text-brand mb-2" />
            <span>{villa.capacity}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-brand">{villa.price}</span>
            <span className="text-sm ml-1">{villa.priceUnit}</span>
          </div>
          <button className="bg-brand hover:bg-yellow-400 text-gray-800 font-normal py-2 px-6">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;
