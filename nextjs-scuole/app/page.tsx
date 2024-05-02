import Image from "next/image";
import Navbar from "./components/Navbar";
import Schools from "./components/Schools";


export default function Home() {
    return (
      <>
        <Navbar />
        <Image src="/path/to/image.jpg" alt="Image" width={500} height={300} />
        <Schools schools={[]} />
      </>
    );
  }
