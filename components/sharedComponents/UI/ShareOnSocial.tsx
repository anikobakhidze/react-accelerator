"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
function ShareOnSocial({ product }: { product: IProductDetails }) {
  return (
    <div>
      <FacebookShareButton url={product.image} title={product.title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={product.image} title={product.title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={product.image} title={product.title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}

export default ShareOnSocial;
