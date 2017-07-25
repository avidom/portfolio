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
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/icons.png", id:"icons"},
		{src:"images/kv.png", id:"kv"}
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



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,231);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,231);


(lib.icons = function() {
	this.initialize(img.icons);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,26);


(lib.kv = function() {
	this.initialize(img.kv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,275);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AAQAqIAAgdIgLAAIgSAdIgaAAIAXgfQgIgDgFgGQgFgEAAgKQAAgPAJgHQAJgHAPAAIApAAIAABTgAgKgMQAAAEADADQAEAEAEAAIAPAAIAAgXIgPAAQgLAAAAAMg");
	this.shape.setTransform(76.8,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AARAqIAAhAIgCAAIgUBAIgiAAIAAhTIAXAAIAABAIACAAIAUhAIAiAAIAABTg");
	this.shape_1.setTransform(67.6,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404041").s().p("AANAqIAAgiIgZAAIAAAiIgYAAIAAhTIAYAAIAAAiIAZAAIAAgiIAYAAIAABTg");
	this.shape_2.setTransform(57.9,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#404041").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_3.setTransform(48.5,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404041").s().p("AAoAqIgXgjIgGAAIAAAjIgVAAIAAgjIgHAAIgXAjIgZAAIAegqIgdgpIAZAAIAXAiIAGAAIAAgiIAVAAIAAAiIAGAAIAXgiIAZAAIgdApIAeAqg");
	this.shape_4.setTransform(37.7,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404041").s().p("AgaApQgFgCgEgDQgDgEgBgFIgBgKQAAgIADgGQADgDAFgDQAFgDAHgBIAPgBIAEAAIAGAAIAAgEQAAgHgDgDQgEgEgHAAQgHAAgHACIgMAEIgEgOQAGgEAKgCQAKgDAKAAQAIAAAHACQAGACAEAEQAEAEACAHQACAHAAAKIAAAYQAAAFACACQACACAEAAIAAAQIgJABQgIAAgEgDQgFgCgDgEQgEAEgHADQgGADgGAAQgJAAgGgDgAgMAIQgDADAAAFQAAAGACACQACADAGAAIAGgBQAEgBADgDIAAgQIgGgBIgEAAQgHAAgDADg");
	this.shape_5.setTransform(27.3,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404041").s().p("AglgmIgDgXIAVAAIACAFIAJgEQAGgDAHAAQASAAAJALQAJAMAAATQgBAKgCAJQgCAGgFAHQgEAGgJADQgHAEgLAAQgEAAgFgCIgFgBIAAAoIgXADgAgLgrIgDACIAAAtIADACIAJABIAFgBQAEgCADgDQADgBABgGQABgFABgIQAAgbgRAAQgFAAgFADg");
	this.shape_6.setTransform(18,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#404041").s().p("AAdAqIAAhTIAYAAIAABTgAg0AqIAAhTIAXAAIAAAdIAUAAQAGAAAEABQAFACAEAEQAFADACADQADAFgBAHQABAIgDAFQgDAGgEADQgEADgGACQgEACgHAAgAgdAZIAOAAQAMAAAAgMQAAgEgDgDQgEgEgFAAIgOAAg");
	this.shape_7.setTransform(6.8,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#404041").s().p("AglAqIAAhTIArAAQANAAAIAFQAHAFAAALQAAAHgEAFQgEAEgGADQAHABAFAEQAFAFABAJQgBAGgCAEQgCAFgEADQgEADgFABQgFACgFAAgAgNAZIAPAAQALAAAAgKQAAgEgCgDQgDgDgGAAIgPAAgAgNgIIAPAAQAFAAACgDQACgCAAgEQAAgDgBgCQgCgCgFAAIgQAAg");
	this.shape_8.setTransform(-3.9,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#404041").s().p("AgUApQgIgDgFgGQgEgGgCgIQgCgIAAgKQAAgVALgLQAKgLAVAAQAMAAAIADQAIADAEAGQAFAGACAIQACAJAAAIQAAAWgLALQgKALgVAAQgMAAgIgDgAgMgTQgFAHAAANIABAKQABAFACAEQABADADADQAEACAFAAQAJAAAFgIQAEgHAAgNIgBgKIgCgJIgFgGQgEgCgFAAQgJAAgEAIg");
	this.shape_9.setTransform(-13.5,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#404041").s().p("AAeAqIAAhAIgBAAIgTBAIgTAAIgThAIgCAAIAABAIgWAAIAAhTIAjAAIARBAIABAAIAThAIAhAAIAABTg");
	this.shape_10.setTransform(-24.7,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#404041").s().p("AgaApQgFgCgEgDQgDgEgBgFIgBgKQAAgIADgGQADgDAFgDQAFgDAHgBIAPgBIAEAAIAGAAIAAgEQAAgHgDgDQgEgEgHAAQgHAAgHACIgMAEIgEgOQAGgEAKgCQAKgDAKAAQAIAAAHACQAGACAEAEQAEAEACAHQACAHAAAKIAAAYQAAAFACACQACACAEAAIAAAQIgJABQgIAAgEgDQgFgCgDgEQgEAEgHADQgGADgGAAQgJAAgGgDgAgMAIQgDADAAAFQAAAGACACQACADAGAAIAGgBQAEgBADgDIAAgQIgGgBIgEAAQgHAAgDADg");
	this.shape_11.setTransform(-35.3,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#404041").s().p("AgbAhQgJgLAAgVQAAgVALgMQAMgLAUAAQAKAAAIADQAIADAEAGIgNAMQgDgEgFgCQgEgBgFAAQgJAAgFAGQgFAHAAAOQAAAMAEAHQAFAHAJAAQAIAAAFgCIAMgEIAEAPQgEADgJACQgIADgKAAQgVAAgKgLg");
	this.shape_12.setTransform(-43.8,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#404041").s().p("AAQAqIAAgdIgLAAIgSAdIgaAAIAYgfQgIgDgGgGQgFgEAAgKQAAgPAKgHQAIgHAPAAIApAAIAABTgAgKgMQAAAEAEADQADAEAEAAIAPAAIAAgXIgPAAQgLAAAAAMg");
	this.shape_13.setTransform(-57.5,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#404041").s().p("AglAqIgEgBIABgTIACABIADAAIAEgBIADgDIACgGIACgLIAAgIIABgNIABgNIAAgJIBAAAIAABSIgYAAIAAhBIgTAAIgBAOIgBAPQgCAUgHAJQgGAIgMAAIgHAAg");
	this.shape_14.setTransform(-67.1,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#404041").s().p("AAcA1IAAgXIg4AAIAAAXIgUAAIAAgoIAJAAQADgGACgHIADgOIACgSIABgUIBBAAIAABBIALAAIAAAogAgKgIQgCAMgEAJIAdAAIAAgwIgUAAQgBAOgCANg");
	this.shape_15.setTransform(-76.8,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-12.6,167.8,25.3);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape.setTransform(63.6,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AARAqIAAhAIgBAAIgWBAIghAAIAAhTIAXAAIAABAIABAAIAWhAIAhAAIAABTg");
	this.shape_1.setTransform(54,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404041").s().p("AANAqIAAgiIgZAAIAAAiIgYAAIAAhTIAYAAIAAAiIAZAAIAAgiIAYAAIAABTg");
	this.shape_2.setTransform(44.3,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#404041").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_3.setTransform(35,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404041").s().p("Ag3AqIAAhTIAXAAIAABBIAWAAIAAhBIAVAAIAABBIAWAAIAAhBIAXAAIAABTg");
	this.shape_4.setTransform(23.8,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404041").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_5.setTransform(12.5,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404041").s().p("AgmgmIgCgXIAVAAIACAFIAJgEQAGgDAHAAQASAAAJALQAIAMAAATQAAAKgCAJQgCAGgFAHQgFAGgHADQgJAEgKAAQgEAAgGgCIgEgBIAAAoIgYADgAgMgrIgCACIAAAtIADACIAIABIAGgBQAEgCADgDQADgBABgGQABgFAAgIQAAgbgQAAQgGAAgFADg");
	this.shape_6.setTransform(3.3,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#404041").s().p("AARAqIAAhAIgBAAIgWBAIghAAIAAhTIAXAAIAABAIABAAIAWhAIAhAAIAABTg");
	this.shape_7.setTransform(-10.9,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#404041").s().p("AgmgmIgBgXIAUAAIABAFIAJgEQAIgDAGAAQATAAAIALQAJAMAAATQAAAKgCAJQgDAGgFAHQgEAGgJADQgHAEgLAAQgFAAgFgCIgDgBIAAAoIgZADgAgLgrIgCACIAAAtIACACIAJABIAGgBQADgCADgDQACgBACgGQACgFgBgIQAAgbgQAAQgGAAgEADg");
	this.shape_8.setTransform(-20.4,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#404041").s().p("AgdAgQgJgLAAgVQAAgrAoAAQAMAAAHADQAHADAEAGQAEAGACAHQABAIAAAJIAAAGIg0AAQAAAJADAFQAFAIALAAQAKAAAGgDIAMgEIAEAPIgHADIgIADIgKACIgLABQgVAAgKgMgAgFgaQgEACgCADQgCAEAAAFIAAAEIAcAAQAAgJgDgFQgDgFgHAAQgEAAgDABg");
	this.shape_9.setTransform(-29.9,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#404041").s().p("AgTA+QgIgDgFgGQgFgIgCgKQgCgLAAgQQAAgMABgNQACgLAFgIQAEgJAJgFQAIgGAMgBIAMgDIAJgCIAGgBIAFgBIAEAUIgOADIgUAEIgKADQgFACgDAEQgDAEgCAGQgCAFAAAKQACgFAEgDIAIgFIAIgDIAGAAQAKAAAHACQAHAEAFAFQAEAGACAGQACAIAAAKQAAAWgLAKQgLALgVAAQgKAAgIgDgAgNACQgEAHAAAOIABAKQABAFACADIAFAGQADACAEAAQAKAAAFgHQAEgIAAgOIgBgJQgBgFgCgEQgBgCgDgBQgEgCgFAAQgJgBgFAGg");
	this.shape_10.setTransform(-39.3,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#404041").s().p("AAeAqIAAhTIAXAAIAABTgAg1AqIAAhTIAYAAIAAAdIAUAAQAGAAAEABQAFACAEAEQAEADADADQACAFAAAHQAAAIgCAFQgDAGgEADQgEADgGACQgEACgHAAgAgdAZIAOAAQAMAAAAgMQAAgEgDgDQgEgEgFAAIgOAAg");
	this.shape_11.setTransform(-50.6,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#404041").s().p("AgtA8IAAh3IAvAAQAJAAAHABQAIACAGAEQAFADADAGQACAGAAAIQAAAJgEAHQgGAHgIADQAJADAHAGQAGAHAAALQAAAKgEAHQgDAGgGAFQgFAEgHACQgIACgIAAgAgVApIAVAAIAIAAIAGgDQADgCABgDQACgEAAgFQAAgFgCgEQgBgDgDgCIgGgDIgHgBIgWAAgAgVgKIAVAAQAIAAAFgEQAEgEAAgHQAAgFgCgDIgDgFIgGgCIgGAAIgVAAg");
	this.shape_12.setTransform(-62.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-12.6,140.6,25.3);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E70").s().p("AAIBCQgTgWAAgsQAAgrAUgXQAWgXAqAAQAWAAAQAGQATAIALAPIgZAXQgIgKgJgEQgKgEgPAAQgaAAgLAPQgLANAAAbQAAAcALAOQALANAbAAIAQgBIANgDIAAgfIghAAIAAgeIBGAAIAABTQgLAHgSAFQgTAFgUAAQgsAAgVgYgAiMBXIAAitIAoAAIAACLIBUAAIAAAig");
	this.shape.setTransform(-2.7,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-14,28.4,18.1);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kv();
	this.instance.setTransform(-120,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-137,240,275);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAPAAAJAKQALALAAANQAAAOgLALQgJAKgPAAQgNAAgLgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJASQgEgBgCgDIgEgHIgBgHQAAgIAGgFQAGgFAIAAQAGgBAEACQADABADAEIAEAFIABAHQAAAJgGAFQgGAGgJgBQgFAAgEgBgAgFgFQgCADAAACQAAADACADQABACAEAAQAEAAACgCQACgDAAgDQAAgCgCgDQgBgCgFAAQgDAAgCACg");
	this.shape.setTransform(88.8,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAoQgHgDgEgGQgEgGgCgHQgCgIAAgKQAAgJACgHQACgJAEgGQAEgGAHgDQAGgCAHAAQAIAAAHACQAGADAEAGQAEAGACAJQACAHAAAJQAAAKgCAIQgCAHgEAGQgEAGgGADQgHAEgIAAQgHAAgGgEgAgGgbIgFAGIgDAJIgBAMQAAANAEAJQAEAIAHAAQAIAAAEgIQAEgJAAgNQAAgNgEgIQgEgJgIAAQgDAAgDADg");
	this.shape_1.setTransform(82.8,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdArIAAgJIAdgfQAGgEACgFQADgGAAgFQAAgDgCgCIgDgEIgEgCIgEgBIgLACIgMAFIgFgMQAIgEAHgCQAHgCAIAAIAKABQAFACAFADQAEACACAFQADAFAAAHQAAAEgCAEIgDAHIgFAFIgGAHIgTAUIAlAAIAAANg");
	this.shape_2.setTransform(75.5,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACAqIAAhDIgPAIIgFgKIAagOIALAAIAABTg");
	this.shape_3.setTransform(67.6,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAdIAAg5IAdAAQAJAAAGADQAFAEAAAIQAAAEgDADQgDAEgEACQAFAAADADQAEADAAAHQAAADgCADIgDAFIgHAEIgIABgAgJARIALAAQAIABAAgIQAAgDgDgBQgBgCgEAAIgLAAgAgJgFIALAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIACgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAIgLAAg");
	this.shape_4.setTransform(58.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAdIAAgsIgBAAIgPAsIgXAAIAAg5IAQAAIAAAsIABAAIAPgsIAXAAIAAA5g");
	this.shape_5.setTransform(51.8,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAdIAAgtIgSAAIAAgMIAzAAIAAAMIgSAAIAAAtg");
	this.shape_6.setTransform(45.7,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKAdIgRgXIgDAAIAAAXIgSAAIAAg5IASAAIAAAXIADAAIAQgXIASAAIgWAcIAXAdg");
	this.shape_7.setTransform(40.3,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAXQgGgJAAgOQAAgeAbABQAIAAAFABQAFACADAFQADAEABAFIABAMIAAAEIgkAAQAAAFACAFQADAEAIAAQAHAAAEgBIAIgDIADAKIgEACIgGACIgHACIgIABQgOgBgHgHgAgEgSQAAABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQgCACAAAEIAAACIATAAQAAgGgCgEQgCgDgFAAIgFABg");
	this.shape_8.setTransform(33.5,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAdIAAgtIgQAAIAAgMIAQAAIAQAAIAAAUIAOAAIAIABQAEABADADIAEADQACAEAAAFQAAAGgCADQgCAEgDACIgHAEIgJABgAgBARIAJAAQAJAAAAgIQAAgDgCgCQgDgCgEgBIgJAAg");
	this.shape_9.setTransform(27.1,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNArQgFgCgEgFQgDgEgCgIQgBgIAAgKIABgRQABgIADgGQADgGAGgEQAGgEAIgBIAIgCIAGgBIAFgBIADAAIADANIgKADIgOADIgGACIgGAEQgCACgBAEQgCAEAAAHIAEgGIAGgDIAGgCIADAAQAHAAAFACQAFACADAEQAEAEABAEQABAFAAAHQAAAPgHAIQgIAHgOAAQgHAAgGgCgAgIABQgDAFAAAKIAAAHIACAFQABADADABQACACADAAQAGAAADgFQADgFAAgKIAAgHIgCgGQgBgBgDgBQgCgBgDAAQgGAAgDADg");
	this.shape_10.setTransform(20.3,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAcQgFgCgDgEQgEgEgBgGIgBgMQAAgOAHgIQAIgHAOAAQAIAAAFABQAGADADAEQADAEACAGQABAGAAAFQAAAPgHAIQgIAHgOABQgIAAgGgDgAgIgNQgDAFAAAIIAAAHIACAHIADADQADACADAAQAGAAADgFQADgFAAgJIAAgHIgCgFQgBgEgDgBQgCgBgDgBQgGABgDAFg");
	this.shape_11.setTransform(13.4,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAsIAAgsIgBAAIgOAsIgYAAIAAg5IAQAAIAAAsIABAAIAPgsIAXAAIAAA5gAgOgbQgGgFABgLIAMAAQABAFACADQABADADAAQAGAAABgDIACgIIANAAQAAALgFAFQgFAGgMAAQgJAAgFgGg");
	this.shape_12.setTransform(3.5,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAdIAAg5IAQAAIAAA5gAgkAdIAAg5IAQAAIAAAUIAPAAIAGABQAEABACADQADACACABQACAEAAAFQAAAGgCADQgCAEgDACQgDADgEABIgHABgAgUARIAKAAQAJAAAAgIQAAgDgDgCQgCgCgEgBIgKAAg");
	this.shape_13.setTransform(-4.5,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAJAdIAAgXIgRAAIAAAXIgRAAIAAg5IARAAIAAAXIARAAIAAgXIARAAIAAA5g");
	this.shape_14.setTransform(-12.2,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAdIAAg5IAQAAIAAAUIAOAAIAIABQAEABADADQADACABABQACAEAAAFQAAAGgCADQgBAEgDACIgHAEIgKABgAgJARIAKAAQAIAAAAgIQAAgDgCgCQgCgCgEgBIgKAAg");
	this.shape_15.setTransform(-18.5,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAdIgCgBIAAgMIABAAIACAAIAEgBIACgCIABgEIABgIIAAgFIABgJIAAgJIAAgGIAuAAIAAA5IgRAAIAAgtIgOAAIAAAJIgBALQgCANgEAGQgFAGgIAAIgFAAg");
	this.shape_16.setTransform(-25.4,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAcQgFgCgDgEQgEgEgBgGIgBgMQAAgOAHgIQAIgHAOAAQAIAAAFABQAGADADAEQADAEACAGQABAGAAAFQAAAPgHAIQgIAHgOABQgIAAgGgDgAgIgNQgDAFAAAIIAAAHIACAHIADADQADACADAAQAGAAADgFQADgFAAgJIAAgHIgCgFQgBgEgDgBQgCgBgDgBQgGABgDAFg");
	this.shape_17.setTransform(-31.9,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAdIAAg5IAnAAIAAAMIgXAAIAAAtg");
	this.shape_18.setTransform(-37.3,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAsIgFgBIADgLIAEAAQAFAAACgBIADgDIAEgGIACgIIgXg5IASAAIALAoIABAAIAMgoIARAAIgXA+IgFAKQgCAFgCADQgDADgEACQgFACgGAAIgEAAg");
	this.shape_19.setTransform(-42.9,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAcQgFgCgDgEQgEgEgBgGIgBgMQAAgOAHgIQAIgHAOAAQAIAAAFABQAGADADAEQADAEACAGQABAGAAAFQAAAPgHAIQgIAHgOABQgIAAgGgDgAgIgNQgDAFAAAIIAAAHIACAHIADADQADACADAAQAGAAADgFQADgFAAgJIAAgHIgCgFQgBgEgDgBQgCgBgDgBQgGABgDAFg");
	this.shape_20.setTransform(-49.1,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAKAdIgRgXIgDAAIAAAXIgRAAIAAg5IARAAIAAAXIADAAIAQgXIASAAIgWAcIAXAdg");
	this.shape_21.setTransform(-55.2,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAcQgFgCgDgEQgEgEgBgGIgBgMQAAgOAHgIQAIgHAOAAQAIAAAFABQAGADADAEQADAEACAGQABAGAAAFQAAAPgHAIQgIAHgOABQgIAAgGgDgAgIgNQgDAFAAAIIAAAHIACAHIADADQADACADAAQAGAAADgFQADgFAAgJIAAgHIgCgFQgBgEgDgBQgCgBgDgBQgGABgDAFg");
	this.shape_22.setTransform(-62.2,1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgagaIgBgQIAOAAIABADIAGgDIAJgBQANgBAGAJQAGAHAAAOQAAAHgBAFQgCAFgDAEQgEAEgFADQgGADgHAAIgGgBIgDgCIAAAdIgRACgAgHgeIgCABIAAAgIACABIAGAAIADAAQADgBACgCIADgFIABgJQAAgTgLAAQgEAAgDACg");
	this.shape_23.setTransform(-68.8,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAdIAAgsIgBAAIgOAsIgYAAIAAg5IAQAAIAAAsIABAAIAPgsIAXAAIAAA5g");
	this.shape_24.setTransform(-75.7,1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxAqIAAhTIARAAIAABFIAZAAIAAhFIAPAAIAABFIAZAAIAAhFIARAAIAABTg");
	this.shape_25.setTransform(-85.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.1,-9.5,186.3,19);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AvTAAIenAA");
	this.shape.setTransform(98,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,198,2);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AABAYIgcgdAABAYIAAgvIAYAXg");
	this.shape.setTransform(-0.1,-2.6,1,1,0,0,0,0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AABgXIAYAXIgYAYgAgbAGIAcgd");
	this.shape_1.setTransform(-0.1,2.8,1,1,0,0,0,0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("ABaAAQAAAlgbAbQgaAaglAAQgkAAgagaQgbgbAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10,20.2,20);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAAJIAAgR");
	this.shape.setTransform(0,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AghgyIATAZIAABMIAdAAIAAhMIATgZg");
	this.shape_1.setTransform(0.3,0.2,1,1,0,0,0,0.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("ABaAAQAAAlgbAbQgaAaglAAQgkAAgagaQgbgbAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-10,20.2,20);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AA0gUQgXgUgdAAQgdAAgXAUIA0A6g");
	this.shape.setTransform(-0.1,0,1,1,0,0,0,-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("ABaAAQAAAlgbAbQgaAaglAAQgkAAgagaQgbgbAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-10,20.2,20);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AgLAUQAIAAAEgGQAGgGAAgIQAAgHgGgGQgEgGgIAA");
	this.shape.setTransform(3.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AgRAfQANAAAHgIQAKgKAAgNQAAgLgKgKQgHgKgNAA");
	this.shape_1.setTransform(4.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("ABaAAQAAAlgbAbQgbAagkAAQgkAAgagaQgbgbAAglQAAgkAbgaQAagbAkAAQAkAAAbAbQAbAaAAAkg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AACgTIgeAAIAAAnIAeAAIAbAUIAAhPg");
	this.shape_3.setTransform(-2.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10,20.2,20);


(lib.Symbol19copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AgUAhQgFgCgDgCQgCgDAAgEIgBgJQAAgGACgEQACgDAEgCQAEgDAGAAIAMgBIADAAIAEAAIAAgDQAAgGgCgDQgEgDgEAAQgGABgGABQgFACgEACIgEgMQAGgDAHgCQAJgCAHAAQAHAAAFACQAFABADADQADAEACAFQABAFAAAJIAAASQAAAEABACQACABAEABIAAAMIgIABQgGAAgEgCQgDgBgDgDQgDADgGACQgEACgFAAQgHAAgEgCgAgJAGQgCADAAAEQgBAFACACQACACAFAAIADgBQAEgBACgCIAAgOIgFAAIgCAAQgGAAgCACg");
	this.shape.setTransform(103.3,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AgegeIgBgSIAQAAIABAEIAHgEQAGgCAFAAQAOAAAHAJQAHAJAAAPQAAAJgCAGQgBAFgEAFQgEAFgGADQgHADgIAAIgIgBIgDgCIAAAgIgTADgAgJgiIgCABIAAAkIADABIAGACQACAAADgCQADgBACgCIADgFIABgLQAAgWgMAAQgFAAgEADg");
	this.shape_1.setTransform(95.8,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404041").s().p("AgXAaQgHgJAAgRQAAgiAfAAQAKAAAFADQAGACAEAFQADAEABAGIABANIAAAFIgqAAQAAAHADAEQAEAHAJAAQAIgBAEgBIAKgEIADAMIgFADIgHABIgIACIgIABQgRAAgIgJgAgEgUIgEAEIgCAHIAAADIAVAAQAAgHgCgFQgCgEgGAAQgCABgDABg");
	this.shape_2.setTransform(88.2,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#404041").s().p("AAYAhIAAgyIgBAAIgPAyIgPAAIgQgyIgBAAIAAAyIgRAAIAAhBIAbAAIAOAyIABAAIAPgyIAbAAIAABBg");
	this.shape_3.setTransform(79.5,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404041").s().p("AgUAhQgFgCgDgCQgCgDAAgEIgBgJQAAgGACgEQACgDAEgCQAEgDAGAAIAMgBIADAAIAEAAIAAgDQAAgGgCgDQgDgDgFAAQgHABgFABQgFACgEACIgEgMQAGgDAHgCQAJgCAHAAQAGAAAGACQAFABADADQADAEABAFQACAFAAAJIAAASQAAAEABACQACABADABIAAAMIgHABQgGAAgEgCQgDgBgDgDQgDADgGACQgDACgGAAQgHAAgEgCgAgKAGQgBADAAAEQgBAFACACQABACAGAAIADgBQAEgBACgCIAAgOIgEAAIgDAAQgGAAgDACg");
	this.shape_4.setTransform(71,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404041").s().p("AALAhIgTgbIgFAAIAAAbIgTAAIAAhBIATAAIAAAaIAFAAIATgaIAUAAIgaAgIAcAhg");
	this.shape_5.setTransform(64.2,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404041").s().p("AANAhIAAgXIgJAAIgOAXIgVAAIATgZQgHgBgDgFQgEgDgBgJQABgMAGgFQAIgFALAAIAhAAIAABBgAgHgKQAAAEACADQADACADAAIAMAAIAAgSIgMAAQgIAAAAAJg");
	this.shape_6.setTransform(52.7,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#404041").s().p("AgVAhQgEgCgDgCQgCgDAAgEIgBgJQAAgGACgEQACgDAEgCQAEgDAGAAIAMgBIADAAIAEAAIAAgDQAAgGgCgDQgEgDgEAAQgHABgEABQgGACgEACIgEgMQAFgDAJgCQAIgCAHAAQAGAAAGACQAFABADADQADAEABAFQACAFAAAJIAAASQAAAEACACQABABADABIAAAMIgHABQgFAAgFgCQgDgBgCgDQgEADgFACQgEACgGAAQgHAAgFgCgAgKAGQgBADgBAEQABAFABACQACACAFAAIAEgBQADgBACgCIAAgOIgEAAIgDAAQgGAAgDACg");
	this.shape_7.setTransform(45.9,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#404041").s().p("AALAhIAAgbIgUAAIAAAbIgUAAIAAhBIAUAAIAAAaIAUAAIAAgaIASAAIAABBg");
	this.shape_8.setTransform(38.4,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#404041").s().p("AANAyIAAgyIAAAAIgRAyIgbAAIAAhBIATAAIAAAyIAAAAIARgyIAbAAIAABBgAgRgfQgFgGAAgMIAOAAQABAFACAEQABADAFAAQAFAAADgDQABgEABgFIAOAAQAAAMgFAGQgGAGgNAAQgNAAgFgGg");
	this.shape_9.setTransform(30.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#404041").s().p("AgQAgQgGgCgEgFQgDgEgCgHQgBgGAAgIQAAgQAIgJQAJgJAQAAQAJAAAHADQAGACAEAFQAEAFABAGQACAGAAAHQAAARgJAKQgJAIgQAAQgKAAgGgDgAgJgPQgEAGAAAKIAAAIIACAHQACADADACQACABAEAAQAIABADgHQADgFAAgLIgBgHIgCgHQgBgDgCgCQgDgCgEAAQgHAAgDAGg");
	this.shape_10.setTransform(22.8,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#404041").s().p("AgdAhIAAhBIAiAAQAKAAAGAEQAGAEAAAJQAAAFgDAEQgDADgFACQAGABAEADQAEAEAAAHQAAAFgCADIgFAGIgHAEIgIABgAgKAUIAMAAQAJAAAAgIQAAgEgCgCQgDgCgEAAIgMAAgAgKgGIAMAAQAEAAACgCQABgCAAgDQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQgCgCgEAAIgMAAg");
	this.shape_11.setTransform(15.5,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#404041").s().p("AAeA7IAAgVIg7AAIAAAVIgSAAIAAglIAJAAQADgGADgIIADgRIACgWIABgbIA+AAIAABQIAMAAIAAAlgAgJgYIgCASIgDAPIgFANIAlAAIAAhAIgaAAIgBASg");
	this.shape_12.setTransform(6.8,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,108.9,21.1);


(lib.Symbol19 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AAOAyIAAgyIgCAAIgQAyIgbAAIAAhBIASAAIAAAyIACAAIAQgyIAbAAIAABBgAgRgfQgGgGAAgMIAPAAQAAAFACAEQADADADAAQAHAAABgDQADgEAAgFIAOAAQAAAMgGAGQgFAGgOAAQgLAAgGgGg");
	this.shape.setTransform(100.8,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AgXAaQgHgJAAgRQAAgiAfAAQAKAAAFADQAGACAEAFQADAEABAGIABANIAAAFIgqAAQAAAHADAEQAEAHAJAAQAIgBAEgBIAKgEIADAMIgFADIgHABIgIACIgIABQgRAAgIgJgAgEgUIgEAEIgCAHIAAADIAVAAQAAgHgCgFQgCgEgGAAQgCABgDABg");
	this.shape_1.setTransform(93.1,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404041").s().p("AgdAhIgEgBIABgOIACAAIACAAIADgBIADgCIABgFIACgIIAAgHIABgKIAAgKIAAgIIA0AAIAABCIgTAAIAAg0IgPAAIgBALIgBAMQgCAQgFAHQgFAHgKAAIgFgBg");
	this.shape_2.setTransform(85.3,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#404041").s().p("AAKAhIAAgzIgTAAIAAAzIgTAAIAAhBIA5AAIAABBg");
	this.shape_3.setTransform(78.1,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404041").s().p("AgWAaQgHgJAAgQQAAgRAJgIQAKgKAPAAQAIAAAHADQAGACAEAFIgLAKQgDgEgDgBQgDgBgFgBQgGABgEAFQgEAFAAALQAAAKADAFQAEAGAHAAQAGAAAFgBIAJgFIADANQgDADgHABQgHACgIAAQgRAAgIgJg");
	this.shape_4.setTransform(71.4,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404041").s().p("AANAhIAAgyIgBAAIgQAyIgbAAIAAhBIASAAIAAAyIABAAIARgyIAbAAIAABBg");
	this.shape_5.setTransform(63.8,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404041").s().p("AAXArIAAgTIgsAAIAAATIgRAAIAAghIAIAAIADgKIADgLIABgOIABgRIAzAAIAAA0IAKAAIAAAhgAgIgGQgBAJgDAHIAWAAIAAglIgPAAQgBALgCAKg");
	this.shape_6.setTransform(55.6,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#404041").s().p("AAOAyIAAgyIgBAAIgRAyIgbAAIAAhBIATAAIAAAyIABAAIAQgyIAbAAIAABBgAgRgfQgGgGAAgMIAPAAQABAFABAEQACADAEAAQAHAAABgDQACgEABgFIAOAAQAAAMgGAGQgFAGgOAAQgMAAgFgGg");
	this.shape_7.setTransform(44.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#404041").s().p("AgQAgQgGgCgEgFQgDgEgCgHQgBgGAAgIQgBgQAJgJQAJgJAQAAQAKAAAFADQAHACADAFQAFAFABAGQACAGgBAHQAAARgIAKQgJAIgQAAQgKAAgGgDgAgKgPQgDAGAAAKIABAIIABAHQACADACACQADABAEAAQAHABAEgHQADgFAAgLIAAgHIgCgHQgCgDgDgCQgCgCgEAAQgIAAgDAGg");
	this.shape_8.setTransform(36.3,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#404041").s().p("AgegeIgBgSIAQAAIABAEIAHgEQAGgCAFAAQAOAAAHAJQAHAJAAAPQAAAJgCAGQgBAFgEAFQgEAFgGADQgHADgIAAIgIgBIgDgCIAAAgIgTADgAgJgiIgCABIAAAkIADABIAGACQACAAADgCQADgBACgCIADgFIABgLQAAgWgMAAQgFAAgEADg");
	this.shape_9.setTransform(28.8,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#404041").s().p("AgQAgQgGgCgEgFQgDgEgCgHQgBgGgBgIQABgQAIgJQAJgJAQAAQAJAAAHADQAGACAEAFQAEAFABAGQACAGAAAHQAAARgJAKQgJAIgQAAQgKAAgGgDgAgJgPQgEAGAAAKIAAAIIACAHQACADADACQACABAEAAQAIABACgHQAEgFAAgLIgBgHIgCgHQgBgDgCgCQgDgCgEAAQgHAAgDAGg");
	this.shape_10.setTransform(21,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#404041").s().p("AgIAhIAAgzIgUAAIAAgOIA5AAIAAAOIgUAAIAAAzg");
	this.shape_11.setTransform(14.1,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#404041").s().p("AgjAwIAAhfIAkAAQAIAAAGABQAGACAEACQAEADADAFQACAFAAAGQAAAHgEAGQgEAFgHADQAIACAFAFQAEAGAAAIQABAIgDAGQgDAFgEADQgFAEgFACQgHABgHAAgAgRAhIARAAIAHAAIAEgDIAEgEQABgCAAgFIgBgHIgEgEIgEgCIgHgBIgRAAgAgRgIIARAAQAGAAAEgDQAEgDAAgGIgCgGIgDgEIgDgBIgGgBIgRAAg");
	this.shape_12.setTransform(6.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,107,21.1);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E70").s().p("AEiAzQAAgaAOgOQAOgLAUAAQARAAAKAFIAAgFIAVgBIAABJQAAAKAGADQACABADgBIAAARIgNAAQgIgBgFgFIgDgFQgCADgHAFQgJAFgLAAQgxAAAAg1gAFBAYQgJAJAAASQAAARAJAKQAHAIALAAQASAAAHgKIAAg2QgIgHgOAAQgNAAgIAJgAmiAAQAAgyAagbQAZgaAyAAQA2AAAYAhIgeAbQgRgWgeAAQgfAAgNASQgMAPAAAgQAAAhAMAPQANAQAfAAQAUAAAOgFIAAgjIgmAAIAAgkIBRAAIAABgQgMAJgWAGQgVAFgYAAQhkAAAAhogADOBbQgQgOAAgaQAAgZAOgOQAOgNAZAAQAWAAAMAKIgLANQgJgIgPAAQgPAAgIAKQgIAKAAARQAAAQAJAKQAJAKAOAAQAQAAANgIIAHANQgNAMgXAAQgWAAgPgNgAIcBdQgDgGAAgNIAAgjQAAgLgDgGQgEgHgJAAQgMAAgLAIIABAMIAABDIgXAAIAAhAQAAgMgDgFQgEgGgJAAQgKAAgMAHIAABQIgXAAIAAhmIAVAAIABAHQANgIARAAQASAAAIAJQANgJAVAAQASAAAHAIQAHAJAAATIAAAnQAAAIADACQACACAFAAIAAAQIgLABQgOAAgEgKgAo4BlIAAjJIAvAAIAAChIBiAAIAAAog");
	this.shape.setTransform(-1.2,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("ABJCOIhJhbIhIBbIhUAAIB2iOIhziNIBOAAIBoCCIAKgMIgegkIBDhSIBNAAIhyCNIB2COg");
	this.shape_1.setTransform(-1.4,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.1,-14.4,113.9,28.8);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E70").s().p("AmuAAQAAgyAagbQAZgaAyAAQA2AAAYAhIgeAbQgRgWgeAAQgfAAgNASQgMAPAAAgQAAAhAMAPQANAQAfAAQAUAAAOgFIAAgjIgmAAIAAgkIBRAAIAABgQgMAJgWAGQgVAFgYAAQhkAAAAhogAFVBZQgMgOAAgaQAAgLADgKQADgJAGgIQAGgHAKgEQAIgBANAAQANAAAIACQAJAFAEAGQAFAHADAJQACAIAAAKIAAAKIhHAAQABAPAHAHQAIAIAPAAIAIgBIAQgGIAGgDIAIAPQgEAEgNAEQgMAEgMAAQgZAAgNgOgAFmAUQgGAGgBAOIAwAAQAAgOgGgHQgHgGgIAAQgNAAgHAHgADNBlIgjhlIAXAAIAaBTIAIAAIAWhAQACgFgCgDQgBgEgGgDIALgMQANAGAFAFQAEAHgFANIgfBOgApEBlIAAjJIAvAAIAAChIBiAAIAAAogAILBlIgPhUIgDAAIgRBUIghAAIgZhlIAXAAIARBSIAEAAIAQhSIAhAAIAPBSIAEAAIAQg/QACgHgDgDQgCgDgFgBIAJgNQAPAEAEAFQAFAHgEANIgXBQgAEqBjQgFgDgCgDQgCgCgCgFIgBgJIAAhNIAXAAIAABLQAAAFABABIAEADQAAAAABAAQAAABABAAQAAAAABAAQAAgBABAAIAAAQIgJABQgHAAgEgCgAEggXQgEgEAAgGQAAgFAEgEQAEgEAGAAQAEAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgEAAQgGAAgEgEg");
	this.shape.setTransform(0,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("ABJCOIhJhbIhIBbIhUAAIB2iOIhziNIBOAAIBoCCIAKgMIgegkIBDhSIBNAAIhyCNIB2COg");
	this.shape_1.setTransform(-1.4,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.1,-14.4,116.3,28.8);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE29D").s().p("EgSugh4MAldAAAMAAAA4OMgldALjg");
	this.shape.setTransform(0,-180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-397,240,434);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#76CCC2").s().p("EgSuAmmMAAAhNKMAldALjMAAABBng");
	this.shape.setTransform(0,210);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-37,240,494);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E70").s().p("AEoCpQgrAAgUgZQgUgYAAgyQAAhgBXAAQAnAAAVAYIACACIgSAQIgCgCQgQgPgaAAQg5AAAABKQAABHA2AAQAaAAAbgLIAEgBIAIAXIgDABQgdANgiABIAAgBgArvAAQAAhTAqgrQApgqBQgBQBZABAlA1IgvArQgOgRgRgJQgTgJgcAAQgxABgVAcQgUAaAAA0QAAA1AUAZQAVAaAyAAQAiAAAVgJIAAg6Ig+AAIAAg6ICEAAIAACcQgVAPgiAJQgjAIgmABQiiAAAAiogAPFCnIAAhIIgZAAIg4BIIgjAAIA6hLQgTgEgMgNQgNgQAAgaQAAg4BBAAIBCAAIAAC+gAOGAIQgKAIAAARQAAAkAkABIAlAAIAAhGIglAAQgRAAgJAIgAMkCnIAAiiIhRCfIgBADIgqAAIAAi+IAdAAIAACfIBRidIABgCIAqAAIAAC+gAISCnIAAi+IBBAAQBBAAAAA4QAAAdgRARQgQAPgcABIgpAAIAABIgAIuBGIAlAAQAkgBAAgkQAAgRgKgIQgJgIgRAAIglAAgAGBCnIAAi+IB1AAIAAAXIhYAAIAAA3IBVAAIAAAZIhVAAIAAA+IBbAAIAAAZgAvhCiIAAlGIBMAAIAAEHICdAAIAAA/g");
	this.shape.setTransform(0.2,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AB1DlIh1iTIh1CTIiIAAIC/jlIi5jkIB9AAIB6CWIAAAAIAvA7IAPgTIgvg7IBsiDIB9AAIi5DkIC/Dlg");
	this.shape_1.setTransform(-7.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.2,-23.2,198.9,46.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.icons, null, new cjs.Matrix2D(1,0,0,1,-123,-13)).s().p("AiABtIAAjZIEBAAIAADZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-11,26,22);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.icons, null, new cjs.Matrix2D(1,0,0,1,-89,-13)).s().p("AiABtIAAjZIEBAAIAADZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-11,26,22);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.icons, null, new cjs.Matrix2D(1,0,0,1,-55.5,-13)).s().p("Ah8BtIAAjZID5AAIAADZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-11,25,22);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.icons, null, new cjs.Matrix2D(1,0,0,1,-22.5,-13)).s().p("Ah8BtIAAjZID5AAIAADZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-11,25,22);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3,true).p("ASwfQMglfAAAMAAAg+fMAlfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-201,242,402);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol19copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol46();
	this.t2.setTransform(0,10.7);

	this.t1 = new lib.Symbol43();
	this.t1.setTransform(0,-10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-23.3,167.8,46.6);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvPCBIAAkBIefAAIAAEBg");
	mask.setTransform(0,-36);

	// t1
	this.t1 = new lib.Symbol25();
	this.t1.setTransform(0,-36.8);

	this.t1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 4
	this.l1 = new lib.Symbol24();
	this.l1.setTransform(-15.8,51.1,0.564,1,-138);

	this.l2 = new lib.Symbol24();
	this.l2.setTransform(-98,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l2},{t:this.l1}]}).wait(1));

	// ic5678
	this.c1 = new lib.Symbol26();
	this.c1.setTransform(-15.7,51.2);

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

	// Layer 2
	this.instance = new lib._2();
	this.instance.setTransform(-117,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-46.3,235,277.3);


(lib.Symbol11 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArUCCIAAkCIWoAAIAAECg");
	mask.setTransform(28.5,46);

	// ic5678
	this.ic8 = new lib.Symbol15();
	this.ic8.setTransform(78,45);

	this.ic7 = new lib.Symbol14();
	this.ic7.setTransform(44,45);

	this.ic6 = new lib.Symbol13();
	this.ic6.setTransform(10.5,45);

	this.ic5 = new lib.Symbol12();
	this.ic5.setTransform(-22.5,45);

	this.ic8.mask = this.ic7.mask = this.ic6.mask = this.ic5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ic5},{t:this.ic6},{t:this.ic7},{t:this.ic8}]}).wait(1));

	// ic1234
	this.ic4 = new lib.Symbol23();
	this.ic4.setTransform(78.4,45.2);

	this.ic3 = new lib.Symbol22();
	this.ic3.setTransform(44.4,45.2);

	this.ic2 = new lib.Symbol21();
	this.ic2.setTransform(10.3,45.2);

	this.ic1 = new lib.Symbol20();
	this.ic1.setTransform(-23.7,45.2);

	this.ic4.mask = this.ic3.mask = this.ic2.mask = this.ic1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ic1},{t:this.ic2},{t:this.ic3},{t:this.ic4}]}).wait(1));

	// Layer 1
	this.instance = new lib._1();
	this.instance.setTransform(-117,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,0,235,231);


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
p.nominalBounds = new cjs.Rectangle(-32.4,-16,61.5,27.1);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 200;
		
		var time1 = 5.50;
		var time2 = time1+5.50;
		
		var tl = new TimelineLite();
		tl.fromTo(this.blk, 0.4, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.mc1, 0.7, {y:"-=600", ease:Expo.easeOut}, 0.00)
		  .from(this.mc2, 0.7, {y:"+=600", ease:Expo.easeOut}, 0.30)
		  .from(this.logo_lg, 0.9, {y:"-=150", ease:Expo.easeOut}, 0.40)
		  
		  //1
		  .staggerFrom([this.logo_v, this.ph1], 0.9, {y:"+=600", ease:Expo.easeOut}, 0.2, 0.50)
		  .from(this.t1, 0.9, {x:"+=350", ease:Expo.easeOut}, 1.20)
		  .staggerFrom([this.ph1.ic1, this.ph1.ic2, this.ph1.ic3, this.ph1.ic4], 1.3, {x:"+=300", ease:Expo.easeOut}, 0.05, 0.50)
		  
		  .staggerTo([this.ph1.ic1, this.ph1.ic2, this.ph1.ic3, this.ph1.ic4], 0.9, {x:"-=300", ease:Expo.easeIn}, 0.05, 2.70)
		  .staggerFrom([this.ph1.ic5, this.ph1.ic6, this.ph1.ic7, this.ph1.ic8], 1.0, {x:"+=300", ease:Expo.easeOut}, 0.05, 3.50)
		  
		  //2
		  .staggerTo([this.logo_v, this.t1, this.ph1], 0.7, {x:"-=400", ease:Expo.easeIn}, 0.05, time1)
		  .staggerFrom([this.logo_c, this.ph2], 0.9, {y:"+=600", ease:Expo.easeOut}, 0.2, time1+0.6)
		  .from(this.t2, 0.9, {x:"+=350", ease:Expo.easeOut}, time1+1.20)
		  
		  .to(this.ph2, 1.2, {y:"+=50", ease:Expo.easeInOut}, time1+2.30)
		  .from(this.ph2.c1, 0.9, {scaleX:8, scaleY:8, alpha:0, ease:Expo.easeOut}, time1+3.20)
		  .from(this.ph2.l1, 0.4, {scaleX:0, scaleY:0, ease:Expo.easeIn}, time1+3.40)
		  .from(this.ph2.l2, 0.4, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time1+3.80)
		  .from(this.ph2.t1, 0.5, {y:"+=100", ease:Expo.easeOut}, time1+4.00)
		  
		  //3
		  .staggerTo([this.logo_c, this.t2, this.ph2], 0.7, {x:"-=400", ease:Expo.easeIn}, 0.05, time2)
		  .staggerTo([this.mc2, this.mc1], 1.2, {y:"+=226", ease:Expo.easeInOut}, 0.10, time2+0.3)
		  .from(this.logo_x, 0.9, {y:"-=150", ease:Expo.easeOut}, time2+1.50)
		  .from(this.kv, 0.5, {alpha:0, ease:Power0.easeNone}, time2+1.50)
		  .from(this.logo_c2, 0.9, {x:"-=300", ease:Expo.easeOut}, time2+1.50)
		  .from(this.logo_v2, 0.9, {x:"+=300", ease:Expo.easeOut}, time2+1.50)
		  .staggerFrom([this.t3.t1, this.t3.t2], 0.9, {y:"+=100", alpha:0, ease:Expo.easeOut}, 0.10, time2+2.0)
		  
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 18.00)
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

	// logo_lg
	this.logo_lg = new lib.sprite36();
	this.logo_lg.setTransform(71.7,-163.9);

	this.timeline.addTween(cjs.Tween.get(this.logo_lg).wait(1));

	// logo_x
	this.logo_x = new lib.Symbol16();
	this.logo_x.setTransform(-49.5,-169.2,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_x).wait(1));

	// logo_v
	this.logo_v = new lib.Symbol18();
	this.logo_v.setTransform(-52.5,-89.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.logo_v).wait(1));

	// t1
	this.t1 = new lib.Symbol19();
	this.t1.setTransform(-102,-64.8);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// logo_c
	this.logo_c = new lib.Symbol18copy();
	this.logo_c.setTransform(-52.5,-89.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.logo_c).wait(1));

	// t2
	this.t2 = new lib.Symbol19copy();
	this.t2.setTransform(-102,-64.8);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// ph1
	this.ph1 = new lib.Symbol11();
	this.ph1.setTransform(0,-31);

	this.timeline.addTween(cjs.Tween.get(this.ph1).wait(1));

	// ph2
	this.ph2 = new lib.Symbol11copy();
	this.ph2.setTransform(0,-31);

	this.timeline.addTween(cjs.Tween.get(this.ph2).wait(1));

	// Layer 9
	this.logo_v2 = new lib.Symbol18();
	this.logo_v2.setTransform(60,179.4,0.65,0.65,0,0,0,-0.1,-0.1);

	this.logo_c2 = new lib.Symbol18copy();
	this.logo_c2.setTransform(-50,179.4,0.65,0.65,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_c2},{t:this.logo_v2}]}).wait(1));

	// kv
	this.kv = new lib.Symbol27();
	this.kv.setTransform(0,62);

	this.timeline.addTween(cjs.Tween.get(this.kv).wait(1));

	// t3
	this.t3 = new lib.Symbol19copy2();
	this.t3.setTransform(0,-108.8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// mc2
	this.mc2 = new lib.Symbol17();
	this.mc2.setTransform(0,-115);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// mc1
	this.mc1 = new lib.Symbol17copy();
	this.mc1.setTransform(0,-115);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-512,306,854);


// stage content:
(lib.lg_x_240x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyufQMAAAg+fMAldAAAMAAAA+fg");
	mask.setTransform(120,200);

	// brd
	this.instance = new lib.Symbol3();
	this.instance.setTransform(120,200);
	this.instance.alpha = 0.102;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(120,200);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;