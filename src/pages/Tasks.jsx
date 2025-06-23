import TaskManager from '../components/TaskManager'
import Card from '../components/Card'

const Tasks = () => {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-6">Task Manager</h1>
      <TaskManager />
    </Card>
  )
}

export default Tasks