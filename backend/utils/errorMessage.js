const token = null;
module.exports = {
  // categories errors messages
  CATEGORIES_NOT_FOUND: {status: 500, payload: 'Problema ao buscar categorias'},
  CATEGORY_NOT_FOUND: {status: 500, payload: 'Categoria não encontrada'},
  CATEGORY_NOT_CREATED: {status: 500, payload: 'Problema ao criar categoria'},
  CATEGORY_NOT_DELETED: {status: 500, payload: 'Problema ao deletar categoria'},

  // products errors messages
  PRODUCTS_NOT_FOUND: {status: 500, payload: 'Problema ao buscar produtos'},
  PRODUCT_NOT_FOUND: {status: 500, payload: 'Produto não encontrado'},
  PRODUCT_NOT_CREATED: {status: 500, payload: 'Problema ao criar produto'},
  PRODUCT_NOT_DELETED: {status: 500, payload: 'Problema ao deletar produto'},
  PRODUCT_NOT_UPDATED: {status: 500, payload: 'Problema ao atualizar produto'},

  // users errors messages
  USERS_NOT_FOUND: {status: 500, payload: 'Problema ao buscar usuários'},
  USER_NOT_FOUND: {status: 500, payload: 'Usuário não encontrado'},
  USER_NOT_CREATED: {status: 500, payload: 'Problema ao criar usuário', token},
  USER_NOT_DELETED: {status: 500, payload: 'Problema ao deletar usuário'},
  USER_NOT_UPDATED: {status: 500, payload: 'Problema ao atualizar usuário'},
  // roles errors messages

  // auth errors messages
  TOKEN_NOT_FOUND: {status: 401, payload: 'Token não encontrado'},
  SOME_ERROR: {status: 401, payload: 'Algo deu errado'},
  INVALID_CREDENTIALS: {status: 401, payload: 'Credenciais inválidas', token},
};
