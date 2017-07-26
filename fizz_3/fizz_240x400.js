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
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/clouds.png", id:"clouds"},
		{src:"images/geotag.png", id:"geotag"},
		{src:"images/map.png", id:"map"},
		{src:"images/paris.png", id:"paris"},
		{src:"images/plane.png", id:"plane"},
		{src:"images/product.png", id:"product"},
		{src:"images/table.png", id:"table"},
		{src:"images/tree.png", id:"tree"}
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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,50);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,153);


(lib.geotag = function() {
	this.initialize(img.geotag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,64);


(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,274);


(lib.paris = function() {
	this.initialize(img.paris);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,315);


(lib.plane = function() {
	this.initialize(img.plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,58);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,187);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,178);


(lib.tree = function() {
	this.initialize(img.tree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,144);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAqIAAgIQACgVAGgOQAEgRAKgOIgkAAIAAgJIAvAAIAAAJQgMAQgEAPQgFANgCAWIgBAIg");
	this.shape.setTransform(56.3,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACAqIAAhHIgPABIAAgIIAbgFIAABTg");
	this.shape_1.setTransform(50.2,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAjQgGgJAAgRIAAgRQAAgQAGgJQAHgJAJAAQAKAAAHAJQAGAJAAAQIAAARQAAARgGAJQgGAIgLAAQgJAAgHgIgAgHgbQgDAGAAALIAAAVQAAAMADAFQADAGAEAAQAFAAADgGQADgFAAgMIAAgVQAAgLgDgGQgDgGgFAAQgEAAgDAGg");
	this.shape_2.setTransform(45.3,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWArIAAgIIAWgfIAIgLQACgGAAgEQAAgHgDgEQgDgFgEAAQgFAAgDAFQgDAFAAAIIgMAAQAAgMAGgHQAHgIAKAAQAKAAAGAHQAGAGAAALQAAAIgEAHIgLAOIgOAXIAfAAIAAAJg");
	this.shape_3.setTransform(39.7,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAjQgGgJAAgQIAAgRQgBgQAIgKQAIgJAKAAIAHABIAHACIgCAJIgGgCIgGgBQgFAAgFAHQgEAHAAALIAAADQADgEAEgCQAEgBADAAQAJAAAGAIQAFAGABAMQgBANgGAIQgHAIgKAAQgIAAgIgIgAgGgCIgFAEIAAAIQAAAMAEAGQAEAGADAAQAGAAACgFQAEgGAAgJQAAgJgEgFQgDgEgFAAQgDAAgDACg");
	this.shape_4.setTransform(31.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAjQgGgJAAgRIAAgRQAAgQAGgJQAHgJAJAAQAKAAAHAJQAGAJAAAQIAAARQAAARgGAJQgGAIgLAAQgJAAgHgIgAgHgbQgDAGAAALIAAAVQAAAMADAFQADAGAEAAQAFAAADgGQADgFAAgMIAAgVQAAgLgDgGQgDgGgFAAQgEAAgDAGg");
	this.shape_5.setTransform(26,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAlQgHgGAAgMQAAgHAEgFQAEgGAGgBQgFgCgDgFQgEgFAAgHQAAgLAGgGQAHgGAIAAQAJAAAHAGQAGAGAAALQAAAHgDAFQgEAFgFACQAGABAEAGQAEAFAAAHQAAAMgHAGQgHAGgKAAQgJAAgHgGgAgHAHQgEAFAAAHQAAAHAEAEQADAEAEAAQAFAAADgEQAEgEAAgHQAAgHgEgFQgDgEgFAAQgEAAgDAEgAgGgdQgDAEAAAGQAAAHADAEQADAEADAAQAEAAADgEQADgEAAgHQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_6.setTransform(17.9,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWArIAAgIIAWgfIAIgLQACgGAAgEQAAgHgDgEQgDgFgEAAQgFAAgDAFQgDAFAAAIIgMAAQAAgMAGgHQAHgIAKAAQAKAAAGAHQAGAGAAALQAAAIgEAHIgLAOIgOAXIAfAAIAAAJg");
	this.shape_7.setTransform(12.3,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAYQgGgIAAgMIAAgHQAAgMAGgIQAGgIAKAAQAKAAAGAGQAGAHgBAKIAAAAIgKAAQAAgGgDgEQgDgEgFAAQgFAAgDAFQgCAGAAAIIAAAHQAAAJACAFQADAFAFAAQAFAAADgDQADgDAAgGIAKAAIAAAAQABAJgHAGQgGAGgJAAQgKAAgGgIg");
	this.shape_8.setTransform(4.7,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_9.setTransform(35.6,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAKAAIAAALg");
	this.shape_10.setTransform(21.9,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.9,61.7,19.8);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAqIAAgIQACgVAGgOQAEgRAKgOIgkAAIAAgJIAvAAIAAAJQgMAQgEAPQgFANgCAWIgBAIg");
	this.shape.setTransform(62.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACAqIAAhHIgPABIAAgIIAbgFIAABTg");
	this.shape_1.setTransform(56.2,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAjQgGgJAAgRIAAgRQAAgQAGgJQAHgJAJAAQAKAAAHAJQAGAJAAAQIAAARQAAARgGAJQgGAIgLAAQgJAAgHgIgAgHgbQgDAGAAALIAAAVQAAAMADAFQADAGAEAAQAFAAADgGQADgFAAgMIAAgVQAAgLgDgGQgDgGgFAAQgEAAgDAGg");
	this.shape_2.setTransform(51.3,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWArIAAgIIAWgfIAIgLQACgGAAgEQAAgHgDgEQgDgFgEAAQgFAAgDAFQgDAFAAAIIgMAAQAAgMAGgHQAHgIAKAAQAKAAAGAHQAGAGAAALQAAAIgEAHIgLAOIgOAXIAfAAIAAAJg");
	this.shape_3.setTransform(45.8,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_4.setTransform(41.7,4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAqIAAgIQACgVAGgOQAEgRAKgOIgkAAIAAgJIAvAAIAAAJQgMAQgEAPQgFANgCAWIgBAIg");
	this.shape_5.setTransform(37.6,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAjQgGgJAAgRIAAgRQAAgQAGgJQAHgJAJAAQAKAAAHAJQAGAJAAAQIAAARQAAARgGAJQgGAIgLAAQgJAAgHgIgAgHgbQgDAGAAALIAAAVQAAAMADAFQADAGAEAAQAFAAADgGQADgFAAgMIAAgVQAAgLgDgGQgDgGgFAAQgEAAgDAGg");
	this.shape_6.setTransform(32.1,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_7.setTransform(28,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAqIAAgIQACgVAGgOQAEgRAKgOIgkAAIAAgJIAvAAIAAAJQgMAQgEAPQgFANgCAWIgBAIg");
	this.shape_8.setTransform(23.9,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWArIAAgIIAWgfIAIgLQACgGAAgEQAAgHgDgEQgDgFgEAAQgFAAgDAFQgDAFAAAIIgMAAQAAgMAGgHQAHgIAKAAQAKAAAGAHQAGAGAAALQAAAIgEAHIgLAOIgOAXIAfAAIAAAJg");
	this.shape_9.setTransform(18.4,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAYQgGgIAAgMIAAgGQAAgNAGgIQAHgIAKAAQALAAAGAIQAHAIAAANIAAAGQAAAMgHAIQgGAIgLAAQgKAAgHgIgAgIgRQgDAGAAAJIAAAGQAAAIADAGQADAFAFAAQAGAAADgFQADgGAAgIIAAgGQAAgJgDgGQgDgFgGAAQgFAAgDAFg");
	this.shape_10.setTransform(10.5,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAKAfIAAg0IgTAAIAAA0IgMAAIAAg9IArAAIAAA9g");
	this.shape_11.setTransform(5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.9,67.7,19.8);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAbQgEgFgBgIQAAgJAHgFQAGgEAJAAIAJAAIAAgGQAAgGgDgDQgCgDgEAAQgEAAgCADQgDADAAAEIgLAAIAAgBQAAgHAGgGQAGgFAIAAQAJAAAGAFQAFAGABAKIAAAbIAAAIIABAGIgLAAIgBgEIgBgEQgDAEgDADQgDACgEAAQgJAAgEgFgAgGAFQgEAEAAAFQAAAEADADQABACAEAAQACAAAEgCQADgCACgEIAAgNIgJAAQgDAAgDADg");
	this.shape.setTransform(42.4,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAYQgGgIAAgMIAAgHQAAgMAGgIQAGgIAKAAQAKAAAGAGQAGAHgBAKIAAAAIgKAAQAAgGgDgEQgDgEgFAAQgFAAgDAFQgCAGAAAIIAAAHQAAAJACAFQADAFAFAAQAFAAADgDQADgDAAgGIAKAAIAAAAQABAJgHAGQgGAGgJAAQgKAAgGgIg");
	this.shape_1.setTransform(37.2,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAsIAAhWIALAAIAAAHQADgEAEgCQADgCADAAQAKAAAFAIQAGAJAAAOIAAAHQAAALgGAHQgFAIgKAAQgDgBgDgBQgEgCgCgEIAAAfgAgGgfQgCABgCAEIAAAeIAEAGQADABADABQAFAAADgGQADgEAAgHIAAgHQAAgKgDgGQgDgGgFAAQgDAAgDADg");
	this.shape_2.setTransform(31.9,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAsIgDgBIABgJIACAAIABAAQAEAAACgDIADgHIACgGIgTg9IAMAAIALApIAAADIAAAAIALgsIANAAIgWBIQgCAGgCAFQgEAEgHAAIgDAAg");
	this.shape_3.setTransform(26.6,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAfIgNgbIgGAAIAAAbIgMAAIAAg9IAMAAIAAAaIAGAAIAMgaIAPAAIgUAeIAWAfg");
	this.shape_4.setTransform(21.7,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAfIAAgbIgTAAIAAAbIgMAAIAAg9IAMAAIAAAbIATAAIAAgbIAMAAIAAA9g");
	this.shape_5.setTransform(15.9,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAYQgGgIAAgMIAAgGQAAgNAGgIQAHgIAKAAQALAAAGAIQAHAIAAANIAAAGQAAAMgHAIQgGAIgLAAQgKAAgHgIgAgIgRQgDAGAAAJIAAAGQAAAIADAGQADAFAFAAQAGAAADgFQADgGAAgIIAAgGQAAgJgDgGQgDgFgGAAQgFAAgDAFg");
	this.shape_6.setTransform(10.3,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAIAfIgNgbIgGAAIAAAbIgMAAIAAg9IAMAAIAAAaIAGAAIAMgaIAPAAIgUAeIAWAfg");
	this.shape_7.setTransform(5.2,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.9,47.8,19.8);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAfIAAgYIgKAAIgKAYIgNAAIAOgaQgGgCgDgDQgCgEAAgGQgBgJAGgGQAGgFAIAAIAXAAIAAA9gAgFgSQgDADABAFQAAAEABADQADADADAAIALAAIAAgVIgLAAQgDAAgCADg");
	this.shape.setTransform(54.4,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAfIAAgpIAAAAIgTApIgMAAIAAg9IAMAAIAAApIATgpIAMAAIAAA9g");
	this.shape_1.setTransform(49.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAfIAAgbIgTAAIAAAbIgMAAIAAg9IAMAAIAAAbIATAAIAAgbIAMAAIAAA9g");
	this.shape_2.setTransform(43.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAZQgGgIAAgMIAAgIQAAgMAGgIQAHgIAIAAQALAAAGAHQAFAHAAANIAAAGIggAAIAAADQAAAIAEAFQAEAFAEAAQAFAAAEgBQADgCADgDIAEAIQgDADgFACQgFACgHAAQgJAAgHgHgAgGgRQgDAFgBAIIAVAAIAAgDQAAgHgDgEQgDgEgFAAQgDAAgDAFg");
	this.shape_3.setTransform(38.2,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARApIAAgTIghAAIAAATIgLAAIgBgcIAFAAQAEgFACgHQACgFABgNIAAgXIAjAAIAAA1IAIAAIgBAcgAgDgRQAAALgCAGQgDAIgDAFIAUAAIAAgrIgLAAg");
	this.shape_4.setTransform(32.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAZQgGgIAAgMIAAgIQAAgMAGgIQAHgIAIAAQALAAAGAHQAFAHAAANIAAAGIggAAIAAADQAAAIAEAFQAEAFAEAAQAFAAAEgBQADgCADgDIAEAIQgDADgFACQgFACgHAAQgJAAgHgHgAgGgRQgDAFgBAIIAVAAIAAgDQAAgHgDgEQgDgEgFAAQgDAAgDAFg");
	this.shape_5.setTransform(27,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAWAAQAJAAAFAEQAGAFAAAIQAAAFgCADQgDAEgEABQAFAAAEAEQADAEAAAFQAAAJgGAFQgFAEgLAAgAgKAWIALAAQAFAAACgCQADgDAAgEQAAgFgCgCQgDgDgFAAIgLAAgAgKgDIAKAAQAEAAACgCQADgDAAgEQAAgFgDgCQgDgCgDAAIgKAAg");
	this.shape_6.setTransform(21.8,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAYQgGgIAAgMIAAgGQAAgNAGgIQAHgIAKAAQALAAAGAIQAHAIAAANIAAAGQAAAMgHAIQgGAIgLAAQgKAAgHgIgAgIgRQgDAGAAAJIAAAGQAAAIADAGQADAFAFAAQAGAAADgFQADgGAAgIIAAgGQAAgJgDgGQgDgFgGAAQgFAAgDAFg");
	this.shape_7.setTransform(16.1,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAsIAAhWIALAAIAAAHQADgEAEgCQADgCADAAQAKAAAFAIQAGAJAAAOIAAAHQAAALgGAHQgFAIgKAAQgDgBgDgBQgEgCgCgEIAAAfgAgGgfQgCABgCAEIAAAeIAEAGQADABADABQAFAAADgGQADgEAAgHIAAgHQAAgKgDgGQgDgGgFAAQgDAAgDADg");
	this.shape_8.setTransform(10.6,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKAfIAAg0IgTAAIAAA0IgMAAIAAg9IArAAIAAA9g");
	this.shape_9.setTransform(5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.9,60,19.8);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAfIAAgpIgBAAIgSApIgMAAIAAg9IAMAAIAAApIATgpIAMAAIAAA9g");
	this.shape.setTransform(27.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAfIgNgbIgGAAIAAAbIgMAAIAAg9IAMAAIAAAaIAGAAIAMgaIAPAAIgUAeIAWAfg");
	this.shape_1.setTransform(22.3,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAYQgGgIAAgMIAAgGQAAgNAGgIQAHgIAKAAQALAAAGAIQAHAIAAANIAAAGQAAAMgHAIQgGAIgLAAQgKAAgHgIgAgIgRQgDAGAAAJIAAAGQAAAIADAGQADAFAFAAQAGAAADgFQADgGAAgIIAAgGQAAgJgDgGQgDgFgGAAQgFAAgDAFg");
	this.shape_2.setTransform(16.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAsIAAhWIALAAIAAAHQADgEAEgCQADgCADAAQAKAAAFAIQAGAJAAAOIAAAHQAAALgGAHQgFAIgKAAQgDgBgDgBQgEgCgCgEIAAAfgAgGgfQgCABgCAEIAAAeIAEAGQADABADABQAFAAADgGQADgEAAgHIAAgHQAAgKgDgGQgDgGgFAAQgDAAgDADg");
	this.shape_3.setTransform(11,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAjQgHgIAAgQIAAgVQAAgPAHgJQAIgIAKAAQAMAAAHAHQAHAGAAAOIAAAAIgLAAQAAgJgEgFQgDgEgIAAQgFAAgEAGQgEAGAAALIAAAVQAAAMAEAGQAEAFAFAAQAIAAADgEQAEgEAAgKIALAAIAAABQAAAMgHAIQgGAGgNAAQgKAAgIgIg");
	this.shape_4.setTransform(5.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.9,32.7,19.8);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();
	this.instance.setTransform(-68,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,136,50);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AgWByIAAhYIhMiLIA0AAIAuBeIAvheIA0AAIhLCKIAABZg");
	this.shape.setTransform(47.4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AhTByIAAjjIBHAAQAvAAAVAOQAXAOAAAeQAAAVgKANQgKANgQADIAAABQAWAEAJAMQAKANAAAXQAAAfgWARQgXASgnAAgAgjBKIAgAAQASAAAKgIQAJgIAAgPQAAgdgnAAIgeAAgAgjgWIAcAAQASAAAJgGQAIgGAAgOQAAgOgJgFQgKgGgSAAIgaAAg");
	this.shape_1.setTransform(27.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AgTATQgHgHAAgMQAAgLAHgHQAHgHAMAAQANAAAHAHQAHAHAAALQAAAMgHAHQgIAHgMAAQgMAAgHgHg");
	this.shape_2.setTransform(11.7,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AhTByIAAggIBribIhpAAIAAgoICiAAIAAAgIhrCbIBvAAIAAAog");
	this.shape_3.setTransform(-1.9,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AhUByIAAggIBsibIhpAAIAAgoICjAAIAAAgIhsCbIBvAAIAAAog");
	this.shape_4.setTransform(-20.3,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AgXByIAAjjIAvAAIAADjg");
	this.shape_5.setTransform(-34.6,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AhAByIAAjjICBAAIAAAoIhRAAIAAA7IBLAAIAAAlIhLAAIAABbg");
	this.shape_6.setTransform(-47.9,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-23.8,118.7,47.6);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AAkBHIgKgiIgzAAIgKAiIghAAIAziNIAjAAIAzCNgAgRAMIAjAAIgQgyIgCgKIgRA8g");
	this.shape.setTransform(69.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AAcBHIAAg+Ig3AAIAAA+IgeAAIAAiNIAeAAIAAA4IA3AAIAAg4IAeAAIAACNg");
	this.shape_1.setTransform(55.7,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AgoBHIAAiNIBQAAIAAAZIgyAAIAAAgIAvAAIAAAWIgvAAIAAAlIAyAAIAAAZg");
	this.shape_2.setTransform(38.8,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AgoBHIAAiNIBQAAIAAAZIgxAAIAAAgIAuAAIAAAWIguAAIAAAlIAxAAIAAAZg");
	this.shape_3.setTransform(28.2,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AAcBHIAAg+Ig3AAIAAA+IgeAAIAAiNIAeAAIAAA4IA3AAIAAg4IAeAAIAACNg");
	this.shape_4.setTransform(15.2,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AgxBHIAAiNIBYAAIAAAZIg6AAIAAAeIAMAAQAaAAAQAMQAPAIAAAVQAAAtg5AAgAgTAuIALAAQANAAAHgEQAHgFAAgLQAAgKgHgEQgHgEgQAAIgIAAg");
	this.shape_5.setTransform(2.2,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AgxA2QgRgTAAgjQgBgjATgSQARgTAfAAQAgAAASATQASATAAAiQAAAjgSATQgRATghAAQgfAAgSgTgAgagjQgIAMgBAXQABAXAIAMQAKANAQAAQAkAAAAgwQAAgvgkAAQgRAAgJAMg");
	this.shape_6.setTransform(-11.9,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBBB1F").s().p("AgwBHIAAiNIAuAAQAYAAANAMQAOAKAAAXQAAAXgPAKQgOAMgZAAIgNAAIAAAzgAgSgCIAKAAQAMgBAHgFQAHgGAAgKQAAgLgFgFQgGgFgLAAIgOAAg");
	this.shape_7.setTransform(-25.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBBB1F").s().p("AAsBcIAAgqIhYAAIAAAqIgcAAIAAhDIAKAAQAOgaAJgcQAIgdAEghIBRAAIAAB0IATAAIAABDgAgNgSQgIAXgIAUIA1AAIAAhaIgbAAQgDAWgHAZg");
	this.shape_8.setTransform(-39,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBBB1F").s().p("AgxA2QgRgTAAgjQgBgjATgSQARgTAfAAQAgAAASATQASATAAAiQAAAjgSATQgRATghAAQgfAAgSgTgAgagjQgJAMAAAXQAAAXAJAMQAKANAQAAQAkAAAAgwQAAgvgkAAQgRAAgJAMg");
	this.shape_9.setTransform(-53.9,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBBB1F").s().p("AAaBHIAAh0IgzAAIAAB0IgeAAIAAiNIBvAAIAACNg");
	this.shape_10.setTransform(-68.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-15.6,156.3,31.3);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.paris, null, new cjs.Matrix2D(1,0,0,1,-120.5,-271.3)).s().p("ABrG0QA1ggA1glQAcgTAOgNQAWgUAKgVQARgjgGgxQgEgegTg4Qgqh+grkmQC5g8GXgvQF1grAoAOIAANkgAo+G0QA4gaBIgKQAsgGAwAAIAVgBQAIgCAGgDQANAWAFAagAylAGQAIgNAKgDIAAADIgIAHQgIAGgHAKIAFgKg");
	this.shape.setTransform(-149.5,136.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.paris, null, new cjs.Matrix2D(1,0,0,1,-120,-157.5)).s().p("AjyYnQgEgggPgcQgFgKgKgQQAFgFACgHQACgMgKgPQgOgZgZgLQgIgbAAgjQABg4gCgdQgEgvgXgbQgeghg4gDQgggBg+AQQgaAIgPgBQgegCgXgdQgIgLgHgOQAVgGAQgIQARgJAHgJQALgOgGgOQAIgBAGgFQAGgFACgHQADgIgDgHQgCgJgHgEQgIgHgWAAQgqAAghACQggACgUADIgIACQgHgDgIgBQgRgDgjAGQjWAcheAVQgTAEgNAGQgNgFgJgDQgagFgQAMMAAAgpZMAldAAAMAAAAxMgAo6YnQA4gaBJgKQAsgHAwAAIAVgBQAIgBAFgEQAOAWAEAbgAyhR4QAJgOAJgEIAAADIgHAHQgIAJgHAJIAEgKg");
	this.shape_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-157,389.1,337);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CA3E").s().p("Ak3HIQgGgEgBgHQgBgHAEgGQAEgGAHgCQAvgJAvgRQAHgDAGADQAHAEADAGQACAHgDAHQgDAGgHADQgyASgyAKIgDAAQgFAAgFgDgAiJGPQgHgCgEgHQgDgGACgHQACgHAGgEQAvgZAZgdQAFgGAHgBQAHAAAGAFQAGAEAAAHQABAIgFAFQgdAjg1AcQgEADgEAAIgFgBgAgaENQgHgBgFgGQgEgFABgIIAAgPIAAAAQgCglgQgiQgEgGADgHQACgHAGgDQAHgDAHACQAHACADAGQAUAoACAtIAAAAQABALgBAKQgBAIgGAEQgFAEgGAAIgCAAgAhpBpQgbgZgFgSQgKgbATglQADgHAHgCQAHgCAGADQAHADACAGQADAFgEAHQgLAYAFAQIAAABQAEAKASARQAFAFAAAHQAAAIgFAFQgFAFgHAAIAAAAQgHAAgFgEgAhZg4QgHgBgEgGQgDgGABgIQAMgzAIgQQAIgSANgNQAFgFAHAAQAHAAAFAFQAGAFAAAHQAAAIgFAFQgJAJgFALQgHAPgLAuQgBAHgHAEQgEADgFAAIgEgBgAAMi2QgGgEgBgHQgBgHAEgHQAEgFAHgCQAagFAgAAQAXAAAVgCQAHAAAFAEQAGAFABAHQAAAIgEAFQgFAGgHAAQgWADgZgBQgcABgYAEIgDAAQgFAAgFgDgADAjMQgHgDgDgHQgCgGADgHQADgHAGgCQAugSAWgjQAEgGAHgBQAIgCAGAEQAGAEABAHQACAHgEAGQgcAtg5AVIgGABIgHgBgAErlRQgHgBgFgGQgEgFAAgHQAEgogNgnQgDgHADgGQAEgHAGgCQAHgCAHADQAGADADAHQAQAugFAvQgBAHgFAFQgFAEgGAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-45.9,64,91.9);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.geotag();
	this.instance.setTransform(-25,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-32,50,64);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.451,1],0,8,-29,8).s().p("AkXBvQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQBjhFCCgyQBRghBfgZQBNgVBMgOQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQhMANhMAVQhfAahQAhQiBAwhjBFIgDABIgBAAg");
	this.shape.setTransform(-133.3,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.451,1],-9.2,0,9.3,0).s().p("AHyDWQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQhXhrk3h0QhcgihlghQhrgih2ggIgBAAQgTgGhFgaQg7gWgcgFQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAcAFA9AXQBEAaATAFQB3AgBrAiQBlAhBcAjQE7B1BYBtQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABIAAAAg");
	this.shape_1.setTransform(111.4,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.map, null, new cjs.Matrix2D(1,0,0,1,-120,-197.2)).s().p("AuDL+IArruIgjiOIkzp/IZZAAIFdIPIA6BCIFtDBIAALpg");
	this.shape_2.setTransform(-18.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.7,-75.7,323.5,153.3);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.map, null, new cjs.Matrix2D(1,0,0,1,-194,-100.6)).s().p("ABOHMQmOjPhehlQhdhnBlklQAyiUBGiAILph9IAAULQi1hTjIhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-64.6,92,129.3);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.map, null, new cjs.Matrix2D(1,0,0,1,-30.7,-39.8)).s().p("AkyGOIAAsbIJlAAIAAMbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-39.8,61.5,79.7);


(lib.Symbol27copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AAqBHIAAiNIAeAAIAACNgAhHBHIAAiNIAeAAIAAA3IAKAAQAbAAANAMQAPAJABAUQAAAXgPALQgNALgdAAgAgpAuIAIAAQAPAAAHgEQAHgFAAgLQAAgKgGgEQgIgEgQAAIgHAAg");
	this.shape.setTransform(87.9,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AgOBHIAAh0IgmAAIAAgZIBqAAIAAAZIgoAAIAAB0g");
	this.shape_1.setTransform(73.6,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AAcBHIAAg3QgPAFgKACIgSABQgTAAgLgJQgMgKAAgQIAAg7IAfAAIAAAzQAAAKAEAFQAFAEALAAIAOAAIAUgGIAAhAIAeAAIAACNg");
	this.shape_2.setTransform(60.8,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AgnBHIAAiNIBQAAIAAAZIgyAAIAAAgIAuAAIAAAWIguAAIAAAlIAyAAIAAAZg");
	this.shape_3.setTransform(49.2,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AAwBHIAAhDIAAgKIABghIgBAAIglBuIgZAAIgjhuIgBAAIACAsIAABCIgbAAIAAiNIApAAIAiBrIAAAAIAjhrIApAAIAACNg");
	this.shape_4.setTransform(34.4,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AAlBeIAAhEIACgoIgBAAIhABsIglAAIAAiNIAbAAIAABDIAAATIgBAUIABAAIBAhqIAkAAIAACNgAghhCQgMgIgBgTIAbAAQAAAKAFAEQAEAEAKAAQAJAAAFgEQAFgFABgJIAbAAQgCASgMAIQgMAJgVAAQgWAAgLgIg");
	this.shape_5.setTransform(12.8,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AgnBHIAAiNIBQAAIAAAZIgzAAIAAAgIAvAAIAAAWIgvAAIAAAlIAzAAIAAAZg");
	this.shape_6.setTransform(-0.1,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBBB1F").s().p("AgxA2QgRgTAAgjQgBgjATgSQARgTAfAAQAgAAASATQASATAAAiQAAAjgSATQgRATghAAQgfAAgSgTgAgagjQgJAMAAAXQAAAXAJAMQAKANAQAAQAkAAAAgwQAAgvgkAAQgRAAgJAMg");
	this.shape_7.setTransform(-13.4,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBBB1F").s().p("Ag0BHIAAiNIAtAAQAdAAANAJQANAIAAATQABANgGAJQgGAHgKACIAAABQAOACAFAHQAHAJAAAOQgBATgOALQgOALgYAAgAgWAuIAVAAQAKAAAGgFQAGgEAAgLQAAgRgYAAIgTAAgAgWgNIASAAQAKAAAGgEQAFgEABgIQAAgJgHgEQgFgDgMAAIgQAAg");
	this.shape_8.setTransform(-27.1,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBBB1F").s().p("AglA2QgQgTAAgjQAAgUAIgRQAIgRAQgJQAPgJASAAQAVAAAVAKIgKAZIgQgHQgIgDgIABQgPgBgJANQgKANABAVQAAAwAhAAQAPAAAWgIIAAAaQgSAHgWAAQgdAAgRgTg");
	this.shape_9.setTransform(-39.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-15.6,146.9,31.3);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("Ag5BFIAAgaQAIAEANAAQAIAAAFgEQAFgEAEgJIgyhlIAgAAIAhBOIABAAIACgFIAehJIAfAAIgsBjQgJATgHAJQgFAIgKAEQgKAEgOAAQgNAAgKgDg");
	this.shape.setTransform(40.3,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AAXBHIgyhHIAABHIgeAAIAAiNIAeAAIAABFIAyhFIAgAAIg0BFIA3BIg");
	this.shape_1.setTransform(28.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AAsBcIAAgqIhYAAIAAAqIgdAAIAAhDIALAAQAPgaAIgcQAIgdAEghIBRAAIAAB0IATAAIAABDgAgNgSQgIAXgIAUIA1AAIAAhaIgbAAQgDAWgHAZg");
	this.shape_2.setTransform(13.7,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("Ag1BBIAAgZQAJAEAMADQAMACAMAAQAhAAABgVQAAgJgMgFQgMgGgUAAIgOAAIAAgVIANAAQAUAAAKgFQAKgEAAgJQAAgIgFgEQgIgFgLABQgTAAgTALIgNgUQAMgIAOgEQANgEAPAAQAYAAANAKQAOAJAAAQQAAAOgJAKQgLAIgQADIAAABQAUABAKAHQAKAJAAAPQABATgRALQgPAMgbAAQgfAAgTgIg");
	this.shape_3.setTransform(0.4,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AgnBHIAAiNIBPAAIAAAZIgyAAIAAAgIAvAAIAAAWIgvAAIAAAlIAyAAIAAAZg");
	this.shape_4.setTransform(-10.8,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AgxA2QgRgTAAgjQgBgjATgSQARgTAfAAQAgAAASATQASATAAAiQAAAjgSATQgRATghAAQgfAAgSgTgAgagjQgIAMgBAXQABAXAIAMQAKANAQAAQAkAAAAgwQAAgvgkAAQgRAAgJAMg");
	this.shape_5.setTransform(-24.1,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AAaBHIAAh0IgzAAIAAB0IgeAAIAAiNIBvAAIAACNg");
	this.shape_6.setTransform(-38.9,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-15.6,96.8,31.3);


(lib.Symbol26copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AgoBHIAAiNIBQAAIAAAZIgyAAIAAAgIAvAAIAAAWIgvAAIAAAlIAyAAIAAAZg");
	this.shape.setTransform(63.2,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AAlBHIAAhEIACgoIgBAAIhABsIglAAIAAiNIAbAAIAABFIAAARIgBAUIABAAIBAhqIAkAAIAACNg");
	this.shape_1.setTransform(49.6,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("Ag0BHIAAiNIAtAAQAdAAANAJQAOAIAAATQAAANgGAJQgGAHgLACIAAABQAPACAFAHQAHAJAAAOQgBATgOALQgOALgYAAgAgVAuIAUAAQAKAAAGgFQAGgEAAgLQAAgRgXAAIgTAAgAgVgNIASAAQAJAAAGgEQAFgEAAgIQABgJgHgEQgGgDgLAAIgPAAg");
	this.shape_2.setTransform(35.7,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AgNBHIAAh0IgoAAIAAgZIBqAAIAAAZIgnAAIAAB0g");
	this.shape_3.setTransform(23.4,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AglA2QgQgTAAgjQAAgUAIgRQAIgRAQgJQAPgJASAAQAVAAAVAKIgKAZIgQgHQgIgDgIABQgPgBgJANQgKANABAVQAAAwAhAAQAPAAAWgIIAAAaQgSAHgWAAQgdAAgRgTg");
	this.shape_4.setTransform(12,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AgoBHIAAiNIBQAAIAAAZIgxAAIAAAgIAuAAIAAAWIguAAIAAAlIAxAAIAAAZg");
	this.shape_5.setTransform(0.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AhYBHIAAiNIAeAAIAAB0IAsAAIAAh0IAdAAIAAB0IAsAAIAAh0IAeAAIAACNg");
	this.shape_6.setTransform(-15.4,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBBB1F").s().p("AgnBHIAAiNIBQAAIAAAZIgzAAIAAAgIAvAAIAAAWIgvAAIAAAlIAzAAIAAAZg");
	this.shape_7.setTransform(-30.8,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBBB1F").s().p("AgOBHIAAh0IgmAAIAAgZIBqAAIAAAZIgnAAIAAB0g");
	this.shape_8.setTransform(-41.9,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBBB1F").s().p("Ag5BFIAAgaQAIAEANAAQAIAAAFgEQAFgEAEgJIgyhlIAgAAIAhBOIABAAIACgFIAehJIAfAAIgsBjQgJATgHAJQgFAIgKAEQgKAEgOAAQgNAAgKgDg");
	this.shape_9.setTransform(-53.7,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBBB1F").s().p("AAaBHIAAh0IgzAAIAAB0IgeAAIAAiNIBvAAIAACNg");
	this.shape_10.setTransform(-67,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-15.6,146.6,31.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AgOA5QgRgRgCgfIgcAAIAAA+IgeAAIAAiNIAeAAIAAA4IAcAAQAEgcAQgPQAOgPAbAAQAfAAAQATQARAUAAAhQAAAigRAUQgQATgfAAQgcAAgOgQgAAEgjQgGAMAAAXQAAAXAGAMQAIANAQAAQAgAAAAgwQAAgXgIgMQgIgMgQAAQgQAAgIAMg");
	this.shape.setTransform(64.6,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("Ag5BFIAAgaQAIAEANAAQAIAAAFgEQAFgEAEgJIgyhlIAgAAIAhBOIABAAIACgFIAehJIAfAAIgsBjQgJATgHAJQgFAIgKAEQgKAEgOAAQgNAAgKgDg");
	this.shape_1.setTransform(47.6,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AAcBHIAAg+Ig3AAIAAA+IgeAAIAAiNIAeAAIAAA4IA3AAIAAg4IAeAAIAACNg");
	this.shape_2.setTransform(34.1,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AAcBHIAAg+Ig3AAIAAA+IgeAAIAAiNIAeAAIAAA4IA3AAIAAg4IAeAAIAACNg");
	this.shape_3.setTransform(19.4,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AgoBHIAAiNIBQAAIAAAZIgxAAIAAAgIAuAAIAAAWIguAAIAAAlIAxAAIAAAZg");
	this.shape_4.setTransform(7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("Ag0BHIAAiNIAtAAQAcAAAOAJQAOAIAAATQgBANgFAJQgHAHgKACIAAABQAOACAHAHQAFAJAAAOQABATgOALQgPALgYAAgAgVAuIATAAQALAAAGgFQAGgEAAgLQAAgRgXAAIgTAAgAgVgNIASAAQAKAAAFgEQAGgEgBgIQAAgJgFgEQgHgDgKAAIgQAAg");
	this.shape_5.setTransform(-4.6,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AgOBHIAAh0IgmAAIAAgZIBqAAIAAAZIgoAAIAAB0g");
	this.shape_6.setTransform(-16.9,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBBB1F").s().p("AglA2QgQgTAAgjQAAgUAIgRQAJgRAOgJQAQgJASAAQAVAAAVAKIgKAZIgQgHQgIgDgIABQgPgBgKANQgJANAAAVQABAwAhAAQAPAAAVgIIAAAaQgRAHgVAAQgeAAgRgTg");
	this.shape_7.setTransform(-28.3,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBBB1F").s().p("AgxBHIAAiNIBYAAIAAAZIg6AAIAAAeIAMAAQAaAAAQAMQAPAIAAAVQAAAtg5AAgAgTAuIALAAQANAAAHgEQAHgFAAgLQAAgKgHgEQgHgEgQAAIgIAAg");
	this.shape_8.setTransform(-40.2,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBBB1F").s().p("AgxA2QgSgTAAgjQABgjARgSQASgTAfAAQAhAAARATQARATAAAiQAAAjgRATQgSATggAAQgfAAgSgTgAgZgjQgJAMAAAXQAAAXAJAMQAIANARAAQAkAAAAgwQAAgvgkAAQgRAAgIAMg");
	this.shape_9.setTransform(-54.4,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBBB1F").s().p("AglA2QgQgTAAgjQAAgUAIgRQAJgRAOgJQAQgJASAAQAVAAAVAKIgKAZIgQgHQgIgDgIABQgPgBgKANQgJANAAAVQABAwAhAAQAPAAAVgIIAAAaQgRAHgVAAQgeAAgRgTg");
	this.shape_10.setTransform(-67.9,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-15.6,153.1,31.3);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.clouds, null, new cjs.Matrix2D(1,0,0,1,-30.9,-40.5)).s().p("Ak0GVIAAsoIJpAAIAAMog");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-40,61.9,81);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.clouds, null, new cjs.Matrix2D(1,0,0,1,-192.3,-107.6)).s().p("AncHGIAAuLIO5AAIAAOLg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-44.9,95.4,90.9);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.clouds, null, new cjs.Matrix2D(1,0,0,1,-65.7,-102.9)).s().p("An8CpIAAlRIP5AAIAAFRg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-16.5,102,34);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.tree, null, new cjs.Matrix2D(1,0,0,1,-23.6,-39.8)).s().p("AjrGOIAAsbIHWAAIAAMbg");
	this.shape.setTransform(23.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-39.8,47.2,79.7);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.tree, null, new cjs.Matrix2D(1,0,0,1,-175,-72)).s().p("AqIIDIAAzSIUSAAIAAWfg");
	this.shape.setTransform(-65,72);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,0,130,144);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AAbBHIAAg3IgTAAIgfA3IghAAIAog/QgMgEgHgJQgGgKAAgOQAAgUAOgKQAOgLAYAAIAvAAIAACNgAgEgpQgGAFAAAJQAAAKAGAFQAEAGANAAIAOAAIAAgnIgOAAQgNAAgEAEg");
	this.shape.setTransform(103.2,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AAlBHIAAhEIACgoIgBAAIhABsIglAAIAAiNIAbAAIAABFIAAAQIgBAWIABAAIBAhrIAkAAIAACNg");
	this.shape_1.setTransform(89.8,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AgOBHIAAh0IgmAAIAAgZIBqAAIAAAZIgnAAIAAB0g");
	this.shape_2.setTransform(76.4,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AAqBHIAAiNIAeAAIAACNgAhHBHIAAiNIAeAAIAAA3IAKAAQAbAAAOALQAOAKAAAVQAAAVgOAMQgNALgdAAgAgpAuIAIAAQAPAAAHgFQAHgFAAgJQAAgKgHgFQgGgEgRAAIgHAAg");
	this.shape_3.setTransform(62.2,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AgwBHIAAiNIAuAAQAYAAANAMQAOAKAAAXQAAAXgPAKQgOAMgZAAIgNAAIAAAzgAgSgDIAKAAQAMAAAHgFQAHgFAAgLQAAgLgFgFQgGgFgLAAIgOAAg");
	this.shape_4.setTransform(47.9,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AAXBHIgyhHIAABHIgeAAIAAiNIAeAAIAABFIAyhFIAgAAIg0BFIA3BIg");
	this.shape_5.setTransform(35.9,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AgNBHIAAh0IgnAAIAAgZIBqAAIAAAZIgoAAIAAB0g");
	this.shape_6.setTransform(23.1,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBBB1F").s().p("AgxA2QgSgTAAgjQABgjARgSQASgTAfAAQAhAAARATQARATAAAiQAAAjgRATQgSATggAAQgfAAgSgTgAgZgiQgJALAAAXQAAAXAJANQAIALARABQAkgBAAgvQAAgvgkAAQgRAAgIANg");
	this.shape_7.setTransform(10,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.4,31.3);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AgnBHIAAiNIBQAAIAAAZIgzAAIAAAgIAvAAIAAAWIgvAAIAAAlIAzAAIAAAZg");
	this.shape.setTransform(68.3,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AAqBHIAAiNIAeAAIAACNgAhHBHIAAiNIAeAAIAAA3IAKAAQAcAAAMALQAQAKAAAVQAAAVgPAMQgNALgdAAgAgpAuIAIAAQAPAAAHgFQAHgFAAgJQAAgKgGgFQgHgEgRAAIgHAAg");
	this.shape_1.setTransform(53.9,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AgzBHIAAiNIAsAAQAcAAAOAJQAOAIAAAUQgBAMgFAIQgHAIgKACIAAABQAOACAHAHQAFAJAAAOQAAATgNALQgPALgYAAgAgVAuIATAAQALAAAGgFQAGgFAAgJQAAgSgXAAIgTAAgAgVgNIASAAQAKAAAFgEQAGgEgBgJQAAgIgFgDQgHgEgKAAIgQAAg");
	this.shape_2.setTransform(39.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AgxA2QgSgTAAgjQAAgjASgSQASgTAfAAQAhAAARATQARATAAAiQAAAjgRATQgSATggAAQgfAAgSgTgAgZgiQgKALABAXQgBAXAKANQAJALAQABQAkgBAAgvQAAgvgkAAQgQAAgJANg");
	this.shape_3.setTransform(24.7,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AAcBHIAAg9Ig3AAIAAA9IgeAAIAAiNIAeAAIAAA4IA3AAIAAg4IAeAAIAACNg");
	this.shape_4.setTransform(9.7,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,31.3);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AgoBHIAAiNIBRAAIAAAZIgyAAIAAAgIAuAAIAAAWIguAAIAAAlIAyAAIAAAZg");
	this.shape.setTransform(64.8,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AgNBHIAAh0IgnAAIAAgZIBqAAIAAAZIgoAAIAAB0g");
	this.shape_1.setTransform(53.7,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AAlBeIAAhEIACgoIgBAAIhABsIglAAIAAiNIAbAAIAABDIAAATIgBAUIABAAIBAhqIAkAAIAACNgAghhCQgMgIgBgTIAbAAQAAAKAFAEQAEAEAKAAQAJAAAFgEQAFgFABgJIAbAAQgCASgMAIQgMAJgVAAQgWAAgLgIg");
	this.shape_2.setTransform(40.3,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AAkBHIgKgiIgzAAIgKAiIghAAIAziNIAjAAIAzCNgAgRAMIAjAAIgQgyIgCgKIgRA8g");
	this.shape_3.setTransform(25.8,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AgwBHIAAiNIAuAAQAYAAANAMQAOAKAAAXQAAAXgPAKQgOAMgZAAIgNAAIAAAzgAgSgCIAKAAQAMgBAHgFQAHgGAAgKQAAgLgFgFQgGgFgLAAIgOAAg");
	this.shape_4.setTransform(13.6,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AgrBHIAAiNIBYAAIAAAZIg7AAIAAB0g");
	this.shape_5.setTransform(2.6,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AAlBHIAAhEIACgoIgBAAIhABsIglAAIAAiNIAbAAIAABFIAAARIgBAUIABAAIBAhqIAkAAIAACNg");
	this.shape_6.setTransform(-11.3,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBBB1F").s().p("AAqBHIAAiNIAeAAIAACNgAhHBHIAAiNIAeAAIAAA3IAKAAQAcAAAMAMQAQAJAAAUQAAAXgPALQgNALgdAAgAgpAuIAIAAQAPAAAHgEQAHgFAAgLQAAgKgGgEQgHgEgRAAIgHAAg");
	this.shape_7.setTransform(-28,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBBB1F").s().p("AgzBHIAAiNIAsAAQAcAAAOAJQAOAIAAATQgBANgFAJQgHAHgKACIAAABQAOACAHAHQAFAJAAAOQAAATgNALQgPALgYAAgAgVAuIATAAQALAAAGgFQAGgEAAgLQAAgRgYAAIgSAAgAgVgNIASAAQAKAAAFgEQAGgEgBgIQAAgJgFgEQgHgDgKAAIgQAAg");
	this.shape_8.setTransform(-42.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-15.6,123.6,31.3);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBB1F").s().p("AgoBHIAAiNIBRAAIAAAZIgyAAIAAAgIAuAAIAAAWIguAAIAAAlIAyAAIAAAZg");
	this.shape.setTransform(45,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBBB1F").s().p("AgOBHIAAh0IgmAAIAAgZIBqAAIAAAZIgoAAIAAB0g");
	this.shape_1.setTransform(33.9,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBB1F").s().p("AAlBHIAAhEIACgoIgBAAIhABsIglAAIAAiNIAbAAIAABFIAAARIgBAUIABAAIBAhqIAkAAIAACNg");
	this.shape_2.setTransform(20.5,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBB1F").s().p("AgwBHIAAiNIAuAAQAYAAANAMQAOAKAAAXQAAAXgPAKQgOAMgZAAIgNAAIAAAzgAgSgCIAKAAQAMgBAHgFQAHgGAAgKQAAgLgFgFQgGgFgLAAIgOAAg");
	this.shape_3.setTransform(7,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBBB1F").s().p("AgnBHIAAiNIBQAAIAAAZIgyAAIAAAgIAuAAIAAAWIguAAIAAAlIAyAAIAAAZg");
	this.shape_4.setTransform(-4.4,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBB1F").s().p("AgxBHIAAiNIBYAAIAAAZIg6AAIAAAeIAMAAQAaAAAQAMQAPAIAAAVQAAAtg5AAgAgTAuIALAAQANAAAHgEQAHgFAAgLQAAgKgHgEQgHgEgQAAIgIAAg");
	this.shape_5.setTransform(-15.6,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBBB1F").s().p("AgxA2QgSgTAAgjQAAgjASgSQASgTAfAAQAhAAARATQARATAAAiQAAAjgRATQgSATggAAQgfAAgSgTgAgZgjQgKAMABAXQgBAXAKAMQAJANAQAAQAkAAAAgwQAAgvgkAAQgQAAgJAMg");
	this.shape_6.setTransform(-29.8,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBBB1F").s().p("AgkA2QgRgTAAgjQAAgUAIgRQAJgRAOgJQAPgJATAAQAVAAAVAKIgKAZIgQgHQgIgDgIABQgPgBgKANQgIANgBAVQAAAwAiAAQAPAAAVgIIAAAaQgRAHgWAAQgdAAgQgTg");
	this.shape_7.setTransform(-43.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-15.6,103.8,31.3);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFCXQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIADgHQgFAAgEgFQgQAAgDgIIgBgPQgBABAFg3IABgBIAAgGIACAAIAAABIABgEQgBgFASgUQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAQAEABABgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIgDgDQAAgCAhgZQABgHAOgGQAJgQALgFQAAgDASgTQADABADgBQgDgKhRAOIgFADQgaAEgUAFIAAgCIgDADIgTAFQgEAAgBgDIgIAEIgIABIgDACIgHgBIgFgJIAFgCIAKgEIAJABQgBgFAHgCIACAAQgFgEAAgCIgEADIgBAAIgBgDIAFgCIAGADIgBgEIAKgBIAAgDIAGAAIAOgGIgBgBQgDABgNgEIgBgFIABAAIAHACIATgHIgCgDIgXAEQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAABgBIASgFIgBgBQgeAGgCgFQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAJgBQAFgGAHgCQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAJgEIARgFIAIgDQAAABABAAQAAABABAAQAAAAABAAQABAAABAAQAHgFAEgBQABADAUgEQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQASgCAEACIAFgFIABgBQASgEABADIAPgHQAkgKAdAUIAAACQAEAMgLAoQgIAwg1AqIgSAQQgEACgDAEIAAADIgDAAIAAABIABACQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgBABIAAgEIgBACIgHADIAAAAIgBAAIgHAFQgIAHgCAKIAAABIAAAEIAJgBQAUADASAAIAHAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIADgBIASABQAMAAArgRQArgRAVgMQAEAAAEgEIACAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIAFgCIAAgCIgBgDQAEgEADAAIAEABQAOgIAFgGQgFADgGABQgGABAJgFIAsgQIAAADQAAADgFAAIAAADQAGAAABAFIAAACQgEAAgGADIgBgDIgCAAQgLAAgFAIQAIAAABADIAAABIgLAJIAFAAIADABQAFgGAOgIIACgDIAEACIAEgCIgBgEIAAgBQAMAAAdgQIAFAAIAAAEQgGAAgBAEIAAABIgCACIgBgDIgCAAQgJAIAAADQgSAKgBAGIgEABQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQADAAAIgKQANgCAAgFIgBAAIgGABQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgUANgBAEIAAACIgJgCIgYAPIAAAJIADAAQAAgFAMgFQAGACAAACQgBAAgGAKQgUABgJAMQgSAMgBADQgDAAggAQIgYAIIABADQAAACgEACIgCAAIggAMIgdAKQgLABAAACQgYgDgZABIgDABIgDgBQgHAAgVAGIAAAFIAQgCIAAADIgoAMgABHBRIAAAAIACAAIAGgBgABWBKIAAABIACAAQAHgCAAgDIAAgBQgHAFgCAAgABuBAIADAAIAAgCQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAgABeA4IADgCIgCAAgABqA2IAEAAIAAgBIgEABgAB9AwIAAABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAIAEAAQAHgEAEgHIgDAAQgFAEgKADgACJAeIAEABQAAgDAKgCIgCgEIABgBgAi6hBIABADIAFgBQADgGAIgCIgBgCQgFACgCgFIgDABIADACIAAACIgCABIgGgCIgFABQABABAAABQAAAAABAAQAAABABAAQAAAAABAAgAjAhAIABgDIAAgCIgHACIABADIACAAIADAAgAiphGIABAEIAMgEIAAgBQgDABgFgDIgFADgAikhpIAAABIAHgCIgBgBgAhXh7IABACIAMgCIAAgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-15.2,46.6,30.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXCgIABgHQgLABgOgaIgFgDQgFAKgQADIgBgIQAOgVgBgHQACgJACgBIACAAIADABIAEgHQgBABgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAKgHAHgLIgFABIAAgDQABgFAOgIIgCgDIgBgDQAIgBAIgPIAAgFQAGAAAPgdQAOgWADgBIAOgbQADAAAFgMIgCAAQgRADgfABIgLAEQgngHgCgPIgOgVIABgDIgRghIAAgCQAHgFgBgDIAEgBQAjANAngFIA+gLIABgBIAFAAQASgHAIgBIABADQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAIAVgCIAAAFQgFAFgDAAIAAACQAJgBABADIAAABQgKALgNABIAAACQAHgBAIAFQABgGAMgCIAHAHIAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIADAFQAHAKgCAAQAEAJAEAMQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgCAHIACAEQAAAEgmApQgJALgnA2IgBgFIAJgNIAAgBIgCAAQgFACgHAPIgBAAQgDABgCgGIgEAEIgCAAIgBgGIADgHIgBABQgPATgIABIACACQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAIgBAAIgBgGQgEADgGACIAAABIADAAIAAADIgHACIgBAAQgBABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgJADABAIIADgBIgBgDIAFAAIAAABIgHANIgEABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgCACgEAAIABADQAAADAEABIACAAQAIgBAKgDQASAAAUgDIAHgBQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIADgCQAIgBAIAAQAZgEAkgbQAEgBAEgEIABAAQABAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAFgCIAAgCIgDgDQAFgFADAAIAEABQANgKAFgJQAGAAAYgTIAAAGQgFA6AAgFIgDACIgBADQgTADgHANQgRAOgBAEQgDABgdATIgXALIACADQAAACgEADIgBAAQgGABgCgBQgKACAAACQgVABgZADIgDACIgDgBQgIABgUAJIAAAFIAQgEIABADIgnASIgBAAIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBgAA8BdIgHADIAAACIAJgCQADgBAAgDgABFBWIABABIACAAQAHgDgBgDIAAgBQgGAFgDABgAA+BLIAAABIAGgBIAAgBgABbBDIABAGIAEAAIgBgDQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgBAAgABMBBIgBAEIAEAAIACgFgABjAwQgNAMgCAAIABAEIAGgBQgBgGAIgBQAIgHgBgCgAB3AvQgEAEgKAEIAAABQAAABABAAQAAABAAAAQABABAAAAQABAAABAAIAEgBQAHgEACgIgACIANIAAACIgaAZIABACQAKgGADgBIABAFQAPgSAAgGQABgFADgDIAAgFIgBgDIgCAAQgLABgEALIAFgBQABAAABABQABAAAAAAQABAAAAABQABAAAAAAgAANACQAAABgBAAQgBAAAAABQAAAAgBABQAAAAAAABIACgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBgAgohFIAAABIARgBIADgCQADABADAAIACAAIgBgEIgCAAIgSAEIAAgCQgBACgGABgAAhiEIgKAEIAAACIAJgBQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-16.3,29.8,32.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAxQgGgIgBgEQACgWACgIQAEgKAMgWQABAAADgLQADgGAEgCQACADADAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAIABABIgBABIAAAAQAFgDAAgBIgCAAIAAgCIAHgFIAMgDIAHAAIABgBIABAAIABABIAAABIADADIABgBIABABIAAAAIgGADIABABIACgBIAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABIAJgBQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgFABIAAABIAIgBIgBABIABAAIADgBIADAAIAAAAIgBACIgBAAIgCABQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAACgNAEIAAAAIABAAIABAAIABAAIAAAAIABgBIADAAIABAAIABABIgMACQgNADgKALQgJAJgDALQABAAgCAEIABAAQgBAAgCAHIgGAZIAAABIAAABIgEAOQAAABgEADIgBAAIgBACQgCgHgDgCgAAXgkIAAABIACgBIAAAAg");
	this.shape.setTransform(13.4,-1.1,0.746,0.746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAABIAAAAIABgBIAAAAIAAAAIgBABg");
	this.shape_1.setTransform(1.4,0.2,0.746,0.746,0,0,0,0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhhBfQgIgOgCgHIgBgDQgBgKALgSQAHgMAKgIQAUgUAOgFQAQgKALgCIAIAAQAeg7ALgSQAEgFAFgBIAAgCQACAAAEADIAAAIIABACQgBAJgFANQgDAHgBABQgDADgHAOIgBAAIgBADIgBAAIgBABIgBAAQAGgLACAAIAAgBIgCAAIgLARIACACQgCABgCADIgBAAIgCADIAAAAIACAAIAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgCAAIgHAMIAAABIABgBIAAABIgBABIgBAAIAAABIABABIgBAAIAAgBIgBAAIAAABIAAABIABgBIAAABIABAAIACgEIACAAIgFAGIgBAAIAAgCQgBAAgDAHIAAAAIABAAQgBgBAEgEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCADIAAABIABgBIABABIgCAFIABgBIAAABQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAIAAADIAAAAIgBABIAAgBIgCAAQABACgHAHIgFAJIAAAAIADgCIgFAKQgGAUAAACQABADAKABQAOgFAGgEIABAAIgEgOQgDgQAmggQAHgDAAgDQALgFgBgCIADAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIgCABIAAgBIANgJIABAAIAAABIABAAIgBgBIADgCIADAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIAIgEIAAABIABgBIAJgCQAGACAEAFIABADIAAAEIABACIgBALQgEAHgSAPQgEAGgMAGIgKAEQgMADgFgQIgBgDIgMAKIgCADIABABQgIAIABABIABABIgFAKIABABQgBAAAAABQAAAAAAABQAAABAAAAQAAAAAAABIABABIAHgFIAAgBIADABIABgBIAAAAIgFAFIgCACQAIABAIgBIAAAAIAEAAIAEgBIAUgIIAAAAIAKgFIAAACIgBAAIAAAAIADAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAABIgBABIABABIABgBIACgBIAAACIgEACIAAABIABgBIABAAIABAAQAAABgGACQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAgBAAIABACIAAAAIAGgEIABABQAAABgGACQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBQgBADgFABIAAABIABABIgCAAIABAAIACAAQAAABgGACQAAADgFACIgCgBIgBADIAJgEIAAABQAAABgJADIAAAAIADAAIAAABIgCABIAAABIgLADIgBABIgDABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgCgBIgDACIgBAAQgJACgKgKIgEgFIAAgBIgBgBIgDACIABABIAAAAIgDAAIgEADIAAACIAAABIgFAGQAAABgGADIABAAIAEgBIAAACIgCAAIgFAAIAAABIABABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQgBAAgBAAQAAgBAAAAQgBAAAAAAIgBABQgJgEgBgGQgCAAgGgQIABgBIgBAAIgPAPIgBgBIABgBIgCAAQABAEgWAPIAAgBIgBAAIACABIAAABIgEAAIAAABIABAAIABABIgLAFQgHgCgCgDgAhHAuQgFAEgOAWIAAABQATgEAbgeQAGgEAAgCQAHgHAEgJIADgKIgBAAIgEABIABACIgBABIAAgBIgKAGIABABIAAACQgGACgIAIQgCAAgFAFIgBgBQgDACgIALgAgwBCIAAgBIAAgBIgCAAIABACIABAAgAgKAPIABABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAAAgAAvAFQACABAHgBQAEAAAVgMIAAABQAAgCAJgHIAFgGIgBgBQgHACgUAMQgDABgEAEIgHADIAAABIgCAAgAAmACIgBABIAAABIABAAIABgBIAAgBgAAwgFIgBADIAAAAIADgDIAAAAgABKgcIAAgCIgCACIACAAg");
	this.shape_2.setTransform(1.9,-1.1,0.746,0.746,0,0,0,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_3.setTransform(3.2,-3.6,0.746,0.746);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAyIgEgPQgFgbARgWQAUgmAKgCQADAAAEAJIAAAGIABADIgBACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABIgOARQgEAHgFAFQgNAZAAACIAAAAQAFAAAKgHIABAAIAAgBIABABIABAEIgDAEIABAAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIgCAAIAAABQACADADABIgCAFQAAACgEADIABABQgBAHgCAAQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABIgFAAQgKAAgBgFg");
	this.shape_4.setTransform(-7.8,2.9,0.746,0.746);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMADIAAgDIgBgDQAAgKAHgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIABAAIAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAgBQAIgBAEANIAAAAIAAADIABACIABAAQABAGgPAKIgEACQgCAAgGgPg");
	this.shape_5.setTransform(-5.3,-2.5,0.746,0.746);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaA7QgLgKgFgNIgBgBQgDgJAHgPQAQgbANgLIAHgKQARgRASgIIAFgBIADgBIABABIABACIgBACIgCABIAAACQAEgBABABQgEACAAAIIgBAAIgDABQgHAFABADQgFAEgDABQgEAHgIAFIAAABIACgBQAAACgEACQAAAEgKANIgNAUQgHAOAAACQAAACAJgDIAJgDQAAAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAIABgBQAFgDAfgTIAAgBQgCAFAAACIgFAFQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQABADgEACIABAAIABAAQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAAAAQAAACgFADIgCAAQAAABgJAGIgBAAIgBgCIgBABIAAABIABABIgEACIgCAAQABAAgBABQAAAAAAABQAAAAgBABQgBAAgBAAIAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIAAABIAAgBIAAABIAAADIAAAAIABgBIABABIAAACIADgBIABABIgCABIgBAAIgDABIACABIADgBIAAABIgFAFIAAABIAAgBIAAABQABACgEAEIgCAAIgDACIgHABQgJAAgCgGgAAMAeIABABIADgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_6.setTransform(-13.3,3.8,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-8.7,33.5,17.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpEjQADg8AKgoIgHgDQAAgHAEgbIAAgEIgDABQgMBPgKAMIgDAAIgCgfQAAgFgHAAIAFgdQgEgPgBgMQgDgoAdiFIgEgMQAHhaACgEQAJAAABhbIADAAIAHADIABgfIAGAAIAAAGIADAAIACgZIAFAAIAAASIAHAAQgCgXAJgDIAJAAQAPAMACgBIAGAAQAGAAABgaIAEAAQADAHAAACIgBAWQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIgCAQIABAPIADgBIgBgSIAGAAQAFBPg+DvQgIBFgLArQgOAhACARQgMA2gHABg");
	this.shape.setTransform(0,0.1,0.746,0.746,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-21.7,10.5,43.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/DkIgCgDQA8gYAkgHIgBgHIAigLIACgCIgBgDQhOAXgOgEIgBgCIAagPQAFgDgCgGIAbgIQAMgKALgGQAdgQBdgXQAAgdAJgUQgGggAQgEIgBgKQgfgXgDgPIgCgNQgCgJAOgLIgBgCQgDgGgXAKIgCgDQAEgGADgBIAUgIQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBgBAAIAQgFIANgIIgCgCIgQAJIgDgGQBFgmDzguQBAgWAvgHQAigCARgIQA1gNADAGIACADQg6AYgmAHIAAAHQgDACgeAJIgCACIABACQBNgWAPAEIABACIgbAPQgFADADAGIgbAHQgOAMgJAFQgmAUiDAeIgKAJQhVAggDgBQgDgGhAAcQAFAKAMAFQgCAEAAAPIABAXIABAEIADgBQAygNBWgYQAIADAJgCQABAGgXAMIABAEIAEgBQAPgNAHgCIACAJIgMADIABAFIAIgDIABACIAKgJQAPAGALgDQgBgEAFgBQAIARAKAMIAAAEQgIgEgLABIADAFQgFASABACIADAFQADAFAXgJIACADQgFAGgCABIgUAIQgBAAgBABQAAAAAAABQAAABAAAAQAAABAAAAIgPAFIgNAHIACADIAPgJIAEAGQhFAljzAvQhAAWgvAHQgkACgPAIQgjAJgOAAQgGAAgBgCg");
	this.shape.setTransform(0,-17,0.746,0.746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AisEMQAQhSAUgwIgIgFIAMgtIABgDIgFgBQgfBngQAOIgFAAIAEgqQABgIgJgBIAMgkQgCgUABgSQAdiUAxhOIAIACIgGAUIgBAMIAEAAQAFgvA9geQAAgEAegTIAHABIgVAXIAEABQAUgYAOgLQAdgBA4gSQA9gVAZgCQgaAdgUAWQglAmgfAUIgEAAIATgUIgFAAQhtBUgBAPQgeAigpCXQgFgBgPAwQgJAAgiBqIgNALg");
	this.shape_1.setTransform(-5.3,14.1,0.746,0.746,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-34.1,57.7,68.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFBQQgFAAgDgEQgEgEAAgGIAAg8IgSAAIAABGQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgHAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAHAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAABHIASAAIAAg8QAAgGAEgEQADgEAFAAIAVAAQAGAAAEAEQAEAEAAAGIAACDQAAAGgEAEQgEAEgGAAgAAFg9IAAB8QAAAAAAABQABABAAAAQABABAAAAQABAAABAAIAOAAQAAAAABAAQABAAAAgBQAAAAABgBQAAgBAAAAIAAh8QAAgBAAgBQgBgBAAAAQAAgBgBAAQgBAAAAAAIgOAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAABg");
	this.shape.setTransform(71.9,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAHAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAAA7IAVAAQAGAAAEAEQAEAEAAAGIAABFQAAAGgEAEQgEAEgGAAgAgKBCIASAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAIAAg/QAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAg");
	this.shape_1.setTransform(63.3,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAdAAQAGAAAEAEQADAEAAAGIAAArIgBAGIgCADIgDACIAEACIAEAEIABAFIAABCQAAAGgEAEQgEAEgGAAgAgKBCIASAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAIAAg/QAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAgAgKgRIAPAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAgBIAAgoQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIgPAAg");
	this.shape_2.setTransform(56,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBQQgGAAgEgEQgEgEAAgGIAAiDQAAgGAEgEQAEgEAGAAIAVAAQAGAAAEAEQAEAEAAAGIAACDQAAAGgEAEQgEAEgGAAgAgKg9IAAB8QAAAAAAABQABABAAAAQABABAAAAQABAAABAAIAOAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAIAAh8QAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgOAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAABg");
	this.shape_3.setTransform(48.7,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAfAAQAGAAAEAEQAEAEAAAGIAABQQAAAGgEAFQgEADgGAAIgVAAIAAAvQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgAgKAPIASAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAhJQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAg");
	this.shape_4.setTransform(41.5,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBQQgGAAgEgEQgEgEAAgGIAAiDQAAgGAEgEQAEgEAGAAIAVAAQAGAAAEAEQAEAEAAAGIAACDQAAAGgEAEQgEAEgGAAgAgKg9IAAB8QAAAAAAABQABABAAAAQABABAAAAQABAAABAAIAOAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAIAAh8QAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgOAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAABg");
	this.shape_5.setTransform(34.2,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBaQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgRIgoAAIAAARQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgcQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIAGAAIALiOQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAfAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAACOIAGAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAAcQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAgAgKA4IAVAAIAAiDIgMAAg");
	this.shape_6.setTransform(26.6,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBQQgGAAgEgEQgEgEAAgGIAAgaQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAIAHAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIAAAXQAAAAAAABQAAABABAAQAAABABAAQAAAAABAAIAOAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAAAIAAg6QAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIgLAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAIAAgGQAAgBAAgBQABgBAAAAQABgBAAAAQABAAABAAIALAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAAAIAAgwQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIgOAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAABIAAAVQAAABAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgHAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAgZQAAgGAEgEQAEgEAGAAIAVAAQAGAAAEAEQAEAEAAAGIAAAzIgBAFIgDAEIgEACIAEACIADACIABAFIAAA8QAAAGgEAEQgEAEgGAAg");
	this.shape_7.setTransform(19.6,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBQQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBIAMg0IgWhkQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABAAIAHAAQADAAACADIANBIIAPhIQAAgDAEAAIAHAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAIgfCYQgBAEgEAAg");
	this.shape_8.setTransform(10.5,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBQQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAh0IgTBVIgBACIgCABIgHAAIgDgBIgBgCIgShVIAAB0QAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgHAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAMAAIADABIABACIATBjIAUhjIABgCIADgBIAMAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAACYQAAABAAABQgBABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_9.setTransform(2.2,6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBQQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAiYQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAABAAIAlAAQABAAABAAQAAAAABABQAAAAAAABQABABAAAAIAAAIQAAAAgBABQAAABAAAAQgBABAAAAQgBAAgBAAIgbAAIAAAwIASAAQABAAABAAQAAAAABABQAAAAAAABQABABAAABIAAAHQAAAAgBABQAAABAAAAQgBABAAAAQgBAAgBAAIgSAAIAABFIAbAAQABAAABAAQAAAAABABQAAAAAAABQABABAAAAIAAAHQAAABgBABQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_10.setTransform(-5.5,6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBQQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAiYQAAAAAAgBQAAgBABAAQAAgBABAAQABAAABAAIAHAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAIAACOIAUAAIAAiOQAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAIAFAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAACOIAVAAIAAiOQAAAAAAgBQAAgBABAAQAAgBABAAQABAAABAAIAGAAQABAAABAAQABAAAAABQABAAAAABQAAABAAAAIAACYQAAABAAABQAAABgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_11.setTransform(-14.3,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBQQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIgEgaIgXAAIgEAaQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgHAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIATiWQAAgFADAAIANAAQAAAAABAAQAAAAABABQAAAAABABQAAABAAAAIATCYQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAgAgKAlIAVAAIgLhag");
	this.shape_12.setTransform(-23,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAdAAQAGAAAEAEQADAEAAAGIAAArIgBAGIgCADIgDACIAEACIAEAEIABAFIAABCQAAAGgEAEQgEAEgGAAgAgKBCIASAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAIAAg/QAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAgAgKgRIAPAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAgBIAAgoQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIgPAAg");
	this.shape_13.setTransform(-30.1,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiNIgRAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIAAgIQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAvAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAAAIQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgSAAIAACNQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_14.setTransform(-39.2,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAhKIgVBKQgBAEgEAAIgFAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAHAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAABvIAVhJIAAgmQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAGAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAACYQAAABAAABQgBABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_15.setTransform(-45.7,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXBaQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgRIgoAAIAAARQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIgHAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgcQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAFAAIALiOQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAgAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAACOIAHAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAAcQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAgAgKA4IAVAAIAAiDIgMAAg");
	this.shape_16.setTransform(-53.2,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBQQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAgBIAAiYQAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAIAlAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAIAAAIQAAAAAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgaAAIAAAwIARAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAABIAAAHQAAAAAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgRAAIAABFIAaAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAIAAAHQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_17.setTransform(-59.2,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAfAAQAGAAAEAEQAEAEAAAGIAABQQAAAGgEAFQgEADgGAAIgVAAIAAAvQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgAgKAPIASAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAhJQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAg");
	this.shape_18.setTransform(-66.2,6.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUBQQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAiYQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAdAAQAGAAAEAEQADAEAAAGIAAArIgBAGIgCADIgDACIAEACIAEAEIABAFIAABCQAAAGgEAEQgEAEgGAAgAgKBCIASAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAIAAg/QAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgSAAgAgKgRIAPAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAgBIAAgoQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIgPAAg");
	this.shape_19.setTransform(-73.4,6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPA/QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgDgVIgRAAIgDAVQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgFAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBIAPh2QABgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAJAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAIAPB3QAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgHAcIAQAAIgJhGg");
	this.shape_20.setTransform(72.8,-9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAZAAQAEAAADACQADAEAAAEIAAA/QAAAFgDADQgDADgEAAIgQAAIAAAlQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAgAgHAMIANAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAg6QAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBIgNAAg");
	this.shape_21.setTransform(67.4,-9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATBHQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgNIgfAAIAAANQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgGAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgVQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAFAAIAIhvQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAYAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAABvIAEAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABIAAAVQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAgAgHAsIAQAAIAAhnIgJAAg");
	this.shape_22.setTransform(61.5,-8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAg7IgQA7QgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAABWIAQg5IAAgdQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAB3QAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_23.setTransform(55.9,-9.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHA/QgFAAgDgEQgDgDAAgEIAAhnQAAgEADgEQADgCAFAAIAQAAQAEAAADACQADAEAAAEIAAAUQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgGAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgRQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBIgLAAQAAABgBAAQAAAAgBAAQAAAAAAABQAAAAAAABIAABhQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAIALAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAgSQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAgBIAGAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAVQAAAEgDADQgDAEgEAAg");
	this.shape_24.setTransform(50.5,-9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOA/QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAGQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAIAAAmIAOAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgOAAIAAA2IAVAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABIAAAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_25.setTransform(43.5,-9.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AALA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAg7IgQA7QgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAABWIAQg5IAAgdQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAB3QAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_26.setTransform(37.9,-9.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AALA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAg+IgQAAIAAA+QAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgGAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAAuIAQAAIAAguQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAB3QAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_27.setTransform(32.1,-9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOA/QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAGQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAIAAAmIAOAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAFQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgOAAIAAA2IAVAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABIAAAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_28.setTransform(27.3,-9.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQA/QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAhvIgLAAIgFBnQAAAEgDADQgDAEgFAAIgGAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgFQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAEAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAIhsQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIAYAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAB3QAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_29.setTransform(21.2,-9.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAdAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAAGQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgUAAIAAAmIAQAAQAEAAADADQADADAAAFIAAA2QAAAEgDADQgDAEgEAAgAgHA0IANAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAgxQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIgNAAg");
	this.shape_30.setTransform(16.1,-9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOA/QgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAh3QAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgUAAIAAAmIAMAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAFQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgMAAIAAA2IAUAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIAAAFQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_31.setTransform(11.2,-9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAZAAQAEAAADACQADAEAAAEIAAA/QAAAFgDADQgDADgEAAIgQAAIAAAlQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAgAgHAMIANAAQAAAAABAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAg6QAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAgBIgNAAg");
	this.shape_32.setTransform(5.8,-9.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBA/QgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAhvIgOAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgGQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAkAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAGQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgNAAIAABvQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_33.setTransform(0.8,-9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHA/QgFAAgDgEQgDgDAAgEIAAhnQAAgEADgEQADgCAFAAIAQAAQAEAAADACQADAEAAAEIAABnQAAAEgDADQgDAEgEAAgAgHgwIAABhQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAIALAAQAAAAABgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAhhQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAgBIgLAAQAAABgBAAQAAAAgBAAQAAAAAAABQAAAAAAABg");
	this.shape_34.setTransform(-4.3,-9.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AALA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhvIgQAAIAABvQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgGAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAhAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAB3QAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_35.setTransform(-10,-9.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLA/QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAJgpIgRhOQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAFAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIALA4IALg4QAAgCAEAAIAFAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIgYB3QAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_36.setTransform(-15.3,-9.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOA/QgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAh3QAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAIAAAmIANAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgNAAIAAA2IAVAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIAAAFQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_37.setTransform(-21.9,-9.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHA/QgFAAgDgEQgDgDAAgEIAAhnQAAgEADgEQADgCAFAAIAQAAQAEAAADACQADAEAAAEIAABnQAAAEgDADQgDAEgEAAgAgHgwIAABhQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAIALAAQAAAAABgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAhhQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAgBIgLAAQAAABgBAAQAAAAgBAAQAAAAAAABQAAAAAAABg");
	this.shape_38.setTransform(-27.5,-9.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AALA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAg+IgQAAIAAA+QAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAIgGAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAIAAAuIAQAAIAAguQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAB3QAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_39.setTransform(-33.3,-9.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAZAAQAEAAADACQADAEAAAEIAAA/QAAAFgDADQgDADgEAAIgQAAIAAAlQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAgAgHAMIANAAQAAAAABAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAg6QAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAgBIgNAAg");
	this.shape_40.setTransform(-38.9,-9.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOA/QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAGQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAIAAAmIAOAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgOAAIAAA2IAVAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABIAAAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_41.setTransform(-43.7,-9.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAXA/QgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAhcIgOBDIgBACIgCAAIgFAAIgCAAIgBgCIgOhDIAABcQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgFAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAKAAIABAAIABACIAPBNIAQhNIABgCIABAAIAKAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAB3QAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_42.setTransform(-50.5,-9.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIA/QgEAAgDgEQgDgDAAgEIAAgVQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAgBIAGAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAASQAAABAAAAQABABAAAAQAAAAABAAQAAABABAAIALAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgtQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAgBIgJAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIAAgFQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAJAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgmQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAgBIgLAAQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIAAARQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgGAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgUQAAgEADgEQADgCAEAAIAQAAQAFAAADACQADAEAAAEIAAAoIgBAFIgCACIgDACIADACIACABIABAEIAAAvQAAAEgDADQgDAEgFAAg");
	this.shape_43.setTransform(-57.3,-9.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgOA/QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAGQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAIAAAmIAOAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgOAAIAAA2IAVAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABIAAAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_44.setTransform(-61.8,-9.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQA/QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAh3QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAZAAQAEAAADACQADAEAAAEIAAA/QAAAFgDADQgDADgEAAIgQAAIAAAlQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAgAgHAMIANAAQAAAAABAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAg6QAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAgBIgNAAg");
	this.shape_45.setTransform(-67.3,-9.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AALA/QgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgsIgNAAQgFgBgDgDQgEgDAAgEIAAhAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAIAFAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAA9QAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIALAAIAAhAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAIAFAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAB3QAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_46.setTransform(-72.9,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-21.5,158.4,43.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.product();
	this.instance.setTransform(-37,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.table();
	this.instance_1.setTransform(-179,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179,-215,358,304);


(lib.plane_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plane();
	this.instance.setTransform(-52,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-29,105,58);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.warn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol6();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.698)","rgba(0,0,0,0)"],[0.565,1],0,27.5,0,-27.4).s().p("AtxEcIAAo4IbjAAIAAI4g");
	this.shape.setTransform(-1.7,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-31,176.6,57);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t4 = new lib.Symbol45();
	this.t4.setTransform(30.8,15.8,1,1,0,0,0,30.8,0);

	this.t5 = new lib.Symbol44();
	this.t5.setTransform(33.9,31.6,1,1,0,0,0,33.9,0);

	this.t3 = new lib.Symbol42();
	this.t3.setTransform(23.9,0,1,1,0,0,0,23.9,0);

	this.t2 = new lib.Symbol41();
	this.t2.setTransform(29.9,-15.8,1,1,0,0,0,29.9,0);

	this.t1 = new lib.Symbol40();
	this.t1.setTransform(16.4,-31.6,1,1,0,0,0,16.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t5},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-41.5,67.7,83);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t3 = new lib.Symbol27copy();
	this.t3.setTransform(66.4,370,1,1,0,0,0,18,305.9);

	this.t2 = new lib.Symbol26copy();
	this.t2.setTransform(64.5,348.8,1,1,0,0,0,-12,308.9);

	this.t1 = new lib.Symbol18copy();
	this.t1.setTransform(67.9,338.5,1,1,0,0,0,16,322.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.9,79.8);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t3 = new lib.Symbol27();
	this.t3.setTransform(66.4,370,1,1,0,0,0,18,305.9);

	this.t2 = new lib.Symbol26();
	this.t2.setTransform(64.5,348.8,1,1,0,0,0,-12,308.9);

	this.t1 = new lib.Symbol18();
	this.t1.setTransform(67.9,338.5,1,1,0,0,0,16,322.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.1,79.8);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t2 = new lib.Symbol20();
	this.t2.setTransform(56.1,39.9,1,1,0,0,0,56.1,15.6);

	this.t1 = new lib.Symbol19();
	this.t1.setTransform(69.3,15.6,1,1,0,0,0,69.3,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.4,55.5);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggKAGPIZ7sdMAmaAAAI57Mdg");

	// mc
	this.mc = new lib.Symbol39();

	this.mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,136,50);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoeGMIAAziIQ9HLIAATig");

	// Layer 1
	this.mc = new lib.Symbol33();

	this.mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-45.9,64,91.9);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol1();
	this.mc.setTransform(0,-152,1,1,0,0,0,0,-215);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179,-152,358,304);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol23();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-16.5,102,34);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol25();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-40,61.9,81);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol24();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-44.9,95.4,90.9);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.c2 = new lib.Symbol16();
	this.c2.setTransform(-65.2,13.4,0.7,0.7);

	this.c1 = new lib.Symbol15();
	this.c1.setTransform(-101,-36);

	this.c3 = new lib.Symbol14();
	this.c3.setTransform(72.3,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c3},{t:this.c1},{t:this.c2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-76,252,153);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.c2 = new lib.Symbol16();
	this.c2.setTransform(-54.2,26.4);

	this.c1 = new lib.Symbol15();
	this.c1.setTransform(-89,-36);

	this.c3 = new lib.Symbol14();
	this.c3.setTransform(72.3,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c3},{t:this.c1},{t:this.c2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-76,240,153);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol21();
	this.mc.setTransform(65,-72);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-72,130,144);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol22();
	this.mc.setTransform(-23.6,0);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-39.8,47.2,79.7);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.d2 = new lib.Symbol5();
	this.d2.setTransform(120,-72,1,1,0,0,0,65,-72);

	this.timeline.addTween(cjs.Tween.get(this.d2).wait(1));

	// Layer 1 copy
	this.d1 = new lib.Symbol4();
	this.d1.setTransform(-120,-72,1,1,0,0,0,-23.6,-39.9);

	this.timeline.addTween(cjs.Tween.get(this.d1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-72,240,144);


(lib.sc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.table = new lib.Symbol17();
	this.table.setTransform(0,162,0.93,0.93);

	this.timeline.addTween(cjs.Tween.get(this.table).wait(1));

	// Layer 4
	this.clouds = new lib.Symbol13copy();
	this.clouds.setTransform(0,29);

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AYrccQgIgUgKgLQgQgPgpgKQhtgbjAglIhZgSQhpgUhFgLQiEgSiZAAQhjAAh4AIIgFgFQgGgFgOAAQi4gOhcgCQgzgBgnAEIgMAAIhaABQgrADhwALQhhALg6gBIhkgDQg8gCgoAEQgbADgOAIQgngFgWADQgOADgcAHIgbAGIgcADQgbAFg5APQg4AOgeAEQgvAHgNACQgRAFgSAHIiMAyQgYAKgMAHQgPAKgHAOIzEAAMAAAg43MBMiAAAMAAAA43g");
	mask.setTransform(-16,-23);

	// paris
	this.paris = new lib.Symbol34();

	this.paris.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.paris).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261,-157,427.5,460.4);


(lib.map_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.g1 = new lib.Symbol31();
	this.g1.setTransform(-32,99.1,1,1,0,0,0,0,25.1);

	this.timeline.addTween(cjs.Tween.get(this.g1).wait(1));

	// plane
	this.plane = new lib.plane_1();
	this.plane.setTransform(-10,1);

	this.timeline.addTween(cjs.Tween.get(this.plane).wait(1));

	// g12
	this.g2 = new lib.Symbol31();
	this.g2.setTransform(31,10.1,0.95,0.95,0,0,0,0,25.1);

	this.timeline.addTween(cjs.Tween.get(this.g2).wait(1));

	// road
	this.road = new lib.Symbol32();
	this.road.setTransform(3.8,56.6);

	this.timeline.addTween(cjs.Tween.get(this.road).wait(1));

	// c1
	this.c1 = new lib.Symbol28();
	this.c1.setTransform(-89.2,-97.1);

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

	// c2
	this.c2 = new lib.Symbol29();
	this.c2.setTransform(74,-36.4);

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(1));

	// map
	this.map = new lib.Symbol30();
	this.map.setTransform(18.4,59.3);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.4,-137,323.5,279.1);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.l4 = new lib.Symbol11();
	this.l4.setTransform(37.4,-9.2);

	this.l3 = new lib.Symbol10();
	this.l3.setTransform(6.7,-2.2);

	this.l5 = new lib.Symbol9();
	this.l5.setTransform(10.4,-27.2);

	this.l2 = new lib.Symbol8();
	this.l2.setTransform(-14.4,1.1);

	this.l1 = new lib.Symbol7();
	this.l1.setTransform(-31.8,1.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape.setTransform(-0.1,-22.5,0.746,0.746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_1.setTransform(-17.3,-15.9,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.l1},{t:this.l2},{t:this.l5},{t:this.l3},{t:this.l4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-36,121.3,72);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t2 = new lib.Symbol36();
	this.t2.setTransform(57.3,57.8);

	this.t1 = new lib.Symbol35();
	this.t1.setTransform(70.2,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

	// Layer 2
	this.btn = new lib.Symbol37();
	this.btn.setTransform(61,61);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,0,412,101);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 200;
		var time2 = 4;
			time3 = time2 + 4;
			time4 = time3 + 3;
		
		TweenMax.to(this.tree.d2.mc, 5.5, {x:"+=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.tree.d2.mc, 4.0, {y:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.tree.d1.mc, 4.3, {x:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.tree.d1.mc, 5.6, {y:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		
		
		var tl = new TimelineMax();
		tl.to(r.blk, 0.8, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(r.bg, 1.1, {scaleX:2, scaleY:2, ease:Expo.easeOut}, 0.0)
		  .from(r.table, 1.4, {scaleX:3, scaleY:3, y:"+=530", ease:Expo.easeOut}, 0.0)
		  .from(r.table.mc, 5, {scaleX:1.1, scaleY:1.1, ease:Power0.easeNone}, 0.0)
		  .staggerFrom([r.logo.l1, r.logo.l2, r.logo.l3, r.logo.l4, r.logo.l5], 1.0, {x:"+=40", y:"-=10", alpha:0, ease:Expo.easeOut}, 0.08, 0.6)
		  .from(r.tree.d1, 1.3, {scaleX:0, scaleY:0, x:"+=0", y:"+=0", ease:Expo.easeOut}, 0.7)
		  .from(r.tree.d2, 1.5, {scaleX:0, scaleY:0, x:"+=0", y:"+=0", ease:Expo.easeOut}, 0.8)
		  
		  .from(r.clouds.c2, 1.2, {x:"-=200", ease:Expo.easeOut}, 0.2)
		  .from(r.clouds.c3, 1.2, {x:"+=200", ease:Expo.easeOut}, 0.3)
		  .from(r.clouds.c1, 1.5, {x:"-=200", ease:Expo.easeOut}, 0.4)
		  
		  .from(r.t1.t1, 1.0, {y:"+=30", alpha:0, ease:Expo.easeOut}, 1.0)
		  .from(r.t1.t2, 1.6, {y:"+=20", alpha:0, ease:Expo.easeOut}, 1.2)
		  
		  
		  //sc2
		  .staggerTo([r.t1.t2, r.t1.t1], 0.3, {y:"+=30", alpha:0, ease:Expo.easeIn}, 0.08, time2)
		  .to(r.table, 0.5, {y:"+=230", ease:Expo.easeIn}, time2)
		  .to(r.clouds.c1, 0.5, {x:"-=200", ease:Expo.easeIn}, time2)
		  .to(r.clouds.c3, 0.5, {x:"+=200", ease:Expo.easeIn}, time2)
		  .to(r.clouds.c2, 0.5, {x:"-=200", ease:Expo.easeIn}, time2+0.05)
		  
		  .from(r.sc2.c1, 1.0, {x:"-=200", ease:Expo.easeOut}, time2+0.4)
		  .from(r.sc2.c2, 1.0, {x:"+=200", ease:Expo.easeOut}, time2+0.4)
		  .from(r.sc2.map, 1.2, {x:"+=200", y:"+=200", ease:Expo.easeOut}, time2+0.4)
		  .staggerFrom([r.t2.t1, r.t2.t2, r.t2.t3], 1.0, {y:"+=30", alpha:0, ease:Expo.easeOut}, 0.08, time2+0.4)
		  
		  .from(r.sc2.plane, 2.0, {x:"-=200", y:"-=100", scaleX:0.6, scaleY:0.6, ease:Power0.easeNone}, time2+0.4)
		  .to(r.sc2.plane, 1.5, {x:"+=200", y:"+=100", scaleX:1.4, scaleY:1.4, ease:Power0.easeNone}, time2+2.4)
		  .from(r.sc2.g1, 1.5, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, time2+1.0)
		  .from(r.sc2.g1, 1.9, {rotation:"+=120", ease:Elastic.easeOut}, time2+1.0)
		  .from(r.sc2.road, 1.5, {y:"+=124", ease:Power0.easeNone}, time2+1.0)
		  .from(r.sc2.road.mc, 1.5, {y:"-=124", ease:Power0.easeNone}, time2+1.0)
		  .from(r.sc2.g2, 1.5, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, time2+2.5)
		  .from(r.sc2.g2, 1.9, {rotation:"+=120", ease:Elastic.easeOut}, time2+2.5)
		  
		  
		  //sc3
		  .to(r.sc2.c1, 0.4, {x:"-=700", y:"+=150", alpha:0, ease:Expo.easeIn}, time3)
		  .to(r.sc2, 1.0, {rotation:"+=90", ease:Expo.easeInOut}, time3)
		  .staggerTo([r.t2.t1, r.t2.t2, r.t2.t3], 1.0, {rotation:"+=90", ease:Expo.easeInOut}, 0.04, time3)
		  .from(r.sc3, 1.0, {rotation:"-=90", ease:Expo.easeInOut}, time3)
		  .staggerFrom([r.t3.t1, r.t3.t2, r.t3.t3], 1.0, {rotation:"-=90", ease:Expo.easeInOut}, 0.04, time3)
		  .from(r.sc3.table.mc, 8, {scaleX:1.35, scaleY:1.35, ease:/*Power0.easeNone*/Expo.easeOut}, time3)
		  
		  
		  //sc4
		  .to(r.sc3.paris, 0.5, {y:"+=400", ease:Expo.easeIn}, time4)
		  .staggerTo([r.t3.t3, r.t3.t2, r.t3.t1], 0.55, {y:"+=400", ease:Expo.easeIn}, 0.04, time4)
		  .staggerTo([r.t3.t3, r.t3.t2, r.t3.t1], 0.35, {alpha:0, ease:Power0.easeNone}, 0.04, time4)
		  .staggerFrom([r.sc3.clouds.c3, r.sc3.clouds.c2, r.sc3.clouds.c1], 1.2, {y:"-120", alpha:0, ease:Expo.easeOut}, 0.2, time4+0.4)
		  .staggerFrom([r.t4.t2, r.t4.t1], 1.2, {y:"-=40", alpha:0, ease:Expo.easeOut}, 0.1, time4+0.8)
		  
		  .from(r.t4.btn, 1.0, {x:"-=250", ease:Expo.easeInOut}, time4+1.2)
		  .from(r.t4.btn.mc, 1.0, {x:"+=250", ease:Expo.easeInOut}, time4+1.2)
		  
		  .staggerFrom([r.t5.t1, r.t5.t2, r.t5.t3, r.t5.t4, r.t5.t5], 1.0, {x:"-=150", ease:Expo.easeOut}, 0.04, time4+1.2)
		  
		  .call(replay)
		  .to(this.blk, 0.9, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 16)
		  ;
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  TweenMax.killAll();
			  createjs.Ticker.setFPS(1);
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

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.instance = new lib.warn();
	this.instance.setTransform(0,180,1.49,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(-25.7,-149.3);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// tree
	this.tree = new lib.Symbol3();
	this.tree.setTransform(0,-128);

	this.timeline.addTween(cjs.Tween.get(this.tree).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(4,-94,1,1,0,0,0,69.3,27.8);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(4,-94,1,1,0,0,0,69.3,27.8);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// sc3
	this.sc3 = new lib.sc3();
	this.sc3.setTransform(0,420.9,1,1,0,0,0,0,463.9);

	this.timeline.addTween(cjs.Tween.get(this.sc3).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(4,-94,1,1,0,0,0,69.3,27.8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t5
	this.t5 = new lib.t5();
	this.t5.setTransform(-114.9,52.2);

	this.timeline.addTween(cjs.Tween.get(this.t5).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(4,-94,1,1,0,0,0,69.3,27.8);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// sc2
	this.sc2 = new lib.map_1();
	this.sc2.setTransform(0,420.9,1,1,0,0,0,0,398.9);

	this.timeline.addTween(cjs.Tween.get(this.sc2).wait(1));

	// table
	this.table = new lib.Symbol17();
	this.table.setTransform(-2,85.9,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.table).wait(1));

	// clouds
	this.clouds = new lib.Symbol13();
	this.clouds.setTransform(0,-39);

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(1));

	// bg
	this.bg = new lib.Symbol2();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-248,498.1,508.4);


// stage content:
(lib.fizz_240x400 = function(mode,startPosition,loop) {
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