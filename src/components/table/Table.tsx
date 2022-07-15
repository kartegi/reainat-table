import React, { useState } from "react";
import { dataTypedSelector } from "../../hooks/dataTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Data } from "../../types/dataTypes";

import "./table.sass";

const exceptions: string[] = ["guid"];

const Table: React.FC<Data> = ({ mutated }) => {
  const { data, sort, step, page } = dataTypedSelector((state) => state.data);
  const [columns] = useState<string[]>(
    Object.keys(data[0]).filter((item) => !exceptions.includes(item))
  );
  const { addData, changeSort } = useActions();

  const handleSort = (e: React.MouseEvent<HTMLElement>): void => {
    const element = e.target as HTMLElement;
    if (sort === "asc") {
      addData(
        [...data].sort((a, b) => {
          a = a[element.innerText].toLowerCase();
          b = b[element.innerText].toLowerCase();
          return a > b ? -1 : 1;
        })
      );
      changeSort("desc");
    } else if (!sort || sort === "desc") {
      addData(
        [...data].sort((a, b) => {
          a = a[element.innerText].toLowerCase();
          b = b[element.innerText].toLowerCase();
          return a < b ? -1 : 1;
        })
      );
      changeSort("asc");
    }
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            {columns.map((item) => (
              <th
                className="table__column-title"
                key={item}
                onClick={handleSort}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {mutated.slice(page * step, page * step + step).map((row, i) => (
            <tr className="table__body-row" key={row.guid + i}>
              {columns.map((column, i) => (
                <td className="table__item" key={row.guid + i}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
