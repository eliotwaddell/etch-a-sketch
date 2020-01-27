const container = document.querySelector('#container');
var div = document.createElement('div');
div.style.cssText = 'background-color: white; width: 3.125vw; height: 3.125vw';

var i;
for(i=0; i<256;i++)
{ 
    container.appendChild(div.cloneNode());
}