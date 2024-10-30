import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-[80%] mx-auto flex flex-col items-center'>
    <AddTodo />
    <Todo />
   </div>
  )
}

export default App
