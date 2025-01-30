import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import { IoMdAddCircleOutline } from "react-icons/io";
const Foreground = () => {
  const ref = useRef(null);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic.",
      note: "",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic.",
      note: "",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ]);


  const handleNoteChange = (id, newNote) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, note: newNote };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const handleDelete = (id) => {
    const filteredCards = cards.filter((card) => card.id !== id);
    setCards(filteredCards);
  };

  const handleDownload = (id) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      const fileName = `notes${card.id}`
      const blob = new Blob([card.note], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${fileName}.txt`;
      link.click();
    }
  };
  const addNewCard = () => {
    const newCard = {
      id: cards.length + 1, // Ensure the ID is unique
      desc: "New Card Description",
      note: "",
      close: false,
      tag: { isOpen: false, tagTitle: "New Tag", tagColor: "gray" },
    };
    setCards([...cards, newCard]);
    setIsAddingCard(false); // Close the modal
  };

  return (
    <>
      <div ref={ref} className="w-full h-screen fixed z-3 left-0 top-0 flex gap-10 p-5 flex-wrap">
        {cards.map((card) => (
          <Cards
            key={card.id}
            data={card}
            reference={ref}
            onNoteChange={(note) => handleNoteChange(card.id, note)}
            onDelete={() => handleDelete(card.id)}
            onDownload={() => handleDownload(card.id)}
          />
        ))}

    
        <motion.div
          className="relative lg:w-60 lg:h-80 flex-wrap lg:bg-zinc-700/50 rounded-[45px] caret-transparent p-10 shadow-md  flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={() => setIsAddingCard(true)}
        >
          <span className="text-5xl text-gray-500"><IoMdAddCircleOutline lg:size="6rem" size="3rem"  /></span>
        </motion.div>
      </div>

      
      {isAddingCard && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-50 flex items-center caret-transparent justify-center">
          <div className="bg-zinc-700/50 p-5 rounded shadow-md w-96">
            <h2 className="text-lg font-bold text-slate-400 mb-4 py-2 px-4 rounded-lg">Add New Card</h2>
            <button
              className=" hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              onClick={addNewCard}
            >
              Add Card
            </button>
            <button
              className="hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              onClick={() => setIsAddingCard(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Foreground;
