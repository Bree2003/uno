type EnumMapper<T extends string | symbol | number, U> = { [K in T]: U };

export default EnumMapper;
