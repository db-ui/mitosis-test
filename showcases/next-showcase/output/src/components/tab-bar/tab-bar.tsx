import * as React from "react";
import { useState, useEffect } from "react";
import { DBTabBarState, DBTabBarProps } from "./model";
import "@db-ui/core/dist/css/02-components/tab-bar/tab-bar.css";
import { DBTab } from "../tab";
import { DBTabProps } from "../tab/model";

export default function DBTabBar(props: DBTabBarProps) {
  const [stylePath, setStylePath] = useState(() => null);

  useEffect(() => {
    if (props.stylePath) {
      setStylePath(props.stylePath);
    }
  }, []);

  return (
    <div role="tablist" className="cmp-tab-bar">
      {stylePath ? (
        <>
          <link rel="stylesheet" href={stylePath} />
        </>
      ) : null}

      {props.tabs ? (
        <>
          {props.tabs?.map((tab) => (
            <DBTab
              key={tab.name}
              name={tab.name}
              active={tab.active}
              label={tab.label}
              content={tab.content}
            >
              {tab.children}
            </DBTab>
          ))}
        </>
      ) : null}

      {props.children}
    </div>
  );
}
