import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

function Dashboard() {
    const [showOverlay, setShowOverlay] = useState(false);
    
    return (
        <Layout showOverlay={showOverlay}>
            <DashboardLayout setShowOverlay={(e) => setShowOverlay(e)}/>
        </Layout>
    );
}

export default Dashboard;
