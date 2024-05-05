const TabContent = ({ children, myClickEvent }) => {
    return (
        <p onClick={myClickEvent}>{children}</p>
    );
}

export default TabContent;