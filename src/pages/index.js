import React, { useState } from "react";
import Layout from "../components/layout";
import LoginModal from "../components/LoginModal";

function IndexPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Layout showOverlay={showOverlay} noHeader>
      <LoginModal setShowOverlay={(e) => setShowOverlay(e)}/>
    </Layout>
  );
}

export default IndexPage;
