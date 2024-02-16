export function getTelegramApiUrl(path = '/', botToken) {
  if (typeof botToken !== 'string' || botToken.length < 0) {
    throw new Error('No botToken provided');
  }

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  return `https://api.telegram.org/bot${botToken}${path}`;
}
