import React from 'react'
import Section1 from './components/Section-1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
const people = [
  {
    image: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    intro: "Great service and very smooth experience. Everything worked perfectly and exceeded my expectations.",
    tag: "Satisfied"
  },
  {
    image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    intro: "The team was very professional and supportive throughout the process. Highly recommended.",
    tag: "Happy"
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    intro: "Amazing quality and fast delivery. I really appreciate the effort and attention to detail.",
    tag: "Impressed"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    intro: "Everything was handled very efficiently and the final result was exactly what I wanted.",
    tag: "Delighted"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661420292966-e17f3ec7d27f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    intro: "A reliable and trustworthy experience. I would definitely use this service again.",
    tag: "Pleased"
  }
];

  return (
    <div>
      
      <Section1 users={people}/>
      <Section2 />
    </div>
  )
}

export default App
