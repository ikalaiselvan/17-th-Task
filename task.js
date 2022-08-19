// First Object
let obj1 = {
    firstName : "Kalai",
    secondName : "selvan",
    fullName : function(town, method){
        console.log("My Name is" + " " + this.firstName + this.secondName + " Type " + town + ", " + method);
    }
}

// Second Object

let obj2 = {
    firstName : "Sundar",
    secondName : "rajan",
}


// normall function call
obj1.fullName("Chennai", "Normal");

// Call (function borrowing)
obj1.fullName.call(obj2, "Thiruvannamalai", "CALL");

// apply (function borrowing)
obj1.fullName.apply(obj2, ["Periyeri", "APPLY"]);

// bind (function bindoutput will be function)
let addr = obj1.fullName.bind(obj2, "Thoraipadi", "BIND");
addr();