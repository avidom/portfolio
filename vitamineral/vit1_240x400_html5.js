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
		{src:"images/bottle_mental.png", id:"bottle_mental"},
		{src:"images/bottleShadow_mental.png", id:"bottleShadow_mental"},
		{src:"images/denis.png", id:"denis"},
		{src:"images/denis2.png", id:"denis2"}
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



(lib.bottle_mental = function() {
	this.initialize(img.bottle_mental);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,320);


(lib.bottleShadow_mental = function() {
	this.initialize(img.bottleShadow_mental);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,309);


(lib.denis = function() {
	this.initialize(img.denis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,316);


(lib.denis2 = function() {
	this.initialize(img.denis2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,207);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8840B7").s().p("AhrDLQgngTgcggQgcgggNgoQgXhJAVg8QAOgrAlgpQAGgHAJAAQAJAAAHAFQAHAGABAKQAAAJgGAGQgfAjgLAjQgQAvASA6QAKAfAWAZQAWAZAeAOQBFAgBOgjQBTgjAdhJQAbg/gahBQgZg8g8gZQhEgchVAgQgJADgIgDQgJgEgDgJQgDgJAEgIQADgIAJgEQBqgoBUAlQBKAhAfBNQAhBRghBPQgjBZhmAsQgwAVgvAAQgvAAgogSgAhfBQQgdgXgSgYQgLgNALgOIAPgPQASgTASgPIgXgZQgGgHABgJQAAgKAHgFQAHgGAJAAQAJAAAGAHIAcAeQAVgMAYgFIAAgeQAAgJAGgGQAEgHAKAAQAJAAAGAHQAHAGAAAJIAAAeQARADATALIAUgQQAHgGAJABQAKABAFAHQAGAHgCAJQAAAKgIAFIgJAIQAcAZASAcQAJAOgMAMQhVBWhDAAQgtAAgxgogAhfAUQA0A4AqAAQArAABAg7Qgvg8gvAAQguAAg9A/gAgIAZQgGgGAAgJQAAgIAGgFQAGgGAGAAQAIAAAHAGQAGAFAAAIQAAAJgGAGQgHAGgIAAQgGAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-22.2,45.7,44.4);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBIQgEgEAAgGQAAgGAEgFQAEgDAGAAQAHAAAEADQAEAFAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEgAgIAdQgDgEAAgGIAAhRQAAgGADgDQADgEAFAAQAFAAAEADQADAEAAAGIAABRQAAAGgDAEQgEADgFAAQgFAAgDgDg");
	this.shape.setTransform(37.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBbQgDgDAAgGIAAhaIhGBgQgGAHgGAAQgGAAgDgDQgEgEAAgGIAAh7QAAgGAEgEQADgEAGAAQAHAAADAEQAEAEAAAGIAABaIBFhgQAFgIAIAAQAMAAAAAOIAAB7QAAAGgDADQgEAEgGAAQgHAAgDgEgAgUhEQgKgEgEgGQgGgIAGgGQAGgFAIAHQAJAJALAAQALAAAIgIQAIgIAGAFQAGAFgGAJQgEAGgJAEQgJAEgLAAQgLAAgJgEg");
	this.shape_1.setTransform(26.8,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0A4QgTgWAAgiQAAghATgVQATgXAhAAQAiAAATAXQATAVAAAhQAAAigTAWQgTAVgiABQghgBgTgVgAggglQgLAOAAAXQAAAYALAPQAMAPAUAAQAVAAALgPQAMgPAAgYQAAgXgMgOQgLgQgVAAQgUAAgMAQg");
	this.shape_2.setTransform(10.8,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBKQgNgCAAgNIAAh4QABgGADgEQADgEAHAAIBCAAQAHAAACADQAEADAAAGQAAAFgEADQgCAEgHAAIg1AAIAAAlQAKgCANAAQA1gBAAAsQAAAYgPANQgPAMgbAAQgSAAgPgCgAgYAFIAAAwQAIACAKAAQAdAAABgbQgBgNgHgFQgIgHgMAAQgMAAgIACg");
	this.shape_3.setTransform(-3.7,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0A4QgTgWAAgiQAAghATgVQATgXAhAAQAiAAATAXQATAVAAAhQAAAigTAWQgTAVgiABQghgBgTgVgAggglQgLAOAAAXQAAAYALAPQAMAPAUAAQAVAAALgPQAMgPAAgYQAAgXgMgOQgLgQgVAAQgUAAgMAQg");
	this.shape_4.setTransform(-18.8,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqA4QgRgUAAgkQAAgiASgVQATgWAfAAQAaABAPAJQAKAHgFAJQgDAJgNgFQgRgGgMAAQgTAAgLAPQgMAOAAAYQAAAZANAOQAMAPARAAQAQAAAQgKQALgFAFAHQADAEgBAFQgBAFgGAFQgRANgcAAQggAAgSgWg");
	this.shape_5.setTransform(-33.8,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-14.6,85.7,29.2);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BKQgNgEAAgMIAAh3QAAgHAEgDQADgEAHAAQAGAAAEAEQADADAAAHIAAAqQAIgBALAAQAbAAANALQAOAKAAAaQAAAYgPANQgNAMgaAAQgVAAgMgCgAguADIAAAwIASABQAcAAAAgZQAAgOgHgGQgIgGgPABIgQABgAAyBHQgDgDAAgHIAAh6QAAgGADgEQAEgEAGAAQAHAAADAEQADAEABAGIAAB6QgBAHgDADQgDAEgHAAQgGAAgEgEg");
	this.shape.setTransform(52.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBIQgDgEAAgGIAAg0IhEAAIAAA0QAAAGgEAEQgDADgHAAQgGAAgDgDQgEgEAAgGIAAh7QAAgFAEgFQADgDAGAAQAHAAADADQAEAFAAAFIAAAxIBEAAIAAgxQAAgFADgFQADgDAHAAQAGAAAEADQADAFAAAFIAAB7QAAAGgDAEQgEADgGAAQgHAAgDgDg");
	this.shape_1.setTransform(35.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBKQgNgEAAgMIAAh3QAAgHAEgDQADgEAGAAQAHAAADAEQAEADAAAHIAAAqQAIgBAMAAQAaAAAPALQAPAKAAAaQAAAYgQANQgQAMgYAAQgWAAgMgCgAgYADIAAAwIATABQAdAAAAgZQAAgPgJgFQgIgGgOABIgRABg");
	this.shape_2.setTransform(21.7,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BHQgEgFABgHQACgIALAAQAKAAAEgOQAIgbABhHQAAgGAEgEQADgEAGAAIA/AAQAHAAADAEQADAEAAAGIAAB6QAAAHgDADQgDAEgHAAQgGAAgEgEQgDgDAAgHIAAhwIgnAAQgBA9gJAgQgEAPgJAJQgIAKgMAAQgKAAgEgFg");
	this.shape_3.setTransform(6.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0A4QgTgWAAgiQAAghATgVQATgXAhAAQAiAAATAXQATAVAAAhQAAAigTAWQgTAVgiABQghgBgTgVgAggglQgLAOAAAXQAAAYALAPQAMAPAUAAQAVAAALgPQAMgPAAgYQAAgXgMgOQgLgQgVAAQgUAAgMAQg");
	this.shape_4.setTransform(-7.2,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBKQgNgBAAgNIAAh2QAAgNANgCQAPgDAUAAQA2AAAAApQAAAJgGAJQgFAJgJAEQAMAEAIAIQAHAJAAANQAAAug7ABQgWAAgPgDgAgcA1QAKACAPAAQAOAAAJgFQAIgGAAgNQAAgYgfABIgZAAgAgcg1IAAArIAWAAQAbAAAAgXQAAgVgdABIgUAAg");
	this.shape_5.setTransform(-22,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0A4QgTgWAAgiQAAghATgVQATgXAhAAQAiAAATAXQATAVAAAhQAAAigTAWQgTAVgiABQghgBgTgVgAggglQgLAOAAAXQAAAYALAPQAMAPAUAAQAVAAALgPQAMgPAAgYQAAgXgMgOQgLgQgVAAQgUAAgMAQg");
	this.shape_6.setTransform(-37.4,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA0BYQgDgEAAgGIAAgTIhhAAIAAATQAAAGgDAEQgDADgGAAQgGAAgDgDQgDgEAAgGIAAgdQAAgGADgEQADgDAFAAIAHAAQAOgbAChWQAAgNANAAIBCAAQAGAAAEADQADAEAAAGIAABxIAHAAQAGAAADADQADAEAAAGIAAAdQAAAGgDAEQgDADgGAAQgGAAgDgDgAgcAkIA3AAIAAhnIgoAAQgBBEgOAjg");
	this.shape_7.setTransform(-53.8,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-14.6,127,29.2);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(60.9,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BKQgMgEgBgMIAAh3QABgHADgDQADgEAGAAQAHAAAEAEQADADAAAHIAAAqQAHgBAMAAQAbAAANALQANAKAAAaQABAYgPANQgNAMgaAAQgVAAgMgCgAguADIAAAwIASABQAcAAAAgZQAAgOgHgGQgIgGgOABIgRABgAAzBHQgEgDAAgHIAAh6QAAgGAEgEQADgEAGAAQAGAAAEAEQADAEAAAGIAAB6QAAAHgDADQgEAEgGAAQgGAAgDgEg");
	this.shape_1.setTransform(49.3,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBIQgDgEAAgGIAAg0IhEAAIAAA0QAAAGgEAEQgDADgHAAQgGAAgDgDQgEgEAAgGIAAh7QAAgFAEgFQADgDAGAAQAHAAADADQAEAFAAAFIAAAxIBEAAIAAgxQAAgFADgFQADgDAHAAQAGAAAEADQADAFAAAFIAAB7QAAAGgDAEQgEADgGAAQgHAAgDgDg");
	this.shape_2.setTransform(32.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBKQgNgEAAgMIAAh3QAAgHAEgDQADgEAGAAQAHAAADAEQAEADAAAHIAAAqQAIgBAMAAQAaAAAPALQAPAKAAAaQAAAYgQANQgQAMgYAAQgWAAgMgCgAgYADIAAAwIATABQAdAAAAgZQAAgPgJgFQgIgGgOABIgRABg");
	this.shape_3.setTransform(18.7,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BHQgEgFABgHQACgIALAAQAKAAAEgOQAIgbABhHQAAgGAEgEQADgEAGAAIA/AAQAHAAADAEQADAEAAAGIAAB6QAAAHgDADQgDAEgHAAQgGAAgEgEQgDgDAAgHIAAhwIgnAAQgBA9gJAgQgEAPgJAJQgIAKgMAAQgKAAgEgFg");
	this.shape_4.setTransform(3.9,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0A4QgTgWAAgiQAAghATgVQATgXAhAAQAiAAATAXQATAVAAAhQAAAigTAWQgTAVgiABQghgBgTgVgAggglQgLAOAAAXQAAAYALAPQAMAPAUAAQAVAAALgPQAMgPAAgYQAAgXgMgOQgLgQgVAAQgUAAgMAQg");
	this.shape_5.setTransform(-10.2,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBKQgNgBAAgNIAAh2QAAgNANgCQAPgDAUAAQA2AAAAApQAAAJgGAJQgFAJgJAEQAMAEAIAIQAHAJAAANQAAAug7ABQgWAAgPgDgAgcA1QAKACAPAAQAOAAAJgFQAIgGAAgNQAAgYgfABIgZAAgAgcg1IAAArIAWAAQAbAAAAgXQAAgVgdABIgUAAg");
	this.shape_6.setTransform(-25,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0A4QgTgWAAgiQAAghATgVQATgXAhAAQAiAAATAXQATAVAAAhQAAAigTAWQgTAVgiABQghgBgTgVgAggglQgLAOAAAXQAAAYALAPQAMAPAUAAQAVAAALgPQAMgPAAgYQAAgXgMgOQgLgQgVAAQgUAAgMAQg");
	this.shape_7.setTransform(-40.4,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA0BYQgDgEAAgGIAAgTIhhAAIAAATQAAAGgDAEQgDADgGAAQgGAAgDgDQgDgEAAgGIAAgdQAAgGADgEQADgDAFAAIAHAAQAOgbAChWQAAgNANAAIBCAAQAGAAAEADQADAEAAAGIAABxIAHAAQAGAAADADQADAEAAAGIAAAdQAAAGgDAEQgDADgGAAQgGAAgDgDgAgcAkIA3AAIAAhnIgoAAQgBBEgOAjg");
	this.shape_8.setTransform(-56.8,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-14.6,133,29.2);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BKQgMgEAAgMIAAh3QAAgHADgDQAEgEAFAAQAHAAADAEQAEADAAAHIAAAqQAIgBALAAQAbAAANALQANAKAAAaQABAYgQANQgMAMgaAAQgVAAgMgCgAguADIAAAwIASABQAcAAAAgZQAAgOgHgGQgIgGgOABIgRABgAAzBHQgEgDAAgHIAAh6QAAgGAEgEQADgEAGAAQAHAAADAEQAEAEgBAGIAAB6QABAHgEADQgDAEgHAAQgGAAgDgEg");
	this.shape.setTransform(17.2,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBKQgNgBAAgNIAAh2QAAgNANgCQAPgDAUAAQA2AAAAApQAAAJgGAJQgFAJgJAEQAMAEAIAIQAHAJAAANQAAAug7ABQgWAAgPgDgAgcA1QAKACAPAAQAOAAAJgFQAIgGAAgNQAAgYgfABIgZAAgAgcg1IAAArIAWAAQAbAAAAgXQAAgVgdABIgUAAg");
	this.shape_1.setTransform(1.6,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBIQgDgEAAgGIAAhaIhGBgQgGAIgGgBQgGAAgDgDQgEgEAAgGIAAh7QAAgFAEgFQADgDAGAAQAHAAADADQAEAFAAAFIAABaIBFhgQAFgIAIABQAMAAAAANIAAB7QAAAGgDAEQgEADgGAAQgHAAgDgDg");
	this.shape_2.setTransform(-18.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-14.6,56.9,29.2);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFzAiQgNgOAAgUQAAgSANgPQAPgNATAAQASAAAQALIACAEQAAAGgGgBIgDgBQgMgKgPAAQgPAAgLALQgKALAAAPQAAAPAKAMQALALAPgBQAQABAMgLIADgCQAGAAgBAFQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgQANgTAAQgUAAgOgNgAigAiQgNgPAAgTQAAgSANgPQAOgNAUAAQAWAAANANQAMAPAAASQAAATgNAPQgNANgVAAQgUAAgOgNgAiYgaQgKALAAAPQAAAPAKAMQAKALAQgBQAPABALgLQALgMAAgPQAAgPgLgLQgLgLgPAAQgQAAgKALgAFLAuQgDABgDgEIg5hIIAABHQAAAEgFAAQgGAAABgEIAAhSQgBgFAGAAIABAAQAEAAACACIA4BGIAAhEQAAgFAGAAQAEAAAAAFIAABTQAAAEgEAAgADjArIgJgWIg0AAIgKAWQgBAEgDgBQgFABAAgFIAAgDIAnhRQABgEAFAAIAAAAQAFAAACAEIAnBUQAAAEgFAAQgEABgCgEgACrAMIArAAIgWgugAB1AqIAAhEIgeAqQgDACgCAAQgBAAgDgCIgegqIAABEQAAAEgFAAQgFAAgBgEIAAhSQABgFAFAAIACAAQACAAACACIAhAwIAigwQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAIACAAQAFAAAAAFIAABSQAAAEgFAAQgFAAAAgEgAAFAsIgXgjIgcAAIAAAhQAAAEgFAAQgGAAAAgEIAAhSQAAgFAGAAIAjAAQAQAAAIAKQAIAHAAALQAAAVgXAEIAVAdIACAFQgBAEgFAAQgCAAgDgCgAguAAIAdAAQAWAAAAgRQAAgSgWAAIgdAAgAj/AqIAAhSQAAgFAGAAIA5AAQAFAAAAAFQAAAEgFABIg0AAIAAAhIAvAAQAEgBAAAEQAAAEgEAAIgvAAIAAAlQAAAEgFAAQgGAAAAgEgAkfAsIgagjIgbAAIAAAhQAAAEgFAAQgGAAABgEIAAhSQgBgFAGAAIAiAAQARAAAKAKQAHAHAAALQAAAVgZAEIAYAdQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQABAEgHAAQgDAAgBgCgAlUAAIAdAAQAXAAABgRQgBgSgXAAIgdAAgAoRAqIAAhSQABgFAFAAIAeAAQAPAAAKAIQAJAIAAANQAAAPgKAHQgLAIgPAAIgXAAIAAAcQAAAEgFAAQgFAAgBgEgAoGADIAXAAQAMABAHgEQAHgGAAgJQAAgVgZABIgYAAgAHSAuQgFAAAAgFIAAhRQAAgFAFAAIA5AAQAGAAAAAFQAAAEgGABIg0AAIAAAfIAuAAQAGAAAAAEQAAADgGAAIguAAIAAAhIA1AAQAGAAAAAGQAAAEgGAAgAmzAuQgEAAAAgFIAAhRQAAgFAEAAIA7AAQAFAAgBAFQABAEgFABIg2AAIAAAfIAvAAQAFAAABAEQgBADgFAAIgvAAIAAAhIA2AAQAFAAAAAGQAAAEgFAAg");
	this.shape.setTransform(53,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.8,106,9.6);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8446AD").s().p("AEmBNQgEgDgDgGIgKgZIhFAAIgMAaQgBAFgFADQgGADgDAAQgHAAgFgFQgEgEAAgHIAAgEIA5h9QADgHAFgEQAGgDAGAAIACAAQAHAAAGADQAEAEAEAHIA2B6IACAHQAAAHgEAFQgGAEgHAAQgGAAgEgDgADdANIAsAAIgXgygABnBLQgGgFAAgHIAAhsIggAAQgHAAgFgFQgEgEAAgHQAAgGAEgGQAFgEAHAAIBmAAQAGAAAEAFQAFAEAAAHQAAAHgFAEQgGAFgFAAIgiAAIAABsQAAAHgEAFQgGAFgIAAQgGAAgFgFgAFtBPQgIAAgDgFQgGgFAAgHIAAh6QAAgIAGgFQAEgFAIAAQAHAAAGAFQAEAGAAAHIAABsIBAAAQAHAAAEAEQAEAFABAGQgBAHgEAFQgEAFgHAAgAAEBQQgEAAgDgDIgIgIIhGhZIAABTQAAAGgEAFQgGAGgHAAQgIAAgEgGQgFgEAAgHIABh8QAAgHAEgGQAFgFAHAAIAFAAQAEAAAFADIAIAIIBDBWIAAhQQAAgHAGgFQADgFAGAAQAHAAAGAFQAEAFAAAHIAAB8QAAAHgFAFQgFAGgIAAgAlOBKQgEgFAAgHIAAhNIgfAtIgGAGQgDACgFAAQgEAAgEgCQgEgCgDgFIgdgrIAABMQgBAHgEAFQgFAFgHAAQgIAAgEgFQgGgFAAgHIAAh8QAAgGAGgGQAFgFAHAAIAEAAQAGAAADADIAGAFIArBFIAphFQAGgIAKAAIAEAAQAHAAAGAFQAEAGABAGIgBB8QAAAHgFAFQgFAFgHAAQgHAAgGgFgAj5BOQgGAAgGgFQgFgFAAgIIAAh5QAAgHAFgFQAGgFAHAAIBXAAQAGAAAFAEQAEAFAAAHQAAAGgEAFQgFAEgGAAIhGAAIgBAgIA8AAQAIAAAEAEQAEAGAAAFQAAAFgEAEQgEAFgIAAIg8AAIAAAhIBIAAQAGAAAFAEQAFAFgBAHQABAGgFAFQgFAEgGAAg");
	this.shape.setTransform(46.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.1,92.6,16.2);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.denis2();
	this.instance.setTransform(-114,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-103,228,207);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYAtQgCgCAAgEIAAg4IgsA8QgEAFgEAAQgDAAgDgDQgCgCAAgEIAAhNQAAgEACgCQADgDAEAAQAEAAACADQADACgBAEIAAA4IArg8QAEgFAFAAQAIAAAAAJIAABNQAAAEgCACQgCADgEAAQgFAAgCgDg");
	this.shape.setTransform(48.7,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAtQgCgCAAgEIAAhHIgZAAQgDAAgCgCQgDgCAAgDQAAgEADgCQACgCADAAIBBAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIgZAAIAABHQAAAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_1.setTransform(39.5,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAkQgLgOAAgWQAAgVALgOQAMgNAUAAQAQAAAJAGQAHAEgDAGQgDAGgIgDQgKgEgIAAQgLAAgHAJQgIAKAAAOQAAAQAIAJQAIAJAKAAQAKAAAKgGQAHgEAEAFQACACgBAEQgBADgEADQgLAIgRAAQgUAAgLgNg");
	this.shape_2.setTransform(31,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAjQgMgOAAgVQAAgUAMgOQALgOAVAAQAVAAAMAOQAMAOABAUQgBAVgMAOQgMAOgVAAQgVAAgLgOgAgUgYQgHAKAAAOQAAAPAHAJQAIAKAMAAQANAAAHgKQAIgJAAgPQAAgOgIgKQgHgJgNAAQgMAAgIAJg");
	this.shape_3.setTransform(21.3,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYAtQgCgCAAgEIAAghIgqAAIAAAhQgBAEgCACQgCADgEAAQgEAAgDgDQgBgCgBgEIAAhNQABgEABgCQADgDAEAAQAEAAACADQACACABAEIAAAfIAqAAIAAgfQAAgEACgCQACgDAFAAQADAAACADQADACAAAEIAABNQAAAEgDACQgCADgDAAQgFAAgCgDg");
	this.shape_4.setTransform(11.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAuQgIgBAAgIIAAhMQAAgDACgCQADgDAEAAQAEAAACADQACACAAADIAAAcIANgBQAQAAAJAHQAKAFAAARQAAAQgKAHQgKAIgPAAQgOAAgIgCgAgPABIAAAfIAMABQASAAAAgQQAAgKgFgDQgGgDgIAAIgLAAg");
	this.shape_5.setTransform(2.4,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAtQgDgDABgFQACgFAGAAQAGABADgKQAFgRABgtQAAgEACgCQACgCAEAAIAoAAQAEAAACADQACACAAADIAABOQAAADgCADQgCADgEgBQgEABgCgDQgDgDAAgDIAAhHIgYAAQAAAmgGAVQgDAJgFAGQgGAGgHAAQgGAAgDgDg");
	this.shape_6.setTransform(-7,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAwQgEAAgDgDQgCgCAAgEIAAhNQAAgEACgCQADgDAEAAIAtAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIglAAIAAAZIAdAAQAEAAACACQACACAAADQAAABgCADQgCACgEAAIgdAAIAAAbIAmAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAg");
	this.shape_7.setTransform(-14.3,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAtQgCgCAAgEIAAhHIgZAAQgDAAgCgCQgDgCAAgDQAAgEADgCQACgCADAAIBBAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIgZAAIAABHQAAAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_8.setTransform(-22.9,8.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAvQgDgCAAgDQgBgEADgEIAQgZQgRgGAAgSQAAgQAKgIQAKgIARAAQALAAAHACQAIACAAAIIAABLQAAADgDADQgCACgEAAQgEAAgCgCQgCgDAAgDIAAgcIgIABIgHgBIgPAeQgDAEgDACIgEAAIgEgBgAgHgcQgFAEAAAJQAAAPATAAIAJAAIAAggIgKAAQgIAAgFAEg");
	this.shape_9.setTransform(-31.4,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAwQgFAAgCgDQgCgCAAgEIAAhNQAAgEACgCQACgDAFAAIAtAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIglAAIAAAZIAdAAQAEAAACACQACACAAADQAAABgCADQgCACgEAAIgdAAIAAAbIAmAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAg");
	this.shape_10.setTransform(-39.2,8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAhA3QgCgCAAgEIAAgMIg9AAIAAAMQAAAEgCACQgCADgDAAQgFAAgBgDQgCgCAAgEIAAgSQAAgEACgCQACgDADAAIAEAAQAJgRABg2QABgIAHAAIAqAAQAEAAACADQACACAAADIAABHIAFAAQAEAAACADQABACAAAEIAAASQAAAEgBACQgCADgEAAQgEAAgCgDgAgRAWIAjAAIAAhAIgZAAQgBAqgJAWg");
	this.shape_11.setTransform(-48.7,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYA6QgCgDAAgDIAAg5IgsA8QgEAFgDAAQgFAAgBgCQgCgCAAgEIAAhOQAAgDACgDQACgCAEAAQAEAAACACQADADAAADIAAA5IArg9QADgEAEAAQAIAAAAAIIAABOQAAADgCADQgBACgFAAQgEAAgCgCgAgNgrQgGgDgCgDQgEgGAEgDQAEgEAFAFQAFAGAHAAQAGAAAGgFQAFgFAEADQAEADgEAGQgDADgGADQgFADgHAAQgGAAgHgDg");
	this.shape_12.setTransform(85.5,-10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghAjQgLgOgBgVQABgUALgOQAMgOAVAAQAVAAANAOQALAOAAAUQAAAVgLAOQgNAOgVAAQgVAAgMgOgAgTgYQgIAKAAAOQAAAPAIAJQAGAKANAAQANAAAIgKQAGgJAAgPQAAgOgGgKQgIgJgNAAQgNAAgGAJg");
	this.shape_13.setTransform(75.4,-9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYAtQgCgCAAgEIAAghIgrAAIAAAhQAAAEgCACQgCADgEAAQgEAAgCgDQgCgCAAgEIAAhNQAAgEACgCQACgDAEAAQAEAAACADQACACAAAEIAAAfIArAAIAAgfQAAgEACgCQACgDAEAAQAEAAACADQACACAAAEIAABNQAAAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_14.setTransform(65.2,-9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYAtQgCgCAAgEIAAghIgrAAIAAAhQAAAEgCACQgCADgEAAQgEAAgCgDQgCgCAAgEIAAhNQAAgEACgCQACgDAEAAQAEAAACADQACACAAAEIAAAfIArAAIAAgfQAAgEACgCQACgDAEAAQAEAAADADQABACAAAEIAABNQAAAEgBACQgDADgEAAQgEAAgCgDg");
	this.shape_15.setTransform(55.3,-9.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAwQgFAAgCgDQgCgCAAgEIAAhNQAAgEACgCQACgDAFAAIAtAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIglAAIAAAZIAdAAQAEAAACACQACACAAADQAAABgCADQgCACgEAAIgdAAIAAAbIAmAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAg");
	this.shape_16.setTransform(46.8,-9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAvQgIgBAAgIIAAhLQAAgHAIgCQAKgCANAAQAhABAAAZQAAAGgDAGQgEAFgGADQAIACAFAFQAFAGAAAIQAAAeglgBQgOABgKgCgAgSAiIARABQAIAAAFgEQAFgDAAgIQAAgPgTAAIgQAAgAgSggIAAAbIAPAAQAQgBAAgPQAAgNgSABIgNABg");
	this.shape_17.setTransform(38.3,-9.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAtQgCgCAAgEIAAhHIgZAAQgDAAgCgCQgDgCAAgDQAAgEADgCQACgCADAAIBBAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIgZAAIAABHQAAAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_18.setTransform(29.5,-9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAkQgLgOAAgWQAAgVALgOQAMgNAUAAQAQAAAJAGQAHAEgDAGQgDAGgIgDQgKgEgIAAQgLAAgHAJQgIAKAAAOQAAAQAIAJQAIAJAKAAQAKAAAKgGQAHgEAEAFQACACgBAEQgBADgEADQgLAIgRAAQgUAAgLgNg");
	this.shape_19.setTransform(21.1,-9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdAtQgBgCAAgEIAAg3IgVAfQgDAFgEAAQgEAAgCgFIgVgeIAAA2QAAAJgIAAQgIAAAAgJIAAhNQAAgFACgCQADgCADAAQAFAAAEAGIAaArIAcgsQAEgFAFAAQADAAACADQACACAAAEIAABNQAAAEgCACQgCADgEAAQgEAAgDgDg");
	this.shape_20.setTransform(11.1,-9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAuQgHgEACgHQACgGAHACIADABIADABIADABQADAAADgDQACgDACgGIggg2QgDgEAAgEQABgEADgCQAEgCADABQADACADAEIAYAvIAUguQAEgJAHACQAHADgEAJIgYA2QgGAQgGAHQgEAHgJAAQgJAAgFgDg");
	this.shape_21.setTransform(1.5,-9.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkAwQgGgDADgJIAghNQACgHAFAAQAFAAACAGIAhBOQABADgBAEQAAADgEACQgEABgDgCQgDgBgCgEIgHgVIgiAAIgIAUQgCAIgGAAIgDgBgAAMAIIgMghIgNAhIAZAAg");
	this.shape_22.setTransform(-9.9,-9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASArIgignIAAAjQAAAEgCACQgCADgEAAQgEAAgDgDQgCgCAAgEIAAhNQAAgEACgCQADgDAEAAQAEAAACADQACACAAAEIAAAjIAggnQAHgIAGAFQADADgBADQAAAEgDADIgcAgIAeAgQADADABAEQAAADgCADQgDADgDAAQgEAAgEgFg");
	this.shape_23.setTransform(-18,-9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAxAwQgEgBgDgDIgjgqIAAAlQAAAEgCACQgCADgDAAQgGAAAAgJIAAglIgjApQgHAIgGgGQgDgDABgDQAAgDADgDIAfghIgcghQgCgCgBgEQAAgDACgDQADgDAEABQAEABADAEIAfAoIAAgkQAAgEACgCQACgDACAAQADAAACADQACACAAAEIAAAkIAggoQAGgIAGAFQAFAFgFAHIgcAhIAfAhQADADAAADQABAEgDACQgCADgDAAIgBAAg");
	this.shape_24.setTransform(-28.3,-9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeAuQgCgDAAgDIAAhLQAAgJAIgBQAJgCANAAQAPAAAKAHQAKAIAAAQQAAAQgLAGQgKAJgPAAIgMgBIAAAaQAAADgCADQgCACgEAAQgEAAgDgCgAgPggIAAAgIALAAQATAAAAgQQAAgQgSAAIgMAAg");
	this.shape_25.setTransform(-38,-9.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAwQgDAAgCgDQgDgCAAgEIAAhNQAAgEACgCQACgDAEAAIAuAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAIglAAIAAAZIAdAAQAEAAACACQACACAAADQAAABgCADQgCACgEAAIgdAAIAAAbIAmAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAg");
	this.shape_26.setTransform(-45.9,-9.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAhA4QgCgDAAgDIAAgMIg9AAIAAAMQAAADgBADQgDACgEAAQgDAAgDgCQgCgDAAgDIAAgTQAAgEACgCQADgDADABIAEAAQAKgSABg1QAAgJAIAAIApAAQAEAAACACQACADAAAEIAABHIAFAAQAEgBABADQADACAAAEIAAATQAAADgDADQgBACgEAAQgEAAgCgCgAgRAXIAiAAIAAhBIgZAAQAAAqgJAXg");
	this.shape_27.setTransform(-55.4,-8.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAhA4QgCgDAAgDIAAgMIg8AAIAAAMQAAADgCADQgDACgDAAQgEAAgDgCQgCgDAAgDIAAgTQAAgEACgCQACgDAEABIAEAAQAJgSABg1QABgJAHAAIAqAAQAEAAACACQACADAAAEIAABHIAFAAQAEgBABADQACACAAAEIAAATQAAADgCADQgBACgEAAQgEAAgCgCgAgRAXIAiAAIAAhBIgZAAQgBAqgIAXg");
	this.shape_28.setTransform(-65.5,-8.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AghAjQgMgOABgVQgBgUAMgOQAMgOAVAAQAVAAANAOQAMAOgBAUQABAVgMAOQgNAOgVAAQgVAAgMgOgAgTgYQgIAKAAAOQAAAPAIAJQAGAKANAAQANAAAHgKQAIgJgBgPQABgOgIgKQgHgJgNAAQgNAAgGAJg");
	this.shape_29.setTransform(-75.6,-9.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAXAtQgCgCAAgEIAAhHIgoAAIAABHQAAAEgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIAAhNQAAgEACgCQACgDAEAAIA5AAQAEAAACADQACACAAAEIAABNQAAAEgCACQgCADgEAAQgFAAgBgDg");
	this.shape_30.setTransform(-85.6,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-19,185.1,38.1);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.denis();
	this.instance.setTransform(-51,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-158,103,316);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8446AD").s().p("AvmEXIAAotIfNAAIAAItg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-28,200,56);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape.setTransform(28.8,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_1.setTransform(21.8,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAIgJAOAAQAMAAAGAEQAGADgDAGQgCAFgHgCQgHgCgFAAQgGAAgEAGQgFAGAAAIQAAAKAFAFQAFAGAFAAQAGAAAIgEQAHgDACAFQAEAFgGAFQgJAGgNAAQgNAAgJgJg");
	this.shape_2.setTransform(15.7,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAZQgIgKAAgPQAAgOAIgKQAKgKAOAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgOAAgKgKgAgMgPQgEAHAAAIQAAAJAEAHQAFAGAHAAQAIAAAEgGQAFgHAAgJQAAgIgFgHQgEgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(8.5,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgVIgbAAIAAAVQAAADgCACQgCADgDAAQgEAAgDgDQgCgCAAgDIAAgzQAAgDACgDQADgCAEAAQADAAACACQACADAAADIAAASIAbAAIAAgSQAAgDACgDQACgCAEAAQADAAACACQADADAAADIAAAzQAAADgDACQgCADgDAAQgEAAgCgDg");
	this.shape_4.setTransform(0.8,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAnQgJgLABgUQAAgTAGgMQAHgLASgHIAPgGQAKgDABAGQACAGgHADIgHADIgKADQgKAFgEADQgJAHgBAMQAFgGAGgEQAHgDAFAAQAOAAAIAJQAHAHAAAPQABAOgKAKQgJAJgOAAQgPAAgIgKgAgLACQgEAFAAAJQAAAJAEAGQAFAFAGAAQAIAAAEgFQAFgGgBgJQABgJgFgFQgEgEgIAAQgGAAgFAEg");
	this.shape_5.setTransform(-6.9,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAZQgJgKAAgPQAAgOAJgKQAIgKAPAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgPAAgIgKgAgLgPQgFAHAAAIQAAAJAFAHQAEAGAHAAQAIAAAFgGQADgHAAgJQAAgIgDgHQgFgGgIAAQgHAAgEAGg");
	this.shape_6.setTransform(-14.5,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAIgJAOAAQAMAAAGAEQAGADgDAGQgCAFgHgCQgHgCgFAAQgGAAgEAGQgFAGAAAIQAAAKAFAFQAFAGAFAAQAGAAAIgEQAHgDACAFQAEAFgGAFQgJAGgNAAQgNAAgJgJg");
	this.shape_7.setTransform(-21.5,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAZQgIgKAAgPQAAgOAIgKQAKgKAOAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgOAAgKgKgAgLgPQgFAHAAAIQAAAJAFAHQAEAGAHAAQAIAAAFgGQADgHAAgJQAAgIgDgHQgFgGgIAAQgHAAgEAGg");
	this.shape_8.setTransform(-28.7,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPAfQgCgCAAgDIAAgtIgZAAIAAAtQAAADgCACQgCADgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgCQACgDAEAAIApAAQAEAAACADQACACAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_9.setTransform(-36.3,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAIgJAOAAQAMAAAGAEQAGADgDAGQgCAFgHgCQgHgCgFAAQgGAAgEAGQgFAGAAAIQAAAKAFAFQAFAGAFAAQAGAAAIgEQAHgDACAFQAEAFgGAFQgJAGgNAAQgNAAgJgJg");
	this.shape_10.setTransform(-43.2,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAaQgIgJAAgRQAAgPAIgJQAKgKANAAQANAAAHAHQAIAIAAANIAAAGQgBACgDACQgCABgDAAIgiAAQAAAIAFAFQAFAEAGAAQAGAAAIgDQAHgDACAFQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgDACQgHAFgOAAQgPAAgIgJgAgJgRQgDAFgBAIIAcAAIAAgDQABgHgEgEQgEgEgGAAQgGAAgFAFg");
	this.shape_11.setTransform(23.4,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAhQgHgCAAgHIAAgxQAAgEACgCQADgCADAAQAEAAACACQACACAAAEIAAAPIALgBQAYAAAAAWQAAAFgCAEQgCAEgDADIgHAEIgHACIgJABIgOgBgAgUAAIAAAVIAHAAQANAAAAgLQAAgFgCgDQgDgCgHAAIgIAAgAAXAfQgCgCAAgEIAAgyQAAgEACgCQACgCAEAAQAEAAACACQACACAAAEIAAAyQAAAEgCACQgCADgEgBQgEABgCgDg");
	this.shape_12.setTransform(15.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgVIgbAAIAAAVQAAADgCACQgCADgEAAQgDAAgDgDQgCgCAAgDIAAgzQAAgDACgDQADgCADAAQAEAAACACQACADAAADIAAASIAbAAIAAgSQAAgDACgDQACgCADAAQAFAAACACQACADAAADIAAAzQAAADgCACQgCADgFAAQgDAAgCgDg");
	this.shape_13.setTransform(6.8,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgVIgbAAIAAAVQAAADgCACQgCADgDAAQgFAAgBgDQgCgCAAgDIAAgzQAAgDACgDQABgCAFAAQADAAACACQACADAAADIAAASIAbAAIAAgSQAAgDACgDQACgCADAAQAFAAABACQACADAAADIAAAzQAAADgCACQgBADgFAAQgDAAgCgDg");
	this.shape_14.setTransform(-0.9,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAaQgIgJAAgRQAAgPAIgJQAKgKAMAAQAOAAAHAHQAIAIAAANIgBAGQgBACgBACQgDABgEAAIgiAAQABAIAFAFQAFAEAGAAQAGAAAJgDQAGgDADAFQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgDACQgHAFgPAAQgNAAgJgJgAgIgRQgFAFgBAIIAeAAIAAgDQAAgHgEgEQgEgEgHAAQgFAAgEAFg");
	this.shape_15.setTransform(-8.3,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAhQgHgBAAgHIAAgwQAAgIAHgBIASgBQANAAAHAFQAGAFAAAIQAAAFgCAEQgDAEgFACQAHAAADADQAEAEAAAGQAAAVgdAAIgTgBgAgMAVIAMABQAMAAAAgJQAAgJgMAAIgMAAgAgMgUIAAAQIAKAAQALAAAAgIQAAgJgLAAIgKABg");
	this.shape_16.setTransform(-15.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_17.setTransform(-22,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAIgJAOAAQAMAAAGAEQAGADgDAGQgCAFgHgCQgHgCgFAAQgGAAgEAGQgFAGAAAIQAAAKAFAFQAFAGAFAAQAGAAAIgEQAHgDACAFQAEAFgGAFQgJAGgNAAQgNAAgJgJg");
	this.shape_18.setTransform(-28.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAVAfQgCgCAAgDIAAghIgLANQgFAGgDAAQgEAAgFgGIgKgMIAAAgQAAAIgHAAQgHAAAAgIIAAgzQAAgIAHAAQAFAAADAFIASAbIATgbQADgFAFAAQAHAAAAAIIAAAzQAAADgCACQgCADgEAAQgEAAgBgDg");
	this.shape_19.setTransform(-35.8,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAuQgIgEADgGQACgEAGACIAIABQAEAAADgEQADgEADgIIgYg2QgBgDABgEQAAgDAEgCQAIgDADAJIAOAqIAPgpQADgJAHACQAGACgDAJIgWA4QgGAQgDAHQgGAGgJAAQgHAAgEgDg");
	this.shape_20.setTransform(-43.3,2.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_21.setTransform(40,-15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAaQgIgJAAgRQAAgPAIgJQAKgKANAAQANAAAHAHQAIAIAAANIAAAGQgBACgCACQgDABgDAAIgiAAQAAAIAFAFQAEAEAHAAQAGAAAJgDQAFgDAEAFQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgDACQgHAFgOAAQgOAAgJgJgAgJgRQgEAFAAAIIAcAAIAAgDQABgHgEgEQgEgEgGAAQgGAAgFAFg");
	this.shape_22.setTransform(33.4,-15.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAeQgHgGAAgJQABgMAIgEQAJgFALAAIAOABIAAgCQAAgHgCgDQgEgEgIAAIgCAAIgDABIgDAAIgDABIgDABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgCgFAFgDQAIgFANAAQAcAAAAAaIAAAiQAAADgDACQgBADgEAAQgEAAgCgDQgCgCAAgDIAAgDQgHAMgNAAQgLAAgFgFgAgNANQAAAFADACQADADAFAAQAHAAAEgGQAGgFgBgHIAAgDIgMAAQgPAAAAALg");
	this.shape_23.setTransform(26,-15.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTAhQgIgBAAgHIAAgwQAAgIAHgBIATgBQAMAAAGAFQAIAFAAAIQgBAFgCAEQgCAEgFACQAFAAAFADQADAEAAAGQAAAVgdAAIgSgBgAgLAVIALABQAMAAAAgJQAAgJgMAAIgLAAgAgLgUIAAAQIAKAAQAKAAAAgIQAAgJgKAAIgKABg");
	this.shape_24.setTransform(19.4,-15.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_25.setTransform(11.8,-15.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgpAfQgCgCAAgDQABgDADgDIAUgUIgTgUQgFgGAFgFQACgCADAAQADABADADIAWAbIAAgXQAAgIAFAAQAHAAgBAIIAAAXIAWgbQADgDADAAQADgBACACQAFAFgFAGIgTAUIAVAUQACADAAADQABADgCACQgDADgDAAQgDgBgCgDIgZgbIAAAXQABAIgHAAQgFAAAAgIIAAgXIgYAbQgDADgDABIgBAAQgDAAgCgDg");
	this.shape_26.setTransform(3.5,-15.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAuQgCgCAAgDIAAhPQAAgEACgCQACgCAEAAQAEAAACACQACACAAAEIAAABQAGgKAMAAQANgBAHAKQAHAJAAAPQAAAPgIALQgIAKgPAAQgHAAgHgCIAAAVQAAADgCACQgCACgEABQgEgBgCgCgAgOgDIAAAIQAGADAIAAQAPAAAAgWQAAgUgOAAQgPAAAAAfg");
	this.shape_27.setTransform(-4.7,-14.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAaQgIgJAAgRQAAgPAIgJQAKgKAMAAQAOAAAHAHQAIAIAAANIgBAGQgBACgBACQgCABgFAAIgiAAQABAIAFAFQAFAEAGAAQAGAAAJgDQAFgDAEAFQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgCACQgJAFgOAAQgNAAgJgJgAgIgRQgFAFgBAIIAeAAIAAgDQAAgHgEgEQgDgEgIAAQgFAAgEAFg");
	this.shape_28.setTransform(-12.2,-15.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZAnQgBgCAAgDIAAgIIgvAAIAAAIQAAADgBACQgCADgDAAQgHAAAAgIIAAgOQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQABAAABAAIABAAIACgCIACgDIABgGIABgFIABgGIABgIIABgHIAAgFIAAgEQAAgIAIAAIAdAAQAEAAADACQABACAAAEIAAAuIAEAAQADAAACACQACACAAADIAAAOQAAAIgHAAQgDAAgCgDgAgLANIAWAAIAAgoIgRAAQgBAbgEANg");
	this.shape_29.setTransform(-19.8,-15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAZAnQgBgCAAgDIAAgIIgvAAIAAAIQABADgCACQgCADgDAAQgHAAAAgIIAAgOQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAIACAAIACgCIACgDIABgGIABgFIABgGIABgIIABgHIAAgFIAAgEQAAgIAIAAIAdAAQAFAAACACQACACAAAEIAAAuIADAAQADAAACACQACACAAADIAAAOQAAAIgHAAQgDAAgCgDgAgMANIAXAAIAAgoIgRAAQAAAbgGANg");
	this.shape_30.setTransform(-27.5,-15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAZQgJgKAAgPQAAgOAJgKQAIgKAPAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgPAAgIgKgAgMgPQgEAHAAAIQAAAJAEAHQAFAGAHAAQAIAAAFgGQADgHAAgJQAAgIgDgHQgFgGgIAAQgHAAgFAGg");
	this.shape_31.setTransform(-35.1,-15.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPAfQgCgCAAgDIAAgtIgZAAIAAAtQAAADgCACQgCADgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgCQACgDAEAAIApAAQAEAAACADQACACAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_32.setTransform(-42.8,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-27,97.2,54.2);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAfQgCgCAAgDIAAgzQAAgDACgDQACgCADAAQAEAAACACQACADAAADIAAAXIAWgbQAGgHAGAFQACACAAADQgBADgCADIgUAUIAWAUQADADAAADQAAADgCACQgFAGgHgHIgYgaIAAAWQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(4.6,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgIgKAAgPQAAgOAIgKQAKgKAOAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgOAAgKgKgAgMgPQgEAHAAAIQAAAJAEAHQAFAGAHAAQAIAAAEgGQAFgHAAgJQAAgIgFgHQgEgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(-2.9,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAfQgFgEACgFQACgFAGACQAKADAGAAQALAAAAgJQAAgJgMAAIgGAAQgHAAAAgEQAAgFAHAAIAFAAQALAAAAgIQAAgIgJAAQgFAAgIADQgHADgCgFQgDgFAGgEQAJgFALAAQALAAAHAFQAGAFAAAIQAAAGgDAEQgDAEgFACQAGAAADADQADAEAAAHQAAAJgGAGQgHAGgNAAQgNAAgIgEg");
	this.shape_2.setTransform(-9.8,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAuQgIgEADgGQACgEAGACIAIABQAEAAADgEQADgEADgIIgYg2QgBgDABgEQAAgDAEgCQAIgDADAJIAOAqIAPgpQADgJAHACQAGACgDAJIgWA4QgGAQgDAHQgGAGgJAAQgHAAgEgDg");
	this.shape_3.setTransform(-16.3,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAuQgCgCAAgDIAAhPQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAABQAGgKAMAAQANgBAHAKQAHAJAAAPQAAAPgIALQgIAKgPAAQgHAAgHgDIAAAWQAAADgCACQgCADgEAAQgEAAgCgDgAgOgDIAAAJQAGACAIAAQAPABAAgXQAAgUgOAAQgPAAAAAfg");
	this.shape_4.setTransform(-23.2,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAfQgCgCAAgDIAAgzQAAgDACgCQACgDAEAAIAdAAQAIAAAAAHQAAAHgIAAIgVAAIAAAtQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_5.setTransform(-29.4,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAeQgFgGAAgJQgBgMAJgEQAJgFALAAIAPABIAAgCQAAgHgEgDQgDgEgIAAIgBAAIgEABIgDAAIgDABIgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgBgFAFgDQAIgFANAAQAbAAAAAaIAAAiQAAADgCACQgCADgDAAQgEAAgBgDQgCgCAAgDIAAgDQgIAMgNAAQgKAAgHgFgAgNANQAAAFADACQADADAFAAQAHAAAEgGQAFgFABgHIAAgDIgNAAQgPAAAAALg");
	this.shape_6.setTransform(-36.4,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgVIgbAAIAAAVQAAADgCACQgCADgEAAQgDAAgCgDQgDgCAAgDIAAgzQAAgDADgDQACgCADAAQAEAAACACQACADAAADIAAASIAbAAIAAgSQAAgDACgDQACgCADAAQAEAAADACQABADAAADIAAAzQAAADgBACQgDADgEAAQgDAAgCgDg");
	this.shape_7.setTransform(-43.5,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAhQgHgCAAgHIAAgxQAAgEADgCQACgCADAAQAEAAACACQACACAAAEIAAAPIAKgBQAMABAIAFQAGAFAAALQAAAXgeAAIgPgBgAgKAAIAAAVIAIAAQANAAAAgLQgBgFgDgDQgDgCgFAAIgJAAg");
	this.shape_8.setTransform(44,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_9.setTransform(37.3,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAIgJAOAAQAMAAAGAEQAGADgDAGQgCAFgHgCQgHgCgFAAQgGAAgEAGQgFAGAAAIQAAAKAFAFQAFAGAFAAQAGAAAIgEQAHgDACAFQAEAFgGAFQgJAGgNAAQgNAAgJgJg");
	this.shape_10.setTransform(31.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAZQgIgKAAgPQAAgOAIgKQAKgKAOAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgOAAgKgKgAgLgPQgFAHAAAIQAAAJAFAHQAEAGAHAAQAIAAAFgGQADgHAAgJQAAgIgDgHQgFgGgIAAQgHAAgEAGg");
	this.shape_11.setTransform(24,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAfQgCgCAAgDIAAghIgLANQgFAGgDAAQgEAAgFgGIgKgMIAAAgQAAAIgHAAQgHAAAAgIIAAgzQAAgIAHAAQAFAAADAFIASAbIATgbQADgFAFAAQAHAAAAAIIAAAzQAAADgCACQgCADgEAAQgEAAgBgDg");
	this.shape_12.setTransform(15.9,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_13.setTransform(7.7,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAIgJAOAAQAMAAAGAEQAGADgDAGQgCAFgHgCQgHgCgFAAQgGAAgEAGQgFAGAAAIQAAAKAFAFQAFAGAFAAQAGAAAIgEQAHgDACAFQAEAFgGAFQgJAGgNAAQgNAAgJgJg");
	this.shape_14.setTransform(0.8,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAZQgJgKAAgPQAAgOAJgKQAIgKAPAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgPAAgIgKgAgLgPQgFAHAAAIQAAAJAFAHQAEAGAHAAQAIAAAFgGQADgHAAgJQAAgIgDgHQgFgGgIAAQgHAAgEAGg");
	this.shape_15.setTransform(-6.4,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgVIgbAAIAAAVQAAADgCACQgCADgEAAQgDAAgCgDQgCgCgBgDIAAgzQABgDACgDQACgCADAAQAEAAACACQACADAAADIAAASIAbAAIAAgSQAAgDACgDQACgCADAAQAFAAACACQABADAAADIAAAzQAAADgBACQgCADgFAAQgDAAgCgDg");
	this.shape_16.setTransform(-14.1,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAaQgIgJAAgRQAAgPAIgJQAKgKANAAQANAAAHAHQAIAIAAANIAAAGQgBACgCACQgDABgDAAIgiAAQAAAIAFAFQAEAEAHAAQAGAAAJgDQAFgDAEAFQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgDACQgHAFgOAAQgOAAgJgJgAgJgRQgEAFAAAIIAcAAIAAgDQABgHgEgEQgEgEgGAAQgGAAgFAFg");
	this.shape_17.setTransform(-21.5,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAuQgCgCAAgEIAAhOQAAgEACgCQACgCAEAAQAEAAACACQACACAAAEIAAABQAGgLAMAAQANABAHAIQAHAKAAAPQAAAPgIAKQgIALgPAAQgHAAgHgCIAAAUQAAAEgCACQgCADgEgBQgEABgCgDgAgOgEIAAAJQAGAEAIAAQAPgBAAgWQAAgUgOAAQgPAAAAAeg");
	this.shape_18.setTransform(-28.7,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAaQgJgJAAgRQAAgPAJgJQAIgKANAAQAOAAAIAHQAHAIAAANIAAAGQgCACgCACQgCABgDAAIgiAAQAAAIAFAFQAEAEAHAAQAGAAAIgDQAHgDACAFQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgCACQgJAFgOAAQgOAAgHgJgAgJgRQgDAFgBAIIAcAAIAAgDQAAgHgDgEQgDgEgIAAQgFAAgFAFg");
	this.shape_19.setTransform(-36.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAfQgCgCAAgDIAAgtIgZAAIAAAtQAAADgCACQgCADgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgCQACgDAEAAIApAAQAEAAACADQACACAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_20.setTransform(-43.6,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_21.setTransform(11.8,-15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAaQgJgJAAgRQAAgPAJgJQAIgKANAAQAOAAAIAHQAHAIAAANIAAAGQgCACgCACQgCABgDAAIgiAAQAAAIAFAFQAEAEAHAAQAGAAAIgDQAHgDACAFQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgCACQgJAFgOAAQgOAAgHgJgAgJgRQgDAFgBAIIAdAAIAAgDQgBgHgDgEQgDgEgIAAQgFAAgFAFg");
	this.shape_22.setTransform(5.2,-15.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAeQgFgGAAgJQgBgMAJgEQAJgFALAAIAPABIAAgCQAAgHgEgDQgDgEgIAAIgBAAIgEABIgDAAIgDABIgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgBgFAFgDQAIgFANAAQAbAAAAAaIAAAiQAAADgCACQgCADgDAAQgEAAgBgDQgCgCAAgDIAAgDQgIAMgNAAQgKAAgHgFgAgNANQAAAFADACQADADAFAAQAHAAAEgGQAFgFABgHIAAgDIgNAAQgPAAAAALg");
	this.shape_23.setTransform(-2.2,-15.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiAiQgEAAgCgDQgCgCAAgEIAAgyQAAgDACgDQACgCAEAAQADAAACACQACADABADIAAAtIAUAAIAAgtQgBgDADgDQACgCACAAQADAAACACQACADAAADIAAAtIAVAAIAAgtQAAgDABgDQACgCAFAAQADAAACACQACADAAADIAAAyQAAAEgCACQgCADgEAAg");
	this.shape_24.setTransform(-10.6,-15.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAhQgHgCAAgHIAAgxQAAgEACgCQADgCADAAQAEAAACACQACACAAAEIAAAPIALAAQAYgBAAAVQAAAFgCAFQgCAEgDADIgHAEIgHADIgJAAIgOgBgAgUAAIAAAVIAHAAQANAAAAgLQAAgGgCgCQgDgCgHAAIgIAAgAAXAfQgCgCAAgDIAAgzQAAgEACgCQACgCAEAAQAEAAACACQACACAAAEIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_25.setTransform(-20.4,-15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAhQgHgBAAgHIAAgwQAAgIAHgBIASgBQANAAAGAFQAIAFgBAIQABAFgDAEQgDAEgFACQAHAAADADQAEAEAAAGQAAAVgdAAIgTgBgAgMAVIAMABQAMAAAAgJQAAgJgMAAIgMAAgAgMgUIAAAQIAKAAQALAAAAgIQAAgJgLAAIgKABg");
	this.shape_26.setTransform(-28.4,-15.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAZQgJgKAAgPQAAgOAJgKQAIgKAPAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgPAAgIgKgAgMgPQgEAHAAAIQAAAJAEAHQAFAGAHAAQAIAAAEgGQAEgHAAgJQAAgIgEgHQgEgGgIAAQgHAAgFAGg");
	this.shape_27.setTransform(-35.9,-15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPAfQgCgCAAgDIAAgtIgZAAIAAAtQAAADgCACQgCADgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgCQACgDAEAAIApAAQAEAAACADQACACAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_28.setTransform(-43.6,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-27,98.7,54.2);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape.setTransform(33.6,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAfQgCgCAAgDIAAghIgLANQgFAGgDAAQgEAAgFgGIgKgMIAAAgQAAAIgHAAQgHAAAAgIIAAgzQAAgIAHAAQAFAAADAFIASAbIATgbQADgFAFAAQAHAAAAAIIAAAzQAAADgCACQgCADgEAAQgEAAgBgDg");
	this.shape_1.setTransform(25.5,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAeQgHgGAAgJQABgMAIgEQAJgFALAAIAOABIAAgCQABgHgDgDQgEgEgIAAIgBAAIgEABIgDAAIgDABIgDABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgCgFAFgDQAIgFANAAQAcAAAAAaIAAAiQAAADgDACQgBADgEAAQgEAAgCgDQgBgCgBgDIAAgDQgHAMgNAAQgLAAgFgFgAgNANQAAAFADACQADADAFAAQAHAAAEgGQAGgFgBgHIAAgDIgMAAQgPAAAAALg");
	this.shape_2.setTransform(17.4,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgVIgbAAIAAAVQAAADgCACQgCADgDAAQgFAAgBgDQgCgCAAgDIAAgzQAAgDACgDQABgCAFAAQADAAACACQACADAAADIAAASIAbAAIAAgSQAAgDACgDQACgCADAAQAFAAABACQACADAAADIAAAzQAAADgCACQgBADgFAAQgDAAgCgDg");
	this.shape_3.setTransform(10.4,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_4.setTransform(2.6,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVAfQgCgCAAgDIAAghIgLANQgFAGgDAAQgEAAgFgGIgKgMIAAAgQAAAIgHAAQgHAAAAgIIAAgzQAAgIAHAAQAFAAADAFIASAbIATgbQADgFAFAAQAHAAAAAIIAAAzQAAADgCACQgCADgEAAQgEAAgBgDg");
	this.shape_5.setTransform(-5.5,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAeQgFgGAAgJQgBgMAJgEQAJgFALAAIAPABIAAgCQgBgHgDgDQgCgEgJAAIgBAAIgEABIgCAAIgEABIgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgBgFAFgDQAIgFANAAQAcAAgBAaIAAAiQAAADgCACQgCADgDAAQgEAAgBgDQgCgCAAgDIAAgDQgIAMgNAAQgKAAgHgFgAgNANQAAAFADACQADADAFAAQAHAAAEgGQAFgFABgHIAAgDIgNAAQgPAAAAALg");
	this.shape_6.setTransform(-13.6,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_7.setTransform(-19.9,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_8.setTransform(-26.8,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAhQgIgBAAgHIAAgwQAAgIAHgBIATgBQAMAAAGAFQAIAFAAAIQgBAFgCAEQgDAEgEACQAGAAAEADQADAEAAAGQAAAVgdAAIgSgBgAgLAVIALABQAMAAAAgJQAAgJgMAAIgLAAgAgLgUIAAAQIAKAAQAKAAAAgIQAAgJgKAAIgKABg");
	this.shape_9.setTransform(-34.1,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAfQgCgCAAgDIAAghIgLANQgFAGgDAAQgEAAgFgGIgKgMIAAAgQAAAIgHAAQgHAAAAgIIAAgzQAAgIAHAAQAFAAADAFIASAbIATgbQADgFAFAAQAHAAAAAIIAAAzQAAADgCACQgCADgEAAQgEAAgBgDg");
	this.shape_10.setTransform(16,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAfQgFgEACgFQACgFAGACQAKADAGAAQALAAAAgJQAAgJgMAAIgGAAQgHAAAAgEQAAgFAHAAIAFAAQALAAAAgIQAAgIgJAAQgFAAgIADQgHADgCgFQgDgFAGgEQAJgFALAAQALAAAHAFQAGAFAAAIQAAAGgDAEQgDAEgFACQAGAAADADQADAEAAAHQAAAJgGAGQgHAGgNAAQgNAAgIgEg");
	this.shape_11.setTransform(8.7,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_12.setTransform(1.6,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgVIgbAAIAAAVQAAADgCACQgCADgEAAQgDAAgCgDQgDgCAAgDIAAgzQAAgDADgDQACgCADAAQAEAAACACQACADAAADIAAASIAbAAIAAgSQAAgDACgDQACgCADAAQAEAAADACQABADAAADIAAAzQAAADgBACQgDADgEAAQgDAAgCgDg");
	this.shape_13.setTransform(-6.1,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAeQgFgGAAgJQAAgMAIgEQAJgFALAAIAPABIAAgCQAAgHgEgDQgDgEgIAAIgBAAIgEABIgDAAIgDABIgEABQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgBgFAFgDQAIgFANAAQAbAAAAAaIAAAiQAAADgCACQgCADgDAAQgEAAgCgDQgBgCAAgDIAAgDQgIAMgNAAQgKAAgHgFgAgNANQAAAFADACQADADAFAAQAHAAAEgGQAGgFAAgHIAAgDIgNAAQgPAAAAALg");
	this.shape_14.setTransform(-13.8,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAfQgCgCAAgDIAAgzQAAgDACgCQACgDAEAAIAdAAQAIAAAAAHQAAAHgIAAIgVAAIAAAtQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_15.setTransform(-19.3,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAuQgCgCAAgEIAAhOQAAgEACgCQACgCAEAAQAEAAACACQACACAAAEIAAABQAGgLAMAAQANABAHAIQAHAKAAAPQAAAPgIAKQgIALgPAAQgHAAgHgCIAAAUQAAAEgCACQgCADgEgBQgEABgCgDgAgOgEIAAAJQAGAEAIAAQAPgBAAgWQAAgUgOAAQgPAAAAAeg");
	this.shape_16.setTransform(-26.1,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAZQgIgKAAgPQAAgOAIgKQAKgKAOAAQAPAAAJAKQAJAKAAAOQAAAPgJAKQgJAKgPAAQgOAAgKgKgAgMgPQgEAHAAAIQAAAJAEAHQAFAGAHAAQAIAAAEgGQAFgHAAgJQAAgIgFgHQgEgGgIAAQgHAAgFAGg");
	this.shape_17.setTransform(-33.9,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_18.setTransform(0.9,-15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAaQgJgJAAgRQAAgPAJgJQAIgKANAAQAOAAAIAHQAHAIAAANIgBAGQgBACgCACQgBABgFAAIgiAAQABAIAFAFQAEAEAHAAQAGAAAIgDQAHgDACAFQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgCACQgJAFgOAAQgOAAgHgJgAgJgRQgDAFgCAIIAeAAIAAgDQgBgHgDgEQgDgEgIAAQgFAAgFAFg");
	this.shape_19.setTransform(-5.7,-15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAeQgFgGAAgJQgBgMAJgEQAJgFALAAIAPABIAAgCQgBgHgDgDQgCgEgJAAIgBAAIgEABIgCAAIgEABIgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgBgFAFgDQAIgFANAAQAcAAgBAaIAAAiQAAADgCACQgCADgDAAQgEAAgBgDQgCgCAAgDIAAgDQgIAMgNAAQgKAAgHgFgAgNANQAAAFADACQADADAFAAQAHAAAEgGQAFgFABgHIAAgDIgNAAQgPAAAAALg");
	this.shape_20.setTransform(-13.1,-15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAfQgCgCAAgEIAAgsIgPAAQgIAAAAgHQAAgHAIAAIAtAAQAIAAAAAHQAAAHgIAAIgPAAIAAAsQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_21.setTransform(-19.4,-15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQAfQgCgCAAgDIAAgiIgcAmQgDAEgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgDQACgCAEAAQAEAAACACQACADAAADIAAAiIAcglQADgFAEAAQAEAAACACQACADAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_22.setTransform(-26.4,-15.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAfQgCgCAAgDIAAgtIgZAAIAAAtQAAADgCACQgCADgEAAQgEAAgCgDQgCgCAAgDIAAgzQAAgDACgCQACgDAEAAIApAAQAEAAACADQACACAAADIAAAzQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_23.setTransform(-34,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-27,79.5,54.2);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmmGmQiwivAAj3QAAj2CwiwQCwiwD2AAQD3AACwCwQCwCwAAD2QAAD3iwCvQiwCxj3AAQj2AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-59.9,119.8,119.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgRApQgEAAgCgDQgCgCAAgCQAAgGADgGQABgFAEgEIAHgIIANgKIAGgGQACgEAAgDQAAgEgDgDQgDgDgFABQgGAAgIADQgGADgDgEIAAgEIADgEQAGgEAEgBIAKgBQALgBAGAGQAGAGAAAKQAAAHgCADQgCAFgFADIgPANQgFADgCAEQgDAEgBAFIAfAAQAHAAAAAGQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBABgBAAg");
	this.shape.setTransform(8.1,1.1,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AAFAnQgBgCAAgDIAAg2IgJAKIgEACQgCABgDgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgFIASgTIACgCIAEAAQAFAAAAAHIAABCQAAADgBACQgCACgDAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(0.3,1.1,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#884E98").s().p("AgVAnQgHgBAAgGIAAg+QAAgHAHgBIATgCQAbAAAAAWQAAAFgDAFQgDAFgEACQAGABAEAEQAEAFAAAHQAAAZgeAAgAgPAcIAOABQAHAAAEgDQAFgCAAgIQAAgMgQAAIgOAAgAgPgbIAAAWIAMAAQAOAAAAgMQAAgLgPAAg");
	this.shape_2.setTransform(-6.7,1.2,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhiB1QgFAAgEgEQgDgDAAgFIAAjRQAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAADRQAAAFgDADQgEAEgFAAg");
	this.shape_3.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.2,29.1,30.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgLAoQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIABgGIAZg5IgdAAQgHAAAAgGQAAgGAHAAIAlAAQAFAAABADQACADgCAFIgbA+QgDAGgEAAIgCAAg");
	this.shape.setTransform(4.6,0.6,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AgVAnQgHgBAAgGIAAg+QAAgHAHgBIATgCQAbAAAAAWQAAAFgDAFQgDAFgEACQAGABAEAEQAEAFAAAHQAAAZgeAAgAgPAcIAOABQAHAAAEgDQAFgDAAgHQAAgMgQAAIgOAAgAgPgbIAAAWIAMAAQAOAAAAgMQAAgLgPAAg");
	this.shape_1.setTransform(-3.3,0.6,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiB1QgFAAgEgEQgDgDAAgFIAAjRQAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAADRQAAAFgDADQgEAEgFAAg");
	this.shape_2.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.2,29.1,30.5);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgWAjQgEgEACgFQADgEAFADQAJAEAGAAQAFAAAFgEQAEgEAAgIQAAgFgEgFQgEgDgFAAIgMAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAgDIACgbQAAgJAIAAIAYAAQAHAAAAAGQAAAHgHAAIgVAAIgCASIAIgBQAHAAAFACQAFACADAEIAEAGIABAJQAAAMgIAIQgHAIgLAAQgPAAgHgGg");
	this.shape.setTransform(4.9,0.8,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AgWAoQgGgBAAgHIAAg+QAAgHAHgBIATgBQAbAAAAAUQAAAGgDAFQgDAEgFACQAHACAEAEQAEAFAAAHQAAAYgfABIgUgBgAgPAdIAOAAQAHAAAEgDQAFgDAAgHQAAgMgQAAIgOAAgAgPgcIAAAYIAMAAQAOAAAAgNQAAgLgPAAg");
	this.shape_1.setTransform(-3.3,0.7,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiB1QgFAAgEgEQgDgDAAgFIAAjRQAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAADRQAAAFgDADQgEAEgFAAg");
	this.shape_2.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.2,29.1,30.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgVAjQgFgEADgFQACgDAFACQAIAEAIAAQAFAAAEgDQAEgFAAgGQAAgOgTAAQgHAAAAgDQAAgDADgDIARgUIgVAAQgGAAAAgGQAAgGAGAAIAfAAQAFAAABAEQABAEgDADIgVAWQAMAAAHAHQAHAEAAALQAAALgIAIQgIAHgKAAQgOAAgHgGg");
	this.shape.setTransform(4.8,0.8,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AgWAnQgGgBAAgGIAAg+QAAgHAHgBQAIgCALAAQAbAAAAAWQAAAFgDAFQgDAFgFACQAIABADAEQAEAFAAAHQAAAZgfAAgAgPAcIAOABQAGAAAFgDQAFgDAAgHQAAgMgQAAIgOAAgAgPgbIAAAWIAMAAQAOAAAAgMQAAgLgPAAg");
	this.shape_1.setTransform(-3.4,0.7,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiB1QgFAAgEgEQgDgDAAgFIAAjRQAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAADRQAAAFgDADQgEAEgFAAg");
	this.shape_2.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.2,29.1,30.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgWAjQgEgEACgEQADgEAFACQAIAEAIAAQAFAAAEgDQADgEAAgHQAAgOgSAAQgHAAAAgDQAAgDADgDIARgUIgVAAQgGAAAAgGQAAgGAGAAIAfAAQAFAAABAEQABAFgDACIgVAWQANABAGAGQAHAEAAALQAAALgIAIQgIAHgKAAQgPAAgHgGg");
	this.shape.setTransform(5.2,1.5,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AgaAoQgGgCAAgGIAAg+QAAgHAGgBQAIgCAMAAQASAAALALQAKAKAAATQAAATgKALQgLALgSAAIgUgBgAgSgaIAAA2IAMAAQAZAAAAgcQAAgbgZAAg");
	this.shape_1.setTransform(-3.5,1.5,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiB1QgFAAgEgEQgDgDAAgFIAAjRQAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAADRQAAAFgDADQgEAEgFAAg");
	this.shape_2.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.2,29.1,30.5);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgWAlQgGgFAAgHQAAgIAJgFQgGgDAAgGQAAgEAGgGQgFgFAAgIQAAgJAGgGQAHgFALAAIAHABIAQAAQAGAAAAAFQAAAEgGAAIgEAAQACAFAAAFQAAAIgGAGQgFAFgKAAQgHAAgEgBQgEACAAABQAAACAEACIAMABQANABAGADQAGAEAAAHQAAAKgIAFQgHAFgMAAQgPAAgGgEgAgQAXQAAAEAEACQADACAHAAQAGAAAFgCQAEgDAAgEQAAgCgDgCIgKgCIgKgBQgGADAAAFgAgJgbQgDADAAAEQAAAFADACQAEACAFAAQADAAADgCQADgCAAgFQAAgEgDgDQgCgDgEAAQgGAAgDADg");
	this.shape.setTransform(6,4,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AAZAmQgDgDAAgCIAAguIgRAZQgBAFgEAAQgDAAgCgEIgSgaIAAAuQAAAHgHAAQgGAAAAgHIAAhBQAAgDACgCIAEgCQAFAAADAFIAWAjIAXgjQADgFAEAAQADAAACACQACACAAADIAABBIgCAFQgCACgDAAQgEAAgBgCg");
	this.shape_1.setTransform(-3.7,1,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiB1QgFAAgEgEQgDgDAAgFIAAjRQAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAADRQAAAFgDADQgEAEgFAAg");
	this.shape_2.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.2,29.1,30.5);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgTAZQgFgFAAgHQAAgLAIgCQAGgFAKAAIAMABIAAgBQAAgGgCgDQgDgDgHAAIgBAAIgFABIgDABIgDABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgEAEgDQAHgEALgBQAXAAAAAXIAAAcQAAADgCABQgBADgEAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgBAAgDIAAgCQgFAJgMABQgIgBgGgEgAgLAMQAAADADACQADADAEAAQAFgBAEgFQAEgEAAgGIAAgCIgKAAQgNAAAAAKg");
	this.shape.setTransform(5,2.6,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AgWAeQgJgMAAgSQAAgRAKgMQALgLAPAAQANAAAIAFQAGAEgDAFQgCAFgHgDQgIgDgHAAQgJAAgGAHQgGAJAAALQAAANAGAIQAHAIAIAAQAJAAAIgFQAGgDADAEQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQgBAEgDACQgJAGgPAAQgQAAgKgLg");
	this.shape_1.setTransform(-3.9,1,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiB1QgFAAgEgEQgDgDAAgFIAAjRQAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAADRQAAAFgDADQgEAEgFAAg");
	this.shape_2.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.2,29.1,30.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAgQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAg5QAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAIAPAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAA5QAAAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-4.2,3.1,8.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAgQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAg5QAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAQAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAA5QAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAg");
	this.shape.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-4.2,3,8.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgXAcQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIADgBIARAAIgBgIQAAgKAEgEQADgFAKAAQAJAAAFAFQAFAEAAALIgBAMQAAAFgGAAgAACACQgCADABAGIAAAHIASAAIABgHQAAgLgKAAQgFAAgDACgAgXgRQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIADgBIAvAAIADABIABAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape.setTransform(0.2,-26.6,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AgWAXQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIASAAIAAgZIgSAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAEgBIAuAAIAEABIABAEQAAAAAAABQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgUAAIAAAZIAUAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_1.setTransform(0.2,-18.1,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#884E98").s().p("AgWAXIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBIAEgBIAhAAIgkgZQgDgCAAgDQAAgFAGAAIAuAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgiAAIAkAaQADACAAACIgBAEIgEABg");
	this.shape_2.setTransform(0.2,-10.3,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#884E98").s().p("AgWAbQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCAEgCIAZgRIgagQQgDgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAEgBIAuAAIAEABIABADIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAIghAAIASAMQADABAAACQAAACgDACIgRANIAgAAQAFAAAAAEQAAAFgFABg");
	this.shape_3.setTransform(0.2,-2,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#884E98").s().p("AAWAYIgugTQgEgCAAgDQAAgCAEgBIAugUQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgMAFIAAAUIAMAEQAGADgCAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgDgBgAgPAAIAUAIIAAgOg");
	this.shape_4.setTransform(0.1,5.7,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#884E98").s().p("AgbAXIgBgDIAAgnIABgDQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIAAAPIArAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABIABACIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgrAAIAAAPIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_5.setTransform(0.2,11.8,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#884E98").s().p("AgWAXQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBIAEgBIAhAAIgkgZQgDgCAAgDQAAgFAGAAIAuAAIAEABIABAEQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABIgDABIgiAAIAkAaQADACAAACQAAABAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_6.setTransform(0.2,19.2,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#884E98").s().p("AgVAVQgFAAgBgFIgBgOQAAgTAPAAQAEAAAEACQACABADAFQAAgFADgDQAEgDAEAAQASAAAAAWIgBAOQAAAFgFAAgAADABIAAAKIARAAIABgKQAAgFgCgCQgCgDgFAAQgJAAAAAKgAgUADIABAIIAQAAIAAgJQAAgJgJAAQgIAAAAAKg");
	this.shape_7.setTransform(0.2,26.3,1.3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiEnQgFAAgEgDQgDgFAAgEIAAo1QAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAAI1QAAAEgDAFQgEADgFAAg");
	this.shape_8.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-38.4,29.1,76.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884E98").s().p("AgXAcQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAQAAIAAgIQAAgKAFgEQACgFAKAAQAKAAAEAGQAFADAAALIgBAMQAAAFgGAAgAADADQgDADAAAFIAAAHIATAAIABgHQAAgLgKAAQgFAAgCADgAgXgRQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAvAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAg");
	this.shape.setTransform(0.3,-25.5,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#884E98").s().p("AAXAYQgDAAgBgFQAAgEgFgBQgKgDgbgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgXQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAvAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgrAAIAAAOQAYABALADQAFABAEAEQAEADAAAFQAAADgCACIgDABIgBAAg");
	this.shape_1.setTransform(0.3,-17,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#884E98").s().p("AAWAYIgugTQgEgCAAgDQAAgBADgCIAvgUQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgMAFIAAAUIAMAEQAGADgCAEQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgBgAgPAAIAUAIIAAgOg");
	this.shape_2.setTransform(0.2,-10.2,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#884E98").s().p("AgVAUQgFAAgBgFIgBgNQAAgJAFgGQAEgGAKAAQAJAAADAHQAFAFABAJIAAAHIAPAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAgTACIAAAHIATAAIAAgGQAAgLgJAAQgKAAAAAKg");
	this.shape_3.setTransform(0.3,-4.1,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#884E98").s().p("AgXATQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgaIABgFIAEgBIADABIABAFIAAAVIAPAAIAAgRIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAARIARAAIAAgWQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAAAbQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_4.setTransform(0.3,2.2,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#884E98").s().p("AgXAXQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBIADgBIATAAIAAgZIgTAAIgDgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAvAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABIgDABIgVAAIAAAZIAVAAIADABQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_5.setTransform(0.3,9.5,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#884E98").s().p("AgXAXIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAiAAIgkgZQgDgCAAgDQAAgFAFAAIAvAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgiAAIAkAaQADACAAADIgBADIgEABg");
	this.shape_6.setTransform(0.3,17.3,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#884E98").s().p("AgWAaQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgBgDQAAgDADgDIAagQIgagQQgDgCAAgDQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIADgBIAvAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgDABIghAAIASANQADACAAABQAAADgDACIgSAMIAhAAQAFAAAAAFQAAAFgFgBg");
	this.shape_7.setTransform(0.3,25.6,1.3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiEnQgFAAgEgDQgDgFAAgEIAAo1QAAgFADgDQAEgEAFAAIDFAAQAFAAAEAEQADADAAAFIAAI1QAAAEgDAFQgEADgFAAg");
	this.shape_8.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-38.4,29.1,76.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle_mental();
	this.instance.setTransform(-41,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.bottleShadow_mental();
	this.instance_1.setTransform(-70,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-160,119,320);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8840B7").s().p("AvSciQlfimj8kdQj8kjhxlmQjNqRC5oqQB+mBFMlzQA1g8BWgGQBQAABCA1QA7A1AHBWQAABPg1A8QkWE4hkE3QiLG0CfILQBWEXDHDhQDHDiEQB9QJoEeLKk4QLtk+EJqKQDvpFjopIQjhofoZjiQpij7sTEjQhQAbhIghQhQgigahPQgbhQAhhJQAhhIBQgiQPGlmLzFMQKXEkEXK4QEqLSkkLXQk+MiuTGOQmvC6m6AAQmoAAlmimgAtoLWQkCjUifjVQhkh3Bkh+QAagoBqhuQCfimCmiFIjOjhQg1hCAHhQQAAhWBCg1QA8g1BQAAQBWAHA1A7ID1EQQDAhxDUgoIAAkPQAAhWA8g2QAzg7BWAAQBWAAA1A7QA8A2AABWIAAEPQCZAbCsBdICziLQBCg1BQAGQBWAHAuBCQA1BCgNBQQgHBWhCAvIhWBIQD8DiCmEHQBPB+hqBxQsBMBpmAAQmVAAm8lmgAtoC2QHXH4F6AAQGSAAJBoSQmpormoAAQmtAAomJFgAhaDkQg1g1AAhPQAAhJA1g6QA1g1BOAAQBJAAA7A1QA1A6AABJQAABPg1A1Qg7A2hJAAQhOAAg1g2g");
	this.shape.setTransform(0.2,-0.3,1,1,0,0,0,0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.5,-199.2,411,398.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8446AD").s().p("AjNBkQgJAAgGgEQgGgFgEgIIg/iWIgBgEIgBgGQAAgIAGgHQAGgGAJAAQAJAAAFAEQAGAFACAGIAxB8IAxh9QACgFAGgFQAFgEAIAAQAIAAAHAGQAGAGAAAJIgBAFIgBAEIhACXQgEAIgGAFQgFAEgJAAgAEHBeQgFgEgDgGIgNgfIhWAAIgNAgQgDAHgFADQgGAEgGAAQgIAAgGgGQgGgHAAgIIABgEIACgFIBDiXQAEgIAGgFQAHgEAJAAIACAAQAJAAAGAEQAGAFAEAIIBECXQACAGAAADQAAAJgGAGQgGAGgIAAQgIAAgFgFgACsAPIA2AAIgbg+gAAqBcQgHgGAAgJIAAiGIgnAAQgIAAgGgGQgFgFAAgIQAAgJAFgFQAGgGAIAAIB8AAQAIAAAGAGQAGAGAAAIQAAAHgGAGQgGAGgIAAIgqAAIAACGQAAAJgGAGQgGAHgJAAQgJAAgGgHgAhSBcQgGgGAAgJIAAiZQAAgJAGgHQAGgGAJAAQAJAAAGAGQAHAHAAAJIAACZQAAAJgHAGQgGAHgJAAQgJAAgGgHg");
	this.shape.setTransform(-64.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AGtBfQgFgEgDgHIgNgeIhWAAIgNAgQgDAGgFAEQgFADgHAAQgIABgHgHQgFgGAAgIIABgFIACgEIBDiXQAEgJAGgEQAGgFAJABIADAAQAJgBAGAFQAGAEAEAJIBECXQACAFAAAEQAAAIgGAGQgFAHgJgBQgHAAgGgEgAFSAQIA2AAIgbg+gADWBgIgJgIIgpg1IgjAAIAAArQAAAIgGAHQgGAGgJAAQgJAAgGgGQgGgHgBgIIAAiYQABgJAGgGQAGgGAJgBIBDAAQAmABATATQARARAAAcIAAAAQAAAYgLAMQgKAOgSAIIAeAkIAGAIQABAEAAAFQAAAIgGAGQgHAFgHAAQgIAAgFgDgACBAAIAsAAQAQAAAJgIQAIgIAAgMIAAgBQAAgOgJgHQgKgHgPAAIgrAAgAktBdQgGgGAAgJIAAiZQAAgJAGgGQAGgHAJAAIAEAAQAJABAFADQAFAEAEAFIBTBqIAAhiQAAgJAGgGQAGgGAJAAQAJAAAGAGQAHAHAAAIIAACaQAAAIgHAGQgGAHgKAAIAAAAQgJgBgEgDQgGgDgEgGIhWhvIAABnQAAAJgGAGQgGAGgJAAQgJAAgGgGgAmDBdQgGgHAAgIIAAiaQAAgIAGgHQAGgGAJAAQAJAAAHAGQAFAHAAAIIAACaQAAAIgFAHQgHAGgJAAQgJAAgGgGgAnZBdQgGgHAAgIIAAhfIgmA3QgDAGgFACQgEADgGAAQgFAAgEgDQgFgCgDgGIglg2IAABfQAAAIgHAGQgGAHgIgBQgKABgFgHQgHgGAAgIIAAiaQABgJAGgGQAGgHAJAAIAEAAQAIAAAEADQAFAEADAEIA0BVIA0hVQAHgLAMAAIAFAAQAJAAAGAHQAGAGABAJIAACZQgBAIgGAHQgGAGgJAAQgJAAgGgGgAH/BiQgIgBgGgGQgHgGAAgJIAAiYQAAgIAHgHQAGgGAIAAQAJAAAHAGQAGAHABAIIAACGIBPAAQAIAAAFAGQAHAHAAAHQAAAIgHAGQgFAFgIABgAhIBiQgIgBgGgGQgHgGAAgJIAAiWQAAgJAHgGQAGgGAIgBIBqAAQAJABAFAFQAGAGAAAHQAAAJgGAFQgFAGgJgBIhUAAIAAAoIBIAAQAIAAAGAGQAGAFgBAHQABAHgGAGQgGAFgIAAIhIAAIAAAqIBWAAQAJgBAEAGQAHAFAAAJQAAAHgHAGQgEAFgJABg");
	this.shape_1.setTransform(31.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-10.1,188.8,20.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eir2AErIAApVMFXtAAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1100,-30,2200,60);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t4 = new lib.Symbol33();
	this.t4.setTransform(171,13.6);

	this.t3 = new lib.Symbol32();
	this.t3.setTransform(63.5,13.6);

	this.t2 = new lib.Symbol31();
	this.t2.setTransform(124.5,-13.6);

	this.t1 = new lib.Symbol30();
	this.t1.setTransform(28.5,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28.2,213.8,56.4);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.t1 = new lib.Symbol34();
	this.t1.setTransform(22.9,0);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 1
	this.t3 = new lib.Symbol28();
	this.t3.setTransform(106.2,11.2,1,1,0,0,0,53,0);

	this.t2 = new lib.Symbol27();
	this.t2.setTransform(99.6,-9.7,1,1,0,0,0,46.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-22.2,159.2,44.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.t1 = new lib.Symbol19();
	this.t1.setTransform(50.8,33.8);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.Symbol20();
	this.t2.setTransform(60.4,100.8);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t3
	this.t3 = new lib.Symbol21();
	this.t3.setTransform(59.6,167.8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABaFZIAAlKIgDAAIAAgSIADAAIAAlUIAUAAIAAATIgBAAIAAKIIBkAAIAAAVgAjQAPIAAgSIEnAAIAAASgABulEIAAgTIBjAAIAAATg");
	mask.setTransform(-10,33.5);

	// c1
	this.c1 = new lib.Symbol18();
	this.c1.setTransform(-33.7,34);

	this.c1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgnFPIgTAAIAAqcIATAAIAAKIIBiAAIAAAUg");
	mask_1.setTransform(5,101.5);

	// c2
	this.c2 = new lib.Symbol18();
	this.c2.setTransform(-0.2,66,1.184,1.184);

	this.c2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(1));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgnFOIgTAAIAAqcIATAAIAAKIIBiAAIAAAUg");
	mask_2.setTransform(5,168.5);

	// c3
	this.c3 = new lib.Symbol18();
	this.c3.setTransform(-0.2,133.5,1.184,1.184);

	this.c3.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.c3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-1,140.7,203);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.v5 = new lib.Symbol16();
	this.v5.setTransform(16.3,113.9);

	this.v4 = new lib.Symbol15();
	this.v4.setTransform(16.3,79.9);

	this.v3 = new lib.Symbol14();
	this.v3.setTransform(16.3,46.1);

	this.v2 = new lib.Symbol13();
	this.v2.setTransform(16.3,12.3);

	this.v1 = new lib.Symbol12();
	this.v1.setTransform(16.3,-21.8);

	this.m2 = new lib.Symbol11();
	this.m2.setTransform(-16.2,12.1);

	this.m1 = new lib.Symbol10();
	this.m1.setTransform(-16.2,-21.7);

	this.l2 = new lib.Symbol9();
	this.l2.setTransform(16.3,-44.4);

	this.l1 = new lib.Symbol8();
	this.l1.setTransform(-16,-44.4);

	this.mc2 = new lib.Symbol7();
	this.mc2.setTransform(16.3,-90.6);

	this.mc1 = new lib.Symbol6();
	this.mc1.setTransform(-16.2,-90.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc1},{t:this.mc2},{t:this.l1},{t:this.l2},{t:this.m1},{t:this.m2},{t:this.v1},{t:this.v2},{t:this.v3},{t:this.v4},{t:this.v5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.8,-129.1,61.6,258.2);


(lib.content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//var ease1 = Expo.easeInOut;
		//var ease2 = Expo.easeOut;
		//var ease3 = Expo.easeIn;
		var time1 = 3.00;
		var time2 = time1 + 5.00;
		var time3 = time2 + 3.00;
		var dur1 = .7;
		var newY = 152;
		
		
		
		var tl = new TimelineLite();
		tl.fromTo(this.blk, 0.1, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.wp, 1.0, {y:0, ease:Expo.easeOut}, -0.1)
		  .from(this.logo1, 1.0, {y:"-=100", ease:Expo.easeOut}, -0.1)
		  
		  // 1 scene 
		  .from(this.ls, 1.8, {y:"+=100", ease:Expo.easeOut}, -0.1)
		  .from(this.bot, 1.8, {y:"+=200", ease:Expo.easeOut}, -0.1)
		  .from(this.vim.mc1, 1.1, {y:"+=400", ease:Expo.easeOut}, 0.2)
		  .from(this.vim.l1, 1.1, {y:"+=400", rotation:"+=90", ease:Expo.easeOut}, 0.3)
		  .from(this.vim.mc2, 1.1, {y:"+=400", ease:Expo.easeOut}, 0.3)
		  .from(this.vim.l2, 1.1, {y:"+=400", rotation:"+=90", ease:Expo.easeOut}, 0.4)
		  .staggerFrom([this.vim.m1, this.vim.m2], 0.7, {scaleX:0, scaleY:0, y:"+=100", rotation:"+=180", ease:Expo.easeOut}, 0.07, 0.7)
		  .staggerFrom([this.vim.v1, this.vim.v2, this.vim.v3, this.vim.v4, this.vim.v5], 0.7, {scaleX:0, scaleY:0, y:"+=100", rotation:"+=180", ease:Expo.easeOut}, 0.07, 0.8)
		  
		  // 2 scene
		  .to(this.vim.mc2, dur1, {x:"+=200", ease:Expo.easeIn}, time1)
		  .to(this.vim.l2, dur1, {x:"+=200", ease:Expo.easeIn}, time1+.03)
		  .to(this.vim.mc1, dur1, {x:"+=200", ease:Expo.easeIn}, time1+.06)
		  .to(this.vim.l1, dur1, {x:"+=200", ease:Expo.easeIn}, time1+.09)
		  .staggerTo([this.vim.v1, this.vim.v2, this.vim.v3, this.vim.v4, this.vim.v5], dur1, {x:"+=200", ease:Expo.easeIn}, 0.03, time1+.10)
		  .staggerTo([this.vim.m1, this.vim.m2], dur1, {x:"+=200", ease:Expo.easeIn}, 0.03, time1+.13)
		  
		  .from(this.pl.c1, dur1, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time1+0.7)
		  .from(this.pl.t1, dur1*.5, {x:"+=50", alpha:0, ease:Bounce.easeOut}, time1+0.9)
		  .from(this.pl.c2, dur1, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time1+1.7)
		  .from(this.pl.t2, dur1*.5, {x:"+=50", alpha:0, ease:Bounce.easeOut}, time1+1.9)
		  .from(this.pl.c3, dur1, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time1+2.7)
		  .from(this.pl.t3, dur1*.5, {x:"+=50", alpha:0, ease:Bounce.easeOut}, time1+2.9)
		  
		  // 3 scene
		  .to(this.ls, dur1, {x:"-=500", ease:Expo.easeIn}, time2)
		  .to(this.bot, dur1, {x:"-=300", ease:Expo.easeIn}, time2)
		  .to(this.pl.t1, dur1, {x:"+=300", ease:Expo.easeIn}, time2)
		  .to(this.pl.t2, dur1, {x:"+=300", ease:Expo.easeIn}, time2+0.03)
		  .to(this.pl.t3, dur1, {x:"+=300", ease:Expo.easeIn}, time2+0.06)
		  .to(this.pl.c1, dur1*.5, {alpha:0, ease:Expo.easeIn}, time2-.3)
		  .to(this.pl.c2, dur1*.5, {alpha:0, ease:Expo.easeIn}, time2-.3+0.03)
		  .to(this.pl.c3, dur1*.5, {alpha:0, ease:Expo.easeIn}, time2-.3+0.06)
		  .to(this.btn, dur1+.8, {y:newY, scaleX:1, scaleY:1, ease:Expo.easeInOut}, time2+0.2)
		  .from(this.person, dur1+.8, {scaleX:0.5, scaleY:0.5, ease:Expo.easeInOut}, time2+0.2)
		  .from(this.t1, dur1+.1, {y:"+=150", ease:Expo.easeOut}, time2+1.0)
		  
		  // 4 scene
		  .to(this.wp, 1.0, {y:63, scaleY:.29, ease:Expo.easeInOut}, time3)
		  .to(this.logo1, 1.0, {y:40, ease:Expo.easeInOut}, time3)
		  .from(this.descr.t1, dur1, {x:"+=300", ease:Expo.easeOut}, time3+.8)
		  .from(this.descr.t2, dur1, {x:"+=300", ease:Expo.easeOut}, time3+.85)
		  .from(this.descr.t3, dur1, {x:"+=300", ease:Expo.easeOut}, time3+.9)
		  .to(this.btn, 1.0, {y:161, scaleX:1.2, scaleY:1.5, ease:Expo.easeInOut}, time3)
		  .to(this.t1, 0.5, {y:"+=100", ease:Expo.easeIn}, time3)
		  .to(this.person, 0.4, {y:"+=20", alpha:0, ease:Expo.easeIn}, time3)
		  .from(this.person2, 1.0, {y:"-=230", ease:Expo.easeInOut}, time3)
		  //.to(this.person2, 15.0, {scaleX:1.3, scaleY:1.3, ease:Power0.easeNone}, time3)
		  .staggerFrom([this.t2.t1, this.t2.t2, this.t2.t3, this.t2.t4], dur1, {y:"+=200", ease:Expo.easeOut}, 0.03, time3+1.0)
		  
		  ;
		
		
		/*
			
			
			for (m=1; m<5; m++) {
								 new TweenNano.from(eval("t2.t"+m), dur1, {delay:m*.03 + time3+1.0, _y:"200", ease:ease2, overwrite:0});
								 }
			
		  
		  */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,0.109,6.667);
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).to({_off:true},1).wait(1));

	// logo1
	this.logo1 = new lib.Symbol2();
	this.logo1.setTransform(0,-175);

	this.timeline.addTween(cjs.Tween.get(this.logo1).to({_off:true},1).wait(1));

	// descr
	this.descr = new lib.Symbol26();
	this.descr.setTransform(-94.3,88);

	this.timeline.addTween(cjs.Tween.get(this.descr).to({_off:true},1).wait(1));

	// wp
	this.wp = new lib.Symbol1();
	this.wp.setTransform(0,-350);

	this.timeline.addTween(cjs.Tween.get(this.wp).to({_off:true},1).wait(1));

	// bot
	this.bot = new lib.Symbol4();
	this.bot.setTransform(-67,31);

	this.timeline.addTween(cjs.Tween.get(this.bot).to({_off:true},1).wait(1));

	// vim
	this.vim = new lib.Symbol5();
	this.vim.setTransform(46.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.vim).to({_off:true},1).wait(1));

	// pl
	this.pl = new lib.Symbol17();
	this.pl.setTransform(-6,-72);

	this.timeline.addTween(cjs.Tween.get(this.pl).to({_off:true},1).wait(1));

	// logoSign
	this.ls = new lib.Symbol3();
	this.ls.setTransform(-87,0);
	this.ls.filters = [new cjs.ColorFilter(0, 0, 0, 1, 144, 80, 186, 0)];
	this.ls.cache(-207,-201,415,403);

	this.timeline.addTween(cjs.Tween.get(this.ls).to({_off:true},1).wait(1));

	// t1
	this.t1 = new lib.Symbol24();
	this.t1.setTransform(0,153.4);

	this.timeline.addTween(cjs.Tween.get(this.t1).to({_off:true},1).wait(1));

	// t2
	this.t2 = new lib.Symbol29();
	this.t2.setTransform(-94.3,161.6,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.t2).to({_off:true},1).wait(1));

	// btn
	this.btn = new lib.Symbol22();
	this.btn.setTransform(0,0,1.2,7.143);

	this.timeline.addTween(cjs.Tween.get(this.btn).to({_off:true},1).wait(1));

	// person2
	this.person2 = new lib.Symbol25();
	this.person2.setTransform(0,-96);

	this.timeline.addTween(cjs.Tween.get(this.person2).to({_off:true},1).wait(1));

	// person
	this.person = new lib.Symbol23();
	this.person.setTransform(3,16);

	this.timeline.addTween(cjs.Tween.get(this.person).to({_off:true},1).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DCDCDC","#FFFFFF"],[0,1],-0.2,-197.9,0.2,198).s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.5,-550,412.5,750);


// stage content:



(lib.vit1_240x400_html5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyufQMAAAg+fMAldAAAMAAAA+fg");
	mask.setTransform(120,200);

	// brd
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5E3985").ss(2,1,1,3,true).p("ASwfQMglfAAAMAAAg+fMAlfAAAg");
	this.shape.setTransform(120,200);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(120,200);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;