
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
 this.imageNumber = 0;
 this.totalImageNumber = this.image.length;
 
 

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
  if(this.imageNumber < this.totalImageNumber-1)
  this.imageNumber = this.imageNumber+1;
else
{
  this.imageNumber = 0;
}
  this.requestUpdate();
 }
 leftClick()
 {
  if(this.imageNumber > 0)
  this.imageNumber = this.imageNumber-1;
else
{
  this.imageNumber = this.totalImageNumber-1;
}
  this.requestUpdate();
 }
 


  render() {
    let prevIndex = this.imageNumber - 1;
    let nextIndex = this.imageNumber + 1;
    if(prevIndex < 0)
    {
      prevIndex = (prevIndex + this.image.length) % (this.image.length);
    }
    if(nextIndex >= this.totalImageNumber)
    {
      nextIndex = (nextIndex) % (this.image.length);
    }



    return html`
<div class="backdrop">

    <div class="topRow">
  <p>
  <div class="slide-image-number"> 
    ${this.imageNumber +1} 
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
    <img id="pic" src= ${this.image[this.imageNumber]} alt = "slide">
    </div>


    <div class="imageLoop">
        <div class="btn backwards" @click="${this.leftClick}">
        <-
        </div>
        <div class = "imageThumbNails">
        <img  id="prev" src = "${this.image[prevIndex]}" style=" height:50px; width:50px;">
        <img  id="curr" src = "${this.image[this.imageNumber]}" style=" height:50px; width:50px;">
        <img  id="Next" src = "${this.image[nextIndex]}" style=" height:50px; width:50px;">
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
      images:{type: String}
    };
  }
}

globalThis.customElements.define(ImageCarousle.tag, ImageCarousle);
