import Image, { StaticImageData } from "next/image";

interface Props{
    name:string,
    imageSrc:StaticImageData
}

const Avatar = ({name,imageSrc}:Props) => {
  return (
    <div aria-label={`${name} avatar`} role="img">
      <Image
       width={40}
       height={40}
       src={imageSrc}
       alt={`profile of ${name}`}
      /> 
    </div>
  )
}

export default Avatar