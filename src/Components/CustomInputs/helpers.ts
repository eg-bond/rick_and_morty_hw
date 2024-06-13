import {
  type DynamicStyleT,
  type TextInputOptionsT,
  Colors,
  Radiuses,
  Sizes,
} from './Types'

export function dynamicCssVariables(
  size: TextInputOptionsT['size'],
  radius: TextInputOptionsT['radius'],
  error: TextInputOptionsT['error'] | undefined,
  variant: TextInputOptionsT['variant']
): React.CSSProperties & DynamicStyleT {
  const inputSize = Sizes[size]
  const inputRadius = Radiuses[radius]

  const inputValueColor = error ? Colors.Error : Colors.Value
  const inputPlaceholderColor = error ? Colors.Error : Colors.Placeholder

  const { inputBorderColor, inputBorderFocusedColor } = changeBorderColors(
    error,
    variant
  )

  const inputBackgroundColor =
    variant === 'filled' ? Colors.BackgroundFilled : Colors.BackgroundDefault

  return {
    '--input-size': inputSize,
    '--input-radius': inputRadius,
    '--input-value-color': inputValueColor,
    '--input-placeholder-color': inputPlaceholderColor,
    '--input-border-color': inputBorderColor,
    '--input-border-focused-color': inputBorderFocusedColor,
    '--input-background-color': inputBackgroundColor,
  }
}

function changeBorderColors(
  error: TextInputOptionsT['error'] | undefined,
  variant: TextInputOptionsT['variant']
) {
  let inputBorderColor: string = Colors.BorderDefault
  let inputBorderFocusedColor: string = Colors.BorderFocused

  if (variant === 'unstyled') {
    inputBorderColor = Colors.Transparent
    inputBorderFocusedColor = Colors.Transparent
  }
  if (error) {
    inputBorderColor = Colors.Error
    inputBorderFocusedColor = Colors.Error
  }

  return { inputBorderColor, inputBorderFocusedColor }
}
