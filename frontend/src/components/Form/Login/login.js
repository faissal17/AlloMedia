//import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { validateCredentials  as validationLogin} from '../../../helpers/validations/login.credentials.js'
// import Cookies from 'js-cookie'
// import toast from 'react-hot-toast'
import {LoginAPI} from '../../../service/query/auth.js'
import useMutateHook from '../../../hooks/useMutations.jsx'
export const LoginService = () => {
    // const navigate=useNavigate()
    // const queryClient = useQueryClient()
    const [submet, setSubmet] = useState(false);
    const [login,setLogin]=useState({email:'',password:'',})
    const [loginStatus, setLoginStatus] = useState({
        email: {error: false,message: ''},
        password: {error: false,message: ''},
    });
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
        const isValid =validationLogin(login.email, login.password);
        setLoginStatus({
            ...loginStatus,
            email: { error: isValid[0].email.error, message: isValid[0].email.message },
            password: { error: isValid[0].password.error, message: isValid[0].password.message },
        });
        console.log('fucking loginStatus')
        console.log(loginStatus)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmet(true)
        const isValid =validationLogin(login.email, login.password);
        setLoginStatus({
            ...loginStatus,
            email: { error: isValid[0].email.error, message: isValid[0].email.message },
            password: { error: isValid[0].password.error, message: isValid[0].password.message },
        });
        if (!isValid[0].email.error || !isValid[0].password.error ) {
            console.log('fucking success')
            loginUserMutation.mutate(login);
           }
    }
    // const loginUserMutation = useMutation({
    //   mutationFn: loginUser,
    //   onSuccess: data => {
    //     queryClient.setQueryData(["users", data], data)
    //     queryClient.invalidateQueries(["users"], { exact: true })
    //     localStorage.setItem('token',data.data.token)
    //     Cookies.set('token', data.data.token, { httpOnly: true });
    //     navigate('/')
    //   },
    //   onError: (error)=>{
    //     toast.error(error.response.data.message);
    //   }
    // })
    const loginUserMutation=useMutateHook(LoginAPI())
  return {
    loginUserMutation,
    submet,
    login,
    loginStatus,
    handleLoginChange,
    handleSubmit
  }
}

