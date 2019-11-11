import React from "react";

const Pages = props => {
  return (
    <div className="pages">
      {props.count > 1 ? (
        <svg
          onClick={props.prev}
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : null}
      {props.count < 25 ? (
        <svg
          onClick={props.next}
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      ) : null}
    </div>
  );
};
export default Pages;
