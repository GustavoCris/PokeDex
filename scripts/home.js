getList()

var urlData
var resultDetail
var badgeValue
var pokelink
var modalfind
var modalinfo
var pic
var sprite
var bestStatus

function pokecard(resultDetail) { 
    pic = resultDetail?.sprites?.other.home.front_default
    sprite = resultDetail?.sprites?.versions["generation-v"]["black-white"].animated.front_default
    bestStatus = 0

    $("#pokelist").append(`
    <div class="col">
        <div class="card  ${resultDetail?.types[0].type.name}" data-bs-toggle="modal" data-bs-target="#${resultDetail?.name}">
            <img src="${pic}" class="img-fluid">
            <div class="card-body">
                <br/>
                <h6 class="text-capitalize fw-bold text-center text-white">${resultDetail?.name}</h6>
                <div class="d-flex justify-content-center">
                    <span class="text-capitalize badge border me-1 ">${resultDetail?.types[0].type.name}</span>
                    <span class="text-capitalize badge border me-1 ">${badgeValue}</span>
                </div>
            </div>
        </div>
    </div>
    `)
}

function percentBar(PokeStat, BestStat) {
    return (100 * PokeStat) / BestStat;
}

function badge() {
    if (resultDetail?.types[1]?.type.name == undefined) {
        badgeValue = ""
    } else {
        badgeValue = resultDetail?.types[1].type.name
    }
}

function go(pokename) {
    
    if (pokename == "") {
        pokelist(data)
    } else {
        search(pokename)
    }
}

function search(pokename) {
    event.preventDefault();
    pokelink = pokename.toLowerCase();
    modallink = modalsearch + pokelink
    document.querySelector("#pokelist").innerHTML = ""
    document.querySelector("#more").innerHTML = ""

    modal(modallink)
    resultDetail != null?pokecard(resultDetail) : null

}

function notfound(){
    document.querySelector(".alert-home").classList.remove("d-none")
    document.querySelector(".alert-home").innerHTML = "Nenhum pokemom com esse nome foi encontrado."
}

function other(){
    document.querySelector(".alert-home").classList.remove("d-none")
    document.querySelector(".alert-home").innerHTML = "Algo deu errado, tente novamente."
}

function pokelist(data) {
    for (let i = 0; i < data.results.length; i++) {
        urlData = data.results[i].url
        GetInfo(urlData).done(infoData => {
            resultDetail = infoData
            pokeinfo(resultDetail)
            pokecard(resultDetail)
        })
    }
}


function pokeinfo(resultDetail) {


    pic = resultDetail?.sprites?.other.home.front_default
    sprite = resultDetail?.sprites?.versions["generation-v"]["black-white"].animated.front_default
    bestStatus = 0



    function FindBestStatus() {
        for (let x = 0; x < resultDetail?.stats.length; x++) {
            if (resultDetail?.stats[x].base_stat > bestStatus) {
                bestStatus = resultDetail?.stats[x].base_stat
            }
        }
    }
    FindBestStatus()
    badge()



    document.querySelector("#spinner").classList.add("d-none")


    $("#pokelist").append(`
    <div class="modal fade" id="${resultDetail?.name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content ">
                <div class="modal-header  ${resultDetail?.types[0].type.name}">
                    <h6 class="modal-title text-capitalize fw-bold text-white" id="exampleModalLabel">${resultDetail?.id}. ${resultDetail?.name}

                        <span class="${resultDetail?.types[0].type.name} text-capitalize badge border me-1 rounded-pill">${resultDetail?.types[0].type.name}</span>
                        <span class="${badgeValue} text-capitalize badge border me-1 rounded-pill">${badgeValue}</span>
                    </h6>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container">

                    <div class="modal-body row">
                        <div class="d-flex justify-content-center lab img-fluid">
                            <img src="${sprite}" class="spritegif"></img>
                        </div>
                        <div class="row m-3">
                            <div class="col-12 col-sm-4">
                                <h6 class="text-capitalize">${resultDetail?.stats[0].stat.name}:</h6>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped ${resultDetail?.types[0].type.name}" role="progressbar" style="width: ${percentBar(resultDetail?.stats[0].base_stat, bestStatus)}%">${resultDetail?.stats[0].base_stat}</div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <h6 class="text-capitalize">${resultDetail?.stats[1].stat.name}:</h6>
                            </div>

                            <div class="col-12 col-sm-8">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped ${resultDetail?.types[0].type.name}" role="progressbar" style="width: ${percentBar(resultDetail?.stats[1].base_stat, bestStatus)}%">${resultDetail?.stats[1].base_stat}</div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <h6 class="text-capitalize">${resultDetail?.stats[2].stat.name}:</h6>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped ${resultDetail?.types[0].type.name}" role="progressbar" style="width: ${percentBar(resultDetail?.stats[2].base_stat, bestStatus)}%">${resultDetail?.stats[2].base_stat}</div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <h6 class="text-capitalize">${resultDetail?.stats[3].stat.name}:</h6>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped ${resultDetail?.types[0].type.name}" role="progressbar" style="width: ${percentBar(resultDetail?.stats[3].base_stat, bestStatus)}%">${resultDetail?.stats[3].base_stat}</div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <h6 class="text-capitalize">${resultDetail?.stats[4].stat.name}:</h6>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped ${resultDetail?.types[0].type.name}" role="progressbar" style="width: ${percentBar(resultDetail?.stats[4].base_stat, bestStatus)}%">${resultDetail?.stats[4].base_stat}</div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <h6 class="text-capitalize">${resultDetail?.stats[5].stat.name}:</h6>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped ${resultDetail?.types[0].type.name}" role="progressbar" style="width: ${percentBar(resultDetail?.stats[5].base_stat, bestStatus)}%">${resultDetail?.stats[5].base_stat}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)   
}