import { GluegunToolbox, GluegunCommand } from 'gluegun'
import { generateReactComponents } from '../generators/react'
import { generateReactNativeComponents } from '../generators/react-native'
import { carLotzDevCliHeading, p } from '../tools/prettyPrint'

const generateTypes = ['component', 'page', 'context', 'screen']

const generate: GluegunCommand = {
  name: 'generate',
  description: 'Generate new components for project',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: { info, error, success }
    } = toolbox

    carLotzDevCliHeading()

    const type = parameters.first

    const name = parameters.second

    // user can pass either --rn or --reactNative flag to determine which file type they want to generate
    const { rn, reactNative } = parameters.options

    if (!type || !name) {
      error('\nPlease provide a type and/or name for generation')
    } else if (!generateTypes.includes(type)) {
      error('\nPlease provide valid type for generation')
    } else {
      info(
        `Generating files for ${rn || reactNative ? 'React Native' : 'React'}`
      )

      if (rn || reactNative) {
        if (type === 'page') {
          toolbox.parameters.first = 'screen'
          info(
            `You tried to use a page type in React Native. Please use screen next time.`
          )
        }
        await generateReactNativeComponents(toolbox)
      } else {
        if (type === 'screen') {
          toolbox.parameters.first = 'page'
          info(
            `You tried to use a screen type in React Native. Please use page next time.`
          )
        }
        await generateReactComponents(toolbox)
      }

      success(
        `Generated files for type ${toolbox.parameters.first} with name ${name}`
      )

      p()
      carLotzDevCliHeading()
    }
  }
}

module.exports = generate
