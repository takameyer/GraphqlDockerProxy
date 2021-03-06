//@flow

export type Endpoint = {
  url: string,
  namespace: string,
  typePrefix: string,
  __created: string,
  __imageID: string,
  __burnd: ?boolean
}

export type Endpoints = {
  [key : string]: Array<Endpoint>
}

class FindEndpoints{

  constructor(){}
  getEndpoints = (): Endpoints => {
    console.log('you have to override getEndpoints')
    return {}
  }

  /**
   * If getEndpoints have different to the past here you can do extra handling like loadbalacing etc... 
   */
  handleRestart = (endpoints: Endpoints) : Endpoints => {
    return endpoints
  }

}

export { FindEndpoints }
