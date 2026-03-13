import RightHeroCard from "./RightHeroCard"

const RightTextHero = (props) => {
  return (
    <div id="right" className='h-full pl-4 gap-6 pt-8 pb-12 w-2/3 flex flex-nowrap overflow-x-auto'>
      {props.users.map(function(el,idx){
        return <RightHeroCard id={idx+1} image={el.image} tag={el.tag} intro={el.intro}/>
      })}
    </div>
  )
}

export default RightTextHero
