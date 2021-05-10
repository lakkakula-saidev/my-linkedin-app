import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options1 = [
  { key: 1, text: "Intro", value: 1 },
  { key: 2, text: "About", value: 2 },
  { key: 3, text: "Featured", value: 3 },
];

export const Open_to = () => (
  <Menu compact>
    <Dropdown text="Open to" options={options1} simple item />
  </Menu>
);

const options2 = [
  { key: 1, text: "Intro", value: 1 },
  { key: 2, text: "About", value: 2 },
  { key: 3, text: "Featured", value: 3 },
];

export const Add_profile = () => (
  <Menu compact>
    <Dropdown text="Add profile section" options={options2} simple item />
  </Menu>
);

const options3 = [
  { key: 1, text: "Intro", value: 1 },
  { key: 2, text: "About", value: 2 },
  { key: 3, text: "Featured", value: 3 },
];

export const More = () => (
  <Menu>
    <Dropdown text="More..." options={options3} simple item />
  </Menu>
);
