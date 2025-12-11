
import { Link } from 'react-router-dom'
const MovieCard = ({ movie }) => {

    //console.log(movie);
    const r = movie.rating;
    const color = r > 9 ? 'bg-green-600' : r > 7 ? 'bg-yellow-400' : r > 5 ?'bg-orange' : 'bg-red-600';

    return (
        <Link to={`/movie/${movie.id}`} 
        className=" border flex flex-col gap-6 p-4 m-4 shadow 
        rounded-md max-sm:flex-row ">

            <div className=" relative  ">
                <img src={`https://picsum.photos/seed/${movie.id}/200/300`} alt={movie.title} className="rounded-lg 
                border border-gray-800 w-full max-h-[300px] object-cover" />
                <span className={`${color} absolute top-0 right-0  text-white h-8 w-8 flex items-center font-bold justify-center rounded-full`}>{movie.rating}</span>
               
            </div>

            <div className="flex flex-col justify-between">
<h3 className="text-xl font-bold">{movie.title}</h3>
          

            <div className="flex flex-col gap-5">
                <p className="font-semibold">{movie.year}</p>
                <p className="flex gap-2 mt-2 flex-wrap">
 {   movie.genre.map((genre, index) =>(
    <span key={index} className=" bg-gray-200 rounded-md py-1 px-2 ">{genre}</span>
 )) }
                </p>
                <p >

                   <span 
                   className="border rounded-md px-3 py-2 w-28
                    bg-red-500 text-white capitalize font-semibold">
                        {movie.language}
                        </span>
                    
                    </p>
            </div>
              </div>
        </Link>
    )
}

export default MovieCard
