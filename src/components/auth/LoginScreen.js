import React, {Fragment} from 'react'

const LoginScreen = () => {
    return (
        <Fragment>
            <div>
                <h3>Login</h3>
                <form>
                    <input 
                        type="text"
                        placeholder="email"
                        name="email"
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                    <button
                        type="submit"
                    >
                        Login
                    </button>
                    <hr/>
                    google
                </form>
            </div>
        </Fragment>
    )
}

export default LoginScreen