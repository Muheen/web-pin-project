import LeftTextHero from './leftTextHero'
import RightTextHero from './RightTextHero'

const Hero = (props) => {
  return (
    <div className='flex h-[90vh]'>
        <LeftTextHero />
        <RightTextHero users={props.users}/>
    </div>
  )
}

export default Hero
