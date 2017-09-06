(function () {
    function info(e) {
        console.log(e.type + ' target:' + e.target.id);
    }

    document.addEventListener("dragstart", function (e) {
        info(e);
        e.dataTransfer.setData("text/plain", e.target.id);
        console.dir(e.dataTransfer);
    });
    document.addEventListener("dragover", function (e) {
        //info(e);
        e.preventDefault();
    });
    document.addEventListener("dragenter", function (e) {
        //info(e);
    });
    document.addEventListener("dragleave", function (e) {
        //info(e);
    });
    document.addEventListener("drag", function (e) {
        //info(e);
    });
    document.addEventListener("drop", function (e) {
        e.preventDefault();
        info(e);
        var dt = e.dataTransfer;
        if(dt.items) {
            console.dir(dt.items);
            for(var i=0; i<dt.items.length; i++) {
                var f = dt.items[i].getAsFile();
                console.dir(f);
            }
        } else {
            console.dir(dt.files);
        }
        try {
            var id = e.dataTransfer.getData("text/plain");
            if(id) {
                console.log("source id: " + id);
                var source = document.getElementById(id);
                source.classList.add("child");
                e.target.appendChild(source);
            }
        } catch (ex) {

        }
    });
    document.addEventListener("dragend", function (e) {
        info(e);
    });

})();