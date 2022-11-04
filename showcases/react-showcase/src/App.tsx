import { DBButton, DBIcon } from "../../../output/react/src/";

function App() {
  return (
    <main>
      <h1>React</h1>
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <DBButton variant="primary">Test</DBButton>
        <DBButton text="Test" icon="account" />
        <DBIcon icon="account" />
      </div>
    </main>
  );
}

export default App;
