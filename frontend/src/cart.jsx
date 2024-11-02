export default function Cart({ cartItems }) {
  return (
    <>
      <div
        key={"divouter"}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "fixed",
          top: "0",
          right: "0",
          maxHeight: "90vh",

          overflowY: "scroll",
          backgroundColor: "seagreen",
          color: "lime",
          width: "20vw",
        }}
        className="highlight-card"
      >
        <button
          style={{
            margin: "10px",
            padding: "5px",
            backgroundColor: "gold",
            width: `150px`,
          }}
        >
          {"TOTAL"} : {cartItems.reduce((acc, item) => acc + item.price, 0)}
        </button>
        <hr />
        {cartItems.map((cartItem) => (
          <>
            <div
              key={`div-${cartItem.name}`}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <button
                style={{
                  margin: "2px",
                  padding: "10px",
                  backgroundColor: "cyan",
                  width: `150px`,
                }}
                key={cartItem.name}
              >
                {cartItem.name} : {cartItem.price}
              </button>
              <span style={{ fontSize: "50px" }}> - </span>
              <span style={{ fontSize: "30px" }}>1 </span>
              <span style={{ fontSize: "50px" }}> + </span>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
