import React from "react";
import Button from "./Button";

const TrainingCard = ({ src, alt, title, content }) => {
  return (
    <div>
      {/* Data Science */}
      <div className="p-2 bg-white w-full flex space-x-2 rounded-small shadow-lg">
        <div className="w-1/2">
          <img className="w-3/4 p-2 " src={src} alt={alt} loading="lazy" />
        </div>
        <div className="w-3/4 flex flex-col space-y-2">
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-sm">{content}</p>
          {/* Contact Us button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmoLtyXGRhWlvXbUXo4nBPrYH6qhF9Hzmx4bNPuKARFZXYkQ/viewform"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Button
              styles="text-md text-white bg-button rounded-full px-5 py-1 shadow-lg font-semibold border-2 border-button hover:bg-white hover:text-button hover:border-button"
              label="Join Now!"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
