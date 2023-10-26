<?php
// Incluimos nuestra biblioteca de funciones de noticias.
//require_once __DIR__ . '/../libraries/noticias.php';
// Incluimos la clase de Noticias.
// require_once __DIR__ . '/../classes/Noticia.php';
//$noticia = new Noticia;
//$noticias = $noticia->todo();

// Lo anterior lo puedo reemplazar directamente por:
$noticias = (new Noticia)->todo();
// Creamos la instancia de la clase, e inmediatamente la usamos, sin necesidad de guardarla en una variable
// intermedia.
// Esto es útil si solo queremos instanciar la clase para llamar a un método.
?>
<section class="container">
    <div>
        <h1>Noticias</h1>
        <p class="lead">Qué está pasando.</p>
    </div>
    <?php
    foreach($noticias as $noticia):
    ?>
    <div class="card">
        <article class="noticias-item">
            <div class="noticias-item_content card-body">
                <a href="index.php?s=noticias-leer&id=<?= $noticia->getNoticiaId();?>"><h2><?= $noticia->getTitulo();?></h2></a>
                <p><?= $noticia->getSinopsis();?></p>
            </div>
            <picture class="noticias-item_imagen">
                <source srcset="imgs/big-<?= $noticia->getImagen();?>" media="all and (min-width: 46.875em)">
                <img src="imgs/<?= $noticia->getImagen();?>" alt="<?= $noticia->getImagenDescripcion();?>">
            </picture>
        </article>
    </div>
    <?php
    endforeach;
    ?>
</section>
