import joi from 'joi';

const deleteBookValidator = joi.object({
  id: joi.string().uuid().required()
});

export default deleteBookValidator;
