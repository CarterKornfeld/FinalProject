
import { LitElement, html, css } from 'lit';


export class mediaImage extends LitElement {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

    `;
  }

  render() {
    return html`
    
    
    `;
  }

  static get properties() {
    return {
      
    };
  }
}

globalThis.customElements.define(mediaImage.tag, mediaImage);

