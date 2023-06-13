import { motion } from "framer-motion"
import m from './assets/m.svg';

const Icon = () => {
    return (
        <motion.div className='max-w-lg m-auto ' initial={{ transform: 'rotateY(90deg)' }} animate={{ transform: 'rotateY(0deg)' }}>
            <div className='p-2 bg-white h-12 w-12 rounded-md m-auto flex items-center justify-center shadow-blue-glow'><motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .2 } }} src={m} alt="m" /></div>
        </motion.div>
    )
}

export { Icon }