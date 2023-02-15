import React from 'react'

function signup() {
    async function sumbitData(e) {
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        if (name == '' || password == '' || email == '') {
                console.log('please fill the fiedls')
                let msgBox=document.getElementById('isError')
                msgBox.innerHTML="Please Enter Credentials"
                msgBox.style.color="black"
                document.getElementById('isError').classList.remove('hidden')
                
        } else {


            let response = await fetch('http://localhost:4000/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            }
            )
            const json = await response.json()
            console.log(json.msg)
        }

    }
    return (
        <div className='justify-center md:flex md:m-16 mt-16 m-4 '>
            <div className=' bg-white md:p-2 shadow-md w-full md:w-1/2 shadow-black-400'>
                {/* Warning msg if not credentials */}
                <div id='isError' className='text-center text-sm hidden bold'></div>
                <form className=" justify-center p-2 ">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block  font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-slate-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center text-left mb-6">
                        <div className="md:w-1/3">
                            <label className="block font-bold md:text-center mb-1 md:mb-0 pr-4 " htmlFor="email">
                                email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2  border-slate-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block  font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-slate-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                    
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={sumbitData}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default signup