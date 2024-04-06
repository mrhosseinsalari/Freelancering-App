function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="textField__input"
        autoComplete="off"
        autoFocus
      />
    </div>
  );
}

export default TextField;
