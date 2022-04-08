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

  USER_LOGIN_SUCCESSFUL: (user, token) => {
    return {
      status: 200,
      payload: {
        user: {
          userName: user.user_name,
          userEmail: user.user_email,
          userRole: user.user_role,
        },
        token,
        message: `Usuario ${user.user_name} validado com sucesso.`,
      },
    };
  },

  USER_REGISTER_SUCCESSFUL: (user, token) => {
    return {
      status: 200,
      payload: {
        user: {
          userName: user.user_name,
          userEmail: user.user_email,
          userRole: user.user_role,
        },
        token,
        message: `Usuario ${user.user_name} registrado com sucesso.`,
      },
    };
  },
};
