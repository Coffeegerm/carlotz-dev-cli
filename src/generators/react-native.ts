import { GluegunToolbox } from 'gluegun'
import { generateContext, generateProps } from './shared'

const generateComponent = async (toolbox: GluegunToolbox) => {
  const {
    parameters,
    template: { generate },
    print: { info },
    strings: { pascalCase }
  } = toolbox

  const name = pascalCase(parameters.second)

  const directory = `src/components/${name}`

  await generateProps(toolbox, name)

  await generate({
    template: 'react-native/useStyles.ts.ejs',
    target: `${directory}}/use${name}Styles.ts`,
    props: { name }
  })

  await generate({
    template: 'react-native/component.tsx.ejs',
    target: `${directory}}/index.tsx`,
    props: { name }
  })

  info(`Generated files in directory ${directory}`)
}

export const generateReactNativeComponents = async (
  toolbox: GluegunToolbox
) => {
  const { parameters } = toolbox

  const type = parameters.first

  switch (type) {
    case 'component':
      await generateComponent(toolbox)
      break

    case 'context':
      await generateContext(toolbox, toolbox.parameters.second)
      break
  }
}

export const generateNewReactNativeApp = async (toolbox: GluegunToolbox) => {
  console.log('generate new react native app')
}
