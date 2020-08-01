import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
