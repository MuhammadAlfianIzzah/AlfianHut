// Dmenu.innerHTML = "HALO";
function tampilkanCard(e) {
    return `<div class="col-md-6 d-flex justify-content-between" >
    <div class="card mb-3" style="width: 100%">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="img/pizza/${e.gambar}" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${e.nama}</h5>
                            <p class="card-text">${e.deskripsi}</p>
                            <p class="card-text"><small class="text-muted">Rp. ${e.harga}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
}

function Txhr(xhr) {

    return xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let menu = JSON.parse(this.responseText).menu;
            // JSON.parse(menu);
            let Dmenu = document.getElementsByClassName("menu")[0];
            let card = '';
            menu.forEach(e => {
                if (e.kategori) {
                    card += tampilkanCard(e)
                }
            });
            Dmenu.innerHTML = card;
        }
    }

}
let xhr = new XMLHttpRequest();
Txhr(xhr);
xhr.open("GET", "js/pizza.json", true);
xhr.send();


let menu = document.querySelectorAll(".nav-item");
document.addEventListener("click", function (e) {
    let target = e.target;
    if (target.classList.contains("nav-item")) {
        menu.forEach((e) => {
            e.classList.remove("active");
        });
        target.classList.add("active");
        kategori = target.innerHTML;
        if (kategori == "All Menu") {
            let xhr = new XMLHttpRequest();
            Txhr(xhr);
            xhr.open("GET", "js/pizza.json", true);
            xhr.send();
        } else if (kategori == kategori) {
            let xhr = new XMLHttpRequest();
            Tkategori(xhr, kategori);
            xhr.open("GET", "js/pizza.json", true);
            xhr.send();
        }
    }
})

function Tkategori(xhr, kategori) {
    return xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let menu = JSON.parse(this.responseText).menu;
            let Dmenu = document.getElementsByClassName("menu")[0];
            let card = '';
            menu.forEach(e => {
                if (e.kategori == kategori.toLowerCase()) {
                    card += tampilkanCard(e);
                }
            });
            Dmenu.innerHTML = card;
        }
    }
}
// console.log(xhr);