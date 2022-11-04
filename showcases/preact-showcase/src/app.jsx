import { DBButton, DBIcon } from "../../../output/preact/src";

export function App() {
  return (
    <main>
      <h1>Preact</h1>
      <div>
        <DBButton variant="primary">Test</DBButton>
        <DBButton text="Test" icon="account" />
        <DBIcon icon="account" />
      </div>
    </main>
  );
}
