import { onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DBIconState, DBIconWcProps, DBIconProps } from "./model";
import "@db-ui/core/dist/css/db-ui-core.vars.css";
import "@db-ui/core/dist/css/db-ui-core.general.css";

useMetadata({
  isAttachedToShadowDom: true,
});

export default function DBIcon(props: DBIconProps & DBIconWcProps) {
  const state = useStore<DBIconState>({
    stylePath: "",
  });

  onMount(() => {
    if (props.stylePath) {
      state.stylePath = props.stylePath;
    }
  });

  return (
    <span
      data-icon={props.icon}
      aria-hidden="true"
    >
      <Show when={state.stylePath}>
        <link rel="stylesheet" href={state.stylePath} />
      </Show>
    </span>
  );
}
