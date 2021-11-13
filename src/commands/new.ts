import { GluegunToolbox, GluegunCommand } from 'gluegun'
import { carLotzDevCliHeading, p } from '../tools/prettyPrint'
import { generateNewReactApp } from '../generators/react'
import { generateNewReactNativeApp } from '../generators/react-native'

const newCommand: GluegunCommand = {
  name: 'new',
  description:
    'Generate new react or react native project with dependencies and folder structure scaffolded out',
  run: async (toolbox: GluegunToolbox) => {
    const { parameters } = toolbox

    carLotzDevCliHeading()

    const { rn, reactNative } = parameters.options

    if (rn || reactNative) {
      generateNewReactNativeApp(toolbox)
    } else {
      generateNewReactApp(toolbox)
    }

    p()
    carLotzDevCliHeading()
  }
}

module.exports = newCommand
