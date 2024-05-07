'use client'
import TeamCard from './teamCard'
import TeamImg from '../../assets/logo.png'
const team = () => {
  return (
    <div className='flex justify-center gap-4'>
        <TeamCard img={"../../assets/logo.png"} name='bahadur' registration='42230100650'/>
        <TeamCard img={"../../assets/logo.png"} name='bahadur' registration='42230100650'/>
        <TeamCard img={"../../assets/logo.png"} name='bahadur' registration='42230100650'/>
        <TeamCard img={"../../assets/logo.png"} name='bahadur' registration='42230100650'/>
        <TeamCard img={"../../assets/logo.png"} name='bahadur' registration='42230100650'/>
    </div>
  )
}

export default team