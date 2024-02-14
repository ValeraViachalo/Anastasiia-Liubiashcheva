import qs from 'qs';
import { getTelegramApiUrl } from '../helpers/telegram';

const defaultOpts = {
  throwIfFailed: false
}

async function sendMessage(message, { throwIfFailed } = defaultOpts) {
  if (typeof message !== 'string') {
    throw new TypeError('Expected message to be string');
  }

  if (message.length < 1) {
    throw new Error('Expected non-empty message');
  }

  let url = getTelegramApiUrl('/sendMessage', process.env.REACT_APP_TG_BOT_TOKEN);

  const params = {
    'chat_id': process.env.REACT_APP_TG_CHAT_ID,
    text: message,
    'parse_mode': 'html',
  };

  const query = qs.stringify(params);

  url = `${url}?${query}`;

  const result = await fetch(url)
    .then(response => response.json())
    .catch(err => ({ ok: false, err }));

  if (process.env.REACT_APP_SEND_MESSAGE_DEBUG) {
    console.debug(result);
  }

  if (!result.ok) {
    if (process.env.REACT_APP_SEND_MESSAGE_DEBUG) {
      console.debug('sendMessage() failed with result:', result);
      alert(`sendMessage failed with result: ${JSON.stringify(result)}`);
    }

    if (throwIfFailed) {
      throw new Error('Send message request failed.');
    }
  }

  return result;
}

export default sendMessage;
