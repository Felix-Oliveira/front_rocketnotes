import { useEffect, useState } from "react";

import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { useNavigate } from "react-router-dom";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar-place.svg"

import { useAuth } from "../../hooks/auth";


export function Profile() {
  const {user, updateProfile} = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]

    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }




  return (
    <Container >
      <header>
        <button onClick={()=>navigate(-1)}>
          <FiArrowLeft/>
        </button>

      </header>

      <Form>

        <Avatar>
        <img src={avatar} alt="Foto do usuário" />
        <label htmlFor="avatar">
          <FiCamera/> <input type="file" id="avatar" onChange={handleChangeAvatar} />
        </label>
        </Avatar>
        
        <Input
          placeholder="Nome"
          type="text"
          icon={ FiUser }
          value={name}
          onChange={e=> setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={ FiMail }
          value={email}
          onChange={e=> setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={ FiLock }
          
          onChange={e=> setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={ FiLock }
          onChange={e=> setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />


      </Form>

      
    </Container>

  )}
