import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-secondary text-surface pt-18 pb-12">
      <div className="container mx-auto px-4">
        {/* NOTE: we can change the col number later */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <Image
              width={200}
              height={8}
              src="/assets/default-monochrome.svg"
              alt="Logo"
              className="h-8 mr-2 mb-4"
            />
            <p className="mb-4">
              Discover extraordinary luxury villas in the worlds most coveted
              destinations, offering unparalleled privacy, exceptional service,
              and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              {Object.entries(SITE.social).map(([name, url]) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface hover:text-amber-500 font-extralight transition-colors"
                >
                  <span className="sr-only">{name}</span>
                  {/* Icons would go here */}
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg text-brand font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-light transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Popular Destinations */}
          {/* <div>
            <h4 className="text-lg text-brand font-semibold mb-4">
              Popular Destinations
            </h4>
            <ul className="space-y-2">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-light transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg text-brand font-semibold mb-4">
              Contact Us
            </h4>
            <address className="not-italic space-y-2">
              {/* NOTE: we can add later */}
              {/* <p className="font-light">{SITE.company?.address}</p>
              <p className="font-light">
                <Link href={`tel:${SITE?.company?.phone}`}>
                  {SITE.company?.phone}
                </Link>
              </p> */}
              <p className="font-light">
                <Link href={`mailto:${SITE.company.email}`}>
                  {SITE.company.email}
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 text-center text-surface">
          <p>
            &copy; {new Date().getFullYear()} {SITE.company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
