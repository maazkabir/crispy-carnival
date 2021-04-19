import React, { useEffect, useState } from "react";
import Card from "../atoms/Card";
import _ from "lodash";
import editImage from "../../images/pen-solid.svg";
import trashImage from "../../images/trash-solid.svg";
import { getDashboardAction, getTasksAction, updateTasksAction, deleteTasksAction } from "../../actions/DashboardAction";
import { toast } from "react-toastify";
import Spinner from "../../images/spinner.svg";

function DashboardLayout(props) {

    const [loading, setLoading] = useState(false);
    const [cardsData, setCardsData] = useState([]);
    const [tasksData, setTasksData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (typeof window == undefined) {
            return;
        }
        getCardsData();
        getTasksData();
    },[]);

    const getCardsData = () => {
        
          (async () => {
            setLoading(true);
            const response = await getDashboardAction({}, setLoading);
            if(response.hasOwnProperty("result") && response.result){
              setCardsData(response.data);
            }
          })();
    }

    const getTasksData = () => {
        
          (async () => {
            setLoading(true);
            const response = await getTasksAction({}, setLoading);
            if(response.hasOwnProperty("result") && response.result){
                setTasksData(response.data);
            }
          })();
    }

    const handleUpdate = (data) => {
          (async () => {
            setLoading(true);
            const response = await updateTasksAction(data, setLoading);
            if(response.hasOwnProperty("result") && response.result){
                setTasksData(response.data.tasks);
                getCardsData();
            }
          })();
    }

    const handleDelete = (data) => {
          (async () => {
            setLoading(true);
            const response = await deleteTasksAction(data, setLoading);
            if(response.hasOwnProperty("result") && response.result){
                setTasksData(response.data.tasks);
                getCardsData();
            }
          })();
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    return (
        <>
        {loading && (
            <>
            <div className="absolute w-full h-full bg-black" style={{opacity: 0.4}} />
                <div className="absolute inset-0 flex flex-col h-full justify-center items-center text-xl text-primary-color">
                    <span>
                    <img src={Spinner} />
                    </span>
                    Loading
                </div>
            </>
        )}
        <div className="w-full flex flex-col md:flex-row">
            <Card style={{height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-2 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                Tasks Completed
                </p>
                <p className="py-4 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                    {cardsData?.tasksCount?.true || 0} / {cardsData?.totalTasks}
                </p>
            </Card>
            <Card style={{height: "158px"}} className="m-auto self-center items-center content-center px-2 py-4">
                <p className="py-2 px-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left"}}>
                Latest Created Tasks
                </p>
                <ul className="px-6" style={{fontSize:"14px", textAlign:"left", color:"#8F9EA2"}}>
                {
                    cardsData.hasOwnProperty("latestTasks")&& cardsData.latestTasks.map((task, i) => (
                        <li style={{textDecorationLine: task.completed ? 'line-through' : 'initial' }} key={i}>{task.name}</li>
                    ))
                }
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
                <input onChange={(e) => handleSearch(e.target.value) }style={{backgroundColor:"#D9DFEB"}} className="appearance-none md:mx-4 border bg-light-gray rounded-lg py-2 px-8 text-dark-gray font-medium mb-4 md:mb-0" id="username" type="text" placeholder="Search by task name"/>
                <div className="w-full items-center justify-between">
                    <button onClick={()=> {}} className="bg-light-blue hover:bg-dark-blue text-white font-medium w-full py-2 px-4 rounded" type="button">
                    + New Task
                    </button>
                </div>
            </div>
        </div>

        <div className="flex items-center">
            <div className='overflow-x-auto w-full'>
                <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <tbody className="divide-y divide-gray-200">
                        {tasksData.filter(t => t.name.includes(searchQuery)).map((task, i) => (
                            <tr key={`task${i+3}`}>
                                <td style={{width: "10%"}} className="px-6 py-4 text-center">
                                    <input onChange={() => handleUpdate({ id: task.id, completed: !task.completed, name: task.name })} type="checkbox" checked={task.completed ? true : false} />
                                </td>
                                <td style={{width: "90%"}} className="px-6 py-4">
                                    <p style={{textDecorationLine: task.completed ? 'line-through' : 'initial' }} className={`text-light-blue ${task.completed && "text-title-color"} text-lg font-medium tracking-wide`}>
                                        {task.name}
                                    </p>
                                </td>
                                <td onClick={() => handleDelete({ id: task.id})} style={{width: "5%"}} className="px-6 py-4 text-center">
                                    <div style={{ width:"1rem" }}><img src={trashImage}/></div>
                                </td>
                                <td onClick={()=> toast.info("Coming Soon")}style={{width: "5%"}} className="px-6 py-4 text-center">
                                    <div style={{ width:"1rem" }}><img src={editImage}/></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default DashboardLayout;