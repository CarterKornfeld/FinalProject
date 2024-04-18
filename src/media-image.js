
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

  imageClicked()
  {
    console.log('Image clicked')
    const evt = new CustomEvent("image-clicked", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
      opened: true,
      invokedBy: this.invokedBy,
      },
      });
      this.dispatchEvent(evt);
  }


  render() {
    return html`

      <div class= "imageBorder" @click = "${this.imageClicked}">

      <img class="image"  src = "${this.imageURL}">

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

