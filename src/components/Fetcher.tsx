import axios from "axios";
import { useEffect, useState } from "react";
// Effect to fetch the data, State to store the data

// to select our data more individually
interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Fetcher() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    axios
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Fetching Data</h1>
      <ul>
        {posts.map((element) => (
          <li
            key={element.id}
            className="bg-indigo-300 border-2 border-black p-3 my-4 rounded-md"
          >
            <h2>{element.title}</h2>
            <p>{element.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Fetcher;
