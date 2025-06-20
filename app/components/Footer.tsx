'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { quickLinks } from '@/lib/constant'
import Image from 'next/image'
import SignUp from './SignUp'


const Footer = () => {
    const router = useRouter()
    // handle navigation
    const handleNavigation = (path: string) => {

        router.push(path)

    }
    return (
      <footer className='mt-8 font-roboto lg:mt-0  text-[var(--primary-white-hex)]'>

      <section className="bg-cover pt-8 bg-center bg-[url('/footer-bg.webp')] ">
      
                      <main className=" w-full  ">
                        
                     
                      <main className=" grid  grid-cols-4 lg:flex lg:flex-col justify-items-center lg:justify-start lg:grid-cols-1 gap-4 lg:gap-8  w-11/12 mx-auto pt-14 pb-10">
                {/* Column 1: Description and Social Icons */}
                <main className="flex flex-col   ">
                  <Image
                    width={100}
                    height={100}
                    className="cursor-pointer  w-[28rem] lg:w-[20rem]"
                    src="/icons/logo.svg"
                    alt="footer logo"
                    priority
                    onClick={() => {
                      handleNavigation('/');
                      window.scrollTo(0, 0);
                    }}
                  />
                  
                  <p className=" leading-[1.4rem] mt-[2rem] text-[var(--medium-grey-hex)] text-sm">
                  Cognix Education & Training Computer Software empowers individuals with cutting-edge IT skills and practical expertise for a successful tech career.
                  </p>
                </main>
      
                {/* Column 2: Courses */}
                <ul className="flex flex-col font-raleway gap-2">
                  <li>
                    <h1 className="text-xl  font-bold">Quick links:</h1>
                  </li>
                  <li className='flex flex-col gap-3 pt-3 font-medium'>
                 {quickLinks.map((item)=>(
                  <a href={item.link} key={item.id} className={`${item.id!==4 && item.id!==5?'block':'hidden'}`}>{item.title}</a>
                 ))}
                 </li>
                </ul>
      
                
      
                {/* Column 4: Gallery */}
                <ul className=" font-raleway flex flex-col font-raleway    gap-3">
                  <li>
                  <h1 className="text-xl  font-bold pb-3">Contact us</h1>
                  </li>
                  <li className='flex gap-2'> <Image
                src={
            
                '/icons/call.svg'
                }
                alt={'call'}
                className="w-[1rem]"
                width={200}
                height={200}
                priority
              /><a href='tel:971552373525' >+971 55 237 3525</a></li>
                  <li className='flex gap-2'> <Image
                src={
            
                '/icons/mail.svg'
                }
                alt={'mail'}
                className="w-[1rem]"
                width={200}
                height={200}
                priority
              /><a href='mailto:congnixeducation@gmail.com' >congnixeducation@gmail.com</a></li>
                  <li className='flex gap-2'> <Image
                src={
            
                '/icons/location.svg'
                }
                alt={'location'}
                className="w-[1rem]"
                width={200}
                height={200}
                priority
              />Office - 175  The Binary By Omniyat Business Bay Dubai United Arab Emirates</li>
                </ul>
                <SignUp/>
              </main>
                         
                      </main>
      
                      <div className=" h-[0.05rem] w-full bg-[var(--light-grey-hex)] "></div>
                      <main className='w-11/12 mx-auto flex  justify-center py-4 lg:py-2 items-center '>
                          <label className="py-4 text-sm text-center text-[var(--medium-grey-hex)]">2025 CETC. All rights reserved
                            </label>
      
                      </main>
                  </section>
      
              </footer>
    )
}

export default React.memo(Footer)