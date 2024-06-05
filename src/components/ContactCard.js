import React from "react";

const ContactCard = ({ img, alt, content }) => {
  return (
    <div className="flex bg-white p-2 space-y-2 rounded-xl shadow-xl content-center">
      <div className="bg-offWhite shadow-xl rounded-full p-2 h-3/4 lg:h-1/2 content-center self-center">
        <img src={img} alt={alt} />
      </div>
      <div className="px-2 content-center">
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ContactCard;
