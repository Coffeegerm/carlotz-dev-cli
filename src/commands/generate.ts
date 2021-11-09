import { GluegunToolbox } from 'gluegun'
import {generateReactComponents} from '../generators/react'

const generateTypes = ['component', 'page', 'context']

module.exports = {
  name: 'generate',
  description: 'Generate new components for project',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: { info, error, success }
    } = toolbox

    const type = parameters.first

    const name = parameters.second

    // user can pass either --rn or --reactNative flag to determine which file type they want to generate
    const { rn, reactNative } = parameters.options

    if (!type || !name) {
      error('\nPlease provide a type and/or name for generation')
    } else if (!generateTypes.includes(type)) {
      error('\nPlease provide valid type for generation')
    } else {
      info(`Generating files for ${(rn || reactNative) ? 'React Native' : 'React'}`)

      if (rn || reactNative) {
      } else {
        await generateReactComponents(toolbox);
      }

      success(`Generated files for type ${type} with name ${name}`)
    }
  }
}
