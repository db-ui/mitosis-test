import { onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DBButtonProps, DBButtonState, DBButtonWcProps } from "./model";
import "@db-ui/core/dist/css/db-ui-core.vars.css";
import "@db-ui/core/dist/css/db-ui-core.general.css";
import "@db-ui/core/dist/css/01-elements/buttons/button.css";

useMetadata({
  isAttachedToShadowDom: true,
});

export default function DBButton(props: DBButtonProps & DBButtonWcProps) {
  const state = useStore<DBButtonState>({
    stylePath: "",
  });

  onMount(() => {
    if (props.stylePath) {
      state.stylePath = props.stylePath;
    }
  });

  return (
    <button class="elm-button" data-variant={props.variant}>
      <Show when={state.stylePath}>
        <link rel="stylesheet" href={state.stylePath} />
      </Show>
      <Show when={props.text}> {props.text}</Show>
      {props.children}
    </button>
  );
}
