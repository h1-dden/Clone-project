//import { MouseEvent } from "react";

function Listgroup() {
  let items = ["Delhi", "Mumbai", "Pune", "Nashik"];

  let selectedIndex = 3;

  return (
    <>
      <h1>This is my list</h1>
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listgroup;
