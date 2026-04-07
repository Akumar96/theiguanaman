const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-2">IguanaMan</p>
            <p className="text-green-200 text-sm leading-relaxed">
              Professional wildlife removal across all of Florida.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-green-300 mb-4">
              Navigate
            </p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-green-100 hover:text-white text-sm py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-green-300 mb-4">
              Contact
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@iguanaman.com"
                className="block text-green-100 hover:text-white transition-colors"
              >
                info@iguanaman.com
              </a>
              <a
                href="tel:+15551234567"
                className="block text-green-100 hover:text-white transition-colors"
              >
                (555) 123-4567
              </a>
              <p className="text-green-100">Florida Wide</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-700 mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-green-300 text-sm">
            &copy; 2025 IguanaMan. All rights reserved.
          </p>
          <p className="text-green-400 text-sm">
            Humane &amp; professional wildlife removal. Every job done right.
          </p>
        </div>
      </div>
    </footer>
  );
}
