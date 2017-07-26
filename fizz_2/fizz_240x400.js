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
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/dots.png", id:"dots"},
		{src:"images/kaktus.png", id:"kaktus"},
		{src:"images/sugrob.png", id:"sugrob"},
		{src:"images/vetka.png", id:"vetka"},
		{src:"images/warning.png", id:"warning"}
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



(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,260);


(lib.dots = function() {
	this.initialize(img.dots);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,80);


(lib.kaktus = function() {
	this.initialize(img.kaktus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,114);


(lib.sugrob = function() {
	this.initialize(img.sugrob);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,234);


(lib.vetka = function() {
	this.initialize(img.vetka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,120);


(lib.warning = function() {
	this.initialize(img.warning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,38);


(lib.warn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.warning();
	this.instance.setTransform(-120,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.765,1],0,20.1,0,-20.1).s().p("AyuDRIAAmhMAldAAAIAAGhg");
	this.shape.setTransform(0,-21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-42,240,42.1);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao4FeQiSAAhmhnQhnhnABiQQgBiPBnhnQBmhnCSAAIRxAAQCSAABmBnQBnBngBCPQABCQhnBnQhmBniSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-35,184,70);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91AE00").s().p("Ao4F7QieABhvhwQhvhvgBidQABicBvhwQBvhuCeAAIRxAAQCeAABvBuQBwBwAACcQAACdhwBvQhvBwiegBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-38,190,76);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91AE00").s().p("Ag0BJQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAiGQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAcAAIADABIACAFIAAAxIAgAAQALAAAJAEQAJADAFAHQAGAEADAIQADAJAAAJQAAAJgDAJQgDAIgGAGQgFAHgJADQgJAEgLAAgAgTAoIAZAAQAIgBADgDQADgDAAgGQAAgFgDgEQgDgDgIAAIgZAAg");
	this.shape.setTransform(44.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91AE00").s().p("AgMBJQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBIgCgDIAAhqIglAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgWQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAIBvAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAIglAAIAABqIgCADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(30.7,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91AE00").s().p("AAcBJIgEgCIgCgDIAAhGIguBGIgDADQgCACgEAAIgVAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAiGQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIAbAAIAEABIACAFIAABFIAuhGIADgDQACgCADAAIAWAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAACGQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAg");
	this.shape_2.setTransform(16.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91AE00").s().p("AAqBVIgEgCIgCgEIAAgSIhHAAIAAASQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAIgcAAIgEgCIgBgEIAAgtIABgFIAEgBIACAAQAIAAADgFQADgGAAgLIAAhUIABgEQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIBpAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAIAABqIAGAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAtQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAABgBAAgAgPAIIAAAFIAAAFIgBAGIgCAEIAqAAIAAhOIgnAAg");
	this.shape_3.setTransform(0.4,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91AE00").s().p("AgaBGQgMgEgIgHQgIgJgFgJQgEgLgBgMIgBgSIABgRQABgMAEgKQAFgLAIgHQAIgIAMgFQAMgEAOAAQAPAAAMAEQALAFAJAIQAIAHAFALQAEAKABAMIABARIgBASQgBAMgEALQgFAJgIAJQgJAHgLAEQgMAFgPAAQgOAAgMgFgAgKgmIgIAEQgEAEgBAEQgCAEAAAGIgBAIIAAAIIAAAIIABAJQAAALAHAGQAGAIAMgBQAMABAHgIQAGgGABgLIABgJIAAgIIAAgIIgBgIIgCgKIgFgIQgEgDgEgBQgFgCgGAAQgFAAgFACg");
	this.shape_4.setTransform(-15.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91AE00").s().p("Ag2BJQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIAAiGQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIA6AAQANAAAKADQALADAIAHQAHAGAFAIQADAKAAAMQAAAMgDAKQgFAHgHAGQgIAGgLAEQgKACgNAAIgZAAIAAAsIgCADIgEACgAgVgGIAXAAQAJAAAGgEQAGgEAAgJQAAgIgGgFQgGgDgJAAIgXAAg");
	this.shape_5.setTransform(-29.6,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#91AE00").s().p("Ag0BJQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAiGQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIBeAAIAEABIACAFIAAAWIgCAEIgEACIg9AAIAAAVIAhAAQAKAAAJAEQAIADAGAHQAGAEADAIQADAJAAAJQAAAJgDAJQgDAIgGAGQgGAHgIADQgJAEgKAAgAgTAoIAZAAQAIgBADgDQADgDAAgGQAAgFgDgEQgDgDgIAAIgZAAg");
	this.shape_6.setTransform(-43.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-14.4,106.5,28.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91AE00").s().p("Ag0BJQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAiGQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAcAAIADABIACAFIAAAxIAgAAQALAAAJAEQAJADAFAHQAGAEADAIQADAJAAAJQAAAJgDAJQgDAIgGAGQgFAHgJADQgJAEgLAAgAgTAoIAZAAQAIgBADgDQADgDAAgGQAAgFgDgEQgDgDgIAAIgZAAg");
	this.shape.setTransform(37.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91AE00").s().p("AgMBJQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBIgCgDIAAhqIglAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgWQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAIBvAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAAAWQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAIglAAIAABqIgCADQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(23.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91AE00").s().p("AApBJQgEAAgCgCIgCgDIgFgSIg3AAIgFASIgDADQgCACgDAAIgbAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgCIABgEIAuiCQAAgCADgDQACgCAFAAIAfAAQAEAAADACIADAFIAtCCIACAEIgCACIgDACgAgPASIAfAAIgQgwg");
	this.shape_2.setTransform(9,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91AE00").s().p("AAcBJIgEgCIgBgDIAAgsIgcAAQgbAAgOgPQgPgMAAgbIAAgkQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAQABAAAAAAIAcAAIAEABIABAFIAAAjQAAAMAGAGQAFAFALAAIAXAAIAAg6IABgFIAEgBIAcAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAACGQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAg");
	this.shape_3.setTransform(-6.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91AE00").s().p("AApBJQgEAAgCgCIgCgDIgFgSIg3AAIgFASIgDADQgCACgDAAIgbAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgCIABgEIAuiCQAAgCADgDQACgCAFAAIAfAAQAEAAADACIADAFIAtCCIACAEIgCACIgDACgAgPASIAfAAIgQgwg");
	this.shape_4.setTransform(-20.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91AE00").s().p("AAdBJQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAg0IgtAAIAAA0IgBADIgEACIgcAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAiGQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAQABAAAAAAIAcAAIAEABIABAFIAAAyIAtAAIAAgyQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIAbAAIAEABIACAFIAACGIgCADIgEACg");
	this.shape_5.setTransform(-36,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-14.4,91.4,28.9);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vetka();
	this.instance.setTransform(-13,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-60,166,120);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBbQgDAAgCgCQgCgCAAgEIAAgaQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADgBIAfAAQADABACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAaQAAAEgCACQgCACgDAAgAgPAjQgDAAgCgDQgCgCAAgCIAAhvQAAgDACgBQACgCADAAIAfAAQADAAACACQACABAAADIAABvQAAACgCACQgCADgDAAg");
	this.shape.setTransform(81.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBYQgMgGgLgKQgKgJgFgOQgGgNgBgQIgfAAIAAA/QAAAEgDACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAIgjAAQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIAjAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQADABAAADIAAA/IAfAAQABgPAGgOQAFgNAKgJQALgKAMgGQAPgFATAAQATAAAPAFQAPAGAKAKQAKAJAGANQAFANABAOIABAWIgBAWQgBAPgFANQgGANgKAKQgKAJgPAGQgPAFgTAAQgTAAgPgFgAAZgwQgGACgEAEQgEAEgCAFQgCAGgBAGIgBAKIAAALIAAALIABAKQABANAIAJQAIAJAQAAQARAAAHgJQAIgJABgNIABgKIAAgLIAAgLIgBgKQAAgGgDgGQgCgFgDgEQgFgEgGgCQgFgCgJgBQgIABgGACg");
	this.shape_1.setTransform(64.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIAiAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACABAAADIAAA+IAoAAQAOAAALAFQAKAEAHAIQAIAFADALQAEAKAAAMQAAAMgEAKQgDAKgIAIQgHAIgKAEQgLAEgOABgAgYAxIAfAAQALAAADgEQAEgFAAgGQAAgGgEgFQgDgEgLAAIgfAAg");
	this.shape_2.setTransform(42.1,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPBcQgCAAgCgCQgDgCAAgDIAAgcQAAgDADgCQACgCACAAQANAAAEgFQAFgGABgMIAAhvQAAgDACgCQABgCADAAICCAAQACAAACACQADACAAADIAACmQAAADgDACQgCACgCAAIgjAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgCAAgDIAAiDIguAAIAABMQgBAPgEANQgEAMgJAIQgIAIgNAEQgMAFgPAAg");
	this.shape_3.setTransform(22.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBbQgDAAgCgCQgCgCAAgEIAAhWIg6BXIgDAEQgDACgEABIgcAAQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIAjAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADABAAADIAABWIA5hXIAEgDQACgCAFAAIAbAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_4.setTransform(3.9,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBbQgDAAgBgCQgCgCAAgEIAAg/Ig4AAIAAA/QAAAEgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgiAAQgDAAgDgCQgBgCAAgEIAAimQAAgDABgBQADgCADAAIAiAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQACABAAADIAAA/IA4AAIAAg/QAAgDACgBQABgCADAAIAiAAQAEAAACACQACABAAADIAACmQAAAEgCACQgCACgEAAg");
	this.shape_5.setTransform(-15,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzBbQgFAAgCgCIgDgFIgHgVIhDAAIgHAVIgDAFQgCACgFAAIgiAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIABgEIA5iiQABgDACgDQADgCAFAAIApAAQAEAAAEACQACADABADIA5CiIABAEQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAgAgUAWIApAAIgVg9g");
	this.shape_6.setTransform(-33.8,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBbQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIBSAAQASAAAMAEQAMAFAHAIQAHAHADAKQADAKAAAKQAAAHgCAFQgBAHgDADIgEAHIgEADQAKAGAEAJQAEAJAAANQAAALgDAKQgDAKgIAIQgHAIgLAEQgMAGgQAAgAgcAyIApAAQAHAAAFgEQAFgFAAgGQAAgIgFgEQgFgEgHAAIgpAAgAgcgUIAmAAQAIAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgIgBIgmAAg");
	this.shape_7.setTransform(-52,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggBYQgPgGgKgKQgKgJgGgOQgGgMAAgPIgBgWIABgWQAAgOAGgNQAGgNAKgJQAKgKAPgGQAPgFARAAQARAAAOAFQAPAFALAIQALAJAGAMQAGALABAOQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgiAAQgFABgBgCQgCgCgBgEIgDgGQgCgFgDgCQgEgDgGgDQgGgCgIAAQgHABgGACQgGADgEADQgEAFgCAFQgCAGAAAFIgBAKIAAALIAAAMIABAJQAAAHACAEQACAGAEAFQAEAEAGACQAGADAHAAQAIgBAGgCIAKgEIAFgIIADgGQABgFACgBQABgCAFAAIAiAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQgBANgGAMQgGALgLAJQgLAJgPAFQgOAFgRAAQgRAAgPgFg");
	this.shape_8.setTransform(-76.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-17.4,174.8,34.8);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjB2QgDAAgCgCQgCgCAAgDIAAhYIg6BZIgDADQgDADgEAAIgcAAQgCAAgDgCQgCgCAAgDIAAimQAAgDACgCQADgCACAAIAjAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQADACAAADIAABWIA5hXIAEgEQACgCAFAAIAbAAQADAAACACQACACAAADIAACmQAAADgCACQgCACgDAAgAgThOQgIgDgFgGQgGgFgCgHQgCgHAAgGQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAWAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAFADAEQADAEAEAAQAGAAADgEQADgEAAgFIABgDQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAWAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAGgDAHQgCAHgFAFQgGAGgIADQgIAEgMAAQgKAAgJgEg");
	this.shape.setTransform(67.3,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA9BbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIAiAAQADAAADACQACABAAADIAACmQAAAEgCACQgDACgDAAgAheBbQgDAAgDgCQgBgCAAgEIAAimQAAgDABgBQADgCADAAIAiAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQADABAAADIAAA+IAqAAQAMAAALAFQAKAEAHAIQAIAFADALQAEAKAAAMQAAAMgEAKQgDAKgIAIQgHAIgKAEQgLAEgMABgAg1AxIAhAAQALAAADgEQAEgFAAgGQAAgGgEgFQgDgEgLAAIghAAg");
	this.shape_1.setTransform(45.8,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjBbQgDAAgBgCQgCgCAAgEIAAg/Ig4AAIAAA/QAAAEgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgiAAQgDAAgDgCQgBgCAAgEIAAimQAAgDABgBQADgCADAAIAiAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQACABAAADIAAA/IA4AAIAAg/QAAgDACgBQABgCADAAIAiAAQAEAAACACQACABAAADIAACmQAAAEgCACQgCACgEAAg");
	this.shape_2.setTransform(24.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBbQgDAAgCgCQgCgCAAgEIAAg2IgiAAQgiAAgRgSQgSgQAAghIAAgtQAAgDACgBQACgCADAAIAiAAQADAAACACQACABAAADIAAArQAAAQAGAHQAHAHAOgBIAcAAIAAhIQAAgDACgBQACgCADAAIAiAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_3.setTransform(5.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_4.setTransform(-12.7,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPBcQgCAAgDgCQgCgCAAgDIAAgcQAAgDACgCQADgCACAAQANAAAFgFQAEgGAAgMIAAhvQABgDACgCQACgCACAAICCAAQACAAACACQACACABADIAACmQgBADgCACQgCACgCAAIgjAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBQgCgCAAgDIAAiDIguAAIAABMQgBAPgEANQgFAMgIAIQgIAIgNAEQgMAFgPAAg");
	this.shape_5.setTransform(-32.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIB1AAQADAAACACQACABAAADIAAAcQAAADgCACQgCACgDAAIhMAAIAAAbIAoAAQAOAAALAFQAKAEAHAIQAIAFADALQAEAKAAAMQAAAMgEAKQgDAKgIAIQgHAIgKAEQgLAEgOABgAgYAxIAfAAQALAAADgEQAEgFAAgGQAAgGgEgFQgDgEgLAAIgfAAg");
	this.shape_6.setTransform(-49.7,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBbQgDAAgCgCQgCgCAAgEIAAg3IgYAAIgbA3QgBADgDACQgBACgGABIgjAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgDIAgg+QgOgHgJgMQgIgMAAgTQAAgPAGgMQAEgKAKgIQAKgIANgDQAOgEAQABIBFAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAgAgSgtQgGAEAAALQAAALAGAEQAIAFAKgBIAcAAIAAgnIgcAAQgKABgIAEg");
	this.shape_7.setTransform(-68.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-17.4,157.9,34.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBYQgPgGgKgKQgKgJgGgOQgGgMAAgPIgBgWIABgWQAAgOAGgNQAGgNAKgJQAKgKAPgGQAPgFARAAQARAAAOAFQAPAFALAIQALAJAGAMQAGALABAOQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgiAAQgFABgBgCQgCgCgBgEIgDgGQgCgFgDgCQgEgDgGgDQgGgCgIAAQgHABgGACQgGADgEADQgEAFgCAFQgCAGAAAFIgBAKIAAALIAAAMIABAJQAAAHACAEQACAGAEAFQAEAEAGACQAGADAHAAQAIgBAGgCIAKgEIAFgIIADgGQABgFACgBQABgCAFAAIAiAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQgBANgGAMQgGALgLAJQgLAJgPAFQgOAFgRAAQgRAAgPgFg");
	this.shape.setTransform(0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-17.4,22.5,34.8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBbQgCAAgCgCQgCgCAAgEIAAgbQAAgDACgCQACgCACAAIATAAQAGAAAGgFQAGgGAGgMIg6hqIgCgEIACgEQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAkAAQAFAAADACIADAEIAfBAIAhhAIADgEQACgCAGAAIAjAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABAEIgBAEIhBB1QgFAMgHAKQgGAKgHAGQgIAIgKADQgKAFgNAAg");
	this.shape.setTransform(73.7,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxBbQgCAAgDgCQgCgCAAgEIAAhTIgYAoIgEAFQgCACgEAAIgPAAQgDAAgDgCIgDgFIgZgoIAABTQABAEgDACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgiAAQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIAeAAQAFAAADACIADAEIApBIIAqhIIADgEQADgCAFAAIAeAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_1.setTransform(53.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_2.setTransform(33.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhGBbQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIBSAAQASAAAMAEQAMAFAHAIQAHAHADAKQADAKAAAKQAAAHgCAFQgBAHgDADIgEAHIgEADQAKAGAEAJQAEAJAAANQAAALgDAKQgDAKgIAIQgHAIgLAEQgMAGgQAAgAgcAyIApAAQAHAAAFgEQAFgFAAgGQAAgIgFgEQgFgEgHAAIgpAAgAgcgUIAmAAQAIAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgIgBIgmAAg");
	this.shape_3.setTransform(15.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_4.setTransform(-3.4,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBbQgDAAgDgCQgCgCAAgEIAAg/Ig3AAIAAA/QAAAEgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgjAAQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIAjAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQADABAAADIAAA/IA3AAIAAg/QAAgDACgBQADgCADAAIAiAAQADAAABACQACABAAADIAACmQAAAEgCACQgBACgDAAg");
	this.shape_5.setTransform(-22.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAUQgDAAgCgCQgCgCAAgDIAAgZQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgDADAAIBPAAQADAAACADQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIAAAZQAAADgCACQgCACgDAAg");
	this.shape_6.setTransform(-38,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_7.setTransform(-53.5,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBbQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQgCgCAAgEIAAiDIg9AAIAACDQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgiAAQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAICPAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_8.setTransform(-72.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-17.4,168.7,34.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBbQgDAAgCgCQgCgCAAgEIAAhWIg6BXIgDAEQgDACgEABIgcAAQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIAjAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADABAAADIAABWIA5hXIAEgDQACgCAFAAIAbAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape.setTransform(37,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0BpQgDAAgCgCQgCgCAAgDIAAgWIhZAAIAAAWQAAADgCACQgCACgDAAIgiAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAg4QAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIACAAQAJAAAEgHQAEgHAAgNIAAhpQAAgDACgCQACgCADAAICCAAQADAAACACQACACAAADIAACEIAIAAQADAAACACQACACAAADIAAA4QAAADgCACQgCACgDAAgAgSAKIAAAGIgBAHIgBAHIgDAFIA1AAIAAhhIgwAAg");
	this.shape_1.setTransform(17.1,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_2.setTransform(-2.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIBIAAQARAAANADQAOAEAJAHQAJAJAFAKQAFAMAAAPQAAAQgFALQgFAJgJAIQgJAHgOAFQgNADgRAAIgfAAIAAA1QAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAgAgbgIIAeAAQALAAAHgFQAHgFAAgLQAAgKgHgFQgHgGgLAAIgeAAg");
	this.shape_3.setTransform(-19.9,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhBBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIB1AAQADAAACACQACABAAADIAAAcQAAADgCACQgCACgDAAIhMAAIAAAbIAoAAQAOAAALAFQAKAEAHAIQAIAFADALQAEAKAAAMQAAAMgEAKQgDAKgIAIQgHAIgKAEQgLAEgOABgAgYAxIAfAAQALAAADgEQAEgFAAgGQAAgGgEgFQgDgEgLAAIgfAAg");
	this.shape_4.setTransform(-37.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-17.4,97.3,34.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.dots, null, new cjs.Matrix2D(0.75,0,0,0.75,-90,7.2)).s().p("AuDbUMAAAg2nIcHAAMAAAA2ng");
	this.shape.setTransform(0,-37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BDC4C8","#D2D7DA","#FFFFFF","#6D7C15","#889A16"],[0.012,0.094,0.729,0.808,0.91],0,7.9,0,-7.9).s().p("AuDBVIAAipIcHAAIAACpg");
	this.shape_1.setTransform(0,143.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#889A16").s().p("AuDccMAAAg43IcHAAMAAAA43g");
	this.shape_2.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-212,180,364);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kaktus();
	this.instance.setTransform(-34,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-57,68,114);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sugrob();
	this.instance.setTransform(-120,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-117,240,234);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CA903").s().p("AgPBbQgDAAgCgCQgCgCAAgEIAAgaQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgCADgBIAfAAQADABACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAaQAAAEgCACQgCACgDAAgAgPAjQgDAAgCgDQgCgCAAgCIAAhvQAAgDACgBQACgCADAAIAfAAQADAAACACQACABAAADIAABvQAAACgCACQgCADgDAAg");
	this.shape.setTransform(73.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CA903").s().p("Ag8BbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIB3AAQADAAACACQACABAAADIAAAcQAAADgCACQgCACgDAAIhOAAIAAAcIBIAAQADAAACACQACACAAADIAAAaQAAACgCADQgCACgDAAIhIAAIAAAdIBQAAQADAAACACQACACAAADIAAAbQAAAEgCACQgCACgDAAg");
	this.shape_1.setTransform(61.8,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CA903").s().p("AAjBbQgDAAgCgCQgCgCAAgEIAAhWIg6BXIgDAEQgDACgEABIgcAAQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIAjAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADABAAADIAABWIA5hXIAEgDQACgCAFAAIAbAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_2.setTransform(43.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CA903").s().p("AAkBbQgDAAgDgCQgCgCAAgEIAAg/Ig3AAIAAA/QAAAEgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgjAAQgCAAgCgCQgCgCgBgEIAAimQABgDACgBQACgCACAAIAjAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQACABAAADIAAA/IA3AAIAAg/QAAgDACgBQADgCADAAIAiAAQACAAACACQACABABADIAACmQgBAEgCACQgCACgCAAg");
	this.shape_3.setTransform(24.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CA903").s().p("Ag8BbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIB3AAQADAAACACQACABAAADIAAAcQAAADgCACQgCACgDAAIhOAAIAAAcIBIAAQADAAACACQACACAAADIAAAaQAAACgCADQgCACgDAAIhIAAIAAAdIBQAAQADAAACACQACACAAADIAAAbQAAAEgCACQgCACgDAAg");
	this.shape_4.setTransform(7.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CA903").s().p("ABBBbQgGAAgBgCIgEgFIgfgqIAAApQAAAEgBACQgDACgDAAIggAAQgDAAgBgCQgCgCAAgEIAAgqIggArIgDAFQgCACgFAAIgnAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIAAgCIAAgBIA9hSIg6hRIgBgDIACgEIAEgBIAnAAQAFAAADACIAEAEIAcAoIAAgoQAAgDACgBQABgCADAAIAgAAQADAAADACQABABAAADIAAAnIAcgnIADgEQADgCAFAAIAoAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIACAEIgBADIg5BRIA8BSIABABIAAACQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_5.setTransform(-12.7,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CA903").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_6.setTransform(-33.4,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CA903").s().p("AhEBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIBIAAQARAAANADQAOAEAJAHQAJAJAFAKQAFAMAAAPQAAAQgFALQgFAJgJAIQgJAHgOAFQgNADgRAAIgfAAIAAA1QAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAgAgbgIIAeAAQALAAAHgFQAHgFAAgLQAAgKgHgFQgHgGgLAAIgeAAg");
	this.shape_7.setTransform(-51.1,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CA903").s().p("AhBBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIB1AAQADAAACACQACABAAADIAAAcQAAADgCACQgCACgDAAIhMAAIAAAbIAoAAQAOAAALAFQAKAEAHAIQAIAFADALQAEAKAAAMQAAAMgEAKQgDAKgIAIQgHAIgKAEQgLAEgOABgAgYAxIAfAAQALAAADgEQAEgFAAgGQAAgGgEgFQgDgEgLAAIgfAAg");
	this.shape_8.setTransform(-68.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-17.4,159.8,34.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CA903").s().p("AhBBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIAiAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACABAAADIAAA+IAoAAQAOAAALAFQAKAEAHAIQAIAFADALQAEAKAAAMQAAAMgEAKQgDAKgIAIQgHAIgKAEQgLAEgOABgAgYAxIAfAAQALAAADgEQAEgFAAgGQAAgGgEgFQgDgEgLAAIgfAAg");
	this.shape.setTransform(84.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CA903").s().p("AgPBbQgEAAgCgCQgBgCAAgEIAAiDIguAAQgDAAgCgCQgCgCgBgDIAAgcQABgDACgBQACgCADAAICJAAQAEAAACACQABABAAADIAAAcQAAADgBACQgCACgEAAIguAAIAACDQAAAEgBACQgCACgEAAg");
	this.shape_1.setTransform(67.6,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CA903").s().p("AA0BbQgGAAgCgCIgDgFIgHgVIhDAAIgIAVIgCAFQgDACgFAAIggAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIABgEIA4iiQACgDADgDQACgCAFAAIAoAAQAGAAACACQADADABADIA5CiIABAEQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAgAgUAWIAoAAIgUg9g");
	this.shape_2.setTransform(50.1,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CA903").s().p("ABPBpQgDAAgCgCQgCgCAAgDIAAgWIizAAQgCAAgDgCQgCgCAAgDIAAimQAAgDACgCQADgCACAAIAjAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQADACAAADIAACEIAfAAIAAiEQAAgDACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAIAgAAQADAAACACQACACAAADIAACEIAgAAIAAiEQAAgDACgCQACgCADAAIAiAAQADAAACACQACACAAADIAACEIAQAAQADAAACACQACACAAADIAAA4QAAADgCACQgCACgDAAg");
	this.shape_3.setTransform(28.3,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CA903").s().p("AAzBbQgFAAgCgCIgDgFIgHgVIhDAAIgHAVIgDAFQgCACgFAAIghAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIABgEIA5iiQABgDACgDQADgCAFAAIApAAQAEAAAEACQACADABADIA5CiIABAEQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAgAgUAWIApAAIgVg9g");
	this.shape_4.setTransform(5.7,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CA903").s().p("AhEBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIBIAAQARAAANADQAOAEAJAHQAJAJAFAKQAFAMAAAPQAAAQgFALQgFAJgJAIQgJAHgOAFQgNADgRAAIgfAAIAAA1QAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAgAgbgIIAeAAQALAAAHgFQAHgFAAgLQAAgKgHgFQgHgGgLAAIgeAAg");
	this.shape_5.setTransform(-12,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CA903").s().p("AAeBbQgEgBgCgBIgFgFIgug+IAAA9QAAAEgDACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAIgjAAQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIAjAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQADABAAADIAAA4IArg5IADgDQACgCAGAAIAoAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIACAEIgBADIhABOIBEBVIABADIgCAEIgDACg");
	this.shape_6.setTransform(-29.4,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CA903").s().p("Ag8BbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIB3AAQADAAACACQACABAAADIAAAcQAAADgCACQgCACgDAAIhOAAIAAAcIBIAAQADAAACACQACACAAADIAAAaQAAACgCADQgCACgDAAIhIAAIAAAdIBQAAQADAAACACQACACAAADIAAAbQAAAEgCACQgCACgDAAg");
	this.shape_7.setTransform(-47,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CA903").s().p("AhEBbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIBIAAQARAAANADQAOAEAJAHQAJAJAFAKQAFAMAAAPQAAAQgFALQgFAJgJAIQgJAHgOAFQgNADgRAAIgfAAIAAA1QAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAgAgbgIIAeAAQALAAAHgFQAHgFAAgLQAAgKgHgFQgHgGgLAAIgeAAg");
	this.shape_8.setTransform(-64.1,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CA903").s().p("AAmBbQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQgCgCAAgEIAAiDIg9AAIAACDQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgiAAQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAICPAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_9.setTransform(-83.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-17.4,190.1,34.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CA903").s().p("AA0BpQgDAAgCgCQgCgCAAgDIAAgWIhZAAIAAAWQAAADgCACQgCACgDAAIgiAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAg4QAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIACAAQAJAAAEgHQAEgHAAgNIAAhpQAAgDACgCQACgCADAAICCAAQADAAACACQACACAAADIAACEIAIAAQADAAACACQACACAAADIAAA4QAAADgCACQgCACgDAAgAgSAKIAAAGIgBAHIgBAHIgDAFIA1AAIAAhhIgwAAg");
	this.shape.setTransform(57.9,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CA903").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_1.setTransform(38.6,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CA903").s().p("AhGBbQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIBSAAQASAAAMAEQAMAFAHAIQAHAHADAKQADAKAAAKQAAAHgCAFQgBAHgDADIgEAHIgEADQAKAGAEAJQAEAJAAANQAAALgDAKQgDAKgIAIQgHAIgLAEQgMAGgQAAgAgcAyIApAAQAHAAAFgEQAFgFAAgGQAAgIgFgEQgFgEgHAAIgpAAgAgcgUIAmAAQAIAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgIgBIgmAAg");
	this.shape_2.setTransform(20.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CA903").s().p("AggBYQgPgGgKgJQgLgKgFgNQgGgNgBgPIAAgWIAAgWQABgOAGgNQAFgNALgJQAKgKAPgGQAOgFASAAQATAAAOAFQAPAGAKAKQALAJAFANQAGANABAOIAAAWIAAAWQgBAPgGANQgFANgLAKQgKAJgPAGQgOAFgTAAQgSAAgOgFgAgMgwQgGACgEAEQgEAEgDAFQgCAGAAAGIgBAKIAAALIAAALIABAKQABANAIAJQAHAJAPAAQAQAAAIgJQAHgJACgNIAAgKIAAgLIAAgLIAAgKQgBgGgCgGQgCgFgEgEQgEgEgGgCQgGgCgIgBQgGABgGACg");
	this.shape_3.setTransform(1.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CA903").s().p("AAmBbQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQgCgCAAgEIAAiDIg9AAIAACDQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgiAAQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAICPAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_4.setTransform(-17.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CA903").s().p("Ag8BbQgDAAgCgCQgCgCAAgEIAAimQAAgDACgBQACgCADAAIB3AAQADAAACACQACABAAADIAAAcQAAADgCACQgCACgDAAIhOAAIAAAcIBIAAQADAAACACQACACAAADIAAAaQAAACgCADQgCACgDAAIhIAAIAAAdIBQAAQADAAACACQACACAAADIAAAbQAAAEgCACQgCACgDAAg");
	this.shape_5.setTransform(-40.9,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CA903").s().p("AAkBbQgEAAgCgCQgCgCAAgEIAAg/Ig3AAIAAA/QAAAEgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgjAAQgCAAgCgCQgDgCAAgEIAAimQAAgDADgBQACgCACAAIAjAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQADABAAADIAAA/IA3AAIAAg/QAAgDACgBQACgCAEAAIAiAAQACAAACACQACABAAADIAACmQAAAEgCACQgCACgCAAg");
	this.shape_6.setTransform(-59,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-17.4,141.1,34.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CA903").s().p("AhMAUQgDAAgCgCQgCgCAAgDIAAgZQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQACgDADAAICZAAQADAAACADQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAAZQAAADgCACQgCACgDAAg");
	this.shape.setTransform(41,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CA903").s().p("AA0BbQgGAAgCgCIgDgFIgHgVIhDAAIgIAVIgCAFQgDACgFAAIggAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIABgEIA4iiQACgDADgDQACgCAFAAIAoAAQAGAAACACQADADABADIA5CiIABAEQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAgAgUAWIAoAAIgUg9g");
	this.shape_1.setTransform(16.3,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CA903").s().p("AAxBbQgDAAgCgCQgCgCAAgEIAAhTIgYAoIgEAFQgCACgEAAIgOAAQgFAAgCgCIgDgFIgZgoIAABTQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgiAAQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIAfAAQAEAAADACIADAEIApBIIAqhIIADgEQADgCAFAAIAeAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_2.setTransform(-3.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CA903").s().p("AAjBbQgDAAgCgCQgCgCAAgEIAAhWIg6BXIgDAEQgDACgEABIgcAAQgCAAgDgCQgCgCAAgEIAAimQAAgDACgBQADgCACAAIAjAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADABAAADIAABWIA5hXIAEgDQACgCAFAAIAbAAQADAAACACQACABAAADIAACmQAAAEgCACQgCACgDAAg");
	this.shape_3.setTransform(-24.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CA903").s().p("AgeBZQgPgFgKgHQgKgIgGgIQgGgKAAgKQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAiAAQAEAAADACIAFAGQADADAGACQAGADAKAAQAQAAAHgFQAHgFAAgGQAAgHgHgEQgHgFgQAAIgSAAQgDAAgCgCQgCgCAAgDIAAgaQAAgCACgCQACgCADgBIARAAQAOABAFgFQAHgEgBgHQABgHgHgEQgFgEgOgBIgKABIgHADIgEAEIgDADIgDAEQgCABgEABIgiAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgIAFgKQAFgJAJgHQAJgIAOgEQANgFASAAQAQAAAPAFQAOAEAJAIQAKAHAFALQAFALAAALQAAAMgFAIQgEAIgIAGQAKAFAGAJQAGAJAAAOQAAALgGALQgEALgKAHQgKAIgPAFQgPAEgSAAQgQAAgOgEg");
	this.shape_4.setTransform(-42.4,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-17.4,106.1,34.8);


(lib.sf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBfQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgQIgJAJQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIASgRIAAgPIgJAJQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIASgRIAAgRIgPAJIgHAXIgCADIgDACIgCgBQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBIAAgEIAEgNIgNAHIgHAZIgCACIgDABIgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAEgNIgPAIIgCABIgEgBIgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAPgIIgMgDQgBgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgFQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIAXAGIANgHIgNgDQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIAAgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAABABIAYAGIAOgIIgOgHIgYAGIgBAAIgEgBIgCgDIAAgFQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAIANgDIgNgHIgXAGIgCAAIgEgBIgCgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBIAMgDIgPgIQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABIAPAIIgEgNQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQAAAAABABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAHAZIANAGIgEgMIAAgEQABgBAAAAQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABIAHAXIAPAJIAAgRIgSgRQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAgBIABgDQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAJAJIAAgPIgSgRQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIAJAJIAAgQQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAQIAJgJQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgSARIAAAPIAJgJQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAIgSARIAAARIAPgJIAGgXQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAABABIAAAEIgEAMIANgGIAGgZIADgDQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgEANIAPgIIAEgBQACAAACADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgDADIgOAIIALADQABABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgCAEIgEABIgBAAIgYgGIgNAHIANADQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAAAFIgCADIgEABIgCAAIgXgGIgOAHIAOAIIAXgGQABgBABAAQAAAAABABQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAAFQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgNADIANAHIAYgGQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBABIgLADIAOAIIADADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABIgCACIgEABIgCgBIgPgIIAEANQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgBAAIgDgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAIgGgZIgNgHIAEANIAAAEQgBABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAIgBABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgDgDIgGgXIgPgJIAAARIASARQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgJgJIAAAPIASARQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgJgJIAAAQQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-9.8,17,19.5);


(lib.sf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBgQgCgCAAgEIAAgSIgKAKQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgCAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIATgTIAAgQIgUAUQgCACgDABIgBAAIgCgBIgCgBIgCgEIABgDIAHgbIgNAIIgHAaQgBAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAQgDAAgCgDQgBgCABgDIAEgNIgRAJIgCABIgEgBIgCgDQgCgCABgCIADgFIAQgJIgNgDQgDgBgCgCQgBgCABgEQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAIAFgBIAaAHIANgHIgbgIQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgCgEIAAgBIAAAAIACgEIADgBIAbgHIgNgIIgaAHIgCAAIgEgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgEABgCQACgCADgBIANgDIgQgJIgDgFQgBgCACgCQABgDADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIARAJIgEgNIAAgFQACgDADAAQACgBACABQADACABACIAHAaIANAIIgHgbIgBgDIACgEIACgBIAAAAIACgBIADAAIADADIAUAUIAAgQIgTgTQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDACgBQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAKAKIAAgSQAAgEACgCQAAAAABAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQACACAAAEIAAASIAKgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQACABAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIgTATIAAAQIATgUIAEgDIADAAIACABIABABIADAEIgBADIgHAbIANgIIAHgaQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQADgBACABQADAAABADQACACgBADIgEANIAQgJIAFgBQADABABADQABACAAACQgBADgCACIgQAJIANADQADABACACIAAAGQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgFABIgBAAIgagHIgNAIIAbAHIADABIACAEIAAAAIAAABIgBAAIgBAEIgDABIgbAIIANAHIAagHIAFABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAEAAACQgCACgDABIgNADIAQAJQACACABADQAAACgBACIgCADIgEABIgDgBIgQgJIAEANQABADgCACQgBADgDAAIgBAAIgFgBIgCgDIgHgaIgNgIIAHAbIABADIgDAEIgBABIAAAAIgCABIgBAAQgDgBgCgCIgUgUIAAAQIATATQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAACgCACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgKgKIAAASQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAgAASAgIgEgQIgIgFIAAAJIAMAMgAgNAQIgFAQIANgMIAAgJgAANAAIAIAEIAQgEIgQgDgAgkAAIAQAEIAIgEIgIgDgAAGgTIAAAJIAFgDIADgCIAEgQgAgNgPIAIAFIAAgJIgNgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-9.8,17.1,19.6);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAxQgGgIgBgEQACgWACgIQAEgKAMgWQABAAADgLQADgGAEgCQACADADAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAIABABIgBABIAAAAQAFgDAAgBIgCAAIAAgCIAHgFIAMgDIAHAAIABgBIABAAIABABIAAABIADADIABgBIABABIAAAAIgGADIABABIACgBIAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABIAJgBQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgFABIAAABIAIgBIgBABIABAAIADgBIADAAIAAAAIgBACIgBAAIgCABQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAACgNAEIAAAAIABAAIABAAIABAAIAAAAIABgBIADAAIABAAIABABIgMACQgNADgKALQgJAJgDALQABAAgCAEIABAAQgBAAgCAHIgGAZIAAABIAAABIgEAOQAAABgEADIgBAAIgBACQgCgHgDgCgAAXgkIAAABIACgBIAAAAg");
	this.shape.setTransform(21.1,-25.1,0.66,0.66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAABIAAAAIABgBIAAAAIAAAAIgBABg");
	this.shape_1.setTransform(10.4,-24,0.66,0.66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhhBfQgIgOgCgHIgBgDQgBgKALgSQAHgMAKgIQAUgUAOgFQAQgKALgCIAIAAQAeg7ALgSQAEgFAFgBIAAgCQACAAAEADIAAAIIABACQgBAJgFANQgDAHgBABQgDADgHAOIgBAAIgBADIgBAAIgBABIgBAAQAGgLACAAIAAgBIgCAAIgLARIACACQgCABgCADIgBAAIgCADIAAAAIACAAIAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgCAAIgHAMIAAABIABgBIAAABIgBABIgBAAIAAABIABABIgBAAIAAgBIgBAAIAAABIAAABIABgBIAAABIABAAIACgEIACAAIgFAGIgBAAIAAgCQgBAAgDAHIAAAAIABAAQgBgBAEgEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCADIAAABIABgBIABABIgCAFIABgBIAAABQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAIAAADIAAAAIgBABIAAgBIgCAAQABACgHAHIgFAJIAAAAIADgCIgFAKQgGAUAAACQABADAKABQAOgFAGgEIABAAIgEgOQgDgQAmggQAHgDAAgDQALgFgBgCIADAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIgCABIAAgBIANgJIABAAIAAABIABAAIgBgBIADgCIADAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIAIgEIAAABIABgBIAJgCQAGACAEAFIABADIAAAEIABACIgBALQgEAHgSAPQgEAGgMAGIgKAEQgMADgFgQIgBgDIgMAKIgCADIABABQgIAIABABIABABIgFAKIABABQgBAAAAABQAAAAAAABQAAABAAAAQAAAAAAABIABABIAHgFIAAgBIADABIABgBIAAAAIgFAFIgCACQAIABAIgBIAAAAIAEAAIAEgBIAUgIIAAAAIAKgFIAAACIgBAAIAAAAIADAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAABIgBABIABABIABgBIACgBIAAACIgEACIAAABIABgBIABAAIABAAQAAABgGACQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAgBAAIABACIAAAAIAGgEIABABQAAABgGACQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBQgBADgFABIAAABIABABIgCAAIABAAIACAAQAAABgGACQAAADgFACIgCgBIgBADIAJgEIAAABQAAABgJADIAAAAIADAAIAAABIgCABIAAABIgLADIgBABIgDABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgCgBIgDACIgBAAQgJACgKgKIgEgFIAAgBIgBgBIgDACIABABIAAAAIgDAAIgEADIAAACIAAABIgFAGQAAABgGADIABAAIAEgBIAAACIgCAAIgFAAIAAABIABABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQgBAAgBAAQAAgBAAAAQgBAAAAAAIgBABQgJgEgBgGQgCAAgGgQIABgBIgBAAIgPAPIgBgBIABgBIgCAAQABAEgWAPIAAgBIgBAAIACABIAAABIgEAAIAAABIABAAIABABIgLAFQgHgCgCgDgAhHAuQgFAEgOAWIAAABQATgEAbgeQAGgEAAgCQAHgHAEgJIADgKIgBAAIgEABIABACIgBABIAAgBIgKAGIABABIAAACQgGACgIAIQgCAAgFAFIgBgBQgDACgIALgAgwBCIAAgBIAAgBIgCAAIABACIABAAgAgKAPIABABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAAAgAAvAFQACABAHgBQAEAAAVgMIAAABQAAgCAJgHIAFgGIgBgBQgHACgUAMQgDABgEAEIgHADIAAABIgCAAgAAmACIgBABIAAABIABAAIABgBIAAgBgAAwgFIgBADIAAAAIADgDIAAAAgABKgcIAAgCIgCACIACAAg");
	this.shape_2.setTransform(10.9,-25.2,0.66,0.66);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_3.setTransform(12,-27.2,0.66,0.66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAyIgEgPQgFgbARgWQAUgmAKgCQADAAAEAJIAAAGIABADIgBACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABIgOARQgEAHgFAFQgNAZAAACIAAAAQAFAAAKgHIABAAIAAgBIABABIABAEIgDAEIABAAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIgCAAIAAABQACADADABIgCAFQAAACgEADIABABQgBAHgCAAQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABIgFAAQgKAAgBgFg");
	this.shape_4.setTransform(2.3,-21.4,0.66,0.66);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMADIAAgDIgBgDQAAgKAHgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIABAAIAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAgBQAIgBAEANIAAAAIAAADIABACIABAAQABAGgPAKIgEACQgCAAgGgPg");
	this.shape_5.setTransform(4.5,-26.3,0.66,0.66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_6.setTransform(-0.1,-19.8,0.66,0.66);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA7QgLgKgFgNIgBgBQgDgJAHgPQAQgbANgLIAHgKQARgRASgIIAFgBIADgBIABABIABACIgBACIgCABIAAACQAEgBABABQgEACAAAIIgBAAIgDABQgHAFABADQgFAEgDABQgEAHgIAFIAAABIACgBQAAACgEACQAAAEgKANIgNAUQgHAOAAACQAAACAJgDIAJgDQAAAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAIABgBQAFgDAfgTIAAgBQgCAFAAACIgFAFQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQABADgEACIABAAIABAAQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAAAAQAAACgFADIgCAAQAAABgJAGIgBAAIgBgCIgBABIAAABIABABIgEACIgCAAQABAAgBABQAAAAAAABQAAAAgBABQgBAAgBAAIAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIAAABIAAgBIAAABIAAADIAAAAIABgBIABABIAAACIADgBIABABIgCABIgBAAIgDABIACABIADgBIAAABIgFAFIAAABIAAgBIAAABQABACgEAEIgCAAIgDACIgHABQgJAAgCgGgAAMAeIABABIADgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_7.setTransform(-2.6,-20.7,0.66,0.66);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAFIARgJIAKgDIACADIgKADIgFAEQgIADgEADg");
	this.shape_8.setTransform(50.4,-9.1,0.66,0.66);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Al8D+IACgJQgPACgSgjIgHgEQgHAOgVADIgCgKQATgdgCgJQAEgMACgBIACAAIAFABIAEgJQgDABAAgEQAOgKAIgOIgFABIgBgEQABgHATgLIgCgDIgBgEQAKgCALgUIAAgGQAHgBAVgpQASgeAFgBIATgiQADgBAHgPIgCAAQgXAEgqACIgOAEQg1gJgCgUIgTgcIACgEIgYgsIAAgDQAJgHgBgEIAFgBQAvASA1gIIBTgOIADgCIAIABQAXgKALgBIACAEQADgDADAAIAcgCIABAGQgHAHgEAAIABACQALgBABAEIAAABQgMAPgSACIAAACQAIgBALAHQACgIAPgDIAKAJIAAACQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAEAHIAHgCIAOgGIAMACQgCgHAKgCIACgBQgHgEAAgDIgEADIgCABIgCgFIAHgCIAIADIgBgEIAMgBIACgFIAHAAIASgHIgBgCQgDABgSgFIgBgHIABAAIAJADIAagJIgCgFIgfAGQgBgEAEgBIAYgHIgBgCQgoAJgCgHQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAMgBQAHgJAKgCQAAgBABAAQAAAAAAABQABAAAAAAQAAABAAAAIALgFIAYgGIALgFQACAEAEgBQAJgHAHgCQABAFAYgFQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAYgDAFADIAHgHIACgBQAXgGACAFIATgKQAxgNApAbIABACQAFAQgPA2QgKBBhLA6IgXAVQgGAEgEAFIAAADIgFABIAAABIACADQAAAEgEAAIgBABIAAgFIgCACIgJADIAAAAIgBAAIgJAGQgMAJgCANIAAABIAAABIAAAGIAMgBQAbADAYAAIAKAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAFgCQANAAALABQAQAAA7gXQA6gUAdgQQAGAAAFgFIACAAQADABAAAEQAEgDACAAIAAgCIgBgEQAFgGAEAAIAHACQASgMAGgHQgHAEgHABQgJABANgHIA6gXIAAADQABAFgHAAIAAAEQAJAAAAAGIAAAEQgFAAgHAGQgCgEgBgCIgCAAQgPAAgGAMQALAAAAAEIAAACIgfAYIAEACQABgFANgDIgCgEIAAgCIAHAAIAFACQAGgJATgKIADgFIAEADIAGgDIgBgEIAAgCQAQAAAngYIAHAAIgBAFQgHAAgBAFIAAACIgEADIgBgFIgCAAQgMAMgBAGQgXAOgCAHIgGACQgEAAABgEQADAAALgOQASgCAAgHIgCAAQgFACgDAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgcARAAAGIAAACIgNgCQgLAIgUALIAAALIADAAQAAgFAQgHQAJADgBADQgBAAgIAMQgbABgLAQQgZAPgBAFQgFAAgqAVIghALIACAEQAAADgGADIgCAAIgrAPQgpAOgBAAQgPABAAADQgfgEghABIgEABIgFgBQgKAAgcAIIAAAGIAWgCIAAAEIg0ARIgCAAQgEAAAAgEIAEgJQgHAAgGgGQgVAAgDgMIgCgUIgEADIgCADQgZAEgKASQgXATAAAFQgFABgmAaIggAPIADADQAAADgFAEIgCABQgIABgCgCQgOAEAAACQgeABgiAFIgEACIgFgBQgKABgbAMIABAHIAVgGIABAEIgzAYIgDABIgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBgAi0ClIgKAEIABACIAMgCQAEgBgBgEgAinCbIABACIACAAQAKgEgBgEIgBgCQgIAHgDABgAixCMIAAACIAIgBIAAgCgAlvCFIABAEQAAADAGACIADAAQAKgBANgEQAYAAAbgEIAKgBQABgBAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAEgCQAOgDAKABQAigFAwglQAGgBAFgFIACAAQADAAAAADIAHgDIAAgCIgDgEQAGgHADAAIAGABQARgMAHgMQAIgBAggbIADgBIAAACIACgFQgCgHAYgZQgBgEAFgBQAFABADgBQgBgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIgEgEQAAgDApgkQACgJATgIQANgVAOgHQgBgFAYgZQAFABADgBQgDgNhqATIgHAEQgjAFgbAHIgBgDIgDAEIgaAHQgFAAgBgEIgLAGIgKAAIgFADIgKgBQAGANAFAPQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAIgEAJQADADABACQgBAGgyA3QgNAMg0BMIgBgGIAMgSIgBgCIgCAAQgHADgMAVIgCAAQgEAAgBgHIgGAEIgDABIgCgIIAFgJIgCAAQgVAagKABIADAEQAAAEgEABIgCAAIgBgIQgEAEgKACIABACIAEAAIAAADIgJAEIgCAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgLAEABAKIAEAAIgBgEIAGgBIAAACIgJASIgGABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQgCACgFABgAiKCCIABAIIAFAAIAAgEQgBgEgEAAIgBAAgAieB/QAAACgBAEIAFAAQAAgCACgEgAh/BoQgSARgCAAIAAAFIAJgBQgBgIAKgCQALgJgBgDgAhkBnQgHAFgMAGIAAABQABAEAEAAIAFgBQAJgFAEgLgAhOA6IAAACIgiAiIABACQANgIAEgBIABAHQAUgYAAgIQADgHADgEIABgHIgCgEIgDAAQgPACgFAOIAHgBQAGAAAAADgAD1A2IAAABIACAAIAJgCgAjzArQgEABABAEIACgBQAEgBAAgDgAEJAtIAAACIACAAQAKgDAAgEIAAgCQgKAHgCAAgAEpAgIAEAAIAAgEQAAgEgFAAgAhAAZIAAAEIABAAIABgEgAEUAVIAEgDIgEAAgAEkASIAEAAIABgCIgFACgAE9AKIAAACQAAADAEAAIAGAAQAKgEAEgKIgDAAQgHAFgOAEgAk9g1IAAACIAXgCIAEgCQAEABAEAAIACgBIgBgFIgBAAIgZAFIAAgCQgCADgIABgAjYiKIgNAGIAAACIAMgBQAEgBAAgEIAAgCgAhliOIABAEIAHgCQAFgIAKgCIAAgCQgIABgCgGIgFABIAEAEIAAACIgCABIgIgDIgGACQAAAEAFgBgAhsiMIABgFIgBgCIgJACIABAFIAEgBIAEABgAhNiUIABAEIAQgEIAAgCQgFABgGgDIgGAEgAhIjEIABACIAJgDIgBgCgAAfjbIAAACQAOgDADABIgBgEg");
	this.shape_9.setTransform(23.2,-4.5,0.66,0.66);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOADIgBgDIAUgCIAKAAIABACIgKAAIgGADQgIgBgGABg");
	this.shape_10.setTransform(3.7,10.3,0.66,0.66);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBgBIADAAIAAACIgDABg");
	this.shape_11.setTransform(5.9,1.1,0.66,0.66);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Al/DkIgCgDQA8gYAkgHIgBgHIAigLIACgCIgBgDQhOAXgOgEIgBgCIAagPQAFgDgCgGIAbgIQAMgKALgGQAdgQBdgXQAAgdAJgUQgGggAQgEIgBgKQgfgXgDgPIgCgNQgCgJAOgLIgBgCQgDgGgXAKIgCgDQAEgGADgBIAUgIQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBgBAAIAQgFIANgIIgCgCIgQAJIgDgGQBFgmDzguQBAgWAvgHQAigCARgIQA1gNADAGIACADQg6AYgmAHIAAAHQgDACgeAJIgCACIABACQBNgWAPAEIABACIgbAPQgFADADAGIgbAHQgOAMgJAFQgmAUiDAeIgKAJQhVAggDgBQgDgGhAAcQAFAKAMAFQgCAEAAAPIABAXIABAEIADgBQAygNBWgYQAIADAJgCQABAGgXAMIABAEIAEgBQAPgNAHgCIACAJIgMADIABAFIAIgDIABACIAKgJQAPAGALgDQgBgEAFgBQAIARAKAMIAAAEQgIgEgLABIADAFQgFASABACIADAFQADAFAXgJIACADQgFAGgCABIgUAIQgBAAgBABQAAAAAAABQAAABAAAAQAAABAAAAIgPAFIgNAHIACADIAPgJIAEAGQhFAljzAvQhAAWgvAHQgkACgPAIQgjAJgOAAQgGAAgBgCg");
	this.shape_12.setTransform(-28.2,-13.4,0.66,0.66);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpEjQADg8AKgoIgHgDQAAgHAEgbIAAgEIgDABQgMBPgKAMIgDAAIgCgfQAAgFgHAAIAFgdQgEgPgBgMQgDgoAdiFIgEgMQAHhaACgEQAJAAABhbIADAAIAHADIABgfIAGAAIAAAGIADAAIACgZIAFAAIAAASIAHAAQgCgXAJgDIAJAAQAPAMACgBIAGAAQAGAAABgaIAEAAQADAHAAACIgBAWQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIgCAQIABAPIADgBIgBgSIAGAAQAFBPg+DvQgIBFgLArQgOAhACARQgMA2gHABg");
	this.shape_13.setTransform(-12.8,1,0.66,0.66,0,0,0,-0.1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AisEMQAQhSAUgwIgIgFIAMgtIABgDIgFgBQgfBngQAOIgFAAIAEgqQABgIgJgBIAMgkQgCgUABgSQAdiUAxhOIAIACIgGAUIgBAMIAEAAQAFgvA9geQAAgEAegTIAHABIgVAXIAEABQAUgYAOgLQAdgBA4gSQA9gVAZgCQgaAdgUAWQglAmgfAUIgEAAIATgUIgFAAQhtBUgBAPQgeAigpCXQgFgBgPAwQgJAAgiBqIgNALg");
	this.shape_14.setTransform(-32.9,14.1,0.66,0.66);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_15.setTransform(-15.4,-14,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.7,-31.8,107.4,63.7);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2ED06").s().p("AiKBOQgHgxAQgvQAQgxAjgkQAYgTARAVIAKAXQAFAOAQAEQARAHA1AFQA3AFAWAHQiXANgvBQQghAzgWAFIgEAAQgQAAgGgjg");
	this.shape.setTransform(14.1,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,22.8);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2ED06").s().p("AiqAGQgGgNAOgNQAOgOARACQgoAqBCARQA1AOBNgJQBNgIArgcQArgfhpAFQAbgMAfADQAfACABAMQABAYg6ARQg3AThJAEIguACQhjAAgNgjg");
	this.shape.setTransform(17.3,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.7,8.3);


(lib.descr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAmIAAgKIAaAAIAAgOQgOgBgHgHQgHgGAAgKQAAgJAEgFQADgGAHgDQAHgEAKAAQAPAAAJAHQAIAHAAANQAAAKgIAGQgHAIgOAAIAAAOIAcAAIAAAKgAgQgXQgGAFAAAHQAAAIAGADQAFAEALAAQAMAAAFgEQAGgDAAgHQAAgHgGgFQgFgEgMAAQgKAAgGADg");
	this.shape.setTransform(1,-57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAZIAAgLIAXAAIAAgNQABgLAFgHQADgHAIAAQAJAAAFAGQAGAGAAAMIAAAZgAAFgKQgEADAAAJIAAAMIAVAAIAAgLQAAgIgDgEQgCgEgGAAQgEAAgCADg");
	this.shape_1.setTransform(1,-50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.6)").s().p("AAVAeIAAgFIAAgEIgCgCIgKgBIgnAAIAAgvIA8AAIAAALIgzAAIAAAaIAdAAIAOAAQAEABACADQADADAAAGIgBAJg");
	this.shape_2.setTransform(1,-43.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAZIAAgKIAtAAIgtgbIAAgMIA8AAIAAALIguAAIAuAbIAAALg");
	this.shape_3.setTransform(1,-36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAZIAAgLIAZAAIAAgbIgZAAIAAgLIA8AAIAAALIgcAAIAAAbIAcAAIAAALg");
	this.shape_4.setTransform(1,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.6)").s().p("AAGAaQgEgCgCgDIgCgIIgBgKQgCgKgCgGIgCAAQgHAAgDADQgEAEAAAGQAAAHADAEQADAEAHABIgCALQgGgCgFgEQgEgDgCgGQgCgFAAgHQAAgIACgFQACgEACgDQADgDAEAAIAKgBIANAAIASAAQAEgBAEgCIAAALIgIACQAFAGACAFQACADAAAHQAAAKgFAFQgFAGgIAAQgEAAgEgCgAAEACQAAAHACADQAAACADABQACACADAAQAEAAADgEQACgCABgHQgBgEgCgEQgCgFgFgDQgEgBgHAAIgDAAIAEAPg");
	this.shape_5.setTransform(1,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAZIAAgZQAAgGABgEQABgFAEgDQAEgDAGAAQAEAAADACQAEACACADQAAgEAEgDQAEgDAFAAQAJABAEAFQAFAGAAALIAAAagAAHgLQgDACAAADIgBAHIAAAOIATAAIAAgPQAAgGgCgDQgCgEgFAAQgDAAgDACgAgTgHQgCADAAAHIAAAMIASAAIAAgMIgBgHIgDgFQgCgBgDAAQgFgBgCAEg");
	this.shape_6.setTransform(1,-17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.6)").s().p("AgQAXQgIgDgDgHQgEgHAAgGQAAgKAFgGQAFgHAKgCIABALQgGABgDAEQgDAEgBAFQABAGAFAFQAGAFALAAQAMAAAFgFQAGgFAAgGQAAgGgEgEQgDgEgJgBIACgLQALACAGAHQAGAHAAAKQAAALgIAIQgJAIgPAAQgJAAgHgEg");
	this.shape_7.setTransform(1,-7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.6)").s().p("AgRAZIAAgLIAtAAIgtgbIAAgLIA8AAIAAAKIguAAIAuAbIAAAMgAgqAJQAFgBACgDQACgCAAgDQgBgEgBgCQgCgCgFgCIAAgGQAIAAAEAEQAEAFAAAHQAAAGgEAFQgEAEgIABg");
	this.shape_8.setTransform(-0.2,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAiIAAgKIAXAAIAAgOQABgLAFgHQADgHAIAAQAJAAAFAGQAGAGAAALIAAAagAAFgBQgEABAAALIAAANIAVAAIAAgMQAAgKgDgCQgCgEgGAAQgEAAgCADgAgdgXIAAgKIA8AAIAAAKg");
	this.shape_9.setTransform(1,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAZIAAgLIAZAAIAAgbIgZAAIAAgLIA8AAIAAALIgcAAIAAAbIAcAAIAAALg");
	this.shape_10.setTransform(1,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.6)").s().p("AgdAZIAAgLIALAAIALgBQADgBADgDQABgEAAgFQAAgEgBgJIgcAAIAAgLIA8AAIAAALIgZAAQACAJAAAHQAAAHgDAFQgDAGgEACQgFACgHAAg");
	this.shape_11.setTransform(1,24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.6)").s().p("AgYATQgHgIAAgLQAAgLAIgIQAJgJAOAAQALAAAGAEQAIAEADAHQAEAGAAAHQAAANgIAIQgJAIgPAAQgQAAgIgKgAgRgLQgFAFgBAGQABAHAFAGQAHAFAKAAQAMAAAFgFQAGgGAAgHQAAgGgGgFQgGgGgLAAQgKAAgHAGg");
	this.shape_12.setTransform(1,30.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.6)").s().p("AAVAeIAAgFIAAgEIgCgCIgKgBIgnAAIAAgvIA8AAIAAALIgzAAIAAAaIAdAAIAOAAQAEABACADQADADAAAGIgBAJg");
	this.shape_13.setTransform(1,37.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("AghAVQgIgJAAgPIgBgMQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIAAgKQAGABADACQACACABAEIABANQAAALACAFQADAFAFACQAGACAIAAQgGgEgCgFQgDgGAAgFQAAgMAIgIQAIgIANAAQALAAAHAEQAHAEADAGQAEAFAAAJQAAAKgFAGQgFAGgIAEQgIADgSAAQgYAAgJgIgAgDgMQgGAEAAAIQAAAIAHAEQAEAFALAAQALAAAGgFQAGgFAAgHQAAgHgHgFQgHgFgLAAQgJAAgFAFg");
	this.shape_14.setTransform(-0.2,44.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.6)").s().p("AAOAQQgIgFgBgFQgBAIgEAFQgEAEgHAAQgIAAgGgGQgEgFAAgLIAAgbIA8AAIAAAKIgZAAIAAAHQAAAFABADQACABAIAFIAOAJIAAANgAgVAAQAAAHADACQADADAEAAQAGAAACgDQACgEABgJIAAgMIgVAAg");
	this.shape_15.setTransform(1,51.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.6)").s().p("AgIAQIAGgOIgPACIAAgHIAPACIgGgPIAIgCQABAHABAIIALgLIAFAHIgNAHIANAHIgFAHIgLgJIgCAOg");
	this.shape_16.setTransform(-2.8,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-64.3,17.4,128.7);


(lib.cur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABcNzIgBhdIhbAAIAAi5IhcgCQABgagDhCQgEg7AEghQAdgDBBABIAAC6IBdAAIAABdIABBcIBdAAQA4AAAlACQgCglAAg4IABhdIhegBIAAhdIABhdQgfABg+gBQgBhcABhdQB8gBD4AAQAAgzgBgqIhcgBIAAhcIhdAAQgBgpABgzQAjgBA6ADIABBaIBbAAIABBdIBcAAQACBJgCBxQhcABkWABQABA3gCAkQAjgCA6ACIAABdIABBcIBcABQABB9gBA+Qg9ABgfgBQAEAjgFA6IheAAIhdAAgAosK5QgBhrAAinIAAkSQgBqvAClYIBbAAQACAuAAAuIBcABIABBcIhdAAIAAKLIAAKIQAzABApgBIAAhcIAugBQAbAAAUADQADAUgBAbIgBAuIhbAAQABArgDAxgAkTH9QgDgTAAgbIABguIBcAAIABhdIBcAAIABAvQAAAbgDAVQgdACg5AAIgCBaIguABQgbAAgUgDgAC6guIAAhdIheAAQABgugBgvIhcAAIAAhdIhbAAIgBhdIhcAAIgBhdIhdgBIAAhcIhcAAIAAhdIBcABIABBbIBcABQAAA+ACAfIBcABQgBAqACAxIBaABIABBcIBcABIAABcQAxAAArACQACApAAAyIBbABIABBcIgyABIgrAAg");
	this.shape.setTransform(49.6,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEXLoQgkgCg5AAIhdAAIAAhcIAAhdIhdAAIAAi6QhAgBgeADIAAAAIAAAAQADgVAAgbIgCgvIhcAAIAABdIhdAAIgBAuQAAAaAEAUIgEgBIAAAEQgTgDgbAAIguABIAABcQgpABg0gBIAAqIIAAqLIBdAAIABBdIBcAAIAABcIBdABIAABdIBdAAIAABdIBcAAIAABdIBcAAQABAvgBAuIBdAAIAABdQA3ABAmgCIAAABQgBA0ACAoIBcAAIAABbIBdABQABAqgBAzQj4AAh7ABQgCBdACBcQA9ABAfgBIABAAIgBBdIAABdIBdABIAABdQgBA4ACAlg");
	this.shape_1.setTransform(49.6,86.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.8,111.7,176.8);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-61,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-130,122,260);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.window = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// roll
	this.roll = new lib.Symbol8();
	this.roll.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.roll).wait(1));

	// kak
	this.kak = new lib.Symbol7();
	this.kak.setTransform(46,335);

	this.timeline.addTween(cjs.Tween.get(this.kak).wait(1));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D1D7D7","#C4CBCB"],[0,1],0,23.7,0,-23.7).s().p("AgbDuQgMgMAAgQIAAmiQAAgRAMgMQAMgMAPAAQAQAAALAMQAMAMAAARIAAGiQAAAQgMAMQgLAMgQAAQgPAAgMgMg");
	this.shape.setTransform(106,115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#F0F1F0"],[0,1],0,23.7,0,-23.7).s().p("AgbDuQgMgMAAgQIAAmiQAAgRAMgMQAMgMAPAAQAQAAALAMQAMAMAAARIAAGiQAAAQgMAMQgLAMgQAAQgPAAgMgMg");
	this.shape_1.setTransform(104,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E9E9","#CED2D2"],[0,1],-5,30.7,-5,-16.7).s().p("Ag/CZQgagaAAgmIAAiyQAAglAagbQAbgaAkAAQAlAAAaAaQAaAbAAAlIAACyQAAAmgaAaQgaAaglAAQgkAAgbgag");
	this.shape_2.setTransform(105,98);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#9F9F9F").ss(1,1,1).p("ASwAAMglfAAA");
	this.shape_3.setTransform(0,347);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(42,42,42,0.149)").ss(1,1,1).p("AOE3vMAAAAvfI8HAAMAAAgvf");
	this.shape_4.setTransform(0,152);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C1C1C1").ss(1,1,1).p("AOEAUIgognAtbgTIgoAn");
	this.shape_5.setTransform(0,302);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DADADA").ss(1,1,1).p("AOEiVIEsErAyvCWIEskr");
	this.shape_6.setTransform(0,319);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 16
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,0.498,1],-102.2,55.9,-102.2,-58.6).s().p("AiVJXIAAytIEqAAIAAStg");
	this.shape_7.setTransform(105,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E4E6EB","#EBEEEE","#CDCECF"],[0,0.427,1],0,165,0,-165).s().p("AyuaFMAAAg0KIErAAMAAAAvfIcHAAMAAAgvfIErAAMAAAA0Kg");
	this.shape_8.setTransform(0,167);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 8
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8DBE2").s().p("AyuAtIAAhYMAldAAAIAABYg");
	this.shape_9.setTransform(0,342.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CFD1D4").s().p("AyuAZIAAgxMAldAAAIAAAxg");
	this.shape_10.setTransform(0,335.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 10
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F6F9F8","#E6E9E9","#CFD1D4"],[0.671,0.835,0.894],0,20.5,0,-20.5).s().p("AyuDgIAAnAMAldAAAIAAHAg");
	this.shape_11.setTransform(0,367.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","#EBEEEE","#E4E6EB"],[0,0.427,1],0,179,0,-151).s().p("AuWX6MAAAgvzIA7AAMAAAAu2Ia3AAMAAAgu2IA7AAMAAAAvzg");
	this.shape_12.setTransform(0,153);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#4C5765","#8A929B"],[0,1],0,179,0,-151).s().p("AuWX6MAAAgvzIBQAAMAAAAuiIaNAAMAAAguiIBQAAMAAAAvzg");
	this.shape_13.setTransform(0,153);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-50,242,442);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t4 = new lib.logo();
	this.t4.setTransform(82.6,28.9,0.97,0.97,6);

	this.t6 = new lib.Symbol14();
	this.t6.setTransform(87.4,96.8);

	this.t5 = new lib.Symbol13();
	this.t5.setTransform(79,68);

	this.t3 = new lib.Symbol12();
	this.t3.setTransform(11.2,33.3);

	this.t2 = new lib.Symbol11();
	this.t2.setTransform(84.4,-14.4);

	this.t1 = new lib.Symbol10();
	this.t1.setTransform(48.7,-43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t5},{t:this.t6},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.6,174.8,174.8);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t4 = new lib.Symbol5();
	this.t4.setTransform(79.9,43.2);

	this.t3 = new lib.Symbol4();
	this.t3.setTransform(95.1,14.4);

	this.t2 = new lib.Symbol3();
	this.t2.setTransform(70.6,-14.4);

	this.t1 = new lib.Symbol2();
	this.t1.setTransform(53,-43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.6,190.2,121.2);


(lib.sugrob_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2KYLMAAAguEQAVgKAUgGQBDgYCAgYQAagRAmgPQBignBrgIQBqgJBmAYQAsAKCgA3QB8ArBSAFQA6ADBOgMICIgYQCmgfBhAfQAmAMBJAgQBBAZAvgIQAigFAxgeQA8glAUgHQApgRA8gBQAjgBBGACQBWABDRgeQC7gbBpAKMAAAAwFg");
	mask.setTransform(-4,-121.8);

	// Layer 1
	this.mc = new lib.Symbol6();
	this.mc.setTransform(0,-117);

	this.mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-234,240,234);


(lib.sfs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.sf3 = new lib.sf1();
	this.sf3.setTransform(-47.8,-144.4,0.8,0.8);

	this.sf10 = new lib.sf1();
	this.sf10.setTransform(-44.4,-227.8,0.8,0.8);

	this.sf9 = new lib.sf2();
	this.sf9.setTransform(-50.4,-295.6,0.5,0.5,0,0,0,0,-0.1);

	this.sf8 = new lib.sf2();
	this.sf8.setTransform(36.5,-118);

	this.sf7 = new lib.sf1();
	this.sf7.setTransform(-143.8,-404.8,0.8,0.8);

	this.sf6 = new lib.sf2();
	this.sf6.setTransform(22.1,-205.3,0.7,0.7);

	this.sf5 = new lib.sf1();
	this.sf5.setTransform(24.6,-251.6,0.4,0.4);

	this.sf4 = new lib.sf2();
	this.sf4.setTransform(44.1,-39.4,0.5,0.5,0,0,0,0,-0.1);

	this.sf1 = new lib.sf2();
	this.sf1.setTransform(-111.4,-280.9);

	this.sf2 = new lib.sf1();
	this.sf2.setTransform(-46.1,-58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sf2},{t:this.sf1},{t:this.sf4},{t:this.sf5},{t:this.sf6},{t:this.sf7},{t:this.sf8},{t:this.sf9},{t:this.sf10},{t:this.sf3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-412.6,199,378.2);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.t1 = new lib.Symbol18();
	this.t1.setTransform(0,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 4
	this.t2 = new lib.Symbol19();
	this.t2.setTransform(0,11.5);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// Layer 2 copy
	this.pl2 = new lib.Symbol21();

	this.timeline.addTween(cjs.Tween.get(this.pl2).wait(1));

	// Layer 1 copy
	this.pl1 = new lib.Symbol20();

	this.timeline.addTween(cjs.Tween.get(this.pl1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-38,190,76);


(lib.apple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6C902").s().p("AAkBPQg5gXgrgoQgygygfhKQASATANATQANASATAUQAlAvAbAUQAzAnBxAjQhIgQgmgOg");
	this.shape.setTransform(-12,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#68321D").s().p("AAiBXIgFgiQgJgzgMgYQgZgygYgHQgCgFABgCIALABQAMAEAGAFIANAOQAXAmAKAgQAJAgABAuIgIABIgBAAg");
	this.shape_1.setTransform(1.5,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A55F34").s().p("AAdBbIgFgiQgIgygNgYQgYgygYgHQAAgFABgBQALABAKgDIANgIQAGgBAFALQAGAGADAIQASAeAKAtQAJArgBAmIgPABIgCAAg");
	this.shape_2.setTransform(1.9,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ACCF00").s().p("AgHAHQgSgFgBgGQAEgEAHgEQANAGAVACQACAKAGAHQgWgCgMgEg");
	this.shape_3.setTransform(0.8,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0D905").s().p("AgxAQQgagGgCgKQAEgBAHgFQAYAIAmgCQAqgBAcgRQAMAEAAAGIAAABQgJAIgXAIQgXAIgZACIgLAAQgTAAgRgDg");
	this.shape_4.setTransform(5.9,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A8C900").s().p("Ag8ANQgdgJAPgNQABAJAaAFQAXAFAYgCQAZgCAYgGQAWgIAJgKQABAMgaAKQgbAMghACIgOABQgWAAgTgGg");
	this.shape_5.setTransform(5.7,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B6C902").s().p("AiLBeQDBhLBWhxQgwBmhOArQgtAahrASIAAAAIgBgBg");
	this.shape_6.setTransform(25.8,68.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A6C700").s().p("AhlDkQAVgUACgEQBBhQAchoQAehlgIhzIgDglQgBgMAFABQAdALARAnQA1B/g+CTQgcBCgtAsQgtAug1AJIgBAAQgTAAAPgRg");
	this.shape_7.setTransform(32.9,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BCE300").s().p("AgHByQg/ggglg2Qgmg3AAhFQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAHBPAqAtQAQASAcAXIAvAmQADACgCADQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAIgCgBgABCBwQhBgGgzgyQgygvgQg+IAAAAQASA1A5ApQAVAPAgAQIA5AbQAFACgBAGQgBAFgFAAIgBAAgABJBaQgfgKgggTQg/gnggg4IAAgBQAmA3BJAgQAmAQAVAFIAdAFQASADAKAEQAFABgBAFQgBAEgEABQgJADgLAAQgVAAgbgJgAhGBgQgKgEgQgPQgRgPgPgTQgZgdgJguQgIgtAJglIABAAQgGAlANApQAMAkAYAhQAJAMASAUIAYAYQADACgCADQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCgBgAiQBYQgFAAgFgFQghgdgUgmQgXgsABgxIABAAQAIBSBCBCIAVAWQgGgFgFAAgAh6BQQgUgKgTgYQgRgVgKgYQgSgpAFg0QAAgBAAAAQABgBAAAAQAAAAAAABQAAAAAAABQADA8AbAoQAIANATAUQAUAWAIALQACADgDACIgEACIgCgBgABAA2QhFgegjgrIAAgBIABAAQAmAlBOAaQAbAIAkAEIBAAGQAGABAAAFQAAAFgFACQgQAFgTAAQgsAAg+gZgACBArQgKgDhSgmIABgBQA1AUAnAIQAWAFAaABIAvgBQAEAAABAFQABAEgEACQgTAIgXAAQgaAAgegKg");
	this.shape_8.setTransform(-1.2,57.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BED604").s().p("AATFKQgSgHgOgBQgNgBgVACQgSABgWgDQjKgZhMjHQgWg8gLg1QA2DNC3AqQBFAQBKgLQA+gJApgXQBkhHAaiMQAVhygbieQgFgbAHgPQAFgOANADQA6ASAnAyQBFBcgbCQQgNBFgcA1QAnhHAMhXQANhkgahYQAvBQgLBxQgKBjgzBeQgyBag8AvQhIA3hkAHIgJAAQgQAAgKgDg");
	this.shape_9.setTransform(9.4,46.3);

	this.instance = new lib.Path_9();
	this.instance.setTransform(5.3,14,1,1,0,0,0,17.3,4);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_10();
	this.instance_1.setTransform(-13.5,27.5,1,1,0,0,0,14.1,11.4);
	this.instance_1.alpha = 0.5;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7ED02").s().p("AjGAkQhUgkBug2QATgDAXABQAjABAfAJQApAMAQABQAaAEAbgJQBqgiBTAUQACAjhMAiQhPAkhiAGIgoABQhUAAg6gYg");
	this.shape_10.setTransform(6.7,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CADE02").s().p("AjfD0QhEgqgmhXQgjhTAFhXQAGhcAxg4QA2g+BdADQAKAAAWAJQAcALAIACQAjAKAOACQAZADAVgHQBpgjA8gDQBpgFAzBFQAxBCgWCBQgTBpg2BdQgjA9hjgBQg6gDgeAAQg3AAglANQgwAOgpAAQg4AAgtgbg");
	this.shape_11.setTransform(7.2,37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9E800").s().p("AAYFdQgSgGgOgCQgNgBgVACQgSACgWgDQjKgZhMjHQgkhggGhRQgIhkAlhFQAfg6A8ggQA8ghBGADQAjABAfAJQApAMAQABQAcAEAZgJQBdgeBNAMQBjAPA8BTQA7BPgJB5QgHBog3BkQgyBbg8AuQhIA3hkAIIgJAAQgPAAgLgEg");
	this.shape_12.setTransform(8.9,44.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#68321D").s().p("AgUAEQAAgEAJgBIALgDIACgDIAEgCQADgBAEAAQAEAAACACQAEAEgEAEQgEADgMgCQgJABALgCQABgBABAAQABgBAAAAQABgBAAAAQAAAAgBgBQgCgBgGADQgIACgDABQgGADALABQABAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgDADgCAAQgKAAABgHg");
	this.shape_13.setTransform(-1.1,-0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A55F34").s().p("AgUAMQgGgEABgEQACgEAKgBQAHgCAFgFQAGgHAJAEQALADABAOQgCADgKAAIgOABQgIAEgGAAQgEAAgCgCg");
	this.shape_14.setTransform(-0.8,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-2.4,81,82.2);


(lib.Symbol17copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.apple = new lib.apple();
	this.apple.setTransform(120.3,19.1,0.444,0.444,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

	// Layer 1
	this.instance = new lib.vetka();
	this.instance.setTransform(-13,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-60,166,120);


(lib.Symbol17copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.apple = new lib.apple();
	this.apple.setTransform(129.9,17.4,0.528,0.528,26);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

	// Layer 1
	this.instance = new lib.vetka();
	this.instance.setTransform(-13,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-60,166,126.6);


(lib.Symbol17copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.apple = new lib.apple();
	this.apple.setTransform(84.8,7.3,0.444,0.444,-27);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

	// Layer 1
	this.instance = new lib.vetka();
	this.instance.setTransform(-13,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-60,166,120);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vetka();
	this.instance.setTransform(-13,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.apple = new lib.apple();
	this.apple.setTransform(79.2,28.2,0.444,0.444,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-60,166,125.3);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vetka();
	this.instance.setTransform(-13,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.apple = new lib.apple();
	this.apple.setTransform(93.1,31.3,0.444,0.444,18);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-60,166,131.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// br7
	this.br7 = new lib.Symbol17();
	this.br7.setTransform(-485,-170.6,1,1,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.br7).wait(1));

	// br6
	this.br6 = new lib.Symbol17copy();
	this.br6.setTransform(-175,-197.6,1,1,0,-9.2,170.8);

	this.timeline.addTween(cjs.Tween.get(this.br6).wait(1));

	// br5
	this.br2 = new lib.Symbol17copy2();
	this.br2.setTransform(-148,123.4,0.95,0.95,0,0.1,-179.9);

	this.timeline.addTween(cjs.Tween.get(this.br2).wait(1));

	// br4
	this.br4 = new lib.Symbol17copy3();
	this.br4.setTransform(-198,33.4,0.999,0.999,0,-29.8,150.2);

	this.timeline.addTween(cjs.Tween.get(this.br4).wait(1));

	// br3
	this.br3 = new lib.Symbol17copy5();
	this.br3.setTransform(-517,30,0.899,0.899,14.8);

	this.timeline.addTween(cjs.Tween.get(this.br3).wait(1));

	// br2
	this.br5 = new lib.Symbol17copy4();
	this.br5.setTransform(-497,146,1,1,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.br5).wait(1));

	// br1
	this.br1 = new lib.Symbol17copy2();
	this.br1.setTransform(-487,146);

	this.timeline.addTween(cjs.Tween.get(this.br1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-542.1,-281.1,406.5,487.4);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 2000;
		var time1 = 2;
		var time2 = time1+3;
		var time3 = time2+5;
		var time4 = time3+6.1;
		
		var tl = new TimelineLite();
		tl.fromTo(this.blk, 1.0, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  //.call(winter)
		  .to(this.sfs.sf1, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf1, 10.0, {y:"+=1600", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf1, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.2, points: 10, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs.sf2, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf2, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf2, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 8, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs.sf3, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf3, 10.0, {y:"+=800", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf3, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.3, points: 12, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs.sf4, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf4, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf4, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.35, points: 7, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs.sf5, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf5, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf5, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.15, points: 9, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs.sf6, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf6, 10.0, {y:"+=800", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf6, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 11, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs.sf7, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf7, 10.0, {y:"+=1000", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf7, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.3, points: 10, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs.sf8, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf8, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf8, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 9, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs.sf9, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf9, 10.0, {y:"+=1200", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf9, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.15, points: 6, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs.sf10, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf10, 10.0, {y:"+=1400", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs.sf10, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 9, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  //
		  .to(this.sfs2.sf1, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf1, 10.0, {y:"+=1100", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf1, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.2, points: 10, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs2.sf2, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf2, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf2, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 8, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs2.sf3, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf3, 10.0, {y:"+=800", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf3, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.3, points: 12, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs2.sf4, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf4, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf4, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.35, points: 7, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs2.sf5, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf5, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf5, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.15, points: 9, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs2.sf6, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf6, 10.0, {y:"+=800", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf6, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 11, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs2.sf7, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf7, 10.0, {y:"+=1000", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf7, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.3, points: 10, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs2.sf8, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf8, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf8, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 9, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  .to(this.sfs2.sf9, 10.0, {rotation:"+=360", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf9, 10.0, {y:"+=1400", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf9, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.15, points: 6, taper: "none", randomize: false, clamp: false}), x:"200%"}, 0.0)
		  
		  .to(this.sfs2.sf10, 10.0, {rotation:"+=460", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf10, 10.0, {y:"+=1200", ease:Power0.easeNone}, 0.0)
		  .to(this.sfs2.sf10, 10.0, {ease:RoughEase.ease.config({template:Power0.easeNone, strength: 0.25, points: 9, taper: "none", randomize: false, clamp: false}), x:"300%"}, 0.0)
		  
		  /////
		  .from(this.window, 2.0, {scaleX:1.5, scaleY:1.5, ease:Expo.easeOut}, 0.0)
		  
		  //2sc
		  //sug up
		  .from(this.sug, 2.0, {y:"+=400", ease:Expo.easeOut}, time1)
		  .from(this.sug.mc, 2.0, {y:"-=400", ease:Expo.easeOut}, time1)
		  .staggerFrom([this.t1.t1, this.t1.t2, this.t1.t3, this.t1.t4], 1.0, {x:"+=600", ease:Expo.easeOut}, 0.05, time1+0.5)
		  //sug down
		  .to(this.window.kak, 0.05, {x:500, ease:Expo.easeInOut}, time2+0.0)
		  .staggerTo([this.t1.t1, this.t1.t2, this.t1.t3, this.t1.t4], 1.0, {x:"-=600", ease:Expo.easeIn}, 0.05, time2)
		  .to(this.sug, 1.4, {y:"+=400", ease:Expo.easeIn}, time2+0.0)
		  .to(this.sug.mc, 1.4, {y:"-=400", ease:Expo.easeIn}, time2+0.0)
		  .to(this.window, 2.0, {y:-360, scaleX:1.45, scaleY:1.45, ease:Expo.easeInOut}, time2+0.0)
		  //.from(this.window.roll, 1.0, {y:"-=310", ease:Expo.easeOut}, time2+1.5)
		  .from(this.window.roll, 0.5, {y:"-=350", ease:Power0.easeNone}, time2+1.2)
		  .to(this.window.roll, 0.1, {y:"-=10", ease:Power0.easeNone}, time2+1.7)
		  .staggerFrom([this.t2.t1, this.t2.t2, this.t2.t3, this.t2.t4, this.t2.t5, this.t2.t6], 1.0, {x:"+=600", ease:Expo.easeOut}, 0.05, time2+1.8)
		  
		  .from(this.brs.br1, 2.5, {x:"-=310", ease:Expo.easeOut}, time2+1.8)
		  .from(this.brs.br1, 2.9, {rotation:"+=10", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br3, 2.5, {x:"-=310", ease:Expo.easeOut}, time2+1.8)
		  .from(this.brs.br3, 2.3, {rotation:"+=30", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br5, 2.5, {x:"-=310", ease:Expo.easeOut}, time2+1.8)
		  .from(this.brs.br5, 3.2, {rotation:"+=20", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br7, 2.5, {x:"-=310", ease:Expo.easeOut}, time2+1.8)
		  .from(this.brs.br7, 2.8, {rotation:"+=30", ease:Elastic.easeOut}, time2+2.3)
		  
		  .from(this.brs.br2, 2.5, {x:"+=310", ease:Expo.easeOut}, time2+1.8)
		  .from(this.brs.br2, 2.9, {rotation:"+=10", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br4, 2.5, {x:"+=310", ease:Expo.easeOut}, time2+1.8)
		  .from(this.brs.br4, 2.9, {rotation:"+=30", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br6, 2.5, {x:"+=310", ease:Expo.easeOut}, time2+1.8)
		  .from(this.brs.br6, 3.5, {rotation:"+=20", ease:Elastic.easeOut}, time2+2.3)
		  
		  .from(this.brs.br3.apple, 2.9+0.9, {rotation:"+=90", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br4.apple, 2.9+0.9, {rotation:"+=90", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br5.apple, 3.2+0.9, {rotation:"+=90", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br6.apple, 3.5+0.9, {rotation:"+=90", ease:Elastic.easeOut}, time2+2.3)
		  .from(this.brs.br7.apple, 2.8+0.9, {rotation:"+=90", ease:Elastic.easeOut}, time2+2.3)
		  
		  
		  //end
		  .staggerTo([this.t2.t1, this.t2.t2, this.t2.t3, this.t2.t4, this.t2.t5, this.t2.t6], 0.7, {x:"-=600", ease:Expo.easeIn}, 0.05, time3)
		  .from(this.bot, 1.5, {x:"+=310", ease:Expo.easeOut}, time3+0.5)
		  .from(this.descr, 1.5, {x:"+=50", ease:Expo.easeOut}, time3+0.8)
		  
		  .to(this.brs.br1, 1.5, {x:"-=40", ease:Expo.easeInOut}, time3+0.0)
		  .to(this.brs.br3, 1.7, {x:"-=20", ease:Expo.easeInOut}, time3+0.05)
		  .to(this.brs.br5, 1.5, {x:"-=40", ease:Expo.easeInOut}, time3+0.1)
		  .to(this.brs.br2, 1.5, {x:"+=10", ease:Expo.easeInOut}, time3+0.0)
		  .to(this.brs.br4, 1.7, {x:"+=30", ease:Expo.easeInOut}, time3+0.05)
		  
		  .to(this.brs.br3.apple, 1.0, {rotation:"-=10", ease:Expo.easeIn}, time3+0.05)
		  .to(this.brs.br3.apple, 2.5, {rotation:"+=10", ease:Elastic.easeOut}, time3+1.05)
		  .to(this.brs.br5.apple, 0.7, {rotation:"-=15", ease:Expo.easeIn}, time3+0.1)
		  .to(this.brs.br5.apple, 2.9, {rotation:"+=15", ease:Elastic.easeOut}, time3+0.8)
		  .to(this.brs.br4.apple, 0.8, {rotation:"-=12", ease:Expo.easeIn}, time3+0.0)
		  .to(this.brs.br4.apple, 2.9, {rotation:"+=12", ease:Elastic.easeOut}, time3+0.9)
		  
		  .staggerFrom([this.cta.pl1, this.cta.pl2], 1.0, {scaleX:0.0, scaleY:0.0, ease:Expo.easeOut}, 0.1, time3+0.6)
		  .from(this.cta.t1, 0.8, {x:"+=100", alpha:0, ease:Expo.easeOut}, time3+1.0)
		  .from(this.cta.t2, 0.8, {x:"-=100", alpha:0, ease:Expo.easeOut}, time3+1.0)
		  
		  
		  .from(this.cur, 1.0, {x:"+=150", y:"+=280", rotation:"-=20", ease:Expo.easeOut}, time3+2.0)
		  .to(this.cur, 0.1, {scaleX:0.25, scaleY:0.25, ease:Power2.easeOut}, time3+3.0)
		  .to(this.cur, 0.1, {scaleX:0.3, scaleY:0.3, ease:Power2.easeOut}, time3+3.1)
		  .to(this.cta, 0.1, {scaleX:0.95, scaleY:0.95, ease:Power2.easeOut}, time3+3.0)
		  .to(this.cta, 0.1, {scaleX:1.0, scaleY:1.0, ease:Power2.easeOut}, time3+3.1)
		  .to(this.cur, 0.6, {x:"+=90", y:"+=430", rotation:"+=20", ease:Power2.easeOut}, time3+3.2)
		  
		  
		  .to(this.brs.br1, 0.2, {rotation:"+=10", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br1, 1.3, {rotation:"-=10", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br3, 0.2, {rotation:"+=10", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br3, 1.4, {rotation:"-=10", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br3.apple, 0.2, {rotation:"-=25", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br3.apple, 3.4, {rotation:"+=25", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br5, 0.2, {rotation:"+=10", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br5, 1.0, {rotation:"-=10", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br5.apple, 0.2, {rotation:"-=40", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br5.apple, 3.7, {rotation:"+=40", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br7, 0.2, {rotation:"+=10", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br7, 1.0, {rotation:"-=10", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br7.apple, 0.2, {rotation:"-=40", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br7.apple, 3.5, {rotation:"+=40", ease:Elastic.easeOut}, time3+3.2)
		  
		  .to(this.brs.br2, 0.2, {rotation:"+=10", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br2, 1.0, {rotation:"-=10", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br4, 0.2, {rotation:"+=20", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br4, 1.5, {rotation:"-=20", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br4.apple, 0.2, {rotation:"-=40", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br4.apple, 3.9, {rotation:"+=40", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br6, 0.2, {rotation:"+=10", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br6, 1.8, {rotation:"-=10", ease:Elastic.easeOut}, time3+3.2)
		  .to(this.brs.br6.apple, 0.2, {rotation:"-=30", ease:Power2.easeOut}, time3+3.0)
		  .to(this.brs.br6.apple, 3.2, {rotation:"+=30", ease:Elastic.easeOut}, time3+3.2)
		  
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 15)
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
		  
		
		
		
		//var arr = [
		//  [this.sfs.sf1, this.sfs.sf2, this.sfs.sf3, this.sfs.sf4, this.sfs.sf5, this.sfs.sf6]
		//];
		////this.arr.length
		//function winter() {
			//this.sn.play(1);
		//  for (var i = 1; i < 6; i++) {
		//	  console.log(this.sfs.sf1);
		//	  //var sn = arr[i];
		//	  //var tl2 = new TimelineLite();
		//	  //tl2.to(sn, 10.0, {y:"+=900", ease:Power0.easeNone}, 0.0);
		//  };
		//}
		
		//startSnowing();
		//function R(min,max) {return min+Math.random()*100};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C6C6C6").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// warn
	this.instance = new lib.warn();
	this.instance.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// descr
	this.descr = new lib.descr();
	this.descr.setTransform(110,-40);

	this.timeline.addTween(cjs.Tween.get(this.descr).wait(1));

	// cur
	this.cur = new lib.cur();
	this.cur.setTransform(1,-149.6,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.setTransform(0,-148);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// brs
	this.brs = new lib.Symbol15();
	this.brs.setTransform(341,0);

	this.timeline.addTween(cjs.Tween.get(this.brs).wait(1));

	// bot
	this.bot = new lib.bottle_1();
	this.bot.setTransform(0,32);

	this.timeline.addTween(cjs.Tween.get(this.bot).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(-81,-63.3,1.002,1,0,0,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(-87,75.7,1.002,1,0,0,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// sug
	this.sug = new lib.sugrob_1();
	this.sug.setTransform(0,169);

	this.timeline.addTween(cjs.Tween.get(this.sug).wait(1));

	// window
	this.window = new lib.window();
	this.window.setTransform(0,-200);

	this.timeline.addTween(cjs.Tween.get(this.window).wait(1));

	// snow
	this.sfs2 = new lib.sfs();
	this.sfs2.setTransform(-9.3,-448,1,1,20);

	this.sfs = new lib.sfs();
	this.sfs.setTransform(-20.2,-88,1,1,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sfs},{t:this.sfs2}]}).wait(1));

	// sky
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DCF0FE","#67AFF2"],[0,1],0,172,0,-172).s().p("Ayua4MAAAg1uMAldAAAMAAAA1ug");
	this.shape_1.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// bg_pattern
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.1,-887.3,406.5,1093.6);


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