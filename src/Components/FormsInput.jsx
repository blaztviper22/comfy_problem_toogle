/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Forms({label, name, type, defaultvalue}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input type={type} name={name} placeholder={defaultvalue} className="input input-bordered" />
    </label>
  )
}

export default Forms
