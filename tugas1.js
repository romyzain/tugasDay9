let products = [];
function addNewProduct() {
    let namaProduct = document.getElementById("nameP").value;
    let hargaProduct = document.getElementById("priceP").value;
    let category = document.getElementById("category").value;
    let condition = document.querySelector("input[name=condition]:checked").value;

    let objProduct = {
        namaProduct,
        hargaProduct,
        category,
        condition
    };
    products.push(objProduct);
    console.log(products);
    showListProduct();
}
function showListProduct() {
    let listProduct = products.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaProduct}</td>
                    <td>${element.hargaProduct}</td>
                    <td>${element.category}</td>
                    <td>${element.condition}</td>
                </tr>
            `
        )
    })
    document.getElementById('hasilProduk').innerHTML = listProduct.join('');
    document.getElementById('formProduct').reset();
}
showListProduct();

let animals = [];
function addNewAnimal() {
    let namaAnimal = document.getElementById("nameA").value;
    let hargaAnimal = document.getElementById("usiaA").value;
    let gender = document.querySelector("input[name=gender]:checked").value;
    let status = document.querySelector("input[name=stat]:checked").value;

    let objAnimal = {
        namaAnimal,
        hargaAnimal,
        gender,
        status
    };
    animals.push(objAnimal);
    console.log(animals);
    showListAnimal();
}
function showListAnimal() {
    let listAnimal = animals.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaAnimal}</td>
                    <td>${element.hargaAnimal}</td>
                    <td>${element.gender}</td>
                    <td>${element.status}</td>
                </tr>
            `
        )
    })
    document.getElementById('hasilBinatang').innerHTML = listAnimal.join('');
    document.getElementById('formAnimal').reset();
}
showListAnimal();