import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IRoute, ITableData } from "../models";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { setRoute } from "../reducers/routesReducer";
import { RootState } from "../store/createStore";

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
  const routes: IRoute[] = useAppSelector(
    (state: RootState) => state.routesReducer.routes
  );
  const tableData = routes?.map((route) => {
    return {
      ...route,
      firstPoint: route.points[0].join(", "),
      secondPoint: route.points[1].join(", "),
      thirdPoint: route.points[2].join(", "),
    };
  });
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ITableData[]) => {
      dispatch(setRoute(selectedRows[0]));
    },
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
