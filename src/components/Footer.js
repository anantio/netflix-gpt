import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-between p-3">
      <span className="flex justify-between text-gray-400 font-bold text-sm">
        Contact the Dev:
        <a
          className="my-10 mx-2"
          href="https://twitter.com/anantpratap"
          target="blank"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
            alt="anantpratap"
            height="20"
            width="30"
          />
        </a>
        <a
          className="my-10 mx-2"
          href="https://linkedin.com/in/anant-pratap-singh"
          target="blank"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="anant-pratap-singh"
            height="20"
            width="30"
          />
        </a>
        <a
          className="my-10 mx-2"
          href="https://medium.com/@anantpratapsingh_5914"
          target="blank"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg"
            alt="@anantpratapsingh_5914"
            height="20"
            width="30"
          />
        </a>
      </span>
    </div>
  );
};
