/* eslint-disable react/prop-types */
const FormCheckbox = ({label, name, defaultvalue, size}) => {
  return (
    <div className="form-control items-center">
        <label htmlFor={name} className="label cursor-pointer">
            <span className="label-text capitalize">{label}</span>
        </label>
        <input 
            type="checkbox" 
            name={name} 
            defaultChecked={defaultvalue} 
            className={`checkbox checkbox-primary 
            ${size}`} 
        />
    </div>
  )
}

export default FormCheckbox
