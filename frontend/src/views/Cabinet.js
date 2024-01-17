import React from 'react';
import './Cabinet.css';

function Cabinet({ token }) {
    function changeEmail() {
        const email = document.getElementById('email').value

        const validEmail = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)

        if (!validEmail) {
            document.getElementById('emailMessage').innerText = "Вы ввели данные неправильно!"
            return
        }

        const data = {
            token: token,
            email: email
        }

        console.log(data)

        const api = 'http://127.0.0.1:9001/user/changeEmail'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => result.json())
            .then((result) => {
                console.log(result)
                document.getElementById('emailMessage').innerText = "E-Mail успешно изменён!"
            })
    }

    function changePass() {
        const pass = document.getElementById('pass').value

        if (pass.length === 0) {
            document.getElementById('emailMessage').innerText = "Вы ввели данные неправильно!"
            return
        }

        const data = {
            token: token,
            password: pass
        }

        console.log(data)

        const api = 'http://127.0.0.1:9001/user/changePassword'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => result.json())
            .then((result) => {
                console.log(result)
                document.getElementById('passMessage').innerText = "Пароль успешно изменён!"
            })
    }


    return (
        <div className="Cabinet">
            <h1>Личный кабинет</h1>
            <input id='email' placeholder='E-Mail' type='email' />
            <button id='sendEmail' onClick={changeEmail}>Сменить E-Mail</button>
            <p id='emailMessage'></p>
            <input id='pass' placeholder='Пароль' type='password' />
            <button id='sendPass' onClick={changePass}>Сменить пароль</button>
            <p id='passMessage'></p>
        </div>
    );
}

export default Cabinet;