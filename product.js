class Product {

    constructor(id, name, categoryId, saleDate, qulity, isDelete) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.saleDate = saleDate;
        this.qulity = qulity;
        this.isDelete = isDelete;
    }
}

const product = new Product();

const listProducts = [];
listProducts[0] = new Product(0, "CPU", 1, new Date(2022, 11, 13), 9, false);
listProducts[1] = new Product(1, "Mainboard", 1, new Date(2022, 10, 13), 0, false);
listProducts[2] = new Product(2, "RAM", 1, new Date(2022, 9, 13), 9, true);
listProducts[3] = new Product(3, "SSD", 1, new Date(2022, 8, 13), 9, false);
listProducts[4] = new Product(4, "VGA", 1, new Date(2022, 7, 13), 0, false);
listProducts[5] = new Product(5, "PSU", 1, new Date(2022, 6, 13), 9, true);
listProducts[6] = new Product(6, "Monitor", 2, new Date(2022, 5, 13), 9, false);
listProducts[7] = new Product(7, "Case", 1, new Date(2022, 4, 13), 0, false);
listProducts[8] = new Product(8, "Keyboard", 2, new Date(2022, 3, 13), 9, true);
listProducts[9] = new Product(9, "Mouse", 2, new Date(2022, 2, 13), 9, false);

console.log(listProducts);

function filterProductById(listProducts, id) {
    for (var i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id == id) {
            return listProducts[i];
        }
    }
    return null;
}

console.log(filterProductById(listProducts, 1));

function filterProductByQulity(listProducts) {
    const newList = [];
    var j = 0;
    for (var i = 0; i < listProducts.length; i++) {
        if (listProducts[i].qulity > 0 && !listProducts[i].isDelete) {
            newList[j] = listProducts[i];
            j++;
        }
    }
    return newList;
}

console.log(filterProductByQulity(listProducts));

function filterProductBySaleDate(listProducts) {
    const newList = [];
    var j = 0;
    for (var i = 0; i < listProducts.length; i++) {
        //Compare 2 Date() must have new
        if (listProducts[i].saleDate > new Date() && !listProducts[i].isDelete) {
            newList[j] = listProducts[i];
            j++;
        }
    }
    return newList;
}

console.log(filterProductBySaleDate(listProducts));

function totalProduct(listProducts) {
    var sum = 0;
    for (var i = 0; i < listProducts.length; i++) {
        if (!listProducts[i].isDelete) {
            sum += listProducts[i].qulity;
        }
    }
    return sum;
}

console.log(totalProduct(listProducts));

function isHaveProductInCategory(listProducts, categoryId) {
    for (var i = 0; i < listProducts.length; i++) {
        if (listProducts[i].categoryId == categoryId) {
            return true;
        }
    }
    return false;
}

console.log(isHaveProductInCategory(listProducts, 3));


function filterProductBySaleDate2(listProducts) {
    newList = [];
    for (var i = 0; i < listProducts.length; i++) {
        //Compare 2 Date() must have new
        if (listProducts[i].saleDate > new Date() && !listProducts[i].isDelete) {
            newList.push("ID: " + listProducts[i].id + ", name: " + listProducts[i].name);
        }
    }
    return newList;
}

console.log(filterProductBySaleDate2(listProducts));