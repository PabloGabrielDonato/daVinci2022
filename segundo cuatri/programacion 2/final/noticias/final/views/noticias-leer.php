<?php
use DaVinci\Models\Noticia;
//require_once __DIR__ . '/../libraries/noticias.php';
//$noticia = noticiasTraerPorId($_GET['id']);

// Si la noticia no existe, imprimimos la vista de 404, y evitamos el resto.
// require_once __DIR__ . '/../classes/Noticia.php';
//$noticia = new Noticia;
//$noticia = $noticia->traerPorId($_GET['id']);
// $noticia = (new Noticia)->traerPorId($_GET['id']);
$noticia = new Noticia($_GET['id']);

if(!$noticia) {
    require_once __DIR__ . '/404.php';
} else {
?>
<section class="container">
    <article class="noticias-item">
        <div class="noticias-item_content">
            <h1><?= $noticia->getTitulo();?></h1>
            <p><?= $noticia->getSinopsis();?></p>
            <div class="mb-1">
                <?php
                foreach($noticia->getEtiquetas() as $etiqueta):
                ?>
                <span class="badge"><?= $etiqueta->getNombre();?></span>
                <?php
                endforeach;
                ?>
            </div>
        </div>
        <picture class="noticias-item_imagen">
            <source srcset="imgs/big-<?= $noticia->getImagen();?>" media="all and (min-width: 46.875em)">
            <img src="imgs/<?= $noticia->getImagen();?>" alt="<?= $noticia->getImagenDescripcion();?>">
        </picture>

        <p><?= $noticia->getTexto();?></p>
    </article>
</section>
<?php
}
?>
