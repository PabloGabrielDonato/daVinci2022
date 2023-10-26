<?php
use DaVinci\Models\Noticia;

$noticias = (new Noticia)->publicadas();
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
                <a href="index.php?s=noticias-leer&id=<?= $noticia->getNoticiaId();?>"><h2><?= htmlspecialchars($noticia->getTitulo());?></h2></a>
                <div class="mb-1">
                <?php
                foreach($noticia->getEtiquetas() as $etiqueta):
                ?>
                    <span class="badge"><?= $etiqueta->getNombre();?></span>
                <?php
                endforeach;
                ?>
                <p>Escrito por <?= htmlspecialchars($noticia->getUsuario()->getEmail());?></p>
                <p><?= htmlspecialchars($noticia->getSinopsis());?></p>
            </div>
            </div>
            <picture class="noticias-item_imagen">
                <source srcset="imgs/big-<?= htmlspecialchars($noticia->getImagen());?>" media="all and (min-width: 46.875em)">
                <img src="imgs/<?= htmlspecialchars($noticia->getImagen());?>" alt="<?= htmlspecialchars($noticia->getImagenDescripcion());?>">
            </picture>
        </article>
    </div>
    <?php
    endforeach;
    ?>
</section>
