import React, { useState, useEffect } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import { TaskForm } from './components/TaskForm/TaskForm';
import Swal from 'sweetalert2'; // SweetAlert2 para mensajes de alerta
import withReactContent from 'sweetalert2-react-content'; // Integrar SweetAlert2 con React

// Crear una instancia de SweetAlert2 con React
const mySwal = withReactContent(Swal);


export const App = () => {
  // Obtener tareas almacenadas en localStorage o usar un array vacío si no hay ninguna
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  // Definir el estado de las tareas usando el hook useState
  const [tasks, setTasks] = useState(storedTasks);

  const handleTaskCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
      )
    );
  };



  const handleTaskDeleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  };



  const confirmDelete = (taskId) => {
    mySwal.fire({
      title: '¿Estás seguro de eliminar la tarea?',
      text: 'No podrás revertirlo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        handleTaskDeleted(taskId);
        Swal.fire('Eliminada!', 'La tarea ha sido eliminada con éxito.', 'success');
      }
    });
  };


  const handleAddTask = (taskName) => {

    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  // Efecto secundario que se ejecuta cuando el estado de las tareas cambia
  useEffect(() => {
    // Guardar tareas en localStorage cuando cambian
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('La lista de tareas se ha actualizado:', tasks);
  }, [tasks]);


  return (
    <div>
      <i className="fa-solid fa-list-check fa-spin" style={{ fontSize: "4em", color: "#36db33", margin: "20px 40px" }}></i>
      <h1 className='text-center'>Aplicación de Tareas</h1>

      <TaskForm onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onTaskCompleted={handleTaskCompleted}
        onTaskDeleted={confirmDelete}
      />
    </div>
  );
};

