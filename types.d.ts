// i18 config file

type i18conf = {
  locales: string[];
  defaultLocale: string;
};

// images.d.ts
declare module "*.webp" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}

// id for blogs and prosucts page
type Id = { id: number };

// blog post

interface IBlogPost {
  blog: {
    id: number;
    title: string;
    body: string;
    publicationDate?: string;
  };
}

// blogs list

interface IBlog {
  image: string;
  title: string;
  description: string;
  category: string;
  userSub: string | null | undefined;
  publicationDate?: string;
}

interface IBlogsContainer {
  blogs: IBlog[];
}
interface BlogsResponse {
  blogs: IBlog[];
  total: number;
  skip: number;
  limit: number;
}

// Contact card

interface IContactCard {
  data: {
    type: string;
    title: string;
    paragraph: string;
    href?: string;
  };
}

// product  type

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
  usersub: string;
}
interface IProductCard {
  product: Iproduct;
}

interface IProductsContainer {
  products: IProduct[];
}
interface IProductCardContainer extends IProductCard {
  addCart: string;
}

// Translation Provider component
interface ITranslationProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: i18next.Resource;
}

// children type

interface IChildrenProps {
  children: React.ReactNode;
}

// params id
interface IParamsIdProps {
  params: Id;
}

// i18n params props
interface IParamsProps {
  params: { locale: string };
}

interface IDashboardProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

// i18

interface ResourcesType {
  [language: string]: {
    [namespace: string]: {
      [key: string]: string;
    };
  };
}

// searcg bar props
interface ISearchBarProps {
  onClick: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>>;
  setSortProducts: setSortProducts;
  products: IProduct[];
}

// users
interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface IFormUser {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  age: FormDataEntryValue | null;
}

interface IUserFormProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

interface IUserRowProps {
  setIsVisible: () => void;
}
interface IDeleteUserRow extends IUserRowProps {
  id: number;
}

interface IEditUserDetails extends IUserRowProps {
  user: IUser;
}

// context types

type CartItem = {
  id: number;
  product: IProduct;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (product: IProduct) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  resetCart: () => void;
};

// user profile type
type UserRole = "user" | "admin";
interface UserInfo {
  id?: number;
  role?: UserRole;
  image?: string;
  name?: string;
  nickname?: string;
  email?: string;
  sub?: string;
  created_at?: string;
  updated_at?: string;
}

// contact page

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
};

// products
type Product = {
  image: string;
  title: string;
  description: string;
  category: string;
  price: string;
  quantity: string;
  userSub: string | null | undefined;
};
interface IProductDetails {
  id?: number;
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  userSub: string | null | undefined;
}

// delete products
interface IDeleteProduct {
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
  id: number;
}

// cart products
interface ICartProduct extends IProductDetails {
  selectedQuantity: number;
}
