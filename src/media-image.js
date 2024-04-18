
import { LitElement, html, css } from 'lit';


export class mediaImage extends LitElement {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.imageURL = "";
    this.image =[];
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .image
      {
        width:200px;
        height:200px;
        
      }

    `;
  }

  


  render() {
    return html`

      <div class= "imageBorder">

      <img class="image" src = "${this.imageURL}">

      </div>
    
      

    `;
  }

  static get properties() {
    return {
      imageURL: {type: String}
    };
  }
}

globalThis.customElements.define(mediaImage.tag, mediaImage);

