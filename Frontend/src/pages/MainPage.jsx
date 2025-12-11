
import Hero from '../components/Hero'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'
import MovieCard from './MovieCard'
import Error from '../components/Error'
import Loader from '../components/Loader'
const MainPage = () => {


  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['movies'],
    queryFn: () => api.get('/api/movies').then((res) => res.data)
  })


  return (
    <div>
      <Hero />
      {
        isLoading ?



          <Loader />


          : error ?

            <h1 className="text-4xl text-red-500 "><Error info={error} refetch={refetch} /> </h1> :
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {
                data.map((movie) => <MovieCard key={movie.id} movie={movie} />)
              }
            </div>


      }
    </div>
  )
}

export default MainPage
