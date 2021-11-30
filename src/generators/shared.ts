import { GluegunToolbox } from 'gluegun'

export const generateProps = async (toolbox: GluegunToolbox, name: string) => {
  // construct directory passed on options if passed
  const { directory, d } = toolbox.parameters.options
  let componentDirectory = `src/components/${name}`
  if (directory || d) {
    const dir = directory || d
    componentDirectory = `src/components/${dir}/${name}`
  }
  await toolbox.template.generate({
    template: 'shared/props.ts.ejs',
    target: `${componentDirectory}/${name}Props.ts`,
    props: { name }
  })
}

export const generateContext = async (
  toolbox: GluegunToolbox,
  name: string
) => {
  const pName = toolbox.strings.pascalCase(name)
  await toolbox.template.generate({
    template: 'shared/context.tsx.ejs',
    target: `src/contexts/${pName}Context.tsx`,
    props: { pName }
  })

  toolbox.print.info('Generated files in directory src/contexts')
}
