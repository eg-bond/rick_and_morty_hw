import { useId, useMemo } from 'react';
import { dynamicCssVariables } from '../helpers';
import s from '../css/styles.module.css';
import type { TextInputOptionsT } from '../Types';

function TextInput({
  type = 'text',
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
}: Partial<TextInputOptionsT>) {
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
      <input
        type={type}
        name={name}
        className={s.input}
        id={inputId}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
}

export default TextInput;
