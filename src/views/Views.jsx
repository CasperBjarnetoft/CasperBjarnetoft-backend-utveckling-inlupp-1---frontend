import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateErrandView from './CreateErrandView'
import ErrandsView from './ErrandsView'
import ErrandDetailsView from './ErrandDetailsView'

const Views = () => {
  return (
    <Routes >
      <Route path="/adderrand" element={ <CreateErrandView />} />
      <Route path="/" element={ <ErrandsView />} />
      <Route path="/errand/:id" element={ <ErrandDetailsView />} />
    </Routes>
  )
}

export default Views