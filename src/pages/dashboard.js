import React from "react";
import Layout from "../components/layout";
import LoginModal from "../components/LoginModal";

function Dashboard() {

  return (
    <Layout noHeader>
      <LoginModal/>
    </Layout>
  );
}

export default Dashboard;
