import { For, onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DBTabBarState, DBTabBarProps } from "./model";
import "@db-ui/core/dist/css/02-components/tab-bar/tab-bar.css";
import { DBTab } from "../tab";
import { DBTabProps } from "../tab/model";

useMetadata({
  isAttachedToShadowDom: true,
  component: {
    includeIcon: false,
    properties: [],
  },
});

export default function DBTabBar(props: DBTabBarProps) {
  const state = useStore<DBTabBarState>({});

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
        <For each={props.tabs}>
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
