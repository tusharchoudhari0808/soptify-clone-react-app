import React, { useContext } from 'react'
import { PlayContext } from '../Context/PlayContext'

const SongsItem = ({name, image, desc ,id}) => {

  const  {playWithId} = useContext(PlayContext)

  return (
    <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-5 cursor-pointer rounded hover:bg-[#ffffff26]">

    <img className="rounded" src={image}/>
    <p className='font-bold mt-2 mb-1'>{name}</p>
    <p className='text-slate-200 text-sm'>{desc}</p>
</div>
  )
}

export default SongsItem
