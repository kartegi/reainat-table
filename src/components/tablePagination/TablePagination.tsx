import React, { useEffect, useState } from "react";
import { dataTypedSelector } from "../../hooks/dataTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Data } from "../../types/dataTypes";
import "./table-pagination.sass";

const TablePagination: React.FC<Data> = ({ mutated }) => {
  const { step, page } = dataTypedSelector((state) => state.data);
  const [pages, setPages] = useState<number[]>([]);
  const { turnPage } = useActions();

  useEffect(() => {
    setPages(
      Array.from({ length: Math.ceil(mutated.length / step) }, (v, k) => k + 1)
    );
  }, [step, mutated]);

  function handleTurnPage(e: React.MouseEvent<HTMLElement>): void {
    const element = e.target as HTMLElement;

    turnPage(Number(element.innerText) - 1);
  }

  return (
    <div className="pagination">
      {pages.map((num) => (
        <span
          key={num}
          onClick={handleTurnPage}
          className={`pagination__page ${
            num === page + 1 ? "pagination__page--selected" : ""
          }`}
        >
          {num}
        </span>
      ))}
    </div>
  );
};

export default TablePagination;
