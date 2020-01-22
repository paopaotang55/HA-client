// import qs from 'querystring';
import { message } from 'antd';

export function fetchGet(url) {
  return new Promise(resolve => {
    return fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(() => {
        message.error('서버 문제 있습니다!');
      });
  });
}
