import {ReactNode} from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './hero.module.css';

interface Props{
  heroImg:StaticImageData | 'string',
  children:ReactNode
}

const Hero = ({heroImg,children}:Props) => {
  return (
    <section className={style.hero_container}>
      <Image 
       width={300}
       height={300}
       src={heroImg}
       alt="Demon Slayer"
      /> 

      <div className={style.hero_content}>
      {children}
      </div>

    </section>
  )
}

export default Hero