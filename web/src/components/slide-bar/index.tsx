import { useState, type FC } from 'react'
import { SlideBarItem, selectedStyle, SlideBarWrapper } from './styled'
import { useSlideBarStore, setCurrentSelectKey, setIsShowSlideBar } from '../../store'
import { Skeleton } from "@/components/ui/skeleton"
import { mockData } from './mock.ts'
import { motion, AnimatePresence } from "framer-motion"
import { variants, itemVariants, logoVariants, foldVariants, ComponentVariants } from './animate.tsx'
import { ArrowLeftToLine } from 'lucide-react'

interface SlideBarProps {
}

const SlideBar: FC<SlideBarProps> = () => {
  const currentSelectKey = useSlideBarStore((state) => state.currentSelectKey)
  const isShowSlideBar = useSlideBarStore((state) => state.isShowSlideBar)
  const [isShowLeftToLine, setIsShowLeftToLine] = useState(false)
  const selectContent = (item: any) => {
    setCurrentSelectKey(item.key)
  }

  return (
    <AnimatePresence>
      {
        isShowSlideBar && (
          <motion.div variants={ComponentVariants} animate="visible" initial="hide" exit="hide"
            className='tw-w-[300px] tw-h-full tw-bg-[#FBFBFA] tw-px-2'>
            <header
              onMouseEnter={() => {
                setIsShowLeftToLine(true);
              }}
              onMouseLeave={() => setIsShowLeftToLine(false)}
              className='tw-py-2 tw-w-full tw-inline-flex tw-items-center tw-cursor-pointer'>
              <motion.img variants={logoVariants} whileHover="hover" whileTap="tap" src="/img/aurora_logo_main.png" alt="" width="50px" />
              <span className='tw-ml-2 tw-text-[1.3rem] tw-font-bold'
                style={{ color: isShowLeftToLine ? '#747BFF' : '#6B6A66' }}>Aurora Note</span>
              {
                isShowLeftToLine && (
                  <motion.span onClick={() => setIsShowSlideBar(false)}
                    variants={foldVariants} initial="visible" exit="hidden" whileTap="tap" className='tw-ml-auto'>
                    <ArrowLeftToLine color="#9A9996" />
                  </motion.span>
                )
              }
            </header>
            <SlideBarWrapper as={motion.ul} variants={variants} initial="hidden" animate="visible" exit="hidden"
              className='tw-w-full tw-h-full tw-text-[1rem] tw-text-[#6B6A66] tw-text-left'>
              {
                mockData.map((item) => (
                  <SlideBarItem
                    as={motion.li}
                    variants={itemVariants}
                    key={item.key}
                    style={currentSelectKey === item.key ? selectedStyle : {}}
                    onClick={() => selectContent(item)}
                  >
                    {item.title}
                  </SlideBarItem>
                ))
              }
            </SlideBarWrapper>
          </motion.div>
        )
      }
    </AnimatePresence>
  )

}
export default SlideBar
