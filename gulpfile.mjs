// Importando os módulos necessários usando sintaxe ES Module
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

// Inicializando o gulp-sass com dart-sass
const sass = gulpSass(dartSass);

// Definindo o caminho dos arquivos
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  images: {
    src: 'src/images/**/*.{jpg,jpeg,png,svg,gif}',
    dest: 'dist/images'
  }
};

// Tarefa para compilar SASS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa para comprimir imagens
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Tarefa para comprimir JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('main.min.js')) // Opcional: Concatenar arquivos JS
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa para observar alterações nos arquivos
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// Definindo as tarefas default e de build
const build = gulp.series(gulp.parallel(styles, images, scripts));

export {
  styles,
  images,
  scripts,
  watch,
  build as default
};
