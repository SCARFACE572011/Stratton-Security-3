import Image from "next/image";

const STRIP_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    alt: "Security officer on patrol",
    overlay: "bg-black/40",
    position: "object-center",
  },
  {
    src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80",
    alt: "Urban night patrol operations",
    overlay: "bg-black/20",
    position: "object-center",
  },
  {
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80",
    alt: "Security command operations",
    overlay: "bg-black/40",
    position: "object-center",
  },
];

export default function ImageStrip() {
  return (
    <div className="grid grid-cols-3 h-[240px] md:h-[340px]" aria-hidden="true">
      {STRIP_IMAGES.map((img, i) => (
        <div key={i} className="relative overflow-hidden group">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover ${img.position} group-hover:scale-105 transition-transform duration-700 ease-out`}
            sizes="33vw"
          />
          <div className={`absolute inset-0 ${img.overlay} transition-opacity duration-500 group-hover:opacity-60`} />
          {/* Subtle red divider lines between panels */}
          {i < 2 && (
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[#cc1111]/20" />
          )}
        </div>
      ))}
    </div>
  );
}
