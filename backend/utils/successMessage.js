module.exports = {
  USER_SUCCESSFULLY_CREATED: (name) => {
    return {
      status: 200,
      payload: `Usuário ${name} criado com sucesso!`,
    };
  },

  USER_SUCCESSFULY_EDITED: (name) => {
    return {
      status: 200,
      payload: `Usuário ${name} editado com sucesso!`,
    };
  },

  USER_SUCCESSFULY_DELETED: (name) => {
    return {
      status: 200,
      payload: `Usuário ${name} deletado com sucesso!`,
    };
  },

  CATEGORY_SUCCESSFULLY_CREATED: (name) => {
    return {
      status: 200,
      payload: `Categoria ${name} criada com sucesso!`,
    };
  },

  CATEGORY_SUCCESSFULLY_DELETED: (name) => {
    return {
      status: 200,
      payload: `Categoria ${name} deletada com sucesso!`,
    };
  },

  PRODUCT_SUCCESSFULLY_CREATED: (name) => {
    return {
      status: 200,
      payload: `Produto ${name} criado com sucesso!`,
    };
  },

  PRODUCT_SUCCESSFULLY_DELETED: (name) => {
    return {
      status: 200,
      payload: `Produto ${name} deletado com sucesso!`,
    };
  },

  PRODUCT_SUCCESSFULLY_EDITED: (name) => {
    return {
      status: 200,
      payload: `Produto ${name} editado com sucesso!`,
    };
  },
};
