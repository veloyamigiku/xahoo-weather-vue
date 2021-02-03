import SideMenuItem from "./SideMenuItem";

let SideMenuItemRow = function(props) {

    let items = props.items;
    
    let itemNodes = [];
    items.forEach(function(item, idx) {
        itemNodes.push(<SideMenuItem key={idx} href={item.url} text={item.text} />)
    });

    return (
        <div>
            {itemNodes}
        </div>
    );
}

export default SideMenuItemRow;
