import React, { useEffect, useState } from "react";
import Card from "./atoms/Card";
import _ from "lodash";

function NewTask(props) {
    const [description, setDescription] = useState(props.isEditTask ? props.isEditTask.name : "");
    
    return (
        <>
        <Card style={{width: props.width, height: props.height ? props.height : "198px", zIndex: 105}} className="md:inset-0 m-auto absolute self-center items-center content-center px-2 py-4">
            <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                {props.noTask ? "You have no task." : "+ " + props.isEditTask ? "Update Task" : "New Task"}
            </p>
            {!props.noTask && 
                <div className="mb-3" >
                    <input value={description} onChange={(e)=> setDescription(e.target.value)}  style={{paddingRight: "25%"}} className="shadow appearance-none border text-sm bg-light-gray rounded-lg flex py-2 px-3 mx-4 text-dark-gray font-medium" id="username" type="text" placeholder="Task Name"/>
                </div>
            }
            <div style={{width: "90%"}} className="items-center justify-between">
                <button onClick={()=> {props.onClick(description)}} className="bg-light-blue hover:bg-dark-blue text-white font-medium w-full py-2 pl-14 mx-4 rounded text-sm" type="button">
                + {props.isEditTask ? "Update Task" : "New Task" }
                </button>
            </div>
        </Card>
        </>
    );
}

export default NewTask;