(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/partLogo.png", id:"partLogo"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.partLogo = function() {
	this.initialize(img.partLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,77);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4AE73").s().p("AAKAbIgdgHQgQgDgKgJQgKgIACgKQACgKANgFQANgEAQADIAdAGQAQAEAKAJQAKAHgCAKQgCAKgNAFQgHADgJAAIgNgBg");
	this.shape.setTransform(-1,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E19D6C").s().p("AAJAhIgdgHQgQgDgKgLQgJgLACgKQADgNANgGQANgHAQADIAdAHQAQADAKALQAJALgCAKQgDANgNAGQgJAFgKAAIgKgBg");
	this.shape_1.setTransform(-0.5,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4AE73").s().p("AgXBOQgLgDgCgSQgCgTAHgXIAOgsQAHgXALgPQAMgOALAEQAKADADASQACATgHAXIgOAsQgHAXgLAPQgKALgJAAIgEgBg");
	this.shape_2.setTransform(4,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4AE73").s().p("AgNBCQgJgRgCgYIgDguQgBgYAGgSQAHgRALgBQAJgBAJARQAJAQABAZIAEAuQABAYgGARQgHASgLABIgBAAQgJAAgIgQg");
	this.shape_3.setTransform(-2.6,-9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4AE73").s().p("AAHAwQgNgIgBgRQgPAJgOgIQgMgFgDgMQgEgLAGgLIAKgUQAFgLAMgDQAMgEAKAGQAOAHABASQAOgIAPAGQAPAJgIAeQgEATgKAKQgIAIgJAAQgGAAgHgEg");
	this.shape_4.setTransform(7.6,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E19D6C").s().p("AAHAwQgNgIgBgRQgPAIgOgHQgLgGgEgMQgEgJAGgLIAKgUQAFgLAMgEQAMgEAKAGQAOAIABARQAOgJAPAIQAHADACAMQACAJgEANQgEAUgKAKQgIAIgJAAQgGAAgHgEg");
	this.shape_5.setTransform(7.6,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4AE73").s().p("Ah3A2IAygpIABgEQABg6Aag2IAsgJIAZAFIBcBJIAAAdIgmAgQgrAfgyACIgzA1g");
	this.shape_6.setTransform(-1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-17.8,26.1,35.7);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F2E7").s().p("AgtAkQgKgDgIgEIgBgGQAAgEACgDQACgDAFgBIgBAAQgPgFgHgNIgCgFIASACQAiABAdgGQAhgGAfgLQAKgDAGgEIAAAFQgBARgOAJQAEAAAEACQADACABADIABAGIgQALQgYAPgdAEQgNADgOAAQgOAAgOgDg");
	this.shape.setTransform(-0.6,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB8460").s().p("Ag/A7QgOgDgKgFQgagLgRgTQgHgGgEgIIgHATIAAgHQAAgSAKgLQAKgOARgFIANgEIgIAFQgOAIgIALQAHAFALABIAYADQAsAAAqgGQAlgGAsgPQAagKAMgMQgMgHgQgEIgIgCIANgBQARAAAOAKQAOAKAFAQIADAIQgHgLgGgGQAAAGgFALQgRAhgjAWQggAUgmAFQgQADgRAAQgUAAgTgFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-6.4,29.9,12.9);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAF3E6").s().p("AgEAKIgDgCQgCgCgBgEIgBgCQAAgFAEgDIAEgCQAJAHAGAFQgCAIgHABIgDAAIgEgBg");
	this.shape.setTransform(2.4,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF3E6").s().p("AgHAAQAAgHAHAAQADAAADACQACADAAACQAAAIgIAAQgHAAAAgIg");
	this.shape_1.setTransform(1.1,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A282B").s().p("AgOAOQgFgGAAgIQAAgHAFgGQAHgGAHAAQAIAAAHAGQAFAGAAAHQAAAIgFAGQgHAGgIAAQgHAAgHgGg");
	this.shape_2.setTransform(-0.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#349BB3").s().p("AgVAWQgKgJABgNQgBgMAKgJQAKgKALAAQAMAAAKAKQAKAJAAAMQAAANgKAJQgKAKgMAAQgLAAgKgKg");
	this.shape_3.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.2,7.3,6.5);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAF3E6").s().p("AgDAJIgEgCQgCgDgBgDIAAgBQAAgFADgEIABAAQAKAHAIAGQgDAFgFABIgEAAQgBABgCgCg");
	this.shape.setTransform(2.4,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF3E6").s().p("AgHAAQAAgCADgDQACgCACAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1.setTransform(1.1,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A282B").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_2.setTransform(-0.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#349BB3").s().p("AgVAWQgKgJAAgNQAAgMAKgJQAJgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAJQgJAKgNAAQgMAAgJgKg");
	this.shape_3.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.2,7.2,6.5);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AgmAqQgkgOgVgcQAVAZAjALQAkAMAbgJQAdgJAUgZQATgWAEggQgCAjgSAYQgTAbgeAJQgMAEgOAAQgRAAgWgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-5.1,19.4,10.1);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AiPBbQAlALA3gNQA1gMAsgfQArgeAagmQAagnACgmQACAngZAqQgZAogtAfQgsAfg4ALQgXAFgUAAQgcAAgWgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-10,28.8,20.1);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AiPBbQAlALA3gNQA1gMAsgeQArgeAagmQAagoACgmQACAngZAqQgZAogtAfQgtAfg3ALQgYAFgUAAQgcAAgVgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-10,28.8,20.1);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AEuImQgXgDgRgJQgUgLgHgSQgNgcjeAAQjdAAgNAcQgPAjg0AGQh4APhpgXQiFgdg4hTQgQgZADgQQACgTAfAIQAcAHAOgkQAJgXAEgiIAEg7QANh1Alh0QAlh4A4hkQA6hnBShIQBNhCBRgoQBcguBZgHIAQgBIANABQBZAHBdAuQBRAoBMBCQBRBGA7BpQA4BkAmB4QAkB0ANB1IAFA7QADAiAJAXQAPAkAbgHQAfgIADATQACARgQAYQg4BTiEAdQhBAOhGAAQgtAAgugGg");
	this.shape.setTransform(0,-50.5,1,1,0,0,0,0,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-55.6,146.1,111.3);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB8460").s().p("AhAARQAaACAZgDQANgCAIgDQApgLAPggQAEANgFANQgFALgLAJQgSAQgdADIgKAAQggAAgWgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-3.3,13.2,6.8);


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZAWQgMgFgQgKQgQgIgLgKQgLgJACgDQACgDANAFQANAFAPAKQARAIAKAKQALAJgCADQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgEAAgIgDg");
	this.shape.setTransform(5.3,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAWQgNgFgPgKQgQgIgLgKQgLgJACgDQACgDANAFQANAFAPAKQARAIAKAKQALAJgCADQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgEAAgIgDg");
	this.shape_1.setTransform(-5.3,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAGQgOgDAAgDQAAgCAOgCQAOgDASAAQATAAAOADQAOACAAACQAAADgOADQgOACgTAAQgSAAgOgCg");
	this.shape_2.setTransform(6.2,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAGQgOgDAAgDQAAgCAOgCQAOgDASAAQATAAAOADQAOACAAACQAAADgOADQgOACgTAAQgSAAgOgCg");
	this.shape_3.setTransform(-6.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAhQgDgCAJgMQAHgMAOgMQAMgOAMgHQAMgJACADQACADgIALQgHALgOAMQgMAOgMAJQgJAGgDAAIgCgBg");
	this.shape_4.setTransform(-4.3,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAhQgDgCAJgMQAHgMAOgMQAMgOAMgHQAMgJACADQACACgHAMQgJAMgOAMQgMAOgLAHQgJAHgDAAIgCgBg");
	this.shape_5.setTransform(4.4,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAhQgDgOAAgTQAAgSADgOQACgOACAAQADAAACAOQADAOAAASQAAATgDAOQgCAOgDAAQgCAAgCgOg");
	this.shape_6.setTransform(0,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAhQgDgOAAgTQAAgSADgOQACgOACAAQADAAACAOQADAOAAASQAAATgDAOQgCAOgDAAQgCAAgCgOg");
	this.shape_7.setTransform(0,-6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4B937").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.9,21.8,21.8);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AhZgHQgLgBgEgCQgFgCACgIQAEgNAMgDQALgDAUACQA8AGAoAOQAvARASAWQAFAFgBAEQgBAGgJACQhOgnhugHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-3.9,21.9,7.9);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AhsAfQAAgEAEgFQASgWAvgRQAogOA8gGQAUgCALADQAMADAEANQACAIgFACQgEACgLABQhuAHhOAnQgJgCgBgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-3.9,21.9,7.9);


(lib.Symbol122copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AgOhIQgBgLAFgIQAEgIAGAAQAHAAAEAIQAFAJgBAKIgQCsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-10.1,3.2,20.2);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("Ag8hsQgIgRgBgPQgBgOAGgDQAHgDAKALQAJALAHARIBlEYg");
	this.shape.setTransform(-0.2,17.3,1,1,23.5,0,0,7,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-17.3,3.2,34.6);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DB6A").s().p("AkkElQh6h5AAisQAAiqB6h6QB6h6CqAAQCrAAB6B6QB6B6AACqQAACsh6B5Qh6B6irAAQiqAAh6h6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.5,83.1,83);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AkQEQQhwhxAAifQAAieBwhxQByhxCeAAQCfAAByBxQBwBxAACeQAACfhwBxQhyBxifAAQieAAhyhxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-38.5,77.2,77.2);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiTADQAlgJA4gGQBugLBcAZQhdAOhJAAQhJAAg4gNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-1.7,29.8,3.4);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAYQhPANg9AAQg+AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA3gLQBBgIA3ASQg4ALgrAAQgrAAghgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.3,17.7,2.6);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXABQA3gSBBAJQAhAEAWAHQgiAJgqAAQgsAAg3gLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.2,17.7,2.5);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AirACQBrgYCAAKQBBAGArAIQhCAOhVAAQhVAAhrgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-1.6,34.5,3.3);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA4gKQBAgJA3ASQg4ALgrAAQgrAAghgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.2,17.7,2.5);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAYQhPANg+AAQg9AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ABQBOgXBcALQAwAFAfAJQgwAMg9AAQg+AAhOgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA3gLQBAgJA4ATQg4ALgsAAQgqAAghgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.3,17.7,2.6);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAXQhPAOg+AAQg9AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA3gLQBAgJA4ATQg3ALgrAAQgrAAgigKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.2,17.7,2.6);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AirADIBsgOQB/gLBsAYQhqANhVAAQhWAAhCgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-1.6,34.6,3.2);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AirACIBsgOQCAgKBrAYQhrAOhVAAQhVAAhCgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-1.6,34.6,3.3);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXABQA3gTBBAJQAhAFAWAGQghAKgqAAQgsAAg4gLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.3,17.7,2.6);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiUACQBdgaBuAMQA4AGAmAJQg6ANhJAAQhKAAhcgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-1.7,29.8,3.4);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiUADIBegPQBugLBdAZQheAOhJAAQhJAAg5gNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-1.7,29.8,3.4);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhrADIBEgOQBQgLBDAXQhFAOg1AAQg0AAgpgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-1.5,21.7,3.1);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAXQhPAOg/AAQg8AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AADCHIAAgVIAPAAIAHgBQACgCAAgEIAAhbIg2BPIAAALQAAAGACABQABABAGAAIAQAAIAAAVIhigBIAAgUIAQAAIAHgBQACgCAAgFIAAiFQAAgFgCgBIgHgBIgQAAIAAgVIBiAAIAAAVIgPAAIgHABQgDABAAAFIAABYIA2hOIAAgJQAAgIgFAAIgTAAIAAgVIBiAAIAAAVIgQAAQgFAAgCABQgCABAAAFIAACGQAAAEACACQACABAFAAIAQAAIAAAVgAgohQQgPgNAAgSQAAgLAHgGQAGgGAIAAQAGAAAGAFQAGAEAAAKQAAAHgBABIgDAEIgGAFIgBADQAAALAbAAQAcAAAAgLIgBgCIgCgCIgCgBQgGgFAAgKQAAgJAFgEQAGgGAGAAQAJAAAGAHQAGAGAAAKQAAAKgGAKQgGAKgMAHQgNAGgSAAQgZAAgPgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-13.5,20.4,27.1);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AADBfIAAgVIAPAAIAHgBQADgBAAgFIAAhZIg2BNIAAAMQAAAFABABQACABAGAAIAPAAIAAAVIhiAAIAAgVIAQAAIAHgBQACgBAAgFIAAiFQABgFgDgBIgHgBIgQAAIAAgVIBiAAIAAAVIgPAAQgFAAgCABQgCABAAAFIAABXIA2hNIAAgKQAAgIgGABIgTAAIAAgVIBiAAIAAAVIgQAAIgHABQgCABAAAFIAACFQAAAFACABIAHABIAQAAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.5,20.4,19.1);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AAOA1QgFgegDgGQgGgOgVAAIAABAQAAAFADABIAHABIANAAIAAAVIhhAAIAAgVIAQAAIAIgBQACgBAAgFIAAiFQAAgFgCgBIgIgBIgQAAIAAgVIBiAAIAAAVIgOAAIgHABQgDABAAAFIAAA0IABAAQAMAAAGgCQAJgFAEgXQAEgVACgGQAJgdAaABQAOgBAJAKQALAJAAAOQgBAMgFAIQgHAIgLAAQgKAAgGgGQgGgGAAgLQAAgEADgFIACgEIgDABQgFADgDARIgEAVQgEAVgMAHQATAFALALQAKAMAEAXQACASAGAAQADAAACgEQADgGABgLIAAgFIAVAAIgBAFQgBAYgJAOQgLAUgVgBQgeAAgJgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-10.1,19.2,20.2);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("Ag6BFQgYgdAAgoQAAgoAXgdQAYgeAkAAQAbAAAWAPIAHgKIAQAAIACBNIgUAAIAAgDQgMg6gjAAQgkAAAABNQAABOAnAAQASAAAOgOQAMgMAFgRIAAgEIAXAAIgCAFQgGAegTARQgUASgeAAQgmABgaggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.1,16.7,20.2);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("ABKB6IgBgFQgCgjgYgKQgLgDgcAAIgfAAQgWAAgKAFQgRALgBAgIAAAFIgWAAIAAhLIAKAAQAJAAAEgBQAIgEAKggQAMgrACgnQABgGgBgGQgBgJgCgDQgDgEgIAAIgRAAIAAgVICjAAIAAAVIgTAAIgHABQgDABAAAGIAACCQAAAJAHAAIAaAAIAABLgAgsAvIAyAAQAJAAAAgFIAAiGQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgEAAIgQAAQgFAAgCACQgEAEgCAVQgEAygIAdQgFAXgHAMIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-12.2,19.3,24.4);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AACBfIAAgVIAQAAIAHgBQACgBAAgFIAAhZIg2BNIAAAMQAAAFACABQABABAGAAIAQAAIAAAVIhiAAIAAgVIAQAAIAHgBQACgBAAgFIAAiFQAAgFgCgBIgHgBIgQAAIAAgVIBiAAIAAAVIgPAAIgHABQgDABAAAFIAABXIA2hNIAAgKQAAgIgFABIgUAAIAAgVIBjAAIAAAVIgQAAIgHABQgDABAAAFIAACFQAAAFADABIAHABIAQAAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-9.5,20.4,19.1);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AhZBXQgMgLAAgQQAAgNAJgKQAIgLAOAAQAMAAAGAIQAHAIAAAMQAAAIgFAGQgEAEgFADIgBABIACAAQAKgBAIgOQANgYAAgzIAAgjQAAgOgGgGQgFgFgNAAIgLAAIAAgVICkAAIAAAVIgRAAQgFAAgBABQgDABAAAFIAACFQAAAFADACQABABAFAAIARAAIAAAUIhkAAIAAgVIAQAAQAGAAABgBQADgBAAgFIAAiGQAAgFgEAAIgNAAQgJAAgCAEQgEAEgCAQIgBAqQgCApgHAXQgOAnggAAQgQAAgLgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-9.6,20.5,19.4);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D3327").s().p("AuVAHIAAgNIcpAAIACANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-0.7,183.6,1.6);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D3327").s().p("AlcAHQAOgHAKgGITaAAIAAAOgAuVAHIAAgOIFDAAQAKAHAOAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-0.8,183.6,1.6);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AuVDBIAAmCIF5AAQAmAMArAAQArAAAngMIUPABIAAGCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-19.4,183.6,38.8);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AAID1QgmgFgkgQQgogSgagcQhEhJADhpQAChrBHhGQAlgkAygSQAsgRA0ABQgxABgpARQgtASgjAiQhHBGgDBrQgCBpBEBJQAaAcAoASQAkAQAmAFQAQADAPAAIgGAAQgTAAgTgDgABlDKQAxgCAwgXIgEAIQgrARgrAAIgHAAgABUjGQA7gDAtAgIABAKQgsgmg9gBg");
	this.shape.setTransform(-2.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("Ag3D3Qg5gUgjgmQhIhNAChwQAChxBMhKQAtgsA9gTQA4gSA/AJIAxAIQAZACAZgNIAPCQQgXgigmgRQglgRgqADQhHAEgnBDQglA9AKBMQANBwBYAmQBbAmBnhDQgZBtiIAIIgSAAQgvAAgvgQgAgsjnQgxASglAlQhIBGgCBqQgCBqBEBJQAaAbAoASQAjAQAmAGQAXADAVgBQgOAAgRgCQgmgGgjgQQgogSgagbQhFhJADhqQAChqBIhGQAigiAugTQApgRAwgBIgFAAQgvAAgsAQgABfDKQAuACAugTIAFgIQgwAYgxABgABOjGQA9ACAsAmIgBgLQgqgdg2AAIgIAAg");
	this.shape_1.setTransform(-1.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("AgDAvIgMhuQAKgDAFgFIAQCPQgJgOgKgLg");
	this.shape_2.setTransform(20.3,-19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AgKAYQAhgYAOgpQAJgEANgIQgKAsghAbQgcAaguALQAbgLAVgUg");
	this.shape_3.setTransform(17.7,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AABCSQgxgsgJhPQgGgvAOgvQAOgwAhgeQAVgRAdgGQgwAYgXA5QgXA2AHA8QAHA2AbAoQAYAlApATQghgHgagUg");
	this.shape_4.setTransform(-2.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-26.4,47.3,52.8);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AC1DrQgaAAgNgKQgMgJgLgaIgNgpIgDgDQgxgxg9gDQBEgCA3A2IACADIAPApQAJAaANAJQAMAJAYABgAi+DrQAYgaAOgrIBtlLQAHgXACgPQABgSgHgNIAOAAQAGANgCASQgBAPgIAXIhsFLQgOArgYAagAg8BLIAMgEQAggOAkABQgcABgbAMIgaALgABPBBIhFjTIAHgUIBMDrg");
	this.shape.setTransform(-5.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("ACRD6QghAAgSgQQgNgLgKgbIgNgnQhFhHhiAhIgMAkQgIAYgCALQgFAnAcAVIifAAIAfgZQAWgXAOgoIBslLQAKgggCgOQgCgTgZgPIB1AAQAjACAOAOQAJAIAMAdIB5FmQAKAcAPAWQAUAbAaALgAgsBeQA+ADAxAxIACADIAOApQAKAaANAJQANAKAaAAIAKAAQgYgBgMgJQgNgJgKgaIgOgpIgCgDQg0g0hCAAIgGAAgAhHjLQgBAPgIAXIhsFLQgOArgYAaIANAAQAYgaAOgrIBslLQAIgXABgPQACgSgHgNIgNAAQAHANgCASgAhUBHIgMAEIgCAHIAbgLQAagMAfgBIgHAAQgiAAgdANgAgYiSIBCDTIAPAEIhLjrgAhZA5QAagLAfgCQAdgCAaAGIg2irg");
	this.shape_1.setTransform(-1.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("AB2D5IgagKQgJgEgHgFQgbgZgOgsIh4llIgLgaQgHgMgKgGIgKgIQAbADAMAOQAHAIALAbIB3FlQAKAdAQAWQAUAbAZAKg");
	this.shape_2.setTransform(16.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AAEA/IgJgHQgSgSAEgiQABgHASg3IATgEQgTA3AAALQgFAnAaAUg");
	this.shape_3.setTransform(-11.3,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AAOg7IAJAdIgZBWIgUAEg");
	this.shape_4.setTransform(-6.1,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-25,57.2,50);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("ABZDmQgUgHgQgSQAigEAVggQATgfgBgqQgBgogUgaQgTgbgigHQgKgDgPgBQAWgBAQAFQAiAHATAbQAUAaABAoQABAqgTAfQgVAggiAEQAPASAVAHQAMAEANABIgHAAQgQAAgPgFgAg3DrQgjAAgRgNQgUgPAAgkIAAlWQAAgYgCgNQgCgPgHgLIAMAAQAIALACAPQACANAAAYIAAFWQAAAkAUAPQAQAMAfABgAAJgkQAPgCAQgIQATgKAKgSQALgSABgXQABgjgUgXQgUgWgegDQAigCAYAWQAZAYgBAnQgBAXgLASQgLASgSAKQgTAKgTAAIgGAAg");
	this.shape.setTransform(-6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("AAvD1QgpgMgTgrQAnAIAYgfQAWgcgBgrQgCg/gygVQgngPgoAQIgBCdQAAA6AqAVIhOAAQgwAAgUgXQgRgTAAgkIAAlWQAAgjgGgPQgHgOgWgOIDzAAQA3AAAlAYQAsAcACA5QABAmgVAeQgVAcghALQA5AFAiAhQAjAiACA3QACAzgcApQgZAmgpAQQgYAKgXAAQgQAAgQgFgAgNgIQANABAKADQAiAHATAbQAUAaABAoQABAqgTAfQgVAggiAEQAQASAUAHQASAHAUgCQgNgBgMgEQgVgHgPgSQAigEAVggQATgfgBgqQgBgogUgaQgTgbgigHQgOgEgPAAIgHAAgAirjQQACANAAAYIAAFWQAAAkAUAPQARANAjAAIAIAAQgfgBgQgMQgUgPAAgkIAAlWQAAgYgCgNQgCgPgIgLIgMAAQAHALACAPgAgcjGQAcADAUAWQAUAXgBAjQgBAXgLASQgKASgRAKQgQAIgPACQAWACAUgMQASgKALgSQALgSABgXQABgngZgYQgWgUgbAAIgHAAgAg8iyIAAB6QAYAOAegRQAfgSABgnQABglgbgUQgPgLgSAAQgNAAgOAGg");
	this.shape_1.setTransform(-1.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("AgbBmIAMgKQAUgQAMgXQAMgZgBgcQgCg1gmgcQgPgOgTgIQApAJAWAXQAcAbACAsQABAjgTAeQgTAbgdAMg");
	this.shape_2.setTransform(13.5,-14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AgaB5IAHgHQAbgUAQghQARgjgBgmQgChDgwgjQgQgOgVgKQAvAJAcAiQAcAhACAyQADA5glAsQggApgxAJQARgHAOgLg");
	this.shape_3.setTransform(17.7,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AAKByQgIgDgHgIQgYgYAAgqIAAiVQAKgDAJAAIAACOIABAhQAIAnAfARQgMAAgIgCg");
	this.shape_4.setTransform(-3.3,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66322F").s().p("AgIA3IAAhsQAIgBAJABIAABqQgHACgEAAIgGAAg");
	this.shape_5.setTransform(-5.4,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-25.1,47.2,50.2);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AB6EFQg1geg0hSQgUgkgeg3IgxhaIgJgPIB/iiQAggqgVgfIANAAQAVAfggAqIh/CiIAIAPIAyBaQAcA3AXAkQA0BSAzAeQAkAVAsABIgFAAQgwAAgngWgAjWC7IAFgLQAIgXAAgeIAAlWQgBgggGgUIgGgLIAOAAIAEALQAIAUgBAgIAAFWQAAAegHAXIgEALg");
	this.shape.setTransform(-4.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("AAcD2QgmgmguhNIhWiaIAACTQAAA1AeAZIiyAAQANgLAHgTQAHgUAAgcIAAlWQAAgdgHgSQgFgSgOgNICuAAQgPAMgFATQgHAUAAAbIAACZIB6iZQAUgbgGgUQgFgRgcgOICkAAIiYDMQBQCWAtA+QBoCQBZAEQhHAdg7AAQhNAAg4gzgAgKjQIiBCiIAIAPIAyBaQAeA3AWAkQAyBSA0AeQAqAYAzgCQgsgBgkgVQg0gegyhSQgWgkgfg3IgxhaIgIgPIB+iiQAhgqgWgfIgLAAQAUAfgeAqgAkBkOQAHAUAAAgIAAFWQAAAegIAXIgEALIANAAIAFgLQAHgXAAgeIAAlWQAAgggHgUIgFgLIgNAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("ABKDzQg/gzhDhuQgXglhBh0ICZjMIACAAIAMAHIiUDFQBMCIAgAwQBWCBBLAiQgigGgkgbg");
	this.shape_2.setTransform(13.3,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AgVgSQAAgcAGgSQAGgSAMgNIATAAQgPANgGASQgEASAAAcIAABbIgSAXg");
	this.shape_3.setTransform(-10.4,-20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AAFBXQgbgYAAg2IAAhfIASAjIAAA8QAAA1AcAZg");
	this.shape_4.setTransform(-10.2,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-29.8,58.3,59.6);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A7029").s().p("AAvBcIAAhqIgjBFIgWAAIglhFIAABqIgkAAIAAi3IAkAAIAvBiIAwhiIAkAAIAAC3g");
	this.shape.setTransform(34.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A7029").s().p("AgwBKQgNgNgDgSQgDgMAAgfQAAgeADgMQADgSANgNQATgTAdgBQAdABAUATQAMANAEASQADAMAAAeQAAAegDANQgEASgMANQgUATgdAAQgdAAgTgTgAgWgzQgFAHgCAJQgCALAAAYQAAAaACAKQACAJAFAGQAJALANAAQANAAAKgLQAFgGACgJQACgLAAgZQAAgYgCgLQgCgJgFgHQgJgKgOABQgNgBgJAKg");
	this.shape_1.setTransform(15,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A7029").s().p("AAcBcIg/hfIA6hYIArAAIg+BXIBEBggAhHBcIAAi3IAkAAIAAC3g");
	this.shape_2.setTransform(-0.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A7029").s().p("AgwBKQgNgNgDgSQgDgMAAgfQAAgeADgMQADgSANgNQATgTAdgBQAdABAUATQAMANAEASQADAMAAAeQAAAegDANQgEASgMANQgUATgdAAQgdAAgTgTgAgWgzQgFAHgCAJQgCALAAAYQAAAaACAKQACAJAFAGQAKALAMAAQAOAAAJgLQAFgGACgJQACgLAAgZQAAgYgCgLQgCgJgFgHQgJgKgOABQgNgBgJAKg");
	this.shape_3.setTransform(-19.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A7029").s().p("AgwBKQgMgNgEgSQgDgNAAgeQAAgeADgMQAEgSAMgNQAUgTAcgBQAaAAASAPQATAQAFAcIglAAQgGgbgZABQgNgBgIAKQgGAHgBAJQgCALAAAYQAAAaACAKQABAKAGAGQAIAJANABQAZAAAGgbIAlAAQgFAcgTAQQgSAOgaAAQgcAAgUgTg");
	this.shape_4.setTransform(-36.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-9.4,85.8,18.8);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A7029").s().p("AAvBcIAAhpIgjBEIgXAAIgjhEIAABpIgkAAIAAi3IAjAAIAvBiIAwhiIAjAAIAAC3g");
	this.shape.setTransform(82.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A7029").s().p("AA5BcIAAi3IAlAAIAAC3gAhdBcIAAi3IAkAAIAABFIAkAAQAaAAAQARQAQAOAAAZQAAAagQAQQgQAQgaAAgAg5A8IAhAAQANAAAHgHQAFgHAAgMQAAgLgFgHQgHgHgNAAIghAAg");
	this.shape_1.setTransform(59.8,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A7029").s().p("AhCBcIAAi3IBJAAQAaAAAPAOQAQAOAAAXQAAAagXANQAKADAFAFQALAMgBAUQABAYgPAOQgQAPgaAAgAgeA8IAlAAQAKAAAHgGQAGgGAAgLQAAgLgGgFQgHgHgKAAIglAAgAgegQIAiAAQAMAAAFgGQAHgFAAgLQAAgKgHgFQgGgFgLAAIgiAAg");
	this.shape_2.setTransform(39.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A7029").s().p("AgwBKQgNgMgDgTQgDgMAAgfQAAgeADgMQADgSANgNQATgUAdAAQAeAAATAUQANANADASQADAMAAAeQAAAfgDAMQgDATgNAMQgTAUgegBQgdABgTgUgAgWgyQgFAFgBAKQgCALgBAYQABAZACALQABAKAFAFQAJAKANAAQAOAAAJgKQAFgGACgJQACgLAAgZQAAgYgCgLQgCgJgFgGQgJgKgOAAQgNAAgJAKg");
	this.shape_3.setTransform(21.6,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A7029").s().p("AgqBPQgSgPgFgcIAkAAQAGAbAXAAQAOgBAIgGQAIgIAAgKQAAgagcABIgWAAIAAgcIAWAAQAMgBAHgFQAGgGAAgMQAAgKgHgHQgHgFgMAAQgXAAgHAaIgkAAQAFgcASgPQASgPAZAAQAbABASAOQARAOAAAXQAAAagYANQAbALAAAeQAAAZgSAOQgTAPgdAAQgYAAgSgOg");
	this.shape_4.setTransform(4.5,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A7029").s().p("Ag7B1IAAi2IB3AAIAAAgIhTAAIAAApIBHAAIAAAhIhHAAIAAAtIBTAAIAAAfgAAMhUIAAghIAdAAIAAAhgAgshUIAAghIAeAAIAAAhg");
	this.shape_5.setTransform(-11.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A7029").s().p("AhBBcIAAi3IBGAAQAcAAARARQAQAQAAAZQAAAYgQAOQgRARgcAAIgiAAIAABGgAgdgIIAgAAQAMAAAIgHQAHgGAAgMQAAgMgHgGQgIgIgMABIggAAg");
	this.shape_6.setTransform(-27.7,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A7029").s().p("Ag7BcIAAi3IB3AAIAAAhIhTAAIAAArIBHAAIAAAeIhHAAIAAAtIBTAAIAAAgg");
	this.shape_7.setTransform(-44.5,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A7029").s().p("AhCBcIAAi3IB5AAIAAAhIhUAAIAAAkIAkAAQAbAAARARQAQAOAAAZQAAAagQAQQgRAQgbAAgAgdA8IAiAAQAMAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgMAAIgiAAg");
	this.shape_8.setTransform(-61.3,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A7029").s().p("AgwBKQgMgMgEgTQgCgLAAggQAAgeACgMQAEgSAMgNQAVgUAbAAQAaAAASAPQATAPAFAdIglAAQgHgagYAAQgNAAgIAKQgGAFgBAKQgCALAAAYQAAAZACALQABAJAGAHQAIAKANgBQAZAAAGgaIAlAAQgFAdgTAPQgSAOgaAAQgbABgVgUg");
	this.shape_9.setTransform(-83.9,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.7,-11.8,181.5,23.8);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.partLogo();
	this.instance.setTransform(-116.5,-40.1,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-40.1,234,69.3);


(lib.Symbol79 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.partLogo();
	this.instance.setTransform(-130,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-38.5,260,77);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AgSB+IAAgoIAmAAIAAAogAgPA6IgEi3IAlAAIgCC3g");
	this.shape.setTransform(37.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E13833").s().p("AgfB6QgOgGgKgLQgJgKgGgQQgFgQAAgPIAAhgQAAgOAFgQQAEgNAKgMQAJgKAPgHQAPgIASAAQAeABAUAQQASAPAHAYIgoAOIgDgLIgHgJQgEgEgHgCQgFgDgJAAQgHAAgHADQgIAFgDAEQgFAFgCAGQgCAIAAAGIAABjQAAAGADAJQACAIAEAEQAEAFAIAEQAGAEAIgBQAMAAALgIQAJgHACgOIAoANQgGAbgUAOQgUAPgcABQgSAAgPgHg");
	this.shape_1.setTransform(24.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E13833").s().p("AgUh9IAmgBIBLD8IgtAAIgNg3IhFABIgPA2IgrABgAgZAiIAxAAIgYhmIgBAAg");
	this.shape_2.setTransform(5.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E13833").s().p("AhMh9IBMgBQAlAAARATQASATAAAgQAAAQgGANQgHAOgRAHIAAADQAJADAGADQAHAGAEAHQAFAIABAJQADAKAAAIQAAAlgUASQgTAUghAAIhQAAgAghBXIAjAAQAKAAAGgDQAGgDAFgFQAEgGABgHIACgOQAAgQgIgKQgIgKgTAAIgjAAgAgigVIAiAAQAPAAAJgJQAIgLAAgOQAAgPgJgJQgIgJgQAAIghAAg");
	this.shape_3.setTransform(-13.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E13833").s().p("AhRh+IAqAAIAABrIAUAAIALgBQAGgCAEgEQAFgEAEgHQAFgGADgMIAShGIAoAAIgTBKQgFAUgJAMQgIALgMAFQAPADAJAMQAIAMAFATIAVBSIgqABIgThIQgGgYgKgGQgIgIgOAAIgWAAIABBuIgqAAg");
	this.shape_4.setTransform(-31.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-12.9,80.1,25.9);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXB4IAAktICvAkIhwD1IAABSg");
	this.shape.setTransform(-33.9,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An4DUIg0nmIQlA2IA0Hvg");
	this.shape_1.setTransform(0,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-37.2,111.5,74.5);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AiLAuIg0i2IAGhTIDyBHIg2CvIC9DBg");
	this.shape.setTransform(-32.5,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E13833").s().p("ApvlSITiBUIACJMIzpAFg");
	this.shape_1.setTransform(0,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-50.3,126,100.7);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AhihJIAngHIAdCdIAAABIABAAIAxisIAkgHIArDrIgnAHIgciYIgBAAIgxCnIgkAGgAgvhmQgMgFgGgFQgHgHgFgIQgEgIgCgIIAegFIADAHQACADAEADIAHAFQAEABAGAAQAFgBAEgEIAGgGQACgEABgEQABgEgBgEIAbgGIgBARQgBAJgFAJQgFAKgGAGQgJAHgNACIgMABQgHAAgGgBg");
	this.shape.setTransform(62.6,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B8B30").s().p("Ah6hjIAmgHIASBeIAjgGQARgDAOACQAOADAKAIQAKAHAHALQAHAMACAPQAIAlgRAVQgQAWgeAGIhKAOgAgbARIggAGIAMBGIAigGQAOgDAIgLQAGgLgDgRQgDgQgJgIQgFgFgLAAIgLABgAApiBIAmgHIAsDrIgnAIg");
	this.shape_1.setTransform(40.5,-4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B8B30").s().p("AhyhkIAlgHIBPB7IACAAIAeiPIAmgHIArDrIgmAHIgaiJIgBABIgXBlIgbAFIg4hXIgBABIAZCIIgnAHg");
	this.shape_2.setTransform(16.8,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B8B30").s().p("AhihnIAngHIAdCdIABAAIAxisIAkgGIArDrIgnAHIgciZIgBAAIgxCnIgkAHg");
	this.shape_3.setTransform(-4.5,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B8B30").s().p("AhXhqIB8gWIAGAkIhUAPIAKA7IAggHQAUgDANACQAPADAKAIQAKAHAHAKQAHAMADAQQAHAkgQAWQgQAWghAGIhIAOgAAGAJIgeAHIANBGIAegGQASgDAHgLQAGgMgDgQQgDgQgKgIQgHgGgLAAIgKABg");
	this.shape_4.setTransform(-22.9,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B8B30").s().p("Ah0hnIAngHIASBjIAZgEIgGgeQgCgPABgNQACgNAHgMQAFgLANgJQALgHASgEQASgDAOADQAPADAJAIQAKAHAHANQAGANADAPIASBfQAHAjgQAWQgPAWghAGQgSADgOgDQgOgDgLgJQgHgIgHgNQgHgQgCgNIgGgeIgZAEIATBnIgnAHgAAVhcQgIABgHAEQgFAFgBAFIgDAMIAAAMIAQBfQADAQAJAJQAKAJARgDQAOgDAGgJQAHgJgCgSIgThiIgDgLQgDgHgFgDQgEgEgHgDIgIgBIgHABg");
	this.shape_5.setTransform(-43.8,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B8B30").s().p("AhUBrQALgIAFgGQAHgIACgKQADgKAAgNQgBgOgEgVIgXiAIB+gXIArDrIgmAHIgljGIg0AJIAQBWQAGAcAAAVQABAVgFAQQgEAPgLALQgKAKgTAIg");
	this.shape_6.setTransform(-64,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-28.2,145.1,56.5);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtggoIZwlDIBQHuI7ADpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-36.4,173,72.9);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AuVhxIbUlNIBXJRI8rEsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-44.8,183.7,89.6);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AmMFhIAcrfIL8CWIgZJng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-38.3,79.4,76.7);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkgksIJxCvIgICuQgIC1ACAYQACAZlJAOQimAGimADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-30.2,67.6,60.4);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AAtDCIAWj1IgBAAIgXAjIgVAhIhmCmIg6gEIAfl5IA+AFIgVD7IABAAIAAABIAcgtIB3jEIA6AFIghF4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-20,28,40);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AAvCeIAFjLIgBAAIhsDHIgwgBIAIk3IAzACIgGDQIABAAIAAAAQAOgXAHgPIBYinIAwAAIgIE4g");
	this.shape.setTransform(35.6,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#78B926").s().p("AAvCdIgUhZQgGgdgNgJQgLgKgQAAIgbgBIgECIIgzgBIAHk3IA0ABIgDCEIAYAAQAIAAAGgCQAHgBAFgFQAHgFAGgIQAFgHAFgPIAZhWIAxABIgaBcQgHAXgLAPQgLAPgPAEQASAFALAPQAKARAFAWIAXBmg");
	this.shape_1.setTransform(11.6,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#78B926").s().p("AAkCdIADiEQgKAFgQAEQgQACgLAAQgpgBgUgYQgUgWABg0IAChfIAzACIgCBYQAAAiAJANQAKAOAXABQAJgBAKgCQALgCALgGIAEiJIAzACIgIE2g");
	this.shape_2.setTransform(-13.1,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78B926").s().p("AgCCeQgbAAgRgJQgSgIgLgPQgLgNgGgVQgEgSAAgVIADh0QAAgRAGgRQAFgQAMgPQALgNAUgJQASgIAZAAQAZABARAJQAQAIAOAPQALAPAGAQQAFAUgBAPIgDB6QgBAYgHAQQgHARgNAOQgNAMgTAHQgPAGgSAAIgDgBgAgShoQgIAEgGAHQgFAHgCAIQgDAJAAAHIgDB1QAAAXAJAQQALAPAYABQAPABAOgMQAOgMgBgVIAEh/QAAgGgCgIQgBgGgGgJQgDgGgKgHQgIgFgMAAQgMAAgJAEg");
	this.shape_3.setTransform(-36.5,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,-16.8,92.5,33.6);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AIzFNQgLAAzghlIh6oCIZlgyQj0KZgMAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,-33.3,163.9,66.7);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AhZARICUgJIgqg9ICih4IhNB1IB0BfIiHCEIksADg");
	this.shape.setTransform(4.5,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-22.5,43.6,34.9);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqRDAIhlmfIXsgtIkGIZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-26.9,151.8,53.9);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirBpQABgHAug8IAtg5IC+gHIhGhaQCMBZgKgCQgGgBg5BIIg4BLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-11.7,34.5,23.5);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("Ag2BQIAViqIBYAMIgDAZIg+gHIgFAuIA1AGIgEAXIg1gGIgFAwIA+AHIgEAbg");
	this.shape.setTransform(53.2,6.1,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E13833").s().p("AAhBaIAUipIAbADIgVCpgAgcBTIgzgHIAVipIAaADIgIBFIAYACQANACAHAEQAJAGAFAHQAFAHACAIQACAJgCAMQgDAbgPALQgKAJgRAAIgIAAgAgxA2IAWADQANABAGgHQAGgFACgNQAAgMgDgHQgEgHgNgCIgXgCg");
	this.shape_1.setTransform(35.8,4.1,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E13833").s().p("AAbBZIAMhiIgBAAIgkBAIgRgCIgThHIgBAAIgMBiIgagDIAUipIAaADIAbBkIAAAAIAxhbIAZADIgVCqg");
	this.shape_2.setTransform(16.2,1.8,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E13833").s().p("AAQBYIAOhtIgBAAIhCBnIgagDIAVipIAbADIgOBwIABABIAAAAIBDhrIAYADIgVCpg");
	this.shape_3.setTransform(-1.3,-0.3,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E13833").s().p("AgCBYIgygGIAVipIBUAKIgDAaIg6gHIgFAqIAWADQAOABAHAFQAIAEAGAGQAFAGADALQABAJgBAMQgDAagPAMQgMAJgSAAIgGAAgAgWA7IAWADQALABAGgGQAGgHACgLQABgMgEgHQgFgIgNgBIgUgDg");
	this.shape_4.setTransform(-16.9,-2.4,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E13833").s().p("AAOBbQgNgBgHgGQgHgEgGgIQgFgIgBgKQgCgJABgNIADgWIgRgCIgJBKIgbgDIAVipIAbADIgJBIIARACIADgWQACgLADgIQAEgJAHgHQAGgHAIgCQAKgDAMABQAOACAHAFQAJAFAFAHQAFAJABAJQACAKgCALIgIBEQgDAZgPAMQgLAJgSAAIgHAAgAAVg1IgHAEIgFAIIgCAIIgHBEQgBAMACAIQAEAIAMACQAKABAGgGQAHgFABgMIAJhGIAAgJQAAgEgDgEQgCgEgEgDQgDgCgHgBIgDgBIgHACg");
	this.shape_5.setTransform(-33.7,-4.3,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E13833").s().p("AATBXIARiPIgkgEIgHA9QgBAUgFAPQgFARgFAIQgHAJgJAFQgIAFgOABIgEgWQAIgCAGgEQAFgEAEgGQAEgHACgJQADgKABgPIAMhbIBWAKIgVCpg");
	this.shape_6.setTransform(-51.9,-6.2,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-17,119.8,34.1);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsaBXIATlOIYiChIhYFNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-24.8,159.1,49.6);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AtpClIA0oEIafERIgwGug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-35.2,174.9,70.6);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AhAhXIBpgOIADAdIhIAKIAGAzIA/gJIADAbIg/AIIAHA1IBJgKIADAeIhnAOg");
	this.shape.setTransform(65,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B8B30").s().p("AgMg8IgrAEIgDgcIBxgPIAEAdIgrAFIAVCgIgfAFg");
	this.shape_1.setTransform(51.1,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B8B30").s().p("AhBhcIAfgEIAJBLIAagDQAQgCAKADQAMADAIAGQAIAHAEAIQAFAJACANQADAdgNARQgOARgbADIg4AIgAADAEIgYADIAHA5IAZgDQAOgDAFgIQAGgIgCgOQgBgNgIgHQgGgFgJAAIgHABg");
	this.shape_2.setTransform(39.6,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B8B30").s().p("AhQA6IAMgEQAGgGACgIQADgGABgLQABgKgBgNIgKhtIBngNIAVCgIAPgCIAIBDIgbAEIgEgnIhlANIAGAnIgbADgAgjhUIAIBlIgBASQgCAJgDAGIA8gIIgRiEg");
	this.shape_3.setTransform(25.2,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B8B30").s().p("AgXBNIALgCQAGgBAEgDQACgEADgJIABgIIhBiHIAggEIArBhIABAAIARhpIAegEIgcCaQgEAPgDAIQgDAJgGAEQgEAGgHACQgHADgEAAIgQACg");
	this.shape_4.setTransform(9.3,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B8B30").s().p("AhBhXIBjgNIADAdIhDAJIAGAuIAZgDQAQgCAKADQAMADAIAGQAIAHAEAIQAFAJACANQAEAdgOARQgOARgaADIg6AHgAADAIIgYADIAHA5IAZgDQAOgCAGgJQAFgIgCgOQgBgMgIgHQgGgFgKAAIgGAAg");
	this.shape_5.setTransform(-2.9,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B8B30").s().p("AglhfIAegEIBNC1IghAFIgQgoIgzAHIgGAqIghAEgAgSg2IgJBPIAlgFIgahKg");
	this.shape_6.setTransform(-16,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B8B30").s().p("AgcBaQgRgJgGgVIAcgOQADALAJAGQAKAGAIgCQANgBAFgJQAHgJgCgNIgDgLQgBgFgEgEQgEgEgFgBQgGgCgHABIgMACIgEgZIAPgCQALgBAFgIQAGgIgDgMQAAgKgHgHQgIgFgKABQgKACgHAHQgGAHgCALIgegGQACgUANgOQAOgOAXgCQAZgEAQALQAQAMADAYIAAALIgBAMIgGAMQgDAFgHAEIAAABQAIADAFAEQADAAAFAHIAGAMIACANQACAOgDALQgCALgIAJQgHAIgKAFQgKAFgNACIgLAAQgPAAgNgHg");
	this.shape_7.setTransform(-31.2,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4B8B30").s().p("Ag/hXIBogNIAEAdIhJAJIAGAzIA/gIIADAaIg+AJIAGA0IBJgJIADAdIhoANg");
	this.shape_8.setTransform(-49.9,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B8B30").s().p("AhFhWIAggEIAKBQIA0gHIgKhQIAfgEIAYC8IgfAEIgLhSIgzAHIAKBSIggAEg");
	this.shape_9.setTransform(-64.5,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-18.3,143.1,36.8);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Asng2IZ3kiIhfHzI5AC+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.8,-34.5,169.6,69.1);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AuJhMIcTlzIg0LBI7fC+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-44.8,181.3,89.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AhQiJICagEIABArIhsADIACBLIBcgDIABAoIhcADIACBNIBsgDIABArIiaAFg");
	this.shape.setTransform(54.3,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#78B926").s().p("AA9BvIibAEIgHkWIAugBIAGDrIBNgCIgHjrIAugCIAHDsIAZAAIADBkIgnABg");
	this.shape_1.setTransform(33.5,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#78B926").s().p("AhYiIIAugCIADB2IBNgCIgDh2IAugBIAIEWIguACIgEh6IhMACIADB6IgvABg");
	this.shape_2.setTransform(10,-2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78B926").s().p("AhhBuQAOgHAHgGQAJgIAEgLQAFgJACgSQACgRgBgXIgEiXICWgEIAHEWIgtABIgHjrIg9ACIACBlQABAjgDAXQgCAXgJATQgJASgNAJQgNAKgXAFg");
	this.shape_3.setTransform(-13.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#78B926").s().p("AgiCHQgRgGgLgNQgLgOgFgPQgEgPgBgUIgDhoQAAgRAEgOQAFgQAJgMQAKgNAQgIQAQgIAYgBQAVAAAPAHQAQAGAMANQALAMAFAPQAGAPAAAQIADBtQABAUgHAQQgFAQgMAMQgKAMgQAHQgRAGgSABIgCAAQgTAAgQgHgAgUhcQgHAEgGAHQgEAHgCAGQgCAHAAAHIAEBqQAAATAKAOQAJANAVAAQAQAAAKgLQALgLAAgTIgDhxQAAgFgCgHQgCgHgFgHQgEgGgIgFQgGgEgLAAQgKAAgJAFg");
	this.shape_4.setTransform(-34,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#78B926").s().p("AgfCIQgRgHgLgLQgLgMgFgQQgGgQgBgTIgChrQgBgQAFgQQAFgQAKgNQAKgMAQgIQARgIAVAAQAhAAAVAQQAVARAIAbIgsAQQAAgGgEgGQgDgGgFgEQgEgEgIgDQgHgDgHAAQgLABgGADQgIAFgEAFQgFAHgCAHQgCAGAAAIIADBuQAAAJADAHQACAIAFAGQAFAGAIAEQAIADAIgBQAPAAAKgJQAKgHADgQIAsANQgGAdgWARQgWARgfABIgFAAQgRAAgOgGg");
	this.shape_5.setTransform(-53.9,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-18.2,124.9,34.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AtdiiIcNjkIhwKnI7vBmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-39.1,189,78.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsmhSIZ/jzIgnJbI6KAwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-32.6,171.5,65.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZgZICtgwIgGhNIA0BKIitBKICHBmIldAzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-15.1,38.8,30.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AkJCIQASgDChiLICCgKIgGhWQgBgLBygqQA6gVA5gTIilBkIBPBzIiPALIAcBOIlFBXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-19.6,53.3,39.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dgAhFhGQgeAdABApQgBApAeAdQAdAdAoAAQApAAAdgdQAegdgBgpQABgpgegdQgdgdgpAAQgoAAgdAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0B500").s().p("AgaBrQhEgHgbhGQgOghAAgiQgCgnASgQQAKgJAdgHQAbgIB5APQA0ACANAnQAGATgFATIgbBUQgOAtg+AFIgOAAQgVAAgWgFg");
	this.shape.setTransform(13.7,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,22.5);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0B500").s().p("AgeBxQg/gEgPgvIgbhVQgEgTAGgTQAMgnA1gCQB6gPAbAHQAeAIAJAJQATAQgCAnQAAAjgNAhQgcBHhFAHQgWAFgVAAIgOAAg");
	this.shape.setTransform(13.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,22.8);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlAYQgHgcAAgXQgCgsAVgSQALgKAigJQAcgJB9APQhDAjgqA4QgqA4gIBDQgkgegPg6g");
	this.shape.setTransform(11,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,21.8,22.6);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaBNIgfhhQgFgWAHgWQAOgsA8gCQCJgRAgAIQhNAkgvBAQgvBAgDBOQgfgQgJgeg");
	this.shape.setTransform(12.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,24.7);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AgIAHQgEgDAAgEQAAgCAEgDQAEgDAEAAQAFAAAEADQAFADAAACQAAAEgFADQgEACgFAAQgEAAgEgCg");
	this.shape.setTransform(11.8,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E56D1A").s().p("AgGAFQgDgDAAgCQAAgGAJAAQAKAAAAAGQAAACgDADQgDACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(1.1,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E56D1A").s().p("AgGAFQgDgCAAgDQAAgCADgBQADgDADAAQAEAAADADQADABAAACQAAADgDACQgDACgEAAQgDAAgDgCg");
	this.shape_2.setTransform(7.4,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E56D1A").s().p("AgGAFQgDgDAAgCQAAgGAJAAQAKAAAAAGQAAACgDADQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(15.4,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E56D1A").s().p("AgGAFQgDgDAAgCQAAgGAJAAQAKAAAAAGQAAACgDADQgDACgEAAQgDAAgDgCg");
	this.shape_4.setTransform(9.7,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E56D1A").s().p("AgPALQgGgFAAgGQAAgFAGgFQAHgEAIgBQAJABAHAEQAGAFAAAFQAAAGgGAFQgHAEgJABQgIgBgHgEg");
	this.shape_5.setTransform(6.8,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,14.2);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AgIAGQgEgCAAgEQAAgCAEgDQAEgDAEAAQAFAAAEADQAEADAAACQAAAEgEACQgEADgFAAQgEAAgEgDg");
	this.shape.setTransform(11.8,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E56D1A").s().p("AgGAFQgDgDAAgCQAAgBADgCQADgDADAAQAEAAADADQADACAAABQAAACgDADQgDACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(1.1,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E56D1A").s().p("AgJAAQAAgCADgBQADgDADAAQAEAAADADQADABAAACQAAAHgKAAQgJAAAAgHg");
	this.shape_2.setTransform(7.4,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E56D1A").s().p("AgGAFQgDgDAAgCQAAgCADgBQADgDADAAQAEAAADADQADABAAACQAAACgDADQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(15.4,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E56D1A").s().p("AgJAAQAAgCADgBQADgDADAAQAEAAAEADQADABAAACQAAAHgLAAQgJAAAAgHg");
	this.shape_4.setTransform(9.7,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E56D1A").s().p("AgPALQgGgFAAgGQAAgFAGgEQAHgGAIAAQAJAAAHAGQAGAEAAAFQAAAGgGAFQgHAFgJAAQgIAAgHgFg");
	this.shape_5.setTransform(6.8,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,14.2);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AihI1QirgwhJjJQhJjIBDjpQBDjqCpiDQCoiECpAxQCrAxBJDJQBJDIhDDpQhDDqipCDQh6Bgh6AAQguAAgvgOg");
	this.shape_1.setTransform(44.3,57.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,88.9,115.9);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABYHAQg5gGgzgnQgFgDgnglQgZgXgagHQgbgIghAHIg6AKQhCAEg0gYQgegOgYgcQgTgVgTghQguhQgCg7QgCgeAMglIAXg/QAKgaAKgpIAShEIBLkPINGDxIhQEMIgVBDQgOAogFAbIgPBDQgKAmgQAZQghAxhSArQgjASgaAIQgaAIgYAAIgSgCg");
	this.shape_1.setTransform(49.3,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,98.6,90);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrF5QhTgXgqhNQgqhMAYhTIBlleQAXhTBNgrQBKgqBTAYQBTAYAqBMQArBMgYBTIhlFfQgYBThMAqQgxAbgyAAQgdAAgegJg");
	this.shape.setTransform(26,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.1,77.3);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACIBNIkjhSQgNgDgHgNQgHgMAEgOIACgGQADgOANgGQAMgHAOAEIEiBSQAOAEAHAMQAGAMgEAOIgBAGQgEANgMAHQgIAFgJAAIgJgCg");
	this.shape.setTransform(18.1,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,36.2,15.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AozbiQgigSgbglQgUgcgVguQgyhvAChTQABgrARg2IAghcQANgmAQg7IAZhiICToPQBclGBRkXIBOkIIAuilQAchiAgg8QAnhHBCgzQAfgYBIgkQA+gkASgxIBGjBIBEjAIBLjSIAQgwQAKgeAJgRQAIgNATgUQAWgWAHgLQALgRAFgeIAIgyIDLA7MgPmA2eQgfgKgoAMIhFATQgVADgTAAQg2AAgtgXg");
	this.shape.setTransform(71.4,178.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.9,357.1);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F6F2E7","#72B9C0","#00A0AF","#007A85"],[0.063,0.549,0.816,0.996],25.2,-45.2,-15.2,27.6).s().p("AlECzIgqhWQCzAJCkhDQCqhFBiiEIALgQIBvBcIghAlQh0B/i2A/QiFAuiNAAQgrAAgrgEg");
	this.shape.setTransform(-7.6,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.h1 = new lib.Symbol140();
	this.h1.setTransform(21.4,2.3,1,1,0,0,0,-9.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.h1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-30.4,88.6,60.9);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAHQgDgEAAgDQAAgCADgEQADgCACAAQAEAAACACQADAEAAACQAAADgDAEQgCADgEgBQgCABgDgDg");
	this.shape.setTransform(7.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAfQgGgDgBgLQgBgLAFgLQAFgNAHgIQAGgGAGACQAGADABALQABALgFALQgEANgIAHQgEAGgFAAIgDgBg");
	this.shape_1.setTransform(9.4,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(-34.9,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAfQgGgDgBgLQgBgLAFgLQAFgNAHgHQAGgHAGACQAGADABALQABALgEALQgFANgIAHQgDAGgFAAIgEgBg");
	this.shape_3.setTransform(-33.4,-6.4);

	this.instance = new lib.Path_4();
	this.instance.setTransform(17.9,0.5,1,1,0,0,0,12.4,12.3);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.Path_5();
	this.instance_1.setTransform(-25.8,-0.6,1,1,0,0,0,11,11.2);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_6();
	this.instance_2.setTransform(20.4,1.1,1,1,0,0,0,13.8,11.4);
	this.instance_2.alpha = 0.5;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E56D1A").s().p("AgjCAQhHgFgRg1IgfhhQgFgVAHgWQAOgsA8gDIBLgHQBMgHAUAGQAhAJALAKQAVASgCAsQAAAngQAnQgfBRhOAHQgYAHgZAAIgRgBg");
	this.shape_4.setTransform(21.1,1.1);

	this.instance_3 = new lib.Path_8();
	this.instance_3.setTransform(-22.3,1.1,1,1,0,0,0,13.7,11.3);
	this.instance_3.alpha = 0.5;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E56D1A").s().p("AgKB+IgUgDQhOgIgghRQgPgmAAgnQgCgsAVgTQALgKAhgJQAfgICLARQA8ACAOAsQAHAWgFAWIgeBhQgRA0hHAFIgOABQgQAAgQgDg");
	this.shape_5.setTransform(-21.1,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#812E1C").s().p("AB7CUQg5gcgahcQgDgSgIgQQgNgkgQgBQgPABgOAkQgHAQgEASQgaBcg4AcQgcAPgXgEQgTABgZgCQg0gFgngPQgpgQgXgyQgPgjgGgsQgEghgUgWQgIgIAAgMIAAhLQC9gHDLAoQAhAIAhgIQDMgoC9AHIAABKQAAANgJAIQgUAXgEAgQgFApgRAkQgXAxgoATQglASg1ADIgtAAIgKAAQgTAAgVgLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_3},{t:this.shape_4},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-16,85.3,32);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.h3 = new lib.Symbol134();
	this.h3.setTransform(9.2,-5.2,1,1,0,0,0,-8.4,1);

	this.h2 = new lib.Symbol133();
	this.h2.setTransform(5.2,-7,1,1,0,0,0,-13.8,9.2);

	this.h1 = new lib.Symbol132();
	this.h1.setTransform(4.9,6.3,1,1,0,0,0,14.4,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h1},{t:this.h2},{t:this.h3}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E56D1A").s().p("AEBCGQgsgTgrg3IgZgnQAGAQgDAcQgCAVgFASQgBgsgZgeIgagWQhYBtiYAPQgwAEgxgFIgngGIAAgNQAEhNAYgvQAbg6A9giQA3gfBLgBQBFgCA+AZQA8AXAuAoQAzArAXA1QAPAhADAcQADAfgSAAQgHAAgJgEg");
	this.shape.setTransform(-4.4,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-26.3,66.7,52.6);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.e2 = new lib.Symbol136();
	this.e2.setTransform(15.1,0);

	this.e1 = new lib.Symbol135();
	this.e1.setTransform(-15.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e1},{t:this.e2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-3.2,37.4,6.5);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gl
	this.gl = new lib.Symbol137();
	this.gl.setTransform(-0.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.gl).wait(1));

	// b12
	this.b2 = new lib.Symbol127();
	this.b2.setTransform(14.6,-8);

	this.b1 = new lib.Symbol126();
	this.b1.setTransform(-16.2,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(1));

	// eyes
	this.eyes = new lib.Symbol125();
	this.eyes.setTransform(0.5,4);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Isolation Mode
	this.lips2 = new lib.Symbol138();
	this.lips2.setTransform(7.7,39.4,1,1,0,0,0,3.8,3);

	this.timeline.addTween(cjs.Tween.get(this.lips2).wait(1));

	// Layer 2
	this.lips = new lib.Symbol129();
	this.lips.setTransform(5.1,37.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE7D5B").s().p("AgOAKQAOgRAUgGIABAAQgGAHgHAFQgGACgHADIgDACIgGAIIgGAAQADAAADgEg");
	this.shape.setTransform(1.4,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE7D5B").s().p("AAPAOIgGgIQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgHgDgGgCQgIgFgFgHIABAAQATAGAOARQADAEAEAAg");
	this.shape_1.setTransform(-3.3,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE9169").s().p("AgEATIgEAAIgKgCQgLgDgIgGIgOgIQgGgDgCgIQAegIAdAAQAdAAAfAIQgDAIgFADIgOAIQgOAJgQACIgIABg");
	this.shape_2.setTransform(-0.9,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F2A076","#F2A377","#F4B17B","#F5B67D"],[0,0.082,0.62,1],0,15.6,0,-15.5).s().p("AgSCYQgKgDgJgGIgNgIQgHgFgCgIIgBgGIACgIIADgHQAMgSAJgWQAIgWADgaIAPinIARAAIAQCnQADAaAIAWQAHAWAOASIADAHIABAIIgBAGQgCAIgGAFIgNAIQgSAMgVAAQgIAAgKgDg");
	this.shape_3.setTransform(-1,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2A96D").s().p("AhEAFIACgBQAggJAigBIAIAAQAXAAAXAEIAPACIg1gEQgOAAgMAEIgNAEIgNADIgMAAQgMAAgIgCg");
	this.shape_4.setTransform(20,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAF3E6").s().p("AgNBNQgfgGgVgWQgWgWAAgbQAAgfAegYQAdgYAhABQAbgBAVAQQALAHAGAHQASAWAAAbQAAAhgYAXIgVAPIgNAFQgLAEgOAAQgKAAgIgDg");
	this.shape_5.setTransform(14.5,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2A96D").s().p("AAkAHIgMgDIgNgEQgLgEgPAAIg1AEIAPgCQAYgEAWAAIAHAAQAjABAgAJIACABQgJACgLAAg");
	this.shape_6.setTransform(-21,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAF3E6").s().p("AgdBMIgNgFIgWgPQgYgXABghQAAggAYgXQAYgYAjABQAaAAAbARQALAHAIAIQAUAWAAAYQAAAbgWAWQgVAWgfAGQgJADgJAAQgOAAgLgEg");
	this.shape_7.setTransform(-15.5,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5B67D").s().p("ACHB0QhDgFgxgxIgTgUIgTAUQgwAxhDAFIghACIgMgDIgOgFQgMgFgPAAIgmAEIgEiQIAUgZQALAKBpggQBygjAGAAQAFAABOAZQBHAWAKgJIAyATIA3AMIgECdIgmgEQgOAAgOAFIgNAFIgNADg");
	this.shape_8.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.lips}]}).wait(1));

	// Layer 6
	this.hairs2 = new lib.Symbol131();
	this.hairs2.setTransform(5.3,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.hairs2).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB8460").s().p("AgNAqQAGgLAAgGQABgNgJgDIgFgBIgEgDQgEgDAFgJIATgjQANALAJARQAJAPAAAUQAAAKgDAJQgSADgOAAIgFgBg");
	this.shape_9.setTransform(36.2,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EE9169").s().p("AgiA5QAGgLABgGQABgNgJgDIgFgBIgFgDQgDgDAEgLIAhg6IAEgEQAXAHAQAUQAQAWgBAYQAAAOgGANIgLAEQgQAFgLACQgQACgPAAIgGAAg");
	this.shape_10.setTransform(38.2,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F29B76").s().p("Ag3BDQAGgLAAgGQABgNgJgDIgFgBIgEgDQgEgDAFgLIAhg6IADgEQAGgHAGgDQAMgIANgCIAKgBQAUAAAYANIABADQAIAWgDAYQgCAWgMAUQgRALgRAGIgLAEQgPAFgKACQgSADgQAAIgFgBg");
	this.shape_11.setTransform(40.4,6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F8C58F","#F4AC7D","#F2A076"],[0,0.612,1],-7.7,-0.1,7.8,0.2).s().p("AhCBQIgKhbIAHgJIAXgcQANgQANgJQAQgMAQgCQATgDAPAJQAIAEAHAJQAGAJAEALQAIAWgDAYQgCAWgMAUQgGAKgLALQgWAVgeAFQgJACgKAAQgVAAgTgJg");
	this.shape_12.setTransform(39.6,5.8);

	this.fl = new lib.Symbol128();
	this.fl.setTransform(37.1,-5.2);

	this.instance = new lib.Group_3();
	this.instance.setTransform(20.8,18.9,1,1,0,0,0,8.3,7.1);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Group_4();
	this.instance_1.setTransform(-19.3,18.3,1,1,0,0,0,8.3,7.1);
	this.instance_1.alpha = 0.301;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8C58F").s().p("AjlGmQhfivAAj3QAAj2BfivQBgiuCFAAQCGAABgCuQBfCvAAD2QAAD3hfCvQhgCuiGAAQiFAAhgiug");
	this.shape_13.setTransform(0.3,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB8460").s().p("AgYAnQgCgKAAgJQAAgTAJgQQAJgQAOgLIASAkQAGAHgFAFQgCACgHABQgKADABANQABAGAGALIgIABQgOAAgQgEg");
	this.shape_14.setTransform(-34.6,9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE9169").s().p("AgEA2IgagHIgLgEQgFgMAAgPQgBgZARgVQAQgUAXgHIAEAFIAfA7QAGAJgFAFQgCACgHABQgKADABANQABAGAGALIgIABQgQAAgOgEg");
	this.shape_15.setTransform(-36.6,7.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F29B76").s().p("AAQBBIgZgHIgLgFQgQgGgRgLQgMgUgCgWQgCgYAIgWIABgEQAWgLAXAAIAJABQAMABANAJQAGAEAFAGIAEAEIAgA7QAFAKgEAEQgDADgHABQgJADABAMQAAAHAGALIgIAAQgQAAgPgDg");
	this.shape_16.setTransform(-38.8,6.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F8C58F","#F4AC7D","#F2A076"],[0,0.612,1],7.8,0,-7.7,0.1).s().p("AAGBYQgegGgVgVQgKgKgHgMQgMgUgCgWQgCgYAIgWQAFgMAGgIQAIgJAHgEQAPgJAUAEQAQADAPALQAMAJANARIAXAdIAHAJIgMBbQgTAHgUAAQgKAAgKgBg");
	this.shape_17.setTransform(-37.9,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.instance},{t:this.fl},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// hairs
	this.hairs = new lib.Symbol130();
	this.hairs.setTransform(0,-43.1,1,1,0,0,0,0,-43.3);

	this.timeline.addTween(cjs.Tween.get(this.hairs).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-72.5,146.1,145);


(lib.Symbol121 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy 11
	this.instance = new lib.Symbol122();
	this.instance.setTransform(0.9,16.1,1.642,1.642,166.9,0,0,0.1,88.3);

	this.instance_1 = new lib.Symbol122();
	this.instance_1.setTransform(0.8,16.2,1.642,1.642,-158.3,0,0,0.1,88.3);

	this.instance_2 = new lib.Symbol122();
	this.instance_2.setTransform(0.8,16,1.642,1.642,-51.3,0,0,0.1,88.4);

	this.instance_3 = new lib.Symbol122();
	this.instance_3.setTransform(0.9,16,1.642,1.642,-129,0,0,0.1,88.4);

	this.instance_4 = new lib.Symbol122();
	this.instance_4.setTransform(0.9,16,1.642,1.642,22.3,0,0,0.1,88.5);

	this.instance_5 = new lib.Symbol122();
	this.instance_5.setTransform(0.9,15.9,1.642,1.642,77.8,0,0,0.1,88.5);

	this.instance_6 = new lib.Symbol122();
	this.instance_6.setTransform(0.7,15.8,1.642,1.642,-13.7,0,0,0.1,88.4);

	this.instance_7 = new lib.Symbol122();
	this.instance_7.setTransform(0.6,16,1.642,1.642,116.4,0,0,0.1,88.4);

	this.instance_8 = new lib.Symbol122();
	this.instance_8.setTransform(0.7,16,1.642,1.642,-91.6,0,0,0.1,88.4);

	this.instance_9 = new lib.Symbol122copy();
	this.instance_9.setTransform(0.6,16.4,1.642,1.642,-31.1,0,0,0.1,88.3);

	this.instance_10 = new lib.Symbol122copy();
	this.instance_10.setTransform(0.5,16.2,1.642,1.642,149.6,0,0,0.1,88.3);

	this.instance_11 = new lib.Symbol122copy();
	this.instance_11.setTransform(0.6,16.4,1.642,1.642,-112.6,0,0,0.1,88.4);

	this.instance_12 = new lib.Symbol122copy();
	this.instance_12.setTransform(0.4,16.2,1.642,1.642,63.7,0,0,0.1,88.4);

	this.instance_13 = new lib.Symbol122copy();
	this.instance_13.setTransform(0.5,16.3,1.642,1.642,-172.6,0,0,0.1,88.4);

	this.instance_14 = new lib.Symbol122copy();
	this.instance_14.setTransform(0.4,16.1,1.642,1.642,-142.6,0,0,0.1,88.4);

	this.instance_15 = new lib.Symbol122copy();
	this.instance_15.setTransform(0.6,16.4,1.642,1.642,97.4,0,0,0.1,88.3);

	this.instance_16 = new lib.Symbol122copy();
	this.instance_16.setTransform(0.5,16,1.642,1.642,-70,0,0,-0.1,88.3);

	this.instance_17 = new lib.Symbol122copy();
	this.instance_17.setTransform(0.6,16.3,1.642,1.642,10.7,0,0,0,88.4);

	this.instance_18 = new lib.Symbol122();
	this.instance_18.setTransform(0.7,16.3,1.642,1.642,45.7,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2 copy 12
	this.instance_19 = new lib.Symbol122();
	this.instance_19.setTransform(0.8,16.3,1.642,1.642,177.9,0,0,0.1,88.3);

	this.instance_20 = new lib.Symbol122();
	this.instance_20.setTransform(0.7,16.3,1.642,1.642,-147.4,0,0,0.1,88.3);

	this.instance_21 = new lib.Symbol122();
	this.instance_21.setTransform(0.7,16.2,1.642,1.642,-40.3,0,0,0.1,88.4);

	this.instance_22 = new lib.Symbol122();
	this.instance_22.setTransform(0.9,16.2,1.642,1.642,-118,0,0,0.1,88.4);

	this.instance_23 = new lib.Symbol122();
	this.instance_23.setTransform(0.8,16.3,1.642,1.642,33.3,0,0,0.1,88.5);

	this.instance_24 = new lib.Symbol122();
	this.instance_24.setTransform(0.8,16.2,1.642,1.642,88.7,0,0,0.1,88.5);

	this.instance_25 = new lib.Symbol122();
	this.instance_25.setTransform(0.6,16,1.642,1.642,-2.7,0,0,0.1,88.4);

	this.instance_26 = new lib.Symbol122();
	this.instance_26.setTransform(0.5,16.2,1.642,1.642,127.3,0,0,0.1,88.4);

	this.instance_27 = new lib.Symbol122();
	this.instance_27.setTransform(0.6,16.1,1.642,1.642,-80.6,0,0,0.1,88.4);

	this.instance_28 = new lib.Symbol122copy();
	this.instance_28.setTransform(0.4,16.6,1.642,1.642,-20.1,0,0,0.1,88.3);

	this.instance_29 = new lib.Symbol122copy();
	this.instance_29.setTransform(0.5,16.3,1.642,1.642,160.6,0,0,0.1,88.3);

	this.instance_30 = new lib.Symbol122copy();
	this.instance_30.setTransform(0.3,16.3,1.642,1.642,-101.6,0,0,0.3,88.4);

	this.instance_31 = new lib.Symbol122copy();
	this.instance_31.setTransform(0.4,16.3,1.642,1.642,74.6,0,0,0.1,88.4);

	this.instance_32 = new lib.Symbol122copy();
	this.instance_32.setTransform(0.4,16.4,1.642,1.642,-161.6,0,0,0.1,88.4);

	this.instance_33 = new lib.Symbol122copy();
	this.instance_33.setTransform(0.3,16.2,1.642,1.642,-131.6,0,0,0.1,88.4);

	this.instance_34 = new lib.Symbol122copy();
	this.instance_34.setTransform(0.3,16.5,1.642,1.642,108.4,0,0,0.1,88.4);

	this.instance_35 = new lib.Symbol122copy();
	this.instance_35.setTransform(0.4,16.2,1.642,1.642,-59.1,0,0,-0.1,88.3);

	this.instance_36 = new lib.Symbol122copy();
	this.instance_36.setTransform(0.5,16.5,1.642,1.642,21.7,0,0,0,88.4);

	this.instance_37 = new lib.Symbol122();
	this.instance_37.setTransform(0.6,16.5,1.642,1.642,56.7,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(1));

	// Layer 2 copy 13
	this.instance_38 = new lib.Symbol122();
	this.instance_38.setTransform(0.8,15.3,1.642,1.642,134.7,0,0,0.1,88.3);

	this.instance_39 = new lib.Symbol122();
	this.instance_39.setTransform(0.7,15.4,1.642,1.642,169.5,0,0,0.1,88.3);

	this.instance_40 = new lib.Symbol122();
	this.instance_40.setTransform(0.6,15.2,1.642,1.642,-83.5,0,0,0.1,88.4);

	this.instance_41 = new lib.Symbol122();
	this.instance_41.setTransform(0.7,15.2,1.642,1.642,-161.2,0,0,0.1,88.4);

	this.instance_42 = new lib.Symbol122();
	this.instance_42.setTransform(0.8,15.2,1.642,1.642,-9.9,0,0,0.1,88.5);

	this.instance_43 = new lib.Symbol122();
	this.instance_43.setTransform(0.7,15.1,1.642,1.642,45.6,0,0,0.1,88.5);

	this.instance_44 = new lib.Symbol122();
	this.instance_44.setTransform(0.5,15.2,1.642,1.642,-45.8,0,0,0.1,88.4);

	this.instance_45 = new lib.Symbol122();
	this.instance_45.setTransform(0.4,15.4,1.642,1.642,84.2,0,0,0.1,88.4);

	this.instance_46 = new lib.Symbol122();
	this.instance_46.setTransform(0.4,15.2,1.642,1.642,-123.8,0,0,0.1,88.4);

	this.instance_47 = new lib.Symbol122copy();
	this.instance_47.setTransform(0.6,15.7,1.642,1.642,-63.3,0,0,0.1,88.3);

	this.instance_48 = new lib.Symbol122copy();
	this.instance_48.setTransform(0.5,15.5,1.642,1.642,117.4,0,0,0.1,88.3);

	this.instance_49 = new lib.Symbol122copy();
	this.instance_49.setTransform(0.5,15.7,1.642,1.642,-144.7,0,0,0.2,88.4);

	this.instance_50 = new lib.Symbol122copy();
	this.instance_50.setTransform(0.5,15.6,1.642,1.642,31.5,0,0,0.1,88.4);

	this.instance_51 = new lib.Symbol122copy();
	this.instance_51.setTransform(0.5,15.6,1.642,1.642,155.3,0,0,0.1,88.4);

	this.instance_52 = new lib.Symbol122copy();
	this.instance_52.setTransform(0.4,15.6,1.642,1.642,-174.7,0,0,0.1,88.4);

	this.instance_53 = new lib.Symbol122copy();
	this.instance_53.setTransform(0.5,15.8,1.642,1.642,65.3,0,0,0.1,88.4);

	this.instance_54 = new lib.Symbol122copy();
	this.instance_54.setTransform(0.5,15.3,1.642,1.642,-102.2,0,0,0,88.4);

	this.instance_55 = new lib.Symbol122copy();
	this.instance_55.setTransform(0.6,15.6,1.642,1.642,-21.4,0,0,0,88.4);

	this.instance_56 = new lib.Symbol122();
	this.instance_56.setTransform(0.7,15.6,1.642,1.642,13.5,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]}).wait(1));

	// Layer 2 copy 14
	this.instance_57 = new lib.Symbol122();
	this.instance_57.setTransform(0.6,15.1,1.642,1.642,121.2,0,0,0.1,88.3);

	this.instance_58 = new lib.Symbol122();
	this.instance_58.setTransform(0.6,15.1,1.642,1.642,155.9,0,0,0.1,88.3);

	this.instance_59 = new lib.Symbol122();
	this.instance_59.setTransform(0.5,15,1.642,1.642,-97,0,0,0.1,88.4);

	this.instance_60 = new lib.Symbol122();
	this.instance_60.setTransform(0.5,14.9,1.642,1.642,-174.8,0,0,0.1,88.4);

	this.instance_61 = new lib.Symbol122();
	this.instance_61.setTransform(0.6,15,1.642,1.642,-23.4,0,0,0.1,88.5);

	this.instance_62 = new lib.Symbol122();
	this.instance_62.setTransform(0.6,14.9,1.642,1.642,32,0,0,0.1,88.5);

	this.instance_63 = new lib.Symbol122();
	this.instance_63.setTransform(0.3,14.9,1.642,1.642,-59.4,0,0,0.1,88.4);

	this.instance_64 = new lib.Symbol122();
	this.instance_64.setTransform(0.4,15.1,1.642,1.642,70.6,0,0,0.1,88.4);

	this.instance_65 = new lib.Symbol122();
	this.instance_65.setTransform(0.5,15,1.642,1.642,-137.3,0,0,0,88.5);

	this.instance_66 = new lib.Symbol122copy();
	this.instance_66.setTransform(0.7,15.5,1.642,1.642,-76.8,0,0,0.1,88.3);

	this.instance_67 = new lib.Symbol122copy();
	this.instance_67.setTransform(0.3,15.2,1.642,1.642,103.9,0,0,0.1,88.4);

	this.instance_68 = new lib.Symbol122copy();
	this.instance_68.setTransform(0.5,15.4,1.642,1.642,-158.3,0,0,0.2,88.4);

	this.instance_69 = new lib.Symbol122copy();
	this.instance_69.setTransform(0.4,15.4,1.642,1.642,17.9,0,0,0.1,88.4);

	this.instance_70 = new lib.Symbol122copy();
	this.instance_70.setTransform(0.4,15.4,1.642,1.642,141.7,0,0,0.1,88.4);

	this.instance_71 = new lib.Symbol122copy();
	this.instance_71.setTransform(0.3,15.4,1.642,1.642,171.7,0,0,0.1,88.4);

	this.instance_72 = new lib.Symbol122copy();
	this.instance_72.setTransform(0.5,15.6,1.642,1.642,51.7,0,0,0.1,88.4);

	this.instance_73 = new lib.Symbol122copy();
	this.instance_73.setTransform(0.3,15.2,1.642,1.642,-115.8,0,0,-0.1,88.3);

	this.instance_74 = new lib.Symbol122copy();
	this.instance_74.setTransform(0.6,15.4,1.642,1.642,-35,0,0,0,88.4);

	this.instance_75 = new lib.Symbol122();
	this.instance_75.setTransform(0.7,15.3,1.642,1.642,0,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57}]}).wait(1));

	// Layer 2 copy 15
	this.instance_76 = new lib.Symbol122();
	this.instance_76.setTransform(0.7,15.2,1.642,1.642,130.5,0,0,0.1,88.3);

	this.instance_77 = new lib.Symbol122();
	this.instance_77.setTransform(0.7,15.3,1.642,1.642,165.2,0,0,0.1,88.3);

	this.instance_78 = new lib.Symbol122();
	this.instance_78.setTransform(0.6,15.2,1.642,1.642,-87.7,0,0,0.1,88.4);

	this.instance_79 = new lib.Symbol122();
	this.instance_79.setTransform(0.6,15,1.642,1.642,-165.5,0,0,0.2,88.4);

	this.instance_80 = new lib.Symbol122();
	this.instance_80.setTransform(0.7,15,1.642,1.642,-14.2,0,0,0.1,88.4);

	this.instance_81 = new lib.Symbol122();
	this.instance_81.setTransform(0.7,15.1,1.642,1.642,41.3,0,0,0.1,88.5);

	this.instance_82 = new lib.Symbol122();
	this.instance_82.setTransform(0.5,15.1,1.642,1.642,-50.1,0,0,0.1,88.4);

	this.instance_83 = new lib.Symbol122();
	this.instance_83.setTransform(0.4,15.3,1.642,1.642,79.9,0,0,0.1,88.4);

	this.instance_84 = new lib.Symbol122();
	this.instance_84.setTransform(0.6,15.3,1.642,1.642,-128,0,0,0,88.5);

	this.instance_85 = new lib.Symbol122copy();
	this.instance_85.setTransform(0.8,15.7,1.642,1.642,-67.5,0,0,0.1,88.4);

	this.instance_86 = new lib.Symbol122copy();
	this.instance_86.setTransform(0.4,15.4,1.642,1.642,113.1,0,0,0.1,88.4);

	this.instance_87 = new lib.Symbol122copy();
	this.instance_87.setTransform(0.6,15.6,1.642,1.642,-149,0,0,0.2,88.4);

	this.instance_88 = new lib.Symbol122copy();
	this.instance_88.setTransform(0.5,15.5,1.642,1.642,27.2,0,0,0.1,88.4);

	this.instance_89 = new lib.Symbol122copy();
	this.instance_89.setTransform(0.5,15.5,1.642,1.642,151,0,0,0.1,88.4);

	this.instance_90 = new lib.Symbol122copy();
	this.instance_90.setTransform(0.4,15.5,1.642,1.642,-179,0,0,0.1,88.4);

	this.instance_91 = new lib.Symbol122copy();
	this.instance_91.setTransform(0.7,15.6,1.642,1.642,61,0,0,0.1,88.3);

	this.instance_92 = new lib.Symbol122copy();
	this.instance_92.setTransform(0.4,15.4,1.642,1.642,-106.5,0,0,-0.1,88.3);

	this.instance_93 = new lib.Symbol122copy();
	this.instance_93.setTransform(0.7,15.5,1.642,1.642,-25.7,0,0,0,88.4);

	this.instance_94 = new lib.Symbol122();
	this.instance_94.setTransform(0.6,15.4,1.642,1.642,9.3,0,0,0,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76}]}).wait(1));

	// Layer 2 copy 6
	this.instance_95 = new lib.Symbol122();
	this.instance_95.setTransform(0.8,15.5,1.642,1.642,143.7,0,0,0.1,88.3);

	this.instance_96 = new lib.Symbol122();
	this.instance_96.setTransform(0.9,15.6,1.642,1.642,178.5,0,0,0.1,88.3);

	this.instance_97 = new lib.Symbol122();
	this.instance_97.setTransform(0.9,15.5,1.642,1.642,-74.5,0,0,0.1,88.5);

	this.instance_98 = new lib.Symbol122();
	this.instance_98.setTransform(0.9,15.4,1.642,1.642,-152.2,0,0,0.1,88.4);

	this.instance_99 = new lib.Symbol122();
	this.instance_99.setTransform(0.9,15.4,1.642,1.642,-0.9,0,0,0.1,88.5);

	this.instance_100 = new lib.Symbol122();
	this.instance_100.setTransform(0.8,15.4,1.642,1.642,54.5,0,0,0.1,88.5);

	this.instance_101 = new lib.Symbol122();
	this.instance_101.setTransform(0.6,15.3,1.642,1.642,-36.9,0,0,0.1,88.4);

	this.instance_102 = new lib.Symbol122();
	this.instance_102.setTransform(0.6,15.6,1.642,1.642,93.1,0,0,0.1,88.4);

	this.instance_103 = new lib.Symbol122();
	this.instance_103.setTransform(0.6,15.4,1.642,1.642,-114.8,0,0,0.1,88.4);

	this.instance_104 = new lib.Symbol122copy();
	this.instance_104.setTransform(0.8,15.8,1.642,1.642,-54.3,0,0,0.2,88.3);

	this.instance_105 = new lib.Symbol122copy();
	this.instance_105.setTransform(0.5,15.6,1.642,1.642,126.4,0,0,0.1,88.4);

	this.instance_106 = new lib.Symbol122copy();
	this.instance_106.setTransform(0.6,15.8,1.642,1.642,-135.8,0,0,0.2,88.4);

	this.instance_107 = new lib.Symbol122copy();
	this.instance_107.setTransform(0.5,15.7,1.642,1.642,40.4,0,0,0.1,88.4);

	this.instance_108 = new lib.Symbol122copy();
	this.instance_108.setTransform(0.6,15.8,1.642,1.642,164.2,0,0,0.1,88.4);

	this.instance_109 = new lib.Symbol122copy();
	this.instance_109.setTransform(0.5,15.6,1.642,1.642,-165.8,0,0,0.1,88.5);

	this.instance_110 = new lib.Symbol122copy();
	this.instance_110.setTransform(0.7,15.9,1.642,1.642,74.2,0,0,0.1,88.3);

	this.instance_111 = new lib.Symbol122copy();
	this.instance_111.setTransform(0.6,15.6,1.642,1.642,-93.3,0,0,-0.1,88.4);

	this.instance_112 = new lib.Symbol122copy();
	this.instance_112.setTransform(0.7,15.8,1.642,1.642,-12.5,0,0,0,88.4);

	this.instance_113 = new lib.Symbol122();
	this.instance_113.setTransform(0.8,15.8,1.642,1.642,22.5,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95}]}).wait(1));

	// Layer 2 copy 7
	this.instance_114 = new lib.Symbol122();
	this.instance_114.setTransform(0.9,15.7,1.642,1.642,151.2,0,0,0.1,88.3);

	this.instance_115 = new lib.Symbol122();
	this.instance_115.setTransform(0.8,15.8,1.642,1.642,-174,0,0,0.1,88.3);

	this.instance_116 = new lib.Symbol122();
	this.instance_116.setTransform(0.8,15.6,1.642,1.642,-67,0,0,0.1,88.4);

	this.instance_117 = new lib.Symbol122();
	this.instance_117.setTransform(0.9,15.6,1.642,1.642,-144.7,0,0,0.1,88.4);

	this.instance_118 = new lib.Symbol122();
	this.instance_118.setTransform(0.9,15.6,1.642,1.642,6.6,0,0,0.1,88.5);

	this.instance_119 = new lib.Symbol122();
	this.instance_119.setTransform(0.9,15.6,1.642,1.642,62.1,0,0,0.1,88.5);

	this.instance_120 = new lib.Symbol122();
	this.instance_120.setTransform(0.7,15.5,1.642,1.642,-29.4,0,0,0.1,88.4);

	this.instance_121 = new lib.Symbol122();
	this.instance_121.setTransform(0.6,15.7,1.642,1.642,100.7,0,0,0.1,88.4);

	this.instance_122 = new lib.Symbol122();
	this.instance_122.setTransform(0.6,15.6,1.642,1.642,-107.3,0,0,0.1,88.4);

	this.instance_123 = new lib.Symbol122copy();
	this.instance_123.setTransform(0.6,16.1,1.642,1.642,-46.8,0,0,0.1,88.3);

	this.instance_124 = new lib.Symbol122copy();
	this.instance_124.setTransform(0.7,15.8,1.642,1.642,133.9,0,0,0.1,88.3);

	this.instance_125 = new lib.Symbol122copy();
	this.instance_125.setTransform(0.6,16,1.642,1.642,-128.3,0,0,0.2,88.4);

	this.instance_126 = new lib.Symbol122copy();
	this.instance_126.setTransform(0.5,15.8,1.642,1.642,48,0,0,0.1,88.4);

	this.instance_127 = new lib.Symbol122copy();
	this.instance_127.setTransform(0.5,15.8,1.642,1.642,171.7,0,0,0.1,88.4);

	this.instance_128 = new lib.Symbol122copy();
	this.instance_128.setTransform(0.4,15.9,1.642,1.642,-158.3,0,0,0.1,88.4);

	this.instance_129 = new lib.Symbol122copy();
	this.instance_129.setTransform(0.5,16.1,1.642,1.642,81.7,0,0,0.1,88.4);

	this.instance_130 = new lib.Symbol122copy();
	this.instance_130.setTransform(0.5,15.7,1.642,1.642,-85.7,0,0,-0.1,88.3);

	this.instance_131 = new lib.Symbol122copy();
	this.instance_131.setTransform(0.7,16,1.642,1.642,-5,0,0,0,88.4);

	this.instance_132 = new lib.Symbol122();
	this.instance_132.setTransform(0.8,15.9,1.642,1.642,30,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114}]}).wait(1));

	// Layer 2 copy 8
	this.instance_133 = new lib.Symbol122();
	this.instance_133.setTransform(0.8,15.5,1.642,1.642,141.2,0,0,0.1,88.3);

	this.instance_134 = new lib.Symbol122();
	this.instance_134.setTransform(0.8,15.5,1.642,1.642,175.9,0,0,0.1,88.3);

	this.instance_135 = new lib.Symbol122();
	this.instance_135.setTransform(0.7,15.4,1.642,1.642,-77,0,0,0.1,88.4);

	this.instance_136 = new lib.Symbol122();
	this.instance_136.setTransform(0.8,15.4,1.642,1.642,-154.8,0,0,0.1,88.4);

	this.instance_137 = new lib.Symbol122();
	this.instance_137.setTransform(0.8,15.4,1.642,1.642,-3.5,0,0,0.1,88.5);

	this.instance_138 = new lib.Symbol122();
	this.instance_138.setTransform(0.8,15.4,1.642,1.642,52,0,0,0.1,88.5);

	this.instance_139 = new lib.Symbol122();
	this.instance_139.setTransform(0.6,15.3,1.642,1.642,-39.4,0,0,0.1,88.4);

	this.instance_140 = new lib.Symbol122();
	this.instance_140.setTransform(0.5,15.4,1.642,1.642,90.6,0,0,0,88.4);

	this.instance_141 = new lib.Symbol122();
	this.instance_141.setTransform(0.7,15.5,1.642,1.642,-117.3,0,0,0,88.5);

	this.instance_142 = new lib.Symbol122copy();
	this.instance_142.setTransform(0.7,15.9,1.642,1.642,-56.8,0,0,0.1,88.3);

	this.instance_143 = new lib.Symbol122copy();
	this.instance_143.setTransform(0.5,15.6,1.642,1.642,123.8,0,0,0.1,88.4);

	this.instance_144 = new lib.Symbol122copy();
	this.instance_144.setTransform(0.6,15.8,1.642,1.642,-138.3,0,0,0.2,88.4);

	this.instance_145 = new lib.Symbol122copy();
	this.instance_145.setTransform(0.5,15.7,1.642,1.642,37.9,0,0,0.1,88.4);

	this.instance_146 = new lib.Symbol122copy();
	this.instance_146.setTransform(0.6,15.7,1.642,1.642,161.7,0,0,0.1,88.4);

	this.instance_147 = new lib.Symbol122copy();
	this.instance_147.setTransform(0.6,15.8,1.642,1.642,-168.3,0,0,0,88.4);

	this.instance_148 = new lib.Symbol122copy();
	this.instance_148.setTransform(0.6,15.9,1.642,1.642,71.7,0,0,0.1,88.4);

	this.instance_149 = new lib.Symbol122copy();
	this.instance_149.setTransform(0.5,15.5,1.642,1.642,-95.8,0,0,-0.1,88.3);

	this.instance_150 = new lib.Symbol122copy();
	this.instance_150.setTransform(0.7,15.8,1.642,1.642,-15,0,0,0,88.4);

	this.instance_151 = new lib.Symbol122();
	this.instance_151.setTransform(0.8,15.7,1.642,1.642,20,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133}]}).wait(1));

	// Layer 2 copy 9
	this.instance_152 = new lib.Symbol122();
	this.instance_152.setTransform(0.8,15.6,1.642,1.642,146.2,0,0,0.1,88.3);

	this.instance_153 = new lib.Symbol122();
	this.instance_153.setTransform(0.8,15.6,1.642,1.642,-179,0,0,0.1,88.3);

	this.instance_154 = new lib.Symbol122();
	this.instance_154.setTransform(0.7,15.5,1.642,1.642,-72,0,0,0.1,88.4);

	this.instance_155 = new lib.Symbol122();
	this.instance_155.setTransform(0.9,15.5,1.642,1.642,-149.7,0,0,0.1,88.4);

	this.instance_156 = new lib.Symbol122();
	this.instance_156.setTransform(0.9,15.5,1.642,1.642,1.6,0,0,0.1,88.5);

	this.instance_157 = new lib.Symbol122();
	this.instance_157.setTransform(0.8,15.4,1.642,1.642,57.1,0,0,0.1,88.5);

	this.instance_158 = new lib.Symbol122();
	this.instance_158.setTransform(0.6,15.4,1.642,1.642,-34.4,0,0,0.1,88.4);

	this.instance_159 = new lib.Symbol122();
	this.instance_159.setTransform(0.6,15.6,1.642,1.642,95.7,0,0,0.1,88.4);

	this.instance_160 = new lib.Symbol122();
	this.instance_160.setTransform(0.6,15.5,1.642,1.642,-112.3,0,0,0.1,88.4);

	this.instance_161 = new lib.Symbol122copy();
	this.instance_161.setTransform(0.8,15.9,1.642,1.642,-51.8,0,0,0.2,88.3);

	this.instance_162 = new lib.Symbol122copy();
	this.instance_162.setTransform(0.6,15.8,1.642,1.642,128.9,0,0,0.1,88.3);

	this.instance_163 = new lib.Symbol122copy();
	this.instance_163.setTransform(0.5,15.9,1.642,1.642,-133.3,0,0,0.2,88.4);

	this.instance_164 = new lib.Symbol122copy();
	this.instance_164.setTransform(0.5,15.8,1.642,1.642,43,0,0,0.1,88.4);

	this.instance_165 = new lib.Symbol122copy();
	this.instance_165.setTransform(0.5,15.9,1.642,1.642,166.7,0,0,0.1,88.4);

	this.instance_166 = new lib.Symbol122copy();
	this.instance_166.setTransform(0.4,15.6,1.642,1.642,-163.3,0,0,0.1,88.5);

	this.instance_167 = new lib.Symbol122copy();
	this.instance_167.setTransform(0.7,16,1.642,1.642,76.7,0,0,0.1,88.3);

	this.instance_168 = new lib.Symbol122copy();
	this.instance_168.setTransform(0.5,15.6,1.642,1.642,-90.7,0,0,-0.1,88.3);

	this.instance_169 = new lib.Symbol122copy();
	this.instance_169.setTransform(0.7,15.9,1.642,1.642,-10,0,0,0,88.4);

	this.instance_170 = new lib.Symbol122();
	this.instance_170.setTransform(0.6,15.7,1.642,1.642,25,0,0,0,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152}]}).wait(1));

	// Layer 2 copy 10
	this.instance_171 = new lib.Symbol122();
	this.instance_171.setTransform(0.8,15.4,1.642,1.642,137.5,0,0,0.1,88.3);

	this.instance_172 = new lib.Symbol122();
	this.instance_172.setTransform(0.8,15.4,1.642,1.642,172.2,0,0,0.1,88.3);

	this.instance_173 = new lib.Symbol122();
	this.instance_173.setTransform(0.8,15.3,1.642,1.642,-80.7,0,0,0.1,88.5);

	this.instance_174 = new lib.Symbol122();
	this.instance_174.setTransform(0.8,15.2,1.642,1.642,-158.5,0,0,0.1,88.4);

	this.instance_175 = new lib.Symbol122();
	this.instance_175.setTransform(0.8,15.2,1.642,1.642,-7.1,0,0,0.1,88.4);

	this.instance_176 = new lib.Symbol122();
	this.instance_176.setTransform(0.8,15.2,1.642,1.642,48.3,0,0,0.1,88.5);

	this.instance_177 = new lib.Symbol122();
	this.instance_177.setTransform(0.5,15.2,1.642,1.642,-43.1,0,0,0.1,88.4);

	this.instance_178 = new lib.Symbol122();
	this.instance_178.setTransform(0.5,15.4,1.642,1.642,86.9,0,0,0.1,88.4);

	this.instance_179 = new lib.Symbol122();
	this.instance_179.setTransform(0.5,15.3,1.642,1.642,-121,0,0,0.1,88.4);

	this.instance_180 = new lib.Symbol122copy();
	this.instance_180.setTransform(0.7,15.8,1.642,1.642,-60.5,0,0,0.1,88.3);

	this.instance_181 = new lib.Symbol122copy();
	this.instance_181.setTransform(0.4,15.6,1.642,1.642,120.2,0,0,0.2,88.4);

	this.instance_182 = new lib.Symbol122copy();
	this.instance_182.setTransform(0.5,15.7,1.642,1.642,-142,0,0,0.2,88.4);

	this.instance_183 = new lib.Symbol122copy();
	this.instance_183.setTransform(0.5,15.7,1.642,1.642,34.2,0,0,0.1,88.4);

	this.instance_184 = new lib.Symbol122copy();
	this.instance_184.setTransform(0.5,15.6,1.642,1.642,158,0,0,0.1,88.4);

	this.instance_185 = new lib.Symbol122copy();
	this.instance_185.setTransform(0.5,15.7,1.642,1.642,-172,0,0,0,88.4);

	this.instance_186 = new lib.Symbol122copy();
	this.instance_186.setTransform(0.5,15.8,1.642,1.642,68,0,0,0.1,88.4);

	this.instance_187 = new lib.Symbol122copy();
	this.instance_187.setTransform(0.6,15.5,1.642,1.642,-99.5,0,0,-0.1,88.4);

	this.instance_188 = new lib.Symbol122copy();
	this.instance_188.setTransform(0.7,15.7,1.642,1.642,-18.7,0,0,0,88.4);

	this.instance_189 = new lib.Symbol122();
	this.instance_189.setTransform(0.6,15.6,1.642,1.642,16.3,0,0,0,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171}]}).wait(1));

	// Layer 2 copy 4
	this.instance_190 = new lib.Symbol122();
	this.instance_190.setTransform(0.8,15.3,1.642,1.642,132.4,0,0,0.1,88.3);

	this.instance_191 = new lib.Symbol122();
	this.instance_191.setTransform(0.7,15.4,1.642,1.642,167.2,0,0,0.1,88.3);

	this.instance_192 = new lib.Symbol122();
	this.instance_192.setTransform(0.6,15.2,1.642,1.642,-85.8,0,0,0.1,88.4);

	this.instance_193 = new lib.Symbol122();
	this.instance_193.setTransform(0.7,15.2,1.642,1.642,-163.5,0,0,0.1,88.4);

	this.instance_194 = new lib.Symbol122();
	this.instance_194.setTransform(0.8,15.1,1.642,1.642,-12.2,0,0,0.1,88.4);

	this.instance_195 = new lib.Symbol122();
	this.instance_195.setTransform(0.7,15.1,1.642,1.642,43.3,0,0,0.1,88.5);

	this.instance_196 = new lib.Symbol122();
	this.instance_196.setTransform(0.5,15.2,1.642,1.642,-48.2,0,0,0.1,88.4);

	this.instance_197 = new lib.Symbol122();
	this.instance_197.setTransform(0.4,15.4,1.642,1.642,81.9,0,0,0.1,88.4);

	this.instance_198 = new lib.Symbol122();
	this.instance_198.setTransform(0.5,15.2,1.642,1.642,-126.1,0,0,0.1,88.4);

	this.instance_199 = new lib.Symbol122copy();
	this.instance_199.setTransform(0.7,15.7,1.642,1.642,-65.6,0,0,0.1,88.3);

	this.instance_200 = new lib.Symbol122copy();
	this.instance_200.setTransform(0.5,15.5,1.642,1.642,115.1,0,0,0.1,88.3);

	this.instance_201 = new lib.Symbol122copy();
	this.instance_201.setTransform(0.7,15.7,1.642,1.642,-147.1,0,0,0.1,88.4);

	this.instance_202 = new lib.Symbol122copy();
	this.instance_202.setTransform(0.5,15.6,1.642,1.642,29.2,0,0,0.1,88.4);

	this.instance_203 = new lib.Symbol122copy();
	this.instance_203.setTransform(0.5,15.6,1.642,1.642,152.9,0,0,0.1,88.4);

	this.instance_204 = new lib.Symbol122copy();
	this.instance_204.setTransform(0.4,15.6,1.642,1.642,-177.1,0,0,0.1,88.4);

	this.instance_205 = new lib.Symbol122copy();
	this.instance_205.setTransform(0.6,15.8,1.642,1.642,63,0,0,0.1,88.4);

	this.instance_206 = new lib.Symbol122copy();
	this.instance_206.setTransform(0.4,15.3,1.642,1.642,-104.5,0,0,0,88.3);

	this.instance_207 = new lib.Symbol122copy();
	this.instance_207.setTransform(0.7,15.6,1.642,1.642,-23.7,0,0,0,88.4);

	this.instance_208 = new lib.Symbol122();
	this.instance_208.setTransform(0.7,15.5,1.642,1.642,11.2,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190}]}).wait(1));

	// Layer 2 copy 5
	this.instance_209 = new lib.Symbol122();
	this.instance_209.setTransform(0.4,14.8,1.642,1.642,108.2,0,0,0.1,88.3);

	this.instance_210 = new lib.Symbol122();
	this.instance_210.setTransform(0.3,14.8,1.642,1.642,143,0,0,0.1,88.3);

	this.instance_211 = new lib.Symbol122();
	this.instance_211.setTransform(0.3,14.8,1.642,1.642,-110,0,0,0.1,88.4);

	this.instance_212 = new lib.Symbol122();
	this.instance_212.setTransform(0.3,14.6,1.642,1.642,172.3,0,0,0.1,88.4);

	this.instance_213 = new lib.Symbol122();
	this.instance_213.setTransform(0.4,14.7,1.642,1.642,-36.4,0,0,0.1,88.5);

	this.instance_214 = new lib.Symbol122();
	this.instance_214.setTransform(0.2,14.7,1.642,1.642,19,0,0,0.1,88.5);

	this.instance_215 = new lib.Symbol122();
	this.instance_215.setTransform(0,14.8,1.642,1.642,-72.4,0,0,0.1,88.4);

	this.instance_216 = new lib.Symbol122();
	this.instance_216.setTransform(0,15.1,1.642,1.642,57.6,0,0,0.1,88.5);

	this.instance_217 = new lib.Symbol122();
	this.instance_217.setTransform(0.1,14.9,1.642,1.642,-150.3,0,0,0.1,88.4);

	this.instance_218 = new lib.Symbol122copy();
	this.instance_218.setTransform(0.5,15.2,1.642,1.642,-89.8,0,0,0.1,88.3);

	this.instance_219 = new lib.Symbol122copy();
	this.instance_219.setTransform(0.3,15.2,1.642,1.642,90.9,0,0,0.2,88.3);

	this.instance_220 = new lib.Symbol122copy();
	this.instance_220.setTransform(0.3,15.2,1.642,1.642,-171.3,0,0,0.2,88.4);

	this.instance_221 = new lib.Symbol122copy();
	this.instance_221.setTransform(0.2,15.1,1.642,1.642,4.9,0,0,0.1,88.4);

	this.instance_222 = new lib.Symbol122copy();
	this.instance_222.setTransform(0.2,15.2,1.642,1.642,128.7,0,0,0.1,88.4);

	this.instance_223 = new lib.Symbol122copy();
	this.instance_223.setTransform(0.2,15.2,1.642,1.642,158.7,0,0,0.1,88.4);

	this.instance_224 = new lib.Symbol122copy();
	this.instance_224.setTransform(0.4,15.3,1.642,1.642,38.7,0,0,0.1,88.4);

	this.instance_225 = new lib.Symbol122copy();
	this.instance_225.setTransform(0.1,15.1,1.642,1.642,-128.8,0,0,-0.1,88.3);

	this.instance_226 = new lib.Symbol122copy();
	this.instance_226.setTransform(0.4,15.1,1.642,1.642,-48,0,0,0,88.4);

	this.instance_227 = new lib.Symbol122();
	this.instance_227.setTransform(0.5,15,1.642,1.642,-13,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209}]}).wait(1));

	// Layer 2 copy 2
	this.instance_228 = new lib.Symbol122();
	this.instance_228.setTransform(0.8,15.7,1.642,1.642,148.5,0,0,0.1,88.3);

	this.instance_229 = new lib.Symbol122();
	this.instance_229.setTransform(0.8,15.7,1.642,1.642,-176.8,0,0,0.1,88.3);

	this.instance_230 = new lib.Symbol122();
	this.instance_230.setTransform(0.7,15.6,1.642,1.642,-69.8,0,0,0.1,88.4);

	this.instance_231 = new lib.Symbol122();
	this.instance_231.setTransform(0.9,15.5,1.642,1.642,-147.5,0,0,0.1,88.4);

	this.instance_232 = new lib.Symbol122();
	this.instance_232.setTransform(0.9,15.6,1.642,1.642,3.8,0,0,0.1,88.5);

	this.instance_233 = new lib.Symbol122();
	this.instance_233.setTransform(0.9,15.6,1.642,1.642,59.3,0,0,0.1,88.5);

	this.instance_234 = new lib.Symbol122();
	this.instance_234.setTransform(0.6,15.4,1.642,1.642,-32.1,0,0,0.1,88.4);

	this.instance_235 = new lib.Symbol122();
	this.instance_235.setTransform(0.5,15.6,1.642,1.642,97.9,0,0,0.1,88.4);

	this.instance_236 = new lib.Symbol122();
	this.instance_236.setTransform(0.6,15.5,1.642,1.642,-110,0,0,0.1,88.4);

	this.instance_237 = new lib.Symbol122copy();
	this.instance_237.setTransform(0.7,16,1.642,1.642,-49.6,0,0,0.2,88.3);

	this.instance_238 = new lib.Symbol122copy();
	this.instance_238.setTransform(0.6,15.8,1.642,1.642,131.1,0,0,0.1,88.3);

	this.instance_239 = new lib.Symbol122copy();
	this.instance_239.setTransform(0.5,16,1.642,1.642,-131,0,0,0.2,88.4);

	this.instance_240 = new lib.Symbol122copy();
	this.instance_240.setTransform(0.4,15.9,1.642,1.642,45.2,0,0,0.1,88.5);

	this.instance_241 = new lib.Symbol122copy();
	this.instance_241.setTransform(0.5,15.9,1.642,1.642,169,0,0,0.1,88.4);

	this.instance_242 = new lib.Symbol122copy();
	this.instance_242.setTransform(0.4,15.9,1.642,1.642,-161,0,0,0.1,88.4);

	this.instance_243 = new lib.Symbol122copy();
	this.instance_243.setTransform(0.5,16,1.642,1.642,79,0,0,0,88.4);

	this.instance_244 = new lib.Symbol122copy();
	this.instance_244.setTransform(0.5,15.7,1.642,1.642,-88.5,0,0,-0.1,88.3);

	this.instance_245 = new lib.Symbol122copy();
	this.instance_245.setTransform(0.7,15.9,1.642,1.642,-7.7,0,0,0,88.4);

	this.instance_246 = new lib.Symbol122();
	this.instance_246.setTransform(0.6,15.8,1.642,1.642,27.2,0,0,0,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228}]}).wait(1));

	// Layer 2 copy
	this.instance_247 = new lib.Symbol122();
	this.instance_247.setTransform(0.7,15.2,1.642,1.642,128.5,0,0,0.1,88.3);

	this.instance_248 = new lib.Symbol122();
	this.instance_248.setTransform(0.7,15.3,1.642,1.642,163.2,0,0,0.1,88.3);

	this.instance_249 = new lib.Symbol122();
	this.instance_249.setTransform(0.5,15.2,1.642,1.642,-89.7,0,0,0.1,88.4);

	this.instance_250 = new lib.Symbol122();
	this.instance_250.setTransform(0.6,15,1.642,1.642,-167.5,0,0,0.1,88.4);

	this.instance_251 = new lib.Symbol122();
	this.instance_251.setTransform(0.7,15.1,1.642,1.642,-16.1,0,0,0.1,88.5);

	this.instance_252 = new lib.Symbol122();
	this.instance_252.setTransform(0.7,15,1.642,1.642,39.3,0,0,0.1,88.5);

	this.instance_253 = new lib.Symbol122();
	this.instance_253.setTransform(0.4,15,1.642,1.642,-52.1,0,0,0.1,88.4);

	this.instance_254 = new lib.Symbol122();
	this.instance_254.setTransform(0.4,15.3,1.642,1.642,77.9,0,0,0.1,88.4);

	this.instance_255 = new lib.Symbol122();
	this.instance_255.setTransform(0.4,15.1,1.642,1.642,-130,0,0,0.1,88.4);

	this.instance_256 = new lib.Symbol122copy();
	this.instance_256.setTransform(0.8,15.7,1.642,1.642,-69.5,0,0,0.1,88.4);

	this.instance_257 = new lib.Symbol122copy();
	this.instance_257.setTransform(0.5,15.4,1.642,1.642,111.2,0,0,0.1,88.3);

	this.instance_258 = new lib.Symbol122copy();
	this.instance_258.setTransform(0.6,15.6,1.642,1.642,-151,0,0,0.1,88.4);

	this.instance_259 = new lib.Symbol122copy();
	this.instance_259.setTransform(0.4,15.6,1.642,1.642,25.2,0,0,0.1,88.5);

	this.instance_260 = new lib.Symbol122copy();
	this.instance_260.setTransform(0.4,15.5,1.642,1.642,149,0,0,0.1,88.4);

	this.instance_261 = new lib.Symbol122copy();
	this.instance_261.setTransform(0.4,15.5,1.642,1.642,179,0,0,0.1,88.4);

	this.instance_262 = new lib.Symbol122copy();
	this.instance_262.setTransform(0.6,15.7,1.642,1.642,59,0,0,0.1,88.4);

	this.instance_263 = new lib.Symbol122copy();
	this.instance_263.setTransform(0.4,15.3,1.642,1.642,-108.5,0,0,-0.1,88.3);

	this.instance_264 = new lib.Symbol122copy();
	this.instance_264.setTransform(0.7,15.5,1.642,1.642,-27.7,0,0,0,88.4);

	this.instance_265 = new lib.Symbol122();
	this.instance_265.setTransform(0.7,15.4,1.642,1.642,7.3,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247}]}).wait(1));

	// Layer 2 copy 3
	this.instance_266 = new lib.Symbol122();
	this.instance_266.setTransform(0.9,15.8,1.642,1.642,156.2,0,0,0.1,88.3);

	this.instance_267 = new lib.Symbol122();
	this.instance_267.setTransform(0.8,15.8,1.642,1.642,-169.1,0,0,0.1,88.3);

	this.instance_268 = new lib.Symbol122();
	this.instance_268.setTransform(0.8,15.7,1.642,1.642,-62,0,0,0.1,88.4);

	this.instance_269 = new lib.Symbol122();
	this.instance_269.setTransform(0.9,15.7,1.642,1.642,-139.8,0,0,0.1,88.4);

	this.instance_270 = new lib.Symbol122();
	this.instance_270.setTransform(0.9,15.8,1.642,1.642,11.5,0,0,0.1,88.5);

	this.instance_271 = new lib.Symbol122();
	this.instance_271.setTransform(0.9,15.7,1.642,1.642,67,0,0,0.1,88.5);

	this.instance_272 = new lib.Symbol122();
	this.instance_272.setTransform(0.7,15.6,1.642,1.642,-24.4,0,0,0.1,88.4);

	this.instance_273 = new lib.Symbol122();
	this.instance_273.setTransform(0.6,15.8,1.642,1.642,105.6,0,0,0.1,88.4);

	this.instance_274 = new lib.Symbol122();
	this.instance_274.setTransform(0.6,15.7,1.642,1.642,-102.3,0,0,0.1,88.4);

	this.instance_275 = new lib.Symbol122copy();
	this.instance_275.setTransform(0.6,16.2,1.642,1.642,-41.8,0,0,0.1,88.3);

	this.instance_276 = new lib.Symbol122copy();
	this.instance_276.setTransform(0.6,15.9,1.642,1.642,138.8,0,0,0.1,88.3);

	this.instance_277 = new lib.Symbol122copy();
	this.instance_277.setTransform(0.5,16.1,1.642,1.642,-123.3,0,0,0.2,88.4);

	this.instance_278 = new lib.Symbol122copy();
	this.instance_278.setTransform(0.5,16,1.642,1.642,52.9,0,0,0.1,88.4);

	this.instance_279 = new lib.Symbol122copy();
	this.instance_279.setTransform(0.5,16,1.642,1.642,176.7,0,0,0.1,88.4);

	this.instance_280 = new lib.Symbol122copy();
	this.instance_280.setTransform(0.4,16,1.642,1.642,-153.3,0,0,0.1,88.4);

	this.instance_281 = new lib.Symbol122copy();
	this.instance_281.setTransform(0.5,16.2,1.642,1.642,86.7,0,0,0.1,88.4);

	this.instance_282 = new lib.Symbol122copy();
	this.instance_282.setTransform(0.5,15.8,1.642,1.642,-80.8,0,0,-0.1,88.3);

	this.instance_283 = new lib.Symbol122copy();
	this.instance_283.setTransform(0.7,16.1,1.642,1.642,0,0,0,0,88.4);

	this.instance_284 = new lib.Symbol122();
	this.instance_284.setTransform(0.8,16.1,1.642,1.642,35,0,0,0.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-158.3,347.5,347.9);


(lib.Symbol118 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.s1 = new lib.Symbol119();
	this.s1.setTransform(-0.1,0,1,1,0,0,0,-0.5,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	// Layer 3
	this.s2 = new lib.Symbol120();
	this.s2.setTransform(0,-2.1,1,1,0,0,0,0,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.5,83.1,83);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t7 = new lib.Symbol99();
	this.t7.setTransform(62.9,-2.6);

	this.t6 = new lib.Symbol98();
	this.t6.setTransform(40.2,1.3);

	this.t5 = new lib.Symbol97();
	this.t5.setTransform(19.1,1.3);

	this.t4 = new lib.Symbol96();
	this.t4.setTransform(0.3,1.3);

	this.t3 = new lib.Symbol95();
	this.t3.setTransform(-18.9,4);

	this.t2 = new lib.Symbol94();
	this.t2.setTransform(-40.5,1.3);

	this.t1 = new lib.Symbol93();
	this.t1.setTransform(-62.8,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5},{t:this.t6},{t:this.t7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.1,-16.1,146.2,32.3);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol117();
	this.instance.setTransform(-114.6,134);

	this.instance_1 = new lib.Symbol116();
	this.instance_1.setTransform(114.3,-139.3);

	this.instance_2 = new lib.Symbol115();
	this.instance_2.setTransform(76.5,-107.4);

	this.instance_3 = new lib.Symbol114();
	this.instance_3.setTransform(-21.8,-182.9);

	this.instance_4 = new lib.Symbol113();
	this.instance_4.setTransform(-69.9,-122.2);

	this.instance_5 = new lib.Symbol112();
	this.instance_5.setTransform(-23.9,182.9);

	this.instance_6 = new lib.Symbol111();
	this.instance_6.setTransform(53,-142.4);

	this.instance_7 = new lib.Symbol110();
	this.instance_7.setTransform(-117,-169.1);

	this.instance_8 = new lib.Symbol109();
	this.instance_8.setTransform(-8.1,-146);

	this.instance_9 = new lib.Symbol108();
	this.instance_9.setTransform(117.1,-44.9);

	this.instance_10 = new lib.Symbol107();
	this.instance_10.setTransform(97.9,136.9);

	this.instance_11 = new lib.Symbol106();
	this.instance_11.setTransform(-92.2,179.4);

	this.instance_12 = new lib.Symbol105();
	this.instance_12.setTransform(79.5,-169.1);

	this.instance_13 = new lib.Symbol104();
	this.instance_13.setTransform(-115.9,-86.6);

	this.instance_14 = new lib.Symbol103();
	this.instance_14.setTransform(-55,-158.7);

	this.instance_15 = new lib.Symbol102();
	this.instance_15.setTransform(21.5,-119.8);

	this.instance_16 = new lib.Symbol101();
	this.instance_16.setTransform(-55,164.9);

	this.instance_17 = new lib.Symbol100();
	this.instance_17.setTransform(97.9,177.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-184.1,259.2,368.3);


(lib.Symbol80 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lines = new lib.Symbol81();
	this.lines.setTransform(2.9,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

	// Layer 4
	this.pic = new lib.Symbol82();
	this.pic.setTransform(-1,39);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

	// Layer 3
	this.t3 = new lib.Symbol84();
	this.t3.setTransform(1.5,121.3);

	this.t2 = new lib.Symbol83();
	this.t2.setTransform(1.5,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.t3}]}).wait(1));

	// Layer 8
	this.q4 = new lib.Symbol88();
	this.q4.setTransform(69.5,-66.1);

	this.q3 = new lib.Symbol87();
	this.q3.setTransform(25.6,-66);

	this.q2 = new lib.Symbol86();
	this.q2.setTransform(-21.9,-65.9);

	this.q1 = new lib.Symbol85();
	this.q1.setTransform(-61.9,-61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q1},{t:this.q2},{t:this.q3},{t:this.q4}]}).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuVDBIAAmCIF5AAQAmAMArAAQArAAAngMIUPABIAAGCg");
	mask.setTransform(1.1,-10.9);

	// Layer 2
	this.t1 = new lib.Symbol89();
	this.t1.setTransform(0.6,-13.6);

	this.t1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 6
	this.l1 = new lib.Symbol92();
	this.l1.setTransform(1.1,10.8);

	this.l2 = new lib.Symbol91();
	this.l2.setTransform(1.1,-32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l2},{t:this.l1}]}).wait(1));

	// Layer 5
	this.p1 = new lib.Symbol90();
	this.p1.setTransform(1.1,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,-190.9,259.2,368.3);


(lib.Symbol78 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol79();
	this.instance.setTransform(-15.2,78.2,0.37,0.37,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A7029").s().p("AADASIAFgSIgIAKIgDgCIgDgMIgFARIgHgCIAKgeIAGACIACASIANgNIAFACIgJAeg");
	this.shape.setTransform(-14.2,99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgFADgHQADgKAEgCQADgDAEACQAFABADAFQACAEgDAIQgDAJgEADQgDACgBAAIgDgBgAAAgIQgCABgCAHQgCAFABACQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQACgCACgHQACgEgBgDQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBIgCAAIgBACg");
	this.shape_1.setTransform(-17.6,98.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A7029").s().p("AAAARIgEgSIANgMIAHACIgPALIAHATgAgPAMIAJgeIAGABIgEAQIgFAPgAgEgBg");
	this.shape_2.setTransform(-20.4,97.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgEADgIQADgJAEgDQADgDAEACQAGADACADQACAEgDAIQgDAKgEACQgDACgBAAIgDgBgAAAgIQgCABgCAHQgCAFABADIADADQABAAABAAQAAAAAAAAQAAgBAAAAQAAAAABAAQACgCACgHQACgEgBgDIgDgDIgDAAIAAABg");
	this.shape_3.setTransform(-23.6,96.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgEADgIQADgKAEgCQADgDAEACQAKADgBALIgGgCQAAgFgEgBQgBAAgBAAQAAgBgBABQAAAAAAAAQAAAAAAAAQgCACgCAHQgCAFABACQAAABAAABQABAAAAAAQABABAAAAQABAAAAAAQADABACgEIAGACQgDAHgGAAIgDAAg");
	this.shape_4.setTransform(-26.5,95.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A7029").s().p("AADASIAGgSIgJAKIgEgCIgCgMIgFARIgGgCIAJgeIAGACIACASIAMgNIAGACIgJAeg");
	this.shape_5.setTransform(-4.4,96.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A7029").s().p("AAFASIAJgdIAGABIgJAegAgHAPIgMgFIAJgdIAGACIgDALIAGADQAIACgDAIQgDAIgEAAIgEAAgAgMAHIAGABQAEACACgEQAAgFgDgBIgGAAg");
	this.shape_6.setTransform(-8.4,95.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A7029").s().p("AAAARIgNgEIAJgeIALAEQAJADgCAJQgCACgEABIACADQABACgBAEQgCAHgGAAIgCgBgAgGAJIAGACQADACABgEQABgEgEgCIgEgCgAgCgCIAEACQAEAAABgDQACgEgFgBIgEgCg");
	this.shape_7.setTransform(-12,94.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgEADgIQADgKAEgCQADgCAEABQAGACACAEQACAEgDAIQgDAKgEACIgEABIgDAAgAAAgJQgCACgCAHQgCAFABACQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAABAAgBQAAAAAAAAQAAAAABAAQACgCACgHQACgFgBgCQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAIgCgBIgBABg");
	this.shape_8.setTransform(-15,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A7029").s().p("AgDAQQgKgDABgLIAGACQAAAGAEAAQADACACgEQABgFgEgBIgDgBIABgDIADABQAEABABgEQABgEgEgBQgDgCgCAFIgGgCQAEgJAIACQALAEgDAIQgBADgFABQAEADgBAGQgCAGgHAAIgDAAg");
	this.shape_9.setTransform(-18,92.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A7029").s().p("AgOARIAKgfIATAGIgCAGIgNgEIgCAGIALADIgCAFIgLgDIgCAHIANAFIgCAGgAAHgNIACgFIAFABIgCAGgAAAgQIAAgGIAEACIgCAFg");
	this.shape_10.setTransform(-20.7,91.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A7029").s().p("AgNAPIAJgfIAKAEQAFABACAEQACAEgBADQgBAEgEACQgEACgFgCIgEgBIgDALgAgCAAIAEAAQAEABACgCQABgEgFgCIgEgBg");
	this.shape_11.setTransform(-23.7,90.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A7029").s().p("AgNAMIAJgdIASAGIgBAFIgNgEIgCAIIAKACIgBAFIgKgEIgCAHIAMAFIgCAFg");
	this.shape_12.setTransform(-26.5,90.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A7029").s().p("AgBARIgNgDIAKgfIATAHIgCAFIgNgEIgCAGIAFACQAKABgDAKQgBAFgEACIgEABIgCgBgAgGAKIAGACQADABABgEQABgFgEgBIgEgCg");
	this.shape_13.setTransform(-29.6,89.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A7029").s().p("AgDAQQgFgBgDgFQgCgEADgIQADgJAEgDQADgCAEABQAKAEgBAKIgGgCQAAgFgEgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgCABgCAHQgCAFABADIADADQADABACgEIAGABQgDAIgGAAIgDgBg");
	this.shape_14.setTransform(-33.3,88);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgwgNQAiABAhAMQASAIALAGQgngDg5gYg");
	this.shape_15.setTransform(-27.9,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXgGQARgBAQAHQAJADAFAEQgUAAgbgNg");
	this.shape_16.setTransform(-30.1,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYgGQASgBAQAHQAJADAFAEQgUAAgcgNg");
	this.shape_17.setTransform(-9.2,-8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpgMQAdAAAdAMQAPAGAKAGQgjgCgwgWg");
	this.shape_18.setTransform(-18.5,-4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgigJQAZgBAXAKQANAFAIAFQgegBgngSg");
	this.shape_19.setTransform(-26.9,-12.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvgNIAfAEQAkAIAcAPQg6gJglgSg");
	this.shape_20.setTransform(-54.8,89.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgegIIAVABQAXAFAQAKQgmgEgWgMg");
	this.shape_21.setTransform(-43,88.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYgGIARABQASAEAOAIQgfgCgSgLg");
	this.shape_22.setTransform(-35.7,96.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgwgNIAgAFQAkAIAdAOQg9gKgkgRg");
	this.shape_23.setTransform(41.6,20.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYgGIARABQASADAOAJQgfgDgSgKg");
	this.shape_24.setTransform(38.4,29.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYgGIARABQASAEAOAIQgggDgRgKg");
	this.shape_25.setTransform(30.2,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpgLIAcADQAfAGAYAOQg0gHgfgQg");
	this.shape_26.setTransform(36.2,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgigJIAYACQAZAFAUAMQgtgFgYgOg");
	this.shape_27.setTransform(47.2,10.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYgGIARABQASAEAOAIQgfgDgSgKg");
	this.shape_28.setTransform(10.1,110.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpgLIAcADQAfAGAYAOQgzgHgggQg");
	this.shape_29.setTransform(18.5,107.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgigJIAYACQAZAFAUAMQgtgFgYgOg");
	this.shape_30.setTransform(-0.6,105.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5D3327").s().p("AmPh0IABgHIMfDwIgCAHg");
	this.shape_31.setTransform(-10,71.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AEFB7IACgKIAHACQAEACABgEIAMgoIgjAcIgBAFQgBAEAEABIAHACIgDAJIgrgNIADgJIAHACQAEABABgDIARg8QABgDgEgCIgHgCIADgJIArANIgDAJIgHgCQgEgBgBADIgLAoIAigcIACgEQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgIgCIACgJIArANIgCAJIgHgCQgFgBAAADIgSA8QgBADAEABIAHACIgCAKgACiBdIACgJIAHACQAEABABgDIAMgpIgjAcIgBAFQgBAEAEABIAHACIgDAJIgrgNIADgJIAHACQAEABABgDIARg8QABgDgEgCIgHgCIADgHIArALIgDAJIgHgCQgEgBgBADIgLAoIAigcIACgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgDIACgJIArANIgCAJIgHgCQgFgBAAADIgSA8QgBADAEABIAHADIgCAJgABbBKQgNgEACgXIABgQQgBgIgKgCIgIAcQgBADAEABIAHADIgCAJIgsgNIADgKIAHADQAEABABgDIASg6QABgEgEgBIgIgCIADgJIArANIgCAJIgHgCQgEgBgBADIgHAVIAIACQAGgBAFgKIAGgJQAIgMALAEQAGACADAFQADAGgCAEQgBAFgEACQgEADgFgBQgJgDACgJIADgDIACgBIgCAAQgCABgIAOQgFAIgGACQAOAIgCAVIAAAFQAAABAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQADgDABgEIAAgCIAJADIAAACQgHAVgOAAIgFgBgAhGAwIABgCQADgQgJgHQgFgEgLgDIgPgFQgJgDgFACQgJACgFAOIAAACIgKgDIAKgeIAEABIAGABQADgBAJgNQANgVAEgOIACgGQABgHgFgBIgIgDIADgJIBIAWIgDAJIgIgCQgEgCgBAEIgSA5QgBAEADABIALADIgJAhgAhwAAIAWAGQAEABABgCIASg7QAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgIgCIgDAAIgGAKQgJAWgHAMQgDAIgGAGIgBAAgAgJArQgSgFgHgSQgHgQAGgRQAFgRAOgKQAOgKAPAFQALADAIAKIAEgEIAHADIgJAhIgJgCIABgBQACgbgPgFQgPgFgKAiQgKAiASAFQAGACAHgEQAHgDAFgIIAAgBIAKADIgBACQgLAVgTAAQgDAAgGgCgAEeAgQgLgEgGgHQgFgIADgIQABgFAEAAQADgBAEABQACAAACABQACADgBAEIgBAEIgCABIgCABIgCABIAAABQgCAFANADQAMAEACgFIAAgBIgBgBIgBgBQgCgDABgEQACgEACgBQAEgCACABQAEABACAEQACADgBAFQgCAEgEAEQgEAEgGABIgEAAIgKgBgAi8gLIADgKIAGACQAFACAAgEIAMgoIgiAcIgCAFIAAADIAKADIgDAKIgrgNIADgJIAHACQAEABABgDIASg8QAAgEgEgBIgHgCIADgJIArANIgDAJIgGgCQgFgBAAADIgMAoIAjgcIABgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBgBAAIgIgCIADgJIArANIgDAJIgHgCQgEgCgBAEIgSA8QAAADAEABIAHACIgDAIgAkdgpIACgJIAHACQAFABAAgDIASg9QABAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgGgBQgEgBgCABQgCABgDAHIgGASQgGAUgHAJQgKAQgPgFQgHgCgDgGQgEgGACgHQACgGAFgDQAFgEAGACQALADgEANQgBADgDACIgEACIgBAAIABAAQAEACAGgGQAIgIAHgYIAFgQQADgLgKgDIgFgBIADgKIBIAWIgDAJIgHgCQgEgBgBADIgSA8QAAADAEACIAHACIgDAJg");
	this.shape_32.setTransform(-7.1,61.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5CA00").s().p("AmngiIAxisICkAyQAPAKATAGQATAGASgBIIzCpIgxCsg");
	this.shape_33.setTransform(-7.2,61.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D3327").s().p("AAAAAIABAAIgBABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_34.setTransform(12.6,19.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABg");
	this.shape_35.setTransform(8.3,14.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_36.setTransform(10.2,15.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5D3327").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBABg");
	this.shape_37.setTransform(15.1,18.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5D3327").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAgBg");
	this.shape_38.setTransform(17.7,19.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5D3327").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_39.setTransform(17.4,19.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_40.setTransform(18,19.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_41.setTransform(12.7,18.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_42.setTransform(16,18.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5D3327").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_43.setTransform(7.9,14.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5D3327").s().p("AgBAAIABAAIACAAIAAAAg");
	this.shape_44.setTransform(16.5,18.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5D3327").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_45.setTransform(15.4,18.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABg");
	this.shape_46.setTransform(16.8,19.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_47.setTransform(-0.4,15.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5D3327").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_48.setTransform(-1.9,14.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(-1.6,14.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5D3327").s().p("AgCAAIgBAAIAHAAIgDAAg");
	this.shape_50.setTransform(3.8,13.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5D3327").s().p("ADIBkQgFgEgJgFQgNgGgMACIADACIAHAAQAIAAAFADQAQAKAFAQIgBAAQgDgIgHgIIgKgJIgKgDQgEgBgFABIAFACQAIABAFAEQAFADACAEIAFAIIACADIAAABIgBAAIg6grIgXgNIgKgGQgDAFgHABIgCAAQAEgCAFgHQACgDAAgHIACgKIADgLIgBADIgFARQgBAJgEAEQgDAFgEAAIgEgBIglgLIgHgFQgDgFAAgCIACADQAHAHAHABQAKADAIAAQAHAAANgDIAEgCIAAgCQgHADgEABIgLABIgOAAQgKgBgFgEQgFgEgCgEIAAgEQgfgIgagCIgIAAIgUgBQgbABgNABIgZADIgBgBIAWgEIgSgCIgNAAIgJABIgBgBIAOgBIAWABIAJACIAGgBIgMgDQgfgJgaAGIgBgBIALgCIAKAAIALAAQAOAAAOAEIAPAFIAFAAIgOgGIgKgDIgVgDQgZgEgWAGIgBAAIAGgCQgJgDgKAAIgBAAIAJgBQAHABAJACIARgCIgGgCQgTgGgaAGIgBAAIAHgBQAOgDAKACQANABALACIADABIAKABIgEgDIgGAAIgLgFQgUgFgVADIgSAFIALgEQANgEAKABIANABQALABAPAFIAMAFIACABIACgEQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgLgGQgQgEgGgBQgGgCgHAAIgJAAQgGAAgQADIgPAEQAHgDAPgEIAVgCIAHgGIgSgBIgBACIgDABIgBAEIgCAAIABgEQABgBAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgKAAgNAEIgNADIAOgFQAKgDALgBIgBgDQgUAAgWAIIAMgGIASgDIAMgBIAAgEQgYABgMAEIgMAFIAHgEIAKgEQASgEAOAAIACgCIACgFIABgCIACgEIADgFIABAAIABAAIAAAIIAAADIAAAEIAAACIgBACIAQACIABgDIgCgDIAAgFIAAgCQADgDAAgFIABgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQACAAACgDIACAAIAAAHIAAAEIAAAEIgBACIgBADIAAABIgBADIgEACIgCAEIAJACIAIgCIABgCIgCgEIABgFIACgEIAEgIIACABIAAAEIAAAFIgBAEQAAADgDADIgBABIgBACQAMgCAKACIABgDIBkgGIABgBIhkAGIABgHIBLgIIgEAAIhHAHIAAgCIBLgIIALgeIgDgEIAMgHIAWgGIABgBIgTAFIACgCIAZgTIAQAkIAKAKIgBABIgFACIgIAhIAeARIAAgNQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIADACIASAKIABgFQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIgCAGIAUAMIAAABIgCAAIgCAIIAOAHIABgEIAEgCIgDAHIAcAQIgDACIgBAWQALADAFADIABgDIgCgEIABgKIACgDIACgCIABgFIADgDQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIgBAFQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABIABACIgBABIABACIgDAIIgBACIgCADIgCAAIgBADIALAJIAFAHIACACQAIAEAFAFIAOAHQASAKAKAQIgGgHQgJgJgJgHQgEgCgJgDQgGgEgKgCQgLgBgJAEIACABIAJgCQAIAAAJACQAHACAFADIAJAHQAHAFAGAIIAEAHQgGgKgGgGQgKgHgMgFQgDgCgKgCQgJgBgHACIACABQALgDAMAFQAFACAGAEQAGAEAIAKQAHAKgBAAQgIgMgGgGgADDBxQgDgHgJgHQgFgDgIgCIAZATIAAAAgACSBNIAIAFIAGgCQgHgDgFAAIgCAAgAC3BQIgFgCQgLgKgOAAIgLABIgEACIABABQAEgCAEAAQAJgBAJADQAIADAFAEIAFABgAChBQIAGgBQgJgFgGAAIgJAAIADADIACgBQAFAAAIAEgACvBPQgLgHgMgBQgHAAgEACQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAFgCAMADIAJAEIAGAAIAAAAgACJBHQgCgFgEgCQgIgHgJAAIAXAOIAAAAgACpBGIgKgKIgLgHIgIgCIgJgBIAIACIALAFQAIAGADAFIAIACIAAAAgAB+A8QAJAFAEAFIACgBQgEgFgHgEIgGgFQgFgBgFAAIgEAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIABAAQAHAAAGAEgAByA0IAHABIALAGQAJAGACADIAFgCQgPgLgJgDIgFgBIgFABgACeBDIgNgKIgLgFQgHgDgHABQAJABAIAFIALAIIADACIACAAIAFABgABZA2QADAAACgBIgCgBIgIACIgFAAQAEABAGgBgABuAiQABAKgGAJIADABIAFgDQALgFAMACIABgNIgagNIgBAMgABKA0IAKAAQAIgBADgCQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAgBgBIgLAEIgIABIgIgBgACfAgQgFAJABAHQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAAgGIAGgQgACdAvIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBAAIgBABgACeAtQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIgBgBgAAUgHIAAAGIAAABIABADIgBAEIgBACIgCAGIgCACIgCABIgBADIAdAHQAAADADAEQACADAIAEQATAGATgHQAFgCADgDIABgCIgGADQgFADgHACQgMACgHgBQgHgBgIgEQgDgBgDgFQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIACgGIADgJIACABQgCAGABAEIADAHIANAFIABgFIAAgBQgFABgFgEIABgEQAEgNACgLIhDgiIgOAyIAFADIAEABIAHABIABgEQgCgCAAgFIACgEIAAgCIADgFIABgDIABAAIAAAFIAAACIAAACIgBAGIgBAEIgBACIgCAEIAOACIAAgDIgBgCIAAgEIABgEIAAgCIACgFIABgBIADgEIABgDgACfAqIACgBQAAAAABAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgCACgABEAqIAOgCIAMgFIAKgHIgBgCIgBAAQgKAJgIADQgNADgIAAIgDAAIAIABgABAAnIAGgBIgGgCgACfAmIACAAIABgCQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAA+AmIABgDIgLgCQAGAEAEABgAA6AmIgHgDQgDgEgCgEIgBgGIgCADQgBACACAEQACAFAGACIAGABIAAAAgABBAjIAFACIACABIAHgCQAGgCAHgEQAKgGADgFIgMgHIgIAOIgHAJQgDAAgCgDQgFABgCgCgACgAjIACAAIAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAgABwARIgBADIAbAOIAAgIIgZgOIABAAIAYANIADgBIgbgPIAAACIgEgBIgOgHIgDAIIANAHIABgBgABLAfQAAAAAAABQAAAAABAAQAAAAABAAQAAABABAAIAGgHIAFgJQAHgNADgMIgGgBIgCgCQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQABACAFACIgBAAIgGgDIAAACIAGADQgCABgEgDIAAACIACACIgCgBIgBABQgDACACgCIABgJIAAgFQgIABgCgEIAAACQABACAEABIAAABQgDAAgCgDIAAADIAGADQgDAAgEgCIABACIADACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCAEIgBABIACgHQABgGgBgFIgGgBIgGgDIABADIAEAEQgCgBgDgCIABADIADABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAACIAEADIgEgCIAAADIACABIgCAAIgCALIgDALIAAAEQACACADABIAAABQgEgBgBgCIgBABIAEADQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAACIACACQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBAEIACABQACACAEgBIAFgNIABAAQAAAEgEAKQACAEAFgCIAGgMIADgFIAAAFIABACIABACQgCgBgCgDIgBADIADADQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBADQAAAAAAAAQABABAAAAQAAAAABAAQAAABABAAQgBAAAAAAQgBABAAgBQgBAAAAgBQgBAAAAgBIgBABIACADIgCgCIgBAEgAgPASIgFgCIgFgBIgFACIAPABgAALAJQgBAGACACIABgBIABgIIAEgIIAAgFgAgnAOQgGABgCACIANAAIADgCIAFgCIgGgBIgHACgAgxAJQgFAAgEACIgLAGIAHAAIAIAAIACgBIAKgEQAGgCAHABQgFgCgGAAIgEAAIgFAAgAhJAHIgIAEIAKAEQAEgEAIgDIALgBIAPABQgNgFgJAAQgNABgFADgAAAgBIgCAEQgCAHABAEQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgCABgDIABgGIAAgCgAgWAMIAAABIABAAIAPg1IgBAAgAgxAAIAKADIAKAGIAFACIAIgYIgHAAIgCAEIABgEIgWAAIAHgBIAPAAIABgCIgHAAIgBgBIACAAIAGAAIABgCIAAACIAGAAIgGABIgBACQAEABADgBIAEgKIgGAAIgDgBIAEAAIAFAAIABgEIgNABIgBACIAAgCIgRABIgEAFIACgFIgWABIAEgBIATgBIABgDIgJAAIgCgBIAMAAIAHAAIgHABIgBADIASgBIACgGIgBAGIANgCIACgHIhjAHIgHAZIADABIABgFQACgFACgCIADgHIACgBIAAAHIABACIAAADIgBAGIgBACIgBACQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIADAAIALgEIAKgCIAFAAQANAAANAGgAAOAKQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgCIgBAAIgCABgAhVADIgIAFIAJACIAGgEIAHgDQAFgCAHAAQAGAAAMADQgLgEgLAAQgMAAgKADgABhACIANAIIABgCIgOgIgAgBAJQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAgAhVgDIgLADIgIAFIAIACIAHgFQAFgCAGAAIAPgBIAKABIAHAAQgHgBgMgDIgIgBQgGAAgGACgAAQAHIADgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCADgAAAAFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAgBAAQAAgBgBAAIAAACgAhtAEIADABIADgEIgDgBQgCAAgBAEgAARACQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIAAgBIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAAAACIAAAAIACgBIgCABgAhngVIgEAHIgCAJQgBAEABABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgIIAFgOgAgCgxIgDAMIBCAiIABgLIgegRIgCgCIAJgkIgDgCIADgCIAAgBIgEADIgDgDIAEgEIAFAEIgFgGIgYgTIgEABIAIAGIgEADIgFgDIgBAHIgGADIAFgCIgBAEIgMAEIAAgDIgBADIgHACIAGAAIAAABIACgCIAMgEIgCAHIgCAAIAAgDQAAAAAAAAQAAAAAAABQAAAAgBABQAAABAAABQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIAFAAIgBAEIACgEIACAAIgCAKIgQABIgEABIAGAAIAOgCIAAAGIgEAAIADABIgBAEIgHAAIACgEIABgBIgBAAIAAgDIgBADIgGAAIgBABIAHAAIgCAEIgCAAIACABIgBADQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBgAhqgDIABgBIABgBIgBAAgAhqgGQABAAAAAAQAAABAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAgAh3gOQgEABgEACIALAEIADgJgABjgJIgKgGQAEAHAGgBgAhpgLQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACgBIgBgBgAh5gTIgKACIgFADIAGACIAHgEIAKgBIABgDgAh8gZQgPADgIAHIAHABIAJgEIAJgDIAKgBIABgDIgDAAIgKAAgAAfghIAfASIAAgCIgegRgAh+gfIgNADQgFABgGAEIgHAHIAHABIACgCQAFgEANgEQAMgDAIACIABgDQgFgCgHAAIgFAAgABRgRQADACAEgBIgGgDgABPgSIABgCIgDgCgABNgWIgOgIQAAAEAGADIAIABgAiqgYIASABIADgCIgTgCgAipgwIgGAOQgDAGACAFIABAAIABgFIADgPQADgFABgDIgCADgAiogcIAUACIAFgCIgYgFIgBAFgAitgbIACABQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIgCABgAirghIgBACQABABAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIgBAAIgBAAgAiBgwIgDAIQgBADABADIACAAIAAgBQAAgHADgIIABgCQgBABAAAAQAAAAgBABQAAAAAAABQgBAAAAABgAirgiIACgBQABAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCACgAhjgkIABgCIgBgBgAhagoQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAIABgBIgBgCIAAAAgAiogoQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIADgDIgBAAIAAAAgAhOgmQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAgAhMgmIABAAIABgCIgBgBgAhRgoQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABgCIAAAAIgBAAgAiRg3IgFAKQgBAFABACQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIACgNIADgHIgCAEgAhIgmQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBgAiAgnIABAAIAAgCIgBAAgAg7gnIABAAIABgCIgBgBQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABgAg/goIABABQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgBAAgAg1goQABABAAAAQAAgBABAAQAAAAAAAAQAAgBABgBIgCAAgAgogqIABACIABgDgAiRgqIgCAAIABABQAAABAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBgAgkgqIgBABIABAAIABgCgAgigqIABABIABgCIgBAAgAgagvIgCAGIADgBIABgEIgBgBIAAgBIgBABgAgTgvIgCAFQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIAAgEIgBgCIgBACgAiAgrIACAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBACgAiSgsQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAiSgyQAAABABAAQAAABAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAQgBgBAAAAgAgThFIgBAHQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQACgFgBgBIgBAAIgCABgAgMhFQgBADAAADQABAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIABgGQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCACgAgQhRQAAAAgBABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBACgAgMhTQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgBIgBABgAgGhVIgCACIAAADQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAABgBIgBgCIAAAAgAgDhRQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABgFIgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAABABABgAAihUIgPgfIgFANIAUASgAgVhXIACACIAagJIgBgCgABtANIAAgBIAEAAIAAACg");
	this.shape_51.setTransform(5.4,17.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_52.setTransform(-3,14.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_53.setTransform(-2.8,14.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5D3327").s().p("AgCABIACgCIADABIgDACg");
	this.shape_54.setTransform(8.7,9.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5D3327").s().p("AgBACIAAgCIABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgCAEg");
	this.shape_55.setTransform(7.1,13.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5D3327").s().p("AgBACIABgEQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABABIAAACIgBAEg");
	this.shape_56.setTransform(7.8,11.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5D3327").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIgBACIAAgBg");
	this.shape_57.setTransform(8.6,10.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5D3327").s().p("AAAAAIAAgBIABAAQAAABAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_58.setTransform(8.2,9.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5D3327").s().p("AAAACQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIABAAIAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAAAg");
	this.shape_59.setTransform(7.5,9.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5D3327").s().p("AgCACIACgEQAAgBAAAAQAAAAAAAAQABgBAAABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgCAFg");
	this.shape_60.setTransform(6.7,10.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5D3327").s().p("AgBACIABgEQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIgCAEg");
	this.shape_61.setTransform(6.1,13.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_62.setTransform(7.1,8.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5D3327").s().p("AgUAAIAEAAIAQAAIARAAIAFAAIgCAAIgeABg");
	this.shape_63.setTransform(0.8,14.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDADg");
	this.shape_64.setTransform(7.5,8.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_65.setTransform(8.3,9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_66.setTransform(7.9,8.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5D3327").s().p("AAAAAIAAgBQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_67.setTransform(7,9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_68.setTransform(11.4,23.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5D3327").s().p("AgLgCIAAgBIAFABIAPAEIADACg");
	this.shape_69.setTransform(9.2,22.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5D3327").s().p("AADABIgTgEIgDgBIADgBIAkAKIgBABIgQgFg");
	this.shape_70.setTransform(10.3,22.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5D3327").s().p("AAAAAIgJgBIAAgCIAGACQAHABAHADIAAABg");
	this.shape_71.setTransform(13.4,24.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAg");
	this.shape_72.setTransform(11,23.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5D3327").s().p("AgBAAIAAAAIADAAIgBABIgCgBg");
	this.shape_73.setTransform(12.3,24.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5D3327").s().p("AAMAEQgJgCgHgCIgHgCQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIARAEIAGADIgBAAIAAAAg");
	this.shape_74.setTransform(14.9,25.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5D3327").s().p("AAKAFIgWgIIgEgCIAAgBIABAAIAWAHIAJAFIABABg");
	this.shape_75.setTransform(12.4,23.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5D3327").s().p("AgOgDIgBgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQANADAQAGQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_76.setTransform(14.7,24);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABg");
	this.shape_77.setTransform(15.1,24.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5D3327").s().p("AARAMIgDgCQgCACgEgBQgCAAgCgEQgEAAgBgDQgEADgEgCQgHgCAAgEQgCABgEgCQgDgCAAgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQABAAAEABQAEgDAEABQAEABABAFQAFgCADADIAEADQAEAAAEACQAEAAAAADIAEADIACAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgDAAgDgBgAAWALQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBIgBgDIgEgBIgBgDQgFgCgDAAIgDAAIgCgCIgEgCIgFgBQgCgEgDgBQgFgBgDADQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABAAABQACABAFAAIABADQAEADAEAAIAFgCIAAADIAFAAQABADADACQAEAAACgDQACAEAFAAg");
	this.shape_78.setTransform(15.8,10.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5D3327").s().p("AAAAFIgFABQgEgBgDgDQgEAAgFgCQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIADAAQABgCAEgCQAFABACAEQACgDADAAQACAAACADQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAFgCAEAEQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAEAAACACQABABAAABQABAAAAABQAAAAAAABQgBABAAAAQgCACgDgBQgEACgHABQgHgDAAgDgAAAAFQAHAHAJgEIABgDIAEABQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQgCgDgEABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQgEgDgEADIgCgEQgDgDgCACIgEABIgBAAQgCgCgDgBQgEAAgCADQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQABABAAAAQABABAAAAQADAAAFAAQABADAFABIAFgCIAAADg");
	this.shape_79.setTransform(-3.8,7.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5D3327").s().p("AASAJIgDgCIgDABQgDgBgCgDQgGABgBgEQgEAEgGgFQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIgHgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAGABIABAEQADACAFgBQAAAAABAAQABAAAAAAQAAgBAAAAQAAAAAAAAIADACQACABADgBIABADQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIAEgCQAAACAFACIgBAAIgCAAg");
	this.shape_80.setTransform(15.7,10.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5D3327").s().p("AgEAAIgCgBIACAAIALACIgBABg");
	this.shape_81.setTransform(8.8,23.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5D3327").s().p("AAJAGQgDADgEgBQgDgBgBgDQgDACgDgBQgEgCgBgDQgEAAgBgCQAAgEAEABQADgDADAAQAGgBABAGQAGgCADAFQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIACABIAEADQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBACIgDABQgCAAgEgDgAASAHIAAgCIgGgDIgCgCIgDAAIgDgCQgCgBgEABIAAgCQgCgDgEAAQgDgBgCAFIgCgBQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQAAAAABAAQABAAABAAQABABABACIAEABQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQACAEABABQAFABADgDQAFAFAEgCg");
	this.shape_82.setTransform(0.8,5.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5D3327").s().p("AAIAFQgFgBgCgEQgBACgDgBQgDAAgBgDQgEACgEgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIADACQADACADgCIACABQABACADAAQABABADgBQABABACACQAFADAEgBIAEgDIgBACQgCACgDAAIgEgBg");
	this.shape_83.setTransform(-4,8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5D3327").s().p("AgCAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQACAAADAAIAAABIgFgBg");
	this.shape_84.setTransform(17,25.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5D3327").s().p("AgBAAIAAAAIADAAIAAABIgDgBg");
	this.shape_85.setTransform(17.9,25.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5D3327").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_86.setTransform(18.5,26.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5D3327").s().p("AAAAAIAAAAIABAAIAAABg");
	this.shape_87.setTransform(17.9,26.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5D3327").s().p("AAHAEQgEAAgBgDQAAAAgBAAQAAABgBgBQAAAAAAAAQAAAAAAAAIgCgBQgDAAgDgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAACIAEABIACgBIABABIADAAIABACQACACADgBIgBABIgBAAg");
	this.shape_88.setTransform(19.2,14.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5D3327").s().p("AALAIIgCgBQgCACgGgCIgBgCQgDABgCgEQgDABgDgDQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgDgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIACABIAEAAIACACIAFgBQADABADAFIAEAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABABAAQADABABADQAAAAABAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABIgDgBgAAMAHQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQgCgCgDgBIgBgDIgFAAQgEgEgCgBIgFABIgCgCIgDAAIgCAAIgCAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAAAQAAAAABAAQACABADgBIACACQAAABABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABADAGAAIACgCIADADg");
	this.shape_89.setTransform(19.3,14.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_90.setTransform(5.3,20.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_91.setTransform(6,21.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#5D3327").s().p("AgBAAIABAAIACAAIAAABIgDgBg");
	this.shape_92.setTransform(7.1,22.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_93.setTransform(6.2,21.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5D3327").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_94.setTransform(6.9,21.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAg");
	this.shape_95.setTransform(6.2,21.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F5CA00").s().p("AgTgOQAXAGAQASIgBAFQgNgUgZgJg");
	this.shape_96.setTransform(37.1,39.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F5CA00").s().p("AgWgBQAWAEAWgDIgDABIgLABQgOAAgQgDg");
	this.shape_97.setTransform(32.8,56.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F5CA00").s().p("AggBnIADgEQAHgKADgNIAriWQADgOAAgKIgBgGIAGACIABAGQAAAIgEAPIgqCXQgFAPgGAIIgDAEg");
	this.shape_98.setTransform(-38.7,25.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F5CA00").s().p("AgNA1QgHgFgFgKQAPACALgLQANgMAFgRQAEgRgFgPQgFgOgNgIIgIgFQAIACAFAEQAdASgKAjQgEATgNALQgLALgPgCQAEAJAIAHQAFAEADABQgGgBgIgGg");
	this.shape_99.setTransform(-10.4,39.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F5CA00").s().p("AgXAiQAHABAHgBQASgEAHgWQAFgNgGgNQgFgMgLgFQANADAIANQAIAOgGAPQgGAVgTAFIgIAAQgHAAgFgCg");
	this.shape_100.setTransform(-9.4,28.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F5CA00").s().p("AgXBiQgGgKAEgQIAriWQAFgVgCgJIAFACQADAKgGATIgqCXQgFAQAHAJQAFAGAJAEQgOgEgGgHg");
	this.shape_101.setTransform(-17.9,32);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F5CA00").s().p("AAEByQgRgUgMgrIgVhcIgBgIIBKg4QAUgOgFgQIAFABQAGARgUAOIhLA3IACAIQAPBIAGAVQALAqARAVQAOAOASAGQgVgFgQgRg");
	this.shape_102.setTransform(-28.8,32.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F5CA00").s().p("AAAA1IgChlIADgIIADBxg");
	this.shape_103.setTransform(11,38.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F5CA00").s().p("AhBBdQAOgIAMgRIBYiEQANgSgCgMIAFACQADAKgNAUIhZCDQgMASgNAIg");
	this.shape_104.setTransform(3.4,38.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F5CA00").s().p("AgFAAIgNACIABgCIAGAAQANgCARAEQgOgCgKAAg");
	this.shape_105.setTransform(6.4,42.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F5CA00").s().p("AAdAqQgLgEgEgFQgFgHgBgMIAAgSIgBgBQgOgdgbgJQAfAIAPAgIABABIABASQABANAEAFQAFAHALADg");
	this.shape_106.setTransform(10.1,48.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F5CA00").s().p("AgJBpQgngSgOgeQgUgqAOgtQAPgvAogWQATgLAYgBQAXgCAWAHQgtgMglAVQgoAWgPAvQgPAtAUAqQAQAeAlASIAMAFIgRgHg");
	this.shape_107.setTransform(26.9,46.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5D3327").s().p("AgXBaQARAJANgKQANgKAFgTQAHgdgTgPQgOgNgUACIgUBGQgHAZAPAQIgigLQglgLAKgiIAtiXQAEgQgBgHQgBgHgIgJIBpAgQAYAHANAPQAPATgGAZQgFARgNALQgMAIgQAAQAYAKAKAUQALAUgGAYQgMAwgvAFIgJAAQglAAgHgpgAANB7QgFgBgFgEQgHgHgEgJQAOACANgLQAMgLAFgTQAJgmgcgRQgGgEgKgCIAKAFQAOAIAFAOQAFAPgFARQgFATgMAMQgNALgOgCQAFAKAIAFQAGAGAIABIAAAAgAhCBiQgKgEgFgGQgGgJAEgQIAtiXQAGgTgDgKIgGgCQADAJgGAVIgsCWQgFAQAHAKQAFAHAPAEIAAAAgAARgKQAVgFAGgUQAGgSgIgNQgIgNgPgEQANAFAFANQAGANgFAPQgHAVgUAEQgHACgFgCQAHAFALgDgAAChOIgOA2QAJAJANgDQARgEAGgRQAFgRgKgMQgIgLgOAAIgEABg");
	this.shape_108.setTransform(-11.6,33.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5D3327").s().p("AAKB2QgNgagZhzIgTBBQgIAXAKAPIhNgXQAHgEAGgHQAFgHAEgNIAsiXQAEgLAAgLQgBgJgEgHIBKAXQgHADgGAIQgEAGgDAOIgUBEIBHg0QAYgRgWgUIBJAWIhfBGQASBOALAgQAaBNAmAOIgVABQhAAAgagugABBCZQgTgGgNgOQgUgVgLgqQgEgVgPhIIgBgIIBLg3QATgOgFgRIgGgBQAGAQgUAOIhLA4IACAIIAUBcQALArASAUQAQARAWAFIAAAAgAguiTQAAALgEANIgtCXQgDAMgHAKIgDAEIAGACIADgEQAGgJAEgOIAtiXQAEgPgBgJIAAgFIgGgCg");
	this.shape_109.setTransform(-31.1,30.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5D3327").s().p("AA/B3QgPgEgFgJQgEgHgBgNIgBgTQgWgogtABIgKAOIgIAOQgIARAKANIhFgVIAQgHQANgHALgRIBYiDQAJgNABgGQABgJgJgKIA0AQQAPAFAFAIQACAFACAOIAGCuQAAANAFANQAFAPAJAHgABGBzQgLgEgEgGQgEgFgBgNIgBgUIgBgCQgRgfgfgJQAbAKAPAcIABABIABAVQABAMAEAHQAEAFAMAEIAFACIAAAAgAAShdIhYCDQgMARgOAIIAGACQANgIAMgRIBZiDQANgUgDgLIgFgCQACAMgNATgAAwAbIgDhxIgFAIIACBmIAGADgAAkAOIgChTIgvBIQAYgDAZAOgAASANQgRgFgOABIgFABIgCADIANgCQAKgBAPADIAAAAg");
	this.shape_110.setTransform(6.5,41.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#5D3327").s().p("AgOB2Qg6gOgXguQgVgrAPgwQAQgzArgXQAZgNAcAAQAbgBAbANIAUAKQAKAEANgDIgMBCQgGgSgOgNQgOgMgTgEQgggIgYAYQgYAXgGAkQgIAxAiAdQAgAdA2gQQgTAhgoAAQgKAAgOgDgAgRBuIgOgFQglgSgQgeQgUgqAPgtQAPgvAogWQAlgVAtAMQgWgHgXACQgWABgVALQgoAWgPAvQgOAtAUAqQAOAeAnASIATAHgAAyBlIAEgDQgaAEgUgGQAUAHAWgCgABdgzIABgFQgQgUgZgHQAbAKANAWg");
	this.shape_111.setTransform(29.6,46.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5D3327").s().p("AgWAtIAGgCQAXgJAHgbQAFgWgNgSQgEgHgGgHQAjAVgJAkQgEAQgMAKQgKAKgPACg");
	this.shape_112.setTransform(-2.6,29.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5D3327").s().p("AAFBrQgSgfgQg6IgThOIBchGIABAAIAEAFIhZBEQARBIAHAWQATBFAcAZQgOgHgMgRg");
	this.shape_113.setTransform(-22.6,32.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#5D3327").s().p("AATB+IgKgIIgGgGQgGgPgBgVIgHiuIgBgNQgCgGgDgEIgEgFQAMAFAEAIQACAFABANIAECuQABAhATAPg");
	this.shape_114.setTransform(17.6,42.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5D3327").s().p("AgIASIAIgwIAJgBIgLBAQgCgIgEgHg");
	this.shape_115.setTransform(41.1,40.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5D3327").s().p("AggAQQANgBAMgGQASgHAKgOIAMgDQgTAfgnAAIgHAAg");
	this.shape_116.setTransform(34.8,57.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5D3327").s().p("AgGgJQAEgNADgHQAEgHAJgEIAIADQgIADgFAIQgFAGgEAOIgJAnIgMAIg");
	this.shape_117.setTransform(-30.1,20.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5D3327").s().p("AgXA6QgRgbAGgiQAEgWAMgTQANgUAQgJQANgFAMACQgYAEgQAWQgRAVgFAdQgEAWAHAWQAHAUAPANQgOgHgIgMg");
	this.shape_118.setTransform(29.4,46.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5D3327").s().p("AgHAaIgEgFQgFgLAGgMQADgGAMgTIAJAAQgOAVgCAGQgHAPAJANg");
	this.shape_119.setTransform(3.4,47.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5D3327").s().p("AgCAnQgKgPAHgXIAKgpIAEASIgIAZQgFAYAIAOg");
	this.shape_120.setTransform(-34.6,34.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#5D3327").s().p("AgjA9QAIgCAIgDIAEgCQAggMAJglQAIgbgRgXQgFgIgIgHQATALAJASQAIASgGAVQgHAbgVAOQgPAMgTAAIgHAAg");
	this.shape_121.setTransform(-4.6,40.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#5D3327").s().p("AgKAsQgHgOAGgSIARhCIAJABIgUBNQgDATALAMQgHgDgGgIg");
	this.shape_122.setTransform(-13.8,39.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5D3327").s().p("AgPAXIAfguIAAAOIgWAhg");
	this.shape_123.setTransform(8.1,38.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5D3327").s().p("AgKAXIANgvIAIADIgMAuQgFAAgEgCg");
	this.shape_124.setTransform(-11,28.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5D3327").s().p("AD3CVIAAgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgTAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIAAACIgBAAIAAgNIABAAIAAACIABABIABABIAJAAIAAgCQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgEgCIgEgBIgCgCIgBgCIACgDQABgCAEAAIAAACIgCAAIgBABQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAABIAEABIACACIABAEQABgJAGAAQADAAACADQABADAAAEIAAANgADtCGIgBADIAAADIAJAAIABgBIABgCIgBgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgADfB2IgBgLIABAAIAAACIACAAIAQgBIgBAAIgPgIIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAADIgCAAIgBgMIACAAIAAABQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIATgCQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIACAAIABALIgCABIAAgCQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgQABIAQAJIAAAAIACgBIAAgDIABAAIABANIgBAAIAAgCQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgTACQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABIAAABgADbBWIgCgMIABAAIABACIAAABIABAAIAJgDIgCgJIgJACIgBAAIAAABIAAADIgBAAIgDgMIACAAIAAACIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIATgFIABgBIAAgBIgBgBIACAAIADALIgCAAIAAgBIgBgBIgBAAIgIABIACAKIAIgBIABgBIAAgBIAAgCIACgBIACAMIgBABIgBgCIAAgBIgBgBIgTAFIgBABIgBABIABACgADLAgIABgBIABADIABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIATgHIAAgBIAAgCIgBgCIACgBIAIAWIgIADIgBgBIAEgDIABgDIAAgDIgCgFIgBAAIgJAEIABABIACACIAEAAIABACIgLAFIgBgCIADgDIAAgDIAAgBIgJADIgBAAIABADIABACQABAEADAAQACABAEgBIABACIgJADgADIAYIgBgCIABgCIAEgEIACgEIAAgCIgBgBIgIAEQAAAAAAABQgBAAAAAAQAAAAAAABQABAAAAABIABACIgBAAIgHgLIABgCIABADQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAIgFIgBgCIgCgBQAAAAAAAAQAAgBgBAAQAAAAAAABQAAAAgBAAIgHACIgDAAIgBgCQgDgDAFgDIABABQAAABgBAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAIAFgCQACAAADACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABgBIAEgCIAAgCIgBAAIgBABIAAABIgCAAIgCgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIADAAIACACIABADIgBADIgHAFIAAAAIABACIABABIAIgDIAAgCIgBgCIABgBIAHAKIgCABIgBgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgHAFIABACIABABIACABIAHgDQAAAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAIADACIAAADIgCADIgCABIgCgCIAAgCIABgCIACAAIAAgBIgBgBIgEACIgEABQAAABgBAAQAAAAAAAAQAAAAgBgBQAAAAgBgBIAAAGIgDADIgCACIAAACQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAACIgDABQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBgAjjAMIABgCIAAAAIgBgBIgQgJIgBAAIgBAAIgBAAIgBAAIAGgJIABABIgBABIAAACIABAAIAHAFIAFgIIgHgFIgBgBIgBABIgBACIgBgBIAGgLIACABIgBACIgBABIABABIAQALIACAAIABAAIABgCIABABIgGAIIgCAAIABAAIAAgCIAAgBIgIgEIgFAHIAHAEIABAAIABAAIABgCIACABIgHAKgAjTgLIAAgBIABgCIgBgCIgMgVIACgCIAYAHQAAAAAAAAQAAABABAAQAAAAAAgBQAAAAAAAAIABgBIABAAIABAAIgHAKIgBAAIAAgBIABgCIAAgBIgBAAIgFgCIgGAIIABACIABACIACAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIABgBIABABIgGAIgAjVgXIAFgHIgKgDgAC3gLQgGAAgDgEQgDgEAAgDIABgHIAEgFQAGgEAEAAQAGACADADIADAHIgBAHQgCADgDACQgEAEgEAAIgBgBgAC6ghIgGADIgFAGIgBAEQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQACACADAAQAFgBAEgDIAFgFQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgBgEIgDgCgACUgvIABgBIABACIABABIABgBIAPgOIAAAAIAAgBIgCgCIABgCIAKAMQADACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBIgDgCIgEgEIgGAGIAAABIAAABIACACIgBACgACqg4IgHAHIADACQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADABIACgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIgCgDIgCgCgAjHgsQgEgEAAgGQAAgFADgEIADgCIAEgBIgBgCIABgBIAIAHIgBABQgEgDgDAAQgDAAgCACQgCABAAAEQABAEAEAEQAEAFAEABQADAAACgCQADgCAAgEQAAgDgCgCIABgCQACADAAAFQAAADgDAEQgEAEgFgBQgFAAgEgEgACPg1QgDAAgDgDIgMgKIABgBIACACIABAAIABgBIAMgPIgBgDIgBgBIABgBIARAOIgFAHIgBgBIACgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgEIgDgCIgCAAIgFAHIACACQAGAFABADQABADgCACQgCADgCAAIgCAAgACGg+QAAAAgBAAQAAABAAAAQAAAAAAAAQABABAAAAIADACQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBQABAAAAgBQAEgFgFgEIgDgCgAiog6IADgCIAAgBIgNgRIgBAAIgBAAQgDADAEAHIgCABIgFgIIARgNIAHAHIgBABIgEgDIgEgBIgCABIgBABIABABIAMAQIABAAIABAAIACgCIABABIgLAJgABshMQgFgDAAgFQgCgFAEgFQADgGAGgBQAFgBADADIADACIACAEIACgCIABABIgFAJIgBgBQABgEAAgDQAAgDgDgBQgCgBgDAAQgDABgEAFQgDAGAAAEQAAACADADQADACADgCIAFgCIABABQgEADgDAAIgCABQgDAAgCgCgAiXhNQgDgCgCgDQgDgFABgGQACgEAFgEQACgCAEAAQAEAAADACIAFAFQADAGgCAFQgBAGgFACQgDACgEAAQgEAAgCgCgAiXhjIgCADIAAAEIACAHIAFAGIADABIAEAAQADgCAAgEQAAgCgDgHIgEgFIgEgCIgEABgABUhaIABgCIABABIABABIABgBIAAgGIgIgEIgCACIgBABIAAACIABACIABAAIgBABIgIgDIAAgCIABABIABAAQABAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAIARgQIACABIgBAZIABACIACAAIgBACgABRhnIAHAEIABgLgAh7hXQgBgBgCgEIACAAIABACIABABIABgEIgBgEIABgDIADgDQgIADgDgFQgBgCACgEQABgDAEgBIAMgGIABACIgCABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAIASQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIACgBIABABIgMAFIgBgBIADgBIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgIIgCAAIgCADIABAJIgBADIgCABIgCABIgCAAgAh4hyIgEACQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAEgBIACAAIgDgIIgBgCgAhghkIACgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgFgTQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIgBgBIAMgEIABACIgCAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAGAUIAIgCIgGgUQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBABIgBAAIgBgCIAMgDIAAABIgBABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAFAVIAJgDIgGgUIgCgBIgCABIAAgCIAMgDIABABIgDABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIAGAUQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIACgBIACAIIgCAAIgBgCIgDgCIgEABIggAJgAA6hkIgOgFIABgBIACABIABAAIABgBIAGgUIAAAAIgBgCIgCAAIAAgCIAPAGQAEAAABADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgGAAQAEACACADIAAAEIgCAEIgEABgAA2hoIABABIADABQAAAAABAAQABABAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgDgDIgEgBgAA8h8IgDAJIADABQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgCIgCAAgAAkhqIgCgBIgCgDIAAgFIAAgEQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCAAIgCAJIACACIABAAIAAACIgMgDIAAgCIACABIABAAIABgBIAEgTIgBgCIgCgBIAAgCIAMAEIAAABIgCAAIgBAAIgBAAIgCAJIAEABIACAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADgHIACgCIADAAIADABIAAADIgBADIgCAAIgCgBIAAgCIAAgBIABgBIgBgBIgBABIgCAFIgCADIgCABQADABABADIABAFQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIABgEIACABQgCAFgDAAIgBAAgAgzhwIACAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgUQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAMgBIAAACIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIABARIAAgCIAJgPIAAAAIgBgCIgDAAIAAgCIAMgBIAAACIgBAAIgCACIACAUQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIACAAIAAABIgMABIAAgBIACAAIABgCIgBgQIgJARIAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIACAAIAAACIgMABgAgEhwIABgCIABABQABgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgQIAAABIgKAOIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIACAAIAAABIgMAAIAAgBIACAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIACgTQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgCAAIABgBIALAAIAAACIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBAQIABgBIAJgNIAAAAIAAgCIgBgBIgBAAIAAgBIAKAAIAAACIgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgCATQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIABAAIAAABgAgDiMQgEAAgCgBQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgCIACgBIACABIAAACQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBABIABABIAEABIADAAIAAgBIAAgCIgBgCIABgBIAAgBIACABIAAADQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgCABIgBAAg");
	this.shape_125.setTransform(5.4,11.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5D3327").s().p("AiYgpIANgEIIbCiIgBAHgAmPh0IABgHICNArIAJAJg");
	this.shape_126.setTransform(-4.5,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// Layer 8
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(90,54,20,0.098)").s().p("AmmImIFnzgIHmCVIiAHMIjnMUg");
	this.shape_127.setTransform(19.4,56.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_127).wait(1));

	// Layer 9
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],-3,-0.8,3.1,0.9).s().p("AjYJkIC3qKIBdlNIBPkIIBOAXIiAHMIjmMUg");
	this.shape_128.setTransform(-49.7,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(1));

	// Layer 7
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],4.1,1.3,-3.1,-0.7).s().p("AjbJjIFjzfIBTAZIh/HMIjmMUg");
	this.shape_129.setTransform(39.8,63);

	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(1));

	// Layer 5
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F5CA00").s().p("AnqiHIAHgXIPOEmIgHAXg");
	this.shape_130.setTransform(12.7,-11.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F5CA00").s().p("AnoiIIAHgWIPKEnIgGAWg");
	this.shape_131.setTransform(-22.6,110.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AqXHVIC2qJIBflNIBMj6IPOElIh9HBIjnMSg");
	this.shape_132.setTransform(-4.9,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(-14.8,7.7,1,1,0,0,0,71.5,178.6);
	this.instance_1.alpha = 0.172;

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.setTransform(55.8,-161.2,1,1,0,0,0,18.2,7.9);
	this.instance_2.alpha = 0.109;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#763523").s().p("ADbBTInAh/QgIgCgEgHQgEgIACgIQACgIAIgEQAHgEAIACIHAB/QAIADAEAHQAEAHgCAIQgDAJgHAEQgEACgFAAIgGgBg");
	this.shape_133.setTransform(57.6,-166.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_134.setTransform(71.1,-179);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_135.setTransform(64.9,-180.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_136.setTransform(58.8,-182.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_137.setTransform(52.6,-184.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F4BD00").s().p("Aj7A1IAbhfQAbhjAFgJQAPgfAnAAQBWABBkAeQBmAeBIAsQAiAUgEAiQgCAQg5C8g");
	this.shape_138.setTransform(61,-180.4);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(41.6,-110.9,1,1,0,0,0,26.1,38.6);
	this.instance_3.alpha = 0.109;

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.setTransform(-29.8,144.4,1,1,0,0,0,49.4,45);
	this.instance_4.alpha = 0.109;

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(11.4,-8.3,1,1,0,0,0,44.3,57.9);
	this.instance_5.alpha = 0.109;

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#812E1C").s().p("AiWc3QhEgFg8gzIgxg2QgcgfgfgIQgfgKgoAMQhAATgFABQhPALg8ggQgigRgbgmQgUgcgVgtQgyhwAChTQABgqARg2IAghdQANglAQg7IAZhiICToQQBclFBRkXIBOkJIAuilQAchhAgg9QAmhGBEgzQAfgYBHgkQA+gkASgyIBGjAIBEjBIBLjRIAQgxQAKgdAJgSQAIgNATgUQAWgVAHgLQALgRAFgeQAEgiAEgQIGXB1QgFAPgOAfQgMAdAAAUQAAANAHAdQAGAcgBAPQgBATgHAeIgNAyIgvDZIgsDIQgbB4gQBQQgKA0AhA/IA4BqQAeBQgFBPQgEBEgcBjIgxCjIhKEIQhOEThhFLQhJD8hRERIgeBhQgTA6gJAnIgVBgQgPA2gWAlQgqBIhlBDQgnAcggANQglAOgiAAIgLAAg");
	this.shape_139.setTransform(-4.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.3,-198.6,172.6,397.3);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.q3 = new lib.Symbol74();
	this.q3.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.q3).wait(1));

	// Layer 3
	this.q2 = new lib.Symbol73();
	this.q2.setTransform(0.2,-3);

	this.timeline.addTween(cjs.Tween.get(this.q2).wait(1));

	// Layer 1
	this.q1 = new lib.Symbol72();

	this.timeline.addTween(cjs.Tween.get(this.q1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-44.8,183.7,89.6);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.q3 = new lib.Symbol77();
	this.q3.setTransform(-12.5,50.2,1,1,0,0,0,-11.2,65.5);

	this.timeline.addTween(cjs.Tween.get(this.q3).wait(1));

	// Layer 1
	this.q2 = new lib.Symbol76();
	this.q2.setTransform(-12.5,50.2,1,1,0,0,0,-11.9,55.3);

	this.timeline.addTween(cjs.Tween.get(this.q2).wait(1));

	// Layer 3
	this.q1 = new lib.Symbol75();
	this.q1.setTransform(-12.5,50.1,1,1,0,0,0,-12.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.q1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-50.3,126,100.7);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.q3 = new lib.Symbol69();
	this.q3.setTransform(-3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.q3).wait(1));

	// Layer 1
	this.q2 = new lib.Symbol70();
	this.q2.setTransform(0.3,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.q2).wait(1));

	// Layer 3
	this.q1 = new lib.Symbol71();

	this.timeline.addTween(cjs.Tween.get(this.q1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-38.3,79.4,76.7);


(lib.Symbol65 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// t1
	this.t1 = new lib.Symbol66();
	this.t1.setTransform(-35.3,-136);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t3
	this.t3 = new lib.Symbol67();
	this.t3.setTransform(-29,57.3,1,1,0,0,0,-13.3,50.2);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// bottle
	this.bottle = new lib.Symbol78();
	this.bottle.setTransform(-6,238.1,1,1,0,0,0,-43,182);

	this.timeline.addTween(cjs.Tween.get(this.bottle).wait(1));

	// t2
	this.t2 = new lib.Symbol68();
	this.t2.setTransform(-28.1,-70.4);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-174.4,243.4,429.1);


(lib.Symbol41 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new lib.Symbol44();
	this.txt.setTransform(-4.2,5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 4
	this.p2 = new lib.Symbol43();
	this.p2.setTransform(-1.9,3);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// Layer 5
	this.p1 = new lib.Symbol42();

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-44.8,181.3,89.6);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new lib.Symbol47();
	this.txt.setTransform(0.7,2.3);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.p2 = new lib.Symbol46();
	this.p2.setTransform(1.3,2.8);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// Layer 4
	this.p1 = new lib.Symbol45();

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-35.2,174.9,70.6);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new lib.Symbol52();
	this.txt.setTransform(-4.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.w1 = new lib.Symbol48();
	this.w1.setTransform(-40.7,-32.3,1,1,0,0,0,4.7,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.w1).wait(1));

	// Layer 4
	this.w2 = new lib.Symbol49();
	this.w2.setTransform(-49.2,-11.1,1,1,0,0,0,-48.5,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(1));

	// Layer 5
	this.g1 = new lib.Symbol50();
	this.g1.setTransform(-29,-45.9,1,1,0,0,0,22.1,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.g1).wait(1));

	// Layer 6
	this.g2 = new lib.Symbol51();
	this.g2.setTransform(-47.6,-15.1,1,1,0,0,0,-47.6,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.g2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,-45.8,163.9,91.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.rays = new lib.Symbol121();
	this.rays.setTransform(-2,-10);

	this.timeline.addTween(cjs.Tween.get(this.rays).wait(1));

	// Layer 5
	this.sun = new lib.Symbol118();
	this.sun.setTransform(-1.9,3);

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-168.3,347.5,347.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new lib.Symbol11();
	this.txt.setTransform(-0.2,11.8);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 4
	this.w1 = new lib.Symbol8();
	this.w1.setTransform(-39.2,-33.6,1,1,0,0,0,14.4,-15);

	this.timeline.addTween(cjs.Tween.get(this.w1).wait(1));

	// Layer 3
	this.w2 = new lib.Symbol9();
	this.w2.setTransform(-55.4,-8.3,1,1,0,0,0,-52.6,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(1));

	// Layer 5
	this.g1 = new lib.Symbol7();
	this.g1.setTransform(-20.4,-45.1,1,1,0,0,0,26.7,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.g1).wait(1));

	// Layer 1
	this.g2 = new lib.Symbol10();
	this.g2.setTransform(-54.8,-14.2,1,1,0,0,0,-54.8,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.g2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-45.1,189,90.2);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3
	this.t3 = new lib.Symbol39();
	this.t3.setTransform(-26.9,35.4,1,1,0,0,0,-29.2,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.Symbol40();
	this.t2.setTransform(17.8,-142);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.Symbol41();
	this.t1.setTransform(-27.3,-203.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// head
	this.head = new lib.Symbol124();
	this.head.setTransform(0,6.3,1,1,0,0,0,0,77.9);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEDADF").s().p("AAUBNQgXgDgVgNQgUgNgOgVQgJgOgFgOIAshLQAyAKAzAAIg0CPg");
	this.shape.setTransform(-7.3,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEDADF").s().p("AgVBNIgziPQA1AAAtgKIAvBLQgFAPgJANQgdArgyAHg");
	this.shape_1.setTransform(7.4,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B8A8F").s().p("AgdA2QgcgRgKgMIAEgLIAFgOIAAgBIB+hOIgqCfQgegIgZgSg");
	this.shape_2.setTransform(-6.8,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B8A8F").s().p("AhDhPIB+BOIABABIAIAXQgQARgVAOQgaASgeAIg");
	this.shape_3.setTransform(6.7,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F6F2E7","#72B9C0","#00A0AF"],[0.063,0.667,1],0,56.9,0,-25.8).s().p("AheI1Qi4gQh+hEQAMg0AijMQAei8AUhGQBBjlBNh4QASgjARgsIAEgPIAQgtQAIgaAEgUQAbAFAOACQAiAEAYgBQAaABAggEIAsgFQAFAeAUA5IABACIAIAYQALAeATAoQBMB1BCDoQAVBGAfC8QAgDMANA0Qg8AghPAWQhQAVhcAJQgrADgzAAQgzAAgrgDg");
	this.shape_4.setTransform(0,87.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3A86A").s().p("AhgAcIgNhEQAVAFAhgBIA3gCIA3AEQAjADAUgFIgMBAQgwANgyAAQgvAAgxgNg");
	this.shape_5.setTransform(-0.2,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B67D").s().p("AjOKVQhhgThKgkQAKgqAZinQAXieAPg0QBBjmBMh1QAXgwAPguQAQgvAKgzQAPhLAAhOIgCg2QgDgqgHglIgHgqIAQADQAsAKArAAQAsAAAsgKIAQgDIgHAqQgHAlgDAqIgCA2QAABOAPBLQAKAzAQAvQAPAuAXAwQBMB1BBDmQAPA0AXCeQAZCnAKAqQhKAkhhATQhjAUhsAAQhrAAhjgUg");
	this.shape_6.setTransform(-0.1,65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Isolation Mode
	this.hand = new lib.Symbol139();
	this.hand.setTransform(10,41.8,1,1,0,0,0,-42.6,23.6);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-247.9,223.3,392.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// person2
	this.person2 = new lib.Symbol123();
	this.person2.setTransform(-0.5,56);

	this.timeline.addTween(cjs.Tween.get(this.person2).wait(1));

	// sun
	this.sun = new lib.Symbol12();
	this.sun.setTransform(0,-139.3);

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-307.6,347.5,507.9);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var count = 1;
		var repeat = 200;
		
		var n = this;
		var p2 = n.p1.person2;
		
		var tr = new TimelineMax();
		tr.to(n.darken, 0.8, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(n.hole, 1.0, {scaleX:1, scaleY:1, ease:Expo.easeInOut}, 0.2)
		  .from(n.t1, 1.9, {rotation:"-50", x:"+=50", ease:Elastic.easeOut}, 1.2)
		  .staggerFrom([n.t1.g1, n.t1.w1], 0.3, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.05, 1.2)
		  .staggerFrom([n.t1.g2, n.t1.w2], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 1.3)
		  .from(n.t1.txt, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 1.3)
		  .from(p2, 1.0, {y:"+=300", ease:Expo.easeOut}, 0.6)
		  .from(n.p1.sun, 1.5, {y:"-=250", ease:Elastic.easeOut}, 1.2)
		  .to(n.p1.sun.sun.s1, 6.0, {rotation:"-=1800", ease:Power0.easeNone}, 1.2)
		  .to(n.p1.sun.sun.s2, 6.0, {rotation:"+=2300", ease:Power0.easeNone}, 1.2)
		  .from(p2.head, 2.0, {rotation:"+=10", ease:Elastic.easeOut}, 0.8)
		  .from(p2.head.hairs, 2.5, {rotation:"-=10", ease:Elastic.easeOut}, 1.0)
		  .from(p2.head.hairs2.h1, 2.8, {rotation:"-=35", ease:Elastic.easeOut}, 1.0)
		  .from(p2.head.fl, 2.5, {rotation:"-=2", x:"+=4", ease:Elastic.easeOut}, 1.0)
		  .from(p2.head.eyes, 2.5, {x:"+=4", ease:Elastic.easeOut}, 1.0)
		  
		  //eyes up
		  .from(p2.head.hairs2.h2, 1.0, {rotation:"+=65", scaleX:0, scaleY:0, ease:Elastic.easeOut}, 3.0)
		  .from(p2.head.hairs2.h3, 1.4, {rotation:"+=45", scaleX:0, scaleY:0, ease:Elastic.easeOut}, 3.0)
		  .to(p2.head.eyes, 0.2, {x:"+=2", y:"-=5", ease:Sine.easeInOut}, 3.3)
		  .to(p2.head.b1, 0.2, {x:"-=1", y:"-=2", rotation:"-=5", ease:Sine.easeInOut}, 3.3)
		  .to(p2.head.b2, 0.2, {x:"+=1", y:"-=2", rotation:"+=5", ease:Sine.easeInOut}, 3.3)
		  .to(p2.head.lips, 0.2, {x:"+=1", y:"+=2", rotation:"-=5", ease:Sine.easeInOut}, 3.3)
		  
		  .to(p2.head.eyes, 0.1, {x:"-=4", ease:Sine.easeInOut}, 4.0)
		  .to(p2.head.eyes, 1.6, {x:"+=4", ease:Sine.easeInOut}, 4.4)
		  
		  //down
		  .to(p2.head.eyes, 0.2, {x:"-=2", y:"+=5", ease:Sine.easeInOut}, 6.0)
		  .to(p2.head.b1, 0.2, {x:"+=1", y:"+=2", rotation:"+=5", ease:Sine.easeInOut}, 6.0)
		  .to(p2.head.b2, 0.2, {x:"-=1", y:"+=2", rotation:"-=5", ease:Sine.easeInOut}, 6.0)
		  .to(p2.head.lips, 0.2, {x:"+=1", y:"-=2", rotation:"+=5", ease:Sine.easeInOut}, 6.0)
		  
		  
		  //glasses
		  .from(p2.head.gl, 1.4, {y:"-=25", alpha:0, ease:Elastic.easeOut}, 6.5)
		  .from(p2.head.lips2, 1.4, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 6.5)
		  .from(p2.hand, 0.3, {alpha:0, ease:Power0.easeNone}, 6.5)
		  .from(p2.hand, 2.0, {rotation:"+=50", ease:Elastic.easeOut}, 6.5)
		  .from(p2.hand.h1, 2.2, {rotation:"+=50", ease:Elastic.easeOut}, 6.6)
		  
		  .to(p2.head, 0.2, {y:"+=5", ease:Expo.easeIn}, 6.5)
		  .to(p2.head, 1.2, {y:"-=5", ease:Elastic.easeOut}, 6.7)
		  .to(p2.head.fl, 0.8, {scaleX:0.0, scaleY:0.0, ease:Expo.easeIn}, 6.5)
		  
		  .to(n.t1, 0.6, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 6.0)
		  .to(n.p1.sun.sun, 0.4, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 6.0)
		  
		  
		  .from(p2.t3, 1.9, {rotation:"-50", ease:Elastic.easeOut}, 7.0)
		  .staggerFrom([p2.t3.g1, p2.t3.w1], 0.3, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.05, 7.0)
		  .staggerFrom([p2.t3.g2, p2.t3.w2], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 7.1)
		  .from(p2.t3.txt, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 7.1)
		  
		  .staggerFrom([p2.t1.p1, p2.t1.p2, p2.t1.txt], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 6.6)
		  .staggerFrom([p2.t2.p1, p2.t2.p2, p2.t2.txt], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 6.8)
		  
		  //3 scene
		  .set(n.sc3, {x:0})
		  .to(n.p1, 0.2, {x:"-=300", ease:Sine.easeIn}, 9.0)
		  .from(n.sc3.bottle, 0.5, {y:"+=90", ease:Expo.easeOut}, 9.0)
		  .from(n.sc3.bottle, 1.5, {rotation:"+=90", ease:Elastic.easeOut}, 9.0)
		  
		  .staggerFrom([n.sc3.t1.q1, n.sc3.t1.q2, n.sc3.t1.q3], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 9.2)
		  .staggerFrom([n.sc3.t2.q1, n.sc3.t2.q2, n.sc3.t2.q3], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 9.3)
		  .staggerFrom([n.sc3.t3.q1, n.sc3.t3.q2, n.sc3.t3.q3], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 9.4)
		  .from(n.sc3.t3, 1.3, {rotation:"+=90", ease:Expo.easeOut}, 9.4)
		  
		  //3 scene
		  .set(n.sc4, {x:0})
		  .to(n.sc3, 0.2, {x:"-=300", ease:Sine.easeIn}, 11.0)
		  .staggerFrom([n.sc4.q1, n.sc4.q2, n.sc4.q3, n.sc4.q4, n.sc4.l2], 1.0, {y:"+=85", alpha:0, ease:Expo.easeOut}, 0.09, 11.0)
		  .from(n.sc4.p1, 0.8, {scaleY:0, ease:Expo.easeOut}, 11.7)
		  .from(n.sc4.l1, 0.8, {scaleX:0, ease:Expo.easeOut}, 11.7)
		  .staggerFrom([n.sc4.t1.t1, n.sc4.t1.t2, n.sc4.t1.t3, n.sc4.t1.t4, n.sc4.t1.t5, n.sc4.t1.t6, n.sc4.t1.t7], 0.8, {y:"+=55", ease:Expo.easeOut}, 0.05, 12.0)
		  .from(n.sc4.pic, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut/*, onComplete:animEnd*/}, 12.0)
		  .staggerFrom([n.sc4.t2, n.sc4.t3], 0.8, {y:"+=55", alpha:0, ease:Expo.easeOut}, 0.03, 12.0)
		  
		  
		  .call(replay)
		  .to(n.darken, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 15)
		  ;
		
		
		function replay() {
		  if (count == repeat){
		      //tr.pause();
			  tr.kill();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tr.play();
		  }
		  }
		}
		
		function restart() {
			tr.play(0);
			sun();
			lines();
		}
		
		
		
		
		
		//rain
		var z = this.p1.sun.rays;
		function sun() {
			var i = 0;
			for (currObj in z) {
			  if(z[currObj] && typeof z[currObj] == "object" && i>=56){
				  //TweenMax.set(z[currObj], {y:-80, alpha:1});
				  //console.log(currObj,i)
				  TweenMax.from(z[currObj], 0.8, {scaleX:0, scaleY:0, ease:Power0.easeNone, delay:(i-56)*0.016+1.5});
				  TweenMax.fromTo(z[currObj], 0.4, {alpha:1}, {alpha:0, ease:Power0.easeNone, delay:(i-56)*0.016+1.9});
				  //TweenMax.set(z[currObj], {y:-80, alpha:1, delay:(i-56)*0.04+2.5});
				  }
			i++;
			 }
		}
		sun();
		
		
		//lines
		var zz = this.sc4.lines;
		function lines() {
			var i = 0;
			for (currObj in zz) {
			  if(zz[currObj] && typeof zz[currObj] == "object" && i>=56){
				  //console.log(currObj,i)
				  TweenMax.from(zz[currObj], 0.5, {scaleX:0, scaleY:0, ease:Expo.easeOut, delay:(i-56)*0.04+11.5});
				  }
			i++;
			 }
		}
		lines();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9C2AF").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// hole
	this.hole = new lib.Symbol2();
	this.hole.setTransform(0,0,24.995,24.995);

	this.timeline.addTween(cjs.Tween.get(this.hole).wait(1));

	// darken
	this.darken = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.darken).wait(1));

	// sc4
	this.sc4 = new lib.Symbol80();
	this.sc4.setTransform(300,0,1,1,0,0,0,-1.4,0);

	this.timeline.addTween(cjs.Tween.get(this.sc4).wait(1));

	// sc3
	this.sc3 = new lib.Symbol65();
	this.sc3.setTransform(300,20.1,1,1,0,0,0,0.5,19.7);

	this.timeline.addTween(cjs.Tween.get(this.sc3).wait(1));

	// t1
	this.t1 = new lib.Symbol5();
	this.t1.setTransform(-18.9,92.6,1,1,0,0,0,-21.8,-44);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// p1
	this.p1 = new lib.Symbol6();
	this.p1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F2E7").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2999.4,-4999.1,5998.9,9998.2);


// stage content:
(lib.body_240x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyufQMAAAg+fMAldAAAMAAAA+fg");
	mask.setTransform(120,200);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(120,200);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;