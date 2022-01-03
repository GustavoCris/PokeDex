var urlList = `https://pokeapi.co/api/v2/pokemon/`
const modalsearch = `https://pokeapi.co/api/v2/pokemon/`
var newmodal

function GetInfo(urlData) {
    document.querySelector("#morebtn") ? document.querySelector("#morebtn").disabled = false : null
    document.querySelector("#morebtn") ? document.querySelector("#morebtn").innerHTML = "Show more!" : null
    return $.ajax({
        type: "GET",
        url: urlData,
        async: false
    })
}

async function getList() {
    document.querySelector("#morebtn") ? document.querySelector("#morebtn").disabled = true : null
    document.querySelector("#morebtn") ? document.querySelector("#morebtn").innerHTML = "Loading..." : null
    await fetch(urlList)
        .then(response => response.json())
        .then(function(listData) {
            urlList = listData.next
            pokelist(listData)
        })
}

function modal(modallink) {
   
    return $.ajax({
        type: "GET",
        url: modallink,
        async: false 
    }).done(function(modalData) {
        console.log("puutz");
        resultDetail = modalData
        pokeinfo(modalData)
        document.querySelector(".alert-home").classList.add("d-none")
        document.querySelector("#spinner").innerHTML = ""
    }).fail(function(xhr) {
        xhr.status == 404? notfound(): other()
        resultDetail = null
        document.querySelector("#spinner").innerHTML = ""
    })
}