'use strict';

// Variables:
let fecha1,
    fecha2,
    fecha3,
    fecha4,
    fecha,
    html = '';

html += '<p>Instanciación</p>';

fecha1 = new Date();
fecha2 = new Date(1000);
fecha3 = new Date('2000-06-21 22:40:00');
fecha4 = new Date(1985, 5, 21, 22, 40, 0, 0);

html += `
<ul>
    <li>new Date(): <strong>${fecha1}</strong></li>
    <li>new Date(1000): <strong>${fecha2}</strong></li>
    <li>new Date('2000-06-21 22:40:00'): <strong>${fecha3}</strong></li>
    <li>new Date(1985, 5, 21, 22, 40, 0, 0): <strong>${fecha4}</strong></li>
</ul>
<hr />
<p>Setters (Fecha) -> new Date('1985-06-21 22:40:00'): <strong>${fecha}</strong></p>
<ul>
`;

fecha = new Date('1985-06-21 22:40:00');

fecha.setDate(32);
html += `<li>setDate(32): <strong>${fecha}</strong></li>`;

fecha.setMonth(10, 15);
html += `<li>setMonth(10, 15): <strong>${fecha}</strong></li>`;

fecha.setFullYear(1952, 10, 15);
html += `<li>setFullYear(1952, 10, 15): <strong>${fecha}</strong></li>
</ul>
<hr />
<p>Setters (Hora) -> new Date('1985-06-21 22:40:00'): <strong>${fecha}</strong></p>
<ul>
`;

fecha = new Date('1985-06-21 22:40:00');

fecha.setHours(25, 30, 15, 0);
html += `<li>setHours(25, 30, 15, 0): <strong>${fecha}</strong></li>`;

fecha.setMinutes(90, 45, 30);
html += `<li>setMinutes(90, 45, 30): <strong>${fecha}</strong></li>`;

fecha.setSeconds(90, 30);
html += `<li>setSeconds(90, 30): <strong>${fecha}</strong></li>`;

fecha.setMilliseconds(1000);
html += `<li>setMilliseconds(1000): <strong>${fecha}</strong></li>
</ul>
<hr />
<p>Setters (Time) -> new Date(): <strong>${fecha}</strong></p>
<ul>
`;

fecha = new Date();

fecha.setTime(1000);
html += `<li>setTime(1000): <strong>${fecha}</strong></li>`;

fecha.setTime(-1000);
html += `<li>setTime(-1000): <strong>${fecha}</strong></li>
</ul>
<hr />
<p>Getters -> new Date(\'1985-06-21 22:40:00\'): <strong>${fecha}</strong></p>
`;

fecha = new Date('1985-06-21 22:40:00');

html += `
<ul>
    <li>getDay(): <strong>${fecha.getDay()}</strong></li>
    <li>getDate(): <strong>${fecha.getDate()}</strong></li>
    <li>getMonth(): <strong>${fecha.getMonth()}</strong></li>
    <li>getFullYear(): <strong>${fecha.getFullYear()}</strong></li>
    <li>getHours(): <strong>${fecha.getHours()}</strong></li>
    <li>getMinutes(): <strong>${fecha.getMinutes()}</strong></li>
    <li>getSeconds(): <strong>${fecha.getSeconds()}</strong></li>
    <li>getMilliseconds(): <strong>${fecha.getMilliseconds()}</strong></li>
    <li>getTime(): <strong>${fecha.getTime()}</strong></li>
</ul>`;

document.getElementById('info').innerHTML = html;
