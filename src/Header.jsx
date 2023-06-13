import { motion } from 'framer-motion'
import shoppingCart from './assets/shopping-bag.svg';
import logo from './assets/logo.svg';


const Header = () => {
    return (
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 } }} className='w-full p-4 border-b-white/25 border-b-[1px] backdrop-blur-md fixed top-0 z-40'>
            <div className="max-w-7xl m-auto flex justify-between  items-center">
                <div className="flex items-center">
                    <img src={logo} alt="" />
                </div>
                <nav className='flex-1 max-w-lg m-auto justify-around flex'>
                    <ul className='hidden md:flex'>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Company</MenuItem>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Shop</MenuItem>
                    </ul>
                </nav>
                <div className='flex'>
                    <img src={shoppingCart} alt="" />
                    <button className='bg-white text-black rounded-md p-2 mx-4 px-4'>Sign In</button>
                </div>
                <div className='flex items-center flex-col md:hidden h-8 w-8 cursor-pointer'>
                    <HamburgerItem />
                    <HamburgerItem />
                    <HamburgerItem />
                </div>
            </div>
        </motion.header>
    )
}

const HamburgerItem = () => {
    return (
        <div className='h-1 w-full bg-white my-1 rounded-lg'></div>
    )
}

const MenuItem = ({ children }) => {
    return (
        <li className='mx-4'>{children}</li>
    )
}

export { Header }