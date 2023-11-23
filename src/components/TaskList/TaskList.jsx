
import { TaskItem } from '../TaskItem/TaskItem';
import '../TaskItem/TaskItem.css';



export const TaskList = ({ tasks, onTaskCompleted, onTaskDeleted }) => {
  return (

    <div className='container'>
      <div className='row'>
        <div className='col'>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th className="text-center" style={{ backgroundColor: 'black' }}>NOMBRE</th>
                <th className="text-center" style={{ backgroundColor: 'black' }}>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  
                  task={task}
                  onTaskCompleted={onTaskCompleted}
                  onTaskDeleted={onTaskDeleted}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
