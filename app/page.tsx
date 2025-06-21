import { Metadata } from "next";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import {   programList, testimonialLists } from "./lib/constant";
import Image from "next/image";
import Footer from "./components/Footer";
import SpecializationSection from "./components/SpecializationSection";

export const metadata: Metadata = {
  title: "Cognix Education ",
  description: "Transforming Skills, Shaping Futures",
  openGraph: {
    url: "https://www.cognixeducation.com/",
  },
};

export default function Home() {

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-[url('/home-bg.webp')] h-screen bg-no-repeat "
        id="intro-bg__section"
      >
        <main className="intro__section h-full  ">
          <NavBar />
          <main className="lg:w-10/12 mx-auto h-full flex lg:flex-col">
            <main className="font-roboto w-1/2 pl-[7rem] lg:pl-0 text-[var(--primary-white-hex)] xlgm:w-3/4 lg:w-full h-full  lg:h-full  flex  items-start lg:items-center justify-center lg:justify-end flex-col ">
            
             
              <h1 className=" text-4xl font-bold pb-4 leading-[1.3] lg:text-center smxl:text-2xl   lg:mt-10      fade-left ">
              Cognix Education & Training Computer Software
              </h1>
              <h1 className="text-center pb-6 text-[var(--primary-pink-hex)]  leading-[3rem] text-3xl xlgm:text-2xl lg:text-xl font-bold">
            Transforming Skills, Shaping Futures
            </h1>
              <p className="smx:text-sm text-xl w-3/4 pb-6 lg:text-sm lg:w-full lg:text-center smxl:text-xm ">
              At Cognix Education & Training Computer Software, we deliver innovative software training programs to help you excel in the ever-evolving tech world.</p>
              <Button  className='btn--secondary'  path={'mailto:congnixeducation@gmail.com'} role='button' name='Contact Us'/>
            </main>
            <main className="w-1/2 relative lg:static  h-full  lg:w-[60%] md:w-3/4   lg:mx-auto">
            <Image
              src={"/home-side.webp"}
              className="w-3/4 xlg:w-10/12 lg:w-3/4 sm:w-11/12 smxl:w-full xlgm:w-11/12 lg:static absolute bottom-[-10rem] xlg:bottom-[-8rem] xlgm:bottom-[-6rem] right-0 object-cover"
              alt="home-side-bg"
              width={300}
              height={300}
              priority
            />
            </main>
          </main>
        </main>
      </section>
      <div id='why-choose-section' className="py-12"></div>
    
        <section className="  pt-10  mx-auto flex justify-center items-center">
        
          <main className="font-roboto w-11/12 flex justify-center items-center flex-col lg:mx-auto">
            <h1 className="text-center pb-4 text-[var(--transparent-black-hex)]  leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
            Why Choose Cognix Education?
            </h1>
           
            <p className="text-[var(--darker-grey-hex)] pb-10 text-center lg:w-11/12 w-3/4 lg:mx-auto"> Cognix Education & Training Computer Software offers industry-relevant training, expert guidance, and hands-on learning to help you excel in your tech career. Our comprehensive programs are designed to ensure your success in a competitive world.</p>
            <SpecializationSection/>
            
          </main>
        </section>

<div id='about-us' className="py-12"></div>
      {/* Empowering Tomorrow's Tech Leaders*/}
      <section >
        <main className="font-roboto pb-12 pt-6 lg:pb-10 mx-auto items-center flex gap-[4rem] lg:gap-0 flex-row-reverse lg:flex-col-reverse">
          <main className="w-[40%] relative lg:w-[50%] sm:w-[70%] smxl:w-[90%] ">
            <Image
              src={"/our-classroom.webp"}
              className="w-full bottom-0 left-[-8rem] lg:left-0 absolute object-cover"
              alt="our-classroom"
              width={300}
              height={300}
              priority
            />
             <Image
              src={"/our-classroom-bg.webp"}
              className=" w-full h-full object-cover"
              alt="our-classroom"
              width={300}
              height={300}
              priority
            />
          </main>
          <main className="w-[60%] pl-[5rem] lg:pl-0 lg:w-10/12 lg:mx-auto">
            <h1 className="text-left lg:text-center pb-4 text-[var(--transparent-black-hex)] leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
             {`Cognix Education & Training Computer SoftwareEmpowering Tomorrow's Tech Leaders`}
            </h1>
            <p className="lg:text-sm w-11/12  text-[var(--darker-grey-hex)] pb-6 lg:w-full lg:text-center smxl:text-xm ">
              {` Cognix Education & Training Computer Software is a premier provider of IT and software training solutions tailored to meet the dynamic demands of today’s tech industry. Our mission is to empower individuals with the skills and knowledge they need to thrive in their careers.
With a strong focus on industry-relevant content, hands-on learning, and expert-led instruction, we prepare our learners to confidently face real-world challenges. Our programs span across key areas such as software development, data analytics, cloud computing, and cybersecurity.
At Cognix, we are committed to nurturing talent and transforming potential into excellence—making us your ideal partner for continuous professional growth.`}
              </p>
            

        
          </main>
        </main>
      </section>
       {/* How We Can Help*/}
       <section >
        <main className="font-roboto  mx-auto items-center flex gap-[4rem] lg:gap-0 flex-row lg:flex-col-reverse">
          <main className="w-[45%] relative lg:w-[50%] sm:w-[70%] smxl:w-[90%] ">
            <Image
              src={"/we-help-bg.webp"}
              className="w-full top-[5rem] lg:right-0 right-[-5rem] absolute object-cover"
              alt="we-help-bg"
              width={300}
              height={300}
              priority
            />
             <Image
              src={"/we-help.webp"}
              className=" w-full object-cover"
              alt="we-help"
              width={300}
              height={300}
              priority
            />
          </main>
          <main className="w-[55%] pr-[5rem] lg:pr-0 lg:w-10/12 lg:mx-auto">
            <h1 className="text-left lg:text-center pb-4 text-[var(--transparent-black-hex)] leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
             {`How We Can Help`}
            </h1>
          <ul className="flex flex-col gap-6 pt-6 lg:pb-8">
            <li className="flex flex-col gap-2">
              <h1 className="text-[var(--primary-pink-hex)] font-bold">Skill Development</h1>
              <h2 className="text-[var(--darker-grey-hex)] lg:text-sm">We provide specialized training programs to help you build the technical skills needed to succeed in the tech industry.</h2>
            </li>
            <li className="flex flex-col gap-2">
              <h1 className="text-[var(--primary-pink-hex)] font-bold">Customized Learning Paths</h1>
              <h2 className="text-[var(--darker-grey-hex)] lg:text-sm">Our tailored courses are designed to meet your unique career goals and learning pace.</h2>
            </li>
            <li className="flex flex-col gap-2">
              <h1 className="text-[var(--primary-pink-hex)] font-bold">Practical Expertise</h1>
              <h2 className="text-[var(--darker-grey-hex)] lg:text-sm">Gain hands-on experience through real-world projects and case studies for practical knowledge application.</h2>
            </li>
          </ul>
            

        
          </main>
        </main>
      </section>

      <div id='course-section' className="py-10 "></div>
      {/* Explore Featured Courses */}
      <section className="font-poppins py-12 mx-auto text-[var(--primary-white-hex)]  course-bg flex justify-center items-center flex-col pt-6 ">
        
      <h1 className="text-center capitalize py-4  leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
      Comprehensive Training Programs
            </h1>
         

            <main className='grid grid-cols-3 gap-6 xlgm:grid-cols-2 sm:grid-cols-1 p-10'>
          {
            programList.map((program) => (
              <div key={program.id} className='plan-card h-72 xl:h-80 xlgm:h-64 lg:h-72 md:h-80 sm:h-auto rounded-3xl border xl:py-5    py-6 px-4 text-2xl'>
                <aside className="w-10 xlgm:w-9"><Image width={100} height={100} src={program.icon} alt="icon" /></aside>
                <h1 className="font-medium py-3">{program.title}</h1>
                {program.list.map((list) => (
                  <p key={list} className='text-sm leading-7 '><span>{'>'}</span>{list}</p>
                ))}
              </div>
            ))
          }

        </main>
      </section>
      <div id='testimonial-section' className="py-12"></div>
      {/* Explore Featured Courses */}
      <section className="font-roboto w-11/12 pt-8 py-12 lg:pt-10 mx-auto flex lg:flex-col lg:justify-center lg:items-center">
<main className="w-[45%] lg:w-full">
<h1 className="text-left capitalize  lg:text-center pb-4 text-[var(--transparent-black-hex)]  leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
What Our Students Say
            </h1>
            <p className=" w-11/12 pb-8 leading-8 lg:text-center text-[var(--darker-grey-hex)] lg:w-full lg:text-sm">
            Discover how Cognix Education has empowered learners worldwide to achieve their career goals. Hear from our students as they share their transformative experiences and inspiring success stories.
            </p>
</main>
<main className=" lg:gap-4  w-[60%] lg:w-11/12 mx-auto gap-6   flex  overflow-y-hidden testimonial--container">
          {testimonialLists.map((item) => (
            <article
              key={item.id}
              className="my-8 mx-4 shadow-lg  testimonial-card py-4 px-5 flex flex-col gap-2 h-[16rem]   "
            >
              <main className="w-[25rem] smxl:w-[20rem] ">
              <Image
                    src={"/icons/quote.svg"}
                    className="w-[2.5rem]  "
                    alt="map icon"
                    width={300}
                    height={300}
                    priority
                  />
                  
                <p className="text-left w-full mt-[1.5rem]  text-[var(--medium-grey-hex)] text-sm  ">
                  {item.para}
                </p>
               
               
                <aside className="flex rounded-[2rem] shadow-lg w-[12rem] h-[5rem] mt-[1.5rem] smxl:pt-[0.5rem] items-center gap-3 justify-center">
                 <div className="w-[3rem]  flex justify-center items-center">
                   <Image
                    src={item.title}
                    className="w-full object-cover "
                    alt="test"
                    width={300}
                    height={300}
                    priority
                  /></div>
                 <main className="flex flex-col  items-start">
                 <h1 className="font-bold w-full   text-left   text-[var(--primary-purple-hex)] py-2">
                  {item.subTitle}
                </h1>
                 <Image
                    src={"/icons/star.svg"}
                    className="w-[4rem]  "
                    alt="star icon"
                    width={300}
                    height={300}
                    priority
                  />
                 </main>
                </aside>
              </main>{" "}
            </article>
          ))}
        </main>
       
</section>

    
<Footer/>
    </>
  );
}
