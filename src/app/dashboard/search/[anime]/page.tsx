import { getAnimeBySearch } from "@/services"

interface Props{
    params:{anime:string}
}

const SearchAnime = async ({params}:Props) => {
    const animeSearched  = await getAnimeBySearch(params.anime);
    console.log(animeSearched)
  return (
    <div>
       {JSON.stringify(animeSearched)}
    </div>
  )
}

export default SearchAnime