import * as React from "react";
import { useState, useEffect } from "react";
import { DBIconState, DBIconProps } from "./model";

export default function DBIcon(props: DBIconProps) {
  const [stylePath, setStylePath] = useState(() => null);

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
