import { CreditCard } from 'components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentForm/interfaces';

export interface User {
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
}

interface UserData {
  firstName: string;
  lastName: string;
  nickName: string;
  sex: string;
  birthday: string;
  language: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  address1: string;
  address2: string;
  zipcode: string;
  website: string;
  twitter: string;
  linkedin: string;
  facebook: string;
}

interface PasswordData {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

interface AuthData {
  phone: string;
  email: string;
}

interface NotificationsData {
  1: string[];
  2: string[];
  3: string[];
}

export const getUser = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        firstName: 'Alexandr',
        lastName: 'Yaschenkov',
        imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1629465123/Ellipse_59_vls5ji.jpg',
        userName: '@alex1989',
      });
    }, 1000);
  });
};

export const updateUser = (userData: UserData): Promise<UserData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(userData);
    }, 1000);
  });
};

export const updatePassword = (passwordData: PasswordData): Promise<PasswordData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(passwordData);
    }, 1000);
  });
};

export const update2FA = (authData: AuthData): Promise<AuthData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(authData);
    }, 1000);
  });
};

export const updateNotifications = (notificationsData: NotificationsData): Promise<NotificationsData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(notificationsData);
    }, 1000);
  });
};

export const addCreditCard = (creditCard: CreditCard): Promise<CreditCard> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(creditCard);
    }, 1000);
  });
};

export const updateCreditCard = (creditCard: CreditCard): Promise<CreditCard> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(creditCard);
    }, 1000);
  });
};

export const removeCreditCard = (id: string): Promise<string> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(id);
    }, 1000);
  });
};