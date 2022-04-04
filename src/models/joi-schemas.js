import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  scope: Joi.array().allow("").optional(),
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PlaceSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Api Test Place"),
    lon: Joi.number().required().example(100),
    lat: Joi.number().required().example(50),
    desc: Joi.string().allow("").optional().example("Far far away"),
    themeId: IdSpec,
    userId: IdSpec,
  })
  .label("Place");

export const PlaceSpecPlus = PlaceSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacePlus");

export const PlaceArraySpec = Joi.array().items(PlaceSpecPlus).label("PlaceArray");

export const ThemeSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Api Test Theme"),
    userId: IdSpec,
  })
  .label("Theme");

export const ThemeSpecPlus = ThemeSpec.keys({
  places: Joi.array().allow("").optional(),
  _id: IdSpec,
  __v: Joi.number(),
}).label("ThemePlus");

export const ThemeArraySpec = Joi.array().items(ThemeSpecPlus).label("ThemeArray");

export const AdminCredentialsSpec = Joi.object()
  .keys({
    password: Joi.string().example("secret").required(),
  })
  .label("AdminCredentials");