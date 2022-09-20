import React from 'react'

const TaskBar = () => {
    return (
        <div className="notes__appbar d-flex">
            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
            
            />
            <div>
                <button
                    className="btn"
                 
                >
                    Picture
                </button>

                <button className="btn"
                >
                    Save
                </button>

                <button type="button"
                    className="btn btn-danger"
                >
                    Eliminar
                    </button>
            </div>
        </div>


    )
}

export default TaskBar
