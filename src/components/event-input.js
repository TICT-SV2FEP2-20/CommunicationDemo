import { LitElement, html, css } from 'lit';

export default class EventInput extends LitElement {
  static styles = css``;

  static properties = {
    input: {
      type: String,
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
    const myEvent = new CustomEvent('input-event', { detail: { inputValue: this.input }, bubbles: true, composed: true });
    this.dispatchEvent(myEvent);
  }
}

customElements.define('event-input', EventInput);
