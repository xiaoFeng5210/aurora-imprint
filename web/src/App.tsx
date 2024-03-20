import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'
import { Camera } from 'lucide-react';
import router from './config/router.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
