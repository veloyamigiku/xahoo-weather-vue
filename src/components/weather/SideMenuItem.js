let SideMenuItem = function(props) {

    let href = props.href;
    let text = props.text;

    return (
        <div>
            <a href={href}>{text}</a>
        </div>
    );
    
}

export default SideMenuItem;
