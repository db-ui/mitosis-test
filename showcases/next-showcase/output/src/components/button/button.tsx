import * as React from "react";
import { useState, useEffect } from "react";
import { DBButtonProps, DBButtonState } from "./model";
import "@db-ui/core/dist/css/01-elements/buttons/button.css";
import { DBIcon } from "../icon";

export default function DBButton(props: DBButtonProps) {
  const [stylePath, setStylePath] = useState(() => null);

  useEffect(() => {
    if (props.stylePath) {
      setStylePath(props.stylePath);
    }
  }, []);

  return (
    <button
      className="elm-button"
      data-variant={props.variant}
      onClick={(event) => {
        alert(`Button: ${props.text} works.`);
      }}
    >
      {stylePath ? (
        <>
          <link rel="stylesheet" href={stylePath} />
        </>
      ) : null}

      {props.icon ? (
        <>
          <DBIcon icon={props.icon} />
        </>
      ) : null}

      {props.text ? <>{props.text}</> : null}

      {props.children}
    </button>
  );
}
