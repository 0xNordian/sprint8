type ButtonFormProps = {
    msg: string
}

const ButtonForm = ({msg}: ButtonFormProps) => {
    return (
        <>
            <button type="submit" className={`rounded-3xl bg-[var(--secondary)] text-stone-600 text-sm`}>
                {msg}
            </button>
        </>
    )
}

export default ButtonForm
