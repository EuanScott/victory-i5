<div style="max-width: 1024px; margin: auto; background: rgba(128, 128, 128, 0.1); padding: 8px; border-radius: 4px">

_Definition for what a model is_

<br/>

Rather than having a model file for each of the main pages in the mobile app, there should be one file per app section. Each file will contain multiple models.

A sale.model.ts file may for example contain models for each of the following page(s):  
1. Shop
2. Basket
3. Sales History
4. Sales Report

<br/>

Example:
```TypeScript
export class AlertParams {
  header: string
  message: string
  buttons: AlertButton[]

  constructor (data) {
    this.header = data ? data.header : 'Header'
    this.message = data ? data.message : 'Message <strong>text</strong>!!!'
    this.buttons = data ? data.buttons.map(element => new AlertButton(element)) : [new AlertButton(null)]
  }
}

export class AlertButton {
  text: string
  role: string

  constructor (data) {
    this.text = data ? data.text : 'Okay'
    this.role = data ? data.role : 'cancel'
  }
}

```

<!-- TODO: Check this! - CamelCase vs first letter uppercase -->

Notes:
- The naming convention should be camel case for the Model declaration.
- The enum identifiers should ideally be a single word (lowercase) or if more than 1 word, it too should be camel case.

</div>
