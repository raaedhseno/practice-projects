Number = 1;

var msggenrator = function () {
    var trash = ["لا تلعب بالنار", "go to hell", "انفخ في اللبن"]
    var index = Math.floor(Math.random() * trash.length);
    return trash[index];
}
$("#submit").on("click", highscore);

function highscore() {
    var num = (Number) ++;
    var name = $("#name").val();
    var score = $("#score").val();
    var date = $("#date").val();
    var game = $("#game").val();
    var trashtalk = "";
    var check = $("#check").is(':checked');

    if (check == true) {
        var trashtalk = msggenrator();

    }

    $("#list").append(`<tr>
                        <td>${num}</td>
                        <td>${name}</td>
                        <td>${game}</td>
                        <td>${score}</td>
                        <td>${date}</td>
                        <td>${trashtalk}</td>
                        </tr>`)
    $("#name").val("");
    $("#score").val("");
    $("#date").val("");
    $("#game").val("");

}

$(document).keypress(function (e) {
    if (e.which === 13) {

        var num = (Number) ++;
        var name = $("#name").val();
        var score = $("#score").val();
        var date = $("#date").val();
        var game = $("#game").val();
        var trashtalk = "";
        var check = $("#check").is(':checked');

        if (check == true) {
            var trashtalk = msggenrator();

        }

        $("#list").append(`<tr>
                        <td>${num}</td>
                        <td>${name}</td>
                        <td>${game}</td>
                        <td>${score}</td>
                        <td>${date}</td>
                        <td>${trashtalk}</td>
                        </tr>`)
        $("#name").val("");
        $("#score").val("");
        $("#date").val("");
        $("#game").val("");
    }

})
