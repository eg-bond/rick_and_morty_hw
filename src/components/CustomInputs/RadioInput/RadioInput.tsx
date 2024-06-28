import { useId, useMemo } from 'react';
import { dynamicCssVariables } from '../helpers';
import s from '../css/styles.module.css';
import type { RadioInputOptionsT } from '../Types';

function RadioInput({
  type = 'radio',
  valuesArray = [],
  name,
  placeholder,
  label,
  description,
  error,
  variant = 'default',
  radius = 'sm',
  size = 'sm',
  disabled = false,
  asterisk = false,
}: Partial<RadioInputOptionsT>) {
  const inputId = useId();

  const styleVariables = useMemo(
    () => dynamicCssVariables(size, radius, error, variant),
    [size, radius, error, variant]
  );

  return (
    <div className={s.inputContainer} style={styleVariables}>
      {label && (
        <>
          <label className={s.label} htmlFor={inputId}>
            {label}
          </label>
          {asterisk && <span className={s.asterisk}>*</span>}
        </>
      )}
      {description && <p className={s.description}>{description}</p>}
      <div className={s.radios}>
        {valuesArray.map(value => (
          <div className={s.radio} key={inputId + value}>
            <label htmlFor={inputId + value}>{value}</label>
            <input
              type={type}
              value={value}
              name={name}
              className={s.input}
              id={inputId + value}
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
        ))}
      </div>

      {error && <p className={s.error}>{error}</p>}
    </div>
  );
}

export default RadioInput;
