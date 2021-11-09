import { GluegunToolbox } from 'gluegun'
import { generateProps, generateContext } from './shared'

const generateComponent = async (toolbox: GluegunToolbox) => {
  const {
    parameters,
    template: { generate },
    print: {info}
  } = toolbox

  const name = parameters.second

  const directory = `src/components/${name}`

  await generateProps(toolbox, name)

  await generate({
    template: 'react/useStyles.ts.ejs',
    target: `${directory}/use${name}Styles.ts`,
    props: { name }
  })

  await generate({
    template: 'react/component.tsx.ejs',
    target: `${directory}/index.tsx`,
    props: { name }
  })

  info(`Generated files in directory ${directory}`)
}

const generatePage = async (toolbox: GluegunToolbox) => {
  const {
    parameters,
    template: { generate },
    print: {info}
  } = toolbox

  const name = parameters.second

  const directory = `src/pages/${name}`

  await generateProps(toolbox, name)

  await generate({
    template: 'react/useStyles.ts.ejs',
    target: `${directory}/use${name}Styles.ts`,
    props: { name }
  })

  await generate({
    template: 'react/page.tsx.ejs',
    target: `${directory}/index.tsx`,
    props: { name }
  })

  info(`Generated files in directory ${directory}`)
}

export const generateReactComponents = async (toolbox: GluegunToolbox) => {
  const { parameters } = toolbox

  const type = parameters.first

  switch (type) {
    case 'component':
      await generateComponent(toolbox)
      break

    case 'page':
      await generatePage(toolbox)
      break

    case 'context':
      await generateContext(toolbox, toolbox.parameters.second)
      break
  }
}
