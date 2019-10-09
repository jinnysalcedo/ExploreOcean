var waterImage;
var splashPage;
var blueSplash;
var titleLogo;
var backButton;
var camera;
var pacificViper;
var atlanticSalmon;
var atlantic;

let boldFont;
let regFont;

var stage = 1;

function preload() {
  splashPage = loadImage('assets/splashPage.png');
  waterImage = loadImage('assets/water.png');
  blueSplash = loadImage('assets/blueSplash.png');
  titleLogo = loadImage('assets/titleLogo.png');
  backButton = loadImage('assets/backButton.png');


  pacificViper = loadImage('assets/pacificViper.png');
  atlanticSalmon = loadImage('assets/atlanticSalmon.png');
  atlantic = loadImage('assets/atlantic.png');


  regFont = loadFont('assets/Nunito-Regular.ttf')
  boldFont = loadFont('assets/Nunito-Bold.ttf')

}


function setup() {
  createCanvas(235, 525);

}

function draw() {
  if (stage == 1) {
    // rect(15,10,235,525);
    // image(blueSplash, 0, 0, 235, 525);
    image(splashPage, 0, 0, 235, 525);

  }

  let prompt = 'Center fish within scanner to capture fish and learn more.'

  ////// CAMERA PAGE //////
  if (stage == 2) {
    image(waterImage, 0, 0, 235, 525);
    image(atlantic, 15, 200, 200, 130);
    // image(pacificViper, 30, 130, 200, 90);

    noStroke();
    fill(0);
    textFont(regFont);
    textSize(24);
    text("Scanner", 65, 40);

    textSize(14);
    text(prompt, 20, 60, 230, 570);
    // text("Center fish within brackets to", 20, 70);
    // text("caputure image to learn", 20, 85);

    noStroke();

    fill(0, 0, 0, 125);
    ellipse(235 / 2, 475, 55, 55, 2);

    noFill();
    stroke(0);
    rect(15, 120, 200, 300, 20);


    // rect(0, 45, 235, .2);
  }

  let summary = 'SUMMARY'
  let outline = 'Although the Atlantic Salmon fish is commonly found. This common species is very close to becoming extinct. Back in the mid-1970s, the total population of Atlantic salmon in North America was close to 1.8 million. It is now roughly one-third of that. Commercial fishing is currently prohibited by law and the Gulf of Maine population is protected under the Endangered Species Act.'
  let name = 'Atlantic Salmon'
  let type = 'Endangered Species'
  let location = 'Location: North Atlantic Ocean'
  let life = 'Life Expectancy: Up to 14 Years'


//////// INFORMATION PAGE ///////
  if (stage == 3) {
    // stroke(1);
    // background("#004581");
    background(255);

    fill(0);
    rect(0, 50, 235, 1);

    fill(0);
    rect(0, 270, 235, 1);

    image(titleLogo, 50, 10, 150, 30);
    image(backButton, 10, 15, 20, 20);
    image(atlanticSalmon, 30, 130, 200, 90);


    noStroke();
    // fill("#004581");
    fill(255, 0, 0);
    textFont(boldFont);
    textSize(20);
    text(type, 25, 95, 230, 570);

    fill("#004581");
    textSize(22);
    text(name, 40, 230, 190, 570);

    fill("#004581");
    textSize(13);
    text(location, 10, 290, 230, 570);

    textSize(13);
    text(life, 10, 315, 230, 570);
    // text("Life Expectancy: 30 to 40 Years", 10, 320);

    textSize(16);
    text(summary, 10, 340, 190, 570);

    textSize(12);
    text(outline, 10, 365, 230, 570);





  let array = ['RETURN', 'TO', 'WATER!'];
  let separator = ' ';
  let message = join(array, separator);
  fill(255, 0, 0);
  textSize(20);
  textFont(boldFont);
  text(message, 20, 90);



  }
}


function mousePressed() {
  if (stage == 1) {
    nextPage();
  }

  if (stage == 2) {
    let d = dist(mouseX, mouseY, 235 / 2, 475);
    if (d < 55) {
      nextPage();
    }
  }

  if (stage == 3){
  if(mouseX>10 && mouseX<40 && mouseY>16 && mouseY<40) {
        lastPage();
      }
}
}


function nextPage() {
  stage++;
}

function lastPage() {
  stage--;
}
