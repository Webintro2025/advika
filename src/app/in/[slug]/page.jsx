import ConsultationForm from "@/components/ConsultationForm";
// Dynamic SEO metadata for each location page
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .trim();

  const rawLocation = normalizedSlug.replace(/-/g, ' ') || 'india';

  const locationName = rawLocation
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const title = `Roasted Makhana Suppliers in ${locationName} | Advika Naturals LLP`;
  const description = `Need Roasted Makhana Suppliers in ${locationName} Call Advika Naturals LLP, Flavoured Makhana Supplier in ${locationName}, Roasted Makhana Manufacturer in ${locationName}, India.`;
  const keywords = [
    `Roasted Makhana Suppliers in ${locationName}`,
    `Flavoured Makhana Suppliers in ${locationName}`,
    `Roasted Makhana Manufacturer in ${locationName}`,
    `Flavoured Makhana Manufacturer in ${locationName}`,
    `Black Pepper Makhana Suppliers in ${locationName}`,
    `Classic Salted Makhana Suppliers in ${locationName}`,
    `Cheese Makhana Suppliers in  ${locationName}`,
    `Pudina Makhana Suppliers in  ${locationName}`,
    `Peri Peri Makhana Suppliers in  ${locationName}`,
    `Makhana Cookies And Drinks Suppliers And Manufacturer in ${locationName}`,
    `Flavoured Makhana Suppliers And Manufacturer in  ${locationName}`,
    `Roasted Makhana Suppliers And Manufacturer in  ${locationName}`,
  ].join(', ');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://advikanaturals.com/in/${slug}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .trim();

  const rawLocation = normalizedSlug.replace(/-/g, ' ') || 'india';

  const locationName = rawLocation
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
    return (
           <main className="w-full ">
     



<div className="relative bg-[#0F4B2E] w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[400px]">

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-10 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
      Roasted Makhana Suppliers in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md: lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://advikanaturals.com/">Advika Naturals LLP,</a>  If You Are Looking For <strong>Roasted Makhana Suppliers in {locationName}</strong>, We Are The Best Option For You. We Provide Best <strong>Roasted Makhana Suppliers in {locationName}</strong> , <strong>Flavoured Makhana Suppliers in {locationName}, India.</strong>



    </p>
    <button
      className="mt-4 sm:mt-6 bg-[#F6C23E] text-black text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://advikanaturals.com/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
    <section className="w-full md:w-1/2 text-black">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
    Roasted Makhana Suppliers in {locationName} – Advika Naturals LLP
  </h2>
  <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
    Advika Naturals LLP is proud to be recognized among the most reliable and quality-driven <strong>Roasted Makhana Suppliers in {locationName}</strong>, delivering premium, nutritious, and delicious makhana varieties to customers across the country. Rooted in purity and authenticity, our brand stands for freshness, originality, and the timeless taste of traditional Indian snacking. We source our makhana directly from the fertile fields of Bihar—the heartland of India’s makhana cultivation ensuring that every pack carries the richness of true farm-fresh produce.
    <br />
    <br />
    Under the leadership of Mrs. Suman and Mr. Ravi Kumar, our team blends traditional values with modern food processing standards to craft nutritious snacks for every home. As one of the trusted manufacturers and <strong>Roasted Makhana Suppliers in {locationName}</strong>, we ensure hygienic processing, premium grading, and irresistible flavors in every bite.
  </p>
</section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
            alt={`Roasted Makhana Suppliers in ${locationName}`}
            className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/Mint makhana (1).png"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
    Why Advika Naturals LLP is the Trusted Choice for Flavoured Makhana Suppliers in {locationName}
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
    As dedicated manufacturers and leading <strong>Roasted Makhana Suppliers in {locationName}</strong>, we focus on delivering products that are hygienic, premium-grade, and full of nutritional value. Every pack undergoes careful sourcing directly from farmers, multi-level cleaning and grading, oil-free and preservative-free roasting, automated packaging for freshness, and strict quality checks at every stage.
    <br />
    <br />
    Our commitment to purity, health, and taste ensures that customers receive only the finest <a href="https://en.wikipedia.org/wiki/Euryale_ferox">makhana</a> products across all categories. At <strong>Flavoured Makhana Suppliers in {locationName},</strong> Whether you are a retailer, wholesaler, distributor, or direct consumer, Advika Naturals LLP promises world-class quality with every order.
    </p>
  </div>
  <div className="w-full md:w-1/3  p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center ">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
<ConsultationForm />
  </div>
</div>





<hr />








  <div className="w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
    <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm: md:max-w-4xl">
    Our Product Range – Crafted by Leading Roasted Makhana Suppliers in {locationName}
    </h2>
    <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] mx-auto">
    At <strong>Advika Naturals LLP</strong>, we offer an extensive collection of healthy and delicious makhana-based products. Each product is processed using advanced machinery, strict hygiene practices, and premium ingredients, making us a preferred choice among <strong>Roasted Makhana Suppliers in {locationName}</strong>.
    </p>
    <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-4 sm:mt-6 leading-[1.6] list-none  mx-auto">
    <li>
      <span className="font-bold">1. Roasted Makhana Suppliers And Manufacturer in {locationName}</span>
      <br />
      As one of the top <strong>Roasted Makhana Suppliers in {locationName}</strong>, our classic roasted variant is prepared without any artificial flavors or preservatives. Light, crunchy, and rich in antioxidants, this snack is perfect for fitness-conscious individuals, fasting days, or guilt-free munching anytime. Every grain is handpicked, slow-roasted, and packed to retain its natural crunch and purity.
    </li>
    <li>
      <span className="font-bold">2. Flavoured Makhana Suppliers And Manufacturer in {locationName}</span>
      <br />
      Our flavored makhana range brings together taste and wellness in perfect harmony. As reputed manufacturers and <strong>Flavoured Makhana Suppliers in {locationName}</strong>, we ensure each flavor is crafted with authentic spices and premium seasonings. The seasoning process enhances taste while preserving all the nutritional benefits of fox nuts.
    </li>
    <li>
      <span className="font-bold">3. Makhana Cookies And Drinks Suppliers And Manufacturer in {locationName}</span>
      <br />
      Taking innovation to the next level, we also offer Makhana Cookies and Makhana-based Drinks—delicious, protein-rich, and perfect for modern consumers. These unique products are crafted for people wanting healthier alternatives without compromising on taste. Our expertise as <strong>Makhana Cookies And Drinks Suppliers in {locationName}</strong> ensures top-quality raw makhana is used to create these value-added products.
    </li>
    </ul>

    <h3 className="text-center mx-auto text-base xs:text-lg sm:text-xl font-semibold mt-8 sm:mt-10 mb-3 sm:mb-4 text-black max-w-2xl">
    Our Flavour Makhana Variants in {locationName}
    </h3>
    <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base leading-[1.6] list-none  mx-auto">
    <li>
      <span className="font-bold">Peri Peri Makhana Suppliers in {locationName}</span>
      <br />
      Our Peri Peri Makhana is a fiery, tangy, and irresistibly crispy snack that gives you a burst of bold flavors in every munch. Carefully roasted and coated with premium peri peri seasonings, it’s a favorite among spice lovers across {locationName}.
    </li>
    <li>
      <span className="font-bold">Pudina Makhana Suppliers in {locationName}</span>
      <br />
      Refreshing, aromatic, and delightfully light, our Pudina Makhana combines the coolness of mint with the crunch of roasted makhana. This flavour is a must-try for those who love herbal and tangy snacks.
    </li>
    <li>
      <span className="font-bold">Cheese Makhana Suppliers in {locationName}</span>
      <br />
      A creamy delight for all age groups, our Cheese Makhana is perfectly roasted and coated with rich cheesy seasoning, making it a great alternative to junk food. Kids especially love its smooth, savoury taste.
    </li>
    <li>
      <span className="font-bold">Classic Salted Makhana Suppliers in {locationName}</span>
      <br />
      Simple, pure, and timeless the Classic Salted Makhana is ideal for people who love natural flavors. Lightly salted and roasted to perfection, this snack reflects why we are trusted as one of the top <strong>Flavoured Salted Makhana Suppliers in {locationName}</strong>.

    </li>
    <li>
      <span className="font-bold">Black Pepper Makhana  Suppliers in {locationName}</span>
      <br />
      Spicy, earthy, and rich in antioxidants, our Black Pepper Makhana is a premium snack enriched with the natural heat of crushed pepper. It boosts digestion and adds a delicious zing to your daily snacking routine.
    </li>
    </ul>
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact Advika Naturals LLP</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">
    If you are looking for trusted <strong>Roasted Makhana Suppliers in {locationName}</strong>, get in touch with Advika Naturals LLP to discuss your requirements, request pricing, or place bulk and retail orders.
  </p>
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91 7678556015</li>
      <li>👉 <strong>Our Email Address</strong> – <a href="mailto:advikanaturalsllp@gmail.com">advikanaturalsllp@gmail.com</a></li>
    </ul>
  </div>
  </div>

``




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm: md:max-w-4xl">
    Why Choose Us  Your Trusted Roasted Makhana Suppliers in {locationName}
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    Choosing the right brand for healthy snacking is essential, and at <strong>Advika Naturals LLP</strong>, we take pride in delivering products that reflect purity, freshness, and exceptional taste. As one of the most preferred <strong>Roasted Makhana Suppliers in {locationName}</strong>, we ensure that every pack we deliver stands for our commitment to quality, innovation, and trust. Here's why thousands of customers, retailers, and distributors choose us as their reliable partner in the makhana industry:
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold"> Premium Grade Sourcing from Bihar's Finest Farms</span>
      <br />
      As leading <strong>Flavoured Makhana Suppliers in {locationName}</strong>, we source our makhana directly from the fertile lands of Bihar {locationName}'s largest and most authentic makhana-producing region. This direct farm-to-factory approach ensures that every makhana we use is of the highest grade, free from impurities, and naturally rich in nutrients. By working closely with farmers, we maintain consistent quality and freshness in every batch.
      <br />
      <br />
      Our strong connections with local farmers allow us to select only the best lotus seeds, ensuring premium quality from the very beginning. This gives our customers assurance that each pack contains naturally grown, handpicked makhanas with superior taste and nutritional value.
    </li>
    <li>
      <span className="font-bold"> Hygienic Roasting &amp; State-of-the-Art Processing</span>
      <br />
      We use modern equipment, strict hygiene protocols, and low-oil roasting technology to create healthier and tastier snacks. Our advanced processing setup ensures uniform roasting, perfect crunch, and longer shelf life qualities that make us stand out among top <strong>Flavoured Makhana Suppliers in {locationName}</strong>.
      <br />
      <br />
      From cleaning and grading to roasting and flavoring, every stage is monitored by food experts. This scientific yet traditional approach helps us preserve the natural goodness of makhana while enhancing its taste and texture. Perfect for health-conscious individuals, our products are free from artificial colors, excessive oil, and harmful additives.
    </li>
    <li>
      <span className="font-bold"> Wide Range of Innovative &amp; Premium Flavours</span>
      <br />
      We offer a diverse selection of delicious makhana products including Peri Peri, Pudina, Cheese, Classic Salted, and Black Pepper. Our constant innovation and unique recipes make us one of the most versatile <strong>Roasted Makhana Suppliers in {locationName}</strong>.
      <br />
      <br />
      Each flavor is crafted using authentic spices and premium ingredients, ensuring a gourmet snacking experience. Whether customers prefer spicy, tangy, cheesy, or mild flavours we have something for everyone. This wide range helps retailers attract customers and boosts repeat demand.
    </li>
    <li>
      <span className="font-bold"> Manufacturer + Bulk Supplier Advantage</span>
      <br />
      Unlike many brands who rely on third-party processing, we are both manufacturer and <strong>Roasted Makhana Suppliers in {locationName}</strong>, giving us full control over quality, pricing, and timely delivery.
      <br />
      <br />
      Our in-house manufacturing ensures consistent taste, freshness, and hygiene across all product lines. For wholesale buyers, this means better margins, stable pricing, flexible order quantities, and reliable bulk supplies all year round.
    </li>
    <li>
      <span className="font-bold">100% Natural, Healthy &amp; Fresh Snacking</span>
      <br />
      Our products are roasted, not fried making them light, nutritious, and suitable for all age groups. With zero cholesterol, low calories, and high protein content, our makhana is a perfect alternative to unhealthy, oily snacks.
      <br />
      <br />
      We believe in offering snacks that support a healthy lifestyle. Each pack undergoes multi-stage cleaning and quality checks to ensure purity. As responsible <strong>Flavoured Makhana Suppliers in {locationName}</strong>, we deliver snacks that are not only delicious but also good for the heart, digestion, and overall wellness.
    </li>
    <li>
      <span className="font-bold">Attractive Packaging &amp; Long Shelf Life</span>
      <br />
      Every product is packed using air-tight, moisture-proof, food-grade packaging to maintain flavor, aroma, and crispiness.
      <br />
      <br />
      Our premium jars and pouches are designed to keep the makhana fresh for months while enhancing its visual appeal on store shelves. Retailers appreciate the premium look, and customers enjoy the long-lasting crunch and freshness.
    </li>
    <li>
      <span className="font-bold"> Customer-Centric Approach with Reliable Delivery</span>
      <br />
      We value trust, transparency, and long-term relationships. Whether it's a small order or bulk supply, we ensure smooth service, quick response, and fast, safe delivery.
      <br />
      <br />
      Our team is dedicated to assisting clients with queries, product customization, pricing, and logistics. This professional and cooperative approach makes us one of the most dependable <strong>Roasted Makhana Suppliers in {locationName}</strong> for distributors, wholesalers, and retail brands.
    </li>
  </ul>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
    Advika Naturals LLP stands proudly among the top <strong>Roasted Makhana Suppliers in {locationName}</strong>, offering a diverse range of premium snacks including Roasted Makhana, Flavoured Makhana, Peri Peri Makhana, Pudina Makhana, Cheese Makhana, Classic Salted Makhana, Black Pepper Makhana, and innovative products like Makhana Cookies &amp; Drinks. With a strong commitment to quality, authenticity, and customer satisfaction, we continue to bring healthier snacking options to homes across {locationName}.
    <br />
    <br />
    If you're looking for reliable, hygienic, and high-quality makhana products directly from a reputed manufacturer, Advika Naturals LLP is your trusted destination.
  </p>
</div>

    </main>
    );
}