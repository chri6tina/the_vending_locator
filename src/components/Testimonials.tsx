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

export default function Testimonials({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bg-white ${compact ? 'py-10 sm:py-12 lg:py-14' : 'py-16 sm:py-24 lg:py-32'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold tracking-tight text-chocolate px-4 sm:px-0"
          >
            Trusted by Vending Operators Nationwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-chocolate/70 px-4 sm:px-0"
          >
            Don't just take our word for it. Here's what our clients have to say about their results.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mx-auto ${compact ? 'mt-8 sm:mt-10' : 'mt-12 sm:mt-16 sm:mt-20'} flow-root max-w-2xl lg:mx-0 lg:max-w-none`}
        >
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="card bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-x-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-chocolate/80 mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base leading-6 sm:leading-7">&ldquo;{testimonial.body}&rdquo;</p>
                </blockquote>
                <div className="flex items-center gap-x-3 sm:gap-x-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-xs sm:text-sm">
                      {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-chocolate text-sm sm:text-base">{testimonial.author.name}</div>
                    <div className="text-xs sm:text-sm text-chocolate/70 truncate">{testimonial.author.handle}</div>
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
          className={`${compact ? 'mt-6 sm:mt-8' : 'mt-12 sm:mt-16'} text-center px-4 sm:px-0`}
        >
          <p className="text-sm sm:text-base text-chocolate/70">
            Ready to join thousands of successful vending operators?{' '}
            <a href="/contact" className="font-semibold text-navy hover:text-navy-light">
              Get started today
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
