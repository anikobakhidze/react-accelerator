import React from "react";

function TextSection({ title, children }) {
  return (
    <section className="section-container">
      <h3 className="section-heading">{title}</h3>
      <p>{children}</p>
    </section>
  );
}

export default TextSection;
