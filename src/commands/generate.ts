import { GluegunToolbox } from 'gluegun'

const generateTypes = ['component', 'page', 'context']

const generateComponent = async (toolbox: GluegunToolbox) => {
  const {
    parameters,
    template: { generate }
  } = toolbox

  const name = parameters.second

  await generate({
    template: 'shared/props.ts.ejs',
    target: `src/components/${name}Props.ts`,
    props: { name }
  })

  await generate({
    template: 'react/component.tsx.ejs',
    target: `src/components/${name}.tsx`,
    props: { name }
  })
}

const generatePage = async (toolbox: GluegunToolbox) => {}

const generateContext = async (toolbox: GluegunToolbox) => {}

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: { info, error }
    } = toolbox

    const type = parameters.first

    const name = parameters.second

    if (!type || !name) {
      error('Please provide a type and/or name for generation')
    } else if (!generateTypes.includes(type)) {
      error('Please provide valid type for generation')
    } else {
      switch (type) {
        case 'component':
          await generateComponent(toolbox)

        case 'page':
          await generatePage(toolbox)

        case 'context':
          await generateContext(toolbox)
      }

      info(`Generated file for type ${type} with name ${name}`)
    }
  }
}
