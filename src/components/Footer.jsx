import React from "react";

function Fotter() {
  return (
    <div className="flex justify-center items-center flex-col text-black-300 mb-6 gap-2">
      <div>
        ----- Made By
        <a
          target="_blank"
          className="pl-1 text-blue-700 font-medium"
          href="https://github.com/Ujjwalb09"
        >
          Ujjwal Bhatt
        </a>
        , inspired by
        <a
          target="_blank"
          className="px-1 text-blue-700 font-medium"
          href="https://twitter.com/subhashchy/status/1744308069751025894?t=MrLV-PSnfsgv0Hg2jTz5JA&s=08"
        >
          Dukaan App UI
        </a>
        -----
      </div>
      <div className="text-black-300 underline">
        <a target="_blank" href="https://github.com/Ujjwalb09/Dukaan-App-UI">
          Get the source code
        </a>
      </div>
    </div>
  );
}

export default Fotter;
