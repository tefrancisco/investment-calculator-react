export default function Input({ label, value, onChangeFunction }) {
    return (
        <>
            <label>{label}</label>
            <input type="number" value={value} onChange={onChangeFunction} />
        </>
    )
}