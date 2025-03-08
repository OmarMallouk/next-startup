import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/LoginForm";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";



export default async function Home({searchParams}:{
  searchParams: Promise <{query?: string}>
}) {


const query = (await searchParams).query;

const posts = [{
  _createdAt: new Date(),
  views: 33,
  author: {_id: 1, name:'Sami'},
  _id: 1,
  descritpion: 'wonderfull moon',
  category: "Robots",
  title: "We Robots",
},];
  
  return (

  <>

  <section className="pink_container">
    <h1 className="heading"> Pitch your idea, <br /> Connect with us</h1>
    <p className="sub-heading !max-w-3xl">
      Submit your ideas, Vote on Pitches
    </p>
    <SearchForm query={query}/>
  </section>

  <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search result for "${query}"` : 'All Startups'}
    </p>

    <ul className="mt-7 card_grid">

      {posts?.length > 0 ? (
        posts.map((post:StartupCardType, number) =>(
          <StartupCard key={post?._id} post={post}/>
        )) ) : (
          <p className="no-results">No startups found</p>
        
      )}
    </ul>
  </section>

  </>
  );
}
