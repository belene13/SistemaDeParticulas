let sp = [];
let estrellas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noCursor();


  for (let i = 0; i < 100; i++) {
		let ne = new Estrella();
		estrellas.push(ne);
    }
  }
  


function draw() {
  background(0);


  for (e of estrellas) {
		e.update();
		e.display();
	}


  
  for (let i = 0; i < sp.length - 1; i++) {
    let d = dist(sp[i].pos.x, sp[i].pos.y, mouseX, mouseY);
    let alpha = map(d, 0, 350, 255, 0);
    alpha = constrain(alpha, 0, 255);

    stroke(150, 150, 255, alpha);
    strokeWeight(2);
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
  }




  
  for (const [index, particula] of sp.entries()) {
    particula.update();
    particula.display();

    if (particula.estaMuerta) {
      sp.splice(index, 1);
      console.log("n Particulas: " + sp.length);
    }
  }

  let np = new Particula(mouseX, mouseY);
  sp.push(np);
  }

  function mouseClicked() {
    let np = new Particula(mouseX, mouseY);
    sp.push(np);
    
    console.log("n Particulas: " + sp.length);
  }
