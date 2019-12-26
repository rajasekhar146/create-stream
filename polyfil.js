'use strict'
const http = require('http');




var app = http.createServer(function(req, res) {
    console.log("server started")
    let name = {
        firstName: "rajasekhar",
        lastMName: "n"
    }
    let fullNmae = function(from) {
        console.log(this.firstName + ' ' + this.lastMName + ' '+'from - ' + from);
    }
    
    // var printFirstName = fullNmae.bind(name)
    // var person = printFirstName();
    // res.end(person);
    Function.prototype.bindfunc = function(...arg) {
        let obj = this
        let param = arg.slice(1)
        return function(...arg2) {
            obj.apply(arg[0], [...param, ...arg2])
        }
        
    }
    let printFirstName = fullNmae.bindfunc(name)
    let person = printFirstName('india');
    res.end(person);
})
app.listen(3000)