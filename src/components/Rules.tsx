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
      className="bg-cream-50/50 py-20 px-4 sm:px-6 lg:px-8 border-t border-gold-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy-900 mb-4">
            House Rules
          </h2>
          <p className="text-navy-700/70 text-lg">
            Help us maintain this beautiful space for everyone
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-cream-50 rounded-lg p-6 border border-gold-100 hover:border-gold-300 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">{rule.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {rule.title}
              </h3>
              <p className="text-navy-700/70 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 bg-gold-50 border border-gold-200 rounded-lg p-6 text-center">
          <p className="text-navy-900">
            We appreciate your respect for our home and our neighbors.
          </p>
          <p className="text-navy-700/70 text-sm mt-2">
            Questions? Reach out via Airbnb chat anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
