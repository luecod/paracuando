import useSWR from "swr";
import { PublicationsResponse } from "../interfaces/publications.interface";
// import axios from "../helpers/axios.helper";


function usePublications(params?: string) {
  // const { data, error, isLoading, mutate } = useSWR('/publications', axios.get);
  const { data, error, isLoading } = useSWR<PublicationsResponse>('/publications');
  return { data: data?.results, error, isLoading };
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

