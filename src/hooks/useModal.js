import React from "react"

function useModal() {
  const [isOpen, setIsModalOpen] = React.useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return { isOpen, openModal, closeModal }
}

export default useModal