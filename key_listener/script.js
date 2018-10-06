/*jshint esversion: 6 */

/* global keys     */
/* global keysFlip */

// console.log(keys.a);
// console.log(keys.openbracket);
// console.log(keys.delete);
// console.log(keys['0']);

function assignToId(id, keyword) {
    document.getElementById(id).innerHTML = keyword;
}

const keywords  = ['Yes', 'No'];
const kwdLower  = keywords.map((kw) => (kw.toLowerCase()));
let currentWord = '';

window.onkeydown = function(e) {
    let keyCode = e.keyCode ? e.keyCode
                            : e.which;
    let key     = keysFlip[keyCode];

    if (key === 'enter') {
        if (kwdLower.indexOf(currentWord) >= 0) {
            assignToId('keyword', 'match found!');
            currentWord = '';
        }

    } else if (key === 'space') {
        assignToId('keyword', '');
        currentWord += ' ';
        assignToid('keys', currentWord);

    } else if ( (key === 'backspace') ||
                (key === 'delete')    ||
                (key === 'esc')
              ) {
        assignToId('keyword', '');
        currentWord = '';
        assignToId('keys', currentWord);

    } else if (key.length > 1) {
        // pass

    } else if (currentWord.length > 20) {
        currentWord = '';

    } else {
        assignToId('keyword', '');
        currentWord += key;
        assignToId('keys', currentWord);
    }

    console.log(currentWord);
};

assignToId('keys'   , '');
assignToId('keyword', '');
