export const network = () => {
  return process.env.dockerNetwork
}

export const token = () => {
  return idx(process, _ => _.env.gqlProxyToken) || ''
}

/**
 * Available values: docker & kubernetes
 */
export const runtime = () => {
  return idx(process, _ => _.env.qglProxyRuntime) || 'kubernetes'
}


export const kubernetesServiceHost = () => {
  // $KUBERNETES_SERVICE
  return
}
