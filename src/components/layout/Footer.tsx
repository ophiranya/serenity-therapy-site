import Link from "next/link";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z"
                  />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                Serenity Mind
              </span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary">
              Professional mental health services to help you find peace, build
              resilience, and live fully.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-3 space-y-2">
              {[
                "Individual Therapy",
                "Couples Therapy",
                "Family Therapy",
                "Group Therapy",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>123 Wellness Avenue, Suite 200</li>
              <li>Portland, OR 97201</li>
              <li className="pt-1">
                <a
                  href="tel:+15035551234"
                  className="hover:text-primary transition-colors"
                >
                  (503) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@serenitymind.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@serenitymind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Serenity Mind Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
