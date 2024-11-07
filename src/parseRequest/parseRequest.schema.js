const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['action', 'data'],
  properties: {
    data: {
      type: 'object',
      additionalProperties: false,
      required: ['id'],
      properties: {
        id: { type: 'string', minLength: 1, maxLength: 255 },
        clientId: { type: 'string', minLength: 1, maxLength: 255 },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        document: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'string', minLength: 1, maxLength: 255 },
      },
    },
    action: { type: 'string', enum: ['PUT', 'POST', 'GET', 'DELETE'] },
  },
};

export { schema };
