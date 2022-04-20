import { LitElement, html, css } from 'lit';

export default class EventOutput extends LitElement {
  static styles = css``;

  static properties = {
    output: {
      type: String,
    },
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('input-event', (e) => this.eventHandler(e));
  }

  // Erg belangrijk dat er aan het einde de eventListeners weer opgeruimt worden.
  // Als dat niet gebeurt kunnen er problemen ontstaan.
  disconnectedCallback() {
    window.removeEventListener('input-event', this.eventHandler);
    super.disconnectedCallback();
  }

  eventHandler(event) {
    this.output = event.detail.inputValue;
  }

  render() {
    return html`
      <p>
      Output: ${this.output}
      </p>
    `;
  }
}

customElements.define('event-output', EventOutput);
