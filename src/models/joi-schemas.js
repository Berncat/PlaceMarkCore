import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const ThemeSpec = {
  name: Joi.string().required(),
};

export const PlaceSpec = {
  name: Joi.string().required(),
  lon: Joi.number().required(),
  lat: Joi.number().required(),
  desc: Joi.string().allow("").optional(),
};