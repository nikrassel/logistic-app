import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ITableData } from "../models";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { getAllRoutes, choseTheRoute } from "../store/routesReducer";

const columns: ColumnsType<ITableData> = [
  {
    title: "Маршрут",
    dataIndex: "name",
  },
  {
    title: "Точка 1 (lat, lng)",
    dataIndex: "firstPoint",
  },
  {
    title: "Точка 2 (lat, lng)",
    dataIndex: "secondPoint",
  },
  {
    title: "Точка 3 (lat, lng)",
    dataIndex: "thirdPoint",
  },
];

const RouteTable = () => {
  const dispatch = useAppDispatch();
  const routes = useAppSelector(getAllRoutes());
  const tableData = routes.map((route) => {
    return {
      ...route,
      firstPoint: route.pointOne.join(", "),
      secondPoint: route.pointTwo.join(", "),
      thirdPoint: route.pointThree.join(", "),
    };
  });
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ITableData[]) => {
      dispatch(choseTheRoute(selectedRows[0].key));
    },
    getCheckboxProps: (record: ITableData) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };
  return (
    <div>
      <Table
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
    </div>
  );
};
export default RouteTable;
