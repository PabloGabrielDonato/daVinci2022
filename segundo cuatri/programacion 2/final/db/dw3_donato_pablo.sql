-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2023 a las 15:07:25
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dw3_donato_pablo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto_id` int(10) UNSIGNED NOT NULL,
  `usuario_fk` int(10) UNSIGNED NOT NULL,
  `fecha_publicacion` datetime DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `imagen_descripcion` varchar(255) DEFAULT NULL,
  `sinopsis` text DEFAULT NULL,
  `texto` text DEFAULT NULL,
  `precio` varchar(20) DEFAULT NULL,
  `clase` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_id`, `usuario_fk`, `fecha_publicacion`, `titulo`, `email`, `imagen`, `imagen_descripcion`, `sinopsis`, `texto`, `precio`, `clase`) VALUES
(3, 1, '2023-02-21 01:41:45', 'Mermelada Frutilla', 'Elaborada a partir de frutillas enteras frescas, manteniendo así intacto el sabor y las propiedades de la fruta recién cortada. Edulzada con jugo de uva, 100% Fruta, y estevia 100% natural.', '1676940105-mermelada-frutilla.png', 'mermelada frutilla', 'Escribir sinopsis', 'Escribir TEXT', '600', 'Mermeladas'),
(4, 1, '2022-11-13 22:56:50', 'Mermelada Durazno', 'Elaborada a partir de duraznos enteros frescos, manteniendo así intacto el sabor y las propiedades de la fruta recién cortada. Edulzada con jugo de uva, 100% Fruta, y estevia 100% natural.', '1668376610-mermelada-durazno.png', 'mermelada durazno', 'Escribir sinopsis', 'Escribir TEXT', '300', 'Mermeladas'),
(21, 1, '2023-02-21 01:44:19', 'Alfajor sin Azucar Agregada', NULL, '1676940259-alfajor.png', 'Alfajor', 'Escribir sinopsis', 'Texto', '100', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `producto_id` int(10) UNSIGNED NOT NULL,
  `usuario_fk` int(10) UNSIGNED NOT NULL,
  `fecha_publicacion` datetime DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `rol` varchar(50) DEFAULT NULL,
  `precio` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`producto_id`, `usuario_fk`, `fecha_publicacion`, `nombre`, `apellido`, `email`, `password`, `rol`, `precio`) VALUES
(3, 1, '2023-02-20 21:53:12', 'Mariano F', 'Donato', 'mariano.donato@outlook.com', '123', 'Administrador', '0'),
(6, 1, '2023-02-20 13:14:13', 'Sandra', 'Barzola', 'sandrabarzola@gmail.com', '123', 'Usuario', ''),
(7, 1, '2023-02-20 22:04:22', 'Pablo G', 'Donato', 'iphone.pablo2002@gmail.com', '123', 'Administrador', '0'),
(10, 1, '2023-02-20 18:54:58', 'Sanders Ester', 'Veronica', 'sanders@outlook.com', '123', 'Usuario', '0'),
(18, 1, '2023-02-20 22:07:17', 'Mario', 'Grimber', 'mario.grimber@outlook.com', '123', 'Usuario', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto_id`),
  ADD KEY `fecha_publicacion_idx` (`fecha_publicacion`),
  ADD KEY `fk_noticias_usuarios_idx` (`usuario_fk`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`producto_id`),
  ADD KEY `fecha_publicacion_idx` (`fecha_publicacion`),
  ADD KEY `fk_noticias_usuarios_idx` (`usuario_fk`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `producto_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `producto_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
