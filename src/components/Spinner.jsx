import React, { useEffect } from "react";
import { CircleLoader } from "react-spinners";
import './Spinner.css';

const Spinner = () => {
  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className="sweet-loading">
        <CircleLoader size={120} color={"#84fab0"} loading={true} />
      </div>
      <div className="cofee">
        <span>Loading… almost there</span>
      </div>
    </>
  );
};

export default Spinner;
