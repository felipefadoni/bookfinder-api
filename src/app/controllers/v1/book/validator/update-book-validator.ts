import joi from 'joi';

const updateBookValidator = joi.object({
  id: joi.string().uuid().required(),
  author: joi.string().min(4).max(250).required(),
  description: joi.string().min(10).max(250).required(),
  link: joi.string().min(10).max(250).required(),
  publishedDate: joi.string().min(10).max(12).required(),
  title: joi.string().min(5).max(250).required()
});

export default updateBookValidator;
