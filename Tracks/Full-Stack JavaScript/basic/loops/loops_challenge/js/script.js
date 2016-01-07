var html = '';
var red;
var green;
var blue;
var rgbColor;
var randRGB;

var randRGB = function() {
    return Math.floor(Math.random() * 256);
};

var rgbFormat = function(red, green, blue) {
    var format = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    return format;
};

var print = function(phrase) {
    document.write(phrase);
};

for(i = 0; i < 10; i++) {
red = randRGB();
green = randRGB();
blue = randRGB();
rgbColor = rgbFormat(red, green, blue);
html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
