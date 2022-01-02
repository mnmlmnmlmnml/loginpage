import React, { InputHTMLAttributes } from 'react'
import styles from './index.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export function Input({
    label = '',
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
            />
            {type === 'password' && (
                <button className={styles.button}>show password</button>
            )}
        </label>
    )
}
