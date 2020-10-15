import React from "react";

const render = (condition = false, children = null) => {
  console.log('condition', condition);
  return condition ? children : null;
};

export const If = (props) => {
  return React.Children.map(props.children, (child) =>
    React.cloneElement(child, {
      name: "sample",
      condition: props.condition,
    })
  );
};

export const Then = (props) => render(props.condition, props.children);
export const Else = (props) => render(!props.condition, props.children);