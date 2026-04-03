
import {useMediaQuery} from "react-responsive"


const HeroExperience = () => {

    const isTablet =useMediaQuery({query:'(max-width: 1024px)'});
    const isMobile =useMediaQuery({query: '(max-width: 768px)'});
    
  return (
    <>

    <img className='rounded-md relative top-[25%] left-[30%]' src="/images/profile.jpeg" alt="asdf" srcset="" />
    </>
)
}

export default HeroExperience
