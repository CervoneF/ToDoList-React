
import { useState } from 'react';
import '../TaskForm/TaskForm.css';


export const TaskForm = ({ onAddTask }) => {

    const [taskName, setTaskName] = useState('');
    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim()) return;
        onAddTask(taskName);
        setTaskName('');
    };


    return (
    <>
        <div className='container mb-3 d-flex justify-content-center'>

            <form
                onSubmit={handleSubmit}
                className="text-center"
            >
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input
                        type="text"
                        placeholder="Nombre de la tarea"
                        value={taskName}
                        onChange={handleInputChange}
                        className='form-control input-css'
                    />
                </div>

                <button type="submit" className="btn btn-dark mb-5 btn-sm">Agregar</button>
            </form>
        </div>
    </>
    );
};
