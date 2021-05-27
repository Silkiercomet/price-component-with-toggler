let price = document.querySelectorAll(".price");
let switcher = document.querySelector("#switcher");

const priceChange = () =>{
    if(switcher.checked == false){
        price[0].innerHTML = '&dollar;199.99';
        price[1].innerHTML = '&dollar;249.99';
        price[2].innerHTML = '&dollar;399.99';
    }else{
        price[0].innerHTML = '&dollar;19.99';
        price[1].innerHTML = '&dollar;24.99';
        price[2].innerHTML = '&dollar;39.99';
    }
    
}
switcher.addEventListener("click",priceChange)