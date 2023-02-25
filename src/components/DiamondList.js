import React from "react";
import { useNavigate } from 'react-router-dom';
function DiamondList() {
  const diamonds = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 9000000000) + 1000000000
  );
  const navigate = useNavigate();

  const handleDiamondClick = (diamond) => {
    navigate(`/diamond/${diamond}`);
  };

  return (
    <div>
      <h1>Diamond List</h1>
      <ul>
        {diamonds.map((diamond) => (
          <li key={diamond} className="diamond-link" onClick={() => handleDiamondClick(diamond)}>
            {diamond}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiamondList;
