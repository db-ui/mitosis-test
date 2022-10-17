import { useMetadata } from "@builder.io/mitosis";
import "@db-ui/core/dist/css/db-ui-core.vars.css";
import "@db-ui/core/dist/css/db-ui-core.general.css";
import "@db-ui/core/dist/css/01-elements/buttons/button.css";
import { DBButtonProps } from "./props";

export default function DBButton(props: DBButtonProps) {
  useMetadata({
    isAttachedToShadowDom: true,
  });

  return (
    <button class="elm-button" data-variant={props.variant}>
      {props.text}
      {props.children}
    </button>
  );
}
