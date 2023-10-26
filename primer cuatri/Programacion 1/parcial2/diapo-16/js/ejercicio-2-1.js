'use strict';

// Document:
const d = document;

// Variables
let inputs, txt, btn, ul, aLi, msj;

// Buscar elementos
inputs = d.querySelector('#inputs');
txt    = inputs.firstElementChild;
btn    = inputs.lastElementChild;
ul     = d.querySelector('#listado');
aLi    = ul.children;
msj    = d.querySelector('#mensaje');


// Recorrer los li del ul 
for (let li of aLi) {
	li.firstElementChild.addEventListener('click', (e) => {
		//e.target tenemos el elemento sobre el cual se hizo click
		//Borramos el li
		e.target.parentNode.remove();

	});
}

btn.addEventListener('click', (e) => {
	let texto = txt.value;
	if (texto =='') {
		msj.innerHTML   ='Debe ingresar un valor'; 
		msj.style.color = 'red';
		return;
	}

	// Creamos un li con el texto
	let li  = d.createElement('li');
	li.innerHTML = texto + ' ';

	// Creamos el a
	let a   = d.createElement('a');
	a.innerHTML = '[-]';
	a.href ='#';
	a.addEventListener ('click', (e) => {
		//e.target tenemos el elemento sobre el cual se hizo click
		//Borramos el li
		e.target.parentNode.remove();
	});

	// Agregar el a, al li
	li.append(a);
	ul.append(li);

	txt.value     = '';
	msj.innerHTML = '';

})
