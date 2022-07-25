

export default function Popup(props) {
    function closePopup() {
        props.deactivate();
        setTimeout(() => {
            props.toggle(false);
        }, 30);
    }
    return(
        <div className="popup" id="popupWindow">
            <div className="popupwindow">
                <div>
                    <button onClick={ closePopup } type="button" className="outPopup">X</button>
                </div>
            </div>
        </div>
    );
}