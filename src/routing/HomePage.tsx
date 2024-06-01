import Fetcher from "../components/Fetcher";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <main className="mx-16">
        <div>This is the HomePage</div>
        <h1>Posts</h1>
        <Fetcher></Fetcher>
      </main>
    </>
  );
}

export default HomePage;
