import "./FormInput.scss";

const FormInput = props => {
  return (
    <div className="formInput">
      <label htmlFor={props.placeholder}>Username</label>
      <input
        type="text"
        name={props.name}
        id="Username"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormInput;
