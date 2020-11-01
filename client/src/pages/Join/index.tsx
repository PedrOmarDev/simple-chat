import React, { useCallback, useRef } from 'react'
import { FiUser, FiBriefcase } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.png'

import { AnimationContainer, Container, Content } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

interface JoinFormData {
	name: string
	room: string
}

const Join: React.FC = () => {
	const formRef = useRef<FormHandles | null>(null)

	const history = useHistory()

	const handleSubmit = useCallback(
		async (data: JoinFormData): Promise<void> => {
			try {
				formRef.current?.setErrors({})

				const schema = Yup.object().shape({
					name: Yup.string().required('Nome obrigatório'),
					room: Yup.string().required('Assunto obrigatório'),
				})

				await schema.validate(data, {
					abortEarly: false,
				})

				const { name, room } = data

				history.push(`/chat?name=${name}&room=${room}`)
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err)

					formRef.current?.setErrors(errors)
				}
			}
		},
		[history],
	)

	return (
		<Container>
			<Content>
				<AnimationContainer>
					<img src={logoImg} alt="Go Barber" />

					<Form ref={formRef} onSubmit={handleSubmit}>
						<h1>Faça login</h1>

						<Input name="name" icon={FiUser} placeholder="Nome *" />

						<Input
							name="room"
							icon={FiBriefcase}
							placeholder="Assunto *"
						/>

						<Button type="submit">Entrar</Button>
					</Form>
				</AnimationContainer>
			</Content>
		</Container>
	)
}

export default Join
