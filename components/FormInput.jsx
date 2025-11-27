// components/FormInput.jsx

export default function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  textarea = false,
  options = [], // used for select
}) {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="block font-semibold mb-1" htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Textarea */}
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 border rounded h-28 focus:outline-none focus:ring focus:ring-blue-200"
        ></textarea>
      ) : options.length > 0 ? (
        // Select Dropdown
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        // Regular Input
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}