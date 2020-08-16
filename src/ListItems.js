import React from "react";

import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
// npm i -S react-flip-move for animation

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((el) => {
    return (
      <div className="list" key={el.key}>
        <p>
          {/* {el.text} */}
          <input
            type="text"
            id={el.key}
            value={el.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, el.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItems(el.key)}
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
