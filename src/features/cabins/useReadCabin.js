import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins.js";

export function useReadCabin() {
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins, //needs to return a promise!!
  });

  return { isLoading, error, cabins };
}
