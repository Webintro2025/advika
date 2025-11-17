"use client"
import React from 'react'

const WhyUnique = () => {
  const bullets = [
    {
      title: 'Direct Sourcing from Bihar’s Heartland',
      desc: 'We source our makhana directly from the best farms in Bihar, ensuring authenticity and supporting India’s traditional agricultural communities.'
    },
    {
      title: 'Handpicked Quality Control',
      desc: 'Each batch of makhana is manually sorted and inspected for size, texture, and purity before processing, ensuring consistent excellence.'
    },
    {
      title: 'Traditional Roasting, Modern Packaging',
      desc: 'We blend traditional roasting techniques that retain nutrients with modern airtight packaging that locks in freshness and crunch.'
    },
    {
      title: 'Farmer Empowerment Philosophy',
      desc: 'We maintain fair-trade relationships with local farmers, ensuring they earn more and live better.'
    },
    {
      title: 'Customer-Centric Approach',
      desc: 'We listen to customers, innovate flavours, and deliver what they love — authentic, flavorful, healthy makhana.'
    },
    {
      title: 'Sustainability Practices',
      desc: 'We use eco-friendly packaging, promote plastic reduction, and aim to build a zero-waste supply chain.'
    },
    {
      title: 'Transparency & Trust',
      desc: 'Every product from Advika Naturals carries our promise of purity, honesty, and satisfaction. No hidden ingredients, no false claims.'
    }
  ]

  // Replace the placeholder image URLs with your real images in public/uploads when ready.
  const bgImage = '/uploads/why-advika-bg.jpg' // fallback path — replace as needed

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative rounded-2xl overflow-hidden shadow-lg group">
        {/* Background image with subtle zoom on hover */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${bgImage})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/40 to-black/25" />
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why We Are Unique</h2>
            <p className="text-sm lg:text-base text-[#F6C23E] font-medium mb-4">What sets Advika Naturals LLP apart is our unwavering focus on authenticity, sustainability, and consumer trust.</p>
            <p className="text-sm lg:text-base text-white/90 mb-6 leading-relaxed">
              We’re not just selling makhana—we’re creating a connection between the farmer’s field and your plate. Our mission is to deliver authentic, nutritious, and delicious makhana with transparency and care.
            </p>

            <div className="space-y-3">
              {bullets.map((b, idx) => (
                <div key={b.title} className="flex items-start gap-4 group-hover:translate-x-0 transform transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#F6C23E] flex items-center justify-center text-[#1B5439] font-bold">{idx + 1}</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{b.title}</h4>
                    <p className="text-white/90 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: small feature card + CTA */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:scale-102 transform transition-transform duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">Farm-to-Packet Promise</h3>
              <p className="text-white/90 text-sm">Freshness and traceability in every pack — from Bihar farms to your kitchen.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:translate-y-[-4px] transform transition-transform duration-300">
              <h3 className="text-lg font-semibold text-[#1B5439] mb-2">Meet Our Founders</h3>
              <p className="text-sm text-gray-700">Guided by Mr. Suman and Mr. Ravi Kumar, our passionate team is dedicated to delivering premium-quality snacks.</p>
              <div className="mt-4">
                <a href="/about" className="inline-block bg-[#1B5439] text-white px-4 py-2 rounded-md hover:bg-[#163f2e] transition-colors">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUnique
