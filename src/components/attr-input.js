import { LitElement, html, css } from 'lit';

export default class AttrInput extends LitElement {
  static styles = css``;

  static properties = {
    input: {
      type: String,
      reflect: true,
    },
  };

  render() {
    return html`
    <p>
      Input: <input type="text" @input=${this.valueChanged} value="${this.input}">
    </p>
    `;
  }

  valueChanged(event) {
    this.input = event.target.value;
  }
}

customElements.define('attr-input', AttrInput);
