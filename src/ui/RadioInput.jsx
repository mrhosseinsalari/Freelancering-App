function RadioInput({ label, name, value, register, validationSchema, watch }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        {...register(name, validationSchema)}
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
        type="radio"
        id={value}
        value={value}
        checked={watch(name) === value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioInput;
