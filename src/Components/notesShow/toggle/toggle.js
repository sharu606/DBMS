import { DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

function Toggle(sem) {
  const [sub, setSub] = useState("18MAT11 - Calculus and Linear Algebra");
  const sub_list = [
    "18MAT11 - Calculus and Linear Algebra",
    "18CHE12 - Engineering Chemistry",
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
