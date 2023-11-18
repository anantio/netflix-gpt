import React, { useState } from "react";

const ReadMoreText = ({ content, maxCharacterCount }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const resultContent = isTruncated
    ? content.slice(0, maxCharacterCount) + "..."
    : content;
  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <div className="py-5 text-lg w-1/3">
      <p>{resultContent}</p>
      {content.length > maxCharacterCount && (
        <button className="text-white font-bold" onClick={toggleIsTruncated}>
          {isTruncated ? "(Show more)" : "(Show less)"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreText;
