import React from 'react'


export const FormTask = () => {


    return (
        <div className="container text-center ">
            <div className="">

                <div className="card-body ">

                    <h1 className="h4">Add Task</h1>

                    <form id="task-form">
                        <div className="form-group py-3">
                            <input
                                type="text" id="task-title"
                                className="form-control"
                                placeholder="Task Title"
                                name="title"
                               />
                        </div>

                        <div className="form-group">
                            <textarea
                                id="task-description"
                                rows="3"
                                className="form-control"
                                placeholder="Task Description"
                                name="body"
                            >
                            </textarea>
                        </div>

                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                       

                        />
                        <div className="d-grid gap-2 col-6 mx-auto py-3">
                            <button className="btn btn-primary" type="button">
                                Cargar imagen
                            </button>
                        </div>

                        <button className="btn btn-primary" id="btn-task-form" >
                            Save
                       </button>

                    </form>
                </div>
            </div>

        </div>
    )
}
