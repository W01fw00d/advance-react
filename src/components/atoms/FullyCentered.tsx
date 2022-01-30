import "./FullyCentered.css";

function FullyCentered() {
  return (
    <div
      style={{
        // Also needs html, body, #root, .App { height: 100%;} ; check the css file
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div> Center </div>
    </div>
  );
}

export default FullyCentered;
