import Layout from "../components/Layout";
import Occurence from "../components/Occurence";
import { fetcher } from "../services/api.service";
import { useState, useEffect, React } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Home({ initialCache }) {
  const [dataCache, setDataCache] = useState(initialCache);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  function handlePreviousPage() {}
  async function handleNextPage() {
    console.log("page + pageSize", page + pageSize);
    let newPage = page + pageSize;
    setPage(newPage);
    console.log("page", page);
    if (dataCache.length < page + pageSize + 1) {
      updateCache();
    }
  }

  async function updateCache() {
    const response = await fetcher(
      `http://localhost:7000/occurences?page=${page}&pageSize=${pageSize}`
    );
    console.log(response.results);
    setDataCache(dataCache.concat(response.results));
    console.log(dataCache);
  }

  const sortOptions = ["eventDate", "recordedBy", "family"];

  return (
    <Layout>
      <div className=" flex flex-row w-1/4 mb-4 m-auto">
        <Dropdown
          className="m-auto mb-4"
          options={sortOptions}
          value={sortOptions[0]}
          placeholder="Select an option"
        />
        <Dropdown
          className="m-auto mb-4"
          options={["desc", "asc"]}
          value={"desc"}
          placeholder="Select an option"
        />
      </div>
      {dataCache &&
        dataCache.slice(page, pageSize).map((occurence) => {
          return <Occurence key={occurence.gbifID} occurence={occurence} />;
        })}
      <h3 className="text-sm mt-4">
        {/* Showing {data.page}-{data.page + data.pageSize} of {data.count} */}
      </h3>
      <div className="flex flex-row">
        <button
          onClick={handlePreviousPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &gt;
        </button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetcher(
    `http://localhost:7000/occurences?page=1&pageSize=50`
  );
  return {
    props: {
      initialCache: response.results,
    },
  };
}
