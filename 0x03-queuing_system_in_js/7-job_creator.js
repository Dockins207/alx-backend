#!/usr/bin/yarn dev
import { createQueue } from 'kue';

const jobs = [
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '58902390141',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 5982 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '5890239014',
    message: 'This is the code 4321 to verify your account',
  },
];

const queue = createQueue({ name: 'push_notification_code_2' });

for (const jobInfo of jobs) {
  const job = queue.create('push_notification_code_2', jobInfo);

  job
    .on('enqueue', () => {
      console.log('Notification job created:', job.id);
    })
    .on('complete', () => {
      console.log('Notification job', job.id, 'completed');
    })
    .on('failed', (err) => {
      console.log('Notification job', job.id, 'failed:', err.message || err.toString());
    })
    .on('progress', (progress, _data) => {
      console.log('Notification job', job.id, `${progress}% complete`);
    });
  job.save();
}
