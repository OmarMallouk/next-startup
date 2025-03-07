import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/LoginForm";



export default function Home() {
  console.log('syntax output, -- SERVER/CLIENT');
  
  return (

  <>

  <section className="pink_container">
    <h1 className="heading"> Pitch your idea, <br /> Connect with us</h1>
    <p className="sub-heading !max-w-3xl">
      Submit your ideas, Vote on Pitches
    </p>
  </section>
  <h1 className="heading">Home Page</h1>
  </>
  );
}
