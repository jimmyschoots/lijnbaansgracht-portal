"use client";

import { useState } from "react";

const rooms = [
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Cozy bedroom with a queen-size bed, blackout curtains, and storage.",
    details: [
      "Queen-size bed with premium linens",
      "Blackout curtains for perfect sleep",
      "Wooden wardrobe for storage",
      "Window overlooking the canal",
    ],
    icon: "🛏️",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "Bright bathroom with shower, sink, and all amenities.",
    details: [
      "Modern shower with rainfall head",
      "Heated mirror",
      "Luxury toiletries",
      "Heated towel rack",
    ],
    icon: "🚿",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    description: "Fully equipped kitchen for all your cooking needs.",
    details: [
      "Induction cooktop",
      "Oven",
      "Microwave & dishwasher",
      "Refrigerator & freezer",
      "Coffee machine & kettle",
      "Full set of cookware & dishes",
    ],
    icon: "🍳",
  },
  {
    id: "living",
    name: "Living Area",
    description: "Open living space with canal views and comfortable seating.",
    details: [
      "Comfortable seating",
      "Smart TV with Netflix & more",
      "Large windows with canal view",
      "Dining table for two",
    ],
    icon: "🛋️",
  },
];

export default function Tour() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [activeCarousel, setActiveCarousel] = useState(0);

  const carouselImages = [
    { id: 1, title: "Living Area", description: "Spacious living room with canal views" },
    { id: 2, title: "Bedroom", description: "Comfortable bedroom with queen bed" },
    { id: 3, title: "Kitchen", description: "Fully equipped modern kitchen" },
    { id: 4, title: "Bathroom", description: "Bright and clean bathroom" },
  ];

  const nextImage = () => {
    setActiveCarousel((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setActiveCarousel((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="tour"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-gold-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-navy-900 mb-4">
            Apartment Tour
          </h2>
          <p className="text-gold-600 text-lg font-light">
            Explore your new home
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video mb-4 shadow-2xl border-2 border-gold-400">
            {/* Placeholder for actual images */}
            <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">{carouselImages[activeCarousel].id === 1 ? '🛋️' : carouselImages[activeCarousel].id === 2 ? '🛏️' : carouselImages[activeCarousel].id === 3 ? '🍳' : '🚿'}</div>
                <p className="text-navy-900 font-semibold text-lg">
                  {carouselImages[activeCarousel].title}
                </p>
                <p className="text-navy-700/70">
                  {carouselImages[activeCarousel].description}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-cream-50/80 hover:bg-cream-50 text-navy-900 p-2 rounded-full transition-all"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-cream-50/80 hover:bg-cream-50 text-navy-900 p-2 rounded-full transition-all"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCarousel(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeCarousel
                      ? "bg-navy-900 w-8"
                      : "bg-cream-50/60 hover:bg-cream-50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive floorplan */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-navy-900 mb-8">
            Floorplan (Click rooms for details)
          </h3>
          <div className="bg-gradient-to-br from-cream-100 to-white rounded-xl p-8 border-2 border-gold-300 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() =>
                    setSelectedRoom(
                      selectedRoom === room.id ? null : room.id
                    )
                  }
                  className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 cursor-pointer font-semibold ${
                    selectedRoom === room.id
                      ? "border-gold-500 bg-gold-50 shadow-lg text-navy-900"
                      : "border-gold-200 bg-white hover:border-gold-400 text-navy-900"
                  }`}
                >
                  <div className="text-4xl mb-2">{room.icon}</div>
                  <p className="text-sm">
                    {room.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Room details */}
        {selectedRoom && (
          <div className="bg-gradient-to-r from-gold-50 to-cream-50 border-l-4 border-gold-500 p-8 rounded-r-xl animate-in fade-in shadow-lg">
            {rooms
              .filter((room) => room.id === selectedRoom)
              .map((room) => (
                <div key={room.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{room.icon}</span>
                    <div>
                      <h4 className="text-2xl font-serif text-navy-900">
                        {room.name}
                      </h4>
                      <p className="text-navy-700/70">{room.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {room.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-navy-700 mt-1">✓</span>
                        <span className="text-navy-700/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
