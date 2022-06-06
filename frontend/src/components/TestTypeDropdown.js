import React from 'react';

export default function TestTypeDropDown() {
  return (
    <div>
      <label>
        Choose a testing type.
        <select>
          <option value="TDD">Test Driven Development</option>
          <option value="ATDD">Acceptance Test Driven Development</option>
          <option value="BDD">Behaviour Driven Development</option>
          <option value="ET">Exploratory Testing</option>
          <option value="SBT">Session Based Testing</option>
        </select>
      </label>
    </div>
  );
};