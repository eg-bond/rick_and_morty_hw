export type TextInputOptionsT = {
  type: string
  name: string
  label: string
  asterisk: boolean
  description: string
  placeholder: string
  error: string
  disabled: boolean
  variant: 'default' | 'filled' | 'unstyled'
  radius: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export type RadioInputOptionsT = TextInputOptionsT & {
  valuesArray: Array<string>
}

export type DynamicStyleT = {
  '--input-size': string
  '--input-radius': string
  '--input-value-color': string
  '--input-placeholder-color': string
  '--input-border-color': string
  '--input-border-focused-color': string
  '--input-background-color': string
}

export enum Sizes {
  xs = '0.75',
  sm = '1',
  md = '1.25',
  lg = '1.5',
  xl = '1.75',
}

export enum Radiuses {
  xs = '0.125',
  sm = '0.25',
  md = '0.5',
  lg = '1',
  xl = '2',
}

export enum Colors {
  Placeholder = 'gray',
  Value = 'black',
  Transparent = 'transparent',
  BorderDefault = '#cfcfcf',
  BorderFocused = '#3ab3ff',
  BackgroundDefault = 'white',
  BackgroundFilled = '#cfcfcf',
  Error = 'red',
}
