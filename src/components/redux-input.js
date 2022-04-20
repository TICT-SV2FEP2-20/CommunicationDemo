import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../service/AppService';
import { InputService } from '../service/InputService';

export default class ReduxInput extends connect(store)(LitElement) {
  static styles = css``;

  static properties = {
    input: {
      type: String,
    },
  };

  constructor() {
    super();
    this.inputService = new InputService();
  }

  render() {
    return html`
    <p>
      Input: <input type="text" @input=${this.valueChanged} value="${this.input}">
    </p>
    `;
  }

  valueChanged(event) {
    this.input = event.target.value;
    this.inputService.addInput(this.input);
  }
}

customElements.define('redux-input', ReduxInput);
