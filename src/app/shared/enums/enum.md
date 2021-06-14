<div style="max-width: 1024px; margin: auto; background: rgba(128, 128, 128, 0.1); padding: 8px; border-radius: 4px">

_Definition for what an Enum is_

<br/>

Each of the Enum categories will be grouped together as done with the [Models][md_1]. 

<br/>

Example:
```Typescript
export enum ToastType {
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}

export enum ToastPosition {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom'
}


export enum ToastButtonSide {
  start = 'start',
  end = 'end'
}
```
<!-- TODO: Check this! - CamelCase vs first letter uppercase -->

Notes:
- The naming convention should be camel case for the enum declaration.
- The enum identifiers should ideally be a single word (lowercase) or if more than 1 word, it too should be camel case.
- The enum types should also ideally be a single word (lowercase) or if more than 1 word, it too should be camel case.

[md_1]: ../src/app/shared/models/model.md

</div>
