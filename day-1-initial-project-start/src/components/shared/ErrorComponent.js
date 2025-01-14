import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <>
      <div
        className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md my-4"
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-blue-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 10 4z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-red-600">Error</p>
            <p className="text-sm">{message}</p>
            <img src="https://blob.jortage.com/blobs/3/c73/3c73b5671917163501f4dec7cb690fa4f9b30a3b744213d7069ba04da85d2a2c4a5570d3c6ff0c737cfecf16355fddd6fd4aca4d99e6132cf271e4940b8366ee" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorComponent;
