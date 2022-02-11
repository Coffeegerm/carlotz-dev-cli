# carlotz-dev-cli

A CLI for carlotz development.

## Customizing your CLI with gluegun

This CLI uses the gluegun open source library to help scaffold and build out commands.

Check out the documentation at <https://github.com/infinitered/gluegun/tree/master/docs>.

## Run locally

`npm link`

`carlotz-dev-cli help` to confirm linked properly. At this point the CLI can be used from any directory

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

## License

MIT - see LICENSE

Test again2
