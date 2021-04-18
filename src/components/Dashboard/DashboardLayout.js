import React from "react";
import Card from "../atoms/Card";
import _ from "lodash";
import editImage from "../../images/pen-solid.svg";
import trashImage from "../../images/trash-solid.svg";

function DashboardLayout(props) {
    return (
        <>
        <div className="w-full flex flex-col md:flex-row">
            <Card style={{height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-2 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                Tasks Completed
                </p>
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                    5/20
                </p>
            </Card>
            <Card style={{height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-2 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                Latest Created Tasks
                </p>
                <ul className="px-6" style={{fontSize:"14px", textAlign:"left", color:"#8F9EA2"}}>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
            </Card>
            <Card style={{height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                    GRAPH
                </p>
            </Card>
        </div>

        <div className="w-full flex flex-col md:flex-row mt-12 self-center md:items-end content-center justify-between">
           <div className="py-2 sm:py-4 px-6 self-center md:self-start text-title-color">
                <p style={{fontSize:"20px", textAlign:"left"}}>
                    Tasks
                </p>
           </div>
            <div className="mb-4 flex flex-col md:flex-row ">
                <input style={{backgroundColor:"#D9DFEB"}} className="appearance-none md:mx-4 border bg-light-gray rounded-lg w-full py-2 px-6 text-dark-gray font-medium mb-4 md:mb-0" id="username" type="text" placeholder="Id"/>
                <div className="w-full items-center justify-between">
                    <button onClick={()=> {}} className="bg-light-blue hover:bg-dark-blue text-white font-medium w-full py-2 rounded" type="button">
                    + New Task
                    </button>
                </div>
            </div>
        </div>

        <div className="flex items-center">
            <div className='overflow-x-auto w-full'>
                <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td style={{width: "10%"}} className="px-6 py-4 text-center">
                                <input type="checkbox"/>
                            </td>
                            <td style={{width: "90%"}} className="px-6 py-4">
                                <p className="text-light-blue text-lg font-medium tracking-wide">
                                    Task 1
                                </p>
                            </td>
                            <td style={{width: "5%"}} className="px-6 py-4 text-center">
                                <div style={{ width:"1rem" }}><img src={trashImage}/></div>
                            </td>
                            <td style={{width: "5%"}} className="px-6 py-4 text-center">
                                <div style={{ width:"1rem" }}><img src={editImage}/></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default DashboardLayout;