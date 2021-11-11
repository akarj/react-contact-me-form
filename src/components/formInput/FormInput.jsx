import "./FormInput.scss";

const FormInput = props => {
  const { label, onChange, id } = props;
  return (
    <div className="formInput">
      <label htmlFor={props.name}>{label}</label>
      <input
        type="text"
        name={props.name}
        id={id}
        placeholder={props.placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
