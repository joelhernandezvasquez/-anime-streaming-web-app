import Image, { StaticImageData } from "next/image";
import style from './avatar.module.css';

interface Props{
    name:string,
    imageSrc:StaticImageData
}

const Avatar = ({name,imageSrc}:Props) => {
  return (
    <div className={style.avatar_container} aria-label={`${name} avatar`} role="img">
      <Image
      className={style.avatar_image}
       width={40}
       height={40}
       src={imageSrc}
       alt={`profile of ${name}`}
      /> 
    </div>
  )
}

export default Avatar