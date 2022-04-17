import * as yup from "yup";
import "../style/App.scss";

export const RegisterSchema = yup.object().shape({

  nickname: yup
  .string()
  .required("Kullanıcı adı alanı zorunludur."),

  email: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz.")
    .required("Eposta alanı zorunludur."),

  password: yup
    .string()
    .typeError("Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin")
    .min(8, "Şifreniz 8 karakterden az olamaz")
    .max(32, "Şifreniz 32 karakterden fazla olamaz")
    .required("Şifre alanı zorunludur."),

    difpassword: yup
    .string()
    .required("Şifre tekrar alanı zorunludur.")
    .oneOf([yup.ref('password')], 'Şifre Uyumlu değil.'),
    
    check: yup
    .string()
    .required("Sözleşmeyi kabul Etmelisiniz")
});
