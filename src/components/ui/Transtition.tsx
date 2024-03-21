'use client'
import { motion } from 'framer-motion'

export default function Transtition({
    children 
} : {
    children: React.ReactNode
}) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
        {children}
    </motion.div>
  )
}
