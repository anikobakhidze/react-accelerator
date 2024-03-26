import defaultImage from "../assets/images/defaultImage.jpg";

function BlogCard({ blog: { title, description, publicationDate } }) {
  return (
    <div>
      <img src={defaultImage} alt="blogImg" />
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{publicationDate}</span>
      <button>read more</button>
    </div>
  );
}

export default BlogCard;
