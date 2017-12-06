// functions have access to any public variable in the outer scope
function nameFunction(name) {
    var n = name;
    function printName() {
        console.log(n);
    }
    printName();
}
nameFunction("Jordan");
//# sourceMappingURL=019_closure_introductions.js.map