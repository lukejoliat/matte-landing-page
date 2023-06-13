import { motion } from 'framer-motion'
import shoppingCart from './assets/shopping-bag.svg';
import logo from './assets/logo.svg';


const Header = () => {
    return (
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
    )
}

export { Header }