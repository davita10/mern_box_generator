import { useState } from "react";

const Form = () => {
  const [colorArr, setColorArr] = useState([]);
  const [color, setColor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setColorArr([...colorArr, color]);
  };

  return (
    <div>
      <h1 className="mt-5">Box Generator</h1>
      <form
        onSubmit={submitHandler}
        className=" form-group mt-5 mb-5 col-6 mx-auto border rounded p-3"
      >
        <label className="form-label mt-3">Color:</label>
        <input
          type="text"
          className="form-control mt-5 mb-5"
          value={color}
          //   value={prop} resets form to clear state
          onChange={(e) => setColor(e.target.value)}
        />
        <button>Add Color</button>
      </form>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {colorArr.map((color) => {
          return (
            <div
              className="d-flex"
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: color,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
