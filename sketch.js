const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ="sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    

    text("Time: "+hour,900,50);
    Engine.update(engine);

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=0800){
        bg = "sunrise1.png";
    }
    else if(hour>=0800 && hour<=1000){
        bg = "sunrise2.png";
    }
    else if(hour>=1000 && hour<=1200){
        bg = "sunrise3.png";
    }
    else if(hour>=1200 && hour<=1400){
        bg = "sunrise4.png";
    }
    else if(hour>=1400 && hour<=1600){
        bg = "sunrise5.png";
    }
    else if(hour>=1600 && hour<=1800){
        bg = "sunrise6.png";
    }
    else if(hour>=1800 && hour<=2000){
        bg = "sunset7.png";
    }
    else if(hour>=2000 && hour<=2200){
        bg = "sunset8.png";
    }
    else if(hour>=2200 && hour<=2400){
        bg = "sunrise.png";
    }
    else if(hour>=2400 && hour<=0200){
        bg = "sunset10.png";
    }
    else if(hour>=0200 && hour<=0400){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
        
    }
   

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
