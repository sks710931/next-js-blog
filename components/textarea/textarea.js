import classes from './textarea.module.scss';
export const TextArea = ({
  name,
  label,
  placeholder,
  maxLength,
  autoComplete,
  onTextChange,
  value,
}) => {
  return (
    <div className={classes.textBox}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={classes.input}
        autoComplete={autoComplete ? autoComplete: `off`}
        name={name}
        type="text"
        placeholder={placeholder}
        maxLength={`${maxLength ? maxLength : 100}`}
        onChange={($event) => onTextChange($event.target.value)}
        value={value}
      />
    </div>
  );
};
