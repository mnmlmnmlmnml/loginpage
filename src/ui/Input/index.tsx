import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    name?: string
}
export function Input({
    label = '',
    name = '',
    value,
    placeholder,
    onChange,

    type = 'text',
}: Props) {
    return (
        <label className={styles.label}>
            {label}
            <input
                className={styles.input}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
            />
            {type === 'password' && (
                <button className={styles.button}>show password</button>
            )}
        </label>
    )
}
