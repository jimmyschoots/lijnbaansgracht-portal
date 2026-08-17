"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-navy-900 text-cream-50 py-16 px-4 sm:px-6 lg:px-8 mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact section */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
            <p className="text-gold-200 mb-6 leading-relaxed">
              Have questions or need help during your stay? We're here for you!
            </p>
            <div className="bg-navy-800/50 rounded-lg p-6 border border-navy-700">
              <p className="text-sm text-gold-300 mb-2">Preferred Contact:</p>
              <p className="text-lg font-semibold text-cream-50 mb-4">
                Airbnb Chat
              </p>
              <p className="text-gold-200 text-sm">
                Message us anytime through the Airbnb app for the fastest response.
              </p>
              <p className="text-gold-300 text-xs mt-4">
                📱 Response time: Usually within 30 minutes
              </p>
            </div>
          </div>

          {/* Quick info */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Quick Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gold-300">Address</p>
                <p className="text-cream-50">Lijnbaansgracht 204-1, Amsterdam</p>
              </div>
              <div>
                <p className="text-sm text-gold-300">Check-in</p>
                <p className="text-cream-50">After 14:00 (2:00 PM)</p>
              </div>
              <div>
                <p className="text-sm text-gold-300">Check-out</p>
                <p className="text-cream-50">Before 12:00 (noon)</p>
              </div>
              <div>
                <p className="text-sm text-gold-300">Emergency</p>
                <p className="text-cream-50">Call 112</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 pt-12 mb-8">
          {/* Closing message */}
          <div className="bg-navy-800/30 rounded-lg p-8 border border-navy-700 mb-8">
            <p className="text-center text-gold-200 text-lg leading-relaxed font-light">
              "Welcome to Amsterdam! We hope you enjoy exploring our beautiful city from your cozy canal-side home.
              Please treat this apartment with care, and don't hesitate to reach out if you need anything.
              We look forward to hosting you. See you soon!"
            </p>
            <p className="text-center text-gold-300 mt-6 font-semibold">
              — Jimmy & Team
            </p>
          </div>

          {/* Footer links */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gold-300">
            <p>Lijnbaansgracht 204-1 © {new Date().getFullYear()}</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="hover:text-cream-50 transition-colors"
                aria-label="Privacy Policy"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-cream-50 transition-colors"
                aria-label="Terms"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-cream-50 transition-colors"
                aria-label="Airbnb Listing"
              >
                Airbnb
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center text-gold-300 text-xs">
          <p>Made with ♥️ for our guests in Amsterdam</p>
        </div>
      </div>
    </footer>
  );
}
