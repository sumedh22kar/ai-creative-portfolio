import { siteConfig } from "../../generated/siteConfig";


function Services() {
  const { services } = siteConfig;


  return (
    <section className="services" id="services">
      <div className="services__header">
        <div>
          <span className="section-label">
            {services.eyebrow}
          </span>


          <h2>{services.title}</h2>
        </div>


        <p>{services.description}</p>
      </div>


      <div className="services__list">
        {services.items.map((service) => (
          <article
            key={service.number}
            className="services__item"
          >
            <span className="services__number">
              {service.number}
            </span>


            <div className="services__content">
              <h3>{service.title}</h3>


              <p>{service.description}</p>
            </div>


            <span className="services__arrow">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}


export default Services;