import React, { useState } from 'react'
import type { FormEvent } from 'react'
import { Input, Link, Button, Social } from '../../ui'
import styles from './Form.module.scss'

export function Form() {
    const initialErrors = { password: '', email: '' }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(initialErrors)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const error = initialErrors
        if (!password || password.length < 8) {
            error.password = !password
                ? 'Укажите пароль'
                : 'Используйте не менее 8 символов'
        }
        if (!email) {
            error.email = 'Укажите E-mail'
        }
        if (error.email || errors.password) {
            setErrors(error)
        }
    }

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <div className={styles.form}>
                <h3 className={styles.text}>Your logo</h3>
                <h2 className={styles.title}>Login</h2>

                <Input
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    type='email'
                    label='Email'
                    placeholder='username@gmail.com'
                    errors={errors}
                />

                <Input
                    name='password'
                    value={password}
                    onChange={handlePassword}
                    type='password'
                    label='Password'
                    placeholder='Password'
                    errors={errors}
                />
                <Link text='Forgot Password?' href='/' />
                <Button type='button' label='Sign in' />
                <span className={styles.desc}>or continue with</span>
                <Social />
                <span className={styles.desc}>
                    Don’t have an account yet?
                    <a href='3 ' className={styles.link}>
                        &nbsp;Register for free
                    </a>
                </span>
            </div>
        </form>
    )
}
