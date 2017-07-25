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
		{src:"images/packs.png", id:"packs"}
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



(lib.packs = function() {
	this.initialize(img.packs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,262);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE00").s().p("AANBCIgXAZIhMjNIBfBrIAagbIA0CVgAAjgiIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-11.5,17.5,23);


(lib.Symbol95 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE00").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-19.8,184.2,39.7);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE00").s().p("AseDAQgDgBgBgGIgKhOIgKhnQgEg1gEgcIgBgJQgBgFACgEQgFgEACgHQADgHgCgCQgDgGACgIQABgLgBgDQgCgGAHgIQAHgHAHAAICRgHQAJgBAEAEQAFAEgBAIQgBAPABAGIAEAUQABAIgCADQgDACgJAAQgRAAgSADQgIABgEgDQgDgCgBgIQAAgFgIgPIgCAOQgCAPgBAAIgYACIAGAVQACAKgEAKIgDgJIgBAAIgCAJIADAyIAEgBIAWgGIBSgRQAIgCAEANQACAJADASQADAQgHAAIACABQACADgBAEQgBARADAXIAFAoIACAhIADAQIgJACIABADQABAJgDAEQgDADgJADQgVAFggAAQgsABgJABIgzAEIgCAAQgEAAgBgBgArpArIgBAQQABARAEAPQABAHAAAMIAAAUIAAADQAGABAIgDQAHgCADgEQADgCAGAAIARgBQANgCAAgDIAAgLIgMhGIgOACIgcADIgNACIgBgFgAomCfQgCgCgGgDIgIgEIgGgGQgCgDAFgEQACgCAAgDIgDg6IgCgzIABhZIABggQAAgEAGgHIAFgGIAIgFQAugDAoAFIAeADQAGAAABAIIADAIIAEAHIACAGIAGA3QAAADgDAGIgDgBIACgIIgCAAIgCADIAAACIACAgIABAhQABAZgEAwQAAAPgDAPQgCAMgEAEQgEADgNAAIhWACIgEAAQgIAAgFgEgAnuguIgTACIgBAPIgDBfQAAAPAEAKIAEAHQAAACgHACQATAKAVgIIADgNIACgMIgBgcIgChgQgFgCgGAAIgJABgAmCBdQgGgIABgFQAAgFAIgFQAHgEgHgDIgHgEQgHgHAEgIQADgHAJADIATAEIADgeQADgOAHgMQAEgGAEgSIAKg2IAKgxIAsgHIAHAEIAFAEQADAEAGALIAWArIAYArIAHAMQAFAHACAGIADALIALAaIAGABQAJABAJAGIAPALIgcBDQgCAEgEABIg0AGIABgPIAEgQQABgIgJACIhaAUIAHAFIAIAIIAFAJIADABIgFAEIgFAEIglARIgog8gAkSgqIgRA0IgDAFIgHAXIA+gOQgKgMgIgUIgOgjgAhvCGQgIAAgCgCQgDgCAFgIQAEgGgDgEQgDgEgIgBIAAgNIAFijQABghgFgZQgCgNAGgJQAHgJANgBIAQAAQApgCAQACQAfAEAVASQAPALAHAVQAIAVgDARQgDAPgMARIgWAdQgDADgEACIgqARIgJAFQgEAEAAAGIABA5IABAIIACAIIgLAZQgDAFgGAAgAhAg2QAAAMAMgCIAWgCQAFAAAFgKQAGgKAAgIQABgGgGgHQgFgHgHgCIgggFIgBAvgABxB7QgOgGgNgSQgRgaABgrQAAgLgCgTIgDgcQgBgKACgQIABgaIAAgPIAAgXQABgGAHgOIgDgDIAQgPIAQgPQAGgFAOAAQAWAAAQACQAaAEALAPQAQAYAFAfQAEATAAAnIAABlQAAAFgFAKQgEANgJAMIgTAWQgCACgKABQgSAAgJACIgOACQgMAAgJgFgACGgRQgBAmAIAxIAHgGIAQgoQABgDgCgCQgDgFABgGQAAgEADgFQADgGgBgGIgJhMIgDgHIgGgKQgNArgBAugAEWByIgFgQIAAgFQACgBABgDQABgEgBgCIgDgEIgBgOQAAgJgCgGQgCgEAAgIQAAgIgCgEIgDgFQgDgMAAgEIABgFQAAgBgDgBIAAgCQACgHgCgLIgEgSIgDgVIgDgVIgCgYIgGhBIAFgCQAEgCgBgEIAEgBIA+gEIArgHIAUgBQAIAAADADQACADACAJIAJBAQABAGgCACQgDADgGgBIgXABQgKAAAAgJIgBgJQgBgFgDgEQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIADgFIgrAHIADACQgHACgCADQgCAEACAGIAKAvIADAPIADAPIAAAXIgBANIABAQIAAAPQAAAMAGAHQAEAFAKAAIAWgEQgFgFABgGQAAgDAEgGQABgCAAgDIgBgFIAGgDIAGgBIAdgBQAJAAABAIIAKA3IAAAFQABAEgBACQgCACgFABIhUARIgOABIgOABIgNADIgQgBgAHoBtQgFgWADgjQAEgsAAgKQgBgXABghIABg4QgOgFgOgBQgNgBgZADIgEgiIAAgiIDWgEIgFBMIgsgBQgMABgCAQIgKBLIgIBbIABATQAAAJgFAFQgEAGgKABIgcABIgIAAIgMAAgAKiBVQgHgIABgNQADgWgEghIgSiaIAAgNQAHgBADgFQACgEgEgFQgFgHACgDQACgCAIAAIAqgEQAFAAADAEQAFAHAIARIgBAHIgBAIIAEA2QAAAKAOADIArAPQAEACACACIAYAZQANAQAEAPQAEANgFAUQgGAWgNAMQgUASgeAGQgOAEgoABIgQABIgBAAQgMAAgGgIgALUgIIAEAqIAegHQAGgCAFgHQAFgHgBgGQgBgGgGgIQgHgJgEAAIgVAAIgBAAQgKAAABAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-19.3,167.1,38.8);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A70A").s().p("ACzCIIgaABIgDAAQgKgEgPACIgaAAQgNgCgHAAIgqAAIAAgEIAOgBQgCgDgDAAIgEAAIilgBIg8ABIgKAEIgGgCIghgBIgJACIAAABIAwAAIBagCIAAAEIgJABIhdACIgygDImXACQgWgCglACQgsADgPAAIg0AAQgTgFgJAAIgcAEIgBgMIAGgEQAEgCAAgEIAEgCIAZgGIACAIIAQgFQgCgEgEgBQgGAAgBgCQgCgOABgHQAAgJAIAAIAJgBIgCgJQgHgOAKgGQgJgFAAgFQAAgFAJgJIgEgPQgQgEgCgLQAAgDgFgDQgIgEAAgLQAGgKAOABQAHABAPgCIACgMIgWgCQgIACgGgGIgLgJQgBgBACgJQgLgBADgMIgKgBQAEgOgLgCQgFgBABgHQABgFAHAAIAKgCQAHgCAFADIACAAQAJgGANgBIAYAAIAHAAQATADAcgCIAugEIA0ABIELAHIAvgBIGPABIDggFIA9ACIHngJIAGACQABAKAAAEQgCANgDADQgBABgOACQAEAIAEABQADACALABIAeADIABAWIAbAJQAJAEgDAHQgBAFgIgCIgMgBQgWgFgIAUIgDAIQgCAFgFAAIgFARQgEAJACAIIAEASQgMADgSABIgeABIgOADIALAGIgCAFIAFgHIASgCQAMAAAIADIgGAMQAYAJANgBQAFAAAOADQAFAAAFAGIAAAKIAEANIgUAAQgKgBgLALQgEAEgHACIgPACIgHACQgMAJgSAAIgfAAIgegCQgKgBgOABIgZACQghADglABIh7AAIg7gCIgvADIiaAGQgKgEgQAAgAEsCEIAJAAIAAgBIgJAAgAs7CEIAtAAIAAgDIgtAAgAr7CAIAAABIAdAAIAAgCgAl0B/IBWAAIAAgCIhWAAgAstg3IgBALIAUAAQAHACAKgKQgKgEgGAAIgEgBIgQACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-14,179.1,28);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-79.5,-99.4)).s().p("AsaI+ITg27IFVFUIzSWmg");
	this.shape.setTransform(7.3,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.2,-90.9,159.1,178.8);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-175.5,-102)).s().p("AifvlIG8AJIhkfBInVABg");
	this.shape.setTransform(1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-99.8,57.1,199.6);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-272,-99.4)).s().p("Al6PhIAA/BIL1AAIAAfBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-99.4,76,198.8);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-98.3,-231.9)).s().p("AvMEsIAApXIeZAAIAAJXg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.8,-30,194.7,60.2);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-307,-230.4)).s().p("AvJE8IAAp3IeTAAIAAJ3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-31.6,194,63.3);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-363,-96.5)).s().p("AmZPEIAA+HIMzAAIAAeHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-96.5,82,193);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAJQgBgCABgDIALgMQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQgBABAAAAIgKANIgCABIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.1,1.9,2.2);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAOQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAABgBQAIgRAHgGQAAAAABgBQABAAAAAAQABAAAAABQAAAAABAAQAAABABABQAAAAAAABQAAAAAAABQgBAAAAABQgJAIgEANQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.5,2.3,3.1);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAWQgEgBABgEQAGgVAGgPQACgDAEACQADACgCADQgIAPgEATQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-2.2,2.2,4.5);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKANQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAQADgJANgLQAEgDACAEQABAAABABQAAAAAAABQAAABAAAAQgBABgBABQgMALgEAFQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.4,2.7,2.8);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAIQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAEgFAJgEQAKgBAGgCQADgBABAEQABAEgDAAQgUAEgGAEIgCABIgCgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-0.9,3.6,1.8);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAJgBAMAFIAWAEQADABABADQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQgQgCgbgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-0.9,5.2,1.8);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C595").s().p("AgBATQgEgBgCgDQgCgEADgDQgDAAgDgFQgCgDAEgCQgMgEAKgIQAKgIAJAHQANAIgDAUQgDAGgKgCQAAAAAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgCAAIgBgBg");
	this.shape.setTransform(1.6,-7.2,1.7,1.7,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C595").s().p("AgVAyIgWgvIAOAMQARALAPgEQATgFABgUQACgVgRgMIgIgRIASAIQATANAFAYQAHAbgVAVQgOAOgPAAQgJAAgLgEg");
	this.shape_1.setTransform(0,1.4,1.7,1.7,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-10.6,15.2,21.3);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C595").s().p("AAAAVQgSgMACgNQABgNANgCQALgDgEALQADgBADAFQACAFgCACQAEAAACACQABAEgCADIgDAEQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAgBQgFAIgFAAIAAAAg");
	this.shape.setTransform(5.8,-5.6,1.7,1.7,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C595").s().p("AgkATQgPgTACgVIAGgTIAHARQgBAUARALQASANAOgMQAOgJACgTIAAgTIAWAtQgLAegeADIgGABQgXAAgQgWg");
	this.shape_1.setTransform(-0.3,2.2,1.7,1.7,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-9.2,17.7,18.4);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49BBC7").s().p("AAJA2IgGgBIgDgBQAEgIAIgHIAGgDIAFgCIgNgCIgDgBIgDgBIABADQgBADgCACIgCACIgHAAQgLgCgLgKQAHgEAHgBIAKAAIgDgBIgKgMQgCAFgFAAQgDAAgFgDIgGgGIgFgHQAHgBAFABIAHADIgEgIQgHgCgEgJQgGgPAJgUQAPATABAKQABAHgDAHIAAABIABADIACAEQAAgDADgEQADgFAGgDQAEAOgDAEQgDAFgDAAIAFAGIAEAEIACACIgBgEIAAgFQACgGAEgEIAGAJIABAEIAAADQAAADgBADIgCACIAFACIAMACIgFgDIgDgFQgCgGADgMIAMAHIAEAEIADADQACAEgBAEIAAADIgCABIAJgCIABAGIgJACIACAAIABADQACAEgBADIgCAFIgHAEQgFACgIABIgCABIgHgBg");
	this.shape.setTransform(0,0,1.7,1.7,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-9.4,15.6,18.8);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49BBC7").s().p("AgDA9QgDgCgDgEIgBgDIABgBIgHAFIgDgEIAGgGIgCAAIgCgBQgDgBgCgFIgBgEIgBgGIADgNQALAFADAGIACAGIgBAEIACgBIAEgIIAAgDIAAgDIAAAAQgDAAgDgCIgDgCIgCgFIgEgLQAJAAAFACIABADIACADIABgCIgCgMQgBADgFgCQgGgCgIgLQAGgCAFAAQAFABADACIgEgIQgIgBgFgHQgGgHgFgXQAUAFAIAOQACAIgCAJIADAIQAAgDADgFQACgFAGgEIADAKIAAAIQABAGgDADQgEADgEgCIACAOIgBACIAHgHQAEgDAIgDQABAOgFAJIgFAGIgDABQgDAAgEgBIgBgCIgBADIgCACIgCAEIgCAIIACgDIAHgCQAJgDALABIgDAFIgIAMQgGAGgEACIgIADg");
	this.shape.setTransform(0,0,1.7,1.7,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-10.5,10.1,21.1);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AAsCqQgZgFgTgXQgNgSgFgSQgOgqgGg0QgGg4gWglQgPghgWgfQgLgQgJgJIA6AfQAXANAmAeQAvAnAYAfQA0BEAEA4QACAUgLATQgLAUgSAGQgXAIgMAAIgGgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-17.1,24.8,34.3);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AArA/QgZgEgPgaIgTghQgMgRgYgTIgLgHIgkgSQAIgBApAAQAwABAXAGQAPAEAQAHQASAIAIAJQASAQADAXQADAYgPANQgQAOgUAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-6.3,20,12.7);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AArA1IgagaQgWgXgWgNQgdgTglgMIgegIIAdgHIArgIQAqgEAOADQAjAHARAGQASAHAZASQASANAFAUQAFAYgNAOQgTAVgUAAQgQAAgRgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-6.7,24.9,13.4);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AgNAXIgtgSIgFgDIApgWQAXgLAVgBQAaAAAGAOIACAEQALAMgEAOIgFAMIgSAIIgDABQgbAAgXgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-3.3,12.9,6.6);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AgfAAIARgXQAHgGANgGIAQgCIAEAAQANAHACAQQACAJgNALIgEABQgaAAgdAWIgMAJQACgcAIgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-3.8,8.5,7.7);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AgLBvQgMgGgFgJQgQgdAFgrIABgeIACgPQACgUACgDQAHgUAKgPIAPgjQABAqABATQADAcAPAaIAMAWQAHANAAAMQgBAUACAHQADAIgFAIIgKAOQgCAEgQAFIgGABQgGAAgJgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-11.5,8.4,23.1);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AggA+QgKgDgFgNQgFgMAEgMQANgjAbgVIATgKIAfgQIAHgCIACABIgIAOIgoBYQgEAWgUAAIgLgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-6.3,10.3,12.8);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AgvA0QgMgGgEgSQgDgSALgKQANgOAVgLQAlgUAogKIAJgBIgWATIgGAHQgYApgFASQgFAVgQAFQgHACgGAAQgLAAgKgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-5.8,13.1,11.6);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AgPAxIgLgbIgFgSQgEgcAbgbQAGgFANACQAMACAHAQQAGAOgGALIgkA9IgFAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-5.6,6.7,11.2);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("AgGASIgXgJQgOgIgDgKQgDgOAJgOQAEgEAJgCQAYgEAMAQQAdAfAFATIAFAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-4.6,9.7,9.1);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("Ag3AuQgtgFgHgqQgDgSAOgJQAcgSAWgCQAlgEAVAKIARAMIAMAGQALAFANALQAOALAGAHQAQAPAIAVIhHgFIgEACIgLABQgHABgEgFQgCgDgFADIgbAHIgkADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-5,21.8,10.1);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B9C6").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,-65.5,131.6,131);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA5IABgQIAEAAIgBAKIAFAAIABgJIADABIAAAJIADgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBABgBIgBgFIAEAAIAAAGQAAAFgCAEQgCABgEAAgAAEAnIABgHIAAgEQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgCAHgBACIgFACQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQgBgCAAgFIABgGIAEAAQgBADAAADIAAADQABABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAEgKQABgCADABQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABACAAAGQAAADgBAEgAgJAQQgCgCAAgHQAAgDABgBIAFAAIgCAEQAAABAAAAQAAABAAABQAAAAABAAQAAABABAAIAFACIAFgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgFIAFABIAAAEQgBAIgCABQgCACgGAAQgHgBgCgCgAgKgFIAAgHQAHgDAPgDIAAAHIgFABIgBAHIAFABIAAADQgOgCgHgEgAgEgIIAHAEIABgGgAAIgUIgRgBIABgRIAFABIgBAKIAEAAIAAgKIAEABIgBAJIAKABQAAAGgEAAIgBAAgAgIgoIABgRIAFABIgBAKIADAAIAAgJIAFABIAAAIQAAAAABAAQAAABABAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIAAgFIAEABIABAFQgBAGgCADQgCACgGAAg");
	this.shape.setTransform(7.4,-2.3,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPA+IAAgEQAAgEAGgCIAPgJIgUgBIAHhoQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIAAAFIgFBbIAZACIAAADQAAAEgFADIgQAIIAUACIAAAFg");
	this.shape_1.setTransform(5.7,2.5,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEAEQgCgCgDgBQgFgBABgCIAAgEQAHACACACQADACgBADIAAAEg");
	this.shape_2.setTransform(3.6,-12.7,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0927").s().p("AAkBdQgwgCgPgCQgMgCABgMIgBgSIgBgCIgBgBIgKgBQgUgGgJgJQgRgNgGgZIgEgVIgCgUIgBgNQAAgHAHgDQACgBAHABIA1ACQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgKIgBgIIgBgIQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIACgBIAKAAQAWgBBVAFIAeADQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIgGAaIgKCMQgCAHgFADQgDACgTAAIgfgBgAhdgvIABARIACAPQACAOACAEIAGANQAKAOAOAFIARAFIABgBIABgoIgDgTQgDgTgKgFQgCgDgLAAIgZgBIgBAAIgBABg");
	this.shape_3.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-18.9,44.8,37.8);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7EEE6").s().p("AhuARIABgBQAGgIgBgJQAAgLgEgJIgBgDIDWAOIAHANIgCAPIgMAHg");
	this.shape.setTransform(-2,-0.7,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009A86").s().p("Ah6AaIAAgLQAHgLABgDQADgFgDgKIgGgQIAAgDIDmAJIANAWIgEAZIgYALg");
	this.shape_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-6.9,49.3,13.9);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7EEE6").s().p("AhrASIgEgEIgCgNIABgLIAJgLIDZAFIgEAlg");
	this.shape.setTransform(2.4,0.4,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0C418").s().p("Ah9AKIADgYIAagQIDdAFIgFA3IjgABg");
	this.shape_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-6.2,50.5,12.5);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBWIgBgYIAHAAIABAPIAHAAIAAgNIAEAAIAAANIAAAAIAGgBQACgCAAgFIgBgIIAGAAIACAJQAAAJgDAEQgDACgJABgAgNA4QgDgEAAgHQAAgIABgDIAHAAQgCAFAAAFIABAFIACABIACgBIADgIQACgFAAgCQADgCAFAAQAEAAADADQADAEAAAHQAAAHgCADIgHABQACgFAAgGIgBgFIgCAAIgCAAQgEAMgCADQAAACgGAAQgFAAgCgCgAgNAZQgDgDgBgKQAAgFABgDIAHAAIgBAHQABAGABAAQABABAHAAQAHAAACgBQACgCgBgEIgBgIIAHACQABACAAAFQAAAJgEADQgCADgLABQgKAAgDgDgAgQgHIAAgLQALgGAVgFIAAAKIgHABIAAAMIAHABIAAAGQgXgDgJgFgAgIgMIALAFIAAgJQgDABgIADgAgQggIgBgYIAHAAIAAAPIAHAAIAAgOIAEAAIAAAOIAPgBQAAAKgGAAgAgRhVIAHAAIAAAPIAGAAIAAgNIAFAAIAAANIAAAAIAHgBQACgCgBgFIgBgHIAGAAQACACAAAGQAAAKgEADQgCADgJAAIgSABg");
	this.shape.setTransform(-8.2,-3.6,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBZQAAgHAHgEIAXgOIgdAAIgDicQADAAACAEIABAGIACCKIAnAAIAAAEQAAAHgHAEIgXAOIAeAAIAAAIIgsAAg");
	this.shape_1.setTransform(-9.4,3.6,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAFQgDgDgFgBQgHgBAAgDIAAgHQALACAEADQAEAEAAAEIAAAIQgBgCgDgEg");
	this.shape_2.setTransform(-15.1,-18.8,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0927").s().p("AiHCIQgIgEgCgLIgDgrIgCgvIgFhHIgDgxQgCgNgEgVIgBgEQAAgBAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQAFgCAogCQB0gGAsADIAPAAIAEABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgCANIgBAMIAAAPIABAAQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIBQgDIAFAAQAFAAADACQAKAFAAAIQAAAJgCALQgEApgGAWQgKAmgZASQgOANgeAIIgOACIgCABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIgBAbQAAAFgDAFQgFAIgLACQgUADhKACIgrABQgeAAgGgEgABkhGQgKABgGACIgEACQgNAHgFAdQgEAQgBAMIAAA8IABACQALgBAPgGQAVgIAOgVQAHgJADgJQAGgMADgmIADgaQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_3.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-28.1,66.7,56.2);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36461A").s().p("AB4AqQgIgEgBgJQgBgIAGgFQAGgFAIAEIACAAIAEAEQgDABAAADQgCAGAGABIADAAQgBAGgFAEQgEAEgEAAQgDAAgDgCgAiJgWQgEgHAFgGQAEgHAIgBIACAAQAFAAADACQgCABgBAEQgCAHAGABIAEAAIgCAGQgDAIgKAAIgBAAQgIAAgEgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-4.4,28.1,8.9);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B9440").s().p("AAbAyQgBAAgCgFIgHgOQgRgigagUQgOgIgFgFIAHgOQABgBAQAJIASAMQAQAOAMARQARAZADAMIABAFIgCABIgLAGIgEABIgCgBg");
	this.shape.setTransform(-2.5,2.7,1.799,1.799,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E67E29").s().p("AgLBDIg4hEQAHgWAFgJQAIgSAMgJQALgIAUAAQAPAAAPAGQAcALAKAcQAKAbgQAYQgMASgTALQgQAKgOAAIgIgBg");
	this.shape_1.setTransform(0,-0.1,1.799,1.799,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-12.3,24.5,24.7);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7EEE6").s().p("AhkgIIC/gPIAJAIIABAMIgBAJIgEAEIi+AOg");
	this.shape.setTransform(2,-6.8,1.799,1.799,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7EEE6").s().p("Ah1gHIDggIIALAKIgDAHIgGABIjhANg");
	this.shape_1.setTransform(-1,2.6,1.799,1.799,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7EEE6").s().p("Ah8gBQDvgRAEACIAGALIgFAKIjxAMg");
	this.shape_2.setTransform(-1.4,10.1,1.799,1.799,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7EEE6").s().p("AhxAZQAFgJAAgLQAAgKgHgIIgBgBIDbgNIANAGIABAQIgHAPIjgASg");
	this.shape_3.setTransform(1.2,19.8,1.799,1.799,-6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0C418").s().p("AhugQIDDgPIAXAMIAEAVIgRAUIjFAKg");
	this.shape_4.setTransform(3.8,-7.4,1.799,1.799,-6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009A86").s().p("Ah+gRIDigIIAbARIgFAOIgTAKIjkAKg");
	this.shape_5.setTransform(0.7,2.3,1.799,1.799,-6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC8953").s().p("AiFgKID5gNIASAKIgFATIgQAGIjzAMg");
	this.shape_6.setTransform(0.3,9.8,1.799,1.799,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009A86").s().p("Ah9AjQAEgHACgLQADgJgDgIQgBgDgIgJIAAgMIDkgNIAZALIAEAaIgMAYIjyAOg");
	this.shape_7.setTransform(3,18.9,1.799,1.799,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DD8C31").s().p("AhlAmIgGgxQgBgFAEgEQAEgFAHgBIDDgWIAHAAIjBAfQgGABgEAFQgDAFAAAFIAJAzQgMgCgBgKg");
	this.shape_8.setTransform(-6.3,-17.4,1.799,1.799,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBEDD1").s().p("AgGgWIAIgCIAFAwIgHABg");
	this.shape_9.setTransform(-5.7,-17.4,1.799,1.799,-6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBEDD1").s().p("AgGgXIAIgBIAFAvIgIACg");
	this.shape_10.setTransform(-8.5,-16.7,1.799,1.799,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBEDD1").s().p("AgGgWIAHgBIAGAuIgIABg");
	this.shape_11.setTransform(-11.3,-16.1,1.799,1.799,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E4F2C").s().p("AgKAOQgGgFgBgHQAAgGAEgGQAFgGAHgBQAGAAAGAEQAGAFABAHQABAGgFAGQgFAGgHABIgCAAQgFAAgFgEg");
	this.shape_12.setTransform(-17.9,-14.5,1.799,1.799,-6.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3B557").s().p("AhoAvQgEgEgBgFIgGgxQgBgFAEgEQAEgFAHgBIDDgWQAGgBAFADQAFAEABAFIAFAxQABAFgEAFQgEAEgGABIjEAXIgBAAQgFAAgFgDg");
	this.shape_13.setTransform(-4.9,-17.5,1.799,1.799,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-28.5,52.3,57.1);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],2.4,0.4,0,2.4,0.4,20.4).s().p("AAvBWQgEgBgCgIIgBgMIgBgEIgFgCQgfgNgegaQgVgPgSgUQgbgfAFgUIABgDQAAgIAVgGQAWgHAMANIAVAXQAHAGAOAUIAWAaQAEACAIANQAIALAHgBQACgBAFgEQAFgDADADQAEAGgOAJIARAHQALAFgDAFQgBAGgWgMIAMAMQAJAJgEAEQgDADgKgIIgMgJQATAVgGADQgFADgHgJIgKgLIAEAPQACAJgGAAIgCAAg");
	this.shape.setTransform(1.5,1.3,1.799,1.799,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57BC8D").s().p("AgaATQgTgVAigbQAPgNARANQAIAHAFAKIgjAxQgQgGgJgMg");
	this.shape_1.setTransform(-12.5,-9,1.799,1.799,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-15.8,37.3,31.6);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57BC8D").s().p("AgBAfIgRg8IATgFIASBFg");
	this.shape.setTransform(7.7,13,1.799,1.799,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],5.4,-1.3,0,5.4,-1.3,17.5).s().p("ABIAjQgLADgPgBIgbgEQgrgHgagNIgFgCIgEADIgKAHQgGAEgFgCQgGgFAJgFQAMgGACgCIgPABQgLAAgCgFQAAgCALgCIAQgCIgPgBQgMgCgBgFQAAgFAOAAIAQAAQgXgGADgGQACgGAMAEIAPAJQgCgRAHgBQADAAACAGIACAIQADAGAOgCIAUgDQAZAAAeADIAQACIARAAIABAEIAAABIAIAyIgHABQgCAHgFAAQgFAAgCgHg");
	this.shape_1.setTransform(-8.1,13.8,1.799,1.799,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF0024").s().p("AglBlIgUg2IA2iXIAnA6QAkA+gYApQgYAqggAGg");
	this.shape_2.setTransform(14,-1.2,1.799,1.799,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-19.8,50,39.6);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AChC3IAAgCIACAAIAAACgAgtBeIgCgPIAFABIAAAAIgBADIAAADIABACIABAAIACAAIACAAIAAgDQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIABAAIgBAEIADAGIgCAAIAAABIABADIAEAGIgCgBIgEgEIgEAOIAAABIADAAIABABIAAABIgBABIAAADIABABIACACIACAEIACAFIgBADIgBgBIgCAuQgHgqgDgpgACzCtIAAgDIACAAIAAADgACnCgIAAABIgCABQgBAAAAAAQAAgBAAAAQABAAAAAAQABAAABgBgAC2CVQAYg5gtguIgGAAQgLAQgVAIIAAgGIAFADIADgEIABAAIgBgFIADgBIgBAAIAAgBIAJAAIACgCIAAgGIAFgCQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAgJgGgLQgNAGgHALIgCADIABACIgHACIgBACIgCAAIgBAAIgDABIgEAEIADgHIgDgDIAAgDIAEADQgGgHABgMQAAAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIACgBIAAgBIABACIAAAAIAAgDIgBgBIAFADIACgHIgCgFIAJAAIgHgCIAAgFIAGAFQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIACAAIAAgBIAAgDIACgBIgBgFIABAAIAEAAIAHAEIgGgHIADACIACABIACAAIAAAAIAAgCIAAgBIAGADIAAAAIgCgDIAMAGIAAAAIACAAIACAGIABgFIADAGIgGAAIAEADIAAABIADAFIACAGIAAgBQABABAAAAQABAAAAABQABAAAAAAQAAABABAAIgDABIABAAIAEAFIACABIABAGIgHgHIgCAAIAAABIABACIABABIAEABIABAGIAAAAIACAGQADAIAFAGIABACIADgBIABAEIABgBIgBgDIAAgCIgBgCIgCgEIABgIIgDgDIAAgEIABgCIABgDIAAAAIACgDIADACIABABIAAgDIgCgEIAIAAIADgEIABABIAAAAIADgCIAAAAIABgCIAEAAIAFgDIABgCIAKAAIgBgFQAIAHgPAGQgsASAeApIgFgFIgDgFIgFgCIAEALIgDgCIgCAAIACAGIABADQABAEAAAGIgBgBIAAAFIACACIAEAHIABAAIgBAEIgDADIgCACIgBABIAAADIgDADIAAALIgFAEIgDAKgACaA2IAKAHIAGAPIABAGIAFgBIABACQgDAGADAKIACAJIgFADQABATgGARQAGgugVgvgAgQCGQgDgQgBgQIAIAMIABABIAAADQAAABAAAAQAAABAAAAQAAAAAAAAQABABAAAAIABAAIAAAJIgBAGIgCAHIgEgJgADICCIAAABQgBgBgBAAQAAgBgBAAQAAAAABAAQAAAAACABgAjFBzIgEACIgCgFIAGADIAIgFQAEgDACgDIAHABIADAEIAHgHIACABIAAgDIgBgEIAHABIgFgGIAEgJIAFAEIABgFIAAgCIAIAJQgDgEgBgFIABgCIABgBIABABIACgHIAEAFQADAEACgCIgCgBIADgCIADgBIACAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIABgCIAAABIACAAIACABIACAAIAGAEIABgBIAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAgBQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBACIgEAAIgDABIgEgDIgEACIgJAPIgGADIgCAEQgXALgZACIgEAHgADMByIAAgDIACAAIAAADgAjSBuQASgdAWgdIAJAAQAFgJAKgGIAEABQArg2AygxQBjgFBZgqQBbgGAjBQQgPgFgFgOQAEANADAdIAAAEIgEACIgBgKIAEgDQgDgGAAgDQgCAEgBAAIgCgCIABgDIABgBIgJgHIgBACIgBgBQgEgDgFAHIAAAAIgBgEQgKgGAHAHIgJgFIADgIIgDAGIgJgBQAHAAABgHQAAgBgBgBQAAgBgBAAQAAAAAAAAQAAAAAAABIgBAEIAAAAIgEgDIgBAAIAAAEIgEgDIgLgCIgBgEIgCAEIgCgBIgCgGIABAAIgCgBIgBAEIgFgHIABAJIgHgLIABAIIgIgGIADAGIgKgIQgDACgEABIgCgBIAAAGQgEAAgBgEIgBgCIgBACIADAFIgFgCIgBgBIAAAFIgEgDIgCgGIgBAAIAAABIAAADIAAAAIgDgCIACAHIgBgCIAAAEQgCADgCgIQgHgIACANIgEgJIgCAEIgBABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAABABIgGgIIgDAGIADAJIgEgCIgBgCIAAAEIgFgCQACAHAGALIACABIAAABIgCAAIgCABIABABIACACIgBAAIgBABIABACIAAABIABABIgBAJIgEgTIgEgBIgDAAIABgBIgBgCIgEgGIgFAEQgFgDgBgHIAAACQgCAHAFADIgBAAQgEgCgBADIgCAFIgCACIgDgBIAAAAIABACIACACIAAALIADAGIgGAFIgFgIIACAIIABACIgBAAIAAAAIAAACIAAACIAAAAIgCAEIgCACIgCAAIABACIgBABIgEgBIgEgEIgEgBIABgEIABAAIACABQgBgQgHgRIgDgBIgCAAIgCgCIgBABIABAEIAIAAIgEADIgBAAIAAAAIAAADIgEAAIAAABIgBABIgBABIAFAGIgCgBIgBABIAAABIAAABIgFAAIAAAFIACABIADAEIgFgFIABAIQgGADgDAJQgCAEAFAAIgBABIgDAAIgBAAIgCgBIgBgBIgCgBQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIAHAJIgBgBIgFgFIgCAAIgCABIgEABIAAABIABgJIgBAAIgEgFIgBABIgBgFIgEgCIgBgBIAAABIgBACIgGgJIABAJQgBgHgKgGIgDgDIAAADQgEgDgDgGIAAABIACAJIgEgDIgHgHQgIgIAEANIAAACQgDACgCgMIABgFIgEgBIADAPIgFgGIgBgCQAFgDgLAEIAAABQgDgDgEACIgQAHIACAFIgFABQAEAHgHgEIAAABIgCALIgIgCIACAKIgCgEIgEgDIABAHIgDgEQACALgDgEQgCADADADIgGgEIAAAGQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAABAAAAIgBADIgCgGIgGAGIABAFIgCgCIgBABIgEAHIgGgDIAAAEIgFAFIACAEIgFgBIAAgHIgHAEIgDAGQgIgCgFAHQAIAEAIAGIgWAAIADAEQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIAAgBQgDgDABAEIABAEQgDABAAADIgDgDIgKANQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBgBIgCAAQAAAKgJAAIgDgBgAC6g8IAAAAIgBgDQgEAIAFgFgADOBqIAAACQgFgCAFAAgAgPBpIACAAIgBADgAgcBbIgBgHQABABAAAAQABABAAAAQABAAAAgBQAAAAAAgBIABgCQAAgDgGADQABgKAGAHIABgGIACABQgBgHAEAAIAAAGIAEADIAAAMIAMAEIgMgCIgKAHIgCAJQgCgFAAgKgAAEBeIAMgBQgDgBgBgDIABgBIAHADIgDgMIADADQABAGAGADIAFADIAGAAIgCgDIgBgGIAGAFIAAgBIABgCIAEAGIAHADQgKAFgLAAQgNAAgPgHgADIBkIAAgCIACAAIAAACgAjCBkIAAgCIADAAIAAACgABBBeIAAACQgGgBAGgBgAgdBdIAAACQgGgJAGAHgABIBbIACAAIgBADgAgBBbIADAAIgCADgABCBZIAAACQgEgCAEAAgABXBaIAAgDIACAAIAAADgAAiBXIAAADQgIgCAIgBgAgFBZIAAgCIADAAIAAACgAgKBWIABACQgFgCAEAAgAg4BRIAAAAIAAgBIAHABIACAGIgJgGgABCBVIABABIgCABQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABgBgABIBUIADAAIgBACgAAxBWIAAgDIACAAIAAADgAjcBIIANgGQARgJAMgOIhJAKQAbgIAegCQAPgDALgMQAUgUALgVIAEgCQAIgMAEgMQARgogZgjQgOgSgVgGQgdgGgfAIIAAgGIgcAHIgLACIAAgEIAAgDIACgDIAJgGQAqgGApAGQARACAPAJQAwAegTA1QgNAngbAeIgIAFIgEAEIgFAJQgCADAAAFIAAABQAGACgFADQghATghAQIgNAFQAJgJAQgFgAAYBVIgBgCIADACIgCAAgABkBVIAAgDIACAAIAAADgAijBVIAAgDIACAAIAAADgAAlBVIAAgDIACAAIAAADgAAcBTQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQgCgBgCgBQgBgBAAAAQAAAAAAAAQABAAABABgAhIBOIgBgBQABACAFgDQAGADgEgFIABAAIAHAEIgBABIgFAFIgJgGgAA1BSIAAABQgFgCAFABgABOBQIAAACQgIgCAIAAgAAOBPIAAACQgFgFAFADgABlBPIAAABQgGAAAGgBgAAnBPIgBABQgCgGADAFgABxBPQACgFADgBIACABQAAAFgFAAIgCAAgACqBMQABgFADADIACAFgAhfBPIAAgDIADAAIAAADgAhiBPIAAgDIACAAIAAADgAAxBJIACAAIgBADgAACBMIAAgDIACAAIAAADgAAXBMIAAgGIACAAIAAAGgAhgBLIAAgDIACAAIAAADgABBBIIAFAAIgCACgAAlBJIAAgCIACAAIAAACgAANBEIAFAAIgDAFgAg+BJIAAgCIADAAIAAACgAgFBIIAAgCIADAAIAAACgAgOBEIABACIgBACIAAgEgAA3BGIAEgBIAAACgAiFBHIAAgCIACAAIAAACgAg2BFIAAABQgFgFAFAEgABJA5IACAAIADANQgKgGAFgHgAgNBGIAAAAgAgJA/IACACQAAABgBgBIgFAFQACgEACgDgAAvBDIADAAIgBACgAh9BDIADAAIgCACgABBBBIABgBIACgBQADAAACAFIgIgDgAgeA+IAAgBIABgBIADAIIgEgGgAg+BEIAAgCIADAAIAAACgAAbBAIACAAIgBADgAAZBCIAAABQgFgCAFABgABxA+IADAAIgCADgABQA7IABABIACAEQgJAAAGgFgAgRBAIAAgCIACAAIAAACgAAvA/IAAgDIACAAIAAADgABEA9IAAAAQgHgCAHACgAgPA6IACAAIgBADgABzA9IAAgDIACAAIAAADgAB/A4IACAAIgBACgAA3A1IAGAEIABABgAAoA6IAAgCIADAAIAAACgAARA3IACAAIgBADgAADA4IAAACQgDgCADAAgAAmAzIACACIADACgAAiA1IACAAIgBACgABGA0QADgIACAHIAAAEgAgFA0IADAAIgBADgAA9AsIACABIACACIADAEQgEgCgDgFgABXAxIAAgCIACAAIAAACgABjAuIgDgEIAFABIADAFgABQAwIAAgFIACAAIAAAFgABMAwIAAgCIACAAIAAACgAAdAwIAAgCIADAAIAAACgAALAwIAAgCIACAAIAAACgAAiAtIAAgDIACAAIAAADgABnApIgFgPIAFABIACARIgCgDgAANApIACAAIgBADgABGArIAAgCIACAAIAAACgABbArIAAgHIADAAIAAAHgAA4ArIAAgEIACAAIAAAEgAAuAqIAAgCIACAAIAAACgAAJAoIAAgDIACAAIAAADgABXAiIACAAIgBAEgAAUAjIADAAIgCADgAh/AAQAqgpgFg6QgCgYgQgTQgyghg+ANQgJABgIACIgPAEIgHgJIAHgIQAwgMAxACQAvAGAXAoQALATgBAWQgCArgaAiQgbAeggAaQAQgUATgSgABgAjIACAAIgBACgAAsAlIAAAAQgCgBgBgBQgBgBAAAAQAAAAABABQABABACABgABMAjIAAAAQgEgFAEAFgAAJAgIAAACQgFgDAFABgAATAiIAAgDIACAAIAAADgABfAhIAAgEIADAAIAAAEgAC2AfIAAABQgHgBAHAAgAA5AdIADAAIgBADgAhjAfIAAgEIACAAIAAAEgAAyAeIAAgDIADAAIAAADgAAUAeIAAgCIADAAIAAACgAACAdIAAgCIADAAIAAACgADJAbIAAABIgDABIADgCgAAmAbIAEgEIAAAFgACuAbIAAAAIAAAAgAC3AZIAAABQgHgFAHAEgABoAaIAAgDIAFAAIAAADgABLAZIAAgDIACAAIAAADgAAAAZIAAAAIAAAAgABrATQADAAACACIACACgAhoAWIAAgDIACAAIAAADgAglAVIAAgDIACAAIAAADgACrARIACACQgHgEAFACgABnATIAAgCIACAAIAAACgAAqAQQAFACgFABgABdARIAAACQgGgCAGAAgABVASIAAgCIACAAIAAACgAAoAKIACAGIgBABIgBgHgADqAQIAAgDIACAAIAAADgABpAQIAAgDIACAAIAAADgAhnAOIAAACQgFgCAFAAgADkAMIAAABIgCABQgBAAAAAAQAAgBAAAAQAAAAABAAQABAAABgBgAgbAKIAAACQgBgCAAgBQAAgBAAAAQAAAAAAAAQAAABABABgAgXALIAAgDIACAAIAAADgABWAJIAAgCIADAAIAAACgADnAHIABACQgGgEAFACgAB8AAIACADIAAAFgAhGAIIAAgEIACAAIAAAEgAhaAHIAAgDIACAAIAAADgAgsAHIAAgDIACAAIAAADgAAdAEIAAACQgFgCAFAAgAD4ABIAAABQgHgCAHABgAgaACIAAgCIACAAIAAACgABLAAIAAAAQgHgBAHABgAhAgDIACAAIgBADgAhcAAIAAgBIADAAIAAABgAD2gCIAEAAIgCACgAhWgGIACAAIgBAEgACagEIAAABQgBgBgBgBQAAgBAAAAQAAAAAAAAQABABABABgAAagGQACgBADACIgBABgACNgKIACAAIgBAEgAAhgGIAAgCIAFAAIAAACgAhGgJIABABQgGgDAFACgAg+gKIAAgCIADAAIAAACgAAogOIACAAIgBACgAAigOIAAgCIACAAIAAACgADogTIACAAIgBADgAAjgRIAAgDIADAAIAAADgABIgWIAAgCIACAGIgCgEgABdgYIABACQgHgDAGABgADogkQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIAHAIIAAABIgBAAIgEgDIAAACIABABQAEAGgEABQgEgHgBgGgABOgYIAAgFIACAAIAAAFgABLgeIAAgCIACAAIAAACgADWgkIAAACQgFAAAFgCgADMgkIAAgCIACAAIAAACgAC7gvIABgBIAGAFIgHgEgACeg4IgBgBQACgHABAGIABADIAFADIgFABIgDgFgACwg2IACAAIgBADgACBgzIAAgFIACAAIAAAFgACRg3IgBABQAAgKABAJgACog4IABgEQAIAFgJAAgACXg+IADAAIgCADg");
	this.shape.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-18.8,53.1,36.7);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AAXCZQAAgQgMgMQgHgIgCgIQgEgZgVgNQgZgQgQgZQgFgIAAgIQADgfgJghQgKgBgIgEQgXgHACgPIAIAGIAMgCQATgCAQgJIAFgMQAFgNgHgJQgTAdgkAAIgBACIAAACIgBABIgBAAIgEgMQAJgBAIgEQAdgIAUgZIAHAAIAAgFIgCgBIgBgBIgBgCIABgDIAIgGQAJgEAHAGIACAEIABACQABAGgEAEIgBABQAMAaANAOIAfgIQAlgKAkgIIAEgJIAFgBIAGADIgYAcQgUAYgdAGIgvALQgeAIgfABQgLAnAfAVQAUAOAWAOQARALAKASQANAZARAZIAJACIAAABIgBAEIgCACIgQACIgHgKQgWgXgIgbIgUgSQgPgNACAHQARANAKATQAKAPAEASQAFAYAPAPQgDAEgGAAIgGgBgAg1hMIgCAIIgBAKIAHABQAdAFAYgNIgEgJQgCgHgHgFgAhghCIALAHQAHADAJgCIAGgNQAAAAAAAAQAAAAgBAAQAAgBAAABQAAAAAAAAQgNABgNgBgABDhqQgkAIgeAOQAEALAMAFQATgFAUgEQAggHAMgcQgRACgQAEgAgthXIAfgCIABgFIgKgSIgHAAg");
	this.shape.setTransform(0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-15.4,24,31);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AAtB7IgYgeIgMgXIgwhHQgQgUgFgMIgNgbQgFgLACgEQAHgUAAgEQADgHABgNIBSB5QAIADADgJIAFgJQABgFgDgFQAEgEAAgJIgBgPIAFhGIABgGQAIgCAHAGIALAKQAJAGACAKQABAGgBAPIgVCuIgBAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-12.9,15.7,25.8);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AgVADIgCACIgEBpIgFgHIgCAGIgBAAQgFgJgRgHIhVg6QgGgDgEgJQgFgJAAgFIANAFQgHgGABgHIAFgKIAPAFQADACAIAEIAgAdIAOAHIAEgrQADgcACgGQAAgCAJgQIAFALQADgFAEAAIAHAEQAMAKAKABQAIAAAHAIIBCAxIAKAFIg6hxQgEgIACgDQABgEAHgGIAVgSIAsBIIAzCEQANAhAEAQQh5hJg6gzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-12.8,31.7,25.6);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AgPCXQgJgIAKgKIArgsQAFgKgLgBQgEgCgGABIgLAAQgVAAgDABQgBABgMgJIA6hCIAOgJIAZgaQAFgEAGgLQAGgLAFgEIgEAAIibApQgIADABAEIgLACQgDAAgCgJIgCgRIAJgvIAJgMQgOABgHACQgLADgWAKIgfAMIgJACQgHgIgBgEQgBgCABgEQAAAAAAgBQABgBAAAAQAAAAAAgBQAAAAABAAQAKgDADgOQADgNANgFQARgHBHgXIARgGIgJBCQAKAJASgEIAmgFICMgfQANgEACAJIAWAFIh7CfQgEAHAIADIANAEQAKABAJARIAEAIQgKgCgIAGQgJAJgGADIhQA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-16,37.3,32);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AhvBfQgDgFAFgGIAIgKQAJgOAWgeIABgLQALABADAFQAEAGAOAMIALAHIAghPIAOgqQAKgYALgNIAHAIIACgBIgCgIIADACQAHAMAOAsIApB+IgBANIgKAFIgGgCQgGgCgEADQgGgFgCgEIgUhTQgEgLgGgLIgOAlQgGATgJAUIACgOIgCgBIgDAWQgBAMgJABQgGACAAAIIgDAMQgJAFgYgJQgHgDgDgJIgBgSIgDgBIgjAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-11,22.8,22.1);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AAGBWIgagpQgmgygNgfQgCgEgQgWIgGgNQgDgIADgEIACgVIBCAgQAHgCAGAFIAMAHIA7AgQATALACAFQAFAKAPAIIgKAYQgCADgFgBQgPgDgRgKIgfgRIgggYQgFgDgOgBIARARQAQAWAbAyQAEAHAMANIAGAJQgJABgFAJIgKANIgTgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-11,19.7,22);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("AgSCCQgCgCAEgGQAkg0A5gxIAKgKIgKgGIjthTQgCgCgkgKQgLgDgLgSICkgOQASgBAhAAICygGQAPgBADAPIgBAGIgIAPQgCAEgFgBIghABIgOADIgjgBQhCgEglAIIgkgBIgJADQATgCAfAPICSAvIAAABIgIACIAYAWIhGBOQgFAFgCAHQgBACACAEIADgEIAGgDIBqgcQAIgBAEABQADACADAHIAEAGQAEADgBAEIgBAHQgBADgHACIjeAnQgGgBgCgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-13.4,44.3,26.8);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKATIAAglIAVAAIAAAlg");
	this.shape.setTransform(-16.3,-10.1,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGANIAAgZIAOAAIAAAZg");
	this.shape_1.setTransform(19.2,11.1,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIARIAAghIARAAIAAAhg");
	this.shape_2.setTransform(-9.8,6.1,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAUIAAgnIAEAAIAAAng");
	this.shape_3.setTransform(14.4,-3.7,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAUIAAgnIADAAIAAAng");
	this.shape_4.setTransform(16.3,-3.7,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A978").s().p("AiOgMIEdAAIAAAZIkdAAg");
	this.shape_5.setTransform(0,11.1,1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7C66B").s().p("Ah2gQIDtAAIAAAgIjtABg");
	this.shape_6.setTransform(-2.2,6,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4A973").s().p("AhdgKIC7gBIAAAWIi7ABg");
	this.shape_7.setTransform(-7.8,1.7,1.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F382F").s().p("AiBgTIEDgBIAAAoIkDABg");
	this.shape_8.setTransform(0.5,-3.6,1.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A978").s().p("AhsgSIDZAAIAAAlIjZAAg");
	this.shape_9.setTransform(-5.1,-10.1,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-13.2,46,26.6);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B8D42").s().p("ABqAtIjMgIQgGAAgEgFQgFgEAAgGIACg2QABgIAHgEIABACIgEA1QAAAGAEAFQAEAEAHABIDLAQIACAAIAAAAIgHACIgBAAg");
	this.shape.setTransform(-1.7,-13.2,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1DDB1").s().p("AgEAaIABg0IAIAAIgCA1g");
	this.shape_1.setTransform(-0.2,-13.3,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1DDB1").s().p("AgFAaIADg0IAIAAIgDA1g");
	this.shape_2.setTransform(2.4,-13.2,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1DDB1").s().p("AgEAaIACg0IAIABIgCA0g");
	this.shape_3.setTransform(5.1,-13.1,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E4F2C").s().p("AgMANQgGgGABgHQAAgHAGgGQAFgGAGAAQAIABAFAGQAGAGAAAGQgBAIgFAGQgGAGgHAAQgHgBgFgGg");
	this.shape_4.setTransform(11.3,-12.9,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FB868").s().p("ABlAuIjLgIQgHAAgEgFQgFgEAAgGIACg2QABgGAEgEQAFgEAHAAIDKAIQAHAAAFAFQAEAEAAAGIgCA2QAAAGgFAEQgEAEgGAAIgBAAg");
	this.shape_5.setTransform(-1,-13.3,1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FACFB5").s().p("AgGAaIAFg0IAIABIgFA0g");
	this.shape_6.setTransform(2.7,0.1,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FACFB5").s().p("AgGAaIAFg0IAIABIgFA0g");
	this.shape_7.setTransform(5.3,0.3,1.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FACFB5").s().p("AgGAaIAFg0IAIABIgFA0g");
	this.shape_8.setTransform(7.9,0.5,1.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E4F2C").s().p("AAAATQgIAAgFgHQgFgGABgHQABgIAFgFQAGgFAGAAQAIABAFAHQAFAGgBAGQAAAJgGAFQgFAFgHAAIAAgBg");
	this.shape_9.setTransform(14.1,1.2,1.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4A973").s().p("ABhA1IjKgVQgGgBgEgFQgFgFABgGIAFg1QABgHAFgDQAFgEAGAAIDKAVQAHACAEAEQAEAFAAAGIgFA1QgBAHgFADQgEAEgGAAIgCAAg");
	this.shape_10.setTransform(2,0.4,1.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DD8C31").s().p("ABjArIAEg1QABgGgFgFQgEgFgGAAIjJgRQADgCAEAAIDLAIQAGAAAFAFQAEAEAAAGIgCA2QgBALgLADg");
	this.shape_11.setTransform(-1.4,13.3,1.6,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBEDD1").s().p("AgFAbIACg1IAIAAIgCA1g");
	this.shape_12.setTransform(-1.5,13.3,1.6,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBEDD1").s().p("AgEAaIACg0IAHAAIgBA1g");
	this.shape_13.setTransform(1.1,13.5,1.6,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBEDD1").s().p("AgEAaIABg0IAIABIgBA0g");
	this.shape_14.setTransform(3.7,13.5,1.6,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E4F2C").s().p("AgMANQgGgGABgHQAAgHAGgGQAFgGAGAAQAIABAFAGQAGAGgBAGQAAAJgGAFQgFAGgHAAQgHgBgFgGg");
	this.shape_15.setTransform(10,13.8,1.6,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3B557").s().p("AhmAmQgHAAgFgFQgEgEAAgGIACg2QAAgGAFgEQAFgEAGAAIDLAIQAHAAAEAFQAFAEAAAGIgCA2QgBAGgEAEQgFAEgHAAg");
	this.shape_16.setTransform(-2.3,13.3,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-20.7,42.7,41.5);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7EEE6").s().p("AhlAPIgCgNIAAgKIAIgKIDGAAIgCAkIjFABg");
	this.shape.setTransform(-3.4,-12.8,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7EEE6").s().p("Ah1AOIgEgIIAKgKIDogLIABAaIjpAFg");
	this.shape_1.setTransform(1.1,-5,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7EEE6").s().p("AiAACIAFgKQADgCB8gCIB9gCIgBAVIj6AIg");
	this.shape_2.setTransform(2.8,2.8,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7EEE6").s().p("AhvAYIgJgSIAAgPIANgJIDjgFIgCACQgFAKAAALQAAALAHAKIAAADg");
	this.shape_3.setTransform(2.2,11.8,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0C418").s().p("AhxAJIADgXIAWgPIDKAAIgEA2IjMAFg");
	this.shape_4.setTransform(-5.2,-12.8,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009A86").s().p("Ah8AUIgGgRIAagTIDqgMIACAwIjsAJg");
	this.shape_5.setTransform(-0.4,-4.9,1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC8953").s().p("AiDATIgGgVIARgNIECgIIAAAnIj7AHg");
	this.shape_6.setTransform(1.1,2.5,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009A86").s().p("AiEAMIACgdIAZgPIDsgEIAAAMQgGAKgCAHQgCAHADAKQAEAKAFAIIAAAEIj6AFg");
	this.shape_7.setTransform(0.5,11.6,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-17.7,47,35.4);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAAQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAAIgIAAQgHAAAAgIg");
	this.shape.setTransform(-2.9,2.7,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAAQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAAIgIAAQgHAAAAgIg");
	this.shape_1.setTransform(1,2.7,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAAQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAAIgIAAQgHAAAAgIg");
	this.shape_2.setTransform(4.9,2.7,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF9F00").s().p("AA9BFQgagDgOgOIguAAQgYAAgSgSQgSgSAAgXIAAgBQAAgZASgSQARgSAZAAIAzAAQAZAAASASQARASAAAZIAAABQAAAPgIAOQgIAOgOAIQAMAUAPAGIgIAAIgOgBg");
	this.shape_3.setTransform(0,0,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-11.3,27.8,22.6);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3B3B").s().p("ABwAPQgEgEABgFQAAgGAEgCQAEgEAGABQAGAAAEAEQAEADgBAFQAAANgPAAQgFAAgEgFgAh6AGQgGAAgEgEQgEgDABgGQAAgFAEgEQAFgEAFABQAGAAAEAEQAEAEgBAGQAAAFgEADQgEADgEAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-2,27.3,4.2);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinCnQhEhFAAhiQAAhhBEhGQBGhEBhAAQBiAABFBEQBFBGAABhQAABihFBFQhFBFhiAAQhhAAhGhFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-23.7,47.4,47.4);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF9F00").s().p("AgGAFIgKgFIALgFIAEgLIAGAKIAMgBIgIAIIAFALIgMgDIgIAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,3.4,3.4);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF9F00").s().p("AgFAFIgLgFIAMgEIAEgMIAFAKIAMgBIgHAJIAEALIgMgDIgHAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,3.5,3.5);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF9F00").s().p("AgJAIIgRgIIASgHIAGgSIAJAPIAUgBIgMAOIAGASIgRgGIgNALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.7,5.4,5.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHA4IgNgCIADgQIAEABIgBAKIAEABIACgJIAEABIgCAIIABAAIAEABIABgEIAAgGIADABQABADgBADQgCAGgBACIgDAAIgEAAgAAAAmIABgGQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgBgBIAAAAQgDAHgCABQgCABgDAAQgBgBgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgCgDABgFIACgGIAEAAIgCAHIAAADIABAAIACAAIAGgIQACgCABABQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQACADgBAEIgDAHgAgCATQgHgCgCgCQgBgDABgGIACgEIADAAIgBAFIAAADIAGACQADACACgBIACgEIAAgFIAEACQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBAGgDACIgFABIgDAAgAgIgFIABgHQAHgCAOgBIgBAGIgEAAIgCAIIAEABIgBAEQgKgEgIgFgAgCgHIAGAEIABgFgAALgSIgQgDIADgQIACABIAAAKIADABIABgJIAEAAIgBAJIAJACQgBAFgDAAIgBAAgAAJglIgLgCIACgQIADABIgCAJIAFABIACgIIAEABIgCAIIAEAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgFIAEABIAAAFQgCAHgCABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEAAg");
	this.shape.setTransform(-24.1,-11.1,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQA5IABgDQAAgEAFgCIAQgGIgSgEIARhjQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABIAAADIgPBYIAYAGIAAACQgBAFgFACIgQAGIASADIgBAGg");
	this.shape_1.setTransform(-26.8,-7.4,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E36353","#F7BF7A","#F8C372"],[0,0.541,1],-0.5,8.1,0,-0.5,8.1,21.9).s().p("AA0BWQgsgWgagQQg9gmgmgnIgGgFIgIAAQgLgBgLgFQgMgGACgIQACgFAMAFQAOAFAEAAIgSgIQgMgGABgIQABgIAOAEIAUAHIgRgIQgNgGACgGQAEgIAQADIAUAIQgCgCgTgIQgPgGAFgDQAHgIASAIQAQAHAJAKQAHgbALADQAHACgDAKIgDANQACAMAWAHIAiAJQAuAWApAWIAYAOQARAIAIACIAZAKQAXAQgEAcQgDAdgWAMIgVAHIAAAAQgNAAg0gag");
	this.shape_2.setTransform(12.7,7.4,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF0024").s().p("AgYBjQgYgEgGgCQg3gMgFgFQgFgFABgHQAWhwAEgaIACgYIAAgDQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAKAABBAPQA6ANAOAFIABADIgKAZQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIA6ANQAFABACAEQADAEgBAEIgFANQgNAegEAIQgOAXgTAIQgRAHgPAAIgKgBQgBAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAAIgFASQgCAHgGACIgDABQgFAAgWgFgAA8gTQgIACgHALQgIAKgEARIgJAlQAAAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAIARgBQAWgDAQgVQAFgHAKgZIAGgOQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgZgGIgJgBIgFABg");
	this.shape_3.setTransform(-19.8,-8.6,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-25.3,78.1,50.7);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AA0BVQAAgDgEgDIgHgHIgzhBQgDgEgEAEIgfAZQgCADgGgBQgFAAgCgDIgDgCQgHgCgDgFIgEgMIAAgBQgGgEACgDQAAgBAGgCIBchPIAEgEQACgGACAAQAFgBAFADIALAJIALANQAFAEgBAEQgBACgHADQgIADgCAFQgCAFgHAGQgJAHgCAEIAYAcIAMAOIALAQIAQAZQACACgEAKIAFACQgRAMgHADIgFACQgFAAAAgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-9.1,17.2,18.3);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AgEA0QgYgHgJgGQgQgKgGgUQgHgSAHgPQAKgYAZgEIATgCQAXAAAQANIATAPQAIAGACALQACAJgEAKQgDAJgIALIgNASQgCAEgJACQgIABgHAAQgJAAgGgDgAgOgYQgDACgIALIgCAEIADAEIALAPQAEAHAHAFQAGAGAHABIAJgGQAHgIgBgLQAAgKgGgIQgLgPgLAAQgGAAgGADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-5.6,12.8,11.2);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AgZBCQgGAAgKgFQgDgBAAgFQADgpACgTIAHgnIAGgNIABgCQgCgHAFgCIAHABQASAAAJACQAKACALANQAHAJgDAKQgDARgIAGIgEAEIAEADQAPABACARQAEASgIAQQgKASgVAAQgPAAgSgDgAAAAPQgDAPgBAUIACACIACACQAEgCAEgHQAFgGAAgFIACgBIgKgTQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgBAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAABAAABgAAFgpIABATIADAFIAEgEQACgFgCgIQgCgIgFgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-6.9,9.1,13.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AANBKIgfgtQgQgYgJgPQgEgFgEgNQgCgLANgIQAlgXAKgKQAHgFAIABQAJACADAJIAEAFQACACgCADQgCAEgDACIglAeIAnA0IAHAMQAFAGACANQACAGgBAEQgBACADAHQABACgEAEQgEAEgDAAIgFAAQgOAAgKgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-8.6,10.5,17.2);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AgcBBIgWgKQgEgDAAgFQgDgMAEgIQAEgKAKACIANABIAEACQAFAEAJAFQAJAEADADQAGAFAFgIIAEgKQACgGgDgFQgGgLgOAAQgHAAgDgDQgDgDABgGQACgGAHgBQAIgBADgDQAEgCACgIQABgHgDgEQgEgDgGABIgDABIgIAAIgGgCQgKgNAJgKQAGgFAKABQAVABAKAJQASASgCAWQgBADgIAIQgEAEAEACQAJAEAEAKIAEAUIAAAKIABgBIACgEQgCASgKAGQgVAOgWAAQgNAAgQgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-7.3,11.4,14.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AAzBVIgbgIQgIgCABgKIAAgaQABgIgBgCQgCgCgIgBIgZgFQgEgBgBAHIgJAlQgaABgKgEQgSgIAGgRIAahgQAEgMABgHQAAgCAEgBQAFgCAEAAIAQADQAFAAACACIACAHQACAGgCAKIgDAOIABAZQAAABABAAQAAABAAAAQABAAAAAAQAAABABAAIAcAIQAIACACgHIAFgmQAAgHAFgGQAFgFAFAAQAEgBARAEIANAFQgGAKAEAGQACACgDAKIgJBAQgBADABAEQACAHgBALIgCASQgCAJgLAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.5,16.6,17.1);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AAGAvIgQgCQgRgEgEgCQgLgFgFgPQgFgPAEgJQAMgjAfgGIADgBIAIAAQAagCAMAXIAFAIIACAGQgHAGgDABQgSAEgLgPQgMgOgHAQIAAABQgJANAGAJQAFAIAPAAQANAAAAANIgCALQgCAGgEABIgDAAIgGgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-4.8,10.3,9.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AAcBKQgFgBgDgDIgegmIgCABIAAAhQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgeADIgCgEQABgMgCgTIgDgfIgCgzIgBgNQAAgKAJAAIAJgEQAEgEAEACQAFACABAEIAHAnQADAJAHgNQAGgRAPgJQACgCACgGIAVAIQADAAACAHQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgDAEIgJARQgJANgJAKQgEAEAEAGIAjAwQABABAAAAQAAABABAAQAAABAAAAQAAABgBAAIgLALQgHAEgGAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-7.5,11.1,15);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AAfBEQgEgCgIgNIgDgEQgFgJgDgBQgCgBgGAFQgEADgPADQgOADgSgJQgRgJgHgNQgFgKADgMQAJggAhgOIALgHQAXgQAcADQASADAEACQAVAGAHAQQACAEAAASQAAASgVAKIgEAEQgIADAFAJIAFAMIAMALQgMAKgHAEQgKAFgGAAIgCAAgAgigFQgFAHACAIQACAJAGACQAGACAHgGIALgHIgQgeQgIAFgFAKgAAKguQgJABAFAIIAZAjQAOgQgBgPQgCgNgJAAIgLAAIgMAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-6.9,15.9,13.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AAtBiIgcg9IgDgCQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgdALIgFAIIgBgEIgBACIgBAKIgDAdQAAAHgCABQgCACgHgBIgqgHQgDAAAAgGQABgaAHgjQAIglADgUIALgfQACgHABgPIAGgJQAAgDAEgBIAlgDQAFgBABAFIAHAIQADAGABAEQADAJAGALIAKATIACAFQAAAIAEACIACAFIAFAIIAIAXQABACABAEQABAEADABQAAAHAKAWIACAFIASAhIgHAJIgDABQgPACgGADIgEAAQgFAAgCgFgAgUAGIAPgEQAFgCAAAAQABgBgBgHIgIgaIgEgIIgBAAIgDAmIgBAAIAAgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.3,17.5,20.7);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1AF00").s().p("AgGAVQgDgCgBgHIgDgMIAAAAIACgNQABgEADgCIAGgDIACACIADAEQAFAOACAJIADAFQABADgEACIgKAFIgDABIgEgCg");
	this.shape.setTransform(27.6,-33.4,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1AF00").s().p("AgGAVQgDgCgBgGIgDgJIAAgEIAAAAIACgNQAAgEAEgBIAGgDIABABIAEAEQAFAOACAKIADAFQABADgFABQgGAEgDABIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_1.setTransform(-43.4,-20.9,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1AF00").s().p("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gHABIgJADIgbATIgGADIADgJQACgFADgCIAUgOIAWgNIALgIQAjgVAXgMQAOgIAhgPIBVgqQAIgDAMgEQAHgCAAgBQABgCgEgGIAIAAIALABIAegIIAEgCQAIgJAJABQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQADgFADAEQAHAIAHACIACAFQACAGAFAAQAKgBAFgCQAJgDgFgHIAAgDIACgEQAFgDgCgGQgBgDgGAAQgHAAADgGIAbg8IAEgGIAfgfQAbgaAggUQAFAAAHgFIALgHQAJgDgCgHQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABAAIAWgHQASgDASgKQADgCADAAIAPABIAVgGIArgOIAhgKIAIAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABIgCADIgDACIgQALQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAABAAQAAABAAAAQAAAAAAABQACACAFAAIAQgDQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABIgJAEIgCACQgFAKgJgDIgBABQgCACgFACIgGADIgRANIg7AhIgJAEIgHAEQgIAHgIAAQgEABgCADQgEAHgIADIhJAsIhaBCIgDAEIgCAGIAGAAIBDgtQAjgXAHgDQALgEAUgNIByg7IAFgCQAKgBALgGIASgLIAkgZQAHgFAAAJIABACQABAMgEAGQgDAEgLAGIgfAQIhSAqQgsAYhCAmIgnAbIg1AiIgEACQgIABgHANIgHANIgHANQgEAHgKAEQgUAKgSABIgMgCIgBAAIgEgGIgFgBIgbAAIgGACIgmAQIgLADIgMAFIgIAEQgIABgKAFIgSAJIglAUIhYA0QggAThPAnIgIAEIgJACgAkBHUQgCgKgGgFIgGgCIgBAHQAIAKAHAAIAAAAgAhrEwIgHAEQgOAIgFAHIgLAIIgFAHQgCAFgGACIgGAGIACAEIAFgCIAXgTIAdgaQACgBABgFgADlFEIgBABIACAEIACgEQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgBAAIAAABgAkJFEQAAABABAAQAAABABAAQAAABABAAQAAA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ADgBIALgFQAGgCACgFIAHgZIACgGQgBgHADgTIAEgRIgBgGQAAgEACgDIACgDIADADIAEALQARAqAJANIAAADQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABIADADQAEAEAFgCIAjgTQACgBABgEQAAgFgCgBQgCgDgBgCQgBgLgDgDQgCgEgDgHIgFgJIgCgGIgCgGIgeg/QAIAKANAXIAGAGIACgBIgWgiIgTgjIgRgkIgLACIgQAHQgLAFABAGQAAAUgFAZIgIAsIgDApIgCAAIgDgFIgWhJQgEgPgCgCQgGgHgBgJIgKgBIgCAAQgGAAgJADgAouAvIAQAXIABgBIgQgWgAhQg7IgcAGQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQADAEAAADIAEATIAKApIADAGQACACAEgCIADAAQAPABAGgKIAhghIALgJIACADIAGATQADAIAJgDIAWgEIAFgCIgEgHIgEgXQgDgNgFgJIgFgWQAAgEgEABIgaAKIgLAHIgHAHIgSAUQgEAEgDAAQgFAAgBgHIgFgSQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgCABgAgSALIgCACIAEAHIACAAIADgFQgBgDgDgCIgBgBIgCACgAoAivQgBACAAAIIALCFIABAYQAAAAAAAAQAAABAAAAQABABAAAAQABABAAABIAIAEIAAAAIARABQANAAgBgLIgCgyIABgGQgBgEgCgDQgCgCACgDQACgEADAAIAfgEQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAEAFADASIAEAxQgBAHAHAAIAQgBQAGABAEgGQADgGgBgFQgCgQgBgPIgCg7IgDgNIgCgaIgDgXIgCgTQgBgEgDAAIgWgBQgJADgDgBQgEgCAAAHIABAMIADATIAEAkQAAAHgHgCIgIgBIgQAEQgGACAAgHIgBgRIgBAAIgBAEIgFgkIAAgHIAAgDIgGgEIgEgBQgCgDgDAAIgFACQgFACgCAAIgBAAQgGAAgDAIgAljjLIgOALQgEAFAAACQgEAkABALIANBZQACAHgEADQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAEAAABADIACAFQABAEAEAGQACACAEAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAEAAQAHABABgDQAEgHgBgGIgLg4QgBgIABgCQABgCAHgEQAEgDALACQAAAAABAAQABAAAAABQAAAAAAABQABAAAAABIAMBGIACAFIAFABQADABADgDIAHgGQAFgEAAgBIgBgiIgIgyIgBgEQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIAAgCIAAgHQABgFgEgKQgDgKAAgFIgEgHQgEgRgSgJQgDgDgHgBIgJgDQgNAAgEAFgApegdIAGAJIABgBIgGgJgAk/gbIADACIAEgCIgCgCIgFACgAkBjdQgIABgFAHIgHALIgBAOIAHBEIADAgIAGApQABAEAFACQABABAHAAIAFgCIAGgDIAFgCIACgKIgCggIgEgSIAAgXQAAgOgDgJIABgOQAEAGAGALIALATQAEANAOADQAHACADgBQAJgDAIgHQADgBgCgFQgDgIABgDIAFgoIADgMIABAAIACAFIAWBiQACAJACADQADAGAHACIACABQACADAFgCIAMgEQADgBADgFQAEgFACgBIgKg2IgBgCIgDgIIgFgTQgGgVgEgKQgHgNgIgJIgLgJIgKgHQgHgGgGAGQgRATgCAFIgIAQIgDARIgLgKQgLgPgSgNQgGgFgGAAIgEABgAHvg6IAAADIAJAMQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACgEIgHgMQAAgCgFAAgAGugyIACACIADgDIgCgDIgDAEgAGFhJQgIAFADAFQABADAIAGQAAAAAAAAQABAAAAAAQAAgBABAAQABgBAAAAIgBgOQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAgBAAIgDABgAGfhEIADAEQAEABADgCQAAgBABAAQAAgBAAgBQABAAAAgBQAAAAAAgBIgEgFgADeh4IAEAFIAWAYQACACADgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIABgiIABgEIAAgFIgGgBIgdANQgGACADAGQAAgBAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADABgAHPhkQAAACACADIAKAFQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgCIAAgBQgGgDgFgGIgBgBIgCgBIgCAEgAAYkQIgLABQgFACgDADIgDAMIAAAEIAIA5IABANQABAHACAFQAFANACARQABAGADAGQADAGAGAIQAGAGADAAQANACAPgHQADgBAFgFIAIgMQADgEAFADQADADADABQAPAFAPgDQAPgDAAgOQAAgGAFADQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQADAFAIgEQAHgCAAgHIgCgJQgBgFABgEIAAgCIgBgBQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAAAIgBgEIgBgJIgDgJQgCgFACgFQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgEgCgCgHQgCgIgCgCQgBgCAAgFQAAgFgCgDIgCgGIAAgGIgIgmQAAgBgBgBQAAAAAAgBQAAAAgBAAQgBAAAAAAQgMAAgMABQgGABAAAEQgCAPAEAHIACAJIAQBPIAAAQQAAAGgDAGIgHABIAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIgEgNIgFgSIgDgiQgDgSgGgYIAAgIQgBgFgEgCIgBgBQgDgGgCgBQgCgBgGACIgHACQgJACAAAKIAQByIgGANQgCADgDAAQgDgBgCgDIgDgNIgFglIgHggQgCgMgBgLIAAgNIgCgHQgCgGgHAAIgBAAgADDiRIABABIANgDIgBgBgADKk0QgiABgCAhIgBAMIABAPIAAAGIADALIAHAhQAEAbAGAMIABAGQAAAFAFgBIATgDQAHgBgCgHIgIghIADgOQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAQgFQAEgBACAAQABABABAEIAOAvQABAFAEgCIAYgJQAAgBABAAQABAAAAgBQAAAAAAAAQABgBAAAAIgBgDIgLgjQgIgjgJgSIgLgVIABgBIACADIABgBIgJgLQgQgQgSAAIgCAAgAD/k+IACAIQAEAUAKAbIALAlQAEAOAGAGQADAGAAACQAAAFADAIIAEAMQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAIASgEIAJgDQAEgCAAgGIABAAIAHgUQAGgMgDgIQgBgCADgLIACgFQADACAAACIADAIIAQAnIADADQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAQAMgEAHgHQABgCgBgEIgFgKIgniFIgDADIgYAFQgFABABADIADAiIABAIQgDAEgBAHIgBAMIgEAhIgBAAIgZhMIgJgMIgCAAgAG0jeIAFAGIAHgGIgGgFIgCAAQgEAAAAAFgAEflSIASASIACgBIADgXg");
	this.shape_2.setTransform(0,0,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1AF00").s().p("AgRAUQgBgCABgEQAEgFgEgGQgBgDACgDIAHgMIAIgFQAGACAFAJIAIARQACAFgFAAIgbAIIgCAAIgDgBg");
	this.shape_3.setTransform(14.2,-4.3,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1AF00").s().p("AgJAAIAEgBIAIgBIAEAAIADACQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAIgNABIgDgDg");
	this.shape_4.setTransform(23.7,32.9,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1AF00").s().p("AgKACQACgCACgBIAOgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAABIgPAFg");
	this.shape_5.setTransform(12.9,37.7,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1AF00").s().p("AhNA2IAUgUIAYgXIAjgZIAlgbQAEgDASgHIATgIIAAABIgCACIgxAkIgCABIgjAcIgRAPQgRAQgJAGIgXANIgFABg");
	this.shape_6.setTransform(-9.1,48.2,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1AF00").s().p("AgGABIAGgEQACAAAFADIgJAEg");
	this.shape_7.setTransform(-20.4,57.9,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-67.3,163.4,134.7);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("Ag1AwQANgEAMgMQARgSAGgcQADgWAIgHQAGgEAKAAIAgAAIgGAsQgGATgOAPQgJAJgOAEQgNAEgaAAg");
	this.shape.setTransform(44,-9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGCBfQgNgOAAgnIAAheIBzAAIAAAeIhIAAIAAAhIA+AAIAAAeIg+AAIAAASQABAIADAFQAEAFAIACQAHABANAAQATAAASgFIAAAdQgPAHgaAAQgtAAgRgQgAD7BrQgNgHAAgQIAAiIIBzAAIAAAeIhIAAIAAAhIBCAAIAAAeIhCAAIAABGQgVAAgJgEgAgmBeQgQgRAAgyQAAgxAQgRQARgRAqAAQAJAAAKACQAKABAGAEIAAAdQgPgFgRAAQgXAAgDAIQgEAGgBALIgBAbIABAcQABAMAEAFQADAIAXAAQATAAARgFIgHAeQgMAGgUAAQgqAAgRgRgAi+BmIAAgdQAcAHAWAAQAMAAAFgBQAIgDAAgKQABgIgIgEIgNgGIgcgJQgQgGgGgHQgKgLABgWQAAgYAKgKQAKgJAOgDQAMgDAQAAQARAAAOADQAMACAGAEIAAAdQgagHgVAAQgLAAgEABQgIADgCAIQgBAIAFAEIANAEIAeALQATAHAGAHQAMANgCAYQgCAYgMAJQgJAHgPADQgNADgPAAQgjAAgQgJgAk8BfQgNgOAAgnIAAheIBzAAIAAAeIhIAAIAAAhIA/AAIAAAeIg/AAIABASQABAIADAFQAEAFAIACQAGABAOAAQATAAARgFIAAAdQgOAHgbAAQgsAAgSgQgACvBsIgGgfIg3AAIgFAfIgnAAQAXhtAcgzIAxAAQAOAbAOAsQAOArAKAugAB4AyIArAAQgLgogLgWQgMAcgJAigAmhBeQgHgGgFgLIhEh5IAACYIgnAAIAAjXQAHgDAPAAQAUAAAKAGQAJAHALASIBDB8IAAiaILvAAQAAAOgTAJQgQAHgUAAIqQAAIAAC4QgFADgSAAQgXAAgOgOgAIABkQgEgEAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEgAIDBSQgEADAAAFQAAAEAEAEQADADAFAAQAEAAADgDQAEgEAAgEQAAgFgEgDQgDgEgFAAQgEAAgDAEgAIOBhIgBgDQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgCAAIAAAGIgDAAIAAgOIAFgBQAEAAABACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAIAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAABIABADgAIIBZIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_1.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-14.4,107.6,28.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D51921","#AD151B"],[0.271,1],-6.6,-0.6,13.1,-0.6).s().p("AiDB7IAEgCQAQgLAPgPQAagbAPgkQAOgeAGglQAJg4AagUQAPgLAaAAIBbAAIAAAAIgCAOIgDAVIgHAwIgCAJIgBADIAAADQgPA6gnApIgBAAIgBACIgBAAIg0AgIgIADIgJADIg3AIg");
	this.shape.setTransform(1.8,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D51921","#EE9179"],[0.271,1],-5.5,-0.8,15,-0.8).s().p("AiYCIQASgFATgNQASgMAOgQQAbgcARgkQAOgeAGgoQAKg7AagUQAQgMAcAAIBcAAIgEAZIhaAAQgbAAgPAMQgZAUgJA4QgHAlgNAeQgQAkgZAaQgPAPgQAMIgEACgACRhKIAAAEIgHAsIAHgwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-13.6,30.7,27.4);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C292A").ss(4,1,1).p("AHYloIhPCBICUAAIAAHWQAABJAuAbQAjAUBXAAIAArPgAlShnIBnh2IAAiIImRAAIABABIAAAUQAABFArAaQAgATBSABIA+AAIhpB6IAABaQBIABAxARQBNAdAABDQAAAqgRAdQgbAuhBAAQgyAAgigeQghgegKg9IiVAAQAHB3BJBHQBJBGByAAQB6AABPhLQBOhKAAhrQAAhIgog0QgWgdglgXQgogbglgFg");
	this.shape.setTransform(71.7,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,145.9,76.2);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6D1D9").s().p("AgvAXQABgFAEgEIADgDQgNgHAAgEQAAgEAGgJIAHgIQgJgJACgHQACgFApAAIARAAIAFAHQAEAHAGABQAHABARgBIgnAzIgxATQgMgMAAgIg");
	this.shape.setTransform(5.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.7,8.7);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F4B52").s().p("ABLAoIgFgRQgUgCgdgIQgsgKhNgqIAWgSICTA0IAWAeQASAhgNAAQgNgBgIgRg");
	this.shape.setTransform(10.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,11.6);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22829F").s().p("AgSAPIAJgBIAIgcIgFAcIAGgBIAJgbIgGAbIAEgBIAMgaIgKAdg");
	this.shape.setTransform(1.9,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.9,3.1);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADA94").s().p("AgOACIAAgEIAdAAIgDAFg");
	this.shape.setTransform(1.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,0.7);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAFgGAAQgFAAAAgFg");
	this.shape.setTransform(0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.2);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgHAGQgCgDABgDQACgIAIAAQADABADACQACADgBACQgDAJgHgBQgEAAgCgCg");
	this.shape.setTransform(1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,1.8);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAAIARgCIAAADIgQACg");
	this.shape.setTransform(1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,0.7);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("Ag4AoIBIg4IAsgdIABAQIh5BLg");
	this.shape.setTransform(6.2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.3,9.3);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCALIACgVIADABIgDAUg");
	this.shape.setTransform(0.4,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.7,2.3);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAgQgNgCgIgLQgIgLACgLQACgOALgIQALgIALACQAOADAIALQAIALgDALQgCANgLAIQgIAGgKAAIgEAAg");
	this.shape.setTransform(3.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,6.6);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApAXQADgSgLgOQgLgPgTgDQgNgDgNAHQgNAHgHANQAGgOAOgIQAOgIANADQATADAMAPQALANgDATIgEAMIACgJg");
	this.shape.setTransform(4.4,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,6.5);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEADQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBADgCQACgCABAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAAAgBAAQAAAGgGAAQgCgBgCgCg");
	this.shape.setTransform(0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.3);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAAQAAgEAFAAQAGAAAAAEQAAAFgGAAQgFAAAAgFg");
	this.shape.setTransform(0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.2);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgGAGQgCgDAAgDQADgHAHAAQAEAAACACQACADgBACQgBADgDADQgEACgCAAQgDAAgCgCg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.8);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAAQAAgEAFAAQAGAAAAAEQAAAFgGAAQgFAAAAgFg");
	this.shape.setTransform(0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.2);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgGAGQgDgDACgDQABgCACgDQAEgCACAAQAEAAABACQADADgBACQgBADgEADQgDACgCAAQgEAAgBgCg");
	this.shape.setTransform(1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.8);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAGAAAAAEQAAAFgGAAQgFAAAAgFg");
	this.shape.setTransform(0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.2);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkAAIBHgIIACAIIhIAJg");
	this.shape.setTransform(3.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,1.9);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgHAFQgCgCABgDQADgHAHAAQAIAAgBAHQgDAIgHAAQgEAAgCgDg");
	this.shape.setTransform(1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.7);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22829F").s().p("AgGANQgEgDgBgGIgCgQIAYgDIACAQQABAFgDAFQgEAEgFABIgCAAQgCAAgEgDg");
	this.shape.setTransform(1.4,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.8,3.3);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGABQgBgEAHgCQAGgCABAHQABAFgHABIgBAAQgFAAgBgFg");
	this.shape.setTransform(0.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,1.4);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22829F").s().p("AgMA/IgPh8IArgCIAMBFQABAVgVAUQgIAKgMAGg");
	this.shape.setTransform(2.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.7,12.8);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgGAIQgDgCAAgEQABgDADgDQADgEACgBQAFgBADADQACACAAAEQAAADgDADQgEAEgDABIgBAAQgDAAgCgCg");
	this.shape.setTransform(1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.1,2.2);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgCADgDQADgDADAAQAEAAADADQADACAAADQAAAJgKAAQgDAAgDgDg");
	this.shape.setTransform(1.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.2,1.9);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22829F").s().p("AgRAVQgZgPgEgTIgBgGQAEATAZAOQANAHAKAEQAMgGAKgKQAVgSgBgVIAAAGQACAVgVASQgLAKgLAGQgLgDgMgHg");
	this.shape.setTransform(4.8,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,9.6,6.3);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgMAKQgDgFACgFQABgEAGgFQAFgEAEAAQAGAAAEAEQADAFgCAEQgBAFgGAFQgFADgEAAQgHAAgDgDg");
	this.shape.setTransform(1.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.8);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJgEQAHAAAKADQAMACAEgBQAEAAAPgCQAPgEAJAAIgBACQgJAAgOAEQgPACgEAAQgFABgLgDQgKgBgIAAQgdAAgbAIQAcgLAdAAg");
	this.shape.setTransform(6.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,1.5);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAKIAAgCQgDgOADgJQAGgMAHAWIAEAGQADAFgCAEQgFAKgFAAIAAAAQgGAAgCgKg");
	this.shape.setTransform(1.1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.3,4.1);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApADQgMgDgEAAQgFAAgNACQgLADgJAAQgdAAgUgLQAVAIAeAAQAHAAAMgCIASgCQAEAAAMADQALAEAJAAIAAACQgJAAgMgEg");
	this.shape.setTransform(6.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.6,1.5);


(lib.Path_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#38368C").s().p("AgDAIQgFAAgDgDQgCgCACgDQAFgHAKAAQAGAAACADQACACgCACQgCAEgFACQgEACgCAAIgCAAg");
	this.shape_1.setTransform(1.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.7,1.7);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#433C4D").s().p("AgOAiIgBgBQgDgCABgLIACgKIgBABIAAAAIgBAAIAAABIgCACIAAAAIgBAAIgCABIgBAAIgBgBIgBAAIAAgBIAAAAIAAgCIAAgBIABgCQACgHAHgJIAGgMIACgFQACgFAFgCQACgCAEADIACADIABADIACAEIADADQAGADAEAGQAEAHgEACQgEADgEgDIADALIAAAEIAAAFIgBABQgBADgDABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgCIgDgKIAAgBQgCgCgDABQgCABgBADIAAABIgDAOIgBABQgCADgDACg");
	this.shape_1.setTransform(2.7,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,6.8);


(lib.Path_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADA94").s().p("AgHABIAHgQIAIgDIgFAIIACAGIgEABIADADIgEABIABAEIgBACIAAADIgDAJg");
	this.shape.setTransform(0.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,3.9);


(lib.Path_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38368C").s().p("AAeATIAAgBQgJAAgOgFQgNgEgEAAIgUADQgPADgJAAQggAAgVgNIAAgEQAfgOAhAAQAIAAANAEQANADAFAAQAEAAAPgEQAQgFAKAAIABgBIBCAAIgEAHIABACIgBAAIABAFIgDABIABABIgCAAIADADIgEAAIABABIgCABIACAEIgDABIABAAIgCABIACADIgFAJg");
	this.shape.setTransform(10.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,4.2);


(lib.Path_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIABQAAgHAIgCQADAAADACQADADAAADQAAACgDADQgDADgDAAIgBABQgHAAAAgIg");
	this.shape.setTransform(1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,1.8);


(lib.Path_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38368C").s().p("AgBAHQgXgCgPgIQAdgEAUABQAeABAAAFQAAADgPACQgKACgKAAIgGAAg");
	this.shape.setTransform(4.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.1,1.5);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38368C").s().p("AgCALQglgDgYgNQAvgGAgABQAwABAAAJQAAAGgXADQgOACgQAAIgNAAg");
	this.shape.setTransform(6.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,2.4);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNhPQAKgBABAKIAPCLQABAEgDADQgCADgEABg");
	this.shape.setTransform(1.4,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.8,16.1);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22829F").s().p("AAEgkIAIACIgXBGg");
	this.shape.setTransform(1.2,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,7.4);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAHQgDgCAAgEQAAgHAIgBQAEgBACADQADACAAADQAAACgDADQgCADgEAAIgBAAQgCAAgCgBg");
	this.shape.setTransform(1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.8);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgDQAAgCADgDQACgDADAAQADgBADACQADACAAAEQAAACgDADQgDADgDAAIAAAAQgDAAgCgCg");
	this.shape.setTransform(1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,1.8);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgDQAAgCADgDQADgDACAAQAEgBACACQADADAAADQAAACgDADQgCADgEAAIAAAAQgDAAgCgCg");
	this.shape.setTransform(1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,2,1.8);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAJQgDgCgBgEQgBgDADgDQACgEAEgBQADgCADACQAEACABAEQABACgDAEQgCAEgFACIgBAAIgFgBg");
	this.shape.setTransform(1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.2,2.1);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgEgEAAgGQAAgDAEgFQAFgFAFgBQAGAAAFADQAEAEAAAFQAAAEgEAFQgFAFgGAAIgBABQgFAAgEgDg");
	this.shape.setTransform(1.6,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.2,2.8);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AAJAZIgHgKQgBgDgDACIgQgrQAFgCAGAHIAHAJQAIAEAFAHQAHAEgCAEQgEAEgFgFQAQAYgJADIgBAAQgDAAgDgFg");
	this.shape.setTransform(2,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,6.2);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAIQABgDAEgDIAPgFIADgDQACgCAFgCQALgDAAAGQABAGgGABQgEABgEAAIgHABIgEAFQgEAEgHABIgCAAQgFAAABgEg");
	this.shape.setTransform(2.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,4.4,2.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgrgPQAAACgMACQgVAFgygBQAyAAAYgXQANgLACgMICkBrg");
	this.shape.setTransform(13.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,25.6,10.9);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADA94").s().p("AgMABIACgCIAXACg");
	this.shape.setTransform(1.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,0.4);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgRgWQgBAIgNAIQgXALgtABQAtgCAXgSQANgMABgMIB1BNg");
	this.shape.setTransform(11.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0,20.2,7.9);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAtQgTgDgLgPQgLgQADgRQADgSAPgMQAQgLAQADQATADAMAQQALAPgDARQgDATgQALQgMAJgOAAIgGgBg");
	this.shape.setTransform(4.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.2,9.2);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAXQgRgDgKgOQgKgMACgRIBRANQgCAPgPALQgLAIgNAAIgFgBg");
	this.shape.setTransform(4.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,4.9);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAKQgFAAgCgEQgDgEABgCQAAgFAEgCQAEgDACAAQAFABACAEQADAEgBACQAAAFgEACQgDADgDAAIAAgBg");
	this.shape.setTransform(1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,2.2,2.2);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArAMIhYgMIACgLIBYAMIABAAIgCALg");
	this.shape.setTransform(4.6,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,2.6);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEQgEgBABgDQABgDACAAQAEABAAACQgBAEgDAAIAAAAg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CompoundPath_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAFIgBgBIABgBIABAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAgAAAAAIgBAAIABgCQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAAIAAAAgAACgEIABgBQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBgBg");
	this.shape.setTransform(0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,1.2);


(lib.CompoundPath_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAJIALgJQAMgLAMAAIACAAQgNABgOASIACACIAAAAIgBABIgCgBIAAAAIgCACgAgEAIIgBgCIABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgBAAgAADADIABgBIABABIgBABIgBgBgAAAACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIABAAIABABIgBABgAAGgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABgBIAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABgAANgGQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape.setTransform(2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,2.5);


(lib.CompoundPath_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAPQAHgJALgGQAUgSATgBIAEAAQgWACgXAfIADABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgCgBIgBgBIgCADgAgIANQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAIAAgCQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgCAAgAAFAGQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAgAAAAEQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAgAAJgDQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAgAAVgGQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape.setTransform(3.2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.3,4);


(lib.CompoundPath_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAGQAAgBgBAAQAAAAAAgBQABAAAAAAQAAAAAAAAIABAAIABABIgBABgAgBAAIAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAIAAABIAAAAIAAAAIgBAAgAACgEIABgBQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAABIgBgCg");
	this.shape.setTransform(0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,0.8,1.3);


(lib.CompoundPath_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAgAAAAAIAAgBIABgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAABIgBAAIAAAAg");
	this.shape.setTransform(0.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.3,0.4,0.8);


(lib.CompoundPath_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAFQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIABAAQABABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAgAgBAAIABgBIAAABIAAAAIgBAAgAACgEIABgBQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBgBg");
	this.shape.setTransform(0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,0.7,1.2);


(lib.CompoundPath_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAFQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAgAAAAAIgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIAAABIAAAAIAAAAIAAAAgAACgEIABABIgBABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,1.2);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAHQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgBIAAABIAAACgAgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAIAAAAIgBAAgAABgFIABgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAIgBgBg");
	this.shape.setTransform(0.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.6,1.5);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAJQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIABAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAgBAAIgBgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABgBAAQABABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAAAIgBAAgAADgGQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(0.6,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.3,1.9);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgFACQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBABIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAgAACAAIAAgBIABAAQABgBAAAAQABAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(0.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.2,0.7);


(lib.CompoundPath_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AAkAKQgNgFgEABQgEgBgOAEQgLADgIAAQgdAAgSgMIAAgEQAigHAVAAQAIAAAKADQAKAEAGgBQAEAAAPgEQAOgEAJAAIgIAXIAAAEQgJAAgNgEg");
	this.shape.setTransform(6.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.3,2.9);


(lib.CompoundPath_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgJAbQACAGAEgBQADgBAAgGIgCgLQgBgHAEgCQADAAADAFQgCgCgEABQgBABAAAEIAAAMQAAAHgCABIgBABQgEAAgCgIgAAOAVQADADADgBQAIgDgSgXIAEADQAQAWgJADIgBABQgDAAgDgFgAgUAPQgDAAAAgHQABAFACABQAFABABgLIAAAFIgBAEQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgBgBgAAOAAQAEABACgCQACgEgHgFIgNgIQgCgBgEgJQgEgGgFACQgGACAAAHQAAgJAGgCQAFgBAGAGIAHAJQAIAFAFAGQAHAHgCACQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgDgBg");
	this.shape.setTransform(2.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5,7.1);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBCQgsgJgVgIICyiBIgBAFQAAAIAEAGIiIBkQAKAKAhALQAvAQBMAFQhRgDhBgMg");
	this.shape.setTransform(10.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,16.3);


(lib.CompoundPath_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADA94").s().p("AgQAJIAYADIABAAIgEABgAgOACIAZAEIgFACgAgNgFIAbABIgDACgAgMgIIAdgEIgFAEg");
	this.shape.setTransform(1.8,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.5,2.8);


(lib.CompoundPath_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgGAGIAEABQACAAACgCQADgDAAgCQAAgEgEgDQAFADABAEQAAADgDACQgDADgCAAIgFgCgAgCADQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgAAAgEIABgBQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIgBgBg");
	this.shape.setTransform(0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.7);


(lib.CompoundPath_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AAAACQAAgLgIgEQAMAEALARQgPAGgOAAQAOgBAAgLgAgGAIQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAgAgDAEIACgCQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgCgBgAgFAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAAABIABABIABAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAgAgEgIIABABIgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape.setTransform(1.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,3,2.9);


(lib.CompoundPath_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AgCAOQACgFAAgFQAAgEAAgFQgDgNgKgEQANAFANARQAHAGAEAHQgYAJgXABQAOgBAHgIgAgKANQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBgAgFAGQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBgAgIAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQAFAAgCAEIAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAgAgOgLQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBgAgIgMQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(2.7,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,4.9,4.7);


(lib.CompoundPath_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgCAEQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAABgDIABgBQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAAAAAIgBAAg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0.3,0.6,1.2);


(lib.CompoundPath_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgGAHIAEAAQACAAACgDQADgCAAgCQAAgEgEgDQAFACABAFQgBADgDACQgCACgCABgAgDADQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBgAABgFIAAABIAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBg");
	this.shape.setTransform(0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.6);


(lib.CompoundPath_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgGAGIAEABQACAAACgDQADgCAAgCQAAgFgEgCQAFACABAFQgBADgDACQgCACgCABIgFgCgAgCADQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgAABgFIAAABIAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBg");
	this.shape.setTransform(0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.6);


(lib.CompoundPath_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgGAGIAEABQACAAACgDQADgCAAgCQAAgEgEgCQAFADABADQAAADgDACQgCACgCAAIgGgBgAgCADQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBgAAAgDIABgBQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAIgBgBg");
	this.shape.setTransform(0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,1.4,1.6);


(lib.CompoundPath_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgGAIIAEAAQACgBADgDQACgDgBgCQgBgFgDgCQAFACABAFQABACgDAEQgCADgCAAIgDABIgDgBgAgDAEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAgAgBgFIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIAAAAIgBgBg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,1.4,1.9);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7B93").s().p("AgKAKIAGABQAEAAAFgEQADgDAAgEQABgIgIgDQAJADAAAIQAAAFgEADQgEAEgEAAQgFAAgDgCgAgEAFQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBgAAAgGQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(1.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.2,2.6);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGADQgCgDAEgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgBABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAgAABAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABACgDACIgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,1.1);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah+AyIgEgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAgBQABAAAAgBQAAAAABAAQABAAAAAAIAGACQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCAAgAiSAoQAAgBAAgBQAAgBABAAQAAAAABgBQAAAAABAAQABAAABAAQAAABABAAQAAAAAAABQABABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAgAiBAiQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAIAEAAQABAAAAAAQABAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAjBAfQABgBAAgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAgAidAXQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAgAipAVIgBgDQAAgBABgBQAAAAAAgBQABAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgBAAIgCgBgACnAOQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgBABAAQAAAAABgBQAAAAABAAIABAAQABAAABAAQAAABABAAQAAAAAAABQABABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAgAAKAKQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAgAh6AHQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAiUABQAAgBAAAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAQABAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAgAC7ADQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABABIACAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAgAAVgEQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBgACggEQAAgBABgBQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAgAAGgDQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABAAAAgBQABAAABAAIAFAAQAAAAABAAQAAABABAAQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAgAiOgLQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABQABABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBgAh4gJQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIACAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAgAhagRQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBgAhygbQgBgBAAgBQAAAAABgBQAAAAAAAAQABgBABAAIADgBQABAAABAAQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAgBAAIgCABIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAgAhMggIAAgBQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAIgCABIgCAAgAhjgrQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAIABAAQABAAAAAAQABAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(19.4,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,10.2);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#433C4D").s().p("AiZAPQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBgAiFAOQAAgBAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBgAAaAKQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAAGAGQAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBgAiPAFQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBgAASAAQAAAAAAgBQAAgBABAAQAAgBABAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAAAAAAAgACTgCQAAAAAAgBQAAgBABAAQAAgBABAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAgBgACBgMQAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAQABAAABAAQAAAAABABQAAAAAAABQABABAAAAQAAABgBABQAAABAAAAQgBABAAAAQgBAAgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAgBgACSgOQABgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBgBAAg");
	this.shape.setTransform(15.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,3.9);


(lib.CompoundPath_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#433C4D").s().p("AgVAZIgfAAIAEgJQALgTAVgNQAUgMAUADQATADAGAQQAHANgIAUQgxgDgUABg");
	this.shape_1.setTransform(5.3,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.7,5.5);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E2E2E").s().p("AgPAhIAOhFIARAFIgOBEg");
	this.shape_2.setTransform(7,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626262").s().p("AgqBCIAbiDQAbAKAMAeIATAFIgOBDIgTgDQgSAWgeAAIgEAAg");
	this.shape_3.setTransform(4.3,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,13.3);


(lib.Path_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E2E2E").s().p("AgUAbIAMg6IAdAIIgLA3g");
	this.shape_1.setTransform(2.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,6.5);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202121").s().p("AgPgKIAegGIABAGIgaAbg");
	this.shape_1.setTransform(1.7,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.4,3.6);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5A5A8").s().p("AgLBGQgKgGgCgMIgRhXQgCgMAHgJQAGgJALgCIAggHIAbCOIgiAHIgFAAQgGAAgHgFg");
	this.shape_1.setTransform(4.2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,15.1);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202121").s().p("Ag6gLIAhgwIBUA8IgfAtIhIAOg");
	this.shape_4.setTransform(6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.9,12.2);


(lib.Path_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.098)").s().p("AgnAhQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgHg3QgBgGAFgBIACAAIBbA3IgCACIhTAKIgBAAIgCgBg");
	this.shape_2.setTransform(5,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,6.9);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AAaBAQgfAAgXgXQgZgXAAggIAAgCQAAgeANgSIBeAAIAABhQgIAUgLALg");
	this.shape_1.setTransform(5.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,13);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202121").s().p("AgSAXIgJgsIAGgIIAxAUIgbAkIgJADIgCAAQgHAAgBgHg");
	this.shape_1.setTransform(2.8,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.7,6.1);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol92 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-19.8,184.2,39.7);


(lib.Symbol91 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol93();
	this.t2.setTransform(6.9,24.2);

	this.t1 = new lib.Symbol92();
	this.t1.setTransform(0,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-43.6,184.2,87.2);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171D1F").s().p("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QAAgFgCAEIgxA6QgDACgHgCQgHgDABgFQACgSAAgaQAAgagCgNQAAgFAKgBQAKAAABAEQAEAOgDApQAAAFADgDIAwg8QACgDAHADQAHADAAAEQgFAqAFApQABAGgKABIgEAAQgGAAAAgDgAElAxQgEgaACgdQAAgFgCAEIgyA6QgDACgHgCQgGgDABgFQACgSAAgaQgBgbgBgMQgBgFALgBQAJAAACAEQADAOgDApQAAAFADgDIAxg8QACgDAHADQAHADAAAEQgFAqAFApQAAAGgJABIgFAAQgFAAgBgDgAC5AxQgEgaACgdQAAgFgCAEIgyA6QgCACgHgCQgHgDABgFQACgSAAgaIgCgnQgBgFALgBQAKAAABAEQADAOgCApQAAAFACgDQAGgGArg2QACgDAHADQAIADgBAEQgFAqAFApQABAGgKABIgFAAQgFAAgBgDgAiyAwIgBgfQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBABQgMAIgLAAQgYAAgGgXQgFgQAFgaQACgEAJABQAKAAgBAFQgEATADANQAEANAMAAQAKAAAIgGQACgDAAgFIADghQABgFAKABQAKABgBAFQgFArAEArQABAFgLABIgDAAQgGAAgBgEgAlMAwQADgzgFglQAAgFAKAAQAKgCABAEQACALAAAVIABAEIADABQASADALgCQAFAAAAgFIABghQAAgEALABQAJAAAAAFQgDAtAFAqQAAAFgJAAQgKACgBgDQgBgCgCggIAAgFQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBABQgNACgSgCQgDAAAAAFIgCAgQgBAEgJAAQgKgBAAgDgADyhFQgBgDAHgGQAGgGABADQAGAJAKAAQAJAAAHgGQACgCAEAHQAFAHgBABQgDADgHAEQgIAEgKAAQgUAAgHgPg");
	this.shape.setTransform(-1,0.4);

	this.instance = new lib.Symbol90();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-14,179.1,28);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.d11 = new lib.Symbol71();
	this.d11.setTransform(60.6,-51.1,1,1,0,0,0,-39.2,-35.3);

	this.d9 = new lib.Symbol70();
	this.d9.setTransform(73.8,-66.1,1,1,0,0,0,-44.4,-18.6);

	this.d10 = new lib.Symbol69();
	this.d10.setTransform(62.7,-56.5,1,1,0,0,0,-30.8,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d10},{t:this.d9},{t:this.d11}]}).wait(1));

	// Layer 1
	this.d8 = new lib.Symbol68();
	this.d8.setTransform(50.6,-29.6,1,1,0,0,0,-20.7,3.1);

	this.d7 = new lib.Symbol67();
	this.d7.setTransform(48,-29.5,1,1,0,0,0,-10.5,15.5);

	this.d1 = new lib.Symbol66();
	this.d1.setTransform(-41.2,42,1,1,0,0,0,7,-24.7);

	this.d2 = new lib.Symbol65();
	this.d2.setTransform(-37.8,34.2,1,1,0,0,0,17,-18.4);

	this.d3 = new lib.Symbol64();
	this.d3.setTransform(-49.6,-24.2,1,1,0,0,0,21.5,-14.4);

	this.d6 = new lib.Symbol63();
	this.d6.setTransform(-15.3,-51.1,1,1,0,0,0,-4.3,19.9);

	this.d5 = new lib.Symbol62();
	this.d5.setTransform(-37.1,-43.5,1,1,0,0,0,14.2,13.9);

	this.d4 = new lib.Symbol61();
	this.d4.setTransform(-29.8,-38.1,1,1,0,0,0,30.1,12.6);

	this.cup = new lib.Symbol60();
	this.cup.setTransform(4.1,-12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cup},{t:this.d4},{t:this.d5},{t:this.d6},{t:this.d3},{t:this.d2},{t:this.d1},{t:this.d7},{t:this.d8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-78.2,205.9,156.5);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m3 = new lib.Symbol58();
	this.m3.setTransform(-10.7,-9.8);

	this.m2 = new lib.Symbol57();
	this.m2.setTransform(-6.2,15);

	this.m1 = new lib.Symbol56();
	this.m1.setTransform(-9.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2},{t:this.m3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-28.8,53,61.8);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96A74C").s().p("AgIA/IgggEIAWh6IA7AMIgJBsQgHAHgWAAIgLgBg");
	this.shape.setTransform(-62.8,27.3,1.7,1.7,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FACC91","#F9C88D","#F5BA83","#F1A373","#E98161","#E36353"],[0,0.145,0.341,0.573,0.824,1],11.9,-7,0,11.9,-7,26.8).s().p("AA2BCQhBgWgvgfIgHgGIgIAEIgSAJQgNAFgFgFQgKgKARgGQAJgEAQgDIgZgDQgSgDgBgIQgBgIAUAAQALAAAQACIgYgHQgUgHABgHQABgJAXADIAbAGIgVgMQgOgKAFgEQAEgKASALIAZASQAAgdAMABQAHAAAAAKIAAAPQAEALAXABIAhABQA9ALAgAIQgJAhgGBGQgPgDgmgMg");
	this.shape_1.setTransform(-47.8,23.4,1.7,1.7,0,0,180);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(-35.3,21.6,1.7,1.7,0,0,180,5.4,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FACC91","#F9C88D","#F5BA83","#F1A373","#E98161","#E36353"],[0,0.145,0.341,0.573,0.824,1],13,12,0,13,12,33.6).s().p("ABFBZIgHgUQgCgHgBAAIgJgCQg2gLg9gfQgggQgUgKQgJgGgGgLQgNgWAPgYQATgeAgABQAPABAMAHQAhATAuAhQAHAFASATQARAPALgFIAKgKQAHgHAGAFQAFAFgGAKQgFAFgGAGIAfAFQAUAEgEALQAAAJgogMIAYAPQASANgFAIQgFAGgSgKIgWgMIAUARQAPAPgHAFQgGAFgPgLQgQgNgFgCQACAFAKATQAHAQgNAAQgIAAgFgMg");
	this.shape_2.setTransform(12.5,1.2,1.7,1.7,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96A74C").s().p("Ag6AfQgFgFAAgMQgBgUASgeQAPgWAkgDQATgCAQAEIAGADQAHAEAIAIQAGAIgGAOIgIAUIg4AyIgXAOg");
	this.shape_3.setTransform(27.9,-8.2,1.7,1.7,0,0,180);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(14.9,8.8,1.7,1.7,0,0,180,10.2,5.9);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2866B").s().p("AggAiQAAgGADgHQgGAGgCAGQgQgCgHgFQADgHAGgHQALgMATAAQAVACAQgJQAKgFAEgGQAQgTAOAGIABAEQAAAFgDAGQgFAAgCACIAGABIgBACQgCgBgEABIAFADQgHAIgLAMQgUAWglAAIgMAAg");
	this.shape_4.setTransform(34.5,-87.8,1.7,1.7,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1AYQAMgYAkgQQAhgQAbAFQgKAdgjARQgUAKgTAAQgNAAgLgFg");
	this.shape_5.setTransform(30.7,-79.7,1.7,1.7,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7AbQAEgJAIgGQAKgGAKgBQAvAAAUggQAGgJAKABQAJATgNAQQgKAOgXAMQgTAJgXABIgGAAQgWAAgIgJg");
	this.shape_6.setTransform(33.6,-85.6,1.7,1.7,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#772C1B").s().p("AgqAuQgfgLAIgVQAIgSAXAAQAxgCAUgiQAJgPAOAKQAOAKgGAeQgJAagjASQgWALgTAAQgMAAgLgEg");
	this.shape_7.setTransform(32.6,-83.4,1.7,1.7,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBF7EB").s().p("AibgmIAYAVQAfAWAjANQBuArBvhKQgjArhSAIIgXABQhbAAhQhNg");
	this.shape_8.setTransform(23.7,-57,1.7,1.7,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBF7EB").s().p("AiQgcIAXAQQAdARAhAJQBnAfBlg/QgpAohNAGIgUABQhRAAhGg5g");
	this.shape_9.setTransform(24.3,-61.3,1.7,1.7,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C25D35").s().p("AgVB/QgDgMABgGQgJAGADALQg6gGgfghQgRgegDgxQgCgmAFgJIALAiQAPAiAZAJQAFgMAlgPQAUgIAUgFIAhgUQAkgTALAEQAKgZgSgjIgUgeQAKACAeAbQAkAiAMAgQAHA1gxA7QgNgLgFAAQAGADAHAOQgTAWgSANQgbAHgdAAIgTgBg");
	this.shape_10.setTransform(33.7,-86.9,1.7,1.7,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DA684E").s().p("AAAABQgDgCADgCQAAgBACAEQABADgBABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_11.setTransform(34.2,-102.6,1.7,1.7,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2866B").s().p("AgTACIgDgGQAYgMAVALQACAIgGADQgQgBgMAHQgGgBgEgJg");
	this.shape_12.setTransform(35.8,-108.2,1.7,1.7,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2866B").s().p("AgPAYQgEgDgDgDQAGgaAegQQAMARgFAHQgLAGgKAKIgHAJIgCAAIgGgBg");
	this.shape_13.setTransform(49,-102.4,1.7,1.7,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#682A18").s().p("AgFACQgFgLAGgCQAEgDAGAMQACADAAAFQAAAFgCABIgCABQgEAAgFgLg");
	this.shape_14.setTransform(34.2,-101.7,1.7,1.7,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DA684E").s().p("AgBAAQgBgCACgBQAAgBACAEQABACgBACIgBAAQgBAAgBgEg");
	this.shape_15.setTransform(44.9,-97.6,1.7,1.7,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#682A18").s().p("AAAAKQgCgDgDgFQgFgLAGgCQACgBACADQADADADAFQAFALgGACIgBABQgCAAgCgDg");
	this.shape_16.setTransform(44.9,-96.7,1.7,1.7,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FAEDDD").s().p("AAUAYQAFgJABgIQgXAEgPgMQgVgRgDgiIAOAiQAVAdAmgMQgFAegXAPQgKAIgKABQAUgKALgTg");
	this.shape_17.setTransform(32.5,-97.4,1.7,1.7,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8C595").s().p("AhgB2QgshGAGhCQAGhIA+gdQA+gdA6ApQA4AmAaBNQgHApgsAjQgXARgVAKQgUAKgaAGQgVAFgRAAQgfAAgWgOg");
	this.shape_18.setTransform(33.7,-90,1.7,1.7,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E69A70").s().p("AgJAIIgGgFIgBgIQAAgLADgEQAMgHADAEQAMAMADAMQADAQgMAJQgJgMgIgGg");
	this.shape_19.setTransform(21.1,-106.5,1.7,1.7,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8C595").s().p("AgOALIgJgGIgCgMQAAgRAFgHQASgKAFAHQASASAEASQAEAXgSANQgOgRgLgKg");
	this.shape_20.setTransform(21.6,-107.8,1.7,1.7,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E69A70").s().p("AgGAPQgJgLgBgPIABgEQAEgFAHgDQAIABAMAOIAAAHQgBAJADAPIgHABQgLAAgGgJg");
	this.shape_21.setTransform(58.6,-89.2,1.7,1.7,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8C595").s().p("AgJAWQgNgRgDgWQAAgKAUgHQALABASAUIgBALQgBANADAXQgFABgFAAQgPAAgJgNg");
	this.shape_22.setTransform(59.5,-90.5,1.7,1.7,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEAD7").s().p("AingBQgEgHABgGIACgFQgEgIAGgHQgEgHACgGQABgGAEADQB8BGBSguQAqgYARgnIANAFQAOAHAIAOQANAXgEAKQAHABAGALQAFALgCAFQAHAEACAHQABAGgEAEQgqArg/ATQgeAJgcAAQhbAAhRhbg");
	this.shape_23.setTransform(22.3,-61,1.7,1.7,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBF7EB").s().p("AhdCRQgNgXgehRIgchKICcAYIBPiHIApBFQArBLAKAXQgtA9hGAgQg8AdhDAAIgQAAg");
	this.shape_24.setTransform(16.8,-50.8,1.7,1.7,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8C595").s().p("AhICQIhWi0ICLgIIBchmIBWC1QgVAmgqAdQgVAPgQAHQgRAIgZAHQgcAIgdAAQgQAAgQgDg");
	this.shape_25.setTransform(23.1,-63.3,1.7,1.7,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#617A80").s().p("Ah3AgIB1gkIBohCIASAmQgHALgRAQQggAcgrAVQgrAUgsAGIgjABg");
	this.shape_26.setTransform(14,-44.1,1.7,1.7,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A04F3B").s().p("AgVAIIApgSIACADIgpASg");
	this.shape_27.setTransform(16.9,-11.3,1.7,1.7,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C86E5E").s().p("AgFgCIAJgBIACADIgIAEg");
	this.shape_28.setTransform(15.9,-12.6,1.7,1.7,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8C595").s().p("AgVAAIAIgEIAhgFIABACIgnARg");
	this.shape_29.setTransform(17.3,-11.7,1.7,1.7,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A04F3B").s().p("AgVAIIApgSIACADIgpASg");
	this.shape_30.setTransform(-12.5,-25,1.7,1.7,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C86E5E").s().p("AgGgCIAKgBIADADIgJAEg");
	this.shape_31.setTransform(-13.4,-26.4,1.7,1.7,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8C595").s().p("AgVAAIAIgEIAigFIAAACIgnARg");
	this.shape_32.setTransform(-12,-25.5,1.7,1.7,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8C595").s().p("AgDgMIgdgcQACgIAHgJQANgQATABQAWAjACA3QABAdgDAWIgJAEQACgxgbgkg");
	this.shape_33.setTransform(-4.4,-38,1.7,1.7,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8C595").s().p("AgEgYIghggIAPgFQATgEATACQAWAigBAwQAAAYgFASIgIAEQACgxgegog");
	this.shape_34.setTransform(25.2,-22.8,1.7,1.7,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 4
	this.h1 = new lib.Symbol75();
	this.h1.setTransform(9.7,-86.4,1,1,0,0,0,6.8,2.9);

	this.h2 = new lib.Symbol74();
	this.h2.setTransform(49.4,-67.9,1,1,0,0,0,-5.8,-3.6);

	this.l2 = new lib.Symbol73();
	this.l2.setTransform(49.4,-97.7,1,1,0,0,0,-12.8,4.9);

	this.l1 = new lib.Symbol72();
	this.l1.setTransform(32.7,-105.2,1,1,0,0,0,6.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.h2},{t:this.h1}]}).wait(1));

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B6D1D9").s().p("Ai0BnQgLgJgCgNQgDgOAGgNQAGgPASgLQAFgEAcgMID1hyQAVgKANgBQATgBANAJQAQAMABAUQABAUgOANQgOANgTgDQgSgEgFgPQgEgKACgGQACgIAIgEQAIgDAIACQAIADACAFQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgCgBIgEgEIgEgCQgJgDgGAGQgGAHAIALQAJAMAPgDQAQgDAFgQQAFgRgLgMQgLgMgTACQgIABgZAMIivBTIhFAfQgcANgDADQgRALgBARQAAAQAOAJQAOAJAOgHQAPgHAAgPQAAgFgDgFQgDgGgEgBQgHgCgGAFQgFAGABAHQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAIgDABIgCgCQgCgDABgHQABgIAHgFQAHgGAIABQAJACAFAIQAIAOgEAOQgHATgTAFQgGABgGAAQgOAAgMgLg");
	this.shape_35.setTransform(-2.6,-7.6,1.7,1.7,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFF3F6").s().p("AirAyIE/iVIAYAyIk/CVg");
	this.shape_36.setTransform(-0.4,-13.8,1.7,1.7,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFF3F6").s().p("AgUA6QgYgIgLgYQgLgXAIgXQAJgYAYgLQAXgLAXAJQAYAIALAYQALAXgJAXQgJAYgXALQgNAGgNAAQgJAAgLgEg");
	this.shape_37.setTransform(-30.2,-21.2,1.7,1.7,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFF3F6").s().p("AgUA7QgYgJgLgYQgLgXAIgXQAJgYAYgLQAXgLAXAJQAYAIALAYQALAXgJAXQgIAYgYALQgNAGgNABQgJAAgLgEg");
	this.shape_38.setTransform(24.4,4.4,1.7,1.7,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D8E7EF").s().p("AiFBRQgJgDgEgJQgEgJADgKQADgJAJgEID6h1QAKgEAJAEQAJADAEAJQAFAJgEAJQgDAKgJAEIj6B0QgGADgFAAIgIgCg");
	this.shape_39.setTransform(-3.6,-7.1,1.7,1.7,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D8E7EF").s().p("AiFBRQgJgDgEgJQgFgJAEgKQADgJAJgEID6h0QAJgFAKAEQAJADAEAJQAEAJgDAKQgDAJgJAEIj6B0QgFADgGAAIgIgCg");
	this.shape_40.setTransform(-12.2,11.3,1.7,1.7,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B6D1D9").s().p("AidAHIEIh7IAzBuIkIB7g");
	this.shape_41.setTransform(-8,2.3,1.7,1.7,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D8E7EF").s().p("AgagIQgEgHADgHQADgIAHgDQAHgEAIADQAFADAEAHIAWAsIghARg");
	this.shape_42.setTransform(-34,20.9,1.7,1.7,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D8E7EF").s().p("AgagIQgDgHADgIQACgHAHgEQAHgDAIADQAGACADAIIAWAsIghARg");
	this.shape_43.setTransform(-24.7,25.3,1.7,1.7,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D8E7EF").s().p("AgagIQgEgHADgIQADgHAHgEQAHgDAIADQAFACAEAHIAWAtIghAQg");
	this.shape_44.setTransform(-15.4,29.7,1.7,1.7,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D8E7EF").s().p("AgagIQgEgHADgIQADgHAHgEQAHgDAIADQAFACAEAIIAWAsIghARg");
	this.shape_45.setTransform(-6.1,34,1.7,1.7,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EFF3F6").s().p("AijgEIEIh9IA/CGIkIB9g");
	this.shape_46.setTransform(-16.7,20.9,1.7,1.7,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8A823").s().p("AAHAJQgFgBgCgFIgIgGQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABIAFAHQAFADAEACQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_47.setTransform(-13.7,45.9,1.7,1.7,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3F3832").s().p("AgFAHQgEgCAAgFQAAgCADgDQADgEADAAQADAAADADQAEADAAADQAAADgDADQgDAEgEAAQgCAAgDgDg");
	this.shape_48.setTransform(-15.2,47.4,1.7,1.7,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8A823").s().p("AgMANQgGgFAAgIQgBgGAFgHQAGgFAIAAQAGAAAGAFQAHAGAAAHQABAHgGAGQgFAGgJAAQgGAAgGgGg");
	this.shape_49.setTransform(-15.3,47.4,1.7,1.7,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3F3832").s().p("Ah4hmIADgGIDuDNIgMAMg");
	this.shape_50.setTransform(-15.3,47.7,1.7,1.7,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#647525").s().p("AgLCpQgMgGgIgMIgFgLIiFgCIEDkzIARETIA/AkIgIAWQhlgFgVgJQgKgFgRAOQgMALgHAAIgFgBg");
	this.shape_51.setTransform(-30.7,12.2,1.7,1.7,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4C2B24").s().p("AAIAKQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgFgEgCQgBAAgEAAQgDACgCgCQgDgBACgDQACgFAGAAQAEAAAEADQAEADACADQABAEgCAFQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_52.setTransform(-30.3,-77.1,1.7,1.7,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4C2B24").s().p("AANAPQgFgBgEgLIgCgDIgCgCQgBgCgDABIgHACQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBgCACgDQAEgFAIAAQAFAAAEAFIAEAJIACAEQABADABABQABABAAAAQAAAAABABQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_53.setTransform(-56.9,-59,1.7,1.7,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DF7463").s().p("AgUgHIApgPIAAAtg");
	this.shape_54.setTransform(-43.2,-68.6,1.7,1.7,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4C2B24").s().p("AANAMQgBgCgFgDIgPgIIgBAAIAAgBIgFgBQgEgCAAgDQAAgEADgBIAHgBIAGADQACACAFAEIAIAGQAFAEABAFQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgBABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_55.setTransform(-35.3,-82.8,1.7,1.7,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4C2B24").s().p("AAQAPQgHgJgJgGQgDgCgFgBIgKgDQgEgBABgEQAAgDADgBQAKgDANALQAKAHAHALQAAABABAAQAAABgBAAQAAABAAAAQgBABAAAAIgDABIgCgBg");
	this.shape_56.setTransform(-62.4,-65.3,1.7,1.7,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F39B92").s().p("AgPAsIgOgHQgKgHgFgKQgFgLAAgJIADgOIAFgMIACgNQACgHAGACQAFACAHAFIAMADQAOADAIAHQAHAFAEAFIAKARQACAFAEAEIAIAIQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgFABIgGABQgGABgRALQgLAHgJAAIgKgCgAgfgTIgEAPQgCAKAFAJQAIAQAPACQAKABAJgGIASgJIAEgBIgIgNIgIgMQgHgKgSgEIgSgEIgBAAg");
	this.shape_57.setTransform(-37.7,-59.1,1.7,1.7,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGAJQgLAAAQgRIAMAFQgCADgGAEQgEAFgEAAIgBAAg");
	this.shape_58.setTransform(-41.6,-57.8,1.7,1.7,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgJAQQgGgFAHgLQAEgHAFgIIAMAMQgCAEgIAIQgGAHgEAAIgCAAg");
	this.shape_59.setTransform(-40.1,-60.5,1.7,1.7,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJADQACgEAEgHIANABQgCAFgFAEQgDAHgEAAIgBAAQgFAAABgGg");
	this.shape_60.setTransform(-34.9,-62.7,1.7,1.7,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKANQgGgEAGgJIAJgNIAPAGQgCAGgJAHQgGAIgEAAIgDgBg");
	this.shape_61.setTransform(-37.8,-61.9,1.7,1.7,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A12D2A").s().p("AgZAnQgRgLADgcQADgcAAgNQAEAFAJADQAGACAKACQARAEAJAJQAGAFAHAQIAFAMIAEACQgEAAgIAFIgJAGQgPAIgGADQgGABgFAAQgHAAgGgDg");
	this.shape_62.setTransform(-37.9,-58.8,1.7,1.7,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#78A146").s().p("AAaA6QgjgJgPgEIgJgEQgGgDABgEQAAgDAIgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgKgBgJgDQgPgIAAgEQABgFAJgDQAHgCAIAAQgOgCgMgGQgPgJAGgHQAEgEAMgBQAMAAACAEIgHgWQgEgPAGgGQAHABAEALIAGAQIgEgYQgCgSAEgDQAHAGAFARQgFgYAGgFQAGgEAGAUQAEAMACANQgCgKABgLQABgRAEACQAEABAFARQACAIACAPIAEAPQgEgaAHgJQAMACAAApQgBAEABABQABABAAAAQAAgBAAAAQAAAAAAgBQAAgBAAgBQABgIACgHQAEgKAEgCQAIAEAAAkQgBAFABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAgCQAEgTAGgFQAGAIACATQADAbgBAUQgCAcgKAQQgFgWgggLg");
	this.shape_63.setTransform(-58.7,-87.3,1.7,1.7,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E5816C").s().p("AgRAcQgVgNAHgXQAHgZAaABIATAGQAYARgTAZQgNARgNAAQgIAAgJgFg");
	this.shape_64.setTransform(-31.5,-76.8,1.7,1.7,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E5816C").s().p("AgNAnQgegOAEgeQAFghAigCIAFgBQAwANgSAoQgGAQgPAJQgIAFgHAAQgGAAgGgDg");
	this.shape_65.setTransform(-58.1,-59.1,1.7,1.7,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4C2B24").s().p("AATCKQgJgEgGgPQgEgPADgJQgNAZgQgOQgHgGgBgKQAAgNgBgGIgPARQgMAJgIgHQgGgFAAgOIAAgUQgLAKgFACQgKAFgIgLQgIgJADgSQAEgSAAgJQgeAbgFgfQgEgdALgdQAKgaAJgQQAIgNARgZQALAMApgBQAXgBAhgDQAcgBAQAHQARAHARAVQAXAcAIA1QAGAlAUAVQABABgyA2QgWAWgOAKQgTAMgOAAQgGAAgFgCg");
	this.shape_66.setTransform(-29.5,-46,1.7,1.7,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C85643").s().p("AAAAFQgHgEACgEQABgDAEAAIABAAIACABQAFACgDADQABADgDADIgCABIgBgCg");
	this.shape_67.setTransform(-14.3,-73.5,1.7,1.7,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C85643").s().p("AABAFIgBgCQgDABgDgDQgDgBADgDQAGgFAHAHQAEABgDAEQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_68.setTransform(-59.4,-40.9,1.7,1.7,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DF7463").s().p("AgbgZQASgYASAUQASARADAaIgLAZQg7goANgYg");
	this.shape_69.setTransform(-15.1,-72.7,1.7,1.7,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DF7463").s().p("AAGAYQgogMgFgeIAggIQAaABATAWQAIAegYAAQgHAAgJgDg");
	this.shape_70.setTransform(-58.4,-40.8,1.7,1.7,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#647525").s().p("AA0CAQgMgDgJgQQgJgPACgKQgLAcgTgNQgKgGgDgLIgEgUIgOATQgLALgLgHQgHgFgEgOIgEgWQgLANgEACQgLAGgLgLQgLgJAAgTQABgUgCgGQgdAdgNgiQgLgeAHgfIApgVQAqgVALgVQAWADABARQABAIAegPQAWgMAPAIQADABAiAdQANAMAOgMQAKgKAFANQAEAMAaAUQAjAZALAMQAKAKgxBVQgVAagMALQgUAQgRAAQgFAAgFgCg");
	this.shape_71.setTransform(-28,-33.7,1.7,1.7,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#728A35").s().p("Ah8CbQgjgjgfgLQADgfgBgHQgCgYglhHQgfg/AJgoQACgLABguQABggANgWQALgRALgLQAsgwBEgKIFeHUIixC1g");
	this.shape_72.setTransform(-22.9,8.2,1.7,1.7,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#728A35").s().p("AioCdQgQASgRAKQgjASgEgvQAOgfAAgGQgDgcgyg2QgsgtAJgnQAShRAcgtQALgRALgLQAxg0BNgIQAbgCAuANQAyAOAVABIBJAFQAlAFARAOQBVBFApBGQAaAuAJAxQAJA1gKAyQgLAyghAfQgRAPgWAOQgBABgNguQgNgsgCAKQgJA5gZAdQgNAPgLAEg");
	this.shape_73.setTransform(-29,-2.9,1.7,1.7,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#FACC91","#F9C88D","#F5BA83","#F1A373","#E98161","#E36353"],[0,0.145,0.341,0.573,0.824,1],10.3,-12,0,10.3,-12,24.3).s().p("AhDDDQg7gNghg3QgagrAJg4QAJgxAkgwQAjgwAwgbQAxgeAwAEQAPABARAGIgDgfQgBgDADgBQAEgBABADQADAHABALIABASQASAIAPANIAAgLQgBgUABgHQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQADAHAAARIABAYQAJAJAGAIIAEgOQACgXADgMQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABQABAcgLAdQAbAqgCAwQgBA2gpAzQgcAkg6AsIgDAPQgqAOgjAAQgTAAgTgEg");
	this.shape_74.setTransform(-39.5,-62.6,1.7,1.7,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5E8584").s().p("AgNgXIANgGIAOA6IgOABg");
	this.shape_75.setTransform(66.5,40.1,1.7,1.7,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5E8584").s().p("AgYARIAkgtIAOANIggAsg");
	this.shape_76.setTransform(-23.6,111.4,1.7,1.7,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#517070").s().p("AgrgHIBXgKIgcAjg");
	this.shape_77.setTransform(40.2,33.2,1.7,1.7,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#517070").s().p("AgZgeIAzAXIgaAeIgPAHg");
	this.shape_78.setTransform(1.1,90.3,1.7,1.7,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#517070").s().p("AgeAIIArg0IASAKIg2AyIgBAdg");
	this.shape_79.setTransform(-6.7,51.1,1.7,1.7,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2F3535").s().p("AghgOIARABIAQAPIAYgCIAKAJIgoAGg");
	this.shape_80.setTransform(5.6,32.5,1.7,1.7,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2F3535").s().p("AgMANIAOg4IAKALIgKArIAEAcIgIAFg");
	this.shape_81.setTransform(-26.7,68.1,1.7,1.7,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#384848").s().p("AA/CDIgGg8IA1iEIgbgiIjlhQIiXAJIgOgvICigkIDlgCIDoC6IhGBaIhdBKIBmBzIgdAmg");
	this.shape_82.setTransform(15.3,72.7,1.7,1.7,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8ECC9").s().p("AgLgXIAXAiIgMANg");
	this.shape_83.setTransform(79,25.6,1.7,1.7,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8ECC9").s().p("AgZhOIAKgCIApCaIgPAHg");
	this.shape_84.setTransform(78.5,35,1.7,1.7,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#665935").s().p("AgfgvIANgLIAfAxIAHAAIALA2IgiAOg");
	this.shape_85.setTransform(74.1,37.6,1.7,1.7,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC543F").s().p("AgyhNIA5BYIAcgBIAAgBIABAAIAPAnIhCAeg");
	this.shape_86.setTransform(73.4,34.7,1.7,1.7,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F8ECC9").s().p("AghAQIAAgNIBDgSIAAAfg");
	this.shape_87.setTransform(-12.5,126.6,1.7,1.7,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F8ECC9").s().p("AgxAWIAwAAIBLg3IAHAJIhRA6IhQAAg");
	this.shape_88.setTransform(-20.7,123.6,1.7,1.7,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#665935").s().p("AgwAjIApgwIgKgOIAngWIAGAIIAVAjIhNA4g");
	this.shape_89.setTransform(-25,119.9,1.7,1.7,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC543F").s().p("AgvAtIAug0IgXgbIAagaIAtA8IhSA9g");
	this.shape_90.setTransform(-25.3,118.9,1.7,1.7,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 5
	this.p6 = new lib.Symbol81();
	this.p6.setTransform(-36.2,-86.5,1,1,0,0,0,-10,11.5);

	this.p5 = new lib.Symbol80();
	this.p5.setTransform(-39,-87.8,1,1,0,0,0,-7.8,12.1);

	this.p4 = new lib.Symbol79();
	this.p4.setTransform(-40.8,-88.4,1,1,0,0,0,-4.3,12.9);

	this.p1 = new lib.Symbol78();
	this.p1.setTransform(-67,-64.7,1,1,0,0,0,9.3,-9.2);

	this.p2 = new lib.Symbol77();
	this.p2.setTransform(-66.2,-65.6,1,1,0,0,0,12,-2.9);

	this.p3 = new lib.Symbol76();
	this.p3.setTransform(-65,-67.2,1,1,0,0,0,13.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p3},{t:this.p2},{t:this.p1},{t:this.p4},{t:this.p5},{t:this.p6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-129.5,165.9,259.1);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0927").s().p("AgEAQIAEgYIgGAGIgDgDIALgMIAIACIgHAhg");
	this.shape.setTransform(2.3,-17.8,2,2);

	this.instance = new lib.Path_1_7();
	this.instance.setTransform(-4.1,-18.7,2,2,0,0,0,1.2,3.7);
	this.instance.alpha = 0.148;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4AcIARhIIBhAQIgtAcIAXAtg");
	this.shape_1.setTransform(5.1,-17,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B05D53","#905263"],[0,1],-3.4,0,3.5,0).s().p("AgfCLQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgBIA+kSIAFABIg+ESQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_2.setTransform(-9.6,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-27.9,33.3,55.9);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_19();
	this.instance.setTransform(-0.6,-1.8,2,2,0,0,0,1,0.3);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EA1BD").s().p("AAAAGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAgCgEQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(-0.3,1.7,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEDF5").s().p("AgHgMIALgCIAEAcIgLABg");
	this.shape_1.setTransform(0.9,1.5,2,2);

	this.instance_1 = new lib.Path_1_8();
	this.instance_1.setTransform(-0.7,-8.5,2,2,0,0,0,1.4,8);
	this.instance_1.alpha = 0.102;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNgMIAXgDIAEAcIgXADg");
	this.shape_2.setTransform(-0.3,1.7,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AE6868").s().p("AACBOQgCgDAAgEIgRiLQAAgEACgDQADgDADgBQAJgBAAAKIARCLQABAEgDADQgCADgEABIgBAAQgEAAgCgCg");
	this.shape_3.setTransform(-1.5,-8.5,2,2);

	this.instance_2 = new lib.Path_4_0();
	this.instance_2.setTransform(1.5,21,2,2,0,0,0,4.8,3.2);
	this.instance_2.alpha = 0.148;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGgNIAKgCIADAQQABAGgEAEQgDAEgEABg");
	this.shape_4.setTransform(1.3,5.1,2,2);

	this.instance_3 = new lib.Path_6_0();
	this.instance_3.setTransform(5.4,14.5,2,2,0,0,0,2.8,6.4);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.Path_7_0();
	this.instance_4.setTransform(0,5.2,2,2,0,0,0,1.4,1.7);
	this.instance_4.alpha = 0.148;

	this.instance_5 = new lib.Path_8_0();
	this.instance_5.setTransform(-3.4,-23.6,2,2,0,0,0,3.7,0.9);
	this.instance_5.alpha = 0.102;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AE6868").s().p("AgkgEIBHgJIACARIhHAJg");
	this.shape_5.setTransform(-3.5,-24.5,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA3QgZgOgEgWIgJhIIBdgLIAJBIQACAVgVAUQgLAKgLAHQgLgEgMgHg");
	this.shape_6.setTransform(0.7,14.1,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-27.3,22.1,54.6);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.eyes = new lib.Symbol49();
	this.eyes.setTransform(-7.9,4.2);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24272A").s().p("AAhAaIAAAAIAAAAgAAaAXIgDgBIgBAAIAAgDQAAgKgMgIIgIgBQgFgBgHABIgMAEIgBABQgKgFgBgRIAAgIQABABAGAFQAHAEAFgBIAHgBQAIgBAFABQAHACAFADQAJAFAFAHQAFAJgCAKIgBAHIgHgDg");
	this.shape.setTransform(-18.2,-0.7,1.799,1.799,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYADQgBgVAXgGQAYgEADAcQACAZgaABIgBAAQgYAAAAgXg");
	this.shape_1.setTransform(-18.3,2.3,1.799,1.799,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FACC91").s().p("AgYAbQgLgIAAgPQABgMAKgMQAYgfAcAgIADAGQANAYgYARQgLAIgJAAQgMAAgMgJg");
	this.shape_2.setTransform(-18,2.4,1.799,1.799,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24272A").s().p("AAPAUIgBgBQgBgIgFgEQgFgGgEgBIgIgCQgOgCgGAHIgCACIgBAAIgDgBIgHgCIADgFQAFgJAJgEQAJgEALABQAHACADACQAGADAGAGIAGAGQADABAHABQAIABACgCIgGAHQgKAMgMAAIAAAAg");
	this.shape_3.setTransform(8.6,5,1.799,1.799,-6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPATQgUgQASgSQARgVATATQAOARgOASQgIAJgJAAQgHAAgKgIg");
	this.shape_4.setTransform(7.1,8.1,1.799,1.799,-6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FACC91").s().p("AggAIQgIgZAagOIAGgDQApgHABAnQABANgJAMQgIANgOAAQgbgBgJgbg");
	this.shape_5.setTransform(6.8,8.3,1.799,1.799,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6BE88").s().p("AgRABIAXgMIAMAXg");
	this.shape_6.setTransform(-7.4,8.5,1.799,1.799,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E67E29").s().p("AgSALIgLgVIgFAXIg6gIIANghIgaAdIglgFQANghAfgaQA8gzBTAiQBVAiALBJQAFAmgLAeg");
	this.shape_7.setTransform(-4.6,-7.9,1.799,1.799,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3544E").s().p("AgKAeQgIgCgFgDQgJgGgCgMIgBgSQAAgNgEgGQAGAFAGABIAJAAQAOAAAEAFIABAAQAKACAGAGIAKAIIAMACQgDABgGAGIgNAQQgHAHgKABIgCABIgIgBgAgagNIABANIAEAKQAEAHALACQAHABAIgHIAJgHIADgDIABAAIgFgDIgNgGQgEgCgBACQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAgFgJAAIgLgCg");
	this.shape_8.setTransform(-7.8,16,1.799,1.799,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAHIgHgCQgEgBgBgCQgEgDAAgJIAIAAIAIAAIAHADQAMAGADABIAGAGQgDAAgDACIgGADIgBAAQgEAAgLgEg");
	this.shape_9.setTransform(-7.9,14.5,1.799,1.799,-6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A251F").s().p("AgPAZQgKgEgDgLQgCgFAAgMQgBgMgDgHQAKAEAHABIALACQAGAAADACQAIAEALAHQAFAFAIABIgHAHQgQAPgJADQgDACgFAAQgFAAgFgCg");
	this.shape_10.setTransform(-7.9,16.1,1.799,1.799,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E69E5E").s().p("AACAEIgCgBIAAAAQgCACgDgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQABAAAAAAQADgGAIAEQADACgBACQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_11.setTransform(17.1,15.9,1.799,1.799,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAD4A9").s().p("AgegCIAVgMQATgGARAMQAMAZgeAAIgCAAQgaAAgLgTg");
	this.shape_12.setTransform(15.2,15.7,1.799,1.799,-6.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E69E5E").s().p("AAAAFQgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIABgBIABAAQAFABgCAEQABAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCgBg");
	this.shape_13.setTransform(-30.2,5.1,1.799,1.799,-6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAD4A9").s().p("AgIAKQgQgJACgJQAHgUAQAJQAPAIAHAQIgCASQgVgHgIgGg");
	this.shape_14.setTransform(-29.6,5.9,1.799,1.799,-6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAD4A9").s().p("AgPCQQgZgCgVgJQgngTgUgtQgTgsALgpQALgsAfgjQAhglAogJQArgJAsAcQAqAcANAtQALArgSAvQgKAcgOARQgMAPgPALQgUAQgWAJQgRAHgUAAIgHAAg");
	this.shape_15.setTransform(-4.9,3.2,1.799,1.799,-6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E67E29").s().p("AgICoQgagCgUgIQgmgPgXgTQgYgUgRgcQgSgdgDgeQgEgeAJggQAJgfAUgaQAdgnAtgRQAngOAqAGQAqAGAlAXQAfATAWAbQAZAeAHAgQALAvgbAzQgZAuguAcQgrAagrAAIgLgBg");
	this.shape_16.setTransform(-2.6,-0.7,1.799,1.799,-6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E19654").s().p("AgsAeQAIg5AHgLIBKAEIAABJg");
	this.shape_17.setTransform(-8,29.3,1.799,1.799,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// hair
	this.hair = new lib.Symbol48();
	this.hair.setTransform(6.8,5.8,1,1,0,0,0,-16,29.2);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-35.7,70,71.5);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand1
	this.hand1 = new lib.Symbol45();
	this.hand1.setTransform(-46,-22.5,1,1,0,0,0,-14.3,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.hand1).wait(1));

	// hand2
	this.hand2 = new lib.Symbol44();
	this.hand2.setTransform(34.2,-25.7,1,1,0,0,0,10.3,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.hand2).wait(1));

	// books
	this.books = new lib.Symbol46();
	this.books.setTransform(-17.4,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.books).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08585A").s().p("AAKAOIgIAIIAEgRIgTAAIARgIIgUgFIAUgDQAAAAgMgLIARAFQACABAAgLIAEAMIgFAKIAHAaIgDAHg");
	this.shape.setTransform(1,65,1.799,1.799,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08585A").s().p("AAIAZIAAgIIgNAFIAIgQIgLgEIANgDIgUgIIAVgBQABAAgJgPIARAOIgDAlg");
	this.shape_1.setTransform(-21.2,59.5,1.799,1.799,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#57BC8D").s().p("Ah6gnIAFgQIDwBgIgMAPg");
	this.shape_2.setTransform(-0.1,30.3,1.799,1.799,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08585A").s().p("AgUAOIAOgcIAbANIgPAQIgXAAg");
	this.shape_3.setTransform(-21.2,27.7,1.799,1.799,-6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#08585A").s().p("AgIAUIgMgLIgDggIAvAVIgYAag");
	this.shape_4.setTransform(16.6,39.1,1.799,1.799,-6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23A6B1").s().p("AgKAJIACgVIAHgRIAMAXIgGAXIgHANg");
	this.shape_5.setTransform(-31.5,58.3,1.799,1.799,-6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23A6B1").s().p("AgMAOIAAgZIAMgRIANAbIgJAXIgJAHg");
	this.shape_6.setTransform(-11.3,61.4,1.799,1.799,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#23A6B1").s().p("AgXgFIAvgFIgDASIgnADg");
	this.shape_7.setTransform(-19.4,92.3,1.799,1.799,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#23A6B1").s().p("AgZAEIAtgWIAEALQADAHgBAAIglATg");
	this.shape_8.setTransform(10.3,94.3,1.799,1.799,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA9856").s().p("AgBAHQgEgBgBgEIABgDQACgFADgBQADAAACADQACAEAAACQgBADgDACIgDABIgBgBg");
	this.shape_9.setTransform(27.8,25.4,1.799,1.799,-6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A05422").s().p("AggAIIgZgVIBzgMIgCAYQgGAWgaAEIgJABQgVAAgagSg");
	this.shape_10.setTransform(23.5,21.3,1.799,1.799,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#68381C").s().p("AgsALIgMgsQBhgLAFgCIAKApQADApgqAJIgOACQgeAAgRgkg");
	this.shape_11.setTransform(25.1,25.9,1.799,1.799,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#68381C").s().p("AA/C6QgJgJgKgaIgUgwIgjhkQgTgugPgzIgPg0IgFgTQgDgLAAgIQADAAADgDQABANAIAaQAGAQAIAgQAPA1ATAvIAiBgQAMAeAHAOIAIAWQAFAMAHAIQADACgDADIgDABIgCgCg");
	this.shape_12.setTransform(0.9,-7.9,1.799,1.799,-6.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#57BC8D").s().p("AgDASQgegIgPgNIgKgNIASgEIAJAIQANAJAWADQAYAGAMgEQAFgCABgBIAOAHQgFAGgLAEQgLAFgNAAQgMAAgLgDg");
	this.shape_13.setTransform(7.9,-45.9,1.799,1.799,-6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4A298").s().p("AgDAHQgFgDABgFQABgFAGgBIADABIACABIACADQACACgBACIgCADIgBACIgDABIgCAAIgDgBg");
	this.shape_14.setTransform(-26,-37.4,1.799,1.799,-6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4A298").s().p("AgDAHQgFgDABgEQABgGAGgBIADABIACABIACADQACACgBACIgCADIgBACIgDABIgCAAIgDgBg");
	this.shape_15.setTransform(-18.8,-37.9,1.799,1.799,-6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4A298").s().p("AgDAHQgGgDACgEQABgGAGgBIADABIACABIACADQACACgBACIgCADIgBACIgDABIgCAAIgDgBg");
	this.shape_16.setTransform(-14.8,-31.8,1.799,1.799,-6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4A298").s().p("AgDAHQgGgDACgFQABgFAGgBIADABIACABIACADQACACgBACIgCADIgCABIgDACIgBAAIgDgBg");
	this.shape_17.setTransform(-7.9,-33.2,1.799,1.799,-6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4A298").s().p("AgDAHQgFgDABgEQABgGAGgBIADABIACABIACADQACACgBACIgCADIgBACIgDABIgCAAIgDgBg");
	this.shape_18.setTransform(-2.6,-28.3,1.799,1.799,-6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4A298").s().p("AgDAHQgFgDABgEQABgHAGAAIADABIACABIACADQACACgBACIgCADIgBACIgDABIgCAAIgDgBg");
	this.shape_19.setTransform(3.9,-31.3,1.799,1.799,-6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4A298").s().p("AgDAHQgGgDACgFQACgGAFAAIADABIACABIAAAAIACACQACADgBACIgCADIgBABIgDACIgCAAIgDgBg");
	this.shape_20.setTransform(9.9,-26.7,1.799,1.799,-6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4A298").s().p("AgDAHQgGgEACgEQABgGAGAAIADABIACABIAAAAIACACQACADgBABIgCAEIgBABIgDABIgCABIgDgBg");
	this.shape_21.setTransform(16.5,-30.2,1.799,1.799,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4A298").s().p("AgDAHQgGgEACgEQACgGAFAAIADABIACABIACACQACADgBABIgCAEIgBABIgDABIgCABIgDgBg");
	this.shape_22.setTransform(22.6,-26,1.799,1.799,-6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4A298").s().p("AgDAHQgGgDACgEQACgHAFAAIADABIACACIACACQACACgBACIgCAEIgBABIgDABIgCAAIgDgBg");
	this.shape_23.setTransform(28,-31.4,1.799,1.799,-6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4A298").s().p("AgBAHQgGgDABgFQACgGAEAAIABAAIAGANIgEACIgBAAIgDgBg");
	this.shape_24.setTransform(35.3,-28.3,1.799,1.799,-6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4A298").s().p("AAwANIgsAjIgUgxIgvAeIgMg1Ig6AUIAFg1IgzABIAIgIIAzAAIgFAyIA3gTIALAzIAugdIAUAwIArgjIAdAzIAjgnIAkAnIAXgnIACABIAFAKIgFgCIgYAqIglgpIgkAqg");
	this.shape_25.setTransform(1.2,-32.8,1.799,1.799,-6.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DF0024").s().p("AiCCRIAUhkIADgfIACghQAAgEhdg1IgnhAIBYhBQAngeBQgDQAmgCAgAEIAMAJQAPAJAUACQAgACAIgFIAYAPQAdAUATAaQBABWgrB0QgiBhgsA7QgVAdgPALg");
	this.shape_26.setTransform(-2.2,-4.7,1.799,1.799,-6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0F7583").s().p("AhBBWQgEgHACgaIAAAAIABgFIBEh7IgOgJIhTB5IgIDAIgjAGIgji+IAFgrIAAAAIAAgBQBdi6AAgDQAAgEBFhMIC0BAIgCBMIglBUIh2B8IApCvIgjAPQg8h7gcg9g");
	this.shape_27.setTransform(-2.3,49,1.799,1.799,-6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DEAC07").s().p("AgfAJIACgKIA8gMIgDAbg");
	this.shape_28.setTransform(2.7,114.1,1.799,1.799,-6.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DEAC07").s().p("AhIAVIAcgJIAqAEIBGgqIAFAJIhKAsg");
	this.shape_29.setTransform(10.3,111.1,1.799,1.799,-6.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#665935").s().p("AgrAbIAngmIgIgOIAlgQIAUAoIhIArg");
	this.shape_30.setTransform(13.9,107,1.799,1.799,-6.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC543F").s().p("AgrA0IArgsIgbg0IAXgWIAwBWIhOAvg");
	this.shape_31.setTransform(13.8,103.1,1.799,1.799,-6.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DEAC07").s().p("AAMgFIAIALIgnAAg");
	this.shape_32.setTransform(-31.4,106.3,1.799,1.799,-6.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DEAC07").s().p("AhBADIABgHICAgBIACALg");
	this.shape_33.setTransform(-23.3,107.6,1.799,1.799,-6.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#665935").s().p("AgoASIgGgNIAtgQIAGgHIAoAEIACAhg");
	this.shape_34.setTransform(-20.9,103.4,1.799,1.799,-6.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC543F").s().p("Ag3AjIBHgVIgGgyIAJgKIADACIARACIARBZg");
	this.shape_35.setTransform(-23,99.8,1.799,1.799,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// head
	this.head = new lib.Symbol47();
	this.head.setTransform(6.7,-46.1,1,1,0,0,0,-8.7,34.6);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.3,-116.4,100.7,233);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m2 = new lib.Symbol42();
	this.m2.setTransform(17.9,-9.7);

	this.m1 = new lib.Symbol41();
	this.m1.setTransform(-32.6,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-28.5,88.8,57.3);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.m6 = new lib.Symbol38();
	this.m6.setTransform(32,-29.2,1,1,0,0,0,-8.8,-70.7);

	this.m5 = new lib.Symbol37();
	this.m5.setTransform(31.9,-29.1,1,1,0,0,0,-41.4,-50.1);

	this.m4 = new lib.Symbol36();
	this.m4.setTransform(31.9,-29.1,1,1,0,0,0,-57.5,24.2);

	this.m3 = new lib.Symbol35();
	this.m3.setTransform(28.3,-20.3,1,1,0,0,0,-0.9,64.8);

	this.m2 = new lib.Symbol34();
	this.m2.setTransform(22.4,-25.7,1,1,0,0,0,49.1,48.8);

	this.m1 = new lib.Symbol33();
	this.m1.setTransform(26,-31.7,1,1,0,0,0,67.5,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2},{t:this.m3},{t:this.m4},{t:this.m5},{t:this.m6}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9681B6").s().p("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");
	this.shape.setTransform(-11.6,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-96.1,216.1,192.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAuIAAgSIARAAIAAASgAgJASQABgHACgEQADgFAFgDQAGgEAEgFQADgDAAgFQAAgGgEgDQgFgDgGAAQgDAAgFAEQgFADgBAHIgSgBQACgOAIgGQALgIALAAQAPAAAKAHQAIAHAAAMQAAAGgDAGQgDAFgHADIgFAEIgGAGQgDAEAAADg");
	this.shape.setTransform(10.7,-5.1,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4AA1CB").s().p("ABNBYQgggFgSgSIg7AAQggAAgXgWQgWgXAAgeIAAgBQAAggAWgXQAXgWAgAAIBBAAQAgAAAXAWQAWAXAAAgIAAABQAAAUgLASQgKARgSAKQAPAaAUAIIgKAAIgTgBg");
	this.shape_1.setTransform(10.7,-3.1,1.6,1.6);

	this.instance = new lib.Path_0_1();
	this.instance.setTransform(-1.8,-0.8,1.6,1.6,0,0,0,5.4,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_2.setTransform(-7,6.7,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADgBQAEABAEADQADADAAADQAAAEgDADQgEAEgEAAQgDAAgDgEg");
	this.shape_3.setTransform(-11.9,6.7,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADgBQAEABADADQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_4.setTransform(-16.8,6.7,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF9F00").s().p("AhGA3QgSgKgLgRQgKgSAAgTIAAgCQAAggAXgWQAWgXAgAAIBBAAQAgAAAWAXQAXAWAAAgIAAACQAAAegXAWQgWAWggAAIg6AAQgTATggAEIgdABQAVgHAOgbg");
	this.shape_5.setTransform(-10.6,3.1,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-17.5,56.8,35);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.eyes = new lib.Symbol25();
	this.eyes.setTransform(0.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E19654").s().p("AgHAEQAFgHAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAgBAAQgBACgFABIgGACg");
	this.shape.setTransform(23.8,4,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E19654").s().p("AAAACQgFgBAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIADAAQACAAABADIADAEIgBAAIgFgCg");
	this.shape_1.setTransform(-26.9,3.2,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E19654").s().p("AgOAlQgJgKAEgMIAYg6QACANANArQAFAWgKAFQgJAEgGAAQgJAAgFgHg");
	this.shape_2.setTransform(-1.8,-0.9,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E67674").s().p("AgNAuQgagDgSgbQgKgSgGgIQgKgKgCgGQgDgIAOgCIATgBIAOgEQAegHAPADQALABAbAJQAXAHAQABQAGAAAAAGQAAAFgFACQgGACgHAJIgLANQgNARgIAGQgTAOgWAAIgJgBgAgugaQgLADgIAAIATAcQAUAeAagEQAcgFAVgaIANgPIgUgFQgbgJgPgBIgKgBQgQAAgUAFg");
	this.shape_3.setTransform(-1.4,14,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#594E42").s().p("AiqBqQgQhUAKgpQAXhjCCAFQB+AGAeBFQAPAigLAgIAsA6QhLgShTgSQgygMgqglIggggIgXAZQgYAagIAQQgHAOgCAsIgCATIgBABQgBAAgBgIg");
	this.shape_4.setTransform(1.5,-15.2,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAbIAAAAQgMAAgHgJQgIgIAAgKQABgLAJgIQAIgIAJABIABAAQAMAAAIAJQAIAIgBAKQgBALgIAIQgIAHgKAAIgBAAg");
	this.shape_5.setTransform(11.2,-1.7,1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594E42").s().p("AgYAQQADgQAOgKQAGgGAJAAQAMAAAEAIQADAFgIADIgOABIgPAFQgKAEgEAHg");
	this.shape_6.setTransform(-18.1,-10.5,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E19654").s().p("AAAAjQgPgBgKgLQgJgLAAgMQABgPALgKQALgJAMAAQAPABAKALQAKALgBAMQgBAPgLAKQgKAJgNAAIAAAAg");
	this.shape_7.setTransform(11.2,-1.7,1.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAbIAAAAQgMAAgHgJQgIgJAAgJQABgLAJgIQAIgIAKABIAAAAQAMAAAIAJQAIAIgBAKQgBALgIAIQgIAHgKAAIgBAAg");
	this.shape_8.setTransform(-13.4,-2.9,1.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAOIgRgDQgHgDgIgPQAdgIAUAAQATAAAgAMQgGAJgFAEQgKAFgYABIgGAAQgKAAgHgCg");
	this.shape_9.setTransform(-1.2,10.2,1.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E19654").s().p("AAAAjQgPgBgKgLQgJgLAAgMQABgPALgKQALgJAMAAQAPABAKALQAKALgBAMQgBAPgLAKQgKAJgNAAIAAAAg");
	this.shape_10.setTransform(-13.4,-2.6,1.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B93732").s().p("AgaAjQgMgFgWgfIgHgPQgFgLgEgCQALACASgFQAWgHAXgBQARAAAeAKQAZAKAHgDQgHADgKAPIgPAVQgPAQgRAGQgJADgGAAQgMAAgMgGg");
	this.shape_11.setTransform(-1.1,14.1,1.6,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3B673").s().p("AgRgIQAJgHAIgCQAMgDAFAKQAFAKgOAKQgJAHgNACg");
	this.shape_12.setTransform(23.9,4.6,1.6,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#594E42").s().p("Ag0BTQgogMgegcQgVgTgJgdQgIggAIgbQAeAEAmgOQA1gSAiACQAbABARAHIAfANIAXAHQAMAEAMABIAMAAQAHgBAIgEQAKAsgMAZQgQAngkAWQgfAUgpADIgRABQgfAAgegJg");
	this.shape_13.setTransform(-1.9,18.9,1.6,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3B673").s().p("AgNAHQgPgJAOgOQAFgEAMAEQALADAIAEIgJAcQgTgHgHgFg");
	this.shape_14.setTransform(-27,3.6,1.6,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3B673").s().p("AAuCtIhsgFQgogCgbgeQgbgeACgoIAHiSQACgoAdgbQAegbAoACIBtAFQAoACAcAeQAbAegCAoIgICRQgCApgeAbQgbAZgmAAIgFAAg");
	this.shape_15.setTransform(-1.3,-1.1,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-33.6,61.2,67.2);


(lib.Symbol18 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F9993").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(4.2,38.7,1.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D27F").s().p("AhiA3IjEgwIAZg1ID0AyQAEAAB3gPIB5gTIA2gaIAWA0IirA9IgbAAIjDgCg");
	this.shape_1.setTransform(4.5,57.2,1.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEB28B").s().p("AjWAAIAAgpIDDAjIDqgXIgCAeIjuApg");
	this.shape_2.setTransform(3.7,55.9,1.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3E3E3").s().p("Ai6CPIgbgSIgRjzIAUgbIGnACIASAbIgWDuIgWAYg");
	this.shape_3.setTransform(4.1,37.4,1.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77A199").s().p("AjmgTIATgjIGnABIATAhIjsBLg");
	this.shape_4.setTransform(4.1,21.7,1.6,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBEED7").s().p("Aj/gYIADgHIDxA4ID0giIAXgKIgXAQIj0Ajg");
	this.shape_5.setTransform(2.3,53.8,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.hand = new lib.Symbol19();
	this.hand.setTransform(36.1,24.5,1,1,0,0,0,31.3,15.7);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Layer 5
	this.head = new lib.Symbol20();
	this.head.setTransform(8.2,-50.6);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Layer 6
	this.s3 = new lib.Symbol23();
	this.s3.setTransform(68,-1.3);

	this.s2 = new lib.Symbol22();
	this.s2.setTransform(72.4,-11.7);

	this.s1 = new lib.Symbol21();
	this.s1.setTransform(87.6,-8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1},{t:this.s2},{t:this.s3}]}).wait(1));

	// Layer 7
	this.vsp = new lib.Symbol24();
	this.vsp.setTransform(78,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.vsp).wait(1));

	// Layer 1
	this.instance = new lib.Path_1_15();
	this.instance.setTransform(25.8,3.2,1.6,1.6,0,0,0,5,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#787879").s().p("AgOAAQADgEADgBIANgCQAEAAAEAEQADADABAEIghAEQAAgFACgDgAgEgBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_6.setTransform(25.3,-3.5,1.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A5A5A8").s().p("AgDAGQgDgCAAgEQgBgBACgDQACgCADgBQAGgBABAIQABACgCADQgCACgEABIAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_7.setTransform(22.5,2.2,1.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A5A5A8").s().p("AgMABQgBgGAJgBIAGgBQAEgBADACQACACABAEIABAGIgYADg");
	this.shape_8.setTransform(22.9,4.9,1.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A5A5A8").s().p("AgCgDIAEgBIABAIIgEABg");
	this.shape_9.setTransform(22.6,3.2,1.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQgPIAdgEIAFAiIgfAFg");
	this.shape_10.setTransform(22.6,3.2,1.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAADIgCgCIACAAIAAABIAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgBAAIgBAAIAAAAIAAAAIgBAAIABgBIABgBIABAAIABABIgBABIgBgBIAAAAIAAABIAAAAIAAAAIABAAIACAAIgBADIgCABg");
	this.shape_11.setTransform(30.9,-0.5,1.6,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBADQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIACgBIAAABIAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIgBgBIAAAAIgCAAIAAAAIABgBIABgBIABAAIABABIgBAAIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABAAIAAAAIABAAIgBADIgCABg");
	this.shape_12.setTransform(29.7,-0.4,1.6,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCgCIAEgBIAAACIgCAAIAAABIACAAIAAAAIgCAAIAAACIADAAIAAABIgEABg");
	this.shape_13.setTransform(28.5,-0.3,1.6,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBADIgCgFIADgBIABAAIABACIAAABIgBAAIACADIgBAAIgCgDIAAABIAAACgAAAgBIAAABIAAAAIABAAIAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_14.setTransform(27.3,-0.1,1.6,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCgCIACgBIACAAIABACIgBABIAAAAIgCABIAAAAIAAACIgBAAgAAAgBIAAABIAAAAIABAAIAAgBIgBgBg");
	this.shape_15.setTransform(26,0.1,1.6,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAAIAjgDIAAADIgiAEg");
	this.shape_16.setTransform(29.1,5,1.6,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAAIAjgDIAAADIgiAEg");
	this.shape_17.setTransform(29,3.5,1.6,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAAIAigDIABADIgjAEg");
	this.shape_18.setTransform(28.8,2,1.6,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4AA1CB").s().p("AglAbIgGgrQgBgFAFgBIBIgJQAGAAgBAFIAGArQABAGgGAAIhHAJIgBAAQgEAAAAgFg");
	this.shape_19.setTransform(25.8,2.5,1.6,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF9F00").s().p("AgoAmQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgHg3QgBgGAFgBIBSgKQAFAAABAFIAHA3QAAAGgEABIhTAKIgBAAIgCgBg");
	this.shape_20.setTransform(25.9,2.4,1.6,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FBEED7").s().p("AkGCaIINk+IoJFJg");
	this.shape_21.setTransform(102.4,14.4,1.6,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBE7BE").s().p("AjPiGIGeEDIgCAKg");
	this.shape_22.setTransform(-83.8,20.7,1.6,1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9D27F").s().p("AmgkdINBIYIgMAjg");
	this.shape_23.setTransform(-117.5,1.4,1.6,1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F9D27F").s().p("AmCDoIMFntIr9ILg");
	this.shape_24.setTransform(122.3,2.2,1.6,1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C9E5E1").s().p("AhDApQgCAAAGgqQAfgqgBgCIBlBLIgHAQg");
	this.shape_25.setTransform(-46.4,5.8,1.6,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],-2.6,-8.7,0,-2.6,-8.7,28.2).s().p("AAbB3QgEgBADgPIABgIIgHgFQgkgegng0IgXghQgMgUgGgRQgLADgDgHQgEgHAKgIQABgFAKgQQAGgKgCgGIA6gBIABABIAGgBQADAGAKAOIAMASQAJAOANAaIAVApQAEAGAGAWQAHATALABQADAAAKgEQAJgDACAGQAEALgZAHQAFAEAVAIQAQAIgHAGQgCAGgPgFQgOgEgGgGIAGAMQADAHgIAEQgGADgEgFIgGgIIAEALQABAHgIACQgHABgDgEQgCgHgDgDQgCASgHAAIgEgBg");
	this.shape_26.setTransform(-39.2,24.4,1.6,1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0E8194").s().p("AgiAAIACgRIBDATIgIARg");
	this.shape_27.setTransform(-53.2,70.1,1.6,1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0B7089").s().p("AgNABIAfgsIAHBCIgxAWg");
	this.shape_28.setTransform(-48.3,40.6,1.6,1.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0D546F").s().p("AjLB1IAwi2IAwhEIBJAZIBVBbICZBlIhVAEIgsgJQgsgIAAABIhthZIhFCXg");
	this.shape_29.setTransform(-25.6,51.5,1.6,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DDAD28").s().p("AgbgEIAxgEIAGASg");
	this.shape_30.setTransform(-74.9,74.4,1.6,1.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DDAD28").s().p("AhbgVIADgLIC0AvIgBASg");
	this.shape_31.setTransform(-65.6,78.9,1.6,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#665935").s().p("Ag/gBIgDgTIBDgFIAEgHIA/AWIgIArg");
	this.shape_32.setTransform(-60.8,76.9,1.6,1.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C6671F").s().p("AhdgJIB8gGIAPgdIgBAAIABgCIAwAIIgKBVg");
	this.shape_33.setTransform(-65.1,76.1,1.6,1.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0E8194").s().p("AgiAAIBEgQIABAQIg+ARg");
	this.shape_34.setTransform(62.4,69.7,1.6,1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0B7089").s().p("AgYAUIANg9IAWAiIAOAxg");
	this.shape_35.setTransform(58.4,40.5,1.6,1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0D546F").s().p("ACagVIhNBVIguAKQgEAGg2AMIhhgCIiWhuIFmhDIBagsIAUAGIAnA6IAqC4Ig5APg");
	this.shape_36.setTransform(23.5,51.2,1.6,1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DDAD28").s().p("AgVgIIAxAHIg4AKg");
	this.shape_37.setTransform(83.9,74.6,1.6,1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DDAD28").s().p("AhcAMIC2gpIADALIi4Awg");
	this.shape_38.setTransform(74.5,78.9,1.6,1.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#665935").s().p("AhCgLIA/gUIADAHIBDAHIgEARIh8Agg");
	this.shape_39.setTransform(69.8,76.5,1.6,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C6671F").s().p("AhcgnIAwgGIAAACIgBAAIAPAdIB7ALIizAxg");
	this.shape_40.setTransform(74.2,75.7,1.6,1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C9E5E1").s().p("AgCAAIg1AwIhShTIAVgGQAVgHAFABICxABIAzAgIhbA/g");
	this.shape_41.setTransform(6.2,-15.6,1.6,1.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C9E5E1").s().p("AAAAGQgGAAABgGQAAgGAFABQAHAAgBAFQAAAGgGAAIAAAAg");
	this.shape_42.setTransform(5.6,49.2,1.6,1.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C9E5E1").s().p("AgBAFIgBAAQgEgDACgDQABgFADABQAFAAABAFQAAADgEACIAAAAIgCABIgBgBg");
	this.shape_43.setTransform(6,39.6,1.6,1.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C9E5E1").s().p("AAAAHIgCgBIgBgBQgHgFAHgFQACgCACAAQAEABABADQACADgBABQAAADgDACIgDACIgBgBg");
	this.shape_44.setTransform(6.2,30.5,1.6,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C9E5E1").s().p("AAAAHQgHAAABgHQAAgHAGABQAIABgBAFQgBAHgGAAIAAAAg");
	this.shape_45.setTransform(7,22.1,1.6,1.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C9E5E1").s().p("AgDAEIgDgDQAAgCACgDQACgCACAAQAEAAACAFQACABgCAEQgCADgDAAIgBAAQgBAAgCgDg");
	this.shape_46.setTransform(7.6,13.6,1.6,1.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C9E5E1").s().p("AAAAFQgFAAABgFQAAgFAEAAQAGABgBAEQAAAGgFAAIAAgBg");
	this.shape_47.setTransform(8,6.6,1.6,1.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C9E5E1").s().p("AgCAFIAAAAQgFgDACgDQACgFAEABQADABACADQABACgCACQgBADgEAAg");
	this.shape_48.setTransform(8.4,-0.6,1.6,1.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C9E5E1").s().p("AgYBDQgdgLgOgcQgNgbALgaQALgcAcgMQAcgMAbALQAeALANAcQANAbgLAaQgLAcgcAMQgPAHgOAAQgMAAgOgGg");
	this.shape_49.setTransform(38.9,24.8,1.6,1.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#42B8A2").s().p("AiZgsICigbICRA1IhwBXIgvgwIg8Ayg");
	this.shape_50.setTransform(6.6,-14.2,1.6,1.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C9E5E1").s().p("AgXDaIAkm1IALAAIgZG3g");
	this.shape_51.setTransform(3.1,24.1,1.6,1.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8BCCC1").s().p("AiGg5Ih0ANIg+hRQBYg6AsghQBFg2CTAOQBqAKAhAKQAkALApAmQARAQAYB2QAMA5AIA3IhlAwIgLijIgIgGIgLE2IlGAMg");
	this.shape_52.setTransform(-1.2,18.8,1.6,1.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EFB937").s().p("AhxFsIiphAItkp9IAAgfQADgBG6EkIG6EjICEA+ID+ANICogxINcpEIAAANItFJrIitBNg");
	this.shape_53.setTransform(0,14.9,1.6,1.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEAHQgCgDgBgDQgBgGAIgCQAGgBACAIQABABgCADQgDADgDABIgBAAIgEgBg");
	this.shape_54.setTransform(79.2,16.8,1.6,1.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#17A8A1").s().p("AgdAsQgSgMgEgWQgEgUAMgTQANgSAWgEQATgEATANQASAMAEAWQAEATgMATQgNATgWADIgJABQgPAAgOgJgAgGgkQgPADgJANQgJANADAOQADAPANAJQANAJAOgDQAPgDAJgNQAJgNgDgOQgDgPgNgJQgKgHgLAAIgGABg");
	this.shape_55.setTransform(82,19,1.6,1.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2F2F2F").s().p("AgdAsQgSgMgEgWQgEgUAMgTQANgSAWgEQATgEATANQASAMAEAWQAEATgMATQgNATgWADIgJABQgPAAgOgJg");
	this.shape_56.setTransform(82,19,1.6,1.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYgIIArgJIAGAaIgsAJg");
	this.shape_57.setTransform(77.8,-3.8,1.6,1.6);

	this.instance_1 = new lib.Path_24();
	this.instance_1.setTransform(77.4,-0.5,1.6,1.6,0,0,0,2.8,3);
	this.instance_1.alpha = 0.5;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3F3E3F").s().p("AgSAXIgJgsIAGgIIAxAUIgbAkIgJADIgCAAQgHAAgBgHg");
	this.shape_58.setTransform(77.4,-0.5,1.6,1.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3E4245").s().p("AAXAAIgxgTIgFAIIgCgIQAAgDACgDQACgDADgBIAogHQADgBADACQADACABAEIAKAzQABADgDADQgCADgDABIgcAFg");
	this.shape_59.setTransform(78.1,-2.1,1.6,1.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3F3E3F").s().p("AgXAfIgKgzQAAgEACgDQACgCADgBIAogIQADAAADACQADACABADIAKAzQABAEgDADQgCACgDABIgoAIIgCABQgHAAgBgIg");
	this.shape_60.setTransform(78.1,-1.9,1.6,1.6);

	this.instance_2 = new lib.Path_2_4();
	this.instance_2.setTransform(80,22.9,1.6,1.6,0,0,0,6,6);
	this.instance_2.alpha = 0.551;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3E4245").s().p("AgsgPQABgOANgCIAlgHQANgDAGANIAWAxIhfATg");
	this.shape_61.setTransform(81.4,11,1.6,1.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#363636").s().p("AgZAHIAggvIATAPIgsBBg");
	this.shape_62.setTransform(73.6,14.3,1.6,1.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6D6E6F").s().p("AgEBFQgKgHgCgLIgRhYQgCgLAHgJQAGgKALgCIASgEIAbCOIgUAEIgFABQgIAAgFgFg");
	this.shape_63.setTransform(64.8,21.9,1.6,1.6);

	this.instance_3 = new lib.Path_5_1();
	this.instance_3.setTransform(66,21.6,1.6,1.6,0,0,0,4.2,7.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4E5053").s().p("AhQBRQgJgGgDgMIgQhXQgCgMAGgJQAGgKALgCICUgbQALgDAJAHQAKAHABALIARBXQADAMgHAJQgHAKgKACIiUAbIgFABQgIAAgHgFg");
	this.shape_64.setTransform(77,19.9,1.6,1.6);

	this.instance_4 = new lib.Path_7_1();
	this.instance_4.setTransform(79,5.2,1.6,1.6,0,0,0,1.6,1.8);
	this.instance_4.alpha = 0.648;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#202121").s().p("AgSgLIAfgGIAFAdIgeAGg");
	this.shape_65.setTransform(79.4,5.2,1.6,1.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6DB3D6").s().p("AgQgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIASgEQAGgBABAGIADAOIgeAGg");
	this.shape_66.setTransform(65.1,10.4,1.6,1.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C8861C").s().p("AkMD+IiVgmInhlLIG6DyInEkyIHuEKIlsjaIHeDuIF5AHIBgghIHJjIIEXiMIp/FiIJkksIqKGQIh2BBg");
	this.shape_67.setTransform(19.4,11.6,1.6,1.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D49725").s().p("Ah9GHIiQhIItxp7IAAhOIPOH3ICaAQQAWADBygJIBwgHQACABHOjtIHNjwIAABHItRJoIidBIg");
	this.shape_68.setTransform(0,9.5,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_4},{t:this.shape_64},{t:this.instance_3},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_2},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.instance_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.2,-84.2,368.5,168.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAIQgEgBgCgDQgBgDAAgBQABgEADgCQADgBABAAQAEABACADQACADgBABQgBAEgDACIgEABIAAAAg");
	this.shape.setTransform(-95,-6.6,1.5,1.5);

	this.instance = new lib.Path_1_14();
	this.instance.setTransform(-61.8,-4.9,1.5,1.5,0,0,0,2.1,3.2);

	this.instance_1 = new lib.Path_2_3();
	this.instance_1.setTransform(-82.5,-9.7,1.5,1.5,0,0,0,4.3,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFBFC0").s().p("AgLBHIgDgBQgIgBABgJIAXh7QABgDACgCQADgCAEABIADAAQADABACACQACAEgBADIgWB7QgBAHgHAAIgCAAg");
	this.shape_1.setTransform(-88.4,-10,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAMIApgFIgjgSIACgLIArAZIgCALIgzAIg");
	this.shape_2.setTransform(-70.2,-10.4,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAUIAIgoIAIACIgDAPIAmAGIgCAKIgmgIIgEAQg");
	this.shape_3.setTransform(-71.6,-3.5,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#17A8A1").s().p("Ag2A3IAZh9IBUARIgZB8g");
	this.shape_4.setTransform(-70.6,-6.5,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5A5A8").s().p("AgMBCQgbgFgQgXQgQgYAGgZQAFgcAYgQQAXgPAaAFQAbAFAQAYQAQAXgGAaQgFAcgYAPQgRAMgUAAIgMgCg");
	this.shape_5.setTransform(-88.4,-10,1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E5053").s().p("Ah1ATIAPhFIDbA2IgJAvg");
	this.shape_6.setTransform(-63.9,-6,1.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B9B9B9").s().p("ACtBKQgwgYhWg2QhXg5gugVQhngzhkAAQhVgBiCAlQgsAMg6AJQhCAJg0gDQgFgBAAgFQAAgFAGAAQAwADBCgJQA5gHAugNQCDgmBXABQBmABBpAzQA1AaBQA2QBbA3ArAVQBaAsBlARQBlAQBkgNQBAgIAjgZQAXgRAKgYQALgYgGgWIgDgIQgGgTAFgMQAFgMAXgJQAGgBAAAEQADAGgGABQgSAIgDAIQgEAHAGASIACAGQAHAcgOAcQgMAagXARQgjAZhEAJQguAHguAAQiiAAiRhHg");
	this.shape_7.setTransform(24.7,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.6,-20.6,197.2,41.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.b2 = new lib.Symbol27();
	this.b2.setTransform(-46.9,-41.6);

	this.b1 = new lib.Symbol26();
	this.b1.setTransform(79.2,-82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(1));

	// Layer 3
	this.k10 = new lib.Symbol30();
	this.k10.setTransform(118.4,-17.1);

	this.k9 = new lib.Symbol29();
	this.k9.setTransform(111.9,16.3);

	this.k8 = new lib.Symbol30();
	this.k8.setTransform(118.4,48.9);

	this.k7 = new lib.Symbol29();
	this.k7.setTransform(111.9,82.3);

	this.k6 = new lib.Symbol30();
	this.k6.setTransform(-96.6,-89.8);

	this.k5 = new lib.Symbol29();
	this.k5.setTransform(-103.1,-56.4);

	this.k4 = new lib.Symbol28();
	this.k4.setTransform(-106.4,-18.5);

	this.k3 = new lib.Symbol30();
	this.k3.setTransform(-96.6,11.7);

	this.k2 = new lib.Symbol29();
	this.k2.setTransform(-103.1,45.1);

	this.k1 = new lib.Symbol28();
	this.k1.setTransform(-106.4,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.k1},{t:this.k2},{t:this.k3},{t:this.k4},{t:this.k5},{t:this.k6},{t:this.k7},{t:this.k8},{t:this.k9},{t:this.k10}]}).wait(1));

	// Layer 1
	this.man = new lib.Symbol18();
	this.man.setTransform(0,7.5);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.2,-103,368.5,206.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.m1 = new lib.Symbol7();
	this.m1.setTransform(-14.6,2.7);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// Layer 3
	this.q10 = new lib.Symbol17();
	this.q10.setTransform(-90.6,28.7);

	this.q9 = new lib.Symbol16();
	this.q9.setTransform(-81.9,57);

	this.q8 = new lib.Symbol15();
	this.q8.setTransform(41.2,42.9);

	this.q7 = new lib.Symbol14();
	this.q7.setTransform(61,30);

	this.q6 = new lib.Symbol13();
	this.q6.setTransform(66.8,-19.7);

	this.q5 = new lib.Symbol12();
	this.q5.setTransform(91,-43.2);

	this.q4 = new lib.Symbol11();
	this.q4.setTransform(49.7,-43.5);

	this.q3 = new lib.Symbol10();
	this.q3.setTransform(-30.4,-62.5);

	this.q2 = new lib.Symbol9();
	this.q2.setTransform(-46.9,-51.3);

	this.q1 = new lib.Symbol8();
	this.q1.setTransform(-81.9,-48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q1},{t:this.q2},{t:this.q3},{t:this.q4},{t:this.q5},{t:this.q6},{t:this.q7},{t:this.q8},{t:this.q9},{t:this.q10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.2,-70,198.5,140);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai2DHIAAmNIDZAAQA9AAAkAbQAkAaAAAvQAAA+g/AcQBOAWAABMQAAAzgoAdQgoAdhFAAgAhGBuIBXAAQAaAAANgLQAMgLAAgSQAAgRgMgKQgOgLgcAAIhUAAgAhGgmIBNAAQAXAAANgMQAMgKAAgSQAAgQgLgKQgMgKgXgBIhPAAg");
	this.shape.setTransform(4.6,0.2,0.31,0.31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C292A").ss(1.4).p("AAHgmQAXAAANgLQAMgLAAgSQAAgQgLgJQgMgLgXAAIhPAAIAABMgAAjjGQA9AAAkAbQAkAbAAAuQAAA/g/AbQBOAWAABNQAAAygoAdQgoAdhFAAIjYAAIAAmNgAARBvQAaAAANgLQAMgLAAgTQAAgRgMgKQgOgLgcAAIhUAAIAABPg");
	this.shape_1.setTransform(4.6,0.2,0.31,0.31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai2DHIAAmNIDZAAQA9AAAkAbQAkAaAAAvQAAA+g/AcQBOAWAABMQAAAzgoAdQgoAdhFAAgAhGBuIBXAAQAaAAANgLQAMgLAAgSQAAgRgMgKQgOgLgcAAIhUAAgAhGgmIBNAAQAXAAANgMQAMgKAAgSQAAgQgLgKQgMgKgXgBIhPAAg");
	this.shape_2.setTransform(4.6,0.2,0.31,0.31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCBaQgXgWgCglIAuAAQAEATAKAJQAKAKAQAAQAUAAAJgPQAEgJABgNQAAgVgYgJQgPgDgWgBIAAgcIAgglIgUAAQgZgBgKgGQgNgIAAgVIAAgGIB8AAIAAAqIggAkQALACANAIQALAHAIAJQAMAPAAAWQAAAigZAWQgYAXglAAQgkAAgXgVgAC2BpQgPgJAAgWIAAiRIguAAIAZgnIBJAAIAADdQgaAAgLgGg");
	this.shape_3.setTransform(0,-0.2);

	this.instance = new lib.CompoundPath();
	this.instance.setTransform(0,-0.1,0.31,0.31,0,0,0,71.6,36.8);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-13.6,45.3,27.4);


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.m3 = new lib.Symbol55();
	this.m3.setTransform(-59.9,158.9);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// Layer 1
	this.m2 = new lib.Symbol54();
	this.m2.setTransform(24.9,63);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// Layer 1
	this.m1 = new lib.Symbol59();
	this.m1.setTransform(-29.5,-72.2);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.2,-150.5,215.1,343);


(lib.s1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m1 = new lib.Symbol4();
	this.m1.setTransform(10.1,-78);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// Layer 2
	this.m3 = new lib.Symbol6();
	this.m3.setTransform(109.5,200.2,1,1,0,0,0,37.6,10.3);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// Layer 2
	this.m2 = new lib.Symbol5();
	this.m2.setTransform(-3.9,80.9);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.2,-148,368.5,358.5);


(lib.packs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.q1 = new lib.Symbol88();
	this.q1.setTransform(99.1,104.2,1,1,0,0,0,207.8,147.1);

	this.q2 = new lib.Symbol87();
	this.q2.setTransform(-337.9,34,1,1,0,0,0,-264.2,-0.1);

	this.q3 = new lib.Symbol86();
	this.q3.setTransform(328.3,3.4,1,1,0,0,0,331.3,-0.1);

	this.q4 = new lib.Symbol84();
	this.q4.setTransform(111.8,-308.9,1,1,0,0,0,41.8,-210.4);

	this.q6 = new lib.Symbol85();
	this.q6.setTransform(121.7,276.1,1,1,0,0,0,41.8,176.1);

	this.q5 = new lib.Symbol83();
	this.q5.setTransform(-234.6,7.6,1,1,0,0,0,-374.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q5},{t:this.q6},{t:this.q4},{t:this.q3},{t:this.q2},{t:this.q1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-133.9,362,267.8);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m2 = new lib.Symbol3();
	this.m2.setTransform(58.3,2.1);

	this.m1 = new lib.Symbol2();
	this.m1.setTransform(-26.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-15.9,161.3,31.7);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_16();
	this.instance.setTransform(3.3,3.2,1,1,0,0,0,3.3,3.2);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,6.6);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(13.3,5.4,1,1,0,0,0,1.3,0.2);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.CompoundPath_13();
	this.instance_1.setTransform(5.3,2.6,1,1,0,0,0,5.3,2.6);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,5.6);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	//  (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADeDQQgZADgHgBIgDAAQgMgHgUACQgZADgHgBQgQgFgIAAIg1AAIAAgEIARgCQgBgEgEgBIgGABIjNgDIhLADQgJAEgDABQgFgDgCAAIgpgCIgMAEIAAABIA8AAIBvgCIAAAEIgKADIh0ADIg+gFIn6ACQgbgDguAEQg3AFgSAAIhCAAQgXgIgLAAIgjAHIgBgUIAIgFQAEgDAAgGIAGgDIAegKIADANIATgHQgBgHgGgCQgHAAgCgDQgCgVABgLQAAgNALAAIALgCIgDgOQgJgVANgJQgMgIAAgHQAAgIAMgOIgGgWQgTgIgCgQQgBgEgGgGQgJgHAAgPQAHgQARACQAJABATgCIACgTIgcgCQgJABgIgIQgIgKgFgFQgCgBACgNQgNgCAEgRIgMgDQAEgUgNgEQgHgCACgKQABgIAIAAIANgDQAJgCAGAEIACAAQALgKARgBIAdAAIAJAAQAYAFAigEIA6gGQAVAAArABIFNALIA6gCIHwACIEXgGQAZAAAzACIJcgNIAIACQACAPgBAHQgCATgEAGQgBABgRADQAFALAEADQAFACANABIAlAFIACAjIAhAOQALAEgDAMQgCAHgJgCIgPgDQgcgGgKAdIgDANQgDAHgGABIgHAaQgEANACANIAFAbQgPAGgXACIglAAIgRAFIAOAJIgDAHIAGgKIAXgCQAOAAALAEIgIARQAeAPAQgCQAHAAARAFQAGAAAGAJIAAAPIAFAVIgYAAQgOgCgNAQQgFAHgJABIgSAEIgJADQgOAOgXABIgmgBIgmgDQgNgCgRACIgfADQgpAFguABIiYAAQgygDgYAAIg7AFIi/AIQgNgFgUAAgAF1DKIALAAIAAgCIgLAAgAwEDKIA4AAIAAgEIg4AAgAu0DEIAAACIAjAAIAAgEgAnPDCIBrAAIAAgCIhrAAgAvzhVIgBASQAVgCAEABQAIACANgNQgMgHgHgBIgGAAQgIAAgMACg");

	// m1
	this.m1 = new lib.Symbol82();

	this.m1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-14,179.1,28);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Path_1_0();
	this.instance.setTransform(-27.8,19.9,2,2,0,0,0,2.2,1.3);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CB00").s().p("AgqAqIgCgCIgKgIQgPgLgCgKIAGgDIA3gXQAFgCAGgHQAGgFAGgBIAagFQATgCAEgEQAAAIADAHIAEAJQADAGAAADQgBAIgNAIIgXARQgOAKgHACQgMAFgRAAIgbAAg");
	this.shape.setTransform(-27.1,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// flag
	this.flag = new lib.Symbol52();
	this.flag.setTransform(30.1,21.4,1,1,0,0,0,-16,26.9);

	this.timeline.addTween(cjs.Tween.get(this.flag).wait(1));

	// Layer 1
	this.instance_1 = new lib.Path_23();
	this.instance_1.setTransform(-26.4,40.1,2,2,0,0,0,1.9,1.6);
	this.instance_1.alpha = 0.148;

	this.instance_2 = new lib.Path_22();
	this.instance_2.setTransform(-21.6,43.9,2,2,0,0,0,1.5,0.4);
	this.instance_2.alpha = 0.602;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FADA94").s().p("AgOACIAAgEIAdAAIgDAFg");
	this.shape_1.setTransform(-21.5,43.8,2,2);

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.setTransform(-42.8,41.4,2,2,0,0,0,6.3,0.7);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.Path_3_0();
	this.instance_4.setTransform(-42,38.5,2,2,0,0,0,6.7,0.7);
	this.instance_4.alpha = 0.148;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#27A375").s().p("AAlAKQgMgFgFAAQgEAAgOAEQgLADgIAAQgdAAgUgMQAcgLAdAAQAHAAAKADQAMADAEAAQAEAAAPgEQAPgEAJAAIgJAbQgJAAgMgEgAgzAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_2.setTransform(-41.9,40,2,2);

	this.instance_5 = new lib.CompoundPath_1_10();
	this.instance_5.setTransform(-19.9,39.6,2,2,0,0,0,1.8,1.4);
	this.instance_5.alpha = 0.602;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5CB00").s().p("AgTAPIALgdIAcAAIgFAEIACAEIgEACIACAEIgEAAIACAEIgEACIADAEIgEABIACAEg");
	this.shape_3.setTransform(-20.5,40,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAPIAKgdIAbAAIgKAdg");
	this.shape_4.setTransform(-26.4,40,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSASIAAgFIAKgeIAbAAIgKAdIAAAGg");
	this.shape_5.setTransform(-26.4,40.6,2,2);

	this.instance_6 = new lib.CompoundPath_2_1();
	this.instance_6.setTransform(-42,41.2,2,2,0,0,0,6.7,1.5);
	this.instance_6.alpha = 0.25;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#27A375").s().p("AAlAKQgNgFgEABQgFAAgNADQgMADgIAAQgdAAgSgMIAAgEQAhgHAWAAQAHAAAKADQAMAEAEgBQAEAAAPgEQAPgEAJAAIgIAXIAAAEQgJAAgMgEg");
	this.shape_6.setTransform(-42.1,41.1,2,2);

	this.instance_7 = new lib.Path_1_13();
	this.instance_7.setTransform(-18.1,40.6,2,2,0,0,0,0.8,1.9);
	this.instance_7.alpha = 0.602;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FADA94").s().p("AgGABIAHgQIAHgDIgFAIIACAGIgEABIADADIgEABIABAEIgBACIAAADIgDAJg");
	this.shape_7.setTransform(-18.1,40.7,2,2);

	this.instance_8 = new lib.Path_1_12();
	this.instance_8.setTransform(-33.9,40.8,2,2,0,0,0,10.8,2);
	this.instance_8.alpha = 0.199;

	this.instance_9 = new lib.CompoundPath_12();
	this.instance_9.setTransform(-51,29.6,2,2,0,0,0,0.4,0.6);
	this.instance_9.alpha = 0.148;

	this.instance_10 = new lib.CompoundPath_1_9();
	this.instance_10.setTransform(-49.9,29.9,2,2,0,0,0,0.7,0.8);
	this.instance_10.alpha = 0.352;

	this.instance_11 = new lib.Path_21();
	this.instance_11.setTransform(-50.6,29.7,2,2,0,0,0,0.7,0.6);
	this.instance_11.alpha = 0.148;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B6B80").s().p("AgFAFQgDgCAAgDQAAgCADgDQADgCACAAQADAAADACQADADAAACQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(-50.3,29.9,2,2);

	this.instance_12 = new lib.Path_20();
	this.instance_12.setTransform(-49.8,29.8,2,2,0,0,0,1,0.9);
	this.instance_12.alpha = 0.25;

	this.instance_13 = new lib.Path_1_11();
	this.instance_13.setTransform(-50.3,30.1,2,2,0,0,0,1,0.9);
	this.instance_13.alpha = 0.25;

	this.instance_14 = new lib.CompoundPath_11();
	this.instance_14.setTransform(41,30.8,2,2,0,0,0,2,1.3);
	this.instance_14.alpha = 0.25;

	this.instance_15 = new lib.CompoundPath_1_8();
	this.instance_15.setTransform(48,31.5,2,2,0,0,0,1.7,1.5);
	this.instance_15.alpha = 0.25;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5CB00").s().p("AgXALIgKgFIALgIQAOgLAKgBQAMAAAMAMIAJALQgRAGgQAAQgLAAgOgEg");
	this.shape_9.setTransform(44,31.2,2,2);

	this.instance_16 = new lib.Path_1_10();
	this.instance_16.setTransform(45.7,33.6,2,2,0,0,0,4,0.8);
	this.instance_16.alpha = 0.199;

	this.instance_17 = new lib.CompoundPath_10();
	this.instance_17.setTransform(-56.5,28.6,2,2,0,0,0,3.1,2);
	this.instance_17.alpha = 0.25;

	this.instance_18 = new lib.CompoundPath_1_7();
	this.instance_18.setTransform(-45.4,29.6,2,2,0,0,0,2.6,2.3);
	this.instance_18.alpha = 0.25;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5CB00").s().p("Ag2ALQAHgJALgGQAWgSARgBQATAAATATQAJAIAFAKQgZAKgaAAIgCAAQgeAAgagNg");
	this.shape_10.setTransform(-51.5,29.5,2,2);

	this.instance_19 = new lib.Path_1_9();
	this.instance_19.setTransform(-48.7,33,2,2,0,0,0,6.5,1.2);
	this.instance_19.alpha = 0.199;

	this.instance_20 = new lib.Path_18();
	this.instance_20.setTransform(-38.1,5.6,2,2,0,0,0,6.2,4.6);
	this.instance_20.alpha = 0.25;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#55669A").s().p("AgLAAIABgDIAWADIgBAEg");
	this.shape_11.setTransform(9,31.8,2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#575567").s().p("AgGAzQgWgEgMgRQgNgRAEgTQADgWARgMQASgNATAEQAVADAMARQANASgDATQgEAVgRAMQgOAKgQAAIgGAAgAgZgkQgQAMgDATQgDARALAPQAMAPASADQARADAQgLQAPgMADgSQADgRgLgPQgLgQgTgDIgHgBQgOAAgLAJg");
	this.shape_12.setTransform(-2.3,29.9,2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#575567").s().p("AgEAKIADgVIAHACIgEAVg");
	this.shape_13.setTransform(28.6,34.9,2,2);

	this.instance_21 = new lib.Path_17();
	this.instance_21.setTransform(13.7,32.6,2,2,0,0,0,0.4,1.2);
	this.instance_21.alpha = 0.25;

	this.instance_22 = new lib.Group_4();
	this.instance_22.setTransform(-1.5,24.7,2,2,0,0,0,0.5,0.5);

	this.instance_23 = new lib.Group_5();
	this.instance_23.setTransform(20.5,32.5,2,2,0,0,0,4.6,1.3);
	this.instance_23.alpha = 0.25;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CD4A4D").s().p("AAqASIhYgOIAEgVIBYAOIABABIgEAUg");
	this.shape_14.setTransform(20.4,33.6,2,2);

	this.instance_24 = new lib.Group_7();
	this.instance_24.setTransform(-3.1,34,2,2,0,0,0,1.1,1.1);
	this.instance_24.alpha = 0.5;

	this.instance_25 = new lib.Group_8();
	this.instance_25.setTransform(-2.2,29.8,2,2,0,0,0,3.3,3.2);

	this.instance_26 = new lib.Group_9();
	this.instance_26.setTransform(-2.4,33.5,2,2,0,0,0,4.2,2.4);
	this.instance_26.alpha = 0.25;

	this.instance_27 = new lib.Path_15();
	this.instance_27.setTransform(-1.9,27.1,2,2,0,0,0,4.4,3.2);
	this.instance_27.alpha = 0.5;

	this.instance_28 = new lib.Group_10();
	this.instance_28.setTransform(-2.3,29.9,2,2,0,0,0,4.6,4.6);
	this.instance_28.alpha = 0.301;

	this.instance_29 = new lib.CompoundPath_9();
	this.instance_29.setTransform(10.7,39.8,2,2,0,0,0,0.5,0.6);
	this.instance_29.alpha = 0.148;

	this.instance_30 = new lib.CompoundPath_1_6();
	this.instance_30.setTransform(11.6,40.2,2,2,0,0,0,0.7,0.8);
	this.instance_30.alpha = 0.352;

	this.instance_31 = new lib.Path_14();
	this.instance_31.setTransform(11,40,2,2,0,0,0,0.7,0.6);
	this.instance_31.alpha = 0.148;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#6E7B93","#7D7494"],[0,1],-2.8,-3.4,2.6,3.2).s().p("AAAAIQgDAAgDgDQgCgCgBgDQAAgDADgCQAEgDACAAQAEABADACQACADAAACQAAAEgDACQgDADgDAAIAAgBg");
	this.shape_15.setTransform(11.3,40.2,2,2);

	this.instance_32 = new lib.Path_2_0_1();
	this.instance_32.setTransform(12.6,40.2,2,2,0,0,0,1.4,0.8);
	this.instance_32.alpha = 0.199;

	this.instance_33 = new lib.CompoundPath_8();
	this.instance_33.setTransform(-38.6,17.7,2,2,0,0,0,0.3,0.7);
	this.instance_33.alpha = 0.148;

	this.instance_34 = new lib.CompoundPath_1_5();
	this.instance_34.setTransform(-37.3,17.8,2,2,0,0,0,0.7,0.8);
	this.instance_34.alpha = 0.352;

	this.instance_35 = new lib.Path_13();
	this.instance_35.setTransform(-38,17.6,2,2,0,0,0,0.7,0.6);
	this.instance_35.alpha = 0.148;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B6B80").s().p("AgIAAQAAgHAIAAQADAAADADQADACAAACQAAADgDACQgDADgDAAQgIAAAAgIg");
	this.shape_16.setTransform(-37.7,17.8,2,2);

	this.instance_36 = new lib.Path_12();
	this.instance_36.setTransform(-37.2,17.5,2,2,0,0,0,1,0.8);
	this.instance_36.alpha = 0.25;

	this.instance_37 = new lib.Path_1_6();
	this.instance_37.setTransform(-37.7,18,2,2,0,0,0,1,0.9);
	this.instance_37.alpha = 0.25;

	this.instance_38 = new lib.CompoundPath_7();
	this.instance_38.setTransform(18.6,11.8,2,2,0,0,0,0.4,0.6);
	this.instance_38.alpha = 0.148;

	this.instance_39 = new lib.CompoundPath_1_4();
	this.instance_39.setTransform(19.7,12.2,2,2,0,0,0,0.7,0.8);
	this.instance_39.alpha = 0.352;

	this.instance_40 = new lib.Path_11();
	this.instance_40.setTransform(19,12,2,2,0,0,0,0.7,0.6);
	this.instance_40.alpha = 0.148;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#6E7B93","#7D7494"],[0,1],-2.8,-3.1,2.6,2.8).s().p("AgFAFQgDgCAAgDQAAgCADgDQADgCACAAQADAAADACQADADAAACQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_17.setTransform(19.3,12.1,2,2);

	this.instance_41 = new lib.Path_10();
	this.instance_41.setTransform(19.8,11.9,2,2,0,0,0,1,0.8);
	this.instance_41.alpha = 0.25;

	this.instance_42 = new lib.Path_1_5();
	this.instance_42.setTransform(19.3,12.2,2,2,0,0,0,1,0.8);
	this.instance_42.alpha = 0.25;

	this.instance_43 = new lib.CompoundPath_6();
	this.instance_43.setTransform(16.5,19.1,2,2,0,0,0,0.4,0.6);
	this.instance_43.alpha = 0.148;

	this.instance_44 = new lib.CompoundPath_1_3();
	this.instance_44.setTransform(17.5,19.4,2,2,0,0,0,0.7,0.8);
	this.instance_44.alpha = 0.352;

	this.instance_45 = new lib.Path_9();
	this.instance_45.setTransform(16.9,19.2,2,2,0,0,0,0.7,0.6);
	this.instance_45.alpha = 0.148;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#6E7B93","#7D7494"],[0,1],-2.8,-3,2.6,2.9).s().p("AgFAFQgDgCAAgDQAAgCADgCQADgDACAAQADAAADADQADACAAACQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_18.setTransform(17.1,19.4,2,2);

	this.instance_46 = new lib.Path_8();
	this.instance_46.setTransform(17.6,19.2,2,2,0,0,0,1,0.8);
	this.instance_46.alpha = 0.25;

	this.instance_47 = new lib.Path_1_4();
	this.instance_47.setTransform(17.1,19.6,2,2,0,0,0,1,0.9);
	this.instance_47.alpha = 0.25;

	this.instance_48 = new lib.CompoundPath_5();
	this.instance_48.setTransform(-50.4,17.7,2,2,0,0,0,0.3,0.7);
	this.instance_48.alpha = 0.148;

	this.instance_49 = new lib.CompoundPath_1_2();
	this.instance_49.setTransform(-48.9,18,2,2,0,0,0,0.7,1);
	this.instance_49.alpha = 0.352;

	this.instance_50 = new lib.Path_7();
	this.instance_50.setTransform(-49.9,17.8,2,2,0,0,0,0.8,0.7);
	this.instance_50.alpha = 0.148;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B6B80").s().p("AgFAIQgDgCgBgEQgBgCACgEQADgDAEgBQACgBAEACQAEACABAEQABACgDAEQgDADgEABIgBAAIgFgBg");
	this.shape_19.setTransform(-49.6,18,2,2);

	this.instance_51 = new lib.Path_6();
	this.instance_51.setTransform(-49,17.8,2,2,0,0,0,1.1,1.1);
	this.instance_51.alpha = 0.25;

	this.instance_52 = new lib.Path_1_3();
	this.instance_52.setTransform(-49.5,18.3,2,2,0,0,0,1.1,1.1);
	this.instance_52.alpha = 0.25;

	this.instance_53 = new lib.CompoundPath_4();
	this.instance_53.setTransform(12.1,13.8,2,2,0,0,0,0.6,0.9);
	this.instance_53.alpha = 0.148;

	this.instance_54 = new lib.CompoundPath_1_1();
	this.instance_54.setTransform(13.9,14.5,2,2,0,0,0,1.1,1.3);
	this.instance_54.alpha = 0.352;

	this.instance_55 = new lib.Path_5();
	this.instance_55.setTransform(12.8,14,2,2,0,0,0,1.1,0.9);
	this.instance_55.alpha = 0.148;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#6E7B93","#7D7494"],[0,1],-4.5,-5,4.2,4.6).s().p("AgJAJQgEgEAAgFQAAgEAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_20.setTransform(13.2,14.4,2,2);

	this.instance_56 = new lib.Path_4();
	this.instance_56.setTransform(13.9,14.2,2,2,0,0,0,1.5,1.4);
	this.instance_56.alpha = 0.25;

	this.instance_57 = new lib.Path_1_2();
	this.instance_57.setTransform(13.2,14.7,2,2,0,0,0,1.6,1.4);
	this.instance_57.alpha = 0.25;

	this.instance_58 = new lib.Path_3();
	this.instance_58.setTransform(-30,14,2,2,0,0,0,1.1,2);
	this.instance_58.alpha = 0.148;

	this.instance_59 = new lib.CompoundPath_3();
	this.instance_59.setTransform(-30.1,12.7,2,2,0,0,0,0.6,0.3);
	this.instance_59.alpha = 0.352;

	this.instance_60 = new lib.CompoundPath_1_0();
	this.instance_60.setTransform(-30.1,12.8,2,2,0,0,0,0.8,0.5);
	this.instance_60.alpha = 0.148;

	this.instance_61 = new lib.Path_1_1();
	this.instance_61.setTransform(-27.4,15.3,2,2,0,0,0,2,3.1);
	this.instance_61.alpha = 0.352;

	this.instance_62 = new lib.CompoundPath_2_0();
	this.instance_62.setTransform(-28.4,16.3,2,2,0,0,0,2.5,3.6);
	this.instance_62.alpha = 0.352;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B6B80").s().p("AgOAJQgBAHgFgBQgEAAABgKQAAgFADgJIABgOQAAgJAGgCQAFgBAGAGIAHAJQAIAFAFAGQAHAHgCACQgEADgFgDQAQAWgJADQgDACgEgGIgHgKQgBgEgFACQgBABAAAEIAAAMQAAAHgCABIgBABQgHAAgEgag");
	this.shape_21.setTransform(-28.5,16.2,2,2);

	this.instance_63 = new lib.Path_2_2();
	this.instance_63.setTransform(-26.9,16.1,2,2,0,0,0,2.6,3.4);
	this.instance_63.alpha = 0.25;

	this.instance_64 = new lib.CompoundPath_0();
	this.instance_64.setTransform(8.7,23.8,2,2,0,0,0,15.5,2);
	this.instance_64.alpha = 0.102;

	this.instance_65 = new lib.Group();
	this.instance_65.setTransform(5.6,25.2,2,2,0,0,0,7.3,2.8);
	this.instance_65.alpha = 0.602;

	this.instance_66 = new lib.CompoundPath_1();
	this.instance_66.setTransform(-10.3,14.7,2,2,0,0,0,19.4,5.1);
	this.instance_66.alpha = 0.5;

	this.instance_67 = new lib.Path();
	this.instance_67.setTransform(18.9,9.4,2,2,0,0,0,11.4,3.9);
	this.instance_67.alpha = 0.25;

	this.instance_68 = new lib.Path_1();
	this.instance_68.setTransform(23.1,12.6,2,2,0,0,0,13.5,5.5);
	this.instance_68.alpha = 0.25;

	this.instance_69 = new lib.CompoundPath_2();
	this.instance_69.setTransform(-40.7,13.5,2,2,0,0,0,10.7,8.2);
	this.instance_69.alpha = 0.25;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F5CB00").s().p("ABiBTQg4gDgYAAIgRAAQh1AAhcgQQgugIgWgJIC0iCIABAKQADANAIAKQAaAiBHACQA4ABAagXQANgMABgMICnBrQADAFgNAGQgZANhPALQgNACgUAAIgfgBg");
	this.shape_22.setTransform(-6.7,13.8,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.shape_21},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.shape_20},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.shape_19},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.shape_18},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.shape_17},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_16},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.shape_15},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.shape_14},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_20},{t:this.instance_19},{t:this.shape_10},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.shape_9},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_8},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_7},{t:this.instance_7},{t:this.shape_6},{t:this.instance_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_5},{t:this.shape_2},{t:this.instance_4},{t:this.instance_3},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// cup
	this.cup = new lib.Symbol53();
	this.cup.setTransform(3.9,-17);

	this.timeline.addTween(cjs.Tween.get(this.cup).wait(1));

	// lopata
	this.lopata = new lib.Symbol51();
	this.lopata.setTransform(-42.8,12.7,1,1,0,0,0,2.6,22.9);

	this.timeline.addTween(cjs.Tween.get(this.lopata).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.7,-45.1,125.4,90.2);


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vector
	this.f1 = new lib.Symbol96();
	this.f1.setTransform(-70.5,-27,0.654,0.654,170.5,0,0,-35.4,-49.7);

	this.f3 = new lib.Symbol96();
	this.f3.setTransform(-70.5,-27,0.654,0.654,-159.5,0,0,-30.1,-79.3);

	this.f2 = new lib.Symbol96();
	this.f2.setTransform(-70.5,-27,1,1,0,0,0,22.5,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f2},{t:this.f3},{t:this.f1}]}).wait(1));

	// t2
	this.t2 = new lib.Symbol91();
	this.t2.setTransform(-1.2,141.9);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.Symbol89();
	this.t1.setTransform(2,-131);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// packs
	this.packs = new lib.packs_1();
	this.packs.setTransform(1,-9.1,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.packs).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.2,-152.4,242.5,337.9);


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m1
	this.m1 = new lib.Symbol39();
	this.m1.setTransform(-136.9,32.1,1,1,0,0,0,-73.7,82.9);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// m2
	this.m2 = new lib.Symbol40();
	this.m2.setTransform(-56.1,54.4);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// m3
	this.m3 = new lib.Symbol43();
	this.m3.setTransform(54.3,68.6);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// m4
	this.m4 = new lib.Symbol50();
	this.m4.setTransform(-49,142);

	this.timeline.addTween(cjs.Tween.get(this.m4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.3,-146.9,276,334);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 200;
		    time1 = 3.5;
			time2 = time1 + 3.8;
			time3 = time2 + 3.5;
		
		var rotKrug = 15;
		var t1 = this.s1.m1;
		var tl = new TimelineMax();
		
		tl.fromTo(this.blk, 0.7, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .staggerFrom([this.logo.m1, this.logo.m2], 1.0, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.04, 0.0)
		  .from(this.s1.m2.man, 1.0, {y:"-=50", alpha:0, ease:Elastic.easeOut}, 0.5)
		  .from(this.s1.m3, 0.5, {rotation:"+=25", alpha:0, ease:Bounce.easeOut}, 0.7)
		  .from(this.s1.m2.man.head, 1.9, {y:"+=15", ease:Elastic.easeOut}, 0.7)
		  .from(this.s1.m2.man.head.eyes, 0.5, {x:"-=4", yoyo:true, repeat:10, repeatDelay:0.2, ease:Sine.easeInOut}, 0.7)
		  .from(this.s1.m2.man.hand, 2.2, {rotation:"-=25", ease:Elastic.easeOut}, 0.7)
		  .fromTo(this.s1.m2.man.vsp, 0.5, {scaleX:0, scaleY:0, alpha:1}, {scaleX:3, scaleY:3, alpha:0, ease:Expo.easeOut}, 0.8)
		  .staggerFrom([this.s1.m2.man.s1, this.s1.m2.man.s2, this.s1.m2.man.s3], 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 0.9)
		  
		  .staggerFrom([this.s1.m2.b1, this.s1.m2.b2], 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 0.7)
		  .staggerFrom([this.s1.m2.k1, this.s1.m2.k2, this.s1.m2.k3, this.s1.m2.k4, this.s1.m2.k5, this.s1.m2.k6], 0.7, {y:"-=100", alpha:0, ease:Bounce.easeOut}, 0.05, 0.7)
		  .staggerFrom([this.s1.m2.k7, this.s1.m2.k8, this.s1.m2.k9, this.s1.m2.k10], 0.7, {y:"-=100", alpha:0, ease:Bounce.easeOut}, 0.05, 0.9)
		  .from(t1.m1, 1.0, {scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut}, 1.5)
		  .staggerFrom([t1.q1, t1.q2, t1.q3, t1.q4, t1.q5, t1.q6, t1.q7, t1.q8, t1.q9, t1.q10], 1.03, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.04, 1.6)
		  
		  //2
		  .staggerTo([this.s1.m3, this.s1.m2, this.s1.m1], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time1+0.0)
		  .staggerTo([this.s1.m2.k1, this.s1.m2.k2, this.s1.m2.k3, this.s1.m2.k4, this.s1.m2.k5, this.s1.m2.k6], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time1+0.0)
		  .staggerTo([this.s1.m2.k7, this.s1.m2.k8, this.s1.m2.k9, this.s1.m2.k10], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time1+0.0)
		  .staggerTo([t1.q1, t1.q2, t1.q3, t1.q4, t1.q5, t1.q6, t1.q7, t1.q8, t1.q9, t1.q10], 0.5, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 0.05, time1+0.0)
		  
		  .from(this.s2.m1, 0.5, {rotation:"-=90", ease:Bounce.easeOut}, time1+0.9)
		  .staggerFrom([this.s2.m1.m1, this.s2.m1.m2, this.s2.m1.m3, this.s2.m1.m4, this.s2.m1.m5, this.s2.m1.m6], 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.01, time1+1.1)
		  .staggerFrom([this.s2.m2.m1, this.s2.m2.m2], 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.02, time1+1.1)
		  
		  .from(this.s2.m3, 0.5, {x:"+=150", ease:Expo.easeOut}, time1+1.0)
		  .from(this.s2.m3.hand1, 0.2, {rotation:"-=30", ease:Sine.easeOut}, time1+1.4)
		  .from(this.s2.m3.hand2, 0.3, {rotation:"+=20", ease:Sine.easeOut}, time1+1.4)
		  .from(this.s2.m3.books, 0.4, {rotation:"+=20", y:"-=10", ease:Sine.easeOut}, time1+1.4)
		  .to(this.s2.m3.head, 0.2, {rotation:"+=10", ease:Sine.easeInOut}, time1+1.6)
		  .from(this.s2.m3.head.eyes, 0.2, {x:"+=4", y:"+=2", yoyo:true, repeat:5, repeatDelay:1.0, ease:Sine.easeInOut}, time1+1.6)
		  .from(this.s2.m3.head.hair, 1.2, {rotation:"-=20", ease:Elastic.easeOut}, time1+1.7)
		  
		  .from(this.s2.m4, 0.5, {x:"-=150", ease:Expo.easeOut}, time1+1.0)
		  .from(this.s2.m4.lopata, 0.5, {y:"-=50", alpha:0, ease:Bounce.easeOut}, time1+1.0)
		  .from(this.s2.m4.cup, 0.6, {y:"-=50", alpha:0, ease:Bounce.easeOut}, time1+1.2)
		  .from(this.s2.m4.flag, 0.3, {y:"-=50", alpha:0, ease:Sine.easeOut}, time1+1.3)
		  .from(this.s2.m4.flag, 0.6, {rotation:"-=20", ease:Elastic.easeOut}, time1+1.5)
		  
		  //3
		  .staggerTo([this.s2.m4, this.s2.m3, this.s2.m2, this.s2.m1], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time2+0.0)
		  .from(this.s3.m1.cup, 0.7, {scaleX:0, scaleY:0, rotation:"-=40", ease:Expo.easeOut}, time2+1.0)
		  .staggerFrom([this.s3.m1.d1, this.s3.m1.d2, this.s3.m1.d3, this.s3.m1.d4, this.s3.m1.d5, this.s3.m1.d6, this.s3.m1.d7, this.s3.m1.d8, this.s3.m1.d9, this.s3.m1.d10, this.s3.m1.d11], 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.01, time2+1.1)
		  .from(this.s3.m2, 0.5, {x:"-=250", ease:Expo.easeOut}, time2+1.3)
		  .from(this.s3.m2.l1, 0.7, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time2+1.6)
		  .from(this.s3.m2.l2, 0.7, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time2+1.6)
		  .from(this.s3.m2.h1, 1.0, {rotation:"-=90", ease:Bounce.easeOut}, time2+1.7)
		  .from(this.s3.m2.h2, 1.0, {rotation:"+=90", ease:Bounce.easeOut}, time2+1.7)
		  .staggerFrom([this.s3.m2.p1, this.s3.m2.p2, this.s3.m2.p3], 0.4, {scaleX:0.5, scaleY:0.5, yoyo:true, repeat:15, repeatDelay:0.0, ease:Sine.easeInOut}, 0.08, time2+1.5)
		  .staggerFrom([this.s3.m2.p6, this.s3.m2.p5, this.s3.m2.p4], 0.4, {scaleX:0.5, scaleY:0.5, yoyo:true, repeat:15, repeatDelay:0.0, ease:Sine.easeInOut}, 0.08, time2+1.5)
		  .staggerFrom([this.s3.m3.m1, this.s3.m3.m2, this.s3.m3.m3], 0.7, {y:"-=100", alpha:0, ease:Bounce.easeOut}, 0.02, time2+1.5)
		  
		  //4
		  .staggerTo([this.s3.m3, this.s3.m2, this.s3.m1], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time3+0.0)
		  .from(this.s4.t1, 1.2, {x:"-=250", ease:Expo.easeOut}, time3+1.0)
		  .from(this.s4.t1.m1, 1.2, {x:"+=250", ease:Expo.easeOut}, time3+1.0)
		  .staggerFrom([this.s4.packs.q1, this.s4.packs.q2, this.s4.packs.q3, this.s4.packs.q4, this.s4.packs.q5, this.s4.packs.q6], 1.0, {rotation:"-=180", alpha:0, ease:Expo.easeOut}, 0.08, time3+1.2)
		  .staggerFrom([this.s4.f1, this.s4.f2, this.s4.f3], 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, time3+1.8)
		  .from(this.s4.t2.t1, 0.7, {x:"+=250", ease:Elastic.easeOut}, time3+2.1)
		  .from(this.s4.t2.t2, 0.7, {x:"-=250", ease:Elastic.easeOut, onComplete:replay}, time3+2.1)
		  
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
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(0.4,-169.5,1,1,0,0,0,0.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// s4
	this.s4 = new lib.s4();

	this.timeline.addTween(cjs.Tween.get(this.s4).wait(1));

	// s3
	this.s3 = new lib.s3();
	this.s3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.s3).wait(1));

	// s2
	this.s2 = new lib.s2();
	this.s2.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

	// s1
	this.s1 = new lib.s1();

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#6A3CDD","#3C227D"],[0,1],0,0,0,0,0,195.5).s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.2,-226,368.5,462);


// stage content:
(lib.n1_240x400 = function(mode,startPosition,loop) {
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