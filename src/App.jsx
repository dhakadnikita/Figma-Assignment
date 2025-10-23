import React from 'react'
import AboutWidget from './components/AboutWidget'
import GalleryWidget from './components/GalleryWidget'

export default function App(){
  return (
    <div className="app-shell">
      <div className="left-empty">
        {/* Left half intentionally empty */}
      </div>
      <div className="right-widgets">
        <AboutWidget />
        <GalleryWidget />
      </div>
    </div>
  )
}
