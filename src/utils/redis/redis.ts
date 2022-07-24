export const parseRedisReturn = (retrievedData: any) => {
  const parsedReturn = JSON.parse(retrievedData, (key, value) => {
    if (key === 'created_at' || key === 'updated_at' || key === 'birth_date') {
      return new Date(value);
    }

    return value;
  });

  return parsedReturn;
};

export const setRedisKey = <T>(
  key: string,
  expireTime: string,
  retrievedData: T,
  redisClient: any,
) => {
  redisClient.set(key, JSON.stringify(retrievedData));
  redisClient.expire(key, expireTime);
};
