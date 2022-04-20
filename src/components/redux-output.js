import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../service/AppService';

export default class ReduxOutput extends connect(store)(LitElement) {
  static styles = css``;

  static properties = {
    output: {
      type: String,
    },
  };

  constructor() {
    super();
    this.output = '';
  }

  stateChanged(state) {
    this.output = state.inputReducer.value;
  }

  render() {
    return html`
      <p>
      Output: ${this.output}
      </p>
    `;
  }
}

customElements.define('redux-output', ReduxOutput);
