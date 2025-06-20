'use client'
import {  FORM_TYPES, SEND_MAIL } from '@/lib/constant';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function SignUp() {

  const [sending,isSending]=useState(false)
   //   handle onsubmit form
   const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSending(true)
    const target = e.target as HTMLFormElement;
    

        try {
            const templateParams = {
                from_email: target.email.value,
                type:FORM_TYPES.SIGNUP
               
            }
            await fetch(SEND_MAIL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(templateParams),
            });
            isSending(false)
            toast.custom((t: { visible: boolean }) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">

                            </div>
                            <div className="ml-3 flex-1 text-gray-900">
                                <main className='flex justify-between items-center'>
                                    <h1 className="text-base font-bold  text-center mb-3">
                                    📣 Thank you for Subscribing!
                                    </h1>
                                  
                                </main>
                            </div>
                        </div>
                    </div>

                </div>
            ))

        } catch (error) {
            isSending(false)
            toast.error(`${error}`)

        }
    

}

  return (
    <section className='w-full'>
      <main className="font-poppins">
        <main className='w-full flex flex-col gap-6 lg:gap-4 justify-start items-start'>
            <h1 className='text-2xl lg:text-xl font-normal '>Newsletter</h1>
  
    <form className='flex flex-col justify-start gap-3  items-start w-full  ' onSubmit={handleOnSubmit} autoComplete="off">
    <input placeholder={`Enter your email:`} id='signup-btn' className=' input--secondary rounded-none  w-full lg:w-1/2' type='email' name='email' required title='Please, enter your corporate email' />
    <button className="btn--secondary btn px-8 py-3 mt-3 font-bold" type='submit' ><h1>{sending?'Submitting':'Submit'}</h1></button>
      </form>
    
        </main>
       
        <Toaster reverseOrder={false} />
        </main>
    </section>
  )
}

export default React.memo(SignUp)