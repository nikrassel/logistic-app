import { Alert, Space } from "antd";
import React from "react";
import { useAppSelector } from "../hooks/storeHooks";
import { RootState } from "../store/createStore";

const ErrorMessage = () => {
  const routeError = useAppSelector(
    (state: RootState) => state.routesReducer.error
  );
  if (routeError) {
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Alert
          message="Возникла ошибка"
          description="Что-то пошло не так, попробуйте перезапустить страницу."
          type="error"
          closable
        />
      </Space>
    );
  }
  return null;
};

export default ErrorMessage;
