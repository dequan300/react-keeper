import React from "react";

function footer() {
  let date = new Date().getFullYear();
  return (
    <footer className="low">
      <p>Copyright {date} </p>
    </footer>
  );
}

export default footer;
