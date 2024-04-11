
import { LitElement, html, css } from 'lit';


export class ImageCarousle extends LitElement {

  static get tag() {
    return 'image-carousle';
  }

  constructor() {
    super();
    
  this.image = ["https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
   "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
  "https://png.pngtree.com/thumb_back/fh260/background/20240407/pngtree-photo-of-nature-image_15708235.jpg",
"https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"];
 this.imageNumber = 1;
 this.totalImageNumber = 5;
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
        .slide-image {
  width: 100%;
  min-height: 200px;
  height: auto;
  max-height: 400px;
  padding: 10px;
  margin: 0 auto;
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



 rightClick()
 {
  console.log("hi")
  if(this.imageNumber < this.totalImageNumber)
  this.imageNumber = this.imageNumber+1;
else
{
  this.imageNumber = 1;
}
  this.requestUpdate();
 }
 leftClick()
 {
  if(this.imageNumber > 1)
  this.imageNumber = this.imageNumber-1;
else
{
  this.imageNumber = this.totalImageNumber;
}
  this.requestUpdate();
 }
 


  render() {
    return html`
    <div class="backdrop">

    <div class="topRow">
  <p>
  <div class="slide-image-number"> 
    ${this.imageNumber}
    </div> of
    <div class="total-image-number">
    ${this.totalImageNumber}
    </div>
  </p>
    
    
    <div class="description">
    Cool Pic
    </div>

    <div class="closeButton">
    X
</div>

</div>



    <div class="slide-image">
    <img id="pic" src= ${this.image[this.imageNumber-1]} alt = "slide">
    </div>


    <div class="imageLoop">
        <div class="btn backwards" @click="${this.leftClick}">
        <-
        </div>
        <div class = "imageThumbNails">
        [][][][]
        </div>
        <div class = "btn forward" @click="${this.rightClick}">
        ->
        </div>
    </div>

    </div>
    
    `;
  }

  static get properties() {
    return {
      image: {type: Array},
 imageNumber : {type: String},
 totalImageNumber: {type: String},
      
    };
  }
}

globalThis.customElements.define(ImageCarousle.tag, ImageCarousle);
