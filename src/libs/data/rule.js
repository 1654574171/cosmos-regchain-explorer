export default class Rule {
  constructor() {
    this.element = null

    this.ruleName = null
    this.hash = null
    this.content = null
  }

  init(element) {
    this.element = element

    this.ruleName = element.ruleName
    this.hash = element.hash
    this.content = element.content
    return this
  }
}
