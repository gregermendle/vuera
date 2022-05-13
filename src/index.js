import ReactWrapper, { createReactWrapper } from './wrappers/React'
import VueWrapper from './wrappers/Vue'
import VuePlugin from './VuePlugin'
import VueInReact, { babelReactResolver as __vueraReactResolver } from './resolvers/React'
import config from './config'
import ReactInVue from './resolvers/Vue'

export {
  ReactWrapper,
  createReactWrapper,
  VueWrapper,
  __vueraReactResolver,
  VuePlugin,
  VueInReact,
  ReactInVue,
  config
}
