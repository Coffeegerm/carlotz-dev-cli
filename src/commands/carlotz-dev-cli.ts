import { GluegunCommand } from 'gluegun'
import { carLotzDevCliHeading, p } from '../tools/prettyPrint'

const command: GluegunCommand = {
  name: 'carlotz-dev-cli',
  run: async toolbox => {
    const { print } = toolbox

    carLotzDevCliHeading();

    print.info('Welcome to the carlotz-dev-cli.')
    print.info('Please run carlotz-dev-cli help for more information')

    p()
    carLotzDevCliHeading();
  }
}

module.exports = command
