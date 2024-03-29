import { For, onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DBTabBarState, DBTabBarProps } from "./model";
import "@db-ui/core/dist/css/02-components/tab-bar/tab-bar.css";
import { DBTab } from "../tab";
import { DBTabProps } from "../tab/model";

useMetadata({
  isAttachedToShadowDom: true,
  component: {
    includeIcon: false,
    properties: [
      { name: "name", type: "SingleLine.Text" },
      {
        name: "tabs",
        type: "Enum",
        values: [{ key: "TODO", name: "TODO", value: "TODO" }],
      },
    ],
  },
});

export default function DBTabBar(props: DBTabBarProps) {
  const state = useStore<DBTabBarState>({
    convertTabs(tabs: DBTabProps[] | string | undefined) {
      try {
        if (typeof tabs === "string") {
          return JSON.parse(tabs);
        } else {
          return tabs;
        }
      } catch (e) {
        console.error(e);
      }

      return undefined;
    },
  });

  onMount(() => {
    if (props.stylePath) {
      state.stylePath = props.stylePath;
    }
  });

  return (
    <div className="cmp-tab-bar" role="tablist">
      <Show when={state.stylePath}>
        <link rel="stylesheet" href={state.stylePath} />
      </Show>

      <Show when={props.tabs}>
        <For each={state.convertTabs(props.tabs)}>
          {(tab: DBTabProps) => (
            <DBTab
              key={tab.name}
              name={tab.name}
              active={tab.active}
              label={tab.label}
              content={tab.content}
            >
              {tab.children}
            </DBTab>
          )}
        </For>
      </Show>
      {/* TODO: Overwrite children names if prop.name is set */}
      {props.children}
    </div>
  );
}
