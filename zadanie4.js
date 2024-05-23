function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runCode() { 
    var prog = document.getElementById("editor").value; 
    var mypre = document.getElementById("output"); 
    var result = document.getElementById("result");
    mypre.innerHTML = ''; 
    result.innerHTML = ''; 
    Sk.pre = "output";
    Sk.configure({ output: outf, read: builtinRead });
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
        console.log('success');
        checkAnswer();
    },
    function(err) {
        mypre.innerHTML = mypre.innerHTML + err.toString();
    });
}


function checkAnswer() {
    var zadanie = "";
    var output = document.getElementById("output").innerText.trim();
    var result = document.getElementById("result");
    
    if (output === "parzysta" || output === "nie parzysta") {
        alert("Gratulacje! Zadanie rozwiązane poprawnie.");
    } else {
        alert("Spróbuj ponownie.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;

    themeSwitch.addEventListener("change", function() {
        if (themeSwitch.checked) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });

    body.classList.add("light-mode");
});
