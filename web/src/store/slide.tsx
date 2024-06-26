import { create } from 'zustand'

interface SlideBarState {
  currentSelectKey: string
  isShowSlideBar: boolean
}

export const useSlideBarStore = create<SlideBarState>(() => ({
  currentSelectKey: '',
  isShowSlideBar: false
}))

export const setCurrentSelectKey = (key: string) => {
  useSlideBarStore.setState({ currentSelectKey: key })
}

export const setIsShowSlideBar = (isShow: boolean) => {
  useSlideBarStore.setState({ isShowSlideBar: isShow })
}

export const toggleSlideBar = () => {
  useSlideBarStore.setState((state) => ({ isShowSlideBar: !state.isShowSlideBar }))
}
