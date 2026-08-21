import { siteConfig } from "../../generated/siteConfig";


function Process() {
  const { process } = siteConfig;


  return (
    <section className="process" id="process">
      <div className="process__header">
        <div>
          <span className="section-label">
            {process.eyebrow}
          </span>


          <h2>{process.title}</h2>
        </div>


        <p>{process.description}</p>
      </div>


      <div className="process__steps">
        {process.steps.map((step) => (
          <article
            key={step.number}
            className="process__step"
          >
            <span className="process__number">
              {step.number}
            </span>


            <div className="process__content">
              <h3>{step.title}</h3>


              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


export default Process;
