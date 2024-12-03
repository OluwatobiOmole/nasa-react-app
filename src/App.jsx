import { useState } from "react"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import SideBar from "./Components/SideBar"



function App() {

  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  } 

  return (
    <>
      <Main />
      {showModal && (
        <SideBar /> )}
      <Footer handleToggleModal = {handleToggleModal}/>
    </>
  )
}

export default App
