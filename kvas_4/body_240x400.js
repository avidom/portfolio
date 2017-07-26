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
		{src:"images/partLogo.png", id:"partLogo"}
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



(lib.partLogo = function() {
	this.initialize(img.partLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,77);


(lib.Symbol183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#853B1D").s().p("Ag/DlQqhi9pimfIAHgLQJhGeKfC9QKcC9LigmIAAANQh8AGh5AAQpfAAouieg");
	this.shape.setTransform(0,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BD00").s().p("AhlAGQhAiuABgMIFJAiIjKFHIhAivg");
	this.shape_1.setTransform(75.5,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E56D1A").s().p("AhyAGQgyizACgLIFFA8IjjE2Igyi0g");
	this.shape_2.setTransform(28.5,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4BD00").s().p("AiUAGQAIi6AGgKIEiCeIk4DfIAIi5g");
	this.shape_3.setTransform(-97.6,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E56D1A").s().p("AiTAGQgJi6AFgKIExCCIkjD7IgKi5g");
	this.shape_4.setTransform(-59.5,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4BD00").s().p("AiFAGQgci4AEgLIE8BjIkHEYIgdi4g");
	this.shape_5.setTransform(-16.3,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.7,-55.1,269.5,110.3);


(lib.Symbol182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F2E7").s().p("AgxAyIgWgGIgCgHQgBgFADgEQACgFAFgBIAAAAQgUgDgIgSIgEgEQAKABANgBQAlgCAmgJQAngJAkgRQALgFAIgFIAAAGQAAAUgQANQAFgCAEADQAFADABAFIACAFIgRAPQgbAUgkAIQgUAFgWAAQgMAAgMgBg");
	this.shape.setTransform(-0.8,-1.7,1.3,1.3,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2A076").s().p("Ag0ARIgPgEQAiAEAjgKQAmgHAcgTIgLALQgYASgcAFQgPAFgRAAQgNAAgMgDg");
	this.shape_1.setTransform(0.1,6.9,1.3,1.3,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#895E37").s().p("Ag1A9IgXgFQgXgJgSgPQgIgHgDgGIgFASIAAgHQgCgQAJgNQAIgLAPgGIALgEIgHAFQgLAHgIAKQAJAEAJAAQAJACANgBQAmgCAngIQAlgJAkgQQAXgLAKgMQgNgGgNgCIgIgBIAMgBQAPgCAOAIQAOAIAFAOIADAHQgFgHgIgHQAAAHgDAJQgNAegeAYQgbATgkAIQgTAGgWAAQgMAAgMgCg");
	this.shape_2.setTransform(0.1,-3.1,1.3,1.3,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-9,36,18.1);


(lib.Symbol180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F2E7").s().p("Ag3AzQgQgEgJgDIgBgIQgBgFADgFQACgFAGgBQgVgEgJgSIgEgGIAYABQAtgBAngJQAtgJAkgQQANgFAIgGIAAAHQAAAWgSANQAGgBAEADQAFADABAFIACAGQgKAKgKAGQgeAWgnAGQgTAFgVAAQgQAAgPgDg");
	this.shape.setTransform(-0.5,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA945C").s().p("Ag8BAQgQgEgIgEQgZgJgUgSQgIgJgCgFQgFAJgBALIgBgIQgBgRAKgMQAJgPAQgFIANgEIgIAEQgMAJgJALQAJADAKABIAYABQAsgBApgGQArgKAkgPQAagLALgNQgNgHgPgDIgIgBIANgBQARgCAOAJQAPAKAFAQIADAHQgHgJgGgGQAAAHgFAKQgPAigiAXQgeAVgmAGQgUAGgVAAQgQAAgPgDg");
	this.shape_1.setTransform(0,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2A076").s().p("Ag5ASIgRgFQAmAFAmgLQApgHAfgUQgGAHgGAFQgZASghAHQgPAEgSAAQgOAAgOgDg");
	this.shape_2.setTransform(3.2,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-8.7,29.5,17.5);


(lib.Symbol179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C4D42").s().p("AAoAtQgigrg2gMQgJgCgDgDQgGgGAEgLQAEgMANgGQAMgGANACQAUACAWAVQAjAfAHAkQAEAQgKADIgCAAQgHAAgJgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-5.6,13.1,11.2);


(lib.Symbol178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C4D42").s().p("AhGAMQAPgUAcgNQAOgIAkgLQAOgEAHAAQAMgBAHAGQAJAGAGATQACAJgCAEQgEADgLAAQhMAAg/AsQgFgPALgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-4.6,15.9,9.2);


(lib.Symbol176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5BC0EB","#59BBE6","#53AFD9","#4899C3","#3C7FA6"],[0,0.188,0.435,0.718,1],-10.7,-29,31,12.9).s().p("AgmB5QiihChjh5IgbgjIBphNIAJAOQBSB9CWBHQCRBGCjAAIgrBMIgfABQiZAAiLg6g");
	this.shape.setTransform(0,-1.1,1.402,1.402,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B67D").s().p("AANBRQgOgSgVgOIgBAAQgNgJgRgCIgRgCQgHgBgFgFQgEgFAAgHQAAgJAHgGQAFgDAHAAIgPgNQgEgEAAgGQgBgFAEgFIADgDQAJgHAJAHIAKAHIgKgTQgFgKAIgIIABgBIACgBQAFgEAGABQAGABADAEIAIAKIgEgRQgCgKAIgGIAFgDQAGgCAGADQAGADACAGIAGAbQACgEAEgCQAKgHALAGIAFAFQAEAGAAAGIgBATQAAAQAJALIACADIAlAuIg+Asg");
	this.shape_1.setTransform(-34.5,-36.2,1.402,1.402,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-49.7,87.9,83.1);


(lib.Symbol175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5BC0EB","#59BBE6","#53AFD9","#4899C3","#3C7FA6"],[0,0.188,0.435,0.718,1],20,-42.8,-17.6,22.6).s().p("AkVDAQCag0BzhxQB3hyAniRIAEgRIB8AoIgPAqQg3CViEBvQh+BtijAwg");
	this.shape.setTransform(-4.4,8.2,1.402,1.402,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B67D").s().p("AhNBKIAVg7QAFgPgGgOIgHgRQgCgGACgGIAEgHQAIgJAMADQAEACADADIgBgcQAAgIAFgEQAEgEAHgBIACAAIADABQAKAEABAKIACARIACgMQACgFAGgDQAFgCAGABIAEACQAJAFgBALIgDAVIAHgKQAGgJAKAEIAFABQAEAEACAGQABAEgCAFIgJATQAHgBAFABQAJADADAKQACAGgDAEQgDAGgGADIgQAIQgPAGgKAOIAAAAQgPASgLAYIgFARg");
	this.shape_1.setTransform(38,-20.6,1.402,1.402,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-34.5,98,69.1);


(lib.Symbol174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#853B1D").s().p("Ag+DlQqhi9pjmfIAHgLQJhGeKfC9QKdC9LhgmIAAANQh6AGh4AAQpfAAowieg");
	this.shape.setTransform(0,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BD00").s().p("AhlAHQhAivABgMIFJAiIjJFHIhBiug");
	this.shape_1.setTransform(75.5,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E56D1A").s().p("AhyAGQgyizACgLIFFA8IjjE1Igyizg");
	this.shape_2.setTransform(28.5,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4BD00").s().p("AiUAGQAIi6AGgKIEjCeIk5DfIAIi5g");
	this.shape_3.setTransform(-97.6,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E56D1A").s().p("AiTAGQgIi6AEgKIEwCCIkiD8IgKi6g");
	this.shape_4.setTransform(-59.5,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4BD00").s().p("AiFAGQgbi4ADgLIE8BjIkHEYIgdi4g");
	this.shape_5.setTransform(-16.3,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.7,-55.1,269.5,110.3);


(lib.Symbol173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#853B1D").s().p("A1QLCQMfh/KklmQKnljItpJIAKAKQowJMqoFjQqmFmshCAg");
	this.shape.setTransform(0,-13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BD00").s().p("AAEB1Qi3hdgHgKIEfjdIBWGfIi3hbg");
	this.shape_1.setTransform(92.4,-30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E56D1A").s().p("AAEBqQivhqgHgKIExjIIA0GkIivhog");
	this.shape_2.setTransform(48.3,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4BD00").s().p("AglA2QiHiagDgMIFfhfIhQGfQhDhLhChPg");
	this.shape_3.setTransform(-88,64.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E56D1A").s().p("AgQBGQiViNgFgLIFViAIgpGlIiSiNg");
	this.shape_4.setTransform(-45.1,49.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4BD00").s().p("AADBXQihh9gFgMIFFihIACGnIihh9g");
	this.shape_5.setTransform(1.8,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.1,-85.3,272.3,170.6);


(lib.Symbol172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAF3E6").s().p("AgOBPIgQgFQgZgKgRgTQgRgVAAgYQAAgfAegZQAegYAiAAQAaAAAXAPQAKAGAHAJQATAWAAAcQAAAhgYAYIgKAIIAAABIgBAAIgLAGIgOAGIgIACIgRABQgKAAgJgCg");
	this.shape.setTransform(15.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF3E6").s().p("AgMBRIgSgDIgNgGIgLgGIAAgBIgLgIQgYgYAAghQAAggAYgYQAagYAiAAQAcAAAbARQAOAKAGAGQAUAWABAZQgBAVgOATQgNASgWAMQgMAGgKACIgJACIgPABg");
	this.shape_1.setTransform(-15.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-8.1,48.8,16.4);


(lib.Symbol171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#895E37").s().p("AgwBqQgagOgQgXQgZASgdAAQgmAAgagbQgbgbAAgkQAAgmAbgbQAagbAmAAQAhABAZAUQARgVAYgMQAZgMAaAAQA1AAAkAnQAYgPAaAAQAmAAAaAbQAbAbAAAmQAAAkgbAbQgaAbgmAAQgXAAgWgMQgQAVgZAMQgZAMgcAAQgcAAgagOg");
	this.shape.setTransform(8.2,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#895E37").s().p("AgwBqQgagOgQgXQgZASgdAAQgmAAgagbQgbgbAAgkQAAgmAbgbQAagbAmAAQAhABAZAUQARgVAYgMQAZgMAaAAQA1AAAkAnQAYgPAaAAQAmAAAaAbQAbAbAAAmQAAAkgbAbQgaAbgmAAQgXAAgWgMQgQAVgZAMQgZAMgcAAQgcAAgagOg");
	this.shape_1.setTransform(-9.3,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9804A").s().p("AE2AtQgogkg2AAQgaAAgaAKQgQg5gvglQgxgmg9AAQg7AAgxAkQgvAkgRA2QgQgEgTAAQg1AAgnAkQgnAlgFA1IAAgKQAAg5AogoQAogmA4AAQATAAAQAFQARg5AvgjQAxglA7AAQA9AAAxAmQAvAmAQA6QAYgKAcAAQA5AAAoAmQAoAoAAA5IAAAKQgFg1gmglg");
	this.shape_2.setTransform(0,-24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#895E37").s().p("AElFkIkuASIkdgRQgWAagkAAQggAAgXgXQgXgWAAghQAAgUAKgSQAKgRARgLQgcgFgSgVQgSgWAAgcQAAgTAIgRQAJgRAPgKQgcgNgRgaQgRgbAAggQAAgqAggfQAfggAtAAQARAAAMAEIgCgXQAAg4AogoQAogoA4AAQATAAAQAEQARg4AvgkQAwgkA9AAQA8AAAwAmQAwAlAQA7QAYgKAcAAQA5AAAoAoQAoAoAAA4IgCAXQAMgEARAAQAtAAAfAgQAgAfAAAqQAAAggSAbQgQAagcANQAPAKAIARQAJARAAATQAAAcgTAWQgSAVgbAFQARALAKARQAKASAAAUQAAAhgXAWQgXAXggAAQgkAAgYgbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.8,-38.4,97.7,87);


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#895E37").s().p("AgwBqQgagOgQgXQgZASgdAAQgmAAgagbQgbgbAAgkQAAgmAbgbQAagbAmAAQAhABAZAUQARgVAYgMQAZgMAaAAQA1AAAkAnQAYgPAaAAQAmAAAaAbQAbAbAAAmQAAAkgbAbQgaAbgmAAQgXAAgWgMQgQAVgZAMQgZAMgcAAQgcAAgagOg");
	this.shape.setTransform(-5,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#895E37").s().p("AgwBqQgagOgQgXQgZASgdAAQgmAAgagbQgbgbAAgkQAAgmAbgbQAagbAmAAQAhABAZAUQARgVAYgMQAZgMAaAAQA1AAAkAnQAYgPAaAAQAmAAAaAbQAbAbAAAmQAAAkgbAbQgaAbgmAAQgXAAgWgMQgQAVgZAMQgZAMgcAAQgcAAgagOg");
	this.shape_1.setTransform(7.9,-16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#895E37").s().p("AgwBqQgagOgQgXQgZASgdAAQgmAAgagbQgbgbAAgkQAAgmAbgbQAagbAmAAQAhABAZAUQARgVAYgMQAZgMAaAAQA1AAAkAnQAYgPAaAAQAmAAAaAbQAbAbAAAmQAAAkgbAbQgaAbgmAAQgXAAgWgMQgQAVgZAMQgZAMgcAAQgcAAgagOg");
	this.shape_2.setTransform(13.8,-7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#895E37").s().p("AgwBqQgagOgQgXQgZASgdAAQgmAAgagbQgbgbAAgkQAAgmAbgbQAagbAmAAQAhABAZAUQARgVAYgMQAZgMAaAAQA1AAAkAnQAYgPAaAAQAmAAAaAbQAbAbAAAmQAAAkgbAbQgaAbgmAAQgXAAgWgMQgQAVgZAMQgZAMgcAAQgcAAgagOg");
	this.shape_3.setTransform(-11.4,-7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#895E37").s().p("AgwBqQgagOgQgXQgZASgdAAQgmAAgagbQgbgbAAgkQAAgmAbgbQAagbAmAAQAhABAZAUQARgVAYgMQAZgMAaAAQA1AAAkAnQAYgPAaAAQAmAAAaAbQAbAbAAAmQAAAkgbAbQgaAbgmAAQgXAAgWgMQgQAVgZAMQgZAMgcAAQgcAAgagOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-28.2,72.7,40.3);


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAF3E6").s().p("AAAAMQgCAAgCgCIgDgCQgDgCgBgEIAAgCQAAgEAEgEIAEgDQAHAGAIAIQgCAGgHADg");
	this.shape.setTransform(-12.5,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF3E6").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQAIAAAAAHQAAAIgIAAQgCAAgDgCg");
	this.shape_1.setTransform(-14,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A282B").s().p("AgNAPQgHgHAAgIQAAgHAHgHQAGgGAHAAQAIAAAFAFIADADIAEAGIABAGIAAAAQAAANgNAGIgIACQgHAAgGgGg");
	this.shape_2.setTransform(-15.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#349BB3").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(-15.7,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAF3E6").s().p("AgEAKIgDgCQgDgCgBgEIAAgCIAAAAQAAgFAEgDIAEgDQAHAGAIAHQgCAIgHABIgDABQgCAAgCgCg");
	this.shape_4.setTransform(18,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAF3E6").s().p("AgHAAQAAgCACgDQADgCACAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_5.setTransform(16.5,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A282B").s().p("AgNAPQgHgHAAgIQAAgHAHgGQAGgHAHAAQAHAAAGAFIADADIAEAHIABAFIAAAAQAAANgNAGQgDACgFAAQgHAAgGgGg");
	this.shape_6.setTransform(15.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#349BB3").s().p("AgXAZQgKgLAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKALQgKAKgOAAQgNAAgKgKg");
	this.shape_7.setTransform(14.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-3.6,38.5,7.2);


(lib.Symbol167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AgkBMIAJgzIAuAIIgIAzgAgSggIAIgzIAvAIIgIAzg");
	this.shape.setTransform(49.4,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E13833").s().p("AhiCFIAskRIBRAOQAUADAOAHQAPAIAJAMQAJALAEASQADASgEAVQgCARgIAOQgIAOgMAKQgLAKgRAEQgPAEgWgDIgmgHIgRBqgAgdgGIAkAGQATACAMgIQAMgLADgTQAEgVgJgMQgIgMgUgEIgkgGg");
	this.shape_1.setTransform(36,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E13833").s().p("AhhB9IAskRICXAYIgGAqIhqgRIgNBJIBcAPIgHAnIhbgPIgNBMIBqASIgGAqg");
	this.shape_2.setTransform(17.2,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E13833").s().p("AABCPIATh0QgNAEgKABQgNAAgNgCQgjgGgPgXQgPgVAHguIAOhUIAsAIIgMBOQgFAdAHANQAHANAUADQAHACAKgBQAJAAAMgFIATh4IAtAHIgsESg");
	this.shape_3.setTransform(-2.4,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E13833").s().p("AhhB9IAskSICXAZIgHAqIhqgRIgLBKIBaAOIgGAoIhbgQIgMBNIBqARIgHAqg");
	this.shape_4.setTransform(-22.5,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E13833").s().p("AgICQIhZgPIAtkRIBSAOQAnAGAQAXQARAXgGAjQgDASgJANQgKAMgUAFIgBACQAKAFAGAHQAHAJACAIQAEAKAAAJIgBAUQgHAogYARQgSANgZAAIgPgBgAgtBeIAoAGQAKACAHgCQAHgCAGgFQAFgFADgHQADgIABgIQADgRgHgNQgHgMgUgDIgmgGgAgZgYIAiAGQATADALgIQAKgJADgQQACgRgHgLQgHgLgUgDIgigGg");
	this.shape_5.setTransform(-43.3,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-22.1,106.2,44.2);


(lib.Symbol166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AutDqICWq5IbEFvIhXIwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.2,-46.5,188.4,93);


(lib.Symbol165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtUCDIAvoEIZ6FEIh2G/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.3,-38.6,170.7,77.3);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiTADQAlgJA4gGQBugLBcAZQhdAOhJAAQhJAAg4gNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-1.7,29.8,3.4);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAYQhPANg9AAQg+AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA3gLQBBgIA3ASQg4ALgrAAQgrAAghgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.3,17.7,2.6);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXABQA3gSBBAJQAhAEAWAHQgiAJgqAAQgsAAg3gLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.2,17.7,2.5);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AirACQBrgYCAAKQBBAGArAIQhCAOhVAAQhVAAhrgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-1.6,34.5,3.3);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA4gKQBAgJA3ASQg4ALgrAAQgrAAghgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.2,17.7,2.5);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAYQhPANg+AAQg9AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ABQBOgXBcALQAwAFAfAJQgwAMg9AAQg+AAhOgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA3gLQBAgJA4ATQg4ALgsAAQgqAAghgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.3,17.7,2.6);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAXQhPAOg+AAQg9AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXACIA3gLQBAgJA4ATQg3ALgrAAQgrAAgigKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.2,17.7,2.6);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AirADIBsgOQB/gLBsAYQhqANhVAAQhWAAhCgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-1.6,34.6,3.2);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AirACIBsgOQCAgKBrAYQhrAOhVAAQhVAAhCgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-1.6,34.6,3.3);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXABQA3gTBBAJQAhAFAWAGQghAKgqAAQgsAAg4gLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-1.3,17.7,2.6);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiUACQBdgaBuAMQA4AGAmAJQg6ANhJAAQhKAAhcgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-1.7,29.8,3.4);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiUADIBegPQBugLBdAZQheAOhJAAQhJAAg5gNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-1.7,29.8,3.4);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhrADIBEgOQBQgLBDAXQhFAOg1AAQg0AAgpgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-1.5,21.7,3.1);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8ADIBPgOQBcgLBOAXQhPAOg/AAQg8AAgvgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-1.6,25.1,3.2);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AADCHIAAgVIAPAAIAHgBQACgCAAgEIAAhbIg2BPIAAALQAAAGACABQABABAGAAIAQAAIAAAVIhigBIAAgUIAQAAIAHgBQACgCAAgFIAAiFQAAgFgCgBIgHgBIgQAAIAAgVIBiAAIAAAVIgPAAIgHABQgDABAAAFIAABYIA2hOIAAgJQAAgIgFAAIgTAAIAAgVIBiAAIAAAVIgQAAQgFAAgCABQgCABAAAFIAACGQAAAEACACQACABAFAAIAQAAIAAAVgAgohQQgPgNAAgSQAAgLAHgGQAGgGAIAAQAGAAAGAFQAGAEAAAKQAAAHgBABIgDAEIgGAFIgBADQAAALAbAAQAcAAAAgLIgBgCIgCgCIgCgBQgGgFAAgKQAAgJAFgEQAGgGAGAAQAJAAAGAHQAGAGAAAKQAAAKgGAKQgGAKgMAHQgNAGgSAAQgZAAgPgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-13.5,20.4,27.1);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AADBfIAAgVIAPAAIAHgBQADgBAAgFIAAhZIg2BNIAAAMQAAAFABABQACABAGAAIAPAAIAAAVIhiAAIAAgVIAQAAIAHgBQACgBAAgFIAAiFQABgFgDgBIgHgBIgQAAIAAgVIBiAAIAAAVIgPAAQgFAAgCABQgCABAAAFIAABXIA2hNIAAgKQAAgIgGABIgTAAIAAgVIBiAAIAAAVIgQAAIgHABQgCABAAAFIAACFQAAAFACABIAHABIAQAAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.5,20.4,19.1);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AAOA1QgFgegDgGQgGgOgVAAIAABAQAAAFADABIAHABIANAAIAAAVIhhAAIAAgVIAQAAIAIgBQACgBAAgFIAAiFQAAgFgCgBIgIgBIgQAAIAAgVIBiAAIAAAVIgOAAIgHABQgDABAAAFIAAA0IABAAQAMAAAGgCQAJgFAEgXQAEgVACgGQAJgdAaABQAOgBAJAKQALAJAAAOQgBAMgFAIQgHAIgLAAQgKAAgGgGQgGgGAAgLQAAgEADgFIACgEIgDABQgFADgDARIgEAVQgEAVgMAHQATAFALALQAKAMAEAXQACASAGAAQADAAACgEQADgGABgLIAAgFIAVAAIgBAFQgBAYgJAOQgLAUgVgBQgeAAgJgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-10.1,19.2,20.2);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("Ag6BFQgYgdAAgoQAAgoAXgdQAYgeAkAAQAbAAAWAPIAHgKIAQAAIACBNIgUAAIAAgDQgMg6gjAAQgkAAAABNQAABOAnAAQASAAAOgOQAMgMAFgRIAAgEIAXAAIgCAFQgGAegTARQgUASgeAAQgmABgaggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.1,16.7,20.2);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("ABKB6IgBgFQgCgjgYgKQgLgDgcAAIgfAAQgWAAgKAFQgRALgBAgIAAAFIgWAAIAAhLIAKAAQAJAAAEgBQAIgEAKggQAMgrACgnQABgGgBgGQgBgJgCgDQgDgEgIAAIgRAAIAAgVICjAAIAAAVIgTAAIgHABQgDABAAAGIAACCQAAAJAHAAIAaAAIAABLgAgsAvIAyAAQAJAAAAgFIAAiGQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgEAAIgQAAQgFAAgCACQgEAEgCAVQgEAygIAdQgFAXgHAMIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-12.2,19.3,24.4);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AACBfIAAgVIAQAAIAHgBQACgBAAgFIAAhZIg2BNIAAAMQAAAFACABQABABAGAAIAQAAIAAAVIhiAAIAAgVIAQAAIAHgBQACgBAAgFIAAiFQAAgFgCgBIgHgBIgQAAIAAgVIBiAAIAAAVIgPAAIgHABQgDABAAAFIAABXIA2hNIAAgKQAAgIgFABIgUAAIAAgVIBjAAIAAAVIgQAAIgHABQgDABAAAFIAACFQAAAFADABIAHABIAQAAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-9.5,20.4,19.1);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AhZBXQgMgLAAgQQAAgNAJgKQAIgLAOAAQAMAAAGAIQAHAIAAAMQAAAIgFAGQgEAEgFADIgBABIACAAQAKgBAIgOQANgYAAgzIAAgjQAAgOgGgGQgFgFgNAAIgLAAIAAgVICkAAIAAAVIgRAAQgFAAgBABQgDABAAAFIAACFQAAAFADACQABABAFAAIARAAIAAAUIhkAAIAAgVIAQAAQAGAAABgBQADgBAAgFIAAiGQAAgFgEAAIgNAAQgJAAgCAEQgEAEgCAQIgBAqQgCApgHAXQgOAnggAAQgQAAgLgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-9.6,20.5,19.4);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D3327").s().p("AuVAHIAAgNIcpAAIACANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-0.7,183.6,1.6);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D3327").s().p("AlcAHQAOgHAKgGITaAAIAAAOgAuVAHIAAgOIFDAAQAKAHAOAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-0.8,183.6,1.6);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AuVDBIAAmCIF5AAQAmAMArAAQArAAAngMIUPABIAAGCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-19.4,183.6,38.8);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AAID1QgmgFgkgQQgogSgagcQhEhJADhpQAChrBHhGQAlgkAygSQAsgRA0ABQgxABgpARQgtASgjAiQhHBGgDBrQgCBpBEBJQAaAcAoASQAkAQAmAFQAQADAPAAIgGAAQgTAAgTgDgABlDKQAxgCAwgXIgEAIQgrARgrAAIgHAAgABUjGQA7gDAtAgIABAKQgsgmg9gBg");
	this.shape.setTransform(-2.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("Ag3D3Qg5gUgjgmQhIhNAChwQAChxBMhKQAtgsA9gTQA4gSA/AJIAxAIQAZACAZgNIAPCQQgXgigmgRQglgRgqADQhHAEgnBDQglA9AKBMQANBwBYAmQBbAmBnhDQgZBtiIAIIgSAAQgvAAgvgQgAgsjnQgxASglAlQhIBGgCBqQgCBqBEBJQAaAbAoASQAjAQAmAGQAXADAVgBQgOAAgRgCQgmgGgjgQQgogSgagbQhFhJADhqQAChqBIhGQAigiAugTQApgRAwgBIgFAAQgvAAgsAQgABfDKQAuACAugTIAFgIQgwAYgxABgABOjGQA9ACAsAmIgBgLQgqgdg2AAIgIAAg");
	this.shape_1.setTransform(-1.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("AgDAvIgMhuQAKgDAFgFIAQCPQgJgOgKgLg");
	this.shape_2.setTransform(20.3,-19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AgKAYQAhgYAOgpQAJgEANgIQgKAsghAbQgcAaguALQAbgLAVgUg");
	this.shape_3.setTransform(17.7,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AABCSQgxgsgJhPQgGgvAOgvQAOgwAhgeQAVgRAdgGQgwAYgXA5QgXA2AHA8QAHA2AbAoQAYAlApATQghgHgagUg");
	this.shape_4.setTransform(-2.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-26.4,47.3,52.8);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AC1DrQgaAAgNgKQgMgJgLgaIgNgpIgDgDQgxgxg9gDQBEgCA3A2IACADIAPApQAJAaANAJQAMAJAYABgAi+DrQAYgaAOgrIBtlLQAHgXACgPQABgSgHgNIAOAAQAGANgCASQgBAPgIAXIhsFLQgOArgYAagAg8BLIAMgEQAggOAkABQgcABgbAMIgaALgABPBBIhFjTIAHgUIBMDrg");
	this.shape.setTransform(-5.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("ACRD6QghAAgSgQQgNgLgKgbIgNgnQhFhHhiAhIgMAkQgIAYgCALQgFAnAcAVIifAAIAfgZQAWgXAOgoIBslLQAKgggCgOQgCgTgZgPIB1AAQAjACAOAOQAJAIAMAdIB5FmQAKAcAPAWQAUAbAaALgAgsBeQA+ADAxAxIACADIAOApQAKAaANAJQANAKAaAAIAKAAQgYgBgMgJQgNgJgKgaIgOgpIgCgDQg0g0hCAAIgGAAgAhHjLQgBAPgIAXIhsFLQgOArgYAaIANAAQAYgaAOgrIBslLQAIgXABgPQACgSgHgNIgNAAQAHANgCASgAhUBHIgMAEIgCAHIAbgLQAagMAfgBIgHAAQgiAAgdANgAgYiSIBCDTIAPAEIhLjrgAhZA5QAagLAfgCQAdgCAaAGIg2irg");
	this.shape_1.setTransform(-1.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("AB2D5IgagKQgJgEgHgFQgbgZgOgsIh4llIgLgaQgHgMgKgGIgKgIQAbADAMAOQAHAIALAbIB3FlQAKAdAQAWQAUAbAZAKg");
	this.shape_2.setTransform(16.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AAEA/IgJgHQgSgSAEgiQABgHASg3IATgEQgTA3AAALQgFAnAaAUg");
	this.shape_3.setTransform(-11.3,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AAOg7IAJAdIgZBWIgUAEg");
	this.shape_4.setTransform(-6.1,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-25,57.2,50);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("ABZDmQgUgHgQgSQAigEAVggQATgfgBgqQgBgogUgaQgTgbgigHQgKgDgPgBQAWgBAQAFQAiAHATAbQAUAaABAoQABAqgTAfQgVAggiAEQAPASAVAHQAMAEANABIgHAAQgQAAgPgFgAg3DrQgjAAgRgNQgUgPAAgkIAAlWQAAgYgCgNQgCgPgHgLIAMAAQAIALACAPQACANAAAYIAAFWQAAAkAUAPQAQAMAfABgAAJgkQAPgCAQgIQATgKAKgSQALgSABgXQABgjgUgXQgUgWgegDQAigCAYAWQAZAYgBAnQgBAXgLASQgLASgSAKQgTAKgTAAIgGAAg");
	this.shape.setTransform(-6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("AAvD1QgpgMgTgrQAnAIAYgfQAWgcgBgrQgCg/gygVQgngPgoAQIgBCdQAAA6AqAVIhOAAQgwAAgUgXQgRgTAAgkIAAlWQAAgjgGgPQgHgOgWgOIDzAAQA3AAAlAYQAsAcACA5QABAmgVAeQgVAcghALQA5AFAiAhQAjAiACA3QACAzgcApQgZAmgpAQQgYAKgXAAQgQAAgQgFgAgNgIQANABAKADQAiAHATAbQAUAaABAoQABAqgTAfQgVAggiAEQAQASAUAHQASAHAUgCQgNgBgMgEQgVgHgPgSQAigEAVggQATgfgBgqQgBgogUgaQgTgbgigHQgOgEgPAAIgHAAgAirjQQACANAAAYIAAFWQAAAkAUAPQARANAjAAIAIAAQgfgBgQgMQgUgPAAgkIAAlWQAAgYgCgNQgCgPgIgLIgMAAQAHALACAPgAgcjGQAcADAUAWQAUAXgBAjQgBAXgLASQgKASgRAKQgQAIgPACQAWACAUgMQASgKALgSQALgSABgXQABgngZgYQgWgUgbAAIgHAAgAg8iyIAAB6QAYAOAegRQAfgSABgnQABglgbgUQgPgLgSAAQgNAAgOAGg");
	this.shape_1.setTransform(-1.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("AgbBmIAMgKQAUgQAMgXQAMgZgBgcQgCg1gmgcQgPgOgTgIQApAJAWAXQAcAbACAsQABAjgTAeQgTAbgdAMg");
	this.shape_2.setTransform(13.5,-14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AgaB5IAHgHQAbgUAQghQARgjgBgmQgChDgwgjQgQgOgVgKQAvAJAcAiQAcAhACAyQADA5glAsQggApgxAJQARgHAOgLg");
	this.shape_3.setTransform(17.7,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AAKByQgIgDgHgIQgYgYAAgqIAAiVQAKgDAJAAIAACOIABAhQAIAnAfARQgMAAgIgCg");
	this.shape_4.setTransform(-3.3,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66322F").s().p("AgIA3IAAhsQAIgBAJABIAABqQgHACgEAAIgGAAg");
	this.shape_5.setTransform(-5.4,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-25.1,47.2,50.2);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CA00").s().p("AB6EFQg1geg0hSQgUgkgeg3IgxhaIgJgPIB/iiQAggqgVgfIANAAQAVAfggAqIh/CiIAIAPIAyBaQAcA3AXAkQA0BSAzAeQAkAVAsABIgFAAQgwAAgngWgAjWC7IAFgLQAIgXAAgeIAAlWQgBgggGgUIgGgLIAOAAIAEALQAIAUgBAgIAAFWQAAAegHAXIgEALg");
	this.shape.setTransform(-4.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66322F").s().p("AAcD2QgmgmguhNIhWiaIAACTQAAA1AeAZIiyAAQANgLAHgTQAHgUAAgcIAAlWQAAgdgHgSQgFgSgOgNICuAAQgPAMgFATQgHAUAAAbIAACZIB6iZQAUgbgGgUQgFgRgcgOICkAAIiYDMQBQCWAtA+QBoCQBZAEQhHAdg7AAQhNAAg4gzgAgKjQIiBCiIAIAPIAyBaQAeA3AWAkQAyBSA0AeQAqAYAzgCQgsgBgkgVQg0gegyhSQgWgkgfg3IgxhaIgIgPIB+iiQAhgqgWgfIgLAAQAUAfgeAqgAkBkOQAHAUAAAgIAAFWQAAAegIAXIgEALIANAAIAFgLQAHgXAAgeIAAlWQAAgggHgUIgFgLIgNAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66322F").s().p("ABKDzQg/gzhDhuQgXglhBh0ICZjMIACAAIAMAHIiUDFQBMCIAgAwQBWCBBLAiQgigGgkgbg");
	this.shape_2.setTransform(13.3,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66322F").s().p("AgVgSQAAgcAGgSQAGgSAMgNIATAAQgPANgGASQgEASAAAcIAABbIgSAXg");
	this.shape_3.setTransform(-10.4,-20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66322F").s().p("AAFBXQgbgYAAg2IAAhfIASAjIAAA8QAAA1AcAZg");
	this.shape_4.setTransform(-10.2,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-29.8,58.3,59.6);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A7029").s().p("AAvBcIAAhqIgjBFIgWAAIglhFIAABqIgkAAIAAi3IAkAAIAvBiIAwhiIAkAAIAAC3g");
	this.shape.setTransform(34.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A7029").s().p("AgwBKQgNgNgDgSQgDgMAAgfQAAgeADgMQADgSANgNQATgTAdgBQAdABAUATQAMANAEASQADAMAAAeQAAAegDANQgEASgMANQgUATgdAAQgdAAgTgTgAgWgzQgFAHgCAJQgCALAAAYQAAAaACAKQACAJAFAGQAJALANAAQANAAAKgLQAFgGACgJQACgLAAgZQAAgYgCgLQgCgJgFgHQgJgKgOABQgNgBgJAKg");
	this.shape_1.setTransform(15,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A7029").s().p("AAcBcIg/hfIA6hYIArAAIg+BXIBEBggAhHBcIAAi3IAkAAIAAC3g");
	this.shape_2.setTransform(-0.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A7029").s().p("AgwBKQgNgNgDgSQgDgMAAgfQAAgeADgMQADgSANgNQATgTAdgBQAdABAUATQAMANAEASQADAMAAAeQAAAegDANQgEASgMANQgUATgdAAQgdAAgTgTgAgWgzQgFAHgCAJQgCALAAAYQAAAaACAKQACAJAFAGQAKALAMAAQAOAAAJgLQAFgGACgJQACgLAAgZQAAgYgCgLQgCgJgFgHQgJgKgOABQgNgBgJAKg");
	this.shape_3.setTransform(-19.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A7029").s().p("AgwBKQgMgNgEgSQgDgNAAgeQAAgeADgMQAEgSAMgNQAUgTAcgBQAaAAASAPQATAQAFAcIglAAQgGgbgZABQgNgBgIAKQgGAHgBAJQgCALAAAYQAAAaACAKQABAKAGAGQAIAJANABQAZAAAGgbIAlAAQgFAcgTAQQgSAOgaAAQgcAAgUgTg");
	this.shape_4.setTransform(-36.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-9.4,85.8,18.8);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A7029").s().p("AAvBcIAAhpIgjBEIgXAAIgjhEIAABpIgkAAIAAi3IAjAAIAvBiIAwhiIAjAAIAAC3g");
	this.shape.setTransform(82.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A7029").s().p("AA5BcIAAi3IAlAAIAAC3gAhdBcIAAi3IAkAAIAABFIAkAAQAaAAAQARQAQAOAAAZQAAAagQAQQgQAQgaAAgAg5A8IAhAAQANAAAHgHQAFgHAAgMQAAgLgFgHQgHgHgNAAIghAAg");
	this.shape_1.setTransform(59.8,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A7029").s().p("AhCBcIAAi3IBJAAQAaAAAPAOQAQAOAAAXQAAAagXANQAKADAFAFQALAMgBAUQABAYgPAOQgQAPgaAAgAgeA8IAlAAQAKAAAHgGQAGgGAAgLQAAgLgGgFQgHgHgKAAIglAAgAgegQIAiAAQAMAAAFgGQAHgFAAgLQAAgKgHgFQgGgFgLAAIgiAAg");
	this.shape_2.setTransform(39.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A7029").s().p("AgwBKQgNgMgDgTQgDgMAAgfQAAgeADgMQADgSANgNQATgUAdAAQAeAAATAUQANANADASQADAMAAAeQAAAfgDAMQgDATgNAMQgTAUgegBQgdABgTgUgAgWgyQgFAFgBAKQgCALgBAYQABAZACALQABAKAFAFQAJAKANAAQAOAAAJgKQAFgGACgJQACgLAAgZQAAgYgCgLQgCgJgFgGQgJgKgOAAQgNAAgJAKg");
	this.shape_3.setTransform(21.6,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A7029").s().p("AgqBPQgSgPgFgcIAkAAQAGAbAXAAQAOgBAIgGQAIgIAAgKQAAgagcABIgWAAIAAgcIAWAAQAMgBAHgFQAGgGAAgMQAAgKgHgHQgHgFgMAAQgXAAgHAaIgkAAQAFgcASgPQASgPAZAAQAbABASAOQARAOAAAXQAAAagYANQAbALAAAeQAAAZgSAOQgTAPgdAAQgYAAgSgOg");
	this.shape_4.setTransform(4.5,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A7029").s().p("Ag7B1IAAi2IB3AAIAAAgIhTAAIAAApIBHAAIAAAhIhHAAIAAAtIBTAAIAAAfgAAMhUIAAghIAdAAIAAAhgAgshUIAAghIAeAAIAAAhg");
	this.shape_5.setTransform(-11.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A7029").s().p("AhBBcIAAi3IBGAAQAcAAARARQAQAQAAAZQAAAYgQAOQgRARgcAAIgiAAIAABGgAgdgIIAgAAQAMAAAIgHQAHgGAAgMQAAgMgHgGQgIgIgMABIggAAg");
	this.shape_6.setTransform(-27.7,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A7029").s().p("Ag7BcIAAi3IB3AAIAAAhIhTAAIAAArIBHAAIAAAeIhHAAIAAAtIBTAAIAAAgg");
	this.shape_7.setTransform(-44.5,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A7029").s().p("AhCBcIAAi3IB5AAIAAAhIhUAAIAAAkIAkAAQAbAAARARQAQAOAAAZQAAAagQAQQgRAQgbAAgAgdA8IAiAAQAMAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgMAAIgiAAg");
	this.shape_8.setTransform(-61.3,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A7029").s().p("AgwBKQgMgMgEgTQgCgLAAggQAAgeACgMQAEgSAMgNQAVgUAbAAQAaAAASAPQATAPAFAdIglAAQgHgagYAAQgNAAgIAKQgGAFgBAKQgCALAAAYQAAAZACALQABAJAGAHQAIAKANgBQAZAAAGgaIAlAAQgFAdgTAPQgSAOgaAAQgbABgVgUg");
	this.shape_9.setTransform(-83.9,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.7,-11.8,181.5,23.8);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.partLogo();
	this.instance.setTransform(-116.5,-40.1,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-40.1,234,69.3);


(lib.Symbol79 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.partLogo();
	this.instance.setTransform(-130,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-38.5,260,77);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AgSB+IAAgoIAmAAIAAAogAgPA6IgEi3IAlAAIgCC3g");
	this.shape.setTransform(37.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E13833").s().p("AgfB6QgOgGgKgLQgJgKgGgQQgFgQAAgPIAAhgQAAgOAFgQQAEgNAKgMQAJgKAPgHQAPgIASAAQAeABAUAQQASAPAHAYIgoAOIgDgLIgHgJQgEgEgHgCQgFgDgJAAQgHAAgHADQgIAFgDAEQgFAFgCAGQgCAIAAAGIAABjQAAAGADAJQACAIAEAEQAEAFAIAEQAGAEAIgBQAMAAALgIQAJgHACgOIAoANQgGAbgUAOQgUAPgcABQgSAAgPgHg");
	this.shape_1.setTransform(24.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E13833").s().p("AgUh9IAmgBIBLD8IgtAAIgNg3IhFABIgPA2IgrABgAgZAiIAxAAIgYhmIgBAAg");
	this.shape_2.setTransform(5.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E13833").s().p("AhMh9IBMgBQAlAAARATQASATAAAgQAAAQgGANQgHAOgRAHIAAADQAJADAGADQAHAGAEAHQAFAIABAJQADAKAAAIQAAAlgUASQgTAUghAAIhQAAgAghBXIAjAAQAKAAAGgDQAGgDAFgFQAEgGABgHIACgOQAAgQgIgKQgIgKgTAAIgjAAgAgigVIAiAAQAPAAAJgJQAIgLAAgOQAAgPgJgJQgIgJgQAAIghAAg");
	this.shape_3.setTransform(-13.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E13833").s().p("AhRh+IAqAAIAABrIAUAAIALgBQAGgCAEgEQAFgEAEgHQAFgGADgMIAShGIAoAAIgTBKQgFAUgJAMQgIALgMAFQAPADAJAMQAIAMAFATIAVBSIgqABIgThIQgGgYgKgGQgIgIgOAAIgWAAIABBuIgqAAg");
	this.shape_4.setTransform(-31.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-12.9,80.1,25.9);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXB4IAAktICvAkIhwD1IAABSg");
	this.shape.setTransform(-33.9,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An4DUIg0nmIQlA2IA0Hvg");
	this.shape_1.setTransform(0,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-37.2,111.5,74.5);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AiLAuIg0i2IAGhTIDyBHIg2CvIC9DBg");
	this.shape.setTransform(-32.5,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E13833").s().p("ApvlSITiBUIACJMIzpAFg");
	this.shape_1.setTransform(0,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-50.3,126,100.7);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AhihJIAngHIAdCdIAAABIABAAIAxisIAkgHIArDrIgnAHIgciYIgBAAIgxCnIgkAGgAgvhmQgMgFgGgFQgHgHgFgIQgEgIgCgIIAegFIADAHQACADAEADIAHAFQAEABAGAAQAFgBAEgEIAGgGQACgEABgEQABgEgBgEIAbgGIgBARQgBAJgFAJQgFAKgGAGQgJAHgNACIgMABQgHAAgGgBg");
	this.shape.setTransform(62.6,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B8B30").s().p("Ah6hjIAmgHIASBeIAjgGQARgDAOACQAOADAKAIQAKAHAHALQAHAMACAPQAIAlgRAVQgQAWgeAGIhKAOgAgbARIggAGIAMBGIAigGQAOgDAIgLQAGgLgDgRQgDgQgJgIQgFgFgLAAIgLABgAApiBIAmgHIAsDrIgnAIg");
	this.shape_1.setTransform(40.5,-4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B8B30").s().p("AhyhkIAlgHIBPB7IACAAIAeiPIAmgHIArDrIgmAHIgaiJIgBABIgXBlIgbAFIg4hXIgBABIAZCIIgnAHg");
	this.shape_2.setTransform(16.8,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B8B30").s().p("AhihnIAngHIAdCdIABAAIAxisIAkgGIArDrIgnAHIgciZIgBAAIgxCnIgkAHg");
	this.shape_3.setTransform(-4.5,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B8B30").s().p("AhXhqIB8gWIAGAkIhUAPIAKA7IAggHQAUgDANACQAPADAKAIQAKAHAHAKQAHAMADAQQAHAkgQAWQgQAWghAGIhIAOgAAGAJIgeAHIANBGIAegGQASgDAHgLQAGgMgDgQQgDgQgKgIQgHgGgLAAIgKABg");
	this.shape_4.setTransform(-22.9,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B8B30").s().p("Ah0hnIAngHIASBjIAZgEIgGgeQgCgPABgNQACgNAHgMQAFgLANgJQALgHASgEQASgDAOADQAPADAJAIQAKAHAHANQAGANADAPIASBfQAHAjgQAWQgPAWghAGQgSADgOgDQgOgDgLgJQgHgIgHgNQgHgQgCgNIgGgeIgZAEIATBnIgnAHgAAVhcQgIABgHAEQgFAFgBAFIgDAMIAAAMIAQBfQADAQAJAJQAKAJARgDQAOgDAGgJQAHgJgCgSIgThiIgDgLQgDgHgFgDQgEgEgHgDIgIgBIgHABg");
	this.shape_5.setTransform(-43.8,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B8B30").s().p("AhUBrQALgIAFgGQAHgIACgKQADgKAAgNQgBgOgEgVIgXiAIB+gXIArDrIgmAHIgljGIg0AJIAQBWQAGAcAAAVQABAVgFAQQgEAPgLALQgKAKgTAIg");
	this.shape_6.setTransform(-64,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-28.2,145.1,56.5);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtggoIZwlDIBQHuI7ADpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-36.4,173,72.9);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AuVhxIbUlNIBXJRI8rEsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-44.8,183.7,89.6);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AmMFhIAcrfIL8CWIgZJng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-38.3,79.4,76.7);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkgksIJxCvIgICuQgIC1ACAYQACAZlJAOQimAGimADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-30.2,67.6,60.4);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AAtDCIAWj1IgBAAIgXAjIgVAhIhmCmIg6gEIAfl5IA+AFIgVD7IABAAIAAABIAcgtIB3jEIA6AFIghF4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-20,28,40);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AgSBcIAqgBIABArIgqACgAgYiGIApgBIABDFIggABg");
	this.shape.setTransform(61.9,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#78B926").s().p("AhbhfIAsgBIAFC0IAAAAIABAAIBUi3IAqgBIAHEOIgtABIgEivIgBAAIhUCyIgqABgAgdh3QgMgGgHgJQgHgIgDgKQgEgKAAgJIAhgBIADAJQABAFAEADQADAEAFADQAEACAGAAQAFAAAEgDQAEgCAEgFQADgDABgFIACgJIAhgBQgBALgDAIQgDALgGAIQgHAJgKAGQgMAHgNAAIgCAAQgOAAgLgFg");
	this.shape_1.setTransform(45.6,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#78B926").s().p("AhOiEICWgEIABApIhpADIACBIIBZgCIACAmIhaADIACBLIBogDIACAqIiVAEg");
	this.shape_2.setTransform(25.9,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78B926").s().p("Ag1B7QgXgRgGgdIAqgQQADARAMAJQAMAJANgBQASAAAJgLQAKgMAAgTIgDgQQgBgIgFgFQgEgFgHgDQgIgDgJAAIgUAAIgBgjIAVgBQAPAAAJgKQAJgLgBgSQAAgOgJgKQgJgJgPABQgQAAgKAKQgKAKgDAOIgqgOQAGgbAVgSQAVgQAhgBQAkgCAUASQAVASABAkIgBAPIgEARQgDAIgGAIQgFAHgKAEIAAACQAKAEAGAEQAGAGAFAJQAEAJACAJIACASQAAASgFARQgHAQgKAKQgMALgOAFQgPAGgTABIgCAAQgfAAgVgPg");
	this.shape_3.setTransform(6.2,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#78B926").s().p("Ag4BlIAPAAQAJAAAGgFQAGgEAFgNIADgLIhMjIIAugBIAvCQIACAAIAmiTIAsgBIg+DWQgGAVgGAKQgHALgIAHQgGAHgIABQgJADgLAAIgWABg");
	this.shape_4.setTransform(-12.9,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#78B926").s().p("AhSiFIBSgCQAQgBAQAFQAPAEAMAKQAMALAFAPQAHARAAAUQAAASgEAPQgFAPgKAKQgIALgQAHQgPAHgUABIgmABIACBoIgsABgAglhdIADBUIAjgBQAUgBAJgLQAKgNgBgTQAAgUgLgKQgJgKgTAAg");
	this.shape_5.setTransform(-31,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#78B926").s().p("AhvBJIAUgEQAIgIAEgKQAFgKADgOQACgMABgUIABicICUgEIAHDmIAVgBIADBgIgnABIgBg4IiPAEIABA4IgmABgAgah5IgCBzQAAAPgBAOQgCAOgDALQgCALgGAJIBWgCIgFi9g");
	this.shape_6.setTransform(-53.1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,-22.6,128.8,43.3);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AstjgIbfioQhjLNgMgBI70BFg");
	this.shape.setTransform(-0.5,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-45.1,189.3,78.7);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AhZARICUgJIgqg9ICih4IhNB1IB0BfIiHCEIksADg");
	this.shape.setTransform(4.5,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-22.5,43.6,34.9);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsNBZQA6j0AAgEIYciuIgnKQI5qALIA7j1g");
	this.shape.setTransform(-3.4,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-39.8,168.3,66.9);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirBpQABgHAug8IAtg5IC+gHIhGhaQCMBZgKgCQgGgBg5BIIg4BLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-11.7,34.5,23.5);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AASBbIgShCIgkA7IgfgEIAHgKIAxhJIgfhbIAfAEIAQA8IAgg2IAfAEIg0BQIAhBfg");
	this.shape.setTransform(53.8,6.7,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E13833").s().p("AAhBdIAWivIAbAEIgVCugAgeBVIgzgGIAViuIAcADIgJBGIAZADQANABAHAGQAJAEAGAIQAFAGACAJQABAKgBAMQgEAbgPAMQgKAKgRAAIgKgBgAgzA4IAYACQANABAGgGQAHgGABgNQAAgLgDgJQgFgHgNgCIgXgCg");
	this.shape_1.setTransform(36.4,4.6,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E13833").s().p("AAcBcIAMhlIgBAAIglBCIgRgCIgUhJIgBAAIgNBlIgbgDIAWivIAaADIAcBoIAAAAIAzheIAaADIgWCvg");
	this.shape_2.setTransform(16.3,2.1,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E13833").s().p("AAQBbIAOhxIAAAAIhFBqIgZgDIAViuIAcADIgPB0IAAAAIABAAIBFhtIAZADIgVCug");
	this.shape_3.setTransform(-1.8,0,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E13833").s().p("AgCBaIg0gGIAWiuIBXAKIgDAbIg8gHIgFArIAWADQANABAJAGQAJAEAGAGQAFAIACAKQACALgBAKQgEAcgPALQgMAKgSAAIgHgBgAgXA9IAXACQALACAHgHQAGgHACgMQABgMgFgHQgEgIgNgBIgVgDg");
	this.shape_4.setTransform(-17.9,-2.2,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E13833").s().p("AAOBeQgNgBgHgGQgJgFgFgIQgFgHgBgMQgCgMABgKIADgXIgRgCIgKBNIgbgEIAWiuIAbADIgJBKIASACIACgVQACgMAEgJQADgIAIgIQAFgGAJgDQAMgEALACQAOACAIAFQAIAFAGAIQAFAHABALQACAJgBAMIgJBGQgDAagPANQgNAJgSAAIgHAAgAAWg3QgFACgDADQgDAEgCAEIgCAJIgHBGQgBAMACAIQAEAIAMACQAKABAHgGQAHgFABgMIAJhJQABgEgBgFIgCgIQgDgFgDgCQgEgDgHgBIgDAAIgHABg");
	this.shape_5.setTransform(-35.2,-4.3,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E13833").s().p("AATBaIATiUIgmgEIgHA/QgCAXgEANQgEAQgHAJQgGAKgKAFQgIAFgOACIgFgYQAIgCAGgEQAFgDAFgHQADgGADgLIARh3IBYALIgWCug");
	this.shape_6.setTransform(-53.9,-6.1,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-17.4,124.3,35.5);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsaBXIATlOIYiChIhYFNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-24.8,159.1,49.6);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13833").s().p("AtpClIA0oEIafERIgwGug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-35.2,174.9,70.6);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AhAhXIBpgOIADAdIhIAKIAGAzIA/gJIADAbIg/AIIAHA1IBJgKIADAeIhnAOg");
	this.shape.setTransform(65,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B8B30").s().p("AgMg8IgrAEIgDgcIBxgPIAEAdIgrAFIAVCgIgfAFg");
	this.shape_1.setTransform(51.1,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B8B30").s().p("AhBhcIAfgEIAJBLIAagDQAQgCAKADQAMADAIAGQAIAHAEAIQAFAJACANQADAdgNARQgOARgbADIg4AIgAADAEIgYADIAHA5IAZgDQAOgDAFgIQAGgIgCgOQgBgNgIgHQgGgFgJAAIgHABg");
	this.shape_2.setTransform(39.6,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B8B30").s().p("AhQA6IAMgEQAGgGACgIQADgGABgLQABgKgBgNIgKhtIBngNIAVCgIAPgCIAIBDIgbAEIgEgnIhlANIAGAnIgbADgAgjhUIAIBlIgBASQgCAJgDAGIA8gIIgRiEg");
	this.shape_3.setTransform(25.2,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B8B30").s().p("AgXBNIALgCQAGgBAEgDQACgEADgJIABgIIhBiHIAggEIArBhIABAAIARhpIAegEIgcCaQgEAPgDAIQgDAJgGAEQgEAGgHACQgHADgEAAIgQACg");
	this.shape_4.setTransform(9.3,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B8B30").s().p("AhBhXIBjgNIADAdIhDAJIAGAuIAZgDQAQgCAKADQAMADAIAGQAIAHAEAIQAFAJACANQAEAdgOARQgOARgaADIg6AHgAADAIIgYADIAHA5IAZgDQAOgCAGgJQAFgIgCgOQgBgMgIgHQgGgFgKAAIgGAAg");
	this.shape_5.setTransform(-2.9,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B8B30").s().p("AglhfIAegEIBNC1IghAFIgQgoIgzAHIgGAqIghAEgAgSg2IgJBPIAlgFIgahKg");
	this.shape_6.setTransform(-16,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B8B30").s().p("AgcBaQgRgJgGgVIAcgOQADALAJAGQAKAGAIgCQANgBAFgJQAHgJgCgNIgDgLQgBgFgEgEQgEgEgFgBQgGgCgHABIgMACIgEgZIAPgCQALgBAFgIQAGgIgDgMQAAgKgHgHQgIgFgKABQgKACgHAHQgGAHgCALIgegGQACgUANgOQAOgOAXgCQAZgEAQALQAQAMADAYIAAALIgBAMIgGAMQgDAFgHAEIAAABQAIADAFAEQADAAAFAHIAGAMIACANQACAOgDALQgCALgIAJQgHAIgKAFQgKAFgNACIgLAAQgPAAgNgHg");
	this.shape_7.setTransform(-31.2,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4B8B30").s().p("Ag/hXIBogNIAEAdIhJAJIAGAzIA/gIIADAaIg+AJIAGA0IBJgJIADAdIhoANg");
	this.shape_8.setTransform(-49.9,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B8B30").s().p("AhFhWIAggEIAKBQIA0gHIgKhQIAfgEIAYC8IgfAEIgLhSIgzAHIAKBSIggAEg");
	this.shape_9.setTransform(-64.5,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-18.3,143.1,36.8);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Asng2IZ3kiIhfHzI5AC+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.8,-34.5,169.6,69.1);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8B30").s().p("AuJhMIcTlzIg0LBI7fC+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-44.8,181.3,89.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AgSBaIApgBIABAqIgpABgAgXiCIAngBIACC/IggABg");
	this.shape.setTransform(68.7,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#78B926").s().p("AhZiAIArgCIAFCvIABABIAAAAIBSiyIApgBIAHEGIgsACIgEirIgBAAIhSCtIgpABg");
	this.shape_1.setTransform(52.8,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#78B926").s().p("AhYiBIAsgBIADBvIAVgBIAMgBQAGgCADgFQAGgDAEgIQAFgIACgLIAShJIAqgCIgTBPQgEATgJAOQgJANgMAEQAQAEAJALQAKAOAEASIAZBWIgtABIgUhKQgHgZgLgHQgJgHgOAAIgXAAIADBzIgsABg");
	this.shape_2.setTransform(32.7,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78B926").s().p("AhRiBIBRgDQAkAAATASQAUATAAAiQAAARgGAOQgGANgTAKIAAACQAKACAHAEQAGAFAFAJQAFAGACALQADAKAAAIQABAmgUAVQgVAVghABIhTACgAACANIgkABIACBNIAlgBQAJAAAIgEQAGgDAFgGQAEgFABgIQACgHgBgIQAAgRgJgKQgHgJgRAAIgEAAgAgkhbIABBFIAjgBQARAAAIgKQAIgKAAgQQgBgQgJgJQgIgIgRAAg");
	this.shape_3.setTransform(12.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#78B926").s().p("AggCAQgQgHgKgLQgKgMgFgQQgFgQAAgRIgDhiQAAgMAEgQQAEgPAJgMQAJgMAQgIQAPgIAWgBQASAAAQAHQAQAGAKAMQALALAFAPQAEAMABARIADBmQAAATgFAQQgGAQgKAKQgLALgOAGQgQAHgRAAIgDAAQgSAAgOgGgAgBhbQgLAAgHAFQgHAEgFAGQgEAGgBAHQgCAGAAAHIADBjQAAASAKAOQAJANATgBQAOAAALgLQAKgKAAgSIgDhrIgCgLQgCgHgEgGQgEgGgIgEQgGgEgJAAIgBAAg");
	this.shape_4.setTransform(-7.9,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#78B926").s().p("AgdCAQgQgGgKgLQgLgLgFgPQgFgPgBgSIgDhlQAAgSAEgMQAFgPAKgMQAKgMAPgHQAOgHAVgBQAfAAAUAQQATAPAIAaIgpAOIgEgKQgDgGgEgEQgFgEgHgDQgHgCgGAAQgKAAgGAEQgIAEgEAFQgEAFgCAIQgCAGAAAHIADBoQAAAHACAIQADAHAFAHQAFAFAHADQAIADAGAAQAOAAAKgJQAKgIACgOIAqAMQgFAbgVARQgVAQgdABIgDAAQgRAAgOgGg");
	this.shape_5.setTransform(-26.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#78B926").s().p("Ag3BiIAPAAQAJgBAFgDQAGgFAFgMIADgKIhKjEIAtgBIAuCNIACAAIAliPIAqgBIgeBpIgeBnQgFATgHALQgHAMgHAGQgFAFgJADQgJACgKABIgWAAg");
	this.shape_6.setTransform(-45.8,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#78B926").s().p("AgUhaIg6ACIgBgoICegEIABAoIg6ABIAGDfIgqABg");
	this.shape_7.setTransform(-63.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-15,142.3,30);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AtdiiIcNjkIhwKnI7vBmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-39.1,189,78.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsmhSIZ/jzIgnJbI6KAwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-32.6,171.5,65.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZgZICtgwIgGhNIA0BKIitBKICHBmIldAzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-15.1,38.8,30.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78B926").s().p("AkJCIQASgDChiLICCgKIgGhWQgBgLBygqQA6gVA5gTIilBkIBPBzIiPALIAcBOIlFBXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-19.6,53.3,39.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dgAhFhGQgeAdABApQgBApAeAdQAdAdAoAAQApAAAdgdQAegdgBgpQABgpgegdQgdgdgpAAQgoAAgdAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihI1QirgwhJjJQhJjIBDjpQBDjqCpiDQCoiECpAxQCrAxBJDJQBJDIhDDpQhDDqipCDQh6Bgh6AAQguAAgvgOg");
	this.shape.setTransform(44.3,57.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,88.9,115.9);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABYHAQg5gGgzgnQgFgDgnglQgZgXgagHQgbgIghAHIg6AKQhCAEg0gYQgegOgYgcQgTgVgTghQguhQgCg7QgCgeAMglIAXg/QAKgaAKgpIAShEIBLkPINGDxIhQEMIgVBDQgOAogFAbIgPBDQgKAmgQAZQghAxhSArQgjASgaAIQgaAIgYAAIgSgCg");
	this.shape.setTransform(49.3,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,98.6,90);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrF5QhTgXgqhNQgqhMAYhTIBlleQAXhTBNgrQBKgqBTAYQBTAYAqBMQArBMgYBTIhlFfQgYBThMAqQgxAbgyAAQgdAAgegJg");
	this.shape.setTransform(26,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.1,77.3);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACIBNIkjhSQgNgDgHgNQgHgMAEgOIACgGQADgOANgGQAMgHAOAEIEiBSQAOAEAHAMQAGAMgEAOIgBAGQgEANgMAHQgIAFgJAAIgJgCg");
	this.shape.setTransform(18.1,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,36.2,15.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AozbiQgigSgbglQgUgcgVguQgyhvAChTQABgrARg2IAghcQANgmAQg7IAZhiICToPQBclGBRkXIBOkIIAuilQAchiAgg8QAnhHBCgzQAfgYBIgkQA+gkASgxIBGjBIBEjAIBLjSIAQgwQAKgeAJgRQAIgNATgUQAWgWAHgLQALgRAFgeIAIgyIDLA7MgPmA2eQgfgKgoAMIhFATQgVADgTAAQg2AAgtgXg");
	this.shape.setTransform(71.4,178.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.9,357.1);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b12
	this.b2 = new lib.Symbol179();
	this.b2.setTransform(14.8,-9.6);

	this.b1 = new lib.Symbol178();
	this.b1.setTransform(-8.6,-13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(1));

	// lips
	this.lips = new lib.Symbol180();
	this.lips.setTransform(5,27.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D05B39").s().p("AgWAIIgHgBQAHABAEgDQATgLAbgBIACAAQgIAGgKABQgIABgKAAIgEABIgJAGg");
	this.shape.setTransform(1.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D05B39").s().p("AAUAPIgEgBIgGgIIgEgCQgHgDgJgDQgJgGgGgHIABAAQAYAJAQAQQAEAFAGABg");
	this.shape_1.setTransform(-4.7,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC8257").s().p("AAHATIgFAAIgLgCIgEgBIgBAAIgNgEQgOgFgKgGIgPgHQgIgFgBgHQAmgBAlAGQAoAGAkAJQgEAIgJABIgRAFQgOADgQAAIgJAAg");
	this.shape_2.setTransform(-1.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F09466","#F09466","#F2A365","#F3A965"],[0,0.016,0.592,1],-0.4,12,3.1,-12).s().p("AgDB4QgKgBgPgFQgOgGgJgFIgQgKQgHgEgCgIIAAgFQAAgDADgEIAEgFQASgLAOgSQAOgSAFgRIAih5IAOAEQAHABAIgBIgBB9QAAAUAIAVQAIAUANARQADADAAADQACADgBAEQAAADgCACQgEAHgIACIgRAEQgPAFgQAAIgSgCg");
	this.shape_3.setTransform(-1.5,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAF3E6").s().p("AAAAJQgEgBgCgDQgDgDABgCQABgEADgDQADgCACABQAEAAADADQACAEgBACQAAAEgDACQgDACgDAAIAAAAg");
	this.shape_4.setTransform(11.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAF3E6").s().p("AAAAGQgGgBABgFQABgGAEABQAHABgBAFQgBAFgFAAIAAAAg");
	this.shape_5.setTransform(10.6,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A282B").s().p("AgBAQQgGgBgFgGQgDgFABgFQABgHAFgDQAGgFAEABQAHABADAGQAFAFgCAFQAAAGgFAEQgFAEgFAAIgBAAg");
	this.shape_6.setTransform(9.4,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#349BB3").s().p("AgCAYQgKgBgHgIQgGgJACgIQABgKAIgHQAJgGAIACQAKABAHAJQAGAIgCAIQgCAKgIAHQgHAFgHAAIgCgBg");
	this.shape_7.setTransform(9.4,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAF3E6").s().p("AAKA/IAAAAIgDAAQgWgEgXADIgHgGIAAAAIgBgBIgBgBQgagZAFgiQAEgdAYgRQAXgRAbAEQAdAEARAXQARAYgEAbQgEAdgaASIgCACIgGADg");
	this.shape_8.setTransform(13,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAF3E6").s().p("AAAAJQgEAAgCgDQgDgEABgCQABgJAIABQAEABACADQADADgBACQAAAEgEADQgCABgDAAIAAAAg");
	this.shape_9.setTransform(-11.5,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAF3E6").s().p("AAAAGQgDgBgBgBQgCgDABgBQABgGAEABQAHABgBAEQgBAGgFAAIAAAAg");
	this.shape_10.setTransform(-12.6,-1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A282B").s().p("AgBAPQgHAAgEgGQgEgGABgEQACgGAFgFQAFgDAFABQAGABAEAFQAFAGgBAEQgBAHgGADQgEAEgFAAIgBgBg");
	this.shape_11.setTransform(-13.8,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#349BB3").s().p("AgCAYQgKgBgGgIQgHgJACgIQACgKAIgHQAIgGAIACQALABAGAJQAGAIgCAIQgBAKgIAHQgHAFgIAAIgCgBg");
	this.shape_12.setTransform(-13.9,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAF3E6").s().p("AgWA4IgDgBIgBAAIgEgBIgDAAIgNgCIgEgDIgDgEQgTgYAEgcQAEgdAYgRQAXgSAbAFQAdAEARAXQARAYgEAaQgFAlggAPIgBABIgCABIAAAAIgJADQgVgJgVgDg");
	this.shape_13.setTransform(-11,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3A965").s().p("ACkCBQgJgDgHgCIgKgBIgBAAIAAgBIgDAAQgYgEgWADIgFgDQgmgagsgGQgrgHgsANIgFACQgXgJgVgDIgDgBIgBAAIgEgBIgDAAIgDAAQgHgBgKABQgRAAgXAFIAoiOIAXgnIB3gwQAaAWAkAHQAjAGAigLIADgBIBhBsIgHCeQgTgKgRgGg");
	this.shape_14.setTransform(0.3,-2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2A96D").s().p("AA5AOQgUgLgRgDQgLgEgLgDIgCAAIgBAAIgDAAQgXgEgXADIAAAAIgHgGIAAAAIgCgBIgBgBIAKgBQAegDAZAIIASAGQARAGAVANIAIAGg");
	this.shape_15.setTransform(14.7,10.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2A96D").s().p("AALgBIgDAAIgBAAIgCgBIgXgBQgRAAgWADIgJADIAJgDQAWgGAUgCIAIAAQAGgBADABQAcAAAcAJIAJAEIgBABIgCAAIAAABIgIADQgYgKgVgBg");
	this.shape_16.setTransform(-14.5,5.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#853B1D").s().p("AgVBGIASg6QADgNgHgOIAMgRIARgpQgQA+gBBIIgBANg");
	this.shape_17.setTransform(-26.3,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#853B1D").s().p("AgSBHIADgNQAQg+ADhGIAHAqIAIAVQgNALAAAOIABA8g");
	this.shape_18.setTransform(25.5,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F3A965","#F3AA67","#F6B678","#F6BA7E"],[0,0.043,0.616,1],-2.8,11.4,0,-7.6).s().p("AgbByQhqgQhKhBQhLhAgFhWQAfAXBMAWQBOAXBiAPQBfAOBSABQBPAAAkgNQgTAxgtAlQgsAjg9ARQgtAMgvAAQgbAAgbgEg");
	this.shape_19.setTransform(-4.2,43.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E66842").s().p("AghAiQgBgKABgKQADgSAOgQQAOgQASgIIARAoQAEAJgGAEIgFABIgHABQgLABgBANQgBAGAGAOQgXgDgWgIg");
	this.shape_20.setTransform(-32.5,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA744A").s().p("AgKAzQgRgFgOgHIgNgGQgDgOACgPQAEgaAXgSQAWgSAdgDIAEAGIAcBCQAFALgGAEIgGABIgGABQgMABgBANQAAAGAFAOQgYgDgUgIg");
	this.shape_21.setTransform(-34.8,5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E66842").s().p("AgVApQAJgKACgHQADgMgLgFIgGgDQgDgBgCgCQgEgDAHgJIAaghQARANAIATQAJARgDAVQgCAJgEAKIgFAAQgTAAgWgEg");
	this.shape_22.setTransform(30.8,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA744A").s().p("AgvA3QAJgKACgHQADgMgLgFIgGgDQgDgBgCgCQgEgFAHgJIAvg3IAFgEQAbALARAYQAQAXgEAbQgCAPgIAMIgOACQgSADgOAAIgDAAQgUAAgYgEg");
	this.shape_23.setTransform(33.4,15.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC8155").s().p("AgTA3QgZgMgZgTQgKgXABgXQABgZANgVIACgDQAegIAaAEIAJADQASAFAMAKQALAIAFAKIAdBCQAEALgGAEIgFABIgHABQgLABgBANQgBAGAGAOQgngFglgSg");
	this.shape_24.setTransform(-37,4.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC8155").s().p("AhMA+QAJgKACgHQADgMgLgFIgGgDQgDgBgCgCQgEgFAHgJIAvg3IAFgEIAQgJQAOgGARABIAMAAQAbAEAZAQIABAEQAGAYgGAWQgGAYgRATQgTAIgYAFIgOACQgQADgPAAIgEAAQgUAAgYgEg");
	this.shape_25.setTransform(36.3,14.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F09466","#F29C6B","#F5B379","#F6BA7E"],[0,0.31,0.847,1],-9.4,-1.4,9.2,1.4).s().p("AgGBbQglgMgWgaQgKgLgHgOQgLgXABgXQABgaAOgUQAIgMAIgHQAIgHAMgEQATgGAWAHQAUAGARAPQANAMANATIAWAiIAIAJIgdBdQgNADgOAAQgWAAgVgHg");
	this.shape_26.setTransform(-35.7,3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F6BA7E","#F2A06E","#F09466"],[0,0.62,1],-9.5,-1.4,9.1,1.4).s().p("AhcBJIAAhgIAKgIIAfgaQASgPAQgHQATgJAWAAQAYAAAQALQAJAGAHAKQAHALADAMQAHAYgGAWQgGAYgSATQgJALgOAJQgdASgkAAIgDAAQglAAgfgQg");
	this.shape_27.setTransform(35.6,14.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6BA7E").s().p("AhFHBQh2gRhMhNQhPhQAPhgQAGgqAehmQgjAGglgLQgkgMgXgYQgXgagDggQgDgiARgbQAOgWAWgHQATgHAYAHQAUAHARAOQAOANANASIAWAiIAHALIA9jCQAqiEAdhGIBBBKQAWAXAcAPQAcAPAfAEQBEALA3giIBUgyIABAMQAEAwABBnIACCTIADBoIAKgIIAfgYQASgPAQgHQAVgJAWAAQAYAAAQALQAJAHAHAKQAHAKADAKQAHAYgGAZQgGAYgSATQgJAKgOAJQgdASgmABQgnAAgggRIgBA6QgCBAgEAaQgJBBgyAvQgvAthIATQguAMgsAAQgcAAgcgEg");
	this.shape_28.setTransform(0,9.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#853B1D").s().p("AiBCWQghgYgOglQgJgbgCgvIgDgNQgKgyASgxQASgxArgjQglAjgPAtQADgIAHgIQAVgcAjgMQAlgOAjAKQAaAIAXAVQAQAOAXAcICNCiIABAMQgCAdgsAeQg1AkhZACIgMABQhOAAguggg");
	this.shape_29.setTransform(5.7,-37.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#853B1D").s().p("AANA7QgMhSgmiZIglgYIAbgLQAKgzAqghQgSAegOAfQAUgRAagHQAbgHAdAFQgfABgcAMQgZAMgUAUQAIgBAGACQAZAEAVAOQAXAQAKAVIACAEQAKAWgDAZIgNBVQgBATgHAiQgGAmgCARQgJBpAFBnIgkADQAahogRiFg");
	this.shape_30.setTransform(23.6,-15.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#853B1D").s().p("AhpDhQAlhkAThkIAOhFQAJgpAJgcQAXhQAzgsQATAXAeANQhUCJggBJQg3B5gFBsg");
	this.shape_31.setTransform(-17.6,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-55.3,90,110.6);


(lib.Symbol177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.head = new lib.Symbol181();
	this.head.setTransform(1.1,-5.9,1,1,0,0,0,-8.3,59.4);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F6F2E7","#EBE2D5","#CEBAAA","#A28171","#6E413A","#663833"],[0,0.114,0.325,0.608,0.949,1],-3.5,51,7.6,-23.6).s().p("AiGHvIDkvEIAZgaIAQAgIhCO+QgKgBgnABQghACgOgCQgMgCgqACIgfABQgPAAgHgBg");
	this.shape.setTransform(-14.1,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBD8AF").s().p("AAFA2QgmgKgSggQgGgKgCgKIAqguQAjANAqAGIg2Bag");
	this.shape_1.setTransform(-7.1,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBD8AF").s().p("AgaAzIgBAAIgahlQApAGAngBIAbA1QgGALgIAIQgZAYgkAAIgFAAg");
	this.shape_2.setTransform(4.4,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#492927").s().p("AgUgwIApAfQgEAUgJASQgHAPgGANg");
	this.shape_3.setTransform(1.1,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#492927").s().p("AgWAOQgDgSACgWIAwgSIgoBZQgGgQgBgPg");
	this.shape_4.setTransform(-3.6,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663833").s().p("AghA2QgJgWgDgYQgEgSAEgaIADgXQATAFAZAFIAuAEIgDAXQgEAWgJAUQgKAVgQATg");
	this.shape_5.setTransform(-1.3,16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8C49F").s().p("AgfAbQgOgLgMgOIAKgOIBpgmIgwBlQgVgIgUgQg");
	this.shape_6.setTransform(-6.9,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8C49F").s().p("Agvg3IBaBCIAAABIAFARQgOAJgTAIQgUAIgZACg");
	this.shape_7.setTransform(3.8,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F6F2E7","#F4ECDA","#EDDEBA","#EBD8AF"],[0,0.18,0.714,1],-0.7,59.2,11.6,-23.2).s().p("Al9IYQAIhIBlk5QBhktAihDQBLiVBFhFQATgZAQgZIAEgJQARgdAMgdIAiAJQATAFAaAFIAvAEIAjAAQAEAkAGAbIAAABIAFARQAHAZAKAaQAwBaAbCiQAKAzAOEqQAPE5AEAiIgJADg");
	this.shape_8.setTransform(-16.1,65.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE9347").s().p("AgOA4QgmgGgngOIgFhXQAOAFAjgHQAmgHAKABQAMACAkARQAhAQAPgCIgjBVIgYABQgZAAgbgEg");
	this.shape_9.setTransform(3.6,-13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3A965").s().p("AgGHKQhVgMhNgaQhKgYg3ghQAMgaAkhuQAihnARgiQBLiSBHhGQAWgbARgfQAPgeAOghQAUgxAHg0IAEglQACgYgCgeIAAgEIgBgaIAMAFQAgALAlAGQAkAFAjgBIANgBIgJAYIgBAEQgJAXgHAdIgGAkQgJA2AFAzQADAjAHAhQAJAjANAhQAwBXAbCiQAHAmADBrQACB1AEAcQhKAShWAAQhFAAhLgMg");
	this.shape_10.setTransform(-10.4,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-120.6,108.7,241.4);


(lib.Symbol169 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.eyes1 = new lib.Symbol168();
	this.eyes1.setTransform(0.8,12);

	this.timeline.addTween(cjs.Tween.get(this.eyes1).wait(1));

	// lips
	this.lips = new lib.Symbol182();
	this.lips.setTransform(0.8,49);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// Layer 1
	this.h1 = new lib.Symbol170();
	this.h1.setTransform(0,12,1,1,0,0,0,-0.1,47.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC8155").s().p("AhCARQAvAEAbgJQAqgMAQghQADANgFAOQgFALgLAJQgSARgeACIgMABQggAAgWgRg");
	this.shape.setTransform(6.2,47.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#812E1C").s().p("ACXCPIgCAAIgIgCIgCAAIgCAAIgDgBIgDgBIgBAAIgCAAIgBAAIgEgCIgBAAIgCAAIgGgCIgBAAIgDgBIgDgCIgDgBIgJgEIgCgCIgBAAIgCgCIgBAAIgCgCIgDgBIgCgBIgCgBIgCgBIgPgOIgCgCQgHgGgHgKIgGgIIgBgCIgCgDIgFgJIAAAAIgFgNIAAAAIgBgDIgBAAIgBgDIAAAAIgCgHIgCgKIAAAAIgBgEIgCgXIABgNQgIgFgLABQgKAAgIAEIABANIgBAKIAAADIAAAEIgCAKIAAAAIgBADIAAABIAAACIgBABIAAADIAAABIgBACIAAABIgBACIgBACIAAACIgEAJIAAABIgCAFIgBAAIgGANIgOASIgMANIgDACIgFAEIgOAKIgDABIgBACIgCABIgBAAIgCACIgBAAIgCAAIgBABIgCABIgCABIgEABIgCACIgFABIgCABIgIACIgBAAIgDABIgBAAIgBAAIgDABIgDABIgCAAIgIACIgEAAIgLAAQgjAAgfgQQgegQgVgcIAAAAQgLgQgHgSQgEgLgCgNIgBgDIgcAdIgJgMIAAgBIgFgGIABgBIAthGIACgEIAAgBIAIgUQAMgXATgRQAmgjA0gDIAHAAQARAAAOADQAnAJAeAcQAdAcAKAoIADgCQAJgGAKAAQAMAAAJAFIACACQALgpAggdQAhgeArgFIAUgCIATABQAxAHAhAhQASASAKAWIAFALQADAGABAGIAuBHIgBAAIgDAFIAAAAIgBABIAAAAIgDAFIgEAFIgBAAIgBACIAAAAIgEgDIAAAAIgIgJIAAAAIgQgQIgBADQgCANgDAHQgHAUgMARIAAAAQgUAcgeAQQgfAQgkAAIgLAAgACJhwIgJACIgCABIgCAAIgGADIgCABIAAAAIgCABIgGACIgCABIgQALIAAABIgEADIgKAJIAAAAIgKANIgDAEIAAABIgCACIgBACIgCAFIgBAAIgGASIgBAAIAAADIAAAAIgBACIgCALIAAACIgBAHIABAWIAAAFIACAFIADANIABABIADAIIABADIABADIAEAGIABADIABABIABABIADADIAAABIABABIAHAJIAGAGIAIAHIACABIAFAEIAKAGIARAIIACAAIAEABIADABIACABIAGABIABAAIABAAIAAAAIAFABIABAAIAEABIACAAIAEAAIASgBIACgBIACAAIAHgBIABAAIACgBIAAAAIADgBIAAAAIACgBIABAAIACAAIADgBIAAAAIAIgEIAAAAIACgBIABAAIAEgCIABAAIACgBIAEgDIAKgGIAMgMIACgCIABgBIACgCIAHgJIAAgBIAEgFIAAgBIACgDIAEgJIACgDIABgDIAAgBIACgEIACgIIABgFIAAgCIABgBIABgLIAAgQIAAgBIAAgCIgBgHIAAgBIgCgLIgDgGIAAgDIgCgEIgCgEIAAgBIgBgCIgBgCIgCgDIgBgDIAAAAIgBgCIgHgJIgLgNIAAgBIgHgFIAAAAIgLgIIgOgIIgFgCIgCgCIgBAAIgCgBIgEgBIgEgCIgGgBIgMgCIgJAAIgCgBIgFAAIgDABIgGAAIgFABIgDAAIgBAAIgCAAIgCAAgAj6hKIAAABIgCACIgEAFIgEAHIgBABIgBABIgBACIAAAAIgBACIAAABIgHAOIAAADIgCAFIgBACIAAABIAAACIAAABIgBADIAAABIgBACIAAABIAAACIAAACIgBACIAAAEIAAACIAAANIAAABIAAACIABADIAAADIABAEIAAABIAAABIABAGIADAKIABABIADAHIAEAJIAIAMIAJALIABABIABABIACACIABABIADACIABACIABAAIACACIAPALIAMAGIACAAIABABIADABIABAAIAAABIACAAIADAAIABABIABAAIADABIADABIACAAIACABIACAAIACAAIABAAIAEABIABAAIADABIACAAIACAAIAJAAIADAAIAFAAIAAgBIADAAIAJgCIABAAIADgBIADAAIAAgBIACAAIANgEIANgHIACgBIABgBIADgCIABgBIAGgEIADgDIACgBIAAgBIACgBIAKgKIAAAAIACgDIACgDQAIgJAFgNIABgCIAAAAIABgDIADgIIABgDIABgCIACgJIAAgDIAAgDIABgFIAAgQIgBgGIAAgDIAAgBIAAgCIgBgBIAAgCIgBgDIAAgDIgDgIIgEgLIgBgCIgBgCIgBgBIgDgHIgDgFIgIgKIgIgIIgBgCIgBAAIgNgLIgDgBIAAAAIgQgJIgCAAIgIgEIAAAAIgNgEIgBAAIgDAAIgBAAIgDAAIgCgBIgBAAIgDAAIgDAAIgEgBIgGAAIgCABIgGAAIgBAAIgPACIgBAAIgCABIgBAAIgCABIgBAAIgGACIgDACIgDABIgFACIgBAAIgFADIAAAAIgDACIgIAFIgBAAIgBACIgEADIAAAAIgCACIgKAJIgBABIAAAAg");
	this.shape_1.setTransform(0,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F3A965","#F3AA67","#F6B678","#F6BA7E"],[0,0.043,0.616,1],0,13.3,0,-13.2).s().p("AjgA6QhkhJgUh0QAnAZBeAPQBfAQB0AAQB1AABggQQBdgPAogZQgNBJgvA6QguA4hEAjQhRAphbAAQh9AAhjhKg");
	this.shape_2.setTransform(0,70.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D05B39").s().p("AgUALQAUgUAggHIACAAQgJAIgLAGQgKAEgLACIgFACIgJAKIgEAAIgIAAQAIAAAFgFg");
	this.shape_3.setTransform(3.5,35.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D05B39").s().p("AAaAQIgEAAIgJgKIgFgCQgKgCgLgEQgLgGgJgIIACAAQAfAHAVAUQAGAFAHAAIgIAAg");
	this.shape_4.setTransform(-3.5,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC8257").s().p("AgHAWIgFAAIgRgDQgRgEgMgGIgUgJQgJgCgDgLQAugJAsAAQAtAAAuAJQgDALgKACIgTAJQgUALgaACIgFAAIgIABIgHgBg");
	this.shape_5.setTransform(0,35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F09466","#F09466","#F2A365","#F3A965"],[0,0.016,0.592,1],0,17.9,0,-17.8).s().p("AgdCuQgRgEgLgGIgUgJQgKgEgDgLIgCgIIACgJQACgEAEgDQASgUANgbQANgbADgbIAYjAIAbAAIAYDAQAEAdAMAZQANAaATAVIAEAHQADAFAAAEIgBAIQgEALgKAEIgTAJQgbAOggAAQgPAAgOgEg");
	this.shape_6.setTransform(0,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E66842").s().p("AgjA4QgDgPAAgMQAAgcANgXQAOgYAUgPIAaA0QAIALgGAGQgCACgFACIgHABQgNAGABARQAAAIAJARIgFABQgWAAgcgGg");
	this.shape_7.setTransform(-38,24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA744A").s().p("AgGBOQgWgEgQgGIgQgGQgHgUAAgTQAAglAXgeQAXgdAigJIAGAGIAtBWQAIAOgHAGQgCACgEABIgIACQgNAFABARQABAJAIARIgEAAQgZAAgZgFg");
	this.shape_8.setTransform(-40.8,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E66842").s().p("AgTA9QAJgRAAgIQABgHgDgHQgEgGgGgDIgHgBQgEgCgCgCQgGgGAHgLIAag0QAVAPANAYQANAXAAAcQAAAMgDAPQgcAGgWAAIgFgBg");
	this.shape_9.setTransform(38,24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA744A").s().p("AgwBTQAJgRAAgJQABgHgDgGQgEgHgGgCIgHgCQgEgBgCgCQgGgGAHgOIAthWIAFgGQAiAJAYAdQAXAfAAAkQAAAUgHATIgQAGQgPAFgXAFQgaAFgYAAIgFAAg");
	this.shape_10.setTransform(40.9,21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC8155").s().p("AgNBTQgjgMgegUQgQgdgDggQgDgjAMgfIACgFQAigRAeAAIAOACQAUADAQAMQAMAIAKANIAtBWQAIANgHAGQgCACgEACIgIABQgNAGABARQABAIAIARIgGABQguAAgogQg");
	this.shape_11.setTransform(-43.9,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC8155").s().p("AhOBiQAIgRABgIQABgHgEgHQgDgGgGgDIgHgBQgFgCgCgCQgGgGAHgNIAthWIAGgHQAIgJAIgFQARgMATgDIAOgCQAeAAAiARIACAFQAMAfgDAjQgDAggQAdQgYAQgZAKIgPAGQgPAGgWAEQgbAGgZAAIgEgBg");
	this.shape_12.setTransform(43.9,20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F09466","#F29C6B","#F5B379","#F6BA7E"],[0,0.31,0.847,1],-11.1,0,11.2,0).s().p("AAIB+QgrgJgfgeQgPgPgJgQQgRgdgDghQgDgjAMgfQAHgQAJgMQAJgMANgHQAVgMAcAFQAYAEAWARQASANATAYIAfApIALAOIgSCDQgaALgcAAQgPAAgQgDg");
	this.shape_13.setTransform(-42.7,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#F6BA7E","#F2A06E","#F09466"],[0,0.62,1],-11.1,0,11.2,0).s().p("AhcB2IgSiDIALgOIAfgpQATgYASgNQAWgRAYgEQAcgFAWAMQAMAHAJAMQALAPAFANQAMAfgDAjQgDAhgRAdQgKASgOANQgfAegrAJQgQADgPAAQgcAAgagLg");
	this.shape_14.setTransform(42.7,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#895E37").s().p("AgdBSQgDgSAIgRQAIgSAQgEQgVgWABgQQAAgMAKgJQAKgJAIAFQgNgHgJgQQgKgPABgRQABgNAIgOQAJgPAKgEQAPgFAHAOQAFALgBAPIgZD1QgdgigGgZg");
	this.shape_15.setTransform(-32.1,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#895E37").s().p("AgehoQgBgPAFgLQAHgOAPAFQAKAEAJAPQAIANABAOQABARgJAPQgKAQgNAHQAIgFAKAJQAKAJAAAMQABARgVAVQAQAEAJASQAIARgEASQgEAPgLARQgHAKgNARg");
	this.shape_16.setTransform(32.2,4.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC914C").s().p("ABXA1QghgVgTggQgLgUgEgZIgCgWIABgGIABARIABADIAAABIACAKIACAGIAAABIABACIABABIABADIAAAAIAFAMIAAABIAFAIIACADIABADIAGAGQAHAKAHAGIACACIAPANIACABIACABIACACIADABIACACIABAAIACACIABAAIACABIAJAFIADABIADABIADABIABABIAGACIACAAIABAAIAEACIABAAIACAAIABAAIADABIADABIACAAIACAAIAIABIACAAIALABQAkAAAfgQQAegQAUgcIAAAAQAMgPAHgUQADgHACgNIABgDIAQAQIAAAAIAIAJIAAAAIAEADIAAAAIABgCIABAAIAEgGIADgEIAAAAIABABIAEAGIgOASIgFgFIAAgBIgXgXIgBACQgBAKgEAMQgPAoglAbQglAbgvAAQgoAAgjgVgAj0AwQgkgagQgoQgEgLgCgNIgBgCIgcAcIgOgSIAFgHIAAABIAJAMIAcgdIABADQACAMAEAMQAHASALAOIAAAAQAVAcAeAQQAfAQAjAAIALgBIAEAAIAIgBIACAAIADgBIADgBIABAAIABAAIADgBIABAAIAIgCIACgBIAFgCIACgBIAEgBIACgBIACgBIABgBIACgBIABAAIACgBIABgBIACgBIABgBIADgBIAQgMIADgCIADgCIAMgNIAOgRIAGgMIABgBIACgEIAAgBIAEgJIAAgDIABgBIABgCIAAgBIABgDIAAAAIAAgDIABgBIAAgCIAAgCIABgCIAAgBIACgKIAAgDIAAgEIAAgDIABAGQAAAMgCAKQgDAWgLAWQgTAhghAVQgjAVgpAAQguAAglgag");
	this.shape_17.setTransform(0,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC914C").s().p("AhGAFIACAAQAjgKAhgBIAIAAQAZAAAWAEIAQACIg3gDQgOAAgMADIgOAEIgMACIgNABQgMAAgJgCg");
	this.shape_18.setTransform(21,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC914C").s().p("AAmAGIgOgCIgNgEQgNgDgNAAIg3ADIAQgCQAWgEAZAAIAHAAQAhAAAjALIADAAQgJACgNAAIgLgBg");
	this.shape_19.setTransform(-20.9,19.3);

	this.eyes2 = new lib.Symbol172();
	this.eyes2.setTransform(0,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#895E37").s().p("ABaBIQgjghgtgVQgrgTgwgGQgRgCgFgGQgGgHACgRQACgQAFgIQAJgMAVgBQAqgCAwAiQA+AqAYA4QAEAKgBAEQgBAEgCACQgDADgEAAQgEAAgFgFg");
	this.shape_20.setTransform(16,-3.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#895E37").s().p("AhuBGQgBgIAFgNQASg0AxglQApgiA9gLQAVgEAKAGQANAIAEAcQADAQgHAHQgEAEgLACQg4AKgwAaQgyAcgmAqQgJgGgBgMg");
	this.shape_21.setTransform(-15.8,-3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3A965").s().p("ACKCcQhFgGgxgxIgUgVIgTAVQgxAxhFAGIghABIgNgDIgOgFQgOgEgOAAIgmAEIgFiVIDNicQAdAaAmAAQAjAAAcgWIACgBIDICOIgECeIgBACIgngEQgNAAgPAEIgNAFIgNADg");
	this.shape_22.setTransform(0,4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6BA7E").s().p("AjyIIQhrhcAAiIQAAg3ASiUIAAAAQgoARgtgJQgugJgfgeQgfgfgJgqQgKgtAQgpQANghAYgOQAWgMAcAFQAZAEAXARQARANATAYIAgApIALAOIAlkWQAai8AWhkIHKAAIADAQQANBCATCMQAXCpAFAeQAJA3ANBaIALgOIAfgpQATgYASgNQAWgRAagEQAcgFAWAMQAMAHAJAMQALAPAFANQAMAfgDAjQgDAjgRAbQgKASgOANQgfAegtAJQgtAJgogRIAJBPQAIBXAAAlQAABagyBLQgvBGhRApQhQAphcAAQiMAAhmhZg");
	this.shape_23.setTransform(0,22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#895E37").s().p("AANAMQgPhFgdhVQgTg4gkhjQAkgLAcgdQAxBGARByQAFApADA6IADBgQAHCSAZCKIgrAMQAOiTgtizg");
	this.shape_24.setTransform(25,-11.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#895E37").s().p("AhWFGQAZiMAHiQIADhgQACg6AGgpQARhyAxhGQAcAdAkALQgkBjgTA4QgdBVgPBFQgtCxANCVg");
	this.shape_25.setTransform(-24.9,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.eyes2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.h1}]}).wait(1));

	// Layer 3
	this.h2 = new lib.Symbol171();
	this.h2.setTransform(-0.1,11.9,1,1,0,0,0,-0.1,57.2);

	this.timeline.addTween(cjs.Tween.get(this.h2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-83.7,107.8,167.4);


(lib.Symbol164 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// head
	this.head = new lib.Symbol169();
	this.head.setTransform(-0.1,23.5,1,1,0,0,0,-0.1,89.5);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5BC0EB","#59BBE6","#53AFD9","#4899C3","#3C7FA6"],[0,0.188,0.435,0.718,1],0.6,13.9,0.6,-82.5).s().p("AmFDVQBJneAih4QA+jaBIhvQASgkAOgnIAMgjQA0AcA8AAQA9AAA0gbQADAKADAJIABACIAHAWQAOAjAPAfQBIBwA+DZQAgBvA3F6QA9GqAKD/QjDAAkEAUQkCAUjDAAQgRhbBQoJg");
	this.shape.setTransform(-0.8,135.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE9347").s().p("AhdAjIgMhGQAUAFAfAAIA0AAQAxAAA7gQIgOBRQguAMguAAQgvAAgugMg");
	this.shape_1.setTransform(0.1,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3A965").s().p("AjFJuQhagThIghQAJgnAYieQAXiTAOgyQA+jXBIhwQATgoARgwQAQgwAJgsQAOhGgBhKQABgZgCgaQgDgmgGgkIgHgoIAQAEQAoAJAqAAQArAAApgJIAPgEIgHAoQgGAkgDAmIgCAzQAABIAPBIQAIAsAQAwQAOArAXAtQBIBwA9DXQAOAyAXCTQAXCeAJAnQhGAihcASQheAThnAAQhmAAhfgTg");
	this.shape_2.setTransform(0,79.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Isolation Mode
	this.hand1 = new lib.Symbol176();
	this.hand1.setTransform(-8.6,64.1,1,1,0,0,0,39.3,30.4);

	this.hand2 = new lib.Symbol175();
	this.hand2.setTransform(7.2,62.7,1,1,0,0,0,-43.2,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hand2},{t:this.hand1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-149.7,194.5,368);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t7 = new lib.Symbol99();
	this.t7.setTransform(62.9,-2.6);

	this.t6 = new lib.Symbol98();
	this.t6.setTransform(40.2,1.3);

	this.t5 = new lib.Symbol97();
	this.t5.setTransform(19.1,1.3);

	this.t4 = new lib.Symbol96();
	this.t4.setTransform(0.3,1.3);

	this.t3 = new lib.Symbol95();
	this.t3.setTransform(-18.9,4);

	this.t2 = new lib.Symbol94();
	this.t2.setTransform(-40.5,1.3);

	this.t1 = new lib.Symbol93();
	this.t1.setTransform(-62.8,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5},{t:this.t6},{t:this.t7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.1,-16.1,146.2,32.3);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol117();
	this.instance.setTransform(-114.6,134);

	this.instance_1 = new lib.Symbol116();
	this.instance_1.setTransform(114.3,-139.3);

	this.instance_2 = new lib.Symbol115();
	this.instance_2.setTransform(76.5,-107.4);

	this.instance_3 = new lib.Symbol114();
	this.instance_3.setTransform(-21.8,-182.9);

	this.instance_4 = new lib.Symbol113();
	this.instance_4.setTransform(-69.9,-122.2);

	this.instance_5 = new lib.Symbol112();
	this.instance_5.setTransform(-23.9,182.9);

	this.instance_6 = new lib.Symbol111();
	this.instance_6.setTransform(53,-142.4);

	this.instance_7 = new lib.Symbol110();
	this.instance_7.setTransform(-117,-169.1);

	this.instance_8 = new lib.Symbol109();
	this.instance_8.setTransform(-8.1,-146);

	this.instance_9 = new lib.Symbol108();
	this.instance_9.setTransform(117.1,-44.9);

	this.instance_10 = new lib.Symbol107();
	this.instance_10.setTransform(97.9,136.9);

	this.instance_11 = new lib.Symbol106();
	this.instance_11.setTransform(-92.2,179.4);

	this.instance_12 = new lib.Symbol105();
	this.instance_12.setTransform(79.5,-169.1);

	this.instance_13 = new lib.Symbol104();
	this.instance_13.setTransform(-115.9,-86.6);

	this.instance_14 = new lib.Symbol103();
	this.instance_14.setTransform(-55,-158.7);

	this.instance_15 = new lib.Symbol102();
	this.instance_15.setTransform(21.5,-119.8);

	this.instance_16 = new lib.Symbol101();
	this.instance_16.setTransform(-55,164.9);

	this.instance_17 = new lib.Symbol100();
	this.instance_17.setTransform(97.9,177.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-184.1,259.2,368.3);


(lib.Symbol80 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lines = new lib.Symbol81();
	this.lines.setTransform(2.9,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

	// Layer 4
	this.pic = new lib.Symbol82();
	this.pic.setTransform(-1,39);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

	// Layer 3
	this.t3 = new lib.Symbol84();
	this.t3.setTransform(1.5,121.3);

	this.t2 = new lib.Symbol83();
	this.t2.setTransform(1.5,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.t3}]}).wait(1));

	// Layer 8
	this.q4 = new lib.Symbol88();
	this.q4.setTransform(69.5,-66.1);

	this.q3 = new lib.Symbol87();
	this.q3.setTransform(25.6,-66);

	this.q2 = new lib.Symbol86();
	this.q2.setTransform(-21.9,-65.9);

	this.q1 = new lib.Symbol85();
	this.q1.setTransform(-61.9,-61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q1},{t:this.q2},{t:this.q3},{t:this.q4}]}).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuVDBIAAmCIF5AAQAmAMArAAQArAAAngMIUPABIAAGCg");
	mask.setTransform(1.1,-10.9);

	// Layer 2
	this.t1 = new lib.Symbol89();
	this.t1.setTransform(0.6,-13.6);

	this.t1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 6
	this.l1 = new lib.Symbol92();
	this.l1.setTransform(1.1,10.8);

	this.l2 = new lib.Symbol91();
	this.l2.setTransform(1.1,-32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l2},{t:this.l1}]}).wait(1));

	// Layer 5
	this.p1 = new lib.Symbol90();
	this.p1.setTransform(1.1,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,-190.9,259.2,368.3);


(lib.Symbol78 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol79();
	this.instance.setTransform(-15.2,78.2,0.37,0.37,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A7029").s().p("AADASIAFgSIgIAKIgDgCIgDgMIgFARIgHgCIAKgeIAGACIACASIANgNIAFACIgJAeg");
	this.shape.setTransform(-14.2,99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgFADgHQADgKAEgCQADgDAEACQAFABADAFQACAEgDAIQgDAJgEADQgDACgBAAIgDgBgAAAgIQgCABgCAHQgCAFABACQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQACgCACgHQACgEgBgDQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBIgCAAIgBACg");
	this.shape_1.setTransform(-17.6,98.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A7029").s().p("AAAARIgEgSIANgMIAHACIgPALIAHATgAgPAMIAJgeIAGABIgEAQIgFAPgAgEgBg");
	this.shape_2.setTransform(-20.4,97.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgEADgIQADgJAEgDQADgDAEACQAGADACADQACAEgDAIQgDAKgEACQgDACgBAAIgDgBgAAAgIQgCABgCAHQgCAFABADIADADQABAAABAAQAAAAAAAAQAAgBAAAAQAAAAABAAQACgCACgHQACgEgBgDIgDgDIgDAAIAAABg");
	this.shape_3.setTransform(-23.6,96.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgEADgIQADgKAEgCQADgDAEACQAKADgBALIgGgCQAAgFgEgBQgBAAgBAAQAAgBgBABQAAAAAAAAQAAAAAAAAQgCACgCAHQgCAFABACQAAABAAABQABAAAAAAQABABAAAAQABAAAAAAQADABACgEIAGACQgDAHgGAAIgDAAg");
	this.shape_4.setTransform(-26.5,95.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A7029").s().p("AADASIAGgSIgJAKIgEgCIgCgMIgFARIgGgCIAJgeIAGACIACASIAMgNIAGACIgJAeg");
	this.shape_5.setTransform(-4.4,96.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A7029").s().p("AAFASIAJgdIAGABIgJAegAgHAPIgMgFIAJgdIAGACIgDALIAGADQAIACgDAIQgDAIgEAAIgEAAgAgMAHIAGABQAEACACgEQAAgFgDgBIgGAAg");
	this.shape_6.setTransform(-8.4,95.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A7029").s().p("AAAARIgNgEIAJgeIALAEQAJADgCAJQgCACgEABIACADQABACgBAEQgCAHgGAAIgCgBgAgGAJIAGACQADACABgEQABgEgEgCIgEgCgAgCgCIAEACQAEAAABgDQACgEgFgBIgEgCg");
	this.shape_7.setTransform(-12,94.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A7029").s().p("AgDAQQgFgCgDgEQgCgEADgIQADgKAEgCQADgCAEABQAGACACAEQACAEgDAIQgDAKgEACIgEABIgDAAgAAAgJQgCACgCAHQgCAFABACQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAABAAgBQAAAAAAAAQAAAAABAAQACgCACgHQACgFgBgCQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAIgCgBIgBABg");
	this.shape_8.setTransform(-15,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A7029").s().p("AgDAQQgKgDABgLIAGACQAAAGAEAAQADACACgEQABgFgEgBIgDgBIABgDIADABQAEABABgEQABgEgEgBQgDgCgCAFIgGgCQAEgJAIACQALAEgDAIQgBADgFABQAEADgBAGQgCAGgHAAIgDAAg");
	this.shape_9.setTransform(-18,92.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A7029").s().p("AgOARIAKgfIATAGIgCAGIgNgEIgCAGIALADIgCAFIgLgDIgCAHIANAFIgCAGgAAHgNIACgFIAFABIgCAGgAAAgQIAAgGIAEACIgCAFg");
	this.shape_10.setTransform(-20.7,91.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A7029").s().p("AgNAPIAJgfIAKAEQAFABACAEQACAEgBADQgBAEgEACQgEACgFgCIgEgBIgDALgAgCAAIAEAAQAEABACgCQABgEgFgCIgEgBg");
	this.shape_11.setTransform(-23.7,90.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A7029").s().p("AgNAMIAJgdIASAGIgBAFIgNgEIgCAIIAKACIgBAFIgKgEIgCAHIAMAFIgCAFg");
	this.shape_12.setTransform(-26.5,90.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A7029").s().p("AgBARIgNgDIAKgfIATAHIgCAFIgNgEIgCAGIAFACQAKABgDAKQgBAFgEACIgEABIgCgBgAgGAKIAGACQADABABgEQABgFgEgBIgEgCg");
	this.shape_13.setTransform(-29.6,89.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A7029").s().p("AgDAQQgFgBgDgFQgCgEADgIQADgJAEgDQADgCAEABQAKAEgBAKIgGgCQAAgFgEgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgCABgCAHQgCAFABADIADADQADABACgEIAGABQgDAIgGAAIgDgBg");
	this.shape_14.setTransform(-33.3,88);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgwgNQAiABAhAMQASAIALAGQgngDg5gYg");
	this.shape_15.setTransform(-27.9,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXgGQARgBAQAHQAJADAFAEQgUAAgbgNg");
	this.shape_16.setTransform(-30.1,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYgGQASgBAQAHQAJADAFAEQgUAAgcgNg");
	this.shape_17.setTransform(-9.2,-8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpgMQAdAAAdAMQAPAGAKAGQgjgCgwgWg");
	this.shape_18.setTransform(-18.5,-4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgigJQAZgBAXAKQANAFAIAFQgegBgngSg");
	this.shape_19.setTransform(-26.9,-12.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvgNIAfAEQAkAIAcAPQg6gJglgSg");
	this.shape_20.setTransform(-54.8,89.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgegIIAVABQAXAFAQAKQgmgEgWgMg");
	this.shape_21.setTransform(-43,88.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYgGIARABQASAEAOAIQgfgCgSgLg");
	this.shape_22.setTransform(-35.7,96.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgwgNIAgAFQAkAIAdAOQg9gKgkgRg");
	this.shape_23.setTransform(41.6,20.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYgGIARABQASADAOAJQgfgDgSgKg");
	this.shape_24.setTransform(38.4,29.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYgGIARABQASAEAOAIQgggDgRgKg");
	this.shape_25.setTransform(30.2,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpgLIAcADQAfAGAYAOQg0gHgfgQg");
	this.shape_26.setTransform(36.2,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgigJIAYACQAZAFAUAMQgtgFgYgOg");
	this.shape_27.setTransform(47.2,10.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYgGIARABQASAEAOAIQgfgDgSgKg");
	this.shape_28.setTransform(10.1,110.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpgLIAcADQAfAGAYAOQgzgHgggQg");
	this.shape_29.setTransform(18.5,107.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgigJIAYACQAZAFAUAMQgtgFgYgOg");
	this.shape_30.setTransform(-0.6,105.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5D3327").s().p("AmPh0IABgHIMfDwIgCAHg");
	this.shape_31.setTransform(-10,71.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AEFB7IACgKIAHACQAEACABgEIAMgoIgjAcIgBAFQgBAEAEABIAHACIgDAJIgrgNIADgJIAHACQAEABABgDIARg8QABgDgEgCIgHgCIADgJIArANIgDAJIgHgCQgEgBgBADIgLAoIAigcIACgEQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgIgCIACgJIArANIgCAJIgHgCQgFgBAAADIgSA8QgBADAEABIAHACIgCAKgACiBdIACgJIAHACQAEABABgDIAMgpIgjAcIgBAFQgBAEAEABIAHACIgDAJIgrgNIADgJIAHACQAEABABgDIARg8QABgDgEgCIgHgCIADgHIArALIgDAJIgHgCQgEgBgBADIgLAoIAigcIACgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgDIACgJIArANIgCAJIgHgCQgFgBAAADIgSA8QgBADAEABIAHADIgCAJgABbBKQgNgEACgXIABgQQgBgIgKgCIgIAcQgBADAEABIAHADIgCAJIgsgNIADgKIAHADQAEABABgDIASg6QABgEgEgBIgIgCIADgJIArANIgCAJIgHgCQgEgBgBADIgHAVIAIACQAGgBAFgKIAGgJQAIgMALAEQAGACADAFQADAGgCAEQgBAFgEACQgEADgFgBQgJgDACgJIADgDIACgBIgCAAQgCABgIAOQgFAIgGACQAOAIgCAVIAAAFQAAABAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQADgDABgEIAAgCIAJADIAAACQgHAVgOAAIgFgBgAhGAwIABgCQADgQgJgHQgFgEgLgDIgPgFQgJgDgFACQgJACgFAOIAAACIgKgDIAKgeIAEABIAGABQADgBAJgNQANgVAEgOIACgGQABgHgFgBIgIgDIADgJIBIAWIgDAJIgIgCQgEgCgBAEIgSA5QgBAEADABIALADIgJAhgAhwAAIAWAGQAEABABgCIASg7QAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgIgCIgDAAIgGAKQgJAWgHAMQgDAIgGAGIgBAAgAgJArQgSgFgHgSQgHgQAGgRQAFgRAOgKQAOgKAPAFQALADAIAKIAEgEIAHADIgJAhIgJgCIABgBQACgbgPgFQgPgFgKAiQgKAiASAFQAGACAHgEQAHgDAFgIIAAgBIAKADIgBACQgLAVgTAAQgDAAgGgCgAEeAgQgLgEgGgHQgFgIADgIQABgFAEAAQADgBAEABQACAAACABQACADgBAEIgBAEIgCABIgCABIgCABIAAABQgCAFANADQAMAEACgFIAAgBIgBgBIgBgBQgCgDABgEQACgEACgBQAEgCACABQAEABACAEQACADgBAFQgCAEgEAEQgEAEgGABIgEAAIgKgBgAi8gLIADgKIAGACQAFACAAgEIAMgoIgiAcIgCAFIAAADIAKADIgDAKIgrgNIADgJIAHACQAEABABgDIASg8QAAgEgEgBIgHgCIADgJIArANIgDAJIgGgCQgFgBAAADIgMAoIAjgcIABgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBgBAAIgIgCIADgJIArANIgDAJIgHgCQgEgCgBAEIgSA8QAAADAEABIAHACIgDAIgAkdgpIACgJIAHACQAFABAAgDIASg9QABAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgGgBQgEgBgCABQgCABgDAHIgGASQgGAUgHAJQgKAQgPgFQgHgCgDgGQgEgGACgHQACgGAFgDQAFgEAGACQALADgEANQgBADgDACIgEACIgBAAIABAAQAEACAGgGQAIgIAHgYIAFgQQADgLgKgDIgFgBIADgKIBIAWIgDAJIgHgCQgEgBgBADIgSA8QAAADAEACIAHACIgDAJg");
	this.shape_32.setTransform(-7.1,61.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5CA00").s().p("AmngiIAxisICkAyQAPAKATAGQATAGASgBIIzCpIgxCsg");
	this.shape_33.setTransform(-7.2,61.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D3327").s().p("AAAAAIABAAIgBABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_34.setTransform(12.6,19.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABg");
	this.shape_35.setTransform(8.3,14.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_36.setTransform(10.2,15.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5D3327").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBABg");
	this.shape_37.setTransform(15.1,18.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5D3327").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAgBg");
	this.shape_38.setTransform(17.7,19.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5D3327").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_39.setTransform(17.4,19.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_40.setTransform(18,19.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_41.setTransform(12.7,18.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_42.setTransform(16,18.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5D3327").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_43.setTransform(7.9,14.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5D3327").s().p("AgBAAIABAAIACAAIAAAAg");
	this.shape_44.setTransform(16.5,18.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5D3327").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_45.setTransform(15.4,18.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABg");
	this.shape_46.setTransform(16.8,19.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_47.setTransform(-0.4,15.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5D3327").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_48.setTransform(-1.9,14.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(-1.6,14.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5D3327").s().p("AgCAAIgBAAIAHAAIgDAAg");
	this.shape_50.setTransform(3.8,13.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5D3327").s().p("ADIBkQgFgEgJgFQgNgGgMACIADACIAHAAQAIAAAFADQAQAKAFAQIgBAAQgDgIgHgIIgKgJIgKgDQgEgBgFABIAFACQAIABAFAEQAFADACAEIAFAIIACADIAAABIgBAAIg6grIgXgNIgKgGQgDAFgHABIgCAAQAEgCAFgHQACgDAAgHIACgKIADgLIgBADIgFARQgBAJgEAEQgDAFgEAAIgEgBIglgLIgHgFQgDgFAAgCIACADQAHAHAHABQAKADAIAAQAHAAANgDIAEgCIAAgCQgHADgEABIgLABIgOAAQgKgBgFgEQgFgEgCgEIAAgEQgfgIgagCIgIAAIgUgBQgbABgNABIgZADIgBgBIAWgEIgSgCIgNAAIgJABIgBgBIAOgBIAWABIAJACIAGgBIgMgDQgfgJgaAGIgBgBIALgCIAKAAIALAAQAOAAAOAEIAPAFIAFAAIgOgGIgKgDIgVgDQgZgEgWAGIgBAAIAGgCQgJgDgKAAIgBAAIAJgBQAHABAJACIARgCIgGgCQgTgGgaAGIgBAAIAHgBQAOgDAKACQANABALACIADABIAKABIgEgDIgGAAIgLgFQgUgFgVADIgSAFIALgEQANgEAKABIANABQALABAPAFIAMAFIACABIACgEQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgLgGQgQgEgGgBQgGgCgHAAIgJAAQgGAAgQADIgPAEQAHgDAPgEIAVgCIAHgGIgSgBIgBACIgDABIgBAEIgCAAIABgEQABgBAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgKAAgNAEIgNADIAOgFQAKgDALgBIgBgDQgUAAgWAIIAMgGIASgDIAMgBIAAgEQgYABgMAEIgMAFIAHgEIAKgEQASgEAOAAIACgCIACgFIABgCIACgEIADgFIABAAIABAAIAAAIIAAADIAAAEIAAACIgBACIAQACIABgDIgCgDIAAgFIAAgCQADgDAAgFIABgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQACAAACgDIACAAIAAAHIAAAEIAAAEIgBACIgBADIAAABIgBADIgEACIgCAEIAJACIAIgCIABgCIgCgEIABgFIACgEIAEgIIACABIAAAEIAAAFIgBAEQAAADgDADIgBABIgBACQAMgCAKACIABgDIBkgGIABgBIhkAGIABgHIBLgIIgEAAIhHAHIAAgCIBLgIIALgeIgDgEIAMgHIAWgGIABgBIgTAFIACgCIAZgTIAQAkIAKAKIgBABIgFACIgIAhIAeARIAAgNQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIADACIASAKIABgFQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIgCAGIAUAMIAAABIgCAAIgCAIIAOAHIABgEIAEgCIgDAHIAcAQIgDACIgBAWQALADAFADIABgDIgCgEIABgKIACgDIACgCIABgFIADgDQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIgBAFQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABIABACIgBABIABACIgDAIIgBACIgCADIgCAAIgBADIALAJIAFAHIACACQAIAEAFAFIAOAHQASAKAKAQIgGgHQgJgJgJgHQgEgCgJgDQgGgEgKgCQgLgBgJAEIACABIAJgCQAIAAAJACQAHACAFADIAJAHQAHAFAGAIIAEAHQgGgKgGgGQgKgHgMgFQgDgCgKgCQgJgBgHACIACABQALgDAMAFQAFACAGAEQAGAEAIAKQAHAKgBAAQgIgMgGgGgADDBxQgDgHgJgHQgFgDgIgCIAZATIAAAAgACSBNIAIAFIAGgCQgHgDgFAAIgCAAgAC3BQIgFgCQgLgKgOAAIgLABIgEACIABABQAEgCAEAAQAJgBAJADQAIADAFAEIAFABgAChBQIAGgBQgJgFgGAAIgJAAIADADIACgBQAFAAAIAEgACvBPQgLgHgMgBQgHAAgEACQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAFgCAMADIAJAEIAGAAIAAAAgACJBHQgCgFgEgCQgIgHgJAAIAXAOIAAAAgACpBGIgKgKIgLgHIgIgCIgJgBIAIACIALAFQAIAGADAFIAIACIAAAAgAB+A8QAJAFAEAFIACgBQgEgFgHgEIgGgFQgFgBgFAAIgEAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIABAAQAHAAAGAEgAByA0IAHABIALAGQAJAGACADIAFgCQgPgLgJgDIgFgBIgFABgACeBDIgNgKIgLgFQgHgDgHABQAJABAIAFIALAIIADACIACAAIAFABgABZA2QADAAACgBIgCgBIgIACIgFAAQAEABAGgBgABuAiQABAKgGAJIADABIAFgDQALgFAMACIABgNIgagNIgBAMgABKA0IAKAAQAIgBADgCQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAgBgBIgLAEIgIABIgIgBgACfAgQgFAJABAHQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAAgGIAGgQgACdAvIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBAAIgBABgACeAtQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIgBgBgAAUgHIAAAGIAAABIABADIgBAEIgBACIgCAGIgCACIgCABIgBADIAdAHQAAADADAEQACADAIAEQATAGATgHQAFgCADgDIABgCIgGADQgFADgHACQgMACgHgBQgHgBgIgEQgDgBgDgFQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIACgGIADgJIACABQgCAGABAEIADAHIANAFIABgFIAAgBQgFABgFgEIABgEQAEgNACgLIhDgiIgOAyIAFADIAEABIAHABIABgEQgCgCAAgFIACgEIAAgCIADgFIABgDIABAAIAAAFIAAACIAAACIgBAGIgBAEIgBACIgCAEIAOACIAAgDIgBgCIAAgEIABgEIAAgCIACgFIABgBIADgEIABgDgACfAqIACgBQAAAAABAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgCACgABEAqIAOgCIAMgFIAKgHIgBgCIgBAAQgKAJgIADQgNADgIAAIgDAAIAIABgABAAnIAGgBIgGgCgACfAmIACAAIABgCQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgAA+AmIABgDIgLgCQAGAEAEABgAA6AmIgHgDQgDgEgCgEIgBgGIgCADQgBACACAEQACAFAGACIAGABIAAAAgABBAjIAFACIACABIAHgCQAGgCAHgEQAKgGADgFIgMgHIgIAOIgHAJQgDAAgCgDQgFABgCgCgACgAjIACAAIAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAgABwARIgBADIAbAOIAAgIIgZgOIABAAIAYANIADgBIgbgPIAAACIgEgBIgOgHIgDAIIANAHIABgBgABLAfQAAAAAAABQAAAAABAAQAAAAABAAQAAABABAAIAGgHIAFgJQAHgNADgMIgGgBIgCgCQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQABACAFACIgBAAIgGgDIAAACIAGADQgCABgEgDIAAACIACACIgCgBIgBABQgDACACgCIABgJIAAgFQgIABgCgEIAAACQABACAEABIAAABQgDAAgCgDIAAADIAGADQgDAAgEgCIABACIADACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCAEIgBABIACgHQABgGgBgFIgGgBIgGgDIABADIAEAEQgCgBgDgCIABADIADABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAACIAEADIgEgCIAAADIACABIgCAAIgCALIgDALIAAAEQACACADABIAAABQgEgBgBgCIgBABIAEADQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAACIACACQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBAEIACABQACACAEgBIAFgNIABAAQAAAEgEAKQACAEAFgCIAGgMIADgFIAAAFIABACIABACQgCgBgCgDIgBADIADADQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBADQAAAAAAAAQABABAAAAQAAAAABAAQAAABABAAQgBAAAAAAQgBABAAgBQgBAAAAgBQgBAAAAgBIgBABIACADIgCgCIgBAEgAgPASIgFgCIgFgBIgFACIAPABgAALAJQgBAGACACIABgBIABgIIAEgIIAAgFgAgnAOQgGABgCACIANAAIADgCIAFgCIgGgBIgHACgAgxAJQgFAAgEACIgLAGIAHAAIAIAAIACgBIAKgEQAGgCAHABQgFgCgGAAIgEAAIgFAAgAhJAHIgIAEIAKAEQAEgEAIgDIALgBIAPABQgNgFgJAAQgNABgFADgAAAgBIgCAEQgCAHABAEQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgCABgDIABgGIAAgCgAgWAMIAAABIABAAIAPg1IgBAAgAgxAAIAKADIAKAGIAFACIAIgYIgHAAIgCAEIABgEIgWAAIAHgBIAPAAIABgCIgHAAIgBgBIACAAIAGAAIABgCIAAACIAGAAIgGABIgBACQAEABADgBIAEgKIgGAAIgDgBIAEAAIAFAAIABgEIgNABIgBACIAAgCIgRABIgEAFIACgFIgWABIAEgBIATgBIABgDIgJAAIgCgBIAMAAIAHAAIgHABIgBADIASgBIACgGIgBAGIANgCIACgHIhjAHIgHAZIADABIABgFQACgFACgCIADgHIACgBIAAAHIABACIAAADIgBAGIgBACIgBACQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIADAAIALgEIAKgCIAFAAQANAAANAGgAAOAKQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgCIgBAAIgCABgAhVADIgIAFIAJACIAGgEIAHgDQAFgCAHAAQAGAAAMADQgLgEgLAAQgMAAgKADgABhACIANAIIABgCIgOgIgAgBAJQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAgAhVgDIgLADIgIAFIAIACIAHgFQAFgCAGAAIAPgBIAKABIAHAAQgHgBgMgDIgIgBQgGAAgGACgAAQAHIADgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCADgAAAAFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAgBAAQAAgBgBAAIAAACgAhtAEIADABIADgEIgDgBQgCAAgBAEgAARACQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIAAgBIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAAAACIAAAAIACgBIgCABgAhngVIgEAHIgCAJQgBAEABABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgIIAFgOgAgCgxIgDAMIBCAiIABgLIgegRIgCgCIAJgkIgDgCIADgCIAAgBIgEADIgDgDIAEgEIAFAEIgFgGIgYgTIgEABIAIAGIgEADIgFgDIgBAHIgGADIAFgCIgBAEIgMAEIAAgDIgBADIgHACIAGAAIAAABIACgCIAMgEIgCAHIgCAAIAAgDQAAAAAAAAQAAAAAAABQAAAAgBABQAAABAAABQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIAFAAIgBAEIACgEIACAAIgCAKIgQABIgEABIAGAAIAOgCIAAAGIgEAAIADABIgBAEIgHAAIACgEIABgBIgBAAIAAgDIgBADIgGAAIgBABIAHAAIgCAEIgCAAIACABIgBADQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBgAhqgDIABgBIABgBIgBAAgAhqgGQABAAAAAAQAAABAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAgAh3gOQgEABgEACIALAEIADgJgABjgJIgKgGQAEAHAGgBgAhpgLQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACgBIgBgBgAh5gTIgKACIgFADIAGACIAHgEIAKgBIABgDgAh8gZQgPADgIAHIAHABIAJgEIAJgDIAKgBIABgDIgDAAIgKAAgAAfghIAfASIAAgCIgegRgAh+gfIgNADQgFABgGAEIgHAHIAHABIACgCQAFgEANgEQAMgDAIACIABgDQgFgCgHAAIgFAAgABRgRQADACAEgBIgGgDgABPgSIABgCIgDgCgABNgWIgOgIQAAAEAGADIAIABgAiqgYIASABIADgCIgTgCgAipgwIgGAOQgDAGACAFIABAAIABgFIADgPQADgFABgDIgCADgAiogcIAUACIAFgCIgYgFIgBAFgAitgbIACABQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIgCABgAirghIgBACQABABAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIgBAAIgBAAgAiBgwIgDAIQgBADABADIACAAIAAgBQAAgHADgIIABgCQgBABAAAAQAAAAgBABQAAAAAAABQgBAAAAABgAirgiIACgBQABAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCACgAhjgkIABgCIgBgBgAhagoQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAIABgBIgBgCIAAAAgAiogoQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIADgDIgBAAIAAAAgAhOgmQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAgAhMgmIABAAIABgCIgBgBgAhRgoQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABgCIAAAAIgBAAgAiRg3IgFAKQgBAFABACQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIACgNIADgHIgCAEgAhIgmQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBgAiAgnIABAAIAAgCIgBAAgAg7gnIABAAIABgCIgBgBQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABgAg/goIABABQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgBAAgAg1goQABABAAAAQAAgBABAAQAAAAAAAAQAAgBABgBIgCAAgAgogqIABACIABgDgAiRgqIgCAAIABABQAAABAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBgAgkgqIgBABIABAAIABgCgAgigqIABABIABgCIgBAAgAgagvIgCAGIADgBIABgEIgBgBIAAgBIgBABgAgTgvIgCAFQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIAAgEIgBgCIgBACgAiAgrIACAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBACgAiSgsQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAiSgyQAAABABAAQAAABAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAQgBgBAAAAgAgThFIgBAHQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQACgFgBgBIgBAAIgCABgAgMhFQgBADAAADQABAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIABgGQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCACgAgQhRQAAAAgBABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBACgAgMhTQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgBIgBABgAgGhVIgCACIAAADQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAABgBIgBgCIAAAAgAgDhRQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABgFIgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAABABABgAAihUIgPgfIgFANIAUASgAgVhXIACACIAagJIgBgCgABtANIAAgBIAEAAIAAACg");
	this.shape_51.setTransform(5.4,17.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_52.setTransform(-3,14.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_53.setTransform(-2.8,14.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5D3327").s().p("AgCABIACgCIADABIgDACg");
	this.shape_54.setTransform(8.7,9.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5D3327").s().p("AgBACIAAgCIABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgCAEg");
	this.shape_55.setTransform(7.1,13.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5D3327").s().p("AgBACIABgEQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABABIAAACIgBAEg");
	this.shape_56.setTransform(7.8,11.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5D3327").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIgBACIAAgBg");
	this.shape_57.setTransform(8.6,10.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5D3327").s().p("AAAAAIAAgBIABAAQAAABAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_58.setTransform(8.2,9.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5D3327").s().p("AAAACQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIABAAIAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAAAg");
	this.shape_59.setTransform(7.5,9.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5D3327").s().p("AgCACIACgEQAAgBAAAAQAAAAAAAAQABgBAAABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgCAFg");
	this.shape_60.setTransform(6.7,10.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5D3327").s().p("AgBACIABgEQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIgCAEg");
	this.shape_61.setTransform(6.1,13.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_62.setTransform(7.1,8.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5D3327").s().p("AgUAAIAEAAIAQAAIARAAIAFAAIgCAAIgeABg");
	this.shape_63.setTransform(0.8,14.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDADg");
	this.shape_64.setTransform(7.5,8.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_65.setTransform(8.3,9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5D3327").s().p("AgCAAIACgBIADABIgDACg");
	this.shape_66.setTransform(7.9,8.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5D3327").s().p("AAAAAIAAgBQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_67.setTransform(7,9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_68.setTransform(11.4,23.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5D3327").s().p("AgLgCIAAgBIAFABIAPAEIADACg");
	this.shape_69.setTransform(9.2,22.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5D3327").s().p("AADABIgTgEIgDgBIADgBIAkAKIgBABIgQgFg");
	this.shape_70.setTransform(10.3,22.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5D3327").s().p("AAAAAIgJgBIAAgCIAGACQAHABAHADIAAABg");
	this.shape_71.setTransform(13.4,24.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAg");
	this.shape_72.setTransform(11,23.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5D3327").s().p("AgBAAIAAAAIADAAIgBABIgCgBg");
	this.shape_73.setTransform(12.3,24.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5D3327").s().p("AAMAEQgJgCgHgCIgHgCQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIARAEIAGADIgBAAIAAAAg");
	this.shape_74.setTransform(14.9,25.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5D3327").s().p("AAKAFIgWgIIgEgCIAAgBIABAAIAWAHIAJAFIABABg");
	this.shape_75.setTransform(12.4,23.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5D3327").s().p("AgOgDIgBgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQANADAQAGQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_76.setTransform(14.7,24);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAABg");
	this.shape_77.setTransform(15.1,24.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5D3327").s().p("AARAMIgDgCQgCACgEgBQgCAAgCgEQgEAAgBgDQgEADgEgCQgHgCAAgEQgCABgEgCQgDgCAAgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQABAAAEABQAEgDAEABQAEABABAFQAFgCADADIAEADQAEAAAEACQAEAAAAADIAEADIACAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgDAAgDgBgAAWALQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBIgBgDIgEgBIgBgDQgFgCgDAAIgDAAIgCgCIgEgCIgFgBQgCgEgDgBQgFgBgDADQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABAAABQACABAFAAIABADQAEADAEAAIAFgCIAAADIAFAAQABADADACQAEAAACgDQACAEAFAAg");
	this.shape_78.setTransform(15.8,10.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5D3327").s().p("AAAAFIgFABQgEgBgDgDQgEAAgFgCQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIADAAQABgCAEgCQAFABACAEQACgDADAAQACAAACADQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAFgCAEAEQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAEAAACACQABABAAABQABAAAAABQAAAAAAABQgBABAAAAQgCACgDgBQgEACgHABQgHgDAAgDgAAAAFQAHAHAJgEIABgDIAEABQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQgCgDgEABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQgEgDgEADIgCgEQgDgDgCACIgEABIgBAAQgCgCgDgBQgEAAgCADQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQABABAAAAQABABAAAAQADAAAFAAQABADAFABIAFgCIAAADg");
	this.shape_79.setTransform(-3.8,7.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5D3327").s().p("AASAJIgDgCIgDABQgDgBgCgDQgGABgBgEQgEAEgGgFQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIgHgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAGABIABAEQADACAFgBQAAAAABAAQABAAAAAAQAAgBAAAAQAAAAAAAAIADACQACABADgBIABADQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIAEgCQAAACAFACIgBAAIgCAAg");
	this.shape_80.setTransform(15.7,10.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5D3327").s().p("AgEAAIgCgBIACAAIALACIgBABg");
	this.shape_81.setTransform(8.8,23.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5D3327").s().p("AAJAGQgDADgEgBQgDgBgBgDQgDACgDgBQgEgCgBgDQgEAAgBgCQAAgEAEABQADgDADAAQAGgBABAGQAGgCADAFQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIACABIAEADQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBACIgDABQgCAAgEgDgAASAHIAAgCIgGgDIgCgCIgDAAIgDgCQgCgBgEABIAAgCQgCgDgEAAQgDgBgCAFIgCgBQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQAAAAABAAQABAAABAAQABABABACIAEABQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQACAEABABQAFABADgDQAFAFAEgCg");
	this.shape_82.setTransform(0.8,5.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5D3327").s().p("AAIAFQgFgBgCgEQgBACgDgBQgDAAgBgDQgEACgEgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIADACQADACADgCIACABQABACADAAQABABADgBQABABACACQAFADAEgBIAEgDIgBACQgCACgDAAIgEgBg");
	this.shape_83.setTransform(-4,8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5D3327").s().p("AgCAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQACAAADAAIAAABIgFgBg");
	this.shape_84.setTransform(17,25.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5D3327").s().p("AgBAAIAAAAIADAAIAAABIgDgBg");
	this.shape_85.setTransform(17.9,25.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5D3327").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_86.setTransform(18.5,26.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5D3327").s().p("AAAAAIAAAAIABAAIAAABg");
	this.shape_87.setTransform(17.9,26.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5D3327").s().p("AAHAEQgEAAgBgDQAAAAgBAAQAAABgBgBQAAAAAAAAQAAAAAAAAIgCgBQgDAAgDgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAACIAEABIACgBIABABIADAAIABACQACACADgBIgBABIgBAAg");
	this.shape_88.setTransform(19.2,14.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5D3327").s().p("AALAIIgCgBQgCACgGgCIgBgCQgDABgCgEQgDABgDgDQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgDgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIACABIAEAAIACACIAFgBQADABADAFIAEAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABABAAQADABABADQAAAAABAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABIgDgBgAAMAHQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQgCgCgDgBIgBgDIgFAAQgEgEgCgBIgFABIgCgCIgDAAIgCAAIgCAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAAAQAAAAABAAQACABADgBIACACQAAABABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABADAGAAIACgCIADADg");
	this.shape_89.setTransform(19.3,14.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_90.setTransform(5.3,20.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_91.setTransform(6,21.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#5D3327").s().p("AgBAAIABAAIACAAIAAABIgDgBg");
	this.shape_92.setTransform(7.1,22.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_93.setTransform(6.2,21.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5D3327").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_94.setTransform(6.9,21.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5D3327").s().p("AAAAAIAAAAIAAAAg");
	this.shape_95.setTransform(6.2,21.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F5CA00").s().p("AgTgOQAXAGAQASIgBAFQgNgUgZgJg");
	this.shape_96.setTransform(37.1,39.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F5CA00").s().p("AgWgBQAWAEAWgDIgDABIgLABQgOAAgQgDg");
	this.shape_97.setTransform(32.8,56.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F5CA00").s().p("AggBnIADgEQAHgKADgNIAriWQADgOAAgKIgBgGIAGACIABAGQAAAIgEAPIgqCXQgFAPgGAIIgDAEg");
	this.shape_98.setTransform(-38.7,25.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F5CA00").s().p("AgNA1QgHgFgFgKQAPACALgLQANgMAFgRQAEgRgFgPQgFgOgNgIIgIgFQAIACAFAEQAdASgKAjQgEATgNALQgLALgPgCQAEAJAIAHQAFAEADABQgGgBgIgGg");
	this.shape_99.setTransform(-10.4,39.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F5CA00").s().p("AgXAiQAHABAHgBQASgEAHgWQAFgNgGgNQgFgMgLgFQANADAIANQAIAOgGAPQgGAVgTAFIgIAAQgHAAgFgCg");
	this.shape_100.setTransform(-9.4,28.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F5CA00").s().p("AgXBiQgGgKAEgQIAriWQAFgVgCgJIAFACQADAKgGATIgqCXQgFAQAHAJQAFAGAJAEQgOgEgGgHg");
	this.shape_101.setTransform(-17.9,32);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F5CA00").s().p("AAEByQgRgUgMgrIgVhcIgBgIIBKg4QAUgOgFgQIAFABQAGARgUAOIhLA3IACAIQAPBIAGAVQALAqARAVQAOAOASAGQgVgFgQgRg");
	this.shape_102.setTransform(-28.8,32.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F5CA00").s().p("AAAA1IgChlIADgIIADBxg");
	this.shape_103.setTransform(11,38.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F5CA00").s().p("AhBBdQAOgIAMgRIBYiEQANgSgCgMIAFACQADAKgNAUIhZCDQgMASgNAIg");
	this.shape_104.setTransform(3.4,38.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F5CA00").s().p("AgFAAIgNACIABgCIAGAAQANgCARAEQgOgCgKAAg");
	this.shape_105.setTransform(6.4,42.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F5CA00").s().p("AAdAqQgLgEgEgFQgFgHgBgMIAAgSIgBgBQgOgdgbgJQAfAIAPAgIABABIABASQABANAEAFQAFAHALADg");
	this.shape_106.setTransform(10.1,48.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F5CA00").s().p("AgJBpQgngSgOgeQgUgqAOgtQAPgvAogWQATgLAYgBQAXgCAWAHQgtgMglAVQgoAWgPAvQgPAtAUAqQAQAeAlASIAMAFIgRgHg");
	this.shape_107.setTransform(26.9,46.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5D3327").s().p("AgXBaQARAJANgKQANgKAFgTQAHgdgTgPQgOgNgUACIgUBGQgHAZAPAQIgigLQglgLAKgiIAtiXQAEgQgBgHQgBgHgIgJIBpAgQAYAHANAPQAPATgGAZQgFARgNALQgMAIgQAAQAYAKAKAUQALAUgGAYQgMAwgvAFIgJAAQglAAgHgpgAANB7QgFgBgFgEQgHgHgEgJQAOACANgLQAMgLAFgTQAJgmgcgRQgGgEgKgCIAKAFQAOAIAFAOQAFAPgFARQgFATgMAMQgNALgOgCQAFAKAIAFQAGAGAIABIAAAAgAhCBiQgKgEgFgGQgGgJAEgQIAtiXQAGgTgDgKIgGgCQADAJgGAVIgsCWQgFAQAHAKQAFAHAPAEIAAAAgAARgKQAVgFAGgUQAGgSgIgNQgIgNgPgEQANAFAFANQAGANgFAPQgHAVgUAEQgHACgFgCQAHAFALgDgAAChOIgOA2QAJAJANgDQARgEAGgRQAFgRgKgMQgIgLgOAAIgEABg");
	this.shape_108.setTransform(-11.6,33.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5D3327").s().p("AAKB2QgNgagZhzIgTBBQgIAXAKAPIhNgXQAHgEAGgHQAFgHAEgNIAsiXQAEgLAAgLQgBgJgEgHIBKAXQgHADgGAIQgEAGgDAOIgUBEIBHg0QAYgRgWgUIBJAWIhfBGQASBOALAgQAaBNAmAOIgVABQhAAAgagugABBCZQgTgGgNgOQgUgVgLgqQgEgVgPhIIgBgIIBLg3QATgOgFgRIgGgBQAGAQgUAOIhLA4IACAIIAUBcQALArASAUQAQARAWAFIAAAAgAguiTQAAALgEANIgtCXQgDAMgHAKIgDAEIAGACIADgEQAGgJAEgOIAtiXQAEgPgBgJIAAgFIgGgCg");
	this.shape_109.setTransform(-31.1,30.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5D3327").s().p("AA/B3QgPgEgFgJQgEgHgBgNIgBgTQgWgogtABIgKAOIgIAOQgIARAKANIhFgVIAQgHQANgHALgRIBYiDQAJgNABgGQABgJgJgKIA0AQQAPAFAFAIQACAFACAOIAGCuQAAANAFANQAFAPAJAHgABGBzQgLgEgEgGQgEgFgBgNIgBgUIgBgCQgRgfgfgJQAbAKAPAcIABABIABAVQABAMAEAHQAEAFAMAEIAFACIAAAAgAAShdIhYCDQgMARgOAIIAGACQANgIAMgRIBZiDQANgUgDgLIgFgCQACAMgNATgAAwAbIgDhxIgFAIIACBmIAGADgAAkAOIgChTIgvBIQAYgDAZAOgAASANQgRgFgOABIgFABIgCADIANgCQAKgBAPADIAAAAg");
	this.shape_110.setTransform(6.5,41.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#5D3327").s().p("AgOB2Qg6gOgXguQgVgrAPgwQAQgzArgXQAZgNAcAAQAbgBAbANIAUAKQAKAEANgDIgMBCQgGgSgOgNQgOgMgTgEQgggIgYAYQgYAXgGAkQgIAxAiAdQAgAdA2gQQgTAhgoAAQgKAAgOgDgAgRBuIgOgFQglgSgQgeQgUgqAPgtQAPgvAogWQAlgVAtAMQgWgHgXACQgWABgVALQgoAWgPAvQgOAtAUAqQAOAeAnASIATAHgAAyBlIAEgDQgaAEgUgGQAUAHAWgCgABdgzIABgFQgQgUgZgHQAbAKANAWg");
	this.shape_111.setTransform(29.6,46.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5D3327").s().p("AgWAtIAGgCQAXgJAHgbQAFgWgNgSQgEgHgGgHQAjAVgJAkQgEAQgMAKQgKAKgPACg");
	this.shape_112.setTransform(-2.6,29.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5D3327").s().p("AAFBrQgSgfgQg6IgThOIBchGIABAAIAEAFIhZBEQARBIAHAWQATBFAcAZQgOgHgMgRg");
	this.shape_113.setTransform(-22.6,32.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#5D3327").s().p("AATB+IgKgIIgGgGQgGgPgBgVIgHiuIgBgNQgCgGgDgEIgEgFQAMAFAEAIQACAFABANIAECuQABAhATAPg");
	this.shape_114.setTransform(17.6,42.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5D3327").s().p("AgIASIAIgwIAJgBIgLBAQgCgIgEgHg");
	this.shape_115.setTransform(41.1,40.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5D3327").s().p("AggAQQANgBAMgGQASgHAKgOIAMgDQgTAfgnAAIgHAAg");
	this.shape_116.setTransform(34.8,57.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5D3327").s().p("AgGgJQAEgNADgHQAEgHAJgEIAIADQgIADgFAIQgFAGgEAOIgJAnIgMAIg");
	this.shape_117.setTransform(-30.1,20.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5D3327").s().p("AgXA6QgRgbAGgiQAEgWAMgTQANgUAQgJQANgFAMACQgYAEgQAWQgRAVgFAdQgEAWAHAWQAHAUAPANQgOgHgIgMg");
	this.shape_118.setTransform(29.4,46.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5D3327").s().p("AgHAaIgEgFQgFgLAGgMQADgGAMgTIAJAAQgOAVgCAGQgHAPAJANg");
	this.shape_119.setTransform(3.4,47.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5D3327").s().p("AgCAnQgKgPAHgXIAKgpIAEASIgIAZQgFAYAIAOg");
	this.shape_120.setTransform(-34.6,34.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#5D3327").s().p("AgjA9QAIgCAIgDIAEgCQAggMAJglQAIgbgRgXQgFgIgIgHQATALAJASQAIASgGAVQgHAbgVAOQgPAMgTAAIgHAAg");
	this.shape_121.setTransform(-4.6,40.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#5D3327").s().p("AgKAsQgHgOAGgSIARhCIAJABIgUBNQgDATALAMQgHgDgGgIg");
	this.shape_122.setTransform(-13.8,39.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5D3327").s().p("AgPAXIAfguIAAAOIgWAhg");
	this.shape_123.setTransform(8.1,38.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5D3327").s().p("AgKAXIANgvIAIADIgMAuQgFAAgEgCg");
	this.shape_124.setTransform(-11,28.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5D3327").s().p("AD3CVIAAgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgTAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIAAACIgBAAIAAgNIABAAIAAACIABABIABABIAJAAIAAgCQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgEgCIgEgBIgCgCIgBgCIACgDQABgCAEAAIAAACIgCAAIgBABQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAABIAEABIACACIABAEQABgJAGAAQADAAACADQABADAAAEIAAANgADtCGIgBADIAAADIAJAAIABgBIABgCIgBgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgADfB2IgBgLIABAAIAAACIACAAIAQgBIgBAAIgPgIIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAADIgCAAIgBgMIACAAIAAABQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIATgCQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIACAAIABALIgCABIAAgCQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgQABIAQAJIAAAAIACgBIAAgDIABAAIABANIgBAAIAAgCQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgTACQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABIAAABgADbBWIgCgMIABAAIABACIAAABIABAAIAJgDIgCgJIgJACIgBAAIAAABIAAADIgBAAIgDgMIACAAIAAACIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIATgFIABgBIAAgBIgBgBIACAAIADALIgCAAIAAgBIgBgBIgBAAIgIABIACAKIAIgBIABgBIAAgBIAAgCIACgBIACAMIgBABIgBgCIAAgBIgBgBIgTAFIgBABIgBABIABACgADLAgIABgBIABADIABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIATgHIAAgBIAAgCIgBgCIACgBIAIAWIgIADIgBgBIAEgDIABgDIAAgDIgCgFIgBAAIgJAEIABABIACACIAEAAIABACIgLAFIgBgCIADgDIAAgDIAAgBIgJADIgBAAIABADIABACQABAEADAAQACABAEgBIABACIgJADgADIAYIgBgCIABgCIAEgEIACgEIAAgCIgBgBIgIAEQAAAAAAABQgBAAAAAAQAAAAAAABQABAAAAABIABACIgBAAIgHgLIABgCIABADQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAIgFIgBgCIgCgBQAAAAAAAAQAAgBgBAAQAAAAAAABQAAAAgBAAIgHACIgDAAIgBgCQgDgDAFgDIABABQAAABgBAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAIAFgCQACAAADACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABgBIAEgCIAAgCIgBAAIgBABIAAABIgCAAIgCgBIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIADAAIACACIABADIgBADIgHAFIAAAAIABACIABABIAIgDIAAgCIgBgCIABgBIAHAKIgCABIgBgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgHAFIABACIABABIACABIAHgDQAAAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAIADACIAAADIgCADIgCABIgCgCIAAgCIABgCIACAAIAAgBIgBgBIgEACIgEABQAAABgBAAQAAAAAAAAQAAAAgBgBQAAAAgBgBIAAAGIgDADIgCACIAAACQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAACIgDABQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBgAjjAMIABgCIAAAAIgBgBIgQgJIgBAAIgBAAIgBAAIgBAAIAGgJIABABIgBABIAAACIABAAIAHAFIAFgIIgHgFIgBgBIgBABIgBACIgBgBIAGgLIACABIgBACIgBABIABABIAQALIACAAIABAAIABgCIABABIgGAIIgCAAIABAAIAAgCIAAgBIgIgEIgFAHIAHAEIABAAIABAAIABgCIACABIgHAKgAjTgLIAAgBIABgCIgBgCIgMgVIACgCIAYAHQAAAAAAAAQAAABABAAQAAAAAAgBQAAAAAAAAIABgBIABAAIABAAIgHAKIgBAAIAAgBIABgCIAAgBIgBAAIgFgCIgGAIIABACIABACIACAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIABgBIABABIgGAIgAjVgXIAFgHIgKgDgAC3gLQgGAAgDgEQgDgEAAgDIABgHIAEgFQAGgEAEAAQAGACADADIADAHIgBAHQgCADgDACQgEAEgEAAIgBgBgAC6ghIgGADIgFAGIgBAEQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQACACADAAQAFgBAEgDIAFgFQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgBgEIgDgCgACUgvIABgBIABACIABABIABgBIAPgOIAAAAIAAgBIgCgCIABgCIAKAMQADACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBIgDgCIgEgEIgGAGIAAABIAAABIACACIgBACgACqg4IgHAHIADACQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADABIACgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIgCgDIgCgCgAjHgsQgEgEAAgGQAAgFADgEIADgCIAEgBIgBgCIABgBIAIAHIgBABQgEgDgDAAQgDAAgCACQgCABAAAEQABAEAEAEQAEAFAEABQADAAACgCQADgCAAgEQAAgDgCgCIABgCQACADAAAFQAAADgDAEQgEAEgFgBQgFAAgEgEgACPg1QgDAAgDgDIgMgKIABgBIACACIABAAIABgBIAMgPIgBgDIgBgBIABgBIARAOIgFAHIgBgBIACgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgEIgDgCIgCAAIgFAHIACACQAGAFABADQABADgCACQgCADgCAAIgCAAgACGg+QAAAAgBAAQAAABAAAAQAAAAAAAAQABABAAAAIADACQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBQABAAAAgBQAEgFgFgEIgDgCgAiog6IADgCIAAgBIgNgRIgBAAIgBAAQgDADAEAHIgCABIgFgIIARgNIAHAHIgBABIgEgDIgEgBIgCABIgBABIABABIAMAQIABAAIABAAIACgCIABABIgLAJgABshMQgFgDAAgFQgCgFAEgFQADgGAGgBQAFgBADADIADACIACAEIACgCIABABIgFAJIgBgBQABgEAAgDQAAgDgDgBQgCgBgDAAQgDABgEAFQgDAGAAAEQAAACADADQADACADgCIAFgCIABABQgEADgDAAIgCABQgDAAgCgCgAiXhNQgDgCgCgDQgDgFABgGQACgEAFgEQACgCAEAAQAEAAADACIAFAFQADAGgCAFQgBAGgFACQgDACgEAAQgEAAgCgCgAiXhjIgCADIAAAEIACAHIAFAGIADABIAEAAQADgCAAgEQAAgCgDgHIgEgFIgEgCIgEABgABUhaIABgCIABABIABABIABgBIAAgGIgIgEIgCACIgBABIAAACIABACIABAAIgBABIgIgDIAAgCIABABIABAAQABAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAIARgQIACABIgBAZIABACIACAAIgBACgABRhnIAHAEIABgLgAh7hXQgBgBgCgEIACAAIABACIABABIABgEIgBgEIABgDIADgDQgIADgDgFQgBgCACgEQABgDAEgBIAMgGIABACIgCABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAIASQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIACgBIABABIgMAFIgBgBIADgBIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgIIgCAAIgCADIABAJIgBADIgCABIgCABIgCAAgAh4hyIgEACQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAEgBIACAAIgDgIIgBgCgAhghkIACgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgFgTQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIgBgBIAMgEIABACIgCAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAGAUIAIgCIgGgUQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBABIgBAAIgBgCIAMgDIAAABIgBABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAFAVIAJgDIgGgUIgCgBIgCABIAAgCIAMgDIABABIgDABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIAGAUQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIACgBIACAIIgCAAIgBgCIgDgCIgEABIggAJgAA6hkIgOgFIABgBIACABIABAAIABgBIAGgUIAAAAIgBgCIgCAAIAAgCIAPAGQAEAAABADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgGAAQAEACACADIAAAEIgCAEIgEABgAA2hoIABABIADABQAAAAABAAQABABAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgDgDIgEgBgAA8h8IgDAJIADABQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgCIgCAAgAAkhqIgCgBIgCgDIAAgFIAAgEQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCAAIgCAJIACACIABAAIAAACIgMgDIAAgCIACABIABAAIABgBIAEgTIgBgCIgCgBIAAgCIAMAEIAAABIgCAAIgBAAIgBAAIgCAJIAEABIACAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADgHIACgCIADAAIADABIAAADIgBADIgCAAIgCgBIAAgCIAAgBIABgBIgBgBIgBABIgCAFIgCADIgCABQADABABADIABAFQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIABgEIACABQgCAFgDAAIgBAAgAgzhwIACAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgUQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAMgBIAAACIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIABARIAAgCIAJgPIAAAAIgBgCIgDAAIAAgCIAMgBIAAACIgBAAIgCACIACAUQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIACAAIAAABIgMABIAAgBIACAAIABgCIgBgQIgJARIAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIACAAIAAACIgMABgAgEhwIABgCIABABQABgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgQIAAABIgKAOIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIACAAIAAABIgMAAIAAgBIACAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIACgTQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgCAAIABgBIALAAIAAACIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBAQIABgBIAJgNIAAAAIAAgCIgBgBIgBAAIAAgBIAKAAIAAACIgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgCATQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIABAAIAAABgAgDiMQgEAAgCgBQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgCIACgBIACABIAAACQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBABIABABIAEABIADAAIAAgBIAAgCIgBgCIABgBIAAgBIACABIAAADQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgCABIgBAAg");
	this.shape_125.setTransform(5.4,11.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5D3327").s().p("AiYgpIANgEIIbCiIgBAHgAmPh0IABgHICNArIAJAJg");
	this.shape_126.setTransform(-4.5,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// Layer 8
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(90,54,20,0.098)").s().p("AmmImIFnzgIHmCVIiAHMIjnMUg");
	this.shape_127.setTransform(19.4,56.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_127).wait(1));

	// Layer 9
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],-3,-0.8,3.1,0.9).s().p("AjYJkIC3qKIBdlNIBPkIIBOAXIiAHMIjmMUg");
	this.shape_128.setTransform(-49.7,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(1));

	// Layer 7
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],4.1,1.3,-3.1,-0.7).s().p("AjbJjIFjzfIBTAZIh/HMIjmMUg");
	this.shape_129.setTransform(39.8,63);

	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(1));

	// Layer 5
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F5CA00").s().p("AnqiHIAHgXIPOEmIgHAXg");
	this.shape_130.setTransform(12.7,-11.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F5CA00").s().p("AnoiIIAHgWIPKEnIgGAWg");
	this.shape_131.setTransform(-22.6,110.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AqXHVIC2qJIBflNIBMj6IPOElIh9HBIjnMSg");
	this.shape_132.setTransform(-4.9,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(-14.8,7.7,1,1,0,0,0,71.5,178.6);
	this.instance_1.alpha = 0.172;

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.setTransform(55.8,-161.2,1,1,0,0,0,18.2,7.9);
	this.instance_2.alpha = 0.109;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#763523").s().p("ADbBTInAh/QgIgCgEgHQgEgIACgIQACgIAIgEQAHgEAIACIHAB/QAIADAEAHQAEAHgCAIQgDAJgHAEQgEACgFAAIgGgBg");
	this.shape_133.setTransform(57.6,-166.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_134.setTransform(71.1,-179);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_135.setTransform(64.9,-180.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_136.setTransform(58.8,-182.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#CE9B13").ss(2.1).p("AAghwIg/Dh");
	this.shape_137.setTransform(52.6,-184.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F4BD00").s().p("Aj7A1IAbhfQAbhjAFgJQAPgfAnAAQBWABBkAeQBmAeBIAsQAiAUgEAiQgCAQg5C8g");
	this.shape_138.setTransform(61,-180.4);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(41.6,-110.9,1,1,0,0,0,26.1,38.6);
	this.instance_3.alpha = 0.109;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(-29.8,144.4,1,1,0,0,0,49.4,45);
	this.instance_4.alpha = 0.109;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(11.4,-8.3,1,1,0,0,0,44.3,57.9);
	this.instance_5.alpha = 0.109;

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#812E1C").s().p("AiWc3QhEgFg8gzIgxg2QgcgfgfgIQgfgKgoAMQhAATgFABQhPALg8ggQgigRgbgmQgUgcgVgtQgyhwAChTQABgqARg2IAghdQANglAQg7IAZhiICToQQBclFBRkXIBOkJIAuilQAchhAgg9QAmhGBEgzQAfgYBHgkQA+gkASgyIBGjAIBEjBIBLjRIAQgxQAKgdAJgSQAIgNATgUQAWgVAHgLQALgRAFgeQAEgiAEgQIGXB1QgFAPgOAfQgMAdAAAUQAAANAHAdQAGAcgBAPQgBATgHAeIgNAyIgvDZIgsDIQgbB4gQBQQgKA0AhA/IA4BqQAeBQgFBPQgEBEgcBjIgxCjIhKEIQhOEThhFLQhJD8hRERIgeBhQgTA6gJAnIgVBgQgPA2gWAlQgqBIhlBDQgnAcggANQglAOgiAAIgLAAg");
	this.shape_139.setTransform(-4.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.3,-198.6,172.6,397.3);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.q3 = new lib.Symbol74();
	this.q3.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.q3).wait(1));

	// Layer 3
	this.q2 = new lib.Symbol73();
	this.q2.setTransform(0.2,-3);

	this.timeline.addTween(cjs.Tween.get(this.q2).wait(1));

	// Layer 1
	this.q1 = new lib.Symbol72();

	this.timeline.addTween(cjs.Tween.get(this.q1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-44.8,183.7,89.6);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.q3 = new lib.Symbol77();
	this.q3.setTransform(-12.5,50.2,1,1,0,0,0,-11.2,65.5);

	this.timeline.addTween(cjs.Tween.get(this.q3).wait(1));

	// Layer 1
	this.q2 = new lib.Symbol76();
	this.q2.setTransform(-12.5,50.2,1,1,0,0,0,-11.9,55.3);

	this.timeline.addTween(cjs.Tween.get(this.q2).wait(1));

	// Layer 3
	this.q1 = new lib.Symbol75();
	this.q1.setTransform(-12.5,50.1,1,1,0,0,0,-12.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.q1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-50.3,126,100.7);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.q3 = new lib.Symbol69();
	this.q3.setTransform(-3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.q3).wait(1));

	// Layer 1
	this.q2 = new lib.Symbol70();
	this.q2.setTransform(0.3,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.q2).wait(1));

	// Layer 3
	this.q1 = new lib.Symbol71();

	this.timeline.addTween(cjs.Tween.get(this.q1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-38.3,79.4,76.7);


(lib.Symbol65 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// t1
	this.t1 = new lib.Symbol66();
	this.t1.setTransform(-35.3,-136);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t3
	this.t3 = new lib.Symbol67();
	this.t3.setTransform(-29,57.3,1,1,0,0,0,-13.3,50.2);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// bottle
	this.bottle = new lib.Symbol78();
	this.bottle.setTransform(-6,238.1,1,1,0,0,0,-43,182);

	this.timeline.addTween(cjs.Tween.get(this.bottle).wait(1));

	// t2
	this.t2 = new lib.Symbol68();
	this.t2.setTransform(-28.1,-70.4);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-174.4,243.4,429.1);


(lib.Symbol41 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new lib.Symbol44();
	this.txt.setTransform(-4.2,5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 4
	this.p2 = new lib.Symbol43();
	this.p2.setTransform(-1.9,3);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// Layer 5
	this.p1 = new lib.Symbol42();

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-44.8,181.3,89.6);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new lib.Symbol47();
	this.txt.setTransform(0.7,2.3);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.p2 = new lib.Symbol46();
	this.p2.setTransform(1.3,2.8);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// Layer 4
	this.p1 = new lib.Symbol45();

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-35.2,174.9,70.6);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt = new lib.Symbol52();
	this.txt.setTransform(-4.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.w1 = new lib.Symbol48();
	this.w1.setTransform(-40.7,-32.3,1,1,0,0,0,4.7,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.w1).wait(1));

	// Layer 4
	this.w2 = new lib.Symbol49();
	this.w2.setTransform(-49.2,-11.1,1,1,0,0,0,-48.5,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(1));

	// Layer 5
	this.g1 = new lib.Symbol50();
	this.g1.setTransform(-29,-45.9,1,1,0,0,0,22.1,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.g1).wait(1));

	// Layer 6
	this.g2 = new lib.Symbol51();
	this.g2.setTransform(-47.6,-15.1,1,1,0,0,0,-47.6,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.g2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-45.8,189.3,92);


(lib.Symbol12 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.fl3 = new lib.Symbol183();
	this.fl3.setTransform(-2,82);

	this.timeline.addTween(cjs.Tween.get(this.fl3).wait(1));

	// Isolation Mode
	this.fl2 = new lib.Symbol174();
	this.fl2.setTransform(0.3,176.5);

	this.fl1 = new lib.Symbol173();
	this.fl1.setTransform(-4.8,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fl1},{t:this.fl2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.9,-99.7,276,331.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.txt1 = new lib.Symbol167();
	this.txt1.setTransform(-0.2,-280.9);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// Isolation Mode
	this.r2 = new lib.Symbol165();
	this.r2.setTransform(0.3,-283.3);

	this.timeline.addTween(cjs.Tween.get(this.r2).wait(1));

	// Layer 9
	this.r1 = new lib.Symbol166();
	this.r1.setTransform(-3,-283);

	this.timeline.addTween(cjs.Tween.get(this.r1).wait(1));

	// Layer 2
	this.txt2 = new lib.Symbol11();
	this.txt2.setTransform(-0.2,11.8);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// Layer 4
	this.w1 = new lib.Symbol8();
	this.w1.setTransform(-39.2,-33.6,1,1,0,0,0,14.4,-15);

	this.timeline.addTween(cjs.Tween.get(this.w1).wait(1));

	// Layer 3
	this.w2 = new lib.Symbol9();
	this.w2.setTransform(-55.4,-8.3,1,1,0,0,0,-52.6,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(1));

	// Layer 5
	this.g1 = new lib.Symbol7();
	this.g1.setTransform(-20.4,-45.1,1,1,0,0,0,26.7,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.g1).wait(1));

	// Layer 1
	this.g2 = new lib.Symbol10();
	this.g2.setTransform(-54.8,-14.2,1,1,0,0,0,-54.8,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.g2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-329.5,191.7,374.6);


(lib.Symbol141 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// t3
	this.t3 = new lib.Symbol39();
	this.t3.setTransform(-26.9,33.4,1,1,0,0,0,-29.2,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.Symbol40();
	this.t2.setTransform(17.8,-144);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.Symbol41();
	this.t1.setTransform(-27.3,-205.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// man2
	this.man2 = new lib.Symbol177();
	this.man2.setTransform(35,146.9,1,1,0,0,0,-22,121.9);

	this.timeline.addTween(cjs.Tween.get(this.man2).wait(1));

	// man1
	this.man1 = new lib.Symbol164();
	this.man1.setTransform(-10,146.1,1,1,0,0,0,-0.1,154);

	this.timeline.addTween(cjs.Tween.get(this.man1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-249.9,229.4,460.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// person3
	this.person3 = new lib.Symbol141();
	this.person3.setTransform(0,58);

	this.timeline.addTween(cjs.Tween.get(this.person3).wait(1));

	// flags
	this.flags = new lib.Symbol12();
	this.flags.setTransform(0,-139.3);

	this.timeline.addTween(cjs.Tween.get(this.flags).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.9,-239,276,507.3);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var count = 1;
		var repeat = 200;
		
		var n = this;
		var p3 = n.p1.person3;
		
		var tr = new TimelineMax();
		tr.to(n.darken, 0.8, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(n.hole, 1.0, {scaleX:1, scaleY:1, ease:Expo.easeInOut}, 0.2)
		  
		  //.from(n.t1, 1.9, {rotation:"-50", x:"+=50", ease:Elastic.easeOut}, 1.2)
		  .staggerFrom([n.t1.r1, n.t1.r2, n.t1.txt1], 1.6, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.08, 1.0)
		  .staggerFrom([n.t1.r1, n.t1.r2, n.t1.txt1], 1.3, {rotation:"+=50", ease:Elastic.easeOut}, 0.03, 1.0)
		  //.staggerFrom([n.t1.g2, n.t1.w2], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 1.3)
		  //.from(n.t1.txt, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 1.3)
		  //.from(n.t1, 1.9, {rotation:"-50", x:"+=50", ease:Elastic.easeOut}, 1.2)
		  .staggerFrom([n.t1.g1, n.t1.w1], 0.3, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.05, 1.4)
		  .staggerFrom([n.t1.g2, n.t1.w2], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 1.5)
		  .from(n.t1.txt2, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 1.5)
		  .from(p3, 0.5, {x:"+=300", y:"+=100", rotation:"+=70", ease:Expo.easeOut}, 0.8)
		  .from(p3.man1.head, 2.0, {rotation:"+=15", ease:Elastic.easeOut}, 0.8)
		  .from(p3.man1.head.h1, 2.0, {rotation:"-=5", ease:Elastic.easeOut}, 1.0)
		  .from(p3.man1.head.h2, 2.8, {rotation:"-=6", ease:Elastic.easeOut}, 1.0)
		  
		  .from(n.p1.flags.fl1, 0.3, {alpha:0, ease:Power0.easeNone}, 1.0)
		  .from(n.p1.flags.fl1, 2.5, {y:"-=50", ease:Elastic.easeOut}, 1.0)
		  .from(n.p1.flags.fl2, 0.3, {alpha:0, ease:Power0.easeNone}, 1.3)
		  .from(n.p1.flags.fl2, 2.7, {y:"-=60", ease:Elastic.easeOut}, 1.3)
		  //.from(n.p1.flags.fl3, 0.3, {alpha:0, ease:Power0.easeNone}, 1.3)
		  //.from(n.p1.flags.fl3, 2.1, {y:"-=30", ease:Elastic.easeOut}, 1.3)
		  
		  //blink
		  .to(p3.man1.head.eyes1, 0.03, {scaleY:0.02, ease:Power0.easeNone}, 2.0)
		  .to(p3.man1.head.eyes1, 0.03, {scaleY:1, ease:Power0.easeNone}, 2.03)
		  .to(p3.man1.head.eyes2, 0.03, {scaleY:0.02, ease:Power0.easeNone}, 2.0)
		  .to(p3.man1.head.eyes2, 0.03, {scaleY:1, ease:Power0.easeNone}, 2.03)
		  
		  .to(p3.man1.head.eyes1, 0.03, {scaleY:0.02, ease:Power0.easeNone}, 2.3)
		  .to(p3.man1.head.eyes1, 0.03, {scaleY:1, ease:Power0.easeNone}, 2.33)
		  .to(p3.man1.head.eyes2, 0.03, {scaleY:0.02, ease:Power0.easeNone}, 2.3)
		  .to(p3.man1.head.eyes2, 0.03, {scaleY:1, ease:Power0.easeNone}, 2.33)
		  
		  //eyes up
		  .to(p3.man1.head.eyes1, 0.2, {x:"-=4", y:"-=4", ease:Sine.easeInOut}, 2.5)
		  .to(p3.man1.head.eyes2, 0.2, {x:"-=2", y:"-=2", ease:Sine.easeInOut}, 2.5)
		  
		  .to(p3.man1.head.eyes1, 0.2, {x:"+=4", y:"-=2", ease:Sine.easeInOut}, 3.0)
		  .to(p3.man1.head.eyes2, 0.2, {x:"+=2", y:"-=1", ease:Sine.easeInOut}, 3.0)
		  
		  .to(p3.man1.head.eyes1, 0.2, {x:"+=4", y:"+=2", ease:Sine.easeInOut}, 3.5)
		  .to(p3.man1.head.eyes2, 0.2, {x:"+=2", y:"+=1", ease:Sine.easeInOut}, 3.5)
		  
		  .to(p3.man1.head.eyes1, 0.2, {x:"-=4", y:"+=4", ease:Sine.easeInOut}, 3.8)
		  .to(p3.man1.head.eyes2, 0.2, {x:"-=2", y:"+=2", ease:Sine.easeInOut}, 3.8)
		  
		  //company
		  .to(p3.man1, 0.8, {x:-22, y:110, scaleX:0.7, scaleY:0.7, rotation:"-=12", ease:Back.easeInOut}, 3.8)
		  .from(p3.man1.head.lips, 1.4, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 4.2)
		  .to(p3.man1.head.eyes1, 0.2, {x:"+=4", y:"-=0", ease:Sine.easeInOut}, 4.5)
		  .to(p3.man1.head.eyes2, 0.2, {x:"+=2", y:"-=0", ease:Sine.easeInOut}, 4.5)
		  .from(p3.man1.hand1, 0.3, {alpha:0, ease:Power0.easeNone}, 4.2)
		  .from(p3.man1.hand1, 1.6, {rotation:"-=50", ease:Elastic.easeOut}, 4.2)
		  .from(p3.man1.hand2, 0.3, {alpha:0, ease:Power0.easeNone}, 4.2)
		  .from(p3.man1.hand2, 1.8, {rotation:"+=50", ease:Elastic.easeOut}, 4.2)
		  
		  .from(p3.man2, 1.4, {scaleX:1.2, scaleY:1.2, rotation:"+=40", alpha:0, ease:Elastic.easeOut}, 4.2)
		  .from(p3.man2.head, 1.4, {rotation:"+=20", ease:Elastic.easeOut}, 4.3)
		  .from(p3.man2.head.lips, 1.4, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 4.3)
		  
		  
		  .to(n.p1.flags.fl1, 0.2, {y:"+=50", alpha:0, ease:Expo.easeIn}, 4.1)
		  .to(n.p1.flags.fl2, 0.2, {y:"+=60", alpha:0, ease:Expo.easeIn}, 4.0)
		  /*.to(n.p1.flags.fl3, 0.2, {y:"+=30", ease:Power0.easeNone}, 4.0)
		  .to(n.p1.flags.fl1, 2.5, {y:"-=50", ease:Elastic.easeOut}, 4.3)
		  .to(n.p1.flags.fl2, 2.7, {y:"-=60", ease:Elastic.easeOut}, 4.2)
		  .to(n.p1.flags.fl3, 2.1, {y:"-=30", ease:Elastic.easeOut}, 4.2)*/
		  .from(n.p1.flags.fl3, 0.3, {alpha:0, ease:Power0.easeNone}, 4.3)
		  .from(n.p1.flags.fl3, 2.1, {y:"-=30", ease:Elastic.easeOut}, 4.3)
		  
		  .to(n.t1, 0.4, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 4.0)
		  //.to(n.p1.tuchi, 0.4, {y:"-=150", ease:Back.easeIn}, 6.0)
		  
		  
		  .from(p3.t3, 1.9, {rotation:"-50", ease:Elastic.easeOut}, 4.7)
		  .staggerFrom([p3.t3.g1, p3.t3.w1], 0.3, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.05, 4.7)
		  .staggerFrom([p3.t3.g2, p3.t3.w2], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 4.8)
		  .from(p3.t3.txt, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 4.8)
		  
		  .staggerFrom([p3.t1.p1, p3.t1.p2, p3.t1.txt], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 4.3)
		  .staggerFrom([p3.t2.p1, p3.t2.p2, p3.t2.txt], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 4.5)
		  
		  //3 scene
		  .set(n.sc3, {x:0})
		  .to(n.p1, 0.2, {x:"-=350", ease:Sine.easeIn}, 7.0)
		  .from(n.sc3.bottle, 0.5, {y:"+=90", ease:Expo.easeOut}, 7.0)
		  .from(n.sc3.bottle, 1.5, {rotation:"+=90", ease:Elastic.easeOut}, 7.0)
		  
		  .staggerFrom([n.sc3.t1.q1, n.sc3.t1.q2, n.sc3.t1.q3], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 7.2)
		  .staggerFrom([n.sc3.t2.q1, n.sc3.t2.q2, n.sc3.t2.q3], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 7.3)
		  .staggerFrom([n.sc3.t3.q1, n.sc3.t3.q2, n.sc3.t3.q3], 1.3, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, 7.4)
		  .from(n.sc3.t3, 1.3, {rotation:"+=90", ease:Expo.easeOut}, 7.4)
		  
		  //3 scene
		  .set(n.sc4, {x:0})
		  .to(n.sc3, 0.2, {x:"-=300", ease:Sine.easeIn}, 9.0)
		  .staggerFrom([n.sc4.q1, n.sc4.q2, n.sc4.q3, n.sc4.q4, n.sc4.l2], 1.0, {y:"+=85", alpha:0, ease:Expo.easeOut}, 0.09, 9.0)
		  .from(n.sc4.p1, 0.8, {scaleY:0, ease:Expo.easeOut}, 9.7)
		  .from(n.sc4.l1, 0.8, {scaleX:0, ease:Expo.easeOut}, 9.7)
		  .staggerFrom([n.sc4.t1.t1, n.sc4.t1.t2, n.sc4.t1.t3, n.sc4.t1.t4, n.sc4.t1.t5, n.sc4.t1.t6, n.sc4.t1.t7], 0.8, {y:"+=55", ease:Expo.easeOut}, 0.05, 10.0)
		  .from(n.sc4.pic, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut/*, onComplete:animEnd*/}, 10.0)
		  .staggerFrom([n.sc4.t2, n.sc4.t3], 0.8, {y:"+=55", alpha:0, ease:Expo.easeOut}, 0.03, 10.0)
		  
		  
		  .call(replay)
		  .to(n.darken, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 13)
		  ;
		
		
		function replay() {
		  if (count == repeat){
		      //tr.pause();
			  tr.kill();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tr.play();
		  }
		  }
		}
		
		function restart() {
			tr.play(0);
			//tuchiFn();
			lines();
		}
		
		
		//lines
		var zz = this.sc4.lines;
		function lines() {
			var i = 0;
			for (currObj in zz) {
			  if(zz[currObj] && typeof zz[currObj] == "object" && i>=56){
				  //console.log(currObj,i)
				  TweenMax.from(zz[currObj], 0.5, {scaleX:0, scaleY:0, ease:Expo.easeOut, delay:(i-56)*0.04+9.5});
				  }
			i++;
			 }
		}
		lines();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9C2AF").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// hole
	this.hole = new lib.Symbol2();
	this.hole.setTransform(0,0,24.995,24.995);

	this.timeline.addTween(cjs.Tween.get(this.hole).wait(1));

	// darken
	this.darken = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.darken).wait(1));

	// sc4
	this.sc4 = new lib.Symbol80();
	this.sc4.setTransform(300,0,1,1,0,0,0,-1.4,0);

	this.timeline.addTween(cjs.Tween.get(this.sc4).wait(1));

	// sc3
	this.sc3 = new lib.Symbol65();
	this.sc3.setTransform(300,20.1,1,1,0,0,0,0.5,19.7);

	this.timeline.addTween(cjs.Tween.get(this.sc3).wait(1));

	// t1
	this.t1 = new lib.Symbol5();
	this.t1.setTransform(-18.9,92.6,1,1,0,0,0,-21.8,-44);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// p1
	this.p1 = new lib.Symbol6();
	this.p1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F2E7").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2999.4,-4999.1,5998.9,9998.2);


// stage content:
(lib.body_240x400 = function(mode,startPosition,loop) {
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