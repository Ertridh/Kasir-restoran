var order = [];
var total = 0;

function daftarPesanan(menu, harga) {
    order.push({menu: menu, harga: harga});
    total += harga;
    updatePesanan();
}

function updatePesanan() {
    var orderItemsElement = document.getElementById("order-items");
    var totalElement = document.getElementById("total");
    orderItemsElement.innerHTML = "";
    order.forEach(function(menu) {
        var li = document.createElement("li");
        li.textContent = menu.menu + " - Rp " + menu.harga;
        orderItemsElement.appendChild(li);
    });
    totalElement.textContent = total;
}

function checkout() {
    alert("Total pembayaran: Rp " + total);
}