import { Metadata } from "next";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import {  courseLists, testimonialLists } from "./lib/constant";
import Image from "next/image";
import Footer from "./components/Footer";
import SpecializationSection from "./components/SpecializationSection";

export const metadata: Metadata = {
  title: "LEARNOVATE EDUCATION ",
  description: "Transforming Skills, Shaping Futures",
  openGraph: {
    url: "https://www.learnovateedu.com/",
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
            <main className="w-1/2 pl-[5rem] lg:pl-0 text-[var(--primary-white-hex)] xlgm:w-3/4 lg:w-full h-full   lg:h-full  flex  items-start lg:items-center justify-center lg:justify-end flex-col ">
            
             
              <h1 className=" text-5xl font-bold pb-4 leading-[1.3] lg:text-center smxl:text-3xl   lg:text-4xl     fade-left ">
              Transforming Skills, Shaping Futures
              </h1>

              <p className="smx:text-sm text-xl w-3/4 pb-6 lg:text-sm lg:w-full lg:text-center smxl:text-xm ">
              At  LEARNOVATE EDUCATION & TRAINING COMPUTER SOFTWARE, we deliver innovative software training programs to help you excel in the ever-evolving tech world.
              </p>
              <Button  className='btn--secondary'  path={'mailto:learnovateeducation23@gmail.com'} role='button' name='Contact Us'/>
            </main>
            <main className="w-1/2 relative lg:static  h-full  lg:w-[60%] md:w-3/4   lg:mx-auto">
            <Image
              src={"/home-side.webp"}
              className="w-3/4 xlg:w-10/12 xlgm:w-11/12 lg:static absolute bottom-[-10rem] xlg:bottom-[-8rem] xlgm:bottom-[-6rem] right-0 object-cover"
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
        
          <main className="w-11/12 flex justify-center items-center flex-col lg:mx-auto">
            <h1 className="text-center pb-4 text-[var(--transparent-black-hex)]  leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
            Why Choose LEARNOVATE EDUCATION?
            </h1>
            <p className="text-[var(--darker-grey-hex)] pb-4 text-center lg:w-11/12 w-3/4 lg:mx-auto"> LEARNOVATE EDUCATION & TRAINING COMPUTER SOFTWARE offers industry-relevant training, expert guidance, and hands-on learning to help you excel in your tech career. Our comprehensive programs are designed to ensure your success in a competitive world.</p>
            <SpecializationSection/>
            
          </main>
        </section>

<div id='about-us' className="py-12"></div>
      {/* Empowering Tomorrow's Tech Leaders*/}
      <section >
        <main className=" pb-12 pt-6 lg:pb-10 mx-auto items-center flex gap-[4rem] lg:gap-0 flex-row-reverse lg:flex-col-reverse">
          <main className="w-[45%] relative lg:w-[50%] sm:w-[70%] smxl:w-[90%] ">
            <Image
              src={"/our-classroom.webp"}
              className="w-full bottom-0 left-[0rem] absolute object-cover"
              alt="our-classroom"
              width={300}
              height={300}
              priority
            />
             <Image
              src={"/our-classroom-bg.webp"}
              className=" w-full object-cover"
              alt="our-classroom"
              width={300}
              height={300}
              priority
            />
          </main>
          <main className="w-[55%] pl-[5rem] lg:pl-0 lg:w-10/12 lg:mx-auto">
            <h1 className="text-left lg:text-center pb-4 text-[var(--transparent-black-hex)] leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
             {`Empowering Tomorrow's Tech Leaders`}
            </h1>
            <p className="lg:text-sm  text-[var(--darker-grey-hex)] pb-6 lg:w-full lg:text-center smxl:text-xm ">
              {` LEARNOVATE EDUCATION & TRAINING COMPUTER SOFTWARE is a premier provider of IT and software training solutions designed to meet the ever-changing demands of the tech industry. Our mission is to empower individuals with the skills and knowledge necessary to excel in their careers. With a focus on industry-relevant content, hands-on learning, and expert guidance, we ensure that our students are prepared to tackle real-world challenges. Our programs cover a wide range of specializations, including software development, data analytics, cloud computing, and cybersecurity. At Supply Kick, we believe in nurturing talent and transforming potential into excellence, making us the ideal partner for your professional growth.`}
              </p>
            

        
          </main>
        </main>
      </section>
       {/* How We Can Help*/}
       <section >
        <main className="  mx-auto items-center flex gap-[4rem] lg:gap-0 flex-row lg:flex-col-reverse">
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
          <ul className="flex flex-col gap-6 pt-6">
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

      <div id='course-section' className="py-12"></div>
      {/* Explore Featured Courses */}
      <section className="w-11/12 mx-auto flex justify-center items-center flex-col pt-6 ">
        
      <h1 className="text-center capitalize pb-4 text-[var(--transparent-black-hex)]  leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
      Our Popular Courses
            </h1>
            <p className="text-[var(--darker-grey-hex)] pb-8 text-center w-3/4 lg:w-11/12 md:w-full lg:mx-auto">Our popular courses are designed to meet industry demands, covering software development, data analytics, IT skills, and advanced technologies. Each program ensures hands-on learning and career-focused expertise.</p>

        <ul className="grid grid-cols-4 xlg:grid-cols-3 justify-items-center  xlg:gap-y-8 md:grid-cols-2  smxl:gap-6 sm:grid-cols-1 gap-4 py-6  mx-auto">
          {courseLists.map((item) => (
            <li key={item.id} className="flex shadow-md flex-col w-full">
              <aside className="w-full">
                {" "}
                <Image
                  src={item.image}
                  className="w-full  object-cover "
                  alt={item.title}
                  width={300}
                  height={300}
                  priority
                />
                
              </aside>
              <main className="h-auto font-raleway flex flex-col    px-3 pb-7">
                <h2 className="font-bold py-4 text-lg text-[var(--darker-black-hex)]">{item.title}</h2>
                <p className="text-sm pb-6 text-[var(--darker-grey-hex)]">{item.para}</p>
              
              </main>
            </li>
          ))}
        </ul>
      </section>
      <div id='testimonial-section' className="py-12"></div>
      {/* Explore Featured Courses */}
      <section className="w-11/12 pt-8 py-12 lg:pt-10 mx-auto flex lg:flex-col lg:justify-center lg:items-center">
<main className="w-[45%] lg:w-full">
<h1 className="text-left capitalize  lg:text-center pb-4 text-[var(--transparent-black-hex)]  leading-[3rem] text-4xl xlgm:text-3xl smx:text-2xl font-bold">
What Our Students Say
            </h1>
            <p className=" w-11/12 pb-8 lg:text-center text-[var(--darker-grey-hex)] lg:w-full lg:text-sm">
            Discover how  LEARNOVATE EDUCATION has empowered learners worldwide to achieve their career goals. Hear from our students about their transformative experiences and success stories.
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
                 <h1 className="font-bold w-full   text-left   text-[var(--primary-blue-hex)] py-2">
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
