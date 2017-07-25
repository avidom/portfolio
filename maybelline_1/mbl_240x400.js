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
		{src:"images/face.jpg", id:"face"},
		{src:"images/line1.png", id:"line1"},
		{src:"images/line2.png", id:"line2"},
		{src:"images/pen.png", id:"pen"},
		{src:"images/pen_refl.png", id:"pen_refl"},
		{src:"images/pencils1.png", id:"pencils1"},
		{src:"images/pencils2.png", id:"pencils2"}
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



(lib.face = function() {
	this.initialize(img.face);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.line1 = function() {
	this.initialize(img.line1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,280);


(lib.line2 = function() {
	this.initialize(img.line2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,273);


(lib.pen = function() {
	this.initialize(img.pen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,215);


(lib.pen_refl = function() {
	this.initialize(img.pen_refl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,68);


(lib.pencils1 = function() {
	this.initialize(img.pencils1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,154);


(lib.pencils2 = function() {
	this.initialize(img.pencils2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,125);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.line2();
	this.instance.setTransform(-97,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-136,194,273);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pen_refl();
	this.instance.setTransform(-15,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-34,31,68);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pen();
	this.instance.setTransform(-50,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-107,101,215);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#472411").s().p("AgMBAIAAgcIAZAAIAAAcgAgFAZIgHg1IAAgiIAZAAIAAAhIgHA2g");
	this.shape.setTransform(63,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#472411").s().p("AgWAqQgLgFgGgMQgGgLAAgOQAAgMAGgMQAGgKALgHQAKgGAMAAQAOAAAKAGQAKAGAGANQAGALAAAPIAAACIhBAAQABAMAFAGQAGAGAIABQAHAAAEgEQAFgDADgHIAYAAQgEAPgMAJQgLAHgQABQgNgBgKgGgAAUgIQgBgGgCgFQgCgEgFgDQgEgDgGAAQgHAAgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_1.setTransform(55.3,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#472411").s().p("AhAAuIAAhbIAZAAIAABHIAcAAIAAhHIAXAAIAABHIAcAAIAAhHIAZAAIAABbg");
	this.shape_2.setTransform(42.5,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#472411").s().p("AgpAuIAAhbIAaAAIAAAgIAXAAQAJAAAIADQAHAEAFAGQAFAGgBAJQABAKgFAIQgFAGgHADQgJAEgJAAgAgPAcIAQAAQAGAAAEgDQAEgDABgHQgBgHgEgCQgEgDgHAAIgPAAg");
	this.shape_3.setTransform(30.4,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#472411").s().p("AglAvIgFgBIgEgBIAAgTIADAAIAEAAQAGAAADgFQADgEAAgKIABg1IBJAAIAABbIgZAAIAAhIIgXAAIgBAfIgBAPQgBAIgDAGQgDAGgGAFQgGADgKAAIgFAAg");
	this.shape_4.setTransform(19.6,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#472411").s().p("AgYAqQgKgGgGgLQgHgLABgOQgBgOAHgKQAGgMAKgGQAMgGAMAAQAPAAAKAGQAKAGAHAMQAFAKABAOQgBAOgFALQgHALgKAGQgLAGgOABQgNgBgLgGgAgPgUQgGAHAAANQAAAOAGAHQAGAIAJAAQAKAAAGgIQAGgIAAgNQAAgNgGgIQgGgHgKAAQgJAAgGAIg");
	this.shape_5.setTransform(9.2,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#472411").s().p("AgVA+QgJgFgFgIQgFgJgDgKQgCgKAAgKIABgUQABgKAEgKQAEgKAHgIQAIgHAMgEIAKgCIAKgBQAEgBACgDIAYAAQgCAMgGAFQgGAGgJADIgTADQgLABgGAFQgHAFgDAIQgEAIgBAKIABAAQACgHAFgGQAEgGAIgEQAHgDAJgBQAMAAAJAGQAKAGAGALQAFAIAAAPQAAAOgGALQgFALgLAGQgLAGgNAAQgNAAgIgFgAgOAAQgFAFgBAOQABAOAFAHQAGAIAIAAQAJAAAGgIQAGgHAAgOQAAgOgGgFQgGgIgJAAQgIAAgGAIg");
	this.shape_6.setTransform(-1.7,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#472411").s().p("AASBAIAAg/IgfA/IgdAAIAAhbIAZAAIAAA9IAfg9IAdAAIAABbgAgUgqQgIgHAAgNIAKAAQACAFAFAEQAFACAGAAQAHAAAFgCQAFgEACgFIAKAAQAAANgIAHQgIAFgNABQgMgBgIgFg");
	this.shape_7.setTransform(-17.6,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#472411").s().p("AgjApQgJgHAAgNQAAgJAEgGQAEgGAFAAQAHgDAHgBIANgDQALgBAFgCQAFgCABgGQAAgHgFgDQgEgCgIAAQgHAAgEACQgEAEgCAIIgYAAQACgQAKgHQALgJATABIANABQAHABAHADQAFADAEAGQAEAGAAAJIAAAnIAAAMQAAAHADAGIgaAAIgBgEIAAgFQgHAGgIADQgFADgJAAQgPAAgJgIgAAJAEIgJACIgHABQgFACgCACQgDADAAAFQAAAHADACQAEAEAGAAQAJAAAGgGQAGgEAAgLIAAgKIgIADg");
	this.shape_8.setTransform(-28.2,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#472411").s().p("AASAuIAAgnIgiAAIAAAnIgaAAIAAhbIAaAAIAAAiIAiAAIAAgiIAZAAIAABbg");
	this.shape_9.setTransform(-38.5,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#472411").s().p("AgUAtQgKgDgGgHQgFgIgBgMIAYAAQABAIAFAEQAFAEAHAAQAIAAAFgEQADgDAAgFQAAgGgDgEQgEgDgJAAIgIAAIAAgOIAHAAQAHAAAEgCQAFgDAAgHQAAgFgDgDQgEgCgIAAQgFAAgFACQgEADgBAHIgYAAQAAgLAHgGQAGgHAIgDQAKgCAJAAQASAAALAFQAJAHABANQgBAFgBAEIgHAHQgEAEgEAAIAAABIAJABQAFABADAFQADAFAAAHQAAAKgFAHQgGAHgKADQgJAEgNAAQgLAAgJgEg");
	this.shape_10.setTransform(-48.7,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#472411").s().p("AgjA/IgFgBIAAgYIAFACIAIABQAGAAADgEQAEgDAAgEIgCgJIgEgIIgmhNIAfAAIAcBCIAchCIAeAAIgsBcQgFANgGAIQgEAIgIAEQgHAEgKAAIgKgCg");
	this.shape_11.setTransform(-59.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-12,135.1,24.1);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(36.7,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAnIAAg2IgTA2IgMAAIgTg1IAAA1IgRAAIAAhNIAZAAIAQA0IASg0IAYAAIAABNg");
	this.shape_1.setTransform(30.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA5AAIAAAPIgoAAIAAARIAkAAIAAALIgkAAIAAATIAoAAIAAAPg");
	this.shape_2.setTransform(21.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAnIAAg1IgBAAIgbA1IgUAAIAAhNIASAAIAAA1IAbg1IAUAAIAABNg");
	this.shape_3.setTransform(14,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAnIAAgiIgeAAIAAAiIgSAAIAAhNIASAAIAAAeIAeAAIAAgeIARAAIAABNg");
	this.shape_4.setTransform(5.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA5AAIAAAPIgoAAIAAARIAkAAIAAALIgkAAIAAATIAoAAIAAAPg");
	this.shape_5.setTransform(-1.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlAnIgVgiIgJAJIAAAZIgOAAIAAgZIgIgJIgVAiIgVAAIAfgtIgcggIAUAAIAbAgIAAggIAOAAIAAAgIAcggIAUAAIgcAgIAgAtg");
	this.shape_6.setTransform(-11.1,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAnIAAg1IgBAAIgbA1IgUAAIAAhNIASAAIAAA1IAbg1IAUAAIAABNg");
	this.shape_7.setTransform(-21,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAnIAAhNIAjAAQAHAAAFACQAGADADAEQAEAEAAAHQAAAGgDAEQgDAEgFACQAGACAEADQAEAEAAAIQAAAIgDAFQgEAFgGADQgGADgHAAgAgPAZIAQAAIAHgBQADAAACgDQACgCAAgFQAAgEgCgDQgCgCgEgBIgHAAIgPAAgAgPgGIAPAAIAFAAIAFgDQACgCAAgEIgCgGIgFgDIgFAAIgPAAg");
	this.shape_8.setTransform(-28.8,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYAxIAAgUIgwAAIAAAUIgQAAIAAgjIAGAAQAGgJADgLQAEgMAAgSIAAgMIA1AAIAAA+IAJAAIAAAjgAgEggQAAAKgCAJQgBAJgDAFQgCAHgDAGIAeAAIAAgwIgTAAg");
	this.shape_9.setTransform(-37.1,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-8.1,86.8,16.3);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaAnIAAg2IgTA2IgMAAIgTg1IAAA1IgRAAIAAhNIAZAAIAQA0IASg0IAYAAIAABNg");
	this.shape.setTransform(16.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAnIAAg1IgBAAIgbA1IgUAAIAAhNIASAAIAAA1IAbg1IAUAAIAABNg");
	this.shape_1.setTransform(7.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAnIAAgiIgeAAIAAAiIgSAAIAAhNIASAAIAAAeIAeAAIAAgeIARAAIAABNg");
	this.shape_2.setTransform(-0.6,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAxIAAgUIgwAAIAAAUIgQAAIAAgjIAGAAQAGgJADgLQADgMAAgSIAAgMIA2AAIAAA+IAJAAIAAAjgAgFggQAAAKgBAJQgBAJgCAFQgCAHgEAGIAeAAIAAgwIgUAAg");
	this.shape_3.setTransform(-9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgFgJQgFgJAAgMQAAgLAFgJQAFgKAIgEQAJgFAKgBQALABAJAFQAJAEAEAKQAFAJAAALQAAAMgFAJQgEAJgJAFQgJAFgLAAQgKABgJgGgAgKgWQgEADgDAGQgDAGAAAHQAAAMAGAHQAGAHAIAAQAKAAAFgHQAGgHAAgMQAAgMgGgGQgGgIgJABQgFAAgFADg");
	this.shape_4.setTransform(-17.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-8.1,47.6,16.3);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAnIAAg1IgBAAIgbA1IgUAAIAAhNIASAAIAAA1IAbg1IAUAAIAABNg");
	this.shape.setTransform(15.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAnIAAhNIAjAAQAHAAAFACQAGADADAEQAEAEAAAHQAAAGgDAEQgDAEgFACQAGACAEADQAEAEAAAIQAAAIgDAFQgEAFgGADQgGADgHAAgAgPAZIAQAAIAHgBQADAAACgDQACgCAAgFQAAgEgCgDQgCgCgEgBIgHAAIgPAAgAgPgGIAPAAIAFAAIAFgDQACgCAAgEIgCgGIgFgDIgFAAIgPAAg");
	this.shape_1.setTransform(7.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgFgJQgFgJAAgMQAAgLAFgJQAFgKAIgEQAJgFAKgBQALABAJAFQAJAEAEAKQAFAJAAALQAAAMgFAJQgEAJgJAFQgJAFgLAAQgKABgJgGgAgKgWQgEADgDAGQgDAGAAAHQAAAMAGAHQAGAHAIAAQAKAAAFgHQAGgHAAgMQAAgMgGgGQgGgIgJABQgFAAgFADg");
	this.shape_2.setTransform(-0.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAnIAAhNIAgAAQAJAAAGADQAHADADAFQAEAGAAAJQAAAIgEAEQgDAFgHADQgGADgIAAIgPAAIAAAcgAgMgBIANAAQAGAAADgCQAEgDAAgGQAAgGgEgDQgDgDgGABIgNAAg");
	this.shape_3.setTransform(-8.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAnIAAhNIA4AAIAAAPIgnAAIAAAOIASAAQAJAAAFACQAHADADAEQAEAFAAAJQAAAIgEAGQgDAFgHADQgGADgJAAgAgOAZIAQAAQAHAAADgDQAEgCAAgHQAAgGgFgCQgDgDgGAAIgQAAg");
	this.shape_4.setTransform(-15.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-8.1,43.8,16.3);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA5AAIAAAPIgoAAIAAARIAkAAIAAALIgkAAIAAATIAoAAIAAAPg");
	this.shape.setTransform(32.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAnIAAhNIARAAIAABNgAgpAnIAAhNIARAAIAAAdIAPAAQAHAAAEACQAHADADAEQAEAFABAJQgBAIgEAGQgDAFgHADQgEADgIAAgAgYAZIAMAAQAGAAAEgDQACgCAAgHQAAgGgDgCQgDgDgGAAIgMAAg");
	this.shape_1.setTransform(23.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAnIAAgiIgeAAIAAAiIgSAAIAAhNIASAAIAAAeIAeAAIAAgeIARAAIAABNg");
	this.shape_2.setTransform(14.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAnIAAhNIARAAIAAAdIARAAQAHAAAGACQAHADAEAEQADAFAAAJQAAAIgDAGQgEAFgHADQgGADgIAAgAgNAZIAOAAQAHAAADgDQADgCAAgHQAAgGgDgCQgEgDgGAAIgOAAg");
	this.shape_3.setTransform(7.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAnIgFgBIAAgOIADABIADAAQABABAAAAQABAAAAgBQABAAAAAAQABAAAAgBQACgBACgEIABgMIABguIA1AAIAABNIgRAAIAAg9IgTAAIgBAeQgBARgGAIQgFAHgKABIgFgBg");
	this.shape_4.setTransform(-1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUAnIgGgSIgbAAIgHASIgRAAIAehNIAPAAIAeBNgAAKAJIgKgbIgJAbIATAAg");
	this.shape_5.setTransform(-8.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA5AAIAAAPIgoAAIAAARIAkAAIAAALIgkAAIAAATIAoAAIAAAPg");
	this.shape_6.setTransform(-15.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYAxIAAgUIgvAAIAAAUIgRAAIAAgjIAGAAQAHgJADgLQACgMAAgSIAAgMIA2AAIAAA+IAJAAIAAAjgAgFggQAAAKgBAJQgBAJgDAFQgBAHgEAGIAeAAIAAgwIgUAAg");
	this.shape_7.setTransform(-23.7,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAnIAAg1IgBAAIgbA1IgUAAIAAhNIASAAIAAA1IAbg1IAUAAIAABNg");
	this.shape_8.setTransform(-32,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.1,-8.1,76.2,16.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAxIAAg0IgBAAIgbA0IgUAAIAAhMIASAAIAAA0IAbg0IAUAAIAABMgAgLgkQgFgEAAgIIAGAAQABAEADABQADACADAAQAEAAADgCQAEgBAAgEIAHAAQgBAIgEAEQgFAEgIAAQgHAAgEgEg");
	this.shape.setTransform(19.9,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAnIgGgSIgbAAIgHASIgRAAIAehNIAPAAIAeBNgAAKAJIgKgbIgJAbIATAAg");
	this.shape_1.setTransform(12,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAxIAAgUIgwAAIAAAUIgQAAIAAgjIAGAAQAHgJADgLQACgMAAgSIAAgMIA2AAIAAA+IAJAAIAAAjgAgFggQABAKgCAJQgBAJgCAFQgCAHgEAGIAeAAIAAgwIgUAAg");
	this.shape_2.setTransform(4,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAhQgJgHAAgNIARAAQAAAFADADQACADAEACQADABADAAQAGAAAEgDQADgEABgFQAAgFgDgCIgFgDIgHgBIgEAAIAAgKIACAAIACAAQAGAAADgDQAEgCAAgFQAAgFgEgCQgDgDgFAAQgEAAgEADQgEADgBAGIgQAAQAAgJAFgFQAEgGAHgDQAHgCAGAAQAIAAAGADQAHACADAFQAEAFAAAGQAAAGgDAFQgEAEgFABQAHABAEADQAEAFAAAIQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgJgHg");
	this.shape_3.setTransform(-4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgFgJQgFgJAAgMQAAgLAFgJQAFgKAIgEQAJgFAKgBQALABAJAFQAJAEAEAKQAFAJAAALQAAAMgFAJQgEAJgJAFQgJAFgLAAQgKABgJgGgAgKgWQgEADgDAGQgDAGAAAHQAAAMAGAHQAGAHAIAAQAKAAAFgHQAGgHAAgMQAAgMgGgGQgGgIgJABQgFAAgFADg");
	this.shape_4.setTransform(-11.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAjQgIgFgFgJQgFgKAAgLQAAgLAFgIQAFgJAIgGQAJgGAJAAQAKAAAHAEQAIADAFAHQAEAGAAAIIgRAAQAAgGgFgEQgEgDgIAAQgFAAgFADQgFAFgCAFQgCAGAAAGQABAHACAGQACAHAFACQAFAEAEAAQAIAAAFgFQAEgEABgIIARAAQgBAJgEAHQgFAIgHADQgIAFgKgBQgKABgIgGg");
	this.shape_5.setTransform(-20,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-8.1,52.3,16.3);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pencils2();
	this.instance.setTransform(-97,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-62,195,125);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pencils1();
	this.instance.setTransform(-84,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-77,169,154);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(45.4,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGApIAAhFIgdAAIAAgMIBHAAIAAAMIgdAAIAABFg");
	this.shape_1.setTransform(39.5,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAgQgKgLAAgUQAAgMAFgKQAEgKAJgFQAJgGAJAAQAOAAAIAGQAIAHAEAKQAEAKgBAKIAAACIg8AAIAAABQAAANAHAIQAHAHAKAAQAJAAAFgEQAFgEADgJIAOAAQgEAOgJAHQgJAHgOAAQgRAAgKgLgAAXgGQgBgMgGgGQgGgHgKAAQgIAAgHAHQgGAGgCAMIAuAAIAAAAg");
	this.shape_2.setTransform(31.6,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAlQgHgGAAgLQAAgLAHgHQAHgEAPgCIANgCQAGgBADgCQACgCAAgGQAAgGgFgEQgEgEgIAAQgJAAgFAEQgFAEgBAJIgNAAQAAgNAJgIQAJgHAQAAQAHAAAGACQAHADAEADQAEAFABAFIABALIgBARIAAATIABAFQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIABAAIACAAIAAALIgEABIgFABQgGgBgDgDQgDgDAAgGQgGAHgHADQgGADgJAAQgMAAgHgGgAAHABIgHACIgLACQgFABgEADQgDAEAAAFQAAAHAEAEQAEAEAIAAQAHAAADgDQAGgDADgEQAEgFAAgFIAAgNQgEABgFAAg");
	this.shape_3.setTransform(23.1,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiApIAAhRIAkAAQAIAAAGACQAHABAEAFQAEAEAAAIQAAAHgDAEQgDAEgGADIAAAAQAHACAFADQAEAFAAAIQgBAHgCAGQgEAFgFAEQgGADgIAAgAgUAdIAbAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgDgDgIAAIgZAAgAgUgHIAVAAQAJAAAEgCQADgDAAgGQAAgFgDgCQgEgDgJAAIgVAAg");
	this.shape_4.setTransform(14.5,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUApIAAhCIgjBCIgSAAIAAhRIAOAAIAABCIAkhCIARAAIAABRg");
	this.shape_5.setTransform(5.6,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1ApIAAhRIAOAAIAABFIAiAAIAAhFIAMAAIAABFIAiAAIAAhFIANAAIAABRg");
	this.shape_6.setTransform(-5.4,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAlQgHgGAAgLQAAgLAHgHQAHgEAPgCIANgCQAGgBADgCQACgCAAgGQAAgGgFgEQgEgEgIAAQgJAAgFAEQgFAEgBAJIgNAAQAAgNAJgIQAJgHAQAAQAHAAAGACQAHADAEADQAEAFABAFIABALIgBARIAAATIABAFQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIABAAIACAAIAAALIgEABIgFABQgGgBgDgDQgDgDAAgGQgGAHgHADQgGADgJAAQgMAAgHgGgAAHABIgHACIgLACQgFABgEADQgDAEAAAFQAAAHAEAEQAEAEAIAAQAHAAADgDQAGgDADgEQAEgFAAgFIAAgNQgEABgFAAg");
	this.shape_7.setTransform(-16,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA6IAAhxIANAAIAAAMQAFgHAHgEQAHgDAHAAQAMAAAIAFQAIAGAFAJQAFAKAAANQAAANgFAJQgEAJgJAFQgIAGgLAAQgHAAgHgDQgHgDgFgIIAAAsgAgSglQgGAJAAAPQAAANAHAIQAGAJALAAQALAAAHgJQAHgIAAgNQAAgPgHgJQgHgJgLAAQgLAAgHAJg");
	this.shape_8.setTransform(-25,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATApIgcgpIgMANIAAAcIgPAAIAAhRIAPAAIAAAoIAjgoIATAAIghAhIAkAwg");
	this.shape_9.setTransform(-33.5,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAgQgLgMAAgUQABgMAEgKQAFgKAKgFQAJgFAKAAQATAAAKALQAKALAAAUQAAAUgKAMQgKALgTAAQgRAAgLgLgAgRgWQgIAJAAANQAAAPAIAIQAHAJAKAAQAMAAAGgJQAIgIAAgPQAAgOgIgIQgHgJgLAAQgLAAgGAJg");
	this.shape_10.setTransform(-42.8,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-10.9,99.3,21.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAMQAEgCACgDQABgEAAgFIgHAAIAAgRIAPAAIAAAKIgBAMQgBAGgEAEQgCAFgHACg");
	this.shape.setTransform(43.6,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGApIAAhFIgdAAIAAgMIBHAAIAAAMIgdAAIAABFg");
	this.shape_1.setTransform(37.7,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAgQgKgLAAgUQAAgMAFgKQAEgKAJgFQAJgGAJAAQAOAAAIAGQAIAHAEAKQAEAKgBAKIAAACIg8AAIAAABQAAANAHAIQAHAHAKAAQAJAAAFgEQAFgEADgJIAOAAQgEAOgJAHQgJAHgOAAQgRAAgKgLgAAXgGQgBgMgGgGQgGgHgKAAQgIAAgHAHQgGAGgCAMIAuAAIAAAAg");
	this.shape_2.setTransform(29.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAlQgHgGAAgLQAAgLAHgHQAHgEAPgCIANgCQAGgBADgCQACgCAAgGQAAgGgFgEQgEgEgIAAQgJAAgFAEQgFAEgBAJIgNAAQAAgNAJgIQAJgHAQAAQAHAAAGACQAHADAEADQAEAFABAFIABALIgBARIAAATIABAFQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIABAAIACAAIAAALIgEABIgFABQgGgBgDgDQgDgDAAgGQgGAHgHADQgGADgJAAQgMAAgHgGgAAHABIgHACIgLACQgFABgEADQgDAEAAAFQAAAHAEAEQAEAEAIAAQAHAAADgDQAGgDADgEQAEgFAAgFIAAgNQgEABgFAAg");
	this.shape_3.setTransform(21.3,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiApIAAhRIAkAAQAIAAAGACQAHABAEAFQAEAEAAAIQAAAHgDAEQgDAEgGADIAAAAQAHACAFADQADAFAAAIQAAAHgCAGQgEAFgFAEQgGADgIAAgAgUAdIAbAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgDgDgIAAIgZAAgAgUgHIAVAAQAJAAAEgCQADgDAAgGQAAgFgDgCQgEgDgJAAIgVAAg");
	this.shape_4.setTransform(12.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgApIAAhRIAOAAIAABRgAgtApIAAhRIAOAAIAAAgIAZAAQALAAAHAGQAHAFAAAMQAAAMgHAHQgHAHgKAAgAgfAdIAVAAQAIAAADgEQAEgDAAgHQAAgHgEgDQgDgEgIAAIgVAAg");
	this.shape_5.setTransform(2.6,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfA2IAAgaIg9AAIAAAaIgNAAIAAgmIAJAAIAFgNIAEgRIABgVIAAgSIA5AAIAABFIALAAIAAAmgAgKgiQAAALgCAKIgDAQIgFANIAoAAIAAg5IgeAAg");
	this.shape_6.setTransform(-7.7,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAlQgHgGAAgLQAAgLAHgHQAHgEAPgCIANgCQAGgBADgCQACgCAAgGQAAgGgFgEQgEgEgIAAQgJAAgFAEQgFAEgBAJIgNAAQAAgNAJgIQAJgHAQAAQAHAAAGACQAHADAEADQAEAFABAFIABALIgBARIAAATIABAFQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIABAAIACAAIAAALIgEABIgFABQgGgBgDgDQgDgDAAgGQgGAHgHADQgGADgJAAQgMAAgHgGgAAHABIgHACIgLACQgFABgEADQgDAEAAAFQAAAHAEAEQAEAEAIAAQAHAAADgDQAGgDADgEQAEgFAAgFIAAgNQgEABgFAAg");
	this.shape_7.setTransform(-16.4,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbApIgFAAIgFgBIAAgLIAEABIADAAQADAAADgCQACgCACgFQACgFAAgJIACgwIA2AAIAABRIgOAAIAAhFIgbAAIgBAjQgBANgDAIQgDAIgFADQgEAEgGAAIgBgBg");
	this.shape_8.setTransform(-25.7,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUApIgdgpIgMANIAAAcIgPAAIAAhRIAPAAIAAAoIAjgoIASAAIggAhIAlAwg");
	this.shape_9.setTransform(-33.3,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYA5IgGgBIAAgMIAGABIADABQAEgBACgBQADgDABgDIAGgOIgghRIAPAAIAXBAIAXhAIAOAAIgkBcIgCALQgDAFgEADQgFADgHAAIgFAAg");
	this.shape_10.setTransform(-42,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-10.9,96.1,21.8);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAMQAEgCACgDQABgEAAgFIgHAAIAAgRIAPAAIAAAKIgBAMQgBAGgEAEQgCAFgHACg");
	this.shape.setTransform(60.6,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGApIAAhFIgdAAIAAgMIBHAAIAAAMIgdAAIAABFg");
	this.shape_1.setTransform(54.7,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAgQgKgLAAgUQAAgMAFgKQAEgKAJgFQAJgGAJAAQAOAAAIAGQAIAHAEAKQAEAKgBAKIAAACIg8AAIAAABQAAANAHAIQAHAHAKAAQAJAAAFgEQAFgEADgJIAOAAQgEAOgJAHQgJAHgOAAQgRAAgKgLgAAXgGQgBgMgGgGQgGgHgKAAQgIAAgHAHQgGAGgCAMIAuAAIAAAAg");
	this.shape_2.setTransform(46.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA5IgGgBIAAgMIAGABIADABQAEgBADgBQACgDABgDIAGgOIgghRIAPAAIAXBAIAXhAIAOAAIgjBcIgDALQgDAFgEADQgFADgHAAIgFAAg");
	this.shape_3.setTransform(38.4,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA6IAAhxIANAAIAAAMQAFgHAHgEQAHgDAHAAQAMAAAIAFQAIAGAFAJQAFAKAAANQAAANgFAJQgEAJgJAFQgIAGgLAAQgHAAgHgDQgHgDgFgIIAAAsgAgSglQgGAJAAAPQAAANAHAIQAGAJALAAQALAAAHgJQAHgIAAgNQAAgPgHgJQgHgJgLAAQgLAAgHAJg");
	this.shape_4.setTransform(29.8,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUApIAAhCIgkBCIgRAAIAAhRIAOAAIAABCIAjhCIASAAIAABRg");
	this.shape_5.setTransform(20.5,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA6IAAhxIANAAIAAAMQAFgHAHgEQAHgDAHAAQAMAAAIAFQAIAGAFAJQAFAKAAANQAAANgFAJQgEAJgJAFQgIAGgLAAQgHAAgHgDQgHgDgFgIIAAAsgAgSglQgGAJAAAPQAAANAHAIQAGAJALAAQALAAAHgJQAHgIAAgNQAAgPgHgJQgHgJgLAAQgLAAgHAJg");
	this.shape_6.setTransform(11.4,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA5IgGgBIAAgMIAGABIADABQAEgBACgBQADgDABgDIAGgOIgghRIAPAAIAXBAIAXhAIAOAAIgkBcIgCALQgDAFgEADQgFADgHAAIgFAAg");
	this.shape_7.setTransform(2.5,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGApIAAhFIgdAAIAAgMIBHAAIAAAMIgeAAIAABFg");
	this.shape_8.setTransform(-5.2,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUApIAAhFIgnAAIAABFIgOAAIAAhRIBDAAIAABRg");
	this.shape_9.setTransform(-13.3,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghApIAAhRIANAAIAAAgIAcAAQAMAAAHAGQAHAFAAAMQAAAMgHAHQgHAHgMAAgAgUAdIAXAAQAJAAAEgEQAEgDAAgHQAAgHgEgDQgEgEgJAAIgXAAg");
	this.shape_10.setTransform(-21.6,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbApIgGAAIgEgBIAAgLIAEABIAEAAQACAAADgCQADgCACgFQABgFAAgJIACgwIA2AAIAABRIgNAAIAAhFIgcAAIgBAjQAAANgEAIQgDAIgFADQgEAEgGAAIgBgBg");
	this.shape_11.setTransform(-30.9,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA5IgGgBIAAgMIAGABIADABQAEgBADgBQACgDABgDIAGgOIgghRIAPAAIAXBAIAXhAIAOAAIgkBcIgCALQgDAFgEADQgFADgHAAIgFAAg");
	this.shape_12.setTransform(-39,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATApIgcgpIgMANIAAAcIgPAAIAAhRIAPAAIAAAoIAjgoIATAAIghAhIAkAwg");
	this.shape_13.setTransform(-46.6,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA0QgMgHgGgOQgHgNAAgSQAAgKAEgMQAEgKAGgJQAHgHAKgFQAKgFALAAQAMAAAKAEQAKAEAIAIQAGAJACAMIgQAAQgCgLgIgHQgJgGgNAAQgLAAgJAHQgIAGgEALQgFALABAKQAAAOAFALQAEAKAIAFQAJAGAKAAQAPAAAIgIQAJgIABgRIAQAAQgBAPgHAKQgHAKgKAGQgLAFgOAAQgOAAgMgHg");
	this.shape_14.setTransform(-57,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-10.9,129.9,21.8);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBCIAAhUIAAgJIAAgHIAAAAIgCAJIgCAIIggBTIgRAAIAAhqIAMAAIAABWIgBAGIAAAGIABAAIACgHIACgIIAghTIARAAIAABqgAgJgwQgFgCgCgFQgDgEAAgGIAGAAQABAFAEADQADACAFAAQAEAAAEgCQADgCABgGIAGAAQAAAJgGAFQgFAFgHgBQgFAAgEgBg");
	this.shape.setTransform(35,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA1IAAhqIA0AAIAAALIgoAAIAAAkIAmAAIAAAIIgmAAIAAAoIAoAAIAAALg");
	this.shape_1.setTransform(27.1,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA1IAAhqIAcAAQANAAAHAIQAIAHAAAMQAAAKgEAFQgFAHgHACIAAAAQAFABAEACQAEADADAGQADAFAAAIQgBAPgHAIQgIAHgOAAgAgRAqIARAAQAJABAEgFQAEgFAAgKQAAgMgFgEQgFgFgHAAIgRAAgAgRgGIAPAAQAGgBAFgEQAGgDAAgLQAAgJgGgEQgEgEgGAAIgQAAg");
	this.shape_2.setTransform(19.5,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAzQgHgEgEgIQgEgIgBgKQgBgLAAgKQAAgIABgKQABgKAEgIQAEgJAHgFQAHgFAKAAQALAAAHAFQAIAFADAJQAEAIABAKIABASIgBAVQgBAKgEAIQgDAIgIAEQgHAFgLAAQgKAAgHgFgAgNgmQgFAFgCAKQgCAKAAAMQAAAOACALQACAKAFAGQAFAFAIAAQAJAAAFgFQAFgGACgKQACgLAAgOQAAgMgCgKQgCgJgFgGQgFgGgJAAQgIAAgFAGg");
	this.shape_3.setTransform(10.8,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeA1IAAhqIAeAAQAIABAHADQAIADADAHQAFAHAAAKQAAAMgFAIQgFAEgIADQgHADgIgBIgQAAIAAAugAgSgBIAMAAQAGAAAGgBQAGgCADgFQADgEAAgJQAAgIgDgEQgCgFgFgBQgGgCgFAAIgPAAg");
	this.shape_4.setTransform(2.5,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA1IAAhqIA0AAIAAALIgoAAIAAAkIAOAAQAIAAAIACQAHADAFAFQAEAGABANQAAAKgFAIQgDAGgIADQgHADgIAAgAgRAqIAOAAQAEABAGgCQAFgCACgEQADgEAAgIQABgJgEgEQgDgEgGgCQgFgCgHAAIgKAAg");
	this.shape_5.setTransform(-5.5,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA1IAAguIgQAAIgVAuIgOAAIAZgvQgHgCgEgDQgFgCgCgGQgDgGAAgJQAAgQAJgIQAIgGANgBIAdAAIAABqgAgEgoQgFABgDAFQgDAEAAAIQAAAIADAFQAEAEAFADQAEABAJAAIAKAAIAAgpIgOAAQgGAAgEACg");
	this.shape_6.setTransform(-17.7,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghA2IgEgBIAAgKIACAAIADAAQAFAAADgFQACgGABgLIABgbIAAgvIA6AAIAABqIgMAAIAAhgIgiAAIAAArIgBARQAAAKgCAIQgCAJgFAFQgEAFgIAAIgDAAg");
	this.shape_7.setTransform(-26.3,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeBCIAAgZIg7AAIAAAZIgMAAIAAgkIAIAAQAFgJACgJQADgKAAgLIABgdIAAgbIA3AAIAABfIAJAAIAAAkgAgKgaQAAATgDANQgCANgFALIApAAIAAhVIgfAAg");
	this.shape_8.setTransform(-35,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATA2Igbg2IgMAQIAAAmIgMAAIAAhqIAMAAIAAA1IAlg1IAPAAIghAtIAiA9g");
	this.shape_9.setTransform(100.8,-8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVA2IAAhVIAAgIIABgIIgBAAIgBAJIgDAIIggBUIgRAAIAAhqIAMAAIAABVIgBAGIAAAHIABAAIABgHIADgIIAfhTIASAAIAABqg");
	this.shape_10.setTransform(91.8,-8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEA2IAAhgIgcAAIAAgKIBBAAIAAAKIgcAAIAABgg");
	this.shape_11.setTransform(83.7,-8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAyQgHgFgEgJQgDgIgBgKQgBgKAAgIQAAgJABgKQABgKAEgIQADgIAHgFQAHgFAJAAQAKAAAHAFQAHAEADAIQAEAIAAAKIgMAAQAAgHgCgFQgCgGgEgDQgEgDgIAAQgFAAgFAFQgEAEgCAHQgCAHAAAIIgBANIABAOIADAQQACAGAEAFQAEAEAFAAQAIAAAEgEQAEgEACgHIACgQIAMAAQgBANgDAJQgCAJgHAGQgGAFgMAAQgJAAgHgGg");
	this.shape_12.setTransform(76.1,-8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAFIAAgJIAjAAIAAAJg");
	this.shape_13.setTransform(69.5,-6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyA2IAAhqIAMAAIAABeIAhAAIAAheIALAAIAABeIAhAAIAAheIAMAAIAABqg");
	this.shape_14.setTransform(60.8,-8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZA2IgJggIggAAIgIAgIgNAAIAfhqIAOAAIAeBqgAAOAMIgOg4IAAAAIgNA4IAbAAg");
	this.shape_15.setTransform(50.4,-8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeBCIAAgZIg7AAIAAAZIgMAAIAAgkIAIAAQAFgIACgKQADgKAAgLIABgdIAAgbIA3AAIAABfIAJAAIAAAkgAgKgaQAAATgDAMQgCAPgFAKIApAAIAAhVIgfAAg");
	this.shape_16.setTransform(41.7,-7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUA2IAAg0IgnAAIAAA0IgMAAIAAhqIAMAAIAAAuIAnAAIAAguIAMAAIAABqg");
	this.shape_17.setTransform(32.8,-8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAZA2IgJggIggAAIgIAgIgNAAIAfhqIAOAAIAeBqgAAOAMIgOg4IAAAAIgNA4IAbAAg");
	this.shape_18.setTransform(24.3,-8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeA2IAAhqIAeAAQAIAAAHADQAIADADAGQAFAIAAAKQAAANgFAGQgFAFgIADQgHADgIgBIgQAAIAAAvgAgSgBIAMAAQAGAAAGgCQAGgBADgFQADgEAAgJQAAgIgDgEQgCgEgFgCQgGgCgFAAIgPAAg");
	this.shape_19.setTransform(16.3,-8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAZA2IgJggIggAAIgIAgIgNAAIAfhqIAOAAIAeBqgAAOAMIgOg4IAAAAIgNA4IAbAAg");
	this.shape_20.setTransform(8,-8.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATA2Igbg2IgMAQIAAAmIgMAAIAAhqIAMAAIAAA1IAlg1IAPAAIghAtIAiA9g");
	this.shape_21.setTransform(0.3,-8.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVBCIAAhUIAAgIIABgIIgBAAIgBAJIgDAIIggBTIgRAAIAAhqIAMAAIAABWIAAAGIAAAGIAAAAIABgHIADgHIAfhUIASAAIAABqgAgKgxQgEgBgDgFQgDgEAAgGIAHAAQABAFADADQAFACAEAAQAEAAADgCQAEgCABgGIAGAAQAAAJgFAFQgGAFgHgBQgGAAgEgCg");
	this.shape_22.setTransform(-12.3,-9.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAgA2IAAhqIAMAAIAABqgAgrA2IAAhqIAMAAIAAAuIAOAAQAKAAAHACQAGADAFAEQAEAIABAMQgBAKgEAHQgEAHgHADQgFADgKABgAgfAqIANAAQAHABAGgCQAFgCAAgEQADgFAAgHQAAgIgDgFQgBgEgGgDQgGgBgIAAIgKAAg");
	this.shape_23.setTransform(-22.4,-8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdA2IAAhqIAcAAQANgBAIAIQAHAHAAANQAAAIgEAGQgFAHgHACIAAAAQAFABAEACQAEADADAGQACAFABAHQAAAQgJAIQgHAHgOABgAgRAqIARAAQAIABAFgFQAFgFAAgLQAAgLgGgEQgFgFgIAAIgQAAgAgRgGIAOAAQAHAAAGgFQAEgDAAgLQAAgJgEgEQgFgEgGAAIgQAAg");
	this.shape_24.setTransform(-31.8,-8.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAzQgHgEgEgIQgEgIgBgKQgBgLAAgKQAAgIABgKQABgKAEgIQAEgJAHgFQAHgFAKAAQALAAAHAFQAIAFADAJQAEAIABAKIABASIgBAVQgBAKgEAIQgDAIgIAEQgHAFgLAAQgKAAgHgFgAgNgmQgFAFgCAKQgCAKAAAMQAAAOACALQACAKAFAGQAFAFAIAAQAJAAAFgFQAFgGACgKQACgLAAgOQAAgMgCgKQgCgJgFgGQgFgGgJAAQgIAAgFAGg");
	this.shape_25.setTransform(-40.4,-8.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAhA2IAAhXIAAgHIAAgHIAAAAIgDAIIgBAHIgXBWIgMAAIgWhYIgCgGIgCgHIAAAHIAAAHIAABXIgMAAIAAhqIAVAAIAWBSIABAHIAAAJIAAgIIACgIIAWhSIAUAAIAABqg");
	this.shape_26.setTransform(-50.4,-8.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaA2IAAhqIA0AAIAAAKIgnAAIAAAkIAlAAIAAAIIglAAIAAAoIAnAAIAAAMg");
	this.shape_27.setTransform(-59.4,-8.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeA2IAAhqIAeAAQAIAAAHADQAIADADAGQAFAIAAAKQAAANgFAGQgFAFgIADQgHADgIgBIgQAAIAAAvgAgSgBIAMAAQAGAAAGgCQAGgBADgFQADgEAAgJQAAgIgDgEQgCgEgFgCQgGgCgFAAIgPAAg");
	this.shape_28.setTransform(-67.2,-8.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATA2Igag2IgNAQIAAAmIgMAAIAAhqIAMAAIAAA1IAlg1IAPAAIghAtIAiA9g");
	this.shape_29.setTransform(-75.1,-8.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVBCIAAhUIAAgIIAAgIIAAAAIgBAJIgDAIIggBTIgRAAIAAhqIAMAAIAABWIgBAGIAAAGIABAAIABgHIADgHIAfhUIASAAIAABqgAgKgxQgEgBgCgFQgEgEAAgGIAHAAQABAFADADQAFACAEAAQAEAAADgCQAEgCABgGIAGAAQAAAJgGAFQgFAFgHgBQgGAAgEgCg");
	this.shape_30.setTransform(-87.7,-9.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAFIAAgJIAjAAIAAAJg");
	this.shape_31.setTransform(-94.7,-6.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAFA2IAAhNIgVAAIAAgKIAOgBQADgBADgFQADgEABgIIAJAAIAABqg");
	this.shape_32.setTransform(-101.6,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-19.4,212.9,38.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4COQgLgKgFgHQgEgHgBgJQgEgkArhJQAGgKAHgHIAIgGQADgBAGgBIACACQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAIAEIAIADIAJAJIADgBQAPgyAHgSQANgiAOgfQAJAAAIADQANAFABAJIgDAKQgGAGAAADQAAAKgGAOIgOAgQgBACABAIIgPA6QgEAPgDAbQADAEgBACQAAAKgEAUIABAGQAIAEAFgBQALgBAWgLIAMgGQAEgQAAgIQAHgaABgVIAEggQACgRACgIIAFAAQAEAAAEAEQAFAEACAEQAEAJAAAJQABAEgCAIQADgGAOgJQAOgKAJAAQAKAAALAFQAMAGAHAHIAEAHIgEAGQgDADABACIgHAAQgFgBgFABIgCgMQgTAIgWAiQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgBAFABAAIgCAAIgBACQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIgDABIgBAAIAAACIABABQgFAKgEAGIAAACQgBADgGAGIgDAKQgLAYAEANQgEADgEAAQgCgBgJgFIgCgDQAAgBAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgGgOIgDAHQgNAFgBADQgQAHgHAAIgIABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBAAQgEAAgSgKIgMgRQgDgEgDgPIgEgUQgGAKgGALQgMAWgGAGQgIAIgBAEQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAQgGAEgHAHQgEAGgFABgAhIATIgMATQgEAHgHAUIABAEQgDAEgBAHQAJgOAGgDQABgJADAAQABABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAAgCQADgCABgCIACgHIAAACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAGgFABgDIgBgEIABgEIgDgLQgGAGgCAAQAAAAABABQAAABgBAAQAAABAAAAQAAABgBAAgAnRB3QgPgRAAgeIAAh/QAAgfAPgRQAQgUAfAAQAgAAAQAUQAPARAAAfIAAB/QAAAegPARQgQAUggAAQgfAAgQgUgAm/g9IAACKQAAAiAdAAQAdAAAAgiIAAiKQAAgigdAAQgdAAAAAigAjWCIIgdiwIAAAAIgcCwIghAAIgjkAIAhAAIAXC2IAAAAIAbi2IAcAAIAcC2IABAAIAXi2IAdAAIgjEAgAoWCIIg0h8IAAB8IghAAIAAkAIA5AAQA5AAAAA2IAAAjQAAArgsAGIAzB2gApKgCIAUAAQAbAAAAgaIAAgoQAAgZgbABIgUAAgAr5CIIAAkAIA5AAQAdAAANANQANANAAAbIAAAfQAAAhgbAFQAhAHAAAkIAAAmQAAA1g4AAgArXBtIAYAAQAbAAAAgaIAAgqQAAgZgbABIgYAAgArXgIIAUAAQAaABAAgaIAAgjQAAgZgbABIgTAAgAE+B9QgEgDgBgHQgFAAgJAHIgMAGIgRAAQgLAAgMgSQgJgPAAgFQAAgNgCgHIgOAVQgaAmgMAAIgJACQgIAAgHgGIgLgJIgDgNQAAgRATgjQAPgfAOgSQAJgIAHgFQAEgCAIgJIABgEIAFAAIAEgCQACgBADgFIADAAQAEAEADAAIAHABIADgGQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIABABIACgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQADAAAHACIAIAGQAEAIgCACIABAAIAAABQAAADgMApIgGApIgDAZIABANQAFACAIgCQAEAAAcgNQADgQAIgbIAPguIAFgSIACgCQAAgIACgIIAIgTIAJgCQAFAAADACIABADQAEAAADAGQADAFAAADIgBAOIgFASIgFAPQgFAMAAAEIAFgDQAEAAAkgyQAFgBAKABQAPAFAHAHQAFAKABAEIgGAuQgDAAAAAFIgBAIIAAAAIAAACIADgDQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIA2hAIAJABIAHAEIAGAAIAHAHIACAFQABADACACIABAEIgCAQQgCAQAAAHIAAAYQABAKACADQAEADAKgBIAIgCIAKgEQAEgQANgaQAPgfAOgSQAKgIAHgFQAEgCAIgJQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgCIAFAAIADgCQAEgCABgEIAEAAQAEAEADAAIAGABIAEgGQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAIACgBIABAAQADAAAHACIAIAGQABABABAEQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAADgMApQgDAPgDAaIgDAZIABANQAEACAIgCQAHAAAwgYQgBACgDADIgDADQgEADACAEQgFAFgLAIIABACIACABQgEAAgLAIIgLAGIgRAAQgLAAgMgSQgKgPAAgFQAAgNgBgHIgOAVQgaAmgMAAIgJACQgJAAgGgGIgLgJIgCgHIgEADQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgQAIQgLgFgDAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABQgBAAgHgFIgLgJQgFgGgDgMIgFgXIAAgGQAAgEgCgDIgIALIgDAEIABgDIgCAAIgCAEIACABQgQASgIAKQgMARgGADQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgMAHgDgBQgGABgMgHQgMgJgBgFQgBgLAEgXIAGgdIAAgCIgBgBIACgCQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIgqA1QAAADgCACIgJALIAAAEQgDACgEAHIgIAJQgIAHgEAAIgBAAQgDAAgIgIgAE2BvIABACIACABIgBgFIgCACgAJ6AfQgQAXgFAcIAEAEQAMgPAQgbIAbgtIgEACQgDgCADgDQgWARgMASgADRAaQgLARgJAkIAEADQALgNAOgZIAZgsIgEAEQgDgDADgBQgVAMgJAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-14.3,152.5,28.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATA9IgGggIgYAAIgHAgIgZAAIAfh5IAdAAIAbB5gAgIALIASAAIgJg3g");
	this.shape.setTransform(27.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANA9IgSgxIgJAMIAAAlIgYAAIAAh5IAYAAIAAA1IAZg1IAbAAIgfA1IAgBEg");
	this.shape_1.setTransform(19.1,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPA9IAAg5IgdAAIAAA5IgXAAIAAh5IAXAAIAAAvIAdAAIAAgvIAXAAIAAB5g");
	this.shape_2.setTransform(9.5,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARA9IAAgvIABgWQAAgKACgIIAAAAIghBXIgZAAIAAh5IAWAAIAAAuIAAAMIAAAJIgCALIgBAJIAghXIAaAAIAAB5g");
	this.shape_3.setTransform(0.1,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA9IAAh5IApAAQAIAAAGADQAGACADAFQAEAEABAFQACAGAAAFIgBAJIgDAIIgGAGQgDAEgDAAQAJADAEAFQAFAIAAALQAAAJgCAHQgBAGgEAFQgEAEgEAEQgGACgHAAgAgMArIAMAAQAGABAEgFQADgEAAgLQAAgJgDgEQgEgGgGAAIgMAAgAgMgKIALAAQAGAAADgEQAEgFAAgIQAAgHgDgEQgDgEgGgBIgMAAg");
	this.shape_4.setTransform(-9,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOA9QgIgCgFgFQgFgEgDgIQgDgIAAgMIAAgrQAAgLADgIQADgIAFgFQAFgFAIgCQAHgDAHABQAJAAAHABQAHADAGAFQAFAFADAIQACAIAAALIAAArQAAAMgCAIQgDAIgFAEQgGAFgHADQgHACgJAAQgHgBgHgCgAgKgnQgEAGAAAKIAAAwQAAAKAEAEQAEAGAGAAQAIAAAEgGQAEgEAAgKIAAgwQAAgKgEgFQgEgFgIAAQgGAAgEAEg");
	this.shape_5.setTransform(-18.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPA9IAAg5IgdAAIAAA5IgXAAIAAh5IAXAAIAAAvIAdAAIAAgvIAXAAIAAB5g");
	this.shape_6.setTransform(-27.8,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-12.4,69.2,24.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A3D17").s().p("AmZCBIAAkBIMzAAIAAEBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-13,82,26);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.line1();
	this.instance.setTransform(-73,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-140,146,280);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D0AD92","#856249","#4D301F","#0D0100"],[0,0.459,0.706,1],-58,118,0,-58,118,293.2).s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.face();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHA4IAAgQIAPAAIAAAQgAgCAcIgEgxIAAgjIANAAIAAAjIgEAxg");
	this.shape.setTransform(20.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAgQgKgLAAgUQAAgMAFgKQAEgKAJgFQAJgGAJAAQAOAAAIAGQAIAHAEAKQAEAKgBAKIAAACIg8AAIAAABQAAANAHAIQAHAHAKAAQAJAAAFgEQAFgEADgJIAOAAQgEAOgJAHQgJAHgOAAQgRAAgKgLgAAXgGQgBgMgGgGQgGgHgKAAQgIAAgHAHQgGAGgCAMIAuAAIAAAAg");
	this.shape_1.setTransform(13.9,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbApIgFAAIgFgBIAAgLIAEABIADAAQADAAADgCQADgCABgFQACgFABgJIABgwIA2AAIAABRIgOAAIAAhFIgbAAIgBAjQAAANgEAIQgDAIgFADQgEAEgGAAIgBgBg");
	this.shape_2.setTransform(4.7,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUApIAAhCIgkBCIgRAAIAAhRIAOAAIAABCIAjhCIASAAIAABRg");
	this.shape_3.setTransform(-3.8,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFApIAAhFIgeAAIAAgMIBHAAIAAAMIgeAAIAABFg");
	this.shape_4.setTransform(-12,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAmQgJgGgFgJQgEgKAAgMQAAgMAFgKQAFgKAIgGQAJgFALAAQAPAAAJAHQAJAIACAOIgPAAQgBgJgGgEQgFgFgIAAQgKAAgHAJQgHAIAAAOQAAAPAHAIQAGAJAKAAQAJAAAGgGQAGgFABgKIAOAAQgCAPgJAIQgKAJgPAAQgLAAgIgFg");
	this.shape_5.setTransform(-19.9,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-10.9,52.6,21.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfApIAAg/IgBAAIgYA/IgLAAIgYg/IgBAAIAAA/IgNAAIAAhRIATAAIAYBBIAAAAIAZhBIATAAIAABRg");
	this.shape.setTransform(20.8,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAgQgKgLAAgUQAAgMAFgKQAEgKAJgFQAJgGAJAAQAOAAAIAGQAIAHAEAKQAEAKgBAKIAAACIg8AAIAAABQAAANAHAIQAHAHAKAAQAJAAAFgEQAFgEADgJIAOAAQgEAOgJAHQgJAHgOAAQgRAAgKgLgAAXgGQgBgMgGgGQgGgHgKAAQgIAAgHAHQgGAGgCAMIAuAAIAAAAg");
	this.shape_1.setTransform(11.1,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAgQgKgMAAgUQAAgMAEgKQAFgKAKgFQAJgFAKAAQATAAAKALQALALAAAUQAAAUgLAMQgLALgSAAQgSAAgKgLgAgSgWQgGAJgBANQABAPAGAIQAIAJAKAAQAMAAAGgJQAIgIgBgPQABgOgIgIQgGgJgMAAQgLAAgHAJg");
	this.shape_2.setTransform(2.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfApIAAg/IgBAAIgYA/IgLAAIgYg/IgBAAIAAA/IgNAAIAAhRIATAAIAYBBIAAAAIAZhBIATAAIAABRg");
	this.shape_3.setTransform(-8,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghApIAAhRIAkAAQAHAAAGACQAHABAEAFQAEAEAAAIQAAAHgDAEQgDAEgGADIAAAAQAHACAEADQAEAFAAAIQAAAHgDAGQgDAFgGAEQgFADgHAAgAgVAdIAcAAQAGAAAEgEQADgEABgGQAAgFgFgEQgDgDgJAAIgZAAgAgVgHIAWAAQAJAAADgCQAEgDAAgGQAAgFgEgCQgDgDgJAAIgWAAg");
	this.shape_4.setTransform(-22,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-10.9,57,21.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAgQgLgMAAgUQABgMAEgKQAFgKAKgFQAJgFAKAAQATAAAKALQAKALAAAUQAAAUgKAMQgKALgTAAQgRAAgLgLgAgRgWQgIAJABANQgBAPAIAIQAHAJAKAAQAMAAAHgJQAHgIAAgPQAAgOgHgIQgIgJgLAAQgLAAgGAJg");
	this.shape.setTransform(9.4,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFApIAAhFIgeAAIAAgMIBHAAIAAAMIgeAAIAABFg");
	this.shape_1.setTransform(1.1,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAwQgMgLgEgUIAQAAQACAPAJAGQAJAIANAAQAJAAAIgFQAJgFAEgKQAGgJAAgOIg1AAIAAgKIA0AAQgBgLgEgIQgEgJgIgFQgIgFgJAAQgNAAgJAGQgJAGgDAKIgOAAQABgLAHgIQAHgIAKgEQALgEALAAQAMAAAJAFQALAFAGAHQAHAJADAKQADAMABAKQAAASgIANQgHAOgLAHQgMAHgNAAQgVAAgNgLg");
	this.shape_2.setTransform(-8.4,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-10.9,32.3,21.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMA6IAAgZIAXAAIAAAZgAgKAYIAAgMIAEgJQACgDAEgEIAGgGIAGgGQACgDAAgGQAAgFgDgEQgEgDgGAAQgFAAgDACQgEADgBAEQgCAFAAAFIgYAAQABgMAFgIQAFgJAIgFQAJgFALABQALAAAJADQAJAFAEAHQAEAHABAKQAAAKgGAGQgFAHgHAEIgIAFQgCADgBAEIAAAJg");
	this.shape.setTransform(23.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQApIAAg2IgcA2IgZAAIAAhRIAWAAIAAA2IAbg2IAaAAIAABRg");
	this.shape_1.setTransform(14.8,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglApIAAhRIAtAAQAHAAAGACQAGACAEAFQADAFABAHQgBAGgDAEQgDAFgFACQAHACAEADQAEAFAAAIQAAAIgDAGQgEAFgGADQgHADgIAAgAgPAaIAPAAIAHgBQAEAAACgDQACgCAAgFQAAgFgDgCQgCgCgDgBIgHgBIgPAAgAgPgHIAPAAIAFAAQADgBABgCQACgCAAgEQAAgGgEgCQgDgCgEABIgPAAg");
	this.shape_2.setTransform(5.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAmQgJgGgGgJQgFgKAAgNQAAgMAFgJQAGgKAJgGQAKgFALAAQANAAAJAFQAKAGAFAKQAFAJAAAMQAAANgFAKQgFAJgKAGQgJAFgNAAQgMAAgJgFgAgNgSQgFAHgBALQAAAMAGAHQAFAHAIAAQAJAAAFgHQAGgHAAgMQAAgLgGgHQgFgHgJAAQgIAAgFAHg");
	this.shape_3.setTransform(-4.1,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA5IAAhuIAVAAIAAAKQAFgGAGgDQAGgEAHAAQALAAAIAGQAJAFAEAKQAEAKABANQgBAMgEAJQgEAKgJAFQgIAFgKAAQgGAAgHgDQgGgDgFgGIAAAogAgNgfQgGAHAAAMQAAAMAGAFQAFAGAIABQAIgBAGgGQAEgFABgMQgBgMgEgHQgGgGgIAAQgJAAgEAGg");
	this.shape_4.setTransform(-13.7,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA3QgIgEgEgIQgEgHgDgJQgCgJAAgJIABgRQABgKADgJQADgJAHgGQAHgHALgDIAIgBIAJgCQAEgBACgDIAVAAQgBALgFAFQgGAFgIACIgRADQgJABgGAFQgHAEgCAIQgDAGgBAJIAAAAQACgGAFgFQADgGAIgDQAGgDAIgBQAKAAAJAGQAIAFAFAJQAFAIAAANQAAAMgFAKQgGAKgJAFQgKAGgLgBQgLAAgIgEgAgMAAQgFAFAAAMQAAAMAFAHQAFAGAHAAQAIAAAGgGQAEgHAAgMQAAgMgEgFQgGgGgIgBQgHABgFAGg");
	this.shape_5.setTransform(-23.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-10.9,61.2,21.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghApIAAhRIANAAIAAAgIAcAAQAMAAAHAGQAHAFAAAMQAAAMgHAHQgHAHgMAAgAgUAdIAXAAQAJAAAEgEQAEgDAAgHQAAgHgEgDQgEgEgJAAIgXAAg");
	this.shape.setTransform(51.2,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFApIAAhFIgeAAIAAgMIBHAAIAAAMIgeAAIAABFg");
	this.shape_1.setTransform(43.1,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAlQgHgGAAgLQAAgLAHgHQAHgEAPgCIANgCQAGgBADgCQACgCAAgGQAAgGgFgEQgEgEgIAAQgJAAgFAEQgFAEgBAJIgNAAQAAgNAJgIQAJgHAQAAQAHAAAGACQAHADAEADQAEAFABAFIABALIgBARIAAATIABAFQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIABAAIACAAIAAALIgEABIgFABQgGgBgDgDQgDgDAAgGQgGAHgHADQgGADgJAAQgMAAgHgGgAAHABIgHACIgLACQgFABgEADQgDAEAAAFQAAAHAEAEQAEAEAIAAQAHAAADgDQAGgDADgEQAEgFAAgFIAAgNQgEABgFAAg");
	this.shape_2.setTransform(35.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfApIAAg/IgBAAIgYA/IgLAAIgYg/IgBAAIAAA/IgNAAIAAhRIATAAIAYBBIAAAAIAZhBIATAAIAABRg");
	this.shape_3.setTransform(25.3,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUApIAAhCIgjBCIgSAAIAAhRIAOAAIAABCIAjhCIASAAIAABRg");
	this.shape_4.setTransform(15.4,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUApIAAgmIgnAAIAAAmIgOAAIAAhRIAOAAIAAAhIAnAAIAAghIAOAAIAABRg");
	this.shape_5.setTransform(6.5,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfA2IAAgaIg9AAIAAAaIgNAAIAAgmIAJAAIAFgNIAEgRIABgVIAAgSIA5AAIAABFIALAAIAAAmgAgKgiQAAALgCAKIgDAQIgFANIAoAAIAAg5IgeAAg");
	this.shape_6.setTransform(-2.6,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAgQgLgMAAgUQABgMAEgKQAFgKAKgFQAJgFAKAAQATAAAKALQAKALAAAUQAAAUgKAMQgKALgTAAQgRAAgLgLgAgRgWQgIAJAAANQAAAPAIAIQAHAJAKAAQAMAAAGgJQAIgIAAgPQAAgOgIgIQgHgJgLAAQgLAAgGAJg");
	this.shape_7.setTransform(-11.8,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUApIAAhFIgnAAIAABFIgOAAIAAhRIBDAAIAABRg");
	this.shape_8.setTransform(-20.8,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUApIAAhCIgjBCIgSAAIAAhRIAOAAIAABCIAjhCIASAAIAABRg");
	this.shape_9.setTransform(-29.7,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmA6IAAhxIANAAIAAAMQAFgHAHgEQAHgDAHAAQAMAAAIAFQAIAGAFAJQAFAKAAANQAAANgFAJQgEAJgJAFQgIAGgLAAQgHAAgHgDQgHgDgFgIIAAAsgAgSglQgGAJAAAPQAAANAHAIQAGAJALAAQALAAAHgJQAHgIAAgNQAAgPgHgJQgHgJgLAAQgLAAgHAJg");
	this.shape_10.setTransform(-38.8,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeA4IAAhiIg7AAIAABiIgPAAIAAhwIBZAAIAABwg");
	this.shape_11.setTransform(-49.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-10.9,114.5,21.8);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1D5C6").s().p("AvmD6IAAnzIfNAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#713F21").s().p("AvmD6IAAnzIfNAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyuC9IAAl5MAldAAAIAAF5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-19,240,38);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("ABmAPQgGgGAAgJQAAgHAGgHQAIgGAMAAQALAAAIAGQAGAHAAAHQAAAJgGAGQgIAGgLAAQgMAAgIgGgABtgJQgEAFABAEQgBAGAEAEQAEAGAJAAQAIAAAEgGQAEgEgBgGQABgFgEgEQgEgFgIAAQgJAAgEAFgADyAUQgBgCAAgEQAAgGgCgCQgCgDgHAAIgOAAIAAARIgJAAIAAgnIAaAAQASAAAAALQAAAFgFADQgCAAgCAAIAAABQAHABABAHQAAAJACACgADYAAIAQAAQAJAAAAgHQAAgGgJAAIgQAAgAFZAUIgRgUIgIAHIAAANIgJAAIAAgnIAJAAIAAATIAYgTIAMAAIgWARIAXAWgAANAUIAAgQIgSgXIAIAAIAOATIAPgTIAKAAIgUAXIAAAQgAhsAUIgLgdIgLAdIgKAAIgOgnIAKAAIAJAdIABAAIAKgdIAKAAIAKAdIAKgdIAKAAIgOAngAj7AUIAAgnIAmAAIAAAGIgdAAIAAALIAbAAIAAAEIgbAAIAAAMIAeAAIAAAGgAlDAUIgYgcIAAAAIAAAcIgJAAIAAgnIAKAAIAYAcIAAgcIAJAAIAAAng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-2.1,71.5,4.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AF91").s().p("AATAQIAAgWIgKAAIAAgJIAhAAIAAAJIgLAAIAAAWgAgpAQIAAgfIANAAIAAAfg");
	this.shape.setTransform(-8.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AGwAQIgSgXIgBAAIAAAXIgGAAIAAgfIAIAAIASAXIAAgXIAGAAIAAAfgAFTAQIAAgfIAaAAIAAAGIgUAAIAAAHIATAAIAAADIgTAAIAAAJIAVAAIAAAGgAENAQIAAgfIASAAQAKAAAAAKQAAAEgCABQgDACgFAAIgMAAIAAAOgAETAAIAKAAQAGgBAAgEQAAgFgFABIgLAAgADHAQIAAgfIATAAQAJAAAAAKQAAAEgCABQgCACgFAAIgNAAIAAAOgADNAAIALAAQAFgBAAgEQAAgFgFABIgLAAgACZAQIgEgKIgOAAIgFAKIgFAAIANgfIAIAAIANAfgACJABIAKAAIgFgKgABOAQIAAgQIgSAAIAAAQIgHAAIAAgfIAHAAIAAANIASAAIAAgNIAHAAIAAAfgAjwAQIAAgfIAaAAIAAAGIgUAAIAAAHIATAAIAAADIgTAAIAAAJIAUAAIAAAGgAkhAQIgMgQIgFAFIAAALIgGAAIAAgfIAGAAIAAAPIAQgPIAIAAIgOANIAQASgAllAQIgFgKIgOAAIgEAKIgGAAIAOgfIAHAAIAOAfgAl2ABIAKAAIgFgKgAmwAQIAAgUIgMAUIgEAAIgMgVIAAAVIgFAAIAAgfIAGAAIANAXIAOgXIAGAAIAAAfgAHRgDIAAgKIgEAKIgBAAIgEgKIAAAAIAAAKIgCAAIAAgMIADAAIADAJIAEgJIACAAIAAAMgAG/gDIAAgKIgEAAIAAgCIAJAAIAAACIgEAAIAAAKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.7,-1.6,93.4,3.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AOqBDIAAiFIBsAAIAAASIhaAAIAAAnIBXAAIAAAPIhXAAIAAAsIBbAAIAAARgAMeBDIhWhnIAABnIgSAAIAAiFIASAAIBVBnIAAhnIATAAIAACFgAIeBDIAAiFIASAAIAACFgAFPBDIAAiFIASAAIAAB0IBSAAIAAARgAB6BDIAAiFIASAAIAAB0IBSAAIAAARgAhvBDIAAiFIBtAAIAAASIhbAAIAAAnIBXAAIAAAPIhXAAIAAAsIBcAAIAAARgAlZBDIAAiFIBJAAQATAAALAKQALAJAAARQAAATgOAJQALADAEAMQADAHAAAIQAAAQgKAKQgNANgXAAgAlGAyIAzAAQAeAAAAgXQAAgNgKgFQgGgDgQAAIgxAAgAlGgJIAyAAQAbAAAAgUQAAgNgIgEQgGgCgOAAIgxAAgAoSBDIAAg4Ig/hNIAYAAIAwA+IAyg+IAXAAIg/BNIAAA4gAqtBDIgSgoIg+AAIgTAoIgUAAIA+iFIAQAAIA9CFgAr1AJIAuAAIgXgwgAufBDIAAhgIg1BgIgOAAIg0hgIAABgIgSAAIAAiFIAUAAIA5BrIA6hrIAUAAIAACFgAQbgzQgCgDAAgDQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAADgCADQgDACgDAAQgDAAgDgCgAQcg+QgBACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQACACADAAQABAAAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgDgCgCQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFABgAQjg0IgCgEIgBAAIAAAEIgCAAIAAgJIAEAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIADAEgAQgg6IABAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-6.7,213.2,13.5);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t5 = new lib.Symbol30();
	this.t5.setTransform(-1.7,20);

	this.t4 = new lib.Symbol29();
	this.t4.setTransform(21.3,6.7);

	this.t3 = new lib.Symbol28();
	this.t3.setTransform(-23.2,6.7);

	this.t2 = new lib.Symbol27();
	this.t2.setTransform(-7,-6.6);

	this.t1 = new lib.Symbol26();
	this.t1.setTransform(-18.9,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-28.1,90.2,56.2);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t1 = new lib.Symbol17();
	this.t1.setTransform(0,-142.9);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 2
	this.t2 = new lib.Symbol16();
	this.t2.setTransform(0,-143);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// Isolation Mode
	this.t3 = new lib.Symbol18();
	this.t3.setTransform(0,-110);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// Layer 4
	this.t4 = new lib.Symbol19();
	this.t4.setTransform(0,-70.4);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// Layer 5
	this.t7 = new lib.Symbol22();
	this.t7.setTransform(48.2,174.9);

	this.t6 = new lib.Symbol21();
	this.t6.setTransform(-49.7,174.9);

	this.t5 = new lib.Symbol20();
	this.t5.setTransform(0,157.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t5},{t:this.t6},{t:this.t7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-156,212.9,341.8);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p2
	this.p2 = new lib.Symbol25();
	this.p2.setTransform(-89.1,82.5,1,1,0,0,0,-89.1,40.5);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// p1
	this.p1 = new lib.Symbol24();
	this.p1.setTransform(-77.4,35.5,1,1,0,0,0,-78.4,63.5);

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-105,195,210);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtQWpMAAAgtRIahAAMAAAAtRg");

	// m1
	this.m1 = new lib.Symbol15();

	this.m1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-140,146,280);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.t1 = new lib.Symbol31();
	this.t1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bg
	this.bg = new lib.Symbol5copy();
	this.bg.setTransform(0,0,0.847,0.814,0,12.1,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-19.9,177.9,39.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwcD6IBrnzIfOAAIhrHzg");

	// t12345
	this.t5 = new lib.Symbol11();
	this.t5.setTransform(28.2,9.5);

	this.t4 = new lib.Symbol10();
	this.t4.setTransform(-26.8,9.5);

	this.t3 = new lib.Symbol9();
	this.t3.setTransform(-71.7,9.5);

	this.t2 = new lib.Symbol8();
	this.t2.setTransform(57.4,-8.4);

	this.t1 = new lib.Symbol7();
	this.t1.setTransform(-30.7,-7.4);

	this.t5.mask = this.t4.mask = this.t3.mask = this.t2.mask = this.t1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5}]}).wait(1));

	// bg
	this.bg = new lib.Symbol5();
	this.bg.setTransform(0,0,1,1.023,0,12.1,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-25,210.7,50);


(lib.pen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pen
	this.pen = new lib.Symbol32();
	this.pen.setTransform(-44.9,105.6,1,1,0,0,0,-43.9,106.6);

	this.timeline.addTween(cjs.Tween.get(this.pen).wait(1));

	// refl
	this.refl = new lib.Symbol33();
	this.refl.setTransform(-44.3,107,1,1,0,0,0,-7.3,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.refl).wait(1));

	// line
	this.line = new lib.Symbol34();
	this.line.setTransform(12,45);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-108,194,290);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol3();
	this.t3.setTransform(69.4,10.3);

	this.t2 = new lib.Symbol2();
	this.t2.setTransform(-59.7,10.7);

	this.t1 = new lib.Symbol1();
	this.t1.setTransform(0.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

	// Layer 1
	this.bg = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-19,240,38);


(lib.face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgccAtmMATbhbLMAleAAAMgTbBbLg");
	mask.setTransform(-62.6,-62.6);

	// Layer 1
	this.m1 = new lib.Symbol12();
	this.m1.setTransform(0,-101.4,1,1,0,0,0,0,-101.4);

	this.m1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,269.6,529.2);


(lib.face_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m1 = new lib.Symbol12();
	this.m1.setTransform(0,-101.4,1,1,0,0,0,0,-101.4);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 200;
		    time1 = 4;
			time2 = time1 + 4.0;
		
		var rotKrug = 14.5;
		
		var tl = new TimelineMax();
		
		tl.fromTo(this.blk, 0.8, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.logo.bg, 1.0, {y:"-=50", ease:Expo.easeOut}, 0.0)
		  .from(this.logo.t1, 1.0, {y:"-=50", ease:Expo.easeOut}, 0.2)
		  .from(this.logo.t2, 1.0, {x:0, alpha:0, ease:Expo.easeOut}, 0.4)
		  .from(this.logo.t3, 1.0, {x:0, alpha:0, ease:Expo.easeOut}, 0.4)
		  
		  .from(this.face, 2.5, {scaleX:"+=2.0", scaleY:"+=2.0", /*y:"+=250", */ease:Expo.easeOut}, 0.0)
		  .from(this.face.m1, 7.0, {scaleX:"+=0.2", scaleY:"+=0.2", ease:Power0.easeNone}, 0.0)
		  
		  .from(this.t1.bg, 1.2, {scaleX:0, ease:Sine.easeOut}, 0.6)
		  .staggerFrom([this.t1.t1, this.t1.t2, this.t1.t3, this.t1.t4, this.t1.t5], 2.0, {x:"+=60", alpha:0, ease:Expo.easeOut}, 0.05, 1.0)
		  
		  
		  //2
		  .to(this.t1, 0.8, {y:"+=150", ease:Expo.easeIn}, time1)
		  .to(this.face, 2.5, {y:"-=250", ease:Expo.easeIn}, time1)
		  //.from(this.bg2, 2.5, {y:"+=400", ease:Expo.easeInOut}, time1)
		  .from(this.bg2, 0.7, {alpha:0, ease:Power0.easeNone}, time1)
		  .from(this.line1, 2.5, {y:"-=300", ease:Expo.easeOut}, time1+0.3)
		  .from(this.line1.m1, 2.5, {y:"+=300", ease:Expo.easeOut}, time1+0.3)
		  .staggerFrom([this.t2.t1, this.t2.t2, this.t2.t3, this.t2.t4], 1.8, {y:"+=30", alpha:0, ease:Expo.easeOut}, 0.05, time1+0.3)
		  
		  .from(this.ps.p1, 1.8, {x:"+=300", y:"-=300", rotation:"+=50", ease:Expo.easeOut}, time1+0.5)
		  .from(this.ps.p2, 1.8, {x:"+=300", y:"-=200", rotation:"+=50", ease:Expo.easeOut}, time1+0.7)
		  .staggerFrom([this.t2.t5, this.t2.t6, this.t2.t7], 1.2, {y:"+=50", alpha:0, ease:Expo.easeOut}, 0.05, time1+2.0)
		  
		  
		  //3
		  .staggerTo([this.t2.t1, this.t2.t2, this.t2.t3, this.t2.t4, this.t2.t5, this.t2.t6, this.t2.t7], 1.2, {x:"-=250", ease:Expo.easeIn}, 0.05, time2)
		  .staggerTo([this.ps.p1, this.ps.p2, this.line1], 1.2, {x:"-=250", ease:Expo.easeIn}, 0.05, time2)
		  .staggerTo([this.ps.p1, this.ps.p2], 1.2, {rotation:"+=20", ease:Expo.easeIn}, 0.05, time2)
		  
		  .from(this.face2, 2.0, {x:"-=250", ease:Expo.easeOut}, time2+0.5)
		  .from(this.face2.m1, 3.2, {x:"-=110", ease:Expo.easeOut}, time2+0.5)
		  .from(this.face2.m1, 6.0, {scaleX:"+=0.1", scaleY:"+=0.1", ease:Power0.easeNone}, time2+0.5)
		  
		  .staggerFrom([this.t3.t1, this.t3.t2, this.t3.t3, this.t3.t4, this.t3.t5], 1.0, {x:"+=150", ease:Expo.easeOut}, 0.05, time2+1.0)
		  
		  .from(this.pen.pen, 1.3, {x:"+=300", rotation:"+=100", ease:Expo.easeOut}, time2+1.1)
		  .from(this.pen.refl, 1.3, {x:"+=300", rotation:"-=100", ease:Expo.easeOut}, time2+1.1)
		  .from(this.pen.line, 2.3, {alpha:0, ease:Power0.easeNone}, time2+1.1)
		  
		  .from(this.cta.bg, 1.6, {scaleX:0.0, /*alpha:0, */ease:Expo.easeOut}, time2+1.8)
		  .from(this.cta.t1, 1.8, {scaleX:0.5, scaleY:0.5, alpha:0, ease:Expo.easeOut}, time2+2.1)
		  
		  
		  .call(replay)
		  .to(this.blk, 0.5, {alpha:1, ease:Power0.easeNone, onComplete:restart}, rotKrug)
		  ;
		
		
		function replay() {
			
		  if (count == repeat){
		      //tl.pause();
			  tl.kill();
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
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(2,2,0,3,true).p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(0,-181);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// cta
	this.cta = new lib.Symbol6copy();
	this.cta.setTransform(0,164);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// pen
	this.pen = new lib.pen_1();
	this.pen.setTransform(51,27);

	this.timeline.addTween(cjs.Tween.get(this.pen).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(72.1,-115.3);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// face2
	this.face2 = new lib.face2();
	this.face2.setTransform(-50,-41.5,0.8,0.8,0,0,0,0,-100.7);

	this.timeline.addTween(cjs.Tween.get(this.face2).wait(1));

	// t2
	this.t2 = new lib.t2();

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// ps
	this.ps = new lib.Symbol23();
	this.ps.setTransform(8,46);

	this.timeline.addTween(cjs.Tween.get(this.ps).wait(1));

	// line1
	this.line1 = new lib.Symbol14();
	this.line1.setTransform(-47,12);

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1));

	// bg2
	this.bg2 = new lib.Symbol13();

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(1));

	// t1
	this.t1 = new lib.Symbol6();
	this.t1.setTransform(0,164);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// face
	this.face = new lib.face_1();
	this.face.setTransform(0,-41.5,0.8,0.8,0,0,0,0,-100.7);

	this.timeline.addTween(cjs.Tween.get(this.face).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.8,-244.5,405.9,523.6);


// stage content:
(lib.mbl_240x400 = function(mode,startPosition,loop) {
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