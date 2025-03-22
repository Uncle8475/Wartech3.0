import { useState } from "react";

const colors = ["#107e57", "#a44322", "#7b337d"];

const ImagePopup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const handleOpen = () => {
    setIsOpen(true);
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleOpen}
        className="text-white px-3 py-2 rounded-md mt-10 transition-all duration-300"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        See more
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative backdrop-blur-sm p-5 rounded-lg bg-white bg-opacity-10">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
              aria-label="Close popup"
            >
              ✕
            </button>
            <br />
            <img
              src={imageUrl}
              alt="Popup"
              className="max-w-[90vw] max-h-[80vh] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
