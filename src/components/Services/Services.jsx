const services = [
  {
    number: "01",
    title: "AI Image Generation",
    description:
      "High-quality AI-generated product, lifestyle, fashion and advertising visuals for brands.",
  },
  {
    number: "02",
    title: "AI Video Production",
    description:
      "Short-form AI videos and advertising creatives designed for social media and digital campaigns.",
  },
  {
    number: "03",
    title: "AI Product Advertising",
    description:
      "Product-focused AI creatives that turn products into engaging advertising content.",
  },
  {
    number: "04",
    title: "AI UGC & Testimonials",
    description:
      "AI-generated UGC and testimonial-style videos for performance marketing and social media.",
  },
  {
    number: "05",
    title: "AI Fashion Creatives",
    description:
      "AI fashion, clothing and lifestyle visuals while maintaining the required product and garment details.",
  },
  {
    number: "06",
    title: "Image-to-Video",
    description:
      "Transform static images into engaging animated scenes, product videos and social media creatives.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <div>
          <span className="section-label">WHAT WE DO</span>

          <h2>
            AI creativity,
            <br />
            built for brands.
          </h2>
        </div>

        <p>
          From a single product image to a complete advertising video,
          we create visual content designed for modern digital marketing.
        </p>
      </div>

      <div className="services__list">
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <span className="service-item__number">
              {service.number}
            </span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <span className="service-item__arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;