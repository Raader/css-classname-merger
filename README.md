Lightweight no dependancy library for merging css class names.

## Usage

```javascript
const merger = require("css-classname-merger");

//merge class names
merger.mergeClassNames("button","selected");
//returns "button selected"

//merge class names conditionally
merger.mergeClassNames(
  {name:"button",condition:true},
  {name:"selected",condition:false},
  {name:"hover",condition:true}                   
);
//returns "button hover"

//merge class names using a combination of both
merger.mergeClassNames("button",{name:"selected",condition:true});
//returns "button selected"

```

