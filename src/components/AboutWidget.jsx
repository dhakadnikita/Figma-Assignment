import React, {useState} from 'react'

const TABS = [
  {id:'about', label:'About Me', content:`Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.`},
  {id:'exp', label:'Experiences', content:`- 3 years at Salesforce\n- Previously at Fintech startup\n- Background in B2B sales and customer success`},
  {id:'rec', label:'Recommended', content:`This section shows recommended items for the user. You can replace with real data.`}
]

export default function AboutWidget(){
  const [active, setActive] = useState('about')
  const tab = TABS.find(t=>t.id===active)
  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', gap:12}}>
          {TABS.map(t=>(
            <div key={t.id} className="tab" onClick={()=>setActive(t.id)} style={{opacity: t.id===active?1:0.8, boxShadow: t.id===active? '0 10px 30px rgba(0,0,0,0.6)':'none'}}>
              {t.label}
            </div>
          ))}
        </div>
        <div style={{width:12}} />
      </div>
      <div className="content" style={{marginTop:8, whiteSpace:'pre-wrap'}}>
        {tab.content}
      </div>
      <div className="footer-line" />
    </div>
  )
}
