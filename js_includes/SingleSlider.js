/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "SingleSlider",
   
    
jqueryWidget: {

    _init: function () {
                          
        var opts = {
            // this.options.transfer = null; // Remove 'click to continue message'
            options:     this.options,
            triggers:    [2],
            children:    ["StaticSentence",{s: this.options.s},
                          "StaticSentence2",{s2: this.options.s2},
                        //  "Scale_NoButton", {html1: this.options.html1},
                          "Scale_New", {html: this.options.html}] //,
                        /*  "Vorm", {html3: this.options.html3}] ,
            manipulators: [
                [0, function(div) { div.css('font-size', "larger"); return div; }]
            ]*/
        };

        this.element.VBox(opts);
    }
},

properties: {
    obligatory: ["s","s2", "html"]
}
});