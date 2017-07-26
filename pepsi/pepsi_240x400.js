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
		{src:"images/bottle1.png", id:"bottle1"},
		{src:"images/bottle2.png", id:"bottle2"}
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
p.nominalBounds = new cjs.Rectangle(0,0,430,300);


(lib.bottle1 = function() {
	this.initialize(img.bottle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,305);


(lib.bottle2 = function() {
	this.initialize(img.bottle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,308);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsBeIAAh4IhXB4IgTAAIAAiXIATAAIAAB2IBWh2IAUAAIAACXgAgWhHQgKgGgHgJIAJgHQAFAHAIAFQAIAEAJAAQAJAAAJgEQAHgFAGgHIAIAHQgHAJgKAGQgKAFgMAAQgLAAgLgFg");
	this.shape.setTransform(69.4,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBMIAAh4IhYB4IgSAAIAAiXIATAAIAAB2IBWh2IAUAAIAACXg");
	this.shape_1.setTransform(53.1,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BMIAAiXIA7AAQAQAAALAGQAKAHAGAKQAFAKAAANQAAANgFAKQgGAJgLAGQgKAGgQAAIgoAAIAAA9gAgiAAIAmAAQAOAAAIgIQAIgIABgNQgBgNgIgIQgIgIgOAAIgmAAg");
	this.shape_2.setTransform(38.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBEQgSgKgJgSQgJgSAAgWQAAgVAJgSQAJgSASgKQAQgKAWgBQAWABARAKQARAKAKASQAKASAAAVQAAAWgKASQgKASgRAKQgRALgWAAQgWAAgQgLgAgcg0QgNAIgHAOQgHAOAAAQQAAASAHAOQAHAOANAIQAMAIAQAAQAQAAANgIQANgIAHgOQAGgOAAgSQAAgQgGgOQgHgOgNgIQgNgIgQgBQgQABgMAIg");
	this.shape_3.setTransform(22.6,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBNIAAgRQAHAAAFgCQAGgDAEgGQAEgHAEgMQADgMACgSIAKhNIBcAAIAACYIgUAAIAAiHIg3AAIgIA8QgDAZgFAPQgFAQgHAIQgHAIgIADQgIADgIAAIgDgBg");
	this.shape_4.setTransform(5.1,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBMIgNgiIhLAAIgNAiIgWAAIA9iXIAWAAIA+CXgAAgAZIgghQIgfBQIA/AAg");
	this.shape_5.setTransform(-10.2,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBMIg4hFIgQASIAAAzIgTAAIAAiXIATAAIAABNIBChNIAYAAIg+BJIBEBOg");
	this.shape_6.setTransform(-23.9,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBLQgLgDgJgGQgIgFgFgIIALgMQAHAJANAGQAMAGANgBQARABALgIQAKgIAAgNQAAgJgFgHQgFgFgJgEQgJgCgKAAIgfAAIAAgPIAfAAQAIAAAJgDQAIgCAFgGQAFgGAAgJQAAgIgFgGQgFgFgIgDQgIgDgJAAQgNgBgKAFQgLAFgJAJIgLgMQAJgKAOgHQAPgHAQABQAPgBANAFQAMAFAHAJQAIAJAAANQAAALgGAIQgFAHgHAFQgIAEgHABQAHABAIACQAIAEAGAIQAGAIAAAMQAAANgHALQgHAJgNAGQgNAGgRgBQgMABgLgEg");
	this.shape_7.setTransform(-44.5,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBMIAAiXIBjAAIAAARIhQAAIAAAxIBOAAIAAAPIhOAAIAAA1IBQAAIAAARg");
	this.shape_8.setTransform(-57.2,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BMIAAiXIBhAAIAAARIhOAAIAAAsIAoAAQAQAAAKAGQALAGAGAJQAFAKAAANQAAANgFAKQgGALgKAGQgLAGgQAAgAgiA7IAmAAQAOAAAIgIQAIgIABgNQgBgNgIgIQgIgIgOAAIgmAAg");
	this.shape_9.setTransform(-70.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-16,159.2,32);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEX5IABgBIgEAAQiRAFhdh0IAAgBQhWhrAAiYQAAiYBkhrQBlhsCLAAQCPAABkBsQBkBrAACYQAABWghBJQgZA1gmApIERAAIAAB3gAiZPGIAAABQhGBPgBBvQABBYAsBGIABAAQAqBDBEAcICdAAQBEgcArhDQAshGAAhYQABhvhFhPQhGhPhhAAQheAAhEBOgAjnJ3QhkhrAAiYQAAiYBkhrQBlhsCLAAIAsAEIAMABIAAANQACAYAEAZIACATIAAACQATBKgIBOQgEAwgWBXQgVBWgFArQgIBDAMA/QBUgKA8hIIAAABQBBhPgBhrQAAhdgphAQgjg1hCglIgHgEIgDhqIAUAHQBkAgBGBkQBGBlAAB1QAACYhkBrQhkBtiPAAQiLAAhlhtgAhSJrQgIg6AIg/QAFgqAVhZQAShRAEgwQAGhBgNg+QhLATgzBDQg5BMAABjQABBaAuBHQAnA6A4AcIAAAAgAgEguIAAAAIgDAAQiRAFhdh1IAAAAQhWhrAAiYQAAiYBkhsQBlhsCLAAQCPAABkBsQBkBsAACYQAABWghBIQgZA1gmAqIERAAIAAB2gAiZpgIAAAAQhGBPgBBwQABBXAsBHIABAAQAqBDBEAcICdAAQBEgcArhDQAshHAAhXQABhwhFhPQhGhOhhAAQheAAhEBOgACrtoIAHgJQAhgrAPgmQAQgrAAg3QAAhAgagpQgagpgvAAQgpABgWA0QgNAbgZBqQgYBigaArQgtBFhQAAQhYAAg3hTQgxhKAAhqQAAhBAVg7IAAgBQAPgpAmhBIAJgQIBPBFIgHALQgaArgMAmQgRAtAAAtQAAA/AYAoQAXAnAqAAQApgBAWg0QAKgZAYhsQAVhhAcgsQAuhEBUAAQBjAAA4BVQAvBLAAB6QAABHgaBAQgaA/gsAuIgNANgAnQ1PIAAAAQgVgFgRgRQgZgZgBgkQABgkAZgZIAAABQARgRAVgGIAAAAIABgBQALgCALAAQAjAAAaAaQAYAZAAAjQAAAkgYAZIAAAAQgaAZgjAAQgMAAgLgDgAlD1mIAAh3IKWAAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-152.9,105.8,305.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003D96").s().p("AhUB4QgfgMgXgYIgJgKQAMgGAVgFIA7gNIApgIQAWgGASgGQAvgQAUgeQATgdADgwQABgPAAgZQALAQAIASQANAgAAAiQAAAhgNAeQgNAfgXAXQgYAYgeAMQgfAOghAAQgiAAgfgOg");
	this.shape.setTransform(2,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E50317").s().p("Ah5BnQgNgfAAgiQAAgiANgeQAOgeAWgYQAYgXAegNQAfgNAhAAQAjAAAfANQATAIARANQgaBCgjAtQgrA+g3AdQgoAUgqADQgIgMgHgPg");
	this.shape_1.setTransform(-3.3,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ak7LtQiSg+hwhwQhxhxg+iSQg/iXgBilQABikA/iXQA+iSBxhwQBwhxCSg+QCXg/CkgBQClABCXA/QCSA+BwBxQBxBwA+CSQA/CXABCkQgBClg/CXQg+CShxBxQhwBwiSA+QiXA/ilAAQikAAiXg/g");
	this.shape_2.setTransform(0,0,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-17.9,35.8,35.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.008)","#000000"],[0,1],-1,-4.5,-67,-4.5).s().p("A3bfPMAAAg+dMAu3AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-200,300,400);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle2();
	this.instance.setTransform(-38,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-154,76,308);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle1();
	this.instance.setTransform(-38,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-154,76,305);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXAxIAAg+IgtA+IgKAAIAAhOIALAAIAAA9IAsg9IAKAAIAABOgAgKgkQgGgDgDgFIAEgEQACAEAFACQAEACAEABQAEgBAFgCQAEgCADgEIAEAEQgDAFgGADQgFACgGAAQgFAAgFgCg");
	this.shape.setTransform(34.8,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXAnIAAg+IgtA+IgKAAIAAhOIAKAAIAAA9IAtg9IAKAAIAABOg");
	this.shape_1.setTransform(26.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAnIAAhOIAeAAQAIABAGADQAFADADAGQADAFAAAHQAAAGgDAFQgDAEgFADQgGADgIABIgUAAIAAAfgAgRAAIATAAQAHAAAFgEQAEgEAAgGQAAgIgEgDQgFgFgHAAIgTAAg");
	this.shape_2.setTransform(19.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAkQgJgGgFgJQgFgJAAgMQAAgKAFgKQAFgJAJgFQAJgGAKAAQALAAAJAGQAJAFAFAJQAFAKAAAKQAAAMgFAJQgFAJgJAGQgJAFgLAAQgKAAgJgFgAgOgaQgHAEgDAHQgEAHAAAIQAAAJAEAHQADAHAHAFQAHAEAHAAQAJAAAGgEQAHgFADgHQAEgHAAgJQAAgIgEgHQgDgHgHgEQgGgFgJAAQgHAAgHAFg");
	this.shape_3.setTransform(11.2,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAfIAGgBIAFgFIADgKQACgGACgJIAEgnIAwAAIAABOIgKAAIAAhFIgdAAIgDAeQgCANgDAIQgDAIgDAEQgDAEgFACQgEABgFAAg");
	this.shape_4.setTransform(2.4,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbAnIgHgSIgnAAIgGASIgMAAIAghOIAKAAIAhBOgAARANIgRgpIgPApIAgAAg");
	this.shape_5.setTransform(-5.2,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAnIgcgkIgIAJIAAAbIgKAAIAAhOIAKAAIAAAoIAhgoIANAAIgfAmIAiAog");
	this.shape_6.setTransform(-12.1,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAnQgFgCgFgDQgEgDgDgEIAGgGQAEAFAGADQAHADAGAAQAJAAAFgEQAFgEAAgHQAAgFgCgDQgDgDgEgCQgFgBgFAAIgPAAIAAgHIAPAAQAEAAAFgCQAEgBADgDQACgDAAgEQAAgFgCgDQgDgDgEgBQgFgCgEAAQgGAAgGACQgFADgFAFIgFgHQAEgFAIgDQAHgEAIAAQAHAAAHADQAGACAFAFQADAFAAAGQAAAGgCAEQgDAEgEACIgIADQAEAAAEABQAFACADAEQACAEAAAHQAAAGgDAGQgEAFgGADQgIADgIAAQgGAAgGgCg");
	this.shape_7.setTransform(-22.2,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAnIAAhOIAzAAIAAAJIgpAAIAAAaIAoAAIAAAHIgoAAIAAAbIApAAIAAAJg");
	this.shape_8.setTransform(-28.6,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAnIAAhOIAyAAIAAAJIgoAAIAAAXIAUAAQAIAAAGADQAFAEADADQADAFAAAHQAAAHgDAGQgDAFgFADQgGADgIAAgAgRAeIATAAQAHAAAFgDQAEgFAAgHQAAgGgEgFQgFgEgHAAIgTAAg");
	this.shape_9.setTransform(-35.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-9.3,81.8,18.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBGIAAhLIgaBLIgNAAIgahLIAABLIgnAAIAAiLIA0AAIATA+IAUg+IA0AAIAACLg");
	this.shape.setTransform(32.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBGIAAiLIAnAAIAACLgAhMBGIAAiLIAnAAIAAAuIAWAAQAPAAAJAGQAKAHAGAKQAFAJAAANQAAANgFAKQgGALgKAHQgJAGgPABgAglAjIAQAAQAGAAADgDQAEgEAAgGQAAgGgEgEQgDgDgGAAIgQAAg");
	this.shape_1.setTransform(15.8,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BGIAAiLIBEAAQAOABAIAFQAJAFAEAIQAEAJAAAIQAAAOgHAIQgGAIgLADQAMAAAHAIQAHAKAAAOQAAAJgEAJQgEAIgJAGQgIAFgOABgAgPAjIAUAAQAFAAACgCQADgDAAgEQAAgFgDgDQgCgDgFABIgUAAgAgPgRIASAAQAEAAADgBQACgDAAgFQAAgEgCgDQgDgCgEAAIgSAAg");
	this.shape_2.setTransform(1.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BGIAAiLIA7AAQAQABAKAGQALAHAGALQAFAKAAANQAAAMgFAJQgGALgLAHQgKAGgQAAIgTAAIAAAugAgNgIIAOAAQAFgBAEgDQADgDABgHQgBgFgDgEQgEgDgFAAIgOAAg");
	this.shape_3.setTransform(-10.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIBXAAIAAAjIgvAAIAAARIAtAAIAAAhIgtAAIAAATIAvAAIAAAjg");
	this.shape_4.setTransform(-21.6,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBGIAAhoIghAAIAABoIgoAAIAAiLIBxAAIAACLg");
	this.shape_5.setTransform(-33.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,-14.8,84.7,29.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARBXIAAhFIgjBFIgmAAIAAiKIAoAAIAAA+IAgg+IApAAIAACKgAgQg+QgJgEgFgIIAPgMQADAEAEACQAEADAEAAQAFAAAEgCQAEgDADgEIAQAMQgGAIgIAEQgIAEgKAAQgIAAgIgEg");
	this.shape.setTransform(43.9,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBFQgJgCgHgFIANgfIAHADIAHACQAGgBADgDIAFgHIABgDIgqhcIAsAAIASA1IATg1IArAAIguBoQgFALgFAJQgGAIgIAEQgJAFgOAAQgIAAgHgCg");
	this.shape_1.setTransform(31.5,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BGIAAiLIBjAAIAAAjIg8AAIAAAMIAVAAQAPABALAGQALAGAEAJQAGAKAAANQAAAMgGALQgEAKgLAHQgLAGgPABgAgOAjIAQAAQAFAAADgDQADgDAAgGQAAgFgDgDQgDgEgFAAIgQAAg");
	this.shape_2.setTransform(20.2,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA+QgOgJgIgQQgHgQAAgVQAAgUAHgQQAIgQAOgKQAPgJASAAQATAAAOAJQAPAKAHAQQAIAQAAAUQAAAVgIAQQgHAQgPAJQgOAKgTAAQgSAAgPgKgAgLgfQgGAFgCAIQgDAIAAAKQAAALADAIQACAIAGAFQAFAFAGAAQAHAAAFgFQAFgFADgIQADgIAAgLQAAgKgDgIQgDgIgFgFQgFgEgHgBQgGABgFAEg");
	this.shape_3.setTransform(7.4,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BGIAAiLIA7AAQAQABAKAGQALAHAFALQAGAKAAANQAAAMgGAJQgFALgLAHQgKAGgQAAIgUAAIAAAugAgOgIIAPAAQAGgBADgDQAEgDgBgHQABgFgEgEQgDgDgGAAIgPAAg");
	this.shape_4.setTransform(-4.7,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBGIAAhoIghAAIAABoIgoAAIAAiLIBxAAIAACLg");
	this.shape_5.setTransform(-17.5,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghA+QgOgJgIgQQgHgQAAgVQAAgUAHgQQAIgQAOgKQAPgJASAAQATAAAOAJQAPAKAHAQQAIAQAAAUQAAAVgIAQQgHAQgPAJQgOAKgTAAQgSAAgPgKgAgLgfQgGAFgCAIQgDAIAAAKQAAALADAIQACAIAGAFQAFAFAGAAQAHAAAFgFQAFgFADgIQADgIAAgLQAAgKgDgIQgDgIgFgFQgFgEgHgBQgGABgFAEg");
	this.shape_6.setTransform(-30.6,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARBGIAAhoIghAAIAABoIgoAAIAAiLIBxAAIAACLg");
	this.shape_7.setTransform(-43.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.4,-14.8,104.9,29.6);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBxIgkhOIgNAXIAAA3IhAAAIAAjhIBAAAIAABYIAvhYIBKAAIhFBpIBJB4g");
	this.shape.setTransform(38.4,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBmQgYgPgMgaQgMgbgBgiQABgiAMgaQAMgaAYgPQAXgPAeAAQAaABARAKQARAJAKAPQAKAPAFAPIg1AWQgEgNgHgIQgJgJgMAAQgLAAgIAIQgIAIgFANQgFAOAAAQQAAARAFAOQAFAOAIAHQAIAIALAAQAMAAAJgKQAIgJADgNIA1AWQgEALgGALQgGAMgLAKQgKAKgOAGQgOAHgUAAQgegBgXgOg");
	this.shape_1.setTransform(18.1,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBxIgHgdIg5AAIgGAdIhGAAIBCjhIBMAAIBDDhgAAQAbIgQhIIgPBIIAfAAg");
	this.shape_2.setTransform(-1.5,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBxIAAjhIA/AAIAACpIBFAAIAAA4g");
	this.shape_3.setTransform(-18.6,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhYBxIAAjhIBuAAQAXAAAOAJQAOAJAGANQAHANAAAOQgBAWgKANQgKANgRAEQASACAMAPQALAOAAAXQAAAPgGAOQgHAPgOAIQgOAJgWAAgAgYA6IAfAAQAIAAAFgEQAEgEAAgIQAAgIgEgEQgFgEgIgBIgfAAgAgYgbIAeAAQAGAAAEgEQAEgEAAgIQAAgGgEgEQgEgEgGAAIgeAAg");
	this.shape_4.setTransform(-36.1,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-22.7,97.9,45.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBxIAAjhIA+AAIAADhg");
	this.shape.setTransform(34.1,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBtQgVgIgPgOIAdgxQALAKAPAHQAOAGAPAAQAJAAAGgDQAFgEAAgGQAAgHgKgFQgKgEgNgEQgPgFgPgIQgPgHgKgNQgJgOgBgYQAAgTAJgQQAKgRATgKQASgKAbgBQAWAAATAHQAVAHAOANIgcAvQgMgJgNgFQgNgEgNAAQgHAAgEADQgDAEAAAFQAAAHAKAEQAIAFAOAEQAQAFAPAIQAOAIAKAMQAKAOABAWQgBAjgXAUQgWAUgoABQgbAAgVgIg");
	this.shape_1.setTransform(20.8,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhXBxIAAjhIBhAAQAaAAARALQARALAJARQAJARAAAVQAAAVgJAPQgJARgRALQgRALgaAAIghAAIAABJgAgXgPIAYAAQAKABAGgGQAFgFAAgKQAAgKgFgGQgGgEgKAAIgYAAg");
	this.shape_2.setTransform(3.4,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhGBxIAAjhICNAAIAAA5IhNAAIAAAbIBKAAIAAA2IhKAAIAAAfIBNAAIAAA4g");
	this.shape_3.setTransform(-14.7,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXBxIAAjhIBhAAQAaAAARALQARALAJARQAJARAAAVQAAAVgJAPQgJARgRALQgRALgaAAIghAAIAABJgAgXgPIAYAAQAKABAGgGQAFgFAAgKQAAgKgFgGQgGgEgKAAIgYAAg");
	this.shape_4.setTransform(-32.1,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-22.7,85.2,45.4);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsBeIAAh4IhYB4IgSAAIAAiXIATAAIAAB2IBWh2IAUAAIAACXgAgVhHQgLgGgHgJIAJgHQAFAHAIAFQAIAEAJAAQAKAAAHgEQAJgFAFgHIAJAHQgIAJgKAGQgKAFgMAAQgLAAgKgFg");
	this.shape.setTransform(34,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BMIAAiXIATAAIAACXgAhHBMIAAiXIATAAIAAA9IAqAAQAOAAAKAGQALAGAGAJQAFAKAAANQAAANgFAKQgGALgKAGQgLAGgOAAgAg0A7IAoAAQAMAAAIgIQAIgIABgNQgBgNgIgIQgIgIgMAAIgoAAg");
	this.shape_1.setTransform(16.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BMIAAiXIBDAAQANAAAKAFQAJAFAFAJQAFAIABAMQgBAKgDAHQgEAHgGAFQgGAFgHABQAIABAHAEQAGAFAEAJQAEAIABAJQAAAMgGAJQgFAKgKAFQgKAFgOAAgAglA7IAtAAQAOAAAHgHQAIgHAAgMQAAgHgDgGQgEgGgGgEQgGgDgKgBIgtAAgAglgJIAsAAQANAAAHgHQAHgGAAgLQAAgLgHgHQgHgHgNAAIgsAAg");
	this.shape_2.setTransform(0.8,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBEQgRgKgKgSQgJgSAAgWQAAgVAJgSQAKgSARgKQARgKAVgBQAWABARAKQARAKAKASQAKASAAAVQAAAWgKASQgKASgRAKQgRALgWAAQgVAAgRgLgAgcg0QgNAIgHAOQgHAOAAAQQAAASAHAOQAHAOANAIQAMAIAQAAQAQAAANgIQANgIAHgOQAGgOAAgSQAAgQgGgOQgHgOgNgIQgNgIgQgBQgQABgMAIg");
	this.shape_3.setTransform(-15.5,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsBMIAAhGIhYAAIAABGIgTAAIAAiXIATAAIAABCIBYAAIAAhCIATAAIAACXg");
	this.shape_4.setTransform(-32.5,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-22.7,87.1,45.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagOQAZgOAeAAQATAAAQAFQAQAGAMAKQAMAKAIAMIgWANQgKgOgQgJQgQgJgTAAQgWAAgUAMQgSALgLAUQgLAUAAAZQAAAaALAUQALAUASALQAUALAWABQATgBAQgIQAQgJAKgOIAXANQgOATgUAMQgVAMgdAAQgeAAgZgOg");
	this.shape.setTransform(31,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPBrQgMgGgGgHIAMgWQAGAHAHADQAIAEAJABQAJAAAFgDQAHgDAFgHIALgTIAEgHIhVifIAgAAIBDCHIBFiHIAfAAIhgC0QgFANgIAJQgIAJgKAGQgLAFgQAAQgOAAgLgEg");
	this.shape_1.setTransform(9.1,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAxBuIhShjIgWAZIAABKIgbAAIAAjbIAbAAIAABwIBghwIAiAAIhaBpIBiByg");
	this.shape_2.setTransform(-10.1,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRBuIAAjbIBgAAQAUABANAGQAOAHAHANQAIANAAARQAAAOgFAKQgGAKgJAHQgJAHgJACQALACAKAGQAJAHAGAMQAGAMABANQgBASgHANQgIANgOAIQgOAHgUABgAg2BVIBCAAQAUAAAKgKQALgKAAgSQAAgKgFgIQgEgJgKgGQgIgEgOAAIhCAAgAg2gNIBBAAQATAAAJgKQAJgKAAgQQAAgOgJgLQgJgKgTAAIhBAAg");
	this.shape_3.setTransform(-31,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-22.1,87.7,44.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsBeIAAh4IhYB4IgSAAIAAiXIATAAIAAB2IBXh2IATAAIAACXgAgWhHQgKgGgHgJIAIgHQAGAHAIAFQAIAEAJAAQAJAAAJgEQAIgFAFgHIAIAHQgGAJgLAGQgKAFgMAAQgLAAgLgFg");
	this.shape.setTransform(28.8,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBMIAAh4IhXB4IgTAAIAAiXIATAAIAAB2IBXh2IATAAIAACXg");
	this.shape_1.setTransform(12.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBMIg4hFIgQASIAAAzIgTAAIAAiXIATAAIAABNIBChNIAYAAIg+BJIBEBOg");
	this.shape_2.setTransform(-1.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BMIAAiXIA7AAQAQAAALAGQAKAHAGAKQAFAKAAANQAAANgFAKQgGAJgLAGQgKAGgQAAIgoAAIAAA9gAgiAAIAmAAQAOAAAIgIQAIgIABgNQgBgNgIgIQgIgIgOAAIgmAAg");
	this.shape_3.setTransform(-15.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBMIAAg9IgfAAIglA9IgWAAIApg+QgLgBgIgGQgJgFgGgIQgFgJgBgOQABgOAFgKQAGgLAMgFQALgGAOAAIA7AAIAACXgAgZgyQgIAIAAANQAAANAIAIQAJAIAOAAIAmAAIAAg6IgmAAQgOAAgJAIg");
	this.shape_4.setTransform(-30.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-16,78.1,32);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.008)","#000000","rgba(0,0,0,0)"],[0,1,1],0,0,0,0,0,282.9).s().p("A/OfPMAAAg+dMA+dAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-215,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-150,430,300);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 678
	this.t8 = new lib.Symbol11();
	this.t8.setTransform(8.2,167.5);

	this.t7 = new lib.Symbol5();
	this.t7.setTransform(5.1,148);

	this.t6 = new lib.Symbol4();
	this.t6.setTransform(-33.9,122.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t6},{t:this.t7},{t:this.t8}]}).wait(1));

	// 45
	this.t5 = new lib.Symbol10();
	this.t5.setTransform(49.9,164.5);

	this.t4 = new lib.Symbol9();
	this.t4.setTransform(-44.5,164.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t4},{t:this.t5}]}).wait(1));

	// 123
	this.t3 = new lib.Symbol8();
	this.t3.setTransform(39.3,-135.6);

	this.t2 = new lib.Symbol7();
	this.t2.setTransform(-52.4,-135.6);

	this.t1 = new lib.Symbol6();
	this.t1.setTransform(-54.2,-166.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-189.3,189.3,368.6);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol5();
	this.t2.setTransform(17.1,9.5);

	this.t1 = new lib.Symbol4();
	this.t1.setTransform(-21.9,-15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-31.6,121.9,63.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.l2 = new lib.Symbol19();
	this.l2.setTransform(24.1,0.3,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(1));

	// l1
	this.l1 = new lib.Symbol18();

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-17.9,47.1,35.8);


(lib.Symbol13 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// grad
	this.grad = new lib.Symbol16();

	this.timeline.addTween(cjs.Tween.get(this.grad).wait(1));

	// Layer 1
	this.bt1 = new lib.Symbol14();

	this.timeline.addTween(cjs.Tween.get(this.bt1).wait(1));

	// Layer 2
	this.bt2 = new lib.Symbol15();

	this.timeline.addTween(cjs.Tween.get(this.bt2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-200,300,400);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 200;
		
		var tl = new TimelineMax();
		tl.to(r.blk, 0.4, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(r.logo.l1, 1.4, {rotation:"-=90", ease:Expo.easeOut}, 0.4)
		  .from(r.logo.l1, 0.6, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.4)
		  .from(r.logo.l2, 1.4, {x:"+=30", alpha:0, ease:Expo.easeOut}, 0.4)
		  
		  .from(r.bottle.grad, 3.0, {x:100, ease:Power0.easeNone}, 1.5)
		  .to(r.bottle.grad, 1.0, {alpha:0, ease:Power0.easeNone}, 4.0)
		  .from(r.bottle.bt2, 1.0, {alpha:0, ease:Power0.easeNone}, 6.0)
		  .from(r.bg, 1.4, {alpha:0, ease:Power0.easeNone}, 6.0)
		  
		  .from(r.t1.t1, 1.0, {x:"+=80", alpha:0, ease:Expo.easeOut}, 1.5)
		  .from(r.t1.t2, 1.4, {x:"-=80", alpha:0, ease:Expo.easeOut}, 1.5)
		  
		  .to(r.t1.t1, 0.7, {x:"-=80", alpha:0, ease:Expo.easeIn}, 3.0)
		  .to(r.t1.t2, 0.7, {x:"+=80", alpha:0, ease:Expo.easeIn}, 3.0)
		  .from(r.t2, 1.0, {y:"+=40", alpha:0, ease:Expo.easeOut}, 3.7)
		  
		  .to(r.t2, 0.7, {y:"-=40", alpha:0, ease:Expo.easeIn}, 5.0)
		  .staggerFrom([r.t3.t1, r.t3.t2, r.t3.t3], 1.2, {x:"+=80", alpha:0, ease:Expo.easeOut}, 0.08, 5.7)
		  .staggerFrom([r.t3.t4, r.t3.t5], 1.2, {x:"+=80", alpha:0, ease:Expo.easeOut}, 0.08, 6.2)
		  
		  .staggerTo([r.t3.t4, r.t3.t5], 0.7, {x:"-=80", alpha:0, ease:Expo.easeIn}, 0.08, 8.5)
		  .staggerFrom([r.t3.t6, r.t3.t7, r.t3.t8], 1.2, {x:"+=80", alpha:0, ease:Expo.easeOut}, 0.08, 9.1)
		  
		  .call(replay)
		  
		  .to(this.blk, 0.9, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 13)
		  ;
		
		function replay() {
		  if (count == repeat){
		      //tr.pause();
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo
	this.logo = new lib.Symbol17();
	this.logo.setTransform(-5.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(-30.9,-140.2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(-0.9,-155.2);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(2.3,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// bottle
	this.bottle = new lib.Symbol13();
	this.bottle.setTransform(0,46);

	this.timeline.addTween(cjs.Tween.get(this.bottle).wait(1));

	// Layer 2
	this.instance = new lib.Symbol3();
	this.instance.setTransform(0,0,0.6,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	// bg
	this.bg = new lib.Symbol1();
	this.bg.setTransform(0,-66);

	this.bg.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-201,300,447);


// stage content:
(lib.pepsi_240x400 = function(mode,startPosition,loop) {
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