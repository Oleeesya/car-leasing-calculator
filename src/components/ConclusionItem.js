import React from 'react';

function ConclusionItem(props) {

    return (
        <div className='calculator-column calculator-column_conclusion'>
            <div className='calculator-column__title'>
                {props.title}
            </div>

            <input type={'input'} min={props.min} max={props.max} className='calculator-column__value' id='square-input'
                value={Intl.NumberFormat('ru-RU').format(props.value) + ' ' + (props.name)} readOnly={props.readOnly} size='10'
            />

        </div>
    );
}

export default ConclusionItem;
