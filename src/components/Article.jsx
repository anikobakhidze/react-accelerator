import React from "react";

function Article({ title, children }) {
  return (
    <article className="article-container">
      <h3 className="article-heading">{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default Article;
