import './App.css';
import logo from './assets/logo.svg';
import m from './assets/m.svg';
import shoppingCart from './assets/shopping-bag.svg';
import laptop from './assets/laptop.webp';
import screen from './assets/screen.webp';
import stuff from './assets/stuff.svg'
import rightArrow from './assets/right-arrow.svg'
import phoneScreen from './assets/phone-screen.webp'
import phoneContent from './assets/phone-content.png'
import phone from './assets/phone.png'
import { delay, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import contents from './assets/contents.webp'

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const mbottom = useTransform(scrollYProgress, [0, 1], [1, -200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const contentTopP = useTransform(scrollYProgress, [0, 1], ['9%', '3%'])
  const contentSideP = useTransform(scrollYProgress, [0, 1], ['20%', '10.75%'])

  return (
    <div className="bg-[#03040d] text-white">
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 } }} className='w-full border-b-white/25 border-b-[1px] backdrop-blur-md fixed top-0 z-40'>
        <div className="max-w-5xl m-auto flex justify-between py-4 items-center">
          <div className="flex items-center">
            <img src={logo} alt="" />
          </div>
          <nav><ul className='flex justfy-between'><li className='mx-4'>Features</li><li className='mx-4'>Company</li><li className='mx-4'>Blog</li><li className='mx-4'>Shop</li></ul></nav>
          <div className='flex'>
            <img src={shoppingCart} alt="" />
            <button className='bg-white text-black rounded-md p-2 mx-4 px-4'>Sign In</button>
          </div>
        </div>
      </motion.header>
      <main>
        <section className='max-w-5xl m-auto pt-40' ref={ref}>
          <motion.div className='m-auto max-w-lg text-center' style={{ y: mbottom }}>
            <motion.div className='max-w-lg m-auto' initial={{ transform: 'rotateY(90deg)' }} animate={{ transform: 'rotateY(0deg)' }}>
              <div className='p-2 bg-white h-12 w-12 rounded-md m-auto flex items-center justify-center'><motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .2 } }} src={m} alt="m" /></div>
            </motion.div>
            <motion.div className='mt-10' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .7 } }}>
              <h1 className='font-heading text-5xl mt-4'>Matte. Growth, say</h1>
              <h1 className='font-heading text-5xl mt-4'>goodbye to ugly tools</h1>
              <p className='mt-4 text-[#7d7d7d]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget
              </p>
              <div className='flex mt-4 text-center justify-center'>
                <button className='bg-[#1c1c1c] p-4 m-2 rounded-md'>Watch Video</button>
                <button className='bg-[#0266ff] p-4 m-2 rounded-md'>Download App</button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, transform: 'rotateX(-90deg)' }} animate={{ opacity: 1, transform: 'rotateX(0deg)', transition: { delay: 1 } }} className='relative h-[587px] my-12 flex items-center justify-center origin-center'>
            <img className='absolute top-0 z-20' src={laptop} alt="laptop" />
            <img className='absolute top-0 z-10 pt-[3%] px-[10%]' src={screen} alt="screen" />
            <motion.img className='absolute top-0 z-30 ml-[.25%]' style={{ paddingTop: contentTopP, paddingLeft: contentSideP, paddingRight: contentSideP }} src={contents} alt="content" />
            <motion.div style={{ scale: bgScale, boxShadow: `0px 0px 250px 250px #ffffff4d` }} className='absolute h-40 w-40 rounded-full'></motion.div>
          </motion.div>
        </section>

        <section className='bg-black p-4 mt-40'>
          <div className='max-w-7xl m-auto grid grid-cols-3 gap-6'>
            <div className='rounded-2xl bg-[#181818] h-full overflow-hidden'>
              <div className='p-6'>
                <h1 className='text-5xl my-4 font-heading'>Organize any tasks. Prioritize with ease
                </h1>
                <p className='text-[#7d7d7d]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget
                </p>
              </div>
              <motion.img src={stuff} alt="" initial={{ x: 300 }} whileInView={{ x: 0, transition: { delay: .25 } }} />
            </div>
            <div className='h-full rounded-2xl bg-[#181818] relative overflow-hidden flex items-center justify-center'>
              <motion.img src={phoneScreen} className='absolute h-full w-full' alt="" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .60 } }} />
              <motion.div className='absolute z-10 w-2/3 overflow-hidden' initial={{ scale: 2, opacity: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { delay: .25 } }}>
                <img src={phone} alt="" />
                <img src={phoneContent} className='absolute top-0 left-0 p-[3%] z-[-10] object-cover rounded-[10%]' alt="" />
              </motion.div>
            </div>
            <div className='h-full rounded-2xl bg-[#181818]'>
              <motion.div className='p-6 flex flex-col h-full' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .5 } }}>
                <div className='flex items-center'><div className='h-6 w-6 rounded-lg bg-white mr-2 p-4' /> <span className='text-lg'>Fun facts</span><div className='p-4 ml-2 rounded-full h-6 w-6 border-[1px] border-white ms-auto' /></div>
                <h1 className='mt-8 text-5xl my-4 font-heading flex items-center'>30% <img src={rightArrow} className='w-8 h-8 ml-2' alt="" /></h1>
                <p className='mt-8 font-heading font-bold text-lg'>Effortlessly manage multiple <br /> projects, save 30% time.</p>
                <p className='mt-8 text-[#7d7d7d]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget.</p>
                <div className='mt-auto mb-8 flex'>
                  <div className='rounded-[100%] border-white border-[1px] w-8 h-8 p-1 cursor-pointer'><img src={rightArrow} className='w-full h-full rotate-180' alt="" /></div>
                  <div className='flex flex-1 text-center items-center justify-around max-w-[150px] m-auto'>
                    <div className='h-4 w-4 rounded-full bg-white'></div>
                    <div className='h-4 w-4 rounded-full bg-gray-500'></div>
                    <div className='h-4 w-4 rounded-full bg-gray-500'></div>
                    <div className='h-4 w-4 rounded-full bg-gray-500'></div>
                  </div>
                  <div className='rounded-[100%] border-white border-[1px] w-8 h-8 p-1 cursor-pointer'><img src={rightArrow} className='w-full h-full' alt="" /></div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className='mt-20'>
            <h1 className='font-heading text-center text-5xl'>Our sponsors & partners</h1>
            <div></div>
          </div>
        </section>
      </main>
    </div >
  )
}

export default App
