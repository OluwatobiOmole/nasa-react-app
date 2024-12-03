import { useState,useEffect } from "react"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import SideBar from "./Components/SideBar"



function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  } 

  useEffect(() => {
    async function fetchAPIDATA() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        console.log("DATA\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchAPIDATA();
  }, [])

  return (
    <>
      {data ? ( <Main data={data} />): (
        <div className ="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && (
        <SideBar data = {data} handleToggleModal = {handleToggleModal} /> )}
      {data && 
        (<Footer data = {data} handleToggleModal = {handleToggleModal} /> )}
    </>
  )
}

export default App
