import config from '../config';

const URL = `${config.URL}/categorias?_embed=videos`;

const getAll = () => {
  return fetch(URL)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
};

const getAllWithVideos = () => {
  return fetch(URL)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
};

export default {
  getAllWithVideos,
  getAll,
};
