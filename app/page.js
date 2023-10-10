"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [tasklist, settasklist] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    // console.log(task);
    // console.log(desc);
    settask("")
    setdesc("")
    settasklist([...tasklist, {task,desc}])
  }

  const deletehandler = (i) => {
    let copytask = [...tasklist]
    copytask.splice(i, 1)
    settasklist(copytask)
  }

  let renderTask = <h2>No task added</h2>

  if(tasklist.length > 0){
    renderTask = tasklist.map((t, i) => {
      return(
        <li key = {i} className='flex item-center justify-between m-6'>
          <div className='flex item-center justify-between mb-6 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.task}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button
          onClick={() => {
            deletehandler(i)
          }}
          className='bg-red-500 text-white rounded font-bold px-4 py-3'>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
        <h1 className='bg-black text-white p-6 text-5xl font-bold text-center'>To-Do List</h1>
        <form onSubmit = {submithandler}>
          <input type = "text"
          className='text-2xl border-zinc-600 border-2 m-6 px-4 py-2'
          placeholder='Enter your task'
          value={task}
          onChange={(e) => {
            // console.log(e.target.value);
            settask(e.target.value)
          }}>
          </input>

          <input type = "text"
          className='text-2xl border-zinc-600 border-2 m-6 px-4 py-2'
          placeholder='Enter the description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}>
          </input>
          <button className='bg-black text-white p-2 text-2xl rounded m-5'>Add Task</button>
        </form>
        <hr></hr>
        <div className='p-6 bg-slate-300'>
          <ul>
            {renderTask}
          </ul>
        </div>
    </>
  )
}

export default page