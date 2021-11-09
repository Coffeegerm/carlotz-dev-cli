import { GluegunToolbox, GluegunCommand } from 'gluegun'
import {
  p,
  carLotzDevCliHeading,
  heading,
  command,
} from '../tools/prettyPrint'

const help: GluegunCommand = {
  dashed: true,
  alias: ['h'],
  description: 'Get helpful information regarding running this CLI tool',
  run: async (toolbox: GluegunToolbox) => {
    const { meta } = toolbox

    p()

    carLotzDevCliHeading()
    heading(`Welcome to the CarLotzDev CLI ${meta.version()}!`)
    p()
    p('carlotz-dev-cli is a CLI that helps you build better and fast React and React Native Apps')
    p()
    heading('Commands')
    p()

    command('generate (g)', 'Generates components and other app features', [
      'carlotz-dev-cli generate context Dealers',
      'carlotz-dev-cli generate component Hello',
      'carlotz-dev-cli generate (screen || page) Login'
    ])
    p()
    carLotzDevCliHeading()
  }
}

module.exports = help
