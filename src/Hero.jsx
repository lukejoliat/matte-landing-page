import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import m from './assets/m.svg';
import contents from './assets/contents.webp';
import laptop from './assets/laptop.webp';
import screen from './assets/screen.webp';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });
    const mbottom = useTransform(scrollYProgress, [0, 1], [1, -200]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const contentTopP = useTransform(scrollYProgress, [0, 1], ['9%', '3%'])
    const contentSideP = useTransform(scrollYProgress, [0, 1], ['20%', '10.75%'])
    return (
        <section className='max-w-5xl m-auto pt-40' ref={ref}>
            <motion.div className='m-auto max-w-5xl text-center' style={{ y: mbottom }}>
                <motion.div className='max-w-lg m-auto' initial={{ transform: 'rotateY(90deg)' }} animate={{ transform: 'rotateY(0deg)' }}>
                    <div className='p-2 bg-white h-12 w-12 rounded-md m-auto flex items-center justify-center'><motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .2 } }} src={m} alt="m" /></div>
                </motion.div>
                <motion.div className='mt-10'>
                    <motion.h1 className='font-heading text-6xl mt-4 inline-block origin-bottom-left' initial={{ opacity: 0, rotateX: 80, skew: 15 }} animate={{ opacity: 1, rotateX: 0, skew: 0, transition: { duration: 1, delay: .2 } }}>Matte. </motion.h1>
                    <motion.h1 className='font-heading text-6xl mt-4 inline-block origin-bottom-left' initial={{ opacity: 0, rotateX: 80, skew: 15 }} animate={{ opacity: 1, rotateX: 0, skew: 0, transition: { duration: 1, delay: .4 } }}>Growth, </motion.h1>
                    <span> </span>
                    <motion.h1 className='font-heading text-6xl mt-4 inline-block origin-bottom-left' initial={{ opacity: 0, rotateX: 80, skew: 15 }} animate={{ opacity: 1, rotateX: 0, skew: 0, transition: { duration: 1, delay: .5 } }}>say</motion.h1>
                    <br />
                    <motion.h1 className='font-heading text-6xl mt-4  inline-block' initial={{ opacity: 0, rotateX: 90, skew: 15 }} animate={{ opacity: 1, rotateX: 0, skew: 0, transition: { duration: .5, delay: .4 } }}>goodbye to</motion.h1>
                    <span> </span>
                    <motion.h1 className='font-heading text-6xl mt-4  inline-block' initial={{ opacity: 0, rotateX: 90, skew: 15 }} animate={{ opacity: 1, rotateX: 0, skew: 0, transition: { duration: .5, delay: .5 } }}>ugly  </motion.h1>
                    <span> </span>
                    <motion.h1 className='font-heading text-6xl mt-4  inline-block' initial={{ opacity: 0, rotateX: 90, skew: 15 }} animate={{ opacity: 1, rotateX: 0, skew: 0, transition: { duration: .5, delay: .6 } }}>tools</motion.h1>
                    <motion.p className='mt-4 text-gray max-w-md m-auto' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: .5, delay: .6 } }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget
                    </motion.p>
                    <motion.div className='flex mt-4 text-center justify-center' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: .75, delay: .6 } }}>
                        <button className='bg-[#1c1c1c] p-4 m-2 rounded-md'>Watch Video</button>
                        <button className='bg-primary p-4 m-2 rounded-md'>Download App</button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: 'rotateX(-90deg)' }} animate={{ opacity: 1, transform: 'rotateX(0deg)', transition: { delay: 1 } }} className='relative h-[587px] my-12 flex items-center justify-center origin-center'>
                <img className='absolute top-0 z-20' src={laptop} alt="laptop" />
                <img className='absolute top-0 z-10 pt-[3%] px-[10%]' src={screen} alt="screen" />
                <motion.img className='absolute top-0 z-30 ml-[.25%]' style={{ paddingTop: contentTopP, paddingLeft: contentSideP, paddingRight: contentSideP }} src={contents} alt="content" />
                <motion.div style={{ scale: bgScale, boxShadow: `0px 0px 250px 250px #ffffff4d` }} className='absolute h-40 w-40 rounded-full'></motion.div>
            </motion.div>
        </section>
    )
}

const TurningText = () => {
}

export { Hero }