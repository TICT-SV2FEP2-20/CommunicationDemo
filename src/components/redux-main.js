import { html, css, LitElement } from 'lit';

export default class ReduxMain extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-areas: 
        "header header"
        "input output";
      grid-template-rows: 0.5fr 1fr;
      grid-template-columns: 1fr 1fr;
      background-color: aqua;
      margin: 10px;
    }

    h2 {
      grid-area: header;
      text-align: center;
    }

    redux-input {
      grid-area: input;
      background-color: yellow;
      align-self: center;
      margin: 10px;
      padding: 10px;
    }

    redux-output {
      grid-area: output;
      background-color: lawngreen;
      align-self: center;
      margin: 10px;
      padding: 10px;
    }
  `;

  static properties = {};

  render() {
    return html`
      <h2>Communicatie via de Redux Store</h2>
      <redux-input></redux-input>
      <redux-output></redux-output>
    `;
  }
}

customElements.define('redux-main', ReduxMain);
