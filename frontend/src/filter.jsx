export default function Filter({ data, setFilterConfig }) {
  const filterSet = [...new Set(data.map((item) => item && item.type))];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          padding: "2px",
          backgroundColor: "turquoise",
          maxWidth: "80vw",
        }}
      >
        {filterSet.map((type, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                padding: "10px",
              }}
            >
              {!index && type && (
                <>
                  <label htmlFor="index">All</label>
                  <input
                    id={index}
                    type="radio"
                    value="All"
                    name="type"
                    defaultChecked
                    onClick={(e) => setFilterConfig(e.target.value)}
                  />
                  |
                </>
              )}
              {type && (
                <>
                  <label htmlFor="index">{type}</label>
                  <input
                    id={index}
                    type="radio"
                    value={type}
                    name="type"
                    onClick={(e) =>
                      setFilterConfig({
                        type: "type",
                        value: e.target.value || "",
                      })
                    }
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
