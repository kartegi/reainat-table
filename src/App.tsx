import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Table from "./components/table/Table";

import "./app.sass";
import TablePagination from "./components/tablePagination/TablePagination";
import { dataTypedSelector } from "./hooks/dataTypedSelector";

const App: React.FC = () => {
  const { data, search } = dataTypedSelector((state) => state.data);
  const [mutated, setMutated] = useState<any[]>(data);

  useEffect(() => {
    const columns = data[0] && Object.keys(data[0]);

    setMutated(
      data.filter((row) =>
        columns.some(
          (column: number) =>
            row[column].toString().toLowerCase().indexOf(search.toLowerCase()) >
            -1
        )
      )
    );
  }, [search, data]);

  return (
    <div className="app">
      <Header />
      <Table mutated={mutated} />
      <TablePagination mutated={mutated} />
    </div>
  );
};

export default App;
