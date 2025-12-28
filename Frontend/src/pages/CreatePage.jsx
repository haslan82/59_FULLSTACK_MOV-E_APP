import React from 'react'

import { inputs } from '../utils/constants'
import api from '../utils/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'



const CreatePage = () => {

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // input verilerini nesne şeklinde saklama
    const formData = new FormData(e.target);
    const moviedata = Object.fromEntries(formData.entries());
    console.log(moviedata);
    // genreleri dizi olarak ayırma
    if (moviedata.genre) {
      // virgülle ayrılmış türleri diziye dönüştürme g.trim ile boşlukları temizleme
      moviedata.genre = moviedata.genre.split(',').map(g => g.trim());
    }
   // console.log(moviedata);
    // cast için benzer işlem
    if (moviedata.cast) {
      moviedata.cast = moviedata.cast.split(',').map(c => c.trim());
    }
    // console.log(moviedata);
    api.post('/api/movies', moviedata)
    .then((res) => {
      //console.log(res.data);
      toast.success("Film başarıyla oluşturuldu!");

     // navigate('/');
      console.log("Oluşturulan film", res.data);
      navigate(`/movie/${res.data.data.id}`);
    }).catch((err) => {
      console.log("Film oluşturulurken hata oluştu", err);
      
      //toast.error(error.response.data.message);

       toast.error(err.response.data.message || "Film oluşturulurken bir hata oluştu.");
    })
  }

  return (

    <div className="min-h-screen bg-yellow-400 flex justify-center items-center py-20">
      <div className="bg-white w-full max-w-[1000px] p-10 rounded-xl shadow-lg">

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <h1 className="text-3xl font-bold mb-6 text-center">Yeni Film Oluştur</h1>

          {/* Form alanları buraya eklenecek 
inputlar, butonlar vb.*/}
          {
            inputs.map((props) => (
              <InputField key={props.name} {...props} />
            ))
          }




          <button className=" bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ">Oluştur</button>

        </form>
      </div>
    </div>
  )
}

export default CreatePage
