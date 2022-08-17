import Form from './components/Form';
import React, { useState } from 'react';

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)


  const changeTheme = (event) => {
    if(darkTheme) {
      document.body.classList.remove('dark')
      setDarkTheme(false)
    }else{
      document.body.classList.add('dark')
      setDarkTheme(true)
    }
  }

  return (
    <div className="bg-dark-brown dark:bg-dark-blue w-screen h-screen flex duration-1000 transition">
      <div className='bg-sun dark:bg-moon md:hidden w-[120px] aspect-square rounded-full absolute top-[110px] left-[251px] animate-moonAnimation cursor-pointer duration-1000 transition' onClick={changeTheme}></div>
      <Form />
      <div className="bg-sunset dark:bg-midnight flex-half bg-cover hidden md:block relative duration-1000 transition-all">
        <div className='bg-sun dark:bg-moon w-[120px] aspect-square rounded-full absolute top-[245px] left-[330px] animate-moonAnimation cursor-pointer duration-1000 transition' onClick={changeTheme}></div>
      </div>
    </div>
  )
}

export default App
