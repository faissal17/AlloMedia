import { Login } from "../components/Form/Login/Login.jsx"
import { Register } from "../components/Form/Register/Register.jsx"
import {  useEffect, useState } from 'react'
import { ButtonDefault } from "../components/common/Buttons"
import { Shadow } from "../components/shadow"
import {Backgrounds} from '../components/Backgrounds.jsx'
import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"
import videoBack from '../assets/background.mp4'
const Inscreption = ({socket}) => {
  const navigate=useNavigate()
    const [login, setLogin] = useState(true)
    const [signup,setSignup] = useState(false)
    const [user, setUser] = useState(null);
    const handleLogin=()=>{
    setLogin(true)
    setSignup(false)
    }
    const handleSignup=()=>{
    setSignup(true)
    setLogin(false)
    }

    const getUserAuth = () => {
      if(localStorage.getItem('token').length>0){
        navigate('/')
        /*console.log('Fetching user data...');
        axios
          .get(`http://localhost:3000/api/v1/auth/getUserAuth/${localStorage.getItem('token')}`)
          .then(response => {
            // Check if the response contains data
            if (response.data) {
              // Access the data here and set it in the state
              setUser(response.data);
            } else {
              // Handle the case where the response does not contain data
              console.log('Response does not contain data');
            }
          })
          .catch(error => {
            console.log('Error:', error);
          });*/
      }
    }
    //getUserAuth()
    /*useEffect(() => {
      getUserAuth(); // Fetch user data when the component mounts
    }, []);*/
    
  return (
    <>
    <Backgrounds src={videoBack} className={'w-full h-screen'} />
    <div className="modal-inscreption   px-14">
        <h3 className=" w-full text-white text-center inline-block text-5xl">AlloMedia</h3>
        <div className="flex gap-[3%] my-3 p-1 w-[65%] mx-auto bg-gray-900 rounded-md">
          <ButtonDefault
            onClick={handleLogin}
            className={`${login ? '  opacity-100 border border-white' : 'opacity-50'}`}>
            login
          </ButtonDefault>
          <ButtonDefault
            onClick={handleSignup}
            className={`${signup ? 'opacity-100 border border-white' : 'opacity-50'}`}>
            signup
          </ButtonDefault>
        </div>
        {
            login ? <Login /> : <Register socket={socket} />
        }
    </div>
    <Shadow className={`opacity-80`}/>
    </>
  )
}

export default Inscreption