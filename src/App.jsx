import { motion } from 'framer-motion';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import blueBgBar from './assets/blue-bg-bar.jpeg';
import blueBgContent from './assets/blue-bg-content.svg';
import blueBg from './assets/blue-bg.webp';
import circle from './assets/circle.png';
import compass from './assets/compass.svg';
import m from './assets/m.svg';
import { Sponsors } from './Sponsors';



function App() {

  return (
    <div className="bg-[#03040d] text-white">

      <main>
        <Header />
        <Hero />
        <Sponsors />

        <section className='bg-charcoal p-20'>
          <div className='max-w-7xl m-auto'>
            <h1 className='text-center font-heading text-5xl'>Simplify task management. <br /> Enhance focus.</h1>
            <p className='max-w-md text-center m-auto my-12 text-gray'>
              A comprehensive solution for organizing and prioritizing your tasks, to help you boost your productivity and achieve your goals with ease.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-40 lg:p-10'>
              <div className='rounded-xl relative overflow-hidden'>
                <img className='object-fit absolute z-10 h-full w-full' src={blueBg} alt="blue bg" />
                <motion.div initial={{ x: 0, opacity: 0 }} whileInView={{ x: 70, opacity: 1, transition: { duration: .5 } }} className='max-w-[300px] left-[-20%] relative z-20 top-10 rounded-2xl overflow-hidden'>
                  <motion.img src={blueBgBar} alt="blue bg bar" />
                </motion.div>
                <motion.img initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }} className='object-fit z-20 relative top-20 left-[20%] w-full' src={blueBgContent} alt="blue bg content" />
              </div>
              <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .5 } }} className='flex flex-col justify-center'>
                <p className='my-4 flex items-center'><span className='bg-white inline-block p-2 rounded-lg mr-4'><img src={compass} alt="compass" /></span> Collaborate</p>
                <h1 className='font-heading text-4xl my-4'>Boost teamwork <br /> with shared tasks.</h1>
                <p className='text-gray my-4'>Collaboration made easy! With our innovative "to-do" app, you can now work together with your team members and enhance teamwork.</p>
                <div><button className='bg-primary p-4 rounded-md inline-block my-4'>Get Early Access</button></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className='bg-black p-20'>
          <div className="max-w-7xl m-auto">
            <h1 className='font-heading text-5xl text-center'>What are you waiting for?</h1>
            <p className='text-center text-gray mt-4'>Start simplifying your tasks today and sign up now!</p>
            <div className='m-auto max-w-4xl rounded-lg bg-[#1b1c1d] px-6 pb-6 mt-6 w-full relative overflow-hidden'>
              <motion.div initial={{ y: -100 }} animate={{ y: 0, transition: { duration: .5 } }}>
                <motion.div className='m-auto w-[1px] h-12 bg-slate-400'></motion.div>
                <motion.div className='max-w-lg m-auto relative flex justify-center items-center'>
                  <div className='p-2 bg-white h-12 w-12 rounded-md m-auto flex items-center justify-center shadow-blue-glow relative z-10'><motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .5 } }} src={m} alt="m" /></div>
                  <motion.div className='bg-[#00d4ff] absolute h-12 w-12 top-0 z-0 blur-lg rounded-full' initial={{ opacity: 0 }} whileInView={{ opacity: .9, transition: { delay: .5 } }}></motion.div>
                  <motion.div className='bg-[#0266ff] absolute h-12 w-12 top-0 z-0 blur-lg rounded-full' initial={{ opacity: 0 }} whileInView={{ opacity: .3, transition: { delay: .5 } }}></motion.div>
                </motion.div>
              </motion.div>

              <h2 className='text-center font-heading mt-4 text-2xl'>Get Early Access</h2>
              <p className='text-gray max-w-lg text-center m-auto'>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
              <input className='m-auto block mt-8 rounded-md p-4 bg-[#333] border-1 border-gray' type="text" placeholder='Enter email here' />
              <p className='text-gray max-w-lg text-center m-auto mt-4'>Aliquam et tellus urna. Phasellus eget</p>

              <motion.div className='absolute left-[-10%] bottom-[-30%] h-80 w-80 rounded-full'
                initial={{ rotate: 0 }} animate={{ rotate: 360, transition: { duration: 3, repeat: Infinity } }}>
                <img src={circle} alt="" />
              </motion.div >
              <motion.div className='absolute right-[-10%] top-[-30%] h-80 w-80 rounded-full'
                initial={{ rotate: 0 }} animate={{ rotate: 360, transition: { duration: 3, repeat: Infinity } }}>
                <img src={circle} alt="" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div >
  )
}

export default App
