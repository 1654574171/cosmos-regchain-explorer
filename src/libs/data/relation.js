export default class Relation {
  constructor() {
    this.element = null

    this.contractAddress = null
    this.bindingName = null
  }

  init(element) {
    this.element = element

    this.contractAddress = element.contractAddress
    this.bindingName = element.bindingName
    return this
  }
}
