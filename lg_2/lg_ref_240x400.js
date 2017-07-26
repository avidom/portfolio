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
		{src:"images/bens.png", id:"bens"},
		{src:"images/food.jpg", id:"food"},
		{src:"images/hol1.png", id:"hol1"},
		{src:"images/hol2.png", id:"hol2"},
		{src:"images/kitty.jpg", id:"kitty"},
		{src:"images/komp.png", id:"komp"}
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



(lib.bens = function() {
	this.initialize(img.bens);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,40);


(lib.food = function() {
	this.initialize(img.food);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,200);


(lib.hol1 = function() {
	this.initialize(img.hol1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,400);


(lib.hol2 = function() {
	this.initialize(img.hol2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,429);


(lib.kitty = function() {
	this.initialize(img.kitty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,200);


(lib.komp = function() {
	this.initialize(img.komp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,139);


(lib.t10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(32.5,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgagdIgBgQIAKAAIABAFIAIgFQAFgCAFAAQANABAHAIQAFAJABAPQAAAIgCAFQgBAFgEAEQgEAFgGACQgFADgHAAIgJgBIgFgCIAAAfIgLACgAgKgkIgFAEIAAAmQAGAEAHAAQAIAAAGgGQAEgEAAgOIAAgJIgDgIQgCgDgEgCQgDgCgEAAQgFAAgFACg");
	this.shape_1.setTransform(27.9,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgOAeQgFgCgDgEQgDgEgCgHIgBgNQAAgQAIgIQAHgIAOAAQAIAAAGADQAFACADAEQADAEABAHQACAGAAAGQAAARgHAIQgIAIgOAAQgIAAgGgDgAgNgRQgEAHgBAKIABAKQABAEACAEQACADADACQADACAGAAQAKAAAEgHQAFgGgBgMIgBgJQAAgEgCgEQgCgDgEgCQgDgCgFAAQgKAAgEAHg");
	this.shape_2.setTransform(20.8,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEAfIAAg1IgUAAIAAgIIAxAAIAAAIIgUAAIAAA1g");
	this.shape_3.setTransform(14.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgagdIgBgQIAKAAIABAFIAIgFQAFgCAEAAQAOABAHAIQAFAJAAAPQAAAIgBAFQgBAFgEAEQgEAFgGACQgFADgHAAIgJgBIgFgCIAAAfIgLACgAgKgkIgFAEIAAAmQAGAEAHAAQAIAAAGgGQAEgEAAgOIAAgJIgDgIQgCgDgEgCQgDgCgEAAQgFAAgFACg");
	this.shape_4.setTransform(8.3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgKAfQgGgCgDgFQgEgEgBgGQgCgGAAgIQAAgQAHgIQAIgIAMAAQAIAAAFADQAFACADAEQADAEABAGIABAMIAAADIgqAAIABAJQABAFADADIAGAEIAHABQAHAAAFgBIAIgEIADAIIgEACIgGACIgHABIgHABQgHAAgFgCgAgGgWQgDABgCADIgDAIIgBAGIAfAAQAAgLgEgEQgEgFgHAAQgDAAgEACg");
	this.shape_5.setTransform(1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgZAfIAAg9IAcAAQAJAAAGAEQAFADAAAIQAAAGgDAEQgCADgFACIAFAAIAEACIADAFIABAHQAAAEgCAEIgFAFIgGADIgIABgAgOAXIAQAAQAFAAAEgCQAEgCAAgGQAAgGgEgDQgDgCgHAAIgPAAgAgOgEIAQAAQAGAAACgCQADgDAAgEQAAgFgDgCQgEgCgGAAIgOAAg");
	this.shape_6.setTransform(-4.9,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAPAfIAAgcIgdAAIAAAcIgKAAIAAg9IAKAAIAAAbIAdAAIAAgbIAKAAIAAA9g");
	this.shape_7.setTransform(-11.9,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAZAtIAAhQIgBAAIgoBQIgSAAIAAhZIAKAAIAABRIABAAIAphRIASAAIAABZg");
	this.shape_8.setTransform(-19.9,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAAAGIgJASIgJgGIANgQIgTgDIADgKIASAHIgBgTIAJAAIgBATIASgHIADAKIgTADIANAQIgIAGg");
	this.shape_9.setTransform(-30.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-9.7,71.6,19.6);


(lib.Symbol35copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACMCGQgEgEAAgJQAAgJAEgFQAFgGAIABQAFgBACACIAAgRIAIgBIAAAsIABAJIgHAAIgBgCQgEADgGAAQgIgBgDgEgACTBvQgCACgBAIQABAMAIAAQAEAAADgCIAAgWIgGgCQgFABgCADgABkCFQgDgDAAgKQAAgJAEgFQAFgEAJAAQAJAAAEAEQADAFABAKQgBAJgEAEQgFAEgIABQgJAAgFgGgABrBvQgCADAAAHQAAAFACAEQABADAGAAQAFAAACgDQACgEAAgGQAAgGgBgDQgCgEgFAAQgFABgDADgAA9CFQgDgDAAgKQAAgJAEgFQAEgEAKAAQAJAAAEAEQADAFAAAKQAAAJgEAEQgEAEgKABQgJAAgEgGgABEBvQgCADAAAHQAAAFACAEQACADAEAAQAFAAADgDQACgEAAgGQAAgGgCgDQgCgEgEAAQgGABgCADgAAQCEQgGgHAAgMQAAgOAHgGQAGgHALAAQAGABAEABQAFACADAEIgFADQgEgEgJAAQgIgBgDAGQgFAFAAAKQAAAJAFAFQAEAFAHAAIAKgBIAAgOIgLAAIAAgGIATAAIAAAYQgHADgLABQgMgBgGgGgAgpCIIADgFQAEABAHAAIAEAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgDgFgCIgIgDQgDgBgCgCQgDgCAAgEQAAgFAFgDQAEgDAGABQAHgBAHADIgDAGQgFgDgGAAIgFACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABABIAEACIAIAEQADABACABQACADABAEQgBAFgEADQgEACgGABQgIgBgGgCgAhSCGQgEgEAAgKQABgSAQAAQAIAAAEAEQADAFAAAIIAAADIgYAAQAAAFADADQACADAFgBIAHAAIAFgCIACAFIgHADIgIABQgJgBgEgEgAhLBuQgCACgBAEIAQAAQAAgJgHAAQgFAAgBADgAhsCKIAAgdIgGAAIAAgGIAGAAIAAgFQAAgHADgEQAEgCAGAAQAGgBADACIgCAGIgFgBQgEAAgCACQgBABAAAEIAAAFIAMAAIAAAGIgMAAIAAAdgAiFCJIAAgjIAIAAIAAAjgAioCJIAAgzIAIAAIAAAtIAWAAIAAAGgAg1BmQADgFAAgDIABgJIAHAAIgCALQgBAFgDADgAiFBeIAAgHIAIAAIAAAHgAgOAQQgVgVAAgrQAAgsAWgXQAUgXAqAAQAUAAARAHQATAHAKAPIgZAXQgHgKgJgEQgKgFgOABQgbAAgKAOQgLAOAAAcQAAAdALANQALALAaAAIARgBIAMgDIAAgdIghAAIAAggIBGAAIAABSQgLAIgSAEQgTAFgTAAQgsAAgTgXgAioAkIAAisIAoAAIAACKIBTAAIAAAig");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-13.9,33.9,27.8);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4F").s().p("ACMCGQgEgEAAgJQAAgJAEgFQAFgGAIABQAFgBACACIAAgRIAIgBIAAAsIABAJIgHAAIgBgCQgEADgGAAQgIgBgDgEgACTBvQgCACgBAIQABAMAIAAQAEAAADgCIAAgWIgGgCQgFABgCADgABkCFQgDgDAAgKQAAgJAEgFQAFgEAJAAQAJAAAEAEQADAFABAKQgBAJgEAEQgFAEgIABQgJAAgFgGgABrBvQgCADAAAHQAAAFACAEQABADAGAAQAFAAACgDQACgEAAgGQAAgGgBgDQgCgEgFAAQgFABgDADgAA9CFQgDgDAAgKQAAgJAEgFQAEgEAKAAQAJAAAEAEQADAFAAAKQAAAJgEAEQgEAEgKABQgJAAgEgGgABEBvQgCADAAAHQAAAFACAEQACADAEAAQAFAAADgDQACgEAAgGQAAgGgCgDQgCgEgEAAQgGABgCADgAAQCEQgGgHAAgMQAAgOAHgGQAGgHALAAQAGABAEABQAFACADAEIgFADQgEgEgJAAQgIgBgDAGQgFAFAAAKQAAAJAFAFQAEAFAHAAIAKgBIAAgOIgLAAIAAgGIATAAIAAAYQgHADgLABQgMgBgGgGgAgpCIIADgFQAEABAHAAIAEAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgDgFgCIgIgDQgDgBgCgCQgDgCAAgEQAAgFAFgDQAEgDAGABQAHgBAHADIgDAGQgFgDgGAAIgFACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABABIAEACIAIAEQADABACABQACADABAEQgBAFgEADQgEACgGABQgIgBgGgCgAhSCGQgEgEAAgKQABgSAQAAQAIAAAEAEQADAFAAAIIAAADIgYAAQAAAFADADQACADAFgBIAHAAIAFgCIACAFIgHADIgIABQgJgBgEgEgAhLBuQgCACgBAEIAQAAQAAgJgHAAQgFAAgBADgAhsCKIAAgdIgGAAIAAgGIAGAAIAAgFQAAgHADgEQAEgCAGAAQAGgBADACIgCAGIgFgBQgEAAgCACQgBABAAAEIAAAFIAMAAIAAAGIgMAAIAAAdgAiFCJIAAgjIAIAAIAAAjgAioCJIAAgzIAIAAIAAAtIAWAAIAAAGgAg1BmQADgFAAgDIABgJIAHAAIgCALQgBAFgDADgAiFBeIAAgHIAIAAIAAAHgAgOAQQgVgVAAgrQAAgsAWgXQAUgXAqAAQAUAAARAHQATAHAKAPIgZAXQgHgKgJgEQgKgFgOABQgbAAgKAOQgLAOAAAcQAAAdALANQALALAaAAIARgBIAMgDIAAgdIghAAIAAggIBGAAIAABSQgLAIgSAEQgTAFgTAAQgsAAgTgXgAioAkIAAisIAoAAIAACKIBTAAIAAAig");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-13.9,33.9,27.8);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAwA2IAAhcIgCAAIgkBcIgTAAIgkhcIgCAAIAABcIgRAAIAAhrIAeAAIAiBcIABAAIAlhcIAbAAIAABrg");
	this.shape.setTransform(63.1,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAIACAKQADAMAAALQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABAQQABAIAEAGQADAFAGADQAGAEAJAAQASAAAIgLQAHgLAAgVQAAgIgBgIQgBgIgEgGQgDgFgGgEQgGgDgJgBQgSABgIALg");
	this.shape_1.setTransform(49.4,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgugzIgBgcIAQAAIACAIQAGgFAHgCQAKgEAJAAQAXAAALAPQALAOAAAbQAAANgDALQgDAJgGAIQgHAHgJAFQgKAEgMAAQgKAAgGgCIgJgDIAAA2IgTADgAgSg/IgJAGIAABDQAKAHANAAQAOAAAKgKQAJgJAAgYQAAgIgCgIQgBgHgDgGQgEgGgGgDQgHgEgHAAQgKAAgHAFg");
	this.shape_2.setTransform(38.1,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAIACAKQADAMAAALQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABAQQABAIAEAGQADAFAGADQAGAEAJAAQASAAAIgLQAHgLAAgVQAAgIgBgIQgBgIgEgGQgDgFgGgEQgGgDgJgBQgSABgIALg");
	this.shape_3.setTransform(26.3,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQALAAAIADQAKAEAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgKALQgIAMgBAVQABAJABAHQACAIAEAGQAEAFAHADQAGADAIAAQAJAAAIgCIANgFIAFAMQgFADgLADQgKADgKAAQgaAAgMgOg");
	this.shape_4.setTransform(15.9,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQALAAAJADQAJAEAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgKALQgIAMgBAVQAAAJACAHQACAIAEAGQAEAFAHADQAGADAIAAQAJAAAIgCIAOgFIADAMQgEADgLADQgJADgLAAQgaAAgMgOg");
	this.shape_5.setTransform(6.1,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgTA1QgKgDgGgHQgGgHgDgLQgCgLAAgOQAAgcAMgOQANgOAXAAQAOAAAJAEQAIAEAFAHQAFAHACAKQACAKAAAMIAAAGIhKAAQgBAJACAHQADAIAEAGQAEAEAHADQAGACAIAAQAMAAAIgEIAPgFIAEAMIgIAEIgKADIgLADIgNABQgMAAgKgEgAgLgoQgGADgDAFQgEAGgCAIIgBAKIA3AAQAAgTgHgIQgHgIgMAAQgGAAgHADg");
	this.shape_6.setTransform(-4.5,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgugzIgBgcIAQAAIACAIQAGgFAHgCQAKgEAJAAQAXAAALAPQALAOAAAbQAAANgDALQgDAJgGAIQgHAHgJAFQgKAEgMAAQgKAAgGgCIgJgDIAAA2IgTADgAgSg/IgJAGIAABDQAKAHANAAQAOAAAKgKQAJgJAAgYQAAgIgCgIQgBgHgDgGQgEgGgGgDQgHgEgHAAQgKAAgHAFg");
	this.shape_7.setTransform(-15.4,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAaA2IAAhdIgyAAIAABdIgTAAIAAhrIBXAAIAABrg");
	this.shape_8.setTransform(-27.1,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAvA2IAAhcIgCAAIgkBcIgRAAIgkhcIgCAAIAABcIgSAAIAAhrIAeAAIAiBcIABAAIAkhcIAcAAIAABrg");
	this.shape_9.setTransform(-40.6,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAIACAKQADAMAAALQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABAQQABAIAEAGQADAFAGADQAGAEAJAAQASAAAIgLQAHgLAAgVQAAgIgBgIQgBgIgEgGQgDgFgGgEQgGgDgJgBQgSABgIALg");
	this.shape_10.setTransform(-54.2,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAZA2IgqgwIgLAAIAAAwIgSAAIAAhrIASAAIAAAvIALAAIApgvIAUAAIguA1IAxA2g");
	this.shape_11.setTransform(-64.6,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAwA3IAAheIgCAAIgkBeIgTAAIgkheIgCAAIAABeIgRAAIAAhsIAdAAIAjBcIABAAIAlhcIAbAAIAABsg");
	this.shape_12.setTransform(121,-11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AArA3IAAhsIATAAIAABsgAg9A3IAAhsIASAAIAAAoIAhAAQAIAAAFACQAGACAFAEQAFAEADAFQADAGAAAJQAAASgKAJQgLAJgQAAgAgrAoIAeAAQAKABAEgGQAGgFAAgLQAAgJgGgGQgEgEgKAAIgeAAg");
	this.shape_13.setTransform(105.7,-11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAaA3IAAgxIgyAAIAAAxIgTAAIAAhsIATAAIAAAvIAyAAIAAgvIASAAIAABsg");
	this.shape_14.setTransform(92.5,-11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAeBSIAAheIgBAAIgxBeIgbAAIAAhsIASAAIAABcIABAAIAwhcIAcAAIAABsgAgYg0QgIgKAAgSIAPAAQAAALAEAIQAFAGAKAAQALAAAEgGQAEgIABgLIAPAAQAAASgJAKQgIAKgSAAQgSAAgIgKg");
	this.shape_15.setTransform(80.7,-14.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgTA2QgKgEgGgHQgGgIgCgKQgDgMAAgNQAAgdAMgNQANgOAXAAQAOAAAJAEQAIAEAFAHQAFAHACAKQACAKAAALIAAAHIhKAAQAAAJABAHQADAIAEAGQAEAEAHACQAGACAIABQALgBAJgDIAOgFIAFAMIgIAEIgKAEIgLACIgNABQgMAAgKgDgAgLgoQgGADgEAFQgEAGgBAIIgBALIA3AAQAAgUgHgHQgHgJgMABQgGAAgHACg");
	this.shape_16.setTransform(69.2,-11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAaA3IAAgxIgyAAIAAAxIgTAAIAAhsIATAAIAAAvIAyAAIAAgvIASAAIAABsg");
	this.shape_17.setTransform(58,-11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAfA3IAAheIgCAAIgxBeIgbAAIAAhsIASAAIAABcIABAAIAxhcIAbAAIAABsg");
	this.shape_18.setTransform(46.2,-11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Ag7BPIgHgCIACgQIAFABIAEAAQAIAAAFgKQAGgJADgSQADgSAAgZIACg8IBfAAIAACcIgTAAIAAiNIg6AAIgBASIAAAWIgBAXIgDAWIgFAZQgDAKgEAIQgFAHgGADQgGAEgJAAIgGAAg");
	this.shape_19.setTransform(31.9,-14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAwA3IAAheIgDAAIgkBeIgSAAIgkheIgCAAIAABeIgRAAIAAhsIAdAAIAjBcIABAAIAlhcIAbAAIAABsg");
	this.shape_20.setTransform(12.9,-11.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AArA3IAAhsIATAAIAABsgAg9A3IAAhsIASAAIAAAoIAhAAQAIAAAFACQAGACAFAEQAFAEADAFQADAGAAAJQAAASgKAJQgLAJgQAAgAgrAoIAeAAQAKABAEgGQAGgFAAgLQAAgJgGgGQgEgEgKAAIgeAAg");
	this.shape_21.setTransform(-2.4,-11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAaA3IAAgxIgyAAIAAAxIgTAAIAAhsIATAAIAAAvIAyAAIAAgvIASAAIAABsg");
	this.shape_22.setTransform(-15.6,-11.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgugzIgBgcIAQAAIACAIQAGgFAHgCQAKgEAJAAQAXAAALAPQALAOAAAbQAAANgDALQgDAJgGAIQgHAHgKAFQgJAEgMAAQgKAAgGgCIgJgDIAAA2IgTADgAgSg/IgJAGIAABDQAKAHANAAQAPAAAIgKQAKgJAAgYQAAgIgCgIQgBgHgDgGQgFgGgFgDQgHgEgHAAQgKAAgHAFg");
	this.shape_23.setTransform(-26.8,-9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgZA1QgJgEgGgIQgFgHgDgLQgCgKAAgNQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAIACAKQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJAAQgSgBgIAMg");
	this.shape_24.setTransform(-38.6,-11.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgIA3IAAheIgjAAIAAgOIBXAAIAAAOIgjAAIAABeg");
	this.shape_25.setTransform(-49.1,-11.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgugzIgBgcIAQAAIACAIQAGgFAHgCQAKgEAJAAQAXAAALAPQALAOAAAbQAAANgDALQgDAJgGAIQgHAHgKAFQgJAEgMAAQgKAAgGgCIgJgDIAAA2IgTADgAgSg/IgJAGIAABDQAKAHANAAQAPAAAIgKQAKgJAAgYQAAgIgCgIQgBgHgDgGQgFgGgFgDQgHgEgHAAQgKAAgHAFg");
	this.shape_26.setTransform(-59.2,-9.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgTA2QgKgEgGgHQgGgIgDgKQgCgMAAgNQAAgdAMgNQANgOAXAAQAOAAAJAEQAJAEAEAHQAFAHACAKQACAKAAALIAAAHIhKAAQgBAJACAHQACAIAFAGQAEAEAGACQAIACAHABQAMgBAIgDIAPgFIAEAMIgIAEIgKAEIgLACIgNABQgMAAgKgDgAgLgoQgGADgDAFQgFAGgBAIIgBALIA3AAQAAgUgHgHQgHgJgMABQgGAAgHACg");
	this.shape_27.setTransform(-70.5,-11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgsA3IAAhsIAyAAQAPgBAKAHQAKAGAAAPQAAAJgFAGQgFAHgIACIAIACIAHAEQADAEACAEQACAGAAAGQAAAIgDAGQgDAGgFADQgFAEgHACQgGABgHABgAgaAoIAdAAQAKAAAHgDQAGgEAAgLQAAgKgGgEQgGgEgMgBIgcAAgAgagHIAdAAQALAAAEgFQAFgFAAgHQAAgJgGgDQgGgDgKgBIgbAAg");
	this.shape_28.setTransform(-81.2,-11.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AAaA3IAAgxIgzAAIAAAxIgSAAIAAhsIASAAIAAAvIAzAAIAAgvIASAAIAABsg");
	this.shape_29.setTransform(-92.7,-11.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAsBPIAAiOIgDAAIhHCOIgfAAIAAidIATAAIAACNIACAAIBHiNIAfAAIAACdg");
	this.shape_30.setTransform(-106.1,-14.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgfArQgMgPAAgbQAAgbAOgPQAOgPAZAAQAKAAAKAEQAJADAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgJALQgJAMAAAVQAAAJABAIQACAHAEAFQAEAGAHADQAGADAIAAQAKAAAHgCIAOgFIADAMQgFADgJADQgKADgMAAQgZAAgMgOg");
	this.shape_31.setTransform(-123.3,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.7,-30,261.5,60);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgzA+QgTgWAAgoQAAgoAWgWQAWgVAkAAQATAAAPAGQAQAFALANIgUASQgHgIgKgEQgKgFgNAAQgWAAgNAQQgMAQAAAcQAAAcAMAOQANAOAWAAIAPAAIAKgCIAAgnIgiAAIAAgXIBCAAIAABPQgMAGgPADQgPACgRAAQgoAAgUgWg");
	this.shape.setTransform(120.3,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgwBSIAAijIAgAAIAACJIBCAAIAAAag");
	this.shape_1.setTransform(107.4,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAXA5IAAhXIgBAAIgeBXIgtAAIAAhxIAfAAIAABXIABAAIAdhXIAuAAIAABxg");
	this.shape_2.setTransform(89.1,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAUA5IgjguIgHAAIAAAuIggAAIAAhxIAgAAIAAAtIAHAAIAigtIAiAAIgsA3IAuA6g");
	this.shape_3.setTransform(77.7,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAXA5IAAhXIgBAAIgeBXIgtAAIAAhxIAfAAIAABXIACAAIAchXIAuAAIAABxg");
	this.shape_4.setTransform(64.6,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AARA5IAAguIgiAAIAAAuIggAAIAAhxIAgAAIAAAtIAiAAIAAgtIAhAAIAABxg");
	this.shape_5.setTransform(52,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgyA5IAAhxIAhAAIAAAnIAbAAQAIAAAIACQAHACAFAFQAHAFACAFQAEAHAAAJQAAAKgEAHQgCAIgHAFQgGAEgHACQgJADgKAAgAgRAiIASAAQARAAAAgQQAAgGgEgFQgFgDgIAAIgSAAg");
	this.shape_6.setTransform(40.5,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgyA5IgHgCIACgZIADABIADAAIAGgBQACgBACgDQACgDABgGIADgOIABgMIABgSIAAgQIAAgNIBYAAIAABwIggAAIAAhZIgbAAIgBASIgCAWQgDAbgIALQgJAMgQAAIgJAAg");
	this.shape_7.setTransform(27.5,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAXA5IAAhXIgBAAIgeBXIgtAAIAAhxIAfAAIAABXIACAAIAchXIAuAAIAABxg");
	this.shape_8.setTransform(15.4,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAmBIIAAgfIhLAAIAAAfIgcAAIAAg2IAMAAQAFgJACgJIAEgUQACgKAAgNIACgcIBYAAIAABZIAQAAIAAA2gAgOgLQgDAQgFANIAoAAIAAhCIgcAAQgBATgDASg");
	this.shape_9.setTransform(2.1,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgcA3QgKgEgHgIQgGgIgDgLQgCgLAAgNQAAgdAOgOQAPgPAdAAQAQAAAKAEQALAEAGAIQAGAIADALQADALAAAMQAAAegOAPQgPAOgdAAQgQAAgLgEgAgSgaQgFAKAAARIAAAOQACAHACAFQADAFAEADQAEADAHAAQAOAAAFgKQAGgKAAgSIgBgOQgBgHgDgFQgCgFgEgDQgFgDgGAAQgOAAgGALg");
	this.shape_10.setTransform(-10.7,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgyA5IgHgCIACgZIADABIAEAAIAFgBQACgBACgDQACgDABgGIADgOIABgMIABgSIAAgQIABgNIBYAAIAABwIghAAIAAhZIgbAAIgBASIgCAWQgDAbgJALQgIAMgQAAIgJAAg");
	this.shape_11.setTransform(-23.9,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgcA3QgLgEgFgIQgHgIgCgLQgDgLAAgNQAAgdAPgOQAOgPAdAAQAQAAALAEQAKAEAGAIQAHAIACALQADALAAAMQAAAegPAPQgOAOgeAAQgPAAgLgEgAgRgaQgGAKAAARIAAAOQACAHACAFQADAFADADQAFADAGAAQAPAAAGgKQAFgKAAgSIgBgOQgBgHgCgFQgDgFgEgDQgFgDgGAAQgOAAgFALg");
	this.shape_12.setTransform(-35.8,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAXA5IgWgtIgDAAIgWAtIgiAAIAig5Igig4IAkAAIAVArIACAAIAWgrIAiAAIghA3IAjA6g");
	this.shape_13.setTransform(-47.9,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgnAsQgNgPAAgdQAAg6A3AAQAPAAAKAEQAKAEAFAIQAGAHACAKQACALAAAMIAAAJIhIAAQAAAMAFAHQAGAKAQAAQAOAAAIgDIAPgGIAGAUIgJAEIgLAEIgOADIgOABQgdAAgNgPgAgIgjQgFADgDAEQgCAFgBAGIAAAFIAnAAQgBgMgEgHQgDgGgKAAQgFAAgFACg");
	this.shape_14.setTransform(-64.9,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAoA5IAAhxIAgAAIAABxgAhHA5IAAhxIAgAAIAAAnIAbAAQAIAAAFACQAIACAFAFQAGAFADAFQADAHAAAJQAAAKgDAHQgDAIgGAFQgGAEgIACQgGADgKAAgAgnAiIASAAQAQAAAAgQQAAgGgEgFQgEgDgIAAIgSAAg");
	this.shape_15.setTransform(-79.2,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgxA5IAAhxIA6AAQARABAKAGQAKAHAAAPQAAAJgFAGQgGAGgIAEQAJACAHAFQAIAHgBAMQAAAIgCAGQgEAGgFAEQgFAEgGACQgIADgHAAgAgSAiIAWAAQAOAAAAgNQAAgHgEgDQgDgDgHgBIgWAAgAgSgLIAVAAQAHAAADgEQACgEAAgEQAAgEgCgDQgDgDgGgBIgWAAg");
	this.shape_16.setTransform(-93.1,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgcA3QgLgEgFgIQgHgIgCgLQgDgLAAgNQAAgdAPgOQAOgPAdAAQAQAAALAEQAKAEAGAIQAHAIACALQADALAAAMQAAAegPAPQgOAOgeAAQgPAAgLgEgAgRgaQgGAKAAARIAAAOQACAHACAFQADAFADADQAFADAGAAQAPAAAGgKQAFgKAAgSIgBgOQgBgHgCgFQgDgFgEgDQgFgDgGAAQgOAAgFALg");
	this.shape_17.setTransform(-105.6,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAiBSIAAhGIhCAAIAABGIghAAIAAijIAhAAIAABFIBCAAIAAhFIAgAAIAACjg");
	this.shape_18.setTransform(-120.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.5,-16.4,261.1,32.8);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bens();
	this.instance.setTransform(-53,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-20,107,40);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hol2();
	this.instance.setTransform(-75,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-214,150,429);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgXAWIAAgrIAvAAIAAArg");
	this.shape.setTransform(83.4,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhJB+QgGgBgFgCIAGggQAGACAHAAQANAAAGgEQAHgEADgFQAFgFAEgLIAIgWIhCinIA1AAIAhByIADAAIAihyIAwAAIhCC0QgHAQgGANQgGANgHAKQgKAJgNAFQgNAFgSAAIgNAAg");
	this.shape_1.setTransform(70.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA9BUIAAiCIgDAAIgmCCIgoAAIgliCIgDAAIAACCIgtAAIAAinIBGAAIAkCCIACAAIAliCIBCAAIAACng");
	this.shape_2.setTransform(49,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAPAGQAPAGAHALQAJAMACAOQAEAPAAATIAAAPIhsAAQAAASAHAKQAJAPAZAAQAVAAALgFIAXgJIAJAeIgNAGIgSAGQgJADgKABIgVACQgtAAgTgWgAgNg1QgHAEgEAHQgDAHgBAJIAAAHIA5AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_3.setTransform(27.5,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhxBUIAAinIAwAAIAACEIAqAAIAAiEIAuAAIAACEIAqAAIAAiEIAxAAIAACng");
	this.shape_4.setTransform(5.1,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAZBUIAAg8QgLAFgLABIgRABQgaAAgQgNQgQgMAAgaIAAg/IAwAAIAAA2QAAAQAGAGQAFAGANAAIANgBIAMgDIAAhOIAwAAIAACng");
	this.shape_5.setTransform(-17.2,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhIB+QgHgBgGgCIAHggQAGACAHAAQAMAAAIgEQAGgEAEgFQAEgFAFgLIAIgWIhEinIA1AAIAiByIADAAIAhhyIAxAAIhDC0QgFAQgHANQgGANgHAKQgKAJgNAFQgNAFgSAAIgMAAg");
	this.shape_6.setTransform(-34.4,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhLBUQgGgBgDgBIACgkIAEAAIAGAAQAEAAAEgBQADgCADgEQADgFACgIIADgVIABgTIACgaIABgZIAAgTICDAAIAACnIgwAAIAAiEIgoAAIgCAbIgDAiQgEAmgNASQgNARgYAAIgNgBg");
	this.shape_7.setTransform(-53.4,4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAdBUIgzhEIgLAAIAABEIgxAAIAAinIAxAAIAABCIALAAIAyhCIAzAAIhCBRIBGBWg");
	this.shape_8.setTransform(-77.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-23.3,180.2,46.7);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhKBUIAAinIAvAAIAAA5IAqAAQANAAALAEQAKADAJAHQAIAHAFAIQAEAKAAAOQAAAPgEALQgFALgJAGQgJAHgMADQgMAEgPAAgAgbAzIAdAAQAZAAAAgYQAAgKgGgFQgHgHgMAAIgdAAg");
	this.shape.setTransform(40.5,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAaBUIAAhDIg0AAIAABDIgvAAIAAinIAvAAIAABCIA0AAIAAhCIAwAAIAACng");
	this.shape_1.setTransform(21.9,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AguBUQgQgGgLgEIAOggQAMAGALAEQAMAEARAAQAIAAAHgCQAHgCAEgDQAEgEABgDIACgIQAAgJgIgFQgHgFgQAAIgYAAIAAgcIAWAAQAIAAAGgCQAGgDADgDQAEgCABgEIACgHQAAgJgIgGQgHgGgLAAQgMAAgLAEQgLAEgGAIIgagZQAMgMARgGQAQgFAYAAQALAAANACQANADAJAFQAKAFAGAIQAGAJAAAMQAAAOgIAJQgIAKgNAGQAOAEAKAIQALAKAAASQAAAagWANQgVANgiAAQgaAAgRgEg");
	this.shape_2.setTransform(4.2,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAjBUIAAiCIgDAAIgsCCIhDAAIAAinIAuAAIAACCIACAAIAsiCIBEAAIAACng");
	this.shape_3.setTransform(-13.3,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABRBUIguhFIgNAAIAABFIgrAAIAAhFIgNAAIguBFIg0AAIA9hWIg6hRIAzAAIAsBDIANAAIAAhDIArAAIAABDIAOAAIAshDIAyAAIg6BRIA9BWg");
	this.shape_4.setTransform(-36,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-23.3,101.7,46.7);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhJB+QgGgBgFgCIAGggQAGACAHAAQANAAAGgEQAHgEADgFQAFgFAEgLIAIgWIhCinIA1AAIAhByIADAAIAihyIAwAAIhCC0QgHAQgGANQgGANgHAKQgKAJgNAFQgNAFgSAAIgNAAg");
	this.shape.setTransform(31,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhxBUIAAinIAwAAIAACEIAqAAIAAiEIAuAAIAACEIAqAAIAAiEIAxAAIAACng");
	this.shape_1.setTransform(9.2,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag1BUQgLgFgGgIQgHgHgCgJQgCgKAAgLQAAgQAFgLQAFgIALgHQAKgGANgCQAPgCARgBIAKAAIANABIAAgIQgBgNgHgIQgJgGgOgBQgPAAgNAEQgOADgKAGIgJgdQAOgIATgEQAUgFATAAQATAAANADQANAEAIAIQAIAIAEAOQADANAAAVIAAAyQAAALADAEQAFADAIAAIAAAgQgHABgLABQgPgBgJgDQgKgFgFgJQgJAJgOAGQgMAFgNAAQgTAAgLgEgAgZAQQgHAGABAKQAAAMADAFQAFAGALABQAHAAAHgDQAIgDAIgGIAAggIgNgBIgJAAQgQAAgFAFg");
	this.shape_2.setTransform(-12.5,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhKBUIAAinIBYAAQAZAAAPAKQAOAKAAAWQAAAOgHAJQgIAIgNAGQAOAEALAIQAKAKAAASQAAALgEAKQgFAIgIAGQgHAHgKADQgKADgLAAgAgcAzIAiAAQAVAAAAgUQAAgJgFgFQgGgGgKABIgiAAgAgcgRIAiAAQAJAAAEgFQAEgGAAgHQAAgGgEgFQgEgEgJAAIgiAAg");
	this.shape_3.setTransform(-30.2,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.7,-23.3,83.4,46.7);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWBUIAAiEIgzAAIAAgjICTAAIAAAjIgzAAIAACEg");
	this.shape.setTransform(49.1,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAOAGQAPAGAJALQAHAMADAOQAEAPAAATIAAAPIhsAAQAAASAHAKQAJAPAZAAQAUAAAMgFIAXgJIAJAeIgNAGIgRAGQgKADgLABIgUACQgtAAgTgWgAgNg1QgHAEgDAHQgEAHgBAJIgBAHIA6AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_1.setTransform(32.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAhBUIAAg5IgWAAIgnA5Ig0AAIAwg+QgRgFgKgMQgKgKAAgWQAAgdASgNQASgOAeAAIBTAAIAACngAgUgbQAAALAGAFQAGAHAKAAIAfAAIAAguIgfAAQgXAAABAXg");
	this.shape_2.setTransform(13.5,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAaBUIAAhDIg0AAIAABDIgvAAIAAinIAvAAIAABCIA0AAIAAhCIAwAAIAACng");
	this.shape_3.setTransform(-4.2,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAPAGQAPAGAHALQAJAMACAOQAEAPAAATIAAAPIhsAAQAAASAHAKQAJAPAZAAQAUAAAMgFIAXgJIAJAeIgNAGIgSAGQgJADgKABIgVACQgtAAgTgWgAgNg1QgHAEgEAHQgDAHgBAJIAAAHIA5AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_4.setTransform(-22.6,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AA9BUIAAiCIgCAAIgnCCIgoAAIgliCIgEAAIAACCIgtAAIAAinIBHAAIAjCCIADAAIAmiCIBBAAIAACng");
	this.shape_5.setTransform(-44.2,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-23.3,117.7,46.7);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAAAPIgeAtIgOgLIAhgqIgzgOIAGgRIAyARIgCg0IAQAAIgBA0IAygRIAFARIgyAOIAiAqIgPALg");
	this.shape.setTransform(87.7,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag3BWIAAh3IgGgwIAtAAIACASQAHgIAHgEQAPgKASAAQAJAAAIACIAMADIgMAmQgIgFgNAAQgOAAgMAHQgFADgFAHIAAB0g");
	this.shape_1.setTransform(73.8,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAPAGQAPAGAHALQAJAMADAOQADAPAAATIAAAPIhsAAQAAASAHAKQAJAPAZAAQAVAAALgFIAYgJIAIAeIgNAGIgSAGQgJADgKABIgVACQgtAAgTgWgAgNg1QgHAEgEAHQgEAHAAAJIAAAHIA5AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_2.setTransform(57.2,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNBmQgLgEgFgIQgGgIgDgLQgCgKAAgOIAAhNIgdAAIAAgfIAdgEIAAggIAugIIAAAoIA5AAIAAAjIg5AAIAABDIAAANQAAAFACAEQADAFAEADQAFACAIAAQAKAAAIgCIAQgGIAIAgQgaANggAAQgOAAgLgEg");
	this.shape_3.setTransform(40.7,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag3BWIAAh3IgGgwIAtAAIACASQAHgIAHgEQAPgKASAAQAJAAAIACIAMADIgMAmQgIgFgNAAQgOAAgMAHQgFADgFAHIAAB0g");
	this.shape_4.setTransform(27.2,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAPAGQAPAGAHALQAJAMADAOQADAPAAATIAAAPIhsAAQAAASAHAKQAJAPAaAAQATAAAMgFIAYgJIAIAeIgNAGIgSAGQgJADgLABIgUACQgtAAgTgWgAgNg1QgHAEgEAHQgEAHAAAJIAAAHIA5AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_5.setTransform(10.6,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfBUIg4inIAzAAIAkCGIACAAIAliGIAxAAIg6Cng");
	this.shape_6.setTransform(-7.3,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAdBWIAAhmIAAgMIgDgKQgCgFgFgDQgFgCgHAAQgKAAgIADQgIADgHAEIAAB8IgvAAIAAh6IgEgtIAsAAIACAMQAJgGAKgEQARgGARAAQAQAAAMAEQAKAEAHAIQAGAIACAKQACAMABANIAABwg");
	this.shape_7.setTransform(-25.5,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgXB5IAAjxIAvAAIAADxg");
	this.shape_8.setTransform(-39.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhMBdQgcghAAg8QAAg9AggfQAgggA3AAQAbAAAYAIQAXAJAQATIgdAaQgLgLgOgHQgPgHgUAAQgiAAgSAYQgSAXAAArQAAAqASAVQATAVAhAAIAWgBIAQgEIAAg5IgzAAIAAgjIBiAAIAAB3QgRAIgXAEQgWAEgaAAQg8AAgdggg");
	this.shape_9.setTransform(-65.8,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhJB5IAAjxIAxAAIAADLIBiAAIAAAmg");
	this.shape_10.setTransform(-85.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-23.3,195.1,46.7);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAhBUIAAg5IgWAAIgnA5IgzAAIAvg+QgQgFgLgMQgKgKAAgWQAAgdASgNQASgOAeAAIBUAAIAACngAgVgbQABALAGAFQAGAHAKAAIAfAAIAAguIgfAAQgWAAgBAXg");
	this.shape.setTransform(81.5,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAiBUIAAiCIgCAAIgsCCIhEAAIAAinIAuAAIAACCIADAAIAsiCIBDAAIAACng");
	this.shape_1.setTransform(63.2,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag7BUIAAinIB3AAIAAAjIhHAAIAACEg");
	this.shape_2.setTransform(47.6,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgqBSQgQgHgJgLQgJgMgEgQQgEgQAAgUQAAgsAWgVQAVgWAsAAQAYAAAPAGQAQAGAJAMQAKAMADAQQAFAQAAAUQAAAsgWAVQgWAWgsAAQgXAAgQgGgAgbgoQgIAPAAAbQAAALABAKQACAJADAIQAEAIAGADQAGAFAKAAQAWAAAIgPQAJgPAAgbQAAgLgCgKQgBgJgEgIQgDgHgHgEQgGgFgKAAQgVAAgJAPg");
	this.shape_3.setTransform(30.1,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhLBUQgGgBgDgBIACgkIAEAAIAGAAQAEAAAEgBQADgCADgEQADgFACgIIADgVIABgTIACgaIABgZIAAgTICDAAIAACnIgwAAIAAiEIgoAAIgCAbIgDAiQgEAmgNASQgNARgYAAIgNgBg");
	this.shape_4.setTransform(10.1,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgqBSQgQgHgJgLQgJgMgEgQQgEgQAAgUQAAgsAWgVQAVgWAsAAQAYAAAPAGQAQAGAJAMQAKAMADAQQAFAQAAAUQAAAsgWAVQgWAWgsAAQgXAAgQgGgAgbgoQgIAPAAAbQAAALABAKQACAJADAIQAEAIAGADQAGAFAKAAQAWAAAIgPQAJgPAAgbQAAgLgCgKQgBgJgEgIQgDgHgHgEQgGgFgKAAQgVAAgJAPg");
	this.shape_5.setTransform(-8.1,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAaBUIAAhDIg0AAIAABDIgvAAIAAinIAvAAIAABCIA0AAIAAhCIAwAAIAACng");
	this.shape_6.setTransform(-27.1,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAjBUIgihCIgEAAIgiBCIgyAAIAyhVIgxhSIA0AAIAgA/IAEAAIAgg/IA0AAIgyBRIA0BWg");
	this.shape_7.setTransform(-45.1,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAOAGQAPAGAJALQAHAMADAOQAEAPAAATIAAAPIhsAAQAAASAHAKQAJAPAZAAQAUAAAMgFIAXgJIAJAeIgNAGIgRAGQgKADgLABIgUACQgtAAgTgWgAgNg1QgHAEgDAHQgEAHgBAJIgBAHIA6AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_8.setTransform(-62.9,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgXB5IAAjLIhIAAIAAgmIC+AAIAAAmIhHAAIAADLg");
	this.shape_9.setTransform(-81.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-23.3,187.1,46.7);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D4D2D2"],[0,1],-83.8,-106.4,0,-83.8,-106.4,371.7).s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeA2QgGgCgFgFQgDgFgCgGQgCgFAAgHQAAgLAEgGQADgGAGgCQAHgEAIgCQAJgBAKAAIAKABIALAAIAAgGIgBgNQgBgGgDgDQgDgDgFgCQgFgCgGAAQgKAAgJADQgKADgFACIgFgMQAIgEAMgDQALgDAMAAQAKAAAIACQAHACAFAGQAFAGACAIQABAIAAANIAAAmQAAAIADADQACADAGABIAAANIgDAAIgEAAQgIAAgEgDQgFgDgCgGQgGAFgKAFQgHAEgNAAQgKAAgHgDgAgXAJQgGAEAAAJQAAALAFAFQAFAFAMAAQAHAAAGgEQAIgDAGgFIAAgaIgMgBIgLgBQgOABgGAFg");
	this.shape.setTransform(62.2,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwA2IAAhdIgDAAIgkBdIgSAAIgkhdIgCAAIAABdIgRAAIAAhrIAdAAIAjBcIABAAIAlhcIAbAAIAABrg");
	this.shape_1.setTransform(48.9,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBSIgEgBIACgPIADABIAFAAQAIAAAFgDQAFgDADgEIADgFIADgHIADgIIACgIIgshtIAVAAIAdBVIACAAIAehVIATAAIgrBzIgHATQgCAIgFAHQgGAGgHADQgHADgMABIgGAAg");
	this.shape_2.setTransform(36.1,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIASAAIAABdIAqAAIAAhdIAQAAIAABdIApAAIAAhdIASAAIAABrg");
	this.shape_3.setTransform(23,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIASAAIAAAoIAhAAQAIAAAHACQAHACAFAEQAFAFADAEQADAGAAAJQAAASgLAIQgKAKgSgBgAgaAoIAfAAQAJABAGgGQAGgFAAgLQAAgJgGgGQgGgEgJAAIgfAAg");
	this.shape_4.setTransform(5.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaA2IAAgwIgzAAIAAAwIgSAAIAAhrIASAAIAAAuIAzAAIAAguIASAAIAABrg");
	this.shape_5.setTransform(-6.4,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgHQgGgIgDgKQgCgMAAgNQAAgcAMgOQANgOAXAAQAOAAAJAEQAIAEAFAHQAFAHACAKQACAKAAALIAAAHIhKAAQgBAKACAGQADAIAEAGQAEAEAHACQAGADAIAAQAMAAAIgEIAPgFIAEAMIgIAEIgKAEIgLACIgNABQgMAAgKgDgAgLgoQgGADgDAFQgEAGgCAIIgBALIA3AAQAAgUgHgHQgHgJgMAAQgGAAgHADg");
	this.shape_6.setTransform(-17.5,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIAyAAQAPAAAKAGQAKAGAAAPQAAAKgFAGQgFAGgIACIAIACIAHAEQADAEACAEQACAGAAAGQAAAIgDAGQgDAFgFAEQgFAEgHACQgGABgHAAgAgaAoIAdAAQAKAAAHgEQAGgDAAgLQAAgKgGgEQgGgFgMAAIgcAAgAgagHIAdAAQALAAAEgFQAFgFAAgHQAAgJgGgDQgGgEgKAAIgbAAg");
	this.shape_7.setTransform(-28.2,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_8.setTransform(-39.8,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgugzIgBgcIAQAAIACAIQAGgFAHgCQAKgEAJAAQAXAAALAPQALAOAAAbQAAANgDALQgDAJgGAIQgHAHgKAFQgJAEgMAAQgKAAgGgCIgJgDIAAA2IgTADgAgSg/IgJAGIAABDQAKAHANAAQAPAAAIgKQAKgJAAgYQAAgIgCgIQgBgHgDgGQgFgGgFgDQgHgEgHAAQgKAAgHAFg");
	this.shape_9.setTransform(-51.1,5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBSIgFgBIACgPIAFABIADAAQAKAAAEgDQAFgDADgEIADgFIADgHIADgIIADgIIgshtIATAAIAfBVIACAAIAdhVIASAAIgpBzIgIATQgCAIgFAHQgGAGgHADQgIADgMABIgFAAg");
	this.shape_10.setTransform(-62,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-15.5,138.6,31);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBRIAAhdIgCAAIgwBdIgbAAIAAhrIASAAIAABcIACAAIAvhcIAcAAIAABrgAgYg0QgIgKgBgSIAQAAQAAALAEAIQAFAGAJAAQAMAAAEgGQAFgIAAgLIAPAAQAAASgJAKQgJAKgSAAQgQAAgJgKg");
	this.shape.setTransform(45.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA2IAAhdIgDAAIgvBdIgcAAIAAhrIASAAIAABcIACAAIAwhcIAbAAIAABrg");
	this.shape_1.setTransform(33.5,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA2IgqgwIgLAAIAAAwIgSAAIAAhrIASAAIAAAvIALAAIApgvIAUAAIguA1IAxA2g");
	this.shape_2.setTransform(22.9,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA2QgJgCgGgEIAGgMIAOAFQAHACAMAAQAdAAAAgUQAAgJgHgFQgHgEgLAAIgSAAIAAgLIASAAQALAAAFgGQAGgEAAgIQAAgJgHgEQgHgGgIAAQgKAAgHADQgHADgGAFIgKgLQAGgHALgCQAKgEANAAQARAAALAHQAMAHAAAPQAAAKgFAGQgFAGgJAEIAJABIAHAEIAFAIQACAGAAAGQAAAQgOAJQgNAIgUAAQgPAAgKgDg");
	this.shape_3.setTransform(11.8,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeA2IAAhdIgCAAIgwBdIgbAAIAAhrIASAAIAABcIACAAIAvhcIAcAAIAABrg");
	this.shape_4.setTransform(1.2,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaA2IAAgwIgzAAIAAAwIgSAAIAAhrIASAAIAAAuIAzAAIAAguIASAAIAABrg");
	this.shape_5.setTransform(-10.7,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_6.setTransform(-27.1,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_7.setTransform(-37.3,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeA2IgOgFIAFgNIAMAEQAHADAJAAIAHAAIAFgBQANgDAGgJQAGgJABgPIgxAAIAAgMIAxAAQgCgTgJgJQgJgIgNgBQgJAAgGADQgHAEgFAEIgKgLQANgNAaAAQAWAAANANQAOAOAAAdQAAAbgMAPQgMAPgbAAQgOAAgKgDg");
	this.shape_8.setTransform(-46.8,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.7,-15.5,107.5,31);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIAyAAQAPAAAKAGQAKAGAAAPQAAAKgFAGQgFAGgIACIAIACIAHAEQADAEACAEQACAGAAAGQAAAIgDAGQgDAFgFAEQgFAEgHACQgGABgHAAgAgaAoIAdAAQAKAAAHgEQAGgDAAgLQAAgKgGgEQgGgFgMAAIgcAAgAgagHIAdAAQALAAAEgFQAFgFAAgHQAAgJgGgDQgGgEgKAAIgbAAg");
	this.shape.setTransform(92.4,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_1.setTransform(80.8,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_2.setTransform(70.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZA2IgqgwIgLAAIAAAwIgSAAIAAhrIASAAIAAAvIALAAIApgvIAUAAIguA1IAxA2g");
	this.shape_3.setTransform(61.7,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBSIgEgBIABgPIAEABIAFAAQAJAAAEgDQAFgDADgEIADgFIADgHIADgIIADgIIgshtIAUAAIAdBVIADAAIAdhVIASAAIgqBzIgHATQgCAIgFAHQgFAGgIADQgHADgMABIgGAAg");
	this.shape_4.setTransform(50.7,5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBGIAAgfIhVAAIAAAfIgQAAIAAguIAOAAIAGgSIAEgUQACgLAAgOIACgeIBJAAIAABdIAQAAIAAAugAgRgMQgDATgHARIA0AAIAAhPIgnAAQgBAXgCAUg");
	this.shape_5.setTransform(39.7,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_6.setTransform(28.3,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtgzIgCgcIAPAAIACAIQAHgFAIgCQAIgEAJAAQAYAAALAPQALAOAAAbQAAANgDALQgDAJgGAIQgGAHgLAFQgKAEgMAAQgIAAgHgCIgJgDIAAA2IgSADgAgSg/IgJAGIAABDQAKAHAMAAQAPAAAJgKQAKgJAAgYQAAgIgCgIQgBgHgEgGQgDgGgHgDQgGgEgGAAQgKAAgIAFg");
	this.shape_7.setTransform(17,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaA2IAAhdIgyAAIAABdIgTAAIAAhrIBXAAIAABrg");
	this.shape_8.setTransform(5.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfA2IgegwIgBAAIgeAwIgUAAIAjg2Igig1IAUAAIAdAuIABAAIAdguIATAAIgiA1IAkA2g");
	this.shape_9.setTransform(-10.4,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArA2IAAhrIATAAIAABrgAg9A2IAAhrIASAAIAAAoIAhAAQAIAAAFACQAGACAFAEQAFAFADAEQADAGAAAJQAAASgKAIQgLAKgQgBgAgrAoIAeAAQAKABAEgGQAGgFAAgLQAAgJgGgGQgEgEgKAAIgeAAg");
	this.shape_10.setTransform(-23.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvA2IAAhdIgCAAIgkBdIgRAAIgkhdIgCAAIAABdIgSAAIAAhrIAeAAIAiBcIABAAIAkhcIAcAAIAABrg");
	this.shape_11.setTransform(-38.3,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfA2IAAhdIgCAAIgxBdIgbAAIAAhrIASAAIAABcIABAAIAxhcIAbAAIAABrg");
	this.shape_12.setTransform(-52.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXBQQgJgDgGgJQgGgJgDgNQgDgPAAgTQAAgRACgQQADgPAGgLQAGgLAKgIQAKgHAPgDIAMgCIAKgCIAIgBIAHgCIAEAPIgOAEIgTADQgLADgIAEQgJAEgFAHQgFAGgDAKQgDAJgBANQAGgLALgGQAMgEALAAQANAAAJADQAJAFAFAHQAFAHADAIQACALAAANQAAAdgNAOQgNANgaAAQgNAAgJgEgAgYgBQgHAJAAAVQAAAIABAIQACAHADAGQAEAFAGADQAGAEAIAAQASAAAIgLQAHgLAAgVQAAgJgBgHQgBgIgEgDQgDgGgGgDQgGgEgJAAQgSAAgIAMg");
	this.shape_13.setTransform(-64.2,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAA2QgJgEgFgGQgGgIgCgJQgDgKAAgLIgZAAIAAAwIgSAAIAAhrIASAAIAAAuIAZAAQADgxAtAAQANAAAJAEQAJAEAFAHQAGAHACALQACALAAAMQAAAdgMAOQgNAOgaAAQgMAAgGgDgAAAgfQgHAMAAAUIABARQABAHADAGQACAFAFAEQAFADAIAAQATAAAHgLQAHgLAAgVQAAgJgBgHQgBgIgDgGQgEgGgFgDQgFgDgJgBQgSAAgFAMg");
	this.shape_14.setTransform(-77.8,2.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsA3IgGgCIACgOIAHABQAFAAADgGQAEgFACgLQADgMABgQIABgsIBJAAIAABsIgSAAIAAheIgnAAIgCAoQgBAQgEAMQgDANgGAHQgGAHgKAAIgGAAg");
	this.shape_15.setTransform(-92.4,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-15.5,199.1,31);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIASAAIAAAoIAhAAQAIAAAHACQAHACAFAEQAFAFADAEQADAGAAAJQAAASgLAIQgKAKgSgBgAgaAoIAfAAQAJABAGgGQAGgFAAgLQAAgJgGgGQgGgEgJAAIgfAAg");
	this.shape.setTransform(114.3,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_1.setTransform(103.8,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQAKAAAKAEQAJADAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgJALQgJAMAAAVQAAAJABAIQACAHAEAFQAEAGAHADQAGADAIAAQAJAAAIgCIAOgFIADAMQgFADgJADQgLADgLAAQgZAAgMgOg");
	this.shape_2.setTransform(94.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgHQgGgIgDgKQgCgMAAgNQAAgcAMgOQANgOAYAAQANAAAIAEQAKAEAEAHQAFAHACAKQACAKAAALIAAAHIhLAAQABAKABAGQADAIAEAGQAEAEAGACQAHADAHAAQAMAAAJgEIAPgFIAEAMIgHAEIgLAEIgMACIgMABQgNAAgJgDgAgLgoQgGADgDAFQgEAGgCAIIgCALIA4AAQAAgUgHgHQgHgJgLAAQgHAAgHADg");
	this.shape_3.setTransform(84,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA6A2IgmgwIgMAAIAAAwIgPAAIAAgwIgMAAIgnAwIgVAAIAtg2Igrg1IAVAAIAlAvIAMAAIAAgvIAPAAIAAAvIAMAAIAlgvIAUAAIgqA1IAtA2g");
	this.shape_4.setTransform(71.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgHQgGgIgCgKQgDgMAAgNQAAgcANgOQAMgOAYAAQANAAAIAEQAKAEAEAHQAFAHACAKQACAKAAALIAAAHIhLAAQAAAKACAGQACAIAEAGQAFAEAGACQAIADAGAAQAMAAAJgEIAOgFIAFAMIgHAEIgKAEIgNACIgMABQgNAAgJgDgAgLgoQgGADgEAFQgDAGgCAIIgCALIA4AAQAAgUgHgHQgHgJgLAAQgIAAgGADg");
	this.shape_5.setTransform(57.7,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIAyAAQAPAAAKAGQAKAGAAAPQAAAKgFAGQgFAGgIACIAIACIAHAEQADAEACAEQACAGAAAGQAAAIgDAGQgDAFgFAEQgFAEgHACQgGABgHAAgAgaAoIAdAAQAKAAAHgEQAGgDAAgLQAAgKgGgEQgGgFgMAAIgcAAgAgagHIAdAAQALAAAEgFQAFgFAAgHQAAgJgGgDQgGgEgKAAIgbAAg");
	this.shape_6.setTransform(47,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQAKAAAJAEQAKADAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgJALQgKAMABAVQgBAJACAIQACAHAEAFQAEAGAHADQAGADAIAAQAJAAAIgCIAOgFIADAMQgEADgKADQgLADgLAAQgZAAgMgOg");
	this.shape_7.setTransform(36.6,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeA2IAAgoIgWAAIgiAoIgVAAIAmgqQgOAAgJgJQgJgFAAgQQAAgSALgIQAKgKASABIAyAAIAABrgAgQgiQgGAFAAALQAAAKAGAFQAGADAKAAIAeAAIAAgoIgeAAQgKAAgGAGg");
	this.shape_8.setTransform(20.5,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeA2QgGgCgFgFQgDgFgCgGQgCgFAAgHQAAgLAEgGQADgGAGgCQAHgEAIgCQAJgBAKAAIAKABIALAAIAAgGIgBgNQgBgGgDgDQgDgDgFgCQgFgCgGAAQgKAAgJADQgKADgFACIgFgMQAIgEAMgDQALgDAMAAQAKAAAIACQAHACAFAGQAFAGACAIQABAIAAANIAAAmQAAAIADADQACADAGABIAAANIgDAAIgEAAQgIAAgEgDQgFgDgCgGQgGAFgKAFQgHAEgNAAQgKAAgHgDgAgXAJQgGAEAAAJQAAALAFAFQAFAFAMAAQAHAAAGgEQAIgDAGgFIAAgaIgMgBIgLgBQgOABgGAFg");
	this.shape_9.setTransform(10.3,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaA2IAAgwIgyAAIAAAwIgTAAIAAhrIATAAIAAAuIAyAAIAAguIASAAIAABrg");
	this.shape_10.setTransform(-0.9,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIASAAIAAAoIAhAAQAIAAAHACQAHACAFAEQAFAFADAEQADAGAAAJQAAASgLAIQgKAKgSgBgAgaAoIAfAAQAJABAGgGQAGgFAAgLQAAgJgGgGQgGgEgJAAIgfAAg");
	this.shape_11.setTransform(-11.6,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsA3IgGgCIACgOIAHABQAFAAADgGQAEgFACgLQADgMABgQIABgsIBJAAIAABsIgSAAIAAheIgnAAIgCAoQgBAQgEAMQgDANgGAHQgGAHgKAAIgGAAg");
	this.shape_12.setTransform(-23.8,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgHQgGgIgDgKQgCgMAAgNQAAgcAMgOQANgOAYAAQANAAAIAEQAKAEAEAHQAFAHACAKQACAKAAALIAAAHIhLAAQABAKABAGQADAIAEAGQAEAEAGACQAIADAHAAQAMAAAIgEIAPgFIAEAMIgIAEIgKAEIgMACIgMABQgNAAgJgDgAgLgoQgGADgDAFQgFAGgBAIIgCALIA4AAQAAgUgHgHQgHgJgLAAQgHAAgHADg");
	this.shape_13.setTransform(-34,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_14.setTransform(-43.9,2.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfA2IAAhdIgCAAIgxBdIgbAAIAAhrIASAAIAABcIABAAIAxhcIAbAAIAABrg");
	this.shape_15.setTransform(-54.6,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsA3IgGgCIACgOIAHABQAFAAADgGQAEgFACgLQADgMABgQIABgsIBJAAIAABsIgSAAIAAheIgnAAIgCAoQgBAQgEAMQgDANgGAHQgGAHgKAAIgGAAg");
	this.shape_16.setTransform(-67.1,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AArBGIAAgfIhVAAIAAAfIgQAAIAAguIAOAAIAGgSIAEgUQACgLAAgOIACgeIBJAAIAABdIAQAAIAAAugAgRgMQgDATgHARIA0AAIAAhPIgnAAQgBAXgCAUg");
	this.shape_17.setTransform(-78.1,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_18.setTransform(-94.5,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_19.setTransform(-104.8,2.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeA2IgOgFIAFgNIAMAEQAHADAJAAIAHAAIAFgBQANgDAGgJQAGgJABgPIgxAAIAAgMIAxAAQgCgTgJgJQgJgIgNgBQgJAAgGADQgHAEgFAEIgKgLQANgNAaAAQAWAAANANQAOAOAAAdQAAAbgMAPQgMAPgbAAQgOAAgKgDg");
	this.shape_20.setTransform(-114.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,-15.5,242.4,31);


(lib.Symbol11copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kitty();
	this.instance.setTransform(-245,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-100,490,200);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)","rgba(0,0,0,0)","#000000"],[0,0.239,0.737,1],0,101,0,-100.9).s().p("Egs/APnIAA/NMBZ/AAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.food();
	this.instance.setTransform(-288,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-100,576,200);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.komp();
	this.instance.setTransform(-100,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#206309","#000000"],[0,1],0,0,0,0,0,252.4).s().p("A7mbnQrdrcAAwLQAAwKLdrcQLcrdQKAAQQLAALcLdQLdLcAAQKQAAQLrdLcQrcLcwLABQwKgBrcrcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-250,500,500);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAuIAAgnIgpAAIAAgNIApAAIAAgnIAOAAIAAAnIAoAAIAAANIgoAAIAAAng");
	this.shape.setTransform(13.8,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAuIAAgnIgoAAIAAgNIAoAAIAAgnIAOAAIAAAnIApAAIAAANIgpAAIAAAng");
	this.shape_1.setTransform(0.8,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAzBOIgRgtIhEAAIgQAtIgUAAIA6icIAZAAIA6CcgAgcAQIA4AAIgchPIgBAAg");
	this.shape_2.setTransform(-12.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-15.5,44.4,31);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfA2IAAhdIgDAAIgvBdIgcAAIAAhrIASAAIAABcIACAAIAvhcIAcAAIAABrg");
	this.shape.setTransform(100.9,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_1.setTransform(90.1,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQALAAAJAEQAJADAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgKALQgIAMgBAVQAAAJACAIQACAHAEAFQAEAGAHADQAGADAIAAQAJAAAIgCIAOgFIADAMQgEADgLADQgJADgMAAQgZAAgMgOg");
	this.shape_2.setTransform(80.9,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_3.setTransform(69.9,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaA2IAAgwIgyAAIAAAwIgTAAIAAhrIATAAIAAAuIAyAAIAAguIASAAIAABrg");
	this.shape_4.setTransform(58.3,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIAyAAQAPAAAKAGQAKAGAAAPQAAAKgFAGQgFAGgIACIAIACIAHAEQADAEACAEQACAGAAAGQAAAIgDAGQgDAFgFAEQgFAEgHACQgGABgHAAgAgaAoIAdAAQAKAAAHgEQAGgDAAgLQAAgKgGgEQgGgFgMAAIgcAAgAgagHIAdAAQALAAAEgFQAFgFAAgHQAAgJgGgDQgGgEgKAAIgbAAg");
	this.shape_5.setTransform(47.4,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeA2IAAhdIgCAAIgvBdIgcAAIAAhrIASAAIAABcIACAAIAvhcIAcAAIAABrg");
	this.shape_6.setTransform(35.6,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_7.setTransform(24.8,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA2IgqgwIgLAAIAAAwIgSAAIAAhrIASAAIAAAvIALAAIApgvIAUAAIguA1IAxA2g");
	this.shape_8.setTransform(15.9,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgHQgGgIgDgKQgCgMAAgNQAAgcAMgOQANgOAXAAQAOAAAJAEQAIAEAFAHQAFAHACAKQACAKAAALIAAAHIhKAAQgBAKACAGQADAIAEAGQAEAEAHACQAGADAIAAQAMAAAIgEIAPgFIAEAMIgIAEIgKAEIgLACIgNABQgMAAgKgDgAgLgoQgGADgDAFQgEAGgCAIIgBALIA3AAQAAgUgHgHQgHgJgMAAQgGAAgHADg");
	this.shape_9.setTransform(4.5,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA2QgFACgGABIgNABQgUAAgKgOQgKgOAAgcQgBgZALgQQALgQAWAAIAKABQAGABAFADIAAg4IAQgCIAAA6QAGgDAHgBIAMgBQAUAAAKAOQAKAPAAAaQABAagMAQQgKAQgWAAIgKgBIgMgDIAAA1IgQADgAAIglIAABNIAKAEIAJABQAMAAAIgLQAIgKAAgYQAAgIgCgHQgBgIgDgGQgDgGgFgDQgGgDgIgBQgKABgJAEgAglgnQgGACgDAGQgEAGgCAIQgCAJAAAKQAAAIABAJQACAHADAGQADAFAFAEQAGADAIABIAJgBIAJgEIAAhNIgJgEIgJgBQgGABgFACg");
	this.shape_10.setTransform(-9,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA2QgFACgGABIgNABQgUAAgKgOQgKgOAAgcQgBgZALgQQALgQAWAAIAKABQAGABAFADIAAg4IAQgCIAAA6QAHgDAGgBIAMgBQAUAAAKAOQAKAPAAAaQAAAagLAQQgKAQgVAAIgLgBIgMgDIAAA1IgQADgAAIglIAABNIAKAEIAJABQAMAAAIgLQAIgKAAgYQAAgIgCgHQgBgIgDgGQgDgGgFgDQgGgDgIgBQgKABgJAEgAglgnQgFACgEAGQgEAGgCAIQgCAJAAAKQAAAIABAJQACAHADAGQADAFAGAEQAFADAHABIAKgBIAJgEIAAhNIgJgEIgJgBQgGABgFACg");
	this.shape_11.setTransform(-25.1,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeA2IgOgFIAFgNIAMAEQAHADAJAAIAHAAIAFgBQANgDAGgJQAGgJABgPIgxAAIAAgMIAxAAQgCgTgJgJQgJgIgNgBQgJAAgGADQgHAEgFAEIgKgLQANgNAaAAQAWAAANANQAOAOAAAdQAAAbgMAPQgMAPgbAAQgOAAgKgDg");
	this.shape_12.setTransform(-38.4,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_13.setTransform(-48.9,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIBHAAIAAAOIg1AAIAABdg");
	this.shape_14.setTransform(-58,2.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgugzIgBgcIAQAAIABAIQAIgFAHgCQAIgEAKAAQAXAAALAPQALAOAAAbQAAANgDALQgDAJgGAIQgHAHgJAFQgLAEgMAAQgJAAgGgCIgJgDIAAA2IgTADgAgSg/IgJAGIAABDQAKAHANAAQAOAAAKgKQAJgJAAgYQAAgIgBgIQgCgHgEgGQgEgGgFgDQgHgEgHAAQgKAAgHAFg");
	this.shape_15.setTransform(-68.4,5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgGgHQgGgIgDgKQgCgMAAgNQAAgcAMgOQANgOAYAAQANAAAIAEQAKAEAEAHQAFAHACAKQACAKAAALIAAAHIhLAAQABAKABAGQADAIADAGQAFAEAGACQAHADAHAAQAMAAAJgEIAPgFIAEAMIgHAEIgLAEIgMACIgMABQgNAAgJgDgAgLgoQgGADgDAFQgEAGgCAIIgCALIA4AAQAAgUgHgHQgHgJgLAAQgHAAgHADg");
	this.shape_16.setTransform(-79.8,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaA2IAAgwIgzAAIAAAwIgSAAIAAhrIASAAIAAAuIAzAAIAAguIASAAIAABrg");
	this.shape_17.setTransform(-91,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA2IgOgFIAFgNIAMAEQAHADAJAAIAHAAIAFgBQANgDAGgJQAGgJABgPIgxAAIAAgMIAxAAQgCgTgJgJQgJgIgNgBQgJAAgGADQgHAEgFAEIgKgLQANgNAaAAQAWAAANANQAOAOAAAdQAAAbgMAPQgMAPgbAAQgOAAgKgDg");
	this.shape_18.setTransform(-102,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-15.5,217.9,31);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQALAAAIAEQAKADAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgKALQgIAMgBAVQABAJABAIQACAHAEAFQAEAGAHADQAGADAIAAQAJAAAIgCIANgFIAFAMQgFADgLADQgKADgKAAQgaAAgMgOg");
	this.shape.setTransform(82,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQAKAAAJAEQAKADAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgJALQgKAMABAVQgBAJACAIQACAHAEAFQAEAGAHADQAGADAIAAQAKAAAHgCIANgFIAFAMQgGADgJADQgLADgKAAQgaAAgMgOg");
	this.shape_1.setTransform(72.7,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA2QgGgCgFgFQgDgFgCgGQgCgFAAgHQAAgLAEgGQADgGAGgCQAHgEAIgCQAJgBAKAAIAKABIALAAIAAgGIgBgNQgBgGgDgDQgDgDgFgCQgFgCgGAAQgKAAgJADQgKADgFACIgFgMQAIgEAMgDQALgDAMAAQAKAAAIACQAHACAFAGQAFAGACAIQABAIAAANIAAAmQAAAIADADQACADAGABIAAANIgDAAIgEAAQgIAAgEgDQgFgDgCgGQgGAFgKAFQgHAEgNAAQgKAAgHgDgAgXAJQgGAEAAAJQAAALAFAFQAFAFAMAAQAHAAAGgEQAIgDAGgFIAAgaIgMgBIgLgBQgOABgGAFg");
	this.shape_2.setTransform(62.4,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA3IgGgCIACgOIAHABQAFAAADgGQAEgFACgLQADgMABgQIABgsIBJAAIAABsIgSAAIAAheIgnAAIgCAoQgBAQgEAMQgDANgGAHQgGAHgKAAIgGAAg");
	this.shape_3.setTransform(50.5,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZA2IgqgwIgLAAIAAAwIgSAAIAAhrIASAAIAAAvIALAAIApgvIAUAAIguA1IAxA2g");
	this.shape_4.setTransform(41.4,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBRIAAhdIgBAAIgxBdIgbAAIAAhrIASAAIAABcIABAAIAwhcIAcAAIAABrgAgYg0QgIgKAAgSIAPAAQAAALAEAIQAFAGAKAAQALAAAEgGQAEgIABgLIAPAAQAAASgJAKQgIAKgSAAQgSAAgIgKg");
	this.shape_5.setTransform(24.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfA2IAAhdIgDAAIgvBdIgcAAIAAhrIASAAIAABcIACAAIAvhcIAcAAIAABrg");
	this.shape_6.setTransform(12.3,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA2IgqgwIgLAAIAAAwIgSAAIAAhrIASAAIAAAvIALAAIApgvIAUAAIguA1IAxA2g");
	this.shape_7.setTransform(1.6,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_8.setTransform(-10.2,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfArQgMgPAAgbQAAgcAOgOQAOgPAZAAQALAAAIAEQAKADAFAGIgLAKQgEgEgGgDQgGgCgHAAQgQAAgKALQgIAMgBAVQABAJABAIQACAHAEAFQAEAGAHADQAGADAIAAQAJAAAIgCIANgFIAFAMQgFADgLADQgKADgKAAQgaAAgMgOg");
	this.shape_9.setTransform(-20.1,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArA2IAAhrIATAAIAABrgAg9A2IAAhrIASAAIAAAoIAhAAQAIAAAFACQAGACAFAEQAFAFADAEQADAGAAAJQAAASgKAIQgLAKgQgBgAgrAoIAeAAQAKABAEgGQAGgFAAgLQAAgJgGgGQgEgEgKAAIgeAAg");
	this.shape_10.setTransform(-32.8,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsA2IAAhrIAyAAQAPAAAKAGQAKAGAAAPQAAAKgFAGQgFAGgIACIAIACIAHAEQADAEACAEQACAGAAAGQAAAIgDAGQgDAFgFAEQgFAEgHACQgGABgHAAgAgaAoIAdAAQAKAAAHgEQAGgDAAgLQAAgKgGgEQgGgFgMAAIgcAAgAgagHIAdAAQALAAAEgFQAFgFAAgHQAAgJgGgDQgGgEgKAAIgbAAg");
	this.shape_11.setTransform(-45.4,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZA1QgJgEgGgHQgFgIgDgKQgCgMAAgMQAAgcANgOQANgOAaAAQAOAAAJAEQAKAEAFAHQAGAHACALQADALAAAMQAAAdgNAOQgOAOgZAAQgOAAgKgEgAgYgfQgHAMAAAUIABARQABAHAEAGQADAFAGADQAGAEAJAAQASAAAIgMQAHgKAAgVQAAgJgBgHQgBgIgEgGQgDgGgGgDQgGgDgJgBQgSAAgIAMg");
	this.shape_12.setTransform(-61.9,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIA2IAAhdIgjAAIAAgOIBXAAIAAAOIgjAAIAABdg");
	this.shape_13.setTransform(-72.1,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeA2IgOgFIAFgNIAMAEQAHADAJAAIAHAAIAFgBQANgDAGgJQAGgJABgPIgxAAIAAgMIAxAAQgCgTgJgJQgJgIgNgBQgJAAgGADQgHAEgFAEIgKgLQANgNAaAAQAWAAANANQAOAOAAAdQAAAbgMAPQgMAPgbAAQgOAAgKgDg");
	this.shape_14.setTransform(-81.6,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-15.5,177.1,31);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAATIgbAuIgXgQIAjgqIgzgLIAIgbIAxAUIgEg1IAbAAIgEA1IAxgUIAIAbIgyALIAjAqIgXAQg");
	this.shape.setTransform(83.7,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BWIAAh3IgGgwIAtAAIACASQAHgIAHgEQAPgKASAAQAJAAAIACIAMADIgMAmQgIgFgNAAQgOAAgMAHQgFADgFAHIAAB0g");
	this.shape_1.setTransform(70.3,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAOAGQAPAGAJALQAHAMAEAOQADAPAAATIAAAPIhsAAQAAASAHAKQAJAPAZAAQAUAAANgFIAWgJIAJAeIgNAGIgRAGQgKADgLABIgUACQgtAAgTgWgAgNg1QgHAEgDAHQgFAHAAAJIgBAHIA6AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_2.setTransform(54.5,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBmQgKgEgHgIQgFgIgDgLQgCgKgBgOIAAhNIgcAAIAAgfIAcgEIAAggIAugIIAAAoIA7AAIAAAjIg7AAIAABDIABANQABAFACAEQACAFAEADQAFACAIAAQAKAAAJgCIAQgGIAHAgQgaANggAAQgOAAgLgEg");
	this.shape_3.setTransform(38.9,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BWIAAh3IgGgwIAtAAIACASQAHgIAHgEQAPgKASAAQAJAAAIACIAMADIgMAmQgIgFgNAAQgOAAgMAHQgFADgFAHIAAB0g");
	this.shape_4.setTransform(26.1,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAOAGQAPAGAJALQAHAMAEAOQADAPAAATIAAAPIhsAAQAAASAHAKQAJAPAaAAQAUAAALgFIAYgJIAIAeIgNAGIgRAGQgKADgLABIgUACQgtAAgTgWgAgNg1QgHAEgDAHQgFAHAAAJIgBAHIA6AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_5.setTransform(10.3,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBUIg4inIAzAAIAkCGIACAAIAliGIAxAAIg6Cng");
	this.shape_6.setTransform(-6.7,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBWIAAhmIAAgMIgDgKQgCgFgFgDQgFgCgHAAQgKAAgIADQgIADgHAEIAAB8IgvAAIAAh6IgEgtIAsAAIACAMQAJgGAKgEQARgGARAAQAQAAAMAEQAKAEAHAIQAGAIACAKQACAMABANIAABwg");
	this.shape_7.setTransform(-24.2,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXB5IAAjxIAvAAIAADxg");
	this.shape_8.setTransform(-37.7,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhMBdQgcghAAg8QAAg9AggfQAgggA3AAQAbAAAYAIQAXAJAQATIgdAaQgLgLgOgHQgPgHgUAAQgiAAgSAYQgSAXAAArQAAAqASAVQATAVAhAAIAWgBIAQgEIAAg5IgzAAIAAgjIBiAAIAAB3QgRAIgXAEQgWAEgaAAQg8AAgdggg");
	this.shape_9.setTransform(-62,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJB5IAAjxIAxAAIAADLIBiAAIAAAmg");
	this.shape_10.setTransform(-80.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-23.3,186,46.7);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBUIAAg5IgWAAIgnA5IgzAAIAvg+QgQgFgLgMQgKgKAAgWQAAgdASgNQASgOAeAAIBUAAIAACngAgVgbQABALAGAFQAGAHAKAAIAfAAIAAguIgfAAQgWAAgBAXg");
	this.shape.setTransform(78.4,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBUIAAiCIgCAAIgsCCIhEAAIAAinIAuAAIAACCIADAAIAsiCIBDAAIAACng");
	this.shape_1.setTransform(60.9,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BUIAAinIB2AAIAAAjIhGAAIAACEg");
	this.shape_2.setTransform(46.1,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBSQgQgHgJgLQgJgMgEgQQgEgQAAgUQAAgsAWgVQAVgWAsAAQAYAAAPAGQAQAGAJAMQAKAMADAQQAFAQAAAUQAAAsgWAVQgWAWgsAAQgXAAgQgGgAgbgoQgIAPAAAbQAAALABAKQACAJADAIQAEAIAGADQAGAFAKAAQAWAAAIgPQAJgPAAgbQAAgLgCgKQgBgJgEgIQgDgHgHgEQgGgFgKAAQgVAAgJAPg");
	this.shape_3.setTransform(29.4,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBUQgGgBgDgBIACgkIAEAAIAGAAQAEAAAEgBQADgCADgEQADgFACgIIADgVIABgTIACgaIABgZIAAgTICDAAIAACnIgwAAIAAiEIgoAAIgCAbIgDAiQgEAmgNASQgNARgYAAIgNgBg");
	this.shape_4.setTransform(10.1,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBSQgQgHgJgLQgJgMgEgQQgEgQAAgUQAAgsAWgVQAVgWAsAAQAYAAAPAGQAQAGAJAMQAKAMADAQQAFAQAAAUQAAAsgWAVQgWAWgsAAQgXAAgQgGgAgbgoQgIAPAAAbQAAALABAKQACAJADAIQAEAIAGADQAGAFAKAAQAWAAAIgPQAJgPAAgbQAAgLgCgKQgBgJgEgIQgDgHgHgEQgGgFgKAAQgVAAgJAPg");
	this.shape_5.setTransform(-7.3,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBUIAAhDIg0AAIAABDIgvAAIAAinIAvAAIAABCIA0AAIAAhCIAwAAIAACng");
	this.shape_6.setTransform(-25.4,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBUIgihCIgEAAIgiBCIgyAAIAyhVIgxhSIA0AAIAgA/IAEAAIAgg/IAzAAIgxBRIA0BWg");
	this.shape_7.setTransform(-42.7,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BCQgTgXAAgrQAAhXBSAAQAXAAAOAGQAPAGAJALQAHAMADAOQAEAPAAATIAAAPIhsAAQAAASAHAKQAJAPAZAAQAVAAALgFIAXgJIAJAeIgNAGIgRAGQgKADgKABIgVACQgtAAgTgWgAgNg1QgHAEgDAHQgEAHgBAJIgBAHIA6AAQAAgSgGgJQgGgKgOAAQgJAAgHADg");
	this.shape_8.setTransform(-59.7,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXB5IAAjLIhIAAIAAgmIC+AAIAAAmIhHAAIAADLg");
	this.shape_9.setTransform(-77.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-23.3,179.1,46.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(32.5,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgagdIgBgQIAKAAIABAFIAIgFQAFgCAFAAQANABAHAIQAFAJABAPQAAAIgCAFQgBAFgEAEQgEAFgGACQgFADgHAAIgJgBIgFgCIAAAfIgLACgAgKgkIgFAEIAAAmQAGAEAHAAQAIAAAGgGQAEgEAAgOIAAgJIgDgIQgCgDgEgCQgDgCgEAAQgFAAgFACg");
	this.shape_1.setTransform(27.9,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAeQgFgCgDgEQgDgEgCgHIgBgNQAAgQAIgIQAHgIAOAAQAIAAAGADQAFACADAEQADAEABAHQACAGAAAGQAAARgHAIQgIAIgOAAQgIAAgGgDgAgNgRQgEAHgBAKIABAKQABAEACAEQACADADACQADACAGAAQAKAAAEgHQAFgGgBgMIgBgJQAAgEgCgEQgCgDgEgCQgDgCgFAAQgKAAgEAHg");
	this.shape_2.setTransform(20.8,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAfIAAg1IgUAAIAAgIIAxAAIAAAIIgUAAIAAA1g");
	this.shape_3.setTransform(14.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgagdIgBgQIAKAAIABAFIAIgFQAFgCAEAAQAOABAHAIQAFAJAAAPQAAAIgBAFQgBAFgEAEQgEAFgGACQgFADgHAAIgJgBIgFgCIAAAfIgLACgAgKgkIgFAEIAAAmQAGAEAHAAQAIAAAGgGQAEgEAAgOIAAgJIgDgIQgCgDgEgCQgDgCgEAAQgFAAgFACg");
	this.shape_4.setTransform(8.3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAfQgGgCgDgFQgEgEgBgGQgCgGAAgIQAAgQAHgIQAIgIAMAAQAIAAAFADQAFACADAEQADAEABAGIABAMIAAADIgqAAIABAJQABAFADADIAGAEIAHABQAHAAAFgBIAIgEIADAIIgEACIgGACIgHABIgHABQgHAAgFgCgAgGgWQgDABgCADIgDAIIgBAGIAfAAQAAgLgEgEQgEgFgHAAQgDAAgEACg");
	this.shape_5.setTransform(1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAfIAAg9IAcAAQAJAAAGAEQAFADAAAIQAAAGgDAEQgCADgFACIAFAAIAEACIADAFIABAHQAAAEgCAEIgFAFIgGADIgIABgAgOAXIAQAAQAFAAAEgCQAEgCAAgGQAAgGgEgDQgDgCgHAAIgPAAgAgOgEIAQAAQAGAAACgCQADgDAAgEQAAgFgDgCQgEgCgGAAIgOAAg");
	this.shape_6.setTransform(-4.9,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAfIAAgcIgdAAIAAAcIgKAAIAAg9IAKAAIAAAbIAdAAIAAgbIAKAAIAAA9g");
	this.shape_7.setTransform(-11.9,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAtIAAhQIgBAAIgoBQIgSAAIAAhZIAKAAIAABRIABAAIAphRIASAAIAABZg");
	this.shape_8.setTransform(-19.9,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAGIgJASIgJgGIANgQIgTgDIADgKIASAHIgBgTIAJAAIgBATIASgHIADAKIgTADIANAQIgIAGg");
	this.shape_9.setTransform(-30.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-9.7,71.6,19.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hol1();
	this.instance.setTransform(-140,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-200,280,400);


(lib.Symbol8_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAtIAAhZIA5AAIAAAOIgmAAIAAAXIAlAAIAAAMIglAAIAAAaIAoAAIAAAOg");
	this.shape_15.setTransform(45.6,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0AtIAAhZIASAAIAABLIAbAAIAAhLIAQAAIAABLIAaAAIAAhLIASAAIAABZg");
	this.shape_16.setTransform(34.9,0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAtIAAhZIASAAIAAAhIAQAAQAQAAAIAHQAJAFAAAPQAAAPgJAHQgIAHgQAAgAgPAfIAPAAIAGAAIAEgDQADgCABgCQABgDAAgFQAAgFgBgCQgBgDgDgCIgEgCIgGgBIgPAAg");
	this.shape_17.setTransform(24.5,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjAtIgDgBIABgPIACAAIABAAQAGAAADgGQACgHABgNIACgKIAAgOIABgNIAAgKIA6AAIAABZIgSAAIAAhLIgXAAIgBAHIgBAKIAAAMIgBAKQgBAKgCAGQgBAHgEAFQgDAEgDACQgFACgGAAIgFAAg");
	this.shape_18.setTransform(14.9,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTArQgHgDgFgHQgFgFgCgKQgCgIAAgKQAAgWALgMQAKgMAUAAQALAAAHADQAIAEAFAGQAFAGACAJQACAJAAAJQAAAXgLALQgKANgVAAQgLAAgHgEgAgJgdQgEACgDAEQgDAEgBAHIgBAMIABANQAAAGADAEQADAEAEADQAEACAFAAQAFAAAFgCQAFgCACgEQADgFACgGQABgHAAgGIgBgMQgBgGgDgEQgCgEgEgDQgEgDgGAAQgFAAgFADg");
	this.shape_19.setTransform(6.1,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAtIAAhZIA9AAIAAAOIgqAAIAAAUIATAAQAOAAAIAIQAJAFAAANQAAAQgJAGQgIAHgQAAgAgPAfIAQAAIAFAAIAEgDIAEgEQACgDAAgFQAAgEgCgCIgEgFIgEgBIgFgBIgQAAg");
	this.shape_20.setTransform(-2.8,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghAtIAAhZIATAAIAAAhIAQAAQAPAAAIAHQAJAFAAAPQAAAPgJAHQgIAHgPAAgAgOAfIAPAAIAEAAIAFgDQACgCABgCQACgDAAgFQAAgFgCgCQgBgDgCgCIgFgCIgEgBIgPAAg");
	this.shape_21.setTransform(-14.9,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIAtIAAhLIgaAAIAAgOIBGAAIAAAOIgbAAIAABLg");
	this.shape_22.setTransform(-21.9,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYAtIgIgXIggAAIgHAXIgUAAIAhhZIAXAAIAfBZgAgLAHIAXAAIgMglIAAAAg");
	this.shape_23.setTransform(-29.4,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASAtIAAgnIgjAAIAAAnIgTAAIAAhZIATAAIAAAmIAjAAIAAgmIATAAIAABZg");
	this.shape_24.setTransform(-38.9,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAsQgJgBgHgEIAFgOIANAFQAHACAIAAIAFgBQADgBADgCIAEgEQABgDAAgEQAAgHgFgDQgGgDgHAAIgLAAIAAgMIAHAAIAHAAIAGgCQADgBACgCQADgDAAgEQAAgGgFgDQgEgCgFAAQgHAAgGACQgFADgEAEIgKgLQAFgGAJgEQAJgDAJAAQAQAAAIAHQAJAFAAAMQAAAGgFAGQgEAFgGADQAHACAFAEQAFAFAAAJQAAAIgDAFQgDAGgFADQgGAEgHABQgHACgGAAQgHgBgJgCg");
	this.shape_25.setTransform(-47.8,0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAtIgHgCIACgOIAGABIAEABQAGAAADgDQADgCABgEIgihCIAVAAIATAuIACAAIASguIATAAIgeBDIgFAKQgCAEgDADQgCADgEABIgKABIgHAAg");
	this.shape_26.setTransform(-55.8,0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXgwIAvAwIgvAxg");
	this.shape_27.setTransform(57.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer 3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A50034").s().p("AqSCQQgoABgBgoIAAjRQABgoAoABIUlAAQAogBABAoIAADRQgBAogogBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-14.5,140,29);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.blackBlk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.t100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.bens = new lib.Symbol32();
	this.bens.setTransform(-72.4,179,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.bens).wait(1));

	// Layer 3
	this.hol2 = new lib.Symbol28();
	this.hol2.setTransform(-221,82);

	this.timeline.addTween(cjs.Tween.get(this.hol2).wait(1));

	// Layer 2
	this.t10 = new lib.t10();
	this.t10.setTransform(-87.8,277.5,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.t10).wait(1));

	// Layer 1 copy
	this.t5 = new lib.Symbol22();
	this.t5.setTransform(-31.7,29.7,0.715,0.715);

	this.t4 = new lib.Symbol21();
	this.t4.setTransform(-100.9,29.7,0.715,0.715);

	this.t6 = new lib.Symbol23();
	this.t6.setTransform(-66.2,59.7,0.715,0.715);

	this.t3 = new lib.Symbol20();
	this.t3.setTransform(-88.6,0,0.715,0.715);

	this.t2 = new lib.Symbol18();
	this.t2.setTransform(-60.9,-29.7,0.715,0.715);

	this.t1 = new lib.Symbol17();
	this.t1.setTransform(-63.8,-59.6,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t6},{t:this.t4},{t:this.t5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296,-132,304.8,429);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t2 = new lib.Symbol15();
	this.t2.setTransform(0.1,168.9);

	this.t1 = new lib.Symbol14();
	this.t1.setTransform(0.1,139.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

	// pic
	this.pic = new lib.Symbol11copy2();

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-100,490,284.4);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t2 = new lib.Symbol13();
	this.t2.setTransform(0.1,168.9);

	this.t1 = new lib.Symbol12();
	this.t1.setTransform(0.1,139.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

	// pic
	this.pic = new lib.Symbol11copy();

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-100,576,284.4);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t3 = new lib.Symbol10();
	this.t3.setTransform(0.1,183.4);

	this.t2 = new lib.Symbol9();
	this.t2.setTransform(0.1,154.4);

	this.t1 = new lib.Symbol8();
	this.t1.setTransform(0.1,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

	// pic
	this.pic = new lib.Symbol11();

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-250,500,500);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 3
	this.t2 = new lib.Symbol34();
	this.t2.setTransform(0.1,19.5);

	this.t1 = new lib.Symbol33();
	this.t1.setTransform(0.1,-25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.6,-42.2,261.5,91.8);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol4();
	this.mc.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-175,280,400);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gr
	this.gr = new lib.Symbol35();
	this.gr.setTransform(17.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.gr).wait(1));

	// wt
	this.wt = new lib.Symbol35copy();
	this.wt.setTransform(17.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.wt).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqAEAQich4hcigQA9BlBZBYQCGCHCuBHQCtBIC9AAQC3AACqhFQCkhCCCh6QCBh6BNidQBPikAMi2IABgPIAMAAQgKDFhRCsQhOCiiFB8QiDB5ilBCQinBDivAAQlKAAkDjHg");
	this.shape.setTransform(-18.2,3,0.108,0.108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al0AwIAAhfILpAAQgRAHhjAHQjFANmVAAIAABEg");
	this.shape_1.setTransform(-11.6,-2.5,0.108,0.108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwoiIBhAAIAAAeIhCAAQAAIwgQE0QgHCZgIAqg");
	this.shape_2.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBAAIg6gJID3AAIAAATQhvAAhOgKg");
	this.shape_3.setTransform(-17,2.5,0.108,0.108);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjwNzQiUiUhPi/QhPi/AAjRQAAjTBSjCQBQi8CQiRQCRiRC6hPQDChTDUAAIAyABQjuAKjKBaQi+BWiNCWQiKCThKC/QhKDBAADVQAADLBLC7QBKC5CMCTIgTgTg");
	this.shape_4.setTransform(-24.3,-4,0.108,0.108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah0BSQgRgfABgjQgBg8AtgsQAsgsA7AAQAkAAAgAQQAeAQAVAbQgpgggzAAQg7AAgsAsQgtAsABA8QAAAxAeApQgagVgPgeg");
	this.shape_5.setTransform(-23.4,-7,0.108,0.108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#FFFFFF","#FBFCFC","#EEF2F4","#DAE2E6","#D0DADF"],[0,0.349,0.537,0.729,0.925,1],-6.2,-5.4,0,-6.2,-5.4,23.3).s().p("AhoBqQgtgsABg+QgBg8AtgsQAsgsA8AAQA+AAArAsQAsAsAAA8QAAA+gsAsQgrArg+AAQg8AAgsgrg");
	this.shape_6.setTransform(-23.2,-6.8,0.108,0.108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#FFFFFF","#FBFCFC","#EEF2F3","#DAE1E5","#C0CCD2"],[0,0.349,0.51,0.678,0.847,1],-42.1,-44.2,0,-42.1,-44.2,160).s().p("AmPPHQi/hQiUiUQiUiUhPi/QhPi/AAjRQAAjRBRjCQBOi6CPiRQCPiQC6hRQC/hTDSgDIA+ABIAABiIgyAAQi8AAitBHQitBIiHCGQiGCGhICtQhHCtAAC9QAAC+BHCtQBICtCGCGQCHCHCtBHQCtBIC8AAQC4AACqhFQClhCCBh6QCCh6BMifQBPikANi2IAAgPIqHAAIAAhfILqAAIAAAuQAADRhPC/QhPC/iUCUQiUCVi/BPQi/BPjRAAQjQAAi/hPgAgwIjIAAxFIBiAAIAAPjID4AAIAABig");
	this.shape_7.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B3BBC1","#A6AEB4","#636B70","#3A4246","#2A3236"],[0,0.082,0.522,0.839,1],-1.2,0,1.2,0).s().p("AgKAmIAAhLIAVgYIAAB7g");
	this.shape_8.setTransform(-18.4,-13.3,0.108,0.108);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4BDC3").s().p("AgLg8IAXAZIAABHIgXAZg");
	this.shape_9.setTransform(-15.7,-2.4,0.108,0.108);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B4BDC3","#485159"],[0,1],95.2,0,-95.2,0).s().p("AgLO/Qi7gCithJQirhIiHiGQiHiIhJivQhIivAAjAQAAi/BIivQBJiwCHiHQCHiFCqhJQCrhIC8gDIAzABIAZAYIg/gBQi5AAirBHQiqBHiGCEQiDCEhHCrQhHCrAAC6QAAC6BHCrQBHCrCDCFQCFCECrBGQCrBIC5gBQC1AACmhDQCihBCBh4QCAh4BMidQBPiiAMi1IAZgYIgBAbQgNC3hPClQhMCgiCB7QiCB6ikBFQiqBFi3ADg");
	this.shape_10.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B4BDC3","#3E454D"],[0,1],-84,-65.2,66,84.8).s().p("AmVPTQjBhQiWiWQiViXhQjBQhQjBAAjUQAAjWBTjEQBQi/CTiTQCSiSC/hQQDEhUDWAAIA+ABIgXAXIgnAAQjRAAjABSQi6BPiPCPQiPCPhPC6QhRDAAADRQAADPBOC8QBOC9CTCTQCSCTC9BPQC9BNDOAAQDPAAC9hNQC9hPCTiTQCSiTBOi9QBOi8AAjPIAAgjIAYgZIAAA8QAADUhQDBQhPDBiWCXQiWCWjCBQQjBBQjUAAQjTAAjChQg");
	this.shape_11.setTransform(-18.9,-2.5,0.108,0.108);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8F9CA4").s().p("AmBgLIMDgBIgYAYIrTABg");
	this.shape_12.setTransform(-11.6,-3,0.108,0.108);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#505C61").s().p("AlOAMIAYgXIKFABIgYAWg");
	this.shape_13.setTransform(-12.2,-1.9,0.108,0.108);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#ABBAC2","#262A30"],[0,1],-11.4,-11.4,11.5,11.5).s().p("AhyBzQgwgwAAhDQAAhBAwgwQAwgwBCAAQBDAAAwAwQAwAwAABBQAABDgwAwQgwAvhDAAQhCAAgwgvgAhhhgQgpAoAAA4QAAA5ApApQApAoA4AAQA5AAAogoQApgpAAg5QAAg4gpgoQgogpg5AAQg4AAgpApg");
	this.shape_14.setTransform(-23.2,-6.8,0.108,0.108);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B4BDC3").s().p("AgLowIAWAYIABQwIgXAYg");
	this.shape_15.setTransform(-19.5,-2.5,0.108,0.108);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#B3BBC1","#A6AEB4","#636B70","#3A4246","#2A3236"],[0,0.082,0.522,0.839,1],-1.2,0,1.2,0).s().p("AgLAkIAAhJIAXgXIAAB5g");
	this.shape_16.setTransform(-15.7,2.9,0.108,0.108);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#B4BDC3","#AEB7BD","#6C737A","#434950","#333940"],[0,0.039,0.498,0.831,1],-1.3,0,1.4,0).s().p("AgNnmIAagXIAAPlIgZAWg");
	this.shape_17.setTransform(-18.3,-3,0.108,0.108);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8D9AA1").s().p("Ag/gKIB/AAIgcAVIhLAAg");
	this.shape_18.setTransform(-18.9,-8.4,0.108,0.108);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8699A3").s().p("AiIALIAegVIDzAAIgZAVg");
	this.shape_19.setTransform(-17,2.4,0.108,0.108);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#626D77").s().p("Ai6AMIAZgWIFDgBIAZAXg");
	this.shape_20.setTransform(-17.6,3.5,0.108,0.108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#CD425C","#BE3351","#AA1F43","#9B1039","#930833","#900531"],[0,0.09,0.251,0.431,0.647,1],-85.6,-65.2,65.6,86).s().p("AmXPjQjDhOiViUQiXiWhRjCQhRjBAAjUQAAjXBOjGQBMjBCMiVQCNiWC5hSQDAhWDYAAIAagJIAxgHIAXAcIACADIABAIIAABmQAAAIgHAAIg4ABQmQAJkOEKQiECDhGCuQhECrAAC8QAAC7BHCrQBHCqCFCFQCFCECsBHQCsBHC6AAQC2AACohEQCjhBCBh4QCBh4BNidQBPiiAMi0IqHAAIgFgBIgBgCIgUgZIAAh6IMGgBIAZAWIAAA7QAADVhRDBQhQDBiXCWQiWCWjEBPQjCBPjVAAQjYAAi/hLgAg+I1IgYgRIAfgSIAAwdIgIgNIAIgCIAAgCIAFAAIBcggIAQAdIACACIABAGIgBPAIDjAAIASAcQADAEAAAIIAABhQAAAHgHABIlaAAIgBAAQgJAAgHgFgAoMkQQgxgxAAhFQAAhFAxgxQAygxBFAAQBGAAAxAxQAxAxAABFQAABFgxAxQgxAxhGAAQhFAAgygxg");
	this.shape_21.setTransform(-18.7,-2.3,0.108,0.108);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F38895","#EB7588","#D84869","#CA2752","#C21344","#BF0C3F","#BF0C3F"],[0,0.086,0.314,0.518,0.686,0.8,1],-32.9,-90.5,33,90.6).s().p("Am2O8Qi3hAiHiHQiHiHhAi3Qg9ixANjEQANjDBVi6QBYjBCaiaQCoioDUhZQDNhXDSAAQCzAACeA+QCkBBB8B7QCHCHBAC3QA9CxgNDEQgNDDhVC7QhZDBiaCaQiaCajBBYQi6BWjCANQgiACgiAAQigAAiSgzg");
	this.shape_22.setTransform(-20.9,-4.4,0.108,0.108);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#BF0C3F","#BF0C3F","#BD0B3E","#B6093A","#A90534","#99002C"],[0,0.498,0.753,0.859,0.937,1],-4.6,-3.7,0,-4.6,-3.7,130.1).s().p("AnlR/QjhhfisitQiuithejgQhijogBj+QABj9BijoQBejgCuitQCsitDhhfQDohiD9AAQD9AADnBhQDfBeCtCsQCtCrBgDfQBjDmACD9IAAARQgCD9hjDmQhgDfitCsQitCrjfBeQjnBhj9AAQj9AAjohig");
	this.shape_23.setTransform(-18.9,-2.5,0.108,0.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-16,67.1,32.4);


(lib.inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t3 = new lib.Symbol5();
	this.t3.setTransform(103.1,235,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// Layer 1 copy
	this.t2 = new lib.Symbol7();
	this.t2.setTransform(7.7,-116);

	this.t1 = new lib.Symbol6();
	this.t1.setTransform(0.1,-152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-176,235.5,422.8);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var r = this;
		var count = 1;
		var repeat = 200;
		var time2 = 3.0;
		var time3 = time2+3.0;
		var time4 = time3+3.0;
		var time5 = time4+3.0;
		
		var tl = new TimelineLite();
		tl.fromTo(r.blk, 1.0, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.logo_lg, 1.0, {x:"-=250", alpha:0, ease:Expo.easeOut}, 0.5)
		  .staggerFrom([r.t0.t1, r.t0.t2], 0.9, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, 0.50)
		  .from(r.hol1, 1.0, {y:"+=550", ease:Expo.easeOut}, 0.7)
		  .from(r.hol1.mc, 4.0, {y:"+=20", ease:Power0.easeNone}, 0.7)
		  
		  
		  //2
		  .from(r.blk_black, 0.6, {alpha:0, ease:Power0.easeNone}, time2)
		  .to(r.logo_lg.gr, 0.6, {alpha:0, ease:Power0.easeNone}, time2)
		  .staggerFrom([r.inv.t1, r.inv.t2, r.inv.t3], 0.9, {y:"+=100", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.5)
		  .from(r.t1.pic, 1.2, {scaleX:2.0, scaleY:2.0, alpha:0, ease:Expo.easeOut}, time2+0.7)
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3], 0.9, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.9)
		  
		  
		  //3
		  .to(r.t1.pic, 0.5, {alpha:0, ease:Power0.easeNone}, time3)
		  .staggerTo([r.t1.t1, r.t1.t2, r.t1.t3], 0.4, {y:"-=50", alpha:0, ease:Expo.easeIn}, 0.05, time3)
		  .from(r.t2.pic, 1.2, {scaleX:2.0, scaleY:2.0, alpha:0, ease:Expo.easeOut}, time3+0.7)
		  .staggerFrom([r.t2.t1, r.t2.t2], 0.9, {y:"+=250", ease:Expo.easeOut}, 0.1, time3+0.9)
		  
		  
		  //4
		  .to(r.t2.pic, 0.5, {alpha:0, ease:Power0.easeNone}, time4)
		  .staggerTo([r.t2.t1, r.t2.t2], 0.4, {y:"-=50", alpha:0, ease:Expo.easeIn}, 0.05, time4)
		  .from(r.t3.pic, 1.2, {scaleX:2.0, scaleY:2.0, alpha:0, ease:Expo.easeOut}, time4+0.7)
		  .staggerFrom([r.t3.t1, r.t3.t2], 0.9, {y:"+=250", ease:Expo.easeOut}, 0.1, time4+0.9)
		  
		  
		  //5
		  .from(r.blk_gray, 0.6, {alpha:0, ease:Power0.easeNone}, time5)
		  .to(r.logo_lg.gr, 0.6, {alpha:1, ease:Power0.easeNone}, time5)
		  .from(r.t100.hol2, 1.0, {y:"+=550", ease:Expo.easeOut}, time5+0.5)
		  .staggerFrom([r.t100.t1, r.t100.t2, r.t100.t3, r.t100.t4, r.t100.t5, r.t100.t6, r.t100.t10, r.t100.bens], 0.9, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.04, time5+0.6)
		  
		  .from(r.btn, 0.9, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, time5+1.0)
		  
		  
		  .call(replay)
		  .to(r.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 17)
		  ;
		
		
		  
		
		function replay() {
		  if (count == repeat){
		      tl.pause();
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			tl.play(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,1.25,1.5);

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo_lg
	this.logo_lg = new lib.sprite36();
	this.logo_lg.setTransform(91.8,-213.3,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.logo_lg).wait(1));

	// btn
	this.btn = new lib.Symbol8_1();
	this.btn.setTransform(0,214.7,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// t100
	this.t100 = new lib.t100();
	this.t100.setTransform(129.9,-93,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.t100).wait(1));

	// blk_gray
	this.blk_gray = new lib.Symbol16();

	this.timeline.addTween(cjs.Tween.get(this.blk_gray).wait(1));

	// inv
	this.inv = new lib.inv();
	this.inv.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.inv).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// blk_black
	this.blk_black = new lib.blackBlk();

	this.timeline.addTween(cjs.Tween.get(this.blk_black).wait(1));

	// hol1
	this.hol1 = new lib.Symbol19();
	this.hol1.setTransform(27,115.8);

	this.timeline.addTween(cjs.Tween.get(this.hol1).wait(1));

	// t0
	this.t0 = new lib.t0();
	this.t0.setTransform(0,-131.2);

	this.timeline.addTween(cjs.Tween.get(this.t0).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D4D2D2"],[0,1],-83.8,-106.4,0,-83.8,-106.4,371.7).s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-300,576,640.8);


// stage content:
(lib.lg_ref_240x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	mask.setTransform(120,200);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(2,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(120,200,0.8,0.8);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;