-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2022 a las 15:43:52
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prog2_2022_2_m`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `ciudad_id` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conferencias`
--

CREATE TABLE `conferencias` (
  `conferencia_id` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `equipo_id` tinyint(3) UNSIGNED NOT NULL,
  `conferencia_fk` tinyint(3) UNSIGNED NOT NULL,
  `ciudad_fk` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_publicacion`
--

CREATE TABLE `estados_publicacion` (
  `estado_publicacion_id` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estados_publicacion`
--

INSERT INTO `estados_publicacion` (`estado_publicacion_id`, `nombre`) VALUES
(1, 'Draft'),
(2, 'Publicada'),
(3, 'Deshabilitada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas`
--

CREATE TABLE `etiquetas` (
  `etiqueta_id` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `etiquetas`
--

INSERT INTO `etiquetas` (`etiqueta_id`, `nombre`) VALUES
(1, 'Temporada Regular'),
(2, 'Playoff'),
(3, 'Partidos'),
(4, 'Lesiones'),
(5, 'Récords'),
(6, 'Draft'),
(7, 'San Antonio Spurs'),
(8, 'Denver Nuggets'),
(9, 'Toronto Raptors'),
(10, 'Houston Rockets');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `noticia_id` int(10) UNSIGNED NOT NULL,
  `usuario_fk` int(10) UNSIGNED NOT NULL,
  `estado_publicacion_fk` tinyint(3) UNSIGNED NOT NULL,
  `fecha_publicacion` datetime NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `sinopsis` varchar(255) NOT NULL,
  `texto` text NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `imagen_descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`noticia_id`, `usuario_fk`, `estado_publicacion_fk`, `fecha_publicacion`, `titulo`, `sinopsis`, `texto`, `imagen`, `imagen_descripcion`) VALUES
(1, 2, 2, '2022-01-02 11:23:51', 'Ginóbili sigue rompiendo récords', 'Emanuel \'Manu\' Ginóbili viene rompiendo algunos récords tanto de su equipo como de la liga.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem in nobis animi eaque reiciendis quam voluptatum explicabo! Inventore accusantium culpa voluptates fugiat explicabo illo vel eius dignissimos alias eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis sit nostrum obcaecati repudiandae numquam. Temporibus autem maxime sequi rem, voluptatem vitae aperiam nemo, dolores sint, fuga quos quae porro?', 'manu.jpg', 'Manu Ginóbili en medio de un partido'),
(3, 2, 2, '2022-01-03 12:02:23', 'Houston Rockets lidera la conferencia', 'De la mano de James Harden, los Rockets se apuntan como candidatos para ganar los playoff.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem in nobis animi eaque reiciendis quam voluptatum explicabo! Inventore accusantium culpa voluptates fugiat explicabo illo vel eius dignissimos alias eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis sit nostrum obcaecati repudiandae numquam. Temporibus autem maxime sequi rem, voluptatem vitae aperiam nemo, dolores sint, fuga quos quae porro?', 'rockets-logo.jpg', 'Logo de los Houston Rockets'),
(4, 1, 2, '2022-01-03 19:53:19', 'Toronto Raptors queda primero en el Este', 'Los Raptors de Lowry y DeRozan se quedan con el primer lugar de su conferencia.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem in nobis animi eaque reiciendis quam voluptatum explicabo! Inventore accusantium culpa voluptates fugiat explicabo illo vel eius dignissimos alias eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis sit nostrum obcaecati repudiandae numquam. Temporibus autem maxime sequi rem, voluptatem vitae aperiam nemo, dolores sint, fuga quos quae porro?', 'raptors-logo.jpg', 'Logo de los Toronto Raptors'),
(5, 1, 2, '2022-01-03 22:01:47', 'Denver se queda corto por un partido', 'Quedó a una victoria y media de clasificar a los playoff.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem in nobis animi eaque reiciendis quam voluptatum explicabo! Inventore accusantium culpa voluptates fugiat explicabo illo vel eius dignissimos alias eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis sit nostrum obcaecati repudiandae numquam. Temporibus autem maxime sequi rem, voluptatem vitae aperiam nemo, dolores sint, fuga quos quae porro?', 'nuggets-logo.jpg', 'Logo de los Denver Nuggets');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias_tienen_etiquetas`
--

CREATE TABLE `noticias_tienen_etiquetas` (
  `noticia_fk` int(10) UNSIGNED NOT NULL,
  `etiqueta_fk` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `noticias_tienen_etiquetas`
--

INSERT INTO `noticias_tienen_etiquetas` (`noticia_fk`, `etiqueta_fk`) VALUES
(1, 1),
(1, 2),
(1, 5),
(1, 7),
(3, 1),
(3, 2),
(3, 10),
(4, 1),
(4, 9),
(5, 1),
(5, 2),
(5, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restablecer_passwords`
--

CREATE TABLE `restablecer_passwords` (
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `token` char(64) NOT NULL,
  `fecha_expiracion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `rol_id` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`rol_id`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `rol_fk` tinyint(3) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `rol_fk`, `email`, `password`, `username`) VALUES
(1, 1, 'admin@saraza.com', '$2y$10$gmMnmbsch5UTTj1Q3QiNw.PjTpkweDiWKModFsBJrQBFTN8PT.pSq', 'Administrador'),
(2, 1, 'sara@za.com', '$2y$10$gmMnmbsch5UTTj1Q3QiNw.PjTpkweDiWKModFsBJrQBFTN8PT.pSq', 'Saraza'),
(3, 2, 'usu@rio.com', '$2y$10$gmMnmbsch5UTTj1Q3QiNw.PjTpkweDiWKModFsBJrQBFTN8PT.pSq', 'Pepe Trueno'),
(4, 2, 'otro@usuario.com', '$2y$10$gmMnmbsch5UTTj1Q3QiNw.PjTpkweDiWKModFsBJrQBFTN8PT.pSq', NULL),
(9, 2, 'test@usuario.com', '$2y$10$zPC.obbd.tCTIIdHkH9gk.HOfz8qSmyKKdlw3HLs0glV69PopjJPK', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`ciudad_id`);

--
-- Indices de la tabla `conferencias`
--
ALTER TABLE `conferencias`
  ADD PRIMARY KEY (`conferencia_id`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`equipo_id`),
  ADD KEY `fk_equipos_conferencias1_idx` (`conferencia_fk`),
  ADD KEY `fk_equipos_ciudades1_idx` (`ciudad_fk`);

--
-- Indices de la tabla `estados_publicacion`
--
ALTER TABLE `estados_publicacion`
  ADD PRIMARY KEY (`estado_publicacion_id`);

--
-- Indices de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`etiqueta_id`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`noticia_id`),
  ADD KEY `fecha_publicacion_idx` (`fecha_publicacion`),
  ADD KEY `fk_noticias_usuarios_idx` (`usuario_fk`),
  ADD KEY `fk_noticias_estados_publicacion1_idx` (`estado_publicacion_fk`);

--
-- Indices de la tabla `noticias_tienen_etiquetas`
--
ALTER TABLE `noticias_tienen_etiquetas`
  ADD PRIMARY KEY (`noticia_fk`,`etiqueta_fk`),
  ADD KEY `fk_noticias_has_etiquetas_etiquetas1_idx` (`etiqueta_fk`),
  ADD KEY `fk_noticias_has_etiquetas_noticias1_idx` (`noticia_fk`);

--
-- Indices de la tabla `restablecer_passwords`
--
ALTER TABLE `restablecer_passwords`
  ADD PRIMARY KEY (`usuario_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `fk_usuarios_roles1_idx` (`rol_fk`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `ciudad_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `conferencias`
--
ALTER TABLE `conferencias`
  MODIFY `conferencia_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `equipo_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estados_publicacion`
--
ALTER TABLE `estados_publicacion`
  MODIFY `estado_publicacion_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `etiqueta_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `noticia_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `restablecer_passwords`
--
ALTER TABLE `restablecer_passwords`
  MODIFY `usuario_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `rol_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD CONSTRAINT `fk_equipos_ciudades1` FOREIGN KEY (`ciudad_fk`) REFERENCES `ciudades` (`ciudad_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_equipos_conferencias1` FOREIGN KEY (`conferencia_fk`) REFERENCES `conferencias` (`conferencia_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `fk_noticias_estados_publicacion1` FOREIGN KEY (`estado_publicacion_fk`) REFERENCES `estados_publicacion` (`estado_publicacion_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_noticias_usuarios` FOREIGN KEY (`usuario_fk`) REFERENCES `usuarios` (`usuario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `noticias_tienen_etiquetas`
--
ALTER TABLE `noticias_tienen_etiquetas`
  ADD CONSTRAINT `fk_noticias_has_etiquetas_etiquetas1` FOREIGN KEY (`etiqueta_fk`) REFERENCES `etiquetas` (`etiqueta_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_noticias_has_etiquetas_noticias1` FOREIGN KEY (`noticia_fk`) REFERENCES `noticias` (`noticia_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `restablecer_passwords`
--
ALTER TABLE `restablecer_passwords`
  ADD CONSTRAINT `fk_restablecer_passwords_usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuarios_roles1` FOREIGN KEY (`rol_fk`) REFERENCES `roles` (`rol_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
