import ApiDataDisplay from '../components/ApiDataDisplay'
import Card from '../components/Card'

const ApiData = () => {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-6">API Data</h1>
      <ApiDataDisplay />
    </Card>
  )
}

export default ApiData