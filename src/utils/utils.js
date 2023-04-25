export const formatWithHyphens = value =>
  value.toLowerCase().replaceAll(' ', '-')

export const formatWithSpaces = value => value.replaceAll('-', ' ')
