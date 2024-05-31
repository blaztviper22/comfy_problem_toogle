/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function FormInput({label, name, type, defaultvalue, size}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input 
        type={type} 
        name={name} 
        placeholder={defaultvalue} 
        className={`input input-bordered ${size}`}
      />
    </label>
  )
}

export default FormInput

