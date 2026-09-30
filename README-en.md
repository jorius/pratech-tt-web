## How to use Dynamic Forms

The dynamic form are currently being built from the schema in `src/config/data/dynamic-form.json`, you can modify it to check how it works but you have to keep in mind that it must has the schema below to works properly.

| Property Name        | Accepted Values                                                             | Description
| -------------------- | --------------------------------------------------------------------------- | -----------
| id                   | `String`                                                                    | html id attribute
| name                 | `String`                                                                    | html name attribute
| type                 | `String`, one of: 'text' \| 'password' \| 'checkbox' \| 'radio' \| 'select' | The type of element which is going to be rendered
| validations          | `Array<string> `                                                            | The validations that are gonna apply to the field
| options              | `Array<string> `                                                            | Only available if the `type` property is `select` or `radio`, is an `array` of `string` that are gonna be displayed as options or items for the field
| selectOptionLabel    | `String`                                                                    | Only available if the `type` property is `select`, this is the `select` field `placeholder`. Example: "Select an option"

### Note

To keep the language support you have to include the following properties:
1. `name`
2. Values of the `options` `array`
3. `selectOptionLabel`

In the language files located in:
- `src/config/text/text-es.json`
- `src/config/text/text-en.json`

