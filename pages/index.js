import Image from "next/image";
import picture from "../public/picture.png";

export default function Home() {
  return (
    <>
      <div>
        <Image src={picture} unoptimized alt="" />
        <p>unoptimized picture</p>
      </div>
      <div>
        <Image src={picture} alt="" />
        <p>AVIF picture</p>
      </div>
      <div>
        <Image src={picture} alt="" quality={100} />
        <p>AVIF picture with max quality</p>
      </div>
      <div>
        <Image
          layout="fixed"
          width={40}
          height={40}
          src="/picture.png"
          alt=""
        />
        <p>AVIF picture with static serving</p>
      </div>
    </>
  );
}
