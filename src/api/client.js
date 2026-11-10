const baseUrl = (
  import.meta.env.VITE_API_BASE_URL?.trim() || 'https://modi.kang0131.shop'
).replace(/\/+$/, '')

export async function apiRequest(path, options) {
  const url = `${baseUrl}/${path.replace(/^\/+/, '')}`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`MODI API 요청 실패 (${response.status})`, { cause: response })
  }

  return response
}
