export function MapEmbed() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 aspect-video md:aspect-[21/9]">
      <iframe
        src="https://www.google.com/maps?q=D+Block,+Aftabnagar+Residential+Area,+Rampura,+Dhaka-1212,+Bangladesh&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
