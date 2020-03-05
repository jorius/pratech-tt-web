## Como usar formularios dinámicos

El formulario dinámico está siendo construido a partir del esquema en `src/config/data/dynamic-form.json`, se puede modificar para cerciorarse como funciona pero hay que tener presente que debe seguir el siguiente esquema para que funcione correctamente.

| Nombre de la propiedad      | Valores Aceptados                                                             | Descripción
| -------------------- | --------------------------------------------------------------------------- | -----------
| id                   | `String`                                                                    | atribut id html
| name                 | `String`                                                                    | atribut name html
| type                 | `String`, uno de: 'text' \| 'password' \| 'checkbox' \| 'radio' \| 'select' | El tipo de elemento que se va a renderizar
| validations          | `Array<string> `                                                            | Las validaciones que se le van a aplicar al campo
| options              | `Array<string> `                                                            | Solo disponible si la propiedad `type` es `select` o `radio`, es un `array` de `string` que se van a utilizar como opciones o elementos del campo
| selectOptionLabel    | `String`                                                                    | Solo disponible si la propiedad `type` es `select`, este es el `placeholder` del `select`. Ejemplo: "Seleccione una opción"

### Nota

Para mantener el soporte de lenguaje debe agregar las siguientes propiedades:
1. `name`
2. Values of the `options` `array`
3. `selectOptionLabel`

En los archivos de idioma:
- `src/config/text/text-es.json`
- `src/config/text/text-en.json`

