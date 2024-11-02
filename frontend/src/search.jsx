export default function Search({ setFilterConfig }) {
  return (
    <>
      <input
        type="text"
        onInput={(e) =>
          setFilterConfig({ type: "name", value: e.target.value || "" })
        }
        placeholder="Search"
        style={{
          padding: "10px",
          border: ".5px solid pink",
          margin: "10px",
          backgroundColor: "cyan",
        }}
      />
    </>
  );
}
