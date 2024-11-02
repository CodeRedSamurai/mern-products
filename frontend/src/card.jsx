
import { useEffect, useState } from "react";

export const Card = ({ cardDetails, setCartItems }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => {
        setChecked(!checked);
        checked ? setCartItems((prev) => prev.filter((item) => item !== cardDetails)) : setCartItems((prev) => [...prev, cardDetails]);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
        gap: "10px",
        padding: "5px",
        backgroundColor: "teal",
        color: "lime",
        flexWrap: "wrap",
        width: "10vw",
      }}
      className={checked ? "highlight-card" : undefined}
    >
      {Object.keys(cardDetails).map((key, index) =>
        key === "image" ? (
          <img
            style={{ width: "20px", height: "20px" }}
            key={index}
            src={cardDetails[key]}
            alt={key}
          />
        ) : (
          <p key={index}>
            {key.toUpperCase()}: {cardDetails[key]}
          </p>
        )
      )}
    </div>
  );
};

export const CardList = ({ cardDetailsList, setCartItems }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "10px",
        flexWrap: "wrap",
        maxWidth: "80vw",
      }}
    >
      {cardDetailsList.map((cardDetails, index) => (
        <Card
          key={index}
          setCartItems={setCartItems}
          cardDetails={cardDetails}
        />
      ))}
    </div>
  );
};

export const TotalCardItems = ({ cardDetailsListLength }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "10px",
        flexWrap: "wrap",
      }}
    >
      {<span>Total: {cardDetailsListLength}</span>}
    </div>
  );
};
