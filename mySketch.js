var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){ //預設值(工廠)
		this.r=args.r || 100
		// this.p={x:random(width),y:random(height)}
		this.p=args.p
		this.v={x:random(-5,5),y:random(-5,5)}
		this.a = args.a || {x:0,y:1}
		this.color = random(colors)
	}
	draw(){
		fill(this.color)
		circle(this.p.x, this.p.y , this.r);
		// fill(ball.color)
		// circle(ball.p.x, ball.p.y , ball.r);
	}
	update(){
		this.p.x=this.p.x+this.v.x
		this.p.y+=this.v.y
		this.v.x+=this.a.x
		this.v.y+=this.a.y
		// ball.p.x=ball.p.x+ball.v.x
		// ball.p.y+=ball.v.y
		this.v.x*=0.99
		this.v.y*=0.99
		if(this.p.y>height){
			this.v.y=-abs(this.v.y)
		}
	}
}
var ball
var balls=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<50;i++){
		ball = new Ball({
			r: random(100),
			p:{x:width/2,y:height/2}
		})
		balls.push(ball)
	}
}

function draw() {
	background(0);
	for(let ball of balls){
		// let ball = balls[i];
		ball.draw()
		ball.update()
		
// 		fill(ball.color)
// 		circle(ball.p.x, ball.p.y , ball.r);
		
// 		ball.p.x=ball.p.x+ball.v.x
// 		ball.p.y+=ball.v.y
	}
}