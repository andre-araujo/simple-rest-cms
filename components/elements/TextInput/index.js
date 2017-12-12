function Input({
    type,
    name,
    label,
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
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type={type || 'text'}
                {...props}
            />
        </div>
    );
}

export default Input;
