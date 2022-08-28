const Header = ({handleDarkMode}) => {
    return(
        <div className="header">
            <h1>Keep Notes</h1>
            <button className="save" onClick={() => handleDarkMode((previusMode) => !previusMode)}>Toggle Mode</button>
        </div>
    );
};

export default Header;