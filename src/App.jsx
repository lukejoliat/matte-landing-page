import './App.css';
import logo from './assets/logo.svg';
import m from './assets/m.svg';
import shoppingCart from './assets/shopping-bag.svg';
import laptop from './assets/laptop.webp';
import screen from './assets/screen.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    <div className="bg-black text-white">
      <header className='w-full border-b-white/25 border-b-[1px] backdrop-blur-md fixed top-0 z-40'>
        <div className="max-w-5xl m-auto flex justify-between py-4">
          <div className="flex items-center">
            <img src={logo} alt="" />
          </div>
          <nav><ul className='flex justfy-between'><li className='m-2'>Features</li><li className='m-2'>Company</li><li className='m-2'>Blog</li><li className='m-2'>Shop</li></ul></nav>
          <div className='flex'>
            <img src={shoppingCart} alt="" />
            <button className='bg-white text-black rounded-md p-2 mx-4 px-4'>Sign In</button>
          </div>
        </div>
      </header>
      <main>
        <section className='max-w-5xl m-auto pt-40' ref={ref}>
          <motion.div className='m-auto max-w-lg text-center' style={{ y: mbottom }}>
            <div className='max-w-lg m-auto'>
              <div className='p-2 bg-white h-12 w-12 rounded-md m-auto flex items-center justify-center'><img src={m} alt="" /></div>
            </div>
            <h1 className='font-heading text-5xl mt-4'>Matte. Growth, say</h1>
            <h1 className='font-heading text-5xl mt-4'>goodbye to ugly tools</h1>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget
            </p>
            <div className='flex mt-4 text-center justify-center'>
              <button className='bg-[#1c1c1c] p-4 m-2 rounded-md'>Watch Video</button>
              <button className='bg-[#0266ff] p-4 m-2 rounded-md'>Download App</button>
            </div>
          </motion.div>
          <div className='relative h-[587px] my-12 flex items-center justify-center'>
            <img className='absolute top-0 z-20' src={laptop} alt="" />
            <img className='absolute top-0 z-10 pt-[3%] px-[10%]' style={{}} src={screen} alt="" />
            <motion.img className='absolute top-0 z-30 ml-[.25%]' style={{ paddingTop: contentTopP, paddingLeft: contentSideP, paddingRight: contentSideP }} src={contents} alt="" />
            <motion.div style={{ scale: bgScale, boxShadow: `0px 0px 250px 250px #ffffff4d` }} className='absolute h-40 w-40 rounded-full'></motion.div>
          </div>
        </section>

        <section className='max-w-5xl m-auto h-80 my-10 mt-40'>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi architecto tenetur consequuntur eius error doloremque fuga praesentium accusantium, provident aspernatur dolor. Ex asperiores magnam dolore nemo libero unde sint.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
