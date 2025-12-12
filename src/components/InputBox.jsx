import { useState } from "react"

function InputBox({ onAdd }) {
  const [text, setText] = useState("");// Local state for typed text
  // This function runs when user clicks "Add"
  function handleAdd() {
    if (text.trim() === "") return; // Prevent adding empty/blank notes
                            // (trim removes spaces; if empty, stop function)
    onAdd(text); // Send the text back to parent App.jsx via onAdd prop
    setText(""); // Clear the input box after adding
  }

  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "8px", alignItems: "center" }}>
      <input
        value={text} // what the user sees in the input box
        onChange={(e) => setText(e.target.value)} // update the text variable
        placeholder="Enter a note"
        style={{ width:"250px" }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
          }
        }}
      />

      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
      {/*Extension: change button color → style={{ backgroundColor:"lightblue" }}*/}
      {/*Extension: add/change text/icon inside input or button */}
    </div>
  );
}

export default InputBox;
