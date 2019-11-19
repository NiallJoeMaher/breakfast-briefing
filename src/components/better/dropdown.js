import React, { useState, useRef, useEffect } from "react";
import uuid from "uuid";

import "./dropdown.scss";

const Dropdown = ({ activatorText = "Dropdown", items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef();
  const listRef = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = event => {
    if (
      listRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target)
    ) {
      return;
    }
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // clean up on unmount
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="wrap">
      <button
        ref={activatorRef}
        className="activator"
        onClick={handleClick}
        aria-haspopup="true"
        aria-controls="dropdown1"
      >
        {activatorText + ""}
      </button>
      <ul
        ref={listRef}
        role="list"
        tabIndex="-1"
        id="dropdown1"
        className={`itemList ` + (isOpen ? "active" : null)}
      >
        {items.map((item, index) => {
          return (
            <li role="listitem" key={uuid.v4()}>
              <a href={item.url}>item.text</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
