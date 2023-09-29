type ButtonFormProps = {
    msg: string
}

const ButtonForm = ({msg}: ButtonFormProps) => {
    return (
        <>
            <button type="submit" className={`rounded-3xl bg-[var(--secondary)] text-stone-600 text-[50%]`}>
                {msg}
            </button>
        </>
    )
}

export default ButtonForm
