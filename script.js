const canvas=document.querySelector("canvas");
const c=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;
let alienimage;
var angle =0;
var angle2=0; 
var angle3=0;
var angle4=0;
let score=0;
let alienvelocityY=1/2;
let alienvelocityX=1/2;
let aliens=[];
let alienArray=[];
let alienArray2=[];
let alienArray3=[];
let alienArray4=[];
let alienArray5=[];
let bulletArray=[];
let shootingalienArray4=[];
x=true
y=true
z=true
let bulletArray4=[];
let bulletArray3=[];
let bossbulletArray=[];
let bulletArray2=[];
let shootingalienArray=[];
let shootingalienArray3=[];
let bossalienArray=[];
let shootingalienArray2=[];
let turretbulletArray=[];
let alienCount=0;
let health=1000;
let healthElement=document.getElementById("health");
let progressfill=document.querySelector(".progress-before");
const scoreElement=document.querySelector(".score");
/* scoreElement.innerText =`score:${score}`; */
var alienaudio= new Audio("shootingaliensound.wav");
var backmusic=new Audio("backmusic.mp3");
var bossaudio=new Audio("bossaliensound.mp3")
class player{
    constructor(){
        this.position={
            x:canvas.width/2,
            y:800,
        }
        this.velocity={
            x:0,
            y:0
        }
        const playerimage=new Image();
        playerimage.src="./greencircle.png";
        playerimage.onload= () =>{
            this.playerimage=playerimage
            this.width=playerimage.width*0.1 
            this.height=playerimage.height*0.1

        }

        
    }
    playerupdate(){
        if(this.playerimage){
        this.draw()
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
    }
  }
    draw(){
        if(this.playerimage){
        c.fillstyle="red";
        c.drawImage(this.playerimage,this.position.x,this.position.y,this.width,this.height);
        }
    }  
    

}
class bots{
    constructor({position,velocity}){
         this.position=position
         this.velocity=velocity
         this.radius=3
    }
    draw(){
        c.beginPath();
        c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2);
        c.fillStyle='green';
        c.fill();
        c.closePath();
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y +=this.velocity.y;
    }
}
class alienbots{
    constructor({position,velocity}){
         this.position=position
         this.velocity=velocity
         this.radius=3
    }
    draw(){
        c.beginPath();
        c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2);
        c.fillStyle='red';
        c.fill();
        c.closePath();
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y +=this.velocity.y;
    }
}
const newplayer=new player();
const botss=[
];
const alienbotss=[];
const activebotss=[];
const keys={
    a:{
        pressed:false
    },
    d:{
        pressed:false
    },
    w:{
        pressed:false
    },
    s:{
        pressed:false
    }
}
function createAliens()
{
    let alien={
        img:alienimage,
        x:120,
        y:0,
        width:50,
        height:50,
        alive:true
    }
    alienArray.push(alien);
    aliens.push(alien);
    alienCount=alienArray.length
    let alien3={
        img:alienimage,
        x:canvas.width/2.1,
        y:-300,
        width:50,
        height:50,
        alive:true
    }
    alienArray2.push(alien3);
    aliens.push(alien3);
}
createAliens();
let alien={
    img:alienimage,
    x:120,
    y:0,
    width:50,
    height:50,
    alive:true
}
aliens.push(alien);
alienArray.push(alien)
alienCount=alienArray.length
let alien3={
    img:alienimage,
    x:canvas.width/2.1,
    y:-300,
    width:50,
    height:50,
    alive:true
}
aliens.push(alien3);
alienArray2.push(alien3);
function createAliens1()
{
    let alien1={
        img:alienimage,
        x:canvas.width*2.5/3,
        y:0,
        width:50,
        height:50,
        alive:true
    }
    alienArray3.push(alien1)
    aliens.push(alien1);
}
createAliens1();
function createAliens2()
{
    let alien4={
        img:alienimage,
        x:0,
        y:canvas.height/2,
        width:50,
        height:50,
        alive:true
    }
    alienArray4.push(alien4);
    aliens.push(alien4);
}
createAliens2();
function createAliens3()
{
    let alien5={
        img:alienimage,
        x:canvas.width,
        y:canvas.height/2,
        width:50,
        height:50,
        alive:true
    }
    alienArray5.push(alien5);
    aliens.push(alien5);
}
createAliens3();
const shootalienimage=new Image();
shootalienimage.src="./redcircle4.jpg";
function createbossbullets()
{
    let activebossbots1={
        img:shootalienimage,
        x:930,
        y:150,
        width:10,
        height:10
    }
    bossbulletArray.push(activebossbots1)
    let activebossbots2={
        img:shootalienimage,
        x:890,
        y:150,
        width:10,
        height:10
    }
    bossbulletArray.push(activebossbots2)
}
createbossbullets();
const homeimg=new Image();
homeimg.src="yellowhome.jpg";
function shootbullet()
{
    let shootingalien ={
        img:shootalienimage,
        x:150,
        y:20,
        width:50,
        height:50,
        alive:true
    
    
    }
    shootingalienArray.push(shootingalien)
}
shootbullet(); 
let shootingalien ={
    img:shootalienimage,
    x:150,
    y:20,
    width:50,
    height:50,
    alive:true


}
shootingalienArray.push(shootingalien); 
function bossalien()
{
    let bossalien ={
        img:shootalienimage,
        x:850,
        y:-300,
        width:150,
        height:150,
        alive:true
    
    
    }
    bossalienArray.push(bossalien);
}
bossalien();
function createbullets()
{

    let activebots={
        img:shootalienimage,
        x:/* 210 */shootingalien.x,
        y:/* 80 */shootingalien.y,
        width:10,
        height:10
    }
    bulletArray.push(activebots);

}
function shootingbot()
{
    let shootingalien ={
        img:shootalienimage,
        x:150,
        y:20,
        width:50,
        height:50,
        alive:true
    
    
    }
    shootingalienArray.push(shootingalien)
    setInterval(() =>{
        createbullets();
    },1500)
}
createbullets();
let home={
    img:homeimg,
    x:850,
    y:650,
    width:120,
    height:140

}
let activebots={
    img:shootalienimage,
    x:10,
    y:100,
    width:10,
    height:10
}
let activebossbots1={
    img:shootalienimage,
    x:bossalien.x,
    y:bossalien.y,
    width:10,
    height:10
}
let activebossbots2={
    img:shootalienimage,
    x:bossalien.x,
    y:bossalien.y,
    width:10,
    height:10
}
const life=new Image();
life.src="./greenacid2.jpg"
let homelife={
    img:life,
    x:850,
    y:770,
    width:0,
    height:140
}
const playerhealth=new Image();
playerhealth.src="./whiteimage.jpeg"
const playerhealth2=new Image();
const turret= new Image();
turret.src="./greyimage.jpg";
playerhealth2.src="./greyimage.jpg"
const alienhealth=new Image();
alienhealth.src="./whiteimage.jpeg"
const alienhealth2=new Image();
alienhealth2.src="./greyimage.jpg"
const bosshealth=new Image();
bosshealth.src="./whiteimage.jpeg"
const bosshealth2=new Image();
bosshealth2.src="./greyimage.jpg"
const powerup=new Image();
powerup.src="./purplecircle.png"
const shield=new Image();
shield.src="./shieldimage.png";
const turretbullet=new Image();
turretbullet.src="./yellowcircle.jpg";
let shields={
    img:shield,
    x:home.x,
    y:home.y,
    width:home.width,
    height:home.height,
    alive:true
}
function createturretbullets(){
    let turretbullets={
        img:turretbullet,
        x:home.x,
        y:home.y,
        width:10,
        height:10,
        alive:true
    }
    turretbulletArray.push(turretbullets)
}
let turrets={
    img:turret,
    x:home.x+home.width/2,
    y:home.y-50,
    width:50,
    height:20
}
let turretbullets={
    img:turretbullet,
    x:home.x,
    y:home.y,
    width:10,
    height:10,
    alive:true
}
turretbulletArray.push(turretbullets);
let powerups={
    img:powerup,
    x:400,
    y:400,  
    width:20,
    height:20
}


let playerlife={
    img:playerhealth,
    x:1200,
    y:20,
    width:15,
    height:150
}
let playerlife2={
    img:playerhealth2,
    x:1200,
    y:20,
    width:15,
    height:150,
    alive:true
}
let alienlife={
    img:alienhealth,
    x:130,
    y:100,
    width:15,
    height:100
}
let alienlife2={
    img:alienhealth2,
    x:130,
    y:100,
    width:15,
    height:100
}
let alien2life={
    img:alienhealth,
    x:1370,
    y:165,
    width:15,
    height:100
}
let alien2life2={
    img:alienhealth2,
    x:1370,
    y:165,
    width:15,
    height:100
}
let alien3life2={
    img:alienhealth2,
    x:1370,
    y:165,
    width:15,
    height:100
}
let alien4life2={
    img:alienhealth2,
    x:1370,
    y:165,
    width:15,
    height:100
}
let bosslife={
    img:bosshealth,
    x:855,
    y:170,
    width:15,
    height:150
}
let bosslife2={
    img:bosshealth2,
    x:855,
    y:170,
    width:15,
    height:150
}
function creates(){
    shootingalien.alive=true;
}
function bss(){
for(let i=0;i<bossalienArray.length;i++){
    let galien2=bossalienArray[i];
    c.drawImage(shootalienimage,galien2.x,galien2.y,galien2.width,galien2.height)
}
}
setTimeout(bss,5000)
let vel=1;

function animate(){
    window.requestAnimationFrame(animate);
    /* backmusic.play(); */
    c.clearRect(0,0,canvas.width,canvas.height);
    newplayer.draw()
    newplayer.playerupdate(); 
    const alienimage=new Image();
    alienimage.src="./invader.png"
    const shootalienimage=new Image();
    shootalienimage.src="./redcircle4.jpg";
    c.fillStyle = "red";
    c.font = "bold 18px Arial";
    c.fillStyle="green"
    c.beginPath();
    c.fillRect(newplayer.position.x,(newplayer.position.y)+95,60, 15);
    c.stroke();
    c.fillStyle="black";
    c.fillText("player",newplayer.position.x,(newplayer.position.y)+80)
    c.fillText("player health:",1078,35)
    c.fillText("powerup",(powerups.x)-20,(powerups.y)+35)
    c.fillText(`score:${score}`,800,35)
    c.drawImage(powerup,powerups.x,powerups.y,powerups.height,powerups.width)
    c.drawImage(homeimg,home.x,home.y,home.height,home.width)
    c.drawImage(shootalienimage,activebots.x,activebots.y,activebots.height,activebots.width)
    c.drawImage(shootalienimage,activebossbots1.x,activebossbots1.y,activebossbots1.height,activebossbots1.width)
    c.drawImage(shootalienimage,activebossbots2.x,activebossbots2.y,activebossbots2.height,activebossbots2.width)
    c.drawImage(life,homelife.x,homelife.y,homelife.height,homelife.width)
    c.drawImage(playerhealth,playerlife.x,playerlife.y,playerlife.height,playerlife.width)
    c.drawImage(playerhealth2,playerlife2.x,playerlife2.y,playerlife2.height,playerlife2.width)
   /*  c.drawImage(turretbullet,turretbullets.x,turretbullets.y,turretbullets.height,turretbullets.width); */
    botss.forEach((bots,index) =>{
        if(bots.position.y + bots.radius <=0){
            botss.splice(index,1);
        }
        else{
            bots.update();
        }
    })
    if(score>1000 && score<1400){
        c.drawImage(shield,shields.x,shields.y,shields.height,shields.width);
        homelife.width+=0;
        }
    if(score>600 && score<1000){
        c.drawImage(turret,turrets.x,turrets.y,turrets.height,turrets.width);
        c.drawImage(turretbullet,turretbullets.x,turretbullets.y,turretbullets.height,turretbullets.width);
        for(let i=0;i<turretbulletArray.length;i++)
        {
            let tbullet=turretbulletArray[i];
            tbullet.x+=1;
            tbullet.y+=1;
            for(let i=0;i<aliens.length;i++){
                let slope4=((tbullet.y)-(aliens[i].y))/((tbullet.x)-aliens[i].x);
                angle4= Math.atan(slope4); 
                tbullet.x+=/* Math.sin((Math.PI/2-angle4))*5 */1                
                tbullet.y+=/* Math.cos((Math.PI/2-angle4))*5 */1
                console.log("sai");
            }

        }
    } 
     for(let i=0;i<bossalienArray.length;i++)
    {
        let galien=bossalienArray[i];
        galien.y+=0.1;
        if(galien.alive){
            c.drawImage(shootalienimage,galien.x,galien.y,galien.width,galien.height)
            c.fillText("Boss Bot",galien.x+20,galien.y-20)
            for(let i=0;i<bossbulletArray.length;i++)
            {
                let bullet2=bossbulletArray[i];
                bullet2.x+=0;
                if(galien.y>=0){
                   bullet2.y+=5;
                   bullet2.x+=0;
                   c.drawImage(shootalienimage,bullet2.x,bullet2.y,bullet2.height,bullet2.width)
                }
                if(galien.y>=100){
                    galien.y-=1;
                }
                /* bossaudio.play(); */
                if(bullet2.y>=500 && bullet2.y<=550){
                    if(score<1000){

                        homelife.width-=1
                    }
                    else if(score>1400){
                        homelife.width-=1;
                    }
                }
            }
            
        }
    }
    for(let i=0;i<shootingalienArray.length;i++)
    {
        let salien=shootingalienArray[i];
        salien.x+=vel;
        if(salien.x>=1500 || salien.x<=0) {
            vel*=-1;
        }

         if(salien.alive){ 
            c.drawImage(shootalienimage,salien.x,salien.y,salien.height,salien.width)
            c.fillText("Bot",shootingalien.x+10,shootingalien.y-10);
                
            for(let i=0;i<bulletArray.length;i++)
            {
                let bullet=bulletArray[i];
                c.drawImage(shootalienimage,salien.x,salien.y,salien.height,salien.width)
                c.drawImage(shootalienimage,bullet.x,bullet.y,bullet.height,bullet.width)
                let slope2=((salien.y)-(newplayer.position.y))/((salien.x)-(newplayer.position.x+(newplayer.width/2)));
                angle2 = Math.atan(slope2); 
                if(salien.x>=newplayer.position.x){
                    salien.x+=0;
                    angle2+=Math.PI;
                }
                if(salien.x==newplayer.position.x){
                    salien.x+=0;
                    angle2+=Math.PI;
                }
                    bullet.x+=Math.sin((Math.PI/2-angle2))*5,
                    bullet.y+=Math.cos((Math.PI/2-angle2))*5

                if( bullet.y <= home.y +home.width  &&
                    bullet.x  >=home.x  &&
                    bullet.x  <=home.x +home.height  && 
                    bullet.y >=home.y ){
                        if(score<1000){

                            homelife.width-=0.05
                        }
                        else if(score>1400){
                            homelife.width-=0.5;
                        }
                }
                if( bullet.y <= newplayer.position .y +newplayer.width  &&
                    bullet.x  >=newplayer.position.x  &&
                    bullet.x  <=newplayer.position.x +newplayer.height  && 
                    bullet.y >=newplayer.position.y ){
                    playerlife2.height-=1;
                }
            }
         } 
/*          if(score >= 1000 && z){
             salien.alive=true;
         } */
    }
  
    if(homelife.width==-20){
        alert("game over");
    }
    for(let i=0;i<alienArray.length;i++){
        let alien=alienArray[i];
        if(alien.alive){
            alien.y+= alienvelocityY ;
            alien.x+= alienvelocityX ;
            c.drawImage(alienimage,alien.x,alien.y,alien.height,alien.width);
            if(alien.y>=500 && alien.y<=550){
                if(score<1000){

                    homelife.width-=0.05
                }
                else if(score>1400){
                    homelife.width-=0.5;
                }
            }
            activebossbots1.y+=alienvelocityY;
            activebossbots2.y+=alienvelocityY;

            
        }
    }
     for(let i=0;i<alienArray2.length;i++)
     {
        let alien2=alienArray2[i];
        if(alien2.alive){
            alien2.y+=alienvelocityY;
            c.drawImage(alienimage,alien2.x,alien2.y,alien2.height,alien2.width);
        }
    } 
     for(let i=0;i<alienArray3.length;i++)
     {
        let alien3=alienArray3[i];
        if(alien3.alive) {
            alien3.y+=alienvelocityY;
            alien3.x-=alienvelocityX;
            c.drawImage(alienimage,alien3.x,alien3.y,alien3.height,alien3.width);
            
        }
     }
     for(let i=0;i<alienArray4.length;i++)
     {
        let alien4=alienArray4[i];
        if(alien4.alive){
            alien4.y+=0.15;
            alien4.x+=alienvelocityX;
            c.drawImage(alienimage,alien4.x,alien4.y,alien4.height,alien4.width);
            
        }
     }
     for(let i=0;i<alienArray5.length;i++)
     {
        let alien5=alienArray5[i];
        if(alien5.alive){
            alien5.y+=0.15;
            alien5.x-=alienvelocityX;
            c.drawImage(alienimage,alien5.x,alien5.y,alien5.height,alien5.width);
            
        }
     }
     botss.forEach((bots) =>{
        if(bots.position.x==190 /* && bots.position.y==20 */)
        {
            shootingalien.alive=false
        }
     })
     if(playerlife2.height<=0 && y){
        setTimeout(() =>{

            alert("gameover");
            y=false
            location.reload();
        },0)
     } 
alienArray.forEach((alien,i) =>{
    botss.forEach((bots,j) =>{
        if(
           bots.position.y - bots.radius <= alien.y +alien.height  && bots.position.x + bots.radius >=alien.x  &&
           bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >= alien.y 
        ){
            setTimeout(() =>{
               alienArray.splice(i,i);
                 botss.splice(j,1);  
           },0)
           alien.alive=false
           alienCount--;
           score=score+5;
        }
   })      
})
alienArray.forEach((alien,i) =>{
        if(
           newplayer.position.y  <=alien.y +alien.height  &&newplayer.position.x  >=alien.x  &&
           newplayer.position.x  <=alien.x +alien.width  && newplayer.position.y  >= alien.y 
        ) {
             playerlife2.height=playerlife2.height-0.1;
        }    
})
if(newplayer.position.x==alien)
shootingalienArray.forEach((alien,i) =>{
    botss.forEach((bots,j) =>{
        if(
           bots.position.y - bots.radius <=alien.y +alien.height  &&bots.position.x + bots.radius >=alien.x  &&
           bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >=alien.y 
        ){
           alienCount--;
           alienlife2.height-=10;
           if(alienlife2.height<=0){
            alien.alive=false;
            score=score+5;
           }
        }
           
        })
   })      
alienArray2.forEach((alien,i) =>{
    botss.forEach((bots,j) =>{
        if(
           bots.position.y - bots.radius <=alien.y +alien.height  &&bots.position.x + bots.radius >=alien.x  &&
           bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >=alien.y 
        ){
            setTimeout(() =>{
               alienArray2.splice(i,i);
                 botss.splice(j,1);  
           },0)
           alien.alive=false
           alienCount--;
           score++;
        }
   })      
})
alienArray2.forEach((alien,i) =>{
        if(
           newplayer.position.y  <=alien.y +alien.height  &&newplayer.position.x  >=alien.x  &&
           newplayer.position.x  <=alien.x +alien.width  && newplayer.position.y >= alien.y 
        ){
             playerlife2.height=playerlife2.height-0.1;
        }      
})
alienArray3.forEach((alien,i) =>{
    botss.forEach((bots,j) =>{
        if(
           bots.position.y - bots.radius <=alien.y +alien.height  &&bots.position.x + bots.radius >=alien.x  &&
           bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >= alien.y 
        ) {
            setTimeout(() =>{
               alienArray3.splice(i,i);
                 botss.splice(j,1);  
           },0)
           alien.alive=false
           alienCount--;
           score=score+5;
        }
   })      
})
alienArray3.forEach((alien,i) =>{
    botss.forEach((bots,j) =>{
        if(
           newplayer.position.y  <=alien.y +alien.height  &&newplayer.position.x  >=alien.x  &&
           newplayer.position.x  <=alien.x +alien.width  && newplayer.position.y  >= alien.y 
        ) {
           playerlife2=playerlife2.height-0.1;
        }
   })      
})
alienArray4.forEach((alien,i) =>{
    botss.forEach((bots,j) =>{
        if(
           bots.position.y - bots.radius <=alien.y +alien.height  &&bots.position.x + bots.radius >=alien.x  &&
           bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >=alien.y 
        )
        {
            setTimeout(() =>{
               alienArray4.splice(i,i);
                 botss.splice(j,1);  
           },0)
           alien.alive=false
           alienCount--;
           score=score+5;
        }
   })      
})
let i=0;
alienArray4.forEach((alien,i) =>{
         if(
           newplayer.position.y <=alien.y +alien.height   &&newplayer.position.x >=alien.x    &&
           newplayer.position.x  <=alien.x +alien.width   && newplayer.position.y  >= alien.y 
        ){
            i++;
            if(i>0){
                playerlife2.height=playerlife2.height-0.1;
            }
        } 
 
})
alienArray5.forEach((alien,i) =>{
    botss.forEach((bots,j) =>{
        if(
           bots.position.y - bots.radius <=alien.y +alien.height  &&bots.position.x + bots.radius >=alien.x  &&
           bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >=alien.y 
        ){
            setTimeout(() =>{
               alienArray5.splice(i,i);
                 botss.splice(j,1);  
           },0)
           alien.alive=false
           alienCount--;
           score=score+5;
        }
   })      
})
alienArray5.forEach((alien,i) =>{
        if(newplayer.position.y  <=alien.y +alien.height  &&newplayer.position.x >=alien.x  &&
           newplayer.position.x  <=alien.x +alien.width  && newplayer.position.y  >=alien.y 
        ) {
           playerlife2=playerlife2.height-0.1;
        }    
})
shootingalienArray.forEach((alien,i) =>{
    botss.forEach((bots,j)=>{
        if(bots.position.y - bots.radius <=alien.y +alien.height  &&bots.position.x + bots.radius >=alien.x  &&
           bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >=alien.y 
        ){
            alienlife2.height-=2;
           if(alienlife2.height <= 0){
            alien.alive=false;
             setInterval(() =>{
                shootbullet
             },2000)
             /* alienaudio.pause();
             alienaudio.currentTime=0; */
           }
           score=score+10;
        }
   })
})
bossalienArray.forEach((alien,i) =>{
    botss.forEach((bots,j)=>{
         if(bots.position.y - bots.radius <=alien.y +alien.height  && bots.position.x + bots.radius >= alien.x  &&
         bots.position.x - bots.radius <=alien.x +alien.width  && bots.position.y + bots.radius >= alien.y 
         ){
             bosslife2.height-=5;
             if(bosslife2.height ==0){
                setTimeout(() =>{
                    bossalienArray.splice(i);
                },0)
            }
            score=score+20;
         }
    })
})
if(newplayer.position.x==400 || newplayer.position.y==400){ 
     playerlife2.height+=(150-playerlife2.height)
     playerlife2.alive=false
}

     if(keys.a.pressed && newplayer.position.x>=0){
         newplayer.velocity.x=-5;
     }
     else if(keys.d.pressed && newplayer.position.x +newplayer.width <=(canvas.width-20)){
         newplayer.velocity.x=5;
     }
     else if(keys.w.pressed && newplayer.position.y>=30){
          newplayer.velocity.y=-5;
     }
     else if(keys.s.pressed  && newplayer.position.y>=window.innerHeight ){
        newplayer.velocity.y=5;
     }
     else{ 
         newplayer.velocity.x=0;
         newplayer.velocity.y=0;
     } 
     if(homelife.width <= -120 && x){
       alert("gameOver");
       x=false
       location.reload();
    }
}
animate()
if(newplayer.position.x>=canvas.width || newplayer.position.y>=canvas.height){
    newplayer.velocity.x=0;
    newplayer.velocity.y=0;
}
if(keys.a.pressed && newplayer.position.x>=0){
    newplayer.velocity.x=-5;
}
else if(keys.d.pressed && newplayer.position.x +newplayer.width <=canvas.width){
    newplayer.velocity.x=5;
}
else if( keys.w.pressed && newplayer.position.y>=0){
    newplayer.velocity.y=-5;
}
else{ 
    newplayer.velocity.x=0;
    newplayer.velocity.y=0;
} 
window.addEventListener("keydown", e=>{
    switch(e.key){
        case 'a':
            keys.a.pressed=true
            newplayer.velocity.x=-5;
            if(newplayer.position.x<=0){
                newplayer.velocity.x=0;
            }
            break
            
        case 'd':
            keys.d.pressed=true
            newplayer.velocity.x=5;
            if(newplayer.position.x>=window.innerWidth-30){
                newplayer.velocity.x=0;
            }
            break
        case 's':
            keys.s.pressed=true;
            newplayer.velocity.y+=5;
            if(newplayer.position.y>=window.innerHeight-130){
                newplayer.velocity.y=0;
            }
            break    
        case 'w':
            keys.w.pressed=true; 
            newplayer.velocity.y-=5; 
            if(newplayer.position.y<=0)  {
                newplayer.velocity.y=0
            }
}})
if(newplayer.position.y<=0){
    newplayer.velocity.y=0
}
window.addEventListener("keyup", e=>{
    switch(e.key){
        case 'a':
             keys.a.pressed=false
            break
            
        case 'd':
             keys.d.pressed=false;
            break
        case 's':
            keys.s.pressed=false;
            break
        case 'w':
            keys.w.pressed=false;
            break       
}}) 
let mouse={
    x:0,
    y:0
}
window.addEventListener("mousemove",(e) =>{
      mouse.x=e.x;
      mouse.y=e.y;
      let slope=((mouse.y)-(newplayer.position.y))/((mouse.x)-(newplayer.position.x+(newplayer.width/2)));
      angle = Math.atan(slope)
      if(mouse.x<newplayer.position.x){
          angle+=Math.PI;
      }
})
 window.addEventListener("click",e =>{
    botss.push(
        new bots({
            position:{
                x:newplayer.position.x+newplayer.width/2,
                y:newplayer.position.y
            },
            velocity:{
                x:Math.sin((Math.PI/2-angle))*5,
                y:Math.cos((Math.PI/2-angle))*5,
            }    
        })
        
        ) 
})
var myInterval=setInterval(() => {
    createAliens();
},13000);
setInterval(() =>{
    createbullets();
    /* alienaudio.play(); */
},1500)
setInterval(() =>{
    createAliens1();
},25000)
setInterval(() =>{
    createturretbullets();
},1500);
setInterval(() =>{
    creates();
},25000)
setInterval(() =>{
    createbossbullets();
    /* bossaudio.play(); */
},25000)
setInterval(() =>{
    createAliens2();
},20000)
setInterval(() =>{
    createAliens3();
},18000)