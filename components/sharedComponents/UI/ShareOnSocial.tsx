"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
function ShareOnSocial({ product }: { product: IProductDetails | IBlog }) {
  return (
    <div className="flex gap-2">
      <FacebookShareButton
        url={product.image}
        title={product.title}
        className="hover:opacity-75"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={product.image}
        title={product.title}
        className="hover:opacity-75"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={product.image}
        title={product.title}
        className="hover:opacity-75"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}

export default ShareOnSocial;
