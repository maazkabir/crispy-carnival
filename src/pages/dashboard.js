import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import NewTask from "../components/NewTask";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

function Dashboard() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [tasks, setTasks] = useState([]);
    
    return (
        <Layout showOverlay={showOverlay}>
        {tasks.length <= 0 ?
            <DashboardLayout />
            /* <NewTask width={"296px"} onClick={()=>{setShowOverlay(!showOverlay)}}/> */
            :
            <NewTask noTask height={"158px"} onClick={()=>{setShowOverlay(!showOverlay)}}/>
        }
        </Layout>
    );
}

export default Dashboard;
