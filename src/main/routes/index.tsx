import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeMain } from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router