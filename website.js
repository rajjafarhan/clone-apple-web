const Mac =document.getElementsByClassName("Mac")[0];
const hoverBox=document.getElementsByClassName("hoverBox")[0];
const heading=document.getElementsByClassName("hidehead");
Mac.addEventListener("mouseenter", () => {
    hidden(heading)
hoverBox.innerHTML=`<div class="container-fluid text-start upper transition" data-bs-theme="dark" style=" height: 500px;position:fixed; top:50px">
<div class="row  ms-3">
    <div class="col-md-3"></div>
    <div class="col-md-5 upper" >
        <div class="row ">
            <div class="col col-5">
                <p class="fw-light mt-3">shops</p>
                <ul class="mt-5" style="list-style-type: none; padding: 0%; margin: 0;">
                    <li class="fw-medium">Shop the Latest</li>
                    <li class="fw-medium">Mac</li>
                    <li class="fw-medium">Ipad</li>
                    <li class="fw-medium">Iphone</li>
                    <li class="fw-medium">Apple Watch</li>
                    <li class="fw-medium">Accessories</li>
                    
                </ul>
                
            </div>
            <div class="col col-lg-3 "><p class="fw-light mt-3">Quick link</p>
                <ul class="mt-5" style="list-style-type: none; padding: 0%; margin: 0;">
                    <li class="fw-medium">Find a store</li>
                    <li class="fw-medium">order status</li>
                    <li class="fw-medium">Financing</li>
                    <li class="fw-medium">Apple Trade in</li>
          
                </ul>
                
            </div>
            <div class="col col-lg-4">
                <p class="fw-light mt-3">shop special store</p>
                <ul class="mt-5" style="list-style-type: none; padding: 0%; margin: 0;">
                    <li class="fw-medium">Certified Refurbished</li>
                    <li class="fw-medium">Education</li>
                    <li class="fw-medium">Buisness</li>
                    <li class="fw-medium">Veterans and military</li>
                    <li class="fw-medium">Government</li>
          
                </ul>
                
            </div>
        </div>
    </div>
    <div class="col-md-5"></div>
</div>

</div> `
})
Mac.addEventListener("mouseleave",()=>{
    hoverBox.innerHTML=` `
    hiddenBack(heading);
})
function hidden(heading){
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.display = 'none';
      }

}
function hiddenBack(heading){
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.display = '';
      }

}