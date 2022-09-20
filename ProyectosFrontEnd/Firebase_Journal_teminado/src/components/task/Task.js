import React from 'react'


const Task = () => {
    const task =[1,2,3]
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {

                task.map(task => (

                <div className="col" key={task}>


                <div className="card">
                    <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1622498594/e47pyosqjuxaj8lgx3lk.gif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Task</h5>
                        <p className="card-text">Description</p>
                    </div>
                </div>
            </div>
                    
                ))

            }
            

        </div>
    )
}

export default Task
