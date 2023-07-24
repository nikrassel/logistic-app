import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ITableData } from "../models";

const columns: ColumnsType<ITableData> = [
  {
    title: "Маршрут",
    dataIndex: "name",
  },
  {
    title: "Точка 1 (lat, lng)",
    dataIndex: "pointOne",
  },
  {
    title: "Точка 2 (lat, lng)",
    dataIndex: "pointTwo",
  },
  {
    title: "Точка 3 (lat, lng)",
    dataIndex: "pointThree",
  },
];
const data: ITableData[] = [
  {
    key: "1",
    name: "Маршрут №1",
    pointOne: "59.84660399, 30.29496392",
    pointTwo: "59.82934196, 30.42423701",
    pointThree: "59.83567701, 30.38064206",
  },
  {
    key: "2",
    name: "Маршрут №2",
    pointOne: "59.82934196, 30.42423701",
    pointTwo: "59.82761295, 30.41705607",
    pointThree: "59.84660399, 30.29496392",
  },
  {
    key: "3",
    name: "Маршрут №3",
    pointOne: "59.83567701, 30.38064206",
    pointTwo: "59.84660399, 30.29496392",
    pointThree: "59.82761295, 30.41705607",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: ITableData[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: ITableData) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};
const RouteTable = () => {
  return (
    <div>
      <Table
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};
export default RouteTable;
