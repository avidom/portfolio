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


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA8A6C").s().p("AABgJIAFABIgLASg");
	this.shape.setTransform(-5.1,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5AB7B").s().p("AAIAUIhigKIg+gqIAJgYIBLAOIBCgRIBDALIAzgBIAlBNIhmAfg");
	this.shape_1.setTransform(2.1,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA8A6C").s().p("AAAgFIgIgOIAOAPIAEAYg");
	this.shape_2.setTransform(-11.9,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA8A6C").s().p("AAAABIgFgWIALATIgGAYg");
	this.shape_3.setTransform(-14.3,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA8A6C").s().p("AAAAEIgEgaIAJAbIgJASg");
	this.shape_4.setTransform(-18,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CA8A6C").s().p("AgGAAIAGgVIgBAVIAIAVg");
	this.shape_5.setTransform(-26.7,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAB484").s().p("AhIAoIglgcIADgvIBVASIA/gLIAvgQIAVAYIghAdIhEAkg");
	this.shape_6.setTransform(-12.6,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAB484").s().p("Ag0AmIg3gNIgUgcIAPgeIASgLIByAWIBmgOIAGASIgCAiIhkAdg");
	this.shape_7.setTransform(-17.7,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAB484").s().p("AhDApIgpgSIgQggIAEghIAVgQIAoAfIBUAOIBjALIABAkIg1AWIg8ADg");
	this.shape_8.setTransform(-19.5,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAB484").s().p("AAlAxIhGgRIg8geIABgkIASgPIAXAAIAUAHIAuAgIBJAKIAGAXIgHAbg");
	this.shape_9.setTransform(-27.5,-1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF3D9").s().p("AgmARIgzgGIgrgMIAoAJIBOAHIA0gEIAsgJIAzgTIAAAFIg5AVIhAAIg");
	this.shape_10.setTransform(-9,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE5AD").s().p("AhrAKIgngNIgHgFIgBgOIAEgDIAmASQAzAPA9AAQA+AAAzgPQAZgJANgJIAEADIAAAOIgGAFQgMAGgZAHQgxAQg+AAIgBAAQg6AAgxgQg");
	this.shape_11.setTransform(-10.8,10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DCB358").s().p("AghAUIg2gHIgygQIBMAOIBGAEIBOgNIAzgWIgEAQIg2ARIg/AIg");
	this.shape_12.setTransform(-9.7,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3D9").s().p("AgrAWIg7gIIgxgQIAtAMIBbAJIA7gFIAzgMIA5gYIAAAHIhBAaIhJALg");
	this.shape_13.setTransform(-8.9,-2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE5AD").s().p("Ah7AOIgtgSIgIgHIgBgRIAGgEIArAWQA5AUBHAAQBIAAA6gUQAdgLAOgLIAFAEIgBARIgHAGQgOAIgcAKQg4AUhGAAQhDAAg6gTg");
	this.shape_14.setTransform(-11,-1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DCB358").s().p("AgnAaIg9gJIg5gVIBXASIBQAGIBZgRIA6gdIgEAVIg+AWIhIAKg");
	this.shape_15.setTransform(-9.6,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhvAXIg4gRIAzANIBkAGIBCgJIA3gPIA/gdIgBAGIhGAhIhQAQIhAACg");
	this.shape_16.setTransform(-7.9,-26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3D9").s().p("AgxAZIhAgJIg2gSIAyANIBkAKIBBgFIA4gNIBAgbIAAAHIhIAdIhQANg");
	this.shape_17.setTransform(-8.9,-15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE5AD").s().p("AiIAPIgygUIgIgIIgCgTIAHgEIAvAZQBAAWBOAAQBPAABAgWQAggNARgMIAFAEIgBATIgIAIQgPAJgfALQg/AVhNABQhKAAhAgWg");
	this.shape_18.setTransform(-11.2,-14.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DCB358").s().p("AgrAcIhEgKIg+gXIBfAUIBZAHIBjgTIBAggIgEAWIhFAZIhQAMg");
	this.shape_19.setTransform(-9.7,-13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE5AD").s().p("AiTANIhAgbIgCgRIAKgEIAyAaQBEAYBVAAQBUAABFgYQAjgNARgNIAJAFIgDAQIgKAFQgQAKgjAMQhDAXhTAAQhPAAhEgXg");
	this.shape_20.setTransform(-11.2,-26);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DCB358").s().p("AhMAXIhjgZIBdAUIBfADIBigSIBBggIgCAQIg6AYIhnAUg");
	this.shape_21.setTransform(-8.4,-23.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],7.8,8.7,-2.3,-4).s().p("AAOAhQgOghgSgSQgVgSgWgLIgTgHIAFgHIAdAHQAiAJARAKQAfAOAaAdQAMAPAGAMQgSAMgHADQgIAEgYAHQgDgMgGgQg");
	this.shape_22.setTransform(-1.4,-32.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3D9").s().p("AgFCcIABgoIgBBOgAAAjBIAGACIgKEzg");
	this.shape_23.setTransform(-2.6,-1.3,1,1,0,0,0,0,1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE5AD").s().p("AgLDoIgCh3IAHi1IgCikIAVAFIgFBDIgCB7IgICdIgBByg");
	this.shape_24.setTransform(-2.8,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DCB358").s().p("AAADoIgGh4IAIiyIgDimIAFACIADC9IgHCfIAEBzg");
	this.shape_25.setTransform(-4,-1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFF3D9").s().p("AACCBIgJlWIAHACIAEFbIAEBOg");
	this.shape_26.setTransform(-17.8,-0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE5AD").s().p("AAGDpIgHh4IgCi0IgLilIAZAFIgCBCIAEB8IgDCdIAFBxg");
	this.shape_27.setTransform(-18.4,-0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DCB358").s().p("AAJDoIgLh4IABiyIgPimIAJACIALC9IAACfIANBzg");
	this.shape_28.setTransform(-18.9,-0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B16D3A").s().p("AiIBDQg4gSAAgbQAAgcA3glQA/gqBJAAQBIAABAAqQA6AlAAAcQAAAbg4ASQg6AThPAAQhPAAg5gTg");
	this.shape_29.setTransform(-11.4,-33.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFDB82").s().p("AAFE7QhIgBgmgVIgYgVIhJnOIgJgHIgFgZQAQgXAjgXQBFguBeAAQBnAABEAvQAjAXANAXIgEAZIgJAIIhAHMIgXAWQgnAVhGAAIgDAAg");
	this.shape_30.setTransform(-11.2,-8.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CA8A6C").s().p("AgpBCIgWhFIAShmIgKBpIAaA2IBeA0g");
	this.shape_31.setTransform(13.3,14.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F5AB7B").s().p("ABfBSIixAbIidgLIgjgWIgBghIgGgUIhBgsIAWgtIgbgXIgPgjIAFggIAUgQIAhgHIhMgaIgLgyIBFgdICsgaIB6AFICHA4IA9B7IDoEvIiMCGg");
	this.shape_32.setTransform(4.6,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-42.2,81.2,92.2);


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBADQgDgDACgBQACgEACADQADACgCACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBgBg");
	this.shape.setTransform(18.2,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAJQgJgHAGgHQADgEAEAAQACgBAEADQADACABAFQABACgDAEQgCAEgFABIgBAAQgBAAgDgCg");
	this.shape_1.setTransform(22.4,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AgRAbQgLgIgCgOQgCgMAIgLQAIgMANgCQALgCAKAIQALAIACAOQACAMgIALQgHAMgNACIgFAAQgJAAgIgGg");
	this.shape_2.setTransform(20.6,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBADQgDgCACgCQACgEACADQAEACgDACQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgBgBg");
	this.shape_3.setTransform(-18.8,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAJQgJgHAGgHQADgEAEAAQACgBAEADQADACABAFQABACgDAEQgCAEgFAAIgBABQgCAAgCgCg");
	this.shape_4.setTransform(-14.7,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292929").s().p("AgRAbQgLgIgCgOQgCgMAHgLQAJgMANgCQALgCAKAIQALAIACAOQACAMgIALQgIALgMADIgFAAQgJAAgIgGg");
	this.shape_5.setTransform(-16.5,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAbQhVgOg6grQBeAiBKAFQBVAFBKggQg6AxhRAAQgXAAgWgEg");
	this.shape_6.setTransform(1.5,52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58382F").s().p("AhZgdIBqABIA3gpIAYAYIhSA3IhRgEIgcBAg");
	this.shape_7.setTransform(-17.7,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D68F6A").s().p("AgTARIg3gaIA4ATIAqACIAzgdIgyAig");
	this.shape_8.setTransform(20.9,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D68F6A").s().p("Ag9AaIgDgHIBLAAIA2gsIg1Azg");
	this.shape_9.setTransform(-13.4,17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9C5E45").s().p("AAGBHQiAgFhuh7QB7A9BwAHQCSAIBUhaQhSCPiGAAIgLgBg");
	this.shape_10.setTransform(1.8,52.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CA8A6C").s().p("AhiC+IAchhIgUBgIA/A7IAwgGIA3gnIghk2IA5iWIg1CVIAkE6Ig8AvIg1AFg");
	this.shape_11.setTransform(3,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#45322E").s().p("AgyAhIBlhFIhkBJg");
	this.shape_12.setTransform(-48.6,-21.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#45322E").s().p("AgoAcIBRg5IhQA7g");
	this.shape_13.setTransform(-47.2,-26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#45322E").s().p("AgsAXIAxggIAogQIglASIgyAhg");
	this.shape_14.setTransform(13.2,-74.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#45322E").s().p("Ag6gzIAAgFIB1Bxg");
	this.shape_15.setTransform(43.2,-15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#45322E").s().p("AhPhRICfCgIgEADg");
	this.shape_16.setTransform(40.1,-6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#45322E").s().p("Agsg2IBZBqIgFADg");
	this.shape_17.setTransform(23.8,-16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#45322E").s().p("AgtALIBRAvIgjiBIAtCPg");
	this.shape_18.setTransform(27.3,-38.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#45322E").s().p("AgpA5IBJAVIgmilIAwCvg");
	this.shape_19.setTransform(3.1,-44.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#45322E").s().p("AgygNIBYA5IANhuIgCCEg");
	this.shape_20.setTransform(-6.5,-39.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CA8A6C").s().p("AgdAsIA3geIgGg9IAEAAIAGBAIg7Afg");
	this.shape_21.setTransform(38.3,38);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CA8A6C").s().p("AAngMIgogQIgsAkIAqgrIAsASIAFA0g");
	this.shape_22.setTransform(40,28.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CA8A6C").s().p("AgChVIAEAEIABCng");
	this.shape_23.setTransform(-37,41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CA8A6C").s().p("AgdAWIAJhBIgDA9IA1Aag");
	this.shape_24.setTransform(-46,38.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CA8A6C").s().p("ABHA1IgKgkIhHhwIgjAAIgdApIAZg0IAsABIAvBVIAaAfIAHAmIAAA6g");
	this.shape_25.setTransform(-45.9,33.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CA8A6C").s().p("AAIhkIAEgDIgXDPg");
	this.shape_26.setTransform(33.5,37.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CA8A6C").s().p("AglADIAlgHIAmAJg");
	this.shape_27.setTransform(2.5,46.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CA8A6C").s().p("AgCAIIgSgaIAoAlg");
	this.shape_28.setTransform(0.3,65.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58382F").s().p("AA7gGIhHAWIhPgiIASgdIA2AaIBcgaIATBfg");
	this.shape_29.setTransform(22.7,-1.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58382F").s().p("Agii6IBKB2IgMCYIgWBBIgtAmg");
	this.shape_30.setTransform(38.4,8.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58382F").s().p("AmTItIguhVIgljuIhHiSIB7hbIhmBFIgIgfIB0hWIhUA6IgVgtIBTi+IBEhsIgVgaIBRg/IBFgOIAlhVIBzg1IgPA7IAjgdIBeAJIC/goIgbA4ICoAqIhSAPIAoAWIAcBGIB4CIIA3BsIgTAbIAJBmIAaCiIgfgPIBDCOIgsAKIhzh2IBOBTIgoAhIgPgQIACgUIhMh3IgBA8IhAhDIhbhsIBWBvIgaAWIipirIAMDfIgwgQIgqg9IgcgGIigikIhVAiIhZBFIAPBLIgiBqIALFKgAE/g8IgtiRIAjCEIhTgwgAgOhNIACiGIgNBwIhag7gABJhwIgyixIAoCnIhJgVIBTAfg");
	this.shape_31.setTransform(0,-24.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F5AB7B").s().p("AhmI/IkKjbIABkRIgTlIIAVhnIgOhOIBNhiIAug0IAZAqIAvgYIEXAaICZCZIAWgVIB2BcIgvFKIgdETIgBBBIjyDXgAAVGmIgognIASAcIAWALgAA+DcIgngLIglAKIBMABgAhGBuIBEBDIA1gFIA8guIgkk7IA1iUIg5CVIAhE2Ig3AoIgxAGIg+g8IAUhggAjFgyIBLAAIA1g1Ig2AuIhNAAgAC6g5IAvAAIAxgkIgzAfIgrgCIg5gWg");
	this.shape_32.setTransform(0.2,24.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5AB7B").s().p("AAZCcIh1ifIABhcIAlg1IAygIIANATIAuBUIAmAWIgHgDIAICqIgjAVgAgJh/IBHByIAKAiIAEA2IABg6IgIgkIgaghIgvhVIgsgBIgZA0IAdgpgAAfBCIg1gaIACg9IgJBBIA8AWg");
	this.shape_33.setTransform(-46,36.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F5AB7B").s().p("Agjh4IApgjIA+AUIgCCAIg2B7IgrAfIgkAJgAAZAFIg3AeIAAADIA7geIgGhAIgDAAgAA4hzIAGAyIgEg2IgvgSIgnAtIAqgng");
	this.shape_34.setTransform(38.4,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-82.6,111.7,165.3);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4C9C3").s().p("Ah0DGQgDAHgWgBQgsgChcgnIgHgqIAQAPQAWAQAaAIQBVAXBnhMQByhXgaiJQgLg6gjguQgigvgugRIAjgDQArAFAuAsIAVhNIAVBUIA7g/IgqB3IB/gRIhfA7IB0AZIhmAVIB/A/Ih4AAIBpBPIhpgSIBGCGIisg8IgYALIBQB+IhthKIAPB0Ig9hbIgEBbIgfhRIgPBtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-31.8,57.2,63.6);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA8A6C").s().p("Ag1AEIADgJIBoALg");
	this.shape.setTransform(-16.1,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA8A6C").s().p("Ag2ACIgVgYICXAjIgDAKg");
	this.shape_1.setTransform(-17.8,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA8A6C").s().p("AgpAAIgMgWIBqAtg");
	this.shape_2.setTransform(-18,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB484").s().p("AgPAqQg7gPACglQABgQANgLQANgLAUAAQAlAAAgAcQAhAagEAcQgCAHgLAFQgKADgPAAQgVAAgdgHg");
	this.shape_3.setTransform(-15.4,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAB484").s().p("Ag5AVQglguAagUQAXgSA2AMQAwAMARAfQAPAbgWASQgSANgZAFQgJACgJAAQgkAAgbgkg");
	this.shape_4.setTransform(-15.9,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB484").s().p("AAQA5QhAgBgagrQgegvAxgQQAvgQA1AdQArAXgBAhQgBASgJANQgZAHgdAAIgHAAg");
	this.shape_5.setTransform(-17.9,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAB484").s().p("AgCAvQhMgZAKguQAKgrAyASQAXAIAXARIAOAQQAPATADAaQACAPgYADIgJAAQgTAAgWgIg");
	this.shape_6.setTransform(-16.7,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAB484").s().p("AA9AAIgUgzQggAAgmgEQhQgHgogWQgLgFgDgKQgDgKAJgFQAzgfBpAFQBmAFAeAiQAiAmgBBgQAAAxgHApIhXATQAJhLgShDg");
	this.shape_7.setTransform(10.1,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF3D9").s().p("AgpAPIg1gIIgtgNIApAKIBTAJIA3gCIAvgJIA1gSIAAAFIg8AVIhEAHg");
	this.shape_8.setTransform(3.6,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE5AD").s().p("AABAdQg+gBg1gSIgogPIgIgGIgBgOIAFgDIAoATQA0ARBCABQBBACA2gPQAbgIAOgJIAEADIgBAOIgHAEQgNAHgaAIQgvAOg6AAIgLAAg");
	this.shape_9.setTransform(1.8,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCB358").s().p("AgkASIg4gIIg0gSIBPAQIBJAHIBTgMIA2gWIgEAQIg5ARIhDAHg");
	this.shape_10.setTransform(3,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3D9").s().p("AgvAVIg9gKIg0gSIAwANIBfAMIA/gEIA1gLIA+gYIgBAHIhFAaIhNAKg");
	this.shape_11.setTransform(4.1,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE5AD").s().p("AAAAlQhGgCg9gWIgugUIgIgHIgCgSIAHgEIAtAYQA8AXBLABQBLACA9gUQAfgLAPgLIAGAEIgCASIgHAGQgPAJgeAKQg4AShDAAIgLAAg");
	this.shape_12.setTransform(1.9,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DCB358").s().p("AgpAYIhBgLIg7gXIBaAVIBVAIIBegQIA+gdIgFAVIhBAWIhMAKg");
	this.shape_13.setTransform(3.3,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah2AUIg6gTIA1APIBqAIIBFgIIA6gOIBDgdIgBAHIhKAhIhUAOIhEABg");
	this.shape_14.setTransform(5.7,-17.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3D9").s().p("Ag0AXIhDgLIg5gUIA0APIBpANIBFgFIA8gMIBDgaIAAAHIhMAdIhWALg");
	this.shape_15.setTransform(4.4,-6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE5AD").s().p("AABApQhOgChEgZIgzgWIgJgIIgBgUIAGgEIAyAbQBCAZBUABQBSACBEgWQAigMASgNIAGAFIgBAUIgJAHQgRAKghAKQg+AVhLAAIgKAAg");
	this.shape_16.setTransform(2,-5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DCB358").s().p("AguAbIhHgMIhCgaIBkAXIBeAJIBogRIBFghIgGAYIhIAYIhVALg");
	this.shape_17.setTransform(3.5,-3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE5AD").s().p("AAAAoQhVgBhIgbIhCgdIgBgSIAKgFIA1AdQBGAbBbACQBXACBKgYQAlgNASgNIAJAFIgCARIgMAFQgRAKglAMQhBAWhQAAIgMgBg");
	this.shape_18.setTransform(2.2,-17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DCB358").s().p("AhRAUIhogcIBiAXIBkAFIBogRIBFggIgDARIg+AYIhsASg");
	this.shape_19.setTransform(5.1,-15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],8.1,9.4,-2.3,-4.2).s().p("AANAjQgNgjgTgTQgVgTgYgMIgTgJIAGgGIAeAIQAjAKASAKQAhAQAaAfQAMARAHAMIgbAQQgIADgbAIQgCgOgHgRg");
	this.shape_20.setTransform(12.6,-24.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3D9").s().p("AgKB6IAOloIAHADIgTFtIgCBsg");
	this.shape_21.setTransform(10.6,10);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE5AD").s().p("AgSD0IABh9IAMi+IABiuIAXAHIgHBFIgGCDIgMClIgDB3g");
	this.shape_22.setTransform(10.5,9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DCB358").s().p("AgGD0IgDh+IANi8IgCiuIAIACIgCDHIgKCoIACB4g");
	this.shape_23.setTransform(9.2,9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF3D9").s().p("AAAB6IgDloIAGADIgCFtIADBtg");
	this.shape_24.setTransform(-5.3,10.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE5AD").s().p("AAAD1IgGh+IACi+IgJiuIAbAGIgEBGIACCCIgHCmIAEB3g");
	this.shape_25.setTransform(-5.8,9.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DCB358").s().p("AAED1IgIh/IAEi7IgLivIAJACIAHDHIgECnIAMB5g");
	this.shape_26.setTransform(-6.5,9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B16D3A").s().p("AAABaQhUgCg7gVQg8gUABgcQABgfA7glQBCgqBMABQBNACBDAtQA8ApgBAeQAAAcg8ASQg2ARhLAAIgOgBg");
	this.shape_27.setTransform(2,-25.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFDB82").s().p("AgFFLQhNgCgogXIgZgXIhDnoIgJgIIgFgaQASgYAlgXQBKgvBjACQBsADBIAyQAjAZAOAZIgFAaIgKAIIhNHjQgGAMgUALQgmAUhBAAIgNgBg");
	this.shape_28.setTransform(2.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-34.6,53.3,69.2);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68F6A").s().p("AgtALIBbgbIhHAhg");
	this.shape.setTransform(40.1,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D68F6A").s().p("AhFADICLgSIiFAfg");
	this.shape_1.setTransform(32.2,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D68F6A").s().p("Ag5AZIB0g/IhqBMg");
	this.shape_2.setTransform(22.5,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D68F6A").s().p("AAsgnIAGAQIhjA/g");
	this.shape_3.setTransform(23.5,39.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5AB7B").s().p("AgmFHIhSgcIgVguIgZgBIg9hTIgfgBIhRgzIABhxIBjhfIB2ACIANAgIBahBIiZhEIARhvIEggbIDOB/IgLFHIhiCWIiIA1g");
	this.shape_4.setTransform(39.4,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.427)","rgba(255,255,255,0)"],[0,1],-17.1,-9.5,17.2,9.7).s().p("AjYhMIAmhDIGLDbIgmBEg");
	this.shape_5.setTransform(-21.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBTQhEgDg2gmIAlhAQAnAWA4ABQBvAHBWhaQhGCliAAAIgJAAg");
	this.shape_6.setTransform(-47.3,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#2A160E","#5D3017"],[0,1],19.8,33.4,-39.4,-10.2).s().p("ADqB8Qgbg0hOgxQgrgZiKhFQiUhKhhg7QAcgnADgYIH7EVQAZAVAQAiQAiBGgmBHIgWArQgEAJgJAKQAVhWgeg6g");
	this.shape_7.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#472016","#85472A"],[0,1],37.1,27,-36.1,-26.9).s().p("ADFFGQgygIgngVInmkNQgvgfgWg5QgYhBAZg7QATgtAlglQBzAtBhgxQAwgYAagiIH7EXQAYAVARAgQAhBFglBHQgUAlgbArQgaAqgLAMQguAzhJAAQgTAAgVgDg");
	this.shape_8.setTransform(-21.2,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 7
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBA575").s().p("AkdhgIAxhZIIKEZIgxBag");
	this.shape_9.setTransform(30,33.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.2,-26.8,140.7,102.2);


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


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4DBDB").s().p("Ah0B/IhJg3IANjVIFuAZIgNDVIhMAtg");
	this.shape.setTransform(19.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,28.6);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4DBDB").s().p("Ah0B/IhJg3IANjVIFuAZIgNDVIhMAtg");
	this.shape.setTransform(19.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,28.6);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlBXIAGg5IByiUIBTAGIigDng");
	this.shape.setTransform(10.2,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,24);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlBXIAFg5IBziVIBTAHIigDog");
	this.shape.setTransform(10.2,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,24);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9B8IChj9IBZAGIieD9g");
	this.shape.setTransform(12.6,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,26.1);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9B8IChj9IBZAGIieD9g");
	this.shape.setTransform(12.6,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,26.1);


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


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32444C").s().p("AgEgQIhCgCIBEgGIBIAxg");
	this.shape.setTransform(56.6,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32444C").s().p("AAOgvIhVhQIBjBDIArC8g");
	this.shape_1.setTransform(56.5,38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61757D").s().p("AmmhTIAfhjIhqhzIDhixIBiBiIBbgDIEiEgIEjCpIjkGNg");
	this.shape_2.setTransform(25.7,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.arm = new lib.Symbol131();
	this.arm.setTransform(7,10,1,1,0,0,0,45.6,48.3);

	this.timeline.addTween(cjs.Tween.get(this.arm).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-80.5,151.1,161);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lok = new lib.Symbol130();
	this.lok.setTransform(46.4,68.8,1,1,0,0,0,57.5,68.8);

	this.timeline.addTween(cjs.Tween.get(this.lok).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61757D").s().p("AlEIGICKknIBOkzIAApyIFkhQIBNO2IjVIRIjrBmg");
	this.shape.setTransform(54.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-80.5,173.3,161);


(lib.Symbol127 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// head
	this.head = new lib.Symbol128();
	this.head.setTransform(40.7,-31.7,1,1,0,0,0,-1.3,121.2);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99D74").s().p("AhzD5IhmiAIAKivIgUjBIC2AbIB3AEICagsIgdC1IASBkIiOBgIh8CQg");
	this.shape.setTransform(41.6,-66.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32444C").s().p("AhgBUIgYiEICEhgIh0BkIAWBqIDLBTg");
	this.shape_1.setTransform(13.1,-50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32444C").s().p("AAPgMIhOhUIBWBOIAoBzg");
	this.shape_2.setTransform(-29.5,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32444C").s().p("AASgUIhPgGIhNA1IBMhGIBUAHIB1BQg");
	this.shape_3.setTransform(33.6,71.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32444C").s().p("AgTAcIiMguIANgJIB/ArICvAEIAEAIg");
	this.shape_4.setTransform(14.5,-31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32444C").s().p("AgugmIBdBGIgaAHg");
	this.shape_5.setTransform(99.3,-42.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32444C").s().p("AjkB/IC/iyICTgRIBqhEIANAOIh1BBIiUAWIi7Csg");
	this.shape_6.setTransform(76.4,-61.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32444C").s().p("AjhBUIC7ggIDqiTIAnARIgegFIjyCVIjFAeg");
	this.shape_7.setTransform(63.4,-40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32444C").s().p("AgkBKIATjLIARgKIgYDOIA9BJg");
	this.shape_8.setTransform(70.2,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32444C").s().p("AgugTIBeiBIAIAGIheCAIgRCjg");
	this.shape_9.setTransform(86.1,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32444C").s().p("AgSgGIhvAYIBygpICRAvg");
	this.shape_10.setTransform(128.5,109.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32444C").s().p("AgfgXIg5ARIgLgQIBHgKICABBg");
	this.shape_11.setTransform(124.2,115.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32444C").s().p("AhFUqIhJkqIBWiOIAvnUIAnjEIAmrxIg3nQIAylCIBQAAIhwFJIA4HGIgjL0IgrDJIg0HgIhJCEIBFEjg");
	this.shape_12.setTransform(24.2,103.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D656C").s().p("AjqHVIlRieIAZhuIgOhuIDnk4IgGihIBrg9IDrgZIEZAyIBoBWIgkFMIDYFrIi0BWIoFAUg");
	this.shape_13.setTransform(25.1,180.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#61757D").s().p("An4MmIAAjNIBfgaIBKhiIEZjuIgsg/IAdhHIholSIitlfIAjkLIBliAIDiAAICQGjIBUCpIBeFbICnDcIhgEUIpyH4IhighIhuA5g");
	this.shape_14.setTransform(117.8,96.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D656C").s().p("Ak9EXIh+gxIhlg1IAAimIFSjfIE5hCIFRAAIBlBqIhxA+IiTAVIjBC4IjmC4g");
	this.shape_15.setTransform(44.2,-57.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5AB7B").s().p("Ah0BdIAAj9IBsgjIB9EgIiXBng");
	this.shape_16.setTransform(67.9,177.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F47936").s().p("Ap+YPIizhmIAsi3IgNiSIBQjXIBwh5IAAiEIB1k+IhKjyIAAkGIiGlbIivk5IF/kIIhlg1IAAimIFRjeIE6hFIFRAAIBsByIB2AoIgzEvIgvAOIC9EvICGMhIiGL+IAbGvIhdA3IAACaIm3DDIn3Ahg");
	this.shape_17.setTransform(47.6,74.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 4
	this.hand = new lib.Symbol129();
	this.hand.setTransform(-29.2,2,1,1,0,0,0,52.5,-59.6);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.3,-235.6,336.7,471.1);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.arm = new lib.Symbol125();
	this.arm.setTransform(-22.6,-9.8,1,1,0,0,0,15.7,27.1);

	this.timeline.addTween(cjs.Tween.get(this.arm).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB8038").s().p("AipHdQhkgkhRhGQhQhEglhNQg+h/AAjFQAAg+AGg9IAGgyIEZgxIgHBLQgEBaANBJQAqDoDIgWQDKgWCwk1QA2hhAuhyIAjhfIAHBsQAFCGgOB9QguGOjbCmQhzBYiHAAQhSAAhbghg");
	this.shape.setTransform(12,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-71.5,130,143.1);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED5638").s().p("AB6ggQC3AZCOAwQmShNkcAiQhaAJhEAVIgxASQDMh+FsAwg");
	this.shape.setTransform(-10.4,-233.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5E21E").s().p("AgbAyQgUgNgGgYQgGgWAMgVQALgVAXgGQAUgFAVANQAUANAGAYQAGAVgMAWQgMAVgWAGQgHABgGAAQgNAAgPgJg");
	this.shape_1.setTransform(-36.7,99.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E21E").s().p("AgbAyQgUgNgGgYQgGgWAMgVQALgVAXgFQAUgGAVANQAUANAGAYQAGAWgLAVQgMAVgXAFQgHACgHAAQgNAAgOgJg");
	this.shape_2.setTransform(-37.2,62.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5E21E").s().p("AgbAyQgUgNgGgYQgGgWAMgVQALgVAXgGQAUgFAVANQAUANAGAYQAGAWgMAVQgMAVgWAFQgHACgHAAQgNAAgOgJg");
	this.shape_3.setTransform(-37.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5E21E").s().p("AgbAyQgUgNgGgYQgGgWAMgVQALgVAXgGQAUgFAVANQAUANAGAYQAGAWgMAVQgMAVgWAFQgHACgHAAQgNAAgOgJg");
	this.shape_4.setTransform(-30.9,-32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C06B3A").s().p("Aj2jjIEMGdQAQgvAXgvQAwhcAnAEQAoAEAhBBQARAhAJAfQgVgXgagXQgzgwgWgEQgWgFglBhQgSAwgOAxg");
	this.shape_5.setTransform(-43.7,-69.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C06B3A").s().p("AjbDqQAshSAogXQAngVBmBAQAzAhAsAlICbopIh+JhQighjhGgbQgsgSg8BOQgeAmgVAqQAOglAWgpg");
	this.shape_6.setTransform(13.6,-87.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C06B3A").s().p("AhvAVQhOgRhKgZIg8gYQCzArD6AJQB/AGBbgCQhnAjh4AAQhlAAhvgZg");
	this.shape_7.setTransform(-22.2,45.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C06B3A").s().p("AiUDEQBJisBohxQABg0AFgzQAJhnAQAAQARAAgJBfQgFAvgIAwQALgyANgyQAahiANADQANADgSBRQgJAogMAnQAUghAWgdQArg7AKAQQAKAQgpA0QgUAZgXAXIgrAuQg1A7gsA5Qh5CbgoBuQAPgvAZg6g");
	this.shape_8.setTransform(-95,-45.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C06B3A").s().p("AlHAoQisgoiZg/IhfgrQClBBKKAvQFiAaFGAMQkCA/kJAAQkQAAkYhDg");
	this.shape_9.setTransform(-25.8,29.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C06B3A").s().p("AgEhdIAZAAIgpC7g");
	this.shape_10.setTransform(-104.7,119.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C06B3A").s().p("AgJhaIAeAAIgpC1g");
	this.shape_11.setTransform(-112.6,118.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C06B3A").s().p("AgBhlIAdAFIg4DGg");
	this.shape_12.setTransform(-122.8,117.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C06B3A").s().p("AAChdIAVAAIgtC7g");
	this.shape_13.setTransform(-130.7,116.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C06B3A").s().p("AoTgrIAGggIQgCXg");
	this.shape_14.setTransform(-84.1,111.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C06B3A").s().p("AgOhjIAdgFIgFDRg");
	this.shape_15.setTransform(-0.9,114.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C06B3A").s().p("AgRBeIAjjGIgFDRg");
	this.shape_16.setTransform(36.2,115.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C06B3A").s().p("AAShoIAADMIgjAFg");
	this.shape_17.setTransform(46.7,115.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C06B3A").s().p("AgOhlIAdAAIgPDLg");
	this.shape_18.setTransform(73.3,115.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C06B3A").s().p("AgOheIAdAGIgYC2g");
	this.shape_19.setTransform(90.2,115.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C06B3A").s().p("AgMheIAYAAIgNC8g");
	this.shape_20.setTransform(99.4,115.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C06B3A").s().p("Ap2gUITtAHIztAhg");
	this.shape_21.setTransform(45.6,105.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D0373C").s().p("AgNAYQgMgJAKgZQAKgaANANQAHAHAFAMIgUAgIAAAAQgHAAgGgEg");
	this.shape_22.setTransform(90.2,-45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#545150").p("AB9gYQgIAmgiAZQggAYgdgKQgSgHgEgXQAAgGAAgGIABgeIABAcQgBAHgBAHQgEAVgOAJQgaAQgagEQgigGgUgm");
	this.shape_23.setTransform(80.6,-44.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D4C9C3").s().p("AAbCKQgIgJAGgUIAHgSQgggYg5hSIg1hOIAggvQATBFA+BHQAgAjAdAXIAQgHQASgEAKAQQAKAPgVAHIgXADIANARQAJASgNAFQgNAEgMgNIgKgOIgFAXQgFANgFAAQgDAAgDgDg");
	this.shape_24.setTransform(176.4,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D4C9C3").s().p("AAbCTIgKgdQgGARgJANQgOAZgLgUQgLgTASgVQAJgKAKgGQg1hEgihMIgXhBIAtg4IBkDfIAagFQAcgBANAUQANAUghAIIgkAEIAQAdQAMAfgSAGIgHACQgOAAgLgWg");
	this.shape_25.setTransform(166,27.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4C9C3").s().p("AgaADQgHgXAVgFQAUgGAKAHQAKAHAAAVQAAAGgDAHQgHAMgSAAQgTAAgHgag");
	this.shape_26.setTransform(49.4,-2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D4C9C3").s().p("AAAAiQgWgDgCgWQgCgWAagPQAYgNABAVQABALgFALIACARQgDAPgQAAIgEAAg");
	this.shape_27.setTransform(64.5,18.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D4C9C3").s().p("AjHB7QgkgrANgfQALgaAZARQANAJAKAOQA8hACNhRQBHgoA8gbIAvAzQAiAzhGgGQhFgFiGBJIh6BMIAJALQAGAQgPAWQgIAKgJAAQgQAAgVgbg");
	this.shape_28.setTransform(69.4,-12.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4C9C3").s().p("AiFCTQgZgZAIgaQAGgWAaAAQAMAAAMAEQAuhaBZhYQAmglAfgXIgDgFIAPgEIgMAJIArBIQg/ALhSBYQgnAtgcArIAHAiQACAjgbACIgFAAQgdAAgWgXg");
	this.shape_29.setTransform(76.9,5.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D4C9C3").s().p("Ah0EFIBKjWIiClFIAsgnQA2goAugFIg1A1ICAAHIhSAVICmBDIh0gLICeBtIhpAVIBKAjIhKAVIBNBLIg0gDIAcBpIg8gcIgOBtIgggZIgDCQIgohGIgVBfg");
	this.shape_30.setTransform(131.8,-20.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F5AB7B").s().p("AgkDsQgRgdA8hHIgeAeQhkBXgJgjQgJgjBNhNQAngnAmggQgxAkg0AcQhoA3gHgoQgGgnBchEQAegTAegTQgjAUglAPQhsAygNgdQgNgbBshLQA2gmA4ggQgugMgrgRQhWggARgSQASgRCVAFQBJADBHAGICICzQhABRhEBOQhzCDgcAAQgGAAgDgEg");
	this.shape_31.setTransform(112.3,31.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D4C9C3").s().p("AAXBLIg+ARIA+iKIhaBPIAciHIhbAmIBKhbIgEAuICSAmIAtDOIh7AVg");
	this.shape_32.setTransform(86.9,-7.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#545150").s().p("AgMAQQgGgHAAgJQAAgIAGgHQAFgGAHgBQAHABAGAGQAGAHAAAIQAAAJgGAHQgGAGgHAAQgHAAgFgGg");
	this.shape_33.setTransform(91.1,-60.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#545150").s().p("AgIANQgFgGAAgHQAAgHAFgFQAEgGAEAAQAGAAAEAGQADAFAAAHQAAAHgDAGQgEAGgGAAQgEAAgEgGg");
	this.shape_34.setTransform(69.8,-62.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#545150").s().p("AgkAYQgngZAFgWQAFgaA8AGQA5AFAQAdQANAWgmATIgqAOQgSgJgTgNg");
	this.shape_35.setTransform(80.9,-48.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D4C9C3").s().p("AiEFNQAAgLAHgiQAWhgAcgSQAtgchBAcQgTARgUAWQgnAqgDAUIAIhMQgSAHgUALQgoAWgKAUQgGAMAAgMQABgNAGgVQATg8AcgLQgagCgdACQg7AEgPAUQgSAZAQgYQAKgNAOgQQAvg0AgAAQgfgDgkgBQhGgCgVAKQgMAGAGgIQAFgHARgMQAvghAugDQgNgLgUgJQgogSgkAKIAAgGQABgGAGgFQATgTA/gCQgPgEgTgMQglgXgSgmIAtAWQA0AVAhgDQgSgNgVgRQgogkgKgWIAWAMQAaANAUADQgKgLgKgOQgUgdAAgPIARAOQAUANAQgDQAPgCgIhWIgMhVIH3DiIAxgOQA4gKAkAUQgoAQgVAQIAJAJQAFALgSAMIAlAEQApAMAXAnQgSgGgZgEQgxgHghAVIApADQAvAOAhAwQgWgCgeACQg7AFgmAXIgLAGIAmAQQAvAeAPA1QgXgPgdgOQg6gdgbAFIAOAcQAPAiADAjQACAjgXgwIgYg4IgMCCIhQhtIgxBQIAEhMQgmADgnAOQhTAegPA6QgHAZgCAAIAAgEg");
	this.shape_36.setTransform(82.6,-46.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D4C9C3").s().p("Ai9BsIgIh7QAhgMAzANQAaAHATAHIg1hLQAfgDAoAeQAUAOAOAPQAAgWgmguIgmgpQAwALA3A6QAdAeATAbQAEgVgghEQBLA3AIA3IABAPQADgcgHggIgQg5QAcASATA3QAKAaAEAYIAAhHQAoAnACBAQABAhgHAYgABrBAIgEAQQAGgMADgPQgCAGgDAFg");
	this.shape_37.setTransform(83.5,-73.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D4C9C3").s().p("AgbhDIgwA8IgdiBIDAgkIAQEJIhzBQg");
	this.shape_38.setTransform(57.2,-69.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D4C9C3").s().p("Ah3BZIATjuIDcAUIhSC7IhVh9IAdDZg");
	this.shape_39.setTransform(108.5,-66.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D4C9C3").s().p("ABWE8Ih1gGIlin7IHFhjIAFgKQAJgJASgBQA4gCB5BZQCSBrgyDHQgSBJgoBCQgjA7gcARQgmAZhyAAIgOgBg");
	this.shape_40.setTransform(101.1,-22.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB8038").s().p("AAkIjQA2gmAwhFQBgiLgeiaQgdiZkihpQhbghhqgXIhYgSIiHogICOA5QCsBICVBNQHeD0BSDCQBgDfhhDzQhaDljLB4g");
	this.shape_41.setTransform(118.2,-45.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C06B3A").s().p("AgbJRQgQpbgfhmQgfhkBdkzQAbhhAmhoIAehPIgvC1Qg/D/goCvQgHAdAYBsQAMAzANAwIAELwIgGjPg");
	this.shape_42.setTransform(-20.6,24.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EB8038").s().p("AqLMZIUY7LIhxdlg");
	this.shape_43.setTransform(-76.6,47.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8ABA6").s().p("AgBBMQArhagch5IANAYQANAfACAhQAIBihcBVQAXgWASgmg");
	this.shape_44.setTransform(61.7,-186);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8ABA6").s().p("AAAAvQAcg6gJhPIAHARQAGAWAAAWQAABFg/AzQAQgOAPgeg");
	this.shape_45.setTransform(76.6,-173.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8ABA6").s().p("AAAAPQANgdgCgeIADAbQgCAlgYAZQAHgMAFgSg");
	this.shape_46.setTransform(71.2,-176.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8ABA6").s().p("AgCAmQAdg2ACg/IADAPQACASgDAUQgKA8g1Aug");
	this.shape_47.setTransform(65.4,-178.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8ABA6").s().p("AiLClIAuARQAHg2AhhMQA/iWCChsQgzA0g1BOQhoCZgLCCg");
	this.shape_48.setTransform(-75.9,-171.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8ABA6").s().p("ADGCMQhLiVhjhSQh3hkhpgrQhdglhmgDIBNAAQCCAHBKAqQCTBWBnCLQA0BFAWA1IAWgZQAZgjAUg1IgEAoQgMAuglAiIAcBQIAMADQAPABAQgCQA1gLAwg2QgPAUgYAUQgwArguAIIAjgEIguArQgRg8glhMg");
	this.shape_49.setTransform(26.6,-184.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8ABA6").s().p("AgJAZQgXgaAggqIgIAeQgDAgAfAZQgTgGgKgNg");
	this.shape_50.setTransform(-51.2,-240.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8ABA6").s().p("AgXAXQgKgkAgggQAKgQARgGQgRALgKALIgEAGQgaAnAhBEQgSgTgHgag");
	this.shape_51.setTransform(-44.2,-246.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8ABA6").s().p("AgEAhQAVgmgFg3IANAcQAKAggQAaQgPAagQAHIgQACg");
	this.shape_52.setTransform(22.2,-240.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B8ABA6").s().p("AgcAWQgBhHA6glQgSALgMAcQgdA1APBRQgMgdgBgkg");
	this.shape_53.setTransform(12.1,-244.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8ABA6").s().p("AAUgYIgBgyQAaA5gjAzQgKAQgPAOIgOALQAqgsAHg3g");
	this.shape_54.setTransform(26.5,-237);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ED5638").s().p("AgcAiQgMgOAAgUQAAgSAMgOQANgPAPAAQARAAAMAPQAMAOAAASQAAAUgMAOQgMAOgRAAQgQAAgMgOg");
	this.shape_55.setTransform(-87.5,-134.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F5AB7B").s().p("AAaBbQhHgngfg0Qgig6A2ggQAwgcAzA3QAaAbARAiIADATQACAZgCASQgGAogaAAQgNAAgSgJg");
	this.shape_56.setTransform(-90.8,-145.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#ED5638").s().p("AgcAiQgMgPAAgTQAAgTAMgOQAMgOAQAAQAQAAANAOQAMAOAAATQAAATgMAPQgMAOgRAAQgQAAgMgOg");
	this.shape_57.setTransform(57.1,-139.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F5AB7B").s().p("AhhgfIAHgQQALgTAOgMQAtgpBFAjQBNAngtBAQgoA8hOAWg");
	this.shape_58.setTransform(60.7,-150.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B8ABA6").s().p("Ag+BBIAHgRIAygYQAygiASg4IgMArQgRAtgfAWQgcAWgWACg");
	this.shape_59.setTransform(45.9,-187.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8ABA6").s().p("AgNAyQgwg6AlhUIgDASQgDAVADAXQAIBGA8A1QgggNgWgeg");
	this.shape_60.setTransform(-51.9,-212.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B8ABA6").s().p("AgpBsQA9gcAjgsQAkgpAAhCIgHg3QARArgDAsQgFAwgiAtQgfAnhBAWIg8AMg");
	this.shape_61.setTransform(66.3,-174.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CA8A6C").s().p("AgJAxQgqgSgNgYQgNgVARgXQAPgWAegFQAWgFAhANQAQAGALAHQgigOgjAJQgtAKAEAmQAFAlA2ATQAcAJAbACQgoAAgogSg");
	this.shape_62.setTransform(-31.1,-116.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CA8A6C").s().p("AhEAdIgEgYQBCAJAtgTQAYgLAKgMQgjAwg3AKg");
	this.shape_63.setTransform(-16.6,-128.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CA8A6C").s().p("AgNgBIgvADQAsgRAqALQAWAEANAJQgYgNgyADg");
	this.shape_64.setTransform(11.4,-161.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CA8A6C").s().p("AgWAAIggAEQAegRAqAJQAWAEAPAIQgngLgmADg");
	this.shape_65.setTransform(-50.2,-161.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CA8A6C").s().p("AArggIhygDIhiA2IBphPICEAOIBmBrg");
	this.shape_66.setTransform(10,-187.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CA8A6C").s().p("AhRBFQgogFg4gkIgwgiQBLAqBvgBQBXgCA3gYQAkgNAvgiQAXgSARgOQgiBRh1AmQhDAWg4AAQgRAAgQgCg");
	this.shape_67.setTransform(-19.2,-137.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CA8A6C").s().p("AgpB1QgdhFgLgvQgNg1AKgsQALg0ApgOQAggLAvgCQAYgCASABQgVACgaAHQgyAOgYAaQgbAeAKBtQAJBoAaA9QgNgZgOgjg");
	this.shape_68.setTransform(-44.8,-132.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CA8A6C").s().p("ABgB4QAChbgJgqQgFghgFgRQgHgbgQgUQgogziEgpICqAjIAhA0QAgBCgCBFQgCBJgLA+QgGAfgFARQACglABgug");
	this.shape_69.setTransform(-0.2,-130.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D4C9C3").s().p("AAJCyQligKgsgWQgcgOgPgjQgPgkAIgqQAThqCTg5QBQgfBygHQBugHBsASQByATBLApQBTAtATA/QAhBrg3AsQgSAOgYAGIgUACIAKAOQipgBiygFg");
	this.shape_70.setTransform(-11.9,-243.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D4C9C3").s().p("Ar3HSQgmgshAhfQiAi+A0isQAsiUCsiGQCDhmE3gqQBkgOB7gHICJgHQB9gJC+AyQEGBDCZCQQEQD+j3FAQhCBWgtAPQgPAFgKgDIgIgEQgdkNjIjZQhdhmhtg7Qhxg/htgFQjOgJiEA+QhkAviLCLQhwBug2DeQgaBvgFBZQgGgDgSgXg");
	this.shape_71.setTransform(-12.4,-184.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CA8A6C").s().p("ABUDgIAagJIhtg/IAWiFIBbADQABgjgHgpQgKhUgigYQgsgghCAGQhUAHiCA9IDBhpICOAjIBKBtIAACAIhqgEIgNBmIBMA4IA3gBQA/gHAlgbQgMAJgYALQguAWg3ALQgjAHgHAAQgBAAAAAAQAAAAAAAAQAAgBABAAQABgBABAAg");
	this.shape_72.setTransform(-40.9,-167.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgBAEQgEgDADgCQACgEADACQADADgCADQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape_73.setTransform(5.4,-167.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgGAKQgEgDgBgFQAAgEADgEQADgEAFgBQADgBAEADQAEADABAGQAAADgCAEQgDAFgFABIgCAAQgCAAgEgDg");
	this.shape_74.setTransform(10.3,-169.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#292929").s().p("AgVAgQgMgKgDgQQgCgOAJgOQAJgNAQgDQANgDAMAKQANAJACARQADAPgJAMQgJAOgQADIgFAAQgLAAgKgHg");
	this.shape_75.setTransform(8.2,-168.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgBAEQgEgDADgCQACgEADACQADADgCADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBgBg");
	this.shape_76.setTransform(-52.3,-166.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgGAKQgEgDgBgFQAAgEADgEQADgEAFgBQADgBAEADQAEADABAGQABADgDAEQgDAFgFABIgCAAQgCAAgEgDg");
	this.shape_77.setTransform(-47.4,-168.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#292929").s().p("AgVAgQgMgKgDgQQgCgPAJgNQAJgNAQgCQANgEAMAKQANAKACAQQADAPgJANQgJANgQACIgFABQgLAAgKgHg");
	this.shape_78.setTransform(-49.5,-167.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CA8A6C").s().p("AgNgKICbAGIkbAQg");
	this.shape_79.setTransform(-18.6,-207.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CA8A6C").s().p("AgQgKIC2AHIlLAOg");
	this.shape_80.setTransform(-18.3,-202.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CA8A6C").s().p("AgSgKIDLAIIlxANg");
	this.shape_81.setTransform(-18.7,-198.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CA8A6C").s().p("AAigWQAiAKAXAVQg/ghhAAXQgVAFgTAMIgOALQA5hEBDATg");
	this.shape_82.setTransform(8.4,-177.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CA8A6C").s().p("AAkgBQhBgUg9AlIAPgOQAUgNAVgHQBCgWA7BBQgVgSgigIg");
	this.shape_83.setTransform(-49.8,-176);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F5AB7B").s().p("ApHEmIiKjdIAomEIEXlwIJkg4IGpE6IBXFbIgBBmIiACXImCEjIisESg");
	this.shape_84.setTransform(-16.6,-142.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EB8038").s().p("Az8TyQA9ndBzoiQDnxCEOldIQuhFQBXgBBTAUQEJA/B+D6QB9D6BJPmQAkH1AMHCg");
	this.shape_85.setTransform(-14.1,0.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#61372C").s().p("AzKq1MAmqAAfICTUtMgrlAAfg");
	this.shape_86.setTransform(-14.6,192.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D4C9C3").s().p("AkBD8QBIh7BDiIQCFkUgPhNIC4ARIhYA1IB0A8IhmgcICUC2IiDhRIAnCYIhNg9IAcDAIg/hGQgHDIgHgOQgFgJgdgjIgbghIgSCMIg0g8IgdB0g");
	this.shape_87.setTransform(165.5,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.dog = new lib.Symbol126();
	this.dog.setTransform(175.1,-35,1,1,0,0,0,-9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.dog).wait(1));

	// Layer 2
	this.hand = new lib.Symbol124();
	this.hand.setTransform(-88.3,-95.5,1,1,0,0,0,59.4,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.7,-261.6,425.5,523.2);


(lib.Symbol120 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97B149").s().p("ABIFaIlHjHIAXjoIBckFIGMChIhxFfIgCC1g");
	this.shape.setTransform(26,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8C646").s().p("ABDGUIowkzIBTn0IIgABIEsDcIA8GGIh9DEg");
	this.shape_1.setTransform(86.3,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.arm = new lib.Symbol122();
	this.arm.setTransform(24.1,32.2,1,1,0,0,0,86.3,52.3);

	this.timeline.addTween(cjs.Tween.get(this.arm).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.4,-46.9,265.2,146.3);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.body = new lib.Symbol127();
	this.body.setTransform(62.9,281.5,1,1,0,0,0,62.9,439.6);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A2E2F").s().p("AADgJIhcgMIBkgGIBPA3g");
	this.shape.setTransform(43.6,352.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A2E2F").s().p("AA5gKIkTADIEWgfICeBNg");
	this.shape_1.setTransform(124.3,354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCACA").s().p("AkKDzIiEg4IAAhzIB/AjID8AMIC9hJIBxh8IBbiwIAZBvIhXDfIilB4IiQA3g");
	this.shape_2.setTransform(127.3,368.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#302F2F").s().p("AAXABIkRhVIEEA8IDxBsg");
	this.shape_3.setTransform(10.3,62.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#302F2F").s().p("AAKggIkihEIEpAxIEICZg");
	this.shape_4.setTransform(12.6,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#302F2F").s().p("AhVAVIg6kFIBJDzIDWDug");
	this.shape_5.setTransform(63.8,87);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#302F2F").s().p("AAngzIABAiIhPBFg");
	this.shape_6.setTransform(98.3,103.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#302F2F").s().p("ADzJWIhVh7IgJi/IiUoaIlYtfIAUAGIFYNWICSIcIAHC/IBcB8IBOIIg");
	this.shape_7.setTransform(44.7,173.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#302F2F").s().p("AgwgLIgJgtIB0Bxg");
	this.shape_8.setTransform(33.6,210.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#302F2F").s().p("AAjhxIADAyIhLCxg");
	this.shape_9.setTransform(106,229.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#302F2F").s().p("AAxhSIhKiDIBhCCIiPEpg");
	this.shape_10.setTransform(97.2,217.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#343232").s().p("AAZhVIAQAUIhRCWg");
	this.shape_11.setTransform(152.1,315.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#343232").s().p("AgvgGIAKgjIBVBTg");
	this.shape_12.setTransform(99.7,341.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#343232").s().p("Ag2gVIANgpIBgB8g");
	this.shape_13.setTransform(44.6,326.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#85BDCF").s().p("AkXCpIiJjRIC8BtIFTgwICxlAIATCrIBtCqIg8CjIhxA1IjTgKIkXA0g");
	this.shape_14.setTransform(124,320);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#334D7F").s().p("ADjWdIg1iwIiZAyIkFh8IALh+IiqtAIg/hWIAPkWImKuUICGmvIEvg7IIsBHIDoDdIA5EJIhgCSIAUQVIA8BAIgFCKIDnHZIC/E0IhuEXImhBJg");
	this.shape_15.setTransform(67.8,182);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#85BDCF").s().p("AhQDcIjoiWIAvhYIgfhNIgHiUIFUCzICXhSIADAXIglA9ICYB5IAHCQIh/Apg");
	this.shape_16.setTransform(66.8,322.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2F2E2E").s().p("AlAByIkPkxIBzg/IQXgOIgaDjIAvCSIoyCkg");
	this.shape_17.setTransform(95.6,316.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B33537").s().p("AmFDWIiwglIgHhsIFHhsICcjGIKWBXIh4E1Ik+AaIkCA1g");
	this.shape_18.setTransform(56.9,354.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B33537").s().p("AkDExIiCgpIgGhzIByjLIAsj7IJHgNIAxEBIhSDdIidB2Ih9Apg");
	this.shape_19.setTransform(127.2,358.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCACA").s().p("AlSBuIiYg3IAFh0ICMAPIFDAYICRgVICUgyIDQgjIAMC6IidAPIipAFIibAzg");
	this.shape_20.setTransform(48.6,376.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.3,-393.7,336.7,787.4);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.body = new lib.Symbol123();
	this.body.setTransform(-19.7,364.3,1,1,0,0,0,-19.7,410.3);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292929").s().p("AgEgWIhWgHIAVgKIBFAGIBbBJg");
	this.shape.setTransform(-64.5,282.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AARgGIhogGIAOgFIBbgEIBGAqg");
	this.shape_1.setTransform(36.6,284.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AjfBUIgBgdICPAWIDXgjIBbiWIAAAXIhQCcIjhAmg");
	this.shape_2.setTransform(41,296.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5AB7B").s().p("ALGQWIhRg8IhlgNIkRrjICZB3IhThyIADhlIhNh3IhpsWIkQAFIj0gdIitIWIADBxIBSC3IBNB3IArAkIgMBYIBQCMIBhFrIAQCFIAoBwIgDApIhTAYIi7imImJrRIB5hfIgOkuIgjhGIAwhNIBTqNIDpiOICpgGIJ/C+IgiMnICjDfIAMB3IBbBOIA/LmIAcBgIAAAcg");
	this.shape_3.setTransform(-16.2,175.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292929").s().p("AkKA3IgBgcIDfAYIE3h+IABAhIk0B2g");
	this.shape_4.setTransform(-60.9,291.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED5638").s().p("AjeCTIgDh1IBChcIAsgSIBKhbIC7AIIAvBfIAhAYIgNAqIhDCJIjhAlg");
	this.shape_5.setTransform(40.9,290.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED5638").s().p("AkJCGIgDhxICkhHICChpICDAAIBwC/Ik0B4g");
	this.shape_6.setTransform(-61,283.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292929").s().p("AhCANIB8ggIAJALIhoAcg");
	this.shape_7.setTransform(-30.2,285.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#302F2F").s().p("AhdgJICegWIAdAgIhoAfg");
	this.shape_8.setTransform(-32.9,284.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.7,-307.6,425.5,615.2);


(lib.Symbol115copy3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.p1 = new lib.Symbol132();
	this.p1.setTransform(-28,-99,0.799,0.799,-14.8);

	this.p2 = new lib.Symbol133();
	this.p2.setTransform(39,-113,0.799,0.799,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p2},{t:this.p1}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQADIguhZIAfgRIAfBBIAgg+IAeARIgtBVIADBlIghABg");
	this.shape.setTransform(61.9,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABkIgUAAIggAAIACjFIAQgBIAMAAIAGAAQAQgBAMAIQAMAHAEALQAGAMAAAMQAAAIgCAGQgDAHgEAFIgIALQAKAFAIAGQAIAEAEAJQAFAJABAPQgBARgFAPQgFAOgKAJQgKAJgPAAgAgVBFIAHAAIAGAAIADAAQAKAAAGgEQAIgEACgHQAEgHAAgIQAAgJgGgGQgEgGgHgEQgFgDgEAAIgDAAIgHAAIgJAAgAgahGIAAApIAHAAIADAAQAHAAAFgEQAEgEADgFQAEgGAAgGQAAgGgEgEQgDgDgEgCIgJgBIgEAAIgJAAg");
	this.shape_1.setTransform(49.5,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAOQgEgDgCgEIgDgHQABgFAEgFQAFgFAGAAQAGgBAGAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgDAAgEgDg");
	this.shape_2.setTransform(41.3,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBgIAAgkIA0h+IgxAAIgBggIBhAAIAAAjIgyB/IAwABIAAAig");
	this.shape_3.setTransform(33.5,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBOQgKgHgEgNQgFgNgBgOIAAgcQAAgrAPgYQAOgWAcAAQAHAAAHADQAGADAFAFQAKAMAFAVQAEAUgDAaQgDApgOAVQgNAVgVAAQgRAAgKgJgAAAgxQgEACgFAEQgFAFgDAKQgDALAAASQAAAUACAJQACAKAEADQAEAEAHAAQAFAAAEgGQAFgEADgHQADgIABgIIACgOQACgTgDgMQgDgMgEgFIgDgBIgCAAIgJAAg");
	this.shape_4.setTransform(22.3,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBWIACirQAagBATADQARADALAJQAIAGAEAHQAEAIABAJIgCALQgBAHgEAHQgDAIgGAFQgGAEgJADIAqBRIggAAIghhAIAABBgAgMgKQAMgCAGgEQAIgEACgGQAEgFgBgHIgBgGIgDgGQgDgGgGgCQgFgDgDAAIgKgCg");
	this.shape_5.setTransform(11.2,34.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBOQgKgHgEgNQgFgNgBgOIAAgcQAAgrAPgYQAOgWAcAAQAHAAAHADQAGADAFAFQAKAMAFAVQAEAUgDAaQgDApgOAVQgNAVgVAAQgRAAgKgJgAAAgxQgEACgFAEQgFAFgDAKQgDALAAASQAAAUACAJQACAKAEADQAEAEAHAAQAFAAAEgGQAFgEADgHQADgIABgIIACgOQACgTgDgMQgDgMgEgFIgDgBIgCAAIgJAAg");
	this.shape_6.setTransform(-0.4,35.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BjIAAjFIAcAAIAfBdIAehcIAcgBIAIDDIgdABIgEh0IgbA+IgQAAIgUgvIAABmg");
	this.shape_7.setTransform(-13,35.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4BiIAojEIAtABIAcDCIggABIgGgtIgdABIgJAtgAgGAOIAVgDIgKhHg");
	this.shape_8.setTransform(-33.2,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBkIADjHIAhAAIgBBJIAbAAIAAg9IAhAAIAAC4IghAAIAAhOIgbAAIgBBRg");
	this.shape_9.setTransform(-45,35.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBkIAAhqIgzBhIgBAAIgjgBIACi9IAaABIABBxIA3hpIAbAAIACC+g");
	this.shape_10.setTransform(67.3,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBZIAAiJIgjAAIAAgoIBkAAIAAAoIgfAAIAACJg");
	this.shape_11.setTransform(55.2,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIBcQgMgBgNgGQgNgHgLgMQgLgNgGgSQgGgTAAgXQAAgWAGgQQAGgRALgLQAKgJAMgEQALgFAMABQAYABAPAKQAQALAGAUIgkAMIgDgIQgCgDgFgDQgGgCgLgBQgJAAgIAHQgGAGgDAKQgDAJAAAOQAAAUAGAOQAGAOAJAHQAGAGAJAAQAHABAEgBQADgBADgDIAGgHIABgCIABgCIAeAXIgBACIgBABQgEAGgGAGQgGAGgKAEQgJAFgPAAIgEAAg");
	this.shape_12.setTransform(42.7,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdBPQgKgJgEgNQgFgMgBgPIAAgbQAAgsAOgWQAPgXAcAAQAHAAAHADQAGADAFAGQAKALAFAUQAEAVgDAbQgDApgOAUQgNAVgVAAQgRAAgKgIgAAAgxQgEACgFAEQgFAFgDALQgDALgBAQQAAAVACAJQACAKAFAEQAEADAHgBQAFAAAEgEQAFgFADgIQADgHABgHIACgPQACgTgDgMQgDgMgEgEIgDgCIgCgBIgJABg");
	this.shape_13.setTransform(30.1,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBjIADjGIAhABIgBBIIAbAAIAAg9IAhAAIAAC4IghAAIAAhPIgbAAIgBBSg");
	this.shape_14.setTransform(18.9,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBQIgJgBIgWAAIgBieIBRAAIAAAeIgoAAIAAAdQASACAMAGQAMAHAGAFQAGAJACAIQACAIAAAHQAAAJgFAIQgEAIgJAHQgKAHgNAFQgLADgNABgAgHAyIALgEQAGgCAFgDIAEgFQACgBAAgDQAAgEgBgFQgCgFgGgEQgHgGgNgBg");
	this.shape_15.setTransform(7.9,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdBPQgKgJgEgNQgFgMgBgPIAAgbQAAgsAOgWQAPgXAcAAQAHAAAHADQAGADAFAGQAKALAFAUQAEAVgDAbQgDApgOAUQgNAVgVAAQgRAAgKgIgAAAgxQgEACgFAEQgFAFgDALQgDALgBAQQAAAVACAJQACAKAFAEQAEADAHgBQAFAAAEgEQAFgFADgIQADgHABgHIACgPQACgTgDgMQgDgMgEgEIgDgCIgCgBIgJABg");
	this.shape_16.setTransform(-3.5,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBdIAAiHIAAgxIAYAAQANAAAMADQAMADALAFQALAHAHAKQAHAKACARQABAMgEAKQgEALgIAGQgJAHgMAFQgLAEgKACIAABIgAgHgFQAHgBAFgDQAHgDAEgEQAEgDABgFQACgEAAgHQgBgLgIgHQgIgGgNgDg");
	this.shape_17.setTransform(-14.5,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAjByIAAgeIhFAAIAAAeIgcAAIAAhJIASAAIADgfIACggIABgiIABgcIAAgRIAAgMIBVABIADCZIAMAAIAABJgAAHApIgChuIgPAAIgCA8IgEAyIAXAAg");
	this.shape_18.setTransform(-26.9,4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdBPQgKgJgEgNQgFgMgBgPIAAgbQAAgsAOgWQAPgXAcAAQAHAAAHADQAGADAFAGQAKALAFAUQAEAVgDAbQgDApgOAUQgNAVgVAAQgRAAgKgIgAAAgxQgEACgFAEQgFAFgDALQgDALgBAQQAAAVACAJQACAKAFAEQAEADAHgBQAFAAAEgEQAFgFADgIQADgHABgHIACgPQACgTgDgMQgDgMgEgEIgDgCIgCgBIgJABg");
	this.shape_19.setTransform(-39.1,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBjIAAjFIBhAAIAADFIgfAAIAAieIgbAAIABCeg");
	this.shape_20.setTransform(-50.4,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol114();
	this.instance.setTransform(6.8,3.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.6,-192.7,220.5,276);


(lib.Symbol115copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBDIgEgBIgSABIgBiBIAgAAIAAAyQAQACAJAFQAIAFAGAFQAEAGABAHQACAGAAAFQAAAHgEAHQgDAHgHAFQgHAGgJADQgLADgKAAIgEAAgAgYArIAKgCQAFgCAEgDIAEgDIABgEIgBgHQgBgEgFgDQgGgEgMgCgAAcBCIAAiEIAfAAIAACEg");
	this.shape.setTransform(59.5,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACBIIAAAAIAAAAIgBAAQgIAAgJgEQgKgEgIgFQgHgHgFgGIAWgOQACADAEAEQAFADAGACQAFADAEAAQAFgBAFgEQAEgDACgEQADgEAAgEQAAgDgEgEQgEgFgHgEQgGgDgHgBIAAgYQAHAAAFgCQAGgDADgDIABgCIABgDIgBgHQgBgDgEgDQgDgCgHAAQgFAAgEADQgEADgCAHIgYgLQAGgOAKgHQAKgHANAAQAOABAJAFQAJAGAFAJQAEAIABALQAAAHgCAFQgCAHgGAFIgBACIgDACQAJAEAFAJQAFAJAAAIQAAALgGAKQgGAJgKAIQgJAGgNABIgBAAg");
	this.shape_1.setTransform(47.9,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZBPIAAhTIgpBMIAAAAIgcAAIABiXIAVABIAABaIAthUIAVAAIABCXg");
	this.shape_2.setTransform(37.8,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBKIAAhrIAAgoIATAAIAUADQAJACAJAEQAJAGAGAIQAFAIACANQAAAKgDAIQgDAJgGAEQgIAHgJADQgJAEgHAAIAAA6gAgFgEIAJgDQAFgCAEgDQADgDABgEQABgDAAgFQgBgJgGgGQgGgFgKgCg");
	this.shape_3.setTransform(28.1,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBPIAAidIBNgBIAACeIgZAAIAAh+IgVAAIABB/g");
	this.shape_4.setTransform(18.9,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBPIggAAIAAggIAAgvIAAgaIAAgYIAAgdIAgAAIAoAAIAAAdIgoAAIAAAYIAYAAIAAAaIgYAAIAAAvIAoAAIAAAgg");
	this.shape_5.setTransform(4.8,21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBPIAAhTIgoBMIgBAAIgcAAIACiXIAWABIAABaIAshUIAVAAIABCXg");
	this.shape_6.setTransform(-4.6,21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBPIADieIBGAAIAAAgIgnAAIgDB+g");
	this.shape_7.setTransform(-14,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBAIAUg2IgXhJIAUAAIAPAzIARgzIAhAAIgxB/g");
	this.shape_8.setTransform(-22.8,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBKIAAhrIAAgoIATAAIAUADQAJACAJAEQAJAGAGAIQAFAIACANQAAAKgDAIQgDAJgGAEQgIAHgJADQgJAEgHAAIAAA6gAgFgEIAJgDQAFgCAEgDQADgDABgEQABgDAAgFQgBgJgGgGQgGgFgKgCg");
	this.shape_9.setTransform(-31.7,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcBbIAAgXIg3AAIAAAXIgXAAIAAg6IAPAAIACgZIACgaIABgaIAAgWIAAgOIABgKIBDABIACB6IAKAAIAAA6gAAGAhIgChXIgLAAIgCAvQgBAWgDASIATAAg");
	this.shape_10.setTransform(-41.6,22.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBPIAAhTIgoBMIAAAAIgcAAIABiXIAVABIAABaIAshUIAXAAIABCXg");
	this.shape_11.setTransform(-57.4,21.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWB9IgjgBIAFjDIAdAAIgCBvIAuhsIAkAAIABC9IgeAAIAAh0IgxB4gAgXhdQgLgKAAgQIAYAAIABAEQAAADADACQAEACAEAAIADgCQACgCABgDIACgIIAYAAQAAAKgFAJQgEAKgHAFQgHAGgJgBQgPAAgKgJg");
	this.shape_12.setTransform(66.6,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFBkIgnAAIAAgqIAAg5IAAghIAAggIAAgjIAnAAIAyAAIAAAjIgyAAIAAAgIAfAAIAAAhIgfAAIAAA5IAyAAIAAAqg");
	this.shape_13.setTransform(54.9,-7.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2BJIADgBQACAAADgDQAGgHAEgOQADgOACgSQACgRAAgTIgBglIgCgeIgBgLIBXgCIAADFIgsAAIAAiZIgMABQABAfgBAbQgCAdgFAWQgGAWgLANQgGAGgGADQgHADgIAAg");
	this.shape_14.setTransform(43.3,-7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBPIgJAAIgWAAIgBieIBRAAIAAAeIgoAAIAAAdQASACAMAGQAMAHAGAFQAGAJACAIQACAIAAAHQAAAJgFAIQgEAIgJAHQgKAHgNAFQgLADgNAAgAgHAyIALgEQAGgCAFgDIAEgFQACgCAAgCQAAgDgBgGQgCgFgGgEQgHgGgNgCg");
	this.shape_15.setTransform(32.2,-7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxBQIAZhDIgchcIAYAAIAUBAIAUhAIAqAAIg+Cfg");
	this.shape_16.setTransform(20.9,-7.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBdIAAiHIAAgyIAYABQANABAMACQAMADALAFQALAHAHAKQAHAKACARQABAMgEAKQgEAKgIAHQgJAHgMAFQgLAEgKACIAABIgAgHgFQAHgBAFgDQAHgDAEgEQAEgDABgEQACgGAAgGQgBgLgIgHQgIgGgNgDg");
	this.shape_17.setTransform(9.8,-6.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYBmQgJgFgGgIQgGgJgDgLIgEgQIgCgRIAAgQIAAgQQAAg0APgdQAPgeAgAAQAJAAAHAEQAHAEAGAIQALAOAEAZQAFAagDAgQgCAggHAWQgHAXgMAMQgMAMgQABQgNgBgJgFgAAChNIgCAAIgDADIgFAFQgDAFgDAJQgDAJgCAPQgCAQAAAUQAAAaACAPQABAPACAHQADAHADACIAHACQAGgBAEgHQAFgIADgMIAEgZIACgXQABgWgBgRQgBgRgDgKQgCgKgEgDIgBgCIAAAAIgDAAIgCAAIgDABg");
	this.shape_18.setTransform(-9.1,-7.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBmQgJgFgGgIQgGgJgDgLIgEgQIgCgRIAAgQIAAgQQAAg0APgdQAPgeAgAAQAJAAAHAEQAHAEAGAIQALAOAEAZQAFAagDAgQgCAggHAWQgHAXgMAMQgMAMgQABQgNgBgJgFgAAChNIgCAAIgDADIgFAFQgDAFgDAJQgDAJgCAPQgCAQAAAUQAAAaACAPQABAPACAHQADAHADACIAHACQAGgBAEgHQAFgIADgMIAEgZIACgXQABgWgBgRQgBgRgDgKQgCgKgEgDIgBgCIAAAAIgDAAIgCAAIgDABg");
	this.shape_19.setTransform(-21.7,-7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYBmQgJgFgGgIQgGgJgDgLIgEgQIgCgRIAAgQIAAgQQAAg0APgdQAPgeAgAAQAJAAAHAEQAHAEAGAIQALAOAEAZQAFAagDAgQgCAggHAWQgHAXgMAMQgMAMgQABQgNgBgJgFgAAChNIgCAAIgDADIgFAFQgDAFgDAJQgDAJgCAPQgCAQAAAUQAAAaACAPQABAPACAHQADAHADACIAHACQAGgBAEgHQAFgIADgMIAEgZIACgXQABgWgBgRQgBgRgDgKQgCgKgEgDIgBgCIAAAAIgDAAIgCAAIgDABg");
	this.shape_20.setTransform(-34.3,-7.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYBmQgJgFgGgIQgGgJgDgLIgEgQIgCgRIAAgQIAAgQQAAg0APgdQAPgeAgAAQAJAAAHAEQAHAEAGAIQALAOAEAZQAFAagDAgQgCAggHAWQgHAXgMAMQgMAMgQABQgNgBgJgFgAAChNIgCAAIgDADIgFAFQgDAFgDAJQgDAJgCAPQgCAQAAAUQAAAaACAPQABAPACAHQADAHADACIAHACQAGgBAEgHQAFgIADgMIAEgZIACgXQABgWgBgRQgBgRgDgKQgCgKgEgDIgBgCIAAAAIgDAAIgCAAIgDABg");
	this.shape_21.setTransform(-53.7,-7.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggBRIALgXIAIgUIAHgTIAHgVQAGgSACgNQADgPgBgJQgBgKgDgEIAAgBIgBAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBACAAADQgEAGABAKQgBAJAEAMIgYARQgIgRgCgSQgCgRAJgRQAFgKAJgFQAJgHAKABQAIAAAGADQAHAEAGAGQAGALACAPQABAPgCASQgDATgIARIgIAYIgIATIgJAVIAEAAIAQAAIARgBIACAeIgSACIgQAAIgLAAIgPABIgZABg");
	this.shape_22.setTransform(-65.1,-7.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEBQIgfAAIAAgiIAAguIAAgZIAAgaIAAgcIAfAAIApAAIAAAcIgpAAIAAAaIAYAAIAAAZIgYAAIAAAuIApAAIAAAig");
	this.shape_23.setTransform(49.3,-36.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLBHIgBhtIgbAAIAAggIBPAAIAAAgIgZAAIABBtg");
	this.shape_24.setTransform(40.7,-36.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRBkIgcgBIADicIAYAAIgBBZIAkhVIAcgCIABCYIgXAAIAAhdIgoBggAgThLQgIgHAAgNIATAAIABADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQADACADAAIACgBIADgFIAAgGIAUAAQAAAIgDAHQgEAIgFAEQgHAEgGAAQgMABgJgJg");
	this.shape_25.setTransform(31.3,-38.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgsBPIAgieIAjACIAWCaIgZACIgFgkIgWABIgIAkgAgEALIAQgCIgIg5g");
	this.shape_26.setTransform(21,-36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnBKIAAhrIAAgoIATABIAUACQAJACAJAFQAJAEAGAJQAFAIACAOQAAAJgDAJQgDAHgGAFQgIAGgJAEQgJADgHACIAAA5gAgFgEIAJgDQAFgCAEgDQADgDABgDQABgEAAgFQgBgJgGgGQgGgFgKgCg");
	this.shape_27.setTransform(11.7,-36);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkBPIADieIBGAAIAAAgIgnAAIgDB/g");
	this.shape_28.setTransform(3.1,-36.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAYBQIAAhVIgoBNIgBAAIgcAAIACiXIAWABIAABaIAshTIAVAAIABCXg");
	this.shape_29.setTransform(-6.4,-36.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgiBDIgEgBIgSABIgBiBIAgAAIAAAyQAQACAJAFQAIAFAGAFQAEAGABAHQACAGAAAFQAAAHgEAHQgDAHgHAFQgHAGgJADQgLADgKAAIgEAAgAgYArIAKgCQAFgCAEgDIAEgDIABgEIgBgHQgBgEgFgDQgGgEgMgCgAAcBCIAAiEIAfAAIAACEg");
	this.shape_30.setTransform(-18.3,-36.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAABQIgPAAIgaAAIACidIANgBIAJAAIAEAAQANgBAKAGQAJAGAEAJQAEAJAAAKIgCAMIgFAJIgHAJQAIADAHAFQAGADAEAIQAEAHAAAMQAAAOgEALQgEAMgIAHQgJAHgLAAgAgPAJIgBAvIAFAAIAFAAIACAAQAIgBAFgDQAGgDACgGQADgFAAgHQAAgHgEgFQgEgFgFgDQgFgDgCABIgDAAIgFAAIgHAAgAgUg3IgBAgIAGAAIADAAQAFAAAEgDQADgDADgFQADgEAAgFQAAgFgEgCQgCgDgDgCQgEgBgDAAIgDAAIgHABg");
	this.shape_31.setTransform(-29.5,-36.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRBQIgdgBIAEieIAXAAIgBBcIAvhaIATABIABCYIgZABIAAhNIgmBQg");
	this.shape_32.setTransform(-44.9,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol114();
	this.instance.setTransform(-1.2,3.1,0.45,0.45,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,-67.5,198.5,142.7);


(lib.Symbol115copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.p1 = new lib.Symbol132();
	this.p1.setTransform(-76.6,2.6,0.5,0.5,-14.8);

	this.p2 = new lib.Symbol133();
	this.p2.setTransform(-49.2,-12.6,0.5,0.5,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p2},{t:this.p1}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQADIguhZIAfgRIAfBBIAfg+IAfAQIgtBWIADBlIghABg");
	this.shape.setTransform(70.6,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABkIgUAAIggAAIADjFIAPgBIANAAIAEAAQASgBALAIQAMAHAEALQAGAMgBAMQAAAIgBAGQgDAHgEAFIgJALQALAFAHAGQAJAEAFAJQAEAJAAAPQAAARgFAPQgFAOgKAJQgKAJgPAAgAgVBFIAIAAIAFAAIADAAQAJAAAIgEQAGgEAEgHQADgHAAgIQAAgJgGgGQgEgGgHgEQgFgDgEAAIgCAAIgIAAIgJAAgAgahGIgBApIAIAAIADAAQAGAAAHgEQADgEAEgFQADgGAAgGQAAgGgEgEQgDgDgEgCIgIgBIgFAAIgJAAg");
	this.shape_1.setTransform(58.3,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAOQgEgDgCgEIgDgHQABgFAEgFQAGgFAFAAQAGgBAGAFQAEAFABAGQgBAHgEAFQgFAFgHAAQgDAAgEgDg");
	this.shape_2.setTransform(50,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBgIAAgkIA0h+IgwAAIgBggIBgAAIAAAjIgyB/IAwABIAAAig");
	this.shape_3.setTransform(42.2,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBOQgKgHgEgOQgFgMgBgPIAAgbQAAgrAPgYQAOgWAcAAQAHAAAHADQAGADAFAFQAKAMAFAVQAEAUgDAaQgDAqgOAUQgNAVgVAAQgRAAgKgJgAAAgxQgEACgFAEQgFAFgDAKQgDALAAASQAAATACAKQACAKAEAEQAEADAHAAQAFAAAEgGQAFgEADgIQADgHABgIIACgOQACgTgDgMQgDgMgEgFIgDgBIgCgBIgJABg");
	this.shape_4.setTransform(31.1,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBWIABirQAbgBATADQARADALAJQAIAGAEAHQAFAIgBAJIgBALQgBAHgDAHQgEAIgGAFQgGAEgJADIAqBRIggAAIghhAIAABBgAgNgKQANgCAGgEQAIgEADgGQACgFAAgHIgBgGIgDgGQgDgGgGgCQgFgDgEAAIgJgCg");
	this.shape_5.setTransform(20,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBOQgKgHgEgOQgFgMgBgPIAAgbQAAgrAPgYQAOgWAcAAQAHAAAHADQAGADAFAFQAKAMAFAVQAEAUgDAaQgDAqgOAUQgNAVgVAAQgRAAgKgJgAAAgxQgEACgFAEQgFAFgDAKQgDALAAASQAAATACAKQACAKAEAEQAEADAHAAQAFAAAEgGQAFgEADgIQADgHABgIIACgOQACgTgDgMQgDgMgEgFIgDgBIgCgBIgJABg");
	this.shape_6.setTransform(8.4,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BjIAAjGIAcABIAfBdIAehcIAcgBIAIDDIgdAAIgEhzIgbA+IgPAAIgVgvIAABmg");
	this.shape_7.setTransform(-4.3,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDBAIgZAAIAAgbIAAgkIAAgVIAAgUIAAgWIAZAAIAgAAIAAAWIggAAIAAAUIATAAIAAAVIgTAAIAAAkIAgAAIAAAbg");
	this.shape_8.setTransform(77.9,-8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA5IAAhXIgWAAIAAgaIA/AAIAAAaIgUAAIAABXg");
	this.shape_9.setTransform(71,-8.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkBPIADh8IATAAIgCBHIAdhFIAXAAIABB5IgTAAIAAhLIgfBNgAgPg7QgGgHAAgKIAPAAIAAADIADADQACACACgBIACgBIACgDIABgGIAPAAQAAAIgDAFQgCAGgFAEQgEADgGAAQgJAAgHgGg");
	this.shape_10.setTransform(63.4,-9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA/IAZh9IAdABIARB7IgUABIgEgdIgSABIgGAdgAgDAJIAMgBIgGgug");
	this.shape_11.setTransform(55.2,-8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAFA6QgHAAgJgEQgIgEgHgIQgGgIgEgMQgEgMgBgOQAAgOAEgKQAEgLAIgHQAGgGAHgDQAIgDAGABQAQAAAKAHQAJAHAFANIgXAHIgCgFQgCgCgDgBQgEgCgHAAQgFgBgFAFQgEAEgCAGQgCAGAAAJQABAMADAJQAEAJAFAEQAEAEAGAAIAGAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIAEgFIABgBIABgBIATAPIgBABIgBABIgGAHQgEAEgGADQgGACgJAAIgDAAg");
	this.shape_12.setTransform(46.7,-8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjA/IAZh9IAdABIARB7IgUABIgEgdIgSABIgGAdgAgDAJIAMgBIgGgug");
	this.shape_13.setTransform(33.9,-8.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdBAIABh/IAVABIAAAuIAQAAIAAgnIAWAAIAAB1IgWAAIAAgyIgRAAIgBA0g");
	this.shape_14.setTransform(26.3,-8.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbA1IgDAAIgPAAIgBhmIAaAAIAAAoQANABAHAEQAGAEAEAEQAEAFABAFIACAJQAAAGgDAFQgDAGgGAEQgFAFgHACQgJADgIAAIgDgBgAgTAjIAIgCIAHgEIADgDIABgDIgBgFQgBgDgEgDQgEgDgJgCgAAWA1IAAhqIAZAAIAABqg");
	this.shape_15.setTransform(13.2,-8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXBJIAAgTIgsAAIAAATIgSAAIAAgvIAMAAIABgUIACgUIAAgVIABgSIAAgLIAAgIIA2ABIACBhIAHAAIAAAvgAAFAaIgChFIgIAAIgCAmIgCAfIAOAAg");
	this.shape_16.setTransform(3.7,-7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAyQgGgFgDgJQgDgIgBgIIAAgSQAAgcAJgOQAKgPARAAQAFABAEABQAEACADAEQAHAHACANQADANgCARQgCAagIANQgJAOgNAAQgLgBgGgFgAAAgeQgCAAgDADQgDADgCAHQgDAHAAAKQAAANACAGQABAGADACQACADAFAAQACAAADgEIAFgIIADgJIABgJQABgMgCgIQgBgHgDgDIgCgBIgCAAIgBAAIgEABg");
	this.shape_17.setTransform(-4.1,-8.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiBAIAAh+IAWAAIAAAkIAUgXIAbAAIghAjIAcBMIgUABIgVg+IgBAAIAAA/g");
	this.shape_18.setTransform(-11.3,-8.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDA/IgZAAIAAgaIAAglIAAgUIAAgUIAAgXIAZAAIAgAAIAAAXIggAAIAAAUIATAAIAAAUIgTAAIAAAlIAgAAIAAAag");
	this.shape_19.setTransform(78.3,-29.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJA5IAAhXIgWAAIAAgaIA/AAIAAAaIgUAAIAABXg");
	this.shape_20.setTransform(71.4,-29.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkBPIADh8IATgBIgCBHIAdhDIAXgBIABB4IgTAAIAAhJIgfBLgAgPg7QgGgGAAgKIAPAAIAAACIADADQACACACAAIACgCIACgEIABgEIAPAAQAAAGgDAGQgCAGgFADQgEAEgGAAQgJAAgHgGg");
	this.shape_21.setTransform(63.8,-31.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAzIAPgsIgSg5IAQAAIANApIAMgpIAaAAIgmBlg");
	this.shape_22.setTransform(56,-29.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfA7IAAhWIAAgfIAPABIAQABQAHACAIADQAHAFAEAGQAFAHABALQAAAHgCAGQgDAIgFACQgGAGgHACIgNAEIAAAugAgEgDIAHgCIAHgFIAEgFQABgDgBgDQAAgIgFgEQgFgEgIgCg");
	this.shape_23.setTransform(48.9,-29);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUA/IgBhCIggA9IgWAAIABh5IARABIAABHIAjhCIARAAIABB4g");
	this.shape_24.setTransform(41,-29.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfA7IAAhWIAAgfIAPABIAQABQAHACAIADQAHAFAEAGQAFAHABALQAAAHgCAGQgDAIgFACQgGAGgHACIgNAEIAAAugAgEgDIAHgCIAHgFIAEgFQABgDgBgDQAAgIgFgEQgFgEgIgCg");
	this.shape_25.setTransform(33.2,-29);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJA5IAAhXIgWAAIAAgaIA/AAIAAAaIgUAAIAABXg");
	this.shape_26.setTransform(26.1,-29.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAFA6QgHAAgJgEQgIgEgHgIQgGgIgEgMQgEgMgBgOQAAgOAEgKQAEgLAIgHQAGgGAHgDQAIgDAGABQAQAAAKAHQAJAHAFANIgXAHIgCgFQgCgCgDgBQgEgCgHAAQgFgBgFAFQgEAEgCAGQgCAGAAAJQABAMADAJQAEAJAFAEQAEAEAGAAIAGAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIAEgFIABgBIABgBIATAPIgBABIgBABIgGAHQgEAEgGADQgGACgJAAIgDAAg");
	this.shape_27.setTransform(18.1,-29.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUA/IgBhCIggA9IgWAAIABh5IARABIAABHIAjhCIARAAIABB4g");
	this.shape_28.setTransform(9.4,-29.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdA/IADh+IA3AAIAAAaIgfAAIgCBkg");
	this.shape_29.setTransform(2,-29.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDA/IgZAAIAAgaIAAglIAAgUIAAgUIAAgXIAZAAIAgAAIAAAXIggAAIAAAUIATAAIAAAUIgTAAIAAAlIAgAAIAAAag");
	this.shape_30.setTransform(-4.8,-29.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AghA/IABh9IAQAAIADAAIAEAAQAIAAAHACQAJADAGAFQAGAEADAGQAEAGAAAGIgCAKQgBAFgEAGQgEAGgIADQgIADgMACIAAA6gAgFgNQAIgBAFgEQAEgDABgDIABgGIgBgDIgDgDIgIgEIgHgCg");
	this.shape_31.setTransform(-11.8,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol114();
	this.instance.setTransform(6.8,3.1,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.2,-67.5,218.7,142.7);


(lib.Symbol115 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBNIgFgFIgCgGQABgGAEgEQADgEAGAAQAEAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgEAAQgDAAgEgDgAgPArIAAh6IAgAEIgJB2g");
	this.shape.setTransform(67.6,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBQIAAieIAWAAIAZBKIAYhJIAWAAIAGCaIgXABIgDhcIgWAyIgMgBIgQgmIAABTg");
	this.shape_1.setTransform(59.8,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBQIggAAIAAghIAAguIAAgaIAAgZIAAgcIAgAAIAoAAIAAAcIgoAAIAAAZIAYAAIAAAaIgYAAIAAAuIAoAAIAAAhg");
	this.shape_2.setTransform(50.1,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBOIAgicIAjABIAWCaIgZABIgFgkIgWACIgIAkgAgEALIAQgBIgIg6g");
	this.shape_3.setTransform(40.8,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBKIAAhrIAAgoIATABIAUACQAJACAJAFQAJAEAGAJQAFAIACANQAAAKgDAIQgDAIgGAFQgIAGgJAEQgJAEgHABIAAA5gAgFgEIAJgDQAFgCAEgDQADgDABgDQABgEAAgFQgBgKgGgFQgGgFgKgCg");
	this.shape_4.setTransform(31.5,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBPIADidIBGAAIAAAfIgnAAIgDB/g");
	this.shape_5.setTransform(22.8,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZBQIAAhVIgpBOIAAAAIgcgBIABiWIAVAAIAABaIAshTIAXAAIABCXg");
	this.shape_6.setTransform(13.3,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAPIAGgFQADgDAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBQgCgCgBgDIAAgFIABgDIAEgEQADgCADAAQACAAADACQADACACAEQADAFgBAGQgBAEgDAFQgDAFgEADQgBADgEABIgFABg");
	this.shape_7.setTransform(0.9,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXA+QgIgGgDgKQgEgKgBgLIAAgWQAAgjALgTQAMgSAWAAQAGABAFACQAFACAEAEQAJAKADAQQADAQgCAWQgDAggKARQgLARgQAAQgOgBgIgHgAAAgmQgDABgEADQgEADgDAKQgCAIAAANQAAAQABAIQACAIADACQAEADAFAAQAEAAADgEQAEgEACgFQADgGABgGIACgMQABgPgCgKQgCgJgEgDIgCgCIgCAAIgCAAIgFABg");
	this.shape_8.setTransform(-5.1,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBPIACieIAbAAIgBA7IAWAAIAAgyIAbAAIAACUIgbAAIAAg/IgWAAIgBBBg");
	this.shape_9.setTransform(-14.1,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAQIgJABIgGAAQgJAAgHgCQgHgCgGgEIgGgGQgDgDgCgFQgCgGAAgIIAAgmIAbAAIAAAmIABAGIACACQACACAHABQAHABAKgDIgBgzIAkAAIACB7IgkAAg");
	this.shape_10.setTransform(-23.9,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBQIggAAIAAghIAAguIAAgaIAAgZIAAgcIAgAAIAoAAIAAAcIgoAAIAAAZIAYAAIAAAaIgYAAIAAAuIAoAAIAAAhg");
	this.shape_11.setTransform(-33.2,15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmBPIACieIAbAAIgBA7IAWAAIAAgyIAbAAIAACUIgbAAIAAg/IgWAAIgBBBg");
	this.shape_12.setTransform(-42,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXA+QgIgGgDgKQgEgKgBgLIAAgWQAAgjALgTQAMgSAWAAQAGABAFACQAFACAEAEQAJAKADAQQADAQgCAWQgDAggKARQgLARgQAAQgOgBgIgHgAAAgmQgDABgEADQgEADgDAKQgCAIAAANQAAAQABAIQACAIADACQAEADAFAAQAEAAADgEQAEgEACgFQADgGABgGIACgMQABgPgCgKQgCgJgEgDIgCgCIgCAAIgCAAIgFABg");
	this.shape_13.setTransform(-50.9,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrBQIAAieIAcAAIAAAtIAZgdIAiABIgpAsIAjBeIgaABIgahNIgBABIAABOg");
	this.shape_14.setTransform(-59.9,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAPIAGgFQADgDAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBQgCgCgBgDIAAgFIABgDIAEgEQADgCADAAQACAAADACQADACACAEQADAFgBAGQgBAEgDAFQgDAFgEADQgBADgEABIgFABg");
	this.shape_15.setTransform(57.9,-2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxBQIAAieIAWAAIAZBKIAYhJIAWgBIAGCbIgXABIgDhdIgWAzIgMgBIgQgmIAABTg");
	this.shape_16.setTransform(50.6,-10.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEBQIgfAAIAAgiIAAgtIAAgaIAAgaIAAgbIAfAAIAoAAIAAAbIgoAAIAAAaIAYAAIAAAaIgYAAIAAAtIAoAAIAAAig");
	this.shape_17.setTransform(40.9,-10.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsBPIAgidIAjABIAWCaIgZACIgFgkIgWABIgIAkgAgEALIAQgBIgIg6g");
	this.shape_18.setTransform(31.6,-10.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmBPIACieIAbAAIgBA7IAWAAIAAgyIAbAAIAACTIgbAAIAAg/IgWAAIgBBCg");
	this.shape_19.setTransform(22.1,-10.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AABBIIABAAIgBAAIAAAAQgIAAgJgEQgKgDgIgHQgHgFgFgHIAWgPQACAEAEADQAFAEAGACQAFACAEAAQAFAAAFgDQAEgDACgFQADgEAAgDQAAgEgEgFQgEgEgHgEQgGgEgHAAIAAgXQAHgBAFgCQAGgCADgDIABgDIABgDIgBgGQgBgEgEgCQgDgDgHAAQgFAAgEADQgEAEgCAFIgYgKQAGgOAKgHQAKgHANAAQAOAAAJAGQAJAFAFAJQAEAJABAKQAAAIgCAGQgCAGgGAFIgBACIgDACQAJAEAFAJQAFAIAAAKQAAAKgGAKQgGAJgKAHQgJAIgNAAIgCAAg");
	this.shape_20.setTransform(12.5,-10.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAPIAGgFQADgDAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBQgCgCgBgDIAAgFIABgDIAEgEQADgCADAAQACAAADACQADACACAEQADAFgBAGQgBAEgDAFQgDAFgEADQgBADgEABIgFABg");
	this.shape_21.setTransform(0.5,-2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgxBQIAAieIAWAAIAZBKIAYhJIAWgBIAGCbIgXABIgDhdIgWAzIgMgBIgQgmIAABTg");
	this.shape_22.setTransform(-6.7,-10.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAZBQIAAhVIgpBOIgBAAIgbgBIABiWIAVAAIAABaIAthTIAVAAIABCXg");
	this.shape_23.setTransform(-17.5,-10.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNA/IgIAAIgRAAIgBh9IBBAAIAAAXIggAAIAAAXQAOABAKAGQAKAFAEAEQAFAIABAGIACAMQAAAGgDAHQgEAHgHAFQgJAGgJAEQgJACgKAAgAgGAnIAJgCQAFgBAEgDIADgEIACgDIgBgIQgCgDgEgFQgFgDgLgCg");
	this.shape_24.setTransform(-27.2,-10.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCA/QgIgFgEgJQgDgIgCgKIgBgTIgOAAIgBAzIgWAAIACh9IAWAAIgBAuIAPAAQADgaALgNQAKgMAUAAQAFAAAFACQAFACAEAFQAJAJADAQQADAQgCAUQgDAhgKAQQgLAQgSAAQgMAAgFgFgAARgtQgEABgEAFQgEAEgCALQgDAKAAAQQAAATACAKQABAJADADQAEADAFAAQAFAAAEgEQAEgFACgHQACgHABgHIACgOQACgSgDgMQgCgMgEgEIgCgBIgBAAIgIAAg");
	this.shape_25.setTransform(-38.1,-10.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AguA2IAHgDQAEgCACgEQACgFABgIIACgSIADgXIABgZIABgWIABgZIAxACIAUgBIgBAcIAAAhIAAAiIABAiIAAAcIgiAAIAAh5IgNgBIgBAWIgBAXIgCAUIgBAQIgDANQgCAIgEAIQgEAHgGAFQgHAEgKABg");
	this.shape_26.setTransform(-49.8,-10.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeA3IAVhuIAZABIAQBsIgSABIgEgZIgPAAIgFAagAgCAHIAKgBIgGgng");
	this.shape_27.setTransform(44.3,-34.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbA0IAAhLIAAgcIAOAAIANACQAGACAHADQAGAEAEAFQAEAGABAKQAAAGgCAGQgCAFgEADQgGAEgGADQgHADgEAAIAAApgAgDgCIAGgDIAGgDIADgFIABgFQgBgIgFgDQgDgDgHgCg");
	this.shape_28.setTransform(37.8,-33.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZA3IADhuIAwAAIAAAXIgbAAIgBBYg");
	this.shape_29.setTransform(31.7,-34.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AARA4IAAg7IgcA1IgUAAIABhpIAPABIABA/IAeg6IAPAAIABBpg");
	this.shape_30.setTransform(25,-34.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHAwIAAgkIgRAkIgSAAIAYguQgFgCgEgBQgDgDgCgEIgDgIIAAgGQAAgFACgFIAHgHQAGgFAIgCQALgCAPABIABBfgAAHgFIAAgdIgFAAIgEACQgEABgCAEIgBADIAAAEQgBADACADQABADAFADQACACAHABg");
	this.shape_31.setTransform(14.1,-34.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeA3IAVhuIAZABIAQBsIgSABIgEgZIgPAAIgFAagAgCAHIAKgBIgGgng");
	this.shape_32.setTransform(7.5,-34.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaA4IAChvIATABIgBAoIAOAAIAAgiIATAAIAABmIgTAAIAAgsIgOAAIgBAug");
	this.shape_33.setTransform(0.8,-34.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgiA4IAAhvIAQABIARA0IARg0IAPAAIAEBsIgQABIgChBIgQAiIgHAAIgLgZIAAA5g");
	this.shape_34.setTransform(-6.3,-34.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfA3IAXhuIAYABIAPBsIgSABIgDgZIgPAAIgFAagAgDAHIALgBIgGgng");
	this.shape_35.setTransform(-13.7,-34.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdApIABgBIADgBQADgEACgIIADgSIABgTIAAgVIgBgRIgBgGIAwgBIAABtIgYAAIAAhUIgHAAIAAAgQAAAQgEAMQgDANgGAHIgHAFIgIABg");
	this.shape_36.setTransform(-20.7,-34.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeA4IAAhvIAUAAIAAAhIARgVIAYABIgdAeIAYBDIgSAAIgSg2IAAAAIAAA3g");
	this.shape_37.setTransform(-27,-34.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgCA4IgXAAIAAgYIAAggIAAgSIAAgRIAAgUIAXAAIAbAAIAAAUIgbAAIAAARIAQAAIAAASIgQAAIAAAgIAbAAIAAAYg");
	this.shape_38.setTransform(-33.4,-34.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgcA3IABhtIANAAIADAAIADAAQAIAAAGACQAHACAGAFQAFAEADAFQACAFAAAFIgBAIQgBAFgDAFQgDAFgIADQgHADgKABIAAAzgAgEgLQAHgBAEgDQAEgDAAgDIABgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgCgCQgDgDgEgBIgGgCg");
	this.shape_39.setTransform(-39.6,-34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol114();
	this.instance.setTransform(-1.2,3.1,0.45,0.45,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,-67.5,198.5,142.7);


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


(lib.Symbol121 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.hand = new lib.Symbol120();
	this.hand.setTransform(164.4,101.7,1,1,0,0,0,109.1,65.5);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("AndgVIACgVIO5BBIgCAUg");
	this.shape.setTransform(12.9,-216.7);

	this.instance = new lib.Path_1_0();
	this.instance.setTransform(-8.2,-203.7,1,1,0,0,0,12.6,13.1);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.setTransform(-22.2,-205.9,1,1,0,0,0,10.2,12);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Path_3_0();
	this.instance_2.setTransform(-13.3,-204.4,1,1,0,0,0,19.1,14.3);
	this.instance_2.alpha = 0.301;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AjVgDIABgVIGqAcIgBAVg");
	this.shape_1.setTransform(46.7,-214.2);

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(48.1,-199.7,1,1,0,0,0,12.6,13.1);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_2();
	this.instance_4.setTransform(34.1,-201.9,1,1,0,0,0,10.2,12);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Path_3();
	this.instance_5.setTransform(43,-200.4,1,1,0,0,0,19.1,14.3);
	this.instance_5.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFgBAAAFQAAAFgFAAQgEAAAAgFg");
	this.shape_2.setTransform(-16,-204.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAKQgEgEAAgGQgBgEAEgEQAEgEAEgBQAFAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgFAAIAAAAQgEAAgDgEg");
	this.shape_3.setTransform(-12.7,-210.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292929").s().p("AgaAfQgMgMgBgSQAAgQALgNQAMgNAQgBQAPgBAMANQAMAMAAASQABAQgMANQgLANgQABIgBAAQgPAAgLgMg");
	this.shape_4.setTransform(-14.4,-207.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(42.1,-199.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAKQgEgEgBgGQAAgEAEgEQAEgEAEgBQAFAAADAEQAEAEABAFQAAAFgEAEQgEAFgFAAIAAAAQgEAAgDgEg");
	this.shape_6.setTransform(45.3,-204.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292929").s().p("AgaAfQgMgMgBgSQAAgQALgOQAMgNAQAAQAPgBAMAMQAMANABASQAAAQgLANQgMAOgQAAIgBAAQgPAAgLgMg");
	this.shape_7.setTransform(43.7,-202.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A8C646").s().p("AicBfIBwh2IDJhHIiwBOIhZBvg");
	this.shape_8.setTransform(78.3,192);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A8C646").s().p("AiYBOIBZiCID6h8IjTCNIiiDUg");
	this.shape_9.setTransform(-104,39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D68F6A").s().p("AgoAdIg9gtIA6AhIBagGIA4goIgyA7g");
	this.shape_10.setTransform(-17.7,-199);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D68F6A").s().p("Ag3AKIgmhJIAoA/IBSAsIBBgGIhCAag");
	this.shape_11.setTransform(45.2,-192.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D68F6A").s().p("AhFDUIhDAPIgOgvIA4hAIgnBCIAHAdIA1gbIAxAlIAmABIA0gmIAZApIAugHIguiQIAJjPIAuhrIgjBtIgEDLIAsCXIg/APIgaghIgvAjIgtABg");
	this.shape_12.setTransform(12.9,-199.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B97F66").s().p("AkGCOImBk6IF+DGIBuhzIGNAeIBSB3IFEi2IlJEng");
	this.shape_13.setTransform(8,-109);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBNQh2gPhCg4QgWgQgNgTIgIgQIAAggQCKBcC2gTQBbgKBAgdIAHAeQg/BAhnAUQghAGggABg");
	this.shape_14.setTransform(13.1,-156.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhdBMQhpgfgzhpIANgbIAjAdQAtAgA1ASQClA3CxhqIALAUQgNAigmAfQhLBCh7gGQgKACgMAAQghAAgngMg");
	this.shape_15.setTransform(12.3,-138.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#70493C").s().p("AABDNQhQgChOg0QichoAUj7IARAWQAYAbAfAXQBhBIB/gBIBmgFQB1gPBLg0IgBA3QgEBBgVAzQhACnjCAAIgMAAg");
	this.shape_16.setTransform(11.9,-150.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CA8A6C").s().p("AqNC0IA7l0IBgkDIgoEuIDBBUIA7jfIDKgSIAzAWICfAdIAygoICyBEIBRC+ICWgMIAAk2IBFEcIgLExIlLDRIiRhhIjzAAIifBug");
	this.shape_17.setTransform(8.6,-144.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C9B9B").s().p("Ag3gXIBoh8IAHAOIhhB1IgFCkg");
	this.shape_18.setTransform(-33.8,-233.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A0A0A0").s().p("AFtAyIkhiYIlkAAIh+A9IgEgNIB6hYIFwAEIEfCpIAsBwg");
	this.shape_19.setTransform(23.2,-251.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#403432").s().p("AgUALIgGgdIAMACIADgWIAeARIAIAgIgaAcg");
	this.shape_20.setTransform(-20.3,-245.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#403432").s().p("AGbBNIiukJIjwhIIj1gLIinApIgSggICqg0IEHAAID5BYIC5EoIAAD1g");
	this.shape_21.setTransform(23.3,-217.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#403432").s().p("AgWhNIBwinIASAgIhsC0IhrEVg");
	this.shape_22.setTransform(-29.2,-219.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A3A35").s().p("AhliNIBph8IBGANIAiA+IhsC0IhrEUg");
	this.shape_23.setTransform(-29.2,-221.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A3A35").s().p("AGQChIiukKIjwhIIj1gKIinAoIgig9IAKhRICXhsIFvAEIEkCiIBlDwIgnGFg");
	this.shape_24.setTransform(24.4,-225.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A3A35").s().p("AApAeIglgVIg2AFIgSgQIgBghIARgYIA3AKIAuAgIARAaIAEAzg");
	this.shape_25.setTransform(47,-219.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A3A35").s().p("AhAAKIAQgbIAugfIA3gLIARAXIgBAiIgSAQIg2gFIglAWIgeAdg");
	this.shape_26.setTransform(-18.2,-225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CA8A6C").s().p("AibgJICjACICUARg");
	this.shape_27.setTransform(17.3,-231.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CA8A6C").s().p("AjVgMIDgACIDLAXg");
	this.shape_28.setTransform(18.2,-234.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D68F6A").s().p("AgqgXIAFgKIBQA5IgGAKg");
	this.shape_29.setTransform(81.2,-167.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D68F6A").s().p("AglARIBHgsIAEAKIhHAtg");
	this.shape_30.setTransform(-55.3,-179.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D68F6A").s().p("AAmAxIAggxIg+gqIhYArIgFgJIBegwIBMA0IgnA9g");
	this.shape_31.setTransform(77.5,-172.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D68F6A").s().p("AhNgPIBUglIBHBQIgHAJIhChKIhBAcIAkA2IgIAHg");
	this.shape_32.setTransform(-51.9,-185.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5AB7B").s().p("AlcKaIjGlLIgvivIhihrIA8l6IhSAAIhLhlIAAiwICPhLIBtBcIBkmKIC6jIIJwBEICTFFIAbElIBng7ICKBXIAACnIhiBaIhLAAIgME3Ig0BjIiHFfIpBJzg");
	this.shape_33.setTransform(12.4,-131.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A8C646").s().p("AAEAcIkYgUIAqiLIEgArIDfB0IAABog");
	this.shape_34.setTransform(88.3,-14.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#64929D").s().p("AgVAaQgJgLAAgPQAAgPAJgLQAJgLAMAAQAMAAAKALQAJALAAAPQAAAPgJALQgKAMgMAAQgLAAgKgMg");
	this.shape_35.setTransform(2.3,207.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#64929D").s().p("AgVAbQgJgMAAgPQAAgOAJgMQAJgLAMAAQAMAAAKALQAJALAAAPQAAAPgJAMQgKALgMAAQgMAAgJgLg");
	this.shape_36.setTransform(-7.8,152.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#64929D").s().p("AgVAaQgJgKAAgQQAAgOAJgMQAJgLAMAAQAMAAAKALQAJAMAAAOQAAAQgJAKQgKAMgMAAQgLAAgKgMg");
	this.shape_37.setTransform(-6.7,91);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#64929D").s().p("AgVAbQgJgLAAgQQAAgPAJgLQAKgLALAAQANAAAJALQAJALAAAPQAAAQgJALQgKALgMAAQgLAAgKgLg");
	this.shape_38.setTransform(-1.5,25.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D68F6A").s().p("AAZD5IgrkhIgbhbIAth5IgbB5IAbBbIAuEkg");
	this.shape_39.setTransform(-149.1,239);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D68F6A").s().p("AALDZIgjkLIAjiuIgNCuIAcETg");
	this.shape_40.setTransform(-161.6,234.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F5AB7B").s().p("AgGHJIAAARIh9g1IAAgfIhWgrIAAgrIgagYIgyjxIAAktICxiGICohNIDFGeIAtD0IhRAAIgqhyIhlggIgRB4IAiCDIAyCDIgSA1g");
	this.shape_41.setTransform(-145.8,218.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A8C646").s().p("AAbgGIjpAAIAKhBIDjAeICwBxg");
	this.shape_42.setTransform(23.5,73.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A8C646").s().p("ADigiIAAAyInDATg");
	this.shape_43.setTransform(-36.4,69.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D6E382").s().p("AlBE/IAAl0IBwlxIEgArIDfB2IAUH4Ih0CTIk3Ahg");
	this.shape_44.setTransform(85.8,14.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A8C646").s().p("Aj0IcIAfnjIAmrDIBKlRIFal3IhgDmIh/CRIhiVuIAdHGICJHiIixAYg");
	this.shape_45.setTransform(6.4,85.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A8C646").s().p("AjeDTIEakwICGlbIBVB/IAnDaIhAGBIjSijIhFAsIg5CRIh3AWIh0Bng");
	this.shape_46.setTransform(51.7,-77.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A8C646").s().p("ADCGuIjtn7IhNgpIAHhmIgPg4IhTh2IA8gjIB/DUIDsKHg");
	this.shape_47.setTransform(-20.1,-42.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A8C646").s().p("AijhsIBbj7IAnAZIDFFLIigBeIhwENg");
	this.shape_48.setTransform(-47.9,-88.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C4DA5D").s().p("AjjaUIktgrImSAfImuhjIhbnNIgSlVIDPsYIAXnqIBQqQIJWmeIJBiDIKtCpIIOF+IgHF6IglLiIDHIgIgIHIIBgE3Ih7EUIsYgVImcDAg");
	this.shape_49.setTransform(8,50.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#97B149").s().p("AkMgTICOjGIEuh4IBdBGIghF3IiqBNIjJCYg");
	this.shape_50.setTransform(-164.2,160);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A8C646").s().p("Ak6IjIEQpLIBPncIBblRICojMIBeC7Ig6O+Il2OHIlbBCg");
	this.shape_51.setTransform(-138.7,38.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A8C646").s().p("AlsFrIAvxDIA6jhIEGD8ICFLUIDkGVIgLHBImtBNg");
	this.shape_52.setTransform(154.6,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.1,-265.7,382.2,531.5);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body = new lib.Symbol121();
	this.body.setTransform(-0.1,186.4,1,1,0,0,0,-0.1,309.6);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D403F").s().p("AhJBKIAViTIB+ACIgbCRg");
	this.shape.setTransform(128.6,87.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D403F").s().p("AhVBXIAMjMICfAEIgcDng");
	this.shape_1.setTransform(69.9,90.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#363737").s().p("AhODPIBzn2IAqmZIgWGeIh7HxIAiHyg");
	this.shape_2.setTransform(78.6,215.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#363737").s().p("AhYgdIEWhFIAAAUIkQA4IhrB5g");
	this.shape_3.setTransform(66.4,334.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363737").s().p("AgZgOIAAgcIA0BVg");
	this.shape_4.setTransform(40.1,336.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#363737").s().p("AgViMIArEGIgIATg");
	this.shape_5.setTransform(86.5,253.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#363737").s().p("AlUglIAAgXIKpB5g");
	this.shape_6.setTransform(48.2,162.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#363737").s().p("AgQA8IAOkrIATAAIgTErIATC0g");
	this.shape_7.setTransform(12.3,132.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#363737").s().p("ABED5Ih+jDIgUkuIAQAAIAVEfIB4DSg");
	this.shape_8.setTransform(-7.8,138.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#363737").s().p("Ai+ARIJQkSIAAAXIo/EOIjkDeg");
	this.shape_9.setTransform(-26.2,182.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#363737").s().p("AgeAAIAAgSIA9Alg");
	this.shape_10.setTransform(-60.2,326.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#363737").s().p("AgVg5IieAKICegjIDJClg");
	this.shape_11.setTransform(-46.8,320.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#363737").s().p("AAAhKIAUAAIgnCVg");
	this.shape_12.setTransform(-51.1,323.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#363737").s().p("AgJBsIATj4IAAEZg");
	this.shape_13.setTransform(-83.7,250.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#363737").s().p("AAwgkIh+plICdJlIAAKug");
	this.shape_14.setTransform(-70.5,233.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#363737").s().p("AAWBcQhWgdgmigIAKAZQANAeAUAbQA+BVBkASQgUAKgXAAQgSAAgUgGg");
	this.shape_15.setTransform(121.2,108.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808987").s().p("AjRBlIgMjHIG7gNIgwDgg");
	this.shape_16.setTransform(3.4,93.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3D403F").s().p("AhQBjIACjVICeAEIgXDhg");
	this.shape_17.setTransform(-58.8,90.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3D403F").s().p("AhPBjIABjVICfAEIgYDhg");
	this.shape_18.setTransform(-113,86.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2E2F2F").s().p("AoxCmIljgmImBgSIhakAIcTBJIC2hbIMWCHIgMBzIlbgSIk4BDIrJAfg");
	this.shape_19.setTransform(2.5,83.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#345373").s().p("AE+UHIhsiSIhAtZIA/ndIhLigIkqB7IhIGNIABHnIA9IfIg9E0Ii6h7IkLgvIAAh7IipirIgYmuIiqkOIh1ovIjBpmIBJnRMAhmgEDIH0FKIhVMdInFQxIA9J6Ig2DZIkVgcIjsBag");
	this.shape_20.setTransform(5.6,203.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#292929").s().p("Al0A5IgWgWIGVgLIBPgkQBPgmAEAAICtgGIAxAzIAAA+g");
	this.shape_21.setTransform(81.6,376.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#292929").s().p("AiABCIkIhFIAOg+IEGBPIDHgKIBQhFIDmAMIjmAOIg/Bpg");
	this.shape_22.setTransform(-63.2,382.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2E2F2F").s().p("AldEiIhEhHIAAieIDvleIDQB+IBAC/ICDBAICRBUIAwAyIAABAg");
	this.shape_23.setTransform(79.3,352.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2E2F2F").s().p("Ah9G4IknhHIAch/IFrlCIEMloIC3IQIAADLIg5AdIjmAOIg/Bqg");
	this.shape_24.setTransform(-60.3,345);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.1,-389,382.2,778.1);


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
	mask.graphics.p("EgrNgANIB81rMBUfAAAIAAVrg");
	mask.setTransform(118.6,-140.1);

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

	// son
	this.son = new lib.Symbol119();
	this.son.setTransform(0.2,706.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.son).wait(1));

	// babushka
	this.babushka = new lib.Symbol118();
	this.babushka.setTransform(215.3,384.5,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.babushka).wait(1));

	// dad
	this.dad = new lib.Symbol117();
	this.dad.setTransform(24,25.6,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.dad).wait(1));

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
	this.shape_1.graphics.f("#AF9D87").s().p("Egn1BYzMAAAiqPIDJAAMAAACqPgEgn1hR3IAAgeMBPqAAAIAAAegEgn1hSzIAAl/MBPqAAAIAAF/g");
	this.shape_1.setTransform(115.8,387.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1B19D").s().p("Egn1BcDMAAAi4FMBPqAAAMAAAC4Fg");
	this.shape_2.setTransform(115.8,367);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-262.8,553.3,1219);


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
		var repeat = 2;
		
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
		
		
		tl.fromTo(this.blk, 0.6, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(this.logo, 1.0, {y:"-=140", ease:Back.easeOut}, 0.0)
		  .from(this.house, 1.9, {x:"+=840", scaleX:2, scaleY:2, ease:Expo.easeOut}, 0.0)
		  .from(this.city, 1.9, {x:"+=440", scaleX:1.5, scaleY:1.5, ease:Expo.easeOut}, 0.0)
		  .from(this.t1, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.0)
		  .from(this.house.mc.dad.body, 6.6, {rotation:"-=10", ease:Elastic.easeOut}, 0.5)
		  .from(this.house.mc.dad.body.hand, 3.6, {rotation:"-=30", ease:Elastic.easeOut}, 0.7)
		  .from(this.house.mc.dad.body.hand.arm, 3.6, {rotation:"-=40", ease:Elastic.easeOut}, 0.9)
		  
		  
		  .to(this.t1, 0.3, {scaleX:0, scaleY:0, ease:Back.easeIn}, 4.0)
		  .to(this.house, 1.0, {x:-280, y:-330, ease:Expo.easeInOut}, 4.0)
		  .to(this.city, 1.0, {x:"-=50", y:"-=20", ease:Expo.easeInOut}, 4.0)
		  .from(this.t2, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 4.5)
		  .from(this.t2.p1, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 4.7)
		  .from(this.t2.p2, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 4.8)
		  
		  .from(this.house.mc.babushka.body, 6.6, {rotation:"-=10", ease:Elastic.easeOut}, 4.5)
		  .from(this.house.mc.babushka.body.hand, 3.6, {rotation:"-=30", ease:Elastic.easeOut}, 4.7)
		  .from(this.house.mc.babushka.body.hand.arm, 3.6, {rotation:"-=40", ease:Elastic.easeOut}, 4.9)
		  .from(this.house.mc.babushka.body.dog, 0.15, {rotation:"-=50", yoyo:true, repeat:30, repeatDelay:0.0, ease:Sine.easeInOut}, 4.5)
		  
		  
		  .to(this.t2, 0.3, {scaleX:0, scaleY:0, ease:Back.easeIn}, 8.0)
		  .to(this.house, 1.0, {x:-40, y:-670, ease:Expo.easeInOut}, 8.0)
		  .to(this.city, 1.0, {x:"-=50", y:"-=20", ease:Expo.easeInOut}, 8.0)
		  .from(this.t3, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 8.5)
		  .from(this.house.mc.son.body, 6.6, {rotation:"-=10", ease:Elastic.easeOut}, 8.5)
		  .from(this.house.mc.son.body.hand, 3.6, {rotation:"-=30", ease:Elastic.easeOut}, 8.7)
		  .from(this.house.mc.son.body.hand.lok, 3.6, {rotation:"-=40", ease:Elastic.easeOut}, 8.8)
		  .from(this.house.mc.son.body.hand.lok.arm, 3.6, {rotation:"-=40", ease:Elastic.easeOut}, 8.9)
		  
		  
		  .to(this.t3, 0.3, {scaleX:0, scaleY:0, ease:Back.easeIn}, 11.0)
		  .to(this.house, 1.0, {x:"+=290", ease:Expo.easeInOut}, 11.0)
		  .to(this.city, 1.0, {x:"+=120", y:-50, ease:Expo.easeInOut}, 11.0)
		  .from(this.t4, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 11.5)
		  .from(this.t4.p1, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 11.7)
		  .from(this.t4.p2, 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 11.8)
		  
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
	this.t4.setTransform(-8,42);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.Symbol115copy2();
	this.t3.setTransform(-18.3,-109.6);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.Symbol115copy();
	this.t2.setTransform(7,-85);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.Symbol115();
	this.t1.setTransform(-19.3,-105.6);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// house
	this.house = new lib.Symbol112();
	this.house.setTransform(0,10,1,1,0,0,0,-158.6,-386.7);

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
p.nominalBounds = new cjs.Rectangle(-461.6,-250.2,940.8,1236.4);


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