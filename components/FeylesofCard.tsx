import { Button } from "flowbite-react";
import { Feylesof } from "../services/models"

const FeylesofCard = (feylesofInput: Feylesof) => {
  return (
    <div className="relative max-w-md mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:pt-48 pt-32 shadow-2xl shadow-slate-600 shadow-inner-2xl rounded-2xl md:mt-32 m-16 md:max-w-2xl justify-center">
      <div className="relative max-w-md mx-auto bg-gradient-to-b from-white to-[#cfcaca] rounded-b-2xl md:max-w-2xl justify-center">
        <img className="relative w-24 h-24 md:w-48 -top-12 md:-top-24 md:h-auto rounded-full border-white border-[5px] shadow-2xl mx-auto" src={feylesofInput.photo.url} alt="" width="400" height="512" />
        <div className="flex mb-8 md:mb-16 flex-wrap justify-around">
          <div className="order-last text-center">
            <div className="sm:text-3xl text-2xl my-2">{feylesofInput.followers.length}</div>
            <div className="sm:text-lg text-sm"> Takipçiler</div>
          </div>
          <div className="order-last text-center">
            <div className="sm:text-3xl text-2xl my-2">{feylesofInput.following.length}</div>
            <div className="sm:text-lg text-sm">Takip Edilenler</div>
          </div>
          <div className="order-last text-center">
            <div className="sm:text-3xl text-2xl my-2">{feylesofInput.comments.length}</div>
            <div className="sm:text-lg text-sm">Katkıları</div>
          </div>
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-7 rounded-md group-hover:bg-opacity-0">
            Purple to blue
          </span>
        </button>
      </div>
    </div>
  );
}

export default FeylesofCard