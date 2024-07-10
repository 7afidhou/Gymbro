import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import YouTube from 'react-youtube';
import exercises from './exercices';



export default function Workout() {
    const [open,setOpen]=useState(new Array(exercises.length).fill(false))
    const {muscle}=useParams()
    let index=99;
    if (muscle === 'Biceps') {
        index = 0;
      } else if (muscle === 'Triceps') {
        index = 1;
      } else if (muscle === 'Chest') {
        index = 2;
      } else if (muscle === 'Back') {
        index = 3;
      } else if (muscle === 'Legs') {
        index = 4;
      } else if (muscle === 'Shoulders') {
        index = 5;
      } else if (muscle === 'Abs') {
        index = 6;
      } else {
        index=99
      }
  const target=exercises[index].exercises
    const opts = {
        height: '320',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        
        },
      };
    function handleclick(ind){
        setOpen((prevopen)=>{
            const newopen=[...prevopen]
            newopen[ind]=!newopen[ind]
            return newopen
        })
    }

  return (
    <div className='bg-zinc-950 h-screen w-full fixed top-1/2 left-1/2 overflow-auto transform -translate-x-1/2 -translate-y-1/2'>
      
      
      
     {target.map((exer,ind)=> 
    <div className={`bg-zinc-800 w-[350px] sm:w-[600px] md:w-[800px] lg:w-[900px] max-w-[900px] mx-auto pt-5 rounded-xl mt-5 p-4 text-white text-lg md:text-2xl font-Anton flex flex-col`}>
     <div className='flex justify-between'>
            <p>{ind+1}. &nbsp; {exer.name}</p>
            < IoIosArrowDown className={`${open[ind] && 'rotate-180'} duration-300`} onClick={()=>handleclick(ind)} size={40} />
            </div>
    
            <div className={`${!open[ind] && 'hidden'} mx-auto w-full max-w-[700px]`}>
            <YouTube  videoId={exer.video} opts={opts} />
            </div>
    
    
    
            </div>
    
    
    
    ) }

<div className='h-10'></div>
   


      
    </div>
  )
}
