import { GluegunToolbox } from 'gluegun'

export const generateProps = async (toolbox: GluegunToolbox, name: string) => {
  await toolbox.template.generate({
    template: 'shared/props.ts.ejs',
    target: `src/components/${name}/${name}Props.ts`,
    props: { name }
  })
}

export const generateContext = async (
  toolbox: GluegunToolbox,
  name: string
) => {
  await toolbox.template.generate({
    template: 'shared/context.tsx.ejs',
    target: `src/contexts/${name}Context.tsx`,
    props: { name }
  })

  toolbox.print.info('Generated files in directory src/contexts');
}
