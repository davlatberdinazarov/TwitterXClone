import useRegisterModalStore from '@/hooks/useRegisterModal'
import Modal from '../ui/modal'


export default function RegisterModal() {

    const registerModal = useRegisterModalStore()

    const body = <div>Body content</div>

    const footer = <div>Footer content</div>

    return (
        <Modal title='Create an account' body={body} footer={footer} isOpen={registerModal.isOpen} onClose={registerModal.onClose} />
    )
}
