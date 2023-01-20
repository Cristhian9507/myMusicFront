# myMusic
Uno de los mejores aplicativos para buscar tus canciones favoritas en iTunes y guardar todas aquellas que te hacen feliz.
Simple de usar, solo necesitas un usuario y listo.

## Tecnologías

- Angular v15.0.4
- Docker v20.10
- Docker-compose v1.29.2
- Redis v


## Instalación en docker
Entrar en la carpeta del proyecto clonado y ejecutar los siguientes comandos:
- docker-compose up -d

```
- El puerto 80 deberá estar disponible para obtener el proyecto ejecutando correctamente
```
## Ejecutar el aplicativo

Una vez configurado, el aplicativo estará ejecutando en: http://127.0.0.1. 

## Usabilidad

Debe de ingresar cualquier usuario y dar clic en Go. Posteriormente encontrará una interfaz para buscar canciones por nombre de banda y en la parte lateral derecha los favoritos guardados en cache redis (1 hora).

Al escribir el nombre de una banda, el sistema traerá todos las canciones que coincidan con la búsqueda y en la parte lateral izquierda encontrará un icono de estrella, este servirá para añadir o eliminar de favoritos.

Podrá cambiar de usuario las veces que desee dando clic en el nombre que se encuentra en la parte superior derecha y posteriormente en cambiar de usuario. El sistema pedirá de nuevo el nombre del usuario.


## Instalación en máquina
```
- Configurar el archivo .env con los mismos datos que se encuentran en .env.example
```
En caso de que no se tenga docker instalado, se puede instalar el aplicativo directamente en la máquina.

Entrar en la carpeta del proyecto clonado y ejecutar los siguientes comandos en una consola:
- npm install
- ng serve

```
- El puerto 4200 deberá estar disponible para obtener el proyecto ejecutando correctamente
```
## Ejecutar el aplicativo

Una vez configurado, el aplicativo estará ejecutando en: http://127.0.0.1:4200. 

## Usabilidad

Debe de ingresar cualquier usuario y dar clic en Go. Posteriormente encontrará una interfaz para buscar canciones por nombre de banda y en la parte lateral derecha los favoritos guardados en cache redis (1 hora).

Al escribir el nombre de una banda, el sistema traerá todos las canciones que coincidan con la búsqueda y en la parte lateral izquierda encontrará un icono de estrella, este servirá para añadir o eliminar de favoritos.

Podrá cambiar de usuario las veces que desee dando clic en el nombre que se encuentra en la parte superior derecha y posteriormente en cambiar de usuario. El sistema pedirá de nuevo el nombre del usuario.
