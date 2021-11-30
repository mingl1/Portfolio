import { RandomReveal } from 'react-random-reveal'
const AddSuspenseComponent = ({children, repeat}) => {
    const characters=['#',"!",'@',"$","%","^","*",'s','t','o','n','y','b','r',
'o','k' ]
    const shouldRepeat=repeat
    const delay=2000
    return(
  <RandomReveal
    isPlaying
    duration={2.5}
    revealDuration={0.5}
    characters= {children}
    characterSet={characters}
    onComplete={()=>[shouldRepeat,delay]}
    />
    )
}

export default AddSuspenseComponent