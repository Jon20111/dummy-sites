var elmId = ['firstName', 'lastName', 'emailAddress', 'hear', 'use'];
var err = 'invalid';
var btn = ge('btn');
btn.addEventListener('click', submit);

function submit() {
    var errorMessages = [];

    for (var i = 0; i < elmId.length; i++) {
        var e = ge(elmId[i]);
        e.classList.remove(err);

        if (e.value === '') {
            var msg = e.placeholder ? e.placeholder : e.title
            errorMessages.push(msg + " is required");
            e.classList.add(err);
        }

        if (e.type == 'email' && e.value.length > 0) {
            if (e.value.indexOf('@') == -1 || e.value.indexOf('.com') == -1) {
                errorMessages.push('Enter a valid email address');
                e.classList.add(err);
            }
        }
    }

    var ter = ge('terms');

    if (ter.checked == false) {
        errorMessages.push('You must accept the terms of service');
    }


    var html = '';
    var msgElm = ge('messages');
    if (errorMessages.length > 0) {
        html = '<ul><li>' + errorMessages.join('</li><li>') + "</li></ul>";
    } else {
        html = "<h2>Thank you for your submission</h2>";
    }

    msgElm.innerHTML = html;


}





function ge(id) {
    return document.getElementById(id);
}