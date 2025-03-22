import React from "react";

const Sponsors = () => {
  return (
    <div className="w-full bg-black py-10 flex justify-center">
      <div className="flex space-x-10 items-center">
        {["sponsor1.png", "sponsor2.png", "sponsor3.png", "sponsor4.png"].map(
          (logo, index) => (
            <img
              key={index}
              src={`/${logo}`}
              alt={`Sponsor ${index + 1}`}
              className="h-20 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Sponsors;
