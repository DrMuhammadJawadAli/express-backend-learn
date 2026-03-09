import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center">Full stack web Application</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => {
        console.log(joke);
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
      </div>
    </>
  );
}
