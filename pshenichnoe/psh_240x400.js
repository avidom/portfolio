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
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/cloud1.png", id:"cloud1"},
		{src:"images/cloud2.png", id:"cloud2"},
		{src:"images/ukaz.png", id:"ukaz"},
		{src:"images/warn.png", id:"warn"},
		{src:"images/water.jpg", id:"water"}
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
p.nominalBounds = new cjs.Rectangle(0,0,668,562);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,355);


(lib.cloud1 = function() {
	this.initialize(img.cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,58);


(lib.cloud2 = function() {
	this.initialize(img.cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,132);


(lib.ukaz = function() {
	this.initialize(img.ukaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,93);


(lib.warn = function() {
	this.initialize(img.warn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,46);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,187);


(lib.water_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.water();
	this.instance.setTransform(-942,-93);

	this.instance_1 = new lib.water();
	this.instance_1.setTransform(314,-93);

	this.instance_2 = new lib.water();
	this.instance_2.setTransform(-314,-93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-942,-93,1884,187);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.warn();
	this.instance.setTransform(-114,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-23,228,46);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9CSIAAkjIB7AAIAAApIhNAAIAABTIA9AAIAAAnIg9AAIAABXIBNAAIAAApg");
	this.shape.setTransform(69.6,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiCSIgIg1Ig3AAIgIA1IgrAAIAwkjIBBAAIAvEjgAgXA1IArAAIgViSg");
	this.shape_1.setTransform(53.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZCSIAAh+IgyAAIAAB+IguAAIAAkjIAuAAIAAB+IAyAAIAAh+IAvAAIAAEjg");
	this.shape_2.setTransform(35.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZCSIAAh2QgHAIgLAFQgKADgJAAQgdAAgOgTQgPgSAAgcIAAh8IAuAAIAAB4QAAAPAIAHQAIAFAJAAQALAAAGgFQAHgIAAgPIAAh3IAuAAIAAEjg");
	this.shape_3.setTransform(17.7,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWCSIAAkjIAsAAIAAEjg");
	this.shape_4.setTransform(5.1,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZCSIAAh+IgyAAIAAB+IguAAIAAkjIAuAAIAAB+IAyAAIAAh+IAvAAIAAEjg");
	this.shape_5.setTransform(-7.9,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiCSIgIg1Ig3AAIgIA1IgqAAIAukjIBDAAIAvEjgAgXA1IAqAAIgTiSg");
	this.shape_6.setTransform(-25.4,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhrCSIAAkjIAuAAIAAD6IAnAAIAAj6IAsAAIAAD6IApAAIAAj6IAuAAIAAEjg");
	this.shape_7.setTransform(-46.5,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZCSIAAj6IgyAAIAAD6IguAAIAAkjICPAAIAAEjg");
	this.shape_8.setTransform(-68.1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-23.8,158.3,47.7);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAGQgJgGAAgMIAKAAQABAKAGACQAHAEAHAAQAIAAAGgEQAHgCAAgKIAKAAQABAMgKAGQgIAHgOAAQgMAAgKgHg");
	this.shape.setTransform(5.1,-13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBvIAAjeIBWAAIAAAOIhHAAIAABaIA7AAIAAALIg7AAIAABeIBHAAIAAANg");
	this.shape_1.setTransform(60,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBwIgLgyIhEAAIgLAyIgOAAIAxjfIAUAAIAyDfgAggAxIA/AAIgfiPg");
	this.shape_2.setTransform(47.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBvIAAhpIhEAAIAABpIgOAAIAAjeIAOAAIAABqIBEAAIAAhqIAPAAIAADeg");
	this.shape_3.setTransform(34.1,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1B/IAAgfIhpAAIAAAfIgPAAIAAgtIAQAAQAHgGACgKQACgIAAgLIAJitIBQAAIAADQIASAAIAAAtgAgZAvQgBALgCAJQgCAJgGAGIBGAAIAAjDIgzAAg");
	this.shape_4.setTransform(20,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBvIAAgNQAQAAAHgGQAGgHAFgNIAJgbIg2icIAPAAIAbBPIARA6IASg6IAYhPIAQAAIg6C1IgFASQgDAIgGAFQgFAFgIADQgHADgKAAIgEgBg");
	this.shape_5.setTransform(5.3,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAtBwIgLgyIhEAAIgLAyIgOAAIAxjfIAUAAIAyDfgAggAxIA/AAIgfiPg");
	this.shape_6.setTransform(-8.5,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBvIAAjeIAuAAQAYAAAMAPQAKAPABAZIAAAYQAAAbgNALQgMANgZABIgcAAIAABbgAgfAGIAcAAQASAAAIgHQAJgKAAgUIAAgaQAAgSgHgLQgIgLgRAAIgfAAg");
	this.shape_7.setTransform(-21.1,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBvIAAjQIhEAAIAADQIgOAAIAAjeIBhAAIAADeg");
	this.shape_8.setTransform(-33.3,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAtBwIgLgyIhEAAIgLAyIgOAAIAxjfIAUAAIAyDfgAggAxIA/AAIgfiPg");
	this.shape_9.setTransform(-46.6,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBtQgKgEgGgHQgFgIgDgKQgDgLAAgMIAAhxQAAgMADgKQADgLAFgHQAGgIAKgEQAJgEALgBQAMABAJAEQAKAEAFAIQAGAHADALQADAKAAAMIAAASIgOAAIAAgTQAAgJgCgIQgCgHgEgGQgEgGgHgDQgGgDgJAAQgHAAgHADQgGADgFAGQgEAGgBAHQgCAIAAAJIAABzQAAAJACAHQABAIAEAGQAFAFAGAEQAHADAHAAQAJAAAGgDQAHgEAEgFQAEgGACgIQACgHAAgJIAAgbIAOAAIAAAaQAAAMgDALQgDAKgGAIQgFAHgKAEQgJAFgMgBQgLABgJgFg");
	this.shape_10.setTransform(-59.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-18.4,135.2,36.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud1();
	this.instance.setTransform(-88,41);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.cloud2, null, new cjs.Matrix2D(1,0,0,1,-100,-33.8)).s().p("AvmFRIAAqhIfOAAIAAKhg");
	this.shape.setTransform(-170,-12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.cloud2, null, new cjs.Matrix2D(1,0,0,1,-151.4,-98.9)).s().p("AnkFLIAAqVIPJAAIAAKVg");
	this.shape_1.setTransform(-358.6,62.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.cloud2, null, new cjs.Matrix2D(1,0,0,1,-52.7,-99.6)).s().p("AoOFDIAAqFIQdAAIAAKFg");
	this.shape_2.setTransform(232.7,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.1,-46,692.6,145);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ukaz();
	this.instance.setTransform(-32,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.ukaz, null, new cjs.Matrix2D(1,0,0,1,-32,-64)).s().p("Ak/EiIAApDIJ/AAIAAJDg");
	this.shape.setTransform(0,34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-46,64,109);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).rr(-80,-17,160,34,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-18,162,36);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBMIAAgzIgehlIAZAAIAQBHIAThHIAXAAIgfBlIAAAzg");
	this.shape.setTransform(67.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkBMIAAiYIAkAAQARAAAJAJQAIAJAAASIAAAGQAAALgDAIQgEAIgIAEQAKADAEAGQAEAJAAANIAAAMQAAASgJAJQgKAJgSAAgAgMA3IAMAAQAGAAADgEQAEgDAAgIIAAgOQAAgLgEgEQgEgEgGAAIgLAAgAgMgNIAKAAQAFAAADgDQAEgEAAgJIAAgJQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape_1.setTransform(58.8,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_2.setTransform(52.2,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMBMIgBgCIAAgEIgBgEIAAgJIAAgYQAAgKgDgFQgFgEgGAAIgIAAIAAA+IgYAAIAAiYIAkAAQARAAAJAJQAIAJAAASIAAAMQAAAYgQAGQAKADADAIQADAJABAMIAAAYIAAAKIACAIgAgMgGIAKAAQAEAAAEgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape_3.setTransform(45.9,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBMIAAiYIBBAAIAAAWIgoAAIAAArIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape_4.setTransform(37.4,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBMIAAiYIBBAAIAAAWIgoAAIAAArIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape_5.setTransform(29.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBMIAAiYIAkAAQARAAAJAJQAIAJAAASIAAAGQAAALgDAIQgEAIgIAEQAKADAEAGQAEAJAAANIAAAMQAAASgJAJQgKAJgSAAgAgMA3IAMAAQAGAAADgEQAEgDAAgIIAAgOQAAgLgEgEQgEgEgGAAIgLAAgAgMgNIAKAAQAFAAADgDQAEgEAAgJIAAgJQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape_6.setTransform(20.7,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBMIAAiCIgaAAIAAgWIBJAAIAAAWIgaAAIAACCg");
	this.shape_7.setTransform(12.2,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_8.setTransform(3.8,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBMIAAiYIBBAAIAAAWIgoAAIAAArIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape_9.setTransform(-4.6,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANBMIAAhBIgaAAIAABBIgXAAIAAiYIAXAAIAABCIAaAAIAAhCIAYAAIAACYg");
	this.shape_10.setTransform(-13.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJBMIgJhPIgHBPIghAAIgRiYIAXAAIANB4IAMh4IAVAAIANB5IAMh5IAVAAIgRCYg");
	this.shape_11.setTransform(-24.4,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_12.setTransform(-32.6,7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAJBMIgJhPIgHBPIghAAIgRiYIAYAAIAMB4IAMh4IAVAAIAMB5IANh5IAVAAIgRCYg");
	this.shape_13.setTransform(-40.9,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAJBMIgJhPIgHBPIghAAIgRiYIAYAAIAMB4IAMh4IAVAAIANB5IAMh5IAVAAIgRCYg");
	this.shape_14.setTransform(-53.3,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAJBMIgJhPIgHBPIghAAIgRiYIAXAAIAOB4IALh4IAVAAIANB5IAMh5IAVAAIgRCYg");
	this.shape_15.setTransform(-65.7,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-13.4,147.9,26.9);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape.setTransform(90,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBeIAAi7IBHAAIAAALIg7AAIAACwg");
	this.shape_1.setTransform(79.5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_2.setTransform(68.9,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBeIAAhZIg4AAIAABZIgMAAIAAi7IAMAAIAABZIA4AAIAAhZIAOAAIAAC7g");
	this.shape_3.setTransform(57.8,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBeIAAhaQgLASgUAAQgKAAgHgEQgIgDgEgHQgFgGgCgGQgCgJAAgJIAAhHIAMAAIAABGQAAAHACAGQACAHADADQAEAFAFADQAGACAGAAQAXAAAGgWIAAhRIAMAAIAAC7g");
	this.shape_4.setTransform(47.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBeIAAi7IAKAAIAAC7g");
	this.shape_5.setTransform(40.4,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBeIAAhZIg4AAIAABZIgNAAIAAi7IANAAIAABZIA4AAIAAhZIAOAAIAAC7g");
	this.shape_6.setTransform(33.4,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_7.setTransform(22.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhABeIAAi7IAMAAIAACvIAvAAIAAivIALAAIAACvIAuAAIAAivIANAAIAAC7g");
	this.shape_8.setTransform(8.7,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcBeIAAiwIg4AAIAACwIgNAAIAAi7IBTAAIAAC7g");
	this.shape_9.setTransform(-4.1,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_10.setTransform(-19.5,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjBeIAAi7IBHAAIAAALIg7AAIAACwg");
	this.shape_11.setTransform(-30,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_12.setTransform(-40.6,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgBeIgzhZIgNAUIAABFIgMAAIAAi7IAMAAIAABiIA8hiIANAAIg0BYIA4Bjg");
	this.shape_13.setTransform(-51.8,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBcQgIgEgFgGQgFgHgCgIQgCgJAAgKIAAhfQAAgKACgJQACgIAFgHQAFgGAIgEQAIgDAJAAQAKAAAIADQAIAEAFAGQAFAHACAIQACAJAAAKIAAAQIgMAAIAAgQQAAgIgBgHQgCgGgDgFQgEgFgFgDQgFgCgIAAQgGAAgFACQgGADgDAFQgEAFgBAGQgCAHAAAIIAABgQAAAHACAGQABAHAEAFQADAEAGADQAFADAGAAQAIAAAFgDQAFgDAEgEQADgFACgHQABgGAAgHIAAgXIAMAAIAAAWQAAAKgCAJQgCAIgFAHQgFAGgIAEQgIADgKABQgJgBgIgDg");
	this.shape_14.setTransform(-62.4,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAsBrIAAgaIhYAAIAAAaIgMAAIAAgmIANAAQAGgFABgIIACgRIAIiRIBDAAIAACvIAQAAIAAAmgAgVAnIgCARQgCAIgFAFIA7AAIAAikIgrAAg");
	this.shape_15.setTransform(-74.1,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEBeIAAi7IAJAAIAAC7g");
	this.shape_16.setTransform(-82.4,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBeIAAgLQAIAAAFgDQAEgDACgFQACgEABgHIABgNIAGiNIBEAAIAAC7IgMAAIAAiwIgsAAIgGCCIgCASQgBAIgDAGQgEAGgGAEQgGAEgKAAg");
	this.shape_17.setTransform(-90.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-15.9,196,31.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBvIAAikIg5CkIgOAAIAAi7IALAAIAACgIAYhDIAhhdIAOAAIAAC7gAgQheQgIgFAAgMIAJAAQAAAJAFADQAFADAGAAQAIAAAEgDQAGgDAAgJIAJAAQgBAMgHAFQgIAHgLAAQgKAAgHgHg");
	this.shape.setTransform(85.3,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_1.setTransform(74.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBeIAAi7IAmAAQAVAAAJAMQAJANAAAVIAAAUQAAAXgKAJQgLALgVAAIgXAAIAABOgAgaAFIAXAAQAPAAAHgGQAIgHAAgSIAAgWQAAgPgGgKQgGgJgPAAIgaAAg");
	this.shape_2.setTransform(63.5,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBeIgzhZIgNAUIAABFIgMAAIAAi7IAMAAIAABiIA8hiIANAAIg0BYIA4Bjg");
	this.shape_3.setTransform(53.1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBeIAAgLQANAAAGgGQAFgFAEgLIAIgXIgtiDIAMAAIAXBCIAOAxIAPgxIAUhCIAOAAIgyCYIgCAPQgDAHgFAEQgFAFgHACQgFACgIAAIgEAAg");
	this.shape_4.setTransform(37.6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADBcQgFgEgGgGQgFgHgCgIQgDgJAAgKIAAgrIggAAIAABZIgNAAIAAi7IANAAIAABZIAgAAIAAgrQAAgKADgJQACgIAFgHQAGgGAFgEQAIgDALAAQAKAAAIADQAJAEAEAGQAGAHACAIQADAJAAAKIAABfQAAAKgDAJQgCAIgGAHQgEAGgJAEQgIADgKABQgLgBgIgDgAAIhRQgFADgDAFQgCAFgBAGQgCAHAAAIIAABgQAAAHACAHQABAGACAFQADAFAFACQAGADAIAAQAQAAAGgKQAHgKAAgPIAAhgQAAgQgHgKQgGgKgQAAQgIAAgGACg");
	this.shape_5.setTransform(20.2,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEBeIAAi7IAKAAIAAC7g");
	this.shape_6.setTransform(11,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBcQgIgEgFgGQgFgHgCgIQgCgJAAgKIAAhfQAAgKACgJQACgIAFgHQAFgGAIgEQAIgDAJAAQAKAAAIADQAIAEAFAGQAFAHACAIQACAJAAAKIAAAQIgMAAIAAgQQAAgIgBgHQgCgGgDgFQgEgFgFgDQgFgCgIAAQgGAAgFACQgGADgDAFQgEAFgBAGQgCAHAAAIIAABgQAAAHACAGQABAHAEAFQADAEAGADQAFADAGAAQAIAAAFgDQAFgDAEgEQADgFACgHQABgGAAgHIAAgXIAMAAIAAAWQAAAKgCAJQgCAIgFAHQgFAGgIAEQgIADgKABQgJgBgIgDg");
	this.shape_7.setTransform(4.3,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBeIAAi7IAmAAQAVAAAJAMQAJANAAAVIAAAUQAAAXgKAJQgLALgVAAIgXAAIAABOgAgaAFIAXAAQAPAAAHgGQAIgHAAgSIAAgWQAAgPgGgKQgGgJgPAAIgaAAg");
	this.shape_8.setTransform(-5.6,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBeIAAgLQANAAAFgGQAHgFADgLIAIgXIguiDIAOAAIAVBCIAPAxIAPgxIAVhCIAMAAIgwCYIgEAPQgCAHgGAEQgEAFgHACQgFACgIAAIgEAAg");
	this.shape_9.setTransform(-16.4,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBeIgzhZIgNAUIAABFIgMAAIAAi7IAMAAIAABiIA8hiIANAAIg0BYIA4Bjg");
	this.shape_10.setTransform(-27.4,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBcQgIgEgFgGQgFgHgCgIQgCgJAAgKIAAhfQAAgKACgJQACgIAFgHQAFgGAIgEQAIgDAJAAQAKAAAIADQAIAEAFAGQAFAHACAIQACAJAAAKIAAAQIgMAAIAAgQQAAgIgBgHQgCgGgDgFQgEgFgFgDQgFgCgIAAQgGAAgFACQgGADgDAFQgEAFgBAGQgCAHAAAIIAABgQAAAHACAGQABAHAEAFQADAEAGADQAFADAGAAQAIAAAFgDQAFgDAEgEQADgFACgHQABgGAAgHIAAgXIAMAAIAAAWQAAAKgCAJQgCAIgFAHQgFAGgIAEQgIADgKABQgJgBgIgDg");
	this.shape_11.setTransform(-38.1,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgBeIgzhZIgNAUIAABFIgMAAIAAi7IAMAAIAABiIA8hiIANAAIg0BYIA4Bjg");
	this.shape_12.setTransform(-48.4,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBcQgIgEgFgGQgFgHgCgIQgCgJAAgKIAAgSIAMAAIAAATQAAAHABAGQACAHADAFQAEAEAFADQAFADAHAAQAHAAAFgDQAGgDADgEQAEgFABgHQACgGAAgHIAAgvIglAAIAAgKIAlAAIAAgnQAAgIgCgHQgBgGgEgFQgDgFgGgDQgFgCgHAAQgHAAgFACQgFADgEAFQgDAFgCAGQgBAHAAAIIAAAMIgMAAIAAgMQAAgKACgJQADgIAEgHQAFgGAIgEQAIgDAJAAQAKAAAIADQAIAEAFAGQAFAHACAIQACAJAAAKIAABfQAAAKgCAJQgCAIgFAHQgFAGgIAEQgIADgKABQgJgBgIgDg");
	this.shape_13.setTransform(-59.1,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_14.setTransform(-74.2,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdBeIAAhZIg6AAIAABZIgMAAIAAi7IAMAAIAABZIA6AAIAAhZIAMAAIAAC7g");
	this.shape_15.setTransform(-85.3,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAFQgIgFAAgKIAJAAQAAAIAGACQAFADAGAAQAHAAAFgDQAGgCAAgIIAIAAQAAAKgIAFQgHAGgLAAQgLAAgHgGg");
	this.shape_16.setTransform(37.6,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-15.9,185.4,31.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBwIAAhbIgMAAQgKAAgGAFQgFAHAAAQIAAAjIAAALIgBAIIgBAEIgCAFIgjAAQACgHABgGIABgOIAAgjQAAgSAEgMQAFgMAOgGQgXgJAAgiIAAgSQAAgaAMgNQAMgNAaABIA1AAIAADegAgKhJQgEAFAAAMIAAAWQAAAOAGAFQAFAFAIAAIAOAAIAAhFIgRAAQgHAAgFAGg");
	this.shape.setTransform(71.4,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBjQgNgOAAgbIAAhzQAAgbANgPQAOgOAYAAQAaAAAMAOQAOAPAAAbIAAAWIghAAIAAgYQAAgMgGgFQgFgFgHAAQgHAAgFAFQgFAFAAAMIAAB3QAAAMAFAFQAFAFAHAAQAHAAAFgFQAGgFAAgMIAAggIAhAAIAAAeQAAAbgOAOQgMAPgaAAQgYAAgOgPg");
	this.shape_1.setTransform(59.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBwIAAjeIBdAAIAAAfIg6AAIAAA/IAuAAIAAAeIguAAIAABBIA6AAIAAAhg");
	this.shape_2.setTransform(47.3,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcB+IAAgdIhaAAIAAjeIAkAAIAAC9IAlAAIAAi9IAkAAIAAC+IAPAAIAAA9g");
	this.shape_3.setTransform(34.2,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYCJIAAidIgPA2IgbBnIgkAAIAAjeIAfAAIAACMIANgyIAbhaIAmAAIAADegAgahuQgIgJgBgRIAWAAQAAAJAEAEQAEACAFAAQAHAAAEgCQAEgEABgJIAVAAQAAARgJAJQgJAKgTAAQgRAAgJgKg");
	this.shape_4.setTransform(19.7,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBwIAAggQAOABAHgDQAIgEACgMIAAgCIgwirIAiAAIAUBNIAJAyIAIgyIAQhNIAlAAIgmClQgDAPgFAMQgEALgJAHQgFAHgMAEQgKACgMAAIgJAAg");
	this.shape_5.setTransform(6.4,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBwIAAjeIAzAAQAagBAMAOQANAOABAcIAAAdQgBAagNANQgMAOgaAAIgQAAIAABVgAgQgCIAQAAQAHgBAFgEQAEgEAAgNIAAghQAAgMgEgFQgFgFgHAAIgQAAg");
	this.shape_6.setTransform(-5.7,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBwIAAi/IglAAIAAgfIBrAAIAAAfIglAAIAAC/g");
	this.shape_7.setTransform(-17.9,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBjQgNgOAAgbIAAhzQAAgbANgPQAOgOAYAAQAZAAAOAOQANAPAAAbIAAAWIghAAIAAgYQgBgMgFgFQgEgFgIAAQgHAAgFAFQgFAFAAAMIAAB3QAAAMAFAFQAFAFAHAAQAIAAAEgFQAFgFABgMIAAggIAhAAIAAAeQAAAbgNAOQgOAPgZAAQgYAAgOgPg");
	this.shape_8.setTransform(-29.7,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBwIAAjeIAhAAIAADeg");
	this.shape_9.setTransform(-39,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtBwIAAjeIBbAAIAAAfIg4AAIAAC/g");
	this.shape_10.setTransform(-47.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmBjQgNgOAAgbIAAgbIAhAAIAAAdQAAAMAFAFQAFAFAIAAQAGAAAFgFQAFgFABgMIAAgwIgfAAIAAgfIAfAAIAAgoQgBgMgFgFQgFgFgGAAQgIAAgFAFQgFAFAAAMIAAAVIghAAIAAgTQAAgbANgPQANgOAZAAQAZAAANAOQAOAPAAAbIAABzQAAAbgOAOQgNAPgZAAQgYAAgOgPg");
	this.shape_11.setTransform(-60,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgyBwIAAjeIAyAAQAagBANAOQANAOgBAcIAAAdQABAagNANQgNAOgaAAIgQAAIAABVgAgQgCIAQAAQAHgBAFgEQAFgEgBgNIAAghQABgMgFgFQgFgFgHAAIgQAAg");
	this.shape_12.setTransform(-71.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.2,-18.6,160.5,37.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkCdIgIg5Ig7AAIgJA5IgtAAIAzk5IBGAAIAyE5gAgYA5IAtAAIgWidg");
	this.shape.setTransform(100.3,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLCdIAAk5IBKAAQAmAAARASQARASAAAlIAAAKQAAAZgHAQQgIAPgRAIQAUAIAIAPQAJASAAAZIAAAZQAAAlgTATQgTATglAAgAgaBwIAbAAQANAAAGgHQAHgGgBgSIAAgcQABgWgIgHQgHgJgPABIgXAAgAgagcIAUAAQAMAAAIgHQAHgHABgTIAAgSQAAgRgHgHQgFgIgMAAIgYAAg");
	this.shape_1.setTransform(82.3,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXCdIAAk5IAvAAIAAE5g");
	this.shape_2.setTransform(68.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbCdIAAkMIg2AAIAAEMIgyAAIAAk5ICaAAIAAE5g");
	this.shape_3.setTransform(54.7,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/CdIAAgsQATABALgEQALgGADgQIAAgDIhEjxIAxAAIAbBrIANBIIAMhHIAWhsIA0AAIg1DpQgEAVgHAQQgGAQgLAKQgKAKgRAFQgMACgRAAIgOAAg");
	this.shape_4.setTransform(29,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlCdIgmh8IgqB8IguAAIA3igIgziZIAzAAIAjB0IAnh0IAuAAIg0CZIA3Cgg");
	this.shape_5.setTransform(10.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbCdIAAiBIgSAAQgPABgHAIQgIAKAAAWIAAAxIAAAQIgBAKIgBAHIgCAGIgzAAQAEgJABgJIABgUIAAgxQAAgZAHgRQAHgRATgIQghgNAAgwIAAgZQABglARgSQARgSAkAAIBLAAIAAE5gAgOhnQgGAHAAARIAAAgQAAASAIAIQAHAHANAAIATAAIAAhhIgYAAQgLAAgGAIg");
	this.shape_6.setTransform(-9.1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhYCdIAAgtIAOgBQAGgBAEgDQADgDACgHQACgGAAgLIAIjsICKAAIAAE5IgyAAIAAkMIgqAAIgFC8QgBArgRATQgRASglAAg");
	this.shape_7.setTransform(-28.6,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0CdIAAk5IAyAAIAAEMIArAAIAAkMIAvAAIAAEMIArAAIAAkMIAxAAIAAE5g");
	this.shape_8.setTransform(-51.4,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkCdIgIg5Ig7AAIgJA5IgtAAIAzk5IBGAAIAyE5gAgZA5IAuAAIgWidg");
	this.shape_9.setTransform(-81.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbCdIAAkMIg2AAIAAEMIgxAAIAAk5ICZAAIAAE5g");
	this.shape_10.setTransform(-99.8,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-25.4,223,50.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvB6IAAjzIBfAAIAAAOIhPAAIAABjIBBAAIAAANIhBAAIAABmIBPAAIAAAPg");
	this.shape.setTransform(53.1,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwCKIAAghIhvAAIAAjzIAQAAIAADlIBKAAIAAjlIAQAAIAADlIAVAAIAAAvg");
	this.shape_1.setTransform(39.3,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGB6IAAjzIANAAIAADzg");
	this.shape_2.setTransform(28.8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXB4QgKgGgGgIQgGgIgEgLQgCgLAAgOIAAgUIAPAAIAAAVQAAAKACAIQACAJAEAGQAFAGAHAEQAHAEAJAAQATAAAJgOQAIgNAAgVIAAgTQAAgTgKgLQgKgMgQABIgNAAIAAgNIANAAQAQAAAKgMQAKgLAAgSIAAgJQAAgVgIgNQgJgOgTAAQgTABgJANQgIANAAATIAAAOIgPAAIAAgNQAAgNADgLQADgLAGgJQAGgIAKgFQAKgEANAAQANAAAKAEQAKAFAHAIQAGAJADALQADAMAAANIAAAGQAAASgIAOQgJANgQAGQARAEAIAMQAIANAAASIAAATQAAAOgDALQgDALgGAIQgHAIgKAGQgKAEgNAAQgNAAgKgEg");
	this.shape_3.setTransform(19.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA6CLIAAgiIhzAAIAAAiIgQAAIAAgxIARAAQAHgHACgKIADgWIAKi9IBYAAIAADkIAUAAIAAAxgAgcAzQgBANgCAJQgCAKgHAHIBNAAIAAjWIg4AAg");
	this.shape_4.setTransform(4.7,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnCRIAAjWIgjBfIgnB3IgSAAIAAjzIAOAAIAADQIAhhaIAph2IATAAIAADzgAgWh6QgKgIAAgOIALAAQABAKAHAEQAHAFAIAAQAJAAAHgFQAHgEABgKIALAAQgBAOgJAHQgKAJgPAAQgNgBgLgHg");
	this.shape_5.setTransform(-10.6,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxB6IgMg2IhKAAIgNA2IgOAAIA1jzIAWAAIA2DzgAgjA2IBGAAIgjidg");
	this.shape_6.setTransform(-25.1,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyB6IAAjzIAyAAQAbAAAMARQAMAPAAAbIAAAbQAAAegOAMQgNAOgbAAIgfAAIAABlgAgiAGIAfAAQATABAJgJQAKgJAAgXIAAgdQAAgTgIgMQgHgNgUAAIgiAAg");
	this.shape_7.setTransform(-38.9,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmB6IAAjlIhLAAIAADlIgQAAIAAjzIBrAAIAADzg");
	this.shape_8.setTransform(-52.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,-19.9,122.6,39.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeCBIgHgvIgwAAIgHAvIgmAAIAqkBIA5AAIAqEBgAgUAvIAlAAIgRiBg");
	this.shape.setTransform(102.8,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0CBIAAkBIBpAAIAAAlIhAAAIAADcg");
	this.shape_1.setTransform(88.7,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeCBIgHgvIgwAAIgHAvIgmAAIAqkBIA5AAIAqEBgAgUAvIAlAAIgRiBg");
	this.shape_2.setTransform(74.3,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWCBIAAhvIgsAAIAABvIgpAAIAAkBIApAAIAABvIAsAAIAAhvIAqAAIAAEBg");
	this.shape_3.setTransform(58.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeCBIgHgvIgwAAIgHAvIgmAAIAqkBIA5AAIAqEBgAgUAvIAlAAIgRiBg");
	this.shape_4.setTransform(43.4,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9CBIAAkBIA9AAQAeAAAOAOQAOAPAAAeIAAAKQAAAUgGANQgGAMgOAHQARAGAGAMQAHAPAAAUIAAAWQAAAdgPARQgQAPgeAAgAgVBcIAWAAQAKAAAFgFQAGgGAAgPIAAgWQAAgSgGgHQgHgHgMAAIgSAAgAgVgXIAQAAQAKAAAGgFQAHgHAAgPIAAgOQAAgOgFgHQgFgGgJAAIgUAAg");
	this.shape_5.setTransform(28.7,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeCBIgHgvIgwAAIgHAvIgmAAIAqkBIA5AAIAqEBgAgUAvIAlAAIgRiBg");
	this.shape_6.setTransform(13.4,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7CBIAAkBIA7AAQAeAAAPAQQAPARAAAfIAAAhQAAAfgPAQQgPAQgeAAIgSAAIAABhgAgSgDIASAAQAJAAAFgFQAFgFAAgPIAAgnQAAgOgFgFQgFgFgJAAIgSAAg");
	this.shape_7.setTransform(-0.6,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTCBIAAjcIgrAAIAAglIB8AAIAAAlIgrAAIAADcg");
	this.shape_8.setTransform(-14.6,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7CBIAAkBIApAAIAABhIASAAQAeAAAPAQQAPAPAAAgIAAAhQAAAfgPARQgPAQgeAAgAgSBcIASAAQAJAAAFgFQAFgFAAgOIAAgoQAAgOgFgFQgFgEgJAAIgSAAg");
	this.shape_9.setTransform(-28.2,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhICBIAAglIAMgBQAEAAADgDQADgDABgFIACgOIAHjCIBxAAIAAEBIgpAAIAAjcIgiAAIgECaQgCAkgNAPQgOAPgfAAg");
	this.shape_10.setTransform(-44.7,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTCBIAAkBIAnAAIAAEBg");
	this.shape_11.setTransform(-55.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSCBIAAgeIgQAAQgeABgPgRQgPgQAAgfIAAhFQAAggAPgPQAPgRAeAAIAQAAIAAgfIAmAAIAAAfIAPAAQAeAAAPARQAPAPAAAgIAABFQAAAfgPAQQgPARgegBIgPAAIAAAegAAUBAIAPAAQAJAAAGgFQAFgHAAgOIAAhJQAAgPgFgFQgGgGgJAAIgPAAgAgxg3QgFAFAAAPIAABJQAAAOAFAHQAGAFAJAAIAQAAIAAh9IgQAAQgJAAgGAGg");
	this.shape_12.setTransform(-70.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2CBIAAkBIBtAAIAAAlIhEAAIAABIIA2AAIAAAjIg2AAIAABMIBEAAIAAAlg");
	this.shape_13.setTransform(-87.6,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWCBIAAhvIgsAAIAABvIgpAAIAAkBIApAAIAABvIAsAAIAAhvIAqAAIAAEBg");
	this.shape_14.setTransform(-102.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-21.2,224.9,42.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape.setTransform(102.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBeIAAi7IBHAAIAAALIg7AAIAACwg");
	this.shape_1.setTransform(91.6,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_2.setTransform(81,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBeIAAhZIg4AAIAABZIgNAAIAAi7IANAAIAABZIA4AAIAAhZIAOAAIAAC7g");
	this.shape_3.setTransform(69.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBeIAAhaQgLASgUAAQgKAAgHgEQgIgDgEgHQgFgGgCgGQgCgJAAgJIAAhHIAMAAIAABGQAAAHACAGQACAHADADQAEAFAFADQAGACAGAAQAXAAAGgWIAAhRIAMAAIAAC7g");
	this.shape_4.setTransform(59.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBeIAAi7IAKAAIAAC7g");
	this.shape_5.setTransform(52.4,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBeIAAhZIg4AAIAABZIgNAAIAAi7IANAAIAABZIA4AAIAAhZIAOAAIAAC7g");
	this.shape_6.setTransform(45.5,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_7.setTransform(34.3,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhABeIAAi7IAMAAIAACvIAvAAIAAivIALAAIAACvIAuAAIAAivIANAAIAAC7g");
	this.shape_8.setTransform(20.8,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBeIAAiwIg6AAIAACwIgMAAIAAi7IBSAAIAAC7g");
	this.shape_9.setTransform(7.9,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBeIgzhZIgNAUIAABFIgMAAIAAi7IAMAAIAABiIA8hiIANAAIg0BYIA4Bjg");
	this.shape_10.setTransform(-6.9,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_11.setTransform(-18.4,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAtBeIAAimIgoCmIgKAAIgoimIAACmIgLAAIAAi7IASAAIAmClIAnilIASAAIAAC7g");
	this.shape_12.setTransform(-31.1,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBcQgIgEgFgGQgFgHgCgIQgCgJAAgKIAAhfQAAgKACgJQACgIAFgHQAFgGAIgEQAIgDAJAAQAKAAAIADQAIAEAFAGQAFAHACAIQACAJAAAKIAAAQIgMAAIAAgQQAAgIgBgHQgCgGgDgFQgEgFgFgDQgFgCgIAAQgGAAgFACQgGADgDAFQgEAFgBAGQgCAHAAAIIAABgQAAAHACAGQABAHAEAFQADAEAGADQAFADAGAAQAIAAAFgDQAFgDAEgEQADgFACgHQABgGAAgHIAAgXIAMAAIAAAWQAAAKgCAJQgCAIgFAHQgFAGgIAEQgIADgKABQgJgBgIgDg");
	this.shape_13.setTransform(-42.9,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAqBeIAAi7IAMAAIAAC7gAg1BeIAAi7IAMAAIAABNIAXAAQAVAAALAMQAKAJAAAWIAAAVQAAALgCAIQgCAJgFAFQgFAHgIACQgFAEgMAAgAgpBSIAaAAQAPAAAGgJQAGgIAAgQIAAgWQAAgSgIgHQgFgGgRAAIgXAAg");
	this.shape_14.setTransform(-58.8,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoBeIAAi7IBKAAIAAALIg+AAIAABGIAbAAQAUAAALAJQALAIAAAWIAAAWQAAAWgKALQgKAMgVAAgAgcBSIAcAAQAPAAAHgHQAHgJAAgQIAAgXQAAgSgIgFQgIgFgOAAIgbAAg");
	this.shape_15.setTransform(-70.5,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSBcQgHgEgFgGQgFgHgDgIQgCgJAAgKIAAhfQAAgKACgJQADgIAFgHQAFgGAHgEQAJgDAJAAQAKAAAIADQAIAEAFAGQAGAHACAIQACAJAAAKIAABfQAAAKgCAJQgCAIgGAHQgFAGgIAEQgIADgKABQgJgBgJgDgAgVhJQgHAKAAAQIAABgQAAAPAHAKQAGAKAPAAQAPAAAHgKQAGgKABgPIAAhgQgBgQgGgKQgHgKgPAAQgPAAgGAKg");
	this.shape_16.setTransform(-80.9,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBcQgIgEgFgGQgFgHgCgIQgCgJAAgKIAAhfQAAgKACgJQACgIAFgHQAFgGAIgEQAIgDAJAAQAKAAAIADQAIAEAFAGQAFAHACAIQACAJAAAKIAAAQIgMAAIAAgQQAAgIgBgHQgCgGgDgFQgEgFgFgDQgFgCgIAAQgGAAgFACQgGADgDAFQgEAFgBAGQgCAHAAAIIAABgQAAAHACAGQABAHAEAFQADAEAGADQAFADAGAAQAIAAAFgDQAFgDAEgEQADgFACgHQABgGAAgHIAAgXIAMAAIAAAWQAAAKgCAJQgCAIgFAHQgFAGgIAEQgIADgKABQgJgBgIgDg");
	this.shape_17.setTransform(-91.1,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAmBeIgJgqIg5AAIgKAqIgLAAIApi7IAQAAIAqC7gAgbAqIA2AAIgbh5g");
	this.shape_18.setTransform(-102.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-15.9,220.1,31.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-120,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-177,240,355);


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

	// Layer 1
	this.t2 = new lib.Symbol17();
	this.t2.setTransform(0,19.2);

	this.t1 = new lib.Symbol16();
	this.t1.setTransform(0,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-34.6,158.3,77.7);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol10();
	this.t3.setTransform(0,40.6);

	this.t2 = new lib.Symbol9();
	this.t2.setTransform(0,12.8);

	this.t1 = new lib.Symbol8();
	this.t1.setTransform(0,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-36.6,196,93.1);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol7();
	this.t2.setTransform(0,20.8);

	this.t1 = new lib.Symbol6();
	this.t1.setTransform(0,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-36.6,223,82.9);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol5();
	this.t2.setTransform(0,16.6);

	this.t1 = new lib.Symbol4();
	this.t1.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-30.6,224.9,68.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol13();

	this.t1 = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-18,162,36);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol3();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-177,240,355);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.clouds = new lib.Symbol15();
	this.clouds.setTransform(150,-234);

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AGlXgQACgCABgCQABgFgDgGQgDgEgGgCQgHgDgPACQg5AFhJgIQgtgFhVgPIgVgGQgMgEgHgGIgJgJQgFgEgEgCQgJgFgLAEQgIADgMAHQACgFgFgGQgFgEgFAAQgKAAgKAJQgMAJgJAAIgegFQgYgDgJAAQgNAAgSACIghAGQgRACgyAAQgsgBgZAHQgWAEgbAOQgOAGggATQgLAFgCAHIAAABIlpAAMAAAgu/IXkAAMAAAAu/g");
	mask.setTransform(43.8,-144.5);

	// ukaz
	this.ukaz = new lib.Symbol14();
	this.ukaz.setTransform(42.6,5.1,1,1,0,0,0,-2.7,57.1);

	this.ukaz.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.ukaz).wait(1));

	// Layer 2 copy
	this.water2 = new lib.water_1();
	this.water2.setTransform(430.4,312.5);
	this.water2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.water2).wait(1));

	// Layer 2
	this.water = new lib.water_1();
	this.water.setTransform(607.2,253.5);
	this.water.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.water).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2473BD","#3686D0","#5DC6DD"],[0,0.667,1],0,-102,0,102).s().p("Eg0KAQQMAAAggfMBoVAAAMAAAAgfg");
	this.shape.setTransform(0,-242.9);

	this.instance = new lib.bg();
	this.instance.setTransform(-334,-215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511.6,-347,2060.9,753.5);


(lib.bg_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc
	this.mc = new lib.Symbol1();
	this.mc.setTransform(0,-66);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511.6,-413,2060.9,753.5);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		//var count = 1;
		//var repeat = 2000;
		var time2 = 4.0;
		var time3 = time2 + 4.0;
		var time4 = time3 + 3.0;
		
		TweenMax.to(r.beer.mc, 1.2, {x:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(r.beer.mc, 1.8, {y:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(r.beer.mc, 2.4, {rotation:"-=1", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		
		
		var tl = new TimelineMax();
		tl.fromTo(r.blk, 0.7, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.bg, 1.0, {scaleX:2.0, scaleY:2.0, x:"-=30", ease:Expo.easeOut}, 0.0)
		  .to(r.bg.mc, 4.0, {x:"-=30", ease:Power0.easeNone}, 0.0)
		  .to(r.bg.mc.water, 15.0, {x:"-=400", ease:Power0.easeNone}, 0.0)
		  .to(r.bg.mc.water2, 15.0, {x:"-=1000", ease:Power0.easeNone}, 0.0)
		  .to(r.bg.mc.clouds, 15.0, {x:"-=100", ease:Power0.easeNone}, 0.0)
		  .from(r.beer, 2.0, {x:"-=240", ease:Expo.easeOut}, 0.0)
		  .staggerFrom([r.t1.t1, r.t1.t2], 1.2, {y:"+=80", alpha:0, ease:Expo.easeOut}, 0.10, 0.50)
		  
		  
		  //2
		  .to(r.bg, 1.0, {scaleX:1.0, scaleY:1.0, x:-81+30, y:143, ease:Expo.easeInOut}, 4.0)
		  .to(r.bg.mc, 3.0, {x:"-=20", ease:Power0.easeNone}, 4.0)
		  .to(r.beer, 1.0, {x:"-=240", y:"+=200", ease:Expo.easeInOut}, 4.0)
		  .staggerTo([r.t1.t1, r.t1.t2], 0.6, {y:"-=80", alpha:0, ease:Expo.easeIn}, 0.10, 4.00)
		  .staggerFrom([r.t2.t1, r.t2.t2], 1.0, {y:"+=80", alpha:0, ease:Expo.easeOut}, 0.10, 4.50)
		  .from(r.bg.mc.ukaz, 0.2, {y:"-=300", ease:Sine.easeOut}, 5.0)
		  .to(r.bg.mc.ukaz, 0.1, {y:"-=9", ease:Sine.easeOut}, 5.2)
		  .to(r.bg.mc.ukaz, 0.1, {y:"+=9", ease:Sine.easeOut}, 5.3)
		  .from(r.bg.mc.ukaz, 0.8, {rotation:"-=4", ease:Elastic.easeOut}, 5.3)
		  
		  
		  //3
		  .to(r.bg, 1.0, {x:-214, y:143, ease:Expo.easeInOut}, 7.0)
		  .to(r.bg.mc, 1.0, {x:"+=50", ease:Expo.easeInOut}, 7.0)
		  .staggerTo([r.t2.t1, r.t2.t2], 0.6, {x:"-=120", alpha:0, ease:Expo.easeIn}, 0.10, 7.00)
		  .staggerFrom([r.t3.t1, r.t3.t2, r.t3.t3], 1.0, {x:"+=120", alpha:0, ease:Expo.easeOut}, 0.10, 7.50)
		  .staggerFrom([r.site.t1, r.site.t2], 1.8, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.08, 8.00)
		  
		  
		  
		  
		  //packshot
		  .to(r.bg, 1.0, {scaleX:0.712, scaleY:0.712, x:118, y:0, ease:Expo.easeInOut}, 10.0)
		  .to(r.beer, 1.0, {x:0, y:24, ease:Expo.easeInOut}, 10.0)
		  .staggerTo([r.t3.t1, r.t3.t2, r.t3.t3, r.site], 0.6, {x:"+=300", alpha:0, ease:Expo.easeIn}, 0.05, 10.00)
		  .staggerFrom([r.t4.t1, r.t4.t2], 1.2, {y:"+=80", alpha:0, ease:Expo.easeOut}, 0.10, 10.50)
		  
		  
		  
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 15)
		  ;
		
		
		
		function restart() {
			tl.play(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(2,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.instance = new lib.Symbol18();
	this.instance.setTransform(0,177);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// beer
	this.beer = new lib.Symbol2();
	this.beer.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.beer).wait(1));

	// site
	this.site = new lib.Symbol11();
	this.site.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get(this.site).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(0,-158,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(0,-149,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(0,-155,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(0,-158,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bg
	this.bg = new lib.bg_1();
	this.bg.setTransform(118,0,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// bg_pattern
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-806,-294,2274.2,777.5);


// stage content:
(lib.psh_240x400 = function(mode,startPosition,loop) {
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