const workflowSteps = [
  {
    number: "01",
    title: "Brief",
    description:
      "We understand your product, audience, objective and creative requirements.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We develop the visual direction, scenes, references and creative approach.",
  },
  {
    number: "03",
    title: "AI Production",
    description:
      "We create the required AI images, characters, products, environments and scenes.",
  },
  {
    number: "04",
    title: "Animation & Edit",
    description:
      "Images are animated, edited and assembled into polished advertising content.",
  },
  {
    number: "05",
    title: "Final Creative",
    description:
      "The finished creative is prepared for your required platform and format.",
  },
];

function Workflow() {
  return (
    <section className="workflow" id="workflow">
      <div className="workflow__header">
        <span className="section-label">OUR PROCESS</span>

        <h2>
          From idea
          <br />
          to final creative.
        </h2>
      </div>

      <div className="workflow__steps">
        {workflowSteps.map((step, index) => (
          <article className="workflow-step" key={step.number}>
            <div className="workflow-step__top">
              <span>{step.number}</span>

              {index < workflowSteps.length - 1 && (
                <span className="workflow-step__line" />
              )}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Workflow;