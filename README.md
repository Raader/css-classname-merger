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

//switch between classnames
merger.switchClassNames(true,"red-border","green-border")
//returns "green-border"
merger.switchClassNames(false,"red-border","green-border")
//returns "red-border"

//switch between multiple classnames
merger.switchClassNames(1,"red","green","yellow","blue")
//returns "green"
merger.switchClassNames(3,"red","green","yellow","blue")
//returns "blue"
```

## Examples

#### React

```jsx
import {mergeClassNames} from "css-classname-merger";

export function Button(props){
  return(
    <button className={
        mergeClassNames(
          "button",
          {name:"selected",condition:props.selected
        )
      }>
      {props.children}
    </button>
  )
}
```