import { LitElement, html, css } from 'lit';

export default class AttrOutput extends LitElement {
  static styles = css``;

  static properties = {
    output: {
      type: String,
    },
  };

  render() {
    return html`
      <p>
      Output: ${this.output}
      </p>
    `;
  }
}

customElements.define('attr-output', AttrOutput);
