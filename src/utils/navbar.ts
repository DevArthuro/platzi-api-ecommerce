import { router } from "./routes";

export const pagesNav = [
  { id: "product", name: "Crear Producto", route: router.createProduct },
  { id: "catalog", name: "Crear Catálogo", route: router.createCategory },
];

export const settingsUserNav = [
  { id: "profile", name: "Perfil", route: router.profile },
  { id: "logout", name: "Cerrar sesion", route: router.logout },
];
