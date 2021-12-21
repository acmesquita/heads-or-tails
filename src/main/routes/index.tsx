import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeMain } from '@/main/factories/pages'
import { Register } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Register />} />
        <Route path="/" element={<MakeMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
