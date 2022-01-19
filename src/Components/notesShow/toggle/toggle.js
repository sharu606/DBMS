import { DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

function Toggle(sem) {
  const [sub, setSub] = useState("18MAT11 - Calculus and Linear Algebra");
  const sub_list = [
    "18MAT11 - Calculus and Linear Algebra",
    "18CHE12 - Engineering Chemistry",
    "18CPS13 - C Programming for Problem Solving",
    "18ELN14 - Basic Electronics",
    "18ME15 - Elements of Mechanical Engineering",
    "18CHEL16 - Engineering Chemistry Laboratory",
    "18CPL17 - C Programming Laboratory",
    "18EGH18	- Technical English-1"
  ];

  function selectHandler(val) {
    setSub(val);
  }

  return (
    <DropdownButton
      onSelect={selectHandler}
      id="dropdown-item-button"
      title={sub}
    >
      {sub_list.map((sub) => {
        return (
          <Dropdown.Item as="button" eventKey={sub}>
            {sub}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}

export default Toggle;
