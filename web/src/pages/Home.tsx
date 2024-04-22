import { useEffect, type FC } from 'react'
import SlideBar from '@/components/slide-bar'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Nav from '@/components/nav/Navbar'

const Home: FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [])
  
  return (
    <div className='tw-w-screen tw-h-dvh tw-overflow-hidden tw-flex tw-flex-row'>
      <SlideBar />
      <motion.main layout transition={{duration: 0.5}} className="tw-flex-1">  
        <Nav />
        <motion.div layout className='tw-p-4 tw-w-full tw-h-full'>
          <Outlet />
        </motion.div>
      </motion.main>
    </div>
  )
}
export default Home
