import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceAreasContent from "@/components/service-areas/ServiceAreasContent";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/service-areas" },
  title: "Service Areas | Security Services Across Los Angeles & Southern California",
  description:
    "Stratton Security Group provides professional security services across Los Angeles, Beverly Hills, Santa Monica, Culver City, West Hollywood, and surrounding Southern California communities.",
};

const PRIMARY_AREAS = [
  {
    name: "Los Angeles",
    description: "All of the city of Los Angeles — from downtown to the Valley, the Westside to South LA. Our largest service footprint.",
    neighborhoods: ["Downtown LA", "Koreatown", "Mid-Wilshire", "Hollywood", "Silver Lake", "Los Feliz", "Boyle Heights", "Crenshaw", "Leimert Park"],
  },
  {
    name: "Beverly Hills",
    description: "Full coverage of the Beverly Hills municipality — including residential estates, commercial corridors on Wilshire and Rodeo, and mixed-use properties.",
    neighborhoods: ["North Beverly Hills", "Flats", "Business Triangle", "Wilshire Corridor"],
  },
  {
    name: "West Hollywood",
    description: "Commercial and residential security for the City of West Hollywood, including Sunset Strip entertainment venues and high-density residential buildings.",
    neighborhoods: ["Sunset Strip", "Santa Monica Boulevard Corridor", "Norma Triangle", "Design District"],
  },
  {
    name: "Santa Monica",
    description: "Security programs for Santa Monica commercial properties, retail centers, hotels, and residential buildings along the coast.",
    neighborhoods: ["Downtown Santa Monica", "Third Street Promenade Area", "Main Street", "Montana Avenue", "Mid-City"],
  },
  {
    name: "Century City",
    description: "A core market. We serve corporate campuses, Class A office buildings, and luxury residential towers throughout Century City.",
    neighborhoods: ["Avenue of the Stars", "Century Park East & West", "Constellation Boulevard"],
  },
  {
    name: "Culver City",
    description: "Growing commercial and tech-campus district with significant commercial real estate, studio facilities, and logistics operations.",
    neighborhoods: ["Downtown Culver City", "Hayden Tract", "Culver City Arts District"],
  },
  {
    name: "Bel Air & Brentwood",
    description: "Discreet residential security for estates, private residences, and gated communities in Bel Air, Brentwood, and the hills above Sunset.",
    neighborhoods: ["Bel Air Estates", "Stone Canyon", "Brentwood Park", "Mandeville Canyon"],
  },
  {
    name: "Burbank & Glendale",
    description: "Commercial, industrial, and studio security for the Burbank–Glendale corridor — including media facilities and logistics operations.",
    neighborhoods: ["Downtown Burbank", "Media District", "Downtown Glendale", "Brand Boulevard"],
  },
  {
    name: "Pasadena",
    description: "Historic commercial core, educational campuses, medical centers, and residential communities throughout Pasadena and the San Gabriel Valley.",
    neighborhoods: ["Old Town Pasadena", "Caltech Area", "South Lake", "Altadena"],
  },
  {
    name: "El Segundo & Manhattan Beach",
    description: "Industrial and aerospace corridors in El Segundo alongside beach-adjacent commercial and residential deployments in Manhattan Beach.",
    neighborhoods: ["El Segundo Industrial Corridor", "Manhattan Village", "Downtown Manhattan Beach"],
  },
  {
    name: "Long Beach",
    description: "Port-adjacent logistics, healthcare, and commercial security deployments in Long Beach and the South Bay.",
    neighborhoods: ["Downtown Long Beach", "Bixby Knolls", "Signal Hill", "Lakewood"],
  },
  {
    name: "Ventura County",
    description: "Expanding coverage to Ventura County — commercial, residential, and event security in Thousand Oaks, Oxnard, and the surrounding region.",
    neighborhoods: ["Thousand Oaks", "Camarillo", "Oxnard", "Ventura"],
  },
];

const PROPERTY_TYPES_SERVED = [
  "Office buildings & corporate campuses",
  "Retail centers & shopping malls",
  "Hotels, resorts & entertainment venues",
  "Condominium & apartment complexes",
  "Luxury private residences & estates",
  "Construction sites & job sites",
  "Healthcare & medical campuses",
  "Auto dealerships & service centers",
  "Warehouses & distribution centers",
  "Government & municipal facilities",
];

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Service Areas", url: "https://strattonsecuritygroup.com/service-areas" },
      ]} />
      <Navigation />
      <main>
        <ServiceAreasContent
          primaryAreas={PRIMARY_AREAS}
          propertyTypes={PROPERTY_TYPES_SERVED}
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
