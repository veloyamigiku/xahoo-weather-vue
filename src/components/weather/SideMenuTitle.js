import classes from './SideMenuTitle.module.css';

let SideMenuTitle = function(props) {

    let text = props.text;
    
    let style = {
        backgroundColor: props.bgcolor
    };

    return (
        <div className={classes.SideMenuTitle} style={style}>{text}</div>
    );
    
}

export default SideMenuTitle;
