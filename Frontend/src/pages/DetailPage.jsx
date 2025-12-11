import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Field from '../components/Field';
import DeleteButton from '../components/DeleteButton';


const DetailPage = () => {
  const { id } = useParams();
  //console.log(id);

const {data,isLoading,error, refetch} = useQuery({
  queryKey: ['movie', id],
  queryFn: () => {
    return api.get(`/api/movies/${id}`).then((res) => res.data)
  }
})

if(isLoading)return <Loader/>
if(error) return <h1><Error info={error} refetch={refetch}>{error.message}</Error></h1>
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header with Delete Button */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 shadow-lg">
      <DeleteButton id={id}/> 

      </div>
      

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Poster */}
          <div className="md:w-1/3 lg:w-1/2 ">
            <img 
              src={`https://picsum.photos/seed/${data.id}/300/450`} 
              alt={data.title} 
              className="rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-slate-700" 
            />
          </div>

          {/* Details */}
          <div className="md:w-2/3 text-white">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{data.title}</h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{data.description}</p>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-slate-700 bg-opacity-50 rounded-xl backdrop-blur">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Yıl</p>
                <p className="text-2xl font-bold text-white">{data.year}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">İzleyici Skoru</p>
                <p className="text-2xl font-bold text-yellow-400">⭐ {data.rating}/10</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Süre</p>
                <p className="text-2xl font-bold text-white">{data.duration} min</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Dil</p>
                <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-semibold capitalize">
                  {data.language}
                </span>
              </div>
            </div>

            {/* Genres */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-3">Türler</p>
              <div className="flex flex-wrap gap-3">
                {data.genre.map((genre, index) => (
                  <span key={index} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-semibold">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Director & Cast */}
            <div className="space-y-4 p-6 bg-slate-700 bg-opacity-50 rounded-xl backdrop-blur">
              <Field label="Yönetmen" value={data.director} />
              <Field label="Oyuncular" value={data.cast.join(', ')} />
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default DetailPage

