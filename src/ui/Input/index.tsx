import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    name?: string
    errors: { [key: string]: string } // {password: 'oshibka'}
}
export function Input({
    label = '',
    name = '', // password / email i td
    value,
    placeholder,
    onChange,
    type = 'text',
    errors,
}: Props) {
    return (
        <label className={styles.label}>
            {label}
            <input
                autoComplete='off'
                className={styles.input}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                data-error={errors && !!errors[name]}
            />
            {errors[name] && (
                <span className={styles.error}>{errors[name]}</span>
            )}
            {type === 'password' && (
                <button className={styles.button}>show password</button>
            )}
        </label>
    )
}
