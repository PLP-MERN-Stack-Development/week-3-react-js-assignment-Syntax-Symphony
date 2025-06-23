import { useState, useEffect } from 'react'
import Button from './Button'

const ApiDataDisplay = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setData(data.slice(0, 5)) // Show only 5 items for simplicity
        setLoading(false)
      })
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Sample API Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {data.map(item => (
            <li key={item.id} className="border-b pb-2">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ApiDataDisplay