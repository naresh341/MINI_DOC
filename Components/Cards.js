import React from "react";
import { LuFileText } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Cards = ({ data,reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }}  className="w-60 flex-shrink-0 h-72 bg-zinc-700/50 rounded-[45px] text-white py-10 px-6 relative overflow-hidden">
      <LuFileText />
      <p className="text-sm mt-5 text-semibold leading-tight">
        {data.desc}
      </p>
      <div className="w-full   absolute bottom-0 left-0  ">
        <div className="flex justify-between align-centerpy-3 px-8 mb-3">
          <h1 className="text-xs">{data.filesize}</h1>
          <span className=" w-5 h-5 flex items-center justify-center bg-zinc-200 rounded-full">
            {/* ternary operator */}
            {data.close ? <IoCloseSharp color="black" size="10px"/>: <LuDownload size="10px" color="black" />}
          
          </span>
        </div>
        {data.tag.isOpen &&(
            <div className={`tag py-3 w-full ${data.tag.tagColor==="green"?"bg-green-600":"bg-blue-600"} flex justify-center text-center`}>
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
        </div>
            )
        }
      </div>
    </motion.div>
  );
};

export default Cards;
