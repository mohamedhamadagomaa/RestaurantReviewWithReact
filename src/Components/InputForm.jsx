/* eslint-disable react/prop-types */



const InputForm = ({ label, type, name, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        className="input input-bordered"
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputForm;
