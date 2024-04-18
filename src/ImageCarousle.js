
import { LitElement, html, css } from 'lit';


export class ImageCarousle extends LitElement {

  static get tag() {
    return 'image-carousle';
  }

  constructor() {
    super();
    
  this.imageList = [];
 this.imageNumber = 0;
 this.totalImageNumber = this.imageList.length;
 this.visible = false;

  }

  static get styles() 
  {
    return css`
      :host {
        position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1; /* Higher z-index to make it appear on top */
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
        justify-content: right;
        visibility: visible;
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

  firstUpdated()
  {
    document.addEventListener('image-clicked', (e) => {
      

      var url = e.target.attributes.imageurl.nodeValue;
      this.imageNumber = this.imageList.indexOf(url);
      
      if(this.visible == false)
      {
        this.visible =true;
      }

    })

    var data = document.querySelectorAll('media-image');
    data.forEach(element => {
      console.log(element.getAttribute("imageurl"))
      this.imageList.push(element.getAttribute("imageurl"))
    });
  
    this.requestUpdate();
  }

  exitClick()
  {
    this.visible = !this.visible
  }

 rightClick()
 {
  if(this.imageNumber < this.imageList.length -1)
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
  this.imageNumber = this.imageList.length -1;
}
  this.requestUpdate();
 }
 openGall()
 {
  this.visible = !this.visible;
 }

 openDialoge()
 {
  let prevIndex = this.imageNumber - 1;
    let nextIndex = this.imageNumber + 1;
    if(prevIndex < 0)
    {
      prevIndex = (prevIndex + this.imageList.length) % (this.imageList.length);
    }
    if(nextIndex >= this.totalImageNumber)
    {
      nextIndex = (nextIndex) % (this.imageList.length);
    }
  return html`
  
  <div class="backdrop"   >

    <div class="topRow">
  <p>
  <div class="slide-image-number"> 
    ${this.imageNumber +1} 
    </div> of
    <div class="total-image-number">
    ${this.imageList.length}
    </div>
  </p>
    
    
    <div class="description">
    Cool Pic
    </div>

    <div class="closeButton" @click = ${this.exitClick}>
    X
</div>

</div>



    <div class="slide-image">
    <img id="pic" src= ${this.imageList[this.imageNumber]} alt = "slide">
    </div>


    <div class="imageLoop">
        <div class="btn backwards" @click="${this.leftClick}">
        <-
        </div>
        <div class = "imageThumbNails">
        <img  id="prev" src = "${this.imageList[prevIndex]}" style=" height:50px; width:50px;">
        <img  id="curr" src = "${this.imageList[this.imageNumber]}" style=" height:50px; width:50px;">
        <img  id="Next" src = "${this.imageList[nextIndex]}" style=" height:50px; width:50px;">
        </div>
        <div class = "btn forward" @click="${this.rightClick}">
        ->
        </div>
    </div>

</div>
  
  `
 }
 closedView()
 {
  html`
  
  `
 }

  render() 
  {
   
     if(this.visible == true)
     {
      return this.openDialoge();
     }
     else
     {
      return this.closedView();
     }
     
  }

  static get properties() {
    return {
      image: {type: Array},
 imageNumber : {type: String},
 totalImageNumber: {type: String},
      images:{type: String},
      visible:{type: Boolean}
    };
  }
}

globalThis.customElements.define(ImageCarousle.tag, ImageCarousle);
