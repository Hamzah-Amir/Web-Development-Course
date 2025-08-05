import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {method:"POST",
      headers:{"Content-Type":"application/json"},
       body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
  }

  return (
    <>
          {isSubmitting && <div>Loading....</div>}
      <div className="container flex flex-col w-[100vw] h-[100vh] ">

        <form action="" className='flex flex-col justify-center align-middle gap-2.5 mx-auto my-auto' onSubmit={handleSubmit(onSubmit)}>


          <input className='border-[1px] rounded-[6px] bg-gray-300' placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}

          <input className='border-[1px] rounded-[6px] bg-gray-300' placeholder='password' {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 8, message: "Min length is 8" } })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}

          <input disabled={isSubmitting} className='bg-gray-300 rounded-[6px] mx-auto w-[70px] border-[1px] cursor-pointer' type="submit" value="Submit" />
        </form>
      </div>

    </>
  )
}

export default App
