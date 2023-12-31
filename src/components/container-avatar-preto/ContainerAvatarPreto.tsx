<<<<<<< HEAD

import React, { useState } from "react";
=======
import React from "react";
import { useState } from "react";
>>>>>>> 60f759b (sixth commit)
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsArrowRight } from "react-icons/bs";
import "./ContainerAvatarPreto.css";
<<<<<<< HEAD
import img from "../../../public/fotos/preto.png"
=======
>>>>>>> 60f759b (sixth commit)

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  height: "70%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  zIndex: "2",
};

export default function ContainerAvatarPreto() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="container-avatar-content">
        <aside className="avatar-content">
          <img src="../../../public/fotos/preto.png" />
        </aside>
        <aside className="avatar-description">
          <div className="title">
            <h1>Gabriel Preto</h1>
          </div>
          <div className="description">
            <p>
              Olá sou o Gabriel tenho 17 anos, sou um cara tranquilo,
              ligeiramente introvertido, muito focado, e minha maior qualidade é
              estar a todo momento num processo de constante aprendizado,
              tirando o melhor de todas adversidades que permeiam meu caminho.
            </p>
          </div>
          <button className="button" onClick={handleOpen}>
            Informações <BsArrowRight style={{ marginLeft: "15px" }} />
          </button>
<<<<<<< HEAD
          
          <div className="icons">
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
              <img src="../../../public/images/html.svg"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
              <img src="../../../public/images/css.svg"></img>
            </a>
            <a href="https://www.python.org/">
              <img src="../../../public/images/Python.svg"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <img src="../../../public/images/JavaScript.svg"></img>
            </a>
            <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16">
              <img src="../../../public/images/bd.svg"></img>
            </a>
            <a href="https://react.dev/">
              <img src="../../../public/images/React-icon 1.svg"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="../../../public/images/django.svg"></img>
            </a>
            <a href="https://www.java.com/pt-BR/">
              <img src="../../../public/images/Java.svg"></img>
=======

          <div className="icons">
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/html.svg?alt=media&token=5881e319-6505-4765-bf05-823a03f7f806"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/css.svg?alt=media&token=02ed2fde-5709-461f-8538-dcebdeaee86b"></img>
            </a>
            <a href="https://www.python.org/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Python.svg?alt=media&token=bfc774b8-ed80-4246-827c-ef7f1c924bdd"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/JavaScript.svg?alt=media&token=263fe8b1-b356-4f06-8ab2-cb3b831b39cb"></img>
            </a>
            <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/bd.svg?alt=media&token=12057dc8-e71a-4009-998e-33882a529bf0"></img>
            </a>
            <a href="https://react.dev/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/React-icon%201.svg?alt=media&token=66a4106f-582e-4467-a9c5-481383e05a4e"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/django.svg?alt=media&token=f78bbb7e-a262-43ce-b98b-b3cba4553219"></img>
            </a>
            <a href="https://www.java.com/pt-BR/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Java.svg?alt=media&token=723ee218-0c20-406c-a0ce-40c99f8c47f8"></img>
>>>>>>> 60f759b (sixth commit)
            </a>
          </div>
          <Modal
            keepMounted
            style={{ zIndex: "10" }}
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <div className="modal">
                <div className="div-1">
                  <div className="title-avatar">
                    <h1>Projetos</h1>
                    <div className="infos">
                      <ul>
                        <li>• Corporate Wiki</li>
                        <li>• SML (sistema de monitoramento lovelace)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="title-avatar">
                    <h1>Curiosidades</h1>
                    <div className="infos">
                      <ul>
                        <li>• Sou apaixonado por Videogames</li>
                        <li>• Sou autodidata</li>
                        <li>• Sou intolerante a Lactose</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-3">
                  <div className="title-avatar">
                    <h1>Hobbies</h1>
                    <div className="infos">
                      <ul>
                        <li>• Jogar Videogames</li>
                        <li>• Ouvir Música</li>
                        <li>• Ler</li>
                        <li>• Aprender Historia</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="title-avatar">
                    <h1>Formação</h1>
                    <div className="infos">
                      <ul>
                        <li>
                          • Curso de Auxiliar Administrativo - Grupo Primavera
                        </li>
                        <li>
                          • E.E Professora Castinauta de Barros Mello e
                          Albuquerque - EM
                        </li>
                        <li>
                          • Técnico Analise e Desenvolvimento de Sistemas -
                          Senai Roberto Mange
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </aside>
      </section>
    </>
  );
}
