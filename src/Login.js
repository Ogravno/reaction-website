import './Login.css'

export default function Login() {
    return (
        <>
            <form id='loginForm' action=''>
                <label>Brukernavn:</label>
                <input type="text"/>
                <label>Passord:</label>
                <input type="password"/>
                <button type='submit'>Log inn</button>
            </form>
        </>
    )
}