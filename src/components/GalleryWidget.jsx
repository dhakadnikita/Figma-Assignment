import React, {useState, useRef} from 'react'

const initial = [
  '/public/img1.jpg',
  '/public/img2.jpg',
  '/public/img3.jpg'
]

export default function GalleryWidget(){
  const [images, setImages] = useState(initial)
  const fileRef = useRef()

  function onAdd(e){
    const file = e.target.files && e.target.files[0]
    if(!file) return
    const url = URL.createObjectURL(file)
    setImages(prev=>[...prev, url])
  }
  function prev(){
    const last = images.slice(-1)
    setImages(prev=>[...last, ...prev.slice(0, prev.length-1)])
  }
  function next(){
    setImages(prev=>[...prev.slice(1), prev[0]])
  }
  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="tab" style={{borderRadius:12}}>Gallery</div>
        <div className="controls">
          <label className="add-btn">
            + ADD IMAGE
            <input ref={fileRef} type="file" accept="image/*" onChange={onAdd} style={{display:'none'}} />
          </label>
          <button className="add-btn" onClick={prev} aria-label="prev">◀</button>
          <button className="add-btn" onClick={next} aria-label="next">▶</button>
        </div>
      </div>
      <div className="gallery-grid">
        {images.map((src, idx)=>(
          <div key={idx} className="gallery-item">
            <img src={src} alt={'img'+idx} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
        ))}
      </div>
    </div>
  )
}
