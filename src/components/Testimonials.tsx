'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    body: "The Vending Locator found me 3 perfect locations in just 2 weeks. I've already closed 2 deals and the ROI is incredible. This service pays for itself!",
    author: {
      name: 'Mike Johnson',
      handle: 'Vending Empire LLC',
      imageUrl: '/api/placeholder/40/40',
    },
    rating: 5,
  },
  {
    body: "I was struggling to find good locations on my own. The Vending Locator's research is thorough and their leads are pre-qualified. Saved me months of work!",
    author: {
      name: 'Sarah Williams',
      handle: 'Refresh Vending Co.',
      imageUrl: '/api/placeholder/40/40',
    },
    rating: 5,
  },
  {
    body: "As a new vending operator, I needed guidance. The Vending Locator not only found locations but provided business advice that helped me get started right.",
    author: {
      name: 'David Chen',
      handle: 'First Stop Vending',
      imageUrl: '/api/placeholder/40/40',
    },
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl"
          >
            Trusted by Vending Operators Nationwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-chocolate/70"
          >
            Don't just take our word for it. Here's what our clients have to say about their results.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="card">
                <div className="flex items-center gap-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-chocolate/80 mb-6">
                  <p className="text-base leading-7">"{testimonial.body}"</p>
                </blockquote>
                <div className="flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-coral flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-chocolate">{testimonial.author.name}</div>
                    <div className="text-sm text-chocolate/70">{testimonial.author.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-cream rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-semibold text-chocolate mb-4">
              Join 3,000+ Successful Vending Operators
            </h3>
            <p className="text-chocolate/70 mb-6">
              Start finding qualified locations today and build your vending empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/hot-leads"
                className="btn-primary"
              >
                Get Hot Leads
              </a>
              <a
                href="/pricing"
                className="btn-secondary"
              >
                View Plans
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
