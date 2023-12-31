async function fecthDados(url) {
  const response = await fetch(url);
  const dados = await response.json();
  return dados;
}

export {fecthDados};