import { useNavigate } from 'react-router-dom'
import './User.css'

const UserLogin = () => {

    localStorage.clear()

    const navigate = useNavigate();
    const handleSubmit = (event) => {

        event.preventDefault()

        let user = document.getElementById('username').value
        let pass = document.getElementById('password').value

        if (user == 'admin' && pass == 'Revz@2005') {
            sessionStorage.setItem("username",{ state: { user } })
            navigate('/upload',{ state: { user } })
            alert("Welcome to the admin page")

        }
        else {
            sessionStorage.setItem("username", user)
            alert("welcome to the Online shopping paltform")
            navigate('/',{ state: { user } })
        }

    }

    return (
        <div id="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="user">
                    <label>User Name</label>
                    <input type="text" id="username" />
                </div>

                <div className="pass">
                    <label>Password</label>
                    <input type="password" id="password" />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserLogin