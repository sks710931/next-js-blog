import Icon from "@material-ui/core/Icon";
import classes from './textbox.module.scss';
export const TextBox = ({
  name,
  label,
  placeholder,
  maxLength,
  faIcon,
  materialIcon,
  autoComplete,
  onTextChange,
  value,
  margin,
  spacing,
}) => {
  return (
    <div style={{[margin]: spacing}} className={classes.textBox}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes.input}
        autoComplete={autoComplete ? autoComplete: `off`}
        name={name}
        type="text"
        placeholder={placeholder}
        maxLength={`${maxLength ? maxLength : 100}`}
        onChange={($event) => onTextChange($event.target.value)}
        value={value}
      />
      <Icon className={`${faIcon} ${classes.icon}`}>{materialIcon}</Icon>
    </div>
  );
};
