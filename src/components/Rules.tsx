export default function Rules() {
  const rules = [
    {
      icon: "👥",
      title: "No Guests",
      description:
        "Please enjoy your stay with just the guests listed on your reservation. No additional visitors allowed.",
    },
    {
      icon: "🎉",
      title: "No Parties",
      description:
        "This is a residential property in a quiet neighborhood. Gatherings and celebrations are not permitted.",
    },
    {
      icon: "🌙",
      title: "Quiet Hours",
      description:
        "Please be respectful of neighbors. Quiet hours are from 9 PM to 9 AM.",
    },
    {
      icon: "🚭",
      title: "No Smoking",
      description:
        "Smoking is strictly prohibited inside and outside the apartment.",
    },
    {
      icon: "🐾",
      title: "No Pets",
      description:
        "Unfortunately, this property is not pet-friendly. Service animals are welcome.",
    },
    {
      icon: "📸",
      title: "No Commercial Photography",
      description:
        "Photography for personal use is fine, but commercial photography is not permitted.",
    },
  ];

  return (
    <section
      id="rules"
      className="bg-gradient-to-b from-cream-50 to-white py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-gold-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-navy-900 mb-4">
            House Rules
          </h2>
          <p className="text-gold-600 text-lg font-light">
            Help us maintain this beautiful space for everyone
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-2 border-gold-200 hover:border-gold-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{rule.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {rule.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 bg-gradient-to-r from-gold-50 to-cream-50 border-l-4 border-gold-500 rounded-r-xl p-8 text-center shadow-lg">
          <p className="text-navy-900 font-bold text-lg">
            We appreciate your respect for our home and our neighbors.
          </p>
          <p className="text-navy-600 text-sm mt-2">
            Questions? Reach out via Airbnb chat anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
