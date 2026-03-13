import Navbar from './Navbar'
import Hero from './Hero'

const Section1 = (props) => {
  console.log(props);
  return (
    <div className='h-auto w-full'>
      <Navbar />
      <Hero users={props.users}/>
    </div>
  )
}

export default Section1
