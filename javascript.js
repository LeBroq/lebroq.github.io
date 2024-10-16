function copy() {
    var copyText = document.getElementById("island_code");


    navigator.clipboard.writeText(copyText);

    alert("Copied to clipboard: " + copyText);
}