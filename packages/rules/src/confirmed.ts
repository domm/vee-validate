import { RuleParamSchema } from '@vee-validate/shared';

const validate = (value: any, { target }: Record<string, any>) => String(value) === String(target);

const params: RuleParamSchema[] = [
  {
    name: 'target',
    isTarget: true
  }
];

export { validate, params };

export default {
  validate,
  params
};