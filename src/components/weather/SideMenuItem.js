import classes from './SideMenuItem.module.css';

let SideMenuItem = function(props) {

    let href = props.href;
    let text = props.text;
    let width = props.width;
    let style = {
        "width": width
    };
    return (
        <div className={classes.SideMenuItem} style={style}>
            <a href={href}>{text}</a>
        </div>
    );
    
}

export default SideMenuItem;
