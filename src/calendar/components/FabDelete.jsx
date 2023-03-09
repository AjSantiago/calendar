import { useCalendarStore } from '../../hooks/useCalendarStore'

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore()

  const handleDelete = () => {
    startDeletingEvent()
  }

  return (
    <button
      className='btn btn-danger fab-danger'
      onClick={handleDelete}
      style={{ display: hasEventSelected ? '' : 'none' }}
    >
      <i className='fa-solid fa-trash-can' />
    </button>
  )
}
