import React from 'react';
import InputMask from 'react-input-mask';

function CalculatorItem(props) {
    const handleChangeNumberSlider = function (evt) {
        props.setValue(evt.target.value);
    };

    const handleChange = event => {
        props.setValue(event.target.value);
    };

    return (
        <div className='calculator-column'>
            <div className='calculator-column__item'>
                <div className='calculator-column__title'>
                    {props.title}
                </div>
                <div className={`${props.title === 'Первоначальный взнос' && props.disabled ?
                    'calculator-column__input calculator-column__input_percent calculator-column__input_disabled' :
                    props.title !== 'Первоначальный взнос' && props.disabled ? 'calculator-column__input calculator-column__input_disabled' :
                        props.title !== 'Первоначальный взнос' ? 'calculator-column__input' : 'calculator-column__input calculator-column__input_percent'
                    }`} >

                    <InputMask mask={props.mask} defaultValue={props.value}
                        min={props.min} max={props.max} className='value-input' id='square-input'
                        value={`${props.withAdditionalField ? (props.deposite) : (props.value)}`}
                        onChange={handleChange} readOnly={props.readOnly} size='10' disabled={props.disabled ? true : false}
                        required />

                    <span className={`${props.withAdditionalField ? 'percent' : ''}`}>
                        <input type={'number'} min={props.min} max={props.max} className=
                            {`${props.withAdditionalField ? 'value-input value-input_display_show' :
                                'value-input value-input_display_hidden'}`}
                            id='square-input' value={props.value}
                            onMouseMove={handleChangeNumberSlider} onChange={handleChange}
                            size='2' required disabled={props.disabled ? true : false} />
                        {props.name}
                    </span>

                    <label className='range'>
                        <input type={'range'} min={props.min} max={props.max}
                            className={props.disabled ? 'range__track range__thumb_disabled' : 'range__thumb_hover range__track'}
                            id='square-range' step={1} value={props.value}
                            onMouseMove={handleChangeNumberSlider} onChange={handleChange} disabled={props.disabled ? true : false} />
                        <input type={'range'} min={props.min} max={props.max}
                            className={props.disabled ? 'range__thumb range__thumb_disabled' : 'range__thumb_hover range__thumb'}
                            id='square-range' step={1} value={props.value}
                            onMouseMove={handleChangeNumberSlider} onChange={handleChange} disabled={props.disabled ? true : false} />
                    </label>

                </div>
            </div>
        </div>
    );
}

export default CalculatorItem;
