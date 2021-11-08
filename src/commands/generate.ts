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
    target: `src/components/${name}/${name}Props.ts`,
    props: { name }
  })

  await generate({
    template: 'react/useStyles.ts.ejs',
    target: `src/components/${name}/use${name}Styles.ts`,
    props: { name }
  })

  await generate({
    template: 'react/component.tsx.ejs',
    target: `src/components/${name}/index.tsx`,
    props: { name }
  })
}

const generatePage = async (toolbox: GluegunToolbox) => {
  const {
    parameters,
    template: { generate }
  } = toolbox

  const name = parameters.second

  await generate({
    template: 'shared/props.ts.ejs',
    target: `src/components/${name}/${name}Props.ts`,
    props: { name }
  })

  await generate({
    template: 'react/useStyles.ts.ejs',
    target: `src/pages/${name.toLowerCase()}/use${name}Styles.ts`,
    props: { name }
  })

  await generate({
    template: 'react/page.tsx.ejs',
    target: `src/pages/${name}/index.tsx`,
    props: { name }
  })
}

const generateContext = async (toolbox: GluegunToolbox) => {
  const {
    parameters,
    template: { generate }
  } = toolbox

  const name = parameters.second

  await generate({
    template: 'shared/context.tsx.ejs',
    target: `src/contexts/${name}Context.tsx`,
    props: { name }
  })
}

const generateReactComponents = async (toolbox: GluegunToolbox) => {
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
      await generateContext(toolbox)
      break
  }
}

module.exports = {
  name: 'generate',
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
      error('Please provide a type and/or name for generation')
    } else if (!generateTypes.includes(type)) {
      error('Please provide valid type for generation')
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
