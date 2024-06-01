import axios from "axios";
import { useEffect, useState } from "react";
// Effect to fetch the data, State to store the data

// to select our data more individually
interface Posts {
  id: number;
}

function Fetcher() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    axios
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <>
      <h1>Fetching Data</h1>
      <ul>
        {posts.map((element) => (
          <li key={element.id}>{element.id}</li>
        ))}
      </ul>
    </>
  );
}

export default Fetcher;
