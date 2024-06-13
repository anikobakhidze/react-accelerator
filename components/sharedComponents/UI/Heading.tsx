import Image from "next/image";
import headingBackground from "../../../public/images/headingB.png";
function Heading({ heading }: { heading: string }) {
  return (
    <div>
      <div className="relative flex justify-center items-center mt-4 mb-10">
        <div>
          <Image
            src={headingBackground}
            alt="heading background"
            width={200}
            height={120}
          />
        </div>
        <h2 className="absolute text-base lg:text-2xl font-bold">{heading}</h2>
      </div>
    </div>
  );
}

export default Heading;
