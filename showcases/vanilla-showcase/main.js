import "./../../output/webcomponent/src/components/button/button";
import "./../../output/webcomponent/src/components/icon/icon";

document.querySelector("#app").innerHTML = `
  <main>
      <h1>Vanilla</h1>
      <div style="display: flex; gap: 4px; align-items: center">
        <db-button variant="primary">Test</db-button>
        <db-button text="Test" icon="account"></db-button>
        <db-icon icon="account"></db-icon>
      </div>
  </main>
`;
