import { GluegunToolbox } from "gluegun"

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
        await generateContext(toolbox)
        break
    }
  }