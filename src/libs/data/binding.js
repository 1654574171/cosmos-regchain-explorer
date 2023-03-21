export default class Binding {
  constructor() {
    this.element = null

    this.bindingName = null
    this.hash = null
    this.content = null
    this.ruleFilesNames = null
  }

  init(element) {
    this.element = element

    this.bindingName = element.bindingName
    this.hash = element.hash
    this.content = element.content
    this.ruleFilesNames = element.ruleFilesNames
    return this
  }
}
