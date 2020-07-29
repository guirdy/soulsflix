import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/img/Error404.png';
import { Body, ImgContent, TextContent } from './styles.js';

const Pagina404 = () => {
    return (
        <Body>
            <ImgContent>
                <img src={ErrorImage} alt="Erro 404" />
            </ImgContent>
            <TextContent>
                <h1>404</h1>
                <p>Ooops... Você digitou um endereço inválido, <Link to="/">voltar para a home page</Link>.</p>
            </TextContent>
        </Body>
    );
}

export default Pagina404;