import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";

const Table = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  const newData = useMemo(() => data, []);
  console.log(data);
  const tableInstance = useTable({
    columns,
    data: newData
  });

  const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

{
  /* <p>{data[1].name}</p> */
}