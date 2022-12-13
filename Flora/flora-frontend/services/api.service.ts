export async function fetcher(url: string, options: any = {}) {
  let response: Response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }

  console.log("API response: ", response);

  const data = await response.json();
  return data;
}
