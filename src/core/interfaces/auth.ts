export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  fullName: string;
  email: string;
  password?: string;
  role?:string
 id?:string
}

export interface ForgotProps {
  email: string;
}

export interface RecoveryPassword {
  password: string;
}
