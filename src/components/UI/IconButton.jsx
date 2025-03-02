import {log} from '../../log.js';
import {memo} from "react";

const IconButtonWrappedWithMemo = memo(
    function IconButton({children, icon, ...props}) {
        log('<IconButton /> rendered', 2);

        const Icon = icon;
        return (
            <button {...props} className="button">
                <Icon className="button-icon"/>
                <span className="button-text">{children}</span>
            </button>
        );
    }
);

export default IconButtonWrappedWithMemo;
// even though the component is wrapped with memo, it still gets re-rendered when the 
// parent component (Counter) gets re-rendered. Why?
// The reason is that one of the props received from the parent component changes
// The MinusIcon and PlusIcon are not defined inside the Counter component-instead they are imported from other files
// The one changing during re-renders is the callback function -> onClick()
// When the counter component re-renders, the function is created again and is not the same as before in memory

