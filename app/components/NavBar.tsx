'use client'
import React, { useEffect, useState } from 'react'
import '/app/styles/navbar.css'
import {  navBarItems, pathName } from '@/lib/constant'
import { useRouter, usePathname } from 'next/navigation'
import { NavbarDropDownDataItem } from '@/lib/type'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'



const NavBar = () => {
   const {  Home } = pathName
   const [isOpen, setOpen] = useState(false)
   const [mobileNavList, setMobileNavList] = useState<NavbarDropDownDataItem[]>(navBarItems)
   const [isScrolled, setScrolled] = useState(false)
   const router = useRouter()
   const params = usePathname()

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true)
         } else {
            setScrolled(false)
         }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

  
   const handleSelectedNavItem = (id: number) => {
      const updatedNavList = mobileNavList.map((item: NavbarDropDownDataItem) => ({
         ...item,
         isSelectedNav: item.id === id ? !item.isSelectedNav : false
      }))

      setMobileNavList(updatedNavList)
   }

   const handleNavigation = (navPath: string) => {
      setOpen(!isOpen)
      
         router.push(navPath)
    
      window.scrollTo(0, 0)
   }

   return (
      <nav className={`fixed z-10 flex justify-center w-full `}>
         <main className='w-full'>
         <div className={`navbar__container ${isScrolled ? 'bg-[var(--primary-pink-hex)]  shadow-md' : ''}`} id="nav">

               <main className='flex lg:flex-row lg:justify-between w-3/4 lg:w-full lg:items-center'>
               
               <div className={` w-[10rem] lg:w-[8rem]  flex justify-start items-start`}>
                     <Image width={100} height={100} className={`w-[10rem] lg:w-[8rem] cursor-pointer ${isScrolled ? ' w-[10rem] ' : ''}`} src={`/icons/logo.svg`} alt='logo' priority onClick={() => { router.push(Home); window.scrollTo(0, 0); }}/>
                    
                  </div>
                  <div className={`hidden lg:flex justify-start items-center`}>
                     <Image width={100} height={100} className={`w-[2rem] h-[2rem]  cursor-pointer`} src={'icons/menu-icon.svg'} alt='menu' priority onClick={() => setOpen(!isOpen)}/>
                    
                  </div>
                  <main className='flex w-full items-center justify-end gap-3 lg:hidden'>
                  <main className='flex flex-nowrap justify-start items-center h-full gap-8 lg:hidden'>
                     {navBarItems.map((navItem) => (
                         <div key={navItem.id} className={`${navItem.id===6?'hidden':'flex'} items-center justify-start  h-full cursor-pointer last:pr-0 text-[var(--primary-black-hex)]`}>
                           <div className={` flex items-center justify-center text-[var(--primary-white-hex)]`} role='button' onClick={() => handleNavigation(navItem.link)}>{navItem.title}</div>
                        </div>
                     ))}
                      
                  </main>
               </main>
               </main>
              
               <Button path={'mailto:learnovateeducation23@gmail.com'} className='lg:hidden' role='button' name='Register Now'/>
              
              
               
               
            </div>
            {/* mobile Nav */}
            {isOpen && <nav className='hidden lg:block navbar-menu about-service__container h-full w-full top-0 overflow-hidden left-0 fixed z-25'>
               <div className='h-full overflow-y-auto pb-5 text-[var(--primary-white-hex)]'>
                  <div className='overflow-y-scroll'>
                     <ul className=' flex flex-col w-full pointer-events-auto'>
                        <aside className='w-full flex justify-end pr-10 pt-8 text-4xl' >
                        <p className="cursor-pointer " onClick={() => setOpen(!isOpen)}>
            &#x2715;
          </p>

                        </aside>
                        {mobileNavList.map((navItem) => (
                           <div key={navItem.id}>
                              <div className={`flex items-center justify-between mx-10 border-b h-full cursor-pointer last:pr-0  ${navItem.id===6?'hidden':'flex'}`} onClick={() => { handleSelectedNavItem(navItem.id) }}>
                                 <div className={`poppins-font zoom-in underline-offset-8 ${navItem.link == params ? 'underline' : ''} nav-item py-6`} role='button' onClick={() => { handleNavigation(navItem.link) }}>{navItem.title}</div>
                              </div>
                           </div>
                        ))}
                         <div className='py-6 flex items-center justify-between mx-10 border-t h-full cursor-pointer last:pr-0'> <Link href={'mailto:learnovateeducation23@gmail.com'}  className=' zoom-in underline-offset-8'>Contact Us</Link></div>
                     </ul>
                  </div>
               </div>
            </nav>}
         </main>
      
      </nav>
   )
}

export default React.memo(NavBar)
