'use strict';
'esversion: 6';

        function printf(fmt, ...args) {
            if (fmt !== undefined) {
                for (let i = 0; i < args.length; i++) {
                    fmt = fmt.replace("{" + i + "}", args[i]);
					console.dir(args[i]);
                }
                document.write(fmt + "<br/>");
                console.log(fmt.replace("<br/>", ""));
            }
        }