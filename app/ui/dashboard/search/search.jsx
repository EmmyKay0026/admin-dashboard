"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { BsSearch } from "react-icons/bs";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete;
    }
    replace(`${pathName}?${params}`);
    console.log(params);
  }, 300);

  return (
    <div className="flex items-center gap-[20px] rounded-[20px] py-[6px] px-[10px] bg-white text-black ">
      <BsSearch />
      <input
        type="search"
        placeholder={placeholder}
        className="bg-transparent border-0 outline-0 pl-[10px] rounded-[10px]"
        name=""
        onChange={handleSearch}
        id=""
      />
    </div>
  );
};

export default Search;
