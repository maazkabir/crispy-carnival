import React from "react";
import Card from "../atoms/Card";
import _ from "lodash";

function DashboardLayout(props) {
    return (
        <>
        <div className="flex flex-col md:flex-row">
            <Card style={{width: "304px", height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                Tasks Completed
                </p>
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                    5/20
                </p>
            </Card>
            <Card style={{width: "304px", height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                Tasks Completed
                </p>
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                    5/20
                </p>
            </Card>
            <Card style={{width: "304px", height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                Tasks Completed
                </p>
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                    5/20
                </p>
            </Card>
        </div>
        </>
    );
}

export default DashboardLayout;