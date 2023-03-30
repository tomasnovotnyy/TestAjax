var hiddenLike = $("#like");
$("#generate").on("click", function (event) {
    hiddenLike.show();
});
var hiddenDislike = $("#dislike");
$("#generate").on("click", function (event) {
    hiddenDislike.show();
});
var hiddenNew = $("#new");
$("#generate").on("click", function (event) {
    hiddenNew.show();
});

var hiddenDisliked = $("#disliked");
$("#generate").on("click", function (event) {
    hiddenDisliked.show();
});
var hiddenLiked = $("#liked");
$("#generate").on("click", function (event) {
    hiddenLiked.show();
});


$(document).ready(function () {
    $("#generate").click(function () {
        $.ajax({
            dataType: "JSON",
            type: "GET",
            url: "https://v2.jokeapi.dev/joke/Any",
            success: function (datas) {
                console.log(datas);
                console.log(datas.setup);
                console.log(datas.delivery);

                if (datas.joke == undefined) {

                    const row = document.createElement("tr");

                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(datas.category);
                    let cell2 = document.createElement("td");
                    let cellText2 = document.createTextNode(datas.setup);
                    let cell3 = document.createElement("td");
                    let cellText3 = document.createTextNode(datas.delivery);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell2.appendChild(cellText2);
                    row.appendChild(cell2);
                    cell3.appendChild(cellText3);
                    row.appendChild(cell3);
                    document.getElementById("content").appendChild(row);

                    $("#generate").hide();
                } else {
                    const row = document.createElement("tr");

                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(datas.category);
                    let cell2 = document.createElement("td");
                    let cellText2 = document.createTextNode(datas.joke);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell2.appendChild(cellText2);
                    row.appendChild(cell2);

                    //$("#Delivery").hide();
                    $("#generate").hide();
                    document.getElementById("content").appendChild(row);
                }
            },
            error: function () {
                alert("Error, server neni dostupny");
            }
        });
    })
});


$(document).ready(function () {
    $("#new").click(function () {
        $.ajax({
            dataType: "JSON",
            type: "GET",
            url: "https://v2.jokeapi.dev/joke/Any",
            success: function (datas) {
                console.log(datas);
                console.log(datas.setup);
                console.log(datas.delivery);

                if (datas.joke == undefined) {
                    const row = document.createElement("tr");

                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(datas.category);
                    let cell2 = document.createElement("td");
                    let cellText2 = document.createTextNode(datas.setup);
                    let cell3 = document.createElement("td");
                    let cellText3 = document.createTextNode(datas.delivery);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell2.appendChild(cellText2);
                    row.appendChild(cell2);
                    cell3.appendChild(cellText3);
                    row.appendChild(cell3);
                    document.getElementById("content").appendChild(row);

                    $("#generate").hide();
                } else {
                    const row = document.createElement("tr");

                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(datas.category);
                    let cell2 = document.createElement("td");
                    let cellText2 = document.createTextNode(datas.joke);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell2.appendChild(cellText2);
                    row.appendChild(cell2);

                    //$("#Delivery").hide();
                    $("#generate").hide();
                    document.getElementById("content").appendChild(row);
                }
            },
            error: function () {
                alert("Error, server neni dostupny");
            }
        });
    })
});


$(document).ready(function () {
    $("#like").click(function () {
        console.log("Saving liked data to local storage...");
        if ($("#content").length) {
            localStorage.setItem("content", $("#content").html());
        }
        else {
            console.log("Table not found, not saving data to local storage...");
        }
    })
});

$(document).ready(function () {
    $("#dislike").click(function () {
        console.log("Saving disliked data to local storage...");
        if ($("#content").length) {
            localStorage.setItem("content", $("#content").html());
        }
        else {
            console.log("Table not found, not saving data to local storage...");
        }
    })
});


$("#like").click(function () {
    $("#like").fadeOut(500);
    $("#like").fadeIn(500);
})

$("#dislike").click(function () {
    $("#dislike").fadeOut(500);
    $("#dislike").fadeIn(500);
})

$("#new").click(function () {
    $("#new").fadeOut(500);
    $("#new").fadeIn(500);
})

$("#liked").click(function () {
    $("#liked").fadeOut(500);
    $("#liked").fadeIn(500);
})

$("#disliked").click(function () {
    $("#disliked").fadeOut(500);
    $("#disliked").fadeIn(500);
})