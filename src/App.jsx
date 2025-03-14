import { useEffect, useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/card'

function App() {
  const [themeMode,setThemeMode] = useState("light"); 

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {

    const htmlClassList = document.querySelector('html').classList;
    htmlClassList.remove("light","dark");
    htmlClassList.add(themeMode); 

  },[themeMode]);

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
