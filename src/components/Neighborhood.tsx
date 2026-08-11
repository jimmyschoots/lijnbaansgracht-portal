export default function Neighborhood() {
  const spots = [
    {
      name: "Albert Cuyp Market",
      type: "Market",
      distance: "5 min walk",
      icon: "🛒",
      description: "Amsterdam's famous outdoor market. Great for fresh produce, flowers, and local snacks.",
    },
    {
      name: "Café de Jaren",
      type: "Café & Restaurant",
      distance: "3 min walk",
      icon: "☕",
      description: "Local favorite with canal views. Perfect for breakfast or lunch.",
    },
    {
      name: "Heineken Experience",
      type: "Brewery Tour",
      distance: "8 min walk",
      icon: "🍺",
      description: "Visit Amsterdam's famous brewery and learn about Heineken's history.",
    },
    {
      name: "Grachtengordel (Canal Ring)",
      type: "Historic Area",
      distance: "Walking distance",
      icon: "🏛️",
      description: "UNESCO World Heritage area with beautiful 17th-century architecture.",
    },
    {
      name: "Bloemenmarkt",
      type: "Flower Market",
      distance: "10 min walk",
      icon: "🌷",
      description: "The world's only floating flower market. A must-see Amsterdam experience.",
    },
    {
      name: "Rembrandt House Museum",
      type: "Museum",
      distance: "12 min walk",
      icon: "🎨",
      description: "Where the famous painter lived and worked. Beautiful historic home.",
    },
  ];

  return (
    <section
      id="neighborhood"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-950 mb-4">
            Neighborhood
          </h2>
          <p className="text-amber-900/70 text-lg">
            Handpicked spots near Lijnbaansgracht
          </p>
        </div>

        {/* Address card */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
          <h3 className="font-serif text-2xl text-amber-950 mb-3">Our Address</h3>
          <p className="text-lg text-amber-950 font-semibold mb-2">
            Lijnbaansgracht 204-1
          </p>
          <p className="text-amber-900/70 mb-2">
            1016 XA Amsterdam, Netherlands
          </p>
          <p className="text-sm text-amber-900/60">
            📍 Located in De Pijp neighborhood, near Albert Cuyp Market
          </p>
        </div>

        {/* Recommended spots */}
        <h3 className="text-2xl font-serif text-amber-950 mb-8">
          Recommended Spots
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {spots.map((spot, index) => (
            <div
              key={index}
              className="bg-white border border-amber-100 rounded-lg p-6 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{spot.icon}</span>
                  <div>
                    <h4 className="font-semibold text-amber-950">
                      {spot.name}
                    </h4>
                    <p className="text-xs text-amber-900/60">{spot.type}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-amber-900/60 mb-3">
                ⏱️ {spot.distance}
              </p>
              <p className="text-sm text-amber-900/70 leading-relaxed">
                {spot.description}
              </p>
            </div>
          ))}
        </div>

        {/* Local tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
          <h3 className="font-serif text-2xl text-amber-950 mb-6">
            Local Tips
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🚲</span>
              <div>
                <p className="font-semibold text-amber-950">Cycling</p>
                <p className="text-amber-900/70 text-sm">
                  Amsterdam is bike-friendly. There are plenty of bike rental shops nearby. Consider renting for exploring the city.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🚇</span>
              <div>
                <p className="font-semibold text-amber-950">Public Transport</p>
                <p className="text-amber-900/70 text-sm">
                  Trams, buses, and the metro run frequently. Get an OV-chipkaart for unlimited travel during your stay.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🍷</span>
              <div>
                <p className="font-semibold text-amber-950">Gezelligheid</p>
                <p className="text-amber-900/70 text-sm">
                  This Dutch concept means coziness. Enjoy a drink at a brown café (bruine kroeg) and experience the local vibe.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🥐</span>
              <div>
                <p className="font-semibold text-amber-950">Breakfast & Brunch</p>
                <p className="text-amber-900/70 text-sm">
                  The neighborhood has excellent cafés. Try fresh stroopwafels and local pastries at nearby bakeries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
