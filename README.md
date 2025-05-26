# 🛍️ Projeto E-commerce com React + Tailwind + TypeScript

Este projeto é uma aplicação web de e-commerce desenvolvida com foco em performance, modularização e boas práticas. O front-end é construído com **React**, **TypeScript** e **Tailwind CSS**, integrando **APIs externas**, **autenticação com Clerk** e gerenciamento de estado com **Redux**.

---

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção de interfaces;
- **TypeScript** – Superset do JavaScript para tipagem estática;
- **Tailwind CSS** – Framework de utilitários CSS para estilização rápida e responsiva;
- **Redux** – Gerenciamento global de estado;
- **Clerk** – Autenticação moderna de usuários;
- **APIs externas (Node.js)** – Integrações com serviços externos;
- **API de CEP** – Consumo de dados de endereço via CEP.

---

## 🧱 Estrutura de Pastas
src/

    Home/

        Home.tsx

        CompoHome/

            BrowserRanger/

            Productsdestac/

            SectionBanner/

            carrosel/

            gridItens/

    FooterAndHeader/

        Footer/

            footer.tsx

            CompoFooter/

        Header/

            Header.tsx

            CompoHeader/

    Settings/ (contém toda a lógica da aplicação)

        HookCostum/

            Costum.tsx

        RouterIconCart/

            ProtetedRoute.tsx

        redux/

            add.tsx

        separateItems/

            separateItems.tsx

    pages/

        Cep/

            pageCep.tsx

        ChoiceItens/

            Choiceitens.tsx

        Login/

            Login.tsx

        Shop/

            shop.tsx

            imgIcon/

            CompoShop/

                ModalFilter/

                    ModalFilter.ts

                itensList/

                    ShopItens.tsx

        productPage/

            productPage.tsx

            componentesProduct/

                abolt.tsx

                listItensProduct.tsx

                modalProduct.tsx



---

## 🔐 Autenticação

O sistema de login e autenticação é gerenciado com **Clerk**, garantindo segurança e facilidade na criação de contas e login de usuários.

---

## 🌍 APIs Externas

A aplicação consome:
- Uma **API Node.js** personalizada para produtos;
- Uma **API de CEP** para preenchimento automático de endereço.

---

## 🧠 Lógica da Aplicação

Toda a lógica está centralizada na pasta `Settings`, que inclui:
- Hooks customizados (`HookCostum`)
- Rotas protegidas (`RouterIconCart`)
- Gerenciamento de estado via Redux (`redux`)
- Separação e filtragem de itens (`separateItems`)

---

## 🛠️ Em desenvolvimento
