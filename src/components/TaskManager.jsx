import { useState } from 'react';
import Button from './Button';
import Card from './Card';

// Custom hook for localStorage persistence
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  return [value, setStoredValue];
};

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false
        }
      ]);
      setNewTask('');
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      
      {/* Task input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All ({tasks.length})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active ({tasks.filter(t => !t.completed).length})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed ({tasks.filter(t => t.completed).length})
        </Button>
      </div>

      {/* Task list */}
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          {filter === 'all'
            ? 'No tasks yet. Add one above!'
            : filter === 'active'
            ? 'No active tasks'
            : 'No completed tasks'}
        </p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-4 p-3 border rounded hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
              />
              <span
                className={`flex-grow ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.text}
              </span>
              <Button
                variant="danger"
                onClick={() => deleteTask(task.id)}
                className="ml-auto"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default TaskManager;