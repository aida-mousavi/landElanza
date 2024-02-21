import React, {useState} from 'react';
import axios from "axios";
import Layout from "../Layout.jsx";

function LogIn() {

    const [user, setUser] = useState()
    const [password, setPassword] = useState()


    async function handlerSubmit() {
        const data = await axios.get('http://localhost:8000/users').then((res) => res).then(result => result.data)
        console.log(data)


        data.map((items) => {
            if (items.name === user && items.username === password) {
                localStorage.setItem("token", crypto.randomUUID())
            }
        })

        console.log(resultLogIn)
    }

    return (
        <Layout>
            <div className='border-[1px] border-gray-300 rounded-lg w-[300px] p-7 flex flex-wrap justify-center '>

                <label htmlFor='userName'>Username</label>
                <input id='userName ' className='w-[80%] px-2 border-[1px] border-gray-300 rounded-lg outline-none'
                       value={user} onChange={(e) => {
                    setUser(e.target.value)
                }} type='text'/>

                <label htmlFor='Password' className='mt-3'>Password</label>
                <input id='Password' className='w-[80%] px-2 border-[1px] border-gray-300 rounded-lg outline-none'
                       value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} type='text'/>

                <button onClick={handlerSubmit} className='bg-blue-600 rounded-lg text-white px-8 py-2 my-4'>Submit
                </button>


            </div>

        </Layout>

    )
}
export default LogIn;


