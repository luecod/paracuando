import useSWR from "swr";

function usePublications() {
  // const { data, error, isLoading, mutate } = useSWR('/publications', axios.get);
  const { data, error, isLoading, mutate } = useSWR('/publications');
  return { data, error, isLoading, mutate };
  // return {
  //   publications: data,
  //   isLoading: !error && !data,
  //   isError: error
  // }
}

// function createPublication(publication: any) {
//   return axios.post('/publications', publication);
// }

export { usePublications };

