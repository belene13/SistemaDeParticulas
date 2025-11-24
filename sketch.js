let sp = [];
let estrellas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noCursor();


  for (let i = 0; i < 400; i++) {
    estrellas.push({
      x: random(width),
      y: random(height),
      tam: random(1, 3),
      brillo: random(150, 255)
    });
} 
}


function dibujarFondoEstrellado() {
  for (let e of estrellas) {
    noStroke();
    fill(255, e.brillo);
    circle(e.x, e.y, e.tam);
  }
}


function draw() {
  background(0);
  dibujarFondoEstrellado();


  
  for (let i = 0; i < sp.length - 1; i++) {
    let d = dist(sp[i].pos.x, sp[i].pos.y, mouseX, mouseY);
    let alpha = map(d, 0, 350, 255, 0);
    alpha = constrain(alpha, 0, 255);

    stroke(150, 150, 255, alpha);
    strokeWeight(2);
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
  }




  // Actualizar y dibujar cada partícula
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
