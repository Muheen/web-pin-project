import RightHeroCard from "./RightHeroCard"

const RightTextHero = (props) => {
  return (
    <div className='h-full pl-4 gap-6 py-8 w-2/3 flex flex-nowrap overflow-x-auto'>
      {props.users.map(function(el){
        return <RightHeroCard image={el.image} tag={el.tag} intro={el.intro}/>
      })}
    </div>
  )
}

export default RightTextHero
