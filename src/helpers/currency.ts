export const parseCurrency = (value: number) => {
  return value.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  })
}
