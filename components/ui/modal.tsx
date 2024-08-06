import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React, { ReactElement } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    body?: ReactElement;
    footer?: ReactElement;
    step?: number;
    totalSteps?: number;
}

const Modal = ({ isOpen, onClose, title, body, footer, step, totalSteps }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {`Step ${step} of ${totalSteps}`}
                        {body}
                    </DialogDescription>
                </DialogHeader>
                {footer && <DialogDescription>{footer}</DialogDescription>}
            </DialogContent>
        </Dialog>
    );
}

export default Modal;
