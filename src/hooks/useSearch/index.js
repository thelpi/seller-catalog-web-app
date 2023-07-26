import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSearch() {
  const [seachParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearch] = useState(seachParams.get("q") || "");

  const onSearchChange = (evt) => setSearch(evt.currentTarget.value);

  const searchSubmit = (refetch) => (evt) => {
    evt.preventDefault();
    setSearchParams({ q: searchTerm });
    refetch();
  };

  return [searchTerm, { onSearchChange, searchSubmit }];
}
