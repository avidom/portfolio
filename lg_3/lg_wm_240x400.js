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
		{src:"images/ic1.png", id:"ic1"},
		{src:"images/ic2.png", id:"ic2"},
		{src:"images/ic3.png", id:"ic3"},
		{src:"images/ic4.png", id:"ic4"},
		{src:"images/steam.png", id:"steam"},
		{src:"images/wmach.jpg", id:"wmach"}
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



(lib.ic1 = function() {
	this.initialize(img.ic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.ic2 = function() {
	this.initialize(img.ic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.ic3 = function() {
	this.initialize(img.ic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.ic4 = function() {
	this.initialize(img.ic4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,62);


(lib.steam = function() {
	this.initialize(img.steam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,489);


(lib.wmach = function() {
	this.initialize(img.wmach);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,600);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50504F").s().p("AhZhjIATAAIADAKIASgJQALgFANAAQAcAAAOASQANATAAAhQAAARgEAOQgDAKgIAKQgIALgLAFQgNAGgRgBQgKAAgJgCIgLgEIAABDIgXAEgAg1hQIgLAIIAABWQAMAHAQAAQAWAAAKgNQAKgLAAgeQAAgLgBgJQgCgJgDgHQgEgIgJgDQgGgFgMAAQgNAAgJAFgABUAiQgLgFgHgJQgIgJgCgLQgDgOAAgRQAAglAQgRQAQgRAjgBQASABALAEQAMAGAHAJQAHAJADAOQADAOAAAQQAAAjgRARQgQARgiAAQgSABgMgGgABVhHQgKAPAAAcQAAAKACAKQACAIAEAHQAEAHAIADQAHAEAMAAQAZAAAJgNQAKgMAAgcQAAgKgCgLQgBgJgFgIQgEgGgIgFQgHgEgLAAQgZAAgKAOgAjUAkQgIgDgFgGQgFgFgCgIQgCgIAAgGQAAgNAEgJQAFgHAHgFQAIgFALgCQALgCAMAAIAPABIAPABIAAgIQAAgJgCgHQgBgHgEgFQgEgEgGgCQgHgCgKAAQgMAAgLAEQgMADgIAEIgGgQIAZgJQAOgEAQAAQAOAAAKAEQAJADAHAGQAFAHADALQACALAAAQIAAAvQAAAKADAEQAEAEAGAAIAAARIgEAAIgEAAQgKAAgGgDQgFgFgDgIQgIAIgMAFQgMAGgPgBQgNAAgJgDgAjLgTQgIAFAAANQABALAFAGQAHAGAOgBQAKAAAKgEQAKgEAIgGIAAgfIgPgBIgRgBQgSAAgHAHgAFhAkIAAh0IgDAAIgsB0IgZAAIgth0IgDAAIAAB0IgVAAIAAiHIAlAAIAsB0IADAAIAth0IAiAAIAACHgAkfAkIAAh1IhAAAIAAB1IgXAAIAAiHIBvAAIAACHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-10.4,75.1,20.8);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50504F").s().p("AAZhFIAUAAIACAJQAIgFAJgDQAMgFANAAQAdAAAOASQANATAAAhQAAAPgDANQgDANgJAKQgIAKgMAGQgMAFgSAAQgLAAgIgCIgMgFIAABEIgWADgAA9gyIgMAIIAABVQANAIAQAAQAVAAAMgNQALgNAAgcQAAgLgCgJQgCgJgEgHQgFgIgHgEQgIgEgMAAQgMAAgJAFgAFEBCQgIgDgFgGQgGgGgBgHQgDgIAAgJQAAgNAFgIQAEgGAIgEQAIgFALgCQAKgCANAAIAPABIAOABIAAgIIgBgRQgCgGgEgFQgEgEgGgCQgGgCgLAAQgLAAgMAEQgLADgIADIgFgPIAYgJQAOgEAQAAQAOAAAKAEQAJACAGAHQAGAGACALQADALAAAQIAAAwQAAAKADAEQADAEAHAAIAAARIgEAAIgFAAQgKAAgGgEQgFgEgDgIQgHAIgMAFQgMAFgQAAQgNAAgIgDgAFMAIQgHAGAAAMQAAANAGAHQAGAFAPAAQAKAAAKgEQAKgEAHgGIAAghIgPgBIgQgBQgSAAgIAGgAmUArQgUgZAAgxQAAgaAHgUQAFgTAMgMQAMgNAQgGQAQgFAVAAQATAAAQAGQARAGAJAMIgNANQgJgJgLgEQgLgGgQAAQgjAAgPAWQgQAXAAApQAAAkAPAVQAOAVAhAAQAUAAAOgEQAPgEAKgEIAFARQgLAGgRAEQgRAEgUAAQgtAAgUgagAELBCIg4g9IgNAAIAAA9IgWAAIAAiHIAWAAIAAA6IANAAIA2g6IAZAAIg8BDIA/BEgAgfBCIAAh1IgCAAIg+B1IgjAAIAAiHIAWAAIAAB0IACAAIA/h0IAiAAIAACHgAjdBCIAAh2IgsAAIAAgRIBvAAIAAARIgsAAIAAB2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-13.3,85.1,26.8);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50504F").s().p("AhNB+QgTgFgMgNQgVgXgBgtQAAgZAIgSQAIgYATgOQAVgOAbAAQATAAASAIQARAMAKAWQAHANADAUQACANgCAQIhtAAQAAASAEAKQAHATAWAAQAYAAAGgZIAqAAQgBAKgCAHQgEAMgJAKQgHAKgPAFQgPAFgUAAQgOAAgNgEgAhIgIQgIAIgBARIA9AAQgBgNgEgIQgGgRgTAAQgOAAgIANgAniBgQgMgTAAghIA0AAQAAASAFAKQAJATAdAAQAVAAAMgKQAMgJAAgQQAAgQgLgGQgIgFgagHQgtgMgUgNQgXgSABgfQgBghAXgVQAZgXAvAAQAVAAARAFQAVAIAMAQQAJAMAEAPQACAIAAAMIgyAAQgDgngkAAQgRAAgLAKQgLAJAAAQQAAAPANAIQAIAFAeAIQApAKARALQAZAPgBAhQAAAjgZAXQgcAYgwAAQg7AAgVgigABSB7QgIgDgGgGQgHgHgFgLQgDgKABgKQgBgPAHgMQAIgSAVgKQANgGAVgCQAMgCATAAIAAgLIgCgKQgDgJgHgDQgGgDgFAAQgHAAgEADQgFACgDAFQgCAEgBAFIgBAGIgvAAQAAgLACgIQAFgNALgJQATgOAgAAQAQAAANAEQATAGALANQALAPAAAaIAABGQAAAZAFAUIgsAAIgBgYQgNASgQAGQgKAEgMAAQgQAAgLgFgAB0AvQgPAHAAAQQAAAJAGAHQAGAIAMAAQAGAAAFgCIAJgHQAGgIACgLQACgIgBgRIgJAAQgSAAgLAGgAjsBsQgHgKAAgSIAAheIggAAIAAgiIAgAAIAAgjIAwgTIAAA2IApAAIAAAiIgpAAIAABMQABAPADAEQAEAIAPAAIARgBIAAAhQgVAGgSAAQggAAgKgTgAG/B8IAAhnQAAgSgFgHQgHgNgQAAQgVAAgFARQgFAKAAAaIAABYIgwAAIAAhpQAAgPgFgHQgFgOgSAAQgUAAgGAPQgFAHAAAQIAABnIgxAAIAAiNIgBggIAvAAIABAWQAHgLAJgFQAOgKAWAAQAnAAANAgQAKgSAPgIQAMgGARAAQAVAAAQALQAIAHAFAKQAGAKACAPIAAAZIAABjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-13.1,99.2,26.2);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50504F").s().p("AC0BlQgVgYAAgsQAAgcAHgRQAJgXAUgOQASgNAeAAQA0AAARAnQAKAVgBAnIiBAAQAAAdAMARQANASAaAAQASAAAKgJQAMgKACgSIAhAAQAAALgDAGQgDALgIAJQgJAKgMAGQgRAJgYAAQgpAAgVgZgADSgaQgQAOAAAZIBcAAQABgSgHgNQgLgUgbAAQgTAAgNAMgAAFBrQgNgQAAgcIAAh5IAdAAIAAB0QAAARAGAJQAIAOAVAAQANAAAJgFQAKgFAHgLQAEgHACgLIABgQIAAhlIAfAAIAACSIABAiIggAAIAAgfQgHAOgIAIQgOALgXAAQgdAAgQgRgAh4B4IAAiyIAdAAIAAAiQAEgSAMgJQAJgHANgCQAJgCALABIAAAhIgGgBQgBgBgHAAQgYAAgKAQQgJANAAAYIAABhgAjtB4IAAjYIhTAAIAAgdIDIAAIAAAdIhTAAIAADYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-12.6,64.3,25.3);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50504F").s().p("ABSCeIgSgOIhBgzQgDgDAAgEQgBgEACgDQADgDADAAQADAAAEACIA+A8IAPAPQAMAMgCABIAAABQgDAAgMgJgAguCZQgTgEgLgQQgNgPgBgTQABgMAEgLQgJgGgHgJQgIgMAAgPIABgMQAFgTAMgJQAKgIAOgCQAAgWALgPQAOgRAYgEQAYgEASANQAPAKAIARQAUgHAUADQAaAFAPAZQAHAMADANQACAPgDANQgDALgHAIQgHAIgIAFQgEACgEgCQgDgBgCgEQgCgDABgEQABgEAEgCQALgFAEgOQACgJgBgLQgCgLgGgHQgOgXgbABQgIABgJADIgIADIgEABIgEgBQgEgCgCgEQgCgLgIgJQgOgPgVADQgZADgGAVQgEALABAMQABAFgDADQgDABgFAAQgIgBgGAEQgNAFgDARQgDAOAGAKQAFAGAFADIAJgIQAEgCAEAAQADABADADQACADAAAEQgBAEgEADQgEADgFAHQgGALABALQAAANAHAKQAJAJANAEQALADALgEQAHgDADgEQACgDAEgBQADgBACADQAEACAAAEQABAEgDAEQgFAJgNAFQgIADgJAAQgIAAgIgDgABsCIQgKgLgEgGIgzhDQgCgDAAgEQABgFADgCQADgCAEAAQAFABACAEIAtBJIALASQAJAPgCACIAAAAQgDAAgLgNgAhxgQQgJgFgHgJQgJgMAAgOIABgLQAFgTAMgLQAKgIAPgCQAAgWALgPQANgRAZgEQAZgEASANQAMAKAJARQARgHARABQAXACAOARQAJALADANQADANgFAMIAAACQgCACgCACQgCABgDAAQgEAAgDgDQgDgCAAgEIABgCQADgIgCgJQgBgIgGgHQgOgQgWAEQgIABgIADIgHADQgEACgDgCQgFgCgBgFQgDgKgFgIQgPgQgXADQgYAEgHAUQgEALACAMQAAAFgDADQgDADgFAAQgHgBgHADQgNAGgDARQgCANAGAJQAEAFAEACQADACACAEQABAEgCAEQgCADgDABIgDABIgEgBg");
	this.shape.setTransform(-13.9,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-33.4,27.8,33.5);


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
	this.shape.graphics.f("#474747").s().p("AAVAbIAAgrIAAAAIgQArIgKAAIgPgrIgBAAIAAArIgLAAIAAg1IASAAIAOArIAAAAIAPgrIASAAIAAA1g");
	this.shape.setTransform(103.2,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AgMAaQgFgBgDgFQgDgDgBgGIgBgLQAAgOAGgGQAHgIAMABQAIAAAFABQAFACADAFQADADABAGQABAFAAAFQAAAPgHAGQgHAIgMgBQgHABgFgDgAgKgOQgDAGAAAIIABAIIACAGIAEAEQACACAEgBQAHAAADgEQADgGAAgJIAAgHIgCgGQgBgCgDgCQgDgCgEABQgGAAgEAEg");
	this.shape_1.setTransform(96.5,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AAUAjIAAgQIgnAAIAAAQIgKAAIAAgZIAGAAQAEgJABgIIACgbIAmAAIAAAsIAIAAIAAAZgAgHgFQgBAIgDAHIAVAAIAAgiIgPAAIgCATg");
	this.shape_2.setTransform(90.8,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AgMAaQgFgBgDgFQgDgDgBgGIgBgLQAAgOAGgGQAHgIAMABQAIAAAFABQAFACADAFQADADABAGQABAFAAAFQAAAPgHAGQgHAIgMgBQgHABgFgDgAgKgOQgDAGAAAIIABAIIACAGIAEAEQACACAEgBQAHAAADgEQADgGAAgJIAAgHIgCgGQgBgCgDgCQgDgCgEABQgGAAgEAEg");
	this.shape_3.setTransform(85.1,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AgWAbIAAg1IAZAAQAIAAAFADQAFAEAAAGQAAAGgCACQgDADgEACIAEAAIAEACIACAEIABAFQAAAFgBACIgEAGIgGACIgHABgAgKASIAMAAQAEAAACgBQACgCABgFQgBgFgCgBQgDgCgFAAIgKAAgAgKgEIAMAAQADAAACgCQABAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgFgCgBIgHgBIgKAAg");
	this.shape_4.setTransform(79.7,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AANAbIAAgrIgBAAIgSArIgSAAIAAg1IAMAAIAAArIABAAIASgrIASAAIAAA1g");
	this.shape_5.setTransform(73.9,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474747").s().p("AgXgYIgBgPIALAAIABAEIAGgDQAEgCAEAAQAMAAAFAHQAGAIAAAMQAAAHgBAGQgCADgDAEQgDAEgFACQgGADgFAAIgHgBIgEgCIAAAbIgMABgAgIgdIgDACIAAAfIADACIAGABQAFAAAFgFQAEgDAAgLIAAgIIgDgGIgEgEQgDgBgCAAQgEAAgEACg");
	this.shape_6.setTransform(68.3,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474747").s().p("AALAbIAAgsIgVAAIAAAsIgMAAIAAg1IAsAAIAAA1g");
	this.shape_7.setTransform(62.6,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474747").s().p("AAVAbIAAgrIAAAAIgQArIgKAAIgPgrIgBAAIAAArIgLAAIAAg1IASAAIAOArIAAAAIAPgrIASAAIAAA1g");
	this.shape_8.setTransform(53.8,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#474747").s().p("AAUAbIAAg1IANAAIAAA1gAggAbIAAg1IANAAIAAATIAOAAIAFABIAHAEQADABABACIABAIQAAAJgFAFQgGAEgHAAgAgTASIAMAAQAEAAADgCQAAgDAAgEQAAgEAAgDQgEgCgDAAIgMAAg");
	this.shape_9.setTransform(46.3,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474747").s().p("AAVAbIAAgrIAAAAIgQArIgKAAIgPgrIgBAAIAAArIgLAAIAAg1IASAAIAOArIAAAAIAPgrIASAAIAAA1g");
	this.shape_10.setTransform(38.7,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#474747").s().p("AANAbIAAgTIgJAAIgOATIgOAAIARgUQgFgBgEgFQgEgBAAgIQAAgJAFgFQAGgEAJAAIAZAAIAAA1gAgFgPQgDADAAAEQAAAEADADQACABADAAIANAAIAAgRIgNAAQgDAAgCACg");
	this.shape_11.setTransform(31.9,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#474747").s().p("AgXgYIgBgPIALAAIABAEIAGgDQAFgCADAAQALAAAGAHQAGAIAAAMQAAAHgBAGQgCADgDAEQgDAEgGACQgEADgGAAIgHgBIgDgCIAAAbIgNABgAgIgdIgCACIAAAfIACACIAHABQAEAAAFgFQAEgDAAgLIAAgIIgDgGIgEgEQgDgBgCAAQgFAAgDACg");
	this.shape_12.setTransform(26.8,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#474747").s().p("AALAbIAAgsIgVAAIAAAsIgLAAIAAg1IArAAIAAA1g");
	this.shape_13.setTransform(21.1,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#474747").s().p("AgIAaQgFgCgDgDQgEgDgBgGIgBgMQAAgMAHgIQAIgHAMAAQAFAAAFABQAFACADAEIgHAGQgFgEgGAAQgHAAgDAEQgFAGAAAIQAAAJADAGQAFAEAGAAIAIgBIAHgCIADAIQgDABgFACQgGACgFgBQgGAAgFgCg");
	this.shape_14.setTransform(13.8,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#474747").s().p("AgXgYIgBgPIALAAIABAEIAGgDQAEgCAEAAQAMAAAFAHQAGAIAAAMQAAAHgCAGQgBADgDAEQgDAEgFACQgGADgFAAIgHgBIgEgCIAAAbIgMABgAgIgdIgDACIAAAfIADACIAGABQAGAAAEgFQAEgDAAgLIAAgIIgDgGIgFgEQgCgBgCAAQgFAAgDACg");
	this.shape_15.setTransform(189.4,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#474747").s().p("AgMAaQgFgCgDgDQgDgEgBgFIgBgMQAAgOAGgHQAHgGAMgBQAIAAAFADQAFACADADQADAEABAFQABAGAAAFQAAAOgHAHQgHAIgMAAQgHgBgFgCgAgKgNQgDAFAAAIIABAIIACAGIAEAEQACABAEABQAHAAADgGQADgFAAgJIAAgGIgCgHQgBgDgDgBQgDgCgEAAQgGABgEAFg");
	this.shape_16.setTransform(183.7,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#474747").s().p("AgFAbIAAgrIgRAAIAAgKIAtAAIAAAKIgRAAIAAArg");
	this.shape_17.setTransform(178.7,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#474747").s().p("AgMAaQgFgCgDgDQgDgEgBgFIgBgMQAAgOAGgHQAHgGAMgBQAIAAAFADQAFACADADQADAEABAFQABAGAAAFQAAAOgHAHQgHAIgMAAQgHgBgFgCgAgKgNQgDAFAAAIIABAIIACAGIAEAEQACABAEABQAHAAADgGQADgFAAgJIAAgGIgCgHQgBgDgDgBQgDgCgEAAQgGABgEAFg");
	this.shape_18.setTransform(173.7,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#474747").s().p("AAVAbIAAgrIAAAAIgQArIgKAAIgPgrIgBAAIAAArIgLAAIAAg1IASAAIAOArIAAAAIAPgrIASAAIAAA1g");
	this.shape_19.setTransform(167.1,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#474747").s().p("AANAoIAAgrIgBAAIgSArIgSAAIAAg1IAMAAIAAArIABAAIASgrIASAAIAAA1gAgMgZQgFgFAAgKIAKAAQAAAFACAEQACACADAAQAFAAACgCQACgEABgFIAJAAQAAAKgEAFQgFAFgKAAQgIAAgEgFg");
	this.shape_20.setTransform(158,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#474747").s().p("AAUAbIAAg1IANAAIAAA1gAggAbIAAg1IANAAIAAAUIAOAAIAFABIAHACQADACABACIABAIQAAAJgFAEQgGAFgHAAgAgTASIALAAQAFAAADgCQAAgDAAgEQAAgEAAgCQgEgCgEAAIgLAAg");
	this.shape_21.setTransform(151.3,1.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#474747").s().p("AAKAbIAAgXIgUAAIAAAXIgMAAIAAg1IAMAAIAAAWIAUAAIAAgWIANAAIAAA1g");
	this.shape_22.setTransform(144.8,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#474747").s().p("AgXgYIgBgPIAKAAIABAEIAHgDQAFgCADAAQALAAAGAHQAGAIAAAMQAAAHgCAGQgBADgDAEQgEAEgFACQgEADgGAAIgHgBIgEgCIAAAbIgMABgAgHgdIgEACIAAAfIAEACIAFABQAGAAAEgFQAEgDAAgLIgBgIIgCgGIgFgEQgCgBgCAAQgEAAgDACg");
	this.shape_23.setTransform(139.3,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#474747").s().p("AgMAaQgFgCgDgDQgDgEgBgFIgBgMQAAgOAGgHQAHgGAMgBQAIAAAFADQAFACADADQADAEABAFQABAGAAAFQAAAOgHAHQgHAIgMAAQgHgBgFgCgAgKgNQgDAFAAAIIABAIIACAGIAEAEQACABAEABQAHAAADgGQADgFAAgJIAAgGIgCgHQgBgDgDgBQgDgCgEAAQgGABgEAFg");
	this.shape_24.setTransform(133.6,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#474747").s().p("AgFAbIAAgrIgRAAIAAgKIAtAAIAAAKIgRAAIAAArg");
	this.shape_25.setTransform(128.6,1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#474747").s().p("AgXgYIgBgPIAKAAIABAEIAHgDQAEgCAEAAQALAAAGAHQAGAIAAAMQAAAHgBAGQgCADgDAEQgEAEgFACQgFADgFAAIgHgBIgDgCIAAAbIgNABgAgIgdIgCACIAAAfIACACIAHABQAEAAAFgFQAEgDAAgLIgBgIIgCgGIgEgEQgDgBgCAAQgFAAgDACg");
	this.shape_26.setTransform(123.8,2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#474747").s().p("AgJAbQgFgDgEgDQgDgDgBgGIgBgMQAAgcAYAAQAHAAAFADQAEACADADQACAEABAFIABAKIAAAEIgjAAQAAAHADAEQAEAFAHAAQAGAAAEgBIAIgEIACAIIgEACIgFADIgGABIgHABQgFAAgFgCgAgEgSQgDACgBACIgCAHIgBADIAWAAQAAgIgCgDQgDgEgFAAQgCAAgDABg");
	this.shape_27.setTransform(118.2,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#474747").s().p("AgWAbIAAg1IAaAAQAHAAAFAEQAFACAAAHQAAAFgDAEQgCACgEABIAEABIADACIADAEIABAGQAAADgBAEIgFAEIgFADIgHABgAgKASIALAAQAEAAADgCQACgBAAgFQAAgEgCgCQgDgCgFABIgKAAgAgKgEIALAAQAFAAABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgEgCgBIgHgBIgKAAg");
	this.shape_28.setTransform(113.1,1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#474747").s().p("AAKAbIAAgXIgUAAIAAAXIgMAAIAAg1IAMAAIAAAWIAUAAIAAgWIANAAIAAA1g");
	this.shape_29.setTransform(107.5,1.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#474747").s().p("AANAbIAAgrIgBAAIgSArIgSAAIAAg1IAMAAIAAArIABAAIASgrIASAAIAAA1g");
	this.shape_30.setTransform(101.7,1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#474747").s().p("AgPAbQgDgBgCgDQgCgCgBgDIgBgHQAAgFACgDQABgDAEgBIAHgDIAKAAIAIAAIAAgCQAAgHgDgCQgCgEgFAAIgJACIgIADIgDgIIALgDQAFgDAGAAQAFAAAEACQAEABADADQACADABAEIABALIAAAQQAAAEABABQABAAAAABQAAAAABAAQABAAAAAAQABABAAAAIAAAIIgEABQgFAAgCgCQgDgCgBgDQgDADgFADQgDACgFAAQgFgBgEgBgAgJAEQgCACAAAFQAAAEACADQABACAFAAIAFgCQADgBADgDIAAgLIgFAAIgDAAQgHAAgCABg");
	this.shape_31.setTransform(94,1.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#474747").s().p("AAKAbIAAgXIgUAAIAAAXIgMAAIAAg1IAMAAIAAAWIAUAAIAAgWIANAAIAAA1g");
	this.shape_32.setTransform(88.5,1.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#474747").s().p("AANAbIAAgrIgBAAIgSArIgSAAIAAg1IAMAAIAAArIABAAIASgrIASAAIAAA1g");
	this.shape_33.setTransform(80.5,1.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#474747").s().p("AANAbIAAgrIgBAAIgSArIgSAAIAAg1IAMAAIAAArIABAAIASgrIASAAIAAA1g");
	this.shape_34.setTransform(74.6,1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#474747").s().p("AgFAbIAAgrIgRAAIAAgKIAtAAIAAAKIgRAAIAAArg");
	this.shape_35.setTransform(69.4,1.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#474747").s().p("AAKAbIAAgXIgUAAIAAAXIgMAAIAAg1IAMAAIAAAWIAUAAIAAgWIANAAIAAA1g");
	this.shape_36.setTransform(64.4,1.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#474747").s().p("AgPAbQgDgBgCgDQgCgCgBgDIgBgHQAAgFACgDQABgDAEgBIAHgDIAKAAIAIAAIAAgCQAAgHgDgCQgCgEgFAAIgJACIgIADIgDgIIALgDQAFgDAGAAQAFAAAEACQAEABADADQACADABAEIABALIAAAQQAAAEABABQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAAAIIgEABQgFAAgCgCQgDgCgBgDQgDADgFADQgDACgFAAQgFgBgEgBgAgJAEQgCACAAAFQAAAEACADQABACAFAAIAFgCQADgBADgDIAAgLIgFAAIgDAAQgHAAgCABg");
	this.shape_37.setTransform(59.1,1.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#474747").s().p("AgXgYIgBgPIALAAIAAAEIAHgDQAFgCADAAQAMAAAFAHQAGAIAAAMQAAAHgCAGQgBADgDAEQgEAEgEACQgFADgGAAIgHgBIgEgCIAAAbIgMABgAgHgdIgEACIAAAfIAEACIAFABQAGAAAEgFQAEgDAAgLIgBgIIgCgGIgFgEQgCgBgCAAQgEAAgDACg");
	this.shape_38.setTransform(53.7,2.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#474747").s().p("AgPAbQgDgBgCgDQgCgCgBgDIgBgHQAAgFACgDQABgDAEgBIAHgDIAKAAIAIAAIAAgCQAAgHgDgCQgCgEgFAAIgJACIgIADIgDgIIALgDQAFgDAGAAQAFAAAEACQAEABADADQACADABAEIABALIAAAQQAAAEABABQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAAAIIgEABQgFAAgCgCQgDgCgBgDQgDADgFADQgDACgFAAQgFgBgEgBgAgJAEQgCACAAAFQAAAEACADQABACAFAAIAFgCQADgBADgDIAAgLIgFAAIgDAAQgHAAgCABg");
	this.shape_39.setTransform(48.3,1.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#474747").s().p("AgRAbIAAg1IAjAAIAAAKIgXAAIAAArg");
	this.shape_40.setTransform(44.1,1.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#474747").s().p("AgFAbIAAgrIgRAAIAAgKIAtAAIAAAKIgRAAIAAArg");
	this.shape_41.setTransform(37.3,1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#474747").s().p("AgJAbQgFgDgEgDQgDgDgBgGIgBgMQAAgcAYAAQAHAAAFADQAEACADADQACAEABAFIABAKIAAAEIgjAAQAAAHADAEQAEAFAHAAQAGAAAEgBIAIgEIACAIIgEACIgFADIgGABIgHABQgFAAgFgCgAgEgSQgDACgBACIgCAHIgBADIAWAAQAAgIgCgDQgDgEgFAAQgCAAgDABg");
	this.shape_42.setTransform(32.4,1.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#474747").s().p("AgZAaIABgJIABAAIACAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABgBIADgHIABgMIABgWIAmAAIAAA1IgMAAIAAgsIgPAAIgCASQAAAIgCAGQgCAGgDADQgDADgGAAIgGgBg");
	this.shape_43.setTransform(26.6,1.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#474747").s().p("AgMAlQgGgDgDgGQgEgFgBgIQgCgHAAgIQAAgHACgIQABgHAEgGQADgFAGgEQAGgCAGAAQAIgBAFAEQAGADADAFQAEAGABAHQACAIAAAHQAAAIgCAHQgBAIgEAFQgDAGgGADQgGADgHABQgHgBgFgDgAgGgbQgEACgCAEIgDAKIgBALIABANIADAJQACAEAEACQADADADAAQAEAAADgDQAEgCACgEQACgEABgGIAAgMIAAgKQgBgHgCgDQgCgFgDgCQgDgDgFABQgDgBgDADg");
	this.shape_44.setTransform(18.8,0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#474747").s().p("AAEAnIAAhBIgPAIIgEgIIAWgMIAJAAIAABNg");
	this.shape_45.setTransform(11.9,0.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#474747").s().p("AAAAHIgHAPIgLgHIAMgNIgQgCIADgMIAQAIIgCgRIALAAIgCAQIAPgHIAEAMIgQACIAMANIgLAHg");
	this.shape_46.setTransform(4.7,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.8,194.1,29.3);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("AgqgqIgCgZIAXAAIABAGIAKgGQAIgCAHAAQAVAAAJAMQAKAMgBAWQAAALgCAJQgDAIgFAGQgFAIgIADQgKAEgLAAQgFAAgGgCIgEgBIAAAsIgbAEgAgMgwIgDACIAAAzIADABIAJACQADAAAEgCQAEgBADgEQACgCACgFQACgHAAgJQABgdgUAAQgFAAgFADg");
	this.shape.setTransform(72.4,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_1.setTransform(62.1,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AgMAuIAAhIIgcAAIAAgTIBQAAIAAATIgbAAIAABIg");
	this.shape_2.setTransform(53.2,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_3.setTransform(44.2,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AAhAuIAAhHIgCAAIgUBHIgWAAIgUhHIgCAAIAABHIgYAAIAAhbIAmAAIATBGIABAAIAVhGIAkAAIAABbg");
	this.shape_4.setTransform(32.4,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AgcAuQgHgCgDgFQgEgEgBgFIgBgLQAAgJADgGQADgEAGgDQAFgEAIgBQAIgBAJAAIAFAAIAGAAIAAgEQAAgIgEgEQgEgEgIAAQgIAAgHACQgHACgGAEIgFgRQAHgEALgCQALgDALAAQAJAAAHACQAIACAEAEQAEAFACAHQACAIAAALIAAAbQAAAFACADQACACAFAAIAAARIgKABQgIAAgFgCQgFgDgDgEQgFAEgIADQgGADgHAAQgKAAgGgCgAgNAJQgDADAAAGQAAAGACADQACAEAGAAIAHgCQAFgBADgEIAAgRIgGgBIgFAAQgIAAgDADg");
	this.shape_5.setTransform(16.9,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474747").s().p("AAOAuIAAglIgbAAIAAAlIgbAAIAAhbIAbAAIAAAkIAbAAIAAgkIAbAAIAABbg");
	this.shape_6.setTransform(7.2,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,79.3,27.5);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("AATAuIAAhHIgBAAIgYBHIglAAIAAhbIAZAAIAABGIACAAIAXhGIAlAAIAABbg");
	this.shape.setTransform(129.2,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AATAuIAAhHIgBAAIgYBHIglAAIAAhbIAZAAIAABGIACAAIAXhGIAlAAIAABbg");
	this.shape_1.setTransform(118.7,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AgMAuIAAhIIgcAAIAAgTIBQAAIAAATIgcAAIAABIg");
	this.shape_2.setTransform(109.6,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AAOAuIAAglIgbAAIAAAlIgbAAIAAhbIAbAAIAAAkIAbAAIAAgkIAbAAIAABbg");
	this.shape_3.setTransform(100.7,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AgcAuQgHgCgDgFQgEgEgBgFIgBgLQAAgJADgGQADgEAGgDQAFgEAIgBQAIgBAJAAIAFAAIAGAAIAAgEQAAgIgEgEQgEgEgIAAQgIAAgHACQgHACgGAEIgFgRQAHgEALgCQALgDALAAQAJAAAHACQAIACAEAEQAEAFACAHQACAIAAALIAAAbQAAAFACADQACACAFAAIAAARIgKABQgIAAgFgCQgFgDgDgEQgFAEgIADQgGADgHAAQgKAAgGgCgAgNAJQgDADAAAGQAAAGACADQACAEAGAAIAHgCQAFgBADgEIAAgRIgGgBIgFAAQgIAAgDADg");
	this.shape_4.setTransform(91.3,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AgqgqIgCgZIAXAAIACAGIAJgGQAIgCAIAAQATAAAKAMQAJAMAAAWQABALgDAJQgCAIgGAGQgFAIgJADQgIAEgMAAQgFAAgGgCIgFgBIAAAsIgaAEgAgMgwIgEACIAAAzIAEABQAEACAFAAQADAAAEgCQAEgBACgEQAEgCACgFQABgHAAgJQAAgdgSAAQgHAAgEADg");
	this.shape_5.setTransform(81.6,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474747").s().p("AgcAuQgHgCgDgFQgEgEgBgFIgBgLQAAgJADgGQADgEAGgDQAFgEAIgBQAIgBAJAAIAFAAIAGAAIAAgEQAAgIgEgEQgEgEgIAAQgIAAgHACQgHACgGAEIgFgRQAHgEALgCQALgDALAAQAJAAAHACQAIACAEAEQAEAFACAHQACAIAAALIAAAbQAAAFACADQACACAFAAIAAARIgKABQgIAAgFgCQgFgDgDgEQgFAEgIADQgGADgHAAQgKAAgGgCgAgNAJQgDADAAAGQAAAGACADQACAEAGAAIAHgCQAFgBADgEIAAgRIgGgBIgFAAQgIAAgDADg");
	this.shape_6.setTransform(71.9,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474747").s().p("AgfAuIAAhbIA/AAIAAATIglAAIAABIg");
	this.shape_7.setTransform(64.3,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474747").s().p("AgLAuIAAhIIgcAAIAAgTIBQAAIAAATIgcAAIAABIg");
	this.shape_8.setTransform(52,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#474747").s().p("AgfAkQgLgMAAgYQAAgvAsAAQAMAAAJADQAIAEAEAGQAFAGABAIQACAJAAAKIAAAHIg6AAQAAAKADAGQAFAIANAAQALAAAHgDIANgFIAEARIgHADIgJADIgLADIgLAAQgYAAgKgMgAgGgcQgEACgCAEQgCADAAAGIgBAEIAfAAQAAgKgDgFQgEgGgHAAQgFAAgDACg");
	this.shape_9.setTransform(43.2,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474747").s().p("AgpAuIgFgBIABgUIADAAIADAAIAEAAIAEgEIACgHIACgMIABgJIABgOIAAgOIAAgKIBIAAIAABbIgbAAIAAhIIgVAAIgBAOIgCASQgCAWgHAJQgHAJgNAAIgIAAg");
	this.shape_10.setTransform(32.8,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#474747").s().p("AgWBAQgKgFgGgJQgHgKgDgMQgDgNAAgPQAAgOADgNQADgMAHgJQAGgJAKgGQAKgEAMAAQANAAAKAEQAKAGAGAJQAGAJADAMQAEANAAAOQAAAPgEANQgDAMgGAKQgGAJgKAFQgKAEgNAAQgMAAgKgEgAgKgsQgFAEgDAGQgEAHgBAIQgCAKAAAJQAAAWAHANQAGANAMAAQANAAAGgNQAGgNAAgWQAAgUgGgOQgGgNgNAAQgFAAgFADg");
	this.shape_11.setTransform(18.6,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#474747").s().p("AAEBCIAAhqIgaANIgIgRIArgVIASAAIAACDg");
	this.shape_12.setTransform(6.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,136.4,27.5);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B6040").s().p("AAhAuIAAhHIgCAAIgUBHIgWAAIgUhHIgCAAIAABHIgYAAIAAhbIAmAAIATBGIABAAIAVhGIAkAAIAABbg");
	this.shape.setTransform(166.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B6040").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_1.setTransform(154.6,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B6040").s().p("AAfA7IAAgaIg9AAIAAAaIgWAAIAAgtIAJAAQAEgHABgHIAEgQIACgTIABgXIBHAAIAABIIAOAAIAAAtgAgMgJQgCANgDAKIAfAAIAAg0IgWAAQgBAPgDAOg");
	this.shape_2.setTransform(144.3,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B6040").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_3.setTransform(133.9,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B6040").s().p("AgoAuIAAhbIAvAAQAOAAAIAGQAIAFAAANQAAAHgEAFQgEAEgHAEQAIABAFAEQAGAGAAAJQAAAHgDAFQgCAFgEADQgEADgGACQgFACgHAAgAgPAbIASAAQAMAAAAgLQAAgEgDgDQgDgDgGAAIgSAAgAgPgJIASAAQAFAAACgCQACgDAAgFQAAgDgCgDQgCgCgFAAIgSAAg");
	this.shape_4.setTransform(124.5,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0B6040").s().p("AATAuIAAhHIgCAAIgXBHIglAAIAAhbIAZAAIAABGIABAAIAYhGIAlAAIAABbg");
	this.shape_5.setTransform(114.3,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B6040").s().p("AgqgqIgBgZIAWAAIACAGIAJgGQAJgCAHAAQAUAAAJAMQAKAMAAAWQgBALgCAJQgCAIgGAGQgFAIgJADQgIAEgMAAQgFAAgGgCIgFgBIAAAsIgaAEgAgNgwIgDACIAAAzIAEABQAFACAEAAQADAAADgCQAFgBACgEQAEgCACgFQACgHAAgJQgBgdgSAAQgGAAgGADg");
	this.shape_6.setTransform(104.3,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B6040").s().p("AAOAuIAAhIIgbAAIAABIIgaAAIAAhbIBPAAIAABbg");
	this.shape_7.setTransform(94.3,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B6040").s().p("AAhAuIAAhHIgCAAIgUBHIgWAAIgUhHIgCAAIAABHIgZAAIAAhbIAnAAIATBGIABAAIAUhGIAlAAIAABbg");
	this.shape_8.setTransform(78.5,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0B6040").s().p("AAgAuIAAhbIAbAAIAABbgAg6AuIAAhbIAaAAIAAAgIAWAAQAHAAAEACQAGABAFAEQAEADADAEQACAGAAAIQAAAIgCAGQgDAGgFAEQgEADgHACQgFACgIAAgAggAbIAPAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgPAAg");
	this.shape_9.setTransform(65,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0B6040").s().p("AAhAuIAAhHIgBAAIgVBHIgWAAIgUhHIgCAAIAABHIgYAAIAAhbIAmAAIATBGIABAAIAVhGIAlAAIAABbg");
	this.shape_10.setTransform(51.6,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0B6040").s().p("AASAuIAAgfIgMAAIgVAfIgcAAIAagiQgJgDgGgGQgFgFAAgMQAAgQAKgHQAKgIAQAAIAtAAIAABbgAgLgOQAAAFAEAEQADADAFABIARAAIAAgaIgRAAQgMAAAAANg");
	this.shape_11.setTransform(39.6,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0B6040").s().p("AgqgqIgBgZIAWAAIABAGIAKgGQAJgCAGAAQAUAAAKAMQAKAMAAAWQAAALgDAJQgDAIgFAGQgFAIgJADQgJAEgLAAQgFAAgGgCIgEgBIAAAsIgbAEgAgNgwIgCACIAAAzIADABQAEACAFAAQADAAADgCQAFgBADgEQACgCACgFQADgHAAgJQAAgdgUAAQgGAAgFADg");
	this.shape_12.setTransform(30.3,4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0B6040").s().p("AAOAuIAAhIIgbAAIAABIIgaAAIAAhbIBPAAIAABbg");
	this.shape_13.setTransform(20.3,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B6040").s().p("AgeAkQgKgMAAgXQAAgXANgNQAMgMAXAAQALAAAJADQAJAEAEAGIgPAOQgDgFgFgCQgFgCgFAAQgKAAgGAIQgGAHAAAPQAAAOAFAIQAFAHALAAQAIAAAGgCIANgFIAFARQgFADgJADQgJACgMAAQgXAAgLgMg");
	this.shape_14.setTransform(6.9,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,175.1,27.5);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B6040").s().p("AgqgqIgBgZIAWAAIABAGIAKgGQAJgCAGAAQAUAAAKAMQAKAMAAAWQAAALgDAJQgDAIgFAGQgFAIgJADQgIAEgMAAQgFAAgGgCIgEgBIAAAsIgbAEgAgNgwIgCACIAAAzIADABQAEACAFAAQADAAADgCQAFgBADgEQACgCACgFQADgHAAgJQAAgdgUAAQgGAAgFADg");
	this.shape.setTransform(168,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B6040").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_1.setTransform(157.7,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B6040").s().p("AgMAuIAAhIIgcAAIAAgTIBQAAIAAATIgcAAIAABIg");
	this.shape_2.setTransform(148.8,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B6040").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_3.setTransform(139.8,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B6040").s().p("AAhAuIAAhHIgCAAIgUBHIgWAAIgUhHIgCAAIAABHIgZAAIAAhbIAnAAIATBGIABAAIAUhGIAlAAIAABbg");
	this.shape_4.setTransform(128,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0B6040").s().p("AATBFIAAhGIgBAAIgYBGIglAAIAAhbIAZAAIAABHIACAAIAXhHIAlAAIAABbgAgXgrQgJgIAAgRIAUAAQABAHADAFQADAEAGAAQAIAAACgEQADgFABgHIAUAAQAAARgIAIQgHAJgTAAQgRAAgHgJg");
	this.shape_5.setTransform(111.8,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B6040").s().p("AAgAuIAAhbIAbAAIAABbgAg6AuIAAhbIAaAAIAAAgIAWAAQAHAAAEACQAGABAFAEQAEADADAEQACAGAAAIQAAAIgCAGQgDAGgFAEQgEADgHACQgFACgIAAgAggAbIAPAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgPAAg");
	this.shape_6.setTransform(99.8,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B6040").s().p("AAOAuIAAglIgbAAIAAAlIgbAAIAAhbIAbAAIAAAkIAbAAIAAgkIAbAAIAABbg");
	this.shape_7.setTransform(88.1,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B6040").s().p("AgqgqIgCgZIAXAAIACAGIAJgGQAJgCAHAAQAUAAAJAMQAJAMAAAWQAAALgCAJQgCAIgGAGQgFAIgJADQgIAEgMAAQgFAAgGgCIgFgBIAAAsIgaAEgAgNgwIgDACIAAAzIAEABQAEACAFAAQADAAADgCQAFgBACgEQADgCADgFQACgHgBgJQAAgdgSAAQgHAAgFADg");
	this.shape_8.setTransform(78.3,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0B6040").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_9.setTransform(68,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0B6040").s().p("AgLAuIAAhIIgcAAIAAgTIBQAAIAAATIgcAAIAABIg");
	this.shape_10.setTransform(59.1,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0B6040").s().p("AgqgqIgBgZIAWAAIACAGIAJgGQAJgCAHAAQAUAAAJAMQAKAMAAAWQgBALgCAJQgCAIgGAGQgFAIgJADQgIAEgMAAQgFAAgGgCIgFgBIAAAsIgaAEgAgNgwIgDACIAAAzIAEABQAFACAEAAQADAAADgCQAFgBACgEQAEgCACgFQACgHAAgJQgBgdgSAAQgGAAgGADg");
	this.shape_11.setTransform(50.3,4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0B6040").s().p("AgfAkQgLgMAAgYQAAgvAsAAQANAAAIADQAIAEAEAGQAFAGABAIQACAJAAAKIAAAHIg6AAQAAAKAEAGQAEAIANAAQALAAAHgDIANgFIAEARIgHADIgJADIgLADIgLAAQgZAAgJgMgAgHgcQgDACgCAEQgCADAAAGIgBAEIAfAAQAAgKgDgFQgDgGgIAAQgEAAgFACg");
	this.shape_12.setTransform(40.4,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0B6040").s().p("AgoAuIAAhbIAvAAQAOAAAIAGQAIAFAAANQAAAHgEAFQgEAEgHAEQAIABAFAEQAGAGAAAJQAAAHgDAFQgCAFgEADQgEADgGACQgFACgHAAgAgPAbIASAAQAMAAAAgLQAAgEgDgDQgDgDgGAAIgSAAgAgPgJIASAAQAFAAACgCQACgDAAgFQAAgDgCgDQgCgCgFAAIgSAAg");
	this.shape_13.setTransform(31.1,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B6040").s().p("AAOAuIAAglIgbAAIAAAlIgbAAIAAhbIAbAAIAAAkIAbAAIAAgkIAbAAIAABbg");
	this.shape_14.setTransform(21.2,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0B6040").s().p("AAfBCIAAhvIgCAAIgqBvIgsAAIAAiDIAbAAIAABvIACAAIAqhvIAsAAIAACDg");
	this.shape_15.setTransform(9.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,174.9,27.5);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("AAbAwIAAgSIg1AAIAAASIgLAAIAAgcIAHAAIAFgMIADgOIACgSIAAgXIAxAAIAABDIAJAAIAAAcgAgJgUIgCAPIgCANIgFAMIAiAAIAAg5IgYAAIgBARg");
	this.shape.setTransform(64.9,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AAaAwIAAgSIg0AAIAAASIgLAAIAAgcIAIAAIAEgMIADgOIACgSIABgXIAvAAIAABDIAKAAIAAAcgAgJgUIgBAPIgDANIgEAMIAhAAIAAg5IgYAAIgBARg");
	this.shape_1.setTransform(57.2,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AAKAbIAAgXIgUAAIAAAXIgMAAIAAg1IAMAAIAAAWIAUAAIAAgWIANAAIAAA1g");
	this.shape_2.setTransform(48.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AgiAbIAAg1IAMAAIAAAsIARAAIAAgsIALAAIAAAsIARAAIAAgsIAMAAIAAA1g");
	this.shape_3.setTransform(41.8,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AgWAoIgDAAIABgJIAFAAIAGgBIAEgDIADgGIADgHIgWg2IANAAIAMAoIABAAIANgoIAMAAIgVA6IgEAJIgDAHQgDAEgEABQgDACgGgBIgEAAg");
	this.shape_4.setTransform(35.3,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AgMAaQgFgCgDgDQgDgEgBgFIgBgMQAAgOAGgHQAHgGAMgBQAIAAAFADQAFACADADQADAEABAFQABAGAAAFQAAAOgHAHQgHAIgMAAQgHgBgFgCgAgKgNQgDAFAAAIIABAIIACAGIAEAEQACABAEABQAHAAADgGQADgFAAgJIAAgGIgCgHQgBgDgDgBQgDgCgEAAQgGABgEAFg");
	this.shape_5.setTransform(30.2,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474747").s().p("AAcAnIAAhDIgBAAIgTBDIgPAAIgThDIgBAAIAABDIgNAAIAAhNIAXAAIARBDIABAAIAShDIAVAAIAABNg");
	this.shape_6.setTransform(22.7,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474747").s().p("AgTAgQgHgJAAgTQAAgJABgIQACgJAFgGQAEgFAHgEQAGgCAJAAIAJABIAHABIgDAKIgGgCIgHAAQgIAAgCACQgEADgDAFQgDAFgBAFIgBAEIAHgDQAFgBAEgBQAMAAAHAHQAGADAAANQAAAGgBAFQgCAGgEADQgDADgGADQgFACgGAAQgMgBgHgIgAgIAAIgGAEIABAKIACAJQABADAEACQADADADAAQAHAAAEgFQAEgDAAgJQAAgHgEgEQgFgDgGAAQgEAAgEAAg");
	this.shape_7.setTransform(12.6,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474747").s().p("AAAAHIgHAPIgLgHIAMgNIgQgCIADgMIAQAIIgCgRIALAAIgCAQIAPgHIAEAMIgQACIAMANIgLAHg");
	this.shape_8.setTransform(4.7,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.8,70.7,17.7);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("AAgAuIAAhbIAbAAIAABbgAg6AuIAAhbIAaAAIAAAgIAWAAQAHAAAEACQAGABAFAEQAEADADAEQACAGAAAIQAAAIgCAGQgDAGgFAEQgEADgHACQgFACgIAAgAggAbIAPAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgPAAg");
	this.shape.setTransform(54.8,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AgMAuIAAhIIgcAAIAAgTIBQAAIAAATIgcAAIAABIg");
	this.shape_1.setTransform(44.3,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_2.setTransform(35.3,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AgVBEQgIgDgGgIQgFgHgDgMQgCgMAAgRQAAgOABgNQACgNAFgJQAFgKAKgGQAJgFANgDIANgCIAKgCIAHgBIAFgBIAFAVQgHADgJABIgWAEIgLAEQgFACgEAEQgDAEgCAHQgCAGgBAKIAHgIQAEgEAFgCQAEgCAFgBIAHgBQALAAAIAEQAHADAFAGQAFAHACAGQACAJAAALQAAAYgMAMQgLALgYAAQgLAAgJgDgAgOACQgFAIAAAPIABALIADAJQACAEAEACQADADAFAAQALAAAFgIQAFgIAAgPIgBgLIgDgJIgFgFQgEgCgFAAQgLAAgFAGg");
	this.shape_3.setTransform(25.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AgcAuQgHgCgDgFQgEgEgBgFIgBgLQAAgJADgGQADgEAGgDQAFgEAIgBQAIgBAJAAIAFAAIAGAAIAAgEQAAgIgEgEQgEgEgIAAQgIAAgHACQgHACgGAEIgFgRQAHgEALgCQALgDALAAQAJAAAHACQAIACAEAEQAEAFACAHQACAIAAALIAAAbQAAAFACADQACACAFAAIAAARIgKABQgIAAgFgCQgFgDgDgEQgFAEgIADQgGADgHAAQgKAAgGgCgAgNAJQgDADAAAGQAAAGACADQACAEAGAAIAHgCQAFgBADgEIAAgRIgGgBIgFAAQgIAAgDADg");
	this.shape_4.setTransform(15.5,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AgYAuQgKgDgFgDIAHgRIANAGQAGACAKAAIAIgBQADgBACgCIADgEIABgEQAAgFgEgDQgFgDgIAAIgMAAIAAgOIAMAAQADAAAEgCIAEgCIAEgEIAAgEQAAgFgEgDQgEgDgGAAQgGAAgFACQgHACgDAFIgOgOQAGgHAKgDQAJgDAMAAIANABIAMAEQAGADADAFQADAFAAAGQAAAIgFAFQgEAGgHACQAIACAFAEQAHAGgBAKQABAOgMAHQgMAHgSAAQgPAAgIgCg");
	this.shape_5.setTransform(6.3,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,63.5,27.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("AATBFIAAhGIgBAAIgYBGIglAAIAAhbIAZAAIAABHIACAAIAXhHIAlAAIAABbgAgYgrQgHgIgBgRIAUAAQABAHADAFQADAEAGAAQAIAAACgEQADgFABgHIAUAAQAAARgIAIQgHAJgTAAQgRAAgIgJg");
	this.shape.setTransform(96.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AATAuIAAhHIgCAAIgXBHIglAAIAAhbIAZAAIAABGIABAAIAYhGIAlAAIAABbg");
	this.shape_1.setTransform(86.2,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AAOAuIAAglIgbAAIAAAlIgbAAIAAhbIAbAAIAAAkIAbAAIAAgkIAbAAIAABbg");
	this.shape_2.setTransform(76,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AggAkQgKgMAAgYQAAgvAsAAQANAAAIADQAIAEAEAGQAFAGACAIQABAJAAAKIAAAHIg6AAQAAAKAEAGQAFAIANAAQALAAAGgDIANgFIAFARIgHADIgKADIgLADIgMAAQgXAAgLgMgAgHgcQgDACgCAEQgCADgBAGIAAAEIAfAAQAAgKgDgFQgEgGgIAAQgDAAgFACg");
	this.shape_3.setTransform(66.3,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AAsAuIgZgmIgHAAIAAAmIgXAAIAAgmIgHAAIgaAmIgcAAIAhguIgfgtIAcAAIAYAlIAHAAIAAglIAXAAIAAAlIAIAAIAYglIAbAAIgfAtIAhAug");
	this.shape_4.setTransform(54.9,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AATAuIAAhHIgBAAIgYBHIglAAIAAhbIAZAAIAABGIACAAIAXhGIAlAAIAABbg");
	this.shape_5.setTransform(42.8,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474747").s().p("AgoAuIAAhbIAvAAQAOAAAIAGQAIAFAAANQAAAHgEAFQgEAEgHAEQAIABAFAEQAGAGAAAJQAAAHgDAFQgCAFgEADQgEADgGACQgFACgHAAgAgPAbIASAAQAMAAAAgLQAAgEgDgDQgDgDgGAAIgSAAgAgPgJIASAAQAFAAACgCQACgDAAgFQAAgDgCgDQgCgCgFAAIgSAAg");
	this.shape_6.setTransform(33.1,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474747").s().p("AAfA7IAAgaIg9AAIAAAaIgWAAIAAgtIAJAAQADgHACgHIAEgQIACgTIABgXIBHAAIAABIIAOAAIAAAtgAgMgJQgBANgEAKIAfAAIAAg0IgWAAQgBAPgDAOg");
	this.shape_7.setTransform(22.7,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474747").s().p("AgUBBQgIgDgHgHQgGgIgEgMQgDgMAAgRQAAgQADgOQAEgPAIgJQAHgKAMgFQALgFAPAAQAJAAAIACQAIABAGADIgGATQgJgEgOAAQgMAAgGAEQgHAFgDAHQgFAIgBAKIAAABQAFgCAFgCQAIgCAGAAQAWAAAMAKQALAJAAAVQAAAKgDAIQgDAJgGAGQgHAGgJAEQgJAEgMAAQgKAAgKgEgAgMADQgFABgEADIABAQQABAIADAFQACAGAEADQAFAEAFAAQAWAAAAgZQAAgKgGgHQgGgGgKAAQgFAAgHACg");
	this.shape_8.setTransform(7.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,103.9,27.5);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("Ag9AuIAAhbIAaAAIAABHIAXAAIAAhHIAZAAIAABHIAXAAIAAhHIAaAAIAABbg");
	this.shape.setTransform(79.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_1.setTransform(67.3,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AgxBCIAAiDIAzAAQAKAAAJABQAIACAFAEQAGAEADAGQAEAHAAAJQAAAKgGAHQgFAIgJAEQAKADAGAHQAIAIgBAMQAAAKgDAIQgEAHgGAFQgGAFgIACQgJACgJAAgAgXAuIAYAAIAIgBIAGgDQADgCADgEQABgEAAgFQAAgGgBgEQgCgEgEgCQgDgDgDgBIgIAAIgYAAgAgXgLIAYAAQAIAAAEgFQAGgEAAgIQAAgFgCgDQgBgEgDgCIgGgCIgGgBIgYAAg");
	this.shape_2.setTransform(56.7,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AgWAtQgJgDgFgHQgFgGgCgJQgCgJAAgLQAAgXALgMQAMgMAXAAQANAAAJADQAJAEAFAGQAFAHACAJQACAJAAAJQAAAYgMAMQgLAMgYAAQgNAAgIgDgAgOgVQgFAIAAAOIABAMQABAFACAEQACAEADACQAEADAFAAQALAAAFgIQAEgJAAgOIAAgLIgDgJQgCgFgEgCQgDgCgGAAQgKAAgFAIg");
	this.shape_3.setTransform(45.2,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AgVBEQgIgDgGgIQgFgHgDgMQgCgMAAgRQAAgOABgNQACgNAFgJQAFgKAKgGQAJgFANgDIANgCIAKgCIAHgBIAFgBIAFAVQgHADgJABIgWAEIgLAEQgFACgEAEQgDAEgCAHQgCAGgBAKIAHgIQAEgEAFgCQAEgCAFgBIAHgBQALAAAIAEQAHADAFAGQAFAHACAGQACAJAAALQAAAYgMAMQgLALgYAAQgLAAgJgDgAgOACQgFAIAAAPIABALIADAJQACAEAEACQADADAFAAQALAAAFgIQAFgIAAgPIgBgLIgDgJIgFgFQgEgCgFAAQgLAAgFAGg");
	this.shape_4.setTransform(35.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AgqgqIgBgZIAWAAIABAGIAKgGQAJgCAGAAQAVAAAJAMQAKAMAAAWQgBALgCAJQgCAIgGAGQgFAIgJADQgJAEgLAAQgFAAgGgCIgEgBIAAAsIgbAEgAgNgwIgCACIAAAzIADABQAEACAFAAQADAAADgCQAFgBADgEQACgCADgFQACgHAAgJQAAgdgUAAQgFAAgGADg");
	this.shape_5.setTransform(25,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474747").s().p("AgnBFIgHgBIAEgSIAHABQAHAAAEgCIAFgFIAFgJIAFgMIglhbIAdAAIARA/IACAAIATg/IAaAAIgkBiIgHAQQgEAHgDAGQgFAFgHACQgHADgKAAIgHAAg");
	this.shape_6.setTransform(15.3,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474747").s().p("AgMBCIAAhuIgoAAIAAgVIBoAAIAAAVIgnAAIAABug");
	this.shape_7.setTransform(7.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,88.5,27.5);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("AgcAuQgHgCgDgFQgEgEgBgFIgBgLQAAgJADgGQADgEAGgDQAFgEAIgBQAIgBAJAAIAFAAIAGAAIAAgEQAAgIgEgEQgEgEgIAAQgIAAgHACQgHACgGAEIgFgRQAHgEALgCQALgDALAAQAJAAAHACQAIACAEAEQAEAFACAHQACAIAAALIAAAbQAAAFACADQACACAFAAIAAARIgKABQgIAAgFgCQgFgDgDgEQgFAEgIADQgGADgHAAQgKAAgGgCgAgNAJQgDADAAAGQAAAGACADQACAEAGAAIAHgCQAFgBADgEIAAgRIgGgBIgFAAQgIAAgDADg");
	this.shape.setTransform(129.1,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474747").s().p("AAQAuIgcglIgGAAIAAAlIgaAAIAAhbIAaAAIAAAkIAGAAIAbgkIAdAAIgkAtIAlAug");
	this.shape_1.setTransform(120.3,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474747").s().p("AgqgqIgBgZIAWAAIABAGIAKgGQAJgCAGAAQAVAAAJAMQAKAMAAAWQgBALgCAJQgCAIgGAGQgFAIgJADQgJAEgLAAQgFAAgGgCIgEgBIAAAsIgbAEgAgNgwIgCACIAAAzIADABQAEACAFAAQADAAADgCQAFgBADgEQACgCADgFQACgHAAgJQAAgdgUAAQgFAAgGADg");
	this.shape_2.setTransform(110.1,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474747").s().p("AATAuIAAhHIgCAAIgXBHIglAAIAAhbIAZAAIAABGIABAAIAYhGIAlAAIAABbg");
	this.shape_3.setTransform(99.7,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AgLAuIAAhIIgcAAIAAgTIBQAAIAAATIgcAAIAABIg");
	this.shape_4.setTransform(90.6,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474747").s().p("AgeAkQgKgMAAgXQAAgXANgNQAMgMAXAAQALAAAJADQAJAEAEAGIgPAOQgDgFgFgCQgFgCgFAAQgKAAgGAIQgGAHAAAPQAAAOAFAIQAFAHALAAQAIAAAGgCIANgFIAFARQgFADgJADQgJACgMAAQgXAAgLgMg");
	this.shape_5.setTransform(82.3,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474747").s().p("AASAuIAAgfIgMAAIgVAfIgcAAIAagiQgJgDgGgGQgFgFAAgMQAAgQAKgHQAKgIAQAAIAtAAIAABbgAgLgOQAAAFAEAEQADADAFABIARAAIAAgaIgRAAQgMAAAAANg");
	this.shape_6.setTransform(68.1,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474747").s().p("AgcAuQgHgCgDgFQgEgEgBgFIgBgLQAAgJADgGQADgEAGgDQAFgEAIgBQAIgBAJAAIAFAAIAGAAIAAgEQAAgIgEgEQgEgEgIAAQgIAAgHACQgHACgGAEIgFgRQAHgEALgCQALgDALAAQAJAAAHACQAIACAEAEQAEAFACAHQACAIAAALIAAAbQAAAFACADQACACAFAAIAAARIgKABQgIAAgFgCQgFgDgDgEQgFAEgIADQgGADgHAAQgKAAgGgCgAgNAJQgDADAAAGQAAAGACADQACAEAGAAIAHgCQAFgBADgEIAAgRIgGgBIgFAAQgIAAgDADg");
	this.shape_7.setTransform(59.2,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474747").s().p("AgqgqIgCgZIAXAAIACAGIAJgGQAJgCAHAAQAUAAAJAMQAKAMAAAWQgBALgCAJQgCAIgGAGQgFAIgJADQgIAEgMAAQgFAAgGgCIgFgBIAAAsIgaAEgAgNgwIgDACIAAAzIAEABQAEACAFAAQADAAADgCQAFgBACgEQADgCADgFQABgHAAgJQAAgdgSAAQgGAAgGADg");
	this.shape_8.setTransform(49.5,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#474747").s().p("AgLAuIAAhIIgcAAIAAgTIBQAAIAAATIgcAAIAABIg");
	this.shape_9.setTransform(40.4,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474747").s().p("AgeAkQgKgMAAgXQAAgXANgNQAMgMAXAAQALAAAJADQAJAEAEAGIgPAOQgDgFgFgCQgFgCgFAAQgKAAgGAIQgGAHAAAPQAAAOAFAIQAFAHALAAQAIAAAGgCIANgFIAFARQgFADgJADQgJACgMAAQgXAAgLgMg");
	this.shape_10.setTransform(32.1,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#474747").s().p("AAgAuIAAhbIAbAAIAABbgAg6AuIAAhbIAaAAIAAAgIAWAAQAHAAAEACQAGABAFAEQAEADADAEQACAGAAAIQAAAIgCAGQgDAGgFAEQgEADgHACQgFACgIAAgAggAbIAPAAQAOAAAAgMQAAgFgEgEQgDgDgHAAIgPAAg");
	this.shape_11.setTransform(20.7,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#474747").s().p("AgyBCIAAiDIBaAAIAAAVIhAAAIAAAdIAeAAQAUAAAMALQANAJAAAUQAAAVgNAKQgMAKgXAAgAgYAuIAZAAIAHgBQAFgBADgDQACgCACgEQACgEABgGQgBgGgCgEQgCgEgCgDQgDgCgFgBIgHgBIgZAAg");
	this.shape_12.setTransform(8.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.7,135.5,27.5);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic1();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic2();
	this.instance.setTransform(-31,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-31,62,62);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic3();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic4();
	this.instance.setTransform(-25,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-31,50,62);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.steam();
	this.instance.setTransform(150,-364,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.steam();
	this.instance_1.setTransform(-150,-244);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-364,300,609);


(lib.Symbol8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAtIAAhZIA5AAIAAAOIgmAAIAAAXIAlAAIAAAMIglAAIAAAaIAoAAIAAAOg");
	this.shape.setTransform(45.6,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0AtIAAhZIASAAIAABLIAbAAIAAhLIAQAAIAABLIAaAAIAAhLIASAAIAABZg");
	this.shape_1.setTransform(34.9,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAtIAAhZIASAAIAAAhIAQAAQAQAAAIAHQAJAFAAAPQAAAPgJAHQgIAHgQAAgAgPAfIAPAAIAGAAIAEgDQADgCABgCQABgDAAgFQAAgFgBgCQgBgDgDgCIgEgCIgGgBIgPAAg");
	this.shape_2.setTransform(24.5,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAtIgDgBIABgPIACAAIABAAQAGAAADgGQACgHABgNIACgKIAAgOIABgNIAAgKIA6AAIAABZIgSAAIAAhLIgXAAIgBAHIgBAKIAAAMIgBAKQgBAKgCAGQgBAHgEAFQgDAEgDACQgFACgGAAIgFAAg");
	this.shape_3.setTransform(14.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTArQgHgDgFgHQgFgFgCgKQgCgIAAgKQAAgWALgMQAKgMAUAAQALAAAHADQAIAEAFAGQAFAGACAJQACAJAAAJQAAAXgLALQgKANgVAAQgLAAgHgEgAgJgdQgEACgDAEQgDAEgBAHIgBAMIABANQAAAGADAEQADAEAEADQAEACAFAAQAFAAAFgCQAFgCACgEQADgFACgGQABgHAAgGIgBgMQgBgGgDgEQgCgEgEgDQgEgDgGAAQgFAAgFADg");
	this.shape_4.setTransform(6.1,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAtIAAhZIA9AAIAAAOIgqAAIAAAUIATAAQAOAAAIAIQAJAFAAANQAAAQgJAGQgIAHgQAAgAgPAfIAQAAIAFAAIAEgDIAEgEQACgDAAgFQAAgEgCgCIgEgFIgEgBIgFgBIgQAAg");
	this.shape_5.setTransform(-2.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAtIAAhZIATAAIAAAhIAQAAQAPAAAIAHQAJAFAAAPQAAAPgJAHQgIAHgPAAgAgOAfIAPAAIAEAAIAFgDQACgCABgCQACgDAAgFQAAgFgCgCQgBgDgCgCIgFgCIgEgBIgPAAg");
	this.shape_6.setTransform(-14.9,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAtIAAhLIgaAAIAAgOIBGAAIAAAOIgbAAIAABLg");
	this.shape_7.setTransform(-21.9,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYAtIgIgXIggAAIgHAXIgUAAIAhhZIAXAAIAfBZgAgLAHIAXAAIgMglIAAAAg");
	this.shape_8.setTransform(-29.4,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAtIAAgnIgjAAIAAAnIgTAAIAAhZIATAAIAAAmIAjAAIAAgmIATAAIAABZg");
	this.shape_9.setTransform(-38.9,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAsQgJgBgHgEIAFgOIANAFQAHACAIAAIAFgBQADgBADgCIAEgEQABgDAAgEQAAgHgFgDQgGgDgHAAIgLAAIAAgMIAHAAIAHAAIAGgCQADgBACgCQADgDAAgEQAAgGgFgDQgEgCgFAAQgHAAgGACQgFADgEAEIgKgLQAFgGAJgEQAJgDAJAAQAQAAAIAHQAJAFAAAMQAAAGgFAGQgEAFgGADQAHACAFAEQAFAFAAAJQAAAIgDAFQgDAGgFADQgGAEgHABQgHACgGAAQgHgBgJgCg");
	this.shape_10.setTransform(-47.8,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAtIgHgCIACgOIAGABIAEABQAGAAADgDQADgCABgEIgihCIAVAAIATAuIACAAIASguIATAAIgeBDIgFAKQgCAEgDADQgCADgEABIgKABIgHAAg");
	this.shape_11.setTransform(-55.8,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXgwIAvAwIgvAxg");
	this.shape_12.setTransform(57.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A50034").s().p("AqSCQQgoABgBgoIAAjRQABgoAoABIUlAAQAogBABAoIAADRQgBAogogBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

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


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ic = new lib.Symbol20();
	this.ic.setTransform(-29,0);

	this.timeline.addTween(cjs.Tween.get(this.ic).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol33();
	this.t2.setTransform(51.5,16.6,1.3,1.3,0,0,0,39.6,0);

	this.t1 = new lib.Symbol32();
	this.t1.setTransform(88.7,-16.5,1.3,1.3,0,0,0,68.2,0);

	this.t3 = new lib.Symbol34();
	this.t3.setTransform(146,64.3,1,1,0,0,0,146,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t3},{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-34.4,248.1,119.2);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ic = new lib.Symbol21();
	this.ic.setTransform(-42,0);

	this.timeline.addTween(cjs.Tween.get(this.ic).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol31();
	this.t2.setTransform(91,13.3,1.04,1.04,0,0,0,87.5,0);

	this.t1 = new lib.Symbol30();
	this.t1.setTransform(90.9,-13.2,1.04,1.04,0,0,0,87.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-32,256.1,64);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ic = new lib.Symbol22();
	this.ic.setTransform(-42,0);

	this.timeline.addTween(cjs.Tween.get(this.ic).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol27();
	this.t2.setTransform(41.4,16.6,1.3,1.3,0,0,0,31.8,0);

	this.t1 = new lib.Symbol26();
	this.t1.setTransform(67.5,-16.5,1.3,1.3,0,0,0,51.9,0);

	this.t3 = new lib.Symbol29();
	this.t3.setTransform(35.3,76.3,1,1,0,0,0,35.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t3},{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-34.4,208,119.6);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ic = new lib.Symbol23();
	this.ic.setTransform(-42,0);

	this.timeline.addTween(cjs.Tween.get(this.ic).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol25();
	this.t2.setTransform(57.6,16.6,1.3,1.3,0,0,0,44.3,0);

	this.t1 = new lib.Symbol24();
	this.t1.setTransform(88.2,-16.5,1.3,1.3,0,0,0,67.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-34.4,250.2,68.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.t4 = new lib.Symbol40();
	this.t4.setTransform(63.3,26);

	this.t3 = new lib.Symbol39();
	this.t3.setTransform(-25.8,23);

	this.t2 = new lib.Symbol38();
	this.t2.setTransform(51.3,-13.2);

	this.t1 = new lib.Symbol37();
	this.t1.setTransform(-37.4,-13.3);

	this.par = new lib.Symbol36();
	this.par.setTransform(-73.8,-1,1,1,0,0,0,-0.8,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.par},{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-36.3,201.7,72.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkpEqQh8h7AAivQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAACvh8B7Qh7B8ivAAQiuAAh7h8g");
	mask.setTransform(1,5);

	// st2
	this.st2 = new lib.Symbol13();
	this.st2.setTransform(7.1,117.8,0.88,0.88,180);
	this.st2.alpha = 0.801;
	this.st2.compositeOperation = "lighter";

	this.st2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.st2).wait(1));

	// st1
	this.st1 = new lib.Symbol13();
	this.st1.setTransform(7.1,24.8,0.7,0.7);
	this.st1.alpha = 0.5;
	this.st1.compositeOperation = "lighter";

	this.st1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.st1).wait(1));

	// Layer 17
	this.instance = new lib.wmach();
	this.instance.setTransform(-210,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-300,420,600);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gr
	this.gr = new lib.Symbol35();
	this.gr.setTransform(17.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.gr).wait(1));

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


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.wm = new lib.Symbol1();

	this.timeline.addTween(cjs.Tween.get(this.wm).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-300,1342,738.1);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 200;
		
		var tl = new TimelineLite();
		tl.fromTo(this.blk, 1.0, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.wm, 14.0, {x:"-=125", ease:Sine.easeOut}, 0.0)
		  //.from(this.wm.wm, 2.5, {x:"-=100", ease:Expo.easeOut}, 0.0)
		  .from(this.logo_lg, 1.0, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.0)
		  
		  
		  
		  .from(this.t1.ic, 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeOut}, 1.0)
		  .staggerFrom([this.t1.t1, this.t1.t2], 0.9, {y:"+=250", ease:Expo.easeOut}, 0.1, 1.00)
		  .staggerTo([this.t1.ic, this.t1.t1, this.t1.t2], 0.6, {x:"-=250", alpha:0, ease:Expo.easeIn}, 0.05, 3.00)
		  
		  .from(this.t2.ic, 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeOut}, 3.5)
		  .staggerFrom([this.t2.t1, this.t2.t2, this.t2.t3], 0.9, {y:"+=250", ease:Expo.easeOut}, 0.1, 3.50)
		  .staggerTo([this.t2.ic, this.t2.t1, this.t2.t2, this.t2.t3], 0.6, {x:"-=250", alpha:0, ease:Expo.easeIn}, 0.05, 5.50)
		  
		  .from(this.t3.ic, 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeOut}, 6.0)
		  .staggerFrom([this.t3.t1, this.t3.t2], 0.9, {y:"+=250", ease:Expo.easeOut}, 0.1, 6.00)
		  .staggerTo([this.t3.ic, this.t3.t1, this.t3.t2], 0.6, {x:"-=250", alpha:0, ease:Expo.easeIn}, 0.05, 8.00)
		  
		  .from(this.t4.ic, 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeOut}, 8.5)
		  .staggerFrom([this.t4.t1, this.t4.t2, this.t4.t3], 0.9, {y:"+=250", ease:Expo.easeOut}, 0.1, 8.50)
		  .staggerTo([this.t4.ic, this.t4.t1, this.t4.t2, this.t4.t3], 0.6, {x:"-=250", alpha:0, ease:Expo.easeIn}, 0.05, 10.50)
		  
		  
		  .from(this.logo_ts.par, 1.0, {scaleX:0.0, scaleY:0.0, ease:Expo.easeOut}, 11.0)
		  .staggerFrom([this.logo_ts.t1, this.logo_ts.t2, this.logo_ts.t3, this.logo_ts.t4], 0.9, {x:"+=50", alpha:0, ease:Expo.easeOut}, 0.1, 11.0)
		  .from(this.btn, 0.9, {y:"+=250", ease:Expo.easeOut}, 11.00)
		  
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 14)
		  ;
		
		var tlSteam = new TimelineLite();
		tlSteam.from(this.wm.wm.st1, 2.0, {y:"-=150", scaleX:0.0, scaleY:0.0, ease:Power0.easeNone}, 0.50)
		       .to(this.wm.wm.st1, 0.5, {alpha:0, ease:Power0.easeNone}, 2.00)
			   .from(this.wm.wm.st2, 4.0, {y:"+=70", scaleX:0.5, scaleY:0.5, ease:Expo.easeOut}, 2.00)
			   .to(this.wm.wm.st2, 2.0, {alpha:0, ease:Power0.easeNone, onComplete:steamUp}, 4.00)
			   ;
		  
		
		function replay() {
		  if (count == repeat){
		      tl.pause();
			  tlSteam.pause();
		  } else {
		  if (count != repeat) {
			  count++;
			  //tlSteam.pause();
			  tl.play();
		  }
		  }
		}
		
		function steamUp() {
			tlSteam.play(0);
		}
		
		function restart() {
			tl.play(0);
			tlSteam.play(0);
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
	this.logo_lg.setTransform(83.7,-209.9,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.logo_lg).wait(1));

	// logo_ts
	this.logo_ts = new lib.Symbol3();
	this.logo_ts.setTransform(-16.9,137.7);

	this.timeline.addTween(cjs.Tween.get(this.logo_ts).wait(1));

	// btn
	this.btn = new lib.Symbol8();
	this.btn.setTransform(0,209,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(-53,163.5);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(-53,163.5);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(-53,163.5);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(-53,163.5);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// wm
	this.wm = new lib.Symbol19();
	this.wm.setTransform(59,-42.3);

	this.timeline.addTween(cjs.Tween.get(this.wm).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(0,0,0.309,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-342.3,1342,738.1);


// stage content:
(lib.lg_wm_240x400 = function(mode,startPosition,loop) {
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