import React from "react";
import User from '../../components/User'

const authIndexPage = () => {
  return (
    <div>
      <h1>Auth Main Page</h1>
      <User name="Miłosz" age={29} />
    </div>
  );
};

export default authIndexPage;
