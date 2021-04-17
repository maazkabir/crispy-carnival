import React from "react";
import Layout from "../components/layout";
import LoginModal from "../components/LoginModal";

function IndexPage() {

  return (
    <Layout noHeader>
      <LoginModal/>
    </Layout>
  );
}

export default IndexPage;
