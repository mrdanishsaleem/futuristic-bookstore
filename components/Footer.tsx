import Link from 'next/link'
import { BookOpen, Mail, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass-strong border-t border-cyber-glassBorder mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-cyber-neon-cyan" />
              <span className="font-orbitron text-xl font-bold gradient-text">
                CYBERBOOKS
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              The bookstore of 2050. Experience the future of reading with cutting-edge technology and an unparalleled selection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyber-neon-cyan mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-cyber-neon-cyan transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyber-neon-cyan transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyber-neon-cyan transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyber-neon-cyan transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyber-neon-cyan mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Free Shipping (U.S.)</li>
              <li>30-Day Returns</li>
              <li>24/7 Support</li>
              <li>Secure Checkout</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyber-neon-cyan mb-4">
              Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@cyberbooks.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="p-2 glass rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 glass rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 glass rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyber-glassBorder text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Cyberpunk Bookstore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

