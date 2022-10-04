import React from 'react';

function Button(props) {

    return (
        <button id="btn" type="submit"
            className={`${props.disabled ? 'container__submit container__submit_disabled' : 'container__submit container__submit_hover'}`}
        >{props.name}</button>
    );
}

export default Button;
