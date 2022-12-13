import axios from "axios";
import { useEffect, useState } from "react";
import Occurence from "../components/Occurence";

export default function Home() {
  const [occurences, setOccurences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [length, setLength] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:7000/occurences?page=${page}&pageSize=25`)
      .then((res) => {
        setOccurences((prevState) => [...res.data.results]);
        setIsLoading(false);
        setLength(res.data.count);
        console.log(res.data.results);
        return res.data.results;
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [page]);
  return (
    <>
      <h1 className="w-1/2 font-bold text-6xl my-8 m-auto">Flora Occurences</h1>
      <div className=" flex flex-row w-1/4 mb-4 m-auto"></div>
      {occurences &&
        occurences.map((occurence) => {
          return <Occurence key={occurence.gbifID} occurence={occurence} />;
        })}
      <div className="w-1/2 h-28 m-auto flex flex-row justify-between items-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <button
              disabled={page === 1}
              onClick={() => setPage((prevState) => prevState - 1)}
              className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm disabled:bg-gray-300"
            >
              Prev
            </button>
            <p>
              Page {page} of {length / 25}
            </p>
            <button
              onClick={() => setPage((prevState) => prevState + 1)}
              className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm disabled:bg-gray-300"
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
}
