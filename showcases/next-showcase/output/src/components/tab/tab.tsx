import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { DBTabState, DBTabProps } from "./model";
import { uuid } from "../../utils";

export default function DBTab(props: DBTabProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState(
    () =>
      "ID_WILL_BE_OVERWRITE_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARE_A_JAVA_DEVELOPER"
  );

  const [stylePath, setStylePath] = useState(() => null);

  useEffect(() => {
    setId(uuid());
    if (props.stylePath) {
      setStylePath(props.stylePath);
    }
    if (props.active) {
      inputRef.current?.click();
    }
  }, []);

  return (
    <>
      {stylePath ? (
        <>
          <link rel="stylesheet" href={stylePath} />
        </>
      ) : null}

      <input type="radio" ref={inputRef} name={props.name} id={id} />

      <label role="tab" htmlFor={id}>
        {props.label}
      </label>

      <section role="tabpanel" id={"content-" + id}>
        {props.content ? <>{props.content}</> : null}

        {props.children}
      </section>
    </>
  );
}
