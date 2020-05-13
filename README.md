<div id="top" align="center" markdown="1">

# 16 front end project <br /> with desing :tada::tada: #

</div>

Esse repositório vai ser uma série de **16 projetos** que encontrei [aqui!](https://dev.to/frontendmentor/16-front-end-projects-with-designs-to-help-improve-your-coding-skills-5ajl) :point_left::point_left: Em cada projeto vai ser dado uma imagem de um layout e algumas especificações, e o objetivo é fazer esse layout **!!**

Meu principal objetivo :dart: com esses projetos é melhorar minhas skills com css e também para aprender a utilizar essas ferramentas:

- [Pug :dog:](https://pugjs.org/language/tags.html)
- [Sass](https://sass-lang.com)
- [Less](http://lesscss.org)
- [Gulp](https://gulpjs.com)

# Projetos #
**1°** - [single-price-grid-component-master](#single-price-grid-component-master)
**2°** - [four-card-feature-section-master](#four-card-feature-section-master)

# single-price-grid-component-master #

![Design single-price-grid-component-master](./single-price-grid-component-master/design/desktop-preview.jpg)

O primeiro projeto é esse layout acima :arrow_up::arrow_up: e suas especificações eram:

- Deixar o layout responsivo;
- Colocar um efeito de **Hover** no botão;

Para fazer ele, utilizei o [Gulp](https://gulpjs.com), [Pug :dog:](https://pugjs.org/language/tags.html) para o HTML e para os estilos, o [Sass](https://sass-lang.com) :+1::+1:

Para ver como ficou o resultado, [clique aqui](https://maurodesouza.github.io/16-front-end-project-with-design/single-price-grid-component-master/dist/index.html) :point_left::point_left:

Se quiser ver como ficaram os arquivos, [clique aqui](https://github.com/maurodesouza/16-front-end-project-with-design/tree/master/single-price-grid-component-master/src) :point_left::point_left:

![single-price-grid-component-master app](./.github/single-price-grid-component.gif)

Foi um layout bem simples de fazer, utilizei uma section com **display flex** e **flex-wrap wrap** e dentro coloquei 3 divs, a primeira com width 100% e as outras duas com width 50%.

Para deixar responsivo, apenas adicionei um **flex-direction column** na section e deixei todas as div com width 100%.

[Voltar ao início](#top)

# four-card-feature-section-master #

![Design four-card-feature-section-master](./four-card-feature-section-master/design/desktop-preview.jpg)

Para o segundo projeto, temos esse layout acima :arrow_up::arrow_up: suas especificações eram:

- Deixar o layout responsivo;

Para fazer ele, utilizei novamente o [Gulp](https://gulpjs.com), [Pug :dog:](https://pugjs.org/language/tags.html) para o HTML e para os estilos, o [Sass](https://sass-lang.com) :+1::+1:

Para ver como ficou o resultado, [clique aqui](https://maurodesouza.github.io/16-front-end-project-with-design/four-card-feature-section-master/dist/index.html) :point_left::point_left:

Se quiser ver como ficaram os arquivos, [clique aqui](https://github.com/maurodesouza/16-front-end-project-with-design/tree/master/four-card-feature-section-master/src) :point_left::point_left:

![four-card-feature-section-master app](./.github/four-card-feature-section-master.gif)

Para fazer a parte dos **cards**, utilizei uma div como **container** com **display flex** e **align-items center**, e dentro do wrapper coloquei os 4 cards da seguinte forma:

```html

<container>

  <card-1>

  <div>
    <card-2>
    <card-3>
  </div>

  <card-4>

</container>

```

Para deixar responsivo, apenas coloquei **flex-direction column** no container que segura os cards e diminui um pouco o tamanho das fontes :+1::+1:

[Voltar ao início](#top)

---

Feito com :heart: by Mauro de Souza - Email: maurodesouza2017@hotmail.com