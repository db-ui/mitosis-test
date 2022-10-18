import "./../../output/webcomponent/src/components/button/button";

document.querySelector("#app").innerHTML = `
  <div>
    <db-button variant="primary">Test</db-button>
    <db-button text="Test"></db-button>
  </div>
`;
