/* Builtin script also includes html_dir.script */
{{#display_chapter}}
function showChapter(chap, noreset){
    if (!displayAll) {
        var chapters = document.getElementsByClassName("chapter");
        for (i = 0; i < chapters.length; i++) {
            if (i == chap) {
                chapters[i].style.display = "block";
            } else {
                chapters[i].style.display = "none";
            }
        }
        var controls = document.getElementsByClassName("chapterControls");
        for (i = 0; i < controls.length; i++){
            if (i >= chap * 2-1 && i <= chap * 2) {
                controls[i].style.display = "block";
            } else {
                controls[i].style.display = "none";
            }
        }
        if (!noreset) {
            window.location.hash = "#chapter-"+chap;
        }
    } else {
        window.location.hash = "#chapter-"+chap;
    }
}

function getChapter(elem) {
    if (elem.className == "chapter") {
        return parseInt(elem.id.substr("chapter-".length));
    } else {
        return getChapter(elem.parentElement);
    }
}

function switchAll() {
    if (!displayAll){
        displayAll = true;
        var chapters = document.getElementsByClassName("chapter");
        for (i = 0; i < chapters.length; i++) {
            chapters[i].style.display = "block";
        }
        var controls = document.getElementsByClassName("chapterControls");
        for (i = 0; i < controls.length; i++){
            controls[i].style.display = "none";
        }
        displayAllSwitcher = document.getElementById("book-button");
        displayAllSwitcher.src="{{{pages_svg}}}";
        displayAllSwitcher.alt="Display one chapter";
        displayAllSwitcher.title="Display one chapter";
    }else{
        displayAll = false;
        showChapter(0);
        displayAllSwitcher = document.getElementById("book-button");
        displayAllSwitcher.src="{{{book_svg}}}";
        displayAllSwitcher.alt="Display all chapters";
        displayAllSwitcher.title="Display all chapters";
    }
}

window.onload = function(){
    displayAll = false;
    var hash = document.location.hash;
    if (!hash) {
        showChapter(0, true);
    } else {
        var element = document.getElementById(hash.substr(1));
        var chap = getChapter(element);
        showChapter(chap, true);
    }
};
{{/display_chapter}}