
var shuffleSequence = seq("intro1","intro2",
                      sepWith("sep", "condition")  );

var completionMessage = "Thank you for your participation!"

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence.",
        ignoreFailure: true,
        hideProgressBar: true
    },
    "DashedSentence", {
        hideProgressBar: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: false,
        as: ["Yes","No"],
        randomOrder: false
    },
    "Message", {
       hideProgressBar: true
    },
        "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Vorm", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Scale_New", {
        startValue: 0,  
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "(Totally unsurprise)", 
        rightLabel: "(Totally surprised)"
    },
    "StaticSentence",{
        hideProgressBar: true
    },
    "StaticSentence2",{
        hideProgressBar: true
    },
    "SingleSlider",{
        children: ["StaticSentence","StaticSentence2","Scale_New"],
        triggers: [2],
        hideProgressBar: true
    }
];



var items = [

    ["sep", "Separator", { }],

    ["intro1", "Form", {consentRequired: true, html: {include: "intro1.html"}}],
    
    ["intro2", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
 
    
// items

[["condition",1], "SingleSlider", {s: "John is an alien. .", 
                                s2: "Aliens speak funny", 
                                html: "John speaks funny."}]
    
    ];

