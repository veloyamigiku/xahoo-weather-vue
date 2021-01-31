function Header(props) {

    return (
        <div>
            <img id="headerLogo" src={props.logo} alt={props.headerLogoAlt} />
        </div>
    )

}

export default Header;
