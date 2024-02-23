"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params}`);
  };
  return (
    <div className="flex justify-between mt-[30px]">
      <button
        onClick={() => handleChangePage("prev")}
        disabled={!hasPrev}
        className="px-[20px] py-[5px] rounded-[7px] cursor-pointer bg-techko-main disabled:bg-[#222] disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <button
        onClick={() => handleChangePage("next")}
        disabled={!hasNext}
        className="px-[20px] py-[5px] rounded-[7px] cursor-pointer bg-techko-main disabled:bg-[#222] disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
