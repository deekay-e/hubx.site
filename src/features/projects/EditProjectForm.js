import { useState, useEffect } from 'react'
import { useUpdateProjectMutation, useDeleteProjectMutation } from './projectsApiSlice'
import { useNavigate } from 'react-router-dom'
import { Save, Trash3 } from 'react-bootstrap-icons'

const EditProjectForm = ({ project, users }) => {
  const [updateProject, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useUpdateProjectMutation()

  const [deleteProject, {
    isSuccess: isDelSuccess,
    isError: isDelError,
    error: delerror
  }] = useDeleteProjectMutation()

  const navigate = useNavigate()

  const [title, setTitle] = useState(project.title)
  const [text, setText] = useState(project.text)
  const [completed, setCompleted] = useState(project.completed)
  const [userId, setUserId] = useState(project.user)

  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setTitle('')
      setText('')
      setUserId('')
      navigate('/dash/projects')
    }
  }, [isSuccess, isDelSuccess, navigate])

  const onTitleChanged = e => setTitle(e.target.value)
  const onTextChanged = e => setText(e.target.value)
  const onCompletedChanged = e => setCompleted(prev => !prev)
  const onUserIdChanged = e => setUserId(e.target.value)

  const canSave = [title, text, userId].every(Boolean) && !isLoading

  const onSaveProjectClicked = async (e) => {
    if (canSave) {
      await updateProject({ id: project.id, user: userId, title, text, completed })
    }
  }

  const onDeleteProjectClicked = async () => {
    await deleteProject({ id: project.id })
  }

  const created = new Date(project.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
  const updated = new Date(project.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

  const options = users.map(user => {
    return (
      <option
        key={user.id}
        value={user.id}
      > {user.username}</option >
    )
  })

  const errClass = (isError || isDelError) ? 'errmsg' : 'offscreen'
  const validTitleClass = !title ? 'form__input--incomplete' : ''
  const validTextClass = !text ? 'form__input--incomplete' : ''

  const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

  const content = (
    <>
      <p className={errClass}>{errContent}</p>

      <form className='form' onSubmit={e => e.preventDefault()}>
        <div className='form__title-row'>
          <h2>Edit Project #{project.ticket}</h2>
          <div className='form__action-buttons'>
            <button
              className='icon-button'
              title='Save'
              onClick={onSaveProjectClicked}
              disabled={!canSave}
            >
              <Save size={16} />
            </button>
            <button
              className='icon-button'
              title='Delete'
              onClick={onDeleteProjectClicked}
            >
              <Trash3 size={16} />
            </button>
          </div>
        </div>
        <label className='form__label' htmlFor='project-title'>
          Title:
        </label>
        <input
          className={`form__input ${validTitleClass}`}
          id='project-title'
          name='title'
          type='text'
          autoComplete='off'
          value={title}
          onChange={onTitleChanged}
        />

        <label className='form__label' htmlFor='project-text'>
          Text:
        </label>
        <textarea
          className={`form__input form__input--text ${validTextClass}`}
          id='project-text'
          name='text'
          value={text}
          onChange={onTextChanged}
        />
        <div className='form__row'>
          <div className='form__divider'>
            <label className='form__label form__checkbox-container' htmlFor='project-completed'>
              WORK COMPLETE:
              <input
                className='form__checkbox'
                id='project-completed'
                name='completed'
                type='checkbox'
                checked={completed}
                onChange={onCompletedChanged}
              />
            </label>

            <label className='form__label form__checkbox-container' htmlFor='project-username'>
              ASSIGNED TO:
            </label>
            <select
              id='project-username'
              name='username'
              className='form__select'
              value={userId}
              onChange={onUserIdChanged}
            >
              {options}
            </select>
          </div>
          <div className='form__divider'>
            <p className='form__created'>Created:<br />{created}</p>
            <p className='form__updated'>Updated:<br />{updated}</p>
          </div>
        </div>
      </form>
    </>
  )
  return content
}

export default EditProjectForm