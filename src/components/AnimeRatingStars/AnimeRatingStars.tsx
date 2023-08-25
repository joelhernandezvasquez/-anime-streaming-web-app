import { convertToRemUnit } from '@/helpers';
import {IoStarSharp } from 'react-icons/io5';

interface Props {
    count:number,
    color:string,
    size:number,
    gap:number
}

const createStarsArray = (quantity:number) =>{
    const stars = Array.from({length:quantity}).map((index)=>{
        return {
            id:index
        }
    })
 return stars;
}

const AnimeRatingStars = ({count,color,size,gap}:Props) => {
  const stars = createStarsArray(count);

  return (
    <>
    {
      stars.map((star)=>{
        return <IoStarSharp key={star.id} style={{color:color,fontSize:convertToRemUnit(size),marginRight:convertToRemUnit(gap)}}/>
      })
    }
    </>
  )
}

export default AnimeRatingStars