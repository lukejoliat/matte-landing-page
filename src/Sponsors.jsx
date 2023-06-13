import partners1 from './assets/partners-1.svg';
import partners2 from './assets/partners-2.svg';
import partners3 from './assets/partners-3.svg';
import partners4 from './assets/partners-4.svg';
import partners5 from './assets/partners-5.svg';
import phoneContent from './assets/phone-content.png';
import phoneScreen from './assets/phone-screen.webp';
import phone from './assets/phone.png';
import rightArrow from './assets/right-arrow.svg';
import stuff from './assets/stuff.svg';
import twitter from './assets/twitter.svg';
import eye from './assets/eye.svg';
import arrowUp from './assets/arrow-up.svg';
import { motion } from 'framer-motion';

const Sponsors = () => {
    return (
        <section className='bg-black p-24 mt-40'>
            <div className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='h-full rounded-2xl bg-[#181818] overflow-hidden'>
                    <div className='p-6'>
                        <h1 className='text-5xl my-4 font-heading'>Organize any tasks. Prioritize with ease</h1>
                        <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget
                        </p>
                    </div>
                    <motion.img src={stuff} alt="" initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: .25, duration: .5 } }} />
                </div>
                <div className='h-full rounded-2xl bg-[#181818] relative overflow-hidden flex items-center justify-center'>
                    <motion.img src={phoneScreen} className='absolute h-full w-full' alt="" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .60, duration: .5 } }} />
                    <motion.div className='relative z-10 w-2/3 overflow-hidden' initial={{ scale: 2, opacity: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { delay: .25, duration: .5 } }}>
                        <img src={phone} alt="phone" />
                        <img src={phoneContent} className='absolute top-0 left-0 p-[3%] z-[-10] object-cover rounded-[10%]' alt="" />
                    </motion.div>
                </div>
                <div className='h-full rounded-2xl bg-[#181818]'>
                    <motion.div className='p-6 flex flex-col h-full' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .5 } }}>
                        <div className='flex items-center'><div className='h-8 w-8 rounded-lg bg-white mr-2 p-[4px] flex items-center'>
                            <img className='w-full' src={eye} alt="eye" /></div> <span className='text-lg'>Fun facts</span>
                            <div className='p-[6px] ml-2 rounded-full h-8 w-8 border-[1px] border-white ms-auto flex items-center'><img className='w-full' src={twitter} alt="twitter" /></div>
                        </div>
                        <h1 className='mt-8 text-5xl my-4 font-heading flex items-center'>30% <img src={arrowUp} className='w-8 h-8 ml-2' alt="arrow up" /></h1>
                        <p className='mt-8 font-heading font-bold text-lg'>Effortlessly manage multiple <br /> projects, save 30% time.</p>
                        <p className='mt-8 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget.</p>
                        <div className='mt-auto mb-8 flex'>
                            <div className='rounded-[100%] border-white border-[1px] w-8 h-8 p-1 cursor-pointer'><img src={rightArrow} className='w-full h-full rotate-180' alt="right arrow" /></div>
                            <div className='flex flex-1 text-center items-center justify-around max-w-[150px] m-auto'>
                                <div className='h-4 w-4 rounded-full bg-white'></div>
                                <div className='h-4 w-4 rounded-full bg-gray'></div>
                                <div className='h-4 w-4 rounded-full bg-gray'></div>
                                <div className='h-4 w-4 rounded-full bg-gray'></div>
                            </div>
                            <div className='rounded-[100%] border-white border-[1px] w-8 h-8 p-1 cursor-pointer'><img src={rightArrow} className='w-full h-full' alt="" /></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='mt-20'>
                <h1 className='font-heading text-center text-5xl'>Our sponsors & partners</h1>
                <div className='flex m-auto max-w-4xl w-full justify-between mt-12'>
                    <div>
                        <img src={partners1} alt="partners 1" />
                    </div>
                    <div><img src={partners2} alt="partners 2" /></div>
                    <div><img src={partners3} alt="partners 3" /></div>
                    <div><img src={partners4} alt="partners 4" /></div>
                    <div><img src={partners5} alt="partners 5" /></div>
                </div>
            </div>
        </section>
    )
}

export { Sponsors }