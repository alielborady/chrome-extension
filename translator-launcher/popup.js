googleTranslateToArabic = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://translate.google.com.my/?hl=en&tab=TT&authuser=0#view=home&op=translate&sl=en&tl=ar&text=" + query});
 };

 googleTranslateToSpanish = function(word){
     let query1 = word.selectionText;
    chrome.tabs.create({url: "https://translate.google.com.my/?hl=en&tab=TT&authuser=0#view=home&op=translate&sl=en&tl=es&text=" + query1});
 }


chrome.contextMenus.create({
    title: "Google Translate to Spanish",
    contexts:["selection"],
    onclick: googleTranslateToSpanish
})

chrome.contextMenus.create({

    title: "Google Translate to Arabic",
    contexts:["selection"],  // ContextType
    onclick: googleTranslateToArabic // A callback function


});