import React from 'react'
import { InputRoot, InputRootProps } from './input-root/input-root'
import { InputLabel } from './input-label/input-label'
import { InputGroup } from './input-group/input-group'
import { InputSlot } from './input-slot/input-slot'
import { InputField } from './input-field/input-field'
import { InputClearButton } from './input-helper/input-clear-button'
import { InputHelper } from './input-helper/input-helper'

export type InputProps = Omit<InputRootProps, 'children'> &
    React.InputHTMLAttributes<HTMLInputElement> & {
        label?: string
        helperText?: string
        isClearable?: boolean
        clearIcon?: React.ReactNode
        onClear?: () => void
        startContent?: React.ReactNode
        endContent?: React.ReactNode
        error?: string
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            variant,
            size,
            startContent,
            endContent,
            isClearable = false,
            clearIcon,
            onClear,
            className,
            dir,
            ...props
        },
        ref,
    ) => {
        const isError = !!error
        const finalHelperText = error || helperText

        return (
            <InputRoot
                variant={variant}
                size={size}
                isError={isError}
                startContent={startContent}
                endContent={endContent}
                isClearable={isClearable}
                dir={dir}
                className={className}
                helperText={finalHelperText}>
                {label && <InputLabel>{label}</InputLabel>}

                <InputGroup>
                    {startContent && <InputSlot side="start">{startContent}</InputSlot>}

                    <InputField ref={ref} {...props} />

                    {isClearable && !props.disabled && <InputClearButton onClear={onClear} icon={clearIcon} />}

                    {endContent && <InputSlot side="end">{endContent}</InputSlot>}
                </InputGroup>

                <InputHelper />
            </InputRoot>
        )
    },
)

Input.displayName = 'Input'

export default Input
