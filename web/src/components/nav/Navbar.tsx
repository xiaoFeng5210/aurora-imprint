import React from 'react'
import {useSlideBarStore} from "@/store";
import { Icon } from '@iconify/react';
import {motion} from 'framer-motion';
import {toggleSlideBar} from "@/store/slide.tsx";

function Nav() {
	const isShowSlideBar = useSlideBarStore((state) => state.isShowSlideBar)
	const variants = {
		hover: {
			scale: 1.1,
		},
		initial: {
			scale: 1,
		}
	}
	return (
    <div className="tw-w-full tw-h-[45px] tw-flex tw-flex-row tw-items-center">
	    {
		    !isShowSlideBar && (
			    <motion.div onClick={() => toggleSlideBar()} variants={variants} initial="initial" whileHover="hover"
			                className="tw-w-[48px] tw-h-[48px] tw-inline-flex tw-justify-center tw-cursor-pointer">
				    <Icon icon="material-symbols-light:menu" className="tw-w-[24px] tw-h-[48px]"/>
			    </motion.div>
		    )
	    }
	    <div className="notranslate tw-pl-2">Getting Started</div>
    </div>
	)
}

export default Nav