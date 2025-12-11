import React from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DeleteButton = ({ id }) => {

    const navigate = useNavigate();
    const handleDelete =  () => {
        api.delete(`/api/movies/${id}`)
        .then((res) => {
            console.log("Film silindi", res.data);
            // yönlendirme işlemi yapılabilir
            navigate("/");
            //window.location.href = "/";

            toast.success("Film başarıyla silindi!")



        }).catch((error) => {
            console.log("Film silinirken hata oluştu", error);
        });
    }

    return (
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Film Detayı</h2>
            <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 flex items-center gap-2">
                🗑️ Sil
                {/*     <FaRegTrashCan/> */}

            </button>
            
        </div>
    )
}

export default DeleteButton
