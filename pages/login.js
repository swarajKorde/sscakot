import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'


function login() {
   
    const router = useRouter()
    async function sendInfo(e) {
        e.preventDefault()
        let email = await document.getElementById("email").value;
        let password = await document.getElementById("pass").value;
        const data = { email, password }
        // console.log(data)
        let response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        // .then(res => res.json())
        // .then(result =>  console.log('success',result)) 
        // .catch(err=>console.log('err'))

        const isUser = await response.json()
        console.log(isUser)
        if (isUser.success) {
            localStorage.setItem('auth',isUser.auth)
            router.push('/')

        } else {
            console.log('something is wrong in if')
        }
        // const dtp=await response.json();  

        // //  ^ this can be used instead of the .then .then 


    }
    return (
        <div className=' md:flex mt-16'>
            <div className='ht-3 m-auto text-center p-4 md:w-1/3  bg-white shadow-sm shadow-black shadow-slate-500 mb-6 justify-center'>
                <div id='isError '>This is login page</div>
                {/* form */}
                <form action="http:localhost:4000/auth/login" method="post" className='md:text-xl   '>
                    <div className="email m-4 flex flex-col md:justify-between">
                        <label className='' htmlFor="email">E-mail</label>
                        <input className='h-10 border-2 p-2 text-center rounded-lg  text-xl border-black' type="email" name="eamil" id="email" />

                    </div>

                    <div className="pass flex flex-col m-4 justify-between">
                        <label htmlFor="password">Password</label>
                        <input className='h-10 border-2 rounded-lg p-2  text-xl border-black' type="password" name="password" id="pass" />

                    </div>
                    {/* buttons */}
                    <span className=' m-3 '>
                        <button className='border-white pl-2 pr-2 text-xl shadow shadow-slate-300' onClick={sendInfo} type="submit" >Submit</button>
                    </span>
                </form>

                <div className='m-5'>
                    Dont have account <Link href="/signup"> Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default login