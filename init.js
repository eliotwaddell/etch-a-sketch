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
var gradientMode = true;
var brightness = 100;

var i;
for(i=0; i<1024;i++)
{ 
    tempDiv = div.cloneNode();
    tempDiv.addEventListener("mouseenter", function(e)
    {
        if(randomColorMode)
        {
            pixelColor = getRandomColor();
        }
        else
        {
            var pixelColor = 'black';
        }
        e.target.style.backgroundColor = pixelColor;
        if(gradientMode)
        {
            e.target.style.filter = "brightness("+brightness.toString()+"%)";
            if(brightness==0)
            {
                brightness=100;
            }
            else
            {
                brightness-=10;
            }
        }
    });
    tempDiv.addEventListener("mouseexit", function(e)
    {
        if(randomColorMode)
        {
            pixelColor = getRandomColor();
        }
        else
        {
            var pixelColor = 'black';
        }
        e.target.style.backgroundColor = pixelColor;
        if(gradientMode)
        {
            e.target.style.filter = "brightness("+brightness.toString()+"%)";
            if(brightness==100)
            {
                brightness=0;
            }
            else
            {
                brightness+=10;
            }
        }
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
            if(randomColorMode)
        {
            pixelColor = getRandomColor();
        }
        else
        {
            var pixelColor = 'black';
        }
        e.target.style.backgroundColor = pixelColor;
        if(gradientMode)
        {
            e.target.style.filter = "brightness("+brightness.toString()+"%)";
            if(brightness==100)
            {
                brightness=0;
            }
            else
            {
                brightness+=10;
            }
        }
        });
        tempDiv.addEventListener("mouseexit", function(e)
        {
            if(randomColorMode)
        {
            pixelColor = getRandomColor();
        }
        else
        {
            var pixelColor = 'black';
        }
        e.target.style.backgroundColor = pixelColor;
        if(gradientMode)
        {
            e.target.style.filter = "brightness("+brightness.toString()+"%)";
            if(brightness==100)
            {
                brightness=0;
            }
            else
            {
                brightness+=10;
            }
        }
        });
        container.appendChild(tempDiv);
    }
});
