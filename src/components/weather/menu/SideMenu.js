import SideMenuItemRow from "./SideMenuItemRow";
import SideMenuTitle from "./SideMenuTitle";
import classes from './SideMenu.module.css';

let SideMenu = function(props) {

    let id = props.id;
    let title = props.title;
    let typeColor = props.typeColor;
    let typeBorderColor = props.typeBorderColor;
    let items = props.items;
    let maxItemCount = 2;
    let style = {
        borderTopColor: typeBorderColor
    }

    var rowsItemsAry = [];
    var rowItems = [];
    items.forEach(function(item, _) {
        rowItems.push(item);
        if (rowItems.length === maxItemCount) {
            rowsItemsAry.push(rowItems);
            rowItems = [];
        }
    });
    if (rowItems.length > 0) {
        rowsItemsAry.push(rowItems);
    }
    var rowNodes = [];
    rowsItemsAry.forEach(function(rowItems, idx) {
        rowNodes.push(<SideMenuItemRow key={idx} items={rowItems} maxItemCount={maxItemCount} />);
    });

    return (
        <div id={id} className={classes.SideMenu} style={style}>
            <SideMenuTitle text={title} typeColor={typeColor} />
            {rowNodes}
        </div>
    );

}

export default SideMenu;
