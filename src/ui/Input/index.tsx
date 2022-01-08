import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    name?: string
    errors: { [key: string]: string }
    togglePasswordVisiblity?: () => void
}

export function Input({
    label = '',
    name = '',
    value,
    togglePasswordVisiblity,
    placeholder,
    onChange,
    type = 'text',
    errors,
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
                data-error={errors && !!errors[name]}
            />
            {errors[name] && (
                <span className={styles.error}>{errors[name]}</span>
            )}
            {label === 'password' && (
                <button
                    type='button'
                    onClick={togglePasswordVisiblity}
                    className={styles.button}
                >
                    show password
                </button>
            )}
        </label>
    )
}
