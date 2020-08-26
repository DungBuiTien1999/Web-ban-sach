let num = document.getElementById("qty__input").value;

substractQty = () => {
    if(num == 1){
        document.getElementById("qty__input").value = 1;
        return;
    }
    num--;
    document.getElementById("qty__input").value = num;
}

addQty = () => {
    num++;
    document.getElementById("qty__input").value = num;
}

function btnAddToCart(){
    window.alert("Đã thêm sản phẩm vào giỏ");
}