## Pour lancer un projet npm
    => npm init -f

        => Nous crée un "packages.json"
            => Nous permet de dire de quelle dépendance on a besoin

            n/permet d'installer des "briques" logicielles (appel la compilation(babel) comme webpack)

            Symfony nous permet d'avoir une sourcouche pour travailler avec webpack plus simple à configurer(webpack-encore)

            P/ l'installer
                => npm install --save-dev @symfony/webpack-encore --save-dev

            Ensuite il faut crée un fichier "webpack.config.js"
                => le configurer à nos besoins

                    Lancer des scripts encore qui font tournée "webpack encore" dans le package.json

                            P/ compiler "dev" : "encore dev",
                            P/le compilage(il faut rajouter un pluggin babel) et indiquer au webpack.config.js de l'utiliser
                            => npm install @babel/preset-react@^7.0.0 --save-dev
                            ainsi qu'installer le cors&runtimesJs => npm i --save core-js regenerator-runtime
                            "watch": "encore dev --watch",
                            "build": "encore production"


                Et enfin on mettre les liens vers nos différents nouveaus script:
                      <script src="static/js/runtime.js"></script>
                        <script src="static/js/vendors~posts.js"></script>
                        <script src="static/js/posts.js"></script>

                On pourra ensuite enlever les cdn react
                (Parce que webpack nous permet d'installer des modules)
                    et installer react & son dom
                        => npm install react react-dom
                    On pourra du coup importer react dans les fichier js &
                    lancer => npm run watch
                    P/que webpack surveille les fichiers, prendre en compte les modif & recompiler le code.

