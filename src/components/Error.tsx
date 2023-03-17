import React from "react";
import { useRouteError } from "react-router-dom";
type tErrot = {
  message: string;
  statusText: string;
  status: number;
};
const ErrorLoading = () => {
  const error: tErrot | any = useRouteError();
  return (
    <div>
      An error occurred, try later
      <pre>{error.message}</pre>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
};

export default ErrorLoading;
