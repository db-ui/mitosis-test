import * as React from "react";
import { useState, useEffect } from "react";
import { DBIconState, DBIconWcProps, DBIconProps } from "./model";
import "@db-ui/core/dist/css/db-ui-core.vars.css";
import "@db-ui/core/dist/css/db-ui-core.general.css";

export default function DBIcon(props: DBIconProps & DBIconWcProps) {
  const [stylePath, setStylePath] = useState(() => "");

  useEffect(() => {
    if (props.stylePath) {
      setStylePath(props.stylePath);
    }
  }, []);

  return (
    <span aria-hidden="true" data-icon={props.icon}>
      {stylePath ? (
        <>
          <link rel="stylesheet" href={stylePath} />
        </>
      ) : null}
    </span>
  );
}
