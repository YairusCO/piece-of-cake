export const excludeUndefined = (obj) => {
  return Object.entries(obj).reduce((cleaned, [key, value]) => {
    if (value === undefined) {
      return cleaned
    }
    return { ...cleaned, [key]: value }
  })
}

export const getQueryString = (filter) => {
  const cleaned = (filter && excludeUndefined(filter)) || {}
  return new URLSearchParams(cleaned).toString()
}
