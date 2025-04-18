'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ScheduleForm } from './ScheduleForm';

export const ScheduleModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-lg p-6 max-w-4xl w-full shadow-lg overflow-y-auto max-h-[90vh]">
          <DialogTitle className="text-3xl text-center font-semibold mb-4 text-black">Schedule an Appointment</DialogTitle>
          <ScheduleForm onClose={onClose}/>
          <button onClick={onClose} className="mt-6 text-sm text-blue-600 underline">
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
