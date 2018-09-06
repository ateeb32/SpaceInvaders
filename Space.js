window.alert("Welcome to this game!");

 var number = 0;
 //var bulletB = 0;
 var y;
 var ship;
 var battlespace = document.getElementById("battlespace");
 function load()
 {
     createplayer();
     setInterval(moveBullet,500);
     setInterval(createEnemy,2000);
     setInterval(moveEnemy,500);
      console.log("loaded");
 }
 function theCode(event)
 {
    var x = event.keyCode;
    switch (x)
    {
        case 13:
        load();
        case 37:
        case 65: move(number-5);
        break;

        case 39:
        case 68: move(number+5);
        break;

        case 32:
        shoot();
        break;

    }
     //console.log("keycode: " +x);
 }

 function move(n) 
 {
   ship.style.left = n + "px";
    number = n;
 }

 function moveBullet() 
 {
    var bullets = document.getElementsByClassName("bullet");
    for(var i = 0; i< bullets.length; i++)
    {
        var posit =  bullets[i].getBoundingClientRect();
        var newPos = posit.bottom+10;
        console.log( "bullet moving from "+posit.bottom+ " to " + newPos);
        bullets[i].style.bottom =  newPos+ "px";
    }
    //console.log("bullets lenght: " +bullets.length);
 }

function shoot() 
{
    var bullet = document.createElement("pre");
    bullet.className = "bullet";
    bullet.textContent = "|";
    var shipSize = ship.getBoundingClientRect();
    bullet.style.top = (shipSize.top -40) + "px";
    bullet.style.left = (shipSize.left + 25) + "px";
    bullet.style.position = "absolute";
    bullet.style.color = "green";
    //
    battlespace.appendChild(bullet);
}

function createEnemy()
{
    var enemyBody = document.createElement("pre");
    enemyBody.className="enemy";
    enemyBody.textContent = "----\n----\n----";
    enemyBody.style.position = "absolute";
    enemyBody.style.color = "red";
     //
    var size = battlespace.getBoundingClientRect();
    var x = Math.floor((Math.random() * size.right) + 10);
    enemyBody.style.left = (size.left + x) + "px";
    battlespace.appendChild(enemyBody);

}

function moveEnemy()
{
    var enemies = document.getElementsByClassName("enemy");
    for (var i = 0; i <enemies.length; i++)
    {
        var pos =  enemies[i].getBoundingClientRect();
        enemies[i].style.top = (pos.top+10) + "px";
        //console.log( "enemy moving by " + (pos.top+10));
    }
    //console.log("enemies lenght: " + enemies.length);
}
function createplayer()
{
    ship = document.createElement("pre");
    ship.className="ship";
    ship.textContent = "   *   \n  ***   \n *****  \n*******";
    ship.style.position = "absolute";
    ship.style.color = "blue";
     //
    ship.style.bottom = 50 + "px";
    document.getElementById("footer").appendChild(ship);

}