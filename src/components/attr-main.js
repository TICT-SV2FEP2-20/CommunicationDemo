import { html, css, LitElement } from 'lit';

export default class AttrMain extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-areas: 
        "header header"
        "input output";
      grid-template-rows: 0.5fr 1fr;
      grid-template-columns: 1fr 1fr;
      background-color: coral;
      margin: 10px;
    }

    h2 {
      grid-area: header;
      text-align: center;
    }

    attr-input {
      grid-area: input;
      background-color: yellow;
      align-self: center;
      margin: 10px;
      padding: 10px;
    }

    attr-output {
      grid-area: output;
      background-color: lawngreen;
      align-self: center;
      margin: 10px;
      padding: 10px;
    }
  `;

  static properties = {
    textvalue: {
      type: String,
      hasChanged(newValue, oldValue) {
        console.log(`ATTR-MAIN: NEW: ${newValue}, OLD: ${oldValue}`);
      },
    },
  };

  constructor() {
    super();
    this.textvalue = 'Testing';
  }

  render() {
    // Probleem is dat Lit alleen een 1-way binding ondersteund, en geen 2-way binding.
    // Dit maakt dat er wel vanuit de main een attribuut meegegeven kan worden aan een
    // ander component, maar dat de reflect van het andere component geen impact heeft op
    // de variabele die we vanuit dit component meegeven.
    // Anders was de hasChanged aangeroepen.
    // => De mediator pattern oplossing is bij Lit vanwege het ontbreken van de 2-way 
    // binding helaas geen optie.
    return html`
      <h2>
        Communicatie via de attributen [Mediator Pattern]<br/>
        <i>(Zie commentaar in de code)</i>
      </h2>
      <attr-input input="${this.textvalue}"></attr-input>
      <attr-output output="${this.textvalue}"></attr-output>
    `;
  }
}

customElements.define('attr-main', AttrMain);
