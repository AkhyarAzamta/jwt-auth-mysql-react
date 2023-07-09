import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4500/login', {
                email: email,
                password: password
            })
            navigate("/dashboard")
            // console.log('halo gaes')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }
    return (
        <section className='hero has-background-grey-light is-fullheight is-fullwidth'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-4-desktop'>
                            <form onSubmit={Auth} className='box'>
                                <p className='has-text-centered'>{msg}</p>
                                <div className='field mt-5'>
                                    <label className='label'>Email</label>
                                    <div className='controls'>
                                        <input required onInvalid={F => F.target.setCustomValidity('Masukan Email yang Valid: contoh@gmail.com')}
                                            onInput={F => F.target.setCustomValidity('')} type="email" className='input' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label' >Password</label>
                                    <div className='controls'>
                                        <input required onInvalid={F => F.target.setCustomValidity('Masukan Password')}
                                            onInput={F => F.target.setCustomValidity('')} type="password" className='input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <button className='button is-success is-fullwidth'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login