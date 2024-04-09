
import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class ImageCarousle extends LitElement {

  static get tag() {
    return 'image-carousle';
  }

  constructor() {
    super();
    this.title = "image-carousle";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .backdrop
      {
        width:500px;
        height:500px;
        background-color:blue;
        color: black;
          }
    `;
  }

  render() {
    return html`
    <div class="backdrop">
        <div class=body>
        <div id=text1> askfhaslfhldifhkalchaoshlfasifhkalschalshlishalsfhalsfhlasf.halhsf</div>
        <media-image></media-image>
        </div>
    


    </div>
    
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(ImageCarousle.tag, ImageCarousle);
