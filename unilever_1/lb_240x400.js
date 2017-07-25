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
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/_3.png", id:"_3"},
		{src:"images/_4.png", id:"_4"},
		{src:"images/_5.png", id:"_5"},
		{src:"images/_6.png", id:"_6"},
		{src:"images/bubbles.png", id:"bubbles"},
		{src:"images/circle.png", id:"circle"},
		{src:"images/drops.png", id:"drops"}
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
p.nominalBounds = new cjs.Rectangle(0,0,220,157);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,247);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,201);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,53);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,43);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,94);


(lib.bubbles = function() {
	this.initialize(img.bubbles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,202);


(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,268);


(lib.drops = function() {
	this.initialize(img.drops);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,188);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD0A1B").s().p("AASBBIAAgyIAAgYQABgKACgJIgBAAIgiBdIgaAAIAAiBIAXAAIAAAxIAAAMIAAALIgBAMIgCAJIAihdIAbAAIAACBg");
	this.shape.setTransform(66.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD0A1B").s().p("AAOBBIgUg0IgKAMIAAAoIgYAAIAAiBIAYAAIAAA5IAcg5IAcAAIghA5IAiBIg");
	this.shape_1.setTransform(56.6,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD0A1B").s().p("AgnBBIAAiBIAtAAQAHAAAHAEQAGADAFAEQAEAGACAHQADAHAAAHQAAAIgDAIQgCAHgEADQgFAFgHADQgGAEgHAAIgVAAIAAA1gAgPgFIANAAQAHgBAFgFQAEgFABgJQgBgKgEgEQgFgFgHAAIgNAAg");
	this.shape_2.setTransform(46.9,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD0A1B").s().p("AAUBBIgGgiIgaAAIgIAiIgaAAIAhiBIAfAAIAdCBgAgJAMIAUAAIgKg7g");
	this.shape_3.setTransform(37.3,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CD0A1B").s().p("AAbBOIAAgaIg0AAIAAAaIgYAAIAAgvIAIAAIAFgNIAEgPIACgQIAAgXIAAgpIBIAAIAABsIAIAAIAAAvgAgFgbIgBAUIgDAOQgBAHgCAFIgFAMIAjAAIAAhYIgXAAg");
	this.shape_4.setTransform(27.1,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CD0A1B").s().p("AgPBBQgIgCgGgFQgFgFgDgJQgEgIABgMIAAguQgBgMAEgIQADgJAFgFQAGgFAIgDQAIgCAHAAQAJAAAIACQAHACAHAGQAFAFADAJQACAIAAAMIAAAuQAAAMgCAIQgDAJgFAFQgHAFgHACQgIACgJAAQgHAAgIgCgAgLgpQgEAGAAALIAAAzQAAAKAEAFQAEAGAHAAQAIAAAFgGQADgFAAgKIAAgzQAAgLgDgFQgFgGgIAAQgHAAgEAFg");
	this.shape_5.setTransform(16.6,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CD0A1B").s().p("AAQBBIAAhtIgfAAIAABtIgYAAIAAiBIBPAAIAACBg");
	this.shape_6.setTransform(6.8,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CD0A1B").s().p("AASBSIAAgxIABgaQAAgIACgJIAAAAIgiBcIgbAAIAAiAIAXAAIAAAvIAAAMIgBANIgBALIgBAJIAihcIAbAAIAACAgAgNg4QgEgDgDgDQgDgEgBgFIgBgKIAMAAQABAHADAEQADADAGAAQAFAAADgDQADgEABgHIAMAAIgBAKQgBAFgDAEQgDADgFADQgFACgGAAQgIAAgFgCg");
	this.shape_7.setTransform(-7.1,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CD0A1B").s().p("AAUBBIgGgiIgaAAIgIAiIgaAAIAhiBIAfAAIAdCBgAgJAMIAUAAIgKg7g");
	this.shape_8.setTransform(-16.8,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CD0A1B").s().p("AAPBBIAAg6IgKACIgJAAQgIAAgGgDQgHgCgEgEQgFgDgCgHQgDgHAAgHIAAgoIAZAAIAAAkQAAAJAEAGQAFAEAHAAIAHAAIAGgBIAAg2IAZAAIAACBg");
	this.shape_9.setTransform(-26.5,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CD0A1B").s().p("AgVBBIgHgCIAAgSIADABIAEAAQADAAADgCQADgDACgFIgkhlIAcAAIASBDIAUhDIAbAAIgjBnQgDAIgDAFIgGAJIgFAEQgEACgEAAIgIgBg");
	this.shape_10.setTransform(-36.1,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CD0A1B").s().p("AgnBBIgGgBIAAgSIADAAIAFABQADAAABgCQACgBABgFQACgFABgKIAAgaIAAg/IBJAAIAACAIgZAAIAAhsIgYAAIAAAwQAAAQgBAMQgCAMgDAIQgDAHgFAEQgGAEgIAAIgIgBg");
	this.shape_11.setTransform(-46.4,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CD0A1B").s().p("AgPBBQgIgCgFgFQgGgFgDgJQgEgIAAgMIAAguQAAgMAEgIQADgJAGgFQAFgFAIgDQAHgCAIAAQAJAAAIACQAIACAFAGQAGAFACAJQAEAIAAAMIAAAuQAAAMgEAIQgCAJgGAFQgFAFgIACQgIACgJAAQgIAAgHgCgAgLgpQgEAGAAALIAAAzQAAAKAEAFQAEAGAHAAQAIAAAEgGQAFgFAAgKIAAgzQAAgLgFgFQgEgGgIAAQgHAAgEAFg");
	this.shape_12.setTransform(-56.2,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CD0A1B").s().p("AAQBBIAAhtIgfAAIAABtIgYAAIAAiBIBQAAIAACBg");
	this.shape_13.setTransform(-66,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-12.9,146.1,26);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD0A1B").s().p("AgHAXIAAgJIADAAIAEgCIABgFIABgHIgMAAIAAgWIAVAAIAAAYIgCAHIgDAHIgGAFQgCACgEAAg");
	this.shape.setTransform(48.3,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD0A1B").s().p("AAjBAIAAh/IAZAAIAAB/gAg7BAIAAh/IAYAAIAAAxIAVAAQAIABAFADQAFADAEAGQAEAEACAGQADAHAAAHQAAAJgCAIQgCAHgEAGQgEAGgFADQgFACgHAAgAgjAuIAOAAQAHAAAEgEQAEgFAAgLQAAgKgEgGQgEgFgHgBIgOAAg");
	this.shape_1.setTransform(40,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD0A1B").s().p("AgmBBIgHgBIAAgSIADAAIAFABQACAAACgCQACgBACgFQABgFABgKIAAgaIAAg/IBJAAIAACAIgYAAIAAhsIgYAAIAAAwQAAAQgCAMQgBAMgEAIQgDAHgGAEQgFAEgHAAIgIgBg");
	this.shape_2.setTransform(27.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD0A1B").s().p("AgnBBIgHgBIAAgSIAEAAIAEABQADAAADgCQACgBAAgFQACgFAAgKIABgaIAAg/IBKAAIAACAIgZAAIAAhsIgZAAIAAAwQABAQgCAMQgCAMgDAIQgDAHgGAEQgFAEgIAAIgIgBg");
	this.shape_3.setTransform(17.2,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CD0A1B").s().p("AAUBAIgGgiIgaAAIgHAiIgbAAIAhh/IAfAAIAdB/gAgJALIAUAAIgKg6g");
	this.shape_4.setTransform(7.6,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CD0A1B").s().p("AgmBAIAAh/IBDAAIAAASIgqAAIAAAfIATAAQAHABAGADQAGADAFAGQAEAEACAGQADAHAAAHQAAAJgCAIQgCAHgEAGQgEAGgGADQgGACgHAAgAgNAuIANAAQAGAAAEgEQAEgFAAgLQAAgKgEgGQgEgFgGgBIgNAAg");
	this.shape_5.setTransform(-1.8,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CD0A1B").s().p("AASBAIAAgwIABgYQAAgLACgJIgBAAIgiBcIgaAAIAAh/IAXAAIAAAwIAAAMIAAALIgCALIgBAKIAihcIAbAAIAAB/g");
	this.shape_6.setTransform(-15.6,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CD0A1B").s().p("AAQBAIAAhrIgfAAIAABrIgYAAIAAh/IBQAAIAAB/g");
	this.shape_7.setTransform(-25.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CD0A1B").s().p("AgPBBQgIgCgGgFQgFgFgDgJQgDgIgBgMIAAguQABgMADgIQADgJAFgFQAGgFAIgDQAIgCAHAAQAKAAAHACQAIACAFAGQAGAFACAJQADAIAAAMIAAAuQAAAMgDAIQgCAJgGAFQgFAFgIACQgHACgKAAQgHAAgIgCgAgLgpQgEAGAAALIAAAzQAAAKAEAFQAEAGAHAAQAIAAAEgGQAFgFAAgKIAAgzQAAgLgFgFQgEgGgIAAQgHAAgEAFg");
	this.shape_8.setTransform(-35.3,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CD0A1B").s().p("AAOBAIgUg0IgKAOIAAAmIgYAAIAAh/IAYAAIAAA4IAcg4IAcAAIghA4IAiBHg");
	this.shape_9.setTransform(-44.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-13,103.5,26);


(lib.Symbol73copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az/a9IAA5KMAn/gcvMAAAA15g");
	mask.setTransform(112,-18);

	// Layer 1
	this.instance = new lib._1();
	this.instance.setTransform(-120,-108);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-108,116,157);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggNAdGMAAAg6LMAwzAAAIPodlIAAcmg");
	mask.setTransform(-160.2,-33);

	// Layer 1
	this.instance = new lib._1();
	this.instance.setTransform(-120,-108);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-108,166,157);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-54,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-123,108,247);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.setTransform(-39,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-100,79,201);


(lib.Symbol70 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4();
	this.instance.setTransform(-108,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-26,216,53);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5();
	this.instance.setTransform(-32,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-21,65,43);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6();
	this.instance.setTransform(-49,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-47,99,94);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007A48").ss(1,1,1,3,true).p("ArZAAIWzAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-1,148,2);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape.setTransform(88.4,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AgWAyIAAhjIAtAAIAAAKIgiAAIAABZg");
	this.shape_1.setTransform(84.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AgRAyQADgYAKgYQAHgVAPgUIgsAAIAAgKIA1AAIAAAKQgHAJgGALQgGALgEAKQgEAMgBAMIgDAYg");
	this.shape_2.setTransform(74,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AAFAyIAAhHIgUAAIAAgJIAKgBQAEgBABgBIAFgGIACgKIAJAAIAABjg");
	this.shape_3.setTransform(66.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AgOAvQgFgGgDgHQgDgIAAgJIgBgRIABgJIABgMIACgKQACgGADgEQADgEAFgDQAEgCAFAAQAKAAAFAFQAFAFADAJQADAHABAJIAAAPIAAARQgBAJgDAIQgDAHgFAGQgFAEgKAAQgIAAgGgEgAgHgkQgDAEgCAGIgCANIAAANIAAAPIACANQACAGADAEQADADAEAAQAFAAADgDQADgEACgGIACgNIABgPIgBgNIgCgNQgCgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_4.setTransform(60.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AgZAyIAAgMQABgFADgFQADgGAEgFIAOgMIADgFIAGgEQADgEAAgEQACgEAAgFIgBgHIgCgFIgEgFQgDgBgEAAQgEAAgDACIgEAFQgCADAAAFIgBAKIgLAAIAAgFQAAgGACgGQABgFAEgEQADgEAFgDQAFgCAFAAQANAAAGAIQAHAIAAAMIgBAKIgFAJIgGAGIgGAHIgKAKIgHAHIgEAFIgBAHIApAAIAAAKg");
	this.shape_5.setTransform(53.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_6.setTransform(48.9,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AgaAyIABgMQABgFADgFQACgGAFgFIAOgMIAEgFIAFgEQACgEACgEQABgEAAgFIAAgHIgDgFIgEgFQgDgBgEAAQgEAAgDACIgEAFQgCADAAAFIgBAKIgLAAIAAgFQAAgGACgGQACgFADgEQADgEAFgDQAFgCAFAAQAMAAAHAIQAGAIAAAMIAAAKIgFAJIgFAGIgIAHIgJAKIgHAHIgDAFIgCAHIAoAAIAAAKg");
	this.shape_7.setTransform(43.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007A48").s().p("AAFAyIAAhHIgUAAIAAgJIAKgBQAEgBABgBIAFgGIACgKIAJAAIAABjg");
	this.shape_8.setTransform(36.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007A48").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_9.setTransform(32.1,4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007A48").s().p("AgNAvQgGgGgDgHQgDgIAAgJIgBgRIABgJIABgMIACgKQACgGADgEQADgEAEgDQAFgCAFAAQAJAAAGAFQAFAFADAJQADAHABAJIAAAPIAAARQgBAJgDAIQgDAHgFAGQgGAEgJAAQgIAAgFgEgAgHgkQgDAEgCAGIgCANIAAANIAAAPIACANQACAGADAEQADADAEAAQAFAAADgDQADgEACgGIACgNIAAgPIAAgNIgCgNQgCgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_10.setTransform(27.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#007A48").s().p("AgLAwQgFgCgEgEQgDgFgBgFQgCgGAAgHIALAAIABAIIACAHQACADADACQADACAEAAQAIAAAEgFQAEgFAAgIQAAgHgCgDQgBgFgCgCQgDgDgFAAIgJgBIAAgIIAHAAIAGgEQADgCACgDQABgDAAgFQAAgIgDgEQgDgFgHAAQgDAAgDACIgFAFIgCAFIAAAIIgLAAQAAgGACgGQABgFADgEQAEgEAEgDQAGgCAEAAQAFAAAFACQAEACAEADQADADABAFQACAEAAAHQABAHgEAHQgEAGgIACQAJACAEAFQAFAGAAAKQAAAHgCAFQgBAGgDADQgEAEgFADQgGACgGAAQgGAAgFgDg");
	this.shape_11.setTransform(20.3,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#007A48").s().p("AgQAvQgHgEgDgHQgDgIgBgJQgCgKAAgJIACgRQABgJADgIQADgIAHgEQAHgFAJAAQALAAAGAFQAHAEADAIQAEAIABAJIABARIgBATQgBAJgEAIQgDAHgHAEQgGAFgLAAQgJAAgHgFgAgJgmQgEADgDAGQgCAFgBAHIgBAQIABASQABAIACAFQACAGAEADQAFADAFAAQAGAAAFgDQAEgDACgGQADgFABgIIAAgRIgBgRIgDgMQgCgGgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_12.setTransform(9.5,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#007A48").s().p("AASAyIAAhZIgkAAIAABZIgLAAIAAhjIA7AAIAABjg");
	this.shape_13.setTransform(1.4,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#007A48").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_14.setTransform(-7.7,4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#007A48").s().p("AgWAyIAAhjIAtAAIAAAKIgiAAIAABZg");
	this.shape_15.setTransform(-12,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#007A48").s().p("AgRAyQADgYAKgYQAHgVAPgUIgsAAIAAgKIA1AAIAAAKQgHAJgGALQgGALgEAKQgEAMgBAMQgCAMgBAMg");
	this.shape_16.setTransform(-22.1,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#007A48").s().p("AAFAyIAAhHIgUAAIAAgJIAKgBQAEgBABgBIAFgGIACgKIAJAAIAABjg");
	this.shape_17.setTransform(-29.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#007A48").s().p("AgOAvQgFgGgDgHQgCgIgBgJIgBgRIAAgJIABgMIADgKQACgGADgEQADgEAFgDQAEgCAFAAQAKAAAFAFQAGAFACAJQADAHAAAJIABAPIgBARQAAAJgCAIQgEAHgFAGQgFAEgKAAQgIAAgGgEgAgHgkQgDAEgCAGIgCANIAAANIAAAPIACANQACAGADAEQADADAEAAQAFAAADgDQAEgEABgGIACgNIABgPIgBgNIgCgNQgBgGgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_18.setTransform(-35.5,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#007A48").s().p("AgaAyIABgMQABgFADgFQACgGAFgFIAOgMIADgFIAGgEQACgEABgEQACgEAAgFIAAgHIgDgFIgEgFQgDgBgEAAQgEAAgDACIgEAFQgCADAAAFIgBAKIgLAAIAAgFQAAgGACgGQACgFADgEQADgEAFgDQAFgCAFAAQAMAAAHAIQAGAIABAMIgBAKIgFAJIgFAGIgHAHIgKAKIgHAHIgEAFIgBAHIAoAAIAAAKg");
	this.shape_19.setTransform(-42.3,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#007A48").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_20.setTransform(-47.2,4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#007A48").s().p("AAIAyIAAgZIgjAAIAAgLIAkg/IAKAAIAAA/IAJAAIAAALIgJAAIAAAZgAgSAOIAaAAIAAgtg");
	this.shape_21.setTransform(-52.4,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#007A48").s().p("AgNAvQgGgGgDgHQgDgIAAgJIgBgRIAAgJIACgMIADgKQABgGADgEQADgEAEgDQAFgCAFAAQAJAAAGAFQAFAFADAJQADAHAAAJIABAPIgBARQAAAJgDAIQgDAHgFAGQgGAEgJAAQgIAAgFgEgAgHgkQgDAEgCAGIgCANIAAANIAAAPIACANQACAGADAEQADADAEAAQAFAAADgDQADgEACgGIACgNIAAgPIAAgNIgCgNQgCgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_22.setTransform(-59,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#007A48").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_23.setTransform(-64,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#007A48").s().p("AAFAyIAAhHIgUAAIAAgJIAKgBQAEgBABgBIAFgGIACgKIAJAAIAABjg");
	this.shape_24.setTransform(-69.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#007A48").s().p("AgNAvQgGgGgDgHQgCgIgBgJIgBgRIAAgJIABgMIAEgKQABgGADgEQADgEAEgDQAFgCAFAAQAJAAAGAFQAFAFADAJQADAHAAAJIABAPIgBARQAAAJgDAIQgCAHgGAGQgGAEgJAAQgIAAgFgEgAgHgkQgDAEgCAGIgCANIAAANIAAAPIACANQACAGADAEQADADAEAAQAFAAADgDQADgEACgGIACgNIAAgPIAAgNIgCgNQgCgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_25.setTransform(-75.7,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#007A48").s().p("AgJAyQgFgDgEgEQgEgEgCgFIgDgLIgBgNIgBgKIABgMIACgMQABgFACgFQACgFAEgEQADgEAFgCQAFgCAFAAQAHAAAGACQAFADAEAEQADAFACAFQACAGAAAHIgLAAIgBgIQgBgFgCgDIgGgFQgDgBgFAAQgGAAgEAFQgEAEgBAGQgCAHgBAGIAAANIABANIACAOQACAGAEAFQAEAEAFAAQAFAAAEgDQADgCACgDQACgEAAgFIACgMIALAAQAAAJgCAHQgCAHgDAFQgDAGgFACQgFADgIAAQgGAAgFgCg");
	this.shape_26.setTransform(-86.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-10.1,184.2,20.4);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AgEAyIAAgnIgeg8IAMAAIAWAxIAXgxIAMAAIgeA8IAAAng");
	this.shape.setTransform(99.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AgbAyIAAhjIAbAAQAMAAAGAHQAHAHAAALQAAAJgDAGQgFAFgHADQAEAAADABIAGAEIADAHQACAFAAAFQAAAOgIAIQgHAHgNAAgAgQAoIAQAAQAIAAAEgEQAEgFAAgKQABgKgGgEQgEgFgHAAIgQAAgAgQgGIAOAAQAGAAAFgDQAFgFAAgJQAAgIgFgEQgEgEgGAAIgPAAg");
	this.shape_1.setTransform(92.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_2.setTransform(86.8,4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AAfAyIAAhRIAAgGIAAgHIAAAAIgDAIIgBAFIgVBRIgMAAIgVhSIgBgFIgBgHIAAAHIAAAGIAABRIgLAAIAAhjIAUAAIATBNIABAHIAAAIIAAAAIAAgHIACgIIAUhNIAUAAIAABjg");
	this.shape_3.setTransform(79.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AAXAyIgIgdIgdAAIgIAdIgMAAIAdhjIAMAAIAdBjgAgMALIAYAAIgMg0g");
	this.shape_4.setTransform(70.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AgcAyIAAgKIAthPIgsAAIAAgKIA3AAIAAAKIgtBPIAuAAIAAAKg");
	this.shape_5.setTransform(63.4,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AgZAyIAAhjIALAAIAABZIAoAAIAAAKg");
	this.shape_6.setTransform(56.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AAXAyIgIgdIgeAAIgHAdIgNAAIAdhjIANAAIAcBjgAgMALIAZAAIgNg0g");
	this.shape_7.setTransform(49.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007A48").s().p("AgbAyIAAhjIAaAAQANAAAHAHQAGAHAAALQAAAJgEAGQgEAFgGADQADAAADABIAGAEIAEAHQABAFAAAFQAAAOgHAIQgIAHgNAAgAgQAoIAQAAQAIAAAEgEQAFgFgBgKQAAgKgEgEQgFgFgHAAIgQAAgAgQgGIAOAAQAGAAAFgDQAEgFAAgJQAAgIgEgEQgEgEgGAAIgPAAg");
	this.shape_8.setTransform(41.9,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007A48").s().p("AgEAyIAAgnIgeg8IAMAAIAWAxIAXgxIAMAAIgeA8IAAAng");
	this.shape_9.setTransform(34.3,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007A48").s().p("AgQAwQgHgFgDgHQgDgIgBgJQgCgKAAgJIACgRQABgJADgIQADgIAHgFQAHgEAJAAQALAAAGAEQAHAFADAIQAEAIABAJIABARIgBATQgBAJgEAIQgDAHgHAFQgGAEgLAAQgJAAgHgEgAgJgmQgEADgDAFQgCAGgBAHIgBAQIABARQABAJACAGQACAFAEADQAFADAFAAQAGAAAFgDQAEgDACgFQADgGABgJIAAgRIgBgQIgDgNQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_10.setTransform(26.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#007A48").s().p("AAMAyIgahOIgCgHIgCgJIAAAIIAAAIIAABOIgLAAIAAhjIASAAIAbBQIABAFIACAHIAAgGIAAgGIAAhQIALAAIAABjg");
	this.shape_11.setTransform(18.3,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#007A48").s().p("AgVArQgIgJAAgRIALAAIABALIADAHQACAEAEABQADACAFAAQAHAAAGgEQAGgEgBgJQABgFgCgDQgBgDgCgCIgFgEIgHgDIgNgFIgGgCQgDgCgDgEIgDgHIgBgKQAAgGACgFQABgFAFgEQADgDAFgBQAFgCAGAAQALAAAIAHQAHAHABAOIgLAAQAAgIgFgFQgEgFgHAAIgHABIgFADIgDAGIgBAGQAAAHACADQADADAEACIAPAHQAMADAFAGQAFAHAAAKQAAAOgIAIQgIAHgOAAQgOAAgHgJg");
	this.shape_12.setTransform(10.5,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#007A48").s().p("AgYAyIAAhjIAxAAIAAAKIgmAAIAAAhIAjAAIAAAIIgjAAIAAAmIAmAAIAAAKg");
	this.shape_13.setTransform(3.5,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#007A48").s().p("AgZAyIAAhjIALAAIAABZIAoAAIAAAKg");
	this.shape_14.setTransform(-3.1,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#007A48").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_15.setTransform(-8.4,4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#007A48").s().p("AAPAyIgNhCIgBgLIgBgOIAAAAIgBANIgCAMIgOBCIgOAAIgVhjIAMAAIANBDIACALIABANIABAAIABgMIABgLIAQhEIALAAIAOBDIABALIABANIABAAIABgMIACgLIAPhEIAMAAIgXBjg");
	this.shape_16.setTransform(-15.7,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#007A48").s().p("AAQAyIgOhCIgCgLIAAgOIAAAAIAAANIgCAMIgPBCIgNAAIgWhjIAMAAIANBDIACALIABANIAAAAIACgMIACgLIAOhEIANAAIAMBDIADALIABANIAAAAIACgMIABgLIAPhEIAMAAIgYBjg");
	this.shape_17.setTransform(-26.9,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#007A48").s().p("AAPAyIgNhCIgBgLIgBgOIAAAAIgBANIgCAMIgOBCIgOAAIgVhjIAMAAIAOBDIABALIABANIABAAIABgMIABgLIAQhEIALAAIAOBDIABALIABANIABAAIABgMIACgLIAPhEIAMAAIgYBjg");
	this.shape_18.setTransform(-38.1,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#007A48").s().p("AgYAyIAAhjIAwAAIAAAKIglAAIAAAhIAjAAIAAAIIgjAAIAAAmIAmAAIAAAKg");
	this.shape_19.setTransform(-50.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#007A48").s().p("AgEAyIAAhZIgaAAIAAgKIA9AAIAAAKIgaAAIAABZg");
	this.shape_20.setTransform(-57.2,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#007A48").s().p("AATA9IAAhOIAAgIIABgIIgBAAIgBAJIgCAIIgeBNIgQAAIAAhiIALAAIAABQIAAAGIAAAFIACgHIACgGIAehOIAQAAIAABigAgHgtIgGgCQgCgCgCgEQgBgDAAgFIAGAAQABAFADADQAEACAEAAQAEAAADgCQADgCABgGIAGAAQAAAFgBADQgCAEgDACIgFACIgGABIgHgBg");
	this.shape_21.setTransform(-64.8,-1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#007A48").s().p("AAXAyIgIgdIgeAAIgHAdIgNAAIAdhjIANAAIAcBjgAgMALIAZAAIgNg0g");
	this.shape_22.setTransform(-72.8,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#007A48").s().p("AgJAxQgFgCgEgEQgEgEgCgFIgDgLIgBgNIgBgKIABgMIACgLQABgGACgFQACgFAEgEQADgDAFgDQAFgCAFAAQAHAAAGADQAFACAEAEQADAEACAHQACAFAAAHIgLAAIgBgJQgBgDgCgEIgGgEQgDgCgFAAQgGAAgEAEQgEAFgBAGQgCAGgBAIIAAALIABAOIACAPQACAGAEAEQAEAEAFAAQAFAAAEgCQADgCACgFQACgDAAgGIACgLIALAAQAAAJgCAHQgCAHgDAFQgDAFgFADQgFADgIAAQgGAAgFgDg");
	this.shape_23.setTransform(-80.4,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#007A48").s().p("AAXAyIgIgdIgdAAIgIAdIgMAAIAdhjIAMAAIAdBjgAgMALIAYAAIgMg0g");
	this.shape_24.setTransform(-91.3,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#007A48").s().p("AATAyIAAgwIglAAIAAAwIgLAAIAAhjIALAAIAAArIAlAAIAAgrIALAAIAABjg");
	this.shape_25.setTransform(-99.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-10.2,210.7,20.4);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AAoBYIAAghIhQAAIAAAhIgPAAIAAgwIAKAAQAFgIADgKQADgKACgLIABgWIABgdIAAglIBLAAIAAB/IALAAIAAAwgAgOgkQAAAagDARQgEATgHAOIA4AAIAAhxIgqAAg");
	this.shape.setTransform(41.7,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AgYBFQgJgHgFgKQgFgLgCgNQgBgOAAgOIABgZQACgNAFgLQAFgLAJgGQAJgIAPAAQAPAAAKAIQAJAGAFALQAFALABANIACAZQAAAOgCAOQgBANgFALQgFAKgJAHQgKAGgPAAQgPAAgJgGgAgOg3QgGAFgEAIQgDAHgBALQgBAKAAAMIABAaQABAMADAIQAEAIAFAEQAHAEAIAAQAJAAAHgEQAFgEAEgIQADgIABgMIACgZQAAgMgCgLQgBgLgDgHQgEgIgGgFQgHgEgIAAQgIAAgGAEg");
	this.shape_1.setTransform(29.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AAaBHIglhGIgQAVIAAAxIgQAAIAAiOIAQAAIAABJIAyhJIAUAAIgsA8IAuBSg");
	this.shape_2.setTransform(19.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AgYBFQgJgHgFgKQgFgLgBgNQgCgOAAgOIACgZQABgNAFgLQAFgLAJgGQAJgIAPAAQAPAAAJAIQAKAGAFALQAFALACANIABAZQAAAOgBAOQgCANgFALQgFAKgKAHQgJAGgPAAQgPAAgJgGgAgOg3QgGAFgDAIQgDAHgCALQgBAKgBAMIABAaQACAMADAIQAEAIAGAEQAFAEAJAAQAJAAAGgEQAHgEADgIQADgIABgMIABgZQABgMgCgLQgBgLgEgHQgDgIgHgFQgFgEgJAAQgIAAgGAEg");
	this.shape_3.setTransform(7.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AArBHIAAh0IABgKIAAgJIgBAAIgCALIgCAJIgeBzIgSAAIgeh1IgCgIIgCgKIAAAAIAAAKIAAAJIAAB0IgQAAIAAiOIAdAAIAcBvIABAJIABAMIAAAAIABgKIACgLIAchvIAdAAIAACOg");
	this.shape_4.setTransform(-6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AgYBFQgJgHgFgKQgFgLgCgNQgBgOAAgOIABgZQACgNAFgLQAFgLAJgGQAJgIAPAAQAPAAAJAIQAKAGAFALQAFALACANIABAZQAAAOgBAOQgCANgFALQgFAKgKAHQgJAGgPAAQgPAAgJgGgAgOg3QgGAFgDAIQgDAHgCALQgBAKgBAMIABAaQACAMADAIQADAIAHAEQAFAEAJAAQAJAAAGgEQAHgEADgIQADgIACgMIAAgZQAAgMgBgLQgBgLgEgHQgDgIgHgFQgFgEgJAAQgIAAgGAEg");
	this.shape_5.setTransform(-19.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AgoBHIAAiOIAoAAQAIAAAIADQAIACAFAFQAGAFADAIQADAHAAALQAAAMgDAJQgEAIgGADQgHAFgIABQgIADgIAAIgVAAIAAA8gAgYgCIAPAAIANgBQAHgBAEgCQAFgDACgGQADgFAAgKQAAgHgCgFQgDgGgEgDQgDgCgGgCIgLgBIgUAAg");
	this.shape_6.setTransform(-30.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AAbBHIAAh/Ig1AAIAAB/IgQAAIAAiOIBVAAIAACOg");
	this.shape_7.setTransform(-41.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-13.6,99.6,27.4);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AAUBbIAAg3IABgcQAAgKACgKIAAAAIgmBnIgeAAIAAiOIAaAAIAAA0IAAAOIgBANIgBANIgBALIAAAAIAmhnIAeAAIAACOgAgOg/QgFgCgDgFQgDgEgCgFIgBgLIAOAAQAAAIAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgIIAOAAIgBALQgBAFgDAEQgEAFgFACQgHADgGAAQgIAAgGgDg");
	this.shape.setTransform(52.6,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AgYBIIgHgBIAAgVIADABIAEABQAEAAADgDQADgDACgGIgnhwIAfAAIAUBKIAWhKIAeAAIgnBzQgDAIgDAGQgDAGgEAEQgBADgFACQgEABgFAAIgJgBg");
	this.shape_1.setTransform(41.6,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AgrBIIAAiPIAxAAQAJAAAHAEQAHADAFAGQAFAFACAIQAEAIAAAJQAAAJgEAHQgCAIgFAEQgFAGgHAEQgHADgJAAIgWAAIAAA7gAgQgGIANAAQAJAAAFgGQAGgGAAgKQAAgKgGgGQgFgFgJAAIgNAAg");
	this.shape_2.setTransform(30.8,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AAUBIIAAg3IABgaQAAgMACgKIAAAAIgmBnIgeAAIAAiPIAaAAIAAA2IAAAOIgBAMIAAANIgCAKIAAAAIAmhnIAdAAIAACPg");
	this.shape_3.setTransform(19.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AgsBIIAAiPIAzAAQAIAAAHAEQAHADAFAGQAFAFADAIQACAIAAAJQAAAJgCAHQgDAIgFAEQgFAGgHAEQgHADgJAAIgWAAIAAA7gAgQgGIAOAAQAIAAAFgGQAFgGAAgKQAAgKgFgGQgFgFgIAAIgOAAg");
	this.shape_4.setTransform(8.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AgMBIIAAh5IgiAAIAAgWIBdAAIAAAWIgiAAIAAB5g");
	this.shape_5.setTransform(-2,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AgUBHQgJgEgFgHQgFgHgCgIQgCgJAAgKIAAgyQAAgaAMgMQALgMAUAAQAWAAAKAMQAMALAAAUIAAAHIgcAAIAAgDQAAgOgEgFQgEgGgIAAQgHAAgEAGQgEAFAAAOIAAA3QAAAOAEAFQAEAGAHAAQAIAAAEgGQAEgFAAgOIAAgIIAcAAIAAAGQAAAKgCAJQgCAIgFAHQgFAHgJAEQgIAEgNAAQgMAAgIgEg");
	this.shape_6.setTransform(-12.3,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AAUBIIAAg3IAAgaQABgMACgKIAAAAIgmBnIgdAAIAAiPIAZAAIAAA2IAAAOIgBAMIgBANIgCAKIABAAIAmhnIAeAAIAACPg");
	this.shape_7.setTransform(-23.2,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007A48").s().p("AgkBIIAAiPIBJAAIAAAWIguAAIAAB5g");
	this.shape_8.setTransform(-33,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007A48").s().p("AglBIIAAiPIBLAAIAAAWIgwAAIAAAiIAsAAIAAAUIgsAAIAAAtIAwAAIAAAWg");
	this.shape_9.setTransform(-42.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007A48").s().p("AgsBIIAAiPIAyAAQAJAAAHAEQAHADAFAGQAFAFACAIQADAIAAAJQAAAJgDAHQgCAIgFAEQgFAGgHAEQgIADgIAAIgWAAIAAA7gAgQgGIANAAQAJAAAFgGQAGgGgBgKQABgKgGgGQgFgFgJAAIgNAAg");
	this.shape_10.setTransform(-52.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-14.2,120.6,28.4);


(lib.Symbol62copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCDSQAAhRA3hFQBChAAUgZQATgXAAgnQAAgrgfAAQgTAAgIAQQgJAQAAAmIhdAAQAAg/AfgnQAjgrBBAAQA2AAAiAeQAiAfAAA2QAAAngMAeQgLAYgWAYQgMAOgtAoQglAmgDAUICWAAIAABLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-39.1,78.2,78.2);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADQIAAkeIhXAAIAAhCIAGAAQApAAAegQQAcgRAFgeIBBAAIAAGfg");
	this.shape.setTransform(-3.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-39.1,78.2,78.2);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj9D+QhqhqAAiUQAAiTBqhqQBqhqCTAAQCUAABqBqQBqBqAACTQAACUhqBqQhqBqiUAAQiTAAhqhqgAj3j3QhoBmABCRQgBCSBoBmQBmBoCRgBQCSABBmhoQBohmgBiSQABiRhohmQhmhoiSABQiRgBhmBog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,72.1,72.1);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD0A1B").s().p("AkUEVQhxhzAAiiQAAigBxhzQBzhyChAAQChAABzByQByB0AACfQAAChhyB0QhzBxihAAQihAAhzhxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-39.1,78.2,78.2);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD0A1B").s().p("ApBVZQkLhxjOjNQjNjOhxkLQh1kUAAkuQAAktB1kUQBxkLDNjOQDOjNELhxQEUh1EtAAQEuAAEUB1QELBxDODNQDNDOBxELQB1EUAAEtQAAEuh1EUQhxELjNDOQjODNkLBxQkUB1kuAAQktAAkUh1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.6,-148.6,297.3,297.3);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD0A1B").s().p("ACDGYIADgPIAGABQAGgBAGgGQAHgIADgPIguhxIAWAAIAhBfIABAAIAbhfIASAAIgpB7IgIATQgEAGgGAGQgGAFgHAAQgJAAgFgCgAFDGZIAAieIANAAIADANIABAAQAFgHAIgFQAJgDAKAAQAXAAALANQAKANABAfQgBAPgDAKQgEAMgHAHQgGAIgKAEQgJAFgMAAIgNgBIgLgEIAAAvgAFeEOQgGAFgDANIAAA4QAEAEAFABQAFACAJAAQAPAAAKgLQAJgMAAgXQAAgJgBgIQgCgFgDgHQgFgGgFgDQgFgDgJAAQgKAAgIAGgAjcGJIgEgdIhUAAIgDAdIgNAAIAAgtIAOAAIAEgIIAGgTQADgJACgTQACgUABgWIBDAAIAABhIARAAIAAAtgAkZE2QgCAMgCAJQgEAKgDAHIAxAAIAAhRIghAAgAmVFqQgJgEgGgIQgGgHgDgLQgDgLAAgOQAAgbANgRQANgOAYAAQAMAAAJADQALAFAFAHQAGAJADALQADAKAAANQAAAdgNAPQgMAPgYABQgOAAgJgFgAmdEzQAAAKACAHQABAIAEAGQADAGAGAEQAHADAIAAQAeAAAAgsQAAgIgCgIQgBgIgEgGQgDgFgHgEQgFgEgIAAQgfAAAAArgAhSFtIgQgBIAAhxIAQAAIAWgBQAWgBAKAIQAKAGAAAPQAAAGgFAJQgFAHgKAEIAAABQANACAFAHQAGAGAAAMQAAASgNAIQgMAHgaABgAhQFdIASABQAQAAAHgFQAHgEAAgKQAAgIgGgGQgHgEgPAAIgUAAgAhQEKIAAAgIAWAAIAIgBIAHgDIAFgGQACgDgBgEQAAgJgEgDQgGgDgNAAIgMAAIgIAAgAICFsIABhRIgBAAIgJAOIgzBDIgKAAIAAhxIASAAIgBBSIABAAIAJgNIAyhFIALAAIAABxgAD+FsIAAhhIgjAAIAAgQIBYAAIAAAQIgjAAIAABhgABQFsIAAgyIgzAAIAAAyIgSAAIAAhxIASAAIAAAvIAzAAIAAgvIASAAIAABxgAnPFsIgmgzIgLAAIAAAzIgSAAIAAhxIASAAIAAAzIALgDIAkgwIATAAIgjAtIgJAIIALAJIAmAzgAC7BbIAAg5IkjAAIAAlIIBTAAIAAD7IB5AAIAAj7IBSAAIAAD7IBUAAIAACGgANZAiIAAh1IgQAAIhPB1IhiAAIBciFQgagKgRgYQgSgYABgfQgBglAVgaQAVgdAdgGQAdgIA9AAIBUAAIAAFIgAMNi5QAAAoA0AAIAYAAIAAhPIgdAAQgvAAAAAngAIPAiIAAi8IijC8IgtAAIAAlIIBRAAIAADCICpjCIAnAAIAAFIgAkAAiIhihyIgJAJIAABpIhSAAIAAlIIBSAAIAAB8IByh8IBlAAIiSChICTCngApWAiIgjhaIi1AAIgkBaIhZAAICsm7IBWAAICrG7gAsPiLIB2AAIg6iZg");
	this.shape.setTransform(-0.9,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ap6N1IgBmFIgghWIhPAAIglBcIj3AAIDlpQIAMAAIADAOIAIAAQA2AAAqgmQAagXAng8QAhgyATgUIAIgJIGeAAQAYADAUAAQAUAAATgDIKjAAQAOATAEAeQAHArgPBcIgFAvIgCAOIB8goIABBvQAKgEAMgDQAmgKBGAAICeAAIAAHfIlVAAIAAF/gAKFhYQAOhkgHguQgOhShMgNQg3gJhAAAQhHAAiLARQh9ARgngIQgHgBgLgGQgHgEgHAAQgKgCgMAGQg4Abg6gBQgcAAgjgFIhGgNIgZgFQibgehZATQgqAIgiAlQgWAVgiA1QgkA3gWAVQgjAigsACIgfiZIAAAAQAJgCAHgFQAMgHANgTQAJgMAPgcQAmhGAfgdQAzgxBLgCIADAAQA7ABBEAZQAqAPBOAoIApAVQA6AdAVAFIAFAFIACgEIAfAHIhThLQhJhPghhnQgmhzAfhZQARgtAcgXQARgNAggIIASgGIAjAAIANAFIADAAIAJACQAUAGAOAHQAKAEAWAOQA8AkAsBCQAaAmAaA3QAJAUAEADIAGAGIAHgGQAHgHAJgMIAMgQQA7g+AsgSQAzgUAVAaQALAOADAcQACAdgGAkQgMA9goBDQgkA8gsArQgMAMgwAlIgLAIIgLAPIAZAAQArAAAzgMQAggHA4gTIA9gTQBJgVAlgHQA8gMA9ABQBCADAzAWQAzAXAbAoQAqBAggBQQgCAJgJAQQgHAOgEAKIgEAKIAzANIAGACIi5A6gAjErJQgkAZgKA0QgKAzAUBAQAXBMAzA1QA5A8BAAAQAWAAAVgIIAHgDIgBgHQgBgIgDgNQgHgRACghQACgbANgkQAKgfANgaQAHgOgFgRQgDgJgKgRIgFgJQgZgtgqgjQg0gpgwAAQgeAAgYAPgACJpsQgYAPgPARQgFAGAAAMIADAeQAEAnAAAYQAAAqgNAjIgIAQQgJASgDAHIgEAOIAQgCQAugHAxhCQAwg+AOhAQAPg/ghgYQgLgHgQgBQgYAAgeAVgAAwn8QgQAMgMAvQgGAWgBAQQAAARAEAVIACAMIAPgFQAHgDAFgIIABgCQAQgZACgiQACgagEglIgBgQg");
	this.shape_1.setTransform(-3.2,-27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA3IAAhvIA+AAIAAANIgvAAIAAAeIAOgBQAPAAAMAIQAPAHAAATQAAAPgKAJQgNANgZAAgAgUgCIAAAuIAMABQAOAAAIgIQAGgHAAgKQAAgMgJgHQgIgDgLAAg");
	this.shape_2.setTransform(58.7,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA5IAAhuQALgDARAAQATAAALAKQAJAJABAPQgBAPgIAHQgLAMgWAAIgMgBIAAAugAgTgrIAAArQAFABAHAAQAaAAABgXQAAgWgZAAg");
	this.shape_3.setTransform(49.6,91.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAoIAAggIACghIgBAAIgNAZIgXAoIgRAAIAAhOIAOAAIgBA/IABAAIAOgZIAVgmIASAAIAABOg");
	this.shape_4.setTransform(36.5,93.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUAoIAAggIABghIAAAAIgOAZIgXAoIgRAAIAAhOIAPAAIgBA/IAAAAIAOgZIAWgmIARAAIAABOg");
	this.shape_5.setTransform(27.1,93.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA5IgBhvIAOAAIABANIAAAAQAKgOAQgBQAPABAJAKQAKAMAAASQAAATgLALQgKALgQgBQgPABgGgMIgBAAIAAArgAgMgoQgGAFgCAHIgBAGIABAWQAEAPAQgBQAKABAGgKQAGgGAAgNQAAgNgGgIQgGgJgKAAQgGAAgGAEg");
	this.shape_6.setTransform(18,95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAfQgMgMAAgTQAAgSAMgLQALgLAPAAQARAAALALQALALAAASQAAAUgNAMQgLAJgPAAQgQAAgKgKgAgQgTQgGAIAAALQAAANAGAIQAHAKAJAAQAKAAAHgKQAGgIAAgNQAAgLgFgIQgGgKgMAAQgKAAgGAKg");
	this.shape_7.setTransform(8.4,93.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAoIAAhDIgaAAIAAgLIBBAAIAAALIgaAAIAABDg");
	this.shape_8.setTransform(0.6,93.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAoIAAggIABghIAAAAIgOAZIgXAoIgRAAIAAhOIAPAAIgBA/IAAAAIAOgZIAWgmIARAAIAABOg");
	this.shape_9.setTransform(-7.6,93.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkA5IgBhvIAOAAIABANIAAAAQAKgOAQgBQAPABAJAKQAKAMAAASQAAATgLALQgKALgQgBQgPABgGgMIgBAAIAAArgAgMgoQgGAFgCAHIgBAGIABAWQAEAPAQgBQAKABAGgKQAGgGAAgNQAAgNgGgIQgGgJgKAAQgGAAgGAEg");
	this.shape_10.setTransform(-16.7,95.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkA5IgBhvIAOAAIABANIAAAAQAKgOAQgBQAPABAJAKQAKAMAAASQAAATgLALQgKALgQgBQgOABgHgMIAAAAIAAArgAgMgoQgGAFgBAHIgBAGIAAAWQAEAPAQgBQAKABAHgKQAFgGABgNQgBgNgFgIQgHgJgKAAQgGAAgGAEg");
	this.shape_11.setTransform(-26.2,95.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAeQgKgLAAgTQAAgQAKgMQAKgMAQAAQARAAAJAMQAHALAAAOIgBAFIg1AAQAAAcAZAAQANAAAJgEIACAKQgLAFgPAAQgRAAgLgLgAgNgWQgFAHgBAIIAnAAQAAgJgEgGQgFgIgLAAQgHAAgGAIg");
	this.shape_12.setTransform(-35.4,93.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAoIAAhDIgZAAIAAgLIA/AAIAAALIgZAAIAABDg");
	this.shape_13.setTransform(-42.8,93.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAiQgGgGAAgKQAAgOANgGQAMgHAVAAIAAgCQAAgSgQAAQgMAAgIAFIgEgKQAKgGAPAAQAfAAAAAfIAAAeQAAAKABAJIgOAAIgBgKIgBAAQgIALgOAAQgMAAgHgHgAgQAQQAAAOAOABQANgBAEgNIABgEIAAgNQggAAAAAQg");
	this.shape_14.setTransform(-54.3,93.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAoIAAgkIgkAAIAAAkIgOAAIAAhOIAOAAIAAAgIAkAAIAAggIAPAAIAABOg");
	this.shape_15.setTransform(-62.7,93.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATAoIAAgiIgJAAQgJAAgDAEQgEADgDAIIgFANIgDAGIgRAAQAEgFABgEIAFgNQADgHAFgEQAEgEAGgBIAAgBQgJgBgGgCQgHgGAAgIQAAgLALgGQAJgGARAAQAPAAALACIAABNgAgMgQQAAAHAHAEQAFAEAIAAIALAAIAAgcIgLgBQgUAAAAAOg");
	this.shape_16.setTransform(38.6,80.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAeQgLgLAAgTQAAgQAMgLQAMgNASAAQALAAAIAEIgDALQgHgDgJAAQgMAAgIAJQgHAIAAALQAAANAIAJQAHAIALAAQAIAAAJgEIADALQgIAEgPAAQgQAAgLgLg");
	this.shape_17.setTransform(31.1,80.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAnIAAhCIgaAAIAAgLIBBAAIAAALIgaAAIAABCg");
	this.shape_18.setTransform(24.1,80.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATAnIAAgfIACghIgBAAIgkBAIgRAAIAAhNIAOAAIgBA/IABAAIAkg/IARAAIAABNg");
	this.shape_19.setTransform(15.9,80.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdA0IgBgZIg3AAIgBAZIgMAAIAAgjIAGAAQAGgJADgIQAFgMAAgRIAAgWIA1AAIAABEIAJAAIgBAjgAgHgbQABARgFALQgDAIgEAIIAjAAIAAg5IgYAAg");
	this.shape_20.setTransform(6.5,82.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbAeQgLgLAAgTQAAgSAMgMQALgKAPAAQARAAALALQALALAAASQAAAUgNAMQgLAJgPAAQgQAAgLgLgAgRgTQgFAIAAALQAAAMAGAJQAHAKAJAAQAKAAAGgKQAHgJAAgMQAAgKgFgJQgHgLgLAAQgKAAgHALg");
	this.shape_21.setTransform(-2.3,80.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggAnIAAhNQAKgBAPAAQAkAAAAATQAAAPgSAEIAAAAQAWABAAARQAAAXgqAAIgXgBgAgRAeIALABQAYAAAAgOQAAgOgZAAIgKAAgAgRgdIAAAYIAKAAQAIAAAGgDQAHgDAAgHQAAgMgUAAg");
	this.shape_22.setTransform(-10.9,80.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAeQgLgLAAgTQAAgSAMgMQALgKAPAAQARAAALALQALALAAASQAAAUgNAMQgLAJgPAAQgQAAgLgLgAgRgTQgFAIAAALQAAAMAGAJQAHAKAJAAQAKAAAGgKQAHgJAAgMQAAgKgFgJQgHgLgLAAQgKAAgHALg");
	this.shape_23.setTransform(-20.1,80.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkA5IgBhvIANAAIABANIABAAQAJgOAQAAQAPgBALALQAJAMAAASQAAATgLALQgLALgPAAQgNAAgJgLIAAAAIAAAqgAgMgnQgGAFgCAHIgBAGIAAAPIABAGQACAGAGAEQAFAFAHAAQAKAAAGgJQAGgGAAgOQAAgNgFgIQgHgJgKAAQgGAAgGAFg");
	this.shape_24.setTransform(-29.1,82.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZA3IAAhhIgxAAIAABhIgPAAIAAhtIBPAAIAABtg");
	this.shape_25.setTransform(-39.5,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.6,-148.6,297.3,297.3);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoTTuQj2hni/i+Qi+i/hnj2Qhsj+AAkWQAAkVBsj+QBnj2C+i/QC/i+D2hnQD+hsEVAAQEWAAD+BsQD2BnC/C+QC+C/BnD2QBsD+AAEVQAAEWhsD+QhnD2i+C/Qi/C+j2BnQj+BskWAAQkVAAj+hsgAoHzPQjwBmi5C5Qi5C5hmDwQhqD5AAEOQAAEQBqD4QBmDwC5C5QC5C6DwBlQD4BqEPAAQEPAAD5hqQDwhlC5i6QC5i5BmjwQBpj4AAkQQAAkOhpj5Qhmjwi5i5Qi5i5jwhmQj5hpkPAAQkPAAj4Bpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-137.1,274.2,274.2);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F6A3E").s().p("AgXFFIgGgBQgIAAgCgDIADgCIACAAIACgJIABgBIACgHIgBgEQAAgHAGABIAAgGQACgJAAgGQAAgCgIAGQgJAGgBgBQgBgDAGgLQAIgNABgMIgBgGQAEgBAAgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIgDABQgDgBgCgCIgKgEIgBADIgEAAIABAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgCAAIgDACIgHAFQgFADgJAAQgIAAAHgHIAEADQgDgEACgKQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIABgGIgDgBQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgEgBIgDABIgEABIABACIAAABIgHACIABAFIAGACIAEAFIgIAIIgCgEIgFgBIAFgCQABgBgDgEQgDAEgDACQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgGIgDgBIgCAEIgGACQAAACgGAAIABgEQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABIgEADIAAAAQgCADgDABQgEAAABgDQABgEgBgBIgHAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAABQgBABgFgBIgCACIgCABIgDAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgDAGgGIAFgEIAAgDIgHACIgDAAIgCgBIgJADIgGADIgFgCQgDACgEABQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAEgEIgHgBIgGACQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQgEAEgBgEQgCABgDAAQACgEgBgCIAAgCIgBABIgCAAIgBAAIACgCIABgBIgDgBIgDABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIgDACIgCABIgBAAIAAAAIgBAAIgBgBIgBgDQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIACgCQABAAABgBQAAgBABAAQAAgBAAAAQAAAAgBgBQgCgBgGAEIgBACIgDgCIgBgDQAIAAADgEIgDgBIgCAAIgHADQgEACgDgBIACgCIABgEQgCACgKAAIgDgBIgFgBIABgEIABgBQAFgLgGACIgFAFQgCACgEABQgBgDABgCQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAgBgBQAAgBAAAAQgBAAAAgBQgBAAgBAAIAAgDQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAGAAADADIACgEIAEgDIgHgBIgFACQAAgFgCgCIgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIAEgDIAEgCIABgCIADgBIACADIgFABIgCAGQADACADAAIACgHIAEgGIgHgGIgFgHQACgCABgDIADAAIABAEIAJABIgCACIAAACQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAIgBAEIAEgBQABAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAgBIgCgBIgBgCIgEAAIgBgEQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBIADgEIgEgBIgCgBIACgBQAFgCAGAEQAGABAGgCQAHgCAAgEIgDgBIgDABIgCgDIgEAAIABgDQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABIgGACIgDgEQgBgBAAgFIgDAAIgBgCQAHgCAHAAIgFgDIgDgBIgBgDQABgEAFgCQAIgCAKAAIADAAIAEABIADABIAFACIAEgEIgGAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAgBQABgCAFgCQAEgBABgDIAHgDIACgBIABAAIABAAQAEgCADADQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIADgDIADgBIADgCIADgCQAEgCADAAIADABQABAAABgHIgDgBQgCACgFAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFABIgJAAIAAgEIgEgBIgDgBQgCACgFAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgEACgDABQgGAAgBgBIACgCIADAAQAKgEABgHQgEACgJAAQAAAAgBgBQAAgBAAAAQAAAAgBgBQgBAAAAAAIgBAAIgDgBIgDABIgBgGQAAgDABgCIABgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFAAIgEgBIgEgCQgGgBgBgCQgDgDgGgEIAEgFQACgCAEAEQADACAKABIgBgBQALgEAFAEIABAAIAEAAQAHADADgCIACgFQAGgCABAFIAFgCIADAAIAFgBQgDgFgGABIgFABQgCgEgEAAIAAgDQgGAAgCgIIgCAAQgBAEgCAAQgDAAgCgCQgCgDACgEQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQABgBAAAAQAAgBAAAAQAAAAAAAAIgFgBIABgEIAIgCQABADADADIAGgCIADADQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAFAGADABIAIAAIAFAAQAAAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBIgKgDIgBgEIgFgCQADgEgBgBIgFgDIgFgDQgBAAAAgBQgBAAAAgBQAAAAABAAQAAAAABAAQAEAAADABIADgBQACgBAFACIALAFQABgEACgBIADAAQABABAAAAQABAAAAAAQABABAAAAQAAAAAAABIAAADQABACAEAAIAFABQAAAAABAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgDIgEAAIgEAAIgEAAIACgDIACgDIgFgBIgMAAIgEgFIACgIIgIgCIABgCIAAgDIgBgHIgBgCQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQABgBAAAAQAAgBAAAAQAAAAgBgBIgGAAQABgBABgFIgEAAIgBgCIAGgBIAGACQAGABACAGIADgBIACACIAIAHQAEACAAABQAGAAAAgCIACgEQACgCAMABIARABIgBgEIgCgCIgFgEQgEgDgDACIgEACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIABgEIAFgCIAAgEIgFAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgDgDQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgDgBgCgEQgCgEgEAAQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAIgCgEIgDgDQADgBAEAAIAFgDIgDgGIABgEIADgDIgCAAIgCgBIgBgCIAFABQAHAAABABQABABAFAAIAAAFIAJAIIAFABQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAIADACIAFABIAAgDIgDgCIACgEIgDgBIgFgDIgDgBQABgEADAAIAAgDIgDgBQABgDABgBIADgDIgGgCIABgBIADgBIAFgBQABAEACAAIAEgCIAFAFQACAEAEgGIgGgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIgEgBQgEgEgBgDQALAAgBgFIAAAAIgGgHIgEgDIgBgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIgGgBIADgFQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgEIAMgCIgGgGIAGAAIAAAEIADAAIACgEIACABIACACQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIACADIACACQAEAAACgCQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBgGIgEgBIACgBIgBgDIgCgBIgBAAIAHgBIAFAAQAAgBABAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgDgCgEAAQAAgEgBgCIADgBIAJgDQgBgEgGgBIAAgDIACAAIAEABQADABACgBQgBgBAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDACIgBgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAIgBgFQgBgFADgCIACgBIAEgBIACgDIACADIABABIAFADQAEAAgBgEIgDgFQAGABAAADIABADIACABQAHAAABgEIgFgHIACgDIgEgFQgDgEgCgBIgCgCQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIACABQABAAAAAAQABAAAAgBQABAAABAAQAAAAABgBIAGAGIAAgEQAAgBADgDQAFABADAEIAGgEQACgCAFgBIgCgEIABgHIAEgEQABgDAGgCIACgFIABgBIADgFQAGACAAADQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIgBAEIgDABIAEAGIAFAEIgIACIAEADQACABAEAFQACAEADAAQACgDAFADIAEADQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAgBAAQgBgBAAAAQgBAAgBAAIgBAEQADACADAAIAIgBIABAJIAOgGQAAAGgDADQgEACAAAFIAEABIgDACQgCAAgDADIAFADIACACIAEAAIgEgDIAEAAQABACAEAAIABgGIgCgBIADAAIAAACQAFAAAEgCIgBABQgEACAAAFIAEABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIADAIIgGgDQgCAFAAAKQAEAAAEACIACABIABgBIAAACQAAAFgFABIgDACIgDACQAEABADgCIAEABIADABIgEADIABACIACABQgEAAgCAFQACACAGADIADgEQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAEgBIgCAEIgEACIAHACIAHACQgBADgCABIADADIAAABIABABQAAABABAAQAAABAAABQAAAAAAAAQgBAAAAAAIgFgBIABAEQAAAEgEAAIgEAFQgEAEAEACIAJACQAFABABACIgEADQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgEAAIgBADIAHABIABgDIAFABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIgGACIAAADIAEACIABADQgDAAgCACIAEADIACADQgHAAgBAEIgBABQgBAGAFAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQADABACgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIADABQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgEQAEAAAFgEIACgCIAGACQAEABACgCIgDAGIgCAGIgDAFIAAAAIgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAFIAAABIABAFIAAABQgDgCgEAAIgIgBIgBADQgEgBgCADIAFACIgFABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQABAAABAAIAGgBQAHAAABACIADAEQADADAEgDIAHgGQADgDADgBIAEgDQADgDACgBIAHgCIAFABIgBADIgEABIAEADIgHACIgBABIABADQgDAEgBAEIAAAJQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgDAAIAAACQgBACACAEIgBADIgBADIgFAAIgFABIgGAAIgCABQABABAAAAQAAABABAAQABAAAAAAQABAAABAAIAAADIgCABIgDAAIgEgCIgEABIgDAAQgDAAgCACIAFAGIgDABIgBgBIgNABIgFACQAAAAAAABQAAABAAAAQABABAAAAQABAAAAABIAMAFQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBIADgCIAGgBIACAEQABABAFAAIAFgBQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAgBQAEADAEgCIAIgDIAHgCQACAAAFADQACgDACAAIAGAAIAFgCIADgDIADABIADABQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABIgFgBQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAABgBAAIAFAFIgEACIgEACQABADgCAEQgCADgDgCIgBgBIgDgCIgDAFIgCADIgCAAIgHAHIgGgBQgCAAgFADIAAAIIgHAEQgFABAFAAIANAAQACgCABAAIAGgBIAFgCIAGABQAEAAAHgFQADgBAJABIADAAIgCAEIAHgBIAHgEQACgCAEAAQABAFACACIgEADIgDABIgCADIgFABIgFACIgDACQgCABgDgCIgEgBIgEACIgEABQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAEABQgBAGgCABIgDgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABIgDABIgFgBQAAABAAABQAAABAAAAQAAABAAAAQAAABABAAIACACQADgCAEAAIACABIACgBIABAAIADgBIAGgCIAGABIABAHQAAAEgGgBIgIgCIACAEIABACQAAAFgMgFIgBACIgDABQAAAEABACIAEAEIAAABIgCAAIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgHAAQgBgCgIgCIgEgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIABABIACACQAEAEgEAAIgHAAIABgGIgDAAIABADQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQgBgBAAAAIAAADIgCACIgCAEIgCAAIgFADQgEgCgBAAIgHAEIgEgCQAAAAgBAAQAAABAAAAQgBAAAAABQAAABAAAAQADACADgBQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAEABQACAAADgDQADgBADAEIAEgCQAGAAAFAFIAFACQAEACACgBIAFgBIAIgBIAGAAQADABABADQAAABAAAAQAAABAAABQgBAAAAAAQgBABgBAAIAAADIALAEIADgCIADgBIAEgEQACgBAHACQAHAEACAEIgFADQgEACAAACIADABIABABIgEAAIgBAGQgDAAAAgEIgGAFIgHgBQADAFAEAAIAKgCQAEgBADACIAEgCQACgCAGADIgBACIgDAAQABADgCADIgFAEIgEgCIgEgCIAAAEIgDABIgFACQAAAAAAAAQgBAAAAAAQgBAAAAABQAAABgBAAQAGAEAIgBIAAgEIADABIADACIgBAAIgCABIgBACQACABAFgCIACgBIADAAIAEABQgCADgEAAIAEABIACACIAAgBIADgBIABgDIADAAIABACIACADIgCAEIgDADQgCADgDACIgCABIADAFQACAEABAEIAFAAQAAgFgCgCIgEgDIADgCIACACIAGADIABACIADAGIgDAFIAAADQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDgBIgGACIABABIAEACIAAADIACgCIADAAQAEgBABABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgCACIAAADIADACQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgDgDIgFgFQgEgDAAAFIADAHIACAEQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgIABIgKgBIADAGQgDAAgEgCQgFgCgBAAQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIADADQgCAEgEgDIgDgCQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIADACQABADgEACQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAIgCgCQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIACADIgGAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAIABACQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAADIACADQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAgBAAIgEAAIAAACIgGAAIgGABIgDAAIAAAAIgBgBIgDACIABADIADABIAEAEIgEABIgEgCQgBAAgGACIgHgEIgJgDIgBABIABACIgFgEIgGgCQAAAGADACQAGAEACADIAAAGIgFgBIgCgCIgHAAQgBgGgDgBIgJgBQAAAGADABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgCAEgFgEQgFgEAAgDIgDABIgBADIgIgFQgGgCgCAFQgBAAgBgBQAAAAgBAAQgBAAAAAAQAAAAgBAAIgDABIgEAAQABABAAAAQAAABABAAQAAABgBAAQAAAAAAAAQgCABgEgEIgCgCIACgFIABgCIACgBIACADQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgCgEQABAAABAAQABAAAAgBQAAAAABAAQAAgBAAAAQgBgDgFgBIgDgBIgBgCIgBgCQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAIgEACIgBgCIgEgBIABAFIgBAAIgCAAIgBAGIAAAEIAAAAQgBABgBABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAFAGgFAAIgIAAQgEAAgDgDIgHgEIgDgCIgCAAIgBgBIgCgFIgCgDIgGACQgCACgEABIAAAFQgCgBgDAAQAAAGAEABQAAAFgCACQgBADAGAJQAFAKAAADQgCAKgFACQgEACAAACIAAAGQAAABAAAAQAAABABAAQAAAAABAAQABAAABgBIABAIQgBAFABACIADAJQAAACgGADIgDACQgIADgGgBIgPgCQgDADgIAAIgLgBg");
	this.shape.setTransform(-0.7,-24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F6A3E").s().p("AgkCrQAAgFAOgOIAFgGIACgFQAEgKgFgJQgFgIAFgMIAEgIQgMgIAAgHQADgJAAgGQAAgMgPANQgQANADAKIABAJQgBAFgMALQAEAJAIADQAHACACAHIgFAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQgJgFgHABQgMACgBAGIAAAMQAAAGgHAFQgCgEABgDIAFgFIgJgMIAHgEIAFgDQAFgDAAgCIgBgJQAAgHADgBQAHgCAEgHQgBgFgCgCIgFgGIADgFIADgEIAHgFIABgBIAPgLIABgBQAGgFAAgJQABgNABgEIABgCIABgCIgPgIIAHgMIAAgBIgBAAQgEgGgFADQgGAFgEACIAAALIgCAAIAAgLIACAAQACgEAHgIQAFgFgFgLIgBgGQABgDAEgDIAIgDQAFgEgCgEQgEgHAAgFIACgHQAGgJgIADIgBAAIgCACQgMAGgGAVQgJAbgGAJQgEAFAAABQACACAAAEIgBAEIgCAFIgEAMQgBADgIAFIgPAMQgIAHABACQABAEgCAFQgHgGgGABQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBADgEADIALAMIgDADQgGAFgBAFIgBAJQgBACgHABQAEgGAAgHQgBgFAIgFIgEgGQgDgEABgFQABgGADgCQAOgIAEgEQAEgDALgHQAKgHAAgHQABgEgCgFIgHADIgMAEIgFACQgLAAgIABIgIADIAAAAIAAAAQgGAEgBAHQAAAPgMAIQADgGABgHIABgNQABgHAEgEIAKgFIAfgFQAIgDANgLQANgOADgIIAEgbQABgDABgHQgMABgDAHQgDAIgDAPQgEAMgRAFIgDABIgFACQgSAFgEADQgIADgFAOIgIAIQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAEgMQADgHAHgEQAHgHARgGIALgDIAEgDIAMgZQABgHABgCIAFgGIgOADIgBABIgFADIgEAFIgDAEQgCAIgFAJIgDAEIgBABQgGAJgLACQgIACgQAAIgGAKIgHALQgFAHgJAGQgIAGAIgLIADgDIACgFIAIgUIALgFIASgDQALgCAGgGIAEgFIACgGIABgBIABgIQgBgGgDABIgIACIgLABQgJAAgBAFQgBAHgEACIgSANIgFACIAFgHIALgJIADgEIgCgBQgCgDgHAFIgKAGIgVAIIgBABQgGACgEADQgEADgEAAIADAHQACAEAAACQgBAEgEADIgHADIgBAEIgDAEQgIAIAEgKQADgKAJgGQgEgGABgDQAAgCAGgIQgHgBgEgGQAGgCAJABQAJAAAOgGIAWgKIANgEQAIgDALgCIAygPIABgBIACgCIAGAAIgKAAQgFACgKAAIgMABIgDABIgHACQgIACgFAJQgDgCgJAAIABgBIAJgIQgEgCgMABQgNABgEgBIgGgCQgJgCgTAHIgCAIIgGADIgDAAIgBgBIgKgGQAPAAgBgCQgCgGARgFQAKgEAJACQAPADAHAAQAGAAAEgCIAKgCIABAAIAVgDIADgBIAIgBIAKgCQADgCAAgGIgVAAIgIACIgBAAIgfADIgHACQgDAAgDgFIAXAAIgBgGQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgHgBgqADQgkADgIgFIgUAAQgOACgDAAQgHAAgLgDQgIgDhRACQhQACgHgDQAEgGALAAIARAAQAdgCACgBQACgCABgKQAGgDAJADQAIACAPAAQALgBAGgCIAAAAIAAAAIAFgCIgHgIIARABIAkADIgEgFIgIgDQADgFAIACIADABIABAAIAYgCQAHgCARADQAQACAEgBIgFgHQgCgBgGgBQAEgFALADIATAEIABgEIADgCIACABIAHAEIALgDQANgBAMAFIACgIQAIAAAGADQADABAHgFIgHgIQAJgEAFALIABACQAFgBACgDIACgFIAMgNQAAAGgBABIgDAFQgCAEAAAGIAOgJIAHgEQADgCAGAAIgJAKIAKgBIAHACIAHAEIAEgJIAJAEQADgFADgBIAHgEQAKgGAIgVIBKAAQAGAbAcAQIAHADIAEAAIABgCQAAAAABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQgEAAADgHIALALQAHgBABgCQAAgBABAAQAAAAAAABQABAAAAAAQABABABAAQACACgBAEQgBADACACIACgHQABgCAEgBIAEgCIAWgHIACgDQAGgHABAEQAAAEgGAHQgGAGgEAFQAGADAHgEIANgGQADgBAHACIgJAEQgGAEAJABIAAAIIAUABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIADAAIACAAQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAABgBQAJgGACACIgDAMQAJAAAEgCQAGgEAAgCIgCgDIgEgEQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAACAAQADAAACADIACAGIADgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAGgJQADgFAFgDIgBAGQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgDAFIgBACIAAABIAAAEIACACIACgEQAAABAAAAQAAAAAAgBQABAAAAgBQABAAABgBIAFgFIAFgFIAJgBIgFAFQgDACAAADQAAAEAKAJIADgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAIgIIAAAEIAEACIAGgGQACgCAHAAIgCAIIAGAEIADgHIADgFIAEAFIABABQAMgIAGADQAEACAJALQAFgDAHgLQAGgLAHgCIACgBIABABIABABIgCABIgBACIgBABIgCADIgIALQgFAIADACIAZgSIAEgCIAGgBQgCAEgBAFQgFAAgDACIgEAGIAKAAIAAAHIgGABIACABQABAAAAAAQABABAAAAQABAAAAAAQAAAAABgBIAFgHIAIAHIAFgHQACgCAFgBIAQgFQACAGgCADQgEAEgBAGQAKAAAKgBQAFgBADAGIAgADIAEAAIACAGQgEAFgGABIgKgBIhmAAQhBgCgSAEIgqgEQgNAAgGACIgLACIg3gDIADAEQAAAAAAgBQAAAAABAAQAAAAABAAQABABAAAAIAHADIgHAAIgJAFQgEADgJgCQgLgDgEAAQgFABgHgDQgKgDgLgBQAEAGAIACIASABQgDAEgLAAQgKgBgEAFQAMAGAdAAIAtgBQAMAAANACQgDAFgfgCIgrABQAIALAMADIAYAGIAWAHQAGABAFAMQAFAMAHAAQgGABgLgLQgLgKgDgBIgBAAIgJgCIgLAMIAGAEIAHAFQADAEAAAFIAAAIIAaAIQABADgLgDQgLgCAAAEQAAAIgEAFIAKACQgBAHgFADIAAgGIgGgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgCgCIgFAAQABAHACADIAIAJIAJAGQAGAEACACQABABAAABQABABAAAAQAAABAAAAQAAAAgBAAQgDAAgDgCIgGgFIAAAAIgBAAIgLgEQAAAJAEAFQADAEAIAGIgLARIgGgFIAEgEIADgFIABgCIgBgCIgBgCIgBAAQgIgFgCgMIgFgVIgGgLQABAIgIgMIANgGQgGgIABgDIAHgIQgQgKgFADQgEAHgHACIAAAEIAEABIAAADQABAFgBABIgCABIgCAGQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBgJgBgDQgCgHgJAAQABgFACgCIAHgDIAFgDQgEgGgFgDIgQgKIgBgBIgFgDIgDgEIgCgFIABgBQgCgFgDgBIgSgCIAHAcIABABIAXAPIABAAIAGAKIAAAAIgGAHIgFAGQgDAEAAAFQABAEABABIAEACQAHAFABACIACAMIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABABQADABABAEQANAAADABQADADAFAAQAAgdgEgCQgEgCgBgHIANgDIgCAFIAAABIAAABIACAEQACAEAAAFQAAAOgDANQgBAHAHAKQAGAKAHACIAKAGIAAACQgEABgDgBIgGgDQgFgFgGgCIgFAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgKQgDgLgOgGIgFgCIgDgDQgHgBgFgEIgNgKIgFALIANARIgEALQgCAFgGAEQgHAEgCADQACAEACADIAHAGQAIAJADAAQADABAIAAQAFAAADADQAFAFgJAHQgBgJgHgCQgFgCgHACQAEAHAAALIAAAHQAAADgEACQgCgFABgFQAAgDgDgHIgFgKQgFgMgHgBQgFAAABgKIgGAAQAAgJAIgEIARgIIgBgHIgDgEQADgCgGgIQgGgIABgDQAGgJAAgFIgEgOQgCgHALgMIABgBIAGgFIgHgGIgEgCQgHgEgFACQgIADgDAAQAGgJgCgFQgFgGgEgJIgBgDIAAgBIgBgCQgCgFgIgHIgNgLIgDgDQgGgGgMgBIgDAAIgBABQAAAAAAAAQAAAAAAABQAAAAABABQAAAAABABIABABIAHADQADABADAGQgCAEgCABIgIACIAEAHQABADgEAAQgHAAgCADQgEAEACABQADACAAAFQgBAEgIAGQgGAFABAGIgBALIgEgCIgEgHIgCgEIADgFIABgBIADgFIACgFIAFgBQgFgIABgBIAFgMIABgBIAFgKIgNgPIgDAGQgFAHABAMQABAIgJAFIgNAJQABAOAEAFQAEAFAIAEIgEAGIgCAHIAGACQADABABADIABALQACAEAJAEIAKAHQgHAAgEgDQgHgDgEAAIgCABIgBAAIgCADIAAADQAAAEAGAGQAEAFgEAUQALADgDAMIgDATIAIAYIACAMQABAGgFgGIgHgGIgCAIIgFAEQgPAOADAJQACAJgHAFIgCgXgAClAGIAIADIgEgEIgEABgABShAIAAAEQAKAAAEADQAFADAKABQgBAPAHAFIAYAMIAGgFQABgBAGgBIgBgJIgCgBQgHgBgGgEIgsgVIgHgBIgFABgAA0hJIALANQADgFABgDIgGgBIgDgCIgFgCIgBAAgABPhQQABABAGAAIgEgFQgBgBgGAAIAEAFgAhVhcIgHACIgFAHIAJgBIAQgFQgCgEgDAAIgIABgACJheIAKABQAGAAgBgBIgNgCgAE+h6QAEACADAAIAJgCIgJgIgAiwCGIAFAEIgFADgAisCCIgBAAIABgGIAEABIgBAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAAAIgCgDgAioB6QAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIADAAIAAAAIAAAAIAAAAQABgEADgCIAJgEQAKACgEABQgNAEgGADQAAAAAAAAQAAABAAAAQgBABAAAAQgBABgBAAIgCABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAgACNBmQABgCAGgEIgCANQgGgEABgDgAAPBSQgBgIABgJQABgIACgDQACgDAHgDQAOgGABgDQABgEgFgGIgGgJQgCgDADgEIACgEIAEAAQANAbgBAEQAAAHgUAFQgIACgBACIgDALQgBACACAEIADAGIgDAEQgDADABAEQgCgBgBgHgAitBOIABABIgBAEIgBACIgCAAQACgHABAAgAioBOIAAgDQAAgDgEgGIAGgCIAAgEQAHABAAABIgBAGIAAADIACADIgBADIgBABIgCAAQgDACgBACIgCgEgABQBQQABgHAGAHgAhmBAQAKABAAAFQgBACgCACIgBADIgEACgAjfBAIgCgJQAAgCAEgCIABAHQgBABAAAFgAjlAwIABgHIABgDIADADQACADgDAHIgEgDgAjbAgIAHAAIgEAFIgDgFgAArACIgCgIIAGgCIADgBIAFABIACABIAEgDQAEgCACADIgRAFIACAEQAAACgEADIgEADQgBgBgEACIAEgHgABDgJIAAAAgACwhUIgEAAIgDgDIAZAAQgBAEgHAAIgKgBgABWieIgCgCIgBAAQgBAAgBgBQAAAAAAAAQgBgBABAAQAAAAABAAQABABABAAQAAAAABAAQAAABABAAQAAAAAAAAIAAACIAAAAg");
	this.shape_1.setTransform(-0.7,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcIAQgWgHgMgkQgHgTgBhOQgChJgRgjQAgASAMBAQALA7AFAAQAVgDAMhVQAMhSgHhHQgBgNgHgTIgKgiQAOgFAvhVQA0hfAfhfQBekXilglQgngIgrAHQgmAHghAQQAmgYAsgIQAygKAuANQCRAmgRDSQgMCdhOCUIgMAXQAWBfgYB9QgbCLg/A+QgXAVgTAAIgJgBg");
	this.shape_2.setTransform(19.4,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4F2E").s().p("AgJAGIgCgBIgBgCIAFgBIABgCIAEgBIgCgBIAAgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIADACIAEgBIACgBIACABIAEAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBABIgBABIgCAAIgEABQgDABgCADIgDABIgFAAg");
	this.shape_3.setTransform(12.1,-32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4F2E").s().p("AABAEQgCgDgGgBIgCgBIgDAAIAAgCIAJgDQADAAAAAAIAGABIgBAEIAFAAIAAABIgCABQACACADAAQgCAEgFAAIgFgDg");
	this.shape_4.setTransform(-13.4,-31.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArHsQhAg+gbiLQgYh9AWhfIgMgXQhNiUgNidQgRjSCRgmQAugNAyAKQAsAIAmAYQghgQglgHQgsgHgnAIQilAlBeEXQAfBfA0BfQAvBVAOAFIgKAiQgGATgCANQgHBHAMBSQAMBVAVADQAFAAALg7QAMhBAggRQgRAjgBBJQgCBOgGATQgNAkgWAHIgJABQgTAAgWgVg");
	this.shape_5.setTransform(-23.9,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#9BB82D"],[0.298,1],0,0,0,0,0,63.9).s().p("AnAHAQi6i6AAkGQAAkFC6i7QC7i6EFAAQEGAAC6C6QC7C7AAEFQAAEGi7C6Qi6C7kGAAQkFAAi7i7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-63.5,127,127);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGgGpQhJgNg2gbQALgOANgXQANgYAIgYQAhAXANAHQAzAYBCABQA4AAAhgdQAhgdAAgwQAAgygpgbQgpgbhgAAIgLAAIAAg7IALAAQBHAAAbgTQAagTABgtQgBgZgUgTQgVgTgdAAQhKAAg8A2IgwhQIAGgDQBIghBigGQBagFBVAUQA8AOAaAbQAbAbAAAqQAAAlgkAdQgjAegvAKQBRAQAuAkQAvAlAAA6QAAAzgjAoQhPBVieAIIgjABQg4AAg2gKgAO2GGQgxgkAAg/QAAg7AjgrQAjgqA3gaQA0gZA+gPQAzgNBFgLIAAgIQAAg2gPgRQgagbg4AAQgeAAhAAYQg9AXgbARIgshHQAlgaA/gWQBDgXBHgIQBFgJA/ALQBDAMAlAdQAiAaAJAnQAJAjAAA/IgBFWIikAAQgbgagLgvQgbAog6AYQg8AXg0AAQhBAAgwglgASQCWQgcATgRAaQgVAcABAdQAAAaAPAUQARAVAZAAQA7AAAVg/QAVg+AAhLQg5AJgkAWgA3sGGQgwgkAAg/QAAg7AjgrQAlgrA1gZQA2gZA8gPQAygMBGgMIAAgIQAAg2gPgRQgZgbg5AAQgeAAhAAYQg9AXgbARIgshHQAkgaBBgWQBCgXBGgIQBGgJA/ALQBDAMAmAdQAhAaAJAnQAJAlAAA9IgBFWIikAAQgagZgMgwQgbApg6AXQg7AXg1AAQhBAAgxglgA0QCWQgdATgRAaQgVAdAAAcQAAAaAQAUQARAVAaAAQA7AAAVg/QAUg9AAhMQg6AJgiAWgEggVAGaQg6gRgrgjQgtgkgZg5QgZg5AAhPIABh0QACg5AHgqQAUibBghdQBnhjCogBIC5AAQgIA3gCAXQgEAsACAjQilgHhWAcQhlAghOBWQgpAsgQA5QBkhcCUAAQBBAAA5ASQA4ARAtAjQArAjAYAzQAXA1ABBEQAABEgaA0QgaA1guAjQgsAjg7ASQg7AShAAAQhDAAg6gRgA/ZgTQgYAcgIAlQgJApAAAnQAABMAbBHQAbBHBAAAIAAABQAXAAAUgSQAUgTALgYQAWgwAAhIQAAhegbg5QgMgYgXgSQgVgSgbAAQgpAAgWAcgAfyGdIgBlpIizDyIirjwIAAFnIhzAAIAAoSIDoAAICFC3ICBi3IDMgCIAAIUgAkTGdIAAoSIDHAAIgBCpQCTAABlAvQBkAvAABqQAABMhRAqQhQAriLAAgAhNEUQAAApALARQAKARAeAAQApAAAcgcQAcgbAAguQAAgjgRgfQgRgegigUQgggTgwAAgAozGdIAAmKQAAgugIgQQgGgRgaAAQg1AAgrAqQhIBAgeCIQgZB0AOBzIhtAAIAAgKQAAhvAmh/QA7jDB9hXIFQAAIAAISg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.6,-43.5,453.3,87.1);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlhFnQhCgWgpgiQgwgmgbg4Qgag4AAhGQAAhAAYgxQAXgyAqghQBUhDCGgHQB8gGBdAuIABB2QgPgXgmgUQgygag6AAQgZAAgcAMQgbANgTATQgYAZgMAiQgOAjAAAnQABAxAUAyQAWAyAlAeQAnAfA0AAQA2AAArgeQAbgRASgYIAAB5QhfAqhcAAQhEAAhBgWgAtWF7QgqgBgmgGQgrgHghgNQgjgNgigYQgigZgagjQgagjgMgpQgNgpAAgrQAAhBAagzQAag1AtgjQAsgiA7gTQCHgpBqAvQB0A0AOCLIldBOQAJBLAqAzQArA0BGgCQA/gBAygaQAqgVAdgkIAABxQgwAeg9AQQg7APg7AAIgHAAgAunhJQgVAVgJAjQgJAdAAAjICygjIABgRQAAgYgLgVQgLgVgUgNQgTgMgZAAQgiAAgUAXgAL9FBQgygggag5Qgag5AAhCQAAhbAuhAQAshCBMgjQBMgiBZAAQBBAAA6ASQA6ASApAjQAsAkAYA1QAYAzAABFQAABBgaA3QgaA1gtAjQgtAjg7ARQg6AShBAAQiHAAhUg4gAOFgsQgWA0AABEQAABMAbBHQAaBHBBAAIAAABQAWAAAVgSQAUgTAKgXQAWgwAAhJQAAhfgbg3QgNgcgVgRQgVgSgcAAQg6AAgXA3gAbAFrIAAlHIiTCGIgBDBIjUAAIAAoSIDVAAIAAD4ICTiFIAAhzIDVAAIAAISgAGHFrIgBkpIiTAAIAAEpIjTAAIAAoSIDTAAIAACmICTAAIAAimIDWAAIAAISgA3YFqIACkOIACkfQAAgrgNgUQgOgTgeAAQgbAAgYAPQgUANgaAeQhgBxgpChQggCAAAC0Ih9AAIAAgKQAAg+AShlQAThnAvhzQBCinCQiWIGIAAIgCLEgAYvkOQgmgRgWgcQgXgdgEgkIAiAAQAmAxBcgBQBagBAqgvIAiAAQgFAkgWAeQgWAdglAQQgjAQgrAAQgqAAglgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,-38.2,388.2,76.4);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkkK3QiIg5hphoQhohpg5iHQg8iNAAiZQAAiYA8iMQA5iIBohoQBphpCIg5QCMg8CYAAQCZAACNA8QCHA5BpBpQBoBoA5CIQA8CMAACYQAACZg8CNQg5CHhoBpQhpBoiHA5QiNA8iZAAQiYAAiMg8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-75.5,151.1,151.1);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.circle, null, new cjs.Matrix2D(1,0,0,1,-138,-134)).s().p("AqYKYQkRkVAAmDQAAmDERkVQEWkRGCAAQGDAAEVERQESEVAAGDQAAGDkSEVQkVESmDAAQmCAAkWkSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-93.9,187.8,187.8);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.circle, null, new cjs.Matrix2D(1,0,0,1,-138,-134)).s().p("AowIwQjojpAAlHQAAlHDojpQDqjoFGAAQFHAADpDoQDpDpAAFHQAAFHjpDpQjpDplHAAQlGAAjqjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-79.3,158.7,158.7);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.circle, null, new cjs.Matrix2D(1,0,0,1,-136,-134)).s().p("A1OU8MAAAgp3MAqdAAAMAAAAp3gAqPqjQkYEZAAGKQAAGLEYEYQEZEZGJgBQGMABEYkZQEYkYAAmLQAAmKkYkZQkYkYmMABQmJgBkZEYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-134,272,268);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-52,-30.7)).s().p("AhxBbIAAi1IDjAAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-9.2,23,18.4);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-21.7,-54.3)).s().p("AiKCNIAAkZIEVAAIAAEZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-14.1,27.9,28.2);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-11.9,-97.8)).s().p("Ah1CNIAAkZIDrAAIAAEZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-14.1,23.8,28.2);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-13.7,-137)).s().p("AiICiIAAlDIERAAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-16.2,27.5,32.5);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-38.8,-173.8)).s().p("AiYCNIAAkZIExAAIAAEZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.1,30.8,28.2);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-86.3,-192.1)).s().p("Ah5BZIAAi7IDzAAIAADEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-9.9,24.6,19.8);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-139.1,-185.2)).s().p("Ah3B2IAAjrIDvAAIAADrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-11.8,24.1,23.7);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-171.3,-154.1)).s().p("AiFCGIAAkLIELAAIAAELg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.4,26.8,26.9);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-187.2,-105.5)).s().p("Ah+CeIAAk7ID9AAIAAE7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-15.8,25.6,31.7);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-172.8,-59.4)).s().p("AiAB+IAAj7IEBAAIAAD7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-12.7,26,25.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-152.2,-24.8)).s().p("AiPChIAAlBIEfAAIAAFBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-16.1,29,32.2);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-116.4,-24.5)).s().p("AiTCZIAAkxIEnAAIAAExg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-15.4,29.8,30.8);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bubbles, null, new cjs.Matrix2D(1,0,0,1,-82.6,-11.4)).s().p("AikByIAAjjIFJAAIAADjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-11.4,33.2,22.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.drops, null, new cjs.Matrix2D(1,0,0,1,-153.1,-163.6)).s().p("AhkBEIAAiHIDJAAIAACHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-6.8,20.3,13.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.drops, null, new cjs.Matrix2D(1,0,0,1,-167.7,-119.7)).s().p("AhlBlIAAjJIDLAAIAADJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.2,20.5,20.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.drops, null, new cjs.Matrix2D(1,0,0,1,-181.3,-94.4)).s().p("AhVBsIAAjXICrAAIAADXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-10.8,17.3,21.7);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.drops, null, new cjs.Matrix2D(1,0,0,1,-180.9,-51.2)).s().p("AhABHIAAiOICBAAIAACOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-7.2,13.2,14.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.drops, null, new cjs.Matrix2D(1,0,0,1,-72.9,-163.4)).s().p("AhnBEIAAiHIDPAAIAACHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-6.8,20.9,13.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.drops, null, new cjs.Matrix2D(1,0,0,1,-150.7,-21.7)).s().p("AhTBmIAAjLICnAAIAADLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-10.2,16.9,20.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AgYAyIAAhjIAxAAIAAAKIgmAAIAAAhIAjAAIAAAIIgjAAIAAAmIAmAAIAAAKg");
	this.shape.setTransform(38.4,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AASAyIgZgyIgMAPIAAAjIgLAAIAAhjIALAAIAAAyIAjgyIAOAAIgeAqIAfA5g");
	this.shape_1.setTransform(31.4,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AgbAyIAAhjIAbAAQAMAAAHAHQAGAHAAAMQAAAIgEAFQgDAHgHACQADAAADABIAGAEIAEAIQABAEAAAFQAAAPgIAGQgHAIgNAAgAgQAoIAQAAQAIAAAEgFQAFgEAAgKQgBgKgFgFQgEgEgHAAIgQAAgAgQgGIAOAAQAHAAAEgEQAFgDgBgKQABgJgFgDQgEgEgGAAIgPAAg");
	this.shape_2.setTransform(23.7,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AgQAvQgHgEgDgHQgDgIgBgJQgCgJAAgKIACgRQABgJADgIQADgHAHgFQAHgFAJAAQALAAAGAFQAHAFADAHQAEAIABAJIABARIgBATQgBAJgEAIQgDAHgHAEQgGAFgLAAQgJAAgHgFgAgJgmQgEADgDAFQgCAGgBAIIgBAPIABASQABAIACAFQACAGAEADQAFADAFAAQAGAAAFgDQAEgDACgGQADgFABgIIAAgRIgBgQIgDgOQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(15.6,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AASAyIgZgyIgMAPIAAAjIgLAAIAAhjIALAAIAAAyIAjgyIAOAAIgeAqIAfA5g");
	this.shape_4.setTransform(8.2,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AAXAyIgIgdIgeAAIgHAdIgNAAIAdhjIANAAIAcBjgAgMALIAZAAIgNgzg");
	this.shape_5.setTransform(0.2,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AATAyIAAhZIglAAIAABZIgLAAIAAhjIA7AAIAABjg");
	this.shape_6.setTransform(-7.7,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AgQAzIgDgBIAAgKIADABIAEAAQADAAACgCQACgCACgFIgehSIAMAAIAVBEIAWhEIAMAAIgcBSQgCAGgCADQgBAEgBACQgDADgCAAIgFABIgGAAg");
	this.shape_7.setTransform(-15.2,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007A48").s().p("AAXAyIgIgdIgeAAIgHAdIgNAAIAdhjIANAAIAcBjgAgMALIAZAAIgNgzg");
	this.shape_8.setTransform(-26,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007A48").s().p("AASAyIAAgwIgkAAIAAAwIgLAAIAAhjIALAAIAAArIAkAAIAAgrIAMAAIAABjg");
	this.shape_9.setTransform(-33.9,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-10.5,87.1,21.1);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AgBAaIAKgaIgKgZIAOAAIANAZIgNAagAgZAaIAMgaIgMgZIAQAAIALAZIgLAag");
	this.shape.setTransform(21.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AAOAyIAAgpIgKAAIgPApIgVAAIAUgsQgIgDgEgFQgEgIAAgKQAAgFABgGQADgFADgEQADgEAFgDQAFgCAGAAIAjAAIAABjgAgFgeQgDADgBAHQABAIADAEQADAEAGAAIAKAAIAAgeIgKAAQgGAAgDAEg");
	this.shape_1.setTransform(14.7,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AAOAyIAAgmIAAgSIACgPIAAAAIgaBHIgVAAIAAhjIASAAIAAAmIAAAJIAAAIIgBAJIgBAIIAahIIAVAAIAABjg");
	this.shape_2.setTransform(7.2,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AARA8IAAgUIgyAAIAAhjIASAAIAABTIAYAAIAAhTIATAAIAABTIAHAAIAAAkg");
	this.shape_3.setTransform(-0.6,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AALAyIgPgpIgIALIAAAeIgTAAIAAhjIATAAIAAAsIAWgsIAVAAIgaAsIAbA3g");
	this.shape_4.setTransform(-8.4,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AAPAyIgEgaIgUAAIgFAaIgWAAIAahjIAYAAIAXBjgAgGAIIAPAAIgIgtg");
	this.shape_5.setTransform(-16.1,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AACAGIAAgMIAVgSIAAAOIgOAKIAOAKIAAAPgAgWAGIAAgMIAVgSIAAAOIgOAKIAOAKIAAAPg");
	this.shape_6.setTransform(-22.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-10.5,54.2,21.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AAfAyIAAhRIAAgGIAAgHIAAAAIgDAIIgBAFIgVBRIgMAAIgVhSIgBgFIgBgHIAAAHIAAAGIAABRIgLAAIAAhjIAUAAIATBNIABAHIAAAIIAAAAIAAgHIACgIIAUhNIAUAAIAABjg");
	this.shape.setTransform(37.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AgQAwQgHgFgDgHQgDgIgBgJQgCgKAAgJIACgRQABgJADgIQADgIAHgFQAHgEAJAAQALAAAGAEQAHAFADAIQAEAIABAJIABARIgBATQgBAJgEAIQgDAHgHAFQgGAEgLAAQgJAAgHgEgAgJgmQgEADgDAFQgCAGgBAHIgBAQIABARQABAJACAGQACAFAEADQAFADAFAAQAGAAAFgDQAEgDACgFQADgGABgJIAAgRIgBgQIgDgNQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_1.setTransform(28.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AgcAyIAAhjIAcAAQAFAAAGACQAFABAEAEQAEADACAGQADAFAAAHQAAAJgDAGQgCAGgFABQgEADgGACQgGABgFABIgPAAIAAAqgAgRgBIALAAIAJAAQAEgBAEgCQADgCABgEQACgEAAgHQAAgEgBgFQgCgDgDgCQgCgCgEgBIgHgBIgPAAg");
	this.shape_2.setTransform(20.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AgYAyIAAhjIAxAAIAAAKIgmAAIAAAhIAjAAIAAAIIgjAAIAAAmIAmAAIAAAKg");
	this.shape_3.setTransform(13.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AASAyIgZgyIgMAPIAAAjIgLAAIAAhjIALAAIAAAyIAjgyIAOAAIgeAqIAfA5g");
	this.shape_4.setTransform(6.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AAUAyIAAhOIAAgIIAAgIIAAAAIgCAJIgDAIIgdBNIgQAAIAAhjIALAAIAABQIAAAGIAAAGIACgHIADgHIAchOIARAAIAABjg");
	this.shape_5.setTransform(-2.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AgEAyIAAhZIgaAAIAAgKIA9AAIAAAKIgaAAIAABZg");
	this.shape_6.setTransform(-9.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AgJAxQgFgCgEgEQgEgEgCgFIgDgLIgBgNIgBgKIABgMIACgLQABgGACgFQACgFAEgEQADgDAFgDQAFgCAFAAQAHAAAGADQAFACAEAEQADAEACAHQACAFAAAHIgLAAIgBgJQgBgDgCgEIgGgEQgDgCgFAAQgGAAgEAEQgEAFgBAGQgCAGgBAIIAAALIABAOIACAPQACAGAEAEQAEAEAFAAQAFAAAEgCQADgCACgFQACgDAAgGIACgLIALAAQAAAJgCAHQgCAHgDAFQgDAFgFADQgFADgIAAQgGAAgFgDg");
	this.shape_7.setTransform(-16.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007A48").s().p("AgQAwQgHgFgDgHQgDgIgBgJQgCgKAAgJIACgRQABgJADgIQADgIAHgFQAHgEAJAAQALAAAGAEQAHAFADAIQAEAIABAJIABARIgBATQgBAJgEAIQgDAHgHAFQgGAEgLAAQgJAAgHgEgAgJgmQgEADgDAFQgCAGgBAHIgBAQIABARQABAJACAGQACAFAEADQAFADAFAAQAGAAAFgDQAEgDACgFQADgGABgJIAAgRIgBgQIgDgNQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_8.setTransform(-31.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007A48").s().p("AgJAxQgFgCgEgEQgEgEgCgFIgDgLIgBgNIgBgKIABgMIACgLQABgGACgFQACgFAEgEQADgDAFgDQAFgCAFAAQAHAAAGADQAFACAEAEQADAEACAHQACAFAAAHIgLAAIgBgJQgBgDgCgEIgGgEQgDgCgFAAQgGAAgEAEQgEAFgBAGQgCAGgBAIIAAALIABAOIACAPQACAGAEAEQAEAEAFAAQAFAAAEgCQADgCACgFQACgDAAgGIACgLIALAAQAAAJgCAHQgCAHgDAFQgDAFgFADQgFADgIAAQgGAAgFgDg");
	this.shape_9.setTransform(-39.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-10.2,90.1,20.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AAlBIIAAiBIgbCBIgTAAIgbiBIAACBIgaAAIAAiPIAsAAIASBcIAThcIArAAIAACPg");
	this.shape.setTransform(67.5,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AAXBIIgHgmIgdAAIgJAmIgdAAIAkiPIAjAAIAgCPgAgKANIAWAAIgLhBg");
	this.shape_1.setTransform(54.7,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AgPBJQgIgDgHgFQgGgEgEgIQgEgJAAgLIAbAAIABAHQAAAEACADIAGAEQADACAFAAQAJAAAEgHQAEgGAAgLQAAgNgGgFQgGgGgHAAIgFAAIAAgSIAFAAQAGAAAFgFQAFgEAAgKIAAgHQgBgDgCgDIgEgFQgDgCgEAAQgHAAgEAGQgEAHAAAJIgbAAQAAgJADgIQADgIAGgGQAFgGAIgDQAIgEAJAAQAGAAAIACQAIACAGAFQAGAEAEAHQAEAIAAALQAAALgGAJQgGAIgKADQALADAHAHQAHAJAAAQQAAAWgMALQgLALgWAAQgHAAgIgCg");
	this.shape_2.setTransform(44,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AgqBIIAAiPIAbAAIAAA4IAVAAQAJAAAGAEQAHAEAFAGQAFAEACAHQADAIAAAIQAAAKgCAJQgDAIgEAGQgEAGgHADQgGAEgIAAgAgPAzIAPAAQAHAAAEgFQAEgFAAgMQAAgLgEgHQgEgGgHAAIgPAAg");
	this.shape_3.setTransform(33.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AgrBIIgHgBIAAgUIADABIAFAAQADAAACgBQACgCACgGIACgRIABgcIAAhGIBRAAIAACPIgbAAIAAh5IgbAAIAAA2QAAARgBANQgCAOgEAIQgDAJgHAEQgFAEgJAAIgJgBg");
	this.shape_4.setTransform(22.1,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AAXBIIgHgmIgdAAIgJAmIgdAAIAkiPIAjAAIAgCPgAgKANIAWAAIgLhBg");
	this.shape_5.setTransform(11.2,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AgqBIIAAiPIBKAAIAAAVIgvAAIAAAjIAVAAQAJAAAGAEQAHAEAFAGQAFAEACAHQADAIAAAIQAAAKgCAJQgDAIgEAGQgEAGgHADQgGAEgIAAgAgPAzIAPAAQAHAAAEgFQAEgFAAgMQAAgLgEgHQgEgGgHAAIgPAAg");
	this.shape_6.setTransform(0.6,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AAUBbIAAg3IAAgcQABgKACgKIAAAAIgmBnIgdAAIAAiOIAZAAIAAA0IAAAOIgBANIgBANIgCALIABAAIAmhnIAeAAIAACOgAgOg/QgGgCgDgFQgCgEgCgFIgBgLIAOAAQAAAIAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgIIAOAAIgBALQgCAFgDAEQgDAFgGACQgFADgHAAQgJAAgFgDg");
	this.shape_7.setTransform(-15.1,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007A48").s().p("AgRBIQgJgCgGgGQgGgGgEgJQgDgJAAgOIAAgyQAAgOADgJQAEgKAGgGQAGgGAJgCQAJgDAIAAQAKAAAJADQAIACAGAGQAHAGADAJQADAKAAAOIAAAyQAAAOgDAJQgDAJgHAGQgGAGgIACQgJADgKAAQgIAAgJgDgAgNgtQgEAGAAALIAAA5QAAAMAEAGQAFAGAIAAQAJAAAEgGQAFgGAAgMIAAg4QAAgMgFgGQgEgHgJAAQgIAAgFAHg");
	this.shape_8.setTransform(-26.3,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007A48").s().p("AASBIIAAhDIgiAAIAABDIgcAAIAAiPIAcAAIAAA4IAiAAIAAg4IAbAAIAACPg");
	this.shape_9.setTransform(-37.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007A48").s().p("AgUBHQgJgEgFgHQgFgHgCgIQgCgJAAgKIAAgyQAAgaAMgMQALgMAUAAQAWAAAKAMQAMALAAAUIAAAHIgcAAIAAgDQAAgOgEgFQgEgGgIAAQgHAAgEAGQgEAFAAAOIAAA3QAAAOAEAFQAEAGAHAAQAIAAAEgGQAEgFAAgOIAAgIIAcAAIAAAGQAAAKgCAJQgCAIgFAHQgFAHgJAEQgIAEgNAAQgMAAgIgEg");
	this.shape_10.setTransform(-48.2,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#007A48").s().p("AglBIIAAiPIBLAAIAAAWIgvAAIAAAiIArAAIAAAUIgrAAIAAAtIAvAAIAAAWg");
	this.shape_11.setTransform(-58.1,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#007A48").s().p("AgrBIIgHgBIAAgUIADABIAFAAQADAAACgBQACgCACgGIACgRIABgcIAAhGIBRAAIAACPIgbAAIAAh5IgbAAIAAA2QAAARgBANQgCAOgEAIQgDAJgHAEQgFAEgJAAIgJgBg");
	this.shape_12.setTransform(-69.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.8,-14.1,153.7,28.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007A48").s().p("AArBHIAAiOIAQAAIAACOgAg6BHIAAiOIAQAAIAAA9IATAAQAKAAAIACQAGADAHAEQAGADAEAIQADAJAAAMQAAAKgDAJQgDAHgGAFQgFAFgGACQgIACgKAAgAgqA5IASAAIANgBQAGgCADgCQACgDACgGQADgEAAgIQAAgJgDgFQgCgGgDgDQgEgCgHgCIgPgBIgNAAg");
	this.shape.setTransform(79.3,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007A48").s().p("AgHBHIAAh/IglAAIAAgPIBZAAIAAAPIglAAIAAB/g");
	this.shape_1.setTransform(67,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A48").s().p("AAaBHIglhGIgQAVIAAAxIgQAAIAAiOIAQAAIAABJIAyhJIAUAAIgsA8IAuBSg");
	this.shape_2.setTransform(57.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007A48").s().p("AgXBJIgFgCIAAgOIAFABIAGABQAEAAACgDQAEgDACgIIgrh1IARAAIAgBiIAfhiIAQAAIgnB2QgDAIgDAFIgEAJQgDADgDABIgIABIgIAAg");
	this.shape_3.setTransform(46.5,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007A48").s().p("AAoBYIAAghIhQAAIAAAhIgPAAIAAgwIAKAAQAFgIADgKQADgKACgLIABgWIABgdIAAglIBLAAIAAB/IALAAIAAAwgAgOgkQAAAagDARQgEATgHAOIA5AAIAAhxIgrAAg");
	this.shape_4.setTransform(35.3,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007A48").s().p("AgYBFQgJgHgFgKQgFgLgBgNQgCgOAAgOIACgZQABgNAFgLQAFgLAJgGQAJgIAPAAQAPAAAKAIQAJAGAFALQAFALABANIACAZQAAAOgCAOQgBANgFALQgFAKgJAHQgKAGgPAAQgPAAgJgGgAgOg3QgGAFgEAIQgDAHgBALQgBAKAAAMIABAaQABAMADAIQAEAIAFAEQAHAEAIAAQAJAAAHgEQAFgEAEgIQADgIABgMIABgZQAAgMgBgLQgBgLgDgHQgEgIgGgFQgHgEgIAAQgIAAgGAEg");
	this.shape_5.setTransform(23.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007A48").s().p("AgoBHIAAiOIAoAAQAIAAAIADQAIACAFAFQAGAFADAIQADAHAAALQAAAMgDAJQgEAIgGADQgHAFgIABQgIADgIAAIgVAAIAAA8gAgYgCIAPAAIANgBQAHgBAEgCQAFgDACgGQADgFAAgKQAAgHgCgFQgDgGgEgDQgDgCgGgCIgLgBIgUAAg");
	this.shape_6.setTransform(12.3,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007A48").s().p("AAbBHIAAh/Ig1AAIAAB/IgQAAIAAiOIBVAAIAACOg");
	this.shape_7.setTransform(0.8,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007A48").s().p("AAUBbIAAg3IABgcQAAgKACgKIAAAAIgmBnIgeAAIAAiOIAaAAIAAA0IAAAOIgBANIAAANIgCALIAAAAIAmhnIAdAAIAACOgAgOg/QgFgCgDgFQgEgEgBgFIgBgLIAOAAQAAAIAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgIIAOAAIgBALQgBAFgDAEQgEAFgFACQgHADgGAAQgIAAgGgDg");
	this.shape_8.setTransform(-15.4,-1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007A48").s().p("AAXBIIgHgmIgdAAIgJAmIgdAAIAkiPIAjAAIAgCPgAgKANIAWAAIgLhBg");
	this.shape_9.setTransform(-26.5,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007A48").s().p("AARBIIAAh5IgiAAIAAB5IgbAAIAAiPIBZAAIAACPg");
	this.shape_10.setTransform(-37.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#007A48").s().p("AgYBIIgHgBIAAgVIADABIAEABQAEAAADgDQADgDACgGIgnhwIAfAAIAUBKIAWhKIAeAAIgnBzQgDAIgDAGQgDAGgEAEQgBADgFACQgEABgFAAIgJgBg");
	this.shape_11.setTransform(-48.4,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#007A48").s().p("AAPBIIgWg6IgLAOIAAAsIgbAAIAAiPIAbAAIAAA/IAgg/IAeAAIgkA/IAmBQg");
	this.shape_12.setTransform(-58.8,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#007A48").s().p("AgRBIQgJgCgGgGQgGgGgEgJQgDgJAAgOIAAgyQAAgOADgJQAEgKAGgGQAGgGAJgCQAJgDAIAAQAKAAAJADQAIACAGAGQAHAGADAJQADAKAAAOIAAAyQAAAOgDAJQgDAJgHAGQgGAGgIACQgJADgKAAQgIAAgJgDgAgNgtQgEAGAAALIAAA5QAAAMAEAGQAFAGAIAAQAJAAAEgGQAFgGAAgMIAAg4QAAgMgFgGQgEgHgJAAQgIAAgFAHg");
	this.shape_13.setTransform(-70.1,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#007A48").s().p("AASBIIAAh5IgiAAIAAB5IgcAAIAAiPIBZAAIAACPg");
	this.shape_14.setTransform(-81.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-14.2,177.7,28.4);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6aAUmMAAAgpLMB01AAAMAAAApLg");
	mask.setTransform(374,131.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVTUmMhPtAAAMAAAgpLMB01AAAQgSCvh3FkQijHsjxGVQlAIdmYEvQnqFrpOAAIgbAAg");
	this.shape.setTransform(374,131.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,748,263.7);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg5uAUGMAAAgoLMBzdAAAQgbChhIDxQiOHjjaGQQkyIymdFCQoGGSqQAAg");
	mask.setTransform(369.6,128.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#609F3B","#5D9C3A","#3C7437","#255531","#255531"],[0,0.106,0.388,0.631,1],0,125.4,0,-125.4).s().p("Eg5uAUGMAAAgoLMBzdAAAMAAAAoLg");
	this.shape.setTransform(369.6,128.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,739.1,257.3);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol75();
	this.t2.setTransform(0,11);

	this.t1 = new lib.Symbol74();
	this.t1.setTransform(-21.3,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-23.9,146.1,47.9);


(lib.t2_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// l1
	this.l1 = new lib.Symbol67();
	this.l1.setTransform(30.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol66();
	this.t2.setTransform(0,9.2);

	this.t1 = new lib.Symbol65();
	this.t1.setTransform(0,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-19.3,210.7,38.7);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t2 = new lib.Symbol64();
	this.t2.setTransform(0,12.7);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// Layer 1
	this.t1 = new lib.Symbol63();
	this.t1.setTransform(0,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-27.3,120.6,53.7);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol6();
	this.t3.setTransform(25,9.2);

	this.t2 = new lib.Symbol5();
	this.t2.setTransform(-41.4,9.2);

	this.t1 = new lib.Symbol4();
	this.t1.setTransform(-23.5,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-19.7,137.1,39.4);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t2 = new lib.Symbol2();
	this.t2.setTransform(0,13.2);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// Layer 1
	this.t1 = new lib.Symbol1();
	this.t1.setTransform(0,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-27.3,177.7,54.7);


(lib.Symbol59copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m3
	this.m3 = new lib.Symbol62copy();
	this.m3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// m2
	this.m2 = new lib.Symbol61();
	this.m2.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// m1
	this.m1 = new lib.Symbol60();
	this.m1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-39.1,78.2,78.2);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m3
	this.m3 = new lib.Symbol62();
	this.m3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// m2
	this.m2 = new lib.Symbol61();
	this.m2.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// m1
	this.m1 = new lib.Symbol60();
	this.m1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-39.1,78.2,78.2);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.m2 = new lib.Symbol55();

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// Layer 3
	this.m1 = new lib.Symbol51();

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-75.5,151.1,151.1);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubbles.png
	this.mc = new lib.Symbol47();
	this.mc.setTransform(-44,-74.3);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-83.5,23,18.3);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol46();
	this.mc.setTransform(-74.3,-50.7);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.2,-64.8,27.9,28.2);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol45();
	this.mc.setTransform(-84.1,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-21.2,23.8,28.2);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol44();
	this.mc.setTransform(-82.2,32);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,15.8,27.5,32.5);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol43();
	this.mc.setTransform(-57.1,68.9);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,54.8,30.8,28.2);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol42();
	this.mc.setTransform(-9.7,87.1);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,77.2,24.6,19.8);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol41();
	this.mc.setTransform(43.2,80.3);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.1,68.4,24.1,23.7);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol40();
	this.mc.setTransform(75.3,49.1);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.9,35.7,26.8,26.9);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol39();
	this.mc.setTransform(91.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.5,-15.3,25.5,31.7);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol38();
	this.mc.setTransform(76.8,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.8,-58.3,26,25.4);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol37();
	this.mc.setTransform(56.2,-80.2);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.8,-96.3,29,32.2);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol36();
	this.mc.setTransform(20.4,-80.4);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5,-95.8,29.8,30.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol35();
	this.mc.setTransform(-13.4,-93.6);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-105,33.2,22.8);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol21();
	this.mc.setTransform(56.1,70.7);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46,63.9,20.3,13.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol19();
	this.mc.setTransform(82.3,30.9);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.1,20.7,20.5,20.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol17();
	this.mc.setTransform(84.4,1.5);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.7,-9.4,17.3,21.7);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol15();
	this.mc.setTransform(84,-41.7);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.4,-48.9,13.2,14.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol13();
	this.mc.setTransform(-30.3,83);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,76.2,20.9,13.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol11();
	this.mc.setTransform(53.8,-71.3);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.3,-81.5,16.9,20.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// d1
	this.d1 = new lib.Symbol10();
	this.d1.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.d1).wait(1));

	// d2
	this.d2 = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get(this.d2).wait(1));

	// d3
	this.d3 = new lib.Symbol14();
	this.d3.setTransform(0,0,1,1,-55);

	this.timeline.addTween(cjs.Tween.get(this.d3).wait(1));

	// d4
	this.d4 = new lib.Symbol16();

	this.timeline.addTween(cjs.Tween.get(this.d4).wait(1));

	// d5
	this.d5 = new lib.Symbol18();
	this.d5.setTransform(0,0,1,1,130);

	this.timeline.addTween(cjs.Tween.get(this.d5).wait(1));

	// d6
	this.d6 = new lib.Symbol20();

	this.timeline.addTween(cjs.Tween.get(this.d6).wait(1));

	// drops.png
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.drops, null, new cjs.Matrix2D(1,0,0,1,-95,-94)).s().p("Au1OsIAA9WIdqAAIAAdWg");
	this.shape.setTransform(-2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-102.2,200,202.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.b1 = new lib.Symbol22();

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// Layer 7
	this.b2 = new lib.Symbol23();

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

	// Layer 6
	this.b3 = new lib.Symbol24();

	this.timeline.addTween(cjs.Tween.get(this.b3).wait(1));

	// Layer 5
	this.b4 = new lib.Symbol25();

	this.timeline.addTween(cjs.Tween.get(this.b4).wait(1));

	// Layer 4
	this.b5 = new lib.Symbol26();

	this.timeline.addTween(cjs.Tween.get(this.b5).wait(1));

	// Layer 29
	this.b6 = new lib.Symbol27();

	this.timeline.addTween(cjs.Tween.get(this.b6).wait(1));

	// Layer 28
	this.b7 = new lib.Symbol28();

	this.timeline.addTween(cjs.Tween.get(this.b7).wait(1));

	// Layer 27
	this.b8 = new lib.Symbol29();

	this.timeline.addTween(cjs.Tween.get(this.b8).wait(1));

	// Layer 26
	this.b9 = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.b9).wait(1));

	// Layer 25
	this.b10 = new lib.Symbol31();

	this.timeline.addTween(cjs.Tween.get(this.b10).wait(1));

	// Layer 24
	this.b11 = new lib.Symbol32();

	this.timeline.addTween(cjs.Tween.get(this.b11).wait(1));

	// Layer 23
	this.b12 = new lib.Symbol33();

	this.timeline.addTween(cjs.Tween.get(this.b12).wait(1));

	// Layer 1
	this.b13 = new lib.Symbol34();

	this.timeline.addTween(cjs.Tween.get(this.b13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-105,200,202);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.m3 = new lib.Symbol57();

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// Layer 4
	this.m2 = new lib.Symbol56();

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// Layer 3
	this.m1 = new lib.Symbol58();

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.6,-148.6,297.3,297.3);


(lib.packshot = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// m6
	this.m6 = new lib.Symbol68();
	this.m6.setTransform(-34,127);

	this.timeline.addTween(cjs.Tween.get(this.m6).wait(1));

	// m5
	this.m5 = new lib.Symbol69();
	this.m5.setTransform(77,110);

	this.timeline.addTween(cjs.Tween.get(this.m5).wait(1));

	// m4
	this.m4 = new lib.Symbol70();
	this.m4.setTransform(28,70);

	this.timeline.addTween(cjs.Tween.get(this.m4).wait(1));

	// m3
	this.m3 = new lib.Symbol71();
	this.m3.setTransform(89,-45);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// m2
	this.m2 = new lib.Symbol72();
	this.m2.setTransform(0,-51);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// m1_2
	this.m1_2 = new lib.Symbol73copy();
	this.m1_2.setTransform(-15,18);

	this.timeline.addTween(cjs.Tween.get(this.m1_2).wait(1));

	// m1_1
	this.m1_1 = new lib.Symbol73();
	this.m1_1.setTransform(-15,18);

	this.timeline.addTween(cjs.Tween.get(this.m1_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381.4,-201.2,606.5,375.3);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.mc3 = new lib.Symbol53();
	this.mc3.setTransform(299.4,173.6);

	this.mc4 = new lib.Symbol52();
	this.mc4.setTransform(331.6,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc4},{t:this.mc3}]}).wait(1));

	// Layer 5
	this.mc5 = new lib.Symbol54();
	this.mc5.setTransform(649.5,157.8);

	this.timeline.addTween(cjs.Tween.get(this.mc5).wait(1));

	// Layer 6
	this.mc2 = new lib.ClipGroup_1();
	this.mc2.setTransform(369.6,128.6,1,1,0,0,0,369.6,128.6);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// Layer 3
	this.mc1 = new lib.ClipGroup_2();
	this.mc1.setTransform(373.9,131.8,1,1,0,0,0,373.9,131.8);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,748,263.7);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc1
	this.mc1 = new lib.Symbol49();

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// mc2
	this.mc2 = new lib.Symbol50();

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// circle.png
	this.instance = new lib.circle();
	this.instance.setTransform(-138,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mc
	this.mc = new lib.Symbol48();
	this.mc.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ds
	this.ds = new lib.Symbol9();

	this.timeline.addTween(cjs.Tween.get(this.ds).wait(1));

	// bs
	this.bs = new lib.Symbol8();

	this.timeline.addTween(cjs.Tween.get(this.bs).wait(1));

	// circ
	this.circ = new lib.c1();

	this.timeline.addTween(cjs.Tween.get(this.circ).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 200;
		    time1 = 4;
			time2 = time1 + 4.0;
		
		var rotKrug = 15;
		
		var tl = new TimelineMax();
		
		tl.fromTo(this.blk, 0.3, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .staggerFrom([this.logo.mc1, this.logo.mc2, this.logo.mc3, this.logo.mc4], 1.0, {y:"-=350", ease:Expo.easeOut}, 0.1, 0.0)
		  .staggerFrom([this.logo.mc5.m1, this.logo.mc5.m2], 2.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.1, 0.2)
		  .to(this.krug, rotKrug, {rotation:"+=150", ease:Power0.easeNone}, 0.0)
		  .from(this.krug, 2.5, {scaleX:"+=0.3", scaleY:"+=0.3", alpha:0, ease:Elastic.easeOut}, 0.5)
		  //.from(this.krug, 5.5, {rotation:"-=120", ease:Expo.easeOut}, 0.5)
		  //.to(this.krug.circ, 2.0, {scaleX:1.03, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.5)
		  //.to(this.krug.circ, 2.6, {scaleY:1.03, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.3)
		  .to(this.krug.circ.mc, rotKrug, {rotation:"+=60", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.circ.mc1, rotKrug, {rotation:"+=400", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.circ.mc2, rotKrug, {rotation:"+=200", ease:Power0.easeNone}, 0.0)
		  //drops
		  .call(replay)
		  .to(this.krug.ds, rotKrug, {rotation:"+=50", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.ds.d1, rotKrug, {rotation:"+=120", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.ds.d2, rotKrug, {rotation:"+=260", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.ds.d3, rotKrug, {rotation:"+=180", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.ds.d4, rotKrug, {rotation:"+=210", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.ds.d5, rotKrug, {rotation:"+=220", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.ds.d6, rotKrug, {rotation:"+=110", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.ds.d1, 1.8, {x:"-=20", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.ds.d2, 2.8, {x:"-=20", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.ds.d3, 2.1, {x:"-=20", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.ds.d4, 2.5, {x:"-=20", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.ds.d5, 2.2, {x:"-=20", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.ds.d6, 2.6, {x:"-=20", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  
		  //bubbles
		  .to(this.krug.bs, rotKrug, {rotation:"+=40", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b1, rotKrug, {rotation:"+=20", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b2, rotKrug, {rotation:"+=120", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b3, rotKrug, {rotation:"+=40", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b4, rotKrug, {rotation:"+=70", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b5, rotKrug, {rotation:"+=50", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b6, rotKrug, {rotation:"+=90", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b7, rotKrug, {rotation:"+=20", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b8, rotKrug, {rotation:"+=120", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b9, rotKrug, {rotation:"+=40", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b10, rotKrug, {rotation:"+=70", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b11, rotKrug, {rotation:"+=50", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b12, rotKrug, {rotation:"+=90", ease:Power0.easeNone}, 0.0)
		  .to(this.krug.bs.b13, rotKrug, {rotation:"+=90", ease:Power0.easeNone}, 0.0)
		  
		  .to(this.krug.bs.b1.mc, 1.5, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b2.mc, 1.6, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b3.mc, 1.8, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b4.mc, 2.0, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b5.mc, 2.4, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b6.mc, 2.1, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b7.mc, 1.9, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b8.mc, 2.5, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b9.mc, 2.3, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b10.mc, 1.7, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b11.mc, 2.3, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b12.mc, 2.1, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b13.mc, 2.0, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  
		  .to(this.krug.bs.b1.mc, 1.8, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b2.mc, 2.8, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b3.mc, 2.1, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b4.mc, 2.4, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b5.mc, 3.0, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b6.mc, 2.7, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b7.mc, 2.9, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b8.mc, 2.2, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b9.mc, 2.5, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b10.mc, 2.8, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b11.mc, 2.1, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b12.mc, 1.9, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  .to(this.krug.bs.b13.mc, 2.0, {y:"+=7", yoyo:true, repeat:-1, repeatDelay:0, ease:Sine.easeInOut}, 0.0)
		  
		  
		  .staggerFrom([this.n1.m1, this.n1.m2, this.n1.m3], 2.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.1, 0.5)
		  .from(this.t1.t1, 1.0, {y:"+=300", ease:Expo.easeOut}, 0.50)
		  .from(this.t1.t2, 1.0, {y:"+=300", ease:Expo.easeOut}, 0.56)
		  
		  .staggerFrom([this.sticker.m1, this.sticker.m2, this.sticker.m3], 2.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.1, 1.2)
		  .staggerFrom([this.t1_2.t1, this.t1_2.t2, this.t1_2.t3], 1.0, {x:"+=300", ease:Expo.easeOut}, 0.1, 1.2)
		  
		  
		  //2
		  .staggerTo([this.n1.m1, this.n1.m2, this.n1.m3], 0.5, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, -0.1, time1)
		  .staggerTo([this.t1.t1, this.t1.t2], 0.5, {x:"-=300", ease:Expo.easeIn}, 0.1, time1)
		  .staggerTo([this.sticker.m1, this.sticker.m2, this.sticker.m3], 0.5, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, -0.1, time1)
		  .staggerTo([this.t1_2.t1, this.t1_2.t2, this.t1_2.t3], 1.0, {x:"-=300", ease:Expo.easeIn}, 0.05, time1+0.0)
		  
		  .staggerFrom([this.n2.m1, this.n2.m2, this.n2.m3], 2.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.1, time1+1.0)
		  .from(this.t2.t1, 1.0, {y:"+=300", ease:Expo.easeOut}, time1+1.0)
		  .from(this.t2.t2, 1.0, {y:"+=300", ease:Expo.easeOut}, time1+1.06)
		  .from(this.t2_2.t1, 1.0, {y:"+=300", ease:Expo.easeOut}, time1+1.4)
		  .from(this.t2_2.t2, 1.0, {y:"+=300", ease:Expo.easeOut}, time1+1.46)
		  .from(this.t2_2.l1, 1.0, {scaleX:0.0, ease:Expo.easeInOut}, time1+1.9)
		  
		  
		  //3
		  .staggerTo([this.n2.m1, this.n2.m2, this.n2.m3], 0.5, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, -0.1, time2)
		  .staggerTo([this.t2.t1, this.t2.t2], 0.5, {x:"-=300", ease:Expo.easeIn}, 0.1, time2)
		  .to(this.t2_2.l1, 0.6, {scaleX:0.0, ease:Expo.easeInOut}, time2-0.1)
		  .staggerTo([this.t2_2.t1, this.t2_2.t2], 1.0, {x:"-=300", ease:Expo.easeIn}, 0.05, time2+0.0)
		  
		  .to(this.krug.circ, 2.5, {rotation:"+=350", ease:Expo.easeIn}, time2-1.0)
		  .to(this.krug.bs, 2.0, {rotation:"+=350", ease:Expo.easeIn}, time2-0.5)
		  .to(this.krug.bs, 2.0, {scaleX:0.0, scaleY:0.0, ease:Expo.easeIn}, time2-0.5)
		  .to(this.krug, 1.5, {rotation:"+=350", ease:Expo.easeIn}, time2+0.0)
		  .to(this.krug, 1.5, {scaleX:0.0, scaleY:0.0, ease:Expo.easeIn}, time2+0.0)
		  
		  .staggerFrom([this.ps.m2, this.ps.m3, this.ps.m4, this.ps.m5, this.ps.m6], 1.0, {x:"+=500", ease:Expo.easeOut}, 0.1, time2+1.6)
		  .staggerFrom([this.ps.m1_1, this.ps.m1_2], 1.0, {x:"+=500", ease:Expo.easeOut}, 0.1, time2+1.6)
		  .from(this.ps.m1_1, 1.0, {rotation:"+=20", ease:Back.easeOut}, time2+2.0)
		  .from(this.ps.m1_2, 2.0, {rotation:"+=20", ease:Elastic.easeOut}, time2+2.0)
		  
		  .staggerTo([this.sticker.m1, this.sticker.m2, this.sticker.m3], 2.0, {scaleX:1.0, scaleY:1.0, ease:Elastic.easeOut}, 0.1, time2+2.2)
		  .staggerFrom([this.t3.t1, this.t3.t2], 1.0, {x:"+=300", ease:Expo.easeOut}, 0.1, time2+2.5)
		  
		  
		  //.call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, rotKrug)
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
	this.shape.graphics.f().s("#98B587").ss(2,2,0,3,true).p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo
	this.logo = new lib.ClipGroup();
	this.logo.setTransform(-120,-200,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// n2
	this.n2 = new lib.Symbol59copy();
	this.n2.setTransform(0,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.n2).wait(1));

	// n1
	this.n1 = new lib.Symbol59();
	this.n1.setTransform(0,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.n1).wait(1));

	// krug
	this.krug = new lib.Symbol7();
	this.krug.setTransform(0,-22,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.krug).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(35.9,159.8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// ps
	this.ps = new lib.packshot();
	this.ps.setTransform(-10,11,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.ps).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(0,104.5);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t2_2
	this.t2_2 = new lib.t2_2();
	this.t2_2.setTransform(0,165);

	this.timeline.addTween(cjs.Tween.get(this.t2_2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(0,104.5);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// sticker
	this.sticker = new lib.Symbol3();
	this.sticker.setTransform(-69.3,162.7,0.18,0.18);

	this.timeline.addTween(cjs.Tween.get(this.sticker).wait(1));

	// t1_2
	this.t1_2 = new lib.t1_2();
	this.t1_2.setTransform(36.5,165.7);

	this.timeline.addTween(cjs.Tween.get(this.t1_2).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E1F0DA","#F9FCF7","#FFFFFF","#CBE2BD"],[0,0.298,0.431,1],0,197,0,-197).s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhOHBOHMAAAicOMCcPAAAMAAACcOg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-500,1000.1,1000);


// stage content:
(lib.lb_240x400 = function(mode,startPosition,loop) {
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