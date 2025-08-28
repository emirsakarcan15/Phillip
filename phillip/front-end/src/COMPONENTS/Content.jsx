import React from "react";

const boxCount = Array.apply(null, Array(100));

const Content = () => {
  return (
    <div id="content">
      <div className="hero">
        <img src="https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80" />
      </div>
      {boxCount.map((box, index) => (
        <div className="box" key={index} />
      ))}
    </div>
  );
};

export default Content;