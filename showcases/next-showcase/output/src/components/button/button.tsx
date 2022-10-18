import * as React from "react";
import { useState, useEffect } from "react";
import { DBButtonProps, DBButtonState, DBButtonWcProps } from "./model";
import "@db-ui/core/dist/css/db-ui-core.vars.css";
import "@db-ui/core/dist/css/db-ui-core.general.css";
import "@db-ui/core/dist/css/01-elements/buttons/button.css";

export default function DBButton(props: DBButtonProps & DBButtonWcProps) {
  const [stylePath, setStylePath] = useState(() => "");

  useEffect(() => {
    if (props.stylePath) {
      setStylePath(props.stylePath);
    }
  }, []);

  return (
    <button className="elm-button" data-variant={props.variant}>
      {stylePath ? (
        <>
          <link rel="stylesheet" href={stylePath} />
        </>
      ) : null}

      {props.text ? <>{props.text}</> : null}

      {props.children}
    </button>
  );
}
