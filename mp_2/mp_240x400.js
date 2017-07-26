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
		{src:"images/city.jpg", id:"city"},
		{src:"images/money.png", id:"money"},
		{src:"images/pack20.png", id:"pack20"},
		{src:"images/pack28.png", id:"pack28"},
		{src:"images/terms.png", id:"terms"}
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



(lib.city = function() {
	this.initialize(img.city);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,711,400);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,144);


(lib.pack20 = function() {
	this.initialize(img.pack20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,180);


(lib.pack28 = function() {
	this.initialize(img.pack28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,192);


(lib.terms = function() {
	this.initialize(img.terms);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,32);


(lib.Symbol154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAyIgDAAIgOAAIgBhgIAZAAIAAAlQAMACAGAEQAGADAEAEQADAFACAEIABAJQAAAFgDAFQgDAFgFAEQgFAFgHACQgHACgIAAIgDAAgAgSAhIAIgCQAEgBADgDIACgCIABgDIAAgFQgBgDgEgDQgEgDgJgBgAAVAyIAAhjIAXAAIAABjg");
	this.shape.setTransform(43.4,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABA2QgGAAgHgDIgNgHQgGgEgDgGIAQgLIAFAGIAHAEIAHABQAFAAACgCIAGgGQACgDAAgCQAAgDgEgEQgDgDgEgDQgFgCgFgBIAAgRQAFAAAEgCIAGgEIABgCIABgCIgBgFIgDgEQgDgCgFAAQgEAAgDACQgDADgBAEIgSgIQAEgLAIgFQAIgFAJAAQALABAGAEQAHAEADAGQAEAHABAIQAAAFgCAFQgCAEgEAEIgBACIgCABQAGADAEAGQAEAHAAAHQAAAHgFAHQgEAIgHAGQgIAEgJABIgBAAg");
	this.shape_1.setTransform(34.7,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASA7IAAg+IgdA5IgBAAIgVAAIABhwIAQAAIAABDIAgg+IARAAIABBwg");
	this.shape_2.setTransform(27.1,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA3IAAhQIAAgdIAPAAIAOACQAHABAHAEQAGADAFAHQAEAGABAKQAAAHgCAGQgCAGgFADQgFAFgHADIgMADIAAArgAgDgDIAGgCQAEgBADgDIADgFIABgGQgBgHgFgEQgEgEgHgBg");
	this.shape_3.setTransform(19.8,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcA7IAAh1IA5gBIAAB2IgSAAIAAheIgPAAIAABfg");
	this.shape_4.setTransform(12.9,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDA7IgXAAIAAgZIAAgiIAAgTIAAgTIAAgUIAXAAIAeAAIAAAUIgeAAIAAATIASAAIAAATIgSAAIAAAiIAeAAIAAAZg");
	this.shape_5.setTransform(2.4,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA7IAAg+IgdA5IgBAAIgVAAIABhwIAQAAIAABDIAgg+IARAAIABBwg");
	this.shape_6.setTransform(-4.6,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbA7IADh1IA0AAIAAAXIgdAAIgCBeg");
	this.shape_7.setTransform(-11.7,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAwIAPgpIgRg2IAPAAIAMAmIALgmIAZAAIgkBfg");
	this.shape_8.setTransform(-18.2,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA3IAAhQIAAgdIAPAAIAOACQAHABAHAEQAGADAFAHQAEAGABAKQAAAHgCAGQgCAGgFADQgFAFgHADIgMADIAAArgAgDgDIAGgCQAEgBADgDIADgFIABgGQgBgHgFgEQgEgEgHgBg");
	this.shape_9.setTransform(-24.9,21.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVBEIAAgSIgpAAIAAASIgRAAIAAgsIALAAIACgSIABgTIABgUIAAgQIAAgLIABgHIAyABIABBaIAIAAIAAAsgAAEAYIgBhBIgIAAIgBAkIgDAdIANAAg");
	this.shape_10.setTransform(-32.3,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASA7IAAg+IgeA5IAAAAIgVAAIABhwIAQAAIAABDIAhg+IAQAAIABBwg");
	this.shape_11.setTransform(-44.2,21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNBLIgUgBIACh0IARAAIgBBCIAbhAIAWAAIABBxIgSAAIAAhGIgdBIgAgOg4QgFgFgBgKIAOAAIABADIACACQACACACAAIABgCIACgCIABgGIAPAAQAAAHgCAGQgDAFgFADQgEADgFABQgIAAgHgHg");
	this.shape_12.setTransform(79.9,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDA8IgXAAIAAgaIAAgiIAAgTIAAgSIAAgVIAXAAIAeAAIAAAVIgeAAIAAASIASAAIAAATIgSAAIAAAiIAeAAIAAAag");
	this.shape_13.setTransform(72.9,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggArIACAAIADgBQAEgFACgIIADgUIABgUIAAgXIgBgSIgBgGIAzgBIAAB1IgaAAIAAhaIgHAAQABASgBAQQAAARgEANQgDANgHAIQgEAEgEACQgDABgFAAg");
	this.shape_14.setTransform(66,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAvIgGAAIgNAAIgBhdIAwAAIAAASIgYAAIABARQAKABAHADQAHAEAEADQADAFABAFIACAJQAAAFgDAFQgDAGgFADQgGAFgHACQgGACgIAAgAgEAdIAGgBIAHgDIACgDIABgDIgBgFQAAgDgEgDQgEgDgHgBg");
	this.shape_15.setTransform(59.3,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAvIAPgoIgRg1IAPAAIAMAlIALglIAZAAIgkBdg");
	this.shape_16.setTransform(52.5,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdA3IAAhQIAAgdIAPAAIAOACQAHABAHAEQAGADAFAHQAEAGABAKQAAAHgCAGQgCAGgFADQgFAFgHADIgMADIAAArgAgDgDIAGgCQAEgBADgDIADgFIABgGQgBgHgFgEQgEgEgHgBg");
	this.shape_17.setTransform(45.8,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOA9QgFgDgEgFQgDgFgCgHIgCgKIgBgKIgBgKIAAgJQAAgfAJgRQAKgRASAAQAFAAAEACQAFACADAFQAHAJACAOQADAQgBASQgCATgEAOQgEANgHAIQgIAHgIABQgIgBgGgDgAAAgtIgBABIgDADQgCADgCAFQgCAGgBAJIgBAUIABAaQABAJABADQACAFACABIAEABQADAAACgFQADgEACgIIACgOIABgOIABgXQgBgKgCgGQgBgGgCgCIgBgBIAAAAIgCAAIgBAAIgCAAIgBABg");
	this.shape_18.setTransform(34.5,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOA9QgFgDgEgFQgDgFgCgHIgCgKIgBgKIgBgKIAAgJQAAgfAJgRQAKgRASAAQAFAAAEACQAFACADAFQAHAJACAOQADAQgBASQgCATgEAOQgEANgHAIQgIAHgIABQgIgBgGgDgAAAgtIgBABIgDADQgCADgCAFQgCAGgBAJIgBAUIABAaQABAJABADQACAFACABIAEABQADAAACgFQADgEACgIIACgOIABgOIABgXQgBgKgCgGQgBgGgCgCIgBgBIAAAAIgCAAIgBAAIgCAAIgBABg");
	this.shape_19.setTransform(26.9,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOA9QgFgDgEgFQgDgFgCgHIgCgKIgBgKIgBgKIAAgJQAAgfAJgRQAKgRASAAQAFAAAEACQAFACADAFQAHAJACAOQADAQgBASQgCATgEAOQgEANgHAIQgIAHgIABQgIgBgGgDgAAAgtIgBABIgDADQgCADgCAFQgCAGgBAJIgBAUIABAaQABAJABADQACAFACABIAEABQADAAACgFQADgEACgIIACgOIABgOIABgXQgBgKgCgGQgBgGgCgCIgBgBIAAAAIgCAAIgBAAIgCAAIgBABg");
	this.shape_20.setTransform(19.3,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOA9QgFgDgEgFQgDgFgCgHIgCgKIgBgKIgBgKIAAgJQAAgfAJgRQAKgRASAAQAFAAAEACQAFACADAFQAHAJACAOQADAQgBASQgCATgEAOQgEANgHAIQgIAHgIABQgIgBgGgDgAAAgtIgBABIgDADQgCADgCAFQgCAGgBAJIgBAUIABAaQABAJABADQACAFACABIAEABQADAAACgFQADgEACgIIACgOIABgOIABgXQgBgKgCgGQgBgGgCgCIgBgBIAAAAIgCAAIgBAAIgCAAIgBABg");
	this.shape_21.setTransform(7.6,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAwIAFgNIAGgMIAEgMIADgLQAEgLACgIQABgJAAgGQgBgFgCgDIAAAAIgBAAIgDAAIAAADQgBAEAAAFQAAAGABAIIgOAKQgFgKAAgLQgCgLAFgKQAEgGAFgDQAFgEAFAAQAFAAAEACQAFADACAEQAEAGACAJQABAJgCALQgCALgEAKIgGAOIgEAMIgGAMIACAAIAKAAIAKgBIACASIgLABIgJAAIgHABIgIAAIgQABg");
	this.shape_22.setTransform(0.8,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDA8IgXAAIAAgaIAAgiIAAgTIAAgSIAAgVIAXAAIAeAAIAAAVIgeAAIAAASIASAAIAAATIgSAAIAAAiIAeAAIAAAag");
	this.shape_23.setTransform(-9.2,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIA1IAAhRIgVAAIAAgYIA7AAIAAAYIgTAAIAABRg");
	this.shape_24.setTransform(-15.6,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMBLIgWgBIADh0IASAAIgCBCIAchAIAVAAIAABxIgRAAIgBhGIgcBIgAgNg4QgHgFAAgKIAOAAIABADIACACQACACACAAIACgCIACgCIABgGIAOAAQAAAHgDAGQgCAFgFADQgEADgFABQgIAAgGgHg");
	this.shape_25.setTransform(-22.7,-0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghA7IAYh1IAaABIARBzIgTABIgEgbIgQABIgGAbgAgDAIIAMgBIgGgrg");
	this.shape_26.setTransform(-30.4,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdA3IAAhQIAAgdIAPAAIAOACQAHABAHAEQAGADAFAHQAEAGABAKQAAAHgCAGQgCAGgFADQgFAFgHADIgMADIAAArgAgDgDIAGgCQAEgBADgDIADgFIABgGQgBgHgFgEQgEgEgHgBg");
	this.shape_27.setTransform(-37.4,1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbA7IADh1IA0AAIAAAXIgdAAIgCBfg");
	this.shape_28.setTransform(-43.9,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASA8IAAg/IgdA5IgBAAIgVAAIABhwIAQAAIAABDIAgg+IARAAIABBxg");
	this.shape_29.setTransform(-51,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAyIgDAAIgOAAIgBhgIAZAAIAAAlQAMACAGAEQAGADAEAEQADAFACAEIABAJQAAAFgDAFQgDAFgFAEQgFAFgHACQgHACgIAAIgDAAgAgSAhIAIgCQAEgBADgDIACgCIABgDIAAgFQgBgDgEgDQgEgDgJgBgAAVAyIAAhjIAXAAIAABjg");
	this.shape_30.setTransform(-59.9,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAA8IgLAAIgTAAIABh1IAJgBIAIAAIADAAQAJAAAHADQAHAFADAHQADAGAAAIQAAAFgBAEIgEAHIgFAGIALAGQAFACACAGQADAFAAAJQAAAKgDAKQgDAIgGAFQgGAFgJABIgEAAgAgMAqIAEAAIAEAAIACAAQAFgBAEgCQAEgDACgEQACgEAAgFQgBgFgCgEIgHgGQgEgCgBAAIgCAAIgEAAIgFAAgAgPgRIAEAAIACAAQAEAAADgCQACgCACgEIACgHQAAgDgCgCQgCgDgCgBIgFgBIgCAAIgGAAg");
	this.shape_31.setTransform(-68.3,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AASA8IAAg/IgdA5IgBAAIgVAAIABhwIAQAAIAABDIAgg+IARAAIABBxg");
	this.shape_32.setTransform(-79.8,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZAyIgDAAIgOAAIgBhgIAZAAIAAAlQAMACAGAEQAGADAEAEQADAFACAEIABAJQAAAFgDAFQgDAFgFAEQgFAFgHACQgHACgIAAIgDAAgAgSAhIAIgCQAEgBADgDIACgCIABgDIAAgFQgBgDgEgDQgEgDgJgBgAAVAyIAAhjIAXAAIAABjg");
	this.shape_33.setTransform(65.9,-19.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAVBEIAAgSIgpAAIAAASIgRAAIAAgsIALAAIACgSIABgTIABgUIAAgQIAAgLIABgHIAyABIABBaIAIAAIAAAsgAAEAYIgBhBIgIAAIgBAkIgDAdIANAAg");
	this.shape_34.setTransform(57.1,-18);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAvQgGgFgCgIQgDgIAAgIIgBgQQAAgaAJgOQAJgNAQAAQAEAAAEACIAHAEQAGAIADAMQACAMgBAQQgDAYgIAMQgIANgLAAQgLAAgGgFgAAAgdQgCABgDADQgDADgBAGQgCAHgBAJQAAAMACAGQABAFACACQADADAEAAQACAAADgEQADgCABgEIADgKIABgIQACgLgCgHQgCgIgDgCIgBgBIgCAAIgCAAIgDAAg");
	this.shape_35.setTransform(49.7,-18.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggA8IAAh3IAVAAIAAAiIATgVIAZAAIgfAhIAbBHIgUABIgUg7IAAABIAAA7g");
	this.shape_36.setTransform(43.1,-18.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDA8IgXAAIAAgZIAAgjIAAgSIAAgTIAAgWIAXAAIAeAAIAAAWIgeAAIAAATIASAAIAAASIgSAAIAAAjIAeAAIAAAZg");
	this.shape_37.setTransform(32.2,-18.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgIA1IgBhRIgUAAIAAgYIA7AAIAAAYIgTAAIAABRg");
	this.shape_38.setTransform(25.8,-19);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNBLIgUgBIACh1IASAAIgBBDIAahAIAWAAIABBwIgSAAIAAhFIgdBIgAgNg4QgGgFgBgKIAPAAIAAADIACADQACABACAAIABgBIACgDIABgGIAPAAQAAAHgCAFQgEAGgDADQgFAEgFAAQgIgBgGgGg");
	this.shape_39.setTransform(18.6,-20.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdAvIAPgnIgRg2IAPAAIALAmIAMgmIAZAAIglBdg");
	this.shape_40.setTransform(11.4,-19);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdA3IAAhQIAAgdIAPAAIAOACQAHABAHAEQAGADAFAHQAEAGABAKQAAAHgCAGQgCAGgFADQgFAFgHADIgMADIAAArgAgDgDIAGgCQAEgBADgDIADgFIABgGQgBgHgFgEQgEgEgHgBg");
	this.shape_41.setTransform(4.7,-18.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AATA8IgBg/IgeA5IAAAAIgVAAIABhxIAQABIABBDIAfg+IARAAIABBxg");
	this.shape_42.setTransform(-2.6,-18.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgdA3IAAhQIAAgdIAPAAIAOACQAHABAHAEQAGADAFAHQAEAGABAKQAAAHgCAGQgCAGgFADQgFAFgHADIgMADIAAArgAgDgDIAGgCQAEgBADgDIADgFIABgGQgBgHgFgEQgEgEgHgBg");
	this.shape_43.setTransform(-10,-18.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIA1IAAhRIgVAAIAAgYIA7AAIAAAYIgTAAIAABRg");
	this.shape_44.setTransform(-16.6,-19);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAFA3QgHgBgIgDQgIgEgGgIQgHgHgDgLQgEgMAAgNQAAgNADgKQAFgJAGgHQAGgGAHgCQAHgDAGAAQAOABAJAGQAKAHAEAMIgWAHIgCgFIgEgDQgEgCgGAAQgFAAgEAEQgEADgBAGQgDAGAAAIQAAAMAEAIQADAJAGADQADAEAGAAIAGAAQAAAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAEgFIAAgBIACgBIARAOIgBABIAAABIgGAHQgEAEgFACQgGADgJAAIgCAAg");
	this.shape_45.setTransform(-24.1,-19);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AASA8IAAg/IgdA5IgBAAIgVAAIABhxIAQABIAABDIAgg+IARAAIABBxg");
	this.shape_46.setTransform(-32.2,-18.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgbA7IADh2IA0AAIAAAYIgdAAIgCBfg");
	this.shape_47.setTransform(-39.2,-18.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDA8IgXAAIAAgZIAAgjIAAgSIAAgTIAAgWIAXAAIAeAAIAAAWIgeAAIAAATIASAAIAAASIgSAAIAAAjIAeAAIAAAZg");
	this.shape_48.setTransform(-45.5,-18.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgdA3IAAhQIAAgdIAPAAIAOACQAHABAHAEQAGADAFAHQAEAGABAKQAAAHgCAGQgCAGgFADQgFAFgHADIgMADIAAArgAgDgDIAGgCQAEgBADgDIADgFIABgGQgBgHgFgEQgEgEgHgBg");
	this.shape_49.setTransform(-52,-18.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AghA7IAYh2IAaABIARBzIgTACIgEgbIgQABIgGAbgAgDAIIAMgBIgGgqg");
	this.shape_50.setTransform(-59.2,-18.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAAA9IgBAAQgFAAgFgCQgGgCgGgFQgGgFgFgJIAQgKQAFAHADACQADADADABIAEAAQACAAADgDIAHgHQADgEgBgEQAAgDgCgDQgDgDgFgDQgEgCgFgBIAAgRQAFAAADgDQAGgCADgEIADgDIAAgDIgBgHQgBgEgDgCQgEgDgEAAIgEABIgEACQgDACgCAFIgSgHQAEgLAJgGQAIgGAKAAQAKAAAIAGQAGAFAFAHQAEAIABAJQgBAFgCAGQgCAFgEAFIgDACIgDACQAGAEADAGQAEAGAAAHQAAAGgDAHQgCAGgGAGQgEAFgHAEQgGADgGABIAAAAg");
	this.shape_51.setTransform(-67,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-31,171.9,62);


(lib.Symbol153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQACIguhYIAfgSIAfBCIAgg+IAeAQIgtBVIADBmIghABg");
	this.shape.setTransform(53,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABkIgUAAIggAAIACjFIAQgBIANAAIAEAAQASgBALAIQAMAHAEALQAGAMAAAMQAAAIgCAGQgDAHgEAFIgJALQAKAFAIAGQAJAEAEAJQAFAJAAAPQAAARgFAPQgFAOgKAJQgKAJgPAAgAgVBFIAHAAIAGAAIADAAQAKAAAGgEQAHgEAEgHQADgHAAgIQAAgJgGgGQgEgGgHgEQgFgDgEAAIgCAAIgIAAIgJAAgAgahGIgBApIAIAAIADAAQAHAAAGgEQADgEAEgFQADgGAAgGQAAgGgEgEQgDgDgEgCIgIgBIgFAAIgJAAg");
	this.shape_1.setTransform(40.6,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAOQgEgDgCgEIgDgHQABgFAEgFQAFgFAGAAQAGgBAGAFQAEAFABAGQgBAHgEAFQgFAFgHAAQgDAAgEgDg");
	this.shape_2.setTransform(32.4,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBhIAAgkIA0h/IgwAAIgCggIBhAAIAAAjIgyB/IAwAAIAAAjg");
	this.shape_3.setTransform(24.6,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBPQgKgJgEgNQgFgMgBgPIAAgbQAAgsAPgWQAOgXAcAAQAHAAAHADQAGADAFAFQAKAMAFAVQAEAUgDAaQgDAqgOAUQgNAVgVAAQgRAAgKgIgAAAgxQgEABgFAFQgFAFgDALQgDAKAAASQAAATACAKQACAKAEAEQAEADAHgBQAFAAAEgEQAFgFADgIQADgGABgIIACgPQACgTgDgMQgDgMgEgFIgDgBIgCgBIgJABg");
	this.shape_4.setTransform(13.4,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBWIACirQAagBATADQARADALAJQAIAGAEAHQAEAIAAAJIgBALQgBAHgEAHQgDAIgGAFQgGAEgJADIAqBRIggAAIghhAIAABBgAgNgKQANgCAGgEQAIgEACgGQAEgFgBgHIgBgGIgDgGQgDgGgGgCQgFgDgEAAIgJgCg");
	this.shape_5.setTransform(2.3,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBPQgKgJgEgNQgFgMgBgPIAAgbQAAgsAPgWQAOgXAcAAQAHAAAHADQAGADAFAFQAKAMAFAVQAEAUgDAaQgDAqgOAUQgNAVgVAAQgRAAgKgIgAAAgxQgEABgFAFQgFAFgDALQgDAKAAASQAAATACAKQACAKAEAEQAEADAHgBQAFAAAEgEQAFgFADgIQADgGABgIIACgPQACgTgDgMQgDgMgEgFIgDgBIgCgBIgJABg");
	this.shape_6.setTransform(-9.3,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BjIAAjGIAcABIAfBeIAehdIAcgBIAIDCIgdABIgEh0IgbA/IgPAAIgVgvIAABmg");
	this.shape_7.setTransform(-21.9,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4BiIAojFIAtACIAcDBIggACIgGgtIgdABIgJAtgAgGAOIAVgCIgKhIg");
	this.shape_8.setTransform(-42.1,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBjIADjGIAhABIgBBIIAbAAIAAg9IAhAAIAAC4IghAAIAAhPIgcAAIAABSg");
	this.shape_9.setTransform(-53.9,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBkIAAhqIgzBhIgBAAIgjgBIACi8IAaABIABBxIA3hpIAcAAIABC9g");
	this.shape_10.setTransform(58.4,-14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBZIgBiKIgiAAIAAgnIBlAAIAAAnIghAAIABCKg");
	this.shape_11.setTransform(46.3,-14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIBcQgMgBgNgGQgNgHgLgMQgLgNgGgSQgGgTAAgXQAAgWAGgQQAGgRALgLQAKgJAMgEQALgFAMABQAYABAPAKQAQALAGAUIgkAMIgDgIQgCgDgFgDQgGgCgLgBQgJAAgIAHQgGAGgDAKQgDAJAAAOQAAAUAGAOQAGAOAJAHQAGAGAJAAQAHABAEgBQADgBADgDIAGgHIABgCIABgCIAeAXIgBACIgBABQgEAGgGAGQgGAGgKAEQgJAFgPAAIgEAAg");
	this.shape_12.setTransform(33.8,-14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdBOQgKgHgEgNQgFgNgBgOIAAgbQAAgtAOgXQAPgWAcAAQAHAAAHADQAGADAFAGQAKALAFAUQAEAVgDAbQgDAogOAWQgNAUgVAAQgRAAgKgJgAAAgwQgEABgFAEQgFAFgDAKQgDAMgBAQQAAAVACAJQACAKAFADQAEAEAHAAQAFgBAEgFQAFgEADgHQADgHABgJIACgOQACgTgDgMQgDgMgEgEIgDgCIgCAAIgJABg");
	this.shape_13.setTransform(21.2,-14.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBjIADjGIAhAAIgBBJIAbAAIAAg9IAhAAIAAC4IghAAIAAhPIgbAAIgBBSg");
	this.shape_14.setTransform(10,-14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBPIgJAAIgWAAIgBidIBRAAIAAAdIgoAAIAAAcQASADAMAGQAMAHAGAGQAGAIACAIQACAJAAAFQAAAKgFAIQgEAJgJAGQgKAIgNAEQgLADgNAAgAgHAxIALgCQAGgCAFgFIAEgDQACgDAAgDQAAgCgBgGQgCgFgGgFQgHgEgNgDg");
	this.shape_15.setTransform(-1,-14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdBOQgKgHgEgNQgFgNgBgOIAAgbQAAgtAOgXQAPgWAcAAQAHAAAHADQAGADAFAGQAKALAFAUQAEAVgDAbQgDAogOAWQgNAUgVAAQgRAAgKgJgAAAgwQgEABgFAEQgFAFgDAKQgDAMgBAQQAAAVACAJQACAKAFADQAEAEAHAAQAFgBAEgFQAFgEADgHQADgHABgJIACgOQACgTgDgMQgDgMgEgEIgDgCIgCAAIgJABg");
	this.shape_16.setTransform(-12.4,-14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBdIAAiHIAAgyIAYABQANABAMACQAMACALAHQALAFAHALQAHALACAQQABAMgEAKQgEAKgIAHQgJAHgMAFQgLAEgKACIAABIgAgHgFQAHgCAFgCQAHgCAEgEQAEgEABgEQACgGAAgFQgBgMgIgGQgIgHgNgCg");
	this.shape_17.setTransform(-23.4,-13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAjByIAAgeIhFAAIAAAeIgcAAIAAhJIASAAIADgfIACggIABgiIABgcIAAgRIAAgMIBVABIADCZIAMAAIAABJgAAHApIgChuIgPAAIgCA8IgEAyIAXAAg");
	this.shape_18.setTransform(-35.8,-12.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdBOQgKgHgEgNQgFgNgBgOIAAgbQAAgtAOgXQAPgWAcAAQAHAAAHADQAGADAFAGQAKALAFAUQAEAVgDAbQgDAogOAWQgNAUgVAAQgRAAgKgJgAAAgwQgEABgFAEQgFAFgDAKQgDAMgBAQQAAAVACAJQACAKAFADQAEAEAHAAQAFgBAEgFQAFgEADgHQADgHABgJIACgOQACgTgDgMQgDgMgEgEIgDgCIgCAAIgJABg");
	this.shape_19.setTransform(-48,-14.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBjIAAjGIBhAAIAADGIgfAAIAAieIgbAAIABCeg");
	this.shape_20.setTransform(-59.3,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-33,134,66);


(lib.Symbol150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money();
	this.instance.setTransform(-89,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-72,178,144);


(lib.Symbol145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB00").s().p("AgnAmQgPgPAAgXQAAgWAPgSQAQgPAXABQAXgBAPAPQASASgBAWQABAXgSAPQgPASgXgBQgXABgQgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.2,11.2);


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CC444").s().p("AizC9QgMgDgGgLQgDgFAAgGQAAgKAHgHQAHgHAKAAIABAAQAPAAAGANQAIAMgIANQgGAKgNABgAFKChQgIgNAIgOIAEgFIAHgEIAFgBIAFgBQANAAAIALQAFAJgCAJQgBAKgIAFQgFAEgGABIgGAAQgLAAgIgLgAiRCCIhVgsQgRAVgdAEQgdAEgWgPQgTAWgdAGQgeAHgagNQgKgEgTgNQgRgJgOAAQgMAAgPAIIgaAPQgZAPgbABQgdACgWgOQgXgPgFgeQgFgeAUgSQgSgHgGgVQgGgSAKgRQAJgRASgJQASgJAUABQANgoAOgQQALgMAPgGQAPgGAPAEQATALAKAAQAJAAAJgHIAPgMQAOgKARgCQARgCAOAIQAOAIAFARQAFASgKANQAVgSAcgCQAdgCAWAPQgKgRANgUQAOgTAVAAQATgBARAPQAQANAIAUQAUgLAXAMQAXAMADAXQABgOAKgLQgNgLAIgTQAHgSARgEQAZgGAnAYQAQgSAYgBQAbAAARARQALAPAIAFQAbAUAxgiQAWgQAPgGQAWgIAQAIQASgWAdgGQAegFAZANIAOAJQAJAFAHABQALABAWgFQATgCAQAMQARANADASQBIggAgAcIAMAOQAHAJAGADQAMAJAdgCQAfgBAMAFQASAHAIAWQAIASgBAXQgBAlgVAgQgWAigjAIQgYAFgwgKQgwgKgYAFIgJADIgBADQgEAJgHAEQgJAGgQgDIgNgDQgJABgIgBQgNgCgggSQgbgQgRAFQgIACgJAHIgQAMQgqAchIgTIg5gQQghgJgZABQAHAIgIALQgIAKgMACIgVABQgOgBgIAEQgIAEgKAMQgMANgFAEQgLAHgPAAQgXAAgigRgAEJCFQgHgEgDgHIgCgGQgBgLAHgJQAGgJAMABIABAAQALAAAHAIQAHAJgBALIgCAFIgEAIQgFAFgKACIgDAAQgHAAgGgDgAA0CIIgHgDQgGgEgDgFIgCgGQgCgGACgGQAAgDADgEQACgEADgCQAFgFALAAQAIABAEACQAEACADAEQADADAAACQAEAJgDAJQgCAHgGAEQgHAFgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-18.9,137.5,37.8);


(lib.Symbol143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35A142").s().p("AhNDQIg3gNQgigIgUgEQgdgEgqgBIhFgDQhXgDgygbQg8ghgHhNQgEgzAHgtQAGgYACgIQAFgKANgSQAYgdAugEQARgCAXABIAoACQA5ACA3gPIA5gSQAjgKAXgDQAbgDAmAFQApAGAXgCQASgBAbgGIAtgJQBCgMBzAFQA8AEAjAHQA1AKAkAWQAqAaAOAVQAUAdgNAjQgDAIADAOQAGAQgBAHQgCAPACAUIAEAkQACAVgDANQgDARgMAKQgUAUgnAPQhSAhhnAQQhRAMhuADIgoABQhHAAgvgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-21.7,106.6,43.4);


(lib.Symbol142copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC5C5B").s().p("AgJAVQgFgJAAgMQAAgLAFgKQAFgJAEABQAGgBAEAJQAFAKAAALQAAAMgFAJQgEAKgGgBQgEABgFgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-3.1,3,6.2);


(lib.Symbol142copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgNANQgGgFABgIQgBgHAGgGQAGgGAHABQAIgBAFAGQAHAGAAAHQAAAIgHAFQgFAHgIAAQgHAAgGgHg");
	this.shape.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,4,4);


(lib.Symbol142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F15200").s().p("AgNANQgGgFABgIQgBgHAGgGQAGgGAHABQAIgBAFAGQAHAGAAAHQAAAIgHAFQgFAHgIAAQgHAAgGgHg");
	this.shape.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,4,4);


(lib.Symbol141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#208D18").s().p("AgIAKQgPgOgIgmQAbAUANARQATAWAEAaQgXgMgRgVg");
	this.shape.setTransform(-3.2,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-8.7,6.5,8.8);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.427)","rgba(255,255,255,0)"],[0,1],-17.1,-9.5,17.2,9.7).s().p("AjYhMIAmhDIGLDbIgmBEg");
	this.shape.setTransform(-17.4,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBTQhEgDg2gmIAlhAQAnAWA4ABQBeAGBMg/QAOgMANgOQgNAegPAZQhCBuhoAAIgJAAg");
	this.shape_1.setTransform(-43,-29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2A160E","#5D3017"],[0,1],19.1,33.4,-40.1,-10.2).s().p("ADsELQAVhVgeg6Qgag0hOgxQgrgZiKhFQiKhFheg4QAOgYANgfQgNAOgNAMQAOgZADgRIH7EVQAYAVARAiQAhBGglBHIgFAIIgIAQIgJATQgFAJgJAKg");
	this.shape_2.setTransform(-0.1,-12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#472016","#85472A"],[0,1],39.4,27,-33.8,-26.9).s().p("ADdFGQgzgIgngVInlkNQgvgfgWg5QgZhBAZg7QAUgtAkglQBzAtBhgxQAxgYAZgiQgCARgPAZQhMBBhggGQg4gDgngWIglBCQA2AmBEADQBwAFBFh1QBeA4CIBEQCMBGArAbQBOAvAbAzQAeA7gVBVIgLASIgUAfQgMAQgGAHQgtAzhKAAQgTAAgUgDg");
	this.shape_3.setTransform(-19.2,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBA575").s().p("AjTg5IAVgfIALgSIAAAAQAJgKAEgIIAKgUIFwDHIgxBag");
	this.shape_4.setTransform(41.7,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-39.4,125.8,78.9);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pack20();
	this.instance.setTransform(-50,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-90,100,180);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pack28();
	this.instance.setTransform(-42,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-96,85,192);


(lib.Symbol116 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.terms();
	this.instance.setTransform(-118,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.592)","rgba(0,0,0,0)"],[0,1],0,19.9,0,-19.9).s().p("AyuDMIAAmXMAldAAAIAAGXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-20.4,240,40.8);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0055A3","#2A89E0"],[0,1],0,137.2,0,-137.2).s().p("ApUU/QmzhIlhi1Qhsg3hlhlQhOhNhdh8QkZl2C8puQAkh3BFiSQAYg0BpjMQBQidArhAQBIhqBkhKQB0hXCSgzQCNgxCXgLQDsgSHrAUQCIAGD8gBQD3gBB3AFQGZASE6CIQBgApBMA4QBOA6BABOQA9BJApBrQAcBIAgCBQAqCrgYDOQgTCnhCDMQg9C+giBQQg3CChWBzQh9Cog9BGQhrB8huBUQi9CQkLBGQjcA5kgAMQhnAEhjAAQlQAAkmgxg");
	this.shape.setTransform(-3.3,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApDWMQnZhZloi5Qh3g8iWh9QiZh/hOhoQiajNgWkRQgVjyBUkUQAhhsBciZQCFjaAQggQBDiFBgh7QBqiJBqhPQBwhTC+g7QCtg2CfgMQDSgPCKgHQDagLCDAGIGOAOQDsAICbAKQG3AfFTBZQGkBvB+H4QAoCjgXEKQgPCqgxEDQhCFdi5EZQimD7jyCqQjCCIk7BOQkLBDkgALQhNADhNAAQloAAlrhDg");
	this.shape_1.setTransform(-3.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,84,164,0.2)").s().p("AoJT+QmqhQlEimQhrg3iHhwQiJhyhHheQiKi5gUj1QgTjaBMj4QAdhiBTiJQB4jFAOgcQA9h4BWhvQBfh7BghHQBlhLCrg1QCbgxCQgKQC9gOB8gGQDEgKB1AFIFnANQDUAHCLAKQGLAbExBRQF7BkBxHFQAkCSgUDwQgOCZgsDpQg7E6inD9QiWDijaCZQiuB6kbBHQjwA7kEALQhGADhGAAQlDAAlGg9g");
	this.shape_2.setTransform(39.7,26.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.8,-156.8,441.1,317.1);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.city();
	this.instance.setTransform(-355.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.5,-200,711,400);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#386491").s().rc(-7.75,-12.4,15.5,24.8,0,0,7.75,7.75);
	this.shape.setTransform(0,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F5766").s().rc(-8.5,-12.4,17,24.8,0,0,8.5,8.5);
	this.shape_1.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-13,17,26);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A67B64").s().rr(-93,-1.5,186,3,1.5);
	this.shape.setTransform(0,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#693A2E").s().rr(-94,-1.9,188,3.8,1.9);
	this.shape_1.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-2.5,188,5);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(174,149,122,0.592)","rgba(174,149,122,0)"],[0,1],0,-21,0,21).s().p("AtaDXIA7mtIY/AAIA7Gtg");
	this.shape.setTransform(0,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-11.3,172,43.1);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAD3BC").s().p("AuWBxIAAguIB3izIY/AAIB3CzIAAAug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-11.3,184,22.7);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgEKQgagPgKgmQgMgvAeguQAig2BFgEQgxAPgiAwQgtA+AzA6QAgAkAugQQAtgPAag3QATgnAKgeQAMglAFgoQAFgvgJhHQgJhOgRgdIgSglQgIgSgFgFQgNgRgMgEQgQgHgTALQghARAOAYQAGAMgKAFQgKAFgFgJQgMgWAIgQQAGgPAYgMQAlgVAcAOQAiARAcBJQBEC1hACbQgVA0gmAjQgmAigmACIgIAAQglAAgVgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-27.8,27.4,55.7);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuCAgIAAg/IcFAAIAAA/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-3.2,180,6.5);


(lib.Symbol99copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#919E73").s().p("Ai8RKMAAAgiTIF5AAMgBBAiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-109.8,37.8,219.7);


(lib.Symbol99copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA6586").s().p("Ai8RKMAAAgiTIF5AAMgBBAiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-109.8,37.8,219.7);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7796A5").s().p("Ai8RKMAAAgiTIF5AAMgBBAiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-109.8,37.8,219.7);


(lib.Symbol98copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE957A").s().p("AndAiIAAhDIO7AAIAABDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-3.4,95.7,6.8);


(lib.Symbol98copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3C50").s().p("AndAiIAAhDIO7AAIAABDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-3.4,95.7,6.8);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AndAiIAAhDIO7AAIAABDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-3.4,95.7,6.8);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8DFF4").s().p("AhdDVQgpgugdhLQg5iUA6iPQAtgRA/gDQB8gHBbBGQASAyAJBCQASCCguBSQghASgxAOQg7ARgwAAQgiAAgegIg");
	this.shape.setTransform(19.2,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.6,44.2);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7CRIA7k2IA8gJIhlFdg");
	this.shape.setTransform(6,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,35.1);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmjYIAYAIIhzGpIgIAAg");
	this.shape.setTransform(6.3,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.5,43.6);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8DFF4").s().p("AAFDYQglgRgrgyQhYhkgYihQAXgiAsgdQBYg6BoAWQAfAnAeA/QA8B9gFB8QgWAWghAVQg5AjgzAAIgUgCg");
	this.shape.setTransform(18.9,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.8,43.7);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAujRIAaAMIhQGTIhAAEg");
	this.shape.setTransform(7.3,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,42.1);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdB9IAJkCIAJgSIApgQIgeFPg");
	this.shape.setTransform(3,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.1,33.7);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpDCIAjmYIAvgCIg8Gwg");
	this.shape.setTransform(4.2,21.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,43.4);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASjSIANATIg1GQIgIACg");
	this.shape.setTransform(3.2,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.3,42.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1362AD").s().p("Aj7DwQhohjAAiNQAAiMBohjQBphlCSABQCUgBBoBlQBoBjAACMQAACNhoBjQhoBliUAAQiSAAhphlgAiFiOQgyA+AABRQAABVAyA7QAxA9BUACQBVgDAyg7QAyg9AAhUQAAhRgzg+Qgzg/hTgCQhUADgxA+g");
	this.shape.setTransform(9.4,-4.2,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1362AD").s().p("Aj7DwQhohjAAiNQAAiMBohjQBphlCSABQCTgBBoBlQBpBjAACMQAACNhpBjQhoBliTAAQiSAAhphlgAiFiOQgzA+AABRQAABVAzA7QAyA9BTACQBUgDAzg7QAyg9AAhUQAAhRgzg+Qgzg/hTgCQhUADgxA+g");
	this.shape_1.setTransform(-4,-4.2,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1362AD").s().p("AjKDBQhUhQAAhxQAAhwBUhRQBUhQB2AAQB2AABUBQQBVBRAABwQAABxhVBQQhUBQh2AAQh2AAhUhQgAhthzQgoAzAABBQAABEAoAxQAqAyBDABQBEgBApgyQApgwAAhFQAAhDgpgxQgpgzhEgCQhDACgqAzg");
	this.shape_2.setTransform(-4,2.9,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1362AD").s().p("Ai8EHIAAoNICyAAQAtAAAgAKQAnALAdAcQAcAbAPAmQALAeAAAcQAAAugNAkQgMAggZAdQgwA3hlAAIguAAIAACbgAg4AHIAdAAQAPAAAMgDQAVgEAPgOQARgUAAgqQAAgtgUgTQgUgVgoAAIgdAAg");
	this.shape_3.setTransform(-9.1,2.9,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1362AD").s().p("ABPEGIAAmnIidAAIAAGnIiEAAIAAoLIGmAAIAAILg");
	this.shape_4.setTransform(-14.3,2.9,0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1362AD").s().p("AEAFNIhHkcIi3EcIgEAAIi3kcIhGEcIijAAICnqZIAIAAIDzGXID0mXIAJAAICmKZg");
	this.shape_5.setTransform(-12.2,-4.3,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1362AD").s().p("AisEAIAIheQAQAEAXAAQAZAAAUgQQARgNAJgTQAEgLgGgOIivllICQAAIBkD8IBVj8ICGAAIhhD/QgeBKgTAnQgbA7gbAhQgaAggkASQgnATgtAAQgiAAgYgJg");
	this.shape_6.setTransform(6.8,2.9,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1362AD").s().p("AhBEGIAAmmIhxAAIAAhlIFmAAIAABlIhyAAIAAGmg");
	this.shape_7.setTransform(16.2,2.9,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1362AD").s().p("AjjEHIAAoNICEAAIAAC5ICIi5ICaAAIipDYIDKE0IiWAAIiDjUIgqA1IAACgg");
	this.shape_8.setTransform(12,2.9,0.1,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1362AD").s().p("ACRFGIAAh+IkhAAIAAB+Ih6AAIgFjkIA3AAQAjg9APgxQAUhLAAhiIAAiMIFoAAIAAGnIA6AAIgFDkgAgVifQAABegYBLQgMAsgUAsICfAAIAAlBIhnAAg");
	this.shape_9.setTransform(1.6,3.5,0.1,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1362AD").s().p("AiPFIQg4gMgpgXIAih5QAcAOApALQA0AOAqAAQA2ABAcgTQAbgSACgmQACgvgqgWQgggRg5AAIhBAAIAAh5IBBAAQA1AAAdgWQAfgWgEgjQgFg+hVAAQgpgBgyARQggAJgZANIglhwQBeg1B2AAQBrAABAAwQA/AvAABJQAAA+ghApQggAng3AOIAAACQA+ALAmAkQAqArAAA/QAABlhcA1QhMAshtAAQg3AAg0gLg");
	this.shape_10.setTransform(15.6,-4.3,0.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1362AD").s().p("AjtFGIAAqLIDhAAQB+AAA8BAQBABGAABdQAABig+BIQg/BIh9AAIg2AAIAAC2gAhCANIAxgBQApgDAWgXQAUgYAAg2QAAg2gYgXQgZgagnABIgsgBg");
	this.shape_11.setTransform(2.8,-4.2,0.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00BEF3").s().p("AHYIMQCvlchTlHQgoicheiEQAYgvAAg6QAAgzgXgsQgWgsgrggQhSg8iBAAQgyAAgtAIQjniGkvg/Qkzg/lXAQQGDhqF0gSQFqgSEsBFQEvBFDKCTQDSCXBLDZQBEDFg1DgQgyDWieDeQidDbj1DIQj4DLk3ChQFxkWCqlSg");
	this.shape_12.setTransform(13.9,-0.5,0.1,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00BEF3").s().p("AutTAQljhYjzi9Qj7jDhekUQhLjZAijvQAgjmCCjqQEKncI4ljQjXEEhMEPQhPEZBRD8QAqCGBWBzIAADWQAAAaATATQASASAbAAICEAAQATAAAQgKQAPgKAIgRQFdDvIWAmQIlAoJFi5QCyg5CnhMQAIARAPALQAQALATAAICFAAQAaAAASgTQATgSAAgaIAAg7IA5BcQAJAOAOAIQAOAIARAAIAxAAQjkD8k8DKQlIDSmBCEQmsCSmpAbQhfAHhcAAQkzAAkRhEg");
	this.shape_13.setTransform(-6.1,3.1,0.1,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00BEF3").s().p("A71F4QD5kuGfjYQGtjiIDhZQJGhlISBmQIDBjFIEFQleiynRg3Qnhg6oBBWQoQBYm+DZQmvDTkOElg");
	this.shape_14.setTransform(3.9,-11.4,0.1,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A5GcIQnJhlkkjvQk3j/hjmKQhdlxB3l/QB0lyEtlVQEtlUG+kJQHMkQItieQIuieIsgUQIggUHNByQHSBzEzDpQFADzBlFVQBtFxh2F/QhxFwk4FUQk2FSnTEKQnfERpKCjQo8CfoUAmQibALiSAAQlwAAk4hFg");
	this.shape_15.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-18.7,56.2,37.3);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol114();
	this.instance.setTransform(-3.8,-0.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.2,-79.2,220.5,158.6);


(lib.Symbol151 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol132();
	this.instance.setTransform(56.5,0.1,0.4,0.4,-14.8);

	this.instance_1 = new lib.Symbol133();
	this.instance_1.setTransform(-32.5,0,0.4,0.4,14.8);

	this.instance_2 = new lib.Symbol133();
	this.instance_2.setTransform(106.1,0,0.4,0.4,14.8);

	this.instance_3 = new lib.Symbol132();
	this.instance_3.setTransform(-3,0.1,0.4,0.4,-14.8);

	this.instance_4 = new lib.Symbol132();
	this.instance_4.setTransform(-111.9,0.1,0.4,0.4,-14.8);

	this.instance_5 = new lib.Symbol132();
	this.instance_5.setTransform(7,0.1,0.4,0.4,-14.8);

	this.instance_6 = new lib.Symbol133();
	this.instance_6.setTransform(66.5,0,0.4,0.4,14.8);

	this.instance_7 = new lib.Symbol133();
	this.instance_7.setTransform(-72.1,0,0.4,0.4,14.8);

	this.instance_8 = new lib.Symbol132();
	this.instance_8.setTransform(96.1,0.1,0.4,0.4,-14.8);

	this.instance_9 = new lib.Symbol132();
	this.instance_9.setTransform(-82.2,0.1,0.4,0.4,-14.8);

	this.instance_10 = new lib.Symbol132();
	this.instance_10.setTransform(-42.6,0.1,0.4,0.4,-14.8);

	this.instance_11 = new lib.Symbol133();
	this.instance_11.setTransform(26.9,0,0.4,0.4,14.8);

	this.instance_12 = new lib.Symbol132();
	this.instance_12.setTransform(46.6,0.1,0.4,0.4,-14.8);

	this.instance_13 = new lib.Symbol133();
	this.instance_13.setTransform(-22.6,0,0.4,0.4,14.8);

	this.instance_14 = new lib.Symbol133();
	this.instance_14.setTransform(117,0,0.4,0.4,14.8);

	this.instance_15 = new lib.Symbol132();
	this.instance_15.setTransform(-12.9,0.1,0.4,0.4,-14.8);

	this.instance_16 = new lib.Symbol132();
	this.instance_16.setTransform(-102,0.1,0.4,0.4,-14.8);

	this.instance_17 = new lib.Symbol132();
	this.instance_17.setTransform(16.9,0.1,0.4,0.4,-14.8);

	this.instance_18 = new lib.Symbol133();
	this.instance_18.setTransform(76.4,0,0.4,0.4,14.8);

	this.instance_19 = new lib.Symbol133();
	this.instance_19.setTransform(-62.2,0,0.4,0.4,14.8);

	this.instance_20 = new lib.Symbol132();
	this.instance_20.setTransform(86.2,0.1,0.4,0.4,-14.8);

	this.instance_21 = new lib.Symbol132();
	this.instance_21.setTransform(-92.1,0.1,0.4,0.4,-14.8);

	this.instance_22 = new lib.Symbol132();
	this.instance_22.setTransform(-52.5,0.1,0.4,0.4,-14.8);

	this.instance_23 = new lib.Symbol133();
	this.instance_23.setTransform(36.8,0,0.4,0.4,14.8);

	this.instance_24 = new lib.Symbol132();
	this.instance_24.setTransform(56.5,0.1,0.4,0.4,-14.8);

	this.instance_25 = new lib.Symbol133();
	this.instance_25.setTransform(-32.5,0,0.4,0.4,14.8);

	this.instance_26 = new lib.Symbol133();
	this.instance_26.setTransform(106.1,0,0.4,0.4,14.8);

	this.instance_27 = new lib.Symbol132();
	this.instance_27.setTransform(-3,0.1,0.4,0.4,-14.8);

	this.instance_28 = new lib.Symbol132();
	this.instance_28.setTransform(-111.9,0.1,0.4,0.4,-14.8);

	this.instance_29 = new lib.Symbol132();
	this.instance_29.setTransform(7,0.1,0.4,0.4,-14.8);

	this.instance_30 = new lib.Symbol133();
	this.instance_30.setTransform(66.5,0,0.4,0.4,14.8);

	this.instance_31 = new lib.Symbol133();
	this.instance_31.setTransform(-72.1,0,0.4,0.4,14.8);

	this.instance_32 = new lib.Symbol132();
	this.instance_32.setTransform(96.1,0.1,0.4,0.4,-14.8);

	this.instance_33 = new lib.Symbol132();
	this.instance_33.setTransform(-82.2,0.1,0.4,0.4,-14.8);

	this.instance_34 = new lib.Symbol132();
	this.instance_34.setTransform(-42.6,0.1,0.4,0.4,-14.8);

	this.instance_35 = new lib.Symbol133();
	this.instance_35.setTransform(26.9,0,0.4,0.4,14.8);

	this.instance_36 = new lib.Symbol132();
	this.instance_36.setTransform(46.6,0.1,0.4,0.4,-14.8);

	this.instance_37 = new lib.Symbol133();
	this.instance_37.setTransform(-22.6,0,0.4,0.4,14.8);

	this.instance_38 = new lib.Symbol133();
	this.instance_38.setTransform(117,0,0.4,0.4,14.8);

	this.instance_39 = new lib.Symbol132();
	this.instance_39.setTransform(-12.9,0.1,0.4,0.4,-14.8);

	this.instance_40 = new lib.Symbol132();
	this.instance_40.setTransform(-102,0.1,0.4,0.4,-14.8);

	this.instance_41 = new lib.Symbol132();
	this.instance_41.setTransform(16.9,0.1,0.4,0.4,-14.8);

	this.instance_42 = new lib.Symbol133();
	this.instance_42.setTransform(76.4,0,0.4,0.4,14.8);

	this.instance_43 = new lib.Symbol133();
	this.instance_43.setTransform(-62.2,0,0.4,0.4,14.8);

	this.instance_44 = new lib.Symbol132();
	this.instance_44.setTransform(86.2,0.1,0.4,0.4,-14.8);

	this.instance_45 = new lib.Symbol132();
	this.instance_45.setTransform(-92.1,0.1,0.4,0.4,-14.8);

	this.instance_46 = new lib.Symbol132();
	this.instance_46.setTransform(-52.5,0.1,0.4,0.4,-14.8);

	this.instance_47 = new lib.Symbol133();
	this.instance_47.setTransform(36.8,0,0.4,0.4,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.9,-41.4,283.4,82.9);


(lib.Symbol149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA8A6C").s().p("AgTABIADg9IAFA8IAfA9g");
	this.shape.setTransform(13.9,37.8,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA8A6C").s().p("AiTAKIA5ACIDugdIjxAjg");
	this.shape_1.setTransform(18.1,-44.5,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA8A6C").s().p("AirAMIBCACIEVgiIkZApg");
	this.shape_2.setTransform(17.2,-43.1,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA8A6C").s().p("AgUAKIAYhoIgUBoIAlBVg");
	this.shape_3.setTransform(8.9,63.6,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2A2A").s().p("AiSAAIElg5IgOAxIkQBCg");
	this.shape_4.setTransform(-24.6,-16.1,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2A2A2A").ss(3).p("Ag0AVIAHgLQAKgKAMgGQAjgVAsAm");
	this.shape_5.setTransform(32.4,-6.6,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2A2A").s().p("AhhDjIgDgBIgCgDQgqgxgchNQg6iZA7iRIACgEIADgBIAZgKQAegJAhgFQCIgRBuBVIADACIABADQAFARAGAYQALAuAEArQAQCHgwBJIgBACIgCACQgJAGggANQgyAUg1AHQgWADgXAAQgkAAgjgHgAhLjRQgpAFglAPQgzCBAuCIQAZBLAsA4QA0AKA2gHQBKgKA7ggQAphBgNh4QgGhEgTg+QhVhBhkAAQgVAAgWADg");
	this.shape_6.setTransform(7.3,-0.1,1,1,0,0,180);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(3.4,1.2,1,1,0,0,180,7.3,21.1);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_3_0();
	this.instance_1.setTransform(9.6,0.1,1,1,0,0,180,6.3,21.8);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Path_4();
	this.instance_2.setTransform(17.9,-4.7,1,1,0,0,180,6,17.5);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_5();
	this.instance_3.setTransform(7.1,0.1,1,1,0,0,180,19.3,22.1);
	this.instance_3.alpha = 0.602;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CA8A6C").s().p("AgaBFIBsgQIgIg9Ig3g9IhAAOIgqAkIAkgpIBHgPIA8A/IAJBFIh3AUg");
	this.shape_7.setTransform(14.7,23.4,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5AB7B").s().p("AjACLIAUjMIAUgrIA2hBIBDC0IAtBdIAzg7IBGgOIA6A8IgBANIgtAZIlNAxg");
	this.shape_8.setTransform(26.2,13.6,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A2A2A").s().p("AADDmIgDgCQgsgdgug3QhahugSiSIAAgEIACgDQASgZAegZQA8gwBJgJQAqgGAwAKIADABIADADQAJALANATQAYAkATAoQA7B9gGB+IAAAEIgCACQgQATgaATQg0Alg+AIQgQACgTAAgAgMjOQg9AIg1AnQgfAXgTAZQAQCCBQBmQAsA5AtAfQARAAAMgCQA0gHAtgcQAagSARgTQAFhwgzhyQgdhAgkgvQgagFgaAAQgPAAgMABg");
	this.shape_9.setTransform(51.5,7.2,1,1,0,0,180);

	this.instance_4 = new lib.Path();
	this.instance_4.setTransform(45.4,7.9,1,1,0,0,180,3.1,21.1);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Path_1();
	this.instance_5.setTransform(49.7,7.2,1,1,0,0,180,4.2,21.7);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_2();
	this.instance_6.setTransform(60.1,3.3,1,1,0,0,180,3,16.8);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.Path_3();
	this.instance_7.setTransform(51.5,7.1,1,1,0,0,180,18.9,21.8);
	this.instance_7.alpha = 0.602;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAAQAAgBACgCQACgDACAAQAGgBABAHQAAACgCACQgCADgCAAIgBAAQgFAAgBgHg");
	this.shape_10.setTransform(40,-3.4,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A2A2A").s().p("AgMAYQgIgIgCgNQgBgLAFgKQAGgKAKgBQAIgBAHAIQAIAIACANQACAKgGAKQgGAKgJABIgDAAQgGAAgHgGg");
	this.shape_11.setTransform(41.2,-2.3,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAHQgDgCgBgEQAAgCACgDQADgDAFAAQADgBADACQAEACABAEQAAACgDADQgDADgFAAIAAAAQgDAAgDgBg");
	this.shape_12.setTransform(-2.4,-9,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A2A2A").s().p("AgVAbQgLgJgBgOQgCgMAIgLQAJgMAPgCQANgCALAJQALAJACAOQADAMgJALQgKALgPACIgDABQgLAAgKgHg");
	this.shape_13.setTransform(-0.4,-7.6,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E1E1E1").s().p("AhNA7IgDg7IAlAJIAFgeIAmAKIAAgzIA+AbIATAhQgwAFgjAfIgcAcg");
	this.shape_14.setTransform(47,-17.2,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E1E1E1").s().p("AgPAiQhWgRgnAJIgJgcIAshIIAZAZIArgZIAYA7IAzgFIARAnIBeAuIgOAKQhLgahLgPg");
	this.shape_15.setTransform(2.1,-27.3,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CA8A6C").s().p("Ag0BYIgIhWIBlh/IhfCBIAIBQIBrAqg");
	this.shape_16.setTransform(31.6,-22.7,1,1,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CA8A6C").s().p("Ah9gJIAEgDIAXATQAdAWAdAJQBeAcBIhzQgYAxgrAcQghAWggAAQg5AAg+g7g");
	this.shape_17.setTransform(-7,5.1,1,1,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CA8A6C").s().p("AgXAMIgRgLQAWANAdgMQASgEAMgLQgdAbgYAAIgLgCg");
	this.shape_18.setTransform(7.6,3.7,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CA8A6C").s().p("AAggZIhMhCIADgJIBSBIIAECBg");
	this.shape_19.setTransform(-45.1,-0.3,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CA8A6C").s().p("AhsDXIgKhrIAig1IgZgfIgJhCIAoiHIBRg3IA8AFIA4CGIhBh9IgxgCIhJAyIgnCDIAHA7IAdAiIgiA0IAFBnIA0AYg");
	this.shape_20.setTransform(-50.5,-1.8,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CA8A6C").s().p("AgmgRIAmAcIAngHIgEAMIgjACg");
	this.shape_21.setTransform(-40.4,30.2,1,1,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CA8A6C").s().p("AggAPIBDhbIg+BfIgHA6g");
	this.shape_22.setTransform(-26.3,13.7,1,1,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CA8A6C").s().p("AAEgQIgtg+IAHgBIArA9IAhBjg");
	this.shape_23.setTransform(-22.3,39.1,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CA8A6C").s().p("Ag7ANIg6g0IA/AvIA/AZIBsgYIABAEIhtAbg");
	this.shape_24.setTransform(-11.6,28.7,1,1,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E1E1E1").s().p("AhWBOIDajhIgJhDIichPIiAADIjiAmIA+hFICXhHIDIAFIBTAZIB/ARIA1A3IBJASIglAHIASAeIAoAmIgQAPIAVBPIgugcIANBWIgbgHIgFAcIAUAvIgPAeIAfBEIgbgIIAFBiIgYASIg3iRIhUgPIhqBAIgnCEIAIB1IhVALg");
	this.shape_25.setTransform(-32.6,-35.4,1,1,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F5AB7B").s().p("Ai+KDIAbh7IBHgQQBMgTAWgOQAagRA3hDQAbghAWgfQh5BcgtASQgVAIhAAHIg7AGIg9g4IgJhHIAZguIgtgBIjdA2IgQhMIAUjTIAUgqIgEgvIiAhsIC8jrIgGguIA9hyIB/g9IDNglIAugzICNgeIFBBWIBHDiIAeDwIADB8IgeBZIg7BOIADBTIgrBEIhFAPIg5CuIhdBCIgDBsIgdAdIhAAgIkWAfg");
	this.shape_26.setTransform(-4.7,2.1,1,1,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B1765D").s().p("AihA+IgqhbIFiiTIA1DwImCBxg");
	this.shape_27.setTransform(-6.2,43.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,-74.7,142.9,149.4);


(lib.Symbol148 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.money = new lib.Symbol150();
	this.money.setTransform(4.2,10.8,1.3,1.3,-35.5,0,0,-63.2,33.5);

	this.timeline.addTween(cjs.Tween.get(this.money).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68F6A").s().p("AgEgWIAWASIgUgEIgPAfg");
	this.shape.setTransform(-4.3,-10,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D68F6A").s().p("AgVgEIAQAEIAbABIgbAEg");
	this.shape_1.setTransform(-10.2,-22.3,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D68F6A").s().p("AgWgEIARAEIAcABIgcAEg");
	this.shape_2.setTransform(-11.6,-35,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D68F6A").s().p("AgkAAIAShgIgMBhIAcBZIAnAAIgrAIg");
	this.shape_3.setTransform(9.2,3.5,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D68F6A").s().p("AAQCIIgQhCIAgheIgbg2IgwgpIgsg4IBjBeQAbA1gBAEIgdBeIAOA8IBBAug");
	this.shape_4.setTransform(2.6,6.5,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D68F6A").s().p("AAaAjIg7g5IhOgoIBPAiIBFA2IBKAlg");
	this.shape_5.setTransform(-3.6,-6.9,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5AB7B").s().p("AgaBWIAqhgIgvg1Ig9gmIgmg4IAVgdIBFApIBTAnIBYBUIgxDSg");
	this.shape_6.setTransform(-1.2,3.9,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D68F6A").s().p("AgMAEIAShSIgJBPIAQBOg");
	this.shape_7.setTransform(4.7,-0.7,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5AB7B").s().p("AgIEvIg/hGIgeg2IgThsIgHA6IgeADIgxhhIAjhcIAigbIAhgCIAagoIArgJIALgdIAugSIArANIARi7IAshfIAqAHIgKBcIgHCcIApDcIg9D3IBMBxIh0BEg");
	this.shape_8.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-215.7,297,286.7);


(lib.Symbol147 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9CDC7").s().p("AgsAXIBZhFIhCBdg");
	this.shape.setTransform(45.4,19.9,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9E3DF").s().p("Ak6iTIgWASIhzirIDTiVIC+DjIFaEWICcCoIgmB4IhaBlIhgAFg");
	this.shape_1.setTransform(18.4,37,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.arm = new lib.Symbol148();
	this.arm.setTransform(44,5.6,1,1,-5,0,0,-16.4,42.4);

	this.timeline.addTween(cjs.Tween.get(this.arm).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,-260.4,297.5,342.5);


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9CDC7").s().p("AgggyIAAgSIBBCJg");
	this.shape.setTransform(-15.6,48.9,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9CDC7").s().p("AgWhZIATAQIAaCjg");
	this.shape_1.setTransform(-12.4,51.8,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9E3DF").s().p("AmSF0IA0inIA4hVIFInTIBgimICIAFICJAzImhLhIiQCjIhsBCIhgAFg");
	this.shape_2.setTransform(-40.9,30.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.lok = new lib.Symbol147();
	this.lok.setTransform(-11.5,67.3,1,1,0,0,0,-11.5,67.3);

	this.timeline.addTween(cjs.Tween.get(this.lok).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.2,-260.5,325.9,342.6);


(lib.Symbol140copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.money = new lib.Symbol150();
	this.money.setTransform(-19.7,-36.4,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.money).wait(1));

	// Layer 3
	this.r0 = new lib.Symbol145();
	this.r0.setTransform(-18.2,-36.9);

	this.timeline.addTween(cjs.Tween.get(this.r0).wait(1));

	// Layer 4
	this.r9 = new lib.Symbol142copy2();
	this.r9.setTransform(-18.4,-37,2.798,2.798,-39.1,0,0,-0.1,2.8);

	this.r8 = new lib.Symbol142copy2();
	this.r8.setTransform(-18.4,-37,2.798,2.798,-75.6,0,0,-0.1,2.8);

	this.r7 = new lib.Symbol142copy2();
	this.r7.setTransform(-18.3,-37,2.798,2.798,-117.8,0,0,-0.1,2.8);

	this.r6 = new lib.Symbol142copy2();
	this.r6.setTransform(-18.3,-37.2,2.798,2.798,-157.8,0,0,-0.1,2.8);

	this.r5 = new lib.Symbol142copy2();
	this.r5.setTransform(-18.4,-37.2,2.798,2.798,167.2,0,0,-0.1,2.8);

	this.r4 = new lib.Symbol142copy2();
	this.r4.setTransform(-18.5,-37.3,2.798,2.798,122.2,0,0,-0.1,2.8);

	this.r3 = new lib.Symbol142copy2();
	this.r3.setTransform(-18.6,-37.2,2.798,2.798,77.2,0,0,-0.1,2.8);

	this.r2 = new lib.Symbol142copy2();
	this.r2.setTransform(-18.5,-37.1,2.798,2.798,37.5,0,0,-0.1,2.8);

	this.r1 = new lib.Symbol142copy2();
	this.r1.setTransform(-18.5,-36.9,2.798,2.798,0,0,0,-0.1,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r1},{t:this.r2},{t:this.r3},{t:this.r4},{t:this.r5},{t:this.r6},{t:this.r7},{t:this.r8},{t:this.r9}]}).wait(1));

	// Layer 2
	this.l2 = new lib.Symbol141();
	this.l2.setTransform(-7,-9.2,1.441,1.441,41.5);

	this.l1 = new lib.Symbol141();
	this.l1.setTransform(-11.4,-13.2,1.612,1.612,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#208D18").ss(1,1,1).p("ABfCtQgKgkgmglQgWgVgugrQhYhUASh8");
	this.shape.setTransform(-9.6,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-54.4,44.5,55.4);


(lib.Symbol140copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB00").s().p("AgNAOQgGgGABgIQgBgHAGgGQAGgGAHABQAIgBAGAGQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape.setTransform(-0.4,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.Symbol142copy();
	this.instance.setTransform(2.2,-17.3,1,1,0,0,0,-2,-2);

	this.instance_1 = new lib.Symbol142copy();
	this.instance_1.setTransform(2,-13.9,1,1,0,0,0,-2,-2);

	this.instance_2 = new lib.Symbol142copy();
	this.instance_2.setTransform(-0.8,-12.8,1,1,0,0,0,-2,-2);

	this.instance_3 = new lib.Symbol142copy();
	this.instance_3.setTransform(-3.6,-14.5,1,1,0,0,0,-2,-2);

	this.instance_4 = new lib.Symbol142copy();
	this.instance_4.setTransform(-3,-17.9,1,1,0,0,0,-2,-2);

	this.instance_5 = new lib.Symbol142copy();
	this.instance_5.setTransform(-0.1,-19.2,1,1,0,0,0,-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.l2 = new lib.Symbol141();
	this.l2.setTransform(-1.4,-2.7,0.853,0.853,71.5);

	this.l1 = new lib.Symbol141();
	this.l1.setTransform(-2,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2}]}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#208D18").ss(1,1,1).p("AAMBLQgphEAdhHQACgFACgF");
	this.shape_1.setTransform(-1.2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-21.2,14.1,22.2);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB00").s().p("AgNAOQgGgGABgIQgBgHAGgGQAGgGAHABQAIgBAGAGQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape.setTransform(-0.4,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.Symbol142();
	this.instance.setTransform(2.2,-17.3,1,1,0,0,0,-2,-2);

	this.instance_1 = new lib.Symbol142();
	this.instance_1.setTransform(2,-13.9,1,1,0,0,0,-2,-2);

	this.instance_2 = new lib.Symbol142();
	this.instance_2.setTransform(-0.8,-12.8,1,1,0,0,0,-2,-2);

	this.instance_3 = new lib.Symbol142();
	this.instance_3.setTransform(-3.6,-14.5,1,1,0,0,0,-2,-2);

	this.instance_4 = new lib.Symbol142();
	this.instance_4.setTransform(-3,-17.9,1,1,0,0,0,-2,-2);

	this.instance_5 = new lib.Symbol142();
	this.instance_5.setTransform(-0.1,-19.2,1,1,0,0,0,-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.l2 = new lib.Symbol141();
	this.l2.setTransform(-1.4,-2.7,0.853,0.853,71.5);

	this.l1 = new lib.Symbol141();
	this.l1.setTransform(-2,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2}]}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#208D18").ss(1,1,1).p("AAMBLQgphEAdhHQACgFACgF");
	this.shape_1.setTransform(-1.2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-21.2,14.1,22.2);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D5037").s().p("AnBBqQgsAAgFgsIgSinIQJAAIgSCnQgFAsgrAAg");
	this.shape.setTransform(9.8,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#753921").s().p("AnnBzQgvAAgFgwIgVi1IRgAAIgTC1QgFAwgwAAg");
	this.shape_1.setTransform(5.6,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// fl1
	this.fl5 = new lib.Symbol140copy2();
	this.fl5.setTransform(-34.1,-5.9,1.297,1.297);

	this.fl4 = new lib.Symbol140copy();
	this.fl4.setTransform(10.2,-14.2,0.749,0.749,0,-2.8,177.2);

	this.fl3 = new lib.Symbol140copy();
	this.fl3.setTransform(61,-8.7,1.216,1.216,2.8);

	this.fl2 = new lib.Symbol140();
	this.fl2.setTransform(33.8,-12.8,1.297,1.297,10.7);

	this.fl1 = new lib.Symbol140();
	this.fl1.setTransform(-10,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fl1},{t:this.fl2},{t:this.fl3},{t:this.fl4},{t:this.fl5}]}).wait(1));

	// grass
	this.grass = new lib.Symbol144();
	this.grass.setTransform(7.6,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.grass).wait(1));

	// Layer 4
	this.instance = new lib.Symbol143();
	this.instance.setTransform(6.4,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-76.4,164.9,114.6);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68F6A").s().p("AgwACIBhgHIhbALg");
	this.shape.setTransform(-22.9,39.3,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D68F6A").s().p("AgKgRIANAQIAIAUg");
	this.shape_1.setTransform(-15.4,17.9,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D68F6A").s().p("AgFgMIAJAMIACANg");
	this.shape_2.setTransform(-16.9,26,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D68F6A").s().p("AgDgMIAEAIIAEARg");
	this.shape_3.setTransform(-14.6,27,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D68F6A").s().p("AADgBIgMgNIAQAMIADARg");
	this.shape_4.setTransform(-17,34.6,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D68F6A").s().p("Ah6AqIBkg7ICRgdIiPAiIhmA7g");
	this.shape_5.setTransform(-16.1,34.5,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D68F6A").s().p("AhsAWIAXgDIBVgpIB0gHIh0AMIhSAqIgYABIgJAEg");
	this.shape_6.setTransform(-15.4,26.6,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D68F6A").s().p("AAHAeIgYgqIAKgVIAEABIgLAUIAYAoIAIAGg");
	this.shape_7.setTransform(-3.2,25.8,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D68F6A").s().p("Ag7AAIBxgCIAGACIhtADg");
	this.shape_8.setTransform(-17.2,16.2,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5AB7B").s().p("AgTAaIgYg1IAagJIAnACIAWA4IgEAPg");
	this.shape_9.setTransform(-0.5,26,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5AB7B").s().p("AgwCHIg/g7IgEg/IhSAxIgaAGIgfgcIgHgmIgagVIgEgRIAvhCIBtguIBjgCIAPALIAWAqIAcAlIAuBOIDZALIgMB6g");
	this.shape_10.setTransform(-29.5,38.6,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5AB7B").s().p("AhyAxIABgTIBmg/IgjAHIg7AmIgagGIgIgjIBIg7IBRACIBOAvIAPAEIAOAMIATApIgEASIh0AHIhUAtIgaABg");
	this.shape_11.setTransform(-13.4,19.9,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5AB7B").s().p("AgKAwIgihRIAZgRIAagDIAmBWIgWAUg");
	this.shape_12.setTransform(1.3,23.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 6
	this.instance = new lib.Symbol138();
	this.instance.setTransform(15.8,-9.2,0.678,0.678,0,-23.5,156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-50.7,124.4,104.5);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9CDC7").s().p("AgFhBIANB/IgPAEg");
	this.shape.setTransform(-11.3,51.4,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9CDC7").s().p("AgpgaIAGgEIBNA9g");
	this.shape_1.setTransform(-78.2,40.4,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9CDC7").s().p("AhKAAICVgEIiSAJg");
	this.shape_2.setTransform(-82.1,36.6,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBF0EF").s().p("AmBB7IAAAwIj8AKIAJkoIN0AfICLh8IDzFIIgvBZg");
	this.shape_3.setTransform(-49.1,45.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.arm = new lib.Symbol137();
	this.arm.setTransform(-0.9,45,1,1,0,0,0,-55.1,47.6);

	this.timeline.addTween(cjs.Tween.get(this.arm).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-53.3,232.8,120);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9CDC7").s().p("AgpgaIAGgEIBNA9g");
	this.shape.setTransform(-78.2,40.4,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9CDC7").s().p("AhKAAICVgEIiSAJg");
	this.shape_1.setTransform(-82.1,36.6,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBF0EF").s().p("ABDIiIADiwIjMkVIigkoIicjhIBOiwIDCg9ICpCLICcFiIEwLsIgvBag");
	this.shape_2.setTransform(-67.8,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.lok = new lib.Symbol136();
	this.lok.setTransform(-101.2,57.5,1,1,0,0,0,-101.2,57.5);

	this.timeline.addTween(cjs.Tween.get(this.lok).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-66.6,232.8,133.3);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand1
	this.hand1 = new lib.Symbol135();
	this.hand1.setTransform(-91.9,-27,1,1,0,0,0,-48.5,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.hand1).wait(1));

	// Layer 4
	this.head = new lib.Symbol149();
	this.head.setTransform(-23.9,-73.6,1,1,0,0,0,-31.9,62.1);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBE5F3").s().p("AhMiQIAXg5ICCDFIh6DOg");
	this.shape.setTransform(-17.1,-48,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1EDF6").s().p("AiJgRIB8jQICXDQIh6DkIhbAPg");
	this.shape_1.setTransform(-26.3,-25.9,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBE5F3").s().p("AilA8IDTlHIB4B6IiyGdg");
	this.shape_2.setTransform(-41.5,-54.6,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E99D74").s().p("AgsFeIiYlMIAXhCIBginIgLiGIBLAvIAeBpIC0FbIihDIg");
	this.shape_3.setTransform(-28.4,-76.6,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#502E2F").s().p("AiOgvIHsBZInshAIjPBFg");
	this.shape_4.setTransform(-12.7,143.1,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C3132").s().p("AC5VKIlrAtIiWgSIkjASIiuhgIgOiXIA6jhIBah+IBPjhIBti3IgxjfIgSlFIidrVIA0iUIByh/ICah5IDUiMIDagEICzAOICaBUIDbCfIBgEaIBpPlIgpGEIhjEWIgCGOIguDxg");
	this.shape_5.setTransform(-40.3,68.3,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C1CD").s().p("Ag8g5IB5AAIg9Bzg");
	this.shape_6.setTransform(-40,-75.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// hand2
	this.hand2 = new lib.Symbol146();
	this.hand2.setTransform(2.9,-20.9,1,1,0,0,0,-72.3,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.hand2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.4,-270.8,476.4,481.2);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.body = new lib.Symbol134();
	this.body.setTransform(115.6,209.9,1,1,0,0,0,-44.3,278.6);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3A3A").s().p("AAfAAIiSgKICTgEIBUAdg");
	this.shape.setTransform(167.1,166.9,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A3A").s().p("AgmgGIhEAZIA/gsICWAzg");
	this.shape_1.setTransform(164.6,332,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AgygIIhXAgIBRg4IDCBBg");
	this.shape_2.setTransform(44.4,326.4,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("AgEhBIAPAbIgVBog");
	this.shape_3.setTransform(69.3,236,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3A3A").s().p("AjGAAIkOhoIETBYIHeBqIC4g6Ii2BJg");
	this.shape_4.setTransform(136.5,168.6,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A3A3A").s().p("AgbgcIBggFIhVAUIg0Awg");
	this.shape_5.setTransform(186.9,257,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A3A3A").s().p("AgUgcIB6AoIhzgQIhYAhg");
	this.shape_6.setTransform(190.3,251.4,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292929").s().p("AgFgZIiFgLIAggJIBsAJICJBSg");
	this.shape_7.setTransform(184.4,358.5,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#292929").s().p("AAhgGIgLgCIicgKIAQgEQAEgCAIAAIB9AAQALAAAJAFIBgAsg");
	this.shape_8.setTransform(59.4,353.6,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595959").s().p("AlUSXIkRheIAShZIg5g9IhilrIj6mhIAPjoIAhjqIEGtfIFGgeID7AlIK0A1IhuQmIDzD6IAJBTICOCIIAgGAIBqEWIgLBhIgzgKQgEgFiShMIhggdIhzAAIgGh1Ih+kaIgbimIhhiQIgShfIhyiFIhfqhIktg8IjEgtIjNJkIAIB3IgXB6ICOAxIA3CaIBpCKIChHcIgFDKg");
	this.shape_9.setTransform(116.8,235.2,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CD3639").s().p("AiOC4IivgaQgRgCgLgNQgLgNAAgSIAAhEQAAgTAOgPIBThNQAJgHALgEIAvgMQAKgDAIgGIBphVICUASICaDJIB3hKIAFAVIiCCcQgMAOgTADIlHAdIgFABIgGgBg");
	this.shape_10.setTransform(52.4,360.6,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CD3639").s().p("Am+B6IAAh6IEBhJICChQICGAoIBfCXIESgwIACAnIofB8g");
	this.shape_11.setTransform(176.2,361.3,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B0D244").s().p("AhOBaIhxiCIALiMIFiBXIATCkIiFBug");
	this.shape_12.setTransform(38.4,351.8,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B0D244").s().p("AjzgbIBfhEIAXg5IFiBEIAOCsIlGBBg");
	this.shape_13.setTransform(160.8,354.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,-339.5,476.4,718.6);


(lib.Symbol115copy3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.p1 = new lib.Symbol132();
	this.p1.setTransform(-47.6,-96,0.799,0.799,-29.8);

	this.p2 = new lib.Symbol133();
	this.p2.setTransform(53,-106.5,0.799,0.799,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p2},{t:this.p1}]}).wait(1));

	// Layer 2
	this.t1 = new lib.Symbol154();
	this.t1.setTransform(0.1,18.3);

	this.t2 = new lib.Symbol153();
	this.t2.setTransform(8.9,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.t1}]}).wait(1));

	// Layer 4
	this.money = new lib.Symbol150();
	this.money.setTransform(-1.9,-137,0.8,0.8,101.5);

	this.timeline.addTween(cjs.Tween.get(this.money).wait(1));

	// Layer 1
	this.mc = new lib.Symbol152();
	this.mc.setTransform(10.6,3.9);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.9,-218.2,235.8,301.5);


(lib.Symbol115 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAmIAIgKIAIgOIAIgOIgKgVIgIgUIAXgOIANAZIAMAcIADAFIgEAGIgKAPIgMASIgKAOgAgvAlIAEgGIAEgIIAIgNIAHgLIgGgMIgIgPIgDgFIgDgGIAZgOIADAGIAEAGIAKATIAGARIADAFIgEAGIgHAPIgLASIgEAHIgDAGg");
	this.shape.setTransform(62.8,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBNIgFgFIgCgGQABgGAEgEQADgEAGAAQAEAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgEAAQgDAAgEgDgAgPArIAAh6IAgAEIgJB2g");
	this.shape_1.setTransform(55.3,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBPIAAieIAWABIAZBLIAYhKIAWgBIAGCbIgXABIgDhdIgWAyIgMAAIgQglIAABRg");
	this.shape_2.setTransform(47.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBPIgfAAIAAghIAAguIAAgaIAAgZIAAgcIAfAAIAoAAIAAAcIgoAAIAAAZIAYAAIAAAaIgYAAIAAAuIAoAAIAAAhg");
	this.shape_3.setTransform(37.7,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBPIAgieIAjACIAWCaIgZACIgFgkIgWAAIgIAkgAgEALIAQgCIgIg4g");
	this.shape_4.setTransform(28.4,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBKIAAhrIAAgoIATAAIAUADQAJACAJAFQAJAEAGAJQAFAIACAOQAAAJgDAJQgDAHgGAFQgIAGgJAEQgJADgHABIAAA6gAgFgEIAJgDQAFgCAEgDQADgDABgDQABgEAAgFQgBgKgGgFQgGgFgKgCg");
	this.shape_5.setTransform(19.1,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBPIADieIBGAAIAAAgIgnAAIgDB+g");
	this.shape_6.setTransform(10.5,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBPIAAhUIgoBNIAAAAIgdAAIACiXIAVABIAABaIAshUIAXAAIABCXg");
	this.shape_7.setTransform(1,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAPIAGgFQADgDAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBQgCgCgBgDIAAgFIABgDIAEgEQADgCADAAQACAAADACQADACACAEQADAFgBAGQgBAEgDAFQgDAFgEADQgBADgEABIgFABg");
	this.shape_8.setTransform(-11.5,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXA/QgIgHgDgKQgEgKgBgMIAAgWQAAgjALgRQAMgSAWAAQAGAAAFABQAFADAEAFQAJAJADAQQADAQgCAVQgDAigKAQQgLAQgQAAQgOAAgIgGgAAAgnQgDABgEAEQgEADgDAJQgCAJAAAOQAAAPABAIQACAIADADQAEACAFAAQAEAAADgEQAEgDACgHQADgFABgHIACgLQABgPgCgJQgCgKgEgEIgCgBIgCAAIgDAAIgEAAg");
	this.shape_9.setTransform(-17.5,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBQIABifIAbABIAAA5IAUAAIAAgwIAbAAIAACSIgbAAIAAg/IgVAAIgBBCg");
	this.shape_10.setTransform(-26.4,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAQIgJABIgGAAQgJAAgHgCQgHgCgGgEIgGgGQgDgDgCgFQgCgGAAgIIAAgmIAbAAIAAAmIABAGIACACQACACAHABQAHABAKgDIgBgzIAkAAIACB7IgkAAg");
	this.shape_11.setTransform(-36.3,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEBPIgfAAIAAghIAAguIAAgaIAAgZIAAgcIAfAAIAoAAIAAAcIgoAAIAAAZIAYAAIAAAaIgYAAIAAAuIAoAAIAAAhg");
	this.shape_12.setTransform(-45.5,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglBQIABifIAbABIAAA5IAUAAIAAgwIAbAAIAACSIgbAAIAAg/IgVAAIgBBCg");
	this.shape_13.setTransform(-54.3,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXA/QgIgHgDgKQgEgKgBgMIAAgWQAAgjALgRQAMgSAWAAQAGAAAFABQAFADAEAFQAJAJADAQQADAQgCAVQgDAigKAQQgLAQgQAAQgOAAgIgGgAAAgnQgDABgEAEQgEADgDAJQgCAJAAAOQAAAPABAIQACAIADADQAEACAFAAQAEAAADgEQAEgDACgHQADgFABgHIACgLQABgPgCgJQgCgKgEgEIgCgBIgCAAIgDAAIgEAAg");
	this.shape_14.setTransform(-63.3,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrBPIAAieIAcAAIAAAuIAZgdIAiAAIgpAsIAjBgIgaAAIgahNIgBAAIAABOg");
	this.shape_15.setTransform(-72.2,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAPIAGgFQADgDAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBQgCgCgBgDIAAgFIABgDIAEgEQADgCADAAQACAAADACQADACACAEQADAFgBAGQgBAEgDAFQgDAFgEADQgBADgEABIgFABg");
	this.shape_16.setTransform(56,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBPIAAieIAWABIAZBLIAYhKIAWgBIAGCbIgXABIgDhdIgWAyIgMAAIgQglIAABRg");
	this.shape_17.setTransform(48.8,-2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEBPIggAAIAAghIAAguIAAgaIAAgZIAAgcIAgAAIAoAAIAAAcIgoAAIAAAZIAYAAIAAAaIgYAAIAAAuIAoAAIAAAhg");
	this.shape_18.setTransform(39,-2.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsBOIAgidIAjACIAWCaIgZABIgFgjIgWAAIgIAkgAgEALIAQgCIgIg4g");
	this.shape_19.setTransform(29.7,-2.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglBQIACifIAbABIgBA5IAUAAIAAgwIAbAAIAACSIgbAAIAAg/IgVAAIgBBCg");
	this.shape_20.setTransform(20.3,-2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AACBIIAAAAIAAAAIgBAAQgIAAgJgEQgKgEgIgFQgHgHgFgGIAWgOQACADAEAEQAFADAGACQAFACAEAAQAFAAAFgDQAEgDACgFQADgEAAgEQAAgCgEgGQgEgEgHgEQgGgDgHgBIAAgYQAHABAFgDQAGgCADgEIABgCIABgDIgBgHQgBgDgEgDQgDgCgHAAQgFAAgEADQgEADgCAGIgYgKQAGgOAKgHQAKgHANAAQAOABAJAFQAJAGAFAIQAEAJABALQAAAHgCAFQgCAHgGAFIgBACIgDACQAJAFAFAIQAFAJAAAIQAAALgGAKQgGAKgKAGQgJAIgNAAIgBAAg");
	this.shape_21.setTransform(10.6,-2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAPIAGgFQADgDAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBQgCgCgBgDIAAgFIABgDIAEgEQADgCADAAQACAAADACQADACACAEQADAFgBAGQgBAEgDAFQgDAFgEADQgBADgEABIgFABg");
	this.shape_22.setTransform(-1.3,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxBPIAAieIAWABIAZBLIAYhKIAWgBIAGCbIgXABIgDhdIgWAyIgMAAIgQglIAABRg");
	this.shape_23.setTransform(-8.6,-2.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAYBPIAAhTIgoBMIgBAAIgcAAIACiXIAWABIAABaIArhUIAWAAIACCXg");
	this.shape_24.setTransform(-19.4,-2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBAIgHAAIgSgBIgBh+IBBAAIAAAYIggAAIAAAXQAOACAJAEQALAGAEAFQAFAGACAHIABALQAAAHgEAIQgDAGgIAFQgHAGgLADQgIADgKABgAgGAoIAJgDQAFgCAEgDIADgCIACgFIgBgGQgCgFgFgDQgFgEgKgCg");
	this.shape_25.setTransform(-29,-3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCA/QgIgFgEgJQgDgIgCgKIgBgTIgOAAIgBAzIgWAAIACh9IAWAAIgBAuIAPAAQADgaALgNQAKgMAUAAQAFAAAFACQAFACAEAFQAJAJADAQQADAQgCAUQgDAhgKAQQgLAQgSAAQgMAAgFgFgAARgtQgEABgEAFQgEAEgCALQgDAKAAAQQAAATACAKQABAJADADQAEADAFAAQAFAAAEgEQAEgFACgHQACgHABgHIACgOQACgSgDgMQgCgMgEgEIgCgBIgBAAIgIAAg");
	this.shape_26.setTransform(-39.9,-3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgtA2IAGgDQADgCACgFQADgEACgIIACgSIACgXIABgaIABgVIABgZIAxABIATAAIAAAcIAAAiIAAAiIAAAhIAAAcIghAAIAAh5IgNAAIAAAUIgCAYIgCATIgCAQIgDAPQgBAIgEAGQgDAIgIAFQgGAEgLABg");
	this.shape_27.setTransform(-51.6,-2.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAvIgJgNIgJgOIgHgLIgEgHIADgEIANgdIAMgZIAYANIgJAVIgKAWIAKAOIAHAOIAIAKIgVATIgIgKgAAUAuIgFgHIgKgSIgIgOIgDgHIACgFIAHgSIAKgUIAHgLIAZANIgDAGIgDAHIgIANIgHAPIAIAKIAIAOIAFAHIADAHIgZAPIgDgHg");
	this.shape_28.setTransform(-61.5,-3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDA4IgVAAIAAgYIAAggIAAgSIAAgRIAAgUIAVAAIAdAAIAAAUIgdAAIAAARIARAAIAAASIgRAAIAAAgIAdAAIAAAYg");
	this.shape_29.setTransform(42.6,-25.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbA0IAAhLIAAgcIAOAAIANACQAHABAFAEQAHADAEAGQAEAGABAJQAAAHgCAGQgCAGgEACQgGAFgGACQgGACgFABIAAApgAgDgDIAGgCIAGgDIADgFIAAgFQAAgIgFgDQgEgEgGgBg");
	this.shape_30.setTransform(36.5,-25.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZA3IADhuIAwAAIAAAXIgbAAIgBBYg");
	this.shape_31.setTransform(30.5,-25.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARA4IAAg6IgcA0IgUAAIABhpIAPABIABA+IAeg5IAPAAIABBpg");
	this.shape_32.setTransform(23.7,-25.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLBGIgUgBIAChtIARAAIgBA+IAZg7IAUgBIAABpIgQABIAAhBIgbBDgAgMgzQgGgGAAgJIANAAIABADQAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAQABABACAAIACgBIABgDIABgFIAOAAQAAAGgDAFQgCAGgEACQgEAEgFAAQgIAAgFgFg");
	this.shape_33.setTransform(12.5,-27.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAsQgFgFgDgHIgDgPIAAgQQAAgYAIgMQAJgNAOAAQAEAAAEACQADABADADQAGAHACALQADAMgCAOQgCAXgHALQgIAMgKAAQgKAAgGgEgAAAgaQgCAAgCACQgDADgCAGQgCAGAAAJIABARQABAFADACQACABAEABQACgBACgCQADgCACgFIACgIIABgIQABgKgBgHQgCgGgDgDIgBgBIgBAAIgCAAIgDABg");
	this.shape_34.setTransform(5.7,-25.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaA4IAChvIATABIgBAoIAOAAIAAgiIATAAIAABmIgTAAIAAgsIgOAAIgBAug");
	this.shape_35.setTransform(-0.6,-25.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgiA4IAAhvIAQABIARA0IARg0IAPAAIAEBsIgQAAIgChAIgQAiIgHAAIgLgZIAAA5g");
	this.shape_36.setTransform(-7.7,-25.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgfA3IAXhuIAYABIAPBsIgSABIgDgZIgPABIgFAZgAgDAHIALgBIgGgng");
	this.shape_37.setTransform(-15.1,-25.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdApIABgBIADgBQADgEACgIIADgSIABgTIAAgVIgBgRIgBgGIAwgBIAABtIgYAAIAAhUIgHAAIAAAgQAAAQgEAMQgDANgGAHIgHAFIgIABg");
	this.shape_38.setTransform(-22.1,-25.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeA4IAAhvIAUAAIAAAhIARgVIAYAAIgdAgIAYBBIgSAAIgSg2IAAABIAAA3g");
	this.shape_39.setTransform(-28.5,-25.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCA4IgXAAIAAgYIAAggIAAgSIAAgRIAAgUIAXAAIAbAAIAAAUIgbAAIAAARIAQAAIAAASIgQAAIAAAgIAbAAIAAAYg");
	this.shape_40.setTransform(-34.9,-25.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbA0IAAhLIAAgcIANAAIAOACQAHABAFAEQAHADAEAGQAEAGABAJQAAAHgCAGQgCAGgFACQgEAFgHACQgHACgEABIAAApgAgDgDIAGgCIAGgDIADgFIAAgFQAAgIgEgDQgEgEgHgBg");
	this.shape_41.setTransform(-40.9,-25.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAA4IgKAAIgSAAIABhuIAJgBIAHAAIADAAQAIAAAHAFQAGAEADAGQADAGAAAHQAAAEgCAEQgBAEgCADIgFAFIAKAHQAFABACAFQADAFAAAJQAAAJgDAJQgDAIgFAEQgGAFgIABgAgLAnIAEAAIAEAAIABAAQAEAAAEgDQAEgCACgEQACgEAAgEQAAgFgDgEQgDgEgDgCQgEgCgBAAIgBAAIgEABIgFAAgAgOgmIAAAWIAEAAIACAAQAEAAADgCIADgFQACgDAAgDQAAgEgCgCIgDgDIgFgBIgDAAIgFABg");
	this.shape_42.setTransform(-51.2,-25.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAxIAAhLIgTAAIAAgXIA3AAIAAAXIgSAAIAABLg");
	this.shape_43.setTransform(43.2,-44.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAsQgFgFgDgHIgDgPIAAgQQAAgYAIgMQAJgMAOAAQAEAAAEABQADABADADQAGAHACALQADAMgCAOQgCAXgHALQgIAMgKAAQgKAAgGgEgAAAgaQgCAAgCACQgDADgCAGQgCAGAAAJIABARQABAFADACQACABAEABQACgBACgCQADgCACgFIACgIIABgIQABgKgBgHQgCgGgDgDIgBgBIgBAAIgCAAIgDABg");
	this.shape_44.setTransform(37.1,-44.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaA3IAAhtIA1gBIAABuIgRAAIAAhXIgOAAIAABYg");
	this.shape_45.setTransform(30.8,-44.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOAHIgBgNIAeAAIABANg");
	this.shape_46.setTransform(25.8,-44.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgeA4IAAhvIAUAAIAAAhIARgVIAYABIgdAeIAZBDIgSAAIgTg2IAAAAIAAA3g");
	this.shape_47.setTransform(20.9,-44.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDA4IgVAAIAAgYIAAggIAAgSIAAgRIAAgUIAVAAIAcAAIAAAUIgcAAIAAARIARAAIAAASIgRAAIAAAgIAcAAIAAAYg");
	this.shape_48.setTransform(14.5,-44.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgIA4IAAg3IAAAAIgVA2IgSAAIAZhDIgZgrIAYAAIAPAhIAAghIASAAIAAAhIANghIAYAAIgYArIAZBDIgSAAIgUg2IAAAAIAAA3g");
	this.shape_49.setTransform(6.5,-44.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AATA/IAAgQIgmAAIAAAQIgPAAIAAgoIAKAAIACgSIABgQIAAgTIABgQIAAgKIAAgHIAvABIABBVIAHAAIAAAogAAEAXIgBg9IgIAAIgBAiIgCAbIAMAAg");
	this.shape_50.setTransform(-2.2,-43.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCA4IgXAAIAAgYIAAggIAAgSIAAgRIAAgUIAXAAIAcAAIAAAUIgcAAIAAARIAQAAIAAASIgQAAIAAAgIAcAAIAAAYg");
	this.shape_51.setTransform(-12.6,-44.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgIAxIAAhLIgTAAIAAgXIA3AAIAAAXIgSAAIABBLg");
	this.shape_52.setTransform(-18.6,-44.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AARA4IAAg7IgcA1IgUAAIABhpIAPABIABA+IAeg5IAPAAIABBpg");
	this.shape_53.setTransform(-25.3,-44.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAAA4IgKAAIgSAAIABhuIAJgBIAHAAIADAAQAIAAAHAFQAGAEADAGQADAGAAAHQAAAEgCAEQgBAEgCADIgFAGIAKAGQAFABACAFQADAGAAAIQAAAJgDAJQgDAHgFAFQgGAFgIABgAgLAnIAEAAIAEAAIABAAQAEgBAEgCQAEgCACgEQACgEAAgEQAAgFgDgEQgDgEgDgCQgEgCgBAAIgBAAIgEABIgFAAgAgOgnIAAAYIAEAAIACAAQAEgBADgCIADgFQACgEAAgDQAAgDgCgCIgDgDIgFgBIgDAAIgFAAg");
	this.shape_54.setTransform(-32.3,-44.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbA0IAAhLIAAgcIANAAIAOACQAHABAFAEQAHAEAEAFQAEAGABAKQAAAGgCAGQgCAFgFADQgEAEgHADQgHADgEAAIAAApgAgDgDIAGgCIAGgDIADgFIAAgFQAAgIgEgDQgEgDgHgCg");
	this.shape_55.setTransform(-38.7,-44.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgQAsQgFgFgDgHIgDgPIAAgQQAAgYAIgMQAJgMAOAAQAEAAAEABQADABADADQAGAHACALQADAMgCAOQgCAXgHALQgIAMgKAAQgKAAgGgEgAAAgaQgCAAgCACQgDADgCAGQgCAGAAAJIABARQABAFADACQACABAEABQACgBACgCQADgCACgFIACgIIABgIQABgKgBgHQgCgGgDgDIgBgBIgBAAIgCAAIgDABg");
	this.shape_56.setTransform(-45.1,-44.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgIA2QgGgEgGgHQgFgHgEgLQgDgLAAgOQAAgOAEgLQAEgLAHgHQAGgHAIgDQAGgDAHAAIADAAIAGACQAEACADAEQAEAEADAHIgNAKIgDgEIgDgEQgCgBgEAAQgFAAgDAFQgDAGgDAIQgDAJAAAIQAAAOAEAHQADAHADAAQAFAAADgBQADgBACgEIADgJIAIADIAGADQAAALgEAJQgEAIgGAFQgGAFgJAAQgEAAgGgDg");
	this.shape_57.setTransform(-51.7,-44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol114();
	this.instance.setTransform(-1.2,3.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.4,-72.2,211.7,152.2);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol113();
	this.mc.setTransform(0.5,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-461.6,-260,924.3,520);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol108();
	this.instance.setTransform(-341.4,0);

	this.instance_1 = new lib.Symbol108();
	this.instance_1.setTransform(-326.3,0);

	this.instance_2 = new lib.Symbol108();
	this.instance_2.setTransform(-311.2,0);

	this.instance_3 = new lib.Symbol108();
	this.instance_3.setTransform(-296.1,0);

	this.instance_4 = new lib.Symbol108();
	this.instance_4.setTransform(-281,0);

	this.instance_5 = new lib.Symbol108();
	this.instance_5.setTransform(-265.9,0);

	this.instance_6 = new lib.Symbol108();
	this.instance_6.setTransform(-250.8,0);

	this.instance_7 = new lib.Symbol108();
	this.instance_7.setTransform(-235.7,0);

	this.instance_8 = new lib.Symbol108();
	this.instance_8.setTransform(-220.6,0);

	this.instance_9 = new lib.Symbol108();
	this.instance_9.setTransform(-205.5,0);

	this.instance_10 = new lib.Symbol108();
	this.instance_10.setTransform(-190.4,0);

	this.instance_11 = new lib.Symbol108();
	this.instance_11.setTransform(-175.3,0);

	this.instance_12 = new lib.Symbol108();
	this.instance_12.setTransform(-160.2,0);

	this.instance_13 = new lib.Symbol108();
	this.instance_13.setTransform(-145.1,0);

	this.instance_14 = new lib.Symbol108();
	this.instance_14.setTransform(-130,0);

	this.instance_15 = new lib.Symbol108();
	this.instance_15.setTransform(-114.9,0);

	this.instance_16 = new lib.Symbol108();
	this.instance_16.setTransform(-99.8,0);

	this.instance_17 = new lib.Symbol108();
	this.instance_17.setTransform(-84.7,0);

	this.instance_18 = new lib.Symbol108();
	this.instance_18.setTransform(-69.6,0);

	this.instance_19 = new lib.Symbol108();
	this.instance_19.setTransform(-54.5,0);

	this.instance_20 = new lib.Symbol108();
	this.instance_20.setTransform(-39.4,0);

	this.instance_21 = new lib.Symbol108();
	this.instance_21.setTransform(-24.3,0);

	this.instance_22 = new lib.Symbol108();
	this.instance_22.setTransform(-9.2,0);

	this.instance_23 = new lib.Symbol108();
	this.instance_23.setTransform(5.9,0);

	this.instance_24 = new lib.Symbol108();
	this.instance_24.setTransform(21,0);

	this.instance_25 = new lib.Symbol108();
	this.instance_25.setTransform(36.1,0);

	this.instance_26 = new lib.Symbol108();
	this.instance_26.setTransform(51.2,0);

	this.instance_27 = new lib.Symbol108();
	this.instance_27.setTransform(66.3,0);

	this.instance_28 = new lib.Symbol108();
	this.instance_28.setTransform(81.4,0);

	this.instance_29 = new lib.Symbol108();
	this.instance_29.setTransform(96.5,0);

	this.instance_30 = new lib.Symbol108();
	this.instance_30.setTransform(111.6,0);

	this.instance_31 = new lib.Symbol108();
	this.instance_31.setTransform(126.7,0);

	this.instance_32 = new lib.Symbol108();
	this.instance_32.setTransform(141.8,0);

	this.instance_33 = new lib.Symbol108();
	this.instance_33.setTransform(156.9,0);

	this.instance_34 = new lib.Symbol108();
	this.instance_34.setTransform(172,0);

	this.instance_35 = new lib.Symbol108();
	this.instance_35.setTransform(187.1,0);

	this.instance_36 = new lib.Symbol108();
	this.instance_36.setTransform(202.2,0);

	this.instance_37 = new lib.Symbol108();
	this.instance_37.setTransform(217.3,0);

	this.instance_38 = new lib.Symbol108();
	this.instance_38.setTransform(232.4,0);

	this.instance_39 = new lib.Symbol108();
	this.instance_39.setTransform(247.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.9,-13,606,26);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol106();
	this.instance.setTransform(0,-38.7,0.089,0.6,0,0,-25,0,-0.1);

	this.instance_1 = new lib.Symbol101();
	this.instance_1.setTransform(2.9,-26.5,0.058,0.26,0,0,-33.6,0,-0.2);

	this.instance_2 = new lib.Symbol101();
	this.instance_2.setTransform(2.9,25.5,0.074,0.26,0,0,-49.2,0,-0.2);

	this.instance_3 = new lib.Symbol101();
	this.instance_3.setTransform(2.9,36.6,0.084,0.26,0,0,-54.4,0,-0.2);

	this.instance_4 = new lib.Symbol101();
	this.instance_4.setTransform(6.8,-5,0.006,11.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-43.6,15.1,87.3);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol106();
	this.instance.setTransform(0,-53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol101();
	this.instance_1.setTransform(-87.9,-12.7,0.022,12.357);

	this.instance_2 = new lib.Symbol101();
	this.instance_2.setTransform(19,-32.3,0.114,0.228);

	this.instance_3 = new lib.Symbol101();
	this.instance_3.setTransform(-27.6,-32.3,0.114,0.228);

	this.instance_4 = new lib.Symbol101();
	this.instance_4.setTransform(55.9,29.3,0.009,0.737);

	this.instance_5 = new lib.Symbol101();
	this.instance_5.setTransform(-63.3,29.3,0.009,0.737);

	this.instance_6 = new lib.Symbol101();
	this.instance_6.setTransform(0,-50.2,1,0.681);

	this.instance_7 = new lib.Symbol101();
	this.instance_7.setTransform(0,-40.4,1,0.331);

	this.instance_8 = new lib.Symbol101();
	this.instance_8.setTransform(0,16,1,0.331);

	this.instance_9 = new lib.Symbol101();
	this.instance_9.setTransform(-73.9,-12.3,0.009,12.357);

	this.instance_10 = new lib.Symbol101();
	this.instance_10.setTransform(-27.6,-12.3,0.009,12.357);

	this.instance_11 = new lib.Symbol101();
	this.instance_11.setTransform(19,-12.3,0.009,12.357);

	this.instance_12 = new lib.Symbol101();
	this.instance_12.setTransform(66.8,-12.3,0.009,12.357);

	this.instance_13 = new lib.Symbol101();
	this.instance_13.setTransform(88,-12.3,0.022,12.357);

	this.instance_14 = new lib.Symbol101();
	this.instance_14.setTransform(-87.9,-12.3,0.022,12.357);

	this.instance_15 = new lib.Symbol101();
	this.instance_15.setTransform(0,26.4,1,0.454);

	this.instance_16 = new lib.Symbol102();
	this.instance_16.setTransform(53.9,-12,1,1,0,0,180);

	this.instance_17 = new lib.Symbol102();
	this.instance_17.setTransform(33.2,-12);

	this.instance_18 = new lib.Symbol102();
	this.instance_18.setTransform(6,-12,1,1,0,0,180);

	this.instance_19 = new lib.Symbol102();
	this.instance_19.setTransform(-14.7,-12);

	this.instance_20 = new lib.Symbol102();
	this.instance_20.setTransform(-41.3,-12,1,1,0,0,180);

	this.instance_21 = new lib.Symbol102();
	this.instance_21.setTransform(-62.1,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 4
	this.instance_22 = new lib.Symbol107();
	this.instance_22.setTransform(86.5,-18.6,1,1,0,0,180);

	this.instance_23 = new lib.Symbol107();
	this.instance_23.setTransform(-86.4,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-62.3,188,93.9);


(lib.Symbol97copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol103();
	this.instance.setTransform(0,125.3);

	this.instance_1 = new lib.Symbol104();
	this.instance_1.setTransform(0,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol98();
	this.instance_2.setTransform(-0.3,-50.4,1,0.309);

	this.instance_3 = new lib.Symbol98();
	this.instance_3.setTransform(-0.3,2.7,1,0.309);

	this.instance_4 = new lib.Symbol98();
	this.instance_4.setTransform(-0.3,58.8,1,0.309);

	this.instance_5 = new lib.Symbol98();
	this.instance_5.setTransform(-0.3,110.5);

	this.instance_6 = new lib.Symbol98();
	this.instance_6.setTransform(-1.2,1,2.362,1.235,90);

	this.instance_7 = new lib.Symbol98();
	this.instance_7.setTransform(44.1,1,2.362,1,90);

	this.instance_8 = new lib.Symbol98();
	this.instance_8.setTransform(-44.8,1,2.362,1,90);

	this.instance_9 = new lib.Symbol98();
	this.instance_9.setTransform(-0.3,-108.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWRKMgBBgiTIF5AAMAAAAiTg");
	mask.setTransform(22.6,0.8);

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A7957").s().p("AB0OeQADjEgChOIhIgEQhQgDgyACQgRABgZAbQgJALgDAAQgFABAAgMQgBgOAQgTQASgXAZAAQBWgCBzADQgEhGALi1QAMjDgChSIhRgGQhagFg1ACQgTABgaAVQgRAPABgMQABgRAQgOQASgQAXAAQBlAAB+AHIgDguQgGg/gIiAQgIiQgFiLQh+gDhOgEQgagCgPAZQgOAXgDgBQgFgBACgEIADgIQAFgdARgOQAQgPAZABQBjAGBjACIgBg/QgDhrABirQAAh/gCgKQg9AIg6gFQg5gHgUgCQgggCgPALQgSAOgOAsQgIAcgJheQgIhOgBg/QBsgDCNACICgADQADAygEGFQgDGNgGA3QgEAnAHHgQAHHdgEAeQgEAdAHB4QAGBsgHANQgHALgPgDQgVgFgUAKQgWgQgBigg");
	this.shape.setTransform(25,1.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjfRKMAAAgiTIF5AAMgBBAiTg");
	mask_1.setTransform(-22.4,0.8);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A7957").s().p("AizRJQgPADgHgLQgHgNAGhsQAHh4gEgdQgEgeAHndQAHnggEgnQgGg3gDmNQgEmFADgyICggDQCNgCBsADQgBA/gIBOQgJBegIgcQgOgsgSgOQgPgLggACQgUACg5AHQg6AFg9gIQgCAKAAB/QABCrgDBrIgBA/QBjgCBjgGQAZgBAQAPQARAOAFAdIADAIQACAEgFABQgDABgOgXQgPgZgaACQhOAEh+ADQgFCLgICQQgICAgGA/IgDAuQB+gHBlAAQAXAAASAQQAQAOABARQABAMgRgPQgagVgTgBQg1gChaAFIhRAGQgCBSAMDDQALC1gEBGQBygDBXACQAZAAASAXQAQATgBAOQAAAMgFgBQgDAAgJgLQgZgbgRgBQgygChQADIhIAEQgCBOADDEQgBCggWAQQgUgKgVAFg");
	this.shape_1.setTransform(-24.6,1.7);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 6
	this.instance_10 = new lib.Symbol99copy2();
	this.instance_10.setTransform(26.3,0.8,1,1,0,0,180);

	this.instance_11 = new lib.Symbol99copy2();
	this.instance_11.setTransform(-25.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Layer 8
	this.instance_12 = new lib.Symbol98copy();
	this.instance_12.setTransform(-0.3,2.2,0.929,32.228);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 5
	this.instance_13 = new lib.Symbol98copy2();
	this.instance_13.setTransform(-0.3,-0.5,1.06,35.535);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-121.3,184,293.3);


(lib.Symbol97copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol103();
	this.instance.setTransform(0,125.3);

	this.instance_1 = new lib.Symbol104();
	this.instance_1.setTransform(0,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol98();
	this.instance_2.setTransform(-0.3,-50.4,1,0.309);

	this.instance_3 = new lib.Symbol98();
	this.instance_3.setTransform(-0.3,2.7,1,0.309);

	this.instance_4 = new lib.Symbol98();
	this.instance_4.setTransform(-0.3,58.8,1,0.309);

	this.instance_5 = new lib.Symbol98();
	this.instance_5.setTransform(-0.3,110.5);

	this.instance_6 = new lib.Symbol98();
	this.instance_6.setTransform(-1.2,1,2.362,1.235,90);

	this.instance_7 = new lib.Symbol98();
	this.instance_7.setTransform(44.1,1,2.362,1,90);

	this.instance_8 = new lib.Symbol98();
	this.instance_8.setTransform(-44.8,1,2.362,1,90);

	this.instance_9 = new lib.Symbol98();
	this.instance_9.setTransform(-0.3,-108.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWRKMgBBgiTIF5AAMAAAAiTg");
	mask.setTransform(22.6,0.8);

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F3A64").s().p("AB0OeQADjEgChOIhIgEQhQgDgyACQgRABgZAbQgJALgDAAQgFABAAgMQgBgOAQgTQASgXAZAAQBWgCBzADQgEhGALi1QAMjDgChSIhRgGQhagFg1ACQgTABgaAVQgRAPABgMQABgRAQgOQASgQAXAAQBlAAB+AHIgDguQgGg/gIiAQgIiQgFiLQh+gDhOgEQgagCgPAZQgOAXgDgBQgFgBACgEIADgIQAFgdARgOQAQgPAZABQBjAGBjACIgBg/QgDhrABirQAAh/gCgKQg9AIg6gFQg5gHgUgCQgggCgPALQgSAOgOAsQgIAcgJheQgIhOgBg/QBsgDCNACICgADQADAygEGFQgDGNgGA3QgEAnAHHgQAHHdgEAeQgEAdAHB4QAGBsgHANQgHALgPgDQgVgFgUAKQgWgQgBigg");
	this.shape.setTransform(25,1.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjfRKMAAAgiTIF5AAMgBBAiTg");
	mask_1.setTransform(-22.4,0.8);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F3A64").s().p("AizRJQgPADgHgLQgHgNAGhsQAHh4gEgdQgEgeAHndQAHnggEgnQgGg3gDmNQgEmFADgyICggDQCNgCBsADQgBA/gIBOQgJBegIgcQgOgsgSgOQgPgLggACQgUACg5AHQg6AFg9gIQgCAKAAB/QABCrgDBrIgBA/QBjgCBjgGQAZgBAQAPQARAOAFAdIADAIQACAEgFABQgDABgOgXQgPgZgaACQhOAEh+ADQgFCLgICQQgICAgGA/IgDAuQB+gHBlAAQAXAAASAQQAQAOABARQABAMgRgPQgagVgTgBQg1gChaAFIhRAGQgCBSAMDDQALC1gEBGQBygDBXACQAZAAASAXQAQATgBAOQAAAMgFgBQgDAAgJgLQgZgbgRgBQgygChQADIhIAEQgCBOADDEQgBCggWAQQgUgKgVAFg");
	this.shape_1.setTransform(-24.6,1.7);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 6
	this.instance_10 = new lib.Symbol99copy();
	this.instance_10.setTransform(26.3,0.8,1,1,0,0,180);

	this.instance_11 = new lib.Symbol99copy();
	this.instance_11.setTransform(-25.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Layer 8
	this.instance_12 = new lib.Symbol98copy();
	this.instance_12.setTransform(-0.3,2.2,0.929,32.228);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 5
	this.instance_13 = new lib.Symbol98copy2();
	this.instance_13.setTransform(-0.3,-0.5,1.06,35.535);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-121.3,184,293.3);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol103();
	this.instance.setTransform(0,125.3);

	this.instance_1 = new lib.Symbol104();
	this.instance_1.setTransform(0,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol98();
	this.instance_2.setTransform(-0.3,-50.4,1,0.309);

	this.instance_3 = new lib.Symbol98();
	this.instance_3.setTransform(-0.3,2.7,1,0.309);

	this.instance_4 = new lib.Symbol98();
	this.instance_4.setTransform(-0.3,58.8,1,0.309);

	this.instance_5 = new lib.Symbol98();
	this.instance_5.setTransform(-0.3,110.5);

	this.instance_6 = new lib.Symbol98();
	this.instance_6.setTransform(-1.2,1,2.362,1.235,90);

	this.instance_7 = new lib.Symbol98();
	this.instance_7.setTransform(44.1,1,2.362,1,90);

	this.instance_8 = new lib.Symbol98();
	this.instance_8.setTransform(-44.8,1,2.362,1,90);

	this.instance_9 = new lib.Symbol98();
	this.instance_9.setTransform(-0.3,-108.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWRKMgBBgiTIF5AAMAAAAiTg");
	mask.setTransform(22.6,0.8);

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#587689").s().p("AB0OeQADjEgChOIhIgEQhQgDgyACQgRABgZAbQgJALgDAAQgFABAAgMQgBgOAQgTQASgXAZAAQBWgCBzADQgEhGALi1QAMjDgChSIhRgGQhagFg1ACQgTABgaAVQgRAPABgMQABgRAQgOQASgQAXAAQBlAAB+AHIgDguQgGg/gIiAQgIiQgFiLQh+gDhOgEQgagCgPAZQgOAXgDgBQgFgBACgEIADgIQAFgdARgOQAQgPAZABQBjAGBjACIgBg/QgDhrABirQAAh/gCgKQg9AIg6gFQg5gHgUgCQgggCgPALQgSAOgOAsQgIAcgJheQgIhOgBg/QBsgDCNACICgADQADAygEGFQgDGNgGA3QgEAnAHHgQAHHdgEAeQgEAdAHB4QAGBsgHANQgHALgPgDQgVgFgUAKQgWgQgBigg");
	this.shape.setTransform(25,1.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjfRKMAAAgiTIF5AAMgBBAiTg");
	mask_1.setTransform(-22.4,0.8);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#587689").s().p("AizRJQgPADgHgLQgHgNAGhsQAHh4gEgdQgEgeAHndQAHnggEgnQgGg3gDmNQgEmFADgyICggDQCNgCBsADQgBA/gIBOQgJBegIgcQgOgsgSgOQgPgLggACQgUACg5AHQg6AFg9gIQgCAKAAB/QABCrgDBrIgBA/QBjgCBjgGQAZgBAQAPQARAOAFAdIADAIQACAEgFABQgDABgOgXQgPgZgaACQhOAEh+ADQgFCLgICQQgICAgGA/IgDAuQB+gHBlAAQAXAAASAQQAQAOABARQABAMgRgPQgagVgTgBQg1gChaAFIhRAGQgCBSAMDDQALC1gEBGQBygDBXACQAZAAASAXQAQATgBAOQAAAMgFgBQgDAAgJgLQgZgbgRgBQgygChQADIhIAEQgCBOADDEQgBCggWAQQgUgKgVAFg");
	this.shape_1.setTransform(-24.6,1.7);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 6
	this.instance_10 = new lib.Symbol99();
	this.instance_10.setTransform(26.3,0.8,1,1,0,0,180);

	this.instance_11 = new lib.Symbol99();
	this.instance_11.setTransform(-25.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Layer 8
	this.instance_12 = new lib.Symbol98copy();
	this.instance_12.setTransform(-0.3,2.2,0.929,32.228);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 5
	this.instance_13 = new lib.Symbol98copy2();
	this.instance_13.setTransform(-0.3,-0.5,1.06,35.535);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-121.3,184,293.3);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol109();
	this.instance.setTransform(35.9,-43);

	this.instance_1 = new lib.Symbol109();
	this.instance_1.setTransform(42.9,-28.7);

	this.instance_2 = new lib.Symbol109();
	this.instance_2.setTransform(35.9,-14.4);

	this.instance_3 = new lib.Symbol109();
	this.instance_3.setTransform(42.9,-0.1);

	this.instance_4 = new lib.Symbol109();
	this.instance_4.setTransform(35.9,14.2);

	this.instance_5 = new lib.Symbol109();
	this.instance_5.setTransform(42.9,28.5);

	this.instance_6 = new lib.Symbol109();
	this.instance_6.setTransform(35.9,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314,-56,613,112);


(lib.Symbol100 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABrK1IihAAMgpuAAAIB81pMAnyAAAIChAAMAm+AAAIB8Vpg");
	mask.setTransform(114.5,-210.9);

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F5766").s().p("EgswAA5IAAhyMBZhAAAIAAByg");
	this.shape.setTransform(132.4,-257);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 8
	this.instance = new lib.Symbol110();
	this.instance.setTransform(140.2,-206.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// clumba
	this.clumba = new lib.Symbol139();
	this.clumba.setTransform(192.8,31.4);

	this.timeline.addTween(cjs.Tween.get(this.clumba).wait(1));

	// balcony
	this.instance_1 = new lib.Symbol105();
	this.instance_1.setTransform(0.1,439);

	this.instance_2 = new lib.Symbol105();
	this.instance_2.setTransform(225.1,779);

	this.instance_3 = new lib.Symbol105();
	this.instance_3.setTransform(225.1,99);

	this.instance_4 = new lib.Symbol105();
	this.instance_4.setTransform(225.1,439);

	this.instance_5 = new lib.Symbol105();
	this.instance_5.setTransform(0.1,779);

	this.instance_6 = new lib.Symbol105();
	this.instance_6.setTransform(0.1,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// ded
	this.ded = new lib.Symbol117();
	this.ded.setTransform(17,25.6,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.ded).wait(1));

	// windows
	this.instance_7 = new lib.Symbol97();
	this.instance_7.setTransform(0.4,340);

	this.instance_8 = new lib.Symbol97copy();
	this.instance_8.setTransform(225,680);

	this.instance_9 = new lib.Symbol97copy2();
	this.instance_9.setTransform(225,0);

	this.instance_10 = new lib.Symbol97copy2();
	this.instance_10.setTransform(0.4,680);

	this.instance_11 = new lib.Symbol97();
	this.instance_11.setTransform(225,340);

	this.instance_12 = new lib.Symbol97copy();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF9D87").s().p("EAkuBYzMAAAiqPIDHAAMAAACqPgEgn1BYzMAAAiqPIDJAAMAAACqPgEgn1hR3IAAgeMBPqAAAIAAAegEgn1hSzIAAl/MBPqAAAIAAF/g");
	this.shape_1.setTransform(115.8,387.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1B19D").s().p("Egn1BcDMAAAi4FMBPqAAAMAAAC4Fg");
	this.shape_2.setTransform(115.8,367);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-262.8,545.1,1219);


(lib.Symbol112 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol100();
	this.mc.setTransform(-118.6,-366.6);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.4,-646.9,613,1236.4);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 20;
		
		var q1 = this.house.mc.clumba.fl5;
		var qs = [q1.r0, q1.r1, q1.r2, q1.r3, q1.r4, q1.r5, q1.r6, q1.r7, q1.r8, q1.r9];
		
		var rotKrug = 15;
		var tl = new TimelineMax();
		
		TweenMax.to(this.house.mc, 1.2, {x:"-=10", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.house.mc, 1.9, {y:"-=10", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.city.mc, 1.2, {x:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.city.mc, 1.9, {y:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		
		TweenMax.to(this.t4.p1, 1.2, {x:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.t4.p1, 1.9, {y:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.t4.p2, 1.4, {x:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.t4.p2, 2.1, {y:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.t4.money, 1.7, {x:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.t4.money, 1.5, {y:"-=5", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		
		tl.fromTo(this.blk, 0.6, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.logo, 1.0, {y:"-=140", ease:Back.easeOut}, 0.0)
		  .from(this.house, 1.0, {x:"-=840", scaleX:2, scaleY:2, ease:Expo.easeOut}, 0.0)
		  .from(this.city, 1.0, {x:"-=440", scaleX:1.5, scaleY:1.5, ease:Expo.easeOut}, 0.0)
		  .from(this.t1, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.0)
		  .from(this.house.mc.clumba, 0.2, {alpha:0, ease:Power0.easeNone}, 0.5)
		  .from(this.house.mc.clumba, 1.3, {y:"-=30", ease:Elastic.easeOut}, 0.5)
		  .from(this.house.mc.clumba.grass, 1.3, {y:"-=20", ease:Elastic.easeOut}, 0.6)
		  .from(this.house.mc.clumba.fl1, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.1)
		  .from(this.house.mc.clumba.fl1, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.1)
		  .from(this.house.mc.clumba.fl1.l1, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.2)
		  .from(this.house.mc.clumba.fl1.l2, 1.6, {rotation:"-=50", ease:Elastic.easeOut}, 1.2)
		  
		  .from(this.house.mc.clumba.fl2, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.3)
		  .from(this.house.mc.clumba.fl2, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.3)
		  .from(this.house.mc.clumba.fl2.l1, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.4)
		  .from(this.house.mc.clumba.fl2.l2, 1.6, {rotation:"-=50", ease:Elastic.easeOut}, 1.4)
		  
		  .from(this.house.mc.clumba.fl3, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.8)
		  .from(this.house.mc.clumba.fl3, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.8)
		  .from(this.house.mc.clumba.fl3.l1, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.9)
		  .from(this.house.mc.clumba.fl3.l2, 1.6, {rotation:"-=50", ease:Elastic.easeOut}, 1.9)
		  
		  .from(this.house.mc.clumba.fl4, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.6)
		  .from(this.house.mc.clumba.fl4, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.6)
		  .from(this.house.mc.clumba.fl4.l1, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 1.7)
		  .from(this.house.mc.clumba.fl4.l2, 1.6, {rotation:"-=50", ease:Elastic.easeOut}, 1.7)
		  
		  .from(q1, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 2.1)
		  .from(q1, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 2.1)
		  .from(q1.l1, 1.3, {rotation:"-=50", ease:Elastic.easeOut}, 2.2)
		  .from(q1.l2, 1.6, {rotation:"-=50", ease:Elastic.easeOut}, 2.2)
		  .staggerFrom(qs, 1.6, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.02, 2.3)
		  .from(q1.money, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 2.6)
		  
		  
		  .to(this.house, 1.0, {x:"+=130", ease:Expo.easeInOut}, 3.0)
		  .from(this.house.mc.ded.body, 4.6, {rotation:"-=10", ease:Elastic.easeOut}, 3.5)
		  .from(this.house.mc.ded.body.hand1, 2.6, {rotation:"+=40", ease:Elastic.easeOut}, 3.5)
		  .from(this.house.mc.ded.body.hand1.lok, 2.6, {rotation:"+=40", ease:Elastic.easeOut}, 3.6)
		  .from(this.house.mc.ded.body.hand1.lok.arm, 2.6, {rotation:"+=40", ease:Elastic.easeOut}, 3.7)
		  
		  .from(this.house.mc.ded.body.hand2, 1.0, {rotation:"+=40", ease:Expo.easeOut}, 3.5)
		  .from(this.house.mc.ded.body.hand2.lok, 1.0, {rotation:"+=40", ease:Expo.easeOut}, 3.6)
		  .from(this.house.mc.ded.body.hand2.lok.arm, 1.0, {rotation:"+=40", ease:Expo.easeOut}, 3.7)
		  
		  //wants to take
		  .to(this.house.mc.ded.body, 1.0, {rotation:"+=7", ease:Sine.easeInOut}, 4.5)
		  .to(this.house.mc.ded.body.head, 1.0, {rotation:"-=17", ease:Sine.easeInOut}, 4.5)
		  .to(this.house.mc.ded.body.hand2, 1.0, {rotation:"-=70", ease:Sine.easeInOut}, 4.5)
		  .to(this.house.mc.ded.body.hand2.lok, 1.0, {rotation:"+=80", ease:Sine.easeInOut}, 4.6)
		  .to(this.house.mc.ded.body.hand2.lok.arm, 1.0, {rotation:"+=20", ease:Sine.easeInOut}, 4.7)
		  
		  .to(this.house.mc.ded.body, 1.0, {rotation:"-=12", ease:Sine.easeInOut}, 5.7)
		  .to(this.house.mc.ded.body.head, 1.0, {rotation:"+=17", ease:Sine.easeInOut}, 5.7)
		  .to(this.house.mc.ded.body.hand1, 1.0, {rotation:"+=25", ease:Sine.easeInOut}, 5.7)
		  .to(this.house.mc.ded.body.hand1.lok, 1.0, {rotation:"-=20", ease:Sine.easeInOut}, 5.7)
		  
		  .to(this.house.mc.ded.body.hand2, 1.0, {rotation:"+=35", ease:Sine.easeInOut}, 5.7)
		  .to(this.house.mc.ded.body.hand2.lok, 1.0, {rotation:"-=10", ease:Sine.easeInOut}, 5.7)
		  .to(this.house.mc.ded.body.hand2.lok.arm, 1.0, {rotation:"-=15", ease:Sine.easeInOut}, 5.7)
		  
		  .to(q1, 1.0, {rotation:"-=20", ease:Sine.easeInOut}, 5.7)
		
		  
		  .from(this.house.mc.ded.body.hand2.lok.arm.money, 0.1, {alpha:0, ease:Power0.easeNone}, 6.7)
		  .to(q1.money, 0.1, {alpha:0, ease:Power0.easeNone}, 6.7)
		  .to(this.house.mc.ded.body, 1.0, {rotation:"+=5", ease:Elastic.easeOut}, 6.7)
		  .to(this.house.mc.ded.body.hand2, 0.7, {rotation:"+=45", ease:Expo.easeOut}, 6.7)
		  .to(this.house.mc.ded.body.hand2.lok, 0.9, {rotation:"-=70", ease:Expo.easeOut}, 6.7)
		  .to(this.house.mc.ded.body.hand2.lok.arm, 0.9, {rotation:"-=15", ease:Elastic.easeOut}, 6.7)
		  
		  .to(q1, 1.0, {rotation:"+=40", ease:Elastic.easeOut}, 6.7)
		  .to(q1.l1, 1.1, {rotation:"+=5", ease:Elastic.easeOut}, 6.8)
		  .to(q1.l2, 1.3, {rotation:"+=5", ease:Elastic.easeOut}, 6.8)
		  .to(q1.r3, 2.0, {rotation:"+=720", x:"+=190", y:"+=60", ease:Sine.easeOut}, 6.8)
		  
		  //to the city
		  .to(this.t1, 0.3, {scaleX:0, scaleY:0, ease:Back.easeIn}, 8.0)
		  .to(this.house, 1.0, {x:"+=390", ease:Expo.easeInOut}, 8.0)
		  .to(this.city, 1.0, {x:"+=190", y:-50, ease:Expo.easeInOut}, 8.0)
		  .from(this.packs, 1.0, {x:"-=270", ease:Expo.easeInOut}, 8.0)
		  
		  
		  .from(this.t4.p1, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 9.0)
		  .from(this.t4.p2, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 9.3)
		  .from(this.t4.money, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 9.5)
		  .from(this.t4.mc, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 9.7)
		  .from(this.t4.t1, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 9.8)
		  .to(this.t4.t1, 0.3, {scaleX:0, scaleY:0, ease:Back.easeIn}, 11.8)
		  .from(this.t4.t2, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 12.0)
		  
		  
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
			iceCreamFall();
			tl.play(0);
		}
		
		
		
		//icecream
		var z = this.packs;
		function iceCreamFall() {
			var i = 0;
			for (currObj in z) {
			  if(z[currObj] && typeof z[currObj] == "object" && i>=56){
				  TweenMax.set(z[currObj], {y:0, alpha:1});
				  TweenMax.to(z[currObj], 2.4, {y:"+=600", rotation:Math.random()*360, ease:Power0.easeNone, delay:(i-56)*0.1+6.5});
				  }
			i++;
			 }
		}
		iceCreamFall();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(2,2,0,3,true).p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo
	this.logo = new lib.Symbol1();
	this.logo.setTransform(81.9,-171.3);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// warn
	this.instance = new lib.Symbol116();
	this.instance.setTransform(0,183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// t4
	this.t4 = new lib.Symbol115copy3();
	this.t4.setTransform(-8,63);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// n1
	this.packs = new lib.Symbol151();
	this.packs.setTransform(0,-248);

	this.timeline.addTween(cjs.Tween.get(this.packs).wait(1));

	// t1
	this.t1 = new lib.Symbol115();
	this.t1.setTransform(13.7,-103.6,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// house
	this.house = new lib.Symbol112();
	this.house.setTransform(0,0,1,1,0,0,0,108.4,-396.7);

	this.timeline.addTween(cjs.Tween.get(this.house).wait(1));

	// city
	this.city = new lib.Symbol111();
	this.city.setTransform(0,0,1,1,0,0,0,0,-46);

	this.timeline.addTween(cjs.Tween.get(this.city).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#6A3CDD","#3C227D"],[0,1],0,0,0,0,0,195.5).s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-461.6,-289.4,924.3,1275.6);


// stage content:
(lib.mp_240x400 = function(mode,startPosition,loop) {
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