# JET-Virtual-DOM-APP-vComponents
Projeto OJET utilizando "vcomponent"



Tutorial: https://www.linkedin.com/pulse/vcomponents-oracle-jet-mvvm-based-app-john-brock/

O componente deve ser criado em um projeto vDom:

npx @oracle/ojet-cli create JET-Virtual-DOM-APP-vComponents --template=basic --vdom

1 - npx ojet create component component-vdom --vcomponent (este comando cria o componente na pasta src/components)
2 - Editar os arquivos do componente incluíndo o código necessário do componente
3 - Para utilizar, realizar o import do componente no arquivo src/components/content/index.tsx => import 'component-vdom/loader';
4 - Utilizar o componente no mesmo arquivo, no return da função com <component-vdom></component-vdom>
5 - npx ojet build component component-vdom (este comando copia o componente para a pasta web/components)

Se quiser utilizar o componente em um projeto MVVM:

6 - npx ojet package component component-vdom (este comando cria uma pasta dist e um arquivo ZIP com o componente)
7 - Acessar o projeto MVVM, criar uma pasta jet_components e copiar o arquivo ZIP para ela, descompactando-o (nome sem a versão)
8 - Realizar o import do componente no arquivo .js do módulo usando apenas component-vdom/loader
9 - Utilizar o componente no arquivo .html do módulo usando <component-vdom></component-vdom>