function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const container = document.querySelector('#container');
var div = document.createElement('div');
div.style.cssText = 'background-color: white; width: 1.5625vw; height: 1.5625vw';
var randomColorMode = false;
var gradientMode = false;
var opacity = 1;
var colorCheck = document.querySelector('#color');
var gradientCheck = document.querySelector('#gradient');

colorCheck.addEventListener("change", function(e)
{
    if(e.target.checked)
    {
        randomColorMode = true;
    }
    else
    {
        randomColorMode = false;
    }
});

gradientCheck.addEventListener("change", function(e)
{
    if(e.target.checked)
    {
        gradientMode = true;
    }
    else
    {
        gradientMode = false;
        opacity = 1;
    }
});


var i;
for(i=0; i<1024;i++)
{ 
    tempDiv = div.cloneNode();
    tempDiv.addEventListener("mouseenter", function(e)
    {
        var pixelColor = 'white';
        if(randomColorMode)
        {
            pixelColor = getRandomColor();
        }
        else if(!gradientMode)
        {
            pixelColor = 'black';
        }
        if(gradientMode)
        {
            if(opacity<=0)
            {
                opacity = 1;
            }
            else
            {
                opacity-=.1;
            }
        }
        e.target.style.backgroundColor = pixelColor;
        e.target.style.opacity = opacity.toString();
    });
    tempDiv.addEventListener("mouseexit", function(e)
    {
        var pixelColor = 'white';
        if(randomColorMode)
        {
            pixelColor = getRandomColor();
        }
        else if(!gradientMode)
        {
            pixelColor = 'black';
        }
        if(gradientMode)
        {
            if(opacity<=0)
            {
                opacity = 1;
            }
            else
            {
                opacity-=.1;
            }
        }
        e.target.style.backgroundColor = pixelColor;
        e.target.style.opacity = opacity.toString();
    });
    container.appendChild(tempDiv);
}

const button =  document.querySelector('button');
button.addEventListener("click", function(e)
{
    var squares = prompt("How many squares per side?","32");
    var squareResolution = 50/Number(squares);
    div.style.width = String(squareResolution) + 'vw';
    div.style.height = String(squareResolution) + 'vw';
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    for(i=0; i<Number(squares)*Number(squares);i++)
    { 
        tempDiv = div.cloneNode();
        tempDiv.addEventListener("mouseenter", function(e)
        {
            var pixelColor = 'white';
            if(randomColorMode)
        {
            pixelColor = getRandomColor();
        }
        else if(!gradientMode)
        {
            pixelColor = 'black';
        }
        if(gradientMode)
        {
            if(opacity<=0)
            {
                opacity = 1;
            }
            else
            {
                opacity-=.1;
            }
        }
        e.target.style.backgroundColor = pixelColor;
        e.target.style.opacity = opacity.toString();
        });
        tempDiv.addEventListener("mouseexit", function(e)
        {
            var pixelColor = 'white';
            if(randomColorMode)
            {
                pixelColor = getRandomColor();
            }
            else if(!gradientMode)
            {
                pixelColor = 'black';
            }
        if(gradientMode)
        {
            if(opacity<=0)
            {
                opacity = 1;
            }
            else
            {
                opacity-=.1;
            }
        }
        e.target.style.backgroundColor = pixelColor;
        e.target.styleopacity = opacity.toString();
        });
        container.appendChild(tempDiv);
    }
});


