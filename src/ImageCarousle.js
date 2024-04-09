
import { LitElement, html, css } from 'lit';


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
        margin: 8px;
        padding: 8px;
        width:500px;
        height:500px;
        background-color:green;
        color: black;
        position: relative;
          }

        .topRow
          {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
          }
        .currentNum
        {
            margin: 8px;
            display: flex;
            justify-content: left;
        }
        .closeButton
        {
        margin: 8px;
        
        display: flex;
            justify-content: right
        }
        .description
        {
            align-self: center;
            display: flex;
            justify-content: center;
        }
        .displayedImage
        {
            position: relative;
           width: 100%;
           height: 100%;
            
        

        }

        .imageLoop
        {
            margin: 8px;
            display: flex;
            justify-content: space-between;  
            position: absolute;
           bottom: 0;
           width: 95%;
        }
        .displayedImage
        #pic
        {
            position: absolute;
            
            left: 25%;
            top: 15%;
            width: 250px;
            height: 250px;
            
        }

    `;
  }

  render() {
    return html`
    <div class="backdrop">

    <div class="topRow">

    <div class="currentNum">
    1 of 3
    </div>

    <div class="description">
    Cool Pic
    </div>

    <div class="closeButton">
    X
</div>

</div>



    <div class="displayedImage">
    <img id="pic" src= "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg">
    </div>

    <div class="imageLoop">
        <div class="leftButton">
        <-
        </div>
        <div class = "imageThumbNails">
        [][][][]
        </div>
        <div class = "rightButton">
            ->
        </div>
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
