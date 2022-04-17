import React, { useState } from "react";
import { Formik } from "formik";
import { RegisterSchema } from "../constants/yupSchema";
import Moon from "../constants/icon/moon";
import Sun from "../constants/icon/sun";
import Patika from "../constants/icon/patika";
import MinRect from "../constants/icon/minRect";
import MaxRect from "../constants/icon/maxRect";
import Article from "../component/Article";
import clsx from "clsx";
import "../style/App.scss";

export default function Register() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="allPage">
      <div className="fixed">
        <div className="infoBox" theme={theme}>
          <div className="logo">
            <Patika />
          </div>

          <Article />

          <div className="rectangle">
            <div className="minRect">
              <MinRect backColor={theme === "light" ? "#444AFF" : "#FFBF5E"} />
            </div>

            <div className="maxRect">
              <MaxRect backColor={theme === "light" ? "#444AFF" : "#FFBF5E"} />
            </div>
          </div>
        </div>
      </div>

      <div className="formBox" theme={theme}>
        <div className="form">
          <div className="title">
            <h3>
              <strong theme={theme}>KAYIT</strong>
            </h3>
          </div>

          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              nickname: "",
              password: "",
              difpassword: "",
            }}
            onSubmit={(auth) => {
              console.log(auth);
            }}
            validationSchema={RegisterSchema}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <form>
                <div className="whoAmI">
                  <div
                    className={clsx("formGroup", { formError: !!errors.name })}
                  >
                    <label className="title" theme={theme}>
                      İSİM
                    </label>
                    <input
                      label="İSİM"
                      type="text"
                      name="name"
                      placeholder="İsmini gir"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <span className="error">{errors.name}</span>
                  </div>

                  <div
                    className={clsx("formGroup", {
                      formError: !!errors.surname,
                    })}
                  >
                    <label className="title" theme={theme}>
                      SOYİSİM
                    </label>
                    <input
                      label="SOYİSİM"
                      type="text"
                      name="surname"
                      placeholder="Soyismini gir"
                      value={values.surname}
                      onChange={handleChange}
                    />
                    <span className="error">{errors.surname}</span>
                  </div>
                </div>

                <div className="entries formGroup">
                  <div
                    className={clsx("formGroup", { formError: !!errors.email })}
                  >
                    <label className="required title" theme={theme}>
                      E-POSTA
                    </label>
                    <input
                      label="E-POSTA"
                      type="text"
                      name="email"
                      placeholder="E-posta adresini gir"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <span className="error">{errors.email}</span>
                  </div>

                  <div
                    className={clsx("formGroup", {
                      formError: !!errors.nickname,
                    })}
                  >
                    <label className="required title" theme={theme}>
                      KULLANICI ADI
                    </label>
                    <input
                      label="KULLANICI ADI"
                      type="text"
                      name="nickname"
                      placeholder="Kullanıcı adı gir"
                      value={values.nickname}
                      onChange={handleChange}
                    />
                    <span className="error">{errors.nickname}</span>
                  </div>

                  <div
                    className={clsx("formGroup", {
                      formError: !!errors.password,
                    })}
                  >
                    <label className="required title" theme={theme}>
                      ŞİFRE
                    </label>
                    <input
                      label="ŞİFRE"
                      type="password"
                      name="password"
                      placeholder="Şifreni gir"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <span className="error">{errors.password}</span>
                  </div>

                  <div
                    className={clsx("formGroup", {
                      formError: !!errors.password,
                    })}
                  >
                    <label className="required title" theme={theme}>
                      ŞİFRENİ TEKRAR GİR
                    </label>
                    <input
                      label="ŞİFRENİ TEKRAR GİR"
                      type="password"
                      name="difpassword"
                      placeholder="Şifreni doğrula"
                      value={values.difpassword}
                      onChange={handleChange}
                    />
                    <span className="error">{errors.difpassword}</span>
                  </div>

                  <div className="formGroup2">

                    <div className="checkContainer">
                      <input
                        type="checkbox"
                        name="check"
                        id="check"
                        value={values.check}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="check"
                        className="required title"
                        theme={theme}
                      >
                        Sözleşmeyi kabul ediyorum
                      </label>
                    </div>

                    <span className="error">{errors.check}</span>
                    
                  </div>

                  <div className="formGroup formButton">
                    <button
                      className="registerButton"
                      type="submit"
                      theme="dark"
                      onClick={handleSubmit}
                    >
                      KAYIT OL
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div
          className="moonIcon"
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </div>
    </div>
  );
}
