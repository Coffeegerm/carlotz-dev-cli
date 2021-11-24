# Command Reference for carlotz-dev-cli

## help

aliases: h

Prints out documentation and information around the CLI tool including what commands can be ran and what they accomplish.

## generate

aliases: g

parameters:

- type: The type of component that you want to generate
  - context
  - page | screen
  - component
- name: The name of the component that should be generated

options:

- reactNative | rn -- this flag will determine whether or not to create React or React Native components
- directory | d -- this flag will help nest components in another file structure. Only used for components atm. passing --d="Forms/ReviewAndSubmit" will place component in "src/components/Forms/ReviewAndSubmit/[ComponentName]"
