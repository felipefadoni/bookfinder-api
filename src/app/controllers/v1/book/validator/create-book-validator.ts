import joi from 'joi';

const createBookValidator = joi.object({
  author: joi.string().min(4).max(250).required(),
  description: joi.string().min(10).max(250).required(),
  link: joi.string().min(10).max(250).required(),
  publishedDate: joi.string().min(10).max(12).required(),
  title: joi.string().min(5).max(250).required()
});

export default createBookValidator;
