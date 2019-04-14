//business logic
function bebop(nStr) {
    let n = parseInt(nStr);
    let bag = [];
    let i;

    for (i = 0; i <= n; i++) {
        let iStr = "" + i;

        if (iStr.indexOf("3") !== -1) {
            bag.push("I'm sorry, Dave. I'm afraid I can't do that")

        } else if (iStr.indexOf("2") !== -1) {
            bag.push("Boop!")
        } else if (iStr.indexOf("1") !== -1) {
            bag.push("Beep!")
        } else {
            bag.push(i);

        }

    }
    return bag;
}

//user interface logic
$(document).ready(function(){
    $("form#input").submit(function(event){

       let nElement = $("#number");
        let nStr = nElement.val();
        let bag = bebop(nStr);


        alert(bag);
    event.preventDefault();
});
});