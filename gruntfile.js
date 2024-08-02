module.exports = function(grunt) {
    // Configuração do projeto.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compilação do LESS.
        less: {
            development: {
                files: {
                    "css/style.css": "less/style.less" // Ajuste os caminhos conforme necessário
                }
            }
        },

        // Compressão de JavaScript.
        uglify: {
            build: {
                src: 'js/main.js', // Ajuste o caminho conforme necessário
                dest: 'js/main.min.js'
            }
        }
    });

    // Carrega os plugins.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefas padrão.
    grunt.registerTask('default', ['less', 'uglify']);
};
