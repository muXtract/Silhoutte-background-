const display=document.querySelector("#display")
const input=document.querySelector("#image_input");
const btn1=document.querySelector("#btn1");
const btn=document.querySelector(".btn1")
const template=document.querySelector(".template")
const card1=document.querySelector("#card1")
const card2=document.querySelector("#card2")
const card3=document.querySelector("#card3")
const card4=document.querySelector("#card4")

image_input.addEventListener("change",()=>{  //when the file is selected the change listener is fired
    let reader=new FileReader();
    reader.readAsDataURL(input.files[0])
    reader.addEventListener('load',()=>{
        console.log(reader.result)
        display.innerHTML=`<img src=${reader.result} width="70%" />`;
    })
    card1.addEventListener("click",()=>{
        template.style.visibility="hidden"
        display.innerHTML=`
        
        <style> 
              
             
                .display .box{
                position: relative;
                
                width:20em;
                height:20em;
                margin: 40px;
              
                text-align:center;
            }
            .display{
                display: flex;
                justify-content: center;
              
            }
            .box img{
                position:absolute;
                mix-blend-mode:screen; 
                 top: 20%;
                 
                  left: 20%;
                object-fit:cover;
            }
            .img1{
                margin-top:30px;
            }
        </style>
        
            <div class="box">
                
                    <img class="img1" id="img1" src=${reader.result} width="70%"/>
                    <img id="img1" src=\"img1.png" width=\"70%"\ \>
               
            </div>
           `
    })
    card2.addEventListener("click",()=>{
        template.style.visibility="hidden"
        display.innerHTML=`

        <style> 
              
             
                .display .box{
                position: relative;
                
                width:20em;
                height:20em;
                margin: 40px;
                
                text-align:center;
            }
            .display{
                display: flex;
                justify-content: center;
              
            }
            
            .box img{
                position:absolute;
                mix-blend-mode:screen; 
                 top: 20%;
                 
                  left: 20%;
                object-fit:cover;
            }
            .img1{
                margin-top:30px;
            }
            
        </style>
        
            <div class="box">
                <img src=\"img2.png"  width=\"70%"\ \>
                <img class="img1" src=${reader.result}  width="70%"/>
                
            </div>
        </div>
           `
    })
    card3.addEventListener("click",()=>{
        template.style.visibility="hidden"
        display.innerHTML=`
        
       
        <style> 
              
             
        .display .box{
        position: relative;
        
        width:20em;
        height:20em;
        margin: 40px;
        
        text-align:center;
    }
    .display{
        display: flex;
        justify-content: center;
      
    }
    
    .box img{
        position:absolute;
        mix-blend-mode:screen; 
         top: 20%;
         
          left: 20%;
        object-fit:cover;
    }
    .img1{
        margin-top:30px;
    }
    
</style>
            <div class="box">
                <img  class="img1"src=${reader.result} width="70%"/>
                <img src=\"img3.png" width=\"70%"\ \>
            </div>
        </div>
           `
    })
    card4.addEventListener("click",()=>{
        template.style.visibility="hidden"
        display.innerHTML=`
        
        <style> 
              
             
        .display .box{
        position: relative;
        
        width:20em;
        height:20em;
        margin: 40px;
        
        text-align:center;
    }
    .display{
        display: flex;
        justify-content: center;
      
    }
    
    .box img{
        position:absolute;
        mix-blend-mode:screen; 
         top: 20%;
         
          left: 20%;
        object-fit:cover;
    }
    .img1{
        margin-top:30px;
    }
</style>
            <div class="box">
                <img  class="img1" src=${reader.result} width="70%"/>
                <img src=\"img4.png" width=\"70%"\ \>
            </div>
        </div>
           `
    })
})
upload.addEventListener("click",()=>{
 btn1.style.visibility="visible";
})

btn1.addEventListener("click",()=>{
 
    btn1.style.visibility="hidden";
    template.style.visibility="visible";
})





