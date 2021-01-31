import "./Footer.css"

let Footer = function(props) {

    var linkNodes = [];
    props.linkItems.forEach(function(linkItem, i) {
        if (linkNodes.length !== 0) {
            linkNodes.push(" - ");
        }
        linkNodes.push(<a key={linkItem.id} id={linkItem.id} href={linkItem.url}>{linkItem.text}</a>);
        
    });
    
    var copyrightNodes = [];
    props.copyrights.forEach(function(copyright, _) {
        copyrightNodes.push(<div key={copyright.id} id={copyright.id}>{copyright.text}</div>);
    })

    return (
        <div>
            <div id="footerLink">{linkNodes}</div>
            <div id="copyright">{copyrightNodes}</div>
        </div>
    );
}

export default Footer;
