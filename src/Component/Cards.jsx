import React, { useState } from "react";
import { LuFileText, LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Cards = ({ data, reference, onNoteChange, onDelete,onDownload }) => {
  const [note, setNote] = useState(data.note); 

 
  const handleInputChange = (e) => {
    const newNote = e.target.value; 
    setNote(newNote); 
    onNoteChange(newNote); 
  };


  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className="lg:w-60 flex-shrink-0 lg:h-80 h-56 bg-zinc-700/50 rounded-[45px] text-white py-10 lg:px-6 px-3 relative flex-wrap overflow-hidden"
    >
      <LuFileText size={24} />

      
      <textarea
        value={note} 
        onChange={handleInputChange} 
        className="w-full mt-5 h-[175px] bg-transparent overflow-hidden text-white text-sm p-2 rounded resize-none focus:outline-none"
        placeholder="Write notes here..."
      ></textarea>

      <div className="absolute top-10 right-6 cursor-pointer hover:text-red-600  transition duration-300" onClick={onDelete}>
        <IoCloseSharp  size="20px" />
      </div>

      <div className="w-full absolute bottom-0 left-[10rem]">
        <div className="flex justify-between items-center py-3 px-8 lg:mb-3">
          <span
            className="w-5 h-5 flex items-center justify-center bg-zinc-200 rounded-full cursor-pointer"
            onClick={onDownload}
          >
            <LuDownload size="10px" color="black" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
