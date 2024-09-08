# Time-Based Background

Este projeto é uma aplicação web que altera a imagem de fundo e a cor de acordo com o horário do dia (manhã, tarde ou noite). A imagem e a cor são ajustadas dinamicamente com base na hora atual do sistema do usuário.

## Descrição

A aplicação utiliza JavaScript para detectar a hora atual do sistema do usuário e altera a imagem e a cor de fundo da página conforme a parte do dia:

- **Manhã (00:00 - 11:59)**: Exibe uma imagem de manhã e define a cor de fundo para um tom de amarelo.
- **Tarde (12:00 - 17:59)**: Exibe uma imagem de tarde e define a cor de fundo para um tom de laranja.
- **Noite (18:00 - 23:59)**: Exibe uma imagem de noite e define a cor de fundo para um tom de azul escuro.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Arquivo principal com o markup HTML.
- `style.css`: Arquivo CSS para estilização da página.
- `script.js`: Arquivo JavaScript que contém a lógica para alterar a imagem e a cor de fundo com base no horário do dia.
- **Imagens**: `day_resized.png`, `afternoonnew_resized.png`, e `nigthnew_resized.png` são as imagens usadas para cada período do dia.

## Como Executar

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/franciscolima-pro/JavaScript-projects.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd JavaScript-projects
    ```

3. Abra o arquivo `index.html` em seu navegador preferido para visualizar a aplicação.

## Funcionalidades

- **Detecção de Hora Atual**: A aplicação usa o JavaScript para obter a hora atual do sistema do usuário.
- **Alteração Dinâmica de Imagem e Cor**: Com base na hora do dia, a aplicação altera a imagem e a cor de fundo da página para refletir o período do dia (manhã, tarde ou noite).

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Contribuições

Se você quiser contribuir para este projeto, siga estes passos:

1. Faça um fork deste repositório.
2. Crie uma branch para suas alterações:

    ```bash
    git checkout -b minha-nova-feature
    ```

3. Faça commit das suas alterações:

    ```bash
    git commit -am 'Adiciona nova feature'
    ```

4. Envie sua branch para o repositório remoto:

    ```bash
    git push origin minha-nova-feature
    ```

5. Crie um Pull Request para revisão.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato comigo:

- **Nome**: Francisco Lima
- **Email**: franciscolimapro@gmail.com
