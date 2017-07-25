(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/coffe.png", id:"coffe"},
		{src:"images/cup.png", id:"cup"},
		{src:"images/shad.png", id:"shad"}
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



(lib.coffe = function() {
	this.initialize(img.coffe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,239);


(lib.cup = function() {
	this.initialize(img.cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,102);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,148);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF0024").s().p("AgNA9IAAhfIgrAAIAAgaIBxAAIAAAaIgqAAIAABfg");
	this.shape.setTransform(65.6,-27.4,1.207,1.207,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF0024").s().p("AgrAzQgPgPAAgkQAAgkAPgOQAOgOAdAAQAeAAAOAOQAPAOAAAkQAAAkgPAPQgOAOgeAAQgeAAgNgOgAgUggQgGAIAAAYQAAAYAGAJQAFAHAPAAQAQAAAFgHQAGgIAAgZQAAgYgGgIQgFgHgQAAQgPAAgFAHg");
	this.shape_1.setTransform(50.4,-23.3,1.207,1.207,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF0024").s().p("ABBCmQgXgbAAhFQAAhEAXgYQAUgXA2AAQA0AAAVAXQAWAYAABEQAABFgWAbQgVAag0AAQg1AAgVgagABsALQgIAOAAAtQAAAuAIAPQAIAOAXAAQAWAAAHgOQAJgPgBguQABgtgJgOQgHgLgWAAQgXAAgIALgAiQC4IDgluIA+AAIjgFugAjTAVQgWgZgBhFQABhEAWgaQAVgYA1AAQA1AAAUAYQAXAaAABEQAABFgXAZQgVAag0AAQg0AAgWgagAiniEQgJAOAAAuQAAAsAJAPQAHANAXAAQAXAAAHgNQAIgPAAgsQAAgugIgOQgHgMgXAAQgXAAgHAMg");
	this.shape_2.setTransform(185.6,-48,1.207,1.207,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF0024").s().p("AhJC3QgigEgWgFIANg8QAkALA2AAQAxgBARgKQAPgLAAghQAAgjgOgMQgQgNgvAAQgyABgpAHIAAjNIDjAAIAAA9IigAAIAABSQAbgCAQAAQBLAAAeAaQAcAXABA/QAABFgiAbQgfAZhOABQgbAAgigFg");
	this.shape_3.setTransform(136.8,-34.4,1.207,1.207,-15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF0024").s().p("AiFC8IAAg4QCHhoAdgdQAdgfAAgpQAAgegQgLQgOgKglAAQgYAAgcAEQgcAEgQAGIgPg8QA0gRBBAAQBGAAAfAWQAiAYAAA+QAAA5gfAjQgfAlhuBOICrAAIAAA8g");
	this.shape_4.setTransform(97.3,-24.8,1.207,1.207,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DF0024").s().p("Ah+AfIAAg9ID8AAIAAA9g");
	this.shape_5.setTransform(62.2,-10.4,1.207,1.207,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A0+AYMAlmgLZIEXNtMgmOAIVg");
	this.shape_6.setTransform(110.4,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 3
	this.instance = new lib.shad();
	this.instance.setTransform(2,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-104.2,268.7,152.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhANAoYMAAAhQwMCAbAAAMAAABQwg");
	this.shape.setTransform(0,258.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411,0,822,517);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANCA8QgLgGgEgOQgFgPAAgZQAAgRAEgNQADgNAHgHQAHgHALgDQAKgDAOAAIAQABIAQAEIgEALIgNgDQgHgCgIAAQgKAAgIACQgIACgFAEQgFAFgDAJQgDAJAAAOIALgCIALgBIAKAAQARAAAKAEQAKAEAFAGQAEAJAAAOQAAAOgEAJQgFAJgKADQgKAEgQAAQgRAAgKgGgANcAAIgRAAIgPACQAAARACAKQACAKAEAGQAFAGAGACQAGACAIAAQANAAAHgDQAGgDADgFQADgGgBgKQAAgLgCgGQgDgGgHgDQgGgCgKAAIgEAAgAJiA8QgKgGgFgPQgFgPAAgYQAAgSADgNQADgMAFgHQAGgHAIgDQAJgDALAAQALAAAIADQAJADAFAHQAGAHACAMQADANAAASQAAAYgFAPQgEAPgKAGQgKAGgPAAQgPAAgKgGgAJsgzQgGACgDAGQgEAFgCALQgCALAAAQQAAAVAEAMQADAMAHAFQAGAFAMAAQALAAAHgFQAHgFADgMQADgMAAgVQAAgQgCgLQgBgLgEgFQgEgGgGgCQgGgCgIAAQgJAAgGACgAigA/QgLgDgHgIQgHgHgDgNQgDgNAAgTQAAgXAGgPQAGgOAMgGQANgFATAAQAUAAANAFQAMAGAGAOQAHAPAAAXQAAATgEANQgDANgHAHQgHAIgLADQgLADgPAAQgOAAgLgDgAhtAyQAKgEAEgMQAEgMAAgWQAAgPgCgLQgDgKgFgGQgFgGgIgCQgIgCgNAAQgLAAgJACQgIACgFAGQgFAGgCAKQgCALAAAPQAAAWAEAMQAEAMAJAEQAKAFAPgBQARABAJgFgAnQA8QgJgGgFgPQgFgPAAgYQAAgSACgNQADgMAGgHQAFgHAJgDQAIgDALAAQALAAAJADQAIADAGAHQAFAHADAMQADANAAASQAAAYgFAPQgFAPgKAGQgKAGgPAAQgPAAgKgGgAnFgzQgGACgEAGQgEAFgBALQgCALAAAQQAAAVADAMQADAMAHAFQAHAFALAAQALAAAHgFQAHgFADgMQAEgMAAgVQAAgQgCgLQgCgLgEgFQgDgGgGgCQgGgCgJAAQgIAAgGACgApBBAIgTgDIADgKIARADIATABQAOAAAHgDQAIgCADgGQADgGAAgKQAAgOgHgHQgIgGgSAAIgOAAIAAgIIAOAAQAQAAAIgGQAHgGAAgMQAAgIgDgEQgCgFgIgCQgHgCgMAAIgTABIgQADIgDgKIARgEQAKgBALAAQARAAAKADQAKAEAEAGQAEAHAAAKQAAAIgCAGQgCAHgFAEQgGAFgLABQALAAAHADQAGAFADAHQACAHAAAJQAAAOgFAIQgGAIgLADQgKAEgRAAIgUgCgArwA/QgLgDgHgIQgHgHgDgNQgDgNAAgTQAAgXAGgPQAGgOAMgGQANgFATAAQAUAAANAFQAMAGAGAOQAHAPAAAXQAAATgEANQgDANgHAHQgHAIgLADQgLADgPAAQgOAAgLgDgAq9AyQAKgEAEgMQAEgMAAgWQAAgPgCgLQgDgKgFgGQgFgGgIgCQgIgCgNAAQgLAAgJACQgIACgFAGQgFAGgCAKQgCALAAAPQAAAWAEAMQAEAMAJAEQAKAFAPgBQARABAJgFgALpA/IAAhuIgcAOIgFgKIAugWIAACAgAHeA/IAAgKIAigbIAVgTQAIgHAEgFQADgGACgFIABgMQAAgJgEgFQgDgFgHgDQgHgCgLAAIgLABIgMACIgIACIgEgLIASgEIARgBQAXAAALAIQALAIAAATQAAAJgCAIQgDAIgHAHQgHAJgOALQgOAMgWAQIBEAAIAAALgAGAA/IAAg2IgYAAQgGAAgFACQgGACgFAFQgGAGgFALQgGAKgGASIgPAAIAMgbQAFgLAFgGQAFgGAEgDQAFgCAGgBQgOgBgIgEQgIgCgDgIQgEgHAAgJQAAgKAEgIQADgIAHgFQAIgFAOAAIA4AAIAAB7gAFFgrQgFAHAAAMQAAALAFAGQAGAGALABIAqAAIAAgxIgrAAQgKAAgGAGgADDA/IAAh7IA4AAQAOAAAIAGQAIAFADAJQADAKAAALQAAAJgDAJQgEAHgHAFQgIAGgNAAIgsAAIAAAugADQAGIArAAQALAAAFgGQAGgHAAgNQAAgOgGgHQgFgIgKAAIgsAAgABHA/IAAh7IBRAAIAAALIhEAAIAAAqIAwAAQANAAAHAEQAIADACAIQADAJAAALQAAARgIAJQgIAJgPAAgABUA0IAxAAQAKAAAEgHQAEgGAAgLQAAgIgCgGQgCgGgEgDQgEgEgGAAIgxAAgAAWA/IAAg2IgWAAQgGAAgFACQgGACgFAFQgGAGgFALQgGAKgGASIgPAAIAMgbQAFgLAFgGQAFgGAEgDQAFgCAGgBQgOgBgIgEQgIgCgDgIQgEgHAAgJQAAgKAEgIQADgIAHgFQAIgFAOAAIA2AAIAAB7gAgjgrQgFAHAAAMQAAALAFAGQAGAGALABIAoAAIAAgxIgpAAQgKAAgGAGgAjqA/IAAg9IhCAAIAAA9IgNAAIAAh7IANAAIAAA0IBCAAIAAg0IANAAIAAB7gAs6A/IAAhwIhCAAIAABwIgNAAIAAh7IBcAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-6.6,181.4,13.3);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPA/QgLgDgHgIQgHgHgDgNQgEgNAAgTQABgXAFgPQAGgOANgGQANgFATAAQAUAAAMAFQANAGAGAOQAGAPAAAXQAAATgDANQgDANgIAHQgGAIgMADQgKADgPAAQgPAAgKgDgAicAyQAKgEADgMQAEgMAAgWQAAgPgCgLQgCgKgFgGQgFgGgIgCQgJgCgMAAQgLAAgJACQgIACgFAGQgFAGgDAKQgBALAAAPQAAAWADAMQAFAMAJAEQAKAFAPgBQAQABAKgFgAoZA8QgNgGgGgPQgGgOAAgZQAAgSAEgMQADgNAHgHQAHgHALgDQAKgDAPAAIAMAAIAMACIAMADIgFALIgJgCIgLgCIgKgBQgNAAgHACQgJACgFAGQgGAFgCALQgCAKAAAQQAAAQACALQACALAGAGQAFAGAJACQAHACANAAIAKgBIALgBIAJgDIAFAMIgMACIgMACIgMABQgTAAgNgGgAImA/IAAg2IgYAAQgGAAgGACQgFACgGAFQgFAGgFALQgGAKgGASIgPAAIAMgbQAFgLAFgGQAEgGAFgDQAFgCAFgBQgOgBgHgEQgIgCgDgIQgEgHAAgJQAAgKAEgIQADgIAHgFQAIgFAOAAIA4AAIAAB7gAHrgrQgFAHgBAMQABALAFAGQAGAGALABIAqAAIAAgxIgrAAQgKAAgGAGgAFpA/IAAh7IA4AAQAOAAAIAGQAIAFADAJQADAKAAALQAAAJgDAJQgEAHgHAFQgIAGgNAAIgsAAIAAAugAF2AGIArAAQALAAAFgGQAFgHABgNQgBgOgFgHQgFgIgKAAIgsAAgADtA/IAAh7IBQAAIAAALIhDAAIAAAqIAvAAQANAAAIAEQAHADADAIQADAJAAALQgBARgHAJQgJAJgPAAgAD6A0IAxAAQAKAAAEgHQAEgGAAgLQAAgIgCgGQgCgGgEgDQgEgEgHAAIgwAAgAC8A/IAAg2IgYAAQgGAAgFACQgGACgFAFQgGAGgFALQgGAKgGASIgPAAIAMgbQAFgLAFgGQAEgGAFgDQAFgCAFgBQgNgBgIgEQgIgCgDgIQgEgHAAgJQAAgKAEgIQADgIAHgFQAIgFAOAAIA4AAIAAB7gACBgrQgGAHABAMQgBALAGAGQAFAGAMABIAqAAIAAgxIgrAAQgLAAgFAGgAAoA/IAAhwIgpAAIAAgLIBiAAIAAALIgrAAIAABwgAgTA/QgIgTgIgMQgHgMgHgGQgHgHgIgCQgIgDgKAAIAAA9IgOAAIAAh7IAOAAIAAA8IAPgMIAVgVIAXgbIARAAQgVAYgOAOQgPAOgGAEQAHACAGACQAGACAHAGQAHAHAHANQAJANAJAWgAlnA/IAAhuIgcAOIgFgKIAtgWIAACAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-6.6,112.7,13.3);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFEBwIAAgoIiIAAIAAAoIgfAAIgFhHIAcAAQAMggAHgjQAHgmABgrIB4AAIAACUIAgAAIgCAfIAOgrIARgtIARgvIARgsIA2AAIAPAuIARAwIARAtIARAoIgmAAIgJgVIgJgYIhPAAIgIAYIgGAVIgkAAIgDAogADogQQgFAcgJAdIBLAAIAAh2Ig2AAQgCAegFAfgAHcAAIgNgoIgMgmIgHAAIgOAlIgOApIA8AAIAAAAgAAzBMQgdAAgTgIQgRgJgKgVQgJgVAAgjQAAgkAJgVQAKgUARgIQATgJAdABQAdgBATAJQATAIAJAUQAKAVAAAkQAAAjgKAVQgJAVgTAJQgSAIgbAAIgDAAgABLArQAKgDAGgHQAFgHACgMQADgNAAgTQAAgUgDgNQgCgMgFgHQgGgGgKgCQgJgDgPAAQgPAAgKADQgJACgGAGQgFAHgDAMQgCANAAAUQAAATACANQADAMAFAHQAGAHAJADQAKACAPAAQAPAAAJgCgAlCBMQgdAAgTgIQgTgJgKgVQgJgVAAgjQAAgkAJgVQAKgUATgIQATgJAdABQAdgBATAJQATAIAJAUQAKAVAAAkQAAAjgKAVQgJAVgTAJQgSAIgbAAIgDAAgAkqArQAKgDAGgHQAFgHACgMQADgNAAgTQAAgUgDgNQgCgMgFgHQgGgGgKgCQgJgDgPAAQgPAAgKADQgJACgGAGQgFAHgDAMQgCANAAAUQAAATACANQADAMAFAHQAGAHAJADQAKACAPAAQAPAAAJgCgAjHBIIAAizIBeAAQATAAALAIQALAIAFAOQAFAOgBASQAAAQgFANQgFAOgLAGQgLAIgRAAIg9AAIAAA8gAilgOIAyAAQALAAAGgIQAGgIAAgPQAAgRgGgIQgFgIgLAAIgzAAgAodBIIAAizIB7AAIAAAeIhYAAIAACVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-11.2,108.5,22.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHGBeQgdABgTgJQgTgJgKgVQgJgUAAgkQAAgkAJgUQAKgVATgIQATgJAdABQAdgBATAJQATAIAJAVQAKAUAAAkQAAAkgKAUQgJAVgTAJQgSAIgbAAIgDAAgAHeA9QALgDAFgGQAGgIACgMQACgNAAgTQAAgUgCgNQgCgMgGgHQgFgGgLgCQgJgDgPABQgOgBgKADQgKACgGAGQgFAHgDAMQgBANAAAUQAAATABANQADAMAFAIQAGAGAKADQAKADAOgBQAPABAJgDgAm4BaIhjAAIAAizIBiAAQASAAAJAGQAKAFADAJQAEAKAAAOQAAALgDAJQgCAKgJAFQgIAFgQABQARACAJADQAKAGADAKQADAKgBAOQABAagMAMQgMAMgVAAIgCgBgAn4A+IA4AAQAKgBAEgGQAEgHAAgMQAAgNgFgGQgEgIgKAAIg3AAgAn4gRIA3AAQAJABADgHQAEgFAAgKQAAgLgEgFQgDgGgJAAIg3AAgADrBaIAAizIB7AAIAAAeIhYAAIAACVgABKBaIAAizICEAAIAAAeIhhAAIAAAqIBFAAIAAAbIhFAAIAAAzIBhAAIAAAdgAixBaIAAizIAjAAIAACVIA0AAIAAiVIAjAAIAACVIA0AAIAAiVIAgAAIAACzgAjpBaIgIgUIgJgZIhQAAIgHAYIgGAVIgkAAIAOgrIAQgvIASgtIARgsIA2AAIAPAuIARAuIARAvIAQAogAkEAQIgOgmIgLgmIgHAAIgOAlIgPAnIA9AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-9.4,108.1,18.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlBeIgVgBIgWgCIgTgEIAGgeQAGACAJABIASACIAQABQARAAAKgDQAKgCAEgGQAEgGAAgJQAAgPgIgHQgIgGgRABIgeAAIAAgbIAdAAQARAAAHgFQAHgGAAgNQAAgIgDgFQgEgEgJgDQgJgCgRAAIgQABIgRACIgOADIgHgeIASgDIAVgCIAWgBQAaAAAQAEQAQAFAGAKQAHALAAAQQAAAMgDAJQgDAJgIAGQgIAGgQABQARABAJAEQAJAGAEAKQADALAAANQAAAUgIALQgIAMgRAFQgPAFgXAAIgEAAgAtHBaIhjAAIAAizIBiAAQASAAAJAFQAKAGAEAJQADAKAAAOQAAALgDAJQgCAJgIAGQgJAFgQABQARABAJAEQAKAGADAKQADAKAAAOQAAAagMAMQgMALgVAAIgCAAgAuHA9IA5AAQAJAAAEgGQAEgHAAgMQAAgNgFgHQgEgHgJAAIg4AAgAuHgRIA3AAQAJAAADgGQAEgFAAgLQAAgKgEgGQgDgFgJAAIg3AAgAOABaIgVgeIgXggIgZAgIgXAeIhKAAIgJgVIgJgYIhPAAIgIAYIgGAVIgkAAIAOgrIARgvIARgtIARgsIA2AAIAPAuIARAuIARAvIAPAjIAQgVIAYgfIAZghIglgwIgfgpIAsAAIAVAcIAYAgIAWgfIAUgdIAqAAIgeArIghAuIAkAvIAeArgAK+AQIgNgmIgMgmIgHAAIgOAlIgOAnIA8AAIAAAAgAIQBaIAAhQIhNAAIAABQIgiAAIAAizIAiAAIAABFIBNAAIAAhFIAiAAIAACzgAFRBaIAAiBIglBBQgTAhgUAfIgtAAIAAizIAhAAIAACHQAWgiAUghQAUgiASgiIAqAAIAACzgAgFBaIgJgVIgJgYIhPAAIgIAYIgGAVIgkAAIAOgrIARgvIARgtIARgsIA2AAIAPAuIARAuIAPAvIARAogAghAQIgNgmIgMgmIgHAAIgOAlIgOAnIA8AAIAAAAgAkMBaIAAizIB6AAIAAAeIhYAAIAACVgAlEBaIgJgVIgJgYIhPAAIgIAYIgGAVIgkAAIAOgrIARgvIARgtIARgsIA2AAIAPAuIARAuIARAvIARAogAlgAQIgNgmIgMgmIgHAAIgOAlIgOAnIA8AAIAAAAgAoNBaIAAiFIgRAnIgRAnIgQAnIgbAAIgQgnIgQgnIgRgnIAACFIghAAIAAizIAvAAIARAlIASAoIAQAlIAPglIASgoIARglIAtAAIAACzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-9.4,187.9,18.9);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoKByQgdABgTgJQgTgIgJgVQgKgVAAgmQAAgiAKgUQAJgVATgIQAUgIAcAAQAdAAATAIQATAIAKAVQAJAUAAAiQAAAmgJAVQgKAVgTAIQgSAJgbAAIgDgBgAnxBRQAKgCAFgHQAGgHACgNQACgNAAgUQAAgTgCgMQgCgNgGgGQgFgHgKgCQgKgCgPAAQgOAAgKACQgKACgFAHQgGAGgCANQgCAMAAATQAAAUACANQACANAGAHQAFAHAKACQAKADAOgBQAPABAKgDgAKUBvIAAizICDAAIAAAdIhhAAIAAAoIBFAAIAAAdIhFAAIAAAzIBhAAIAAAegAIcBvIAAiWIg9AAIAAgdICdAAIAAAdIg9AAIAACWgAGmBvIAAiBIgmBAQgTAigUAfIgtAAIAAizIAiAAIAACGQAVgiAUggQAVgjASghIApAAIAACzgAD0BvIgIgVIgJgYIhQAAIgHAXIgHAWIgkAAIAPgsIAQgvIASgtIARgrIA2AAIAPAuIARAuIARAuIAQApgADZAkIgOgmIgLglIgHAAIgOAlIgPAmIA9AAIAAAAgAArBvIAAiWIhLAAIAACWIgjAAIAAizICQAAIAACzgAjbBvIAQgWIAOgYIgMgfIgQgiIgTglIgRgeQgYAigRAUQgRASgHAGQAIACAIAFQAHAFAJAKQAIAKAJATQAKATALAeIgoAAQgKgagJgRQgIgQgJgJQgJgJgKgEQgKgEgLgBIAABWIgjAAIAAizIAjAAIAABVIATgTIAZgeQANgRANgTIBSAAIAPAdIAQAiIAOAhIAQggIAOgiIAMgeIAnAAIgUAvIgXAuIgYAuIgXAogAqnBvIAAiWIhNAAIAACWIgiAAIAAizICRAAIAACzgAFdhXQgKgIAAgTIAWAAQAAAJAEADQAFAEAIgBQAJABAEgEQAFgDAAgJIAVAAQAAATgKAIQgKAJgTAAQgTAAgKgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-11.5,158.4,23);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALDBzQgKABgGgCQgFgCgDgGQgCgGAAgKQAAgKACgFQADgFAFgCQAGgCAKABQAJgBAGACQAFACADAFQACAFAAAKQAAAKgCAGQgDAGgFACQgFABgHAAIgDAAgAJaByQgMghgMgVQgKgVgLgLQgMgMgNgFQgMgFgPgBIAABtIgsAAIAAjkIAsAAIAABvQAKgKAPgQIAfgnQARgVARgZIA1AAQggAsgWAaQgWAagIAHQAKADAKAGQAKAEAKANQAKANANAYQAMAYAPAmgAEBByIAAjkICnAAIAAAlIh8AAIAAA2IBYAAIAAAjIhYAAIAABAIB8AAIAAAmgAg+ByIAAjkIArAAIAAC8IBAAAIAAi8IAsAAIAAC8IBCAAIAAi8IAsAAIAADkgAiGByIgKgbIgLgfIhlAAIgKAeIgIAcIguAAIASg4IAWg6IAWg7IAWg3IBEAAIATA6IAWA7IAVA7QALAdAKAXgAioATIgRgxIgPgvIgJAAIgRAvIgSAxIBMAAIAAAAgAm3ByIAAi/IhOAAIAAglIDIAAIAAAlIhOAAIAAC/gApOByIAAi/IhiAAIAAC/IgrAAIAAjkIC4AAIAADkgAKzAoIgKiaIAyAAIgKCag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-11.5,146.6,23.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDCMIAAgzIisAAIAAAzIgmAAIgHhaIAkAAQAOgpAJguQAJgvACg3ICYAAIAAC9IAoAAIgHBagAv3gYQgHAlgLAlIBgAAIAAiXIhFAAQgDAmgGAngAQnBZIgagmIgegqIgfAqIgeAmIg2AAIAaghIAegoIAggpIgtg+Igpg0IA4AAIAbAjIAeApIAcgoIAagkIA1AAIgmA2IgqA7IAuA9IAlA2gAM2BZIAAilQgXArgZAoQgYArgZAnIg6AAIAAjkIArAAIAACsQAbgqAagrIAxhXIA0AAIAADkgAI3BZIAAhkIhjAAIAABkIgsAAIAAjkIAsAAIAABXIBjAAIAAhXIArAAIAADkgAFDBZIAAhkIhiAAIAABkIgsAAIAAjkIAsAAIAABXIBiAAIAAhXIAsAAIAADkgABuBZIgKgbIgLgeIhjAAIgJAeIgJAbIgtAAIASg3IAUg6IAXg8IAUg3IBEAAIATA7IAVA9IAWA4QALAdAKAXgABMgEIgRgyIgPgwIgJAAIgSAwIgRAyIBMAAIAAAAgAkHBZIAAjkIB4AAQAYAAANALQAPAJAFATQAHARgBAXQAAAUgGARQgHARgOAIQgNALgXAAIhNAAIAABMgAjcgVIBAAAQAOAAAHgKQAIgKAAgUQgBgVgGgJQgIgLgNAAIhBAAgAnFBZIAAhYIglAAQgJAAgJADQgIADgHAKQgHAJgJARQgHASgJAcIgxAAQAKgfAKgUQAIgTAJgKQAHgJAJgEQAIgEAKgBQgXgBgNgJQgNgJgGgOQgFgNAAgRQgBgTAHgPQAGgPAOgJQANgJAYAAIB4AAIAADkgAoaheQgHAKAAARQAAASAHAIQAHAIANAAIBBAAIAAhFIhCAAQgNAAgGAIgAqtBZIAAi+IhIAAQgCAegFAfQgGAhgIAfQgJAhgLAgIguAAQAMgiAKgmQAKgjAGgnQAIgoABgqICaAAIAADkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-14,223.6,28.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE3CPIAAgzIi1AAIAAjkIAsAAIAAC8IBiAAIAAi8IArAAIAAC8IApAAIgHBbgAvbBWQgYgLgLgbQgMgbAAgsQAAgkAGgXQAHgXANgNQAOgNAUgGQAUgFAcAAIAWABIAXADIAVAFIgKAmQgGgCgIgCIgSgCIgRgBQgTgBgNADQgNADgIAIQgIAIgEAQQgEAQAAAaQAAAYAEAQQAEARAIAIQAIAJANADQANADATgBIARgBQAJAAAJgCIAOgEIAKAnIgVAEIgXADIgWABIgDAAQgjAAgXgKgAPbBcIgLgbIgLgfIhlAAIgJAeIgJAcIgtAAIASg4IAVg5IAWg8IAWg3IBEAAIATA6IAWA9IAWA5QAKAdAKAXgAO4gBIgRgzIgPgvIgJAAIgRAvIgSAzIBMAAIAAAAgALcBcIAAhkIhjAAIAABkIgrAAIAAjkIArAAIAABXIBjAAIAAhXIArAAIAADkgAGBBcIAAjkICnAAIAAAlIh7AAIAAA2IBYAAIAAAlIhYAAIAAA+IB7AAIAAAmgAiyBcIAAjkIB4AAQAYAAAOAKQAOAKAGASQAEASAAAXQAAAUgEARQgHARgOAIQgOALgWAAIhNAAIAABMgAiGgSIBAAAQAOAAAHgKQAHgKAAgUQAAgVgHgKQgHgKgNAAIhBAAgAl+BcIAAjkICnAAIAAAlIh8AAIAAA2IBYAAIAAAlIhYAAIAAA+IB8AAIAAAmgAnjBcIAAi/IhjAAIAAC/IgrAAIAAjkIC5AAIAADkgAsyBcQAJgMAKgQIATgfIgPgkIgVguIgXgvIgXgoIA0AAIAUAlIAUAsIARArIAVgrIASgrQAJgUAGgSIAxAAQgLAdgOAeIgdA+QgPAcgPAcQgPAcgOAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.6,-14.3,207.2,28.7);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1DTQgZgVAAgdIABgFQACgcAXgTQAYgTAhAAQAOAAAOAEIAAkdIEtgnIAAFbQAAAdgYAVQgYAVgiAAQgiAAgYgVQgYgVAAgdQAAgdAYgVQAYgVAiAAQAPAAAOAEIAAijIjCAcIAAD2QAAASgLAQQgKAQgRAJQgUALgYAAQgjAAgXgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-23.2,41.4,46.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYC3QgagUACggQADgeAdgTQAcgSAfAFIgpjvQgCgKAGgIQAGgIAKgCQAKgBAJAFQAIAGACAKQAWgHAbAHQAaAHATAQQAtAogTA+QgKAfgTAWQAMglgGgaQgEgWgRgMQgOgKgTABQgSAAgMAJIAkDZQAGAegXAXQgTAWggAEIgHAAQgbAAgWgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-20,22.7,40);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlTEMQgzgXhAgzQh+hjg9iDQghhIAVgzQAJgWASAAQAVABAbAeQBBBKA9AfQAeAQASABQgRgPgXgdQgtg4gdhBQgVgyAAgtQABgqASgWQASgXAcAIQAeAIAeArQA7BSBLBDQAmAiAaARQgSgagSgtQglhZgBhdQgBhlAugSQAVgJAVASQAXATARAsQAaBCB7DkQgRgtgOhFQgciKASh2QAFgjASgQQAQgPATAFQAWAFARAXQASAYAGAmQAEAZAUBfQAUBeAAgHQAAheAUg4QASgwAagIQAZgIASAbQATAcgCAvQgDBRAHA9QADAeAFAPQAAgUAHgdQAOg4AfgoQAlgxAdAWQAeAVgKBFQgKBEALA4QAEATAFANQACgRAXgnQAcgwAcAOQAZAMADApQADAeAYBLIAWBEQgDgUgBgWQgCgwAKgYQAUgoAdAYQAYAVALAoQAyC4g/B+QgeA8hKgBQgWAAgZgHIgUgHIpBDxg");
	this.shape.setTransform(0,-19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-74.9,132.6,111.2);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKyCsQgYgYgBhGIAAisIDPAAIAAA3IiBAAIAAA8IBwAAIAAA3IhwAAQAAAqAJANQALAQAuAAQAdABAjgLIAAA0QgbANgtAAQhRAAgegegAG/DCQgXgLAAgdIAAj4IDPAAIAAA3IiBAAIAAA8IB2AAIAAA3Ih2AAIAAB+QglAAgSgIgAhJCsQgegfAAhbQAAhaAegeQAcgeBPAAQAnAAAYANIAAA0QgcgKgfAAQgmAAgJAPQgLAQAABAQAABCALAPQAJAQAmAAQAjABAegLIgMA2QgYALghAAQhOAAgdgegAlbC6IAAg1QA0AOAmAAQAcABALgKQAFgEAAgOQABgNgGgFQgIgGg0gQQgtgPgPgRQgTgTACgqQACgrARgQQAegdA/AAQA8AAAcARIAAA0QgwgNgkAAQgcAAgLAHQgFAGgBANQAAANAGAFQAJAEA1ASQAwAQAOAQQAVAXgDAqQgCAsgYAQQgfAYhAAAQg7AAgfgQgAo9CsQgYgYABhGIAAisIDPAAIAAA3IiDAAIAAA8IBxAAIAAA3IhxAAQAAArAJAMQALAQAuAAQAdABAlgLIAAA0QgdANgsAAQhQAAgggegArfC8QgRgMgTgkIh5jUIAAEMIhFAAIAAmHQAJgHAdAAQAjAAASAOQASALASAkIB6DVIAAkLIVBAAQAAAagjAQQgcAMgWAAIyoAAIAAFSQgLAEgbAAQgiAAgTgNgAE3DEIgLg4IhkAAIgKA4IhDAAQAojEAzheIBZAAQA2BrAmC3gADTBbIBOAAQgShFgVgsQgUAsgTBFgAOUC2QgHgHAAgMQAAgKAHgHQAIgJALAAQALAAAIAJQAIAHAAAKQAAAMgIAHQgIAHgLAAQgLAAgIgHgAOZCVQgGAGAAAIQAAAJAGAGQAFAGAJAAQAIAAAGgGQAFgGAAgJQAAgIgFgGQgGgGgIAAQgJAAgFAGgAOtCwIgCgFQgBgFgEAAIgEAAIAAAKIgFAAIAAgZIAKgBQAFAAAEACIACAGQAAAEgFABQAEABABAHQAAAEACABgAOkCbIAAAHIADAAQAFAAAAgEQAAgEgFAAg");
	this.shape.setTransform(0,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF0024").s().p("AhgBXQAXgHAVgXQAgggAJg1QAGgmAQgMQAKgIASAAIA6AAIgLBPQgKAkgZAaQgPAPgbAJQgUAIgSAAg");
	this.shape_1.setTransform(78.6,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.2,-26,192.4,52);


(lib.knop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJtCLQALgVAOgdQgYhYgfhJIAnAAQAVAzASBAQAbhHALgsIAnAAQgVBIgmBXQgLAcgNAYgAGxBJIAAjSIAmAAIAABGQARgKAXAAQAhAAAPARQAQASAAAsQAAAugSAUQgQARgoAAQgoAAgcgMgAHggoQgJAEAAAHIAABOQAMAFASAAQAVAAAHgJQAIgKAAghQAAgagIgKQgIgKgUAAQgNAAgIAEgADBBEQgVgUAAguQAAgqATgUQARgRAkAAQAnAAAPARQAQAVgCA0IhkAAQAAAXAKAJQAIAIAWAAQAVAAAXgHIAGAfQgbAIgcAAQgkAAgSgRgAEVgOQAAgUgHgHQgHgHgQABQgSAAgIAGQgHAIgCATIBBAAIAAAAgAhhBKQgPgLAAgeQAAgfARgJQANgJAfAAQATAAAUAFQAAgVgIgGQgHgIgYABQgaAAgVAHIgHgfQAggIAeAAQAjAAAOANQAQAOAAAhIAABZQgdANgnAAQglAAgOgLgAhCANQgGAEAAAPQAAAPAGAFQAFAEARAAQARAAAPgFIAAgnQgLgCgUgBQgRABgGADgAjqBEQgVgUAAguQAAgrAVgTQASgRAmAAQAbAAAVAHIgJAhQgSgHgSAAQgWAAgJAJQgKAKAAAcQAAAdAKALQAJAJAWAAQASAAASgHIAJAgQgUAIgcAAQgmAAgSgRgAmVBNIAIgeQAUAHAaAAQARAAAGgDQAIgFAAgLQAAgIgHgEQgHgFgUgBQgbgDgMgIQgNgIAAgYQAAgcASgNQAQgKAgAAQAcAAAYAIIgIAeQgWgIgXABQgPAAgGACQgHAEAAAMQAAAIAHADQAGADATADQAdACAMAJQANALAAAWQAAAcgSANQgQALggAAQghAAgXgIgAooBEQgVgUAAguQAAgqAUgUQARgRAkAAQAnAAAOARQAQAVgCA0IhkAAQAAAXAKAJQAJAIAVAAQAVAAAXgHIAGAfQgbAIgbAAQglAAgSgRgAnTgOQgBgUgHgHQgHgHgQABQgSAAgHAGQgIAIgCATIBCAAIAAAAgAFdBOQgFgFAAgOQAAgOAFgEQAFgEAOAAQAOAAAFAEQAFAEAAAOQAAAOgFAFQgFAEgOAAQgOAAgFgEgABFBQIAAh4IgaAAIAAggIAaAAIAAgLQAAgfARgNQAOgLAaAAQAYAAASAGIgIAfQgNgFgPAAQgZAAAAAZIAAAJIAzAAIAAAgIgzAAIAAB4gAqGBQIAAhQQAAgagHgJQgGgIgUAAQgPAAgNADIAAB4IgmAAIAAiPQAigOAoAAQAhAAAPAPQAPARAAApIAABUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CBCBCB","#FFFFFF"],[0,0.635],0,27.5,0,-27.4).s().p("AqcEOQhwAAhQhQQhPhPABhvQgBhuBPhPQBQhQBwAAIU5AAQBwAABPBQQBPBPAABuQAABvhPBPQhPBQhwAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-27,188,54);


(lib.coffee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coffe();
	this.instance.setTransform(-116,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-119,233,239);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC002B").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t2 = new lib.Symbol15();
	this.t2.setTransform(0.5,8.9);

	this.t1 = new lib.Symbol14();
	this.t1.setTransform(-0.3,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-17.2,181.4,32.7);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t4 = new lib.Symbol13();
	this.t4.setTransform(1.4,44.5);

	this.t3 = new lib.Symbol12();
	this.t3.setTransform(0.5,13.6);

	this.t2 = new lib.Symbol11();
	this.t2.setTransform(1.2,-15.6);

	this.t1 = new lib.Symbol10();
	this.t1.setTransform(0.8,-46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-58.3,187.9,114.1);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t = new lib.Symbol6();

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-11.5,146.6,23.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t = new lib.Symbol5();

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-14,223.6,28.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.6,-14.3,207.2,28.7);


(lib.note2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.n = new lib.Symbol2();

	this.timeline.addTween(cjs.Tween.get(this.n).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-20,22.7,40);


(lib.note1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.n = new lib.Symbol3();

	this.timeline.addTween(cjs.Tween.get(this.n).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-23.2,41.4,46.3);


(lib.bd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.cup();
	this.instance.setTransform(55,-246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gr
	this.gr = new lib.Symbol1();
	this.gr.setTransform(89.4,-235.8);

	this.timeline.addTween(cjs.Tween.get(this.gr).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A2mSbQAAsPgBgFQB2ANB5ClQA8BTAkBQQBIAUBmgkQDMhHCVkUQBSiXA3ikQAnhyAti6QA8j6AUhLQA2jGBJi1QCcmLDSjOQBrhoBKgYIAHgoIAwhYQBAhfBPgkQD8hzEyIEQCYDdiCEDQhBCBhfBWIAoA+QAzBSAxBkQCeE/BcF2QCeKLlUKFQhpDKiQCxQhHBZgzAwMgj0AA1IABsNg");
	this.shape.setTransform(15.6,-56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-310.8,322.3,450.5);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t3 = new lib.Symbol9();
	this.t3.setTransform(-4.7,36.3,1,1,-5.7);

	this.t2 = new lib.Symbol8();
	this.t2.setTransform(-21.8,-3.1,1,1,-12);

	this.t1 = new lib.Symbol7();
	this.t1.setTransform(-22,-50.4,1,1,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-96,237.4,161.9);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 200;
		
		var tl = new TimelineLite();
		tl.fromTo(this.blk, 0.2, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.bd, 0.7, {x:"-=250", y:"+=250", rotation:"-=90", ease:Expo.easeOut}, 0.0)
		  .from(this.bd.gr, 2.0, {rotation:"-10", ease:Elastic.easeOut}, 0.2)
		  
		  .staggerFrom([this.n1.n, this.n2.n, this.n3.n, this.n4.n, this.n5.n], 0.6, {y:"+=80", scaleX:0, scaleY:0, ease:Sine.easeIn}, 0.3, 0.20)
		  .staggerTo([this.n1.n, this.n2.n, this.n3.n, this.n4.n, this.n5.n], 0.9, {y:"-=80", scaleX:0, scaleY:0, ease:Sine.easeOut}, 0.3, 0.80)
		  
		  
		  //2
		  .from(this.t1, 0.7, {rotation:"-=90", ease:Expo.easeOut}, 1.5)
		  .staggerFrom([this.t1.t1, this.t1.t2, this.t1.t3], 1.6, {y:"-=10", ease:Elastic.easeOut}, 0.1, 1.50)
		  .staggerFrom([this.t1.t1.t, this.t1.t2.t, this.t1.t3.t], 0.6, {x:"-=150", scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.1, 1.50)
		  
		  .staggerFrom([this.n10.n, this.n11.n, this.n12.n], 0.6, {y:"+=80", scaleX:0, scaleY:0, ease:Sine.easeIn}, 0.6, 1.30)
		  .staggerTo([this.n10.n, this.n11.n, this.n12.n], 0.9, {y:"-=80", scaleX:0, scaleY:0, ease:Sine.easeOut}, 0.6, 1.90)
		  
		  
		  //3
		  .to(this.bd, 0.7, {x:"-=250", y:"+=250", rotation:"-=90", ease:Expo.easeIn}, 3.0)
		  .to(this.bd.gr, 0.7, {rotation:"+=180", ease:Expo.easeIn}, 3.0)
		  .staggerTo([this.t1.t2.t, this.t1.t3.t], 0.6, {x:"-=250", scaleX:0, scaleY:0, ease:Back.easeIn}, 0.1, 3.00)
		  
		  .from(this.t2, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 3.7)
		  .from(this.coffee, 0.7, {x:"+=250", ease:Expo.easeOut}, 3.5)
		  
		  
		  //4
		  //.staggerTo([this.t1.t1.t, this.t2], 0.5, {x:"-=50", scaleX:0, scaleY:0, ease:Back.easeIn}, 0.05, 6.0)
		  .to(this.t1.t1.t, 0.5, {x:"-=250", scaleX:0, scaleY:0, ease:Back.easeIn}, 6.0)
		  .to(this.t2, 0.5, {scaleX:0, scaleY:0, ease:Back.easeIn}, 6.1)
		  .to(this.coffee, 0.5, {x:"-=250", ease:Expo.easeIn}, 6.2)
		  
		  .from(this.bg, 0.7, {x:"+=250", y:"+=250", rotation:"-=90", ease:Expo.easeOut}, 6.5)
		  .staggerFrom([this.t3.t1, this.t3.t2, this.t3.t3, this.t3.t4], 0.6, {y:"+=50", scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.1, 6.70)
		  .from(this.bt, 2.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 6.9)
		  .staggerFrom([this.t4.t1, this.t4.t2], 0.6, {y:"+=50", scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.1, 6.90)
		  .from(this.logo, 0.7, {y:"+=250", ease:Expo.easeOut}, 7.2)
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 12)
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

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// bt
	this.bt = new lib.knop();
	this.bt.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(4,142);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(0,82.6);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(0,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// bg
	this.bg = new lib.Symbol16();
	this.bg.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// coffee
	this.coffee = new lib.coffee();
	this.coffee.setTransform(2,79);

	this.timeline.addTween(cjs.Tween.get(this.coffee).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(-134.9,-40);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(21.1,-97);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bd
	this.bd = new lib.bd();
	this.bd.setTransform(-89,273.1);

	this.timeline.addTween(cjs.Tween.get(this.bd).wait(1));

	// n12345
	this.n12 = new lib.note2();
	this.n12.setTransform(87.8,97.4,0.504,0.504,39.7);

	this.n11 = new lib.note2();
	this.n11.setTransform(79.8,146.2,0.801,0.801,54.7);

	this.n10 = new lib.note1();
	this.n10.setTransform(-85,45.9,0.711,0.711,-19.2);

	this.n5 = new lib.note2();
	this.n5.setTransform(78.6,-55.4,0.532,0.532,34.7,0,0,0,-0.1);

	this.n4 = new lib.note2();
	this.n4.setTransform(8.8,-149.2,0.676,0.676,4.7);

	this.n3 = new lib.note2();
	this.n3.setTransform(-33.5,-122.8,1,1,-10.3);

	this.n2 = new lib.note1();
	this.n2.setTransform(-70.1,-64.1,0.6,0.6,-25);

	this.n1 = new lib.note1();
	this.n1.setTransform(14,-79,1,1,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n1},{t:this.n2},{t:this.n3},{t:this.n4},{t:this.n5},{t:this.n10},{t:this.n11},{t:this.n12}]}).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC002B").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411,-200,822,723);


// stage content:
(lib.nescafe_240x400 = function(mode,startPosition,loop) {
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