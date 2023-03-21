export default class Register {
  constructor() {
    this.element = null

    this.regulatoryServiceName = null
    this.iasAttestatioReport = null
    this.enclavePK = null
    this.endpoint = null
  }

  init(element) {
    this.element = element

    this.regulatoryServiceName = element.regulatoryServiceName
    this.iasAttestatioReport = element.iasAttestatioReport
    this.enclavePK = element.enclavePK
    this.endpoint = element.endpoint
    return this
  }
}
