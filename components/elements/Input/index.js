function Input({
    type,
    name,
    label,
    disabled,
    ...props
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="f6 b db mb2"
            >
                {label}
            </label>
            <input
                name={name}
                disabled={disabled}
                className="input-reset ba b--black-20 pa2 db w-100"
                type={type || 'text'}
                {...props}
            />

            <style jsx>{`
                input[disabled] {
                    background: none;
                    border: 1px solid transparent;
                }
            `}</style>
        </div>
    );
}

export default Input;
