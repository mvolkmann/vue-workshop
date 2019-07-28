// Change this to match the URL prefix of your REST services.
// If your project uses REST services with more than one URL prefix,
// drop use URL_PREFIX and just pass full URLs into the functions.
const URL_PREFIX = 'http://localhost:1234';

// If there are any common options that are
// desired in all HTTP requests, place them here.
const options = {};

// Can't name this "delete" because that is a JavaScript keyword.
export async function deleteResource(urlSuffix) {
  const url = URL_PREFIX + urlSuffix;
  await fetch(url, {...options, method: 'DELETE'});
}

export async function getJson(urlSuffix) {
  const url = URL_PREFIX + urlSuffix;
  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export async function getText(urlSuffix) {
  const url = URL_PREFIX + urlSuffix;
  const res = await fetch(url, options);
  const text = await res.text();
  if (!res.ok) throw new Error(text || res.statusText);
  return text;
}

export function postJson(urlSuffix, obj) {
  return postPutJson('POST', urlSuffix, obj);
}

export function putJson(urlSuffix, obj) {
  return postPutJson('PUT', urlSuffix, obj);
}

async function postPutJson(method, urlSuffix, obj) {
  const body = JSON.stringify(obj);
  const headers = {'Content-Type': 'application/json'};
  const url = URL_PREFIX + urlSuffix;
  const res = await fetch(url, {...options, method, headers, body});
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}
