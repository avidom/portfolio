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
		{src:"images/auto.png", id:"auto"},
		{src:"images/auto2.png", id:"auto2"},
		{src:"images/car1.png", id:"car1"},
		{src:"images/car2.png", id:"car2"},
		{src:"images/cars.png", id:"cars"},
		{src:"images/clouds.png", id:"clouds"},
		{src:"images/logo_bg.png", id:"logo_bg"},
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



(lib.auto = function() {
	this.initialize(img.auto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,182);


(lib.auto2 = function() {
	this.initialize(img.auto2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,208);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,213);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,199);


(lib.cars = function() {
	this.initialize(img.cars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,111);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,293);


(lib.logo_bg = function() {
	this.initialize(img.logo_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,48);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,70);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWA0QgJgCgGgIQgGgGgCgLQgEgKAAgPQAAgdANgNQAMgNAYAAQAZAAAMAMQAMANAAAdIAAAGIgBAIIhEAAQABAKAFAFQAFAEAKABIAKAAIAKgBIAMgDIAMgDIAAAWQgMAEgMACQgLACgKAAQgMAAgKgEgAgPgaQgEAGgBAMIAqAAQAAgMgFgGQgEgGgNAAQgKAAgFAGg");
	this.shape.setTransform(49,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA0QgKgCgGgIQgGgGgDgLQgCgKAAgPQAAgdAMgNQANgNAXAAQAaAAAMAMQALANABAdIgBAGIAAAIIhFAAQABAKAFAFQAGAEAKABIAKAAIAKgBIALgDIAMgDIAAAWQgMAEgLACQgMACgKAAQgMAAgJgEgAgOgaQgFAGgBAMIAqAAQgBgMgEgGQgFgGgMAAQgJAAgFAGg");
	this.shape_1.setTransform(37.2,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUA2IAAgtIgnAAIAAAtIgdAAIAAhsIAdAAIAAApIAnAAIAAgpIAdAAIAABsg");
	this.shape_2.setTransform(25.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBNQgKgEgGgHQgGgIgDgKQgCgKAAgNIAAgDIAAgBIAAgRIACgPIADgQQACgIAEgHQAGgLAJgGQAJgHALgEQAIgFAMgCIAYgDIAAAZIgQABQgJAAgIADQgIACgFAFQgHAEgFAIIgDAGQAJgEALAAQANAAAKAEQAKAEAGAHQAGAHADAJQACALAAANQAAANgCAKQgDAKgGAIQgGAHgKAEQgKAEgNAAQgMAAgKgEgAgPAAQgFAHAAASQAAASAFAHQAFAIAKAAQAKAAAGgIQAFgHAAgSQAAgSgFgHQgGgHgKAAQgKAAgFAHg");
	this.shape_3.setTransform(13.3,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWA0QgKgEgFgHQgHgHgCgLQgEgKAAgNQAAgLAEgKQACgMAHgGQAFgIAKgEQAKgEAMAAQANAAAKAEQAKAEAGAIQAGAGACAMQAEAKAAALQAAANgEALQgCAKgGAHQgGAHgKAEQgKAEgNAAQgMAAgKgEgAgPgYQgGAIABAQQgBATAGAGQAFAIAKAAQALAAAFgIQAGgGgBgTQABgQgGgIQgFgIgLAAQgKAAgFAIg");
	this.shape_4.setTransform(1.4,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwhDIAcgIIAAAHQAMgGAKAAQAOAAAIAEQAJAEAGAHQAFAHACAKQADAKAAANQAAANgDAIQgCALgFAHQgGAIgJAEQgIAFgOAAIgJgBQgGgBgHgCIAAAjIgcAIgAgJgxIgLADIAAA4IAMADIAIABQAGAAAEgDQAEgDACgFQACgDABgGIABgNIgBgNQgBgGgCgEQgCgEgEgCQgEgDgGAAIgJACg");
	this.shape_5.setTransform(-10.3,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBHIAAgiIg2AAIAAAiIgbAAIAAg3IAKAAQAIgMADgNQADgPAAgPIAAggIBLAAIAABXIAKAAIAAA3gAgEgiQAAANgCAMQgDAMgFANIAfAAIAAhAIgVAAg");
	this.shape_6.setTransform(-23,4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWA0QgKgEgFgHQgHgHgCgLQgEgKAAgNQAAgLAEgKQACgMAHgGQAFgIAKgEQAJgEANAAQANAAAKAEQAKAEAGAIQAGAGACAMQADAKABALQgBANgDALQgCAKgGAHQgGAHgKAEQgKAEgNAAQgMAAgKgEgAgPgYQgGAIAAAQQAAATAGAGQAFAIAKAAQALAAAFgIQAGgGgBgTQABgQgGgIQgFgIgLAAQgKAAgFAIg");
	this.shape_7.setTransform(-34.7,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBMIAAh/Ig3AAIAAB/IgdAAIAAiXIBxAAIAACXg");
	this.shape_8.setTransform(-47.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-14.6,113.9,29.2);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB061D").s().p("ALdFpI3IhIQg6gDgLhEIhHm6QgDgNABgKQgBg7A1AAIZqg2QBVgEABBSIgCAVIg+IfQgLBPhNAAIgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-36.1,178.2,72.3);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBtIAAgdIAUAAIAAAdgAgFAsIgEiYIAUAAIgBApIgBAkIgBAjIgCAog");
	this.shape.setTransform(104.6,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAtBOIAAiLIhQCLIgdAAIAAibIAUAAIAACJIBPiJIAeAAIAACbg");
	this.shape_1.setTransform(91.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBOIAAibIBhAAIgGAQIhGAAIAACLg");
	this.shape_2.setTransform(77.2,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag9BOIAAibIAVAAIAABDIAyAAQAZAAAOAKQANAIAAAYQAAAYgNALQgOALgZAAgAgoA+IAvAAQAQAAAJgGQAKgHAAgRQAAgQgKgGQgJgGgQAAIgvAAg");
	this.shape_3.setTransform(62.4,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAsBOIAAhJIhXAAIAABJIgUAAIAAibIAUAAIAABDIBXAAIAAhDIAUAAIAACbg");
	this.shape_4.setTransform(45.1,4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBMQgOgFgIgKQgJgKgDgPQgEgPAAgUQAAgUAFgQQAEgPAKgKQAJgKANgFQANgEAPAAQAQAAAMAEQANAFAJAJQAIAJAFAOQAFAPAAAUIAAAFIAAAIIh0AAQAAAOADAKQADAKAFAHQAGAHAKADQAKAEAMAAQARAAAOgCQAOgCAPgEIAAAOQgPAFgQACQgRACgOAAQgRAAgNgEgAgUg8QgJAEgGAHQgGAIgDALQgCAMgBAPIBgAAQAAgfgLgPQgLgOgaAAQgLAAgKADg");
	this.shape_5.setTransform(28,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA5BmIAAg0IhyAAIAAA0IgTAAIAAhCIALAAQAOgWAGgWQAGgaAAgZIAAgrIBlAAIAACKIAPAAIAABCgAgTgzQAAAVgFAXQgFAUgNAWIBUAAIAAh5Ig9AAg");
	this.shape_6.setTransform(10.3,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAtBOIAAiLIhQCLIgdAAIAAibIAUAAIAACJIBPiJIAeAAIAACbg");
	this.shape_7.setTransform(-15.1,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeBKQgOgFgJgKQgIgKgFgPQgDgPAAgSQAAglAQgVQASgWAjAAQAlAAAQAWQASAVgBAlQABASgFAPQgEAPgJAKQgIAKgOAFQgNAGgSAAQgRAAgNgGgAgjgwQgNAQAAAhQAAASADAMQAEAMAGAIQAHAHAJADQAJAEAKAAQALAAAJgEQAIgDAHgHQAGgIAEgMQAEgMAAgSQAAgQgEgMQgEgNgGgIQgHgIgIgEQgJgEgLAAQgWAAgNAQg");
	this.shape_8.setTransform(-32.4,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag+BOIAAibIBKAAQAaAAAKAKQALAKAAAWQAAAXgXALQAMACAIAJQAHAIAAASQAAAWgNAKQgNAKgXAAgAgqA+IA1AAQASAAAHgHQAIgHAAgPQAAgOgJgGQgJgHgPAAIg1AAgAgqgIIAwAAQAPAAAJgHQAIgGAAgOQAAgPgIgGQgJgFgPAAIgwAAg");
	this.shape_9.setTransform(-48.4,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUBLQgNgGgIgKQgJgLgEgPQgEgPAAgSQAAgSAEgOQAEgPAJgKQAIgLANgFQANgHAQAAQALABAMACQANACALAEIAAANQgKgDgKgBIgTgBQgQAAgJAEQgKAFgHAIQgGAJgDALQgDAMAAAOQAAAPADAMQADANAGAHQAHAJALAFQAIADARAAIAKAAIAKgBIAKgCIALgCIAAANQgYAIgbAAQgPAAgNgFg");
	this.shape_10.setTransform(-64,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag0BFQgNgMAAgXQAAgQAIgMQAHgLAVgGIAMgDIAQgDIASgBIAcAAIAAgIQAAgNgDgHQgEgHgIgEQgIgEgKgBIgXgBIgTABIgVADIAAgOQAOgDAPgCIAYgBQAOAAALADQAMADAJAFQAIAGAFAJQAFAIAAAMIAABvIgUAAIAAgQQgVAMgQADQgOADgOAAQgVAAgMgLgAAGgDIgXADQgNADgGAHQgHAIAAAOQAAARAKAIQAKAIASAAQAKAAAOgEQAOgFAMgIIAAg1QgYAAgPACg");
	this.shape_11.setTransform(-88.4,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAABQQgMAAgNgEQgNgDgLgGIAAgPQALAFAMADQAMAEALAAQAQAAAIgHQAJgHgBgOQAAgTgMgGQgNgHgUAAIgIAAIAAgOIAIAAIAPgCQAGgBAFgDQAGgEAEgGQAEgGAAgJQAAgLgHgGQgGgFgOAAQgJAAgLAEQgLADgJAGIAAgPQAIgGALgEQALgEAKAAQAugBABAnQAAAGgCAGQgDAGgEAFQgEAFgGAEQgGAEgHABQASACAKAJQAKAMAAARQAAAXgOALQgMAKgYAAIAAAAg");
	this.shape_12.setTransform(-102.7,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-20,222.1,40);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA051D").s().p("AggBKQgOgGgJgJQgIgLgEgOQgEgPAAgTQAAgQAEgQQAEgPAIgKQAJgLAOgFQAOgGASAAQATAAAOAGQAOAFAIALQAJAKAEAPQAEAQAAAQQAAATgEAPQgEAOgJALQgIAKgOAFQgOAGgTAAQgSAAgOgGgAgXgjQgHALAAAYQAAAaAHAKQAIALAPAAQAPAAAIgLQAIgKAAgaQAAgYgIgLQgIgLgPAAQgPAAgIALg");
	this.shape.setTransform(80.5,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA051D").s().p("AgXBOIAAh4IgpAAIAAgjICBAAIgNAjIgjAAIAAB4g");
	this.shape_1.setTransform(65.7,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA051D").s().p("Ag/BOIAAibIBIAAQAcAAALAKQAMAKAAAXQAAAKgFAJQgEAJgKAFIAHABQAFACADAEQAEAFACAGQACAHAAAKQAAANgDAIQgEAJgHAFQgIAFgJACQgKACgNAAgAgZAuIAfAAQAIAAAGgEQAFgFAAgJQAAgJgFgDQgGgEgIAAIgfAAgAgZgPIAaAAQAJAAAGgDQAFgDAAgJQAAgJgFgEQgGgDgJAAIgaAAg");
	this.shape_2.setTransform(51.3,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA051D").s().p("Ag1BDQgOgMAAgZQAAgJACgHQABgIAFgGQAEgEAHgFQAHgFAMgEQAMgEAQgBQANgBAQgBIAAgEQAAgGgEgDQgDgDgFgCQgGgCgHAAIgOgBIgUABIgXAEIAAgfQAOgEAPgCIAbgBQAOAAAMACQAMAEAJAGQAIAGAGAKQAFAJAAANIAABrIgnAAIAAgKQgLAGgNADQgLADgLAAQgWAAgOgNgAADAGQgHAAgIADQgHADgDAEQgEADAAAJQABAUAUABQAHgBAJgDQAJgCAIgGIAAghIgZACg");
	this.shape_3.setTransform(34.1,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA051D").s().p("AggBMQgNgFgJgKQgIgJgEgQQgEgPAAgUQAAgqASgTQASgTAjAAQAkAAARASQARARAAAqIgBAJIgBALIhiAAQABAPAHAHQAIAHAPAAIAOgBIAPgBIAQgDIASgFIAAAgQgSAGgQADQgRACgOAAQgSAAgOgEgAgVgmQgHAJgCARIA9AAQgBgRgGgJQgGgIgRAAQgQAAgGAIg");
	this.shape_4.setTransform(9.2,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA051D").s().p("AhfBOIAAibIApAAIAAB5IAjAAIAAh5IAmAAIAAB5IAjAAIAAh5IAqAAIAACbg");
	this.shape_5.setTransform(-11,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BA051D").s().p("Ag/BOIAAibIAoAAIAAA8IAaAAQAMAAALACQALACAIAFQAJAFAFAIQAFAKAAAQQAAAQgFAJQgFAJgJAFQgIAFgLACQgLABgMAAgAgXAvIAZAAQALAAAFgDQAFgEAAgJQAAgKgFgEQgFgDgKAAIgaAAg");
	this.shape_6.setTransform(-30.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BA051D").s().p("Ag2BOIgRgEIAAgVIAPACQAHABAEgDQAFgCAAgJIAAh4IBwAAIAACbIgmAAIAAh7IglAAIAABYQABASgJAKQgJAJgTAAIgPgBg");
	this.shape_7.setTransform(-47.8,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BA051D").s().p("AggBKQgOgGgJgJQgIgLgEgOQgEgPAAgTQAAgQAEgQQAEgPAIgKQAJgLAOgFQAOgGASAAQATAAAOAGQAOAFAIALQAJAKAEAPQAEAQAAAQQAAATgEAPQgEAOgJALQgIAKgOAFQgOAGgTAAQgSAAgOgGgAgXgjQgHALAAAYQAAAaAHAKQAIALAPAAQAPAAAIgLQAIgKAAgaQAAgYgIgLQgIgLgPAAQgPAAgIALg");
	this.shape_8.setTransform(-63.7,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BA051D").s().p("AggBuQgOgGgIgKQgJgLgEgOQgEgPAAgSIAAgFIAAgBIABgYIACgWQABgMADgLQAEgLAFgKQAIgPANgLQANgJAQgGQANgGARgDQARgDASgBIAAAiIgYACQgMABgMADQgMAEgIAGQgKAHgHAKIgEAJQANgFAQAAQAUgBANAGQAOAFAJALQAJAKADAOQAEAQAAASQAAATgEAOQgDAPgJAKQgJAKgOAGQgNAGgUAAQgSAAgOgGgAgWAAQgIAKAAAaQAAAaAIAKQAHALAPAAQAPAAAIgLQAIgKAAgaQAAgagIgKQgIgLgPAAQgPAAgHALg");
	this.shape_9.setTransform(-80.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,-20,182.4,40);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtBOIAAiLIhQCLIgdAAIAAibIAUAAIAACJIBPiJIAeAAIAACbg");
	this.shape.setTransform(44.3,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAtBQIAAg4QgUAIgPADQgMAEgNAAQgKAAgJgCQgJgDgHgFQgHgGgDgJQgEgIAAgLIAAhEIAUgGIAABMQAAAOAJAGQAJAGARAAQAMAAANgEIAdgJIAAhWIAUAAIAACcg");
	this.shape_1.setTransform(26.5,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBrIgagEIAAgOIATADIARABQAMAAALgCQALgBAIgDQAHgEAEgHQAEgIAAgNIAAgYQgUAIgPAEQgMAEgNgBQgKAAgJgCQgJgCgHgGQgHgGgDgIQgEgJAAgNIAAhlIAUgHIAABvQAAAPAJAHQAJAGARAAQAMAAANgFIAdgJIAAh6IAUAAIAACnQAAAMgEAIQgFAJgJAGQgIAGgMADQgLADgOgBIgYgBg");
	this.shape_2.setTransform(8.9,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag4BOQgHAAgGgCIAAgNIAKACIAKAAIAJgBQADgBACgDQACgCAAgFIABgMIAAh3IBmAAIAACbIgUAAIAAiLIg+AAIAABsQAAAOgIAKQgHAJgPAAIgOgBg");
	this.shape_3.setTransform(-8.9,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBKQgNgFgIgKQgJgKgFgPQgDgPAAgSQAAglARgVQARgWAjAAQAlAAARAWQARAVAAAlQAAASgFAPQgEAPgIAKQgJAKgOAFQgNAGgSAAQgRAAgOgGgAgjgwQgNAQAAAhQAAASAEAMQADAMAHAIQAGAHAJADQAJAEAKAAQALAAAJgEQAIgDAHgHQAHgIADgMQAEgMAAgSQAAgQgEgMQgDgNgHgIQgHgIgIgEQgJgEgLAAQgVAAgOAQg");
	this.shape_4.setTransform(-24.5,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA6BsIAAjHIhyAAIAADHIgVAAIAAjYICbAAIAADYg");
	this.shape_5.setTransform(-43.2,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,-20,110.8,40);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.auto2, null, new cjs.Matrix2D(1.662,0,0,1,-195.6,-141.8)).s().p("AjjDjQhdheAAiFQAAiDBdheQBfhfCEAAQCFAABdBfQBfBeAACDQAACFhfBeQhdBeiFAAQiEAAhfheg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-32.1,64.3,64.3);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA051D").s().p("AALArIgchEIAABEIgQAAIAAhVIAXAAIAcBDIAAhDIAQAAIAABVg");
	this.shape.setTransform(7.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA051D").s().p("AgHArIAAgmIgegvIASAAIATAiIAUgiIASAAIgeAvIAAAmg");
	this.shape_1.setTransform(-0.3,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA051D").s().p("AgeArIAAhVIAeAAQAIAAAGABQAFABADAEQADADACAFQABAEAAAHQAAAFgCAEQgBAFgDADQAEAAACAFQADAEAAAJQAAAHgCAEQgCAFgEADQgDADgGACQgGABgGAAgAgOAdIAQAAQAHAAACgDQAEgDAAgFQgBgGgDgDQgDgDgGAAIgQAAgAgOgGIAOAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgCgGAAIgOAAg");
	this.shape_2.setTransform(-8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiLBQIAAifIEXAAIAACfg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-9.2,28,18.4);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbA5IAAgoIgcAAIgBAAIgXAoIgQAAIAYgqIgCgBQgMgDgEgJQgEgHAAgNQAAgIACgHQACgIAEgFQAEgFAIgCQAHgDALAAIArAAIAABxgAgTglQgGAHAAAMIABALQACAEADADQACABAFACQAFACAHAAIAbAAIAAgxIgbAAQgOAAgFAHg");
	this.shape.setTransform(63.6,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxhLIAPgEIAAALIAVgIQAJgCAHgBQANAAAJAFQAJAEAFAHQAGAIACAKQADALAAANQAAAOgDAJQgCALgGAIQgFAIgJAEQgJAEgNAAIgPgBIgWgGIAAAtIgPAFgAgQhAIgSAHIAABMQAMAEAJACIANABQAKAAAHgEQAGgEAEgGQAEgHABgHIABgTIgBgSQgBgJgEgGQgDgGgHgEQgGgDgLAAQgHAAgJADg");
	this.shape_1.setTransform(52.5,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVBQQgKgEgHgHQgGgIgDgLQgEgKAAgOIAAgCIABgRIADgaQACgNAHgMQAGgLAJgHQAKgIALgEQAIgEAMgCIAZgDIAAANIgUACIgTAGQgIADgHAGQgJAGgGAKQgDAHgDAIIgBACIAAABQAFgFAJgEQAJgEAKAAQAbAAANAQQALAQABAaQAAAOgDALQgEAKgFAIQgHAHgKAEQgJAEgOAAQgMAAgJgEgAgZgJQgKAJAAAaQABANACAJQACAJAFAGQAFAFAHADQAGACAHAAQAIAAAHgCQAGgDAFgFQAEgGADgJQADgJAAgNQAAgNgDgJQgDgHgEgGQgFgGgGgDQgHgDgIAAQgPAAgKAMg");
	this.shape_2.setTransform(39.7,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbA5IAAgoIgcAAIgBAAIgXAoIgQAAIAYgqIgCgBQgMgDgEgJQgEgHAAgNQAAgIACgHQACgIAEgFQAEgFAIgCQAHgDALAAIArAAIAABxgAgTglQgGAHAAAMIABALQACAEADADQACABAFACQAFACAHAAIAbAAIAAgxIgbAAQgOAAgFAHg");
	this.shape_3.setTransform(27.6,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHA5IAAhlIgnAAIAAgMIBdAAIgFAMIgkAAIAABlg");
	this.shape_4.setTransform(17.7,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAgA5IAAg1Ig/AAIAAA1IgPAAIAAhxIAPAAIAAAxIA/AAIAAgxIAPAAIAABxg");
	this.shape_5.setTransform(6.3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWA3QgJgDgHgHQgGgIgDgLQgCgLAAgOQAAgPADgLQAEgLAGgIQAIgHAJgDQAJgEALAAQALAAAJAEQAKADAHAGQAFAHAEALQAEALgBAPIAAACIAAAGIhUAAQAAAKACAIQACAHAFAFQAEAFAHADQAHACAJAAIAWgBIAWgEIAAAKQgMAEgMABIgWACQgMAAgKgEgAgOgrQgHACgEAGQgEAFgCAJQgCAIgBALIBGAAQgBgXgHgKQgIgLgTAAQgIAAgHADg");
	this.shape_6.setTransform(-6.2,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOA3QgKgFgGgHQgGgIgDgLQgDgMAAgMQAAgNADgKQADgLAGgIQAGgHAKgEQAJgFALAAIASABIARAFIAAAKIgPgDIgOgBQgLAAgGADQgIAEgFAFQgFAGgCAKQgCAIAAAKQAAALACAIQACAKAFAGQAFAGAIADQAGADAMAAIAIAAIAHgBIAHgBIAIgCIAAAKQgRAGgUAAQgLAAgJgEg");
	this.shape_7.setTransform(-17.5,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAIBRIAAiQIgeAFIAAgLIAsgKIAACgg");
	this.shape_8.setTransform(-34.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWA3QgKgEgGgIQgHgHgDgLQgCgLAAgNQAAgaAMgRQANgQAZAAQAbAAAMAQQAMARAAAaQAAANgDALQgCALgHAHQgGAIgKAEQgKAEgNAAQgLAAgLgEgAgZgjQgJAMAAAYQAAANACAJQADAIAEAGQAFAGAHACQAHADAGAAQAIAAAGgDQAHgCAFgGQAEgGADgIQADgJAAgNQAAgLgDgJQgDgKgEgGQgFgGgHgCQgGgDgIAAQgPAAgKALg");
	this.shape_9.setTransform(-50.7,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AApBLIAAgnIhSAAIAAAnIgPAAIAAgxIAJAAQAKgQAEgQQAFgSAAgTIAAgfIBJAAIAABkIAMAAIAAAxgAgOgmQAAAQgEARQgDAOgKAQIA+AAIAAhYIgtAAg");
	this.shape_10.setTransform(-63.7,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-15.2,143.4,30.4);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmAyQgJgIAAgRQAAgMAFgJQAFgHAQgFIAJgCIAMgCIANgBIAUAAIAAgGQAAgJgDgFQgCgGgGgDQgFgCgJgBIgQgBIgNABIgQACIAAgKIAVgEIARgBQAKAAAJACQAJADAGAEQAGAEADAGQAEAHAAAJIAABQIgOAAIAAgMQgQAJgMACQgJADgKAAQgPAAgKgJgAAFgCQgKABgHABQgJACgFAGQgFAFAAAKQAAANAHAGQAHAGAOAAQAHAAALgEQAKgDAIgGIAAgmQgRAAgLABg");
	this.shape.setTransform(88.9,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgA5IAAg1Ig/AAIAAA1IgPAAIAAhxIAPAAIAAAxIA/AAIAAgxIAPAAIAABxg");
	this.shape_1.setTransform(76.5,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWA3QgJgDgHgHQgGgIgDgLQgCgLAAgOQAAgPADgLQAEgLAGgIQAIgHAJgDQAJgEALAAQALAAAKAEQAJADAHAGQAFAHAEALQAEALgBAPIAAACIAAAGIhUAAQAAAKACAIQACAHAFAFQAEAFAHADQAHACAJAAIAWgBIAWgEIAAAKQgMAEgMABIgWACQgMAAgKgEgAgOgrQgHACgEAGQgEAFgCAJQgCAIgBALIBGAAQgBgXgHgKQgIgLgTAAQgIAAgHADg");
	this.shape_2.setTransform(64,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkBLIAAgkIhWAAIAAhxIAPAAIAABlIA+AAIAAhlIAOAAIAABmIAKAAIAAAvg");
	this.shape_3.setTransform(51.5,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbA5IAAgoIgcAAIgBAAIgXAoIgQAAIAYgqIgCgBQgMgDgEgJQgEgHAAgNQAAgIACgHQACgIAEgFQAEgFAIgCQAHgDALAAIArAAIAABxgAgTglQgGAHAAAMIABALQACAEADADQACABAFACQAFACAHAAIAbAAIAAgxIgbAAQgOAAgFAHg");
	this.shape_4.setTransform(32.6,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmAyQgJgIAAgRQAAgMAFgJQAGgHAPgFIAJgCIAMgCIANgBIAUAAIAAgGQAAgJgDgFQgDgGgFgDQgGgCgHgBIgRgBIgOABIgPACIAAgKIAVgEIARgBQALAAAIACQAIADAHAEQAGAEAEAGQADAHAAAJIAABQIgOAAIAAgMQgQAJgLACQgLADgJAAQgPAAgKgJgAAEgCQgJABgHABQgJACgFAGQgFAFAAAKQAAANAHAGQAHAGANAAQAIAAALgEQAJgDAJgGIAAgmQgRAAgMABg");
	this.shape_5.setTransform(21.1,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgA5IAAg1Ig/AAIAAA1IgPAAIAAhxIAPAAIAAAxIA/AAIAAgxIAPAAIAABxg");
	this.shape_6.setTransform(8.7,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsA5IAAhxIAPAAIAAAxIAkAAQATAAAKAHQAJAGAAARQAAASgJAIQgKAIgTAAgAgdAtIAiAAQAMAAAHgEQAHgFAAgNQAAgLgHgFQgHgEgMAAIgiAAg");
	this.shape_7.setTransform(-3.2,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoA6IgKgCIAAgKIAHACIAHAAIAHgBIAEgDIACgFIAAgJIAAhXIBKAAIAAByIgOAAIAAhmIgtAAIAABOQAAALgFAHQgHAHgLAAIgJAAg");
	this.shape_8.setTransform(-16.1,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmAyQgJgIAAgRQAAgMAFgJQAGgHAPgFIAJgCIALgCIAOgBIAUAAIAAgGQAAgJgDgFQgDgGgFgDQgGgCgHgBIgRgBIgOABIgPACIAAgKIAVgEIASgBQAKAAAIACQAJADAGAEQAGAEAEAGQADAHAAAJIAABQIgOAAIAAgMQgQAJgMACQgJADgKAAQgQAAgJgJgAAEgCQgJABgHABQgJACgFAGQgFAFAAAKQAAANAHAGQAHAGANAAQAIAAAKgEQAKgDAJgGIAAgmQgRAAgMABg");
	this.shape_9.setTransform(-27.7,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhA5IAAhlIg7BlIgVAAIAAhxIAQAAIAABkIA5hkIAWAAIAABxg");
	this.shape_10.setTransform(-40.2,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAkBLIAAgkIhWAAIAAhxIAPAAIAABlIA+AAIAAhlIAOAAIAABmIAKAAIAAAvg");
	this.shape_11.setTransform(-53,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWA3QgJgDgHgHQgGgIgCgLQgDgLgBgOQAAgPAEgLQAEgLAGgIQAIgHAJgDQAJgEAKAAQAMAAAKAEQAJADAGAGQAHAHADALQADALABAPIAAACIAAAGIhWAAQABAKACAIQACAHAEAFQAEAFAIADQAHACAIAAIAYgBIAUgEIAAAKQgLAEgLABIgXACQgMAAgKgEgAgOgrQgHACgEAGQgEAFgDAJQgCAIgBALIBHAAQAAgXgJgKQgHgLgUAAQgIAAgGADg");
	this.shape_12.setTransform(-66,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAfA5IAAhlIg9AAIAABlIgPAAIAAhxIBbAAIAABxg");
	this.shape_13.setTransform(-78.6,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOA3QgKgFgGgHQgGgIgDgLQgDgMAAgMQAAgNADgKQADgLAGgIQAGgHAKgEQAJgFALAAIASABIARAFIAAAKIgPgDIgOgBQgLAAgGADQgIAEgFAFQgFAGgCAKQgCAIAAAKQAAALACAIQACAKAFAGQAFAGAIADQAGADAMAAIAIAAIAHgBIAHgBIAIgCIAAAKQgRAGgUAAQgLAAgJgEg");
	this.shape_14.setTransform(-90.1,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-15.2,194.9,30.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,30,0,-29.9).s().p("AhlEnQgtgIgugPIAAhYQA8AOAmAFQAjAEApAAQAyAAAYgUQAWgTACgrQAAg0gngVQgSgKgYgEQgYgEghAAIgrAAIAAhcIArAAQAyAAAcgRQAngWAAgwQAAgfgSgPQgTgQgogBQgngBglAHQgkAGgqAOIAAhYQAfgOAvgJQArgJAhAAQBgAAAuAlQAvAmAABQQAAArgUAgQgTAegkAUQAvAQAXAgQAbAlAAA+QAABag3AtQgzArhfAAQguAAgvgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-30.3,38.7,60.7);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,30.4,0,-30.3).s().p("AAZEoIAAh0IkEAAIAAhUID1mHIB4AAIAAF+IBqAAIgjBdIhHAAIAAB0gAhyBXICLAAIAAjig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-29.6,47.3,59.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,27.9,0,-27.8).s().p("AhaElQgtgHgqgOIAAhXQApAMAnAGQAnAHAfAAQAYAAATgGQAWgFAQgPQARgPAKgZQALgZAEgnQggALghAEQgfAFgZAAQhagBgwgxQgvgxAAhYQAAgwAMgnQAMgnAZgdQAZgbAngPQAmgQA1AAQA5AAAqATQApATAbAkQAaAlAMA0QAMA0AABCQAABkgSA/QgTBAgfAiQgeAjgoAMQgoAMgnAAQgnAAgtgIgAhOi0QgUAcAAA5QAAA7AWAXQAVAVAyAAQAYAAAcgFQAdgEAXgGQAAgtgDgmQgCgkgLgbQgLgbgWgOQgVgPgjAAQg1ABgTAcg");
	this.shape.setTransform(-0.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-29.3,42.4,60.3);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,27.9,0,-27.8).s().p("AhaElQgtgHgqgOIAAhXQApAMAnAGQAnAHAfAAQAYAAATgGQAWgFAQgPQARgPAKgZQALgZAEgnQggALghAEQgfAFgZAAQhagBgwgxQgvgxAAhYQAAgwAMgnQAMgnAZgdQAZgbAngPQAmgQA1AAQA5AAAqATQApATAbAkQAaAlAMA0QAMA0AABCQAABkgSA/QgTBAgfAiQgeAjgoAMQgoAMgnAAQgnAAgtgIgAhOi0QgUAcAAA5QAAA7AWAXQAVAVAyAAQAYAAAcgFQAdgEAXgGQAAgtgDgmQgCgkgLgbQgLgbgWgOQgVgPgjAAQg1ABgTAcg");
	this.shape.setTransform(-0.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-29.3,42.4,60.3);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,30.3,0,-30.3).s().p("AibDoQg4hLAAibQAAiYA4hNQA2hLBlAAQBmAAA2BLQA4BNAACYQAACag4BMQg2BHhmAAQhmAAg1hHgAgujFQgTAOgMAcQgVAzAABqQAAA3AFAmQAFAoALAZQAMAaATANQATANAbAAQAbAAAUgNQATgNAMgaQALgZAFgoQAFgmAAg3QAAhqgVgzQgMgcgTgOQgUgOgbAAQgbAAgTAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-30.3,42.5,60.7);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA051D","#CC4759","#BA051D"],[0.549,0.565,1],0,30.4,0,-30.4).s().p("AibDoQg4hLAAibQAAiYA4hNQA2hLBlAAQBmAAA2BLQA4BNAACYQAACag4BMQg2BHhmAAQhmAAg1hHgAgujFQgTAOgMAcQgVAzAABqQAAA3AFAmQAFAoALAZQAMAaATANQATANAbAAQAbAAAUgNQATgNAMgaQALgZAFgoQAFgmAAg3QAAhqgVgzQgMgcgTgOQgUgOgbAAQgbAAgTAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-30.3,42.5,60.7);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA051D").s().p("AhaEmQgtgIgqgOIAAhWQApALAnAHQAnAGAfAAQAYAAATgFQAWgHAQgPQARgOAKgZQALgZAEgnQggALghAEQgfAEgZAAQhaABgwgyQgvgyAAhXQAAgwAMgnQAMgoAZgbQAZgcAngQQAmgPA1AAQA5AAAqATQApATAbAlQAaAkAMA0QAMA0AABCQAABkgSA/QgTA/gfAkQgeAigoAMQgoAMgnAAQgnAAgtgHgAhOi0QgUAcAAA5QAAA7AWAXQAVAVAyAAQAYAAAcgFQAdgEAXgGQAAgtgDglQgCgmgLgaQgLgbgWgOQgVgOgjAAQg1AAgTAcg");
	this.shape.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-53.8,53.7,101.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA051D").s().p("AhaEmQgtgIgqgOIAAhWQApALAnAHQAnAGAfAAQAYAAATgFQAWgHAQgPQARgOAKgZQALgZAEgnQggALghAEQgfAEgZAAQhaABgwgyQgvgyAAhXQAAgwAMgnQAMgoAZgbQAZgcAngQQAmgPA1AAQA5AAAqATQApATAbAlQAaAkAMA0QAMA0AABCQAABkgSA/QgTA/gfAkQgeAigoAMQgoAMgnAAQgnAAgtgHgAhOi0QgUAcAAA5QAAA7AWAXQAVAVAyAAQAYAAAcgFQAdgEAXgGQAAgtgDglQgCgmgLgaQgLgbgWgOQgVgOgjAAQg1AAgTAcg");
	this.shape.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-53.8,53.7,101.2);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA051D","#CC4759","#BA051D"],[0.549,0.565,1],0,29,0,-29).s().p("AAZEoIAAh0IkEAAIAAhUID1mHIB4AAIAAF+IBqAAIgjBdIhHAAIAAB0gAhyBXICLAAIAAjig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-29.6,47.3,59.3);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA051D","#CC4759","#BA051D"],[0.549,0.565,1],0,30,0,-29.9).s().p("AhlEnQgtgIgugPIAAhYQA8AOAmAFQAjAEApAAQAyAAAYgUQAWgTACgrQAAg0gngVQgSgKgYgEQgYgEghAAIgrAAIAAhcIArAAQAyAAAcgRQAngWAAgwQAAgfgSgPQgTgQgogBQgngBglAHQgkAGgqAOIAAhYQAfgOAvgJQArgJAhAAQBgAAAuAlQAvAmAABQQAAArgUAgQgTAegkAUQAvAQAXAgQAbAlAAA+QAABag3AtQgzArhfAAQguAAgvgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-30.3,38.7,60.7);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA071F").s().p("AgeBMQgOgFgIgKQgJgKgDgPQgEgPAAgUQAAgUAEgQQAGgPAJgKQAJgKANgFQANgEAPAAQAQAAANAEQAMAFAJAJQAIAJAFAOQAFAPAAAUIAAAFIAAAIIh0AAQAAAOADAKQADAKAFAHQAGAHAKADQAJAEANAAQARAAAOgCQAOgCAPgEIAAAOQgQAFgPACQgQACgPAAQgRAAgNgEgAgUg8QgJAEgGAHQgGAIgDALQgDAMAAAPIBgAAQgBgfgKgPQgLgOgaAAQgMAAgJADg");
	this.shape.setTransform(80.9,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA071F").s().p("AgeBMQgOgFgIgKQgJgKgDgPQgEgPAAgUQAAgUAEgQQAFgPAKgKQAJgKANgFQANgEAPAAQAQAAANAEQAMAFAJAJQAJAJAEAOQAFAPAAAUIAAAFIAAAIIh0AAQAAAOADAKQADAKAFAHQAGAHAKADQAKAEAMAAQARAAAOgCQAOgCAPgEIAAAOQgPAFgQACQgRACgOAAQgRAAgNgEgAgUg8QgJAEgGAHQgGAIgDALQgCAMgBAPIBgAAQAAgfgLgPQgLgOgaAAQgLAAgKADg");
	this.shape_1.setTransform(64.1,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA071F").s().p("AAsBOIAAhJIhXAAIAABJIgUAAIAAibIAUAAIAABDIBXAAIAAhDIAUAAIAACbg");
	this.shape_2.setTransform(47,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA071F").s().p("AgKBOIAAiKIg0AAIAAgRIB+AAIgHARIgwAAIAACKg");
	this.shape_3.setTransform(31.8,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA071F").s().p("AhDhmIAVgGIAAAPQAOgGAOgFQANgDAJAAQASgBANAGQALAGAIAKQAHAKADAPQAEAPAAARQAAATgEAMQgDAQgHALQgIALgLAFQgNAGgSAAQgHAAgNgCIgegIIAAA+IgVAGgAgVhYQgMADgNAHIAABoQAQAGAMACQAKACAIAAQAPAAAIgGQAJgFAFgIQAFgJACgLQACgMAAgOQAAgOgCgLQgCgMgFgIQgFgIgIgFQgKgFgNAAQgLAAgLAEg");
	this.shape_4.setTransform(16.8,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA071F").s().p("AgeBKQgOgFgJgKQgIgKgEgPQgFgPAAgSQAAglARgVQARgWAkAAQAlAAAQAWQARAVAAAlQAAASgEAPQgEAPgJAKQgIAKgNAFQgOAGgSAAQgRAAgNgGgAgjgwQgNAQAAAhQAAASADAMQAEAMAGAIQAHAHAJADQAJAEAKAAQALAAAJgEQAJgDAGgHQAHgIADgMQAEgMAAgSQAAgQgEgMQgDgNgHgIQgGgIgJgEQgJgEgLAAQgVAAgOAQg");
	this.shape_5.setTransform(-0.7,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BA071F").s().p("AgJCNIAAhCIgdAIQgMACgKAAQgRAAgMgHQgNgFgHgMQgHgKgEgPQgDgQAAgSQAAgPADgOQAEgOAHgKQAHgLANgFQAMgGARAAQAOAAAMAEQALADAOAIIAAhNIATgFIAABSQAOgIAMgDQALgEAOAAQARAAANAGQAMAFAHALQAIAKADAOQADAOAAAPQAAARgDAOQgDAPgIAMQgHALgMAHQgNAHgRAAQgJAAgNgCIgdgIIAABCgAAig2IgYAJIAABpIAPAFIAMADIAKABIAKABQAOAAAJgFQAIgHAFgJQAGgJABgMQACgNAAgNQAAgMgCgLQgBgMgGgHQgEgJgJgEQgJgEgOgBQgNAAgKAEgAhPg1QgIAEgGAJQgEAHgCAMQgCALAAAMQAAANACANQACAMAEAJQAGAJAJAHQAIAFAOAAIAKgBIALgBIALgDIAPgFIAAhpIgYgJQgLgEgMAAQgOABgJAEg");
	this.shape_6.setTransform(-23.1,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BA071F").s().p("AA3BOIAAiJIgtCDIgRAAIgviDIAACJIgTAAIAAibIAfAAIAqCBIAqiBIAgAAIAACbg");
	this.shape_7.setTransform(-46.5,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BA071F").s().p("AgfBKQgNgFgIgKQgKgKgEgPQgDgPAAgSQgBglASgVQAQgWAkAAQAlAAARAWQAQAVAAAlQABASgFAPQgEAPgIAKQgJAKgOAFQgNAGgSAAQgRAAgOgGgAgjgwQgNAQAAAhQAAASADAMQAEAMAHAIQAGAHAJADQAJAEAKAAQALAAAJgEQAJgDAGgHQAGgIAEgMQAEgMAAgSQAAgQgEgMQgEgNgGgIQgGgIgJgEQgJgEgLAAQgWAAgNAQg");
	this.shape_8.setTransform(-64.3,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BA071F").s().p("AAoBOIhUhKIAABKIgUAAIAAibIAUAAIAABGIBShGIAaAAIhZBMIBaBPg");
	this.shape_9.setTransform(-80.3,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,-20,182.8,40);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA071F").s().p("AAtBOIAAiLIhQCLIgdAAIAAibIAUAAIAACJIBPiJIAeAAIAACbg");
	this.shape.setTransform(57.8,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA071F").s().p("AgeBMQgOgFgIgKQgJgKgDgPQgEgPAAgUQAAgUAEgQQAFgPAKgKQAJgKANgFQANgEAPAAQAQAAANAEQAMAFAJAJQAJAJAEAOQAFAPAAAUIAAAFIAAAIIh0AAQAAAOADAKQADAKAFAHQAGAHAKADQAKAEAMAAQARAAAOgCQAOgCAPgEIAAAOQgPAFgQACQgRACgOAAQgRAAgNgEgAgUg8QgJAEgGAHQgGAIgDALQgCAMgBAPIBgAAQAAgfgLgPQgLgOgaAAQgLAAgKADg");
	this.shape_1.setTransform(32.2,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA071F").s().p("AheBOIAAibIAVAAIAACKIBAAAIAAiKIATAAIAACKIBAAAIAAiKIAVAAIAACbg");
	this.shape_2.setTransform(11.9,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA071F").s().p("Ag9BOIAAibIAVAAIAABDIAyAAQAZAAAOAKQANAIAAAYQAAAYgNALQgOALgZAAgAgoA+IAvAAQAQAAAJgGQAKgHAAgRQAAgQgKgGQgJgGgQAAIgvAAg");
	this.shape_3.setTransform(-7.4,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA071F").s().p("Ag4BOQgHAAgGgCIAAgNIAKACIAKAAIAJgBQADgBACgDQACgCAAgFIABgMIAAh3IBmAAIAACbIgUAAIAAiLIg+AAIAABsQAAAOgIAKQgHAJgPAAIgOgBg");
	this.shape_4.setTransform(-25.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA071F").s().p("AgeBKQgOgFgJgKQgIgKgEgPQgFgPAAgSQAAglARgVQARgWAkAAQAlAAAQAWQARAVAAAlQAAASgEAPQgEAPgJAKQgIAKgNAFQgOAGgSAAQgRAAgNgGgAgjgwQgNAQAAAhQAAASADAMQAEAMAGAIQAHAHAJADQAJAEAKAAQALAAAJgEQAJgDAGgHQAHgIADgMQAEgMAAgSQAAgQgEgMQgDgNgHgIQgGgIgJgEQgJgEgLAAQgVAAgOAQg");
	this.shape_5.setTransform(-40.7,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BA071F").s().p("AhBBsIAAjYIB0AAIAAARIhfAAIAABSIAsAAQAjAAAPAOQAQAPAAAeQAAAPgFALQgEALgJAIQgJAGgNAEQgMAEgOgBgAgsBcIAsAAQAYAAAKgMQAKgLAAgTQAAgZgKgJQgKgKgYAAIgsAAg");
	this.shape_6.setTransform(-57.5,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.8,-20,137.7,40);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBMQgNgFgIgKQgIgKgFgPQgDgPAAgUQAAgUAEgQQAGgPAJgKQAJgKANgFQANgEAPAAQAQAAANAEQAMAFAJAJQAIAJAFAOQAFAPAAAUIAAAFIgBAIIh0AAQABAOADAKQACAKAGAHQAGAHAKADQAJAEANAAQASAAANgCQAOgCAQgEIAAAOQgRAFgQACQgPACgPAAQgSAAgNgEgAgUg8QgJAEgGAHQgGAIgCALQgEAMgBAPIBhAAQAAgfgLgPQgLgOgaAAQgMAAgJADg");
	this.shape.setTransform(82.4,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUBqIgcgEIAAgPIAKACIAKABIAKABIAJABIAXgBQALgBAHgEQAHgEAEgIQAEgHAAgNIAAgXQgQAHgNADQgMADgJAAQgSAAgLgGQgMgFgJgKQgHgKgEgNQgCgOAAgSQAAglAOgTQAOgTAkAAQAUAAAdAPIAAgOIAVAAIAACnQAAAMgGAIQgEAJgIAGQgJAGgMADQgMADgNAAIgYgCgAgWhXQgJAEgFAHQgFAIgCALQgBALgBAOQABANABAMQACAJAFAIQAFAJAJAEQAIAFANAAQAJAAANgDQAMgDAOgGIAAheIgYgJQgMgEgMAAQgNAAgIAEg");
	this.shape_1.setTransform(65.1,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BFQgNgMAAgXQAAgQAHgMQAIgLAVgGIAMgDIAQgDIATgBIAbAAIAAgIQAAgNgDgHQgFgHgHgEQgIgEgLgBIgWgBIgTABIgVADIAAgOQAOgDAOgCIAZgBQAOAAALADQAMADAIAFQAKAGAEAJQAFAIAAAMIAABvIgUAAIAAgQQgVAMgQADQgOADgNAAQgWAAgMgLgAAHgDIgYADQgMADgHAHQgHAIAAAOQAAARAKAIQAJAIATAAQALAAANgEQAOgFAMgIIAAg1QgXAAgPACg");
	this.shape_2.setTransform(48.2,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARBqQgLgBgGgEQgGgDgFgHQgEgGgCgIQgCgIAAgKIAAhdIgmAAIAAgRIAmAAIAAgwIATgGIAAA2IA0AAIAAARIg0AAIAABeIABAOQABAGADAEQADADAGACQAGACAJAAIAOgCIAPgDIAAAPIgVAEIgOABIgGAAg");
	this.shape_3.setTransform(34,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBQIAAiYIAVgHIAAAQQAPgHASgEQAVgEAUACIAAARQgNgCgQACQgPABgNAEIgRAGIAACAg");
	this.shape_4.setTransform(22,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBKQgOgFgJgKQgIgKgEgPQgEgPgBgSQAAglARgVQASgWAjAAQAlAAAQAWQASAVgBAlQABASgFAPQgEAPgJAKQgIAKgNAFQgOAGgSAAQgRAAgNgGgAgjgwQgNAQAAAhQAAASADAMQAEAMAGAIQAHAHAJADQAJAEAKAAQALAAAJgEQAIgDAHgHQAGgIAEgMQAEgMAAgSQAAgQgEgMQgEgNgGgIQgHgIgIgEQgJgEgLAAQgWAAgNAQg");
	this.shape_5.setTransform(6.6,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDhmIAVgGIAAAPQAOgGANgFQAOgDAJAAQASgBANAGQALAGAIAKQAIAKADAPQADAPAAARQAAATgDAMQgDAQgIALQgIALgLAFQgNAGgSAAQgHAAgNgCIgegIIAAA+IgVAGgAgWhYQgMADgMAHIAABoQAQAGALACQALACAJAAQANAAAJgGQAJgFAGgIQAEgJACgLQACgMAAgOQAAgOgCgLQgCgMgEgIQgFgIgKgFQgIgFgOAAQgLAAgMAEg");
	this.shape_6.setTransform(-10.2,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBBuIgigCQgRgDgQgEIAAgPIAgAGQARACASAAQAbAAANgLQANgLAAgYQAAgJgDgHQgEgGgIgFQgHgFgLgEIgWgHQgQgEgMgDQgNgFgKgHQgIgHgFgKQgGgKAAgOQAAgZATgPQASgOAlAAQAOAAAQACQAQADAOAFIAAAOIgcgGQgOgCgPAAQgKAAgJABQgLACgHAEQgJAFgFAHQgEAHAAAMQAAALADAHQADAHAHAFQAIAFALAEIAaAIQAPAEANAEQANAEAIAGQAIAHAFAJQAFAJAAANQgBAfgUAQQgUAPghAAIgBAAg");
	this.shape_7.setTransform(-27.9,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABFBsIgVg6IhgAAIgUA6IgUAAIBLjYIAbAAIBLDYgAgqAhIBVAAIgrh8g");
	this.shape_8.setTransform(-55,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBsIAAjYIATAAIAADYg");
	this.shape_9.setTransform(-68.4,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAzBsIhrhnIAABnIgUAAIAAjYIAUAAIAABkIBqhkIAaAAIhxBrIByBtg");
	this.shape_10.setTransform(-80.8,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-20,185.9,40);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.auto, null, new cjs.Matrix2D(1,0,0,1,-384,-145)).s().p("AjZDaQhbhaAAiAQAAh/BbhaQBahbB/AAQCAAABaBbQBbBaAAB/QAACAhbBaQhaBbiAAAQh/AAhahbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595959").s().p("AjTDUQhXhZAAh7QAAh6BXhZQBZhXB6AAQB7AABZBXQBXBZAAB6QAAB7hXBZQhZBXh7AAQh6AAhZhXg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-31,62,62);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shad();
	this.instance.setTransform(-283,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-35,567,70);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clouds();
	this.instance.setTransform(-212,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-146,424,293);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A4A4A4","rgba(164,164,164,0)"],[0.482,1],-16,128.3,-16,-104.3).s().p("Egh0AS2MBBxglZIB3gZMg/QAl5g");
	this.shape.setTransform(16,-12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.5,-133.3,433,242.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjB8Ii7iDIB0AAQALAAAGgHQAHgHAAgKQAAgLgHgHQgHgHgKAAIiUAAIAABwQAAASgMALQgOANgcAAIjVAAQgXAAgOgMQgNgLAAgTIAAhwQAAgQAQgNQASgMAXAAIG5AAQAlAAAPANQANALAAAaIAAAeQAAAQgLALQgPAOgWAAIgcAAICJBkgAnvgxQgFAFAAAHIAABKQAAAHAFAGQAHAGAKAAICCAAQAKAAAGgGQAHgGAAgHIAAhKQgBgHgFgGQgHgGgKAAIiCAAQgKAAgHAHgAIiAyIiZAAIgdAwIhJAAICAjHIBnAAIB9DHIhIAAgAGkAIIBkAAIgxhMgAPhBiIAAjDIEaAAIggApIipABIgBAiICkAAIAAAnIikAAIAAAmICqAAIAgAqgALOBiQgbAAgSgPQgOgMAAgPIAAhwQAAgNAOgNQARgPAcAAID6AAIAAApIjUAAQgKAAgJAGQgHAGAAAHIAABKQAAAIAGAFQAGAGALAAICIAAQAHAAAFgGQAEgGAAgHIAAgWIhIAAIgWgkICdAAIAABKQAAAVgQALQgQANgfAAgACPBiIAAiaIhvAAIgggpIFvAAIgfApIhwAAIAACagAuYBiIAAjDIEFAAQAfAAARALQAQALAAATIAAAxQAAARgQAMQgRANgfAAIh+AAIghgnICDAAQANAAAHgHQAIgHAAgNQAAgKgIgHQgIgIgMAAIiZAAIAACagAz6BiIAagtIDAAAQATAAABgRQAAgNgPgEIiYgkQg0gNAAgmQAAgXAQgPQATgRAjAAIDxAAIgbAqIi+AAQgIAAgEAEQgFAEAAAFQAAALAQAEICuArQAsAKAAApQAAAYgQARQgPAQgTAAg");
	this.shape.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.7,-10.7,219.4,21.4);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu2ASvMAAAgldMBdtAAAMAAAAldg");
	this.shape.setTransform(0,166);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.logo_bg();
	this.instance.setTransform(106,0,1,1,0,0,180);

	this.instance_1 = new lib.logo_bg();
	this.instance_1.setTransform(-106,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,0,600,286);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E8082").s().p("AgqBjQgRgFgMgOQgKgMgGgTQgFgTAAgdQAAgbAGgUQAGgWALgMQANgNASgGQARgGAXAAQAvAAAWAYQAWAXAAA3IAAAVIiRAAQACARADAKQABAJAIAIQAEAFANAFQAMAEANAAQAPABAXgDQAYgEATgEIAAAZQgSAHgZAFQgVADgVAAQgYAAgSgHgAgWhIQgKADgGAJQgHAHgDAOIgEAdIBqAAQAAgNgCgQQgDgOgGgHQgHgJgJgDQgJgEgQABQgPgBgJAEg");
	this.shape.setTransform(197.1,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E8082").s().p("AgsBnIgVgDIgPgGIAAgZQAWAFAPABQAUACAQAAQAZAAAOgGQAMgGAAgRQAAgKgCgFIgHgJQgGgFgKgCQgIgDgRgCQgagGgIgEQgOgCgLgIQgJgHgFgKQgFgJAAgOQAAgPAHgMQAHgLAKgHQALgHAOgCQAQgDAPAAQAnABAnAKIAAAbQgXgEgQgCQgRgCgVAAQgVAAgKAGQgJAFAAANQAAAJACAFIAIAJQADADAMAFIAWAFQApAHAUANQAUAOAAAbQAAAhgYAOQgXANgqAAg");
	this.shape_1.setTransform(175.8,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E8082").s().p("AgTCPIAAjNIAnAAIAADNgAgThcIAAgyIAnAAIAAAyg");
	this.shape_2.setTransform(161,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E8082").s().p("AhABpIAAjFIAogMIAAAQQAagLARgBQAXgEAXACIAAAeQgzgBgmAOIAACkg");
	this.shape_3.setTransform(148.9,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E8082").s().p("AhbiDIApgMIAAAPQAMgGAQgEQALgDAQgBQAYAAARAHQAQAIALANQAJAMAFAUQAFAVAAAWQAAAYgFATQgFAWgJANQgLAOgQAIQgSAIgXAAQgZAAgegLIAABKIgpAMgAgYhtQgMADgOAHIAACCQAQAGANABIAXACQAOAAAKgHQAJgFAGgMQAFgKADgOQACgTAAgMQAAgMgCgRQgCgNgGgLQgGgKgIgEQgKgGgPAAQgPAAgLADg");
	this.shape_4.setTransform(128.9,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E8082").s().p("AhABpIAAjFIAngMIAAAQQAagKASgCQAYgEAWACIAAAeQgygBgoAOIAACkg");
	this.shape_5.setTransform(109.6,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E8082").s().p("AgvBoQgOgEgIgIQgJgHgFgMQgFgKgBgSIAAiLIAogMIAACZQAAARAJAGQAJAHASAAQAOAAAQgFIAhgKIAAikIAnAAIAADOIgnAAIAAgPQgWAIgRAFQgPAFgRAAQgPAAgLgDg");
	this.shape_6.setTransform(88.9,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E8082").s().p("AguCOQgVgDgZgIIAAgaIAtAHQASACAcAAQAeAAAPgMQAPgNAAgcQgBgMgEgHQgDgIgIgGQgKgGgLgDIgcgIQgWgGgRgFQgQgFgMgKQgLgJgHgOQgIgQAAgQQABgkAZgTQAWgUA0AAQAVAAAUADQATADAYAHIAAAaQgagFgPgBQgSgCgVAAQgLAAgLABQgLACgJAEQgJAFgGAIQgEAJAAAOQAAAOADAIQADAGAJAIQAGAEAQAGIAdAJQAXAGAQAFQARAFAKAIQALAJAHANQAFALAAATQABArgcAVQgZAWgwAAQgUgBgZgDg");
	this.shape_7.setTransform(65.6,-3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E8082").s().p("AgqBjQgTgJgLgMQgLgMgGgVQgFgTAAgZQAAgXAFgUQAFgUAMgOQANgPARgGQARgIAZAAQAaAAASAIQAPAGAOAPQALANAGAVQAFAXAAAUQAAAXgFAVQgGAVgLAMQgLAMgSAJQgTAHgZAAQgXAAgTgHgAgpg6QgNAUAAAnQgBAUAEAPQAEAPAGAJQAHAJALADQAMAFALAAQANAAAKgFQAKgDAHgJQAIgKADgOQAEgOAAgVQAAgngPgUQgPgRgZAAQgaAAgPARg");
	this.shape_8.setTransform(31.6,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E8082").s().p("AAUCMQgQgBgHgFQgLgFgGgJQgGgIgDgMQgDgLAAgNIAAh0IgrAAIAAgfIArAAIAAg4IAmgMIAABEIA/AAIAAAfIg/AAIAAB1QAAAQAFAJQAGAJASAAIAUgCIAVgFIAAAZQgOAFgPADQgOADgKAAIgDAAg");
	this.shape_9.setTransform(12.2,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E8082").s().p("AhABpIAAjFIAogMIAAAQQAagKASgCQAXgEAWACIAAAeQgzgBgmAOIAACkg");
	this.shape_10.setTransform(-14.7,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E8082").s().p("AgqBjQgRgFgLgOQgLgLgGgUQgFgUAAgcQAAgdAGgSQAFgVAMgNQANgNASgGQARgGAXAAQAuAAAXAYQAWAXAAA3IgBAVIiQAAQACASACAJQACAJAIAIQAGAHALADQALAEANAAQAQABAYgDQAVgDAVgFIAAAZQgUAIgWAEQgWADgVAAQgZAAgRgHgAgXhIQgIADgHAJQgGAHgFAOQgCAMgBARIBqAAQAAgUgCgJQgDgOgGgHQgHgJgJgDQgKgEgPABQgOgBgLAEg");
	this.shape_11.setTransform(-34.9,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E8082").s().p("AArBnIgriwIgpCwIg5AAIg8jNIAmAAIAyCzIAtizIA0AAIAsCzIAxizIAnAAIg8DNg");
	this.shape_12.setTransform(-62.2,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E8082").s().p("AgqBjQgTgIgLgNQgKgMgHgVQgFgWAAgWQAAgUAFgXQAGgUALgOQAOgPAQgGQASgIAYAAQAbAAARAIQARAGAMAPQALAMAGAWQAFAZAAASQAAAVgFAXQgGAVgLAMQgKALgTAKQgTAHgZAAQgXAAgTgHgAgog6QgOAUAAAnQAAAVADAOQAEAPAHAJQAIAJAJADQALAFAMAAQAOAAAJgFQALgDAHgJQAHgJAEgPQADgMAAgXQAAgogOgTQgOgRgbAAQgbAAgNARg");
	this.shape_13.setTransform(-89.7,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E8082").s().p("AhmCPIAAkdIByAAQAwAAAWAWQAVAYAAAxQAAAvgVAbQgWAagwAAIhJAAIAABagAg9AWIBGAAQANAAALgFQAKgFAHgKQAHgHACgNQAEgQAAgNQAAgigNgOQgLgQgeAAIhGAAg");
	this.shape_14.setTransform(-112.6,-3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E8082").s().p("AgqBjQgSgFgLgOQgLgMgFgTQgFgSAAgeQAAgbAGgUQAFgVAMgNQAMgNASgGQATgGAVAAQAvAAAWAYQAXAYAAA2IgBAVIiQAAQACAUACAHQADALAGAGQAGAFALAFQALAEAOAAQAQABAXgDQAXgEAUgEIAAAZQgTAHgYAFQgVADgVAAQgZAAgRgHgAgXhIQgJADgHAJQgHAKgCALQgCAIgCAVIBqAAQgBgVgCgIQgDgOgFgHQgHgJgJgDQgKgEgQABQgOgBgKAEg");
	this.shape_15.setTransform(-147.6,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E8082").s().p("AAzCUIAAiSQAAgQgKgIQgJgIgSAAQgLAAgQAFQgSAFgSAHIAAChIgoAAIAAkbIAogMIAABrQAQgIAXgHQATgFASAAQAgAAAPATQAQARAAAaIAACSg");
	this.shape_16.setTransform(-170.3,-3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E8082").s().p("AgUCPIAAj+IhjAAIAAgfIDvAAIgNAfIhaAAIAAD+g");
	this.shape_17.setTransform(-194.3,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.3,-18.7,412.8,37.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA051D").s().p("AnvJaQjtgxi4hcQi5hchih3Qhjh4AAiCQAAiCBjh2QBih3C5hdQC4hcDtgyQDsgwEDgBQEEABDsAwQDtAyC4BcQC4BdBjB3QBjB2AACCQAACChjB4QhjB3i4BcQi4BcjtAxQjsAykEAAQkDAAjsgygAspmRQifBPhXBmQhaBqAAByQAAB0BaBpQBXBmCfBPQFQCoHZAAQHaAAFQioQCfhPBXhmQBahpAAh0QAAhyhahqQhXhmifhPQlQinnagBQnZABlQCng");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA051D").s().p("AKqFEQgIAAgDgJIiEmZQgCgLgMAAQgFAAgEAEQgDAEAAADIiDGZQgEAJgIAAIiZAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgEABgCIDEpIQADgHAAgDQAAgIgGgGQgGgFgJAAIgOAAIAAgZIDwAAQALAAAAAEIDWJ6QAAAEgCACQAAAAAAABQAAAAgBAAQgBAAAAAAQgBABgBAAgAhVFEQgGAAAAgHIAApSQAAgIgGgGQgGgGgJAAIgPAAIAAgZIDFAAQAGAAAAAGIAAJ5QAAAHgGAAgAmbFEQgKAAgIgMIizj8QgHgKgJABQgGAAgEAEQgEAEAAAHIAAD7QAAAHgHAAIiXAAQgHAAAAgHIAApSQAAgJgGgFQgGgGgJAAIgQAAIAAgZIDDAAQAHAAAAAGIAADUQAAAGAEAEQAEAEAGAAQAJAAAIgKICUjTQAIgMALABICqAAQAFAAAAACQABAFgBACIi+EZIgBABQgEAHAAAGQAAAGAFAGQDjE/AAABQADADgBAEQgBADgEAAg");
	this.shape_1.setTransform(0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.9,-65.2,259.9,130.4);


(lib.cars_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cars();
	this.instance.setTransform(-188,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-55,376,111);


(lib.car2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car2();
	this.instance.setTransform(-252,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-99,504,199);


(lib.car1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car1();
	this.instance.setTransform(-252,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-106,505,213);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.bgPattern = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D9D9D9","#FFFFFF"],[0,0.443],0,303,0,-302.9).s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t2 = new lib.Symbol36();
	this.t2.setTransform(58.8,0);

	this.t1 = new lib.Symbol35();
	this.t1.setTransform(-94.6,0);

	this.t3 = new lib.Symbol37();
	this.t3.setTransform(0.1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t3},{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,-20,300,70);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t3 = new lib.Symbol12();
	this.t3.setTransform(0.1,32);

	this.t2 = new lib.Symbol11();
	this.t2.setTransform(0.1,0);

	this.t1 = new lib.Symbol10();
	this.t1.setTransform(0.1,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-52,185.9,104);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t1 = new lib.Symbol40();

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 2
	this.mc = new lib.Symbol39();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-36.1,178.2,72.3);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol34();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-32.1,64.3,64.3);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.w2 = new lib.Symbol33();
	this.w2.setTransform(-171.2,25.3,0.254,0.824);

	this.w1 = new lib.Symbol33();
	this.w1.setTransform(-68.3,37.8,0.602,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.w1},{t:this.w2}]}).wait(1));

	// Layer 1
	this.instance = new lib.auto2();
	this.instance.setTransform(-186,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186,-104,372,208);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol24();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-30.3,42.5,60.7);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol25();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-29.3,42.4,60.3);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol26();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-29.3,42.4,60.3);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol27();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-29.6,47.3,59.3);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol28();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-30.3,38.7,60.7);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.byn = new lib.Symbol31();
	this.byn.setTransform(108,-9);

	this.timeline.addTween(cjs.Tween.get(this.byn).wait(1));

	// Layer 1
	this.c5 = new lib.Symbol18();
	this.c5.setTransform(95.9,3);

	this.c4 = new lib.Symbol17();
	this.c4.setTransform(50.4,3);

	this.c3 = new lib.Symbol16();
	this.c3.setTransform(7.4,3.2);

	this.c2 = new lib.Symbol15();
	this.c2.setTransform(-52.2,2.8);

	this.c1 = new lib.Symbol14();
	this.c1.setTransform(-97.7,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5}]}).wait(1));

	// Layer 1 copy
	this.d5 = new lib.Symbol23();
	this.d5.setTransform(100.1,6.6,1,0.88,0,8.4,0);

	this.d4 = new lib.Symbol22();
	this.d4.setTransform(54.6,6.6,1,0.88,0,8.4,0);

	this.d3 = new lib.Symbol21();
	this.d3.setTransform(11.6,6.6,1,0.88,0,8.4,0);

	this.d2 = new lib.Symbol20();
	this.d2.setTransform(-48,6.6,1,0.88,0,8.4,0);

	this.d1 = new lib.Symbol19();
	this.d1.setTransform(-93.5,6.6,1,0.88,0,8.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d5}]}).wait(1));

	// Layer 2 copy
	this.t2 = new lib.Symbol30();
	this.t2.setTransform(0.1,84.1);

	this.t1 = new lib.Symbol29();
	this.t1.setTransform(0.1,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.1,-50.8,242.3,150.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.w1 = new lib.Symbol9();
	this.w1.setTransform(-137,54);

	this.w2 = new lib.Symbol9();
	this.w2.setTransform(147,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.w2},{t:this.w1}]}).wait(1));

	// Layer 1
	this.instance = new lib.auto();
	this.instance.setTransform(-237,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-91,474,182);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l3 = new lib.Symbol2();
	this.l3.setTransform(0,27.1,0.34,0.34);

	this.l2 = new lib.Symbol1();
	this.l2.setTransform(-0.4,-11.3,0.34,0.34,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l2},{t:this.l3}]}).wait(1));

	// Layer 3
	this.l1 = new lib.Symbol3();
	this.l1.setTransform(0,-49);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-49,600,286);


(lib.clouds_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol6();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-146,424,293);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.mc1 = new lib.Symbol7();
	this.mc1.setTransform(-46,0);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(-50,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333,-91,567,199);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		
		var count = 1;
		var repeat = 200;
		
		var dlit = 0.35;
		var time2 = 7.5;
		var time3 = time2+4.0;
		var time4 = time3+3.0;
		
		
		var tl = new TimelineMax();
		tl.to(r.blk, 0.5, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .staggerFrom([r.logo.l1, r.logo.l2, r.logo.l3], 0.9, {y:"+=150", alpha:0, ease:Expo.easeOut}, 0.2, 0.0)
		  
		  .from(r.c1, 1.9, {x:"+=200", ease:Expo.easeOut}, 0.0)
		  .from(r.c2, 1.9, {x:"+=170", ease:Expo.easeOut}, 0.0)
		  .from(r.c3, 1.9, {x:"+=100", ease:Expo.easeOut}, 0.0)
		  .from(r.l1, 1.9, {x:"+=130", scaleX:0.6, ease:Expo.easeOut}, 0.0)
		  
		  .from(r.cl1, 1.9, {x:"+=100", ease:Expo.easeOut}, 0.0)
		  .from(r.cl2, 1.9, {x:"+=60", ease:Expo.easeOut}, 0.0)
		  .from(r.cl3, 1.9, {x:"+=60", ease:Expo.easeOut}, 0.0)
		  
		  .to(r.cl1.mc, 15, {x:"-=180", ease:Power0.easeNone}, 0.0)
		  .to(r.cl2.mc, 15, {x:"-=120", ease:Power0.easeNone}, 0.0)
		  .to(r.cl3.mc, 15, {x:"-=60", ease:Power0.easeNone}, 0.0)
		
		  .from(r.logo_s, 1.9, {x:"+=400", ease:Expo.easeOut}, 0.2)
		  
		  .from(r.car, 3.9, {x:"+=600", ease:Expo.easeOut}, 0.5)
		  .from(r.car.mc1.w1, 3.9, {rotation:"+=750", ease:Expo.easeOut}, 0.5)
		  .from(r.car.mc1.w2, 3.9, {rotation:"+=750", ease:Expo.easeOut}, 0.5)
		  
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3], 0.9, {x:0, y:0, scaleX:0.0, scaleY:0.0, ease:Expo.easeOut}, 0.1, 1.5)
		  
		  .staggerTo([r.t1.t1, r.t1.t2, r.t1.t3], 0.9, {x:0, y:0, scaleX:0.0, scaleY:0.0, ease:Expo.easeIn}, 0.1, 3.5)
		  .staggerFrom([r.t2.c1, r.t2.c2, r.t2.c3, r.t2.c4, r.t2.c5], 0.7, {y:"-=50", alpha:0, ease:Expo.easeOut}, 0.1, 4.4)
		  .staggerFrom([r.t2.d1.mc, r.t2.d2.mc, r.t2.d3.mc, r.t2.d4.mc, r.t2.d5.mc], 0.7, {y:"-=80", alpha:0, ease:Expo.easeOut}, 0.1, 4.4)
		  .staggerFrom([r.t2.t1, r.t2.t2], 0.7, {y:"+=80", alpha:0, ease:Expo.easeOut}, 0.1, 4.4)
		  .from(r.t2.byn,  0.7, {x:"+=300", ease:Expo.easeOut}, 4.9)
		  
		  //3
		  .staggerTo([r.c1, r.c2, r.c3, r.car, r.l1], 1.9, {x:"-=500", ease:Expo.easeInOut}, 0.00, time2+0.0)
		  .staggerTo([r.t2.c1, r.t2.c2, r.t2.c3, r.t2.c4, r.t2.c5, r.t2.byn], 1.9, {x:"-=500", ease:Expo.easeInOut}, 0.02, time2+0.0)
		  .staggerTo([r.t2.d1, r.t2.d2, r.t2.d3, r.t2.d4, r.t2.d5], 1.9, {x:"-=500", ease:Expo.easeInOut}, 0.02, time2+0.0)
		  .staggerTo([r.t2.t1, r.t2.t2], 1.9, {x:"-=500", ease:Expo.easeInOut}, 0.1, time2+0.0)
		  .to(r.cl1, 1.9, {x:"-=100", ease:Expo.easeInOut}, time2+0.0)
		  .to(r.cl2, 1.9, {x:"-=60", ease:Expo.easeInOut}, time2+0.0)
		  .to(r.cl3, 1.9, {x:"-=20", ease:Expo.easeInOut}, time2+0.0)
		  
		  
		  .from(r.car2, 3.9, {x:"-=390", y:"-=20", scaleX:0.2, scaleY:0.2, ease:Expo.easeOut}, time2+1.0)
		  .from(r.car2.w1.mc, 3.9, {rotation:"-=670", ease:Expo.easeOut}, time2+1.0)
		  .from(r.car2.w2.mc, 3.9, {rotation:"-=670", ease:Expo.easeOut}, time2+1.0)
		  
		  .from(r.t3.t1, 0.7, {x:"-=80", y:"-=50", scaleX:3.2, scaleY:3.2, alpha:0, ease:Expo.easeOut}, time2+1.0)
		  .from(r.t3.t2, 0.7, {x:"+=160", y:"-=50", scaleX:3.2, scaleY:3.2, alpha:0, ease:Expo.easeOut}, time2+1.2)
		  .from(r.t3.t3, 0.7, {y:"+=50", scaleX:3.2, scaleY:3.2, alpha:0, ease:Expo.easeOut}, time2+1.4)
		  
		  .from(r.cta.mc, 1.6, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, time2+1.6)
		  .from(r.cta.t1, 1.6, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, time2+1.65)
		  
		  
		  
		  
		  
		  .call(replay)
		  
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 15)
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

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,1.25,1.5);

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo_s
	this.logo_s = new lib.Symbol4();
	this.logo_s.setTransform(0,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.logo_s).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(0,-139,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.Symbol13();
	this.t2.setTransform(0,-154.5,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(0,-168,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// cta
	this.cta = new lib.Symbol38();
	this.cta.setTransform(10,-82.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// c112
	this.c1 = new lib.car1_1();
	this.c1.setTransform(-326,67.3);

	this.c2 = new lib.car2_1();
	this.c2.setTransform(-277,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c2},{t:this.c1}]}).wait(1));

	// car2
	this.car2 = new lib.Symbol32();
	this.car2.setTransform(39,64.3);

	this.timeline.addTween(cjs.Tween.get(this.car2).wait(1));

	// car
	this.car = new lib.car();
	this.car.setTransform(-70,22.3);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// l1
	this.l1 = new lib.Symbol5();
	this.l1.setTransform(55.5,119.6);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

	// c3
	this.c3 = new lib.cars_1();
	this.c3.setTransform(90,2.3);

	this.timeline.addTween(cjs.Tween.get(this.c3).wait(1));

	// cl1
	this.cl1 = new lib.clouds_1();
	this.cl1.setTransform(-94,-125);

	this.timeline.addTween(cjs.Tween.get(this.cl1).wait(1));

	// cl2
	this.cl2 = new lib.clouds_1();
	this.cl2.setTransform(133,-79);
	this.cl2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.cl2).wait(1));

	// cl3
	this.cl3 = new lib.clouds_1();
	this.cl3.setTransform(243,-159);
	this.cl3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.cl3).wait(1));

	// bg
	this.bg = new lib.bgPattern();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-578,-305,1033,741.9);


// stage content:
(lib.kia_240x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	mask.setTransform(120,200);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
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