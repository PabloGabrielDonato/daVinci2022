'use strict';

let html = '';

// Protipo:
Number.prototype.Paridad = function () {};

let n1 = 0;
let n2 = 1;
let n3 = 2;

html += `
<ul>
    <li>${n1.Paridad()}</li>
    <li>${n2.Paridad()}</li>
    <li>${n3.Paridad()}</li>
</ul>
`;

document.getElementById('info').innerHTML += html;
