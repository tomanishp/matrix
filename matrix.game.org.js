let iR, iC, iXR, iXC;
let nums = [];
iR = iC = iXR = iXC = 1;
var cDiv;
let iClicks = 0;

$(document).ready(function () {

    $("button").on("animationend", resetAnimation);
    initializeMatrix();
});

function initializeMatrix() {
    nums = [];
    $("#matrix").empty();
    while (nums.length < 16) {
        const randomNum = Math.floor(Math.random() * 16);
        if (!nums.includes(randomNum)) {
            nums.push(randomNum);

            iXR = Math.ceil(nums.length / 4);
            iXC = (nums.length % 4);

            if (iXC == 0) { iXC = 4 }

            if (randomNum == 0) {
                iR = iXR;
                iC = iXC;
            }

            if (iXC == 1) {

                $("#matrix").append('<div class="row" id="row' + iXR + '"></div>');
            }

            try {
                $("#row" + iXR).append('<div class="col-xs-3"><button type="button" class="btn btnM" id="btn' + iXR + iXC + '">#btn' + iXR + iXC + '</button></div>');
                //$("#btn" + iXR + iXC)[0].innerText = randomNum;
                $("#btn" + iXR + iXC).text(randomNum);

                $("#btn" + iXR + iXC).css("width", "100%");
            } catch (e) {
                throw e;

            }


        }
    }
    $("#matrix").append('<div class="row" id="rowReset"><p>&nbsp</p><button type="button" id="btnReset" class="btnR" onclick="initializeMatrix()">Reset/ नया क्रम</button></div>');
    setButtons(iR, iC);
    $("#sClick").text('Steps: 0');

}

function resetAnimation() {
    resetButtonAnimation(this);
}

function resetButtonAnimation(btn) {
    $(btn).removeClass('animated tada');
    $(btn).removeClass('animated slide-out-up');
    $(btn).removeClass('animated slide-out-down');
    $(btn).removeClass('animated slide-out-left');
    $(btn).removeClass('animated slide-out-right');
}

function setButtons(iRow, iCol) {

    $("button").off("click");
    $("button").css("background-color", "");
    $("button").css("color", "black");

    var iRP = (iRow - 1);
    var iRN = (iRow + 1);
    var iCP = (iCol - 1);
    var iCN = (iCol + 1);

    setSwapButton($("#btn" + iRP + iCol), moveDown);
    setSwapButton($("#btn" + iRN + iCol), moveUp);
    setSwapButton($("#btn" + iRow + iCP), moveLeft);
    setSwapButton($("#btn" + iRow + iCN), moveRight);

    checkSolve();

    $("#btn" + iRow + iCol).css("background-color", "grey");
    $("#btn" + iRow + iCol).css("color", "grey");
    $("#btn" + iRow + iCol).text();

}

function checkSolve() {
    let iMatch = 0;

    for (let iDX = 1; iDX < 16; iDX++) {

        iXR = Math.ceil(iDX / 4);
        iXC = (iDX % 4);
        if (iXC == 0) { iXC = 4 }

        btn = $("#btn" + iXR + iXC);

        if (btn.text() == iDX) {
            btn.css("background-color", "#C1E1C1");
            iMatch++;
        } else {
            btn.css("background-color", "");
        }
    }
    if (iMatch == 15) {
        $("#sClick").text('Solved in ' + iClicks + ' steps!!');
        $("button").off("click");
    }
}

function removeTada(btn) {
    $('#' + btn).removeClass('animated tada');
}

function setSwapButton(btn, moveFunc) {
    $(btn).css("background-color", "");
    $(btn).css("display", "inline");
    $(btn).off("click");
    $(btn).on("click", moveFunc);


}

function swapClick(btn, direction) {
    $(btn).off("click");
    //$(btn).addClass('animated bounceOut' + direction);
    $("button").css("background-color", "");
    //$("button").css("color", "black");
    $("button").off("click");

    let iVal = +$(btn).text();

    $("#btn" + iR + iC).text(iVal);

    let iDX = ((iR - 1) * 4) + iC;

    //if(iVal == iDX){
    //    $("#btn" + iR + iC).css("color", "Green");
    //}

    switch (direction) {
        case "Up":
            iR++
            break;
        case "Down":
            iR--;
            break;
        case "Left":
            iC--;
            break;
        case "Right":
            iC++;
            break;
    }
    setButtons(iR, iC)
    iClicks++;
    $("#sClick").text('Steps: ' + iClicks);
}

function moveUp() {
    swapClick($(this), 'Up');
}

function moveDown() {
    swapClick($(this), 'Down');
}

function moveLeft() {
    swapClick($(this), 'Left');
}

function moveRight() {
    swapClick($(this), 'Right');
}
