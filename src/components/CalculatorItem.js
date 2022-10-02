import React from 'react';

function CalculatorItem(props) {
    const handleChangeNumberSlider = function (evt) {
        props.setValue(evt.target.value);
    };

    const handleChange = event => {
        props.setValue(event.target.value);
    };

    console.log(Number(props.value).toLocaleString())

    return (
        <div className='calculator-column'>
            <div className='calculator-column__item'>
                <div className='calculator-column__title'>
                    {props.title}
                </div>
                <div className='calculator-column__input'>
                    <label aria-label='Стоимость автомобиля в рублях' className={`${props.title === 'Первоначальный взнос' ?
                        'label-price-input label-price-input_unit' : 'label-price-input'}`}
                    >
                        <input type={'input'} min={props.min} max={props.max} className='price-input' id='square-input'
                            value={`${props.withAdditionalField ? Number(props.deposite).toLocaleString() : Number(props.value).toLocaleString()}`}
                            onChange={handleChange}
                        />

                        <span className={`${props.withAdditionalField ? 'price-unit' : ''}`}>
                            <input type={'input'} min={props.min} max={props.max} className=
                                {`${props.withAdditionalField ? 'price-input price-input_display_show' :
                                    'price-input price-input_display_hidden'}`}
                                id='square-input' value={props.value}
                                onMouseMove={handleChangeNumberSlider}
                                onChange={handleChange} size='2'
                            />
                            {props.name}
                        </span>

                    </label>
                    <label className='range'>
                        <input type={'range'} min={props.min} max={props.max} className='range__track' id='square-range' step={1} value={props.value}
                            onMouseMove={handleChangeNumberSlider} onChange={handleChange} />
                        <input type={'range'} min={props.min} max={props.max} className='range__thumb' id='square-range' step={1} value={props.value}
                            onMouseMove={handleChangeNumberSlider} onChange={handleChange} />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CalculatorItem;