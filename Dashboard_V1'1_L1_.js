/*





to add url add to array

*/
let url = ['https://surviv.io/', 'https://shapez.io/', 'https://drednot.io/', 'https://www.editpad.org/']

$(document).ready(function() {






    url.forEach(function(item, index, array) {

        var tag = document.createElement("button");
        var text = document.createTextNode(item);
        tag.appendChild(text);
        tag.addEventListener("click",
            function() {
                var creatiframe = document.createElement("iframe");
                $(creatiframe).addClass("iframex");
                $(creatiframe).prop('src', item)

                var element = document.getElementById("iframedvi");
                element.appendChild(creatiframe);

            });

        var element = document.getElementById("urlbutton");
        element.appendChild(tag);

        console.log(item, index);
    });

});

function textinput() {
    var item = document.getElementById("urlinput").value;

    var creatiframe = document.createElement("iframe");
    $(creatiframe).addClass("iframex");
    $(creatiframe).prop('src', item)

    var element = document.getElementById("iframedvi");
    element.appendChild(creatiframe);

};

/*
  function() {
                var creatiframe = document.createElement("iframe");
                var addclass = document.classList.add("iframex");
                creatiframe.appendChild(addclass);
                var src = document.src = item;
                creatiframe.appendChild(src);

                var element = document.getElementById("iframedvi");
                element.appendChild(creatiframe);

            });
*/



/*

// function() {
    document.getElementById("iframe").src = item;
});

*/

/*
url.forEach(function(item, index, array) {
    console.log(item, index)
})

pageButtons.append('<button type="button" onClick="document.getElementById("iframe").src = "' + item + '";">'+ item +'</button>');
'<button type="button" onClick="document.getElementById("iframe").src = "' + item + '";">'+ item +'</button>'


var urlbutton = ('#urlbutton');


    urlbutton.appendTo('<button type="button" onClick="document.getElementById("iframe").src = "' + item + '";">' + item + '</button>');
    var button = document.createElement("button");
    button.setAttribute('onClick=', 'document.getElementById("iframe").src = "' + item + '";'); *
*/