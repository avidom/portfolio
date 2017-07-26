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
		{src:"images/apple1.png", id:"apple1"},
		{src:"images/apple2.png", id:"apple2"},
		{src:"images/bottle.png", id:"bottle"}
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



(lib.apple1 = function() {
	this.initialize(img.apple1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,223);


(lib.apple2 = function() {
	this.initialize(img.apple2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,341);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,314);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBCQgFgDAAgIQAAgGAFgFQAFgDAFAAQAHAAAEADQAFAFAAAGQAAAIgFADQgEAFgHAAQgFAAgFgFgAgMAeIgDhkIAeAAIgCBkg");
	this.shape.setTransform(108,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpAwIAAgwIAAgvIAaAAIAAAdIAPAAQALgBAKAEQAJADAGAIQAGAFAAANQAAAMgGAHQgGAIgJADQgKAEgLAAgAgPAbIAPAAQAHAAAEgEQAEgDAAgGQAAgGgEgEQgEgDgHAAIgPAAg");
	this.shape_1.setTransform(100.2,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMAwIAAhGIgcAAIAAgYIBRAAIAAAYIgcAAIAABGg");
	this.shape_2.setTransform(90,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAwIAAgwIg5AwIgGAAIAAheIAbAAIAAAuIA3gvIAIAAIAABfg");
	this.shape_3.setTransform(79.5,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAeA6IAAgVIg7AAIAAAVIgZAAIAAgqIAAAAIABAAQAIgBADgDQAEgEAAgFIACgMIAIgwIBGAAIAABJIANAAIgBAqgAgJgDIgCAFIgCAIQgBAEgDACIAhAAIAAgyIgWAAg");
	this.shape_4.setTransform(67.3,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAtQgLgGgIgLQgHgLgBgRQABgPAHgLQAHgMAMgFQALgGAMAAQAMAAAMAGQAMAFAHALQAHAMABAPQgBARgHALQgHALgMAGQgLAFgNAAQgLAAgMgFgAgJgWQgGADgDAGQgEAGAAAHQAAAIAEAGQADAGAFADQAFADAFAAQAFAAAGgDQAFgDADgGQAEgFAAgJQAAgHgEgGQgDgFgFgDQgFgDgGAAQgEAAgFACg");
	this.shape_5.setTransform(55.5,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqBKIAAhwIAAgIQAAgDgCgCQgCgBgFAAIAAgTQAGgBAIAAQAHAAAFAEQAFAEABAJQAEgJAIgFQAHgEAJAAQAOAAAKAHQAJAHAFAMQAFALAAANQAAAPgGAJQgFALgKAGQgKAHgMABQgKAAgNgGIAAA2gAgGgtQgEADgCAFQgDAFAAAGIAAAZQAKAEAIgBQAJgBAGgFQAGgGAAgNQAAgGgCgGQgCgGgFgEQgFgDgHAAQgEAAgFADg");
	this.shape_6.setTransform(43.6,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYBEQgLgFgGgKQgGgKgCgNQgDgTAEgQQADgSAKgOQALgNAUgHIAGgDQAFgCACgEQACgDgBgEIAZAAQAEAMgFAJQgGAIgNAFIgPAHIgJAFQgFADgDAFQgDAEgCAJQAEgHAIgDQAIgFAGAAQAQAAAKAHQALAGAFAKQAGAKgBANQAAANgGALQgGALgLAHQgLAHgQAAQgPAAgKgGgAgPAHQgHAIAAAKQAAAJADAFQAEAGAFACQAGADAEAAQALAAAGgHQAHgGAAgMQAAgLgHgHQgHgGgKAAQgJAAgGAGg");
	this.shape_7.setTransform(31.6,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnAwIgOAAIAAgsIgZAYIAAAAIgZgYIAAAsIgMAAIgOAAIAAgwIAAgvIAIAAIArAtIArgtIAJAAIAAAvIAAAwIgNAAg");
	this.shape_8.setTransform(70.4,-10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUBBQgMgGgHgMQgHgLAAgRQAAgQAHgJQAIgMALgFQALgGALAAQASABALAHQAKAHAEANQAEALgEAQIg/AAQAAAHAEAFQADAFAGACQAFADAFAAIAHAAIAGgBIANgBIAKgEIADAVQgIADgKACQgJADgKAAQgOAAgNgGgAAWAIQAAgGgCgCQgDgDgFgDQgEgBgGAAQgGAAgGAEQgGADgCAIIAoAAIAAAAgAAQgvQgEgDAAgHQAAgGAEgEQAEgDAHAAQAGAAAEADQAEAEAAAGQAAAHgEADQgEADgGABQgHgBgEgDgAgfgvQgEgDAAgHQAAgGAEgEQAEgDAGAAQAHAAAEADQAEAEAAAGQAAAHgEADQgEADgHABQgGgBgEgDg");
	this.shape_9.setTransform(58.4,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeA6IAAgVIg7AAIAAAVIgZAAIAAgqIAAAAIABAAQAIgBADgDQAEgEAAgFIACgMIAIgwIBGAAIAABJIANAAIgBAqgAgJgDIgCAFIgCAIQgBAEgDACIAhAAIAAgyIgWAAg");
	this.shape_10.setTransform(46.6,-9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5BGIAAiKIAdAAIAABNIBOhOIAJAAIAACKIgeAAIAAhNIhNBOg");
	this.shape_11.setTransform(33.1,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AmAFrQidAAAAidIAAhwIhfheIBfhdIAAhwQAAidCdAAINfAAQCeAAAACdIAAGbQAACdieAAg");
	this.shape_12.setTransform(63.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-36.4,127.5,72.8);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpAwIAAgwIAAgvIAaAAIAAAdIAPAAQALgBAKAEQAJADAGAIQAGAFAAANQAAAMgGAHQgGAIgJADQgKAEgLAAgAgPAbIAPAAQAHAAAEgEQAEgDAAgGQAAgGgEgEQgEgDgHAAIgPAAg");
	this.shape.setTransform(-48.1,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAwIAAhGIgdAAIAAgYIBSAAIAAAYIgcAAIAABGg");
	this.shape_1.setTransform(-58.3,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfAwIgOAAIAAgdIgNAAIgTAdIgeAAIAAgDIAYggQgJgEgFgHQgFgGAAgJQAAgJAEgIQAEgHAIgFQAIgEALgBIAJAAIAPAAIAOAAIANAAIAABfIgPAAgAgIgWQgEAEAAAFQAAAFAEAEQAEADAFAAIAQAAIAAgYIgIAAIgIAAQgFAAgEADg");
	this.shape_2.setTransform(-68.9,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAwIAAgmIglAAIAAAmIgbAAIAAhfIAbAAIAAAjIAlAAIAAgjIAbAAIAABfg");
	this.shape_3.setTransform(-80,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAvQgJgDgIgGQgHgGgFgKQgEgJAAgNQAAgLAEgKQAFgJAHgGQAIgHAJgDQAJgDAIAAQALAAAKAEQAJAEAIAJQAHAIACANIgbAAQgCgHgGgDQgFgEgHAAQgEABgFACQgGAEgEAFQgDAGAAAHQAAAIADAGQAEAGAGADQAFADAEAAQAHAAAGgDQAFgEADgIIAaAAQgCANgHAJQgHAJgKAEQgKAEgMAAQgHAAgJgDg");
	this.shape_4.setTransform(-91.5,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfAwIgOAAIAAgdIgNAAIgTAdIgeAAIAAgDIAYggQgJgEgFgHQgFgGAAgJQAAgJAEgIQAEgHAIgFQAIgEALgBIAJAAIAPAAIAOAAIANAAIAABfIgPAAgAgIgWQgEAEAAAFQAAAFAEAEQAEADAFAAIAQAAIAAgYIgIAAIgIAAQgFAAgEADg");
	this.shape_5.setTransform(-103.1,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAwIAAhIIgUAAIAAgXIAXAAIAYAAIAAAdIAOAAQALgBAKAEQAJADAGAIQAGAFABANQgBAMgGAHQgFAIgLADQgJAEgLAAgAgEAbIANAAQAIAAAEgEQAFgDAAgGQAAgGgFgEQgEgDgIAAIgNAAg");
	this.shape_6.setTransform(-114,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYBEQgLgFgGgKQgGgKgCgNQgDgTAEgQQADgSAKgOQALgNAUgHIAGgDQAFgCACgEQACgDgBgEIAZAAQAEAMgFAJQgGAIgNAFIgPAHIgJAFQgFADgDAFQgDAEgCAJQAEgHAIgDQAIgFAGAAQAQAAAKAHQALAGAFAKQAGAKgBANQAAANgGALQgGALgLAHQgLAHgQAAQgPAAgKgGgAgPAHQgHAIAAAKQAAAJADAFQAEAGAFACQAGADAEAAQALAAAGgHQAHgGAAgMQAAgLgHgHQgHgGgKAAQgJAAgGAGg");
	this.shape_7.setTransform(-125.7,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAtQgLgGgIgLQgHgLgBgRQABgPAHgLQAHgMAMgFQALgGAMAAQAMAAAMAGQAMAFAHALQAHAMABAPQgBARgHALQgHALgMAGQgLAFgNAAQgLAAgMgFgAgJgWQgGADgDAGQgEAGAAAHQAAAIAEAGQADAGAFADQAFADAFAAQAFAAAGgDQAFgDADgGQAEgFAAgJQAAgHgEgGQgDgFgFgDQgFgDgGAAQgEAAgFACg");
	this.shape_8.setTransform(-137.6,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAwIAAgwIg3AwIgHAAIAAhfIAbAAIAAAvIA2gvIAIAAIAABfg");
	this.shape_9.setTransform(-28,-10.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAwIAAgmIglAAIAAAmIgbAAIAAhfIAbAAIAAAjIAlAAIAAgjIAbAAIAABfg");
	this.shape_10.setTransform(-39.8,-10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAsQgMgGgHgMQgHgLAAgPQAAgQAIgLQAHgLALgGQAMgFALAAQARAAALAHQALAHADANQAEANgEAOIg/AAQABAIADAEQAEAFAFACQAFADAGAAIAGAAIAGAAIANgCIAKgEIAEAVQgJAEgKACQgJACgKAAQgOAAgNgGgAAXgLQAAgGgDgEQgDgDgEgCIgKgCQgHAAgGAFQgGAEgCAIIApAAIAAAAg");
	this.shape_11.setTransform(-51.2,-10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAnAwIgOAAIAAgsIgZAYIAAAAIgZgYIAAAsIgMAAIgOAAIAAgwIAAgvIAIAAIArAtIArgtIAJAAIAAAvIAAAwIgNAAg");
	this.shape_12.setTransform(-63.2,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAsQgMgGgHgMQgHgLAAgPQAAgQAIgLQAHgLALgGQAMgFALAAQARAAALAHQALAHADANQAEANgEAOIg/AAQABAIADAEQAEAFAFACQAFADAGAAIAGAAIAGAAIANgCIAKgEIAEAVQgJAEgKACQgJACgKAAQgOAAgNgGgAAXgLQAAgGgDgEQgDgDgEgCIgKgCQgHAAgGAFQgGAEgCAIIApAAIAAAAg");
	this.shape_13.setTransform(-75.3,-10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgqBKIAAhwIAAgIQAAgDgCgCQgCgBgFAAIAAgTQAGgBAIAAQAHAAAFAEQAFAEABAJQAEgJAIgFQAHgEAJAAQAOAAAKAHQAJAHAFAMQAFALAAANQAAAPgGAJQgFALgKAGQgKAHgMABQgKAAgNgGIAAA2gAgGgtQgEADgCAFQgDAFAAAGIAAAZQAKAEAIgBQAJgBAGgFQAGgGAAgNQAAgGgCgGQgCgGgFgEQgFgDgHAAQgEAAgFADg");
	this.shape_14.setTransform(-86.8,-7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqAwIAAgwIAAgvIAnAAIAMABQAIABAGACQAHADAEAFQAEAFAAAJQAAAHgDAFQgDAFgHACQAIACAFAFQAFAHAAAIQAAAMgHAHQgGAFgKACQgJACgKAAgAgPAbIAPAAIAGAAQAEgBADgCQADgCAAgFQAAgFgDgCQgDgDgEAAIgGAAIgPAAgAgPgKIANAAIAFAAQADAAACgCQADgCAAgEQAAgEgDgCQgCgCgDgBIgFAAIgNAAg");
	this.shape_15.setTransform(-98,-10.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAwIAAhGIgcAAIAAgZIBSAAIAAAZIgcAAIAABGg");
	this.shape_16.setTransform(-113.2,-10.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAsQgMgGgHgMQgHgLAAgPQAAgQAIgLQAHgLALgGQAMgFALAAQARAAALAHQALAHADANQAEANgEAOIg/AAQABAIADAEQAEAFAFACQAFADAGAAIAGAAIAGAAIANgCIAKgEIAEAVQgJAEgKACQgJACgKAAQgOAAgNgGgAAXgLQAAgGgDgEQgDgDgEgCIgKgCQgHAAgGAFQgGAEgCAIIApAAIAAAAg");
	this.shape_17.setTransform(-123.4,-10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAaBFIAAg6IgzAAIAAA6IgeAAIAAiJIAeAAIAAA1IAzAAIAAg1IAeAAIAACJg");
	this.shape_18.setTransform(-136.2,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ap0FrQieAAAAidIAAmbQAAidCeAAISLAAQCdAAAACdIAABwIBfBdIhfBeIAABwQAACdidAAg");
	this.shape_19.setTransform(-78.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.4,-36.4,157.5,72.8);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSByQgIgHgBgMQABgMAIgHQAIgGAKgBQAMABAIAGQAHAHABAMQgBAMgHAHQgIAHgMAAQgKAAgIgHgAgWA1IgFitIA2AAIgECtg");
	this.shape.setTransform(-27.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBRQgPgGgNgLQgNgKgGgQQgIgRAAgVQAAgUAIgQQAHgQAMgLQANgLAPgFQAQgGAPAAQASAAASAHQAQAIAMAOQAMAOAEAVIgtAAQgFgLgJgGQgJgFgLAAQgJAAgJAFQgJAFgHAKQgFAKgBANQABAPAFAJQAHALAJAFQAJAFAJAAQALAAAJgGQAKgHAFgNIAtAAQgEAWgMAPQgMAPgRAHQgSAIgSAAQgPAAgQgFg");
	this.shape_1.setTransform(-42,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbBRQgQgGgMgLQgNgKgIgQQgHgRAAgVQAAgUAHgQQAIgQANgLQAMgLAQgFQAPgGAOAAQAUAAAQAHQARAIAMAOQAMAOAEAVIgtAAQgFgLgJgGQgJgFgMAAQgIAAgKAFQgIAFgHAKQgFAKgBANQABAPAFAJQAHALAIAFQAKAFAIAAQAMAAAKgGQAJgHAEgNIAuAAQgEAWgMAPQgMAPgSAHQgQAIgUAAQgOAAgPgFg");
	this.shape_2.setTransform(-61.2,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcBRQgPgGgNgLQgMgKgIgQQgHgRAAgVQAAgUAHgQQAIgQAMgLQANgLAPgFQAQgGAOAAQATAAARAHQARAIAMAOQAMAOAEAVIgtAAQgEgLgKgGQgKgFgLAAQgIAAgJAFQgKAFgGAKQgGAKAAANQAAAPAGAJQAGALAKAFQAJAFAIAAQAMAAAJgGQAKgHAEgNIAuAAQgEAWgMAPQgMAPgSAHQgRAIgTAAQgOAAgQgFg");
	this.shape_3.setTransform(-80.4,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAtB2IAAi9IhZAAIAAC9IgzAAIAAjrIC/AAIAADrIgzAAg");
	this.shape_4.setTransform(-102.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnoFrQieAAAAidIAAmbQAAidCeAAINzAAQCdAAAACdIAABwIBfBdIhfBeIAABwQAACdidAAg");
	this.shape_5.setTransform(-64.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.4,-36.4,129.5,72.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1).p("AEwkvIhIBIAAAmtIAABnAEwEwIhJhJAAAFHIAABnAGuAAIhnAAAjmjmIhJhJAjmDnIhJBJAlGAAIhnAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6,1,1).p("AC7AAQAABNg3A3Qg3A3hNAAQhMAAg3g3Qg3g3AAhNQAAhMA3g3QA3g3BMAAQBNAAA3A3QA3A3AABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-46,92,92);


(lib.pl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuCgIAHguQAcANAQgKQARgJAJgdIAJgXIhkjaIAAgHIBFAAIAfBMIAbBUIACAAIAZhTIAchNIBDAAIAAAHIhgDwQgOAlgPAXQgRAYgaAGQgIACgJAAQgWAAgcgKg");
	this.shape.setTransform(58.2,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQCvQgYgBgZgEQgYgFgXgIIAAlLIBCAAIAAB9QAOgFANgDQANgDAKAAQAgAAAYAPQAZAPAOAbQAOAYAAAkQgBAsgSAaQgSAagdALQgcALggAAIgDAAgAgagEQgKADgMAEIAABxIAVAFQAKABAJAAQAXAAAQgPQAQgPAAgjQAAgegQgRQgPgPgVgCQgKAAgLADg");
	this.shape_1.setTransform(32.8,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAaQgKgKgBgQQABgPAKgKQAMgKAPAAQARAAAKAKQALAKABAPQgBAQgLAKQgKAKgRgBQgPABgMgKg");
	this.shape_2.setTransform(12,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfBxIAAgIIBiiiIhbAAIAAg3IC4AAIAAAIIhgCgIBgAAIAAA5g");
	this.shape_3.setTransform(-6,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfBxIAAgIIBiiiIhbAAIAAg3IC4AAIAAAIIhgCgIBgAAIAAA5g");
	this.shape_4.setTransform(-28.5,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggCkIAAjeIBBAAIAADegAgRhbQgJgFgFgIQgGgJAAgNQAAgNAFgIQAGgIAJgEQAJgFAIABQAKAAAIAEQAJAEAGAJQAFAIAAAMQAAATgMAKQgLAJgOAAIgBAAQgIAAgJgDg");
	this.shape_5.setTransform(-45.9,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzCtIAAiyIgqAAIAAgvIArAAIAAgcQAAgjANgUQAMgUAUgJQATgIAaABQAaABAcAJIgGAxQgSgHgRgBQgSgBgMAJQgMAKAAAXIAAAbIBHAAIAAAvIhHAAIAACyg");
	this.shape_6.setTransform(-61.2,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF000F").s().p("AuDFeIAAq7IcHAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-35,180,70);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAwIAAgwIAAgvIAaAAIAAAdIAPAAQALgBAKAEQAJADAGAIQAGAFAAANQAAAMgGAHQgGAIgJADQgKAEgLAAgAgPAbIAPAAQAHAAAEgEQAEgDAAgGQAAgGgEgEQgEgDgHAAIgPAAg");
	this.shape.setTransform(41.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAvQgJgDgIgGQgHgGgFgKQgEgJAAgNQAAgLAEgKQAFgJAHgGQAIgHAJgDQAJgDAIAAQALAAAKAEQAJAEAIAJQAHAIACANIgbAAQgCgHgGgDQgFgEgHAAQgEABgFACQgGAEgEAFQgDAGAAAHQAAAIADAGQAEAGAGADQAFADAEAAQAHAAAGgDQAFgEADgIIAaAAQgCANgHAJQgHAJgKAEQgKAEgMAAQgHAAgJgDg");
	this.shape_1.setTransform(30.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBEIADgUQAMAFAHgEQAHgEAEgMIADgKIgqhbIAAgCIAAgCIAeAAIAYBAIAAAAIAXhAIAcAAIAAACIAAACIgpBkQgGAQgGALQgIAKgLADIgHABQgJAAgLgFg");
	this.shape_2.setTransform(18.8,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBKIAAhwIAAgIQAAgDgCgCQgCgBgFAAIAAgTQAGgBAIAAQAHAAAFAEQAFAEABAJQAEgJAIgFQAHgEAJAAQAOAAAKAHQAJAHAFAMQAFALAAANQAAAPgGAJQgFALgKAGQgKAHgMABQgKAAgNgGIAAA2gAgGgtQgEADgCAFQgDAFAAAGIAAAZQAKAEAIgBQAJgBAGgFQAGgGAAgNQAAgGgCgGQgCgGgFgEQgFgDgHAAQgEAAgFADg");
	this.shape_3.setTransform(7.3,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAuQgIgDgEgHQgFgHgBgJQAAgMAFgIQAFgFAIgFQAJgDALAAIALABQAHACAFADIAAgHQAAgFgEgEQgEgCgFgBIgJgCIgOACQgHABgHADIgDgTQAIgEAJgCQAJgCAKAAQALAAAKADQAKAEAGAIQAHAHAAAOIAAAhIAAAHQAAABAAAAQABABAAABQAAAAAAABQABAAAAAAQACACAFgBIAAAQQgHACgHgBQgHAAgFgDQgEgEAAgJQgDAGgGAEQgFADgFACQgGACgHAAQgJAAgIgEgAgRAHQgEAEABAHQAAAFAEADQAEADAFAAQAFAAACgCQAFgCADgDQAEgEABgFIAAgEQgFgEgFgBIgIgBQgHABgFADg");
	this.shape_4.setTransform(-4.3,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAvIABgUQAIABADgCQAEgBABgEIACgLIAHg5IAlAAIAoAAIAABeIgcAAIAAhGIgZAAIgDAiQgBAQgFAJQgFAJgJACIgMABIgPgBg");
	this.shape_5.setTransform(-16.4,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgHgMQgHgLAAgPQAAgQAIgLQAHgLALgGQAMgFALAAQARAAALAHQALAHADANQAEANgEAOIg/AAQABAIADAEQAEAFAFACQAFADAGAAIAGAAIAGAAIANgCIAKgEIAEAVQgJAEgKACQgJACgKAAQgOAAgNgGgAAXgLQAAgGgDgEQgDgDgEgCIgKgCQgHAAgGAFQgGAEgCAIIApAAIAAAAg");
	this.shape_6.setTransform(-27.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBGIgeAAIAAhGIAAhFIBgAAIAAAbIhDAAIAAAaIAdAAQAQAAALAFQALAGAGAHQAFALAAAMQAAAMgFAKQgGAKgLAHQgLAFgQABIgcAAgAgYAsIAPAAIAOAAQAGgBAFgDQAFgCACgEQACgEAAgFQAAgIgFgFQgFgGgKABIgdAAg");
	this.shape_7.setTransform(-39.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-14.2,96.6,28.5);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA9QgRgIgLgQQgLgOAAgXQAAgWALgPQALgPARgIQAQgIARAAQASAAARAIQAQAIAMAPQAKAPAAAWQAAAXgKAOQgMAQgQAIQgRAHgSABQgRgBgQgHgAgVgXQgIAJgBAOQABAPAIAJQAKAHALAAQAMAAAIgHQAKgJAAgPQAAgOgKgJQgIgHgMAAQgLAAgKAHg");
	this.shape.setTransform(22.2,-8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaCRIAAgNIBjiNQAIgLAGgMQAHgMAAgMQABgMgEgIQgEgIgIgEQgHgEgIAAQgHAAgJADQgHADgGAIQgFAIgBAOIg0AAQABgqAXgXQAXgXAoAAQAfAAAVAOQATANAJAXQAIAXgGAcQgFAcgWAbIgKAPIgSAaIgbAnIBbAAIAAA1g");
	this.shape_1.setTransform(1.8,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaCRIAAgNIBjiNQAIgLAGgMQAGgMABgMQABgMgEgIQgFgIgHgEQgIgEgHAAQgIAAgHADQgJADgFAIQgGAIABAOIg1AAQAAgqAYgXQAXgXApAAQAeAAAVAOQAUANAIAXQAIAXgGAcQgFAcgWAbIgKAPIgSAaIgbAnIBbAAIAAA1g");
	this.shape_2.setTransform(-20.4,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-27.1,67,54.3);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAxQgGgIgBgEQACgWACgIQAEgKAMgWQABAAADgLQADgGAEgCQACADADAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAIABABIgBABIAAAAQAFgDAAgBIgCAAIAAgCIAHgFIAMgDIAHAAIABgBIABAAIABABIAAABIADADIABgBIABABIAAAAIgGADIABABIACgBIAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABIAJgBQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgFABIAAABIAIgBIgBABIABAAIADgBIADAAIAAAAIgBACIgBAAIgCABQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAACgNAEIAAAAIABAAIABAAIABAAIAAAAIABgBIADAAIABAAIABABIgMACQgNADgKALQgJAJgDALQABAAgCAEIABAAQgBAAgCAHIgGAZIAAABIAAABIgEAOQAAABgEADIgBAAIgBACQgCgHgDgCgAAXgkIAAABIACgBIAAAAg");
	this.shape.setTransform(17.5,-20.9,0.55,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAABIAAAAIABgBIAAAAIAAAAIgBABg");
	this.shape_1.setTransform(8.7,-20.1,0.55,0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhhBfQgIgOgCgHIgBgDQgBgKALgSQAHgMAKgIQAUgUAOgFQAQgKALgCIAIAAQAeg7ALgSQAEgFAFgBIAAgCQACAAAEADIAAAIIABACQgBAJgFANQgDAHgBABQgDADgHAOIgBAAIgBADIgBAAIgBABIgBAAQAGgLACAAIAAgBIgCAAIgLARIACACQgCABgCADIgBAAIgCADIAAAAIACAAIAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgCAAIgHAMIAAABIABgBIAAABIgBABIgBAAIAAABIABABIgBAAIAAgBIgBAAIAAABIAAABIABgBIAAABIABAAIACgEIACAAIgFAGIgBAAIAAgCQgBAAgDAHIAAAAIABAAQgBgBAEgEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCADIAAABIABgBIABABIgCAFIABgBIAAABQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAIAAADIAAAAIgBABIAAgBIgCAAQABACgHAHIgFAJIAAAAIADgCIgFAKQgGAUAAACQABADAKABQAOgFAGgEIABAAIgEgOQgDgQAmggQAHgDAAgDQALgFgBgCIADAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIgCABIAAgBIANgJIABAAIAAABIABAAIgBgBIADgCIADAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIAIgEIAAABIABgBIAJgCQAGACAEAFIABADIAAAEIABACIgBALQgEAHgSAPQgEAGgMAGIgKAEQgMADgFgQIgBgDIgMAKIgCADIABABQgIAIABABIABABIgFAKIABABQgBAAAAABQAAAAAAABQAAABAAAAQAAAAAAABIABABIAHgFIAAgBIADABIABgBIAAAAIgFAFIgCACQAIABAIgBIAAAAIAEAAIAEgBIAUgIIAAAAIAKgFIAAACIgBAAIAAAAIADAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAABIgBABIABABIABgBIACgBIAAACIgEACIAAABIABgBIABAAIABAAQAAABgGACQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAgBAAIABACIAAAAIAGgEIABABQAAABgGACQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBQgBADgFABIAAABIABABIgCAAIABAAIACAAQAAABgGACQAAADgFACIgCgBIgBADIAJgEIAAABQAAABgJADIAAAAIADAAIAAABIgCABIAAABIgLADIgBABIgDABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgCgBIgDACIgBAAQgJACgKgKIgEgFIAAgBIgBgBIgDACIABABIAAAAIgDAAIgEADIAAACIAAABIgFAGQAAABgGADIABAAIAEgBIAAACIgCAAIgFAAIAAABIABABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQgBAAgBAAQAAgBAAAAQgBAAAAAAIgBABQgJgEgBgGQgCAAgGgQIABgBIgBAAIgPAPIgBgBIABgBIgCAAQABAEgWAPIAAgBIgBAAIACABIAAABIgEAAIAAABIABAAIABABIgLAFQgHgCgCgDgAhHAuQgFAEgOAWIAAABQATgEAbgeQAGgEAAgCQAHgHAEgJIADgKIgBAAIgEABIABACIgBABIAAgBIgKAGIABABIAAACQgGACgIAIQgCAAgFAFIgBgBQgDACgIALgAgwBCIAAgBIAAgBIgCAAIABACIABAAgAgKAPIABABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAAAgAAvAFQACABAHgBQAEAAAVgMIAAABQAAgCAJgHIAFgGIgBgBQgHACgUAMQgDABgEAEIgHADIAAABIgCAAgAAmACIgBABIAAABIABAAIABgBIAAgBgAAwgFIgBADIAAAAIADgDIAAAAgABKgcIAAgCIgCACIACAAg");
	this.shape_2.setTransform(9,-21,0.55,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_3.setTransform(10,-22.7,0.55,0.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAyIgEgPQgFgbARgWQAUgmAKgCQADAAAEAJIAAAGIABADIgBACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABIgOARQgEAHgFAFQgNAZAAACIAAAAQAFAAAKgHIABAAIAAgBIABABIABAEIgDAEIABAAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIgCAAIAAABQACADADABIgCAFQAAACgEADIABABQgBAHgCAAQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABIgFAAQgKAAgBgFg");
	this.shape_4.setTransform(1.9,-17.9,0.55,0.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMADIAAgDIgBgDQAAgKAHgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIABAAIAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAgBQAIgBAEANIAAAAIAAADIABACIABAAQABAGgPAKIgEACQgCAAgGgPg");
	this.shape_5.setTransform(3.8,-21.9,0.55,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_6.setTransform(-0.1,-16.6,0.55,0.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA7QgLgKgFgNIgBgBQgDgJAHgPQAQgbANgLIAHgKQARgRASgIIAFgBIADgBIABABIABACIgBACIgCABIAAACQAEgBABABQgEACAAAIIgBAAIgDABQgHAFABADQgFAEgDABQgEAHgIAFIAAABIACgBQAAACgEACQAAAEgKANIgNAUQgHAOAAACQAAACAJgDIAJgDQAAAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAIABgBQAFgDAfgTIAAgBQgCAFAAACIgFAFQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQABADgEACIABAAIABAAQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAAAAQAAACgFADIgCAAQAAABgJAGIgBAAIgBgCIgBABIAAABIABABIgEACIgCAAQABAAgBABQAAAAAAABQAAAAgBABQgBAAgBAAIAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIAAABIAAgBIAAABIAAADIAAAAIABgBIABABIAAACIADgBIABABIgCABIgBAAIgDABIACABIADgBIAAABIgFAFIAAABIAAgBIAAABQABACgEAEIgCAAIgDACIgHABQgJAAgCgGgAAMAeIABABIADgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_7.setTransform(-2.2,-17.3,0.55,0.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAFIARgJIAKgDIACADIgKADIgFAEQgIADgEADg");
	this.shape_8.setTransform(42,-7.6,0.55,0.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("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");
	this.shape_9.setTransform(19.3,-3.8,0.55,0.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOADIgBgDIAUgCIAKAAIABACIgKAAIgGADQgIgBgGABg");
	this.shape_10.setTransform(3,8.5,0.55,0.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBgBIADAAIAAACIgDABg");
	this.shape_11.setTransform(4.9,0.8,0.55,0.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Al/DkIgCgDQA8gYAkgHIgBgHIAigLIACgCIgBgDQhOAXgOgEIgBgCIAagPQAFgDgCgGIAbgIQAMgKALgGQAdgQBdgXQAAgdAJgUQgGggAQgEIgBgKQgfgXgDgPIgCgNQgCgJAOgLIgBgCQgDgGgXAKIgCgDQAEgGADgBIAUgIQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBgBAAIAQgFIANgIIgCgCIgQAJIgDgGQBFgmDzguQBAgWAvgHQAigCARgIQA1gNADAGIACADQg6AYgmAHIAAAHQgDACgeAJIgCACIABACQBNgWAPAEIABACIgbAPQgFADADAGIgbAHQgOAMgJAFQgmAUiDAeIgKAJQhVAggDgBQgDgGhAAcQAFAKAMAFQgCAEAAAPIABAXIABAEIADgBQAygNBWgYQAIADAJgCQABAGgXAMIABAEIAEgBQAPgNAHgCIACAJIgMADIABAFIAIgDIABACIAKgJQAPAGALgDQgBgEAFgBQAIARAKAMIAAAEQgIgEgLABIADAFQgFASABACIADAFQADAFAXgJIACADQgFAGgCABIgUAIQgBAAgBABQAAAAAAABQAAABAAAAQAAABAAAAIgPAFIgNAHIACADIAPgJIAEAGQhFAljzAvQhAAWgvAHQgkACgPAIQgjAJgOAAQgGAAgBgCg");
	this.shape_12.setTransform(-23.5,-11.2,0.55,0.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpEjQADg8AKgoIgHgDQAAgHAEgbIAAgEIgDABQgMBPgKAMIgDAAIgCgfQAAgFgHAAIAFgdQgEgPgBgMQgDgoAdiFIgEgMQAHhaACgEQAJAAABhbIADAAIAHADIABgfIAGAAIAAAGIADAAIACgZIAFAAIAAASIAHAAQgCgXAJgDIAJAAQAPAMACgBIAGAAQAGAAABgaIAEAAQADAHAAACIgBAWQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIgCAQIABAPIADgBIgBgSIAGAAQAFBPg+DvQgIBFgLArQgOAhACARQgMA2gHABg");
	this.shape_13.setTransform(-10.7,0.8,0.55,0.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AisEMQAQhSAUgwIgIgFIAMgtIABgDIgFgBQgfBngQAOIgFAAIAEgqQABgIgJgBIAMgkQgCgUABgSQAdiUAxhOIAIACIgGAUIgBAMIAEAAQAFgvA9geQAAgEAegTIAHABIgVAXIAEABQAUgYAOgLQAdgBA4gSQA9gVAZgCQgaAdgUAWQglAmgfAUIgEAAIATgUIgFAAQhtBUgBAPQgeAigpCXQgFgBgPAwQgJAAgiBqIgNALg");
	this.shape_14.setTransform(-27.5,11.7,0.55,0.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_15.setTransform(-12.8,-11.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.7,-26.5,89.5,53.1);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1,3,true).p("AAAi5IAAFz");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-20.1,3,40.3);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AhqEOQhwAAhPhPQhPhPAAhwQAAhvBPhPQBPhPBwAAQBuAABPBPQArArAUA2QAWgGAYAAQBNAAA2A2QA2A1AABNQAABNg2A2Qg2A2hNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.7,-31,83.5,62);


(lib.bottle_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-42,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-157,84,314);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.ap2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.apple2();
	this.instance.setTransform(-162,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-170,324,341);


(lib.ap1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.apple1();
	this.instance.setTransform(-102,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-111,204,223);


(lib.pogoda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud
	this.cloud = new lib.cloud();
	this.cloud.setTransform(-15.6,-85.2);

	this.timeline.addTween(cjs.Tween.get(this.cloud).wait(1));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAEJBQAWgMATgTQA2g2AAhNQAAhNg2g2Qg0g2hNAAQgYAAgVAFQgUg1grgrQhPhPhwAAQhwAAhPBPQhPBPAABwQAABwBPBPQAlAlAsATIlrAAIAAyBIaxAAIAASBg");
	mask.setTransform(12.1,-118.3);

	// sun
	this.sun = new lib.Symbol1();
	this.sun.setTransform(-1.2,-103.2);

	this.sun.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1));

	// l1
	this.l1 = new lib.line();
	this.l1.setTransform(-14.9,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("An+EVIAAopIP9AAIAAIpg");
	mask_1.setTransform(-66.1,-5.3);

	// p1
	this.p1 = new lib.p1();
	this.p1.setTransform(-63.8,0);

	this.p1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ApnEVIAAopITPAAIAAIpg");
	mask_2.setTransform(46.7,-5.3);

	// p2
	this.p2 = new lib.p2();
	this.p2.setTransform(49.2,-2.5);

	this.p2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.3,-149.2,194.8,171.7);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 2000;
		
		var tl = new TimelineLite();
		tl.fromTo(this.blk, 0.5, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.logo1, 1.0, {y:"-=150", ease:Expo.easeOut}, 0.3)
		  
		  .from(this.ap1, 1.5, {x:"+=130", y:"-=130", rotation:"-=50", ease:Expo.easeOut}, 0.0)
		  .from(this.ap3, 1.5, {x:"-=130", y:"-=30", rotation:"-=90", ease:Expo.easeOut}, 0.0)
		  .from(this.ap2, 1.5, {x:"-=130", y:"+=130", rotation:"+=50", ease:Expo.easeOut}, 0.0)
		  
		  .from(this.pogoda.cloud, 1.5, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.5)
		  .from(this.pogoda.sun, 2.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.2)
		  .from(this.pogoda.sun, 9.0, {rotation:"-=400", ease:Power0.easeNone}, 1.2)
		  .from(this.pogoda.l1, 2.0, {scaleY:0, ease:Elastic.easeOut}, 0.5)
		  .from(this.pogoda.p1, 1.0, {x:"+=250", ease:Expo.easeOut}, 0.7)
		  .from(this.pogoda.p2, 1.0, {x:"-=250", ease:Expo.easeOut}, 0.7)
		  
		  
		  .to(this.ap1, 1.5, {x:"-=10", rotation:"+=5", ease:Expo.easeInOut}, 3.5)
		  .to(this.ap3, 1.5, {x:"-=5", y:"-=15", rotation:"+=10", ease:Expo.easeInOut}, 3.5)
		  .to(this.ap2, 1.5, {x:"-=30", rotation:"-=5", ease:Expo.easeInOut}, 3.5)
		  .to(this.pogoda, 1.0, {y:"+=60", ease:Expo.easeInOut}, 3.5)
		  .from(this.bt, 1.0, {x:"+=50", rotation:0, ease:Expo.easeOut}, 4.0)
		  .from(this.t1, 1.0, {scaleX:0.0, scaleY:0.0, rotation:"+=60", ease:Elastic.easeOut}, 4.2)
		  
		  
		  .to(this.ap1, 1.0, {x:"-=10", rotation:"+=5", ease:Expo.easeInOut}, 6.0)
		  .to(this.ap3, 1.0, {x:"-=10", y:"-=15", rotation:"+=5", ease:Expo.easeInOut}, 6.0)
		  .to(this.ap2, 1.0, {x:"-=30", rotation:"-=5", ease:Expo.easeInOut}, 6.0)
		  .to(this.pogoda, 1.0, {x:"-=110", ease:Expo.easeInOut}, 6.0)
		  .to(this.bt, 1.0, {x:"-=30", rotation:0, ease:Expo.easeInOut}, 6.0)
		  .to(this.t1, 0.4, {scaleX:0.0, scaleY:0.0, x:"-=10", ease:Expo.easeIn}, 6.0)
		  .from(this.t2, 1.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 6.4)
		  
		  
		  .to(this.ap1, 1.0, {x:"-=10", rotation:"+=5", ease:Expo.easeInOut}, 9.0)
		  .to(this.ap3, 1.0, {x:"-=5", y:"-=45", rotation:"+=15", ease:Expo.easeInOut}, 9.0)
		  .to(this.ap2, 1.0, {x:"-=30", rotation:"-=5", ease:Expo.easeInOut}, 9.0)
		  .to(this.pogoda, 1.0, {x:"-=110", ease:Expo.easeInOut}, 9.0)
		  .to(this.bt, 1.0, {x:"-=170", ease:Expo.easeInOut}, 9.0)
		  .to(this.t2, 0.5, {scaleX:0.0, scaleY:0.0, x:"-=110", rotation:"+=120", ease:Expo.easeIn}, 9.0)
		  .from(this.t3, 1.0, {scaleX:0.0, scaleY:0.0, rotation:"-=90", ease:Elastic.easeOut}, 9.5)
		  .from(this.pl, 1.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 9.5)
		  .from(this.pl, 1.4, {y:"-=50", ease:Elastic.easeOut}, 9.5)
		  
		  .to(this.logo1, 0.5, {y:"-=150", ease:Expo.easeIn}, 9.0)
		  .from(this.logo2, 0.5, {y:"-=150", ease:Expo.easeOut}, 9.5)
		  
		  
		  
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 13)
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

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B3D256").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("AgMAaQgHgDgEgHQgEgGgBgKQABgGACgGQACgFAFgEQAEgEAGgCQAGgCADAAQAGABAGACQAFACAEAEQAEAEACAHIgKAAQgCgGgEgDQgFgCgFAAQgEAAgFACQgFADgDAFQgDAEAAAGQAAAHADAFQADAFAFACQAFACADAAQAGAAAFgDQAFgDADgGIAJAAQgDAHgDAFQgFAEgFADQgGACgHAAQgFAAgHgEg");
	this.shape_1.setTransform(112.4,138.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.4)").s().p("AgaApIABgHQAGACADgBQAEgBACgDIAFgJIADgIIgag3IAAgBIAAAAIAKAAIATAtIATgtIAJAAIAAAAIAAABIgZA7IgEALQgCAGgDADQgEAEgFABIgDAAQgEAAgFgCg");
	this.shape_2.setTransform(105.6,140.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.4)").s().p("AAPAcIgPgaIgEAAIgEABIgHAAIAAAZIgKAAIAAg3IAKAAIAAAYIAIAAQAJAAAGgGQAGgGAAgMIAJAAQAAAKgEAHQgEAIgJACIAUAbIAAABg");
	this.shape_3.setTransform(99.5,138.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.4)").s().p("AgXAcIAAgcIAAgbIAVAAIAGAAIAIACQAEABACAEQACADAAAEQAAAFgCADQgCAEgEABQAFAAADADQAEAEAAAFQAAAGgDADQgCADgDACIgIACIgIAAgAgOAUIAOAAIAGAAQAEAAACgCQADgCAAgFQAAgEgDgCQgDgCgEgBIgGAAIgNAAgAgOgEIANAAIAEAAQAEAAACgCQADgBgBgEQABgFgDgBIgGgCIgEgBIgNAAg");
	this.shape_4.setTransform(93.1,138.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.4)").s().p("AAQApIAAgUIABgVIgmApIgDAAIAAg4IAJAAIAAASIgBAUIAmgmIADAAIAAA4gAgFgZQgEgCgDgEIgDgIIAHgBQABAFACACQADACADAAQAEAAAEgCQADgCAAgFIAEABIADAAQgBAHgFAEQgEAEgIABQgCAAgEgCg");
	this.shape_5.setTransform(83.2,137.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.4)").s().p("AAZAcIAAg3IAJAAIAAA3gAghAcIAAg3IAJAAIAAATIAOAAQAGAAAEABQAGACADAFQAEABAAAIQAAAHgEAEQgDAFgGACQgEABgGAAgAgYAVIAOAAIAIgBQACgBACgDQACgDAAgEQAAgFgCgCIgEgCIgIgBIgOAAg");
	this.shape_6.setTransform(75.4,138.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.4)").s().p("AAQAcIAAgaIgeAAIAAAaIgKAAIAAg3IAKAAIAAAXIAeAAIAAgXIAJAAIAAA3g");
	this.shape_7.setTransform(67.6,138.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.4)").s().p("AAPAcIAAgVQgHAEgHAAQgFABgGgDQgGgDgEgGQgDgDAAgKIAAgOIAJAAIAAAOQAAAHADAEQADACAEACQAEABAFgBQAFgBAFgBIAAgbIAJAAIAAA3g");
	this.shape_8.setTransform(60.7,138.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.4)").s().p("AgOAaQgGgDgFgHQgEgGAAgKQAAgIAEgIQAFgGAGgEQAIgCAGAAQAHAAAHACQAHAEAFAGQADAIABAIQgBAKgDAGQgFAHgHADQgHAEgHgBQgGABgIgEgAgJgSQgEADgEAEQgCAFAAAGQAAAHACAEQAEAFAEADQAFACAEAAQAFAAAEgCQAGgDACgFQADgEAAgHQAAgGgDgFQgCgEgGgDQgEgCgFAAQgEAAgFACg");
	this.shape_9.setTransform(54.1,138.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.4)").s().p("AgcAcIAAgHQAFABADgBQADgCABgDIABgHIAFglIASAAIAVAAIAAA4IgJAAIAAgvIgWAAIgDAcQgCAIgCAFQgCAEgEACIgHABIgGgBg");
	this.shape_10.setTransform(46.7,138.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.4)").s().p("AgOAoQgGgDgEgGQgDgGgBgHQgBgMABgHQACgKAFgGQAGgIAKgFIAHgDQAEgCACgCQADgCgBgEIAJAAQABAFgCADQgBAEgEACIgIAEIgGADIgJAGQgEADgDAEQgCAEgBAFQADgFAGgDQAGgEAGgBQAJAAAGAFQAHAEADAEQADAGAAAJQAAAIgDAGQgDAHgHAEQgGAEgKAAQgIAAgGgEgAgJgBQgFABgDAEQgCAFAAAGQAAAGADAFQACAFAFACQAFADAEAAQAGAAAFgDQAEgDADgFQACgEAAgGQAAgGgCgFQgDgEgEgBQgFgDgGAAQgFAAgEADg");
	this.shape_11.setTransform(40,137.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.4)").s().p("AATAcIgEAAIAAgTIgOAAIgOATIgKAAIAAgBIAQgUQgGgCgEgFQgDgCAAgGQAAgGACgEQADgEAEgDQAFgDAGABIAGAAIAKAAIAIAAIAAA3IgFAAgAgIgQQgDADAAAFQAAAFADADQAEAAAEAAIAPAAIAAgTIgPAAQgEAAgEADg");
	this.shape_12.setTransform(33,138.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.4)").s().p("AAAAFIgGALIgGgEIAJgLIgNgBIACgHIANAFIgBgOIAFAAIAAAOIAMgGIACAHIgNACIAKALIgGAEg");
	this.shape_13.setTransform(27.6,134.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.4)").s().p("AAAAFIgGALIgGgEIAJgLIgNgBIACgHIANAFIgBgOIAFAAIAAAOIAMgGIACAHIgNACIAKALIgGAEg");
	this.shape_14.setTransform(22.7,134.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.4)").s().p("AgWAsIAAhCIgBgHQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgBgEAAIAAgHQAIgBADACQAFACAAAHQAEgGAFgDQAFgCAEAAQAJAAAGAEQAFAEAEAHQADAHAAAIQAAAKgFAFQgEAGgHAEQgGADgIAAQgHgBgHgFIAAAjgAgFggQgEADgCAEQgDAEABAGIAAAPQAFAFAHABQAEABAFgCQAGgCADgDQAEgFAAgIQAAgGgCgFQgBgFgFgDQgEgDgGAAQgEAAgEADg");
	this.shape_15.setTransform(13.5,140);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.4)").s().p("AAWAkIAAgPIgsAAIAAAPIgIAAIAAgWIACAAQAEAAACgDIADgIIABgIIAFgeIAkAAIAAAxIAIAAIgBAWgAgJgDIgCALQgCAEgDACIAeAAIAAgpIgTAAg");
	this.shape_16.setTransform(6.4,139.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.4)").s().p("AAQAcIAAgTIABgTIgmAmIgDAAIAAg3IAJAAIAAAUIgBASIAmgmIADAAIAAA3g");
	this.shape_17.setTransform(-0.5,138.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.4)").s().p("AgMAaQgHgDgEgHQgEgGgBgKQABgGACgGQACgFAFgEQAEgEAGgCQAGgCADAAQAGABAGACQAFACAEAEQAEAEACAHIgKAAQgCgGgEgDQgFgCgFAAQgEAAgFACQgFADgDAFQgDAEAAAGQAAAHADAFQADAFAFACQAFACADAAQAGAAAFgDQAFgDADgGIAJAAQgDAHgDAFQgFAEgFADQgGACgHAAQgFAAgHgEg");
	this.shape_18.setTransform(-7.3,138.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.4)").s().p("AAAAFIgHALIgFgEIAJgLIgNgBIACgHIANAFIAAgOIAFAAIgBAOIAMgGIACAHIgMACIAJALIgGAEg");
	this.shape_19.setTransform(-13.3,134.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// warn
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASBeQgLAAgIgFQgJgEgHgLQgGgMAAgVIAAgkIgXAAIAABXIgNAAIAAi3IANAAIAABWIAXAAIAAgjQAAgVAGgMQAHgLAJgFQAIgEALAAQAKAAAKAEQAKAFAGALQAGAMAAAVIAABRQAAAVgGAMQgGALgKAEQgJAFgJAAIgCAAgAADhNQgFACgDAKQgEAJgBASIAABNQABASAEAJQADAKAFACQAHADAIABQAIgBAGgDQAHgCAEgKQAEgJAAgSIAAhNQAAgSgEgJQgEgKgHgCQgGgEgIAAQgIAAgHAEg");
	this.shape_20.setTransform(107.5,184);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoBcIAAi3IAOAAIAABPIAYAAQAVAAALAMQALALAAAXIAAAIQAAAZgLAMQgLANgVAAgAgaBQIAWAAQALAAAHgEQAHgEADgIQADgJAAgOIAAgEQAAgVgHgKQgHgHgRAAIgWAAg");
	this.shape_21.setTransform(94.4,184);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgpBcIAAi3IAjAAQAXAAALALQALAMAAAWIAAAGQAAAJgCAIQgCAIgFAFQgFAGgIACQALACAHALQAGAMAAAQIAAAFQABAXgMAMQgMANgXAAgAgbBQIAVAAQANAAAHgFQAIgEADgJQADgJAAgMQAAgLgDgIQgDgJgHgFQgIgFgNAAIgVAAgAgbgHIAVAAQAMAAAHgEQAIgFACgHQADgJAAgKQAAgOgDgIQgEgIgHgDQgIgEgLAAIgUAAg");
	this.shape_22.setTransform(83,184);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAABeQgJAAgKgFQgKgEgGgLQgGgMAAgVIAAhRQAAgVAGgMQAGgLAKgFQAKgEAJAAQAKAAAKAEQAJAFAHALQAGAMAAAVIAABRQAAAVgGAMQgHALgJAEQgJAFgKAAIgBAAgAgNhNQgHACgEAKQgEAJAAASIAABNQAAASAEAJQAEAKAHACQAHADAGABQAHgBAHgDQAHgCAEgKQADgJABgSIAAhNQgBgSgDgJQgEgKgHgCQgHgEgHAAQgGAAgHAEg");
	this.shape_23.setTransform(71.1,184);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgoBcIAAi3IAmAAQAVAAALANQALAMAAAZIAAAHQAAAZgLAKQgLAMgVAAIgYAAIAABPgAgaACIAWAAQARgBAHgGQAHgKAAgVIAAgEQAAgOgDgJQgDgIgHgEQgHgEgLAAIgWAAg");
	this.shape_24.setTransform(60.3,184);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAABeQgJAAgKgFQgKgEgGgLQgGgMAAgVIAAhRQAAgVAGgMQAGgLAKgFQAKgEAJAAQAKAAAKAEQAJAFAHALQAGAMAAAVIAABRQAAAVgGAMQgHALgJAEQgJAFgKAAIgBAAgAgNhNQgHACgEAKQgEAJAAASIAABNQAAASAEAJQAEAKAHACQAHADAGABQAHgBAHgDQAHgCAEgKQADgJABgSIAAhNQgBgSgDgJQgEgKgHgCQgHgEgHAAQgGAAgHAEg");
	this.shape_25.setTransform(48.5,184);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAwByIAAgsIhfAAIAAAsIgNAAIAAg4IANAAQAHgPAEgPQAEgOADgPQACgRABgVIABgyIAAgYIBEAAIAACrIASAAIAAA4gAgMhKIgBAvQgBATgCAMQgCAOgFANIgKAbIA/AAIAAifIgqAAg");
	this.shape_26.setTransform(36.2,186.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdBSQgLgLAAgUIAAgEIAOAAIAAAEQAAAQAHAIQAHAGAMAAQAOAAAHgIQAGgJAAgUIAAgHQAAgSgGgIQgGgIgPAAIgJAAIAAgJIAJAAQANAAAGgIQAHgIAAgRIAAgJQAAgRgHgIQgGgIgNAAQgLAAgGAHQgGAHAAAOIAAAFIgOAAIAAgFQAAgOAFgJQAFgIAJgFQAJgEAJAAQATAAAKALQAKAMAAAXIAAAKQAAAMgFAKQgEAKgMADQAMACAFAJQAGAKAAAPIAAAJQAAATgFALQgFALgKAEQgJAGgMAAQgTAAgKgMg");
	this.shape_27.setTransform(24.7,184);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFBcIAAirIgjAAIAAgMIBRAAIAAAMIgjAAIAACrg");
	this.shape_28.setTransform(10.4,184);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAeBcIAAiNIABgQIgFAOIg3CPIgNAAIAAi3IANAAIAACNIgBARIAFgQIA3iOIANAAIAAC3g");
	this.shape_29.setTransform(-0.5,184);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAwByIAAgsIhfAAIAAAsIgNAAIAAg4IANAAQAHgPAEgPQAEgOADgPQACgRABgVIABgyIAAgYIBEAAIAACrIASAAIAAA4gAgMhKIgBAvQgBATgCAMQgCAOgFANIgKAbIA/AAIAAifIgqAAg");
	this.shape_30.setTransform(-13.4,186.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkBcIAAi3IBIAAIAAAMIg7AAIAABKIAxAAIAAAKIgxAAIAABLIA8AAIAAAMg");
	this.shape_31.setTransform(-24.3,184);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgoBcIAAi3IAmAAQAVAAALANQALAMAAAZIAAAHQAAAZgLAKQgLAMgVAAIgYAAIAABPgAgaACIAWAAQARgBAHgGQAHgKAAgVIAAgEQAAgOgDgJQgDgIgHgEQgHgEgLAAIgWAAg");
	this.shape_32.setTransform(-34.8,184);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgpBcIAAi3IAjAAQAXAAALALQALAMAAAWIAAAGQAAAJgCAIQgCAIgFAFQgFAGgIACQALACAHALQAGAMAAAQIAAAFQABAXgMAMQgMANgXAAgAgbBQIAVAAQANAAAHgFQAIgEADgJQADgJAAgMQAAgLgDgIQgDgJgHgFQgIgFgNAAIgVAAgAgbgHIAVAAQAMAAAHgEQAIgFACgHQADgJAAgKQAAgOgDgIQgEgIgHgDQgIgEgLAAIgUAAg");
	this.shape_33.setTransform(-46.2,184);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjBcIgKgqIgyAAIgBAEIgCALIgCAMIgDAKIgBAFIgNAAIAri3IAJAAIAsC3gAAXAmIgUhWIgDgRIgCARIgUBWIAFAAIAMAAIALAAIALAAIAGAAg");
	this.shape_34.setTransform(-62.2,184);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgoBcIAAi3IAmAAQAVAAALANQALAMAAAZIAAAHQAAAZgLAKQgLAMgVAAIgYAAIAABPgAgaACIAWAAQARgBAHgGQAHgKAAgVIAAgEQAAgOgDgJQgDgIgHgEQgHgEgLAAIgWAAg");
	this.shape_35.setTransform(-72.5,184);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAwByIAAgsIhfAAIAAAsIgNAAIAAg4IANAAQAHgPAEgPQAEgOADgPQACgRABgVIABgyIAAgYIBEAAIAACrIASAAIAAA4gAgMhKIgBAvQgBATgCAMQgCAOgFANIgKAbIA/AAIAAifIgqAAg");
	this.shape_36.setTransform(-85.2,186.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAeBcIAAiNIABgQIgFAOIg3CPIgNAAIAAi3IANAAIAACNIgBARIAFgQIA3iOIANAAIAAC3g");
	this.shape_37.setTransform(-97.9,184);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSBZQgKgEgGgLQgGgMgBgVIAAhRQABgVAGgMQAHgLAJgFQAKgEAIAAQAMAAAIAEQAKAFAFAKQAFALACASIgPAAQAAgKgCgJQgDgHgFgFQgHgFgKAAQgGAAgHAEQgGACgEAKQgEAJAAASIAABNQAAASAEAJQAEAKAHACQAGADAGABQAOgBAGgIQAIgJAAgVIAOAAQgBAZgLAMQgJANgVABIAAAAQgJAAgJgFg");
	this.shape_38.setTransform(-109.4,184);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghBVIAAipIBCAAIAAALIg2AAIAABEIAtAAIAAAJIgtAAIAABGIA3AAIAAALg");
	this.shape_39.setTransform(111.6,160.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAcBVIAAiCIABgPIgFANIgzCEIgMAAIAAipIALAAIAACCIAAAQIAFgPIAyiDIANAAIAACpg");
	this.shape_40.setTransform(100.7,160.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAbBVIAAhQIg1AAIAABQIgMAAIAAipIAMAAIAABPIA1AAIAAhPIAMAAIAACpg");
	this.shape_41.setTransform(89,160.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghBVIAAipIBDAAIAAALIg3AAIAABEIAtAAIAAAJIgtAAIAABGIA3AAIAAALg");
	this.shape_42.setTransform(79,160.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAlBVIAAieIglAAIgEBjIgDAVQgCAKgEAJQgFAJgHAFQgIAFgMAAIgDAAIAAgMIABAAQAQAAAHgOQAIgPAAgZIAEhnIA+AAIAACpg");
	this.shape_43.setTransform(67.2,160.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AglBVIAAipIBEAAIAAALIg4AAIAAA+IAYAAQATgBAKAMQAKAKAAAWIAAAHQABAXgKALQgLAMgTAAgAgZBKIAXAAQAPAAAHgJQAGgIAAgTIAAgEQAAgUgHgIQgHgGgOAAIgXAAg");
	this.shape_44.setTransform(57.5,160.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghBVIAAipIBCAAIAAALIg2AAIAABEIAtAAIAAAJIgtAAIAABGIA3AAIAAALg");
	this.shape_45.setTransform(47.6,160.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkBVIAAipIAjAAQASAAAKAMQAKAMAAAWIAAAHQAAAXgKAJQgKAMgSgBIgYAAIAABJgAgZABIAWAAQAPAAAGgGQAHgIAAgUIAAgEQAAgNgCgIQgDgHgHgEQgGgEgKAAIgWAAg");
	this.shape_46.setTransform(37.9,160.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFBVIAAieIggAAIAAgLIBLAAIAAALIggAAIAACeg");
	this.shape_47.setTransform(28,160.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgRBSQgJgDgGgLQgGgLAAgTIAAhLQAAgTAGgLQAGgKAJgEQAJgFAIAAQAJAAAJAFQAJAEAGAKQAGALAAATIAABLQAAATgGALQgGALgJADQgJAFgJAAQgIAAgJgFgAANBIQAGgCAEgJQADgIAAgRIAAhHQAAgRgDgIQgEgJgGgCQgGgDgHAAQgGAAgGADQgGACgEAJQgDAIAAARIAABHQAAARADAIQAEAJAGACQAGADAGAAQAHAAAGgDg");
	this.shape_48.setTransform(18.5,160.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAaBVIAAieIg0AAIAACeIgMAAIAAipIBNAAIAACpg");
	this.shape_49.setTransform(7.5,160.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgjBVIAAgLIAHAAQAGAAADgDQADgDADgJIAIgbIglh0IANAAIAbBUIACAOIADgOIAbhUIANAAIguCTIgDAIIgEAHQgDADgFACIgKACg");
	this.shape_50.setTransform(-2.8,160.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AghBVIAAipIBDAAIAAALIg3AAIAABEIAtAAIAAAJIgtAAIAABGIA3AAIAAALg");
	this.shape_51.setTransform(-15.8,160.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRBSQgJgDgGgLQgGgLAAgTIAAhLQAAgTAGgLQAGgKAJgEQAJgFAIAAQAJAAAJAFQAJAEAGAKQAGALAAATIAABLQAAATgGALQgGALgJADQgJAFgJAAQgIAAgJgFgAANBIQAGgCAEgJQADgIAAgRIAAhHQAAgRgDgIQgEgJgGgCQgGgDgHAAQgGAAgGADQgGACgEAJQgDAIAAARIAABHQAAARADAIQAEAJAGACQAGADAGAAQAHAAAGgDg");
	this.shape_52.setTransform(-26.2,160.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAbBVIAAhQIg1AAIAABQIgMAAIAAipIAMAAIAABPIA1AAIAAhPIAMAAIAACpg");
	this.shape_53.setTransform(-37.2,160.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkBVIAAipIAjAAQASAAAKAMQAKAMAAAWIAAAHQAAAXgKAJQgKAMgSgBIgYAAIAABJgAgZABIAWAAQAPAAAGgGQAHgIAAgUIAAgEQAAgNgCgIQgDgHgHgEQgGgEgKAAIgWAAg");
	this.shape_54.setTransform(-47.6,160.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AghBVIAAipIBCAAIAAALIg2AAIAABEIAtAAIAAAJIgtAAIAABGIA3AAIAAALg");
	this.shape_55.setTransform(-57.4,160.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAlBVIAAhxIABgWIgEAPIgdBfIgJAAIgdhfIgEgPIAAAWIAABxIgLAAIAAipIAMAAIAkB+IAlh+IAMAAIAACpg");
	this.shape_56.setTransform(-69.3,160.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbBMQgJgKgBgTIAAgEIANAAIAAAEQAAAPAHAHQAGAGALAAQANAAAGgIQAGgIAAgSIAAgHQAAgQgFgIQgGgHgOAAIgIAAIAAgJIAIAAQAMAAAGgHQAGgHAAgPIAAgJQAAgQgGgHQgGgIgMABQgKgBgGAHQgFAGAAANIAAAFIgNAAIAAgFQAAgNAFgIQAFgIAIgDQAIgFAIAAQARAAAKALQAJAKAAAWIAAAJQAAAMgEAIQgEAJgLAEQALABAFAIQAFAJAAAPIAAAJQAAAQgFALQgEAJgJAFQgJAFgLAAQgRgBgKgKg");
	this.shape_57.setTransform(-81,160.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghBVIAAipIBCAAIAAALIg2AAIAABEIAtAAIAAAJIgtAAIAABGIA3AAIAAALg");
	this.shape_58.setTransform(-89.8,160.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgkBVIAAipIAjAAQASAAAKAMQALAMgBAWIAAAHQABAXgLAJQgKAMgSgBIgYAAIAABJgAgZABIAWAAQAPAAAGgGQAIgIgBgUIAAgEQAAgNgCgIQgDgHgHgEQgGgEgKAAIgWAAg");
	this.shape_59.setTransform(-99.4,160.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAZBVIAAhKIgGACIgIACIgIAAQgTAAgLgKQgJgKgBgXIAAg4IANAAIAAA2QAAATAGAIQAIAHAOgBIANgBIAIgCIAAhUIANAAIAACpg");
	this.shape_60.setTransform(-110.7,160.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// warnBG
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AyuENIAAoaMAldAAAIAAIag");
	this.shape_61.setTransform(0,173);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(1));

	// logo12
	this.logo2 = new lib.logo();
	this.logo2.setTransform(61.6,-144.1);

	this.logo1 = new lib.logo();
	this.logo1.setTransform(-55.9,-144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo1},{t:this.logo2}]}).wait(1));

	// pl
	this.pl = new lib.pl();
	this.pl.setTransform(41.4,97,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.pl).wait(1));

	// pogoda
	this.pogoda = new lib.pogoda();
	this.pogoda.setTransform(4,57.6);

	this.timeline.addTween(cjs.Tween.get(this.pogoda).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(61.4,-65.6);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(53.4,-65.6);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(-27.6,-65.6);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// bt
	this.bt = new lib.bottle_1();
	this.bt.setTransform(130,-10,1,1,-20);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	// bt
	this.ap3 = new lib.ap1();
	this.ap3.setTransform(-100.9,-9,0.498,0.498,105);

	this.ap2 = new lib.ap2();
	this.ap2.setTransform(112,153,1,1,-38);

	this.ap1 = new lib.ap1();
	this.ap1.setTransform(47,-222,1,1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ap1},{t:this.ap2},{t:this.ap3}]}).wait(1));

	// bg_pattern
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#69D3B0","#BAD251"],[0,1],0,198,0,-198).s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-369.2,1535,756.6);


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