import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">React TSX Template</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <button 
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-700">
            Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500">
          TypeScript + Tailwind CSS via CDN
        </p>
      </div>
    </>
  )
}

export default App