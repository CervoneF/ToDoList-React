import { useState, useEffect } from 'react';
// Librería Swal para mostrar alertas interactivas
import Swal from 'sweetalert2';


export const TaskItem = ({ task, onTaskCompleted, onTaskDeleted }) => {

  const [completed, setCompleted] = useState(false);


  const handleComplete = () => {

    setCompleted(!completed);
    onTaskCompleted(task.id);


    const title = completed ? 'sin completar' : 'completada';


    Swal.fire({
      icon: 'success',
      title: `Tarea ${title}`,
      text: `La tarea "${task.name}" ha sido marcada como ${title}.`,
    });
  };


  const handleDelete = () => {

    onTaskDeleted(task.id);
  };


  useEffect(() => {

    console.log(`Se cambió el estado de la tarea ${task.name} a ${completed}`);
  }, [completed]);


  return (
    
    <tr style={{
      textDecoration: completed ? 'line-through' : 'none',
      fontWeight: completed ? 'normal' : 'bold'
    }}>
      <td className="text-center">{task.name}</td>

      <td className="text-center" >

        <button onClick={handleComplete}>
          {completed ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square-check"></i>}
        </button>

        <button
          onClick={handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
};

