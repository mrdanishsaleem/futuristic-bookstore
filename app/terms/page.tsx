'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using Cyberpunk Bookstore ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: '2. Use License',
      content: `Permission is granted to temporarily download one copy of the materials on Cyberpunk Bookstore's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      - Modify or copy the materials
      - Use the materials for any commercial purpose or for any public display
      - Attempt to decompile or reverse engineer any software
      - Remove any copyright or other proprietary notations from the materials`,
    },
    {
      title: '3. Shipping Policy',
      content: `We ship to all 50 states in the United States. Shipping costs and delivery times vary based on the shipping method selected:
      - Standard Shipping (5-7 business days): Free on orders over $50, $5.99 otherwise
      - Express Shipping (2-3 business days): $12.99
      - Overnight Shipping (1 business day): $24.99
      
      Orders are typically processed within 1-2 business days. You will receive a tracking number via email once your order ships.`,
    },
    {
      title: '4. Returns & Refunds',
      content: `We offer a 30-day return policy for items in their original condition:
      - Items must be unopened and in original packaging
      - Return shipping costs are the responsibility of the customer unless the item is defective
      - Refunds will be processed within 5-7 business days after we receive the returned item
      - Digital products (ebooks, audiobooks) are non-refundable once downloaded`,
    },
    {
      title: '5. Privacy Policy',
      content: `Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information:
      - We collect information you provide when making a purchase or creating an account
      - We use your information to process orders, communicate with you, and improve our services
      - We do not sell your personal information to third parties
      - We implement security measures to protect your data
      - You can request access to or deletion of your personal data at any time`,
    },
    {
      title: '6. Payment Terms',
      content: `We accept all major credit cards, PayPal, and Apple Pay. All prices are in USD. By placing an order, you authorize us to charge your payment method for the total amount of your order.`,
    },
    {
      title: '7. Intellectual Property',
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of Cyberpunk Bookstore and is protected by United States and international copyright laws.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `Cyberpunk Bookstore shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.`,
    },
    {
      title: '9. Changes to Terms',
      content: `We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through a notice on our website.`,
    },
    {
      title: '10. Contact Information',
      content: `If you have any questions about these Terms & Conditions, please contact us at:
      Email: legal@cyberbooks.com
      Address: Cyberpunk Bookstore, 123 Future Street, San Francisco, CA 94105`,
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Terms & Conditions</span>
          </h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg p-6 md:p-8"
            >
              <h2 className="font-orbitron text-2xl font-semibold text-cyber-neon-cyan mb-4">
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{section.content}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}

