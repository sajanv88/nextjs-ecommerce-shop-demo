// BEM in kebab-case: block, block__element, block--modifier, block__element--modifier.
const kebab = "[a-z][a-z0-9]*(?:-[a-z0-9]+)*";

/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "selector-class-pattern": [
      `^${kebab}(?:__${kebab})?(?:--${kebab})?$`,
      {
        message: (selector) =>
          `Expected "${selector}" to be BEM: block__element--modifier in kebab-case`,
      },
    ],
    // stylelint 17 dropped resolveNestedSelectors, so nested `&…` suffixes are checked here.
    "selector-disallowed-list": [
      [new RegExp(`^&(?!(?:__${kebab})?(?:--${kebab})?(?:$|[:\\[]))`), /\.nuv-/],
      {
        splitList: true,
        message: (selector) =>
          selector.includes(".nuv-")
            ? `Don't select nuvui's classes ("${selector}"): set the component's --nuv-* variable instead`
            : `Expected "${selector}" to nest as &__element, &--modifier or &__element--modifier`,
      },
    ],
    "max-nesting-depth": [
      1,
      {
        ignore: ["pseudo-classes", "blockless-at-rules"],
        ignoreAtRules: ["include", "media", "supports", "container"],
      },
    ],
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "declaration-no-important": true,
    "color-no-hex": true,
    "color-named": "never",
    "at-rule-disallowed-list": ["import"],
  },
};
