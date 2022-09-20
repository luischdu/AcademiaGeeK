import React from 'react'
import { Search } from './Search'
import { FormTask } from './FormTaks'
import Task from './Task'
import TaskBar from './TaskBar'


const TaskScreen = () => {


    return (
        <div className="container text-center">
            <div className="notes__appbar">
                <Search />
                <TaskBar/>
            </div>

            <div className="row py-3">
                <div className="col-sm-5">
                    <div className="card">
                        <div className="card-body">
                            <FormTask />
                        </div>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="card">
                        <div className="card-body">
                            <Task />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TaskScreen
