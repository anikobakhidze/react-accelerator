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

// if for blogs and prosucts page
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
  id: number;
  title: string;
  body: string;
  userId?: number;
  tags?: string[];
  reactions?: number;
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
interface IContactProps {}
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
  thumbnail: string;
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
