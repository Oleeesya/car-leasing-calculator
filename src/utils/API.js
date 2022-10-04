export class Api {
    constructor(options) {
        this._url = options.url;
        this._header = options.header;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    //отправляет все данные калькулятора на бэкенд
    postInfo(info) {
        return fetch(this._url, {
            method: 'POST',
            body: JSON.stringify({
                price: info.price,
                initial: info.initial,
                percent: info.percent,
                months: info.months,
                sum: info.sum,
                monthPay: info.monthPay
            }),
            headers: { ...this._header },
        })
            .then(this._handleResponse)
    }
}

const api = new Api(
    {
        url: 'https://hookb.in/eK160jgYJ6UlaRPldJ1P',
        header: {
            'Content-Type': 'application/json'
        }
    }
);

export default api;
