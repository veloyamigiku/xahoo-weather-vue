import SideMenuItemRow from "./SideMenuItemRow";
import SideMenuTitle from "./SideMenuTitle";

let SideMenu = function(props) {

    let id = props.id;
    let title = props.title;
    let items = props.items;
    let rowItemCount = 2;

    var rowsItemsAry = [];
    var rowItems = [];
    items.forEach(function(item, _) {
        rowItems.push(item);
        if (rowItems.length === rowItemCount) {
            rowsItemsAry.push(rowItems);
            rowItems = [];
        }
    });
    if (rowItems.length > 0) {
        rowsItemsAry.push(rowItems);
    }
    var rowNodes = [];
    rowsItemsAry.forEach(function(rowItems, idx) {
        rowNodes.push(<SideMenuItemRow key={idx} items={rowItems} />);
    });

    return (
        <div id={id}>
            <SideMenuTitle text={title} />
            {rowNodes}
        </div>
    );

}

export default SideMenu;
