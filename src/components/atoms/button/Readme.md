# Buttons

Buttons can be complicated. Our button component supports many different scenarios while trying to encourage consistent and clear usage throughout the app. There are class modifiers for buttons to adjust several aspects beyond just color.

| Size   | Shape    | Color        | Appearance |
| ------ | -------- | ------------ | ---------- |
| tiny   | expanded | primary      | hollow     |
| small  | circle   | secondary    | clear      |
| large  | entity   | warning      | dropdown   |
| xlarge |          | alert        | disabled   |
|        |          | success      |            |
|        |          | sky          |            |
|        |          | navy         |            |
|        |          | slate        |            |
|        |          | lightest     |            |
|        |          | light-gray   |            |
|        |          | medium       |            |
|        |          | darkest-gray |            |


Choose from any of the classes in this table. They can combine together, it's not just one class modifier at a time. That is why buttons do not follow the BEM conventions for `--modifier`


"Entity" buttons are a unique case. Don't try use them with any different colors or sizes. They are intended to live in the header of a record detail screen.
