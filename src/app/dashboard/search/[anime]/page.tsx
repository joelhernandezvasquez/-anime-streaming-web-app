
interface Props{
    params:{anime:string}
}

const SearchAnime = ({params}:Props) => {
    
  return (
    <div>
        <p>{params.anime}</p>
    </div>
  )
}

export default SearchAnime