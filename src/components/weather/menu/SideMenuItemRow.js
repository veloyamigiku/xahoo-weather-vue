import SideMenuItem from "./SideMenuItem";
import classes from './SideMenuItemRow.module.css'; 

let SideMenuItemRow = function(props) {

    let items = props.items;
    let maxItemCount = props.maxItemCount;
    let width = (100 / maxItemCount) + "%";
    let itemNodes = [];
    var lastIdx = undefined;
    items.forEach(function(item, idx) {
        itemNodes.push(<SideMenuItem key={idx} href={item.url} text={item.text} width={width} />);
        lastIdx = idx;
    });
    let leastItemCount = maxItemCount - items.length;
    for (let i = 0; i < leastItemCount; i++) {
        lastIdx++;
        itemNodes.push(<SideMenuItem key={lastIdx} href="" text="" width={width} />);
    }

    return (
        <div className={classes.SideMenuItemRow}>
            {itemNodes}
        </div>
    );
}

export default SideMenuItemRow;
