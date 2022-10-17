import Layout from "../components/Layout";
import Occurence from "../components/Occurence";
import { fetcher } from "../services/api.service";
import { useState, useEffect, React } from "react";

export default function Home() {
  const [Page, setPage] = useState(1);
  const [PageSize, setPageSize] = useState(25);
  const [data, setData] = useState({ page: 0, pageSize: 0, results: [] });

  useEffect(() => {
    fetchFromApi();
  }, [Page]);

  function handlePreviousPage() {
    Page > 1 ? setPage(Page - PageSize) : () => {};
  }
  function handleNextPage() {
    Page < data.count ? setPage(Page + PageSize) : () => {};
  }

  async function fetchFromApi() {
    const response = await fetcher(
      `http://localhost:7000/occurences?page=${Page}&pageSize=${PageSize}`
    );
    setData(response);
  }

  return (
    <Layout>
      {data &&
        data.results.map((occurence) => {
          return <Occurence key={occurence.gbifID} occurence={occurence} />;
        })}
      <h3 className="text-sm mt-4">
        Showing {data.page}-{data.page + data.pageSize} of {data.count}
      </h3>
      <div className="flex-row">
        <button
          onClick={handlePreviousPage}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNextPage}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &gt;
        </button>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps(page = 1, pageSize = 25) {
//   const response = await fetcher(
//     `http://localhost:7000/occurences?page=${page}&pageSize=${pageSize}`
//   );
//   return {
//     props: {
//       page: response.page,
//       pageSize: response.pageSize,
//       count: response.count,
//       occurences: response.results,
//     },
//   };
// }
